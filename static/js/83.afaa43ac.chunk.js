"use strict";(self.webpackChunkfreshcartapp=self.webpackChunkfreshcartapp||[]).push([[83],{83:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(5043);const c={"main-color":"Products_main-color__I2ZPR","bg-main":"Products_bg-main__GgISV",sectionBg:"Products_sectionBg__+o7-d","btn-main":"Products_btn-main__etDh9",products:"Products_products__qLXmt",hover:"Products_hover__lOGdT",hoverImg:"Products_hoverImg__63jYa",heart:"Products_heart__INSLx",cart:"Products_cart__74OSO"};var r=a(5475),n=a(7154),i=a(2907),d=a(3762),o=a(9571),l=a(1591),m=a(5169),h=a(3401),u=a(526),x=a(579);function j(){const{addToCart:e}=(0,t.useContext)(m.M),{addToWishList:s}=(0,t.useContext)(u.L);let{data:a,isLoading:j,isError:p,error:g,refetch:f}=(0,i.useQuery)("gitAllProducts",(async function(){return await n.A.get("".concat("https://ecommerce.routemisr.com/api/v1/","products"))}),{refetchOnWindowFocus:!1});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(l.m,{children:[(0,x.jsx)("meta",{charSet:"utf-8"}),(0,x.jsx)("title",{children:"Featured Products"}),(0,x.jsx)("meta",{name:"description",content:"FreshCart App - Products"}),(0,x.jsx)("meta",{name:"keywords",content:"Fresh-Cart-App-Products"})]}),(0,x.jsxs)("section",{className:"".concat(c.products," min-vh-100 pt-5 position-relative"),children:[j&&(0,x.jsx)(d.A,{}),p&&(0,x.jsxs)("div",{className:"text-center",children:[(0,x.jsx)("figure",{children:(0,x.jsx)("img",{src:o.A,className:"w-50",alt:"Error"})}),(0,x.jsx)("h3",{className:"text-danger",children:g}),(0,x.jsxs)("div",{className:"d-flex justify-content-center align-items-center gap-3",children:[(0,x.jsx)("button",{onClick:f,id:"btn-main",className:"btn mt-3 py-2 w-25 rounded-3",children:"Try Again"}),(0,x.jsx)(r.N_,{to:"/",id:"btn-main",className:"btn mt-3 py-2 w-25 rounded-3",children:"Back To Home"})]})]}),(null===a||void 0===a?void 0:a.data.data)&&(0,x.jsxs)("div",{className:"container-lg my-5",children:[(0,x.jsx)("h2",{className:"main-color fw-bold",children:"Featured Products"}),(0,x.jsx)("div",{className:"row g-3 mt-3",children:a.data.data.map((a=>(0,x.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-3",children:(0,x.jsxs)("div",{className:"".concat(c.hover," card overflow-hidden rounded-3"),children:[(0,x.jsxs)("label",{className:c.heart,children:[(0,x.jsx)("input",{type:"checkbox",onChange:()=>async function(e){let a=await s(e);"success"===a.status?h.oR.success(a.message):h.oR.error("Sorry, Failed to add product to wish list")}(a.id)}),(0,x.jsx)("i",{className:"fa fa-heart translate-middle-y mt-2"})]}),(0,x.jsxs)(r.N_,{to:"/productDetails/".concat(a.id),className:"text-decoration-none",children:[(0,x.jsx)("figure",{className:"mb-0 overflow-hidden",children:(0,x.jsx)("img",{src:a.imageCover,className:"".concat(c.hoverImg," w-100"),alt:a.title})}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("h5",{className:" main-color fs-6 mb-1",children:a.category.name}),(0,x.jsx)("h5",{className:" main-color fs-6 mb-1",children:a.brand.name}),(0,x.jsx)("h5",{className:"card-title text-truncate fw-bold text-dark",children:a.title}),(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,x.jsxs)("h5",{className:"card-text fw-bold main-color mb-0",children:[a.price," EGP"]}),(0,x.jsxs)("div",{className:"rating d-flex align-items-baseline",children:[(0,x.jsx)("i",{className:"fa fa-star text-warning"}),(0,x.jsx)("p",{className:"ms-1 text-dark mb-0 fw-medium",children:a.ratingsAverage})]})]})]})]}),(0,x.jsx)("div",{className:"px-3 pb-3",children:(0,x.jsxs)("button",{onClick:()=>async function(s){let a=await e(s);"success"===a.status?h.oR.success(a.message):h.oR.error("Sorry, Failed to add product to cart")}(a.id),id:"btn-main",className:"btn btn-main rounded-3 w-100 ".concat(c.cart),children:[(0,x.jsx)("i",{className:"fa fa-shopping-cart me-2"}),"Add to cart"]})})]})},a.id)))})]})]})]})}}}]);
//# sourceMappingURL=83.afaa43ac.chunk.js.map