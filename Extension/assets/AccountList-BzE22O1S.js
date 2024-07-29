import{r as a,j as r,u as z,L as re,R as ne}from"./index-DdhxihET.js";import{c as se,u as F,e as ae,d as ie,o as _,B as A}from"./createLucideIcon-BaD5mpES.js";import{P as G,C as B}from"./index-Da7hFKZi.js";import{L as P,C as ce}from"./Label-EVIep7GS.js";import{c as le,b as C,P as de,D as ue,d as pe,u as fe}from"./index-CJfOmEFE.js";import{c as V,A as xe,C as he,a as ve,R as me}from"./index-xbHpmqeC.js";import{W as ge}from"./wallet-Bqcgpr_s.js";import{A as ye}from"./arrow-right-RD9DoNlw.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var Ce="VisuallyHidden",$=a.forwardRef((e,o)=>r.jsx(G.span,{...e,ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));$.displayName=Ce;var be=$,[R,Qe]=le("Tooltip",[V]),L=V(),U="TooltipProvider",we=700,O="tooltip.open",[je,S]=R(U),W=e=>{const{__scopeTooltip:o,delayDuration:t=we,skipDelayDuration:n=300,disableHoverableContent:s=!1,children:c}=e,[l,u]=a.useState(!0),i=a.useRef(!1),p=a.useRef(0);return a.useEffect(()=>{const d=p.current;return()=>window.clearTimeout(d)},[]),r.jsx(je,{scope:o,isOpenDelayed:l,delayDuration:t,onOpen:a.useCallback(()=>{window.clearTimeout(p.current),u(!1)},[]),onClose:a.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>u(!0),n)},[n]),isPointerInTransitRef:i,onPointerInTransitChange:a.useCallback(d=>{i.current=d},[]),disableHoverableContent:s,children:c})};W.displayName=U;var N="Tooltip",[Ee,k]=R(N),Y=e=>{const{__scopeTooltip:o,children:t,open:n,defaultOpen:s=!1,onOpenChange:c,disableHoverableContent:l,delayDuration:u}=e,i=S(N,e.__scopeTooltip),p=L(o),[d,f]=a.useState(null),v=pe(),x=a.useRef(0),h=l??i.disableHoverableContent,g=u??i.delayDuration,m=a.useRef(!1),[T=!1,y]=fe({prop:n,defaultProp:s,onChange:H=>{H?(i.onOpen(),document.dispatchEvent(new CustomEvent(O))):i.onClose(),c==null||c(H)}}),w=a.useMemo(()=>T?m.current?"delayed-open":"instant-open":"closed",[T]),j=a.useCallback(()=>{window.clearTimeout(x.current),m.current=!1,y(!0)},[y]),E=a.useCallback(()=>{window.clearTimeout(x.current),y(!1)},[y]),M=a.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>{m.current=!0,y(!0)},g)},[g,y]);return a.useEffect(()=>()=>window.clearTimeout(x.current),[]),r.jsx(me,{...p,children:r.jsx(Ee,{scope:o,contentId:v,open:T,stateAttribute:w,trigger:d,onTriggerChange:f,onTriggerEnter:a.useCallback(()=>{i.isOpenDelayed?M():j()},[i.isOpenDelayed,M,j]),onTriggerLeave:a.useCallback(()=>{h?E():window.clearTimeout(x.current)},[E,h]),onOpen:j,onClose:E,disableHoverableContent:h,children:t})})};Y.displayName=N;var D="TooltipTrigger",q=a.forwardRef((e,o)=>{const{__scopeTooltip:t,...n}=e,s=k(D,t),c=S(D,t),l=L(t),u=a.useRef(null),i=F(o,u,s.onTriggerChange),p=a.useRef(!1),d=a.useRef(!1),f=a.useCallback(()=>p.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),r.jsx(xe,{asChild:!0,...l,children:r.jsx(G.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...n,ref:i,onPointerMove:C(e.onPointerMove,v=>{v.pointerType!=="touch"&&!d.current&&!c.isPointerInTransitRef.current&&(s.onTriggerEnter(),d.current=!0)}),onPointerLeave:C(e.onPointerLeave,()=>{s.onTriggerLeave(),d.current=!1}),onPointerDown:C(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:C(e.onFocus,()=>{p.current||s.onOpen()}),onBlur:C(e.onBlur,s.onClose),onClick:C(e.onClick,s.onClose)})})});q.displayName=D;var Ae="TooltipPortal",[Ze,Pe]=R(Ae,{forceMount:void 0}),b="TooltipContent",X=a.forwardRef((e,o)=>{const t=Pe(b,e.__scopeTooltip),{forceMount:n=t.forceMount,side:s="top",...c}=e,l=k(b,e.__scopeTooltip);return r.jsx(de,{present:n||l.open,children:l.disableHoverableContent?r.jsx(K,{side:s,...c,ref:o}):r.jsx(Re,{side:s,...c,ref:o})})}),Re=a.forwardRef((e,o)=>{const t=k(b,e.__scopeTooltip),n=S(b,e.__scopeTooltip),s=a.useRef(null),c=F(o,s),[l,u]=a.useState(null),{trigger:i,onClose:p}=t,d=s.current,{onPointerInTransitChange:f}=n,v=a.useCallback(()=>{u(null),f(!1)},[f]),x=a.useCallback((h,g)=>{const m=h.currentTarget,T={x:h.clientX,y:h.clientY},y=Oe(T,m.getBoundingClientRect()),w=De(T,y),j=_e(g.getBoundingClientRect()),E=Ie([...w,...j]);u(E),f(!0)},[f]);return a.useEffect(()=>()=>v(),[v]),a.useEffect(()=>{if(i&&d){const h=m=>x(m,d),g=m=>x(m,i);return i.addEventListener("pointerleave",h),d.addEventListener("pointerleave",g),()=>{i.removeEventListener("pointerleave",h),d.removeEventListener("pointerleave",g)}}},[i,d,x,v]),a.useEffect(()=>{if(l){const h=g=>{const m=g.target,T={x:g.clientX,y:g.clientY},y=(i==null?void 0:i.contains(m))||(d==null?void 0:d.contains(m)),w=!Se(T,l);y?v():w&&(v(),p())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[i,d,l,p,v]),r.jsx(K,{...e,ref:c})}),[Le,Ne]=R(N,{isInside:!1}),K=a.forwardRef((e,o)=>{const{__scopeTooltip:t,children:n,"aria-label":s,onEscapeKeyDown:c,onPointerDownOutside:l,...u}=e,i=k(b,t),p=L(t),{onClose:d}=i;return a.useEffect(()=>(document.addEventListener(O,d),()=>document.removeEventListener(O,d)),[d]),a.useEffect(()=>{if(i.trigger){const f=v=>{const x=v.target;x!=null&&x.contains(i.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[i.trigger,d]),r.jsx(ue,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:r.jsxs(he,{"data-state":i.stateAttribute,...p,...u,ref:o,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[r.jsx(ae,{children:n}),r.jsx(Le,{scope:t,isInside:!0,children:r.jsx(be,{id:i.contentId,role:"tooltip",children:s||n})})]})})});X.displayName=b;var J="TooltipArrow",ke=a.forwardRef((e,o)=>{const{__scopeTooltip:t,...n}=e,s=L(t);return Ne(J,t).isInside?null:r.jsx(ve,{...s,...n,ref:o})});ke.displayName=J;function Oe(e,o){const t=Math.abs(o.top-e.y),n=Math.abs(o.bottom-e.y),s=Math.abs(o.right-e.x),c=Math.abs(o.left-e.x);switch(Math.min(t,n,s,c)){case c:return"left";case s:return"right";case t:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function De(e,o,t=5){const n=[];switch(o){case"top":n.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":n.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":n.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":n.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return n}function _e(e){const{top:o,right:t,bottom:n,left:s}=e;return[{x:s,y:o},{x:t,y:o},{x:t,y:n},{x:s,y:n}]}function Se(e,o){const{x:t,y:n}=e;let s=!1;for(let c=0,l=o.length-1;c<o.length;l=c++){const u=o[c].x,i=o[c].y,p=o[l].x,d=o[l].y;i>n!=d>n&&t<(p-u)*(n-i)/(d-i)+u&&(s=!s)}return s}function Ie(e){const o=e.slice();return o.sort((t,n)=>t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0),Me(o)}function Me(e){if(e.length<=1)return e.slice();const o=[];for(let n=0;n<e.length;n++){const s=e[n];for(;o.length>=2;){const c=o[o.length-1],l=o[o.length-2];if((c.x-l.x)*(s.y-l.y)>=(c.y-l.y)*(s.x-l.x))o.pop();else break}o.push(s)}o.pop();const t=[];for(let n=e.length-1;n>=0;n--){const s=e[n];for(;t.length>=2;){const c=t[t.length-1],l=t[t.length-2];if((c.x-l.x)*(s.y-l.y)>=(c.y-l.y)*(s.x-l.x))t.pop();else break}t.push(s)}return t.pop(),o.length===1&&t.length===1&&o[0].x===t[0].x&&o[0].y===t[0].y?o:o.concat(t)}var He=W,ze=Y,Fe=q,Q=X;const Z=He,ee=ze,te=Fe,I=a.forwardRef(({className:e,sideOffset:o=4,...t},n)=>r.jsx(Q,{ref:n,sideOffset:o,className:ie("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));I.displayName=Q.displayName;const oe=_(({account:e})=>{const t=e.substring(0,2),n=[];for(let s=2;s<e.length;s+=5)n.push(e.substring(s,s+5));return r.jsxs("div",{className:"flex gap-2",children:[r.jsx("div",{children:t}),r.jsx("div",{className:"flex flex-wrap gap-1",children:n.map(s=>r.jsx("div",{children:s},s))})]})}),Ge=_(()=>{const{zondStore:e}=z(),{activeAccount:{accountAddress:o}}=e,t=`${o?"Active account":""}`,n=()=>{navigator.clipboard.writeText(o)};return!!o&&r.jsxs(r.Fragment,{children:[r.jsx(P,{className:"text-secondary",children:t}),r.jsxs(B,{className:"flex w-full flex-col gap-4 p-4 font-bold text-foreground hover:bg-accent",children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsx(oe,{account:o}),r.jsx("span",{children:r.jsx(Z,{children:r.jsxs(ee,{delayDuration:0,children:[r.jsx(te,{asChild:!0,children:r.jsx(A,{className:"hover:text-secondary",variant:"outline",size:"icon",onClick:n,children:r.jsx(ce,{size:"18"})})}),r.jsx(I,{side:"bottom",children:r.jsx(P,{children:"Copy Address"})})]})})})]}),r.jsxs(A,{variant:"outline",className:"hover:text-secondary",children:[r.jsx(Te,{className:"mr-2 h-4 w-4"}),"Lock account"]})]})]})}),Be=()=>r.jsx(re,{to:ne.HOME,children:r.jsxs(A,{className:"flex w-full gap-2",children:[r.jsx(ge,{size:"18"})," Create or import an account"]})}),Ve=_(()=>{const{zondStore:e}=z(),{zondAccounts:o,activeAccount:{accountAddress:t},setActiveAccount:n}=e,{accounts:s}=o,c=`${t?"Other accounts":"Accounts"} in the wallet`,l=s.filter(({accountAddress:u})=>u!==t);return!!l.length&&r.jsxs(r.Fragment,{children:[r.jsx(P,{className:"text-secondary",children:c}),l.map(({accountAddress:u})=>r.jsxs(B,{id:u,className:"flex gap-2 p-4 font-bold text-foreground hover:bg-accent",children:[r.jsx(oe,{account:u}),r.jsx("span",{children:r.jsx(Z,{children:r.jsxs(ee,{delayDuration:0,children:[r.jsx(te,{asChild:!0,children:r.jsx(A,{className:"hover:text-secondary",variant:"outline",size:"icon",onClick:()=>n(u),children:r.jsx(ye,{size:"18"})})}),r.jsx(I,{side:"bottom",children:r.jsx(P,{children:"Switch to this account"})})]})})})]}))]})}),et=()=>r.jsxs("div",{className:"flex flex-col gap-8 p-8",children:[r.jsx(Be,{}),r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(Ge,{}),r.jsx(Ve,{})]})]});export{et as default};
