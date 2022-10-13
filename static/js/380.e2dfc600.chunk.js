"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[380],{82:function(n,e,t){t.d(e,{Df:function(){return p},IQ:function(){return f},Jh:function(){return h},Qk:function(){return s},V0:function(){return l},yK:function(){return d}});var r=t(861),o=t(687),a=t.n(o),c=t(44),i=t(670),u="2994e3a31c3cad99fd99bf3fe61d916f";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(n){return null===n?i:"https://image.tmdb.org/t/p/w500".concat(n)},p=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:1,n.next=3,c.Z.get("/trending/movie/week?api_key=".concat(u,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"));case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},146:function(n,e,t){t.d(e,{Z:function(){return b}});var r,o,a,c,i,u=t(689),s=t(82),p=t(168),l=t(816),d=t(731),f=l.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-bottom: 50px;\n"]))),h=l.Z.li(o||(o=(0,p.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 20px;\n  width: calc((100% - 3 * 20px) / 3);\n\n  &:nth-of-type(-n + 3) {\n    margin-top: 0;\n  }\n"]))),m=(0,l.Z)(d.rU)(a||(a=(0,p.Z)(["\n  display: block;\n  text-decoration: none;\n  border: 1px solid #ededed;\n\n  &:hover > h2 {\n    color: #5ac8fa;\n  }\n"]))),g=l.Z.img(c||(c=(0,p.Z)(["\n  background-color: #ededed;\n  min-height: 610px;\n  margin-bottom: 15px;\n"]))),x=l.Z.h2(i||(i=(0,p.Z)(["\n  font-size: 22px;\n  color: #000;\n  margin-bottom: 15px;\n  padding: 0 15px;\n  transition: color 250ms linear;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"]))),v=t(184);function b(n){var e=n.movies,t=(0,u.TH)(),r=e.map((function(n){var e=n.id,r=n.poster_path,o=n.title,a=(0,s.Qk)(r);return(0,v.jsx)(h,{children:(0,v.jsxs)(m,{to:"/movies/".concat(e),state:{from:t},children:[(0,v.jsx)(g,{src:a,alt:o}),(0,v.jsx)(x,{children:o})]})},e)}));return(0,v.jsx)(f,{children:r})}},380:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,o,a,c,i,u,s,p=t(982),l=t(885),d=t(791),f=t(731),h=t(596),m=t(82),g=t(168),x=t(816),v=x.Z.div(r||(r=(0,g.Z)(["\n  margin-bottom: 50px;\n"]))),b=x.Z.form(o||(o=(0,g.Z)(["\n  max-width: 400px;\n  margin: auto;\n  position: relative;\n  width: 100%;\n  display: flex;\n"]))),Z=x.Z.input(a||(a=(0,g.Z)(["\n  height: 40px;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #ededed;\n  padding: 0 10px;\n\n  &:focus {\n    border-color: #0c0505;\n    outline: none;\n  }\n"]))),k=x.Z.button(c||(c=(0,g.Z)(["\n  border: none;\n  background-color: #ededed;\n  color: #000;\n  height: 40px;\n  padding: 0 20px;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: color 250ms linear, background-color 250ms linear;\n\n  &:hover {\n    background-color: #0c0505;\n    color: #fff;\n  }\n"]))),w=t(184),y=function(n){var e=n.onSubmit,t=(0,d.useState)(""),r=(0,l.Z)(t,2),o=r[0],a=r[1];return(0,w.jsx)(v,{children:(0,w.jsxs)(b,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),a("")):h.Am.warning("Search field is empty")},children:[(0,w.jsx)(Z,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",name:"text",value:o,onChange:function(n){var e=n.currentTarget;a(e.value.toLowerCase())}}),(0,w.jsx)(k,{type:"submit",children:"Search"})]})})},j=t(279),S=t(146),_=x.Z.h2(i||(i=(0,g.Z)(["\n  color: #000;\n  text-align: center;\n"]))),C=x.Z.div(u||(u=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 50px;\n"]))),U=x.Z.button(s||(s=(0,g.Z)(["\n  height: 40px;\n  padding: 0 20px;\n  border: none;\n  background-color: #ededed;\n  color: #000;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: color 250ms linear, background-color 250ms linear;\n\n  &:hover {\n    background-color: #0c0505;\n    color: #fff;\n  }\n"]))),q=function(n){var e=n.onClick;return(0,w.jsx)(C,{children:(0,w.jsx)(U,{type:"button",onClick:e,children:"Load More"})})};function A(){var n,e=(0,d.useState)([]),t=(0,l.Z)(e,2),r=t[0],o=t[1],a=(0,d.useState)(1),c=(0,l.Z)(a,2),i=c[0],u=c[1],s=(0,d.useState)(0),g=(0,l.Z)(s,2),x=g[0],v=g[1],b=(0,d.useState)(!1),Z=(0,l.Z)(b,2),k=Z[0],C=Z[1],U=(0,d.useState)(!1),A=(0,l.Z)(U,2),L=A[0],Q=A[1],T=(0,f.lr)(),z=(0,l.Z)(T,2),D=z[0],M=z[1],N=null!==(n=D.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){if(N){C(!0);try{(0,m.V0)(N,i).then((function(n){var e=n.results,t=n.total_pages;if(C(!1),0!==e.length){if(i>1)return o((function(n){return[].concat((0,p.Z)(n),(0,p.Z)(e))}));o(e),v(t)}else Q('No results to show for "'.concat(N,'!"'))}))}catch(L){h.Am.error(L),C(!1)}}}),[N,i]);return(0,w.jsxs)("main",{className:"container",children:[(0,w.jsx)(y,{onSubmit:function(n){N!==n?(M(""!==n?{query:n}:{}),o([]),C(!1),Q(!1)):h.Am.info("Movies matching '".concat(N,"' have already been found"))}}),k&&(0,w.jsx)(j.a,{}),L&&(0,w.jsx)(_,{children:L}),r.length>0&&(0,w.jsx)(S.Z,{movies:r}),0===r.length&&!k&&!L&&(0,w.jsx)(_,{children:"There's nothing here yet \ud83e\uddd0"}),x>0&&i!==x&&!k&&!L&&(0,w.jsx)(q,{onClick:function(){u((function(n){return n+1}))}})]})}},670:function(n,e,t){n.exports=t.p+"static/media/no_image.d2c047b9e8bfcf1f6aef.jpg"}}]);
//# sourceMappingURL=380.e2dfc600.chunk.js.map