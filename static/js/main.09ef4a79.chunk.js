(this["webpackJsonptech-commerce"]=this["webpackJsonptech-commerce"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),r=a.n(l),c=(a(94),a(95),a(16),a(22)),o=a(8),m=a(9),s=(a(19),a(144)),u=a(85),d=a(122),p=a(123),E=a(124),h=a(125),v=a(126),f=a(127),b=function(e){return i.a.createElement(c.b,{className:"header-nav-item nav-brand-custom",to:"/home"},i.a.createElement(d.a,null),i.a.createElement("p",{style:{margin:"auto 1rem"}},"TECH COMMERCE"))},x={NavbarActive:{color:"#0D98BA"},NavbarDropItems:{textDecoration:"none",color:"#000000",fontSize:"20px"},NavbarDropActive:{color:"#A684FF"}},g=function(e){var t=i.a.useState(0),a=Object(m.a)(t,2),n=a[0],l=a[1];i.a.useEffect((function(){return window.addEventListener("scroll",r,{passive:!0}),function(){window.removeEventListener("scroll",r)}}),[]);var r=function(){var e=window.pageYOffset;l(e)};return i.a.createElement(s.a,{variant:"dark",fg:"light",expand:"lg",fixed:"top",collapseOnSelect:!0,className:"mb-5 nav-bg",id:n>10?"bottom-bord":"no-bottom-bord"},i.a.createElement(s.a.Brand,{className:"nav-brand",as:b}),i.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(u.a,{className:"ml-auto header-nav-items"},i.a.createElement(u.a.Link,{eventKey:"0"},i.a.createElement(c.b,{to:"/home",className:"header-nav-item",activeStyle:x.NavbarActive},i.a.createElement("p",null,i.a.createElement(p.a,null),"Home"))),i.a.createElement(u.a.Link,{eventKey:"1"},i.a.createElement(c.b,{to:"/account",className:"header-nav-item",activeStyle:x.NavbarActive},i.a.createElement("p",null,i.a.createElement(E.a,null)," Sign Up"))),i.a.createElement(u.a.Link,{eventKey:"1"},i.a.createElement(c.b,{to:"/account",className:"header-nav-item",activeStyle:x.NavbarActive},i.a.createElement("p",null,i.a.createElement(h.a,null)," Sign In"))),i.a.createElement("span",{id:"prod-select-info"},i.a.createElement(u.a.Link,{eventKey:"2"},i.a.createElement(c.b,{to:"/wishlist",className:"header-nav-item fav icon-only",activeStyle:x.NavbarActive},i.a.createElement("p",null,i.a.createElement(v.a,null)," ",i.a.createElement("span",{className:"badge"},"0")))),i.a.createElement(u.a.Link,{eventKey:"3"},i.a.createElement(c.b,{to:"/cart",className:"header-nav-item icon-only",activeStyle:x.NavbarActive},i.a.createElement("p",null,i.a.createElement(f.a,null)," ",i.a.createElement("span",{className:"badge"},n)," Cart: N0.00")))))))},N=(a(61),a(141)),y=a(129),w=a(77),S=a(143),C=a(139),O=a(146),_=a(142),q=a(128),A=function(e){var t=i.a.useState(0),a=Object(m.a)(t,2),n=a[0],l=a[1];i.a.useEffect((function(){return window.addEventListener("scroll",r,{passive:!0}),function(){window.removeEventListener("scroll",r)}}),[]);var r=function(){var e=window.pageYOffset;l(e)};return i.a.createElement(i.a.Fragment,null,n>(e.position?e.position:250)&&i.a.createElement("div",{id:"nav-up"},i.a.createElement("p",{className:"up-ic",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},i.a.createElement(q.a,{fontSize:"inherit"})),i.a.createElement("p",{className:"with-icon"},i.a.createElement(v.a,null)," ",i.a.createElement("span",{className:"badge-nav-up"},"0")),i.a.createElement("p",{className:"with-icon"},i.a.createElement(f.a,null),i.a.createElement("span",{className:"badge-nav-up"},n))))},k=a(145),L=a(130),P=a(131),T=a(132),j=a(133),D=a(51),I=function(){var e=i.a.useState(),t=Object(m.a)(e,2),a=t[0],n=t[1];return i.a.createElement(y.a,{className:"justify-content-center"},D.map((function(e,t){return i.a.createElement(w.a,{xs:12,sm:6,lg:3,key:e._id},i.a.createElement("div",{className:"item-box",onMouseEnter:function(){return n(t)},onTouchStart:function(){return n(t)}},i.a.createElement("span",{className:"product-img-span"},i.a.createElement("img",{src:e.picture,alt:e.name}),i.a.createElement("div",{id:a===t?"show-options":"hide-options"},i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},e.inCart?"Already in cart, remove?":"Add to cart")},i.a.createElement("p",{className:e.inCart?"carted-p":""},i.a.createElement(f.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Quick view")},i.a.createElement("p",null,i.a.createElement(P.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top"},"Add to favorites")},i.a.createElement("p",null,i.a.createElement(v.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Compare")},i.a.createElement("p",null,i.a.createElement(T.a,null))))),i.a.createElement("p",null,e.name),i.a.createElement("p",null,e.description),i.a.createElement("p",null,i.a.createElement(j.a,{fontSize:"small"})," ",e.rating),i.a.createElement("p",null,e.cost)))})))},$=a(78),M=a.n($),G=a(134),U=a(135),R=a(136),F=a(79),H=function(){var e=i.a.useState(),t=Object(m.a)(e,2),a=t[0],n=t[1];return i.a.createElement("div",{className:"learn-body"},i.a.createElement("p",null,"LEARN BLOG"),i.a.createElement(y.a,{className:"justify-content-center"},F.map((function(e,t){return i.a.createElement(w.a,{xs:12,sm:6,lg:3,key:e._id},i.a.createElement("div",{className:"learn-card",onMouseEnter:function(){return n(t)},onTouchStart:function(){return n(t)}},i.a.createElement("span",{className:"product-img-span"},i.a.createElement("img",{src:e.picture,alt:e.title}),i.a.createElement("div",{id:a===t?"show-options":"hide-options"},i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Quick view")},i.a.createElement("p",null,i.a.createElement(P.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top"},"Add to favorites")},i.a.createElement("p",null,i.a.createElement(v.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top"},"Comments")},i.a.createElement("p",null,i.a.createElement(G.a,null)," ",i.a.createElement("span",{className:"comment-badge"},"0"))))),i.a.createElement("p",{className:"learn-card-title"},e.title.length>30?e.title.substr(1,30)+"...":e.title),i.a.createElement("p",null,i.a.createElement(U.a,{fontSize:"small"})," ",e.author),i.a.createElement("p",null,i.a.createElement(R.a,{fontSize:"small"})," ",M()(new Date(e.publish_date)).format("YYYY-MM-DD"))))}))))},K=a(21),z=a(137),B=a(138),W=a(54),V=function(){var e=i.a.useState({products:null,recentlyRemoved:null}),t=Object(m.a)(e,2),a=t[0],n=t[1],l=i.a.useState(),r=Object(m.a)(l,2),c=r[0],o=r[1];return i.a.useEffect((function(){n((function(e){return Object(K.a)(Object(K.a)({},e),{},{products:W})}))}),[]),i.a.createElement("div",{className:"wishlist-body"},i.a.createElement("p",null,"WISHLIST"),i.a.createElement(y.a,{className:"justify-content-center"},i.a.createElement(z.a,{responsive:!0,id:"wishlist-table"},i.a.createElement("thead",{id:"wishlist-thead"},i.a.createElement("tr",{id:"wishlist-head-tr"},i.a.createElement("th",{className:"wishlist-th",id:"product-th"},i.a.createElement("p",null,"Product")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Unit Price")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Stock Availability")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Add To Cart")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Remove")))),i.a.createElement("tbody",null,null==a.products?i.a.createElement("tr",null,i.a.createElement("td",{colSpan:5},i.a.createElement("p",{id:"no-wishlist-prod"},"No products to show."))):a.products.map((function(e,t){return i.a.createElement("tr",{key:e._id},i.a.createElement("td",null,i.a.createElement("div",{className:"item-box",onMouseEnter:function(){return o(t)},onTouchStart:function(){return o(t)}},i.a.createElement("span",{className:"product-img-span"},i.a.createElement("img",{src:e.picture,alt:e.name,width:"200"}),i.a.createElement("div",{id:c===t?"show-options":"hide-options"},i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},e.inCart?"Already in cart, remove?":"Add to cart")},i.a.createElement("p",{className:e.inCart?"carted-p":""},i.a.createElement(f.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Quick view")},i.a.createElement("p",null,i.a.createElement(P.a,null))))),i.a.createElement("p",null,e.name))),i.a.createElement("td",null,i.a.createElement("p",{className:"prod-p"},e.cost)),i.a.createElement("td",null,i.a.createElement("p",{className:e.availability?"avail-p":"un-avail-p"},e.availability?"In stock":"Out in stock")),i.a.createElement("td",null,i.a.createElement("p",{className:e.inCart?"carted-p":"not-carted-p"},e.inCart?"Added":"Not in cart")),i.a.createElement("td",null,i.a.createElement("p",{className:"prod-p remove-p"},i.a.createElement(B.a,{fontSize:"inherit"}))))}))))))},Q=a(40),Y=function(){var e=i.a.useState(0),t=Object(m.a)(e,2),a=t[0],n=t[1];return i.a.createElement(y.a,{className:"justify-content-center auth-form"},0===a?i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{sm:8},i.a.createElement("div",{className:"focus-auth-form"},i.a.createElement(S.a,{className:"login-form"},i.a.createElement(Q.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1199px)",large:"(min-width: 1200px)"}},(function(e){return i.a.createElement(i.a.Fragment,null,e.small&&i.a.createElement(w.a,{sm:4,className:"large-form-name"},i.a.createElement("div",null,i.a.createElement("p",null,"LOGIN"),i.a.createElement("p",{id:"small-welcome"},"Welcome Back."))))})),i.a.createElement(S.a.Group,null,i.a.createElement("input",{type:"email",placeholder:"Username or email"}),i.a.createElement("input",{type:"password",placeholder:"Password"}),i.a.createElement("span",{id:"other-auth-options"},i.a.createElement(S.a.Check,{type:"checkbox",label:"Remember me."}),i.a.createElement("p",null,"Forgot password?")),i.a.createElement("span",{className:"auth-btn"},i.a.createElement(C.a,null,"Log In")))))),i.a.createElement(Q.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1199px)",large:"(min-width: 1200px)"}},(function(e){return i.a.createElement(i.a.Fragment,null,(e.medium||e.large)&&i.a.createElement(w.a,{sm:4,className:"large-form-name"},i.a.createElement("div",{className:"focus-auth-form"},i.a.createElement("p",null,"LOGIN"),i.a.createElement("p",{id:"small-welcome"},"Welcome Back."))))})),i.a.createElement("div",{className:"switch-auth"},i.a.createElement("p",{onClick:function(){return n(1)}},"Or Create Account."))):i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{sm:8,className:"focus-auth-form"},i.a.createElement("div",null,i.a.createElement(S.a,{className:"login-form"},i.a.createElement(S.a.Group,null,i.a.createElement(Q.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1199px)",large:"(min-width: 1200px)"}},(function(e){return i.a.createElement(i.a.Fragment,null,e.small&&i.a.createElement(w.a,{sm:4,className:"large-form-name"},i.a.createElement("div",null,i.a.createElement("p",null,"SIGN UP"),i.a.createElement("p",{id:"small-welcome"},"Welcome Aboard."))))})),i.a.createElement("input",{type:"email",placeholder:"Username or email"}),i.a.createElement("input",{type:"password",placeholder:"Password"}),i.a.createElement("span",{className:"auth-btn"},i.a.createElement(C.a,null,"Sign Up")))))),i.a.createElement(Q.a,{queries:{small:"(max-width: 599px)",medium:"(min-width: 600px) and (max-width: 1199px)",large:"(min-width: 1200px)"}},(function(e){return i.a.createElement(i.a.Fragment,null,(e.medium||e.large)&&i.a.createElement(w.a,{sm:4,className:"large-form-name focus-auth-form"},i.a.createElement("div",null,i.a.createElement("p",null,"SIGN UP"),i.a.createElement("p",{id:"small-welcome"},"Welcome Aboard."))))})),i.a.createElement("div",{className:"switch-auth"},i.a.createElement("p",{onClick:function(){return n(0)}},"Or Log In."))))},J=function(){var e=i.a.useState(),t=Object(m.a)(e,2),a=t[0],n=t[1];return i.a.createElement(y.a,{className:"justify-content-center"},D.map((function(e,t){return i.a.createElement(w.a,{xs:12,sm:6,lg:3,key:e._id},i.a.createElement("div",{className:"item-box",onMouseEnter:function(){return n(t)},onTouchStart:function(){return n(t)}},i.a.createElement("span",{className:"product-img-span"},i.a.createElement("img",{src:e.picture,alt:e.name}),i.a.createElement("div",{id:a===t?"show-options":"hide-options"},i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},e.inCart?"Already in cart, remove?":"Add to cart")},i.a.createElement("p",{className:e.inCart?"carted-p":""},i.a.createElement(f.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Quick view")},i.a.createElement("p",null,i.a.createElement(P.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top"},"Add to favorites")},i.a.createElement("p",null,i.a.createElement(v.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Compare")},i.a.createElement("p",null,i.a.createElement(T.a,null))))),i.a.createElement("p",null,e.name),i.a.createElement("p",null,e.description),i.a.createElement("p",null,i.a.createElement(j.a,{fontSize:"small"})," ",e.rating),i.a.createElement("p",null,e.cost)))})))},X=a(140),Z=function(e){e.location;return i.a.createElement("div",{id:"filter-div"},i.a.createElement("div",null,i.a.createElement(X.a,null),i.a.createElement("select",{name:"categories",id:"filter-categories"},i.a.createElement("option",{value:"All categories"},"All categories"),i.a.createElement("option",{value:"volvo"},"Volvo"),i.a.createElement("option",{value:"saab"},"Saab"),i.a.createElement("option",{value:"mercedes"},"Mercedes sadasdkad adjkas"),i.a.createElement("option",{value:"audi"},"Audi"))))},ee=function(e){e.location;return i.a.createElement(N.a,{className:"home-body"},i.a.createElement(y.a,{className:"justify-content-center",id:"large-home-banner"},i.a.createElement(w.a,{sm:6},i.a.createElement(S.a,null,i.a.createElement(S.a.Group,{id:"search-a"},i.a.createElement("select",{name:"categories",id:"search-categories"},i.a.createElement("option",{value:"volvo"},"Volvo"),i.a.createElement("option",{value:"saab"},"Saab"),i.a.createElement("option",{value:"mercedes"},"Mercedes sadasdkad adjkas"),i.a.createElement("option",{value:"audi"},"Audi")),i.a.createElement("input",{type:"text",placeholder:"search item...",id:"search-input-a"}),i.a.createElement("span",{id:"search-btn-a"},i.a.createElement(C.a,null,"SEARCH")))))),i.a.createElement("div",{className:"home-tabs"},i.a.createElement(O.a,{defaultActiveKey:"0",variant:"pills",transition:!1},i.a.createElement(_.a,{eventKey:"0",title:"FEATURED"},i.a.createElement("p",{id:"tab-title"},"FEAUTURED PRODUCTS"),i.a.createElement(Z,null),i.a.createElement(I,null)),i.a.createElement(_.a,{eventKey:"1",title:"ACCOUNT"},i.a.createElement("div",{className:"account-body"},i.a.createElement(Y,null))),i.a.createElement(_.a,{eventKey:"2",title:"LEARN"},i.a.createElement(H,null)),i.a.createElement(_.a,{eventKey:"3",title:"WISHLIST"},i.a.createElement(V,null)),i.a.createElement(_.a,{eventKey:"4",title:"SHOP"},i.a.createElement("p",{id:"tab-title"},"SHOP"),i.a.createElement(Z,null),i.a.createElement(J,null)))),i.a.createElement(A,null))},te=function(e){var t=e.location;return i.a.useEffect((function(){"/account"===t.pathname&&window.scrollTo({top:500,left:0,behavior:"smooth"})}),[t.pathname]),i.a.createElement(N.a,{className:"home-body"},i.a.createElement(y.a,{className:"justify-content-center",id:"large-home-banner"},i.a.createElement(w.a,{sm:6},i.a.createElement(S.a,null,i.a.createElement(S.a.Group,{id:"search-a"},i.a.createElement("select",{name:"categories",id:"search-categories"},i.a.createElement("option",{value:"volvo"},"Volvo"),i.a.createElement("option",{value:"saab"},"Saab"),i.a.createElement("option",{value:"mercedes"},"Mercedes sadasdkad adjkas"),i.a.createElement("option",{value:"audi"},"Audi")),i.a.createElement("input",{type:"text",placeholder:"search item...",id:"search-input-a"}),i.a.createElement("span",{id:"search-btn-a"},i.a.createElement(C.a,null,"SEARCH")))))),i.a.createElement("div",{className:"account-body"},i.a.createElement(Y,null)),i.a.createElement(A,null))},ae=function(e){var t=e.location;i.a.useEffect((function(){"/wishlist"===t.pathname&&window.scrollTo({top:500,left:0,behavior:"smooth"})}),[t.pathname]);var a=i.a.useState({products:null,recentlyRemoved:null}),n=Object(m.a)(a,2),l=n[0],r=n[1],c=i.a.useState(),o=Object(m.a)(c,2),s=o[0],u=o[1];return i.a.useEffect((function(){r((function(e){return Object(K.a)(Object(K.a)({},e),{},{products:W})}))}),[]),i.a.createElement(N.a,{className:"home-body"},i.a.createElement(y.a,{className:"justify-content-center",id:"large-home-banner"},i.a.createElement(w.a,{sm:6},i.a.createElement(S.a,null,i.a.createElement(S.a.Group,{id:"search-a"},i.a.createElement("select",{name:"categories",id:"search-categories"},i.a.createElement("option",{value:"volvo"},"Volvo"),i.a.createElement("option",{value:"saab"},"Saab"),i.a.createElement("option",{value:"mercedes"},"Mercedes sadasdkad adjkas"),i.a.createElement("option",{value:"audi"},"Audi")),i.a.createElement("input",{type:"text",placeholder:"search item...",id:"search-input-a"}),i.a.createElement("span",{id:"search-btn-a"},i.a.createElement(C.a,null,"SEARCH")))))),i.a.createElement("div",{className:"wishlist-body"},i.a.createElement("p",null,"WISHLIST"),i.a.createElement(y.a,{className:"justify-content-center"},i.a.createElement(z.a,{responsive:!0,id:"wishlist-table"},i.a.createElement("thead",{id:"wishlist-thead"},i.a.createElement("tr",{id:"wishlist-head-tr"},i.a.createElement("th",{className:"wishlist-th",id:"product-th"},i.a.createElement("p",null,"Product")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Unit Price")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Stock Availability")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Add To Cart")),i.a.createElement("th",{className:"wishlist-th"},i.a.createElement("p",null,"Remove")))),i.a.createElement("tbody",null,null==l.products?i.a.createElement("tr",null,i.a.createElement("td",{colSpan:5},i.a.createElement("p",{id:"no-wishlist-prod"},"No products to show."))):l.products.map((function(e,t){return i.a.createElement("tr",{key:e._id},i.a.createElement("td",null,i.a.createElement("div",{className:"item-box",onMouseEnter:function(){return u(t)},onTouchStart:function(){return u(t)}},i.a.createElement("span",{className:"product-img-span"},i.a.createElement("img",{src:e.picture,alt:e.name,width:"200"}),i.a.createElement("div",{id:s===t?"show-options":"hide-options"},i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},e.inCart?"Already in cart, remove?":"Add to cart")},i.a.createElement("p",{className:e.inCart?"carted-p":""},i.a.createElement(f.a,null))),i.a.createElement(k.a,{placement:"top",overlay:i.a.createElement(L.a,{id:"tooltip-top tooltip-custom"},"Quick view")},i.a.createElement("p",null,i.a.createElement(P.a,null))))),i.a.createElement("p",null,e.name))),i.a.createElement("td",null,i.a.createElement("p",{className:"prod-p"},e.cost)),i.a.createElement("td",null,i.a.createElement("p",{className:e.availability?"avail-p":"un-avail-p"},e.availability?"In stock":"Out in stock")),i.a.createElement("td",null,i.a.createElement("p",{className:e.inCart?"carted-p":"not-carted-p"},e.inCart?"Added":"Not in cart")),i.a.createElement("td",null,i.a.createElement("p",{className:"prod-p remove-p"},i.a.createElement(B.a,{fontSize:"inherit"}))))})))))),i.a.createElement(A,null))},ne=function(){return i.a.createElement(c.a,null,i.a.createElement(g,null),i.a.createElement("div",{className:"body-container"},i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/home",component:ee}),i.a.createElement(o.a,{path:"/account",component:te}),i.a.createElement(o.a,{path:"/wishlist",component:ae}),i.a.createElement(o.a,{path:"/",component:ee}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(36),le=a(83),re=a(84),ce=a(82),oe=function(e,t){switch(t.type){case"ADD_TODO":return{id:t.id,text:t.text,completed:!1};case"TOGGLE_TODO":return e.id!==t.id?e:Object(K.a)(Object(K.a)({},e),{},{completed:!e.completed});case"DELETE_TODO":return e.filter((function(e){return e.id!==t.id}));default:return e}},me=a.n(ce)()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(re.a)(e),[oe(void 0,t)]);case"TOGGLE_TODO":return e.map((function(e){return oe(e,t)}));case"DELETE_TODO":return oe(e,t);default:return e}})),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_TODO":return t.filter;default:return e}},ue=Object(ie.b)({todos:me,setVisibility:se}),de=Object(ie.c)(ue);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(le.a,{store:de},i.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,a){},51:function(e){e.exports=JSON.parse('[{"_id":"5f0832e438f3e462d60e4f9c","index":0,"cost":"$2,671.20","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":true,"description":"est irure anim excepteur ad","rating":"1.5"},{"_id":"5f0832e4eb73c8a4ccc7fc12","index":1,"cost":"$3,619.59","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":true,"description":"do nulla id aliqua fugiat","rating":"0.5"},{"_id":"5f0832e4df73df458d20c696","index":2,"cost":"$3,630.53","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":false,"description":"est ipsum aliquip nostrud ipsum","rating":"0.8"},{"_id":"5f0832e490543a7e03a3680a","index":3,"cost":"$2,952.99","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":true,"description":"laborum eu culpa ex id","rating":"1.0"},{"_id":"5f0832e47d079ed5c8c1f41b","index":4,"cost":"$1,754.62","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":true,"description":"commodo excepteur nostrud sit qui","rating":"3.2"},{"_id":"5f0832e438297f361a6c6f92","index":5,"cost":"$1,410.44","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":true,"description":"nisi aliquip id reprehenderit excepteur","rating":"1.3"},{"_id":"5f0832e45159704dbf1c1515","index":6,"cost":"$3,609.14","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":true,"description":"esse reprehenderit laborum ut aliqua","rating":"4.4"},{"_id":"5f0832e4b82f7e17b44d78fc","index":7,"cost":"$3,886.25","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":false,"description":"irure magna laborum consequat commodo","rating":"3.4"},{"_id":"5f0832e40c03e5cdb70e6e41","index":8,"cost":"$3,654.12","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":false,"description":"dolore velit et velit et","rating":"1.5"},{"_id":"5f0832e43520e6814a860789","index":9,"cost":"$2,147.12","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":false,"description":"reprehenderit dolore est irure excepteur","rating":"1.1"}]')},54:function(e){e.exports=JSON.parse('[{"_id":"5f0832e438f3e462d60e4f9c","index":0,"cost":"$2,671.20","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":true,"description":"est irure anim excepteur ad","rating":"1.5"},{"_id":"5f0832e4eb73c8a4ccc7fc12","index":1,"cost":"$3,619.59","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":true,"description":"do nulla id aliqua fugiat","rating":"0.5"},{"_id":"5f0832e4df73df458d20c696","index":2,"cost":"$3,630.53","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":false,"description":"est ipsum aliquip nostrud ipsum","rating":"0.8"},{"_id":"5f0832e490543a7e03a3680a","index":3,"cost":"$2,952.99","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":true,"description":"laborum eu culpa ex id","rating":"1.0"},{"_id":"5f0832e47d079ed5c8c1f41b","index":4,"cost":"$1,754.62","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":true,"description":"commodo excepteur nostrud sit qui","rating":"3.2"},{"_id":"5f0832e438297f361a6c6f92","index":5,"cost":"$1,410.44","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":true,"description":"nisi aliquip id reprehenderit excepteur","rating":"1.3"},{"_id":"5f0832e45159704dbf1c1515","index":6,"cost":"$3,609.14","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":true,"description":"esse reprehenderit laborum ut aliqua","rating":"4.4"},{"_id":"5f0832e4b82f7e17b44d78fc","index":7,"cost":"$3,886.25","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":false,"description":"irure magna laborum consequat commodo","rating":"3.4"},{"_id":"5f0832e40c03e5cdb70e6e41","index":8,"cost":"$3,654.12","picture":"https://picsum.photos/260/260","name":"Product","availability":true,"inCart":false,"description":"dolore velit et velit et","rating":"1.5"},{"_id":"5f0832e43520e6814a860789","index":9,"cost":"$2,147.12","picture":"https://picsum.photos/260/260","name":"Product","availability":false,"inCart":false,"description":"reprehenderit dolore est irure excepteur","rating":"1.1"}]')},61:function(e,t,a){},79:function(e){e.exports=JSON.parse('[{"_id":"5f0712bc46e63cdfab169ad8","index":0,"picture":"https://picsum.photos/260/260","title":"in anim tempor magna amet","description":"Cupidatat est deserunt irure ut. Minim Lorem laboris voluptate consequat. Ea minim occaecat do dolore. Lorem minim officia commodo deserunt exercitation aute qui. Quis ullamco consectetur dolore nisi ex labore ex quis velit sint.","comments":1,"author":"Eddie","publish_date":1595287817238},{"_id":"5f0712bc6eaa4b4df8dc44ad","index":1,"picture":"https://picsum.photos/260/260","title":"ex veniam irure ad incididunt","description":"Pariatur deserunt in elit est ea id. Aliquip mollit amet cupidatat officia nostrud commodo dolore Lorem minim culpa esse. Ad laborum eu excepteur excepteur. Eu eu veniam irure ad commodo pariatur esse cillum. Sunt sunt esse nulla voluptate ex.","comments":1,"author":"George","publish_date":1595958068295},{"_id":"5f0712bc13a45d0880ae0db8","index":2,"picture":"https://picsum.photos/260/260","title":"ut fugiat duis nisi qui","description":"Dolore fugiat cillum culpa do excepteur irure eiusmod elit eiusmod cillum qui. Aliquip nostrud cupidatat non nostrud ullamco enim labore magna ea consectetur sint aute veniam deserunt. Elit ut laborum est Lorem esse reprehenderit minim. Excepteur pariatur cupidatat mollit eiusmod laborum dolore aliqua mollit ad consequat voluptate Lorem consequat aute. Qui veniam in reprehenderit dolor magna enim occaecat sint labore culpa.","comments":2,"author":"Byrd","publish_date":1595890229290},{"_id":"5f0712bc3dc7081d178a0ff9","index":3,"picture":"https://picsum.photos/260/260","title":"officia eu proident magna dolore","description":"Elit et in cupidatat occaecat reprehenderit adipisicing. Esse qui occaecat ipsum consequat minim mollit ex ipsum aliquip. Laboris deserunt reprehenderit tempor do. Consectetur sint culpa occaecat nulla nostrud cillum occaecat irure. Mollit voluptate incididunt veniam exercitation veniam.","comments":4,"author":"Brooke","publish_date":1595644492324},{"_id":"5f0712bc802e0241bcfd79b4","index":4,"picture":"https://picsum.photos/260/260","title":"officia aute commodo dolore excepteur","description":"Deserunt consectetur ut aute qui officia magna proident labore Lorem culpa incididunt exercitation laborum sint. Ut voluptate magna reprehenderit laborum aute tempor ut. Proident ex sint eiusmod laborum ea ut. Elit labore esse ullamco proident qui labore ut sit do cupidatat nisi aute. Dolor Lorem amet ex ea ad aute est sint.","comments":3,"author":"Olivia","publish_date":1594864812497},{"_id":"5f0712bc22a2df0376903d1a","index":5,"picture":"https://picsum.photos/260/260","title":"sunt nulla laborum officia aliquip","description":"Pariatur ex nisi exercitation ut velit exercitation in esse. Exercitation occaecat ea in sunt aliquip esse minim do commodo nisi nisi do. Labore in officia et deserunt sint laboris et. Ullamco et excepteur quis ipsum elit fugiat adipisicing id mollit nisi. Sit ipsum nulla aute ad.","comments":4,"author":"Vazquez","publish_date":1596114746264},{"_id":"5f0712bc9bf9126d34898e30","index":6,"picture":"https://picsum.photos/260/260","title":"tempor non in est id","description":"Mollit in labore exercitation id mollit occaecat pariatur esse commodo. Qui culpa voluptate voluptate irure. Anim dolore ad dolor consequat. Officia dolore aliqua aliquip sint velit veniam Lorem dolor cupidatat ut consectetur laboris. Deserunt fugiat enim aliqua sunt est anim duis consequat.","comments":5,"author":"Mcbride","publish_date":1594743235878},{"_id":"5f0712bcef2bb7b85923dd4b","index":7,"picture":"https://picsum.photos/260/260","title":"ea voluptate ipsum dolor laboris","description":"Nulla commodo commodo anim tempor enim non id irure nulla cillum irure duis cupidatat. Non quis fugiat nisi irure aliqua occaecat incididunt sit ut ea deserunt non mollit. Officia mollit veniam tempor duis. Culpa ex nisi velit minim. Commodo exercitation cillum mollit esse non enim nulla sit minim irure duis elit.","comments":1,"author":"Trevino","publish_date":1595375161271},{"_id":"5f0712bce1b1c76394d93f69","index":8,"picture":"https://picsum.photos/260/260","title":"proident aliquip anim ipsum aliqua","description":"Ex ad ipsum exercitation proident eu excepteur est culpa adipisicing laboris non veniam irure. Aliquip ipsum culpa nostrud enim aute veniam irure ex. Esse eu aute sunt consequat anim nulla excepteur cillum voluptate duis ad in ea exercitation. Non laborum commodo pariatur velit quis quis deserunt duis in dolor eu voluptate pariatur. Nostrud Lorem ut Lorem tempor excepteur sunt quis esse incididunt enim enim voluptate.","comments":0,"author":"Dodson","publish_date":1595871706645},{"_id":"5f0712bc844d427a3bf3b640","index":9,"picture":"https://picsum.photos/260/260","title":"mollit eu quis tempor id","description":"Velit enim sint laboris ex excepteur id. Voluptate dolor id do sit irure ut dolor proident aliquip in qui. Nisi consectetur non quis sint nisi in id adipisicing velit. Tempor et exercitation ipsum amet duis minim incididunt. Sunt consequat incididunt consectetur cillum sunt laborum.","comments":0,"author":"Glover","publish_date":1595563777948}]')},89:function(e,t,a){e.exports=a(106)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.09ef4a79.chunk.js.map