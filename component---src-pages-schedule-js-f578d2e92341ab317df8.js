(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(e,t,a){"use strict";a.r(t);a(74);var n=a(6),r=a.n(n),o=a(52),c=a.n(o),i=(a(148),a(142)),l=a(7),d=a(0),u=a.n(d),s=a(154),b=a(173),p=a(163),g=a(4),f=a.n(g),m=a(196),h=a.n(m),j=a(143),O=a(151),v=a(144),w=Object(i.a)("div",{target:"e1a4fbgg0"})("margin-top:1rem;display:flex;background-color:white;flex-flow:row;border-radius:5px;&:last-child{margin-bottom:",v.a.large,";}@media (",O.a.medium,"){margin:",v.a.small,";}"),y=Object(i.a)("span",{target:"e1a4fbgg1"})("@media (",O.a.medium,"){align-self:center;width:100%;text-align:center;margin-bottom:1rem;}"),k=Object(i.a)("div",{target:"e1a4fbgg2"})("padding:1rem 0;width:90%;@media (",O.a.medium,"){padding:1rem 0;font-weight:bold;width:100%;}"),x={other:j.a.green,talk:j.a.blueDarkest,workshop:j.a.blue},C=Object(i.a)("div",{target:"e1a4fbgg3"})("background-color:",function(e){return e.type?x[e.type]:x.other},";width:",v.a.small,";border:1px solid ",function(e){return e.type?x[e.type]:x.other},";border-top-left-radius:5px;border-bottom-left-radius:5px;"),S=Object(i.a)("span",{target:"e1a4fbgg4"})("width:10%;margin-left:",v.a.normal,";display:flex;flex-flow:column;justify-content:center;margin-right:",v.a.normal,";"),D=Object(i.a)("span",{target:"e1a4fbgg5"})("margin-top:",v.a.small,";color:",j.a.grey,";"),z=Object(i.a)("strong",{target:"e1a4fbgg6"})("display:inline-block;padding:",v.a.normal," 0;"),B=Object(i.a)("span",{target:"e1a4fbgg7"})({name:"1baulvz",styles:"display:inline-block;"}),T=function(e){return Object(l.c)("max-width:",e,"px;overflow:hidden;position:relative;white-space:nowrap;&:before{content:'';position:absolute;top:0;left:calc(",e,"px - 60px);height:100%;width:60px;background:linear-gradient( to right,rgba(255,255,255,0) 30%,rgba(255,255,255,1) 100% );}")},E=function(e){return Object(l.c)("transform:rotate(",e,"deg);transition:transform 1s ease-in-out;")},M=function(e){var t=e.collection,a=u.a.createRef(),n=Object(d.useState)(void 0),r=n[0],o=n[1],c=Object(d.useState)(!1),i=c[0],s=c[1];return Object(d.useEffect)(function(){var e=a.current.getBoundingClientRect();e.height>25&&o(e.width-3*v.a.spacingUnit)},[t.description]),Object(l.d)(w,null,Object(l.d)(C,{type:"talk"}),Object(l.d)(S,null,Object(l.d)(y,null,t.start+" - "+t.end),Object(l.d)(D,null,"60 min")),Object(l.d)(k,null,Object(l.d)(z,null,t.title),Object(l.d)(B,{ref:a,css:r&&!i&&T(r)},t.description),Object(l.d)(p.a,{appearance:"stripped",onClick:function(){return s(!i)}},Object(l.d)(h.a,{css:E(i?180:0)}))))};M.propTypes={collection:f.a.object};var H=M,R=function(e){var t=e.collection;return Object(l.d)(w,null,Object(l.d)(C,{type:"other"}),Object(l.d)(S,null,Object(l.d)(y,null,t.time)),Object(l.d)(k,null,Object(l.d)(z,null,t.title)))};R.propTypes={collection:f.a.object};var _=R,q=function(e){var t=e.collection;return t?"talk"===t.type?Object(l.d)(H,{collection:t}):Object(l.d)(_,{collection:t}):null};q.propTypes={collection:f.a.object};var A=q,I=a(153),J=a(168),F=a(164),L=a(165),P=Object(l.c)("margin:",v.a.large," auto;"),U=Object(l.c)("color:white;background-color:",j.a.blueDarkest,";border-color:",j.a.blueDarkest,";"),G=Object(i.a)("div",{target:"ediprem0"})("display:flex;flex-direction:column;align-items:center;@media (",O.a.medium,"){display:none;}"),K=Object(i.a)("a",{target:"ediprem1"})("padding:",v.a.small," ",v.a.normal,";background-color:",j.a.blue,";text-decoration:none;color:white;border:1px solid ",j.a.blue,";border-radius:50px;text-align:center;",function(e){return e.isActive&&U},";&:hover,&:focus{",U,";}@media (",O.a.medium,"){display:none;}"),N=Object(i.a)("select",{target:"ediprem2"})("border-radius:0;height:4rem;width:90%;background-color:white;margin:0 auto;margin-bottom:",v.a.small,";display:none;@media (",O.a.medium,"){display:block;}"),Q=Object(l.c)("margin-top:",v.a.xsmall,";color:",j.a.blue,";"),V=function(e){function t(){var t;return(t=e.call(this)||this).onDayClick=t.onDayClick.bind(c()(c()(t))),t.onSelectChange=t.onSelectChange.bind(c()(c()(t))),t.state={activeIndex:0},t}r()(t,e);var a=t.prototype;return a.onDayClick=function(e,t){e.preventDefault(),this.setState({activeIndex:t},function(){window.location.hash="#"+t})},a.onSelectChange=function(e){var t=s.a.schedules[e.target.value];window.location.hash="#"+(s.a.schedules[e.target.value]?t.date:s.a.schedules[0].date)},a.render=function(){var e=this,t=this.props.location,a=K.withComponent(J.a,{target:"ediprem3"}),n=s.a.schedules.find(function(e){return e.date===t.hash.substring(1)})||s.a.schedules[0];return n&&n.day?Object(l.d)(F.a,null,Object(l.d)(I.a,null,Object(l.d)(L.a,{minHeight:"10vh",backgroundColor:j.a.blueDark,color:"white"},Object(l.d)(b.a,{css:P,numberOfButtons:s.a.schedules.length},s.a.schedules.map(function(e,t){return Object(l.d)(G,null,Object(l.d)(a,{key:e.day,isActive:n.date===e.date,to:"/schedule#"+e.date},e.day),n.date===e.date&&Object(l.d)(h.a,{css:Q,fontSize:"large"}))})),Object(l.d)(N,{onChange:this.onSelectChange},s.a.schedules.map(function(t,a){return Object(l.d)("option",{key:t.day,value:a,onClick:function(t){return e.onDayClick(t,a)}},t.day)}))),Object(l.d)(L.a,{withTopSeperator:!0,withBottomSeperator:!0},n.collections.map(function(e,t){return Object(l.d)(A,{key:e.title+"_"+t,collection:e})})))):Object(l.d)("span",null,"Her skjedde noe feil gitt...")},t}(u.a.Component);t.default=V},163:function(e,t,a){"use strict";var n=a(49),r=a.n(n),o=a(145),c=a.n(o),i=a(142),l=a(7),d=(a(0),a(4)),u=a.n(d),s=a(143),b=a(166),p=a.n(b),g=Object(l.c)("background-color:",p()(.1,s.a.blue),";border:1px solid ",p()(.1,s.a.blue),";color:white;"),f={name:"14gs6vp",styles:"transition:background-color none;padding:0;border-radius:0;font-size:1em;color:inherit;background-color:transparent;outline:none;border:none;display:inline-block;box-shadow:none;"},m={stripped:Object(l.c)(f,";&:hover,&:focus{",f,";}"),outline:Object(l.c)("background-color:white;color:",s.a.blue,";&:hover,&:focus{background-color:",s.a.blue,";border-color:",s.a.blue,";color:white;}"),active:g},h=Object(i.a)("button",{target:"e1ktqws60"})("padding:0.8rem 3rem;background-color:",s.a.blue,";border:1px solid ",s.a.blue,";color:white;font-size:1.2rem;font-weight:100;border-radius:30px;&:hover,&:focus{",g,";}",function(e){return e.appearance&&m[e.appearance]},";}"),j=function(e){var t=e.appearance,a=e.children,n=c()(e,["appearance","children"]);return Object(l.d)(h,r()({appearance:t},n),a)};j.propTypes={appearance:u.a.string,arrowBottom:u.a.bool},t.a=j},173:function(e,t,a){"use strict";var n=a(145),r=a.n(n),o=a(142),c=a(7),i=(a(0),a(4)),l=a.n(i),d=Object(o.a)("div",{target:"eno15wf0"})("display:grid;grid-template-columns:",function(e){return"repeat("+e.numberOfButtons+", auto [col-start])"},";grid-column-gap:10px;"),u=function(e){var t=e.children,a=r()(e,["children"]);return Object(c.d)(d,a,t)};u.propTypes={css:l.a.string,numberOfButtons:l.a.number.isRequired},t.a=u},196:function(e,t,a){"use strict";var n=a(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(156)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandMore");t.default=o}}]);
//# sourceMappingURL=component---src-pages-schedule-js-f578d2e92341ab317df8.js.map