(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(e,t,r){"use strict";r.r(t);r(42),r(173),r(25),r(3),r(31),r(20),r(7),r(174),r(175),r(255),r(254);var n=r(244),a=r(15),o=r(0),i=r(314),l=r.n(i),u=(r(77),r(259));function c(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(u.a)(e);return t.setHours(0,0,0,0),t}function d(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=c(e),n=c(t);return r.getTime()===n.getTime()}(e,Date.now())}r(8),r(27);var s=Object(n.a)("div",{target:"eno15wf0"})("display:grid;grid-template-columns:",function(e){return"repeat("+e.numberOfButtons+", auto [col-start])"},";grid-column-gap:10px;",function(e){return e.overflow?"overflow: "+e.overflow:""},";"),p=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children"]);return Object(a.d)(s,r,t)},f=r(269),g=r(280),b=r(75),m=r(451),h=r.n(m),y=r(312),w=r(258),j=r(246),v=r(247),O=[{label:"Felles",type:"other"},{label:"Keynote",type:"keynote"},{label:"Talk",type:"talk"}],k=Object(n.a)("div",{target:"ejkgj6o0"})("display:grid;width:40%;grid-template-rows:",j.a.large,";grid-template-columns:30% 30% 30%;margin:0 auto;grid-column-gap:",j.a.normal,";@media (",v.a.medium,"){width:100%;margin-top:",j.a.large,";}"),x=function(e){return Object(b.a)("dipfont-weight:700;border-radius:5px;color:white;background-color:",y.q[e],";")},D=function(e){return Object(b.a)("font-weight:700;border-radius:5px;color:black;background-color:inherit;border:2px solid ",y.q[e],";")},S=function(e,t,r){return e?t?D(r):x(r):t?x(r):D(r)},A=function(e){var t=e.activeFilters,r=e.onChangeActiveFilters;return Object(a.d)(k,null,O.map(function(e){return Object(a.d)(w.a,{key:e.type,onClick:function(){return r(e.type)},appearance:"stripped",css:(n=e.type,o=t.includes(e.type),void 0===n&&(n="other"),void 0===o&&(o=!1),Object(b.a)("&,&:focus{display:flex;justify-content:center;line-height:1.8rem;",S(!1,o,n),";}&:hover{display:flex;justify-content:center;line-height:1.8rem;",S(!0,o,n),";}"))},e.label,t.includes(e.type)&&Object(a.d)(h.a,null));var n,o}))},T=r(289),E=r(278),q=r(253),F=r(279),C=r(245),H=r(276);function N(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"getActiveDay",function(){return J});var B=Object(a.c)("color:white;background-color:",C.a.blueDarkest,";border-color:",C.a.blueDarkest,";"),L=Object(n.a)("div",{target:"ediprem0"})("display:flex;flex-direction:column;@media (",v.a.medium,"){display:grid;grid-template-columns:90% 10%;grid-template-rows:auto;grid-template-areas:'button arrow';}"),z=Object(n.a)("a",{target:"ediprem1"})("padding:",j.a.small," ",j.a.normal,";background-color:",C.a.blue,";text-decoration:none;color:white;border:1px solid ",C.a.blue,";border-radius:50px;text-align:center;display:",function(e){return e.isActive&&B},";&:hover,&:focus{",B,";}@media (",v.a.medium,"){grid-area:button;}"),I=Object(a.c)("margin-top:",j.a.xsmall,";color:",C.a.blue,";visibility:visible;align-self:center;@media (",v.a.medium,"){grid-area:arrow;visibility:hidden;}"),J=function(){return q.a.days.find(function(e){return d(new Date(q.b.year,q.b.monthNumber-1,e.date))})||q.a.days[0]};t.default=function(e){var t=e.location,r=z.withComponent(T.a,{target:"ediprem2"}),n=Object(o.useState)(O.map(function(e){return e.type})),i=n[0],u=n[1],c=Object(o.useState)([]),d=c[0],s=c[1],b=q.a.days.find(function(e){return e.date===t.hash.substring(1)})||J();if(!b||!b.date)return Object(a.d)("span",null,"Her skjedde noe feil gitt...");Object(o.useEffect)(function(){u(O.map(function(e){return e.type}));var e=Object(H.a)();s(e)},[]),Object(o.useEffect)(function(){u(O.map(function(e){return e.type}))},[t]);var m=d.filter(function(e){return e.date===b.date}).filter(function(e){return!(i.length>0)||i.includes(e.type||"other")});return Object(a.d)(F.a,null,Object(a.d)(f.a,null,Object(a.d)(g.a,{minHeight:"5vh",backgroundColor:C.a.blueDark,color:"white"},Object(a.d)(p,{css:(q.a.days.length,Object(a.c)("margin:",j.a.large," auto;margin-bottom:0;grid-template-columns:100%;grid-template-rows:",j.a.xlarge,";grid-template-columns:25% 25% 25% 25%;width:80%;grid-template-rows:auto;@media (",v.a.medium,"){grid-row-gap:10px;width:100%;grid-template-rows:auto auto;grid-template-columns:50% 50%;margin-bottom:",j.a.normal,";}")),numberOfButtons:q.a.days.length},q.a.days.map(function(e){return Object(a.d)(L,{key:e.label},Object(a.d)(r,{isActive:b.date===e.date,to:"/schedule#"+e.date},e.label),b.date===e.date&&Object(a.d)(l.a,{css:I,fontSize:"large"}))}))),Object(a.d)(g.a,{minHeight:"95vh",withTopSeperator:!0,withBottomSeperator:!0},Object(a.d)(A,{activeFilters:i,onChangeActiveFilters:function(e){var t=i.includes(e)?i.filter(function(t){return t!==e}):[].concat(N(i),[e]);u(t)}}),Object(a.d)(E.a,{activeFilter:i,slots:m}))))}},259:function(e,t,r){"use strict";r.d(t,"a",function(){return n});r(25),r(28),r(3);function n(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},451:function(e,t,r){"use strict";r(26);var n=r(62);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(250)).default)(a.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=o}}]);
//# sourceMappingURL=component---src-pages-schedule-js-9e11c05169c173ffdaa8.js.map