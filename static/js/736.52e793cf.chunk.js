"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,u,i,o,s,p=e(885),f=e(228),h=e(791),l=e(689),d=e(168),m=e(816),g=m.Z.div(r||(r=(0,d.Z)(["\n  margin-bottom: 35px;\n"]))),x=m.Z.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  margin-left: -10px;\n  margin-right: -10px;\n  flex-wrap: wrap;\n"]))),v=m.Z.li(c||(c=(0,d.Z)(["\n  width: calc((100% - 5 * 20px) / 5);\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n"]))),Z=m.Z.img(u||(u=(0,d.Z)(["\n  min-height: 360px;\n  margin-bottom: 10px;\n"]))),w=m.Z.h3(i||(i=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),b=m.Z.p(o||(o=(0,d.Z)(["\n  font-size: 16px;\n"]))),k=m.Z.p(s||(s=(0,d.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 50px;\n"]))),y=e(184),j=function(){var n=(0,l.UO)().movieId,t=(0,h.useState)(null),e=(0,p.Z)(t,2),r=e[0],a=e[1];if((0,h.useEffect)((function(){try{(0,f.IQ)(n).then((function(n){return a(n.cast)}))}catch(t){console.log(t)}}),[n]),null!==r)return(0,y.jsx)(g,{children:r.length>0?(0,y.jsx)(x,{children:r.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character,c=(0,f.Qk)(r);return(0,y.jsxs)(v,{children:[(0,y.jsx)(Z,{src:c,alt:e}),(0,y.jsx)(w,{children:e}),(0,y.jsxs)(b,{children:[(0,y.jsx)("b",{children:"Character:"})," ",a]})]},t)}))}):(0,y.jsx)(k,{children:"We don't have data about the actors"})})}},228:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return h},Jh:function(){return l},Qk:function(){return o},V0:function(){return p},yK:function(){return f}});var r=e(861),a=e(687),c=e.n(a),u=e(44),i=e(670);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"2994e3a31c3cad99fd99bf3fe61d916f",language:"en-US"};var o=function(n){return null===n?i:"https://image.tmdb.org/t/p/w500".concat(n)},s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,u.Z.get("/trending/movie/week?page=".concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,u.Z.get("/search/movie?query=".concat(t,"&page=").concat(e,"&include_adult=false"));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},670:function(n,t,e){n.exports=e.p+"static/media/no_image.d2c047b9e8bfcf1f6aef.jpg"}}]);
//# sourceMappingURL=736.52e793cf.chunk.js.map