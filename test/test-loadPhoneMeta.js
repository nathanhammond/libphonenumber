'use strict';

var assert = require('assert'),
    loadPhoneMeta = require('../dist/loadPhoneMeta');

describe('Generic metadata loading tests', function () {
    it('Should throw for invalid regionCodeArray parameter', function () {
        assert.throws(() => loadPhoneMeta(''), /Invalid/); // non-array
        assert.throws(() => loadPhoneMeta([]), /Invalid/); // empty array
        assert.throws(() => loadPhoneMeta(['BLAH']), /No phone metadata found/); // unsupported region
        assert.throws(() => loadPhoneMeta([1]), /No phone metadata found/); // unsupported region
        assert.throws(() => loadPhoneMeta(['GB', 'BLAH']), /No phone metadata found/); // unsupported region
    });

    it('Should load metadata for RU', function () {
        var meta = loadPhoneMeta(['RU']);
        assert.deepEqual(meta, { 'regionCodes': ['RU'], 'countryCodeToRegionCodeMap': { '7': ['RU'] }, 'countryToMetadata': { 'RU': [null, [null, null, '[3489]\\d{9}', null, null, null, null, null, null, [10]], [null, null, '(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}', null, null, null, '3011234567'], [null, null, '9\\d{9}', null, null, null, '9123456789'], [null, null, '80[04]\\d{7}', null, null, null, '8001234567'], [null, null, '80[39]\\d{7}', null, null, null, '8091234567'], [null, null, 'NA', null, null, null, null, null, null, [-1]], [null, null, 'NA', null, null, null, null, null, null, [-1]], [null, null, 'NA', null, null, null, null, null, null, [-1]], 'RU', 7, '810', '8', null, null, '8', null, '8~10', null, [[null, '(\\d{3})(\\d{2})(\\d{2})', '$1-$2-$3', ['[1-79]'], '$1', null, 1], [null, '([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['[34689]'], '8 ($1)', null, 1], [null, '(7\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '8 ($1)', null, 1]], [[null, '([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2-$3-$4', ['[34689]'], '8 ($1)', null, 1], [null, '(7\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '8 ($1)', null, 1]], [null, null, 'NA', null, null, null, null, null, null, [-1]], 1, null, [null, null, 'NA', null, null, null, null, null, null, [-1]], [null, null, 'NA', null, null, null, null, null, null, [-1]], null, null, [null, null, 'NA', null, null, null, null, null, null, [-1]]] } });
    });

    it('Should load metadata for EG, PE, and RU', function () {
        var meta = loadPhoneMeta(['EG', 'PE', 'RU']);
        assert.deepEqual(meta.regionCodes.concat().sort(), ['EG', 'PE', 'RU']); // note that order is not important
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '7': ['RU'],
            '20': ['EG'],
            '51': ['PE']
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata).sort(), ['EG', 'PE', 'RU']); // order is not important
    });

    it('Should load metadata for global exchanges using region code 001', function () {
        var meta = loadPhoneMeta(['001']);
        assert.deepEqual(meta.regionCodes, ['001']);
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '800': ['001'],
            '808': ['001'],
            '870': ['001'],
            '878': ['001'],
            '881': ['001'],
            '882': ['001'],
            '883': ['001'],
            '888': ['001'],
            '979': ['001'],
        });

        // note that countryToMetadata for 001 has calling codes, not region codes:
        assert.deepEqual(Object.keys(meta.countryToMetadata), ['800', '808', '870', '878', '881', '882', '883', '888', '979']); // order is not important
    });
});

describe('Dependent region metadata loading tests', function () {
    it('Should load metadata for US and CA when requesting just CA', function () {
        var meta = loadPhoneMeta(['CA']);
        assert.deepEqual(meta.regionCodes.concat().sort(), ['CA', 'US']); // note that order is not important
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '1': ['US', 'CA'] // US must be first
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata).sort(), ['CA', 'US']); // order is not important
    });

    it('Should load metadata for RU (only once) when requesting RU and KZ', function () { // KZ depends on RU metadata (shared calling code 7)
        var meta = loadPhoneMeta(['RU', 'KZ']);
        assert.deepEqual(meta.regionCodes.concat().sort(), ['KZ', 'RU']); // note that order is not important
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '7': ['RU', 'KZ'] // RU must be first
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata).sort(), ['KZ', 'RU']); // order is not important
    });

    it('Should load metadata for main countries when requesting dependent regions', function () {
        var meta = loadPhoneMeta([
            'GU', // depends on US
            'KZ', // depends on RU
            'VA', // depends on IT
            'GG', // depends on GB
            'SJ', // depends on NO
            'CX', // depends on AU
            'EH', // depends on MA
            'YT', // depends on RE
            'TA', // depends on SH
            'AX', // depends on FI
            'BL', // depends on GP
            'BQ', // depends on CW
        ]);
        assert.deepEqual(meta.regionCodes, [
            'GU', 'US',
            'KZ', 'RU',
            'VA', 'IT',
            'GG', 'GB',
            'SJ', 'NO',
            'CX', 'AU',
            'EH', 'MA',
            'YT', 'RE',
            'TA', 'SH',
            'AX', 'FI',
            'BL', 'GP',
            'BQ', 'CW'
        ]); // note that order is not important
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '1': ['US', 'GU'],
            '7': ['RU', 'KZ'],
            '39': ['IT', 'VA'],
            '44': ['GB', 'GG'],
            '47': ['NO', 'SJ'],
            '61': ['AU', 'CX'],
            '212': ['MA', 'EH'],
            '262': ['RE', 'YT'],
            '290': ['SH', 'TA'],
            '358': ['FI', 'AX'],
            '590': ['GP', 'BL'],
            '599': ['CW', 'BQ']
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata), [
            'GU', 'US',
            'KZ', 'RU',
            'VA', 'IT',
            'GG', 'GB',
            'SJ', 'NO',
            'CX', 'AU',
            'EH', 'MA',
            'YT', 'RE',
            'TA', 'SH',
            'AX', 'FI',
            'BL', 'GP',
            'BQ', 'CW'
        ]); // order is not important

    });
});

