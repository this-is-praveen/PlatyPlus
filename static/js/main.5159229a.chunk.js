(this.webpackJsonpplatyplus=this.webpackJsonpplatyplus||[]).push([[0],{140:function(e,t,a){},153:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},266:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),s=a.n(r),i=(a(140),a(17)),o=a(19),l=a(9),d=a.n(l),j=a(120),u=a(294),b=a(125),h=a(291),m=a(127),x=a(77),p=a(52),O=a(97),f=a(121),g=a.n(f),v=a(24),w="/PlatyPlus",y="https://fakestoreapi.com",N="LOGINUSER",k="LOGOUT",L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(v.a)({userDetails:Object(v.a)({},t.payload)},e);case k:return delete e.userDetails,Object(v.a)({},e);default:return Object(v.a)({},e)}},C={key:"root",storage:g.a},S=Object(O.a)(C,L),F=Object(p.b)(S),P={store:F,persistore:Object(O.b)(F)},T=a(59),I=a(1),B=function(){var e="en",t=n.a.useState(new Date),a=Object(i.a)(t,2),c=a[0],r=a[1];n.a.useEffect((function(){var e=setInterval((function(){r(new Date)}),6e4);return function(){clearInterval(e)}}),[]);var s=c.toLocaleDateString(e,{weekday:"long"}),o="".concat(s,", ").concat(c.getDate()," ").concat(c.toLocaleDateString(e,{month:"long"}),"\n\n"),l=c.getHours(),d="Good ".concat((l<12?"Morning":l<17&&"Afternoon")||"Evening",", ");return{date:o,time:c.toLocaleTimeString(e,{hour:"numeric",hour12:!0,minute:"numeric"}),wish:d}},M=function(e){T.a,document.body;var t=e.message,a=e.status,c="success"===a?Object(I.jsx)("i",{className:"fa fa-check mr-2","aria-hidden":!0}):"fail"===a?Object(I.jsx)("i",{className:"fas fa-times mr-2","aria-hidden":!0}):"warning"===a?Object(I.jsx)("i",{className:"fas fa-exclamation-triangle mr-2","aria-hidden":!0}):Object(I.jsx)(n.a.Fragment,{});T.b.dark(Object(I.jsxs)("p",{className:"mb-0",children:[c,t]}),{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,className:"".concat(a)})},D=a(293),E=a(289),R=a(34),U=a(25),z=a.n(U),H=a(37),X=a(27),A=n.a.createContext({}),G=A.Provider,_=A,q=(a(85),function(){var e=function(){var e=Object(c.useContext)(_),t=d()(e,"contextObj",{}),a=n.a.useState([]),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(X.a)(y),j=l.get,u=l.response;n.a.useEffect((function(){b()}),[]);var b=function(){var a=Object(H.a)(z.a.mark((function a(){var c;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j("/products/categories");case 2:c=a.sent,u.ok&&(t.categoryList=c,e.setContextObj(t),o(c));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return s}();return Object(I.jsx)(D.a,{className:"category-dropdown mr-auto my-2 my-lg-0",navbarScroll:!0,children:Object(I.jsx)(E.a,{title:"Category",id:"category-dropdown-title",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(I.jsx)(R.LinkContainer,{to:"".concat(w,"/category/").concat(encodeURIComponent(e)),children:Object(I.jsx)(D.a.Link,{className:"px-3 text-capitalize",children:e})},e+t)}))})})}),W=d()(P,"store",{});var $=Object(x.b)((function(e){return{userDetails:null===e||void 0===e?void 0:e.userDetails}}))((function(e){var t=n.a.useState(0),a=Object(i.a)(t,2),c=a[0],r=a[1];n.a.useEffect((function(){var e=document.querySelector(".header-nav-bar").offsetHeight;c!==e&&r(e)}));var s=d()(e,"userDetails",{}),l=B().wish;return Object(I.jsx)("header",{style:{height:"".concat(c,"px")},children:Object(I.jsxs)(u.a,{fixed:"top",className:"header-nav-bar bg-black",variant:"dark",expand:"lg",children:[Object(I.jsx)(o.Link,{to:"/PlatyPlus",children:Object(I.jsx)(u.a.Brand,{className:"glow",children:"PlatyPlus"})}),Object(I.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(I.jsxs)(u.a.Collapse,{className:"justify-space-between",id:"navbarScroll",children:[Object(I.jsx)(q,{}),Object(j.isEmpty)(s)?Object(I.jsx)(o.Link,{to:"/PlatyPlus/login",children:Object(I.jsx)(u.a.Brand,{children:"Login"})}):Object(I.jsxs)(n.a.Fragment,{children:[Object(I.jsx)("p",{className:"my-auto mr-2",style:{color:"white"},children:l+" Praveen"}),Object(I.jsx)(b.a,{className:"mr-2",variant:"outline-light",onClick:function(){W.dispatch({type:"LOGOUT"}),M({status:"success",message:"User Signed Out"})},children:"Logout"})]}),Object(I.jsxs)(h.a,{className:"d-flex",children:[Object(I.jsx)(m.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"}),Object(I.jsx)(b.a,{variant:"outline-light",children:"Search"})]})]})]})})})),K=a(278),J=a(279),V=a(129),Q=(a(153),function(){return Object(I.jsxs)("footer",{className:"main-footer bg-black",children:[Object(I.jsx)(K.a,{children:Object(I.jsx)(u.a,{className:"bg-black",variant:"dark",children:Object(I.jsx)(D.a,{className:"w-100",children:Object(I.jsxs)(J.a,{className:"d-flex w-100 text-center",children:[Object(I.jsx)(V.a,{children:Object(I.jsx)(D.a.Link,{children:B().date+" "+B().time})}),Object(I.jsxs)(V.a,{children:[Object(I.jsxs)("ul",{className:"list-inline social-buttons",children:[Object(I.jsx)("li",{className:"list-inline-item",children:Object(I.jsx)(R.LinkContainer,{to:"#",children:Object(I.jsx)(D.a.Link,{children:Object(I.jsx)("i",{className:"fab fa-twitter"})})})}),Object(I.jsx)("li",{className:"list-inline-item",children:Object(I.jsx)(R.LinkContainer,{to:"#",children:Object(I.jsxs)(D.a.Link,{children:[Object(I.jsx)("i",{className:"fab fa-facebook-f"})," "]})})}),Object(I.jsx)("li",{className:"list-inline-item",children:Object(I.jsx)(R.LinkContainer,{to:"#",children:Object(I.jsxs)(D.a.Link,{children:[Object(I.jsx)("i",{className:"fab fa-linkedin-in"})," "]})})})]})," "]})]})})})}),Object(I.jsx)(T.a,{})]})}),Y=a(13),Z=a(295),ee=a(296),te=a(281),ae=function(e){var t=d()(e,"className","");return Object(I.jsx)("div",{className:t,children:Object(I.jsxs)("svg",{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:[Object(I.jsx)("circle",{fill:"none",stroke:"white",strokeWidth:"6",strokeMiterlimit:"15",strokeDasharray:"14.2472,14.2472",cx:"50",cy:"50",r:"47",children:Object(I.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),Object(I.jsx)("circle",{fill:"none",stroke:"white",strokeWidth:"1",strokeMiterlimit:"10",strokeDasharray:"10,10",cx:"50",cy:"50",r:"39",children:Object(I.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),Object(I.jsxs)("g",{fill:"#212529",children:[Object(I.jsx)("rect",{x:"30",y:"35",width:"5",height:"30",fill:"white",children:Object(I.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.1"})}),Object(I.jsx)("rect",{x:"40",y:"35",width:"5",height:"30",fill:"white",children:Object(I.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.2"})}),Object(I.jsx)("rect",{x:"50",y:"35",width:"5",height:"30",fill:"white",children:Object(I.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})}),Object(I.jsx)("rect",{x:"60",y:"35",width:"5",height:"30",fill:"white",children:Object(I.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.4"})}),Object(I.jsx)("rect",{x:"70",y:"35",width:"5",height:"30",fill:"white",children:Object(I.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.5"})})]})]})})},ce=function(e){var t=d()(e,"className","");return Object(I.jsx)("div",{className:t,children:Object(I.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:[Object(I.jsx)("rect",{fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 3 50)",children:Object(I.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite"})}),Object(I.jsx)("rect",{x:"17",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 20 50)",children:Object(I.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.1s"})}),Object(I.jsx)("rect",{x:"40",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 40 50)",children:Object(I.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.3s"})}),Object(I.jsx)("rect",{x:"60",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 58 50)",children:Object(I.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.5s"})}),Object(I.jsx)("rect",{x:"80",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 76 50)",children:Object(I.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.1s"})})]})})},ne=function(e){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("svg",{className:"add-to-cart-box box-1",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(I.jsx)("rect",{width:"24",height:"24",rx:"2",fill:"#ffffff"})}),Object(I.jsx)("svg",{className:"add-to-cart-box box-2",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(I.jsx)("rect",{width:"24",height:"24",rx:"2",fill:"#ffffff"})}),Object(I.jsxs)("svg",{className:"cart-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(I.jsx)("circle",{cx:"9",cy:"21",r:"1"}),Object(I.jsx)("circle",{cx:"20",cy:"21",r:"1"}),Object(I.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),Object(I.jsxs)("svg",{className:"tick",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(I.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(I.jsx)("path",{fill:"#ffffff",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"})]})]})},re=a(280),se=a(73),ie=a.n(se),oe=(a(158),function(e){var t=d()(e,"data",{}),a=t.id,c=t.image,n=void 0===c?"":c,r=t.title,s=void 0===r?"":r,i=t.description,l=void 0===i?"":i,j=t.price,u=void 0===j?"":j;return Object(I.jsx)(ee.a,{className:"text-center",children:Object(I.jsxs)(o.Link,{to:"".concat(w,"/product/").concat(a),children:[Object(I.jsx)(ee.a.Header,{children:Object(I.jsx)(ie.a,{placeholder:Object(I.jsx)(ce,{className:"product-image-loader"}),debounce:-4e3,height:"250px",children:Object(I.jsx)(re.a,{src:n,alt:s})})}),Object(I.jsxs)(ee.a.Body,{children:[Object(I.jsx)(ee.a.Title,{children:s}),Object(I.jsx)(ee.a.Subtitle,{className:"mb-2 text-muted",children:Object(I.jsx)("p",{className:"product-desc",children:l})})]}),Object(I.jsx)(ee.a.Footer,{className:"text-muted",children:"Price $".concat(u)})]})})}),le=(a(159),function(e){var t=Object(c.useContext)(_),a=n.a.useState([]),r=Object(i.a)(a,2),s=r[0],l=r[1],j=d()(t,"contextObj",{}),u=Object(X.a)(y),b=u.get,h=u.response,m=u.loading,x=d()(j,"categoryList",[]),p=decodeURIComponent(d()(e,"match.params.categoryName",""));n.a.useEffect((function(){O()}),[p]);var O=function(){var e=Object(H.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/products/category/".concat(p));case 2:t=e.sent,h.ok&&l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"plp-container",children:m?Object(I.jsx)(ae,{className:"plp-loading-spinner d-flex justify-content-center"}):Object(I.jsxs)(J.a,{className:"mw-100 my-5",children:[Object(I.jsx)(V.a,{children:Object(I.jsxs)(Z.a,{defaultActiveKey:"0",style:{color:"white"},children:[Object(I.jsx)(Z.a.Toggle,{as:ee.a.Header,eventKey:"0",children:"Category"}),Object(I.jsx)(Z.a.Collapse,{eventKey:"0",children:Object(I.jsx)(ee.a.Body,{className:"category-pane",children:null===x||void 0===x?void 0:x.map((function(e,t){return Object(I.jsx)(o.Link,{className:"category-list  ".concat(p===e?"glow":""),to:"".concat(w,"/category/").concat(encodeURIComponent(e)),children:e},e+t)}))})})]})}),Object(I.jsx)(V.a,{style:{flexGrow:5},children:Object(I.jsx)(te.a,{className:"plp-wrapper",children:s.map((function(e){return Object(I.jsx)(oe,{data:e})}))})})]})})}),de=a(292),je=a(288),ue=(a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(290)),be=a(282),he=a(283),me=a(284),xe=a(285),pe=a(286),Oe=a(287);function fe(e){var t=d()(e,"swiperProps",{}),a=d()(e,"children",[]),c=d()(e,"loop",!1),r=d()(e,"lazy",!1);return console.log("children ",a),Object(I.jsx)(n.a.Fragment,{children:Object(I.jsx)(de.a,Object(v.a)(Object(v.a)({pagination:{clickable:!0},className:"mySwiper",style:{"--swiper-navigation-color":"#000","--swiper-pagination-color":"#000"},autoplay:d()(e,"autoPlay",{}),navigation:d()(e,"navigation",!1),loop:c,lazy:r,autoHeight:!1,effect:d()(e,"effect","")},t),{},{children:null===a||void 0===a?void 0:a.map((function(e,t){var a=d()(e,"imgSrc",""),c={"data-src":a},s={src:a};return a?Object(I.jsxs)(je.a,{children:[Object(I.jsx)(o.Link,{to:d()(e,"href",""),children:Object(I.jsx)(re.a,Object(v.a)({className:r?"swiper-lazy":""},r?Object(v.a)({},c):Object(v.a)({},s)))}),r&&Object(I.jsx)("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-black"})]},"".concat(d()(e,"alt",""),"-").concat(t)):Object(I.jsx)(n.a.Fragment,{})}))}))})}ue.a.use([be.a,he.a,me.a,xe.a,pe.a,Oe.a]);a(167);var ge=[{imgSrc:"https://ckssolutions.co.in/hardware/wp-content/uploads/2020/07/banner.jpg",href:"".concat(w,"/category/electronics"),alt:"electronic-category"},{imgSrc:"https://dcassetcdn.com/design_img/2886222/654209/654209_15934433_2886222_90f467d9_image.jpg",href:"".concat(w,"/category/jewelery"),alt:"jewelery-category"},{imgSrc:"https://www.designhill.com/design-blog/wp-content/uploads/2017/07/fashion-banner.jpg",href:"".concat(w,"/category/men's%20clothing"),alt:"fashion-category"}],ve=function(e){Object(c.useEffect)((function(){document.title="Welcome User"}));return Object(I.jsx)("div",{className:"home-page-wrapper",children:Object(I.jsx)("div",{className:"main-banner",children:Object(I.jsx)(fe,{autoPlay:{delay:2500,disableOnInteraction:!1},loop:!0,lazy:!0,children:ge})})})},we=a(47),ye=a(126),Ne=a(128),ke=a(81),Le=(a(266),d()(P,"store",{})),Ce=ke.a().shape({username:ke.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),password:ke.b().required("No password provided.").min(5,"Password is too short - should be 5 chars minimum.")});function Se(e){var t=Object(X.a)(y),a=t.post,n=t.response,r=t.loading;t.error;Object(c.useEffect)((function(){document.title="Login to PlatyPlus"}),[]);var s=function(){var t=Object(H.a)(z.a.mark((function t(c){var r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("auth/login",c);case 2:r=t.sent,d()(n,"ok",!0)&&"error"!==d()(r,"status","").toLowerCase()?(Le.dispatch({type:"LOGINUSER",payload:{username:d()(c,"username",""),token:d()(r,"token","")}}),M({status:"success",message:"Login SuccessFully"}),e.history.push(w)):M({status:"fail",message:"Login Failed !!"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsxs)(K.a,{className:"login-container",children:[Object(I.jsx)(J.a,{children:Object(I.jsx)("h1",{className:"mt-5 text-center",children:"Welcome"})}),Object(I.jsx)(J.a,{className:"justify-content-center",children:Object(I.jsx)(V.a,{lg:"6",children:Object(I.jsx)(we.d,{initialValues:{username:"johnd",password:"m38rmF$"},validationSchema:Ce,onSubmit:s,children:function(e){var t=e.touched,a=e.errors;return Object(I.jsxs)(we.c,{children:[Object(I.jsxs)(ye.a,{children:[Object(I.jsx)(Ne.a,{htmlFor:"username",children:"User Name"}),Object(I.jsx)(we.b,{type:"text",name:"username",placeholder:"Enter user name",className:"form-control ".concat(t.email&&a.email?"is-invalid":"")}),Object(I.jsx)(we.a,{component:"div",name:"username",className:"invalid-feedback"})]}),Object(I.jsxs)(ye.a,{children:[Object(I.jsx)(Ne.a,{htmlFor:"password",children:"Password"}),Object(I.jsx)(we.b,{type:"password",name:"password",placeholder:"Enter password",className:"form-control ".concat(t.password&&a.password?"is-invalid":"")}),Object(I.jsx)(we.a,{component:"div",name:"password",className:"invalid-feedback"})]}),Object(I.jsx)(b.a,{variant:"outline-dark",type:"submit",className:"w-100",children:r?"Loading...":"Submit"})]})}})})})]})}var Fe=function(e){return console.log("props ",e),Object(I.jsx)("h1",{children:"404 "})},Pe=a(297),Te=(a(267),a(269),function(e){var t=d()(e,"productResponse",{}),a="https://placeholder.pics/svg/400/000000-2DFFA5/FFFFFF-FFFFFF/".concat(encodeURIComponent("Sorry Image not Available"));d()(t,"image",a);return Object(I.jsx)(n.a.Fragment,{children:Object(I.jsx)("div",{className:"pdp-image-wrapper",children:d()(t,"image","")&&Object(I.jsx)(ie.a,{placeholder:Object(I.jsx)(ce,{className:"product-image-loader"}),debounce:400,height:"400px",once:!0,children:Object(I.jsx)(re.a,{src:d()(t,"image",""),alt:d()(t,"title","")})})})})}),Ie=(a(270),function(e){var t=d()(e,"productResponse",{}),a=d()(e,"loading",!1);return Object(I.jsxs)("div",{className:"pdp-right",children:[Object(I.jsx)("div",{className:"pdp-title",children:d()(t,"title","")}),Object(I.jsx)("div",{className:"pdp-price",children:function(){var e=d()(t,"price",0),a=(e+.3*e).toFixed(2);return Object(I.jsxs)("div",{className:"pdp-price-wrapper",children:[Object(I.jsx)("div",{className:"pdp-sale-price",children:"$"+e}),Object(I.jsx)("div",{className:"pdp-original-price strikethrough",children:"$"+a})]})}()}),Object(I.jsx)("div",{className:"pdp-desc",children:d()(t,"description","")}),!a&&Object(I.jsxs)("button",{onClick:function(){return function(){var e=document.querySelector(".add-to-cart-button");e&&(e.classList.add("added"),setTimeout((function(){e.classList.remove("added")}),2e3))}()},className:"add-to-cart-button",children:[Object(I.jsx)(ne,{}),Object(I.jsx)("span",{className:"add-to-cart",children:"Add to cart"}),Object(I.jsx)("span",{className:"added-to-cart",children:"Added to cart"})]})]})}),Be=(a(271),function(e){var t=Object(X.a)(y),a=t.get,c=t.response,r=t.loading,s=n.a.useState([]),o=Object(i.a)(s,2),l=o[0],j=o[1],u=decodeURIComponent(d()(e,"match.params.productId",""));n.a.useEffect((function(){b()}),[u]);var b=function(){var e=Object(H.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/products/".concat(u));case 2:t=e.sent,c.ok&&j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(v.a)({productResponse:l},e);return console.log("loading ",r),Object(I.jsx)(K.a,{className:"pdp-container my-5",children:r?Object(I.jsx)(ae,{className:"pdp-loading-spinner d-flex justify-content-center"}):Object(I.jsxs)(n.a.Fragment,{children:[Object(I.jsx)(J.a,{children:function(){var e=d()(l,"category","");return Object(I.jsxs)(Pe.a,{children:[Object(I.jsx)(R.LinkContainer,{to:"".concat(w),children:Object(I.jsx)(Pe.a.Item,{children:"Home"})}),Object(I.jsx)(R.LinkContainer,{to:"".concat(w,"/category/").concat(encodeURIComponent(e)),children:Object(I.jsx)(Pe.a.Item,{children:e})}),Object(I.jsx)(Pe.a.Item,{active:!0,children:d()(l,"title","")})]})}()}),Object(I.jsxs)(J.a,{children:[Object(I.jsx)(V.a,{lg:6,md:6,sm:12,className:"pdp-left",children:Te(h)}),Object(I.jsx)(V.a,{lg:6,md:6,sm:12,className:"pdp-left",children:Ie(h)})]})]})})}),Me=function(){return Object(I.jsx)("div",{className:"route-content",children:Object(I.jsxs)(Y.g,{children:[Object(I.jsx)(Y.d,{exact:!0,path:"/PlatyPlus",component:ve}),Object(I.jsx)(Y.d,{exact:!0,path:"/PlatyPlus/product/:productId",component:Be}),Object(I.jsx)(Y.d,{exact:!0,path:"/PlatyPlus/category/:categoryName",component:le}),Object(I.jsx)(Y.d,{exact:!0,path:"/PlatyPlus/login",component:Se}),Object(I.jsx)(Y.d,{path:"*",component:Fe})]})})},De=a(135),Ee=function(e){var t=n.a.useState({data:{}}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(I.jsx)(o.BrowserRouter,{children:Object(I.jsx)(x.a,{store:P.store,children:Object(I.jsx)(De.a,{loading:null,persistor:P.persistore,children:Object(I.jsxs)(G,{value:{contextObj:c,setContextObj:r},children:[Object(I.jsx)($,{}),Object(I.jsx)(Me,{}),Object(I.jsx)(Q,{})]})})})})},Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,298)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(Ee,{})}),document.getElementById("root")),Re()},85:function(e,t,a){}},[[272,1,2]]]);
//# sourceMappingURL=main.5159229a.chunk.js.map