(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),c=n(9),s=n(1),l=n(4),d=n(18),p=n(3),m={ghTopUsers:[],loading:{ghTopUsers:!1},loadingErrors:{ghTopUsers:null}},u=Object(l.c)({ghUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"GET_TOP_USERS_START":return Object(p.a)({},e,{loading:Object(p.a)({},e.loading,{ghTopUsers:!0}),loadingErrors:Object(p.a)({},e.loadingErrors,{ghTopUsers:null})});case"GET_TOP_USERS_SUCCESS":return Object(p.a)({},e,{loading:Object(p.a)({},e.loading,{ghTopUsers:!1}),ghTopUsers:r.data.search.edges.map(function(e){return e.node})});case"GET_TOP_USERS_FAIL":return Object(p.a)({},e,{loading:Object(p.a)({},e.loading,{ghTopUsers:!1}),loadingErrors:Object(p.a)({},e.loadingErrors,{ghTopUsers:r})});default:return e}}}),g=n(12),h=n.n(g),f=n(24),w=n(19),x=[d.a,function(e){var t=e.dispatch;return function(e){return function(){var n=Object(w.a)(h.a.mark(function n(r){var a,i,o,c,s,l,d;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.callAPI,i=r.type,o=r.options,c=Object(f.a)(r,["callAPI","type","options"]),a){n.next=3;break}return n.abrupt("return",e(r));case 3:return t(Object(p.a)({},c,{type:i+"_START"})),s=c.payload,n.prev=5,n.next=8,fetch(a,o);case 8:return l=n.sent,n.next=11,l.json();case 11:if(d=n.sent,l.ok){n.next=16;break}throw new Error(d.message);case 16:if(!d.errors||!d.errors.length){n.next=18;break}throw new Error(d.errors[0].message);case 18:t(Object(p.a)({},c,{initialPayload:s,type:i+"_SUCCESS",payload:d})),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(5),console.log("There has been a problem with ".concat(i," process: ").concat(n.t0.message)),t(Object(p.a)({},c,{initialPayload:s,type:i+"_FAIL",payload:n.t0.message}));case 25:case"end":return n.stop()}},n,null,[[5,21]])}));return function(e){return n.apply(this,arguments)}}()}}],y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,v=Object(l.e)(u,{},y(l.a.apply(void 0,x))),b={palette:{colors:{darkBlue:"#24292e",blue:"#0366d6",lightGrey:"#e1e4e8",grey:"#586069",yellow:"#ffeb3b"}},mediaMixins:{width:{notXs:function(e){return"@media (min-width: 480px) { ".concat(e," }")}}}},E=n(6);function _(){var e=Object(E.a)(["\n  body {\n    margin: 0;\n    * {\n      font-family: Helvetica,Arial,sans-serif;\n      box-sizing: border-box;\n    };\n  };\n"]);return _=function(){return e},e}var C=Object(s.b)(_()),O=n(2),U=(Object(O.objectOf)(Object(O.oneOfType)([O.string,O.number])),O.string,O.string,Object(O.oneOfType)([O.string,O.number]),Object(O.oneOfType)([O.string,O.number]),O.string,{id:O.string,login:O.string,name:O.string,email:O.string,location:O.string,url:O.string,bio:O.string,avatarUrl:O.string}),j=(Object(O.arrayOf)(Object(O.shape)(U)),"https://api.github.com/graphql"),T="e87b1000aaadf0146074fa168bc145c21d3f64f2",S=function(e){return e.ghUsers.ghTopUsers},N=function(e){return e.ghUsers.loading.ghTopUsers},I=function(e){return e.ghUsers.loadingErrors.ghTopUsers};function k(){var e=Object(E.a)(["\n  to { transform: rotate(360deg); }\n"]);return k=function(){return e},e}var z=Object(s.d)(k()),M=s.c.div.withConfig({displayName:"Spinner",componentId:"sc-1ke0tif-0"})(["display:block;width:3em;height:3em;border:5px solid ",";border-radius:50%;border-top-color:",";animation:"," 1s ease-in-out infinite;"],function(e){return e.theme.palette.colors.lightGrey},function(e){return e.theme.palette.colors.darkBlue},z),L=s.c.ul.withConfig({displayName:"List__StyledList",componentId:"sc-1vjmhox-0"})(["list-style:none;margin:0;padding:10px 0;max-width:700px;"]);var P=function(e){var t=e.children;return a.a.createElement(L,null,t)},B=n(22),A={style:{},className:"",nativeColor:"grey",width:"14px",height:"14px",viewBox:"0 0 24 24"},G=function(e){return a.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:e.viewBox},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z",fill:e.nativeColor}),a.a.createElement("circle",{cx:"12",cy:"9",r:"2.5"}))};G.defaultProps=A;var R=G,X=function(e){return a.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:e.viewBox},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",fill:e.nativeColor}))};X.defaultProps=A;var q=X;function H(){var e=Object(E.a)(["\n  0%{\n    background-position: -8vw 0\n  }\n  100%{\n    background-position: 80vw 0\n  }\n"]);return H=function(){return e},e}var V=Object(s.d)(H()),W=s.c.div.withConfig({displayName:"LoadingPlaceholder__PlaceholderDiv",componentId:"sc-1vrm5ig-0"})(["animation-duration:1s;animation-iteration-count:infinite;animation-name:",";animation-timing-function:linear;background:#f6f7f8;background:linear-gradient(to right,#eeeeee 8%,#dddddd 18%,#eeeeee 33%);background-size:100vw;position:relative;height:",";width:",";margin:10px auto;"],V,function(e){return e.height},function(e){return e.width}),D=function(e){var t=e.rows,n=e.height,r=e.width,i=e.className;return Array.isArray(t)?t.map(function(e,t){return a.a.createElement(W,{key:t,height:n,width:e,className:i})}):Array(t).fill(1).map(function(e,t){return a.a.createElement(W,{key:t,height:n,width:r,className:i})})};D.defaultProps={rows:1,height:"0.8em",width:"100%"};var F=D,J=s.c.li.withConfig({displayName:"UserCard__LI",componentId:"sc-1pcm9m3-0"})(["display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;padding:15px 0px;margin:0px 10px;border-top:1px solid ",";&:first-child{border-top:none};",""],function(e){return e.theme.palette.colors.lightGrey},function(e){return e.theme.mediaMixins.width.notXs("\n    margin: 0px 20px;\n    padding: 20px 0px;\n  ")}),$=s.c.img.withConfig({displayName:"UserCard__Avatar",componentId:"sc-1pcm9m3-1"})(["width:75px;"]),K=s.c.div.withConfig({displayName:"UserCard__TextBlock",componentId:"sc-1pcm9m3-2"})(["flex:100%;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;margin-left:10px;"]),Q=s.c.h4.withConfig({displayName:"UserCard__Title",componentId:"sc-1pcm9m3-3"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:baseline;margin:0 0 10px;",""],function(e){return e.theme.mediaMixins.width.notXs("\n    flex-direction: row;\n  ")}),Y=s.c.p.withConfig({displayName:"UserCard__Bio",componentId:"sc-1pcm9m3-4"})(["margin:0 0 10px;font-size:14px;"]),Z=s.c.p.withConfig({displayName:"UserCard__Contacts",componentId:"sc-1pcm9m3-5"})(["display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;color:",";font-size:14px;margin:0;",""],function(e){return e.theme.palette.colors.grey},function(e){return e.theme.mediaMixins.width.notXs("\n    flex-flow: row nowrap;\n    align-items: center;\n  ")}),ee=s.c.span.withConfig({displayName:"UserCard__Text",componentId:"sc-1pcm9m3-6"})(["padding:",";font-size:",";font-weight:",";white-space:nowrap;color:'inherit';"],function(e){return e.padding||0},function(e){return e.fontSize||"inherit"},function(e){return e.fontWeight||"inherit"}),te=s.c.span.withConfig({displayName:"UserCard__TextWithIcon",componentId:"sc-1pcm9m3-7"})(["display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;&:first-child{padding-bottom:5px;};",""],function(e){return e.theme.mediaMixins.width.notXs("\n    flex-flow: row nowrap;\n    align-items: center;\n    padding-bottom: 0px !important;\n  ")}),ne=Object(s.c)(R).withConfig({displayName:"UserCard__StyledIconLocation",componentId:"sc-1pcm9m3-8"})(["margin-right:3px;",""],function(e){return e.theme.mediaMixins.width.notXs("\n    margin-right: 0px;\n  ")}),re=s.c.a.withConfig({displayName:"UserCard__Link",componentId:"sc-1pcm9m3-9"})(["color:",";text-decoration:none;&:visited{color:",";}&:hover{text-decoration:underline;}"],function(e){return e.theme.palette.colors.blue},function(e){return e.theme.palette.colors.blue}),ae=s.c.span.withConfig({displayName:"UserCard__Name",componentId:"sc-1pcm9m3-10"})(["font-size:13px;",""],function(e){return e.theme.mediaMixins.width.notXs("\n    font-size: 0.9em;\n    font-weight: 300;\n    padding: 0 0 0 10px;\n  ")}),ie=Object(s.c)(F).withConfig({displayName:"UserCard__ImgPlaceholder",componentId:"sc-1pcm9m3-11"})(["margin:0;min-width:75px;"]);var oe=function(e){var t=e.login,n=e.name,i=e.email,o=e.location,c=e.url,s=e.bio,l=e.avatarUrl,d=Object(r.useState)(!1),p=Object(B.a)(d,2),m=p[0],u=p[1];return a.a.createElement(J,null,!m&&a.a.createElement(ie,{height:"75px",width:"75px"}),a.a.createElement($,{src:l,alt:"user's avatar",title:"avatar",style:m?{}:{display:"none"},onLoad:function(){return u(!0)}}),a.a.createElement(K,null,a.a.createElement(Q,null,a.a.createElement(re,{href:c,target:"_blank",title:'see "'.concat(t,'" on GitHub')},t),a.a.createElement(ae,null,n)),s&&a.a.createElement(Y,null,s),a.a.createElement(Z,null,a.a.createElement(te,null,a.a.createElement(ne,null),a.a.createElement(ee,{padding:"0 15px 0 0px"},o)),i&&a.a.createElement(te,null,a.a.createElement(q,null),a.a.createElement(ee,{padding:"0 0 0 3px"},i)))))},ce=function(e){return a.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:e.viewBox},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",fill:e.nativeColor}))};ce.defaultProps=A;var se=ce,le=s.c.div.withConfig({displayName:"ErrorMessage__Root",componentId:"sc-1rw02fz-0"})(["position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;z-index:10;background:rgba(255,255,255,0.5);"]),de=s.c.div.withConfig({displayName:"ErrorMessage__MessageBox",componentId:"sc-1rw02fz-1"})(["display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;width:500px;max-width:calc(100vw - 48px);min-height:200px;padding:24px;background:#fff;text-align:center;"]),pe=s.c.p.withConfig({displayName:"ErrorMessage__Text",componentId:"sc-1rw02fz-2"})(["font-size:24px;font-weight:600;margin-bottom:0;color:",";"],function(e){return e.theme.palette.colors.darkBlue}),me=s.c.i.withConfig({displayName:"ErrorMessage__ReponseMessage",componentId:"sc-1rw02fz-3"})(["font-size:12px;color:",";text-transform:lowercase;"],function(e){return e.theme.palette.colors.grey});var ue=function(e){var t=e.text;return a.a.createElement(le,null,a.a.createElement(de,null,a.a.createElement(se,{width:"72px",height:"72px",nativeColor:b.palette.colors.yellow}),a.a.createElement(pe,null,"Error fetching data"),a.a.createElement(me,null,"* ",t," ")))},ge=s.c.div.withConfig({displayName:"TopGhUsersList__Section",componentId:"sc-1cerjmc-0"})(["display:flex;justify-content:center;align-items:center;min-height:",";"],function(e){return e.dataLoading?"100vh":"100%"}),he={getGhTopUsers:function(){return{type:"GET_TOP_USERS",callAPI:"".concat(j),options:{method:"POST",headers:{Authorization:"bearer ".concat(T),"Content-Type":"application/json"},body:JSON.stringify({query:"\n        query topCityUsers($queryString: String!){\n          search(query:$queryString, type:USER, first:10){\n            repositoryCount\n            edges {\n              node {\n                ...on User{\n                  id\n                  login\n                  name\n                  email\n                  location\n                  url\n                  bio\n                  avatarUrl\n                  followers(){\n                    totalCount\n                  }\n                }\n              }\n            }\n          }\n        }",variables:{queryString:"location:rivne"}})}}}},fe=Object(c.b)(function(e){return{topUsersList:S(e),topUsersLoadingStatus:N(e),topUsersLoadingError:I(e)}},he)(function(e){var t=e.topUsersList,n=e.topUsersLoadingStatus,i=e.topUsersLoadingError,o=e.getGhTopUsers;return Object(r.useEffect)(function(){o()},[]),a.a.createElement(ge,{dataLoading:n},n&&a.a.createElement(M,null),i&&a.a.createElement(ue,{text:i}),!(n||i)&&a.a.createElement(P,null,t.map(function(e){return a.a.createElement(oe,Object.assign({key:e.id},e))})))});var we=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),a.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(c.a,{store:v},a.a.createElement(s.a,{theme:b},a.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.bca0a9ca.chunk.js.map