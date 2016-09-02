(function(){for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,m=["String","prototype","repeat"],n=0;n<m.length-1;n++){var p=m[n];p in l||(l[p]={});l=l[p]}
var ba=m[m.length-1],ca=l[ba],da=ca?ca:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};da!=ca&&null!=da&&aa(l,ba,{configurable:!0,writable:!0,value:da});var ea=this;function q(a){return"string"==typeof a}
function r(a,b){var c=a.split("."),d=ea;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function t(a,b){function c(){}c.prototype=b.prototype;a.$=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.w=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ga=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
function ha(a,b){a.sort(b||ia)}function ia(a,b){return a>b?1:a<b?-1:0};function ja(a,b){this.a=a;this.h=!!b.m;this.c=b.b;this.l=b.type;this.j=!1;switch(this.c){case ka:case la:case ma:case na:case oa:case pa:case qa:this.j=!0}this.g=b.defaultValue}var qa=1,pa=2,ka=3,la=4,ma=6,na=16,oa=18;function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function sa(a,b){this.c=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.a]=d}}function ta(a){a=ra(a.a);ha(a,function(a,c){return a.a-c.a});return a};function u(){this.c={};this.g=this.f().a;this.a=this.h=null}u.prototype.has=function(a){return v(this,a.a)};u.prototype.get=function(a,b){return w(this,a.a,b)};u.prototype.set=function(a,b){y(this,a.a,b)};
function ua(a,b){for(var c=ta(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(v(b,f)){a.a&&delete a.a[e.a];var g=11==e.c||10==e.c;if(e.h)for(var e=z(b,f)||[],h=0;h<e.length;h++){var k=a,x=f,P=g?e[h].clone():e[h];k.c[x]||(k.c[x]=[]);k.c[x].push(P);k.a&&delete k.a[x]}else e=z(b,f),g?(g=z(a,f))?ua(g,e):y(a,f,e.clone()):y(a,f,e)}}}u.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.c={},a.a&&(a.a={}),ua(a,this));return a};function v(a,b){return null!=a.c[b]}
function z(a,b){var c=a.c[b];if(null==c)return null;if(a.h){if(!(b in a.a)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.a(e,c[g]);c=f}else c=d.a(e,c);return a.a[b]=c}return a.a[b]}return c}function w(a,b,c){var d=z(a,b);return a.g[b].h?d[c||0]:d}function A(a,b){var c;if(v(a,b))c=w(a,b,void 0);else a:{c=a.g[b];if(void 0===c.g){var d=c.l;if(d===Boolean)c.g=!1;else if(d===Number)c.g=0;else if(d===String)c.g=c.j?"0":"";else{c=new d;break a}}c=c.g}return c}
function y(a,b,c){a.c[b]=c;a.a&&(a.a[b]=c)}function va(a,b){delete a.c[b];a.a&&delete a.a[b]}function B(a,b){var c=[],d;for(d in b)0!=d&&c.push(new ja(d,b[d]));return new sa(a,c)};function C(){}C.prototype.c=function(a){new a.c;throw Error("Unimplemented");};C.prototype.a=function(a,b){if(11==a.c||10==a.c)return b instanceof u?b:this.c(a.l.prototype.f(),b);if(14==a.c){if(q(b)&&wa.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.j)return b;c=a.l;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&q(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||wa.test(b)))return Number(b);return b};var wa=/^-?[0-9]+$/;function xa(){}t(xa,C);xa.prototype.c=function(a,b){var c=new a.c;c.h=this;c.c=b;c.a={};return c};function ya(){}t(ya,xa);ya.prototype.a=function(a,b){return 8==a.c?!!b:C.prototype.a.apply(this,arguments)};function D(a,b){null!=a&&this.a.apply(this,arguments)}D.prototype.c="";D.prototype.set=function(a){this.c=""+a};D.prototype.a=function(a,b,c){this.c+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};D.prototype.toString=function(){return this.c};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function E(){u.call(this)}var za;t(E,u);function F(){u.call(this)}var Aa;t(F,u);function G(){u.call(this)}var Ba;t(G,u);
E.prototype.f=function(){za||(za=B(E,{0:{name:"NumberFormat",i:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",m:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return za};E.ctor=E;E.ctor.f=E.prototype.f;
F.prototype.f=function(){Aa||(Aa=B(F,{0:{name:"PhoneNumberDesc",i:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},3:{name:"possible_number_pattern",b:9,type:String},6:{name:"example_number",b:9,type:String},7:{name:"national_number_matcher_data",b:12,type:String},8:{name:"possible_number_matcher_data",b:12,type:String}}));return Aa};F.ctor=F;F.ctor.f=F.prototype.f;
G.prototype.f=function(){Ba||(Ba=B(G,{0:{name:"PhoneMetadata",i:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:F},2:{name:"fixed_line",b:11,type:F},3:{name:"mobile",b:11,type:F},4:{name:"toll_free",b:11,type:F},5:{name:"premium_rate",b:11,type:F},6:{name:"shared_cost",b:11,type:F},7:{name:"personal_number",b:11,type:F},8:{name:"voip",b:11,type:F},21:{name:"pager",b:11,type:F},25:{name:"uan",b:11,type:F},27:{name:"emergency",b:11,type:F},28:{name:"voicemail",b:11,type:F},24:{name:"no_international_dialling",
b:11,type:F},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,type:Boolean},19:{name:"number_format",
m:!0,b:11,type:E},20:{name:"intl_number_format",m:!0,b:11,type:E},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return Ba};G.ctor=G;G.ctor.f=G.prototype.f;function H(){u.call(this)}var Ca;t(H,u);var Da={v:1,u:5,s:10,o:20};
H.prototype.f=function(){Ca||(Ca=B(H,{0:{name:"PhoneNumber",i:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:1,type:Da},7:{name:"preferred_domestic_carrier_code",b:9,type:String}}));
return Ca};H.ctor=H;H.ctor.f=H.prototype.f;var I={505:["NI"]},Ea={NI:[null,[null,null,"[12578]\\d{7}","\\d{8}"],[null,null,"2\\d{7}","\\d{8}"],[null,null,"5(?:5[0-7]\\d{5}|[78]\\d{6})|7[5-8]\\d{6}|8\\d{7}","\\d{8}"],[null,null,"1800\\d{4}","\\d{8}"],[null,null,"NA","NA"],[null,null,"NA","NA"],[null,null,"NA","NA"],[null,null,"NA","NA"],"NI",505,"00",null,null,null,null,null,null,null,[[null,"(\\d{4})(\\d{4})","$1 $2"]],null,[null,null,"NA","NA"],null,null,[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function J(){this.a={}}J.c=function(){return J.a?J.a:J.a=new J};
var K={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Fa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","+":"+","*":"*"},Ga={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",
C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ha=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,L=RegExp("^[+\uff0b]+"),Ia=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ja=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Ka=/[\\\/] *x/,La=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Ma=/(?:.*?[A-Za-z]){3}.*/,Na=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Oa=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Pa=/(\$\d)/,Qa=/\$NP/,Ra=/\$FG/,Sa=/\$CC/;function Ta(a){var b=a.search(Ja);0<=b?(a=a.substring(b),a=a.replace(La,""),b=a.search(Ka),0<=b&&(a=a.substring(0,b))):a="";return a}function Ua(a){return 2>a.length?!1:M(Oa,a)}function Va(a){return M(Ma,a)?N(a,Ga):N(a,K)}function Wa(a){var b=Va(a.toString());a.c="";a.a(b)}function Xa(){return ga(Object.keys(Ea),function(a){return isNaN(a)})}
function N(a,b){for(var c=new D,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function O(a){return null!=a&&isNaN(a)&&a.toUpperCase()in Ea}function Q(a,b,c){if(0==w(b,2)&&v(b,5)){var d=A(b,5);if(0<d.length)return d}var d=A(b,1),e=R(b);if(0==c)return S(d,0,e,"");if(!(d in I))return e;a=T(a,d,U(d));b=Ya(b,a,c);e=Za(e,a,c);return S(d,c,e,b)}function T(a,b,c){return"001"==c?V(a,""+b):V(a,c)}
function $a(a,b,c){if(!O(c))return Q(a,b,1);var d=A(b,1),e=R(b);if(!(d in I))return e;if(1==d){if(null!=c&&0<=fa(I[1],c.toUpperCase()))return d+" "+Q(a,b,2)}else if(d==ab(a,c))return Q(a,b,2);var f=V(a,c),g=A(f,11);c="";M(Ha,g)?c=g:v(f,17)&&(c=A(f,17));a=T(a,d,U(d));e=Za(e,a,1);b=Ya(b,a,1);return 0<c.length?c+" "+d+" "+e+b:S(d,1,e,b)}function R(a){var b=""+w(a,2);return v(a,4)&&w(a,4)?Array(A(a,8)+1).join("0")+b:b}
function S(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function Za(a,b,c){b=(z(b,20)||[]).length&&2!=c?z(b,20)||[]:z(b,19)||[];return(b=W(b,a))?bb(a,b,c,void 0):a}function W(a,b){for(var c,d=a.length,e=0;e<d;++e){c=a[e];var f=c.g[3].h?v(c,3)?c.c[3].length:0:v(c,3)?1:0;if(!f||!b.search(w(c,3,f-1)))if(f=new RegExp(w(c,1)),M(f,b))return c}return null}
function bb(a,b,c,d){var e=A(b,2),f=new RegExp(w(b,1)),g=A(b,5);2==c&&null!=d&&0<d.length&&0<g.length?(b=g.replace(Sa,d),e=e.replace(Pa,b),a=a.replace(f,e)):(b=A(b,4),a=2==c&&null!=b&&0<b.length?a.replace(f,e.replace(Pa,b)):a.replace(f,e));3==c&&(a=a.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),a=a.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+",
"g"),"-"));return a}function Ya(a,b,c){return v(a,3)&&w(a,3).length?3==c?";ext="+w(a,3):v(b,13)?w(b,13)+A(a,3):" ext. "+A(a,3):""}function cb(a,b){return X(a,w(b,1))?X(a,w(b,5))?4:X(a,w(b,4))?3:X(a,w(b,6))?5:X(a,w(b,8))?6:X(a,w(b,7))?7:X(a,w(b,21))?8:X(a,w(b,25))?9:X(a,w(b,28))?10:X(a,w(b,2))?w(b,18)||X(a,w(b,3))?2:0:!w(b,18)&&X(a,w(b,3))?1:-1:-1}function V(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(!c){c=Ea[b];if(!c)return null;c=(new ya).c(G.f(),c);a.a[b]=c}return c}
function X(a,b){return M(A(b,3),a)&&M(A(b,2),a)}function db(a,b){var c=eb(a,b);return fb(a,b,c)}function fb(a,b,c){var d=A(b,1),e=T(a,d,c);if(!e||"001"!=c&&d!=ab(a,c))return!1;a=R(b);return-1!=cb(a,e)}function eb(a,b){if(!b)return null;var c=A(b,1);if(c=I[c])if(1==c.length)c=c[0];else a:{for(var d=R(b),e,f=c.length,g=0;g<f;g++){e=c[g];var h=V(a,e);if(v(h,23)){if(!d.search(w(h,23))){c=e;break a}}else if(-1!=cb(d,h)){c=e;break a}}c=null}else c=null;return c}function U(a){return(a=I[a])?a[0]:"ZZ"}
function ab(a,b){var c=V(a,b);if(!c)throw"Invalid region code: "+b;return A(c,10)}function gb(a,b){return M(a,b)?0:b.search(a)?2:3}function hb(a){var b=Y,c=R(a);a=A(a,1);if(!(a in I))return 1;b=A(w(T(b,a,U(a)),1),3);return gb(b,c)}
function ib(a,b,c,d,e){if(!a.length)return 0;a=new D(a);var f;b&&(f=w(b,11));null==f&&(f="NonMatch");var g=a.toString();if(g.length)if(L.test(g))g=g.replace(L,""),a.c="",a.a(Va(g)),f=1;else{g=new RegExp(f);Wa(a);f=a.toString();if(f.search(g))f=!1;else{var g=f.match(g)[0].length,h=f.substring(g).match(Ia);h&&null!=h[1]&&0<h[1].length&&"0"==N(h[1],K)?f=!1:(a.c="",a.a(f.substring(g)),f=!0)}f=f?5:20}else f=20;d&&y(e,6,f);if(20!=f){if(2>=a.c.length)throw"Phone number too short after IDD";a:{d=a.toString();
if(d.length&&"0"!=d.charAt(0))for(b=d.length,f=1;3>=f&&f<=b;++f)if(a=parseInt(d.substring(0,f),10),a in I){c.a(d.substring(f));c=a;break a}c=0}if(c)return y(e,1,c),c;throw"Invalid country calling code";}if(b&&(f=A(b,10),g=""+f,h=a.toString(),!h.lastIndexOf(g,0))){var k=new D(h.substring(g.length)),h=w(b,1),g=new RegExp(A(h,2));jb(k,b,null);b=k.toString();h=A(h,3);if(!M(g,a.toString())&&M(g,b)||3==gb(h,a.toString()))return c.a(b),d&&y(e,6,10),y(e,1,f),f}y(e,1,0);return 0}
function jb(a,b,c){var d=a.toString(),e=d.length,f=w(b,15);if(e&&null!=f&&f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){var f=new RegExp(A(w(b,1),2)),h=M(f,d),k=e.length-1;b=w(b,16);if(null!=b&&b.length&&null!=e[k]&&e[k].length){if(d=d.replace(g,b),!h||M(f,d))c&&0<k&&c.a(e[1]),a.set(d)}else if(!h||M(f,d.substring(e[0].length)))c&&0<k&&null!=e[k]&&c.a(e[1]),a.set(d.substring(e[0].length))}}}
function Z(a,b){var c=Y;if(!O(b)&&0<a.length&&"+"!=a.charAt(0))throw"Invalid country calling code";return kb(c,a,b,!0)}
function kb(a,b,c,d){if(null==b)throw"The string supplied did not seem to be a phone number";if(250<b.length)throw"The string supplied is too long to be a phone number";var e=new D,f=b.indexOf(";phone-context=");if(0<f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Ta(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(e.c="",e.a(f.substring(0,g)));if(!Ua(e.toString()))throw"The string supplied did not seem to be a phone number";
f=e.toString();if(!(O(c)||null!=f&&0<f.length&&L.test(f)))throw"Invalid country calling code";f=new H;d&&y(f,5,b);a:{b=e.toString();g=b.search(Na);if(0<=g&&Ua(b.substring(0,g)))for(var h=b.match(Na),k=h.length,x=1;x<k;++x)if(null!=h[x]&&0<h[x].length){e.c="";e.a(b.substring(0,g));b=h[x];break a}b=""}0<b.length&&y(f,3,b);g=V(a,c);b=new D;h=0;k=e.toString();try{h=ib(k,g,b,d,f)}catch(P){if("Invalid country calling code"==P&&L.test(k)){if(k=k.replace(L,""),h=ib(k,g,b,d,f),!h)throw P;}else throw P;}h?
(e=U(h),e!=c&&(g=T(a,h,e))):(Wa(e),b.a(e.toString()),null!=c?(h=A(g,10),y(f,1,h)):d&&va(f,6));if(2>b.c.length)throw"The string supplied is too short to be a phone number";g&&(a=new D,c=new D(b.toString()),jb(c,g,a),e=c.toString(),g=A(w(g,1),3),2!=gb(g,e)&&(b=c,d&&y(f,7,a.toString())));d=b.toString();a=d.length;if(2>a)throw"The string supplied is too short to be a phone number";if(17<a)throw"The string supplied is too long to be a phone number";if(1<d.length&&"0"==d.charAt(0)){y(f,4,!0);for(a=1;a<
d.length-1&&"0"==d.charAt(a);)a++;1!=a&&y(f,8,a)}y(f,2,parseInt(d,10));return f}function M(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};var Y=J.c();r("phoneUtils.countryCodeToRegionCodeMap",function(){return I});r("phoneUtils.isPossibleNumber",function(a,b){var c=Z(a,b||"us");return 0==hb(c)});r("phoneUtils.isPossibleNumberWithReason",function(a,b){var c=Z(a,b||"us");return hb(c)});r("phoneUtils.isValidNumber",function(a,b){var c=Z(a,b||"us");return db(Y,c)});r("phoneUtils.isValidNumberForRegion",function(a,b){b=b||"us";var c=Z(a,b);return fb(Y,c,b)});
r("phoneUtils.getCountryCodeForRegion",function(a){a=a||"us";var b=Y;return O(a)?ab(b,a):0});r("phoneUtils.getRegionCodeForNumber",function(a,b){var c=Z(a,b||"us");return eb(Y,c)});
r("phoneUtils.getNumberType",function(a,b){var c,d;d=Z(a,b||"us");var e=Y,f=eb(e,d);(e=T(e,A(d,1),f))?(d=R(d),d=cb(d,e)):d=-1;switch(d){case 0:c="FIXED_LINE";break;case 1:c="MOBILE";break;case 2:c="FIXED_LINE_OR_MOBILE";break;case 3:c="TOLL_FREE";break;case 4:c="PREMIUM_RATE";break;case 5:c="SHARED_COST";break;case 6:c="VOIP";break;case 7:c="PERSONAL_NUMBER";break;case 8:c="PAGER";break;case 9:c="UAN";break;case -1:c="UNKNOWN"}return c});r("phoneUtils.getSupportedRegions",function(){return Xa()});
r("phoneUtils.formatE164",function(a,b){var c=Z(a,b||"us");return Q(Y,c,0)});r("phoneUtils.formatNational",function(a,b){var c=Z(a,b||"us");return Q(Y,c,2)});r("phoneUtils.formatInternational",function(a,b){var c=Z(a,b||"us");return Q(Y,c,1)});
r("phoneUtils.formatInOriginalFormat",function(a,b){b=b||"us";var c;c=Z(a,b);var d=b,e=Y,f;if(f=v(c,5)){if(f=v(c,4))f=A(c,1),f=T(e,f,U(f)),f=!(f&&A(f,26));if(!f){f=A(c,1);if(f=T(e,f,U(f))){var g=R(c);f=!!W(z(f,19)||[],g)}else f=!1;f=!f}}if(f)c=A(c,5);else if(v(c,6)){switch(w(c,6)){case 1:e=Q(e,c,1);break;case 5:e=$a(e,c,d);break;case 10:e=Q(e,c,1).substring(1);break;default:f=U(A(c,1));var h;(d=V(e,f))?(d=A(d,12),h=d.length?d=d.replace("~",""):null):h=null;d=Q(e,c,2);if(null!=h&&h.length){var k;b:{g=
A(c,5);g=N(g,K);if(!g.lastIndexOf(h,0))try{k=db(e,kb(e,g.substring(h.length),f,!1));break b}catch(x){}k=!1}if(k)e=d;else if(k=V(e,f),f=R(c),k=W(z(k,19)||[],f))if(f=A(k,4),g=f.indexOf("$1"),0>=g)e=d;else if(f=f.substring(0,g),f=N(f,K),f.length)if(k=k.clone(),va(k,4),f=[k],k=A(c,1),d=R(c),k in I){e=T(e,k,U(k));if(g=W(f,d))f=g.clone(),g=A(g,4),0<g.length&&(h=A(e,12),0<h.length?(g=g.replace(Qa,h).replace(Ra,"$1"),y(f,4,g)):va(f,4)),d=bb(d,f,2);e=Ya(c,e,2);e=S(k,2,d,e)}else e=d;else e=d;else e=d}else e=
d}c=A(c,5);null!=e&&0<c.length&&(k=N(e,Fa),d=N(c,Fa),k!=d&&(e=c));c=e}else c=Q(e,c,2);return c});r("phoneUtils.formatOutOfCountryCallingNumber",function(a,b,c){if(c)return a=Z(a,b),$a(Y,a,c)});})();
