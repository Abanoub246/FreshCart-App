"use strict";(self.webpackChunkfreshcartapp=self.webpackChunkfreshcartapp||[]).push([[732],{1732:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var r=a(5043);const i={"main-color":"forgetPassword_main-color__6v-Cs","bg-main":"forgetPassword_bg-main__6R-KG",sectionBg:"forgetPassword_sectionBg__FyLik","btn-main":"forgetPassword_btn-main__s+ULI",forget:"forgetPassword_forget__qRBtd",background:"forgetPassword_background__N-ozV",inputContainer:"forgetPassword_inputContainer__jEZsf"};var t=a(3216),n=a(3892),l=a(899),o=a(7154),d=a(1591),c=a(579);function m(){const[e,s]=(0,r.useState)(!1),[a,m]=(0,r.useState)(null),u=(0,t.Zp)(),f=l.Ik({email:l.Yj().email("Invalid email address").required("Please enter your email")});const h=(0,n.Wx)({initialValues:{email:""},validationSchema:f,onSubmit:e=>{!async function(e){s(!0),await o.A.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",e).then((e=>{"success"===e.data.statusMsg&&(s(!1),m(null),u("/verify-code"))})).catch((e=>{s(!1),m(e.response.data.message)}))}(e)}});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.m,{children:[(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("title",{children:"Forget Password"})]}),(0,c.jsx)("section",{id:i.forget,className:"min-vh-100 overflow-x-hidden",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6"}),(0,c.jsx)("div",{id:i.background,className:"col-md-6 min-vh-100 pt-5 pb-4 rounded-start-5 shadow",children:(0,c.jsxs)("div",{className:"container pt-4 px-4",children:[(0,c.jsx)("h3",{className:"fw-bold mt-5 mb-4",children:"Please enter your email"}),(0,c.jsxs)("form",{onSubmit:h.handleSubmit,className:"form-group d-flex flex-column justify-content-center pt-2",children:[(0,c.jsxs)("div",{className:i.inputContainer,children:[(0,c.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"off",className:"form-control border-0 shadow-sm py-2 rounded-3",placeholder:"User Email",onChange:h.handleChange,value:h.values.email,onBlur:h.handleBlur}),(0,c.jsx)("label",{htmlFor:"email",children:"User Email"}),h.touched.email&&h.errors.email&&(0,c.jsxs)("span",{className:"text-danger",children:[(0,c.jsx)("i",{className:"fa-solid fa-circle-exclamation"})," ",h.errors.email]})]}),(0,c.jsx)("button",{id:"btn-main",className:"btn w-50 align-self-center rounded-3 shadow-sm",type:"submit",disabled:!(h.isValid&&h.dirty),children:e?(0,c.jsx)("i",{className:"fa-solid fa-spinner fa-spin-pulse"}):"Verify"}),a&&(0,c.jsxs)("div",{className:"text-danger text-center mt-2",children:[(0,c.jsx)("i",{className:"fa-solid fa-circle-exclamation"})," ",a]})]})]})})]})})]})}}}]);
//# sourceMappingURL=732.268fdcac.chunk.js.map