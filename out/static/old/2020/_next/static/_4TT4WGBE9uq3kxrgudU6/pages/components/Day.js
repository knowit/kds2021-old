(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0tVQ":function(t,e,r){r("FlQf"),r("VJsP"),t.exports=r("WEpk").Array.from},"2qu3":function(t,e,r){"use strict";var n=r("ttDY"),a=r("/HRN"),o=r("WaGi"),i=r("p0XB"),s=r("XXOK"),u=r("Qetd"),l=r("eVuF"),c=r("pLtp"),p=r("hfKm"),d=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};p(e,"__esModule",{value:!0});var f=d(r("q1tI")),h=r("8L3h"),m=r("jwwS"),v=[],g=[],y=!1;function b(t){var e=t(),r={loading:!0,loaded:null,error:null};return r.promise=e.then((function(t){return r.loading=!1,r.loaded=t,t})).catch((function(t){throw r.loading=!1,r.error=t,t})),r}function k(t){var e={loading:!1,loaded:{},error:null},r=[];try{c(t).forEach((function(n){var a=b(t[n]);a.loading?e.loading=!0:(e.loaded[n]=a.loaded,e.error=a.error),r.push(a.promise),a.promise.then((function(t){e.loaded[n]=t})).catch((function(t){e.error=t}))}))}catch(n){e.error=n}return e.promise=l.all(r).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function w(t,e){return f.default.createElement((r=t)&&r.__esModule?r.default:r,e);var r}function O(t,e){var r=u({loader:null,loading:null,delay:200,timeout:null,render:w,webpack:null,modules:null},e),n=null;function a(){if(!n){var e=new j(t,r);n={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var o=r.webpack();g.push((function(t){var e=!0,r=!1,n=void 0;try{for(var i,u=s(o);!(e=(i=u.next()).done);e=!0){var l=i.value;if(-1!==t.indexOf(l))return a()}}catch(c){r=!0,n=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}}))}var l=function(t,e){a();var o=f.default.useContext(m.LoadableContext),s=h.useSubscription(n);return f.default.useImperativeHandle(e,(function(){return{retry:n.retry}})),o&&i(r.modules)&&r.modules.forEach((function(t){o(t)})),s.loading||s.error?f.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:n.retry}):s.loaded?r.render(s.loaded,t):null};return l.preload=function(){return a()},l.displayName="LoadableComponent",f.default.forwardRef(l)}var j=function(){function t(e,r){a(this,t),this._loadFn=e,this._opts=r,this._callbacks=new n,this._delay=null,this._timeout=null,this.retry()}return o(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,r=this._opts;e.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){t._update(),t._clearTimeouts()})).catch((function(e){t._update(),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=u(u({},this._state),t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return u(u({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function _(t){return O(b,t)}function N(t,e){for(var r=[];t.length;){var n=t.pop();r.push(n(e))}return l.all(r).then((function(){if(t.length)return N(t,e)}))}_.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(k,t)},_.preloadAll=function(){return new l((function(t,e){N(v).then(t,e)}))},_.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new l((function(e){var r=function(){return y=!0,e()};N(g,t).then(r,r)}))},window.__NEXT_PRELOADREADY=_.preloadReady,e.default=_},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,r){t.exports=r("uekQ")},"71sZ":function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=l.a.createElement,p=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return c("div",{className:"event-header"},c("span",{className:"type"},this.props.type),c("span",{className:"time"},this.props.timeStart," - ",this.props.timeEnd))}}]),e}(l.a.Component);e.default=p},"8L3h":function(t,e,r){"use strict";t.exports=r("f/k9")},B8i6:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("vYYK"),l=(r("VNbw"),r("Owzh")),c=r("NpAb"),p=r("a6RD"),d=r.n(p),f=r("RleV"),h=r("q1tI"),m=r.n(h),v=r("UxUw"),g=m.a.createElement,y=d()((function(){return r.e(31).then(r.bind(null,"dewo"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["dewo"]},modules:["./FavouriteTalkButton"]}}),b=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this;return g("div",{className:"talk ".concat(this.props.visibility?"":"talk-hidden")},g("div",{className:"header"},g("div",{className:"time"},g("div",{className:"wrapper"},g("img",{src:"../../static/clock.svg",width:"24",height:"24"})),g("span",{className:"time-text"},g("span",{className:"time-text-day"},this.props.day,g("br",null)),this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString())),g("div",{className:"room"},g("div",{className:"wrapper"},g(f.default,{className:Object(v.a)(this.props.room)})),g("span",{className:"text room-name"},this.props.room)),g("div",{className:"diff"},g("div",{className:"wrapper"},g(c.default,{difficulty:this.props.difficulty})),g("span",{className:"text diff-name"},this.props.difficulty)),g("div",{className:"heart"},g(y,{talkId:this.props.id,onClick:this.props.onFavoriteChange}))),g("div",{className:"talk-content"},g("p",{className:"day"},this.props.day),g("p",{className:"time-info"},this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString(),g("span",{className:"duration"},"\xa0(",this.props.timeEnd&&this.props.timeStart&&this.props.timeStart.diff(this.props.timeEnd)," min)")),g("p",{className:"type-info"},this.props.type,g("span",{className:"duration"},"\xa0(",this.props.timeEnd&&this.props.timeStart&&this.props.timeStart.diff(this.props.timeEnd)," min)")),g("h1",{className:"title"},this.props.title),this.props.description&&g("p",null,this.props.description),this.props.speaker&&this.props.speaker.map((function(t){return g("div",null,g("p",{className:"speaker"},t.name),g("p",{className:"info"},t.info))})),g("div",{className:"tags"},this.props.tags&&this.props.language&&this.props.tags.concat([this.props.language]).map((function(e){return g(l.default,{key:e,name:e,selected:t.props.selectedTags.indexOf(e)>-1,onClick:function(){return t.props.onToggleTag(e)}})}))),g("hr",{className:"seperator"})))}}]),e}(m.a.Component);Object(u.a)(b,"defaultProps",{visibility:!0}),e.default=b},BKPM:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Day",function(){return r("yHM/")}])},DacR:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=r("UxUw"),p=r("RleV"),d=(r("h5s+"),l.a.createElement),f=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=Object(c.a)(this.props.room),e={msGridColumn:this.props.index+1,msGridRow:1};return d(u.Fragment,null,this.props.showRoomHeader&&d("div",{className:"room-header ".concat(this.props.index%2==0?"room-even":"room-odd"),style:e},d(p.default,{className:t,small:!0}),d("div",{className:"room-header-text"},this.props.room)),this.props.children)}}]),e}(u.Component);e.default=f},IP1Z:function(t,e,r){"use strict";var n=r("2faE"),a=r("rr1i");t.exports=function(t,e,r){e in t?n.f(t,e,a(0,r)):t[e]=r}},NpAb:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=(r("HrOg"),r("q1tI")),l=r.n(u),c=l.a.createElement,p=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return c("div",{className:"difficulty"},c("span",{className:"first active"}),c("span",{className:"second ".concat("Intermediate"==this.props.difficulty||"Advanced"==this.props.difficulty?"active":"")}),c("span",{className:"third ".concat("Advanced"==this.props.difficulty?"active":"")}))}}]),e}(l.a.Component);e.default=p},RleV:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=(r("hu+i"),l.a.createElement),p=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return c("div",{className:"pin ".concat(this.props.small?"small":""," ").concat(this.props.className)},c("div",{className:"top",style:{borderColor:"#FF00FF"}}),c("div",{className:"bottom",style:{borderColor:"#FF00FF transparent transparent  transparent"}}))}}]),e}(l.a.Component);e.default=p},UxUw:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("6BQ9");var n=r("UI+n"),a=["room-header-green","room-header-purple","room-header-red","room-header-yellow"],o=function(t){var e=Math.abs(n.program.rooms.indexOf(t)%a.length);return a[e]}},VJsP:function(t,e,r){"use strict";var n=r("2GTP"),a=r("Y7ZC"),o=r("JB68"),i=r("sNwI"),s=r("NwJ3"),u=r("tEej"),l=r("IP1Z"),c=r("fNZA");a(a.S+a.F*!r("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,a,p,d=o(t),f="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,g=0,y=c(d);if(v&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==y||f==Array&&s(y))for(r=new f(e=u(d.length));e>g;g++)l(r,g,v?m(d[g],g):d[g]);else for(p=y.call(d),r=new f;!(a=p.next()).done;g++)l(r,g,v?i(p,m,[a.value,g],!0):a.value);return r.length=g,r}})},XWtR:function(t,e,r){var n=r("5T2Y").parseInt,a=r("oc46").trim,o=r("5pKv"),i=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=a(String(t),3);return n(r,e>>>0||(i.test(r)?16:10))}:n},a6RD:function(t,e,r){"use strict";var n=r("pLtp"),a=r("Qetd"),o=r("eVuF"),i=r("hfKm"),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var u=s(r("q1tI")),l=s(r("2qu3")),c=!1;function p(t,e){if(delete e.webpack,delete e.modules,!c)return t(e);var r=e.loading;return function(){return u.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=p,e.default=function(t,e){var r=l.default,i={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};if(t instanceof o?i.loader=function(){return t}:"function"===typeof t?i.loader=t:"object"===typeof t&&(i=a(a({},i),t)),i=a(a({},i),e),"object"===typeof t&&!(t instanceof o)&&(t.render&&(i.render=function(e,r){return t.render(r,e)}),t.modules)){r=l.default.Map;var s={},u=t.modules();n(u).forEach((function(t){var e=u[t];"function"!==typeof e.then?s[t]=e:s[t]=function(){return e.then((function(t){return t.default||t}))}})),i.loader=s}if(i.loadableGenerated&&delete(i=a(a({},i),i.loadableGenerated)).loadableGenerated,"boolean"===typeof i.ssr){if(!i.ssr)return delete i.ssr,p(r,i);delete i.ssr}return r(i)}},d04V:function(t,e,r){t.exports=r("0tVQ")},dEVD:function(t,e,r){var n=r("Y7ZC"),a=r("XWtR");n(n.G+n.F*(parseInt!=a),{parseInt:a})},"f/k9":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("q1tI"),a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;var e={};for(t=0;10>t;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(t,e){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");for(var r,n=Object(t),s=1;s<arguments.length;s++){var u=Object(arguments[s]);for(var l in u)o.call(u,l)&&(n[l]=u[l]);if(a){r=a(u);for(var c=0;c<r.length;c++)i.call(u,r[c])&&(n[r[c]]=u[r[c]])}}return n};e.useSubscription=function(t){var e=t.getCurrentValue,r=t.subscribe,a=n.useState((function(){return{getCurrentValue:e,subscribe:r,value:e()}}));t=a[0];var o=a[1];return a=t.value,t.getCurrentValue===e&&t.subscribe===r||(a=e(),o({getCurrentValue:e,subscribe:r,value:a})),n.useDebugValue(a),n.useEffect((function(){function t(){if(!n){var t=e();o((function(n){return n.getCurrentValue!==e||n.subscribe!==r||n.value===t?n:s({},n,{value:t})}))}}var n=!1,a=r(t);return t(),function(){n=!0,a()}}),[e,r]),a}},jwwS:function(t,e,r){"use strict";var n=r("hfKm"),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};n(e,"__esModule",{value:!0});var o=a(r("q1tI"));e.LoadableContext=o.createContext(null)},oc46:function(t,e,r){var n=r("Y7ZC"),a=r("Jes0"),o=r("KUxP"),i=r("5pKv"),s="["+i+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(t,e,r){var a={},s=o((function(){return!!i[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),u=a[t]=s?e(p):i[t];r&&(a[r]=u),n(n.P+n.F*s,"String",a)},p=c.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},uekQ:function(t,e,r){r("dEVD"),t.exports=r("WEpk").parseInt},vYYK:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("hfKm"),a=r.n(n);function o(t,e,r){return e in t?a()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},w77i:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),a=r("sLSF"),o=r("MI3g"),i=r("a7VT"),s=r("Tit0"),u=r("q1tI"),l=r.n(u),c=r("B8i6"),p=r("DacR"),d=r("yNXk"),f=l.a.createElement,h=function(t){function e(t){return Object(n.a)(this,e),Object(o.a)(this,Object(i.a)(e).call(this,t))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"createRoom",value:function(t,e){for(var r=this,n=d.a.fromNumber(this.props.slot.timeStart),a=0,o=t.talks.map((function(o){var i={msGridRow:a+2,msGridColumn:e+1},s=n.copy().add(Object(d.b)(o)),u=f("div",{className:"talk-container ".concat(a%2==0?"talk-even":"talk-odd"," ").concat(e%2==0?"room-even":"room-odd"),key:a,style:i},f(c.default,{visibility:!o.hide,day:r.props.day,timeStart:n,timeEnd:s,room:t.name,difficulty:o.difficulty,id:o.talkId,type:o.type,title:o.title,speaker:o.speakers,tags:o.tags,selectedTags:r.props.tags,language:o.language,onToggleTag:r.props.onToggleTag,key:a}));return n=s,o.hide||a++,u})),i=t.talks.filter((function(t){return!t.hide})).length,s=0;s<this.props.trackLength-i;s++){var u=a+s;o.push(f("div",{className:"talk-container empty ".concat(u%2==0?"talk-even":"talk-odd"," ").concat(e%2==0?"room-even":"room-odd"),key:s}))}return o}},{key:"render",value:function(){var t=this;if(this.props.slot&&this.props.slot.rooms&&1==this.props.slot.rooms.length){var e=this.props.slot.rooms[0];return f("div",{className:"rooms single-track"},this.props.slot.rooms&&f(p.default,{key:e.name,showRoomHeader:!1,room:e},this.createRoom(e,0)))}var r={gridTemplateColumns:"repeat(".concat(this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.length,", 1fr)"),gridTemplateRows:"60px ".concat(this.props.trackLength>0?"repeat(".concat(this.props.trackLength,", 1fr)"):""),msGridRows:"60px  ".concat(this.props.trackLength>0?"(1fr)[".concat(this.props.trackLength,"]"):""),msGridColumns:"(1fr) [".concat(this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.length,"]")};return f("div",{className:"rooms multi-track",style:r},this.props.slot&&this.props.slot.rooms&&this.props.slot.rooms.map((function(e,r){return f(p.default,{key:e.name,index:r,showRoomHeader:t.props.showRoomHeader,room:e.name},t.createRoom(e,r))})))}}]),e}(u.Component);e.default=h},"yHM/":function(t,e,r){"use strict";r.r(e);var n=r("p0XB"),a=r.n(n);var o=r("d04V"),i=r.n(o),s=r("yLu3"),u=r.n(s);function l(t){return function(t){if(a()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=r("0iUn"),p=r("sLSF"),d=r("MI3g"),f=r("a7VT"),h=r("Tit0"),m=r("q1tI"),v=r.n(m),g=r("71sZ"),y=r("w77i"),b=v.a.createElement,k=function(t){function e(){return Object(c.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"longestTrack",value:function(t){return Math.max.apply(Math,l(t.rooms&&t.rooms.map((function(t){return t.talks&&t.talks.filter((function(t){return!t.hide})).length}))))}},{key:"render",value:function(){var t=this;return b("div",{className:"day"},this.props.slots&&this.props.slots.map((function(e,r){return b("div",{key:r+"slot",className:"slot"},b(g.default,{key:r+"slot",timeStart:e.timeStart,timeEnd:e.timeEnd,type:e.type}),e.rooms&&b(y.default,{day:t.props.currDay.day,onToggleTag:t.props.onToggleTag,tags:t.props.tags,slot:e,showRoomHeader:!0,trackLength:t.longestTrack(e)}))})))}}]),e}(m.Component);e.default=k},yNXk:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return l}));var n=r("6BQ9"),a=r.n(n),o=r("0iUn"),i=r("sLSF"),s=r("vYYK"),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";Object(o.a)(this,t),Object(s.a)(this,"hours",void 0),Object(s.a)(this,"minutes",void 0),this.hours=a()(e),this.minutes=a()(r)}return Object(i.a)(t,[{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".";return("0"+this.hours).slice(-2)+t+("0"+this.minutes).slice(-2)}},{key:"add",value:function(t){return this.hours+=t.hours+Math.floor((this.minutes+t.minutes)/60),this.minutes=(this.minutes+t.minutes)%60,this}},{key:"copy",value:function(){var e=new t;return e.add(this),e}},{key:"diff",value:function(t){return Math.abs(60*this.hours+this.minutes-t.minutes-60*t.hours)}}],[{key:"fromString",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=e.split(r);return new t(n[0],n[1])}},{key:"fromNumber",value:function(e){return new t(e.toString().substring(0,e.toString().length-2),e.toString().substring(e.toString().length-2,e.toString().length))}}]),t}();function l(t){switch(t.type){case"Lightning talk (10 minutes)":return new u("00","10");case"Short presentation (30 minutes)":return new u("00","30");case"Long presentation (60 minutes)":return new u("01","00");case"Workshop (90 minutes)":return new u("01","30");case"Workshop (60 minutes)":return new u("01","00");case"Workshop (30 minutes)":return new u("00","30")}return new u}}},[["BKPM",0,1,2]]]);