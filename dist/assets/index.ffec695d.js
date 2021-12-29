import{r as g,a as v,b as m,o as l,c as i,d as a,n as x,F as w,e as y,f as u,w as k,u as b,g as L,t as j,h as P,i as E,j as C,k as O,l as A,m as N}from"./vendor.29599452.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};V();const S={class:"bg-white z-50 shadow fixed w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"},$={class:"container flex flex-wrap justify-between items-center mx-auto"},z=a("a",{to:"/",class:"flex"},[a("span",{class:"text-gray-800 bg-white bg-transparent select-none self-center text-2xl font-semibold whitespace-nowrap dark:text-white"}," Ali Miracle ")],-1),H={class:"flex md:order-1"},R=P('<span class="sr-only">Open main menu</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',3),B=[R],D={class:"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"},I={setup(d){const s=g(!1),n=v([{text:"Home",link:"/"},{text:"Skills",link:"/skills"},{text:"Projects",link:"/projects"},{text:"Contact",link:"/contact"}]);return(r,e)=>{const o=m("router-link");return l(),i("nav",S,[a("div",$,[z,a("div",H,[a("button",{onClick:e[0]||(e[0]=t=>s.value=!s.value),"data-collapse-toggle":"#mobile-menu-4",type:"button",class:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mobile-menu-4","aria-expanded":"false"},B)]),a("div",{class:x(["justify-between items-end w-full md:flex md:w-auto md:order-2",{hidden:!s.value}]),id:"mobile-menu-4"},[a("ul",D,[(l(!0),i(w,null,y(b(n),t=>(l(),i("li",{key:t.text},[u(o,{to:t.link,class:"nav-link","aria-current":"page"},{default:k(()=>[L(j(t.text),1)]),_:2},1032,["to"])]))),128))])],2)])])}}},M={setup(d){return(s,n)=>{const r=m("router-view");return l(),i("div",null,[u(I),u(r)])}}},T="modulepreload",p={},F="/template-vuejs/dist/",c=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${F}${r}`,r in p)return;p[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":T,e||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),e)return new Promise((h,_)=>{t.addEventListener("load",h),t.addEventListener("error",_)})})).then(()=>s())},q=()=>c(()=>import("./Home.23baba20.js"),["assets/Home.23baba20.js","assets/iconify.e4211c27.js","assets/vendor.29599452.js"]),W=()=>c(()=>import("./Project.0dc28f64.js"),["assets/Project.0dc28f64.js","assets/vendor.29599452.js"]),K=()=>c(()=>import("./Skills.90105d75.js"),["assets/Skills.90105d75.js","assets/iconify.e4211c27.js","assets/vendor.29599452.js"]),G=()=>c(()=>import("./Contact.9efaae85.js"),["assets/Contact.9efaae85.js","assets/iconify.e4211c27.js","assets/vendor.29599452.js"]),J=[{path:"/",component:q},{path:"/projects",component:W},{path:"/skills",component:K},{path:"/contact",component:G}];var Q=E({history:C("/template-vuejs/dist/"),linkExactActiveClass:"is-active",routes:J});const f=O({render:()=>A(M),created:()=>{N.init()}});f.use(Q);f.mount("#app");
