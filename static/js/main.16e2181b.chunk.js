(this["webpackJsonprobot-gallery"]=this["webpackJsonprobot-gallery"]||[]).push([[0],{10:function(t,e,n){t.exports={cardContainer:"Robot_cardContainer__19gp-"}},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(9),r=n.n(c),s=(n(16),n(3)),i=n(4),p=n(6),l=n(5),j=n(10),b=n.n(j),d=n(0),h=function(t){var e=t.id,n=t.name,a=t.email;return Object(d.jsxs)("div",{className:b.a.cardContainer,children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(e),alt:"robot"}),Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:a})]})},u=n(7),O=n.n(u),_=n(11),g=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleClick=function(t){"SPAN"===t.target.nodeName&&a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:O.a.cartContainer,children:[Object(d.jsxs)("button",{className:O.a.button,onClick:this.handleClick,children:[Object(d.jsx)(_.a,{}),Object(d.jsx)("span",{children:"\u8d2d\u7269\u8f66 2 (\u4ef6)"})]}),Object(d.jsx)("div",{className:O.a.cartDropDown,style:{display:this.state.isOpen?"block":"none"},children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"robot 1"}),Object(d.jsx)("li",{children:"robot 2"})]})})]})}}]),n}(a.Component),m=n.p+"static/media/logo.6ce24c58.svg",x=n(2),v=n.n(x),f=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={robotGallery:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({robotGallery:e})}))}},{key:"render",value:function(){var t=this.state.robotGallery;return Object(d.jsxs)("div",{className:v.a.app,children:[Object(d.jsxs)("div",{className:v.a.appHeader,children:[Object(d.jsx)("img",{className:v.a.appLogo,src:m,alt:"logo"}),Object(d.jsx)("h1",{children:"\u8001\u94c1\uff0c\u4e70\u4e2a\ud83e\udd16\ufe0f\u7ed9\u5c0f\u670b\u53cb\u73a9\u4e0d\uff1f"})]}),Object(d.jsx)(g,{}),Object(d.jsx)("div",{className:v.a.robotList,children:t.map((function(t){var e=t.id,n=t.name,a=t.email;return Object(d.jsx)(h,{id:e,name:n,email:a},e)}))})]})}}]),n}(a.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),C()},2:function(t,e,n){t.exports={app:"App_app__1kX79",appHeader:"App_appHeader__28RXF",appLogo:"App_appLogo__1qg7-","App-logo-spin":"App_App-logo-spin__1e7sv",robotList:"App_robotList__zTHhD"}},7:function(t,e,n){t.exports={cartContainer:"ShoppingCart_cartContainer__1Gl09",cartDropDown:"ShoppingCart_cartDropDown__23j9i",button:"ShoppingCart_button__3vzc4"}}},[[18,1,2]]]);
//# sourceMappingURL=main.16e2181b.chunk.js.map