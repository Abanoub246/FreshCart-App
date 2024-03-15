"use strict";(self.webpackChunkfreshcartapp=self.webpackChunkfreshcartapp||[]).push([[249],{5249:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var r=a(5043);const c={"main-color":"Orders_main-color__zql5-","bg-main":"Orders_bg-main__Exs7l",sectionBg:"Orders_sectionBg__ICZxr","btn-main":"Orders_btn-main__IzkDC",hover:"Orders_hover__tcstc",hoverImg:"Orders_hoverImg__WCOLU",cart:"Orders_cart__kGsZt"};var i=a(7154),n=a(697),d=a(1591),l=a(3762),t=a(5475),m=a(9571),o=a(579);function h(){let{userId:e}=(0,r.useContext)(n.c);const[s,a]=(0,r.useState)(null),[h,x]=(0,r.useState)(!1),p="https://ecommerce.routemisr.com/api/v1/orders/user/".concat(e);return(0,r.useEffect)((()=>{!async function(){x(!0);try{const{data:e}=await i.A.get(p);null!==e&&void 0!==e&&e.length?(a(e),x(!1)):(a(null),x(!1))}catch(e){console.log(e)}}()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.m,{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("title",{children:"My Orders"}),(0,o.jsx)("meta",{name:"description",content:"FreshCart App - My Orders"}),(0,o.jsx)("meta",{name:"keywords",content:"Fresh-Cart-App-My-Orders"})]}),(0,o.jsxs)("section",{className:"sectionBg min-vh-100 py-5",children:[h&&(0,o.jsx)(l.A,{}),(0,o.jsx)("div",{className:"container my-5",children:s?s.map((e=>(0,o.jsxs)("div",{className:"card p-3 rounded-3 p-4 mb-3",children:[(0,o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"main-color fw-bold",children:"Shipping details:"}),(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["Phone number:"," ",(0,o.jsx)("span",{className:"main-color fw-semibold",children:e.shippingAddress.phone})]}),(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["City:"," ",(0,o.jsx)("span",{className:"main-color fw-semibold",children:e.shippingAddress.city})]}),(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["Address:"," ",(0,o.jsx)("span",{className:"main-color fw-semibold",children:e.shippingAddress.details})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["Tax price:"," ",(0,o.jsxs)("span",{className:"main-color fw-semibold",children:[e.taxPrice," EGP"]})]}),(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["Shipping price:"," ",(0,o.jsxs)("span",{className:"main-color fw-semibold",children:[e.shippingPrice," EGP"]})]}),(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["Total order price:"," ",(0,o.jsxs)("span",{className:"main-color fw-semibold",children:[e.totalOrderPrice," EGP"]})]}),(0,o.jsxs)("p",{className:"fw-medium mb-1",children:["Payment method:"," ",(0,o.jsx)("span",{className:"main-color fw-semibold",children:e.paymentMethodType})]})]})]}),(0,o.jsx)("div",{className:"row g-3 mt-3",children:e.cartItems.map((e=>(0,o.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-3",children:(0,o.jsx)("div",{className:"".concat(c.hover," card overflow-hidden rounded-3"),children:(0,o.jsxs)("div",{to:"/itemDetails/".concat(e.product.id),className:"text-decoration-none",children:[(0,o.jsx)("figure",{className:"mb-0 overflow-hidden",children:(0,o.jsx)("img",{src:e.product.imageCover,className:"".concat(c.hoverImg," w-100"),alt:e.product.title})}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h5",{className:" main-color fs-6 mb-1",children:e.product.category.name}),(0,o.jsx)("h5",{className:" main-color fs-6 mb-1",children:e.product.brand.name}),(0,o.jsx)("h5",{className:"card-title text-truncate fw-bold text-dark",children:e.product.title}),(0,o.jsxs)("h5",{className:"card-text fw-semibold fs-6 main-color mb-1",children:["count: ",e.count]}),(0,o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,o.jsxs)("h5",{className:"card-text fw-bold main-color mb-0",children:[e.price," EGP"]}),(0,o.jsxs)("div",{className:"rating d-flex align-items-baseline",children:[(0,o.jsx)("i",{className:"fa fa-star text-warning"}),(0,o.jsx)("p",{className:"ms-1 text-dark mb-0 fw-medium",children:e.product.ratingsAverage})]})]})]})]})})},e.product.id)))})]},e._id))):(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("figure",{children:(0,o.jsx)("img",{src:m.A,className:"w-50",alt:"Error"})}),(0,o.jsx)("h3",{className:"text-danger",children:"You Don't Have Any Orders"}),(0,o.jsx)("div",{className:"d-flex justify-content-center align-items-center gap-3",children:(0,o.jsx)(t.N_,{to:"products",id:"btn-main",className:"btn mt-3 py-2 w-25 rounded-3",children:"Please Order Now"})})]})})]})]})}}}]);
//# sourceMappingURL=249.55cc6bec.chunk.js.map