import{j as e,O as l,u as r,L as c,R as a,a as d,r as i}from"./index-DdhxihET.js";import{o,B as x}from"./createLucideIcon-BaD5mpES.js";import{W as u}from"./wallet-Bqcgpr_s.js";const m=()=>e.jsx("div",{className:"mt-16",children:e.jsx(l,{})}),f=o(()=>{const{zondStore:n}=r(),{activeAccount:{accountAddress:s}}=n,t=s.substring(0,7).concat("...").concat(s.substring(s.length-5));return!!s&&e.jsx(c,{to:a.ACCOUNT_LIST,children:e.jsxs(x,{variant:"outline",className:"flex items-center gap-2 rounded-full px-4 py-2 text-foreground",children:[e.jsx(u,{className:"h-4 w-4"}),t]})})}),j=()=>e.jsx(c,{to:a.HOME,children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"h-6 w-6",src:"qrl-icon.png"}),e.jsxs("div",{className:"flex flex-col text-xs font-bold text-secondary",children:[e.jsx("span",{children:"Zond"}),e.jsx("span",{children:"Wallet"})]})]})}),p=o(()=>{const{zondStore:n}=r(),{zondConnection:s}=n,{isConnected:t}=s;return e.jsxs("div",{className:"fixed top-0 z-20 flex h-16 w-full items-center justify-between border-b-2 border-secondary bg-background px-4",children:[e.jsx(j,{}),t&&e.jsx(f,{})]})});function h(){const{pathname:n}=d();return i.useEffect(()=>{window.scrollTo(0,0)},[n]),null}const v=o(()=>e.jsxs("div",{className:"flex min-h-[48rem] w-[26rem] flex-col overflow-x-hidden bg-background text-foreground",children:[e.jsx(h,{}),e.jsx(p,{}),e.jsx(m,{})]}));export{v as default};