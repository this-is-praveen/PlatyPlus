(this.webpackJsonpplatyplus=this.webpackJsonpplatyplus||[]).push([[0],{139:function(e,t,a){},152:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),i=(a(139),a(20)),o=a(27),l=a(15),j=a.n(l),d=a(119),u=a(279),b=a(124),m=a(280),h=a(126),x=a(76),O=a(51),p=a(95),f=a(120),g=a.n(f),v=a(38),y="/PlatyPlus",N="https://fakestoreapi.com",w="LOGINUSER",k="LOGOUT",L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(v.a)({userDetails:Object(v.a)({},t.payload)},e);case k:return delete e.userDetails,Object(v.a)({},e);default:return Object(v.a)({},e)}},P={key:"root",storage:g.a},S=Object(p.a)(P,L),C=Object(O.b)(S),T={store:C,persistore:Object(p.b)(C)},D=a(59),E=a(1),F=function(){var e="en",t=r.a.useState(new Date),a=Object(i.a)(t,2),n=a[0],c=a[1];r.a.useEffect((function(){var e=setInterval((function(){c(new Date)}),6e4);return function(){clearInterval(e)}}),[]);var s=n.toLocaleDateString(e,{weekday:"long"}),o="".concat(s,", ").concat(n.getDate()," ").concat(n.toLocaleDateString(e,{month:"long"}),"\n\n"),l=n.getHours(),j="Good ".concat((l<12?"Morning":l<17&&"Afternoon")||"Evening",", ");return{date:o,time:n.toLocaleTimeString(e,{hour:"numeric",hour12:!0,minute:"numeric"}),wish:j}},I=function(e){D.a,document.body;var t=e.message,a=e.status,n="success"===a?Object(E.jsx)("i",{className:"fa fa-check mr-2","aria-hidden":!0}):"fail"===a?Object(E.jsx)("i",{className:"fas fa-times mr-2","aria-hidden":!0}):"warning"===a?Object(E.jsx)("i",{className:"fas fa-exclamation-triangle mr-2","aria-hidden":!0}):Object(E.jsx)(r.a.Fragment,{});D.b.dark(Object(E.jsxs)("p",{className:"mb-0",children:[n,t]}),{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,className:"".concat(a)})},B=a(29),U=a.n(B),G=a(47),M=a(282),R=a(277),H=a(52),W=a(34),q=(a(97),function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(W.a)(N),s=c.get,o=c.response,l=c.error;r.a.useEffect((function(){j()}),[]);var j=function(){var e=Object(G.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/products/categories");case 2:t=e.sent,o.ok&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsx)(M.a,{className:"category-dropdown mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:Object(E.jsx)(R.a,{title:"Category",id:"category-dropdown-title",children:l?Object(E.jsxs)("div",{children:["Error : ",l]}):null===a||void 0===a?void 0:a.map((function(e,t){return Object(E.jsx)(H.LinkContainer,{to:"".concat(y,"/category/").concat(encodeURIComponent(e)),children:Object(E.jsx)(M.a.Link,{className:"px-3 text-capitalize",children:e})},e+t)}))})})}),J=j()(T,"store",{});var X=Object(x.b)((function(e){return{userDetails:null===e||void 0===e?void 0:e.userDetails}}))((function(e){var t=j()(e,"userDetails",{}),a=F().wish;return Object(E.jsx)("header",{children:Object(E.jsxs)(u.a,{fixed:"top",className:"bg-black",variant:"dark",expand:"lg",children:[Object(E.jsx)(o.Link,{to:"/PlatyPlus",children:Object(E.jsx)(u.a.Brand,{children:"PlatyPlus"})}),Object(E.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(E.jsxs)(u.a.Collapse,{className:"justify-space-between",id:"navbarScroll",children:[Object(E.jsx)(q,{}),Object(d.isEmpty)(t)?Object(E.jsx)(o.Link,{to:"/PlatyPlus/login",children:Object(E.jsx)(u.a.Brand,{children:"Login"})}):Object(E.jsxs)(r.a.Fragment,{children:[Object(E.jsx)("p",{className:"my-auto mr-2",style:{color:"white"},children:a+" Praveen"}),Object(E.jsx)(b.a,{className:"mr-2",variant:"outline-light",onClick:function(){J.dispatch({type:"LOGOUT"}),I({status:"success",message:"User Signed Out"})},children:"Logout"})]}),Object(E.jsxs)(m.a,{className:"d-flex",children:[Object(E.jsx)(h.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"}),Object(E.jsx)(b.a,{variant:"outline-light",children:"Search"})]})]})]})})})),$=a(269),z=a(270),A=a(128),V=(a(152),function(){return Object(E.jsxs)("footer",{className:"main-footer bg-black",children:[Object(E.jsx)($.a,{children:Object(E.jsx)(u.a,{className:"bg-black",variant:"dark",children:Object(E.jsx)(M.a,{className:"w-100",children:Object(E.jsxs)(z.a,{className:"d-flex w-100 text-center",children:[Object(E.jsx)(A.a,{children:Object(E.jsx)(M.a.Link,{children:F().date+" "+F().time})}),Object(E.jsxs)(A.a,{children:[Object(E.jsxs)("ul",{className:"list-inline social-buttons",children:[Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(H.LinkContainer,{to:"#",children:Object(E.jsx)(M.a.Link,{children:Object(E.jsx)("i",{className:"fab fa-twitter"})})})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(H.LinkContainer,{to:"#",children:Object(E.jsxs)(M.a.Link,{children:[Object(E.jsx)("i",{className:"fab fa-facebook-f"})," "]})})}),Object(E.jsx)("li",{className:"list-inline-item",children:Object(E.jsx)(H.LinkContainer,{to:"#",children:Object(E.jsxs)(M.a.Link,{children:[Object(E.jsx)("i",{className:"fab fa-linkedin-in"})," "]})})})]})," "]})]})})})}),Object(E.jsx)(D.a,{})]})}),K=a(11),Q=a(272),Y=a(91),Z=a.n(Y),_=function(e){var t=j()(e,"className","");return Object(E.jsx)("div",{className:t,children:Object(E.jsxs)("svg",{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:[Object(E.jsx)("circle",{fill:"none",stroke:"#212529",strokeWidth:"6",strokeMiterlimit:"15",strokeDasharray:"14.2472,14.2472",cx:"50",cy:"50",r:"47",children:Object(E.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),Object(E.jsx)("circle",{fill:"none",stroke:"#212529",strokeWidth:"1",strokeMiterlimit:"10",strokeDasharray:"10,10",cx:"50",cy:"50",r:"39",children:Object(E.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),Object(E.jsxs)("g",{fill:"#212529",children:[Object(E.jsx)("rect",{x:"30",y:"35",width:"5",height:"30",children:Object(E.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.1"})}),Object(E.jsx)("rect",{x:"40",y:"35",width:"5",height:"30",children:Object(E.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.2"})}),Object(E.jsx)("rect",{x:"50",y:"35",width:"5",height:"30",children:Object(E.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})}),Object(E.jsx)("rect",{x:"60",y:"35",width:"5",height:"30",children:Object(E.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.4"})}),Object(E.jsx)("rect",{x:"70",y:"35",width:"5",height:"30",children:Object(E.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.5"})})]})]})})},ee=a(283),te=a(271),ae=(a(157),function(e){var t=j()(e,"data",{}),a=t.image,n=void 0===a?"":a,r=t.title,c=void 0===r?"":r,s=t.description,i=void 0===s?"":s,o=t.price,l=void 0===o?"":o;return Object(E.jsxs)(ee.a,{className:"text-center",children:[Object(E.jsx)(ee.a.Header,{children:Object(E.jsx)(Z.a,{className:"h-100",height:"250px",children:Object(E.jsx)(te.a,{src:n,alt:c})})}),Object(E.jsxs)(ee.a.Body,{children:[Object(E.jsx)(ee.a.Title,{children:c}),Object(E.jsx)(ee.a.Subtitle,{className:"mb-2 text-muted",children:i}),Object(E.jsx)(ee.a.Text,{})]}),Object(E.jsx)(ee.a.Footer,{className:"text-muted",children:"Price $".concat(l)})]})}),ne=(a(158),function(e){var t=r.a.useState([]),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(W.a)(N),o=s.get,l=s.response,d=(s.error,s.loading),u=decodeURIComponent(j()(e,"match.params.categoryName",""));r.a.useEffect((function(){b(),console.log("categoryId ",u)}),[u]);var b=function(){var e=Object(G.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/products/category/".concat(u));case 2:t=e.sent,l.ok&&c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{className:"catalog-container",children:d?Object(E.jsx)(_,{className:"catalog-loading-spinner d-flex justify-content-center"}):Object(E.jsxs)(z.a,{children:[Object(E.jsx)(A.a,{}),Object(E.jsx)(A.a,{style:{flexGrow:5},children:Object(E.jsx)(Q.a,{className:"plp-wrapper my-5",children:n.map((function(e){return Object(E.jsx)(ae,{data:e})}))})})]})})}),re=(a(281),a(276),a(159),a(160),a(161),a(162),a(163),a(278)),ce=a(273),se=a(274),ie=a(275);re.a.use([ce.a,se.a,ie.a]);a(164);var oe=function(e){return Object(n.useEffect)((function(){document.title="Welcome User"})),Object(E.jsx)(r.a.Fragment,{children:Object(E.jsx)("div",{children:"Welcome to Home"})})},le=a(43),je=a(125),de=a(127),ue=a(79),be=j()(T,"store",{}),me=ue.a().shape({username:ue.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),password:ue.b().required("No password provided.").min(5,"Password is too short - should be 5 chars minimum.")});function he(e){var t=Object(W.a)(N),a=t.post,r=t.response,c=t.loading;t.error;Object(n.useEffect)((function(){document.title="Login to PlatyPlus"}),[]);var s=function(){var t=Object(G.a)(U.a.mark((function t(n){var c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("auth/login",n);case 2:c=t.sent,j()(r,"ok",!0)&&"error"!==j()(c,"status","").toLowerCase()?(be.dispatch({type:"LOGINUSER",payload:{username:j()(n,"username",""),token:j()(c,"token","")}}),I({status:"success",message:"Login SuccessFully"}),e.history.push(y)):I({status:"fail",message:"Login Failed !!"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(E.jsxs)($.a,{children:[Object(E.jsx)(z.a,{children:Object(E.jsx)("h1",{className:"mt-5 text-center",children:"Welcome"})}),Object(E.jsx)(z.a,{className:"justify-content-center",children:Object(E.jsx)(A.a,{lg:"6",children:Object(E.jsx)(le.d,{initialValues:{username:"johnd",password:"m38rmF$"},validationSchema:me,onSubmit:s,children:function(e){var t=e.touched,a=e.errors;return Object(E.jsxs)(le.c,{children:[Object(E.jsxs)(je.a,{children:[Object(E.jsx)(de.a,{htmlFor:"username",children:"User Name"}),Object(E.jsx)(le.b,{type:"text",name:"username",placeholder:"Enter user name",className:"form-control ".concat(t.email&&a.email?"is-invalid":"")}),Object(E.jsx)(le.a,{component:"div",name:"username",className:"invalid-feedback"})]}),Object(E.jsxs)(je.a,{children:[Object(E.jsx)(de.a,{htmlFor:"password",children:"Password"}),Object(E.jsx)(le.b,{type:"password",name:"password",placeholder:"Enter password",className:"form-control ".concat(t.password&&a.password?"is-invalid":"")}),Object(E.jsx)(le.a,{component:"div",name:"password",className:"invalid-feedback"})]}),Object(E.jsx)(b.a,{variant:"outline-dark",type:"submit",className:"w-100",children:c?"Loading...":"Submit"})]})}})})})]})}var xe=function(e){return console.log("props ",e),Object(E.jsx)("h1",{children:"404 "})},Oe=function(e){var t=Object(W.a)(N);t.post,t.response,t.loading,t.error;return Object(E.jsx)("div",{children:"Product"})},pe=function(){return Object(E.jsx)("div",{className:"route-content",children:Object(E.jsxs)(K.g,{children:[Object(E.jsx)(K.d,{exact:!0,path:"/PlatyPlus",component:oe}),Object(E.jsx)(K.d,{exact:!0,path:"/PlatyPlus/product/:productId",component:Oe}),Object(E.jsx)(K.d,{exact:!0,path:"/PlatyPlus/category/:categoryName",component:ne}),Object(E.jsx)(K.d,{exact:!0,path:"/PlatyPlus/login",component:he}),Object(E.jsx)(K.d,{path:"*",component:xe})]})})},fe=r.a.createContext().Provider,ge=a(134),ve=function(e){var t=r.a.useState("normal"),a=Object(i.a)(t,2),n=a[0],c=a[1];return Object(E.jsx)(o.BrowserRouter,{children:Object(E.jsx)(x.a,{store:T.store,children:Object(E.jsx)(ge.a,{loading:null,persistor:T.persistore,children:Object(E.jsxs)(fe,{value:{theme:n,setTheme:c},children:[Object(E.jsx)(X,{}),Object(E.jsx)(pe,{}),Object(E.jsx)(V,{})]})})})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,284)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(ve,{})}),document.getElementById("root")),ye()},97:function(e,t,a){}},[[263,1,2]]]);
//# sourceMappingURL=main.5abd4b26.chunk.js.map