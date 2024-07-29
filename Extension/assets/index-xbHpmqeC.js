import{r as C,d as ve,j as V}from"./index-DdhxihET.js";import{P as vt}from"./index-Da7hFKZi.js";import{u as Yt}from"./createLucideIcon-BaD5mpES.js";import{f as wt,c as be,a as Ae}from"./index-CJfOmEFE.js";const Re=["top","right","bottom","left"],_=Math.min,H=Math.max,at=Math.round,ct=Math.floor,q=t=>({x:t,y:t}),Ce={left:"right",right:"left",bottom:"top",top:"bottom"},Pe={start:"end",end:"start"};function xt(t,e,n){return H(t,_(e,n))}function I(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function bt(t){return t==="x"?"y":"x"}function At(t){return t==="y"?"height":"width"}function U(t){return["top","bottom"].includes(Y(t))?"y":"x"}function Rt(t){return bt(U(t))}function Oe(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=Rt(t),r=At(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ft(s)),[s,ft(s)]}function Se(t){const e=ft(t);return[yt(t),e,yt(e)]}function yt(t){return t.replace(/start|end/g,e=>Pe[e])}function Ee(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Te(t,e,n,o){const i=Q(t);let r=Ee(Y(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(yt)))),r}function ft(t){return t.replace(/left|right|bottom|top/g,e=>Ce[e])}function De(t){return{top:0,right:0,bottom:0,left:0,...t}}function Xt(t){return typeof t!="number"?De(t):{top:t,right:t,bottom:t,left:t}}function ut(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ft(t,e,n){let{reference:o,floating:i}=t;const r=U(e),s=Rt(e),l=At(s),c=Y(e),a=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Q(e)){case"start":f[s]-=m*(n&&a?-1:1);break;case"end":f[s]+=m*(n&&a?-1:1);break}return f}const Le=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=Ft(a,o,c),m=o,f={},p=0;for(let h=0;h<l.length;h++){const{name:w,fn:g}=l[h],{x,y:b,data:y,reset:v}=await g({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});d=x??d,u=b??u,f={...f,[w]:{...f[w],...y}},v&&p<=50&&(p++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(a=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=Ft(a,m,c)),h=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:f}};async function nt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=I(e,t),p=Xt(f),w=l[m?u==="floating"?"reference":"floating":u],g=ut(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:d,strategy:c})),x=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),y=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},v=ut(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:b,strategy:c}):x);return{top:(g.top-v.top+p.top)/y.y,bottom:(v.bottom-g.bottom+p.bottom)/y.y,left:(g.left-v.left+p.left)/y.x,right:(v.right-g.right+p.right)/y.x}}const Me=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:d=0}=I(t,e)||{};if(a==null)return{};const u=Xt(d),m={x:n,y:o},f=Rt(i),p=At(f),h=await s.getDimensions(a),w=f==="y",g=w?"top":"left",x=w?"bottom":"right",b=w?"clientHeight":"clientWidth",y=r.reference[p]+r.reference[f]-m[f]-r.floating[p],v=m[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let S=A?A[b]:0;(!S||!await(s.isElement==null?void 0:s.isElement(A)))&&(S=l.floating[b]||r.floating[p]);const L=y/2-v/2,$=S/2-h[p]/2-1,T=_(u[g],$),M=_(u[x],$),k=T,N=S-h[p]-M,P=S/2-h[p]/2+L,D=xt(k,P,N),F=!c.arrow&&Q(i)!=null&&P!==D&&r.reference[p]/2-(P<k?T:M)-h[p]/2<0,R=F?P<k?P-k:P-N:0;return{[f]:m[f]+R,data:{[f]:D,centerOffset:P-D-R,...F&&{alignmentOffset:R}},reset:F}}}),ke=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...w}=I(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=Y(i),x=U(l),b=Y(l)===l,y=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=m||(b||!h?[ft(l)]:Se(l)),A=p!=="none";!m&&A&&v.push(...Te(l,h,p,y));const S=[l,...v],L=await nt(e,w),$=[];let T=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&$.push(L[g]),u){const P=Oe(i,s,y);$.push(L[P[0]],L[P[1]])}if(T=[...T,{placement:i,overflows:$}],!$.every(P=>P<=0)){var M,k;const P=(((M=r.flip)==null?void 0:M.index)||0)+1,D=S[P];if(D)return{data:{index:P,overflows:T},reset:{placement:D}};let F=(k=T.filter(R=>R.overflows[0]<=0).sort((R,O)=>R.overflows[1]-O.overflows[1])[0])==null?void 0:k.placement;if(!F)switch(f){case"bestFit":{var N;const R=(N=T.filter(O=>{if(A){const E=U(O.placement);return E===x||E==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(E=>E>0).reduce((E,ht)=>E+ht,0)]).sort((O,E)=>O[1]-E[1])[0])==null?void 0:N[0];R&&(F=R);break}case"initialPlacement":F=l;break}if(i!==F)return{reset:{placement:F}}}return{}}}};function Ht(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Wt(t){return Re.some(e=>t[e]>=0)}const $e=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=I(t,e);switch(o){case"referenceHidden":{const r=await nt(e,{...i,elementContext:"reference"}),s=Ht(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Wt(s)}}}case"escaped":{const r=await nt(e,{...i,altBoundary:!0}),s=Ht(r,n.floating);return{data:{escapedOffsets:s,escaped:Wt(s)}}}default:return{}}}}};async function Ne(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Y(n),l=Q(n),c=U(n)==="y",a=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=I(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof p=="number"&&(f=l==="end"?p*-1:p),c?{x:f*d,y:m*a}:{x:m*a,y:f*d}}const Fe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Ne(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},He=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...c}=I(t,e),a={x:n,y:o},d=await nt(e,c),u=U(Y(i)),m=bt(u);let f=a[m],p=a[u];if(r){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",x=f+d[w],b=f-d[g];f=xt(x,f,b)}if(s){const w=u==="y"?"top":"left",g=u==="y"?"bottom":"right",x=p+d[w],b=p-d[g];p=xt(x,p,b)}const h=l.fn({...e,[m]:f,[u]:p});return{...h,data:{x:h.x-n,y:h.y-o}}}}},We=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=I(t,e),d={x:n,y:o},u=U(i),m=bt(u);let f=d[m],p=d[u];const h=I(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const b=m==="y"?"height":"width",y=r.reference[m]-r.floating[b]+w.mainAxis,v=r.reference[m]+r.reference[b]-w.mainAxis;f<y?f=y:f>v&&(f=v)}if(a){var g,x;const b=m==="y"?"width":"height",y=["top","left"].includes(Y(i)),v=r.reference[u]-r.floating[b]+(y&&((g=s.offset)==null?void 0:g[u])||0)+(y?0:w.crossAxis),A=r.reference[u]+r.reference[b]+(y?0:((x=s.offset)==null?void 0:x[u])||0)-(y?w.crossAxis:0);p<v?p=v:p>A&&(p=A)}return{[m]:f,[u]:p}}}},Be=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=I(t,e),c=await nt(e,l),a=Y(n),d=Q(n),u=U(n)==="y",{width:m,height:f}=o.floating;let p,h;a==="top"||a==="bottom"?(p=a,h=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=a,p=d==="end"?"top":"bottom");const w=f-c.top-c.bottom,g=m-c.left-c.right,x=_(f-c[p],w),b=_(m-c[h],g),y=!e.middlewareData.shift;let v=x,A=b;if(u?A=d||y?_(b,g):g:v=d||y?_(x,w):w,y&&!d){const L=H(c.left,0),$=H(c.right,0),T=H(c.top,0),M=H(c.bottom,0);u?A=m-2*(L!==0||$!==0?L+$:H(c.left,c.right)):v=f-2*(T!==0||M!==0?T+M:H(c.top,c.bottom))}await s({...e,availableWidth:A,availableHeight:v});const S=await i.getDimensions(r.floating);return m!==S.width||f!==S.height?{reset:{rects:!0}}:{}}}};function tt(t){return qt(t)?(t.nodeName||"").toLowerCase():"#document"}function W(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function X(t){var e;return(e=(qt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qt(t){return t instanceof Node||t instanceof W(t).Node}function z(t){return t instanceof Element||t instanceof W(t).Element}function j(t){return t instanceof HTMLElement||t instanceof W(t).HTMLElement}function Bt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof W(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function _e(t){return["table","td","th"].includes(tt(t))}function pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ct(t){const e=Pt(),n=B(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ze(t){let e=Z(t);for(;j(e)&&!J(e);){if(pt(e))return null;if(Ct(e))return e;e=Z(e)}return null}function Pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(tt(t))}function B(t){return W(t).getComputedStyle(t)}function mt(t){return z(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Z(t){if(tt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Bt(t)&&t.host||X(t);return Bt(e)?e.host:e}function Ut(t){const e=Z(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:j(e)&&it(e)?e:Ut(e)}function ot(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ut(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=W(i);return r?e.concat(s,s.visualViewport||[],it(i)?i:[],s.frameElement&&n?ot(s.frameElement):[]):e.concat(i,ot(i,[],n))}function Zt(t){const e=B(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=j(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=at(n)!==r||at(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Ot(t){return z(t)?t:t.contextElement}function G(t){const e=Ot(t);if(!j(e))return q(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Zt(e);let s=(r?at(n.width):n.width)/o,l=(r?at(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const je=q(0);function Kt(t){const e=W(t);return!Pt()||!e.visualViewport?je:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ve(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==W(t)?!1:e}function K(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Ot(t);let s=q(1);e&&(o?z(o)&&(s=G(o)):s=G(t));const l=Ve(r,n,o)?Kt(r):q(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=W(r),f=o&&z(o)?W(o):o;let p=m,h=p.frameElement;for(;h&&o&&f!==p;){const w=G(h),g=h.getBoundingClientRect(),x=B(h),b=g.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,y=g.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;c*=w.x,a*=w.y,d*=w.x,u*=w.y,c+=b,a+=y,p=W(h),h=p.frameElement}}return ut({width:d,height:u,x:c,y:a})}function Ie(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=X(o),l=e?pt(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=q(1);const d=q(0),u=j(o);if((u||!u&&!r)&&((tt(o)!=="body"||it(s))&&(c=mt(o)),j(o))){const m=K(o);a=G(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+d.x,y:n.y*a.y-c.scrollTop*a.y+d.y}}function Ye(t){return Array.from(t.getClientRects())}function Gt(t){return K(X(t)).left+mt(t).scrollLeft}function Xe(t){const e=X(t),n=mt(t),o=t.ownerDocument.body,i=H(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=H(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Gt(t);const l=-n.scrollTop;return B(o).direction==="rtl"&&(s+=H(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function qe(t,e){const n=W(t),o=X(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=Pt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Ue(t,e){const n=K(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=j(t)?G(t):q(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function _t(t,e,n){let o;if(e==="viewport")o=qe(t,n);else if(e==="document")o=Xe(X(t));else if(z(e))o=Ue(e,n);else{const i=Kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ut(o)}function Jt(t,e){const n=Z(t);return n===e||!z(n)||J(n)?!1:B(n).position==="fixed"||Jt(n,e)}function Ze(t,e){const n=e.get(t);if(n)return n;let o=ot(t,[],!1).filter(l=>z(l)&&tt(l)!=="body"),i=null;const r=B(t).position==="fixed";let s=r?Z(t):t;for(;z(s)&&!J(s);){const l=B(s),c=Ct(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||it(s)&&!c&&Jt(t,s))?o=o.filter(d=>d!==s):i=l,s=Z(s)}return e.set(t,o),o}function Ke(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?pt(e)?[]:Ze(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,d)=>{const u=_t(e,d,i);return a.top=H(u.top,a.top),a.right=_(u.right,a.right),a.bottom=_(u.bottom,a.bottom),a.left=H(u.left,a.left),a},_t(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ge(t){const{width:e,height:n}=Zt(t);return{width:e,height:n}}function Je(t,e,n){const o=j(e),i=X(e),r=n==="fixed",s=K(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=q(0);if(o||!o&&!r)if((tt(e)!=="body"||it(i))&&(l=mt(e)),o){const u=K(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Gt(i));const a=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:a,y:d,width:s.width,height:s.height}}function gt(t){return B(t).position==="static"}function zt(t,e){return!j(t)||B(t).position==="fixed"?null:e?e(t):t.offsetParent}function Qt(t,e){const n=W(t);if(pt(t))return n;if(!j(t)){let i=Z(t);for(;i&&!J(i);){if(z(i)&&!gt(i))return i;i=Z(i)}return n}let o=zt(t,e);for(;o&&_e(o)&&gt(o);)o=zt(o,e);return o&&J(o)&&gt(o)&&!Ct(o)?n:o||ze(t)||n}const Qe=async function(t){const e=this.getOffsetParent||Qt,n=this.getDimensions,o=await n(t.floating);return{reference:Je(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function tn(t){return B(t).direction==="rtl"}const en={convertOffsetParentRelativeRectToViewportRelativeRect:Ie,getDocumentElement:X,getClippingRect:Ke,getOffsetParent:Qt,getElementRects:Qe,getClientRects:Ye,getDimensions:Ge,getScale:G,isElement:z,isRTL:tn};function nn(t,e){let n=null,o;const i=X(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:d,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const f=ct(d),p=ct(i.clientWidth-(a+u)),h=ct(i.clientHeight-(d+m)),w=ct(a),x={rootMargin:-f+"px "+-p+"px "+-h+"px "+-w+"px",threshold:H(0,_(1,c))||1};let b=!0;function y(v){const A=v[0].intersectionRatio;if(A!==c){if(!b)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(y,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,x)}n.observe(t)}return s(!0),r}function on(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Ot(t),d=i||r?[...a?ot(a):[],...ot(e)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const u=a&&l?nn(a,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(g=>{let[x]=g;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let p,h=c?K(t):null;c&&w();function w(){const g=K(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,p=requestAnimationFrame(w)}return n(),()=>{var g;d.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),u==null||u(),(g=f)==null||g.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const rn=Fe,sn=He,cn=ke,ln=Be,an=$e,jt=Me,fn=We,un=(t,e,n)=>{const o=new Map,i={platform:en,...n},r={...i.platform,_c:o};return Le(t,e,{...i,platform:r})};var lt=typeof document<"u"?C.useLayoutEffect:C.useEffect;function dt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!dt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!dt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function te(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Vt(t,e){const n=te(t);return Math.round(e*n)/n}function It(t){const e=C.useRef(t);return lt(()=>{e.current=t}),e}function dn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=t,[d,u]=C.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,f]=C.useState(o);dt(m,o)||f(o);const[p,h]=C.useState(null),[w,g]=C.useState(null),x=C.useCallback(R=>{R!==A.current&&(A.current=R,h(R))},[]),b=C.useCallback(R=>{R!==S.current&&(S.current=R,g(R))},[]),y=r||p,v=s||w,A=C.useRef(null),S=C.useRef(null),L=C.useRef(d),$=c!=null,T=It(c),M=It(i),k=C.useCallback(()=>{if(!A.current||!S.current)return;const R={placement:e,strategy:n,middleware:m};M.current&&(R.platform=M.current),un(A.current,S.current,R).then(O=>{const E={...O,isPositioned:!0};N.current&&!dt(L.current,E)&&(L.current=E,ve.flushSync(()=>{u(E)}))})},[m,e,n,M]);lt(()=>{a===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[a]);const N=C.useRef(!1);lt(()=>(N.current=!0,()=>{N.current=!1}),[]),lt(()=>{if(y&&(A.current=y),v&&(S.current=v),y&&v){if(T.current)return T.current(y,v,k);k()}},[y,v,k,T,$]);const P=C.useMemo(()=>({reference:A,floating:S,setReference:x,setFloating:b}),[x,b]),D=C.useMemo(()=>({reference:y,floating:v}),[y,v]),F=C.useMemo(()=>{const R={position:n,left:0,top:0};if(!D.floating)return R;const O=Vt(D.floating,d.x),E=Vt(D.floating,d.y);return l?{...R,transform:"translate("+O+"px, "+E+"px)",...te(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:O,top:E}},[n,l,D.floating,d.x,d.y]);return C.useMemo(()=>({...d,update:k,refs:P,elements:D,floatingStyles:F}),[d,k,P,D,F])}const pn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?jt({element:o.current,padding:i}).fn(n):{}:o?jt({element:o,padding:i}).fn(n):{}}}},mn=(t,e)=>({...rn(t),options:[t,e]}),hn=(t,e)=>({...sn(t),options:[t,e]}),gn=(t,e)=>({...fn(t),options:[t,e]}),wn=(t,e)=>({...cn(t),options:[t,e]}),xn=(t,e)=>({...ln(t),options:[t,e]}),yn=(t,e)=>({...an(t),options:[t,e]}),vn=(t,e)=>({...pn(t),options:[t,e]});var bn="Arrow",ee=C.forwardRef((t,e)=>{const{children:n,width:o=10,height:i=5,...r}=t;return V.jsx(vt.svg,{...r,ref:e,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:V.jsx("polygon",{points:"0,0 30,0 15,10"})})});ee.displayName=bn;var An=ee;function Rn(t){const[e,n]=C.useState(void 0);return wt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const r=i[0];let s,l;if("borderBoxSize"in r){const c=r.borderBoxSize,a=Array.isArray(c)?c[0]:c;s=a.inlineSize,l=a.blockSize}else s=t.offsetWidth,l=t.offsetHeight;n({width:s,height:l})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}var St="Popper",[ne,$n]=be(St),[Cn,oe]=ne(St),ie=t=>{const{__scopePopper:e,children:n}=t,[o,i]=C.useState(null);return V.jsx(Cn,{scope:e,anchor:o,onAnchorChange:i,children:n})};ie.displayName=St;var re="PopperAnchor",se=C.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...i}=t,r=oe(re,n),s=C.useRef(null),l=Yt(e,s);return C.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:V.jsx(vt.div,{...i,ref:l})});se.displayName=re;var Et="PopperContent",[Pn,On]=ne(Et),ce=C.forwardRef((t,e)=>{var Tt,Dt,Lt,Mt,kt,$t;const{__scopePopper:n,side:o="bottom",sideOffset:i=0,align:r="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:a=[],collisionPadding:d=0,sticky:u="partial",hideWhenDetached:m=!1,updatePositionStrategy:f="optimized",onPlaced:p,...h}=t,w=oe(Et,n),[g,x]=C.useState(null),b=Yt(e,et=>x(et)),[y,v]=C.useState(null),A=Rn(y),S=(A==null?void 0:A.width)??0,L=(A==null?void 0:A.height)??0,$=o+(r!=="center"?"-"+r:""),T=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},M=Array.isArray(a)?a:[a],k=M.length>0,N={padding:T,boundary:M.filter(En),altBoundary:k},{refs:P,floatingStyles:D,placement:F,isPositioned:R,middlewareData:O}=dn({strategy:"fixed",placement:$,whileElementsMounted:(...et)=>on(...et,{animationFrame:f==="always"}),elements:{reference:w.anchor},middleware:[mn({mainAxis:i+L,alignmentAxis:s}),c&&hn({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?gn():void 0,...N}),c&&wn({...N}),xn({...N,apply:({elements:et,rects:Nt,availableWidth:ge,availableHeight:we})=>{const{width:xe,height:ye}=Nt.reference,st=et.floating.style;st.setProperty("--radix-popper-available-width",`${ge}px`),st.setProperty("--radix-popper-available-height",`${we}px`),st.setProperty("--radix-popper-anchor-width",`${xe}px`),st.setProperty("--radix-popper-anchor-height",`${ye}px`)}}),y&&vn({element:y,padding:l}),Tn({arrowWidth:S,arrowHeight:L}),m&&yn({strategy:"referenceHidden",...N})]}),[E,ht]=fe(F),rt=Ae(p);wt(()=>{R&&(rt==null||rt())},[R,rt]);const ue=(Tt=O.arrow)==null?void 0:Tt.x,de=(Dt=O.arrow)==null?void 0:Dt.y,pe=((Lt=O.arrow)==null?void 0:Lt.centerOffset)!==0,[me,he]=C.useState();return wt(()=>{g&&he(window.getComputedStyle(g).zIndex)},[g]),V.jsx("div",{ref:P.setFloating,"data-radix-popper-content-wrapper":"",style:{...D,transform:R?D.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:me,"--radix-popper-transform-origin":[(Mt=O.transformOrigin)==null?void 0:Mt.x,(kt=O.transformOrigin)==null?void 0:kt.y].join(" "),...(($t=O.hide)==null?void 0:$t.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:V.jsx(Pn,{scope:n,placedSide:E,onArrowChange:v,arrowX:ue,arrowY:de,shouldHideArrow:pe,children:V.jsx(vt.div,{"data-side":E,"data-align":ht,...h,ref:b,style:{...h.style,animation:R?void 0:"none"}})})})});ce.displayName=Et;var le="PopperArrow",Sn={top:"bottom",right:"left",bottom:"top",left:"right"},ae=C.forwardRef(function(e,n){const{__scopePopper:o,...i}=e,r=On(le,o),s=Sn[r.placedSide];return V.jsx("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0},children:V.jsx(An,{...i,ref:n,style:{...i.style,display:"block"}})})});ae.displayName=le;function En(t){return t!==null}var Tn=t=>({name:"transformOrigin",options:t,fn(e){var w,g,x;const{placement:n,rects:o,middlewareData:i}=e,s=((w=i.arrow)==null?void 0:w.centerOffset)!==0,l=s?0:t.arrowWidth,c=s?0:t.arrowHeight,[a,d]=fe(n),u={start:"0%",center:"50%",end:"100%"}[d],m=(((g=i.arrow)==null?void 0:g.x)??0)+l/2,f=(((x=i.arrow)==null?void 0:x.y)??0)+c/2;let p="",h="";return a==="bottom"?(p=s?u:`${m}px`,h=`${-c}px`):a==="top"?(p=s?u:`${m}px`,h=`${o.floating.height+c}px`):a==="right"?(p=`${-c}px`,h=s?u:`${f}px`):a==="left"&&(p=`${o.floating.width+c}px`,h=s?u:`${f}px`),{data:{x:p,y:h}}}});function fe(t){const[e,n="center"]=t.split("-");return[e,n]}var Nn=ie,Fn=se,Hn=ce,Wn=ae;export{Fn as A,Hn as C,Nn as R,Wn as a,$n as c};
