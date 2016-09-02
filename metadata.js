#!/usr/bin/env node

/*
Ported from work by Marco Faustinelli (contacts@faustinelli.net)
https://gist.github.com/Muzietto/62c3fc5a1c285f091654
*/

var fs = require('fs');
var vm = require('vm');

var outpath = process.argv[3];

var metadata = fs.readFileSync(process.argv[2]);
var context = { goog: { provide: function() {} }, i18n: { phonenumbers: { metadata: {} } } };
vm.runInNewContext(metadata, context);

function writeFile(regionCode, countryToMetadata, countryCodeToRegionCodeMap) {
  var output = ["goog.provide('i18n.phonenumbers.metadata')"];
  output.push("i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = " + JSON.stringify(countryCodeToRegionCodeMap));
  output.push("i18n.phonenumbers.metadata.countryToMetadata = " + JSON.stringify(countryToMetadata));

  return fs.writeFileSync(outpath + 'metadata_'+regionCode+'.js', output.join(';\n'));
}

var regionCodeToCountryCodeMap = {}; // construct map from territory codes ('region code') to country calling codes ('country code')
for (var countryCode in context.i18n.phonenumbers.metadata.countryCodeToRegionCodeMap) {
  context.i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[countryCode].forEach(function(regionCode) {
    if (!regionCodeToCountryCodeMap[regionCode]) {
      regionCodeToCountryCodeMap[regionCode] = [];
    }
    regionCodeToCountryCodeMap[regionCode].push(countryCode);
  });
}

// Grab the appropriate data, which includes the metadata for:
//   - the region (e.g. CC)
//   - the main country for the same calling code (e.g. AU, which shares calling code 61 with CC)
//
// Note: 'countryCode' = country calling code (e.g. 61 for AU)
//       'regionCode' = ISO 3166-1 alpha-2 (e.g. AU)

var countryToMetadata, countryCodeToRegionCodeMap;
for (var regionCode in context.i18n.phonenumbers.metadata.countryToMetadata) {
  if (!Number.isNaN(parseInt(regionCode))) { continue; }

  var countryCode = regionCodeToCountryCodeMap[regionCode],
     // get main country (first in the array) for the shared country calling code and include its metadata
    mainCountryForCode = context.i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[countryCode][0],
    regionCodesToAdd = (regionCode === mainCountryForCode) ? [regionCode] : [mainCountryForCode, regionCode];

  countryCodeToRegionCodeMap = {};
  countryCodeToRegionCodeMap[countryCode] = regionCodesToAdd; // populate country code to region code map

  // add metadata for each relevant region code
  countryToMetadata = {};
  regionCodesToAdd.forEach(function (regionCodeToAdd) {
    countryToMetadata[regionCodeToAdd] = context.i18n.phonenumbers.metadata.countryToMetadata[regionCodeToAdd];
  });

  writeFile(regionCode, countryToMetadata, countryCodeToRegionCodeMap);
}

// Handle the global exchanges.
countryToMetadata = {};
countryCodeToRegionCodeMap = {};
regionCodeToCountryCodeMap['001'].forEach(function(countryCode) {
  countryToMetadata[countryCode] = context.i18n.phonenumbers.metadata.countryToMetadata[countryCode];
  countryCodeToRegionCodeMap[countryCode] = ['001'];
});

writeFile('001', countryToMetadata, countryCodeToRegionCodeMap);

fs.writeFileSync(outpath + 'regioncodes.properties', 'regioncodes=' + Object.keys(regionCodeToCountryCodeMap));
