if(window.Globalize == undefined) {
/*! globalize - v0.1.1 - 2013-04-30
* https://github.com/jquery/globalize
* Copyright 2013 ; Licensed MIT */
var Globalize = (function(e,r){var t,n,a,s,u,l,i,c,o,f,d,p,h,g,b,m,y,M,v,k,z,F,A,x;t=function(e){return new t.prototype.init(e)},"undefined"!=typeof require&&"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=t:e.Globalize=t,t.cultures={},t.prototype={constructor:t,init:function(e){return this.cultures=t.cultures,this.cultureSelector=e,this}},t.prototype.init.prototype=t.prototype,t.cultures["default"]={name:"en",englishName:"English",nativeName:"English",isRTL:!1,language:"en",numberFormat:{pattern:["-n"],decimals:2,",":",",".":".",groupSizes:[3],"+":"+","-":"-",NaN:"NaN",negativeInfinity:"-Infinity",positiveInfinity:"Infinity",percent:{pattern:["-n %","n %"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"%"},currency:{pattern:["($n)","$n"],decimals:2,groupSizes:[3],",":",",".":".",symbol:"$"}},calendars:{standard:{name:"Gregorian_USEnglish","/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}}},messages:{}},t.cultures["default"].calendar=t.cultures["default"].calendars.standard,t.cultures.en=t.cultures["default"],t.cultureSelector="en",n=/^0x[a-f0-9]+$/i,a=/^[+\-]?infinity$/i,s=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,u=/^\s+|\s+$/g,l=function(e,r){if(e.indexOf)return e.indexOf(r);for(var t=0,n=e.length;n>t;t++)if(e[t]===r)return t;return-1},i=function(e,r){return e.substr(e.length-r.length)===r},c=function(){var e,t,n,a,s,u,l=arguments[0]||{},i=1,p=arguments.length,h=!1;for("boolean"==typeof l&&(h=l,l=arguments[1]||{},i=2),"object"==typeof l||f(l)||(l={});p>i;i++)if(null!=(e=arguments[i]))for(t in e)n=l[t],a=e[t],l!==a&&(h&&a&&(d(a)||(s=o(a)))?(s?(s=!1,u=n&&o(n)?n:[]):u=n&&d(n)?n:{},l[t]=c(h,u,a)):a!==r&&(l[t]=a));return l},o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=function(e){return"[object Function]"===Object.prototype.toString.call(e)},d=function(e){return"[object Object]"===Object.prototype.toString.call(e)},p=function(e,r){return 0===e.indexOf(r)},h=function(e){return(e+"").replace(u,"")},g=function(e){return isNaN(e)?0/0:Math[0>e?"ceil":"floor"](e)},b=function(e,r,t){var n;for(n=e.length;r>n;n+=1)e=t?"0"+e:e+"0";return e},m=function(e,r){for(var t=0,n=!1,a=0,s=e.length;s>a;a++){var u=e.charAt(a);switch(u){case"'":n?r.push("'"):t++,n=!1;break;case"\\":n&&r.push("\\"),n=!n;break;default:r.push(u),n=!1}}return t},y=function(e,r){r=r||"F";var t,n=e.patterns,a=r.length;if(1===a){if(t=n[r],!t)throw"Invalid date format string '"+r+"'.";r=t}else 2===a&&"%"===r.charAt(0)&&(r=r.charAt(1));return r},M=function(e,r,t){function n(e,r){var t,n=e+"";return r>1&&r>n.length?(t=v[r-2]+n,t.substr(t.length-r,r)):t=n}function a(){return h||g?h:(h=A.test(r),g=!0,h)}function s(e,r){if(b)return b[r];switch(r){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();default:throw"Invalid part value "+r}}var u,l=t.calendar,i=l.convert;if(!r||!r.length||"i"===r){if(t&&t.name.length)if(i)u=M(e,l.patterns.F,t);else{var c=new Date(e.getTime()),o=z(e,l.eras);c.setFullYear(F(e,l,o)),u=c.toLocaleString()}else u=""+e;return u}var f=l.eras,d="s"===r;r=y(l,r),u=[];var p,h,g,b,v=["0","00","000"],A=/([^d]|^)(d|dd)([^d]|$)/g,x=0,I=k();for(!d&&i&&(b=i.fromGregorian(e));;){var S=I.lastIndex,w=I.exec(r),C=r.slice(S,w?w.index:r.length);if(x+=m(C,u),!w)break;if(x%2)u.push(w[0]);else{var D=w[0],H=D.length;switch(D){case"ddd":case"dddd":var O=3===H?l.days.namesAbbr:l.days.names;u.push(O[e.getDay()]);break;case"d":case"dd":h=!0,u.push(n(s(e,2),H));break;case"MMM":case"MMMM":var N=s(e,1);u.push(l.monthsGenitive&&a()?l.monthsGenitive[3===H?"namesAbbr":"names"][N]:l.months[3===H?"namesAbbr":"names"][N]);break;case"M":case"MM":u.push(n(s(e,1)+1,H));break;case"y":case"yy":case"yyyy":N=b?b[0]:F(e,l,z(e,f),d),4>H&&(N%=100),u.push(n(N,H));break;case"h":case"hh":p=e.getHours()%12,0===p&&(p=12),u.push(n(p,H));break;case"H":case"HH":u.push(n(e.getHours(),H));break;case"m":case"mm":u.push(n(e.getMinutes(),H));break;case"s":case"ss":u.push(n(e.getSeconds(),H));break;case"t":case"tt":N=12>e.getHours()?l.AM?l.AM[0]:" ":l.PM?l.PM[0]:" ",u.push(1===H?N.charAt(0):N);break;case"f":case"ff":case"fff":u.push(n(e.getMilliseconds(),3).substr(0,H));break;case"z":case"zz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),H));break;case"zzz":p=e.getTimezoneOffset()/60,u.push((0>=p?"+":"-")+n(Math.floor(Math.abs(p)),2)+":"+n(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":l.eras&&u.push(l.eras[z(e,f)].name);break;case"/":u.push(l["/"]);break;default:throw"Invalid date format pattern '"+D+"'."}}}return u.join("")},function(){var e;e=function(e,r,t){var n=t.groupSizes,a=n[0],s=1,u=Math.pow(10,r),l=Math.round(e*u)/u;isFinite(l)||(l=e),e=l;var i=e+"",c="",o=i.split(/e/i),f=o.length>1?parseInt(o[1],10):0;i=o[0],o=i.split("."),i=o[0],c=o.length>1?o[1]:"",f>0?(c=b(c,f,!1),i+=c.slice(0,f),c=c.substr(f)):0>f&&(f=-f,i=b(i,f+1,!0),c=i.slice(-f,i.length)+c,i=i.slice(0,-f)),c=r>0?t["."]+(c.length>r?c.slice(0,r):b(c,r)):"";for(var d=i.length-1,p=t[","],h="";d>=0;){if(0===a||a>d)return i.slice(0,d+1)+(h.length?p+h+c:c);h=i.slice(d-a+1,d+1)+(h.length?p+h:""),d-=a,n.length>s&&(a=n[s],s++)}return i.slice(0,d+1)+p+h+c},v=function(r,t,n){if(!isFinite(r))return 1/0===r?n.numberFormat.positiveInfinity:r===-1/0?n.numberFormat.negativeInfinity:n.numberFormat.NaN;if(!t||"i"===t)return n.name.length?r.toLocaleString():""+r;t=t||"D";var a,s=n.numberFormat,u=Math.abs(r),l=-1;t.length>1&&(l=parseInt(t.slice(1),10));var i,c=t.charAt(0).toUpperCase();switch(c){case"D":a="n",u=g(u),-1!==l&&(u=b(""+u,l,!0)),0>r&&(u="-"+u);break;case"N":i=s;case"C":i=i||s.currency;case"P":i=i||s.percent,a=0>r?i.pattern[0]:i.pattern[1]||"n",-1===l&&(l=i.decimals),u=e(u*("P"===c?100:1),l,i);break;default:throw"Bad number format specifier: "+c}for(var o=/n|\$|-|%/g,f="";;){var d=o.lastIndex,p=o.exec(a);if(f+=a.slice(d,p?p.index:a.length),!p)break;switch(p[0]){case"n":f+=u;break;case"$":f+=s.currency.symbol;break;case"-":/[1-9]/.test(u)&&(f+=s["-"]);break;case"%":f+=s.percent.symbol}}return f}}(),k=function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},z=function(e,r){if(!r)return 0;for(var t,n=e.getTime(),a=0,s=r.length;s>a;a++)if(t=r[a].start,null===t||n>=t)return a;return 0},F=function(e,r,t,n){var a=e.getFullYear();return!n&&r.eras&&(a-=r.eras[t].offset),a},function(){var e,r,t,n,a,s,u;e=function(e,r){if(100>r){var t=new Date,n=z(t),a=F(t,e,n),s=e.twoDigitYearMax;s="string"==typeof s?(new Date).getFullYear()%100+parseInt(s,10):s,r+=a-a%100,r>s&&(r-=100)}return r},r=function(e,r,t){var n,a=e.days,i=e._upperDays;return i||(e._upperDays=i=[u(a.names),u(a.namesAbbr),u(a.namesShort)]),r=s(r),t?(n=l(i[1],r),-1===n&&(n=l(i[2],r))):n=l(i[0],r),n},t=function(e,r,t){var n=e.months,a=e.monthsGenitive||e.months,i=e._upperMonths,c=e._upperMonthsGen;i||(e._upperMonths=i=[u(n.names),u(n.namesAbbr)],e._upperMonthsGen=c=[u(a.names),u(a.namesAbbr)]),r=s(r);var o=l(t?i[1]:i[0],r);return 0>o&&(o=l(t?c[1]:c[0],r)),o},n=function(e,r){var t=e._parseRegExp;if(t){var n=t[r];if(n)return n}else e._parseRegExp=t={};for(var a,s=y(e,r).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),u=["^"],l=[],i=0,c=0,o=k();null!==(a=o.exec(s));){var f=s.slice(i,a.index);if(i=o.lastIndex,c+=m(f,u),c%2)u.push(a[0]);else{var d,p=a[0],h=p.length;switch(p){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":d="(\\D+)";break;case"tt":case"t":d="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":d="(\\d{"+h+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":d="(\\d\\d?)";break;case"zzz":d="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":d="([+-]?\\d\\d?)";break;case"/":d="(\\/)";break;default:throw"Invalid date format pattern '"+p+"'."}d&&u.push(d),l.push(a[0])}}m(s.slice(i),u),u.push("$");var g=u.join("").replace(/\s+/g,"\\s+"),b={regExp:g,groups:l};return t[r]=b},a=function(e,r,t){return r>e||e>t},s=function(e){return e.split("\u00a0").join(" ").toUpperCase()},u=function(e){for(var r=[],t=0,n=e.length;n>t;t++)r[t]=s(e[t]);return r},A=function(s,u,l){s=h(s);var i=l.calendar,c=n(i,u),o=RegExp(c.regExp).exec(s);if(null===o)return null;for(var f,d=c.groups,g=null,b=null,m=null,y=null,M=null,v=0,k=0,z=0,F=0,A=null,x=!1,I=0,S=d.length;S>I;I++){var w=o[I+1];if(w){var C=d[I],D=C.length,H=parseInt(w,10);switch(C){case"dd":case"d":if(y=H,a(y,1,31))return null;break;case"MMM":case"MMMM":if(m=t(i,w,3===D),a(m,0,11))return null;break;case"M":case"MM":if(m=H-1,a(m,0,11))return null;break;case"y":case"yy":case"yyyy":if(b=4>D?e(i,H):H,a(b,0,9999))return null;break;case"h":case"hh":if(v=H,12===v&&(v=0),a(v,0,11))return null;break;case"H":case"HH":if(v=H,a(v,0,23))return null;break;case"m":case"mm":if(k=H,a(k,0,59))return null;break;case"s":case"ss":if(z=H,a(z,0,59))return null;break;case"tt":case"t":if(x=i.PM&&(w===i.PM[0]||w===i.PM[1]||w===i.PM[2]),!x&&(!i.AM||w!==i.AM[0]&&w!==i.AM[1]&&w!==i.AM[2]))return null;break;case"f":case"ff":case"fff":if(F=H*Math.pow(10,3-D),a(F,0,999))return null;break;case"ddd":case"dddd":if(M=r(i,w,3===D),a(M,0,6))return null;break;case"zzz":var O=w.split(/:/);if(2!==O.length)return null;if(f=parseInt(O[0],10),a(f,-12,13))return null;var N=parseInt(O[1],10);if(a(N,0,59))return null;A=60*f+(p(w,"-")?-N:N);break;case"z":case"zz":if(f=H,a(f,-12,13))return null;A=60*f;break;case"g":case"gg":var T=w;if(!T||!i.eras)return null;T=h(T.toLowerCase());for(var j=0,$=i.eras.length;$>j;j++)if(T===i.eras[j].name.toLowerCase()){g=j;break}if(null===g)return null}}}var P,G=new Date,E=i.convert;if(P=E?E.fromGregorian(G)[0]:G.getFullYear(),null===b?b=P:i.eras&&(b+=i.eras[g||0].offset),null===m&&(m=0),null===y&&(y=1),E){if(G=E.toGregorian(b,m,y),null===G)return null}else{if(G.setFullYear(b,m,y),G.getDate()!==y)return null;if(null!==M&&G.getDay()!==M)return null}if(x&&12>v&&(v+=12),G.setHours(v,k,z,F),null!==A){var Y=G.getMinutes()-(A+G.getTimezoneOffset());G.setHours(G.getHours()+parseInt(Y/60,10),Y%60)}return G}}(),x=function(e,r,t){var n,a=r["-"],s=r["+"];switch(t){case"n -":a=" "+a,s=" "+s;case"n-":i(e,a)?n=["-",e.substr(0,e.length-a.length)]:i(e,s)&&(n=["+",e.substr(0,e.length-s.length)]);break;case"- n":a+=" ",s+=" ";case"-n":p(e,a)?n=["-",e.substr(a.length)]:p(e,s)&&(n=["+",e.substr(s.length)]);break;case"(n)":p(e,"(")&&i(e,")")&&(n=["-",e.substr(1,e.length-2)])}return n||["",e]},t.prototype.findClosestCulture=function(e){return t.findClosestCulture.call(this,e)},t.prototype.format=function(e,r,n){return t.format.call(this,e,r,n)},t.prototype.localize=function(e,r){return t.localize.call(this,e,r)},t.prototype.parseInt=function(e,r,n){return t.parseInt.call(this,e,r,n)},t.prototype.parseFloat=function(e,r,n){return t.parseFloat.call(this,e,r,n)},t.prototype.culture=function(e){return t.culture.call(this,e)},t.addCultureInfo=function(e,r,t){var n={},a=!1;"string"!=typeof e?(t=e,e=this.culture().name,n=this.cultures[e]):"string"!=typeof r?(t=r,a=null==this.cultures[e],n=this.cultures[e]||this.cultures["default"]):(a=!0,n=this.cultures[r]),this.cultures[e]=c(!0,{},n,t),a&&(this.cultures[e].calendar=this.cultures[e].calendars.standard)},t.findClosestCulture=function(e){var r;if(!e)return this.findClosestCulture(this.cultureSelector)||this.cultures["default"];if("string"==typeof e&&(e=e.split(",")),o(e)){var t,n,a=this.cultures,s=e,u=s.length,l=[];for(n=0;u>n;n++){e=h(s[n]);var i,c=e.split(";");t=h(c[0]),1===c.length?i=1:(e=h(c[1]),0===e.indexOf("q=")?(e=e.substr(2),i=parseFloat(e),i=isNaN(i)?0:i):i=1),l.push({lang:t,pri:i})}for(l.sort(function(e,r){return e.pri<r.pri?1:e.pri>r.pri?-1:0}),n=0;u>n;n++)if(t=l[n].lang,r=a[t])return r;for(n=0;u>n;n++)for(t=l[n].lang;;){var f=t.lastIndexOf("-");if(-1===f)break;if(t=t.substr(0,f),r=a[t])return r}for(n=0;u>n;n++){t=l[n].lang;for(var d in a){var p=a[d];if(p.language===t)return p}}}else if("object"==typeof e)return e;return r||null},t.format=function(e,r,t){var n=this.findClosestCulture(t);return e instanceof Date?e=M(e,r,n):"number"==typeof e&&(e=v(e,r,n)),e},t.localize=function(e,r){return this.findClosestCulture(r).messages[e]||this.cultures["default"].messages[e]},t.parseDate=function(e,r,t){t=this.findClosestCulture(t);var n,a,s;if(r){if("string"==typeof r&&(r=[r]),r.length)for(var u=0,l=r.length;l>u;u++){var i=r[u];if(i&&(n=A(e,i,t)))break}}else{s=t.calendar.patterns;for(a in s)if(n=A(e,s[a],t))break}return n||null},t.parseInt=function(e,r,n){return g(t.parseFloat(e,r,n))},t.parseFloat=function(e,r,t){"number"!=typeof r&&(t=r,r=10);var u=this.findClosestCulture(t),l=0/0,i=u.numberFormat;if(e.indexOf(u.numberFormat.currency.symbol)>-1&&(e=e.replace(u.numberFormat.currency.symbol,""),e=e.replace(u.numberFormat.currency["."],u.numberFormat["."])),e.indexOf(u.numberFormat.percent.symbol)>-1&&(e=e.replace(u.numberFormat.percent.symbol,"")),e=e.replace(/ /g,""),a.test(e))l=parseFloat(e);else if(!r&&n.test(e))l=parseInt(e,16);else{var c=x(e,i,i.pattern[0]),o=c[0],f=c[1];""===o&&"(n)"!==i.pattern[0]&&(c=x(e,i,"(n)"),o=c[0],f=c[1]),""===o&&"-n"!==i.pattern[0]&&(c=x(e,i,"-n"),o=c[0],f=c[1]),o=o||"+";var d,p,h=f.indexOf("e");0>h&&(h=f.indexOf("E")),0>h?(p=f,d=null):(p=f.substr(0,h),d=f.substr(h+1));var g,b,m=i["."],y=p.indexOf(m);0>y?(g=p,b=null):(g=p.substr(0,y),b=p.substr(y+m.length));var M=i[","];g=g.split(M).join("");var v=M.replace(/\u00A0/g," ");M!==v&&(g=g.split(v).join(""));var k=o+g;if(null!==b&&(k+="."+b),null!==d){var z=x(d,i,"-n");k+="e"+(z[0]||"+")+z[1]}s.test(k)&&(l=parseFloat(k))}return l},t.culture=function(e){return e!==r&&(this.cultureSelector=e),this.findClosestCulture(e)||this.cultures["default"]}; return Globalize;}(this));
}
/*
 * Globalize Culture ru
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "ru", "default", {
	name: "ru",
	englishName: "Russian",
	nativeName: "русский",
	language: "ru",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "-бесконечность",
		positiveInfinity: "бесконечность",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n$","n$"],
			",": " ",
			".": ",",
			symbol: "р."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
				namesAbbr: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
				namesShort: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]
			},
			months: {
				names: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],
				namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
			},
			monthsGenitive: {
				names: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],
				namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "d MMMM yyyy 'г.'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d MMMM yyyy 'г.' H:mm",
				F: "d MMMM yyyy 'г.' H:mm:ss",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));

(function() {
var merge = function(obj1, obj2) {
  var obj3 = {};
  for(var attrname in obj1){obj3[attrname] = obj1[attrname]; }
  for(var attrname in obj2){obj3[attrname] = obj2[attrname]; }
  return obj3;
}
var dict = {
  "Unknown": "Неизвестно",
  "And": "И",
  "Authenticating": "Аутентификация {0}...",
  "Clear": "Очистить {0}",
  "CompleteQuery": "Полная строка запроса",
  "Exclude": "Исключить {0}",
  "EnterTag": "Добавить тег",
  "Next": "Следующая",
  "Last": "Последняя",
  "Link": "Ссылка",
  "Or": "ИЛИ",
  "Previous": "Предыдущая",
  "QueryDidntMatchAnyDocuments": "Ни один из документов не отвечает вашему запросу.",
  "QueryException": "В вашем запросе содержится ошибка: {0}.",
  "Me": "Я",
  "Remove": "Удалить",
  "Search": "Искать",
  "SearchFor": "Найти {0}",
  "ShareQuery": "Поделиться запросом",
  "Preferences": "Личные параметры настройки",
  "LinkOpeningSettings": "Параметры настройки открытия ссылок",
  "Reauthenticate": "Повторная аутентификация {0}",
  "ResultsFilteringExpression": "Результаты фильтрации поисковых фраз",
  "FiltersInYourPreferences": "Фильтры в личных параметрах настройки",
  "Create": "Создать",
  "SearchIn": "Найти в {0}",
  "Seconds": "через {0} <sn>секунду</sn><pl>секунд</pl>",
  "ShowingResultsOf": "Результат<pl>ы</pl> {0}<pl>-{1}</pl> из {2}",
  "SwitchTo": "Переключиться на {0}",
  "Unexclude": "Убрать исключение {0}",
  "ClearAllFilters": "Сброс всех фильтров",
  "SkipLogin": "Пропустить авторизацию",
  "LoginInProgress": "Выполняется авторизация, пожалуйста, подождите ...",
  "Login": "Авторизоваться",
  "GetStarted": "Начать",
  "More": "Больше",
  "Less": "Меньше",
  "Settings": "Параметры настройки",
  "Score": "Показатель",
  "ScoreDescription": "Показатель рассчитывается исходя из количества результатов, а также из положения в перечне результатов.",
  "Occurrences": "Совпадения",
  "OccurrencesDescription": "Сортировать по количеству совпадений - в порядке убывания.",
  "Label": "Ярлык",
  "Of": "из",
  "LabelDescription": "Сортировать в алфавитном порядке по значениям поля.",
  "Value": "Значение",
  "ValueDescription": "Сортировать по значениям первого расчетного поля",
  "AlphaAscending": "Возрастающее значение",
  "AlphaDescending": "Убывающее значение",
  "ChiSquare": "Хи-квадрат",
  "Nosort": "Не отсортировано",
  "RelativeFrequency": "Относительная частота",
  "RelativeFrequencyDescription": "Сортировать по значению относительной частоты. Нечастотные значения отобразятся сверху",
  "DateDistribution": "Дата распределения",
  "Custom": "Пользовательский",
  "CustomDescription": "Сортировать в специальном порядке",
  "ComputedField": "Расчетное поле",
  "Ascending": "По возрастанию",
  "Descending": "По убыванию",
  "noResultFor": "Нет результатов по {0}",
  "autoCorrectedQueryTo": "Запрос автоматически исправлен на {0}",
  "didYouMean": "Вы имели ввиду: {0}",
  "SuggestedResults": "Предлагаемые результаты",
  "SuggestedQueries": "Предлагаемые запросы",
  "MostRelevantItems": "Наиболее релевантные пункты:",
  "AllItems": "Все пункты:",
  "ShowLess": "Показывать меньше",
  "ShowMore": "Показывать больше",
  "HideFacet": "Скрыть ячейку",
  "ShowFacet": "Показать ячейку",
  "AndOthers": "и {0} другой (другие)",
  "Others": "{0} другой (другие)",
  "MostRelevantPosts": "Наиболее релевантные сообщения:",
  "CompleteThread": "Вся ветка обсуждения:",
  "ShowCompleteThread": "Показать всю ветку обсуждения",
  "ShowOnlyTopMatchingPosts": "Показать только верхние подходящие сообщения",
  "MostRelevantReplies": "Наиболее релевантные ответы:",
  "AllConversation": "Все диалоги:",
  "ShowAllConversation": "Показать весь диалог",
  "ShowAllReplies": "Показать все ответы",
  "ShowOnlyMostRelevantReplies": "Показывать только наиболее релевантные ответы",
  "Close": "Закрыть",
  "Open": "Открыть",
  "OpenInOutlookWhenPossible": "Открывать в Outlook (когда возможно)",
  "AlwaysOpenInNewWindow": "Всегда открывать результаты в новом окне",
  "Quickview": "Быстрый просмотр",
  "ErrorReport": "Сообщение об ошибке",
  "OopsError": "Что-то случилось с сервером.",
  "ProblemPersists": "При постоянном возникновении этой проблемы обратитесь к администратору.",
  "GoBack": "Назад",
  "Reset": "Перезагрузка",
  "Retry": "Повторить",
  "MoreInfo": "Дополнительная информация",
  "Username": "Имя пользователя",
  "Password": "Пароль",
  "PostedBy": "Опубликовано",
  "CannotConnect": "Невозможно подключиться к адресу сервера",
  "BadUserPass": "Пароль не соответствует имени пользователя",
  "PleaseEnterYourCredentials": "Введите свои учетные данные для {0}.",
  "PleaseEnterYourSearchPage": "Пожалуйста, введите URL-адрес искомой страницы",
  "Collapse": "Свернуть",
  "Collapsable": "Свертываемый",
  "Expand": "Расширить",
  "Today": "Сегодня",
  "Yesterday": "Вчера",
  "Tomorrow": "Завтра",
  "Duration": "Продолжительность: {0}",
  "IndexDuration": "Продолжительность индекса: {0}",
  "ProxyDuration": "Продолжительность прокси: {0}",
  "ClientDuration": "Продолжительность клиента: {0}",
  "Unavailable": "Недоступно",
  "Reply": "Ответить",
  "ReplyAll": "Ответить всем",
  "Forward": "Переслать",
  "From": "От",
  "Caption": "Заголовок",
  "Expression": "Поисковая фраза",
  "Tab": "Вкладка",
  "Tabs": "Вкладки",
  "EnterExpressionName": "Введите фразу",
  "EnterExpressionToFilterWith": "Введите фразу для фильтрации результатов",
  "SelectTab": "Выбрать вкладку",
  "SelectAll": "Выбрать все",
  "PageUrl": "Найти URL-адрес страницы",
  "ErrorSavingToDevice": "Ошибка при сохранении информации на ваше устройство",
  "ErrorReadingFromDevice": "Ошибка при чтении информации с вашего устройства",
  "AppIntro": "Пообщайтесь со специалистом по продукции, который сможет ответить на ваши вопросы о Conveo и поможет решить, какое решение Coveo вам подойдет. Или попробуйте демоверсию с автоматическим обновлением!",
  "TryDemo": "Попробовать демоверсию",
  "ContactUs": "Связаться с нами",
  "NewToCoveo": "Не знакомы с Coveo?",
  "LetUsHelpGetStarted": "Позвольте помочь вам приступить к работе",
  "LikesThis": "{0} нравится<sn> нравится</sn> это.",
  "CannotConnectSearchPage": "Не удалось подключиться к вашей странице поиска",
  "AreYouSureDeleteFilter": "Вы действительно желаете удалить фильтр {0} с поисковой фразой {1}",
  "OnlineHelp": "Онлайн справка",
  "Done": "Выполнено",
  "SaveFacetState": "Сохранить формат данной ячейки",
  "ClearFacetState": "Очистить формат ячейки",
  "DisplayingTheOnlyMessage": "Отображение единственного сообщения в данном диалоге",
  "NoNetworkConnection": "Нет сетевых подключений",
  "UnknownConnection": "Неизвестное подключение",
  "EthernetConnection": "Подключение через Ethernet",
  "WiFi": "Подключение через WiFi",
  "CELL": "Мобильное подключение",
  "CELL_2G": "Мобильное подключение 2G",
  "CELL_3G": "Мобильное подключение 3G",
  "CELL_4G": "Мобильное подключение 4G",
  "Relevance": "Релевантность",
  "Date": "Дата",
  "Amount": "Количество",
  "QueryExceptionNoException": "Нет исключений",
  "QueryExceptionInvalidSyntax": "Недопустимый синтаксис",
  "QueryExceptionInvalidCustomField": "Недопустимое расчетное поле",
  "QueryExceptionInvalidDate": "Недопустимая дата",
  "QueryExceptionInvalidExactPhrase": "Недопустимая точная фраза",
  "QueryExceptionInvalidDateOp": "Недопустимый оператор дат",
  "QueryExceptionInvalidNear": "Недопустимый оператор NEAR",
  "QueryExceptionInvalidWeightedNear": "Недопустимый взвешенный NEAR",
  "QueryExceptionInvalidTerm": "Недопустимое термин",
  "QueryExceptionTooManyTerms": "Слишком много терминов",
  "QueryExceptionWildcardTooGeneral": "Слишком общий специальный символ",
  "QueryExceptionInvalidSortField": "Недопустимое поле сортировки",
  "QueryExceptionInvalidSmallStringOp": "Недопустимый строковый оператор",
  "QueryExceptionRequestedResultsMax": "Максимум запрашиваемых результатов",
  "QueryExceptionAggregatedMirrorDead": "Уделенное зеркало отключено",
  "QueryExceptionAggregatedMirrorQueryTimeOut": "Время ожидания запроса через уделенное зеркало",
  "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Недопустимый текущий номер удаленного зеркала",
  "QueryExceptionAggregatedMirrorCannotConnect": "Интегральное зеркало невозможно подключить",
  "QueryExceptionNotEnoughLeadingCharsWildcard": "Недостаточное количество ведущих символов до специального символа",
  "QueryExceptionSecurityInverterNotFound": "Инвертор безопасности не найден",
  "QueryExceptionSecurityInverterAccessDenied": "В доступе к инвертору безопасности отказано",
  "QueryExceptionAggregatedMirrorCannotImpersonate": "Уделенное зеркало не может отправлять запросы от имени пользователя",
  "QueryExceptionUnexpected": "Непредвиденный",
  "QueryExceptionAccessDenied": "В доступе отказано",
  "QueryExceptionSuperUserTokenInvalid": "Право доступа привилегированного пользователя недействительно",
  "QueryExceptionSuperUserTokenExpired": "Право доступа привилегированного пользователя истекло",
  "QueryExceptionLicenseQueriesExpired": "Лицензия на осуществление запросов истекла",
  "QueryExceptionLicenseSuperUserTokenNotSupported": "Лицензия доступа привилегированного пользователя не поддерживается",
  "QueryExceptionInvalidSession": "Сессия недействительна",
  "QueryExceptionInvalidDocument": "Недействительный документ",
  "QueryExceptionSearchDisabled": "Поиск отключен",
  "FileType": "Тип файла",
  "ShowAttachment": "Показать приложение",
  "OnFeed": "на {0} исходный материал.",
  "Author": "Автор",
  "NoTitle": "Без названия",
  "CurrentSelections": "Текущие результаты выбора",
  "AllContent": "Все содержание",
  "CancelLastAction": "Отменить последнее действие",
  "SearchTips": "Найти подсказку",
  "CheckSpelling": "Проверьте правописание ключевых слов",
  "TryUsingFewerKeywords": "Попытайтесь использовать меньшее количество, другие и более общие ключевые слова.",
  "SelectFewerFilters": "Сократите количество фильтров для расширения поиска.",
}
  var locales = String["locales"] || (String["locales"] = {});
  locales["ru"] = merge(locales["ru"], dict);
  String["toLocaleString"].call(this, { "ru": dict });
  String["locale"] = "ru";
  String["defaultLocale"] = "en";
  Globalize.culture("ru")})();
if(!window.Coveo){window.Coveo = {};}
Coveo.setLanguageAfterPageLoaded = function() {
var merge = function(obj1, obj2) {
  var obj3 = {};
  for(var attrname in obj1){obj3[attrname] = obj1[attrname]; }
  for(var attrname in obj2){obj3[attrname] = obj2[attrname]; }
  return obj3;
}

var dict = {
  "Unknown": "Неизвестно",
  "And": "И",
  "Authenticating": "Аутентификация {0}...",
  "Clear": "Очистить {0}",
  "CompleteQuery": "Полная строка запроса",
  "Exclude": "Исключить {0}",
  "EnterTag": "Добавить тег",
  "Next": "Следующая",
  "Last": "Последняя",
  "Link": "Ссылка",
  "Or": "ИЛИ",
  "Previous": "Предыдущая",
  "QueryDidntMatchAnyDocuments": "Ни один из документов не отвечает вашему запросу.",
  "QueryException": "В вашем запросе содержится ошибка: {0}.",
  "Me": "Я",
  "Remove": "Удалить",
  "Search": "Искать",
  "SearchFor": "Найти {0}",
  "ShareQuery": "Поделиться запросом",
  "Preferences": "Личные параметры настройки",
  "LinkOpeningSettings": "Параметры настройки открытия ссылок",
  "Reauthenticate": "Повторная аутентификация {0}",
  "ResultsFilteringExpression": "Результаты фильтрации поисковых фраз",
  "FiltersInYourPreferences": "Фильтры в личных параметрах настройки",
  "Create": "Создать",
  "SearchIn": "Найти в {0}",
  "Seconds": "через {0} <sn>секунду</sn><pl>секунд</pl>",
  "ShowingResultsOf": "Результат<pl>ы</pl> {0}<pl>-{1}</pl> из {2}",
  "SwitchTo": "Переключиться на {0}",
  "Unexclude": "Убрать исключение {0}",
  "ClearAllFilters": "Сброс всех фильтров",
  "SkipLogin": "Пропустить авторизацию",
  "LoginInProgress": "Выполняется авторизация, пожалуйста, подождите ...",
  "Login": "Авторизоваться",
  "GetStarted": "Начать",
  "More": "Больше",
  "Less": "Меньше",
  "Settings": "Параметры настройки",
  "Score": "Показатель",
  "ScoreDescription": "Показатель рассчитывается исходя из количества результатов, а также из положения в перечне результатов.",
  "Occurrences": "Совпадения",
  "OccurrencesDescription": "Сортировать по количеству совпадений - в порядке убывания.",
  "Label": "Ярлык",
  "Of": "из",
  "LabelDescription": "Сортировать в алфавитном порядке по значениям поля.",
  "Value": "Значение",
  "ValueDescription": "Сортировать по значениям первого расчетного поля",
  "AlphaAscending": "Возрастающее значение",
  "AlphaDescending": "Убывающее значение",
  "ChiSquare": "Хи-квадрат",
  "Nosort": "Не отсортировано",
  "RelativeFrequency": "Относительная частота",
  "RelativeFrequencyDescription": "Сортировать по значению относительной частоты. Нечастотные значения отобразятся сверху",
  "DateDistribution": "Дата распределения",
  "Custom": "Пользовательский",
  "CustomDescription": "Сортировать в специальном порядке",
  "ComputedField": "Расчетное поле",
  "Ascending": "По возрастанию",
  "Descending": "По убыванию",
  "noResultFor": "Нет результатов по {0}",
  "autoCorrectedQueryTo": "Запрос автоматически исправлен на {0}",
  "didYouMean": "Вы имели ввиду: {0}",
  "SuggestedResults": "Предлагаемые результаты",
  "SuggestedQueries": "Предлагаемые запросы",
  "MostRelevantItems": "Наиболее релевантные пункты:",
  "AllItems": "Все пункты:",
  "ShowLess": "Показывать меньше",
  "ShowMore": "Показывать больше",
  "HideFacet": "Скрыть ячейку",
  "ShowFacet": "Показать ячейку",
  "AndOthers": "и {0} другой (другие)",
  "Others": "{0} другой (другие)",
  "MostRelevantPosts": "Наиболее релевантные сообщения:",
  "CompleteThread": "Вся ветка обсуждения:",
  "ShowCompleteThread": "Показать всю ветку обсуждения",
  "ShowOnlyTopMatchingPosts": "Показать только верхние подходящие сообщения",
  "MostRelevantReplies": "Наиболее релевантные ответы:",
  "AllConversation": "Все диалоги:",
  "ShowAllConversation": "Показать весь диалог",
  "ShowAllReplies": "Показать все ответы",
  "ShowOnlyMostRelevantReplies": "Показывать только наиболее релевантные ответы",
  "Close": "Закрыть",
  "Open": "Открыть",
  "OpenInOutlookWhenPossible": "Открывать в Outlook (когда возможно)",
  "AlwaysOpenInNewWindow": "Всегда открывать результаты в новом окне",
  "Quickview": "Быстрый просмотр",
  "ErrorReport": "Сообщение об ошибке",
  "OopsError": "Что-то случилось с сервером.",
  "ProblemPersists": "При постоянном возникновении этой проблемы обратитесь к администратору.",
  "GoBack": "Назад",
  "Reset": "Перезагрузка",
  "Retry": "Повторить",
  "MoreInfo": "Дополнительная информация",
  "Username": "Имя пользователя",
  "Password": "Пароль",
  "PostedBy": "Опубликовано",
  "CannotConnect": "Невозможно подключиться к адресу сервера",
  "BadUserPass": "Пароль не соответствует имени пользователя",
  "PleaseEnterYourCredentials": "Введите свои учетные данные для {0}.",
  "PleaseEnterYourSearchPage": "Пожалуйста, введите URL-адрес искомой страницы",
  "Collapse": "Свернуть",
  "Collapsable": "Свертываемый",
  "Expand": "Расширить",
  "Today": "Сегодня",
  "Yesterday": "Вчера",
  "Tomorrow": "Завтра",
  "Duration": "Продолжительность: {0}",
  "IndexDuration": "Продолжительность индекса: {0}",
  "ProxyDuration": "Продолжительность прокси: {0}",
  "ClientDuration": "Продолжительность клиента: {0}",
  "Unavailable": "Недоступно",
  "Reply": "Ответить",
  "ReplyAll": "Ответить всем",
  "Forward": "Переслать",
  "From": "От",
  "Caption": "Заголовок",
  "Expression": "Поисковая фраза",
  "Tab": "Вкладка",
  "Tabs": "Вкладки",
  "EnterExpressionName": "Введите фразу",
  "EnterExpressionToFilterWith": "Введите фразу для фильтрации результатов",
  "SelectTab": "Выбрать вкладку",
  "SelectAll": "Выбрать все",
  "PageUrl": "Найти URL-адрес страницы",
  "ErrorSavingToDevice": "Ошибка при сохранении информации на ваше устройство",
  "ErrorReadingFromDevice": "Ошибка при чтении информации с вашего устройства",
  "AppIntro": "Пообщайтесь со специалистом по продукции, который сможет ответить на ваши вопросы о Conveo и поможет решить, какое решение Coveo вам подойдет. Или попробуйте демоверсию с автоматическим обновлением!",
  "TryDemo": "Попробовать демоверсию",
  "ContactUs": "Связаться с нами",
  "NewToCoveo": "Не знакомы с Coveo?",
  "LetUsHelpGetStarted": "Позвольте помочь вам приступить к работе",
  "LikesThis": "{0} нравится<sn> нравится</sn> это.",
  "CannotConnectSearchPage": "Не удалось подключиться к вашей странице поиска",
  "AreYouSureDeleteFilter": "Вы действительно желаете удалить фильтр {0} с поисковой фразой {1}",
  "OnlineHelp": "Онлайн справка",
  "Done": "Выполнено",
  "SaveFacetState": "Сохранить формат данной ячейки",
  "ClearFacetState": "Очистить формат ячейки",
  "DisplayingTheOnlyMessage": "Отображение единственного сообщения в данном диалоге",
  "NoNetworkConnection": "Нет сетевых подключений",
  "UnknownConnection": "Неизвестное подключение",
  "EthernetConnection": "Подключение через Ethernet",
  "WiFi": "Подключение через WiFi",
  "CELL": "Мобильное подключение",
  "CELL_2G": "Мобильное подключение 2G",
  "CELL_3G": "Мобильное подключение 3G",
  "CELL_4G": "Мобильное подключение 4G",
  "Relevance": "Релевантность",
  "Date": "Дата",
  "Amount": "Количество",
  "QueryExceptionNoException": "Нет исключений",
  "QueryExceptionInvalidSyntax": "Недопустимый синтаксис",
  "QueryExceptionInvalidCustomField": "Недопустимое расчетное поле",
  "QueryExceptionInvalidDate": "Недопустимая дата",
  "QueryExceptionInvalidExactPhrase": "Недопустимая точная фраза",
  "QueryExceptionInvalidDateOp": "Недопустимый оператор дат",
  "QueryExceptionInvalidNear": "Недопустимый оператор NEAR",
  "QueryExceptionInvalidWeightedNear": "Недопустимый взвешенный NEAR",
  "QueryExceptionInvalidTerm": "Недопустимое термин",
  "QueryExceptionTooManyTerms": "Слишком много терминов",
  "QueryExceptionWildcardTooGeneral": "Слишком общий специальный символ",
  "QueryExceptionInvalidSortField": "Недопустимое поле сортировки",
  "QueryExceptionInvalidSmallStringOp": "Недопустимый строковый оператор",
  "QueryExceptionRequestedResultsMax": "Максимум запрашиваемых результатов",
  "QueryExceptionAggregatedMirrorDead": "Уделенное зеркало отключено",
  "QueryExceptionAggregatedMirrorQueryTimeOut": "Время ожидания запроса через уделенное зеркало",
  "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Недопустимый текущий номер удаленного зеркала",
  "QueryExceptionAggregatedMirrorCannotConnect": "Интегральное зеркало невозможно подключить",
  "QueryExceptionNotEnoughLeadingCharsWildcard": "Недостаточное количество ведущих символов до специального символа",
  "QueryExceptionSecurityInverterNotFound": "Инвертор безопасности не найден",
  "QueryExceptionSecurityInverterAccessDenied": "В доступе к инвертору безопасности отказано",
  "QueryExceptionAggregatedMirrorCannotImpersonate": "Уделенное зеркало не может отправлять запросы от имени пользователя",
  "QueryExceptionUnexpected": "Непредвиденный",
  "QueryExceptionAccessDenied": "В доступе отказано",
  "QueryExceptionSuperUserTokenInvalid": "Право доступа привилегированного пользователя недействительно",
  "QueryExceptionSuperUserTokenExpired": "Право доступа привилегированного пользователя истекло",
  "QueryExceptionLicenseQueriesExpired": "Лицензия на осуществление запросов истекла",
  "QueryExceptionLicenseSuperUserTokenNotSupported": "Лицензия доступа привилегированного пользователя не поддерживается",
  "QueryExceptionInvalidSession": "Сессия недействительна",
  "QueryExceptionInvalidDocument": "Недействительный документ",
  "QueryExceptionSearchDisabled": "Поиск отключен",
  "FileType": "Тип файла",
  "ShowAttachment": "Показать приложение",
  "OnFeed": "на {0} исходный материал.",
  "Author": "Автор",
  "NoTitle": "Без названия",
  "CurrentSelections": "Текущие результаты выбора",
  "AllContent": "Все содержание",
  "CancelLastAction": "Отменить последнее действие",
  "SearchTips": "Найти подсказку",
  "CheckSpelling": "Проверьте правописание ключевых слов",
  "TryUsingFewerKeywords": "Попытайтесь использовать меньшее количество, другие и более общие ключевые слова.",
  "SelectFewerFilters": "Сократите количество фильтров для расширения поиска.",
}

  var locales = String["locales"] || (String["locales"] = {});
  locales["ru"] = merge(locales["ru"], dict);
  String["toLocaleString"].call(this, { "ru": dict });
  String["locale"] = "ru";
  String["defaultLocale"] = "en";
  Globalize.culture("ru")
}