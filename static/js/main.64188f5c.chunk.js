(this.webpackJsonpplatyplus=this.webpackJsonpplatyplus||[]).push([[0],{132:function(e,t,a){},147:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},276:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),s=a.n(r),i=(a(147),a(17)),o=a(19),l=a(7),d=a.n(l),j=a(105),u=a(304),b=a(135),h=a(46),m=a(58),p=a(109),x=a(133),O=a.n(x),f=a(15),g="/PlatyPlus",v="https://fakestoreapi.com",y="LOGINUSER",w="LOGOUT",N="INCREASE_QUANTITY",C="DECREASE_QUANTITY",k="GET_ALL_CART_PRODUCTS",L="GET_NUMBER_CART",S="ADD_CART",T="DELETE_CART",P={numberCart:0,Carts:[],userDetails:{}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(f.a)({userDetails:Object(f.a)({},t.payload)},e);case w:return delete e.userDetails,Object(f.a)({},e);case k:return Object(f.a)(Object(f.a)({},e),{},{products:t.payload});case L:return Object(f.a)({},e);case S:var a=e.Carts||[];if(0===e.numberCart){var c={id:t.payload.id,quantity:1,name:t.payload.title,image:t.payload.image,price:t.payload.price};a.push(c)}else{var n=!1;if(a.forEach((function(e,c){e.id===t.payload.id&&(a[c].quantity++,n=!0)})),!n){var r={id:t.payload.id,quantity:1,name:t.payload.title,image:t.payload.image,price:t.payload.price};a.push(r)}}return Object(f.a)(Object(f.a)({},JSON.parse(JSON.stringify(e))),{},{numberCart:e.numberCart+1});case N:return e.numberCart++,e.Carts[t.payload].quantity++,Object(f.a)({},JSON.parse(JSON.stringify(e)));case C:var s=e.Carts[t.payload].quantity;return s>1&&(e.numberCart--,e.Carts[t.payload].quantity--),Object(f.a)({},JSON.parse(JSON.stringify(e)));case T:var i=e.Carts[t.payload].quantity;return Object(f.a)(Object(f.a)({},JSON.parse(JSON.stringify(e))),{},{numberCart:e.numberCart-i,Carts:e.Carts.filter((function(a){return a.id!=e.Carts[t.payload].id}))});default:return Object(f.a)({},e)}},E={key:"root",storage:O.a},_=Object(p.a)(E,F),D=Object(m.b)(_),I={store:D,persistore:Object(p.b)(D)},R=a(68),q=a(1),B=function(){var e="en",t=n.a.useState(new Date),a=Object(i.a)(t,2),c=a[0],r=a[1];n.a.useEffect((function(){var e=setInterval((function(){r(new Date)}),6e4);return function(){clearInterval(e)}}),[]);var s=c.toLocaleDateString(e,{weekday:"long"}),o="".concat(s,", ").concat(c.getDate()," ").concat(c.toLocaleDateString(e,{month:"long"}),"\n\n"),l=c.getHours(),d="Good ".concat((l<12?"Morning":l<17&&"Afternoon")||"Evening",", ");return{date:o,time:c.toLocaleTimeString(e,{hour:"numeric",hour12:!0,minute:"numeric"}),wish:d}},U=function(e){R.a,document.body;var t=e.message,a=e.status,c="success"===a?Object(q.jsx)("i",{className:"fa fa-check mr-2","aria-hidden":!0}):"fail"===a?Object(q.jsx)("i",{className:"fas fa-times mr-2","aria-hidden":!0}):"warning"===a?Object(q.jsx)("i",{className:"fas fa-exclamation-triangle mr-2","aria-hidden":!0}):Object(q.jsx)(n.a.Fragment,{});R.b.dark(Object(q.jsxs)("p",{className:"mb-0",children:[c,t]}),{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,className:"".concat(a)})},A=a(303),M=a(299),H=a(39),z=a(22),J=a.n(z),G=a(32),X=a(29),$=n.a.createContext({}),W=$.Provider,K=$,V=(a(96),function(){var e=function(){var e=Object(c.useContext)(K),t=d()(e,"contextObj",{}),a=n.a.useState([]),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(X.a)(v),j=l.get,u=l.response;n.a.useEffect((function(){b()}),[]);var b=function(){var a=Object(G.a)(J.a.mark((function a(){var c;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j("/products/categories");case 2:c=a.sent,u.ok&&(t.categoryList=c,e.setContextObj(t),o(c));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return s}();return Object(q.jsx)(A.a,{className:"category-dropdown mr-auto my-2 my-lg-0",navbarScroll:!0,children:Object(q.jsx)(M.a,{title:"Category",id:"category-dropdown-title",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(q.jsx)(H.LinkContainer,{to:"".concat(g,"/category/").concat(encodeURIComponent(e)),children:Object(q.jsx)(A.a.Link,{className:"px-3 text-capitalize",children:e})},e+t)}))})})}),Q=a(301),Y=a(287),Z=a(288),ee=a(136),te=(a(161),function(e){var t=d()(e,"className","");return Object(q.jsx)("div",{className:t,children:Object(q.jsxs)("svg",{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:[Object(q.jsx)("circle",{fill:"none",stroke:"white",strokeWidth:"6",strokeMiterlimit:"15",strokeDasharray:"14.2472,14.2472",cx:"50",cy:"50",r:"47",children:Object(q.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),Object(q.jsx)("circle",{fill:"none",stroke:"white",strokeWidth:"1",strokeMiterlimit:"10",strokeDasharray:"10,10",cx:"50",cy:"50",r:"39",children:Object(q.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),Object(q.jsxs)("g",{fill:"#212529",children:[Object(q.jsx)("rect",{x:"30",y:"35",width:"5",height:"30",fill:"white",children:Object(q.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.1"})}),Object(q.jsx)("rect",{x:"40",y:"35",width:"5",height:"30",fill:"white",children:Object(q.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.2"})}),Object(q.jsx)("rect",{x:"50",y:"35",width:"5",height:"30",fill:"white",children:Object(q.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})}),Object(q.jsx)("rect",{x:"60",y:"35",width:"5",height:"30",fill:"white",children:Object(q.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.4"})}),Object(q.jsx)("rect",{x:"70",y:"35",width:"5",height:"30",fill:"white",children:Object(q.jsx)("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.5"})})]})]})})}),ae=function(e){var t=d()(e,"className","");return Object(q.jsx)("div",{className:t,children:Object(q.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:[Object(q.jsx)("rect",{fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 3 50)",children:Object(q.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite"})}),Object(q.jsx)("rect",{x:"17",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 20 50)",children:Object(q.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.1s"})}),Object(q.jsx)("rect",{x:"40",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 40 50)",children:Object(q.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.3s"})}),Object(q.jsx)("rect",{x:"60",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 58 50)",children:Object(q.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.5s"})}),Object(q.jsx)("rect",{x:"80",fill:"#000",width:"3",height:"100",transform:"translate(0) rotate(180 76 50)",children:Object(q.jsx)("animate",{attributeName:"height",attributeType:"XML",dur:"1s",values:"30; 100; 30",repeatCount:"indefinite",begin:"0.1s"})})]})})},ce=function(e){var t=d()(e,"disableOtherIcon",!1);return Object(q.jsxs)(q.Fragment,{children:[!t&&Object(q.jsx)("svg",{className:"add-to-cart-box box-1",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("rect",{width:"24",height:"24",rx:"2",fill:"#ffffff"})}),!t&&Object(q.jsx)("svg",{className:"add-to-cart-box box-2",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("rect",{width:"24",height:"24",rx:"2",fill:"#ffffff"})}),Object(q.jsxs)("svg",{className:"cart-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("circle",{cx:"9",cy:"21",r:"1"}),Object(q.jsx)("circle",{cx:"20",cy:"21",r:"1"}),Object(q.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),!t&&Object(q.jsxs)("svg",{className:"tick",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(q.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(q.jsx)("path",{fill:"#ffffff",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"})]})]})},ne=(d()(I,"store",{}),function(e){var t=d()(e,"quantity",1);return Object(q.jsxs)("div",{className:"quantity-input",children:[Object(q.jsx)("button",{className:"quantity-input__modifier quantity-input__modifier--left",onClick:{},children:"-"}),Object(q.jsx)("input",{className:"quantity-input__screen",type:"text",value:t,readonly:!0}),Object(q.jsx)("button",{className:"quantity-input__modifier quantity-input__modifier--right",onClick:{},children:"+"})]})}),re=function(e){var t=d()(e,"cartProduct",[]);return Object(q.jsx)(Q.a.Body,{className:"cart-body",children:Object(q.jsxs)(Y.a,{children:[Object(q.jsxs)(Z.a,{children:[Object(q.jsx)(ee.a,{md:1,children:"S.No"}),Object(q.jsx)(ee.a,{md:4,children:"Name"}),Object(q.jsx)(ee.a,{md:3,children:"QTY"}),Object(q.jsx)(ee.a,{md:2,children:"Unit Price"}),Object(q.jsx)(ee.a,{md:2,children:"Total Price"})]}),Object(q.jsx)("div",{className:"divider"}),t.map((function(e,t){return Object(q.jsxs)(Z.a,{className:"cart-item mb-3",children:[Object(q.jsx)(ee.a,{md:1,children:t+1}),Object(q.jsx)(ee.a,{md:4,children:d()(e,"name","")}),Object(q.jsx)(ee.a,{md:3,children:Object(q.jsx)(ne,{quantity:d()(e,"quantity",0)})}),Object(q.jsx)(ee.a,{md:2,children:Object(q.jsxs)(n.a.Fragment,{children:[Object(q.jsx)("span",{className:"mr-1",children:"$"}),d()(e,"price",0)]})}),Object(q.jsx)(ee.a,{md:2,children:Object(q.jsxs)(n.a.Fragment,{children:[Object(q.jsx)("span",{className:"mr-1",children:"$"}),d()(e,"quantity",0)*d()(e,"price",0)]})})]})}))]})})};var se=Object(h.b)((function(e){return{userDetails:null===e||void 0===e?void 0:e.userDetails,cartCount:null===e||void 0===e?void 0:e.numberCart,cartProduct:null===e||void 0===e?void 0:e.Carts}}))((function(e){var t=n.a.useState(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],s=d()(e,"cartCount",0);return console.log("im in"),Object(q.jsxs)(n.a.Fragment,{children:[Object(q.jsxs)("div",{onClick:function(){return r(!0)},className:"cart-icon-wrapper d-flex",children:[Object(q.jsx)(ce,{disableOtherIcon:!0}),Object(q.jsx)("div",{className:"cart-count",children:s})]}),Object(q.jsxs)(Q.a,{backdrop:"static",keyboard:!1,variant:"dark",show:c,onHide:function(){return r(!1)},dialogClassName:"shopping-cart-modal","aria-labelledby":"cart-modal",centered:!0,children:[Object(q.jsx)(Q.a.Header,{closeButton:!0,children:Object(q.jsx)(Q.a.Title,{children:"Shopping Bag"})}),Object(q.jsx)(re,Object(f.a)({},e)),Object(q.jsx)(Q.a.Footer,{children:Object(q.jsx)("button",{type:"button",className:"btn btn-default",disabled:!0,children:"CHECKOUT"})})]})]})})),ie=d()(I,"store",{});var oe=Object(h.b)((function(e){return{userDetails:null===e||void 0===e?void 0:e.userDetails,cartCount:null===e||void 0===e?void 0:e.numberCart}}))((function(e){var t=n.a.useState(0),a=Object(i.a)(t,2),c=a[0],r=a[1];n.a.useEffect((function(){var e=document.querySelector(".header-nav-bar").offsetHeight;c!==e&&r(e)}));var s=d()(e,"userDetails",{}),l=B().wish;return Object(q.jsx)("header",{style:{height:"".concat(c,"px")},children:Object(q.jsxs)(u.a,{fixed:"top",className:"header-nav-bar bg-black",variant:"dark",expand:"lg",children:[Object(q.jsx)(o.Link,{to:"/PlatyPlus",children:Object(q.jsx)(u.a.Brand,{className:"glow",children:"PlatyPlus"})}),Object(q.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(q.jsxs)(u.a.Collapse,{className:"justify-space-between",id:"navbarScroll",children:[Object(q.jsx)(V,{}),Object(j.isEmpty)(s)?Object(q.jsx)(o.Link,{to:"/PlatyPlus/login",children:Object(q.jsx)(u.a.Brand,{children:"Login"})}):Object(q.jsxs)(n.a.Fragment,{children:[Object(q.jsx)("p",{className:"my-auto mr-2",style:{color:"white"},children:l+" Praveen"}),Object(q.jsx)(b.a,{className:"mr-2",variant:"outline-light",onClick:function(){ie.dispatch({type:"LOGOUT"}),U({status:"success",message:"User Signed Out"})},children:"Logout"})]}),Object(q.jsx)(se,{})]})]})})})),le=(a(162),function(){return Object(q.jsxs)("footer",{className:"main-footer bg-black",children:[Object(q.jsx)(Y.a,{children:Object(q.jsx)(u.a,{className:"bg-black",variant:"dark",children:Object(q.jsx)(A.a,{className:"w-100",children:Object(q.jsxs)(Z.a,{className:"d-flex w-100 text-center",children:[Object(q.jsx)(ee.a,{children:Object(q.jsx)(A.a.Link,{children:B().date+" "+B().time})}),Object(q.jsxs)(ee.a,{children:[Object(q.jsxs)("ul",{className:"list-inline social-buttons",children:[Object(q.jsx)("li",{className:"list-inline-item",children:Object(q.jsx)(H.LinkContainer,{to:"#",children:Object(q.jsx)(A.a.Link,{children:Object(q.jsx)("i",{className:"fab fa-twitter"})})})}),Object(q.jsx)("li",{className:"list-inline-item",children:Object(q.jsx)(H.LinkContainer,{to:"#",children:Object(q.jsxs)(A.a.Link,{children:[Object(q.jsx)("i",{className:"fab fa-facebook-f"})," "]})})}),Object(q.jsx)("li",{className:"list-inline-item",children:Object(q.jsx)(H.LinkContainer,{to:"#",children:Object(q.jsxs)(A.a.Link,{children:[Object(q.jsx)("i",{className:"fab fa-linkedin-in"})," "]})})})]})," "]})]})})})}),Object(q.jsx)(R.a,{})]})}),de=a(16),je=a(305),ue=a(306),be=a(290),he=a(289),me=a(57),pe=a.n(me),xe=(a(167),function(e){var t=d()(e,"data",{}),a=t.id,c=t.image,n=void 0===c?"":c,r=t.title,s=void 0===r?"":r,i=t.description,l=void 0===i?"":i,j=t.price,u=void 0===j?"":j;return Object(q.jsx)(ue.a,{className:"text-center",children:Object(q.jsxs)(o.Link,{to:"".concat(g,"/product/").concat(a),children:[Object(q.jsx)(ue.a.Header,{children:Object(q.jsx)(pe.a,{placeholder:Object(q.jsx)(ae,{className:"product-image-loader"}),debounce:500,height:"250px",children:Object(q.jsx)(he.a,{src:n,alt:s})})}),Object(q.jsxs)(ue.a.Body,{children:[Object(q.jsx)(ue.a.Title,{children:s}),Object(q.jsx)(ue.a.Subtitle,{className:"mb-2 text-muted",children:Object(q.jsx)("p",{className:"product-desc",children:l})})]}),Object(q.jsx)(ue.a.Footer,{className:"text-muted",children:"Price $".concat(u)})]})})}),Oe=(a(168),function(e){var t=Object(c.useContext)(K),a=n.a.useState([]),r=Object(i.a)(a,2),s=r[0],l=r[1],j=d()(t,"contextObj",{}),u=Object(X.a)(v),b=u.get,h=u.response,m=u.loading,p=d()(j,"categoryList",[]),x=decodeURIComponent(d()(e,"match.params.categoryName",""));n.a.useEffect((function(){O()}),[x]);var O=function(){var e=Object(G.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/products/category/".concat(x));case 2:t=e.sent,h.ok&&l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(q.jsx)("div",{className:"plp-container",children:m?Object(q.jsx)(te,{className:"plp-loading-spinner d-flex justify-content-center"}):Object(q.jsxs)(Z.a,{className:"mw-100 my-5",children:[Object(q.jsx)(ee.a,{children:Object(q.jsxs)(je.a,{defaultActiveKey:"0",style:{color:"white"},children:[Object(q.jsx)(je.a.Toggle,{as:ue.a.Header,eventKey:"0",children:"Category"}),Object(q.jsx)(je.a.Collapse,{eventKey:"0",children:Object(q.jsx)(ue.a.Body,{className:"category-pane",children:null===p||void 0===p?void 0:p.map((function(e,t){return Object(q.jsx)(o.Link,{className:"category-list  ".concat(x===e?"glow":""),to:"".concat(g,"/category/").concat(encodeURIComponent(e)),children:e},e+t)}))})})]})}),Object(q.jsx)(ee.a,{style:{flexGrow:5},children:Object(q.jsx)(be.a,{className:"plp-wrapper",children:s.map((function(e){return Object(q.jsx)(xe,{data:e})}))})})]})})}),fe=a(302),ge=a(296),ve=(a(169),a(170),a(171),a(172),a(173),a(174),a(175),a(300)),ye=a(291),we=a(292),Ne=a(293),Ce=a(294),ke=a(295);function Le(e){var t=d()(e,"swiperProps",{}),a=(d()(e,"lazyProps",{}),d()(e,"children",[])),c=d()(e,"loop",!1),r=d()(e,"lazy",!1);return Object(q.jsx)(n.a.Fragment,{children:Object(q.jsx)(fe.a,Object(f.a)(Object(f.a)({pagination:{clickable:!0},className:"mySwiper",style:{"--swiper-navigation-color":"#000","--swiper-pagination-color":"#000"},autoplay:d()(e,"autoPlay",{}),navigation:d()(e,"navigation",!1),loop:c,lazy:r,autoHeight:!1,effect:d()(e,"effect","")},t),{},{children:null===a||void 0===a?void 0:a.map((function(e,t){var a=d()(e,"imgSrc","");return a?Object(q.jsx)(ge.a,{children:Object(q.jsx)(o.Link,{to:d()(e,"href",""),children:Object(q.jsx)(pe.a,{placeholder:Object(q.jsx)(ae,{className:"swiper-lazy-place-holder"}),offset:[-200,0],debounce:500,height:"250px",children:Object(q.jsx)(he.a,{className:"swiper-img",src:a})})})},"".concat(d()(e,"alt",""),"-").concat(t)):Object(q.jsx)(n.a.Fragment,{})}))}))})}ve.a.use([ye.a,we.a,Ne.a,Ce.a,ke.a]);a(176);var Se=function(e){var t=n.a.useState([]),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(X.a)(v),o=s.get,l=s.response;s.loading;n.a.useEffect((function(){d()}),[]);var d=function(){var e=Object(G.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/products?limit=10");case 2:t=e.sent,l.ok&&r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=c.length?c.map((function(e){return{alt:e.title,imgSrc:e.image,href:"".concat(g,"/product/").concat(e.id)}})):[];return Object(q.jsxs)(Z.a,{className:"recommendation-products my-5",children:[Object(q.jsx)("h3",{className:"recommended-title",children:"Recommended Products:"}),Object(q.jsx)(Le,{swiperProps:{coverflowEffect:{grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",pagination:!1},children:j,lazy:!0,lazyLoadeProps:{}})]})},Te=(a(177),[{imgSrc:"https://ckssolutions.co.in/hardware/wp-content/uploads/2020/07/banner.jpg",href:"".concat(g,"/category/electronics"),alt:"electronic-category"},{imgSrc:"https://dcassetcdn.com/design_img/2886222/654209/654209_15934433_2886222_90f467d9_image.jpg",href:"".concat(g,"/category/jewelery"),alt:"jewelery-category"},{imgSrc:"https://www.designhill.com/design-blog/wp-content/uploads/2017/07/fashion-banner.jpg",href:"".concat(g,"/category/men's%20clothing"),alt:"fashion-category"}]),Pe=function(e){return Object(c.useEffect)((function(){document.title="Welcome User"})),Object(q.jsxs)("div",{className:"home-page-wrapper",children:[Object(q.jsx)("div",{className:"main-banner",children:Object(q.jsx)(Le,{autoPlay:{delay:2500,disableOnInteraction:!1},loop:!0,lazy:!0,children:Te})}),Object(q.jsx)("div",{children:Object(q.jsx)(Se,{})})]})},Fe=a(52),Ee=a(297),_e=a(298),De=a(92),Ie=(a(276),d()(I,"store",{})),Re=De.a().shape({username:De.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),password:De.b().required("No password provided.").min(5,"Password is too short - should be 5 chars minimum.")});function qe(e){var t=Object(X.a)(v),a=t.post,n=t.response,r=t.loading;t.error;Object(c.useEffect)((function(){document.title="Login to PlatyPlus"}),[]);var s=function(){var t=Object(G.a)(J.a.mark((function t(c){var r;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("auth/login",c);case 2:r=t.sent,d()(n,"ok",!0)&&"error"!==d()(r,"status","").toLowerCase()?(Ie.dispatch({type:"LOGINUSER",payload:{username:d()(c,"username",""),token:d()(r,"token","")}}),U({status:"success",message:"Login SuccessFully"}),e.history.push(g)):U({status:"fail",message:"Login Failed !!"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(q.jsxs)(Y.a,{className:"login-container",children:[Object(q.jsx)(Z.a,{children:Object(q.jsx)("h1",{className:"mt-5 text-center",children:"Welcome"})}),Object(q.jsx)(Z.a,{className:"justify-content-center",children:Object(q.jsx)(ee.a,{lg:"6",children:Object(q.jsx)(Fe.d,{initialValues:{username:"johnd",password:"m38rmF$"},validationSchema:Re,onSubmit:s,children:function(e){var t=e.touched,a=e.errors;return Object(q.jsxs)(Fe.c,{children:[Object(q.jsxs)(Ee.a,{children:[Object(q.jsx)(_e.a,{htmlFor:"username",children:"User Name"}),Object(q.jsx)(Fe.b,{type:"text",name:"username",placeholder:"Enter user name",className:"form-control ".concat(t.email&&a.email?"is-invalid":"")}),Object(q.jsx)(Fe.a,{component:"div",name:"username",className:"invalid-feedback"})]}),Object(q.jsxs)(Ee.a,{children:[Object(q.jsx)(_e.a,{htmlFor:"password",children:"Password"}),Object(q.jsx)(Fe.b,{type:"password",name:"password",placeholder:"Enter password",className:"form-control ".concat(t.password&&a.password?"is-invalid":"")}),Object(q.jsx)(Fe.a,{component:"div",name:"password",className:"invalid-feedback"})]}),Object(q.jsx)(b.a,{variant:"outline-dark",type:"submit",className:"w-100",children:r?"Loading...":"Submit"})]})}})})})]})}var Be=function(e){return console.log("props ",e),Object(q.jsx)("h1",{children:"404 "})},Ue=a(307),Ae=(a(277),a(279),function(e){var t=d()(e,"productResponse",{}),a="https://placeholder.pics/svg/400/000000-2DFFA5/FFFFFF-FFFFFF/".concat(encodeURIComponent("Sorry Image not Available"));d()(t,"image",a);return Object(q.jsx)(n.a.Fragment,{children:Object(q.jsx)("div",{className:"pdp-image-wrapper",children:d()(t,"image","")&&Object(q.jsx)(pe.a,{placeholder:Object(q.jsx)(ae,{className:"product-image-loader"}),debounce:400,height:"400px",once:!0,children:Object(q.jsx)(he.a,{src:d()(t,"image",""),alt:d()(t,"title","")})})})})});a(280),a(132),d()(I,"store",{});var Me=Object(h.b)((function(e){return{userDetails:null===e||void 0===e?void 0:e.userDetails}}),(function(e){return{AddCart:function(t){return e({type:S,payload:t})}}}))((function(e){var t=d()(e,"productResponse",{}),a=d()(e,"loading",!1);return Object(q.jsxs)("div",{className:"pdp-right",children:[Object(q.jsx)("div",{className:"pdp-title",children:d()(t,"title","")}),Object(q.jsx)("div",{className:"pdp-price",children:function(){var e=d()(t,"price",0),a=(e+.3*e).toFixed(2);return Object(q.jsxs)("div",{className:"pdp-price-wrapper",children:[Object(q.jsx)("div",{className:"pdp-sale-price",children:"$"+e}),Object(q.jsx)("div",{className:"pdp-original-price strikethrough",children:"$"+a})]})}()}),Object(q.jsx)("div",{className:"pdp-desc",children:d()(t,"description","")}),!a&&Object(q.jsxs)("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=document.querySelector(".add-to-cart-button");a&&(a.classList.add("added"),setTimeout((function(){a.classList.remove("added")}),2e3)),d()(e,"AddCart",(function(){}))(d()(t,"productResponse",{}))}({productResponse:t})},className:"add-to-cart-button",children:[Object(q.jsx)(ce,{}),Object(q.jsx)("span",{className:"add-to-cart",children:"Add to cart"}),Object(q.jsx)("span",{className:"added-to-cart",children:"Added to cart"})]})]})})),He=function(e){var t=Object(X.a)(v),a=t.get,c=t.response,r=t.loading,s=n.a.useState([]),o=Object(i.a)(s,2),l=o[0],j=o[1],u=decodeURIComponent(d()(e,"match.params.productId",""));n.a.useEffect((function(){b()}),[u]);var b=function(){var e=Object(G.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("/products/".concat(u));case 2:t=e.sent,c.ok&&j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(f.a)({productResponse:l},e);return console.log("loading ",r),Object(q.jsx)(Y.a,{className:"pdp-container my-5",children:r?Object(q.jsx)(te,{className:"pdp-loading-spinner d-flex justify-content-center"}):Object(q.jsxs)(n.a.Fragment,{children:[Object(q.jsx)(Z.a,{children:function(){var e=d()(l,"category","");return Object(q.jsxs)(Ue.a,{children:[Object(q.jsx)(H.LinkContainer,{to:"".concat(g),children:Object(q.jsx)(Ue.a.Item,{children:"Home"})}),Object(q.jsx)(H.LinkContainer,{to:"".concat(g,"/category/").concat(encodeURIComponent(e)),children:Object(q.jsx)(Ue.a.Item,{children:e})}),Object(q.jsx)(Ue.a.Item,{active:!0,children:d()(l,"title","")})]})}()}),Object(q.jsxs)(Z.a,{children:[Object(q.jsx)(ee.a,{lg:6,md:6,sm:12,className:"pdp-left",children:Ae(h)}),Object(q.jsx)(ee.a,{lg:6,md:6,sm:12,className:"pdp-right",children:Object(q.jsx)(Me,Object(f.a)({},h))})]})]})})},ze=function(){return Object(q.jsx)("div",{className:"route-content",children:Object(q.jsxs)(de.g,{children:[Object(q.jsx)(de.d,{exact:!0,path:"/PlatyPlus",component:Pe}),Object(q.jsx)(de.d,{exact:!0,path:"/PlatyPlus/product/:productId",component:He}),Object(q.jsx)(de.d,{exact:!0,path:"/PlatyPlus/category/:categoryName",component:Oe}),Object(q.jsx)(de.d,{exact:!0,path:"/PlatyPlus/login",component:qe}),Object(q.jsx)(de.d,{path:"*",component:Be})]})})},Je=a(142),Ge=function(e){var t=n.a.useState({data:{}}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(q.jsx)(o.BrowserRouter,{children:Object(q.jsx)(h.a,{store:I.store,children:Object(q.jsx)(Je.a,{loading:null,persistor:I.persistore,children:Object(q.jsxs)(W,{value:{contextObj:c,setContextObj:r},children:[Object(q.jsx)(oe,{}),Object(q.jsx)(ze,{}),Object(q.jsx)(le,{})]})})})})},Xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,308)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(q.jsx)(n.a.StrictMode,{children:Object(q.jsx)(Ge,{})}),document.getElementById("root")),Xe()},96:function(e,t,a){}},[[281,1,2]]]);
//# sourceMappingURL=main.64188f5c.chunk.js.map