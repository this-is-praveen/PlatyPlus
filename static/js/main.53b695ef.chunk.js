(this.webpackJsonpplatyplus=this.webpackJsonpplatyplus||[]).push([[4],{22:function(e,t,n){"use strict";n.r(t);var c=n(32);t.default=c.default},32:function(e,t,n){"use strict";n.r(t);n(0);var c=n(5);t.default=function(e){return console.log("props ",e),Object(c.jsx)("h1",{children:"404 "})}},61:function(e,t,n){},68:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){var c={"./HomePage":[39,9,0],"./HomePage/":[39,9,0],"./HomePage/HomePage":[54,9,2],"./HomePage/HomePage.jsx":[54,9,2],"./HomePage/index":[39,9,0],"./HomePage/index.js":[39,9,0],"./HomePage/styles.scss":[75,7,7],"./Page404":[22,9],"./Page404/":[22,9],"./Page404/Page404":[32,9],"./Page404/Page404.jsx":[32,9],"./Page404/index":[22,9],"./Page404/index.js":[22,9],"./Product":[40,9,1],"./Product/":[40,9,1],"./Product/Product":[55,9,3],"./Product/Product.jsx":[55,9,3],"./Product/index":[40,9,1],"./Product/index.js":[40,9,1]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(c)},a.id=73,e.exports=a},74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),i=n.n(r),s=(n(61),n(27)),o=n(83),l=n(85),j=n(82),d=n(84),u=n(49),b=n(48),h=n(26),x=(n(68),n(5)),O=function(){return Object(x.jsx)("header",{children:Object(x.jsxs)(o.a,{fixed:"top",bg:"dark",variant:"dark",expand:"lg",children:[Object(x.jsx)(h.LinkContainer,{to:"/",children:Object(x.jsx)(o.a.Brand,{children:"PlatyPlus"})}),Object(x.jsx)(o.a.Toggle,{"aria-controls":"navbarScroll"}),Object(x.jsxs)(o.a.Collapse,{className:"justify-space-between",id:"navbarScroll",children:[Object(x.jsxs)(l.a,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(x.jsx)(l.a.Link,{href:"#action2"}),Object(x.jsxs)(j.a,{title:"Categories",id:"navbarScrollingDropdown",children:[Object(x.jsx)(j.a.Item,{href:"#action3",children:"Category #1"}),Object(x.jsx)(j.a.Divider,{}),Object(x.jsx)(j.a.Item,{href:"#action4",children:"Category #2"}),Object(x.jsx)(j.a.Divider,{}),Object(x.jsx)(j.a.Item,{href:"#action5",children:"Category #3"})]})]}),Object(x.jsxs)(d.a,{className:"d-flex",children:[Object(x.jsx)(u.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"}),Object(x.jsx)(b.a,{variant:"outline-success",children:"Search"})]})]})]})})},f=n(80),g=n(81),m=n(50),p=(n(72),n(51)),P=function(){var e="en",t=a.a.useState(new Date),n=Object(p.a)(t,2),c=n[0],r=n[1];a.a.useEffect((function(){var e=setInterval((function(){r(new Date)}),6e4);return function(){clearInterval(e)}}),[]);var i=c.toLocaleDateString(e,{weekday:"long"}),s="".concat(i,", ").concat(c.getDate()," ").concat(c.toLocaleDateString(e,{month:"long"}),"\n\n"),o=c.getHours(),l="Good ".concat((o<12?"Morning":o<17&&"Afternoon")||"Evening",", ");return{date:s,time:c.toLocaleTimeString(e,{hour:"numeric",hour12:!0,minute:"numeric"}),wish:l}},v=function(){return Object(x.jsx)("footer",{class:"main-footer bg-dark",children:Object(x.jsx)(f.a,{children:Object(x.jsx)(o.a,{variant:"dark",children:Object(x.jsx)(l.a,{className:"w-100",children:Object(x.jsxs)(g.a,{className:"d-flex w-100 text-center",children:[Object(x.jsx)(m.a,{children:Object(x.jsx)(l.a.Link,{children:P().date+" "+P().time})}),Object(x.jsxs)(m.a,{children:[Object(x.jsxs)("ul",{class:"list-inline social-buttons",children:[Object(x.jsx)("li",{class:"list-inline-item",children:Object(x.jsx)(h.LinkContainer,{to:"#",children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)("i",{class:"fab fa-twitter"})})})}),Object(x.jsx)("li",{class:"list-inline-item",children:Object(x.jsx)(h.LinkContainer,{to:"#",children:Object(x.jsxs)(l.a.Link,{children:[Object(x.jsx)("i",{class:"fab fa-facebook-f"})," "]})})}),Object(x.jsx)("li",{class:"list-inline-item",children:Object(x.jsx)(h.LinkContainer,{to:"#",children:Object(x.jsxs)(l.a.Link,{children:[Object(x.jsx)("i",{class:"fab fa-linkedin-in"})," "]})})})]})," "]})]})})})})})},k=n(52),y=n(53),L=n(7),w=n(22),C=[{path:"/",pageName:"HomePage"},{path:"/product/:productId",pageName:"Product"},{path:"*",pageName:"Page404"}],N=Object(y.a)((function(e){return n(73)("./".concat(e.path))})),S=function(){var e=function(){var e=C.map((function(e,t){return Object(x.jsx)(L.d,{exact:!0,path:null===e||void 0===e?void 0:e.path,render:function(t){return Object(x.jsx)(N,Object(k.a)({path:e.pageName},t))}},t)}));return e.push(Object(x.jsx)(L.d,{component:w.default},C.length)),e}();return Object(x.jsx)("div",{className:"route-content",children:Object(x.jsx)(L.g,{children:e})})},H=function(e){return Object(x.jsxs)(s.BrowserRouter,{children:[Object(x.jsx)(O,{}),Object(x.jsx)(S,{}),Object(x.jsx)(v,{})]})},D=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),D()}},[[74,5,6]]]);
//# sourceMappingURL=main.53b695ef.chunk.js.map