describe('Copied region metadata loading tests (PN, XK, AN)', function () {
    it('Should load copied metadata for PN', function () {

        // PN metadata is copied from NZ
        var meta = loadPhoneMeta(['PN']);
        assert.deepEqual(meta.regionCodes.concat().sort(), ['NZ', 'PN']); // NZ is also in regionCodes because it's the main country for the calling code
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '64': ['NZ', 'PN']
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata).sort(), ['NZ', 'PN']);
        var metaPN = meta.countryToMetadata.PN,
            metaNZ = meta.countryToMetadata.NZ,
            metaPNtoNZ = JSON.parse(
                JSON.stringify(metaPN).replace('"PN"', '"NZ"')
            );
        assert.deepEqual(metaPNtoNZ, metaNZ, 'PN metadata was not properly copied from NZ');
    });

    it('Should load copied metadata for XK', function () {

        // XK metadata is copied from MC
        var meta = loadPhoneMeta(['XK']);
        assert.deepEqual(meta.regionCodes.concat().sort(), ['MC', 'XK']); // MC is also in regionCodes because it's the main country for the calling code
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '377': ['MC', 'XK']
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata).sort(), ['MC', 'XK']);
        var metaXK = meta.countryToMetadata.XK,
            metaMC = meta.countryToMetadata.MC,
            metaXKtoMC = JSON.parse(
                JSON.stringify(metaXK).replace('"XK"', '"MC"')
            );
        assert.deepEqual(metaXKtoMC, metaMC, 'XK metadata was not properly copied from MC');
    });

    it('Should load copied metadata for AN', function () {

        // AN metadata is copied from BQ (which depends on CW)
        var meta = loadPhoneMeta(['AN']);
        assert.deepEqual(meta.regionCodes.concat().sort(), ['AN', 'CW']);
        assert.deepEqual(meta.countryCodeToRegionCodeMap, {
            '599': ['CW', 'AN'] // CW is main country for 599
        });
        assert.deepEqual(Object.keys(meta.countryToMetadata).sort(), ['AN', 'CW']);

        var metaAN = meta.countryToMetadata.AN,
            metaBQ = loadPhoneMeta(['BQ']).countryToMetadata.BQ,  // load BQ metadata separately, since it's not included here
            metaANtoBQ = JSON.parse(
                JSON.stringify(metaAN).replace('"AN"', '"BQ"')
            );
        assert.deepEqual(metaANtoBQ, metaBQ, 'AN metadata was not properly copied from BQ');
    });
});

