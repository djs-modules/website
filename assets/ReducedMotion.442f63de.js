import{K as u,O as c,I as d}from"./index.cc9a6b69.js";const n="reduced-motion",t=u("(prefers-reduced-motion)"),o=c(n,t.value),r=o;r.value?document.documentElement.classList.add("reduce-motion"):document.documentElement.classList.remove("reduce-motion");let e=!0;const a=s=>{if(e){e=!1;return}o.value=s,document.documentElement.classList.toggle("reduce-motion")};d(()=>a(t.value));export{a as t,r as u};
