(function(){var aa=this;function k(a){return"string"==typeof a}function m(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function n(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var p=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ba=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=k(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l)}return e};
function ca(a,b){a.sort(b||da)}function da(a,b){return a>b?1:a<b?-1:0};function ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function fa(a,b){this.a=a;this.h=!!b.i;this.c=b.b;this.m=b.type;this.l=!1;switch(this.c){case ga:case ha:case ia:case ja:case ka:case la:case ma:this.l=!0}this.g=b.defaultValue}var ma=1,la=2,ga=3,ha=4,ia=6,ja=16,ka=18;function na(a,b){this.c=a;this.a={};for(a=0;a<b.length;a++){var c=b[a];this.a[c.a]=c}}function oa(a){a=ea(a.a);ca(a,function(a,c){return a.a-c.a});return a};function q(){this.c={};this.g=this.f().a;this.a=this.h=null}q.prototype.has=function(a){return r(this,a.a)};q.prototype.get=function(a,b){return t(this,a.a,b)};q.prototype.set=function(a,b){u(this,a.a,b)};
function pa(a,b){for(var c=oa(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(r(b,f)){a.a&&delete a.a[e.a];var g=11==e.c||10==e.c;if(e.h)for(var e=v(b,f),h=0;h<e.length;h++){var l=a,z=f,O=g?e[h].clone():e[h];l.c[z]||(l.c[z]=[]);l.c[z].push(O);l.a&&delete l.a[z]}else e=w(b,f),g?(g=w(a,f))?pa(g,e):u(a,f,e.clone()):u(a,f,e)}}}q.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.c={},a.a&&(a.a={}),pa(a,this));return a};function r(a,b){return null!=a.c[b]}
function w(a,b){var c=a.c[b];if(null==c)return null;if(a.h){if(!(b in a.a)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.c(e,c[g]);c=f}else c=d.c(e,c);return a.a[b]=c}return a.a[b]}return c}function t(a,b,c){var d=w(a,b);return a.g[b].h?d[c||0]:d}function x(a,b){if(r(a,b))a=t(a,b,void 0);else a:{a=a.g[b];if(void 0===a.g)if(b=a.m,b===Boolean)a.g=!1;else if(b===Number)a.g=0;else if(b===String)a.g=a.l?"0":"";else{a=new b;break a}a=a.g}return a}
function v(a,b){return w(a,b)||[]}function y(a,b){return a.g[b].h?r(a,b)?a.c[b].length:0:r(a,b)?1:0}function u(a,b,c){a.c[b]=c;a.a&&(a.a[b]=c)}function qa(a,b){delete a.c[b];a.a&&delete a.a[b]}function A(a,b){var c=[],d;for(d in b)0!=d&&c.push(new fa(d,b[d]));return new na(a,c)};function B(){}B.prototype.a=function(a){new a.c;throw Error("Unimplemented");};B.prototype.c=function(a,b){if(11==a.c||10==a.c)return b instanceof q?b:this.a(a.m.prototype.f(),b);if(14==a.c)return k(b)&&ra.test(b)&&(a=Number(b),0<a)?a:b;if(!a.l)return b;a=a.m;if(a===String){if("number"==typeof b)return String(b)}else if(a===Number&&k(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||ra.test(b)))return Number(b);return b};var ra=/^-?[0-9]+$/;function sa(){}n(sa,B);sa.prototype.a=function(a,b){a=new a.c;a.h=this;a.c=b;a.a={};return a};function C(){}n(C,sa);C.prototype.c=function(a,b){return 8==a.c?!!b:B.prototype.c.apply(this,arguments)};C.prototype.a=function(a,b){return C.o.a.call(this,a,b)};function D(a,b){null!=a&&this.a.apply(this,arguments)}D.prototype.c="";D.prototype.set=function(a){this.c=""+a};D.prototype.a=function(a,b,c){this.c+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};D.prototype.toString=function(){return this.c};/*

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
function E(){q.call(this)}n(E,q);var ta=null;function F(){q.call(this)}n(F,q);var ua=null;function G(){q.call(this)}n(G,q);var va=null;
E.prototype.f=function(){var a=ta;a||(ta=a=A(E,{0:{name:"NumberFormat",j:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",i:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return a};E.f=E.prototype.f;
F.prototype.f=function(){var a=ua;a||(ua=a=A(F,{0:{name:"PhoneNumberDesc",j:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},3:{name:"possible_number_pattern",b:9,type:String},9:{name:"possible_length",i:!0,b:5,type:Number},10:{name:"possible_length_local_only",i:!0,b:5,type:Number},6:{name:"example_number",b:9,type:String},7:{name:"national_number_matcher_data",b:12,type:String},8:{name:"possible_number_matcher_data",b:12,type:String}}));return a};F.f=F.prototype.f;
G.prototype.f=function(){var a=va;a||(va=a=A(G,{0:{name:"PhoneMetadata",j:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:F},2:{name:"fixed_line",b:11,type:F},3:{name:"mobile",b:11,type:F},4:{name:"toll_free",b:11,type:F},5:{name:"premium_rate",b:11,type:F},6:{name:"shared_cost",b:11,type:F},7:{name:"personal_number",b:11,type:F},8:{name:"voip",b:11,type:F},21:{name:"pager",b:11,type:F},25:{name:"uan",b:11,type:F},27:{name:"emergency",b:11,type:F},28:{name:"voicemail",b:11,type:F},
24:{name:"no_international_dialling",b:11,type:F},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,
type:Boolean},19:{name:"number_format",i:!0,b:11,type:E},20:{name:"intl_number_format",i:!0,b:11,type:E},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return a};G.f=G.prototype.f;function H(){q.call(this)}var wa;n(H,q);var xa={w:1,v:5,u:10,s:20};
H.prototype.f=function(){wa||(wa=A(H,{0:{name:"PhoneNumber",j:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:1,type:xa},7:{name:"preferred_domestic_carrier_code",b:9,type:String}}));
return wa};H.ctor=H;H.ctor.f=H.prototype.f;var I={375:["BY"]},ya={BY:[null,[null,null,"[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}",null,null,null,null,null,null,[6,7,8,9,10,11],[5]],[null,null,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",null,null,null,null,null,null,[9],[5,6,7]],[null,null,"(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}",null,null,null,null,null,null,[9]],[null,null,"8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}"],
[null,null,"(?:810|902)\\d{7}",null,null,null,null,null,null,[10]],[null,null,"NA",null,null,null,null,null,null,[-1]],[null,null,"NA",null,null,null,null,null,null,[-1]],[null,null,"249\\d{6}",null,null,null,null,null,null,[9]],"BY",375,"810","8",null,null,"8?0?",null,"8~10",null,[[null,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],[null,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])",
"1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],[null,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],[null,"([89]\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1"],[null,"(82\\d)(\\d{4})(\\d{4})","$1 $2 $3",["82"],"8 $1"],[null,"(800)(\\d{3})","$1 $2",["800"],"8 $1"],[null,"(800)(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],
"8 $1"]],null,[null,null,"NA",null,null,null,null,null,null,[-1]],null,null,[null,null,"8(?:0[13]|10|20\\d)\\d{7}|800\\d{3,7}|902\\d{7}"],[null,null,"NA",null,null,null,null,null,null,[-1]],null,null,[null,null,"NA",null,null,null,null,null,null,[-1]]]};/*

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
function J(){this.a={}}J.a=void 0;J.c=function(){return J.a?J.a:J.a=new J};
var K={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},za={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","+":"+","*":"*","#":"#"},Aa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",
B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ba=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,L=/^[+\uff0b]+/,Ca=/([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,Da=/[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,Ea=/[\\\/] *x/,Fa=/[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,Ga=/(?:.*?[A-Za-z]){3}.*/,Ha=/(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
Ia=/^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
Ja=/(\$\d)/,Ka=/\$NP/,La=/\$FG/,Ma=/\$CC/;function Na(a){var b=a.search(Da);0<=b?(a=a.substring(b),a=a.replace(Fa,""),b=a.search(Ea),0<=b&&(a=a.substring(0,b))):a="";return a}function Oa(a){return 2>a.length?!1:M(Ia,a)}function Pa(a){return M(Ga,a)?N(a,Aa):N(a,K)}function Qa(a){var b=Pa(a.toString());a.c="";a.a(b)}function Ra(){return ba(Object.keys(ya),function(a){return isNaN(a)})}function Sa(a){return!!a&&(1!=y(a,9)||-1!=v(a,9)[0])}
function N(a,b){for(var c=new D,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function P(a){return null!=a&&isNaN(a)&&a.toUpperCase()in ya}function Q(a,b,c){if(0==t(b,2)&&r(b,5)){var d=x(b,5);if(0<d.length)return d}var d=x(b,1),e=R(b);if(0==c)return S(d,0,e,"");if(!(d in I))return e;a=T(a,d,U(d));b=Ta(b,a,c);e=Ua(e,a,c);return S(d,c,e,b)}function T(a,b,c){return"001"==c?V(a,""+b):V(a,c)}
function Va(a,b,c){if(!P(c))return Q(a,b,1);var d=x(b,1),e=R(b);if(!(d in I))return e;if(1==d){if(null!=c&&0<=p(I[1],c.toUpperCase()))return d+" "+Q(a,b,2)}else if(d==Wa(a,c))return Q(a,b,2);var f=V(a,c),g=x(f,11);c="";M(Ba,g)?c=g:r(f,17)&&(c=x(f,17));a=T(a,d,U(d));e=Ua(e,a,1);b=Ta(b,a,1);return 0<c.length?c+" "+d+" "+e+b:S(d,1,e,b)}function R(a){var b=""+t(a,2);return r(a,4)&&t(a,4)&&0<x(a,8)?Array(x(a,8)+1).join("0")+b:b}
function S(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function Ua(a,b,c){b=v(b,20).length&&2!=c?v(b,20):v(b,19);return(b=W(b,a))?Xa(a,b,c,void 0):a}function W(a,b){for(var c,d=a.length,e=0;e<d;++e){c=a[e];var f=y(c,3);if(!f||!b.search(t(c,3,f-1)))if(f=new RegExp(t(c,1)),M(f,b))return c}return null}
function Xa(a,b,c,d){var e=x(b,2),f=new RegExp(t(b,1)),g=x(b,5);2==c&&null!=d&&0<d.length&&0<g.length?(b=g.replace(Ma,d),e=e.replace(Ja,b),a=a.replace(f,e)):(b=x(b,4),a=2==c&&null!=b&&0<b.length?a.replace(f,e.replace(Ja,b)):a.replace(f,e));3==c&&(a=a.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,""),a=a.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,
"-"));return a}function Ta(a,b,c){return r(a,3)&&t(a,3).length?3==c?";ext="+t(a,3):r(b,13)?t(b,13)+x(a,3):" ext. "+x(a,3):""}function Ya(a,b){switch(b){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}
function Za(a,b){return X(a,t(b,1))?X(a,t(b,5))?4:X(a,t(b,4))?3:X(a,t(b,6))?5:X(a,t(b,8))?6:X(a,t(b,7))?7:X(a,t(b,21))?8:X(a,t(b,25))?9:X(a,t(b,28))?10:X(a,t(b,2))?t(b,18)||X(a,t(b,3))?2:0:!t(b,18)&&X(a,t(b,3))?1:-1:-1}function V(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(!c){c=ya[b];if(!c)return null;c=(new C).a(G.f(),c);a.a[b]=c}return c}function X(a,b){var c=a.length;return 0<y(b,9)&&-1==p(v(b,9),c)?!1:M(x(b,2),a)}function $a(a,b){var c=ab(a,b);return bb(a,b,c)}
function bb(a,b,c){var d=x(b,1),e=T(a,d,c);if(!e||"001"!=c&&d!=Wa(a,c))return!1;a=R(b);return-1!=Za(a,e)}function ab(a,b){if(!b)return null;var c=x(b,1);if(c=I[c])if(1==c.length)a=c[0];else a:{b=R(b);for(var d,e=c.length,f=0;f<e;f++){d=c[f];var g=V(a,d);if(r(g,23)){if(!b.search(t(g,23))){a=d;break a}}else if(-1!=Za(b,g)){a=d;break a}}a=null}else a=null;return a}function U(a){return(a=I[a])?a[0]:"ZZ"}function Wa(a,b){a=V(a,b);if(!a)throw Error("Invalid region code: "+b);return x(a,10)}
function cb(a,b,c,d){var e=Ya(c,d),f=y(e,9)?v(e,9):v(t(c,1),9),e=v(e,10);if(2==d)if(Sa(Ya(c,0)))a=Ya(c,1),Sa(a)&&(f=f.concat(y(a,9)?v(a,9):v(t(c,1),9)),ca(f),e.length?(e=e.concat(v(a,10)),ca(e)):e=v(a,10));else return cb(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<p(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<p(f,b,1)?0:5}function db(a){var b=Y,c=R(a);a=x(a,1);if(!(a in I))return 1;a=T(b,a,U(a));return cb(b,c,a,-1)}
function eb(a,b,c,d,e,f){if(!b.length)return 0;b=new D(b);var g;c&&(g=t(c,11));null==g&&(g="NonMatch");var h=b.toString();if(h.length)if(L.test(h))h=h.replace(L,""),b.c="",b.a(Pa(h)),g=1;else{h=new RegExp(g);Qa(b);g=b.toString();if(g.search(h))g=!1;else{var h=g.match(h)[0].length,l=g.substring(h).match(Ca);l&&null!=l[1]&&0<l[1].length&&"0"==N(l[1],K)?g=!1:(b.c="",b.a(g.substring(h)),g=!0)}g=g?5:20}else g=20;e&&u(f,6,g);if(20!=g){if(2>=b.c.length)throw Error("Phone number too short after IDD");a:{a=
b.toString();if(a.length&&"0"!=a.charAt(0))for(e=a.length,b=1;3>=b&&b<=e;++b)if(c=parseInt(a.substring(0,b),10),c in I){d.a(a.substring(b));d=c;break a}d=0}if(d)return u(f,1,d),d;throw Error("Invalid country calling code");}if(c&&(g=x(c,10),h=""+g,l=b.toString(),!l.lastIndexOf(h,0)&&(h=new D(l.substring(h.length)),l=t(c,1),l=new RegExp(x(l,2)),fb(h,c,null),h=h.toString(),!M(l,b.toString())&&M(l,h)||3==cb(a,b.toString(),c,-1))))return d.a(h),e&&u(f,6,10),u(f,1,g),g;u(f,1,0);return 0}
function fb(a,b,c){var d=a.toString(),e=d.length,f=t(b,15);if(e&&null!=f&&f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){var f=new RegExp(x(t(b,1),2)),h=M(f,d),l=e.length-1;b=t(b,16);if(null!=b&&b.length&&null!=e[l]&&e[l].length){if(d=d.replace(g,b),!h||M(f,d))c&&0<l&&c.a(e[1]),a.set(d)}else if(!h||M(f,d.substring(e[0].length)))c&&0<l&&null!=e[l]&&c.a(e[1]),a.set(d.substring(e[0].length))}}}
function Z(a,b){var c=Y;if(!P(b)&&0<a.length&&"+"!=a.charAt(0))throw Error("Invalid country calling code");return gb(c,a,b,!0)}
function gb(a,b,c,d){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var e=new D,f=b.indexOf(";phone-context=");if(0<=f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Na(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(e.c="",e.a(f.substring(0,g)));if(!Oa(e.toString()))throw Error("The string supplied did not seem to be a phone number");
f=e.toString();if(!(P(c)||null!=f&&0<f.length&&L.test(f)))throw Error("Invalid country calling code");f=new H;d&&u(f,5,b);a:{b=e.toString();g=b.search(Ha);if(0<=g&&Oa(b.substring(0,g)))for(var h=b.match(Ha),l=h.length,z=1;z<l;++z)if(null!=h[z]&&0<h[z].length){e.c="";e.a(b.substring(0,g));b=h[z];break a}b=""}0<b.length&&u(f,3,b);b=V(a,c);g=new D;h=0;l=e.toString();try{h=eb(a,l,b,g,d,f)}catch(O){if("Invalid country calling code"==O.message&&L.test(l)){if(l=l.replace(L,""),h=eb(a,l,b,g,d,f),!h)throw O;
}else throw O;}h?(e=U(h),e!=c&&(b=T(a,h,e))):(Qa(e),g.a(e.toString()),null!=c?(h=x(b,10),u(f,1,h)):d&&qa(f,6));if(2>g.c.length)throw Error("The string supplied is too short to be a phone number");b&&(c=new D,e=new D(g.toString()),fb(e,b,c),2!=cb(a,e.toString(),b,-1)&&(g=e,d&&0<c.toString().length&&u(f,7,c.toString())));a=g.toString();d=a.length;if(2>d)throw Error("The string supplied is too short to be a phone number");if(17<d)throw Error("The string supplied is too long to be a phone number");if(1<
a.length&&"0"==a.charAt(0)){u(f,4,!0);for(d=1;d<a.length-1&&"0"==a.charAt(d);)d++;1!=d&&u(f,8,d)}u(f,2,parseInt(a,10));return f}function M(a,b){return(a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1};var Y=J.c();m("phoneUtils.countryCodeToRegionCodeMap",function(){return I});m("phoneUtils.isPossibleNumber",function(a,b){a=Z(a,b||"us");a=db(a);return 0==a||4==a});m("phoneUtils.isPossibleNumberWithReason",function(a,b){a=Z(a,b||"us");return db(a)});m("phoneUtils.isValidNumber",function(a,b){a=Z(a,b||"us");return $a(Y,a)});m("phoneUtils.isValidNumberForRegion",function(a,b){b=b||"us";a=Z(a,b);return bb(Y,a,b)});
m("phoneUtils.getCountryCodeForRegion",function(a){a=a||"us";var b=Y;return P(a)?Wa(b,a):0});m("phoneUtils.getRegionCodeForNumber",function(a,b){a=Z(a,b||"us");return ab(Y,a)});
m("phoneUtils.getNumberType",function(a,b){a=Z(a,b||"us");b=Y;var c=ab(b,a);(b=T(b,x(a,1),c))?(a=R(a),a=Za(a,b)):a=-1;switch(a){case 0:var d="FIXED_LINE";break;case 1:d="MOBILE";break;case 2:d="FIXED_LINE_OR_MOBILE";break;case 3:d="TOLL_FREE";break;case 4:d="PREMIUM_RATE";break;case 5:d="SHARED_COST";break;case 6:d="VOIP";break;case 7:d="PERSONAL_NUMBER";break;case 8:d="PAGER";break;case 9:d="UAN";break;case -1:d="UNKNOWN"}return d});m("phoneUtils.getSupportedRegions",function(){return Ra()});
m("phoneUtils.formatE164",function(a,b){a=Z(a,b||"us");return Q(Y,a,0)});m("phoneUtils.formatNational",function(a,b){a=Z(a,b||"us");return Q(Y,a,2)});m("phoneUtils.formatInternational",function(a,b){a=Z(a,b||"us");return Q(Y,a,1)});
m("phoneUtils.formatInOriginalFormat",function(a,b){b=b||"us";a=Z(a,b);var c=b;b=Y;var d;if(!(d=!r(a,5))){if(d=r(a,4))d=x(a,1),d=T(b,d,U(d)),d=!(d&&x(d,26));if(d=!d)if(d=x(a,1),d=T(b,d,U(d))){var e=R(a);d=!!W(v(d,19),e)}else d=!1}if(d)if(r(a,6)){switch(t(a,6)){case 1:b=Q(b,a,1);break;case 5:b=Va(b,a,c);break;case 10:b=Q(b,a,1).substring(1);break;default:d=U(x(a,1));if(c=V(b,d)){c=x(c,12);var f=c.length?c=c.replace("~",""):null}else f=null;c=Q(b,a,2);if(null!=f&&f.length){b:{e=x(a,5);e=N(e,K);if(!e.lastIndexOf(f,
0))try{var g=$a(b,gb(b,e.substring(f.length),d,!1));break b}catch(h){}g=!1}if(g)b=c;else if(g=V(b,d),d=R(a),g=W(v(g,19),d))if(d=x(g,4),e=d.indexOf("$1"),0>=e)b=c;else if(d=d.substring(0,e),d=N(d,K),d.length)if(g=g.clone(),qa(g,4),d=[g],g=x(a,1),c=R(a),g in I){b=T(b,g,U(g));if(e=W(d,c))d=e.clone(),e=x(e,4),0<e.length&&(f=x(b,12),0<f.length?(e=e.replace(Ka,f).replace(La,"$1"),u(d,4,e)):qa(d,4)),c=Xa(c,d,2);b=Ta(a,b,2);b=S(g,2,c,b)}else b=c;else b=c;else b=c}else b=c}a=x(a,5);null!=b&&0<a.length&&(g=
N(b,za),c=N(a,za),g!=c&&(b=a));a=b}else a=Q(b,a,2);else a=x(a,5);return a});m("phoneUtils.formatOutOfCountryCallingNumber",function(a,b,c){if(c)return a=Z(a,b),Va(Y,a,c)});})();
