const ct=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};ct();function w(){}const ke=t=>t;function ze(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Xe(t){return t()}function Re(){return Object.create(null)}function q(t){t.forEach(Xe)}function ve(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ie;function Ye(t,e){return ie||(ie=document.createElement("a")),ie.href=e,t===ie.href}function at(t){return Object.keys(t).length===0}function Ze(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Q(t){let e;return Ze(t,n=>e=n)(),e}function ae(t,e,n){t.$$.on_destroy.push(Ze(e,n))}function Ce(t,e,n,r){if(t){const s=et(t,e,n,r);return t[0](s)}}function et(t,e,n,r){return t[1]&&r?ze(n.ctx.slice(),t[1](r(e))):n.ctx}function Ee(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ne(t,e,n,r,s,l){if(s){const i=et(e,n,r,l);t.p(i,s)}}function Me(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ce(t,e,n){return t.set(n),e}const tt=typeof window!="undefined";let Se=tt?()=>window.performance.now():()=>Date.now(),je=tt?t=>requestAnimationFrame(t):w;const V=new Set;function nt(t){V.forEach(e=>{e.c(t)||(V.delete(e),e.f())}),V.size!==0&&je(nt)}function Le(t){let e;return V.size===0&&je(nt),{promise:new Promise(n=>{V.add(e={c:t,f:n})}),abort(){V.delete(e)}}}function y(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ft(t){const e=v("style");return dt(rt(t),e),e.sheet}function dt(t,e){y(t.head||t,e)}function O(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function pe(t){return document.createTextNode(t)}function E(){return pe(" ")}function J(){return pe("")}function L(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}function qe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e==null?"":e}function Be(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const he=new Map;let me=0;function mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function gt(t,e){const n={stylesheet:ft(e),rules:{}};return he.set(t,n),n}function ge(t,e,n,r,s,l,i,o=0){const c=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=c){const z=e+(n-e)*l(g);u+=g*100+`%{${i(z,1-z)}}
`}const p=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${mt(p)}_${o}`,a=rt(t),{stylesheet:_,rules:d}=he.get(a)||gt(a,t);d[f]||(d[f]=!0,_.insertRule(`@keyframes ${f} ${p}`,_.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${s}ms 1 both`,me+=1,f}function be(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),me-=s,me||bt())}function bt(){je(()=>{me||(he.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),he.clear())})}let te;function A(t){te=t}function yt(){if(!te)throw new Error("Function called outside component initialization");return te}const ee=[],xe=[],fe=[],Pe=[],kt=Promise.resolve();let Oe=!1;function vt(){Oe||(Oe=!0,kt.then(Ae))}function T(t){fe.push(t)}const we=new Set;let ue=0;function Ae(){const t=te;do{for(;ue<ee.length;){const e=ee[ue];ue++,A(e),$t(e.$$)}for(A(null),ee.length=0,ue=0;xe.length;)xe.pop()();for(let e=0;e<fe.length;e+=1){const n=fe[e];we.has(n)||(we.add(n),n())}fe.length=0}while(ee.length);for(;Pe.length;)Pe.pop()();Oe=!1,we.clear(),A(t)}function $t(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let Z;function Te(){return Z||(Z=Promise.resolve(),Z.then(()=>{Z=null})),Z}function D(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const de=new Set;let j;function P(){j={r:0,c:[],p:j}}function F(){j.r||q(j.c),j=j.p}function b(t,e){t&&t.i&&(de.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(de.has(t))return;de.add(t),j.c.push(()=>{de.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Ie={duration:0};function wt(t,e,n){let r=e(t,n),s=!1,l,i,o=0;function c(){l&&be(t,l)}function u(){const{delay:f=0,duration:a=300,easing:_=ke,tick:d=w,css:h}=r||Ie;h&&(l=ge(t,0,1,a,f,_,h,o++)),d(0,1);const g=Se()+f,z=g+a;i&&i.abort(),s=!0,T(()=>D(t,!0,"start")),i=Le(C=>{if(s){if(C>=z)return d(1,0),D(t,!0,"end"),c(),s=!1;if(C>=g){const N=_((C-g)/a);d(N,1-N)}}return s})}let p=!1;return{start(){p||(p=!0,be(t),ve(r)?(r=r(),Te().then(u)):u())},invalidate(){p=!1},end(){s&&(c(),s=!1)}}}function xt(t,e,n){let r=e(t,n),s=!0,l;const i=j;i.r+=1;function o(){const{delay:c=0,duration:u=300,easing:p=ke,tick:f=w,css:a}=r||Ie;a&&(l=ge(t,1,0,u,c,p,a));const _=Se()+c,d=_+u;T(()=>D(t,!1,"start")),Le(h=>{if(s){if(h>=d)return f(0,1),D(t,!1,"end"),--i.r||q(i.c),!1;if(h>=_){const g=p((h-_)/u);f(1-g,g)}}return s})}return ve(r)?Te().then(()=>{r=r(),o()}):o(),{end(c){c&&r.tick&&r.tick(1,0),s&&(l&&be(t,l),s=!1)}}}function ye(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,o=null,c=null;function u(){c&&be(t,c)}function p(a,_){const d=a.b-l;return _*=Math.abs(d),{a:l,b:a.b,d,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:d=300,easing:h=ke,tick:g=w,css:z}=s||Ie,C={start:Se()+_,b:a};a||(C.group=j,j.r+=1),i||o?o=C:(z&&(u(),c=ge(t,l,a,d,_,h,z)),a&&g(0,1),i=p(C,d),T(()=>D(t,a,"start")),Le(N=>{if(o&&N>o.start&&(i=p(o,d),o=null,D(t,i.b,"start"),z&&(u(),c=ge(t,l,i.b,i.duration,0,h,s.css))),i){if(N>=i.end)g(l=i.b,1-l),D(t,i.b,"end"),o||(i.b?u():--i.group.r||q(i.group.c)),i=null;else if(N>=i.start){const le=N-i.start;l=i.a+i.d*h(le/i.duration),g(l,1-l)}}return!!(i||o)}))}return{run(a){ve(s)?Te().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=o=null}}}function Fe(t,e){const n=e.token={};function r(s,l,i,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=o);const u=s&&(e.current=s)(c);let p=!1;e.block&&(e.blocks?e.blocks.forEach((f,a)=>{a!==l&&f&&(P(),k(f,1,1,()=>{e.blocks[a]===f&&(e.blocks[a]=null)}),F())}):e.block.d(1),u.c(),b(u,1),u.m(e.mount(),e.anchor),p=!0),e.block=u,e.blocks&&(e.blocks[l]=u),p&&Ae()}if(ut(t)){const s=yt();if(t.then(l=>{A(s),r(e.then,1,e.value,l),A(null)},l=>{if(A(s),r(e.catch,2,e.error,l),A(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ot(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function zt(t,e){k(t,1,1,()=>{e.delete(t.key)})}function Ct(t,e,n,r,s,l,i,o,c,u,p,f){let a=t.length,_=l.length,d=a;const h={};for(;d--;)h[t[d].key]=d;const g=[],z=new Map,C=new Map;for(d=_;d--;){const $=f(s,l,d),M=n($);let S=i.get(M);S?r&&S.p($,e):(S=u(M,$),S.c()),z.set(M,g[d]=S),M in h&&C.set(M,Math.abs(d-h[M]))}const N=new Set,le=new Set;function $e($){b($,1),$.m(o,p),i.set($.key,$),p=$.first,_--}for(;a&&_;){const $=g[_-1],M=t[a-1],S=$.key,oe=M.key;$===M?(p=$.first,a--,_--):z.has(oe)?!i.has(S)||N.has(S)?$e($):le.has(oe)?a--:C.get(S)>C.get(oe)?(le.add(S),$e($)):(N.add(oe),a--):(c(M,i),a--)}for(;a--;){const $=t[a];z.has($.key)||c($,i)}for(;_;)$e(g[_-1]);return g}function st(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],o=e[l];if(o){for(const c in i)c in o||(r[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function lt(t){return typeof t=="object"&&t!==null?t:{}}function B(t){t&&t.c()}function I(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||T(()=>{const c=l.map(Xe).filter(ve);i?i.push(...c):q(c),t.$$.on_mount=[]}),o.forEach(T)}function R(t,e){const n=t.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(ee.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,r,s,l,i,o=[-1]){const c=te;A(t);const u=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:s,bound:Re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Re(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const d=_.length?_[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),p&&Et(t,f)),a}):[],u.update(),p=!0,q(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=_t(e.target);u.fragment&&u.fragment.l(f),f.forEach(x)}else u.fragment&&u.fragment.c();e.intro&&b(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),Ae()}A(c)}class Y{$destroy(){R(this,1),this.$destroy=w}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const U=[];function se(t,e=w){let n;const r=new Set;function s(o){if(K(t,o)&&(t=o,n)){const c=!U.length;for(const u of r)u[1](),U.push(u,t);if(c){for(let u=0;u<U.length;u+=2)U[u][0](U[u+1]);U.length=0}}}function l(o){s(o(t))}function i(o,c=w){const u=[o,c];return r.add(u),r.size===1&&(n=e(s)||w),o(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:i}}const ne=se(JSON.parse(localStorage.getItem("store"))||[]);ne.subscribe(t=>{localStorage.setItem("store",JSON.stringify(t))});function Nt(t){const e=t-1;return e*e*e+1}function re(t,{delay:e=0,duration:n=400,easing:r=ke}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:l=>`opacity: ${l*s}`}}function Mt(t,{delay:e=0,duration:n=400,easing:r=Nt,x:s=0,y:l=0,opacity:i=0}={}){const o=getComputedStyle(t),c=+o.opacity,u=o.transform==="none"?"":o.transform,p=c*(1-i);return{delay:e,duration:n,easing:r,css:(f,a)=>`
			transform: ${u} translate(${(1-f)*s}px, ${(1-f)*l}px);
			opacity: ${c-p*a}`}}const H=se(!1),G=se(null),W=se([]),ot=se(null);function St(t=1){if(Q(G))return;const e=Q(W).length;Q(H)&&e>0&&G.set(!0),H.set(!1),ot.set("pop"),Lt(t)}function it(){return St(1)}function jt(t,e,n){Q(G)||(ot.set("push"),Q(H)&&Q(W).length&&G.set(!0),H.set(!1),n!=null&&n.replace?W.update(r=>[...r.slice(0,r.length-1),{component:t,props:e}]):W.update(r=>[...r,{component:t,props:e}]))}function Lt(t=1){W.update(e=>e.slice(0,Math.max(0,e.length-t)))}function De(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}const At=t=>({}),He=t=>({}),Tt=t=>({}),Ge=t=>({});function Je(t){let e;const n=t[4].backdrop,r=Ce(n,t,t[3],Ge);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),e=!0},p(s,l){r&&r.p&&(!e||l&8)&&Ne(r,n,s,s[3],e?Ee(n,s[3],l,Tt):Me(s[3]),Ge)},i(s){e||(b(r,s),e=!0)},o(s){k(r,s),e=!1},d(s){r&&r.d(s)}}}function It(t){let e,n,r;const s=[{isOpen:t[11]===t[0].length-1&&!t[1]},t[9].props];var l=t[9].component;function i(o){let c={};for(let u=0;u<s.length;u+=1)c=ze(c,s[u]);return{props:c}}return l&&(e=new l(i()),e.$on("introstart",t[7]),e.$on("outroend",t[8])),{c(){e&&B(e.$$.fragment),n=J()},m(o,c){e&&I(e,o,c),O(o,n,c),r=!0},p(o,c){const u=c&3?st(s,[{isOpen:o[11]===o[0].length-1&&!o[1]},c&1&&lt(o[9].props)]):{};if(l!==(l=o[9].component)){if(e){P();const p=e;k(p.$$.fragment,1,0,()=>{R(p,1)}),F()}l?(e=new l(i()),e.$on("introstart",o[7]),e.$on("outroend",o[8]),B(e.$$.fragment),b(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}else l&&e.$set(u)},i(o){r||(e&&b(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){o&&x(n),e&&R(e,o)}}}function Rt(t){let e,n,r,s={ctx:t,current:null,token:null,hasCatch:!1,pending:Pt,then:Bt,catch:qt,value:12,blocks:[,,,]};return Fe(n=Ue(t[9].component),s),{c(){e=J(),s.block.c()},m(l,i){O(l,e,i),s.block.m(l,s.anchor=i),s.mount=()=>e.parentNode,s.anchor=e,r=!0},p(l,i){t=l,s.ctx=t,i&1&&n!==(n=Ue(t[9].component))&&Fe(n,s)||Ot(s,t,i)},i(l){r||(b(s.block),r=!0)},o(l){for(let i=0;i<3;i+=1){const o=s.blocks[i];k(o)}r=!1},d(l){l&&x(e),s.block.d(l),s.token=null,s=null}}}function qt(t){return{c:w,m:w,p:w,i:w,o:w,d:w}}function Bt(t){let e,n,r;const s=[{isOpen:t[11]===t[0].length-1&&!t[1]},t[9].props];var l=t[12];function i(o){let c={};for(let u=0;u<s.length;u+=1)c=ze(c,s[u]);return{props:c}}return l&&(e=new l(i()),e.$on("introstart",t[5]),e.$on("outroend",t[6])),{c(){e&&B(e.$$.fragment),n=E()},m(o,c){e&&I(e,o,c),O(o,n,c),r=!0},p(o,c){const u=c&3?st(s,[{isOpen:o[11]===o[0].length-1&&!o[1]},c&1&&lt(o[9].props)]):{};if(l!==(l=o[12])){if(e){P();const p=e;k(p.$$.fragment,1,0,()=>{R(p,1)}),F()}l?(e=new l(i()),e.$on("introstart",o[5]),e.$on("outroend",o[6]),B(e.$$.fragment),b(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}else l&&e.$set(u)},i(o){r||(e&&b(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){e&&R(e,o),o&&x(n)}}}function Pt(t){let e,n;const r=t[4].loading,s=Ce(r,t,t[3],He);return{c(){s&&s.c(),e=E()},m(l,i){s&&s.m(l,i),O(l,e,i),n=!0},p(l,i){s&&s.p&&(!n||i&8)&&Ne(s,r,l,l[3],n?Ee(r,l[3],i,At):Me(l[3]),He)},i(l){n||(b(s,l),n=!0)},o(l){k(s,l),n=!1},d(l){s&&s.d(l),l&&x(e)}}}function Ke(t,e){let n,r,s,l,i,o;const c=[Rt,It],u=[];function p(f,a){return a&1&&(r=null),r==null&&(r=!!Ht(f[9].component)),r?0:1}return s=p(e,-1),l=u[s]=c[s](e),{key:t,first:null,c(){n=J(),l.c(),i=J(),this.first=n},m(f,a){O(f,n,a),u[s].m(f,a),O(f,i,a),o=!0},p(f,a){e=f;let _=s;s=p(e,a),s===_?u[s].p(e,a):(P(),k(u[_],1,1,()=>{u[_]=null}),F(),l=u[s],l?l.p(e,a):(l=u[s]=c[s](e),l.c()),b(l,1),l.m(i.parentNode,i))},i(f){o||(b(l),o=!0)},o(f){k(l),o=!1},d(f){f&&x(n),u[s].d(f),f&&x(i)}}}function Ft(t){let e=[],n=new Map,r,s,l=t[0];const i=o=>o[11];for(let o=0;o<l.length;o+=1){let c=De(t,l,o),u=i(c);n.set(u,e[o]=Ke(u,c))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();r=J()},m(o,c){for(let u=0;u<e.length;u+=1)e[u].m(o,c);O(o,r,c),s=!0},p(o,c){c&15&&(l=o[0],P(),e=Ct(e,c,i,1,o,l,n,r.parentNode,zt,Ke,r,De),F())},i(o){if(!s){for(let c=0;c<l.length;c+=1)b(e[c]);s=!0}},o(o){for(let c=0;c<e.length;c+=1)k(e[c]);s=!1},d(o){for(let c=0;c<e.length;c+=1)e[c].d(o);o&&x(r)}}}function Dt(t){let e,n,r=t[0].length>0&&Je(t);const s=t[4].default,l=Ce(s,t,t[3],null),i=l||Ft(t);return{c(){r&&r.c(),e=E(),i&&i.c()},m(o,c){r&&r.m(o,c),O(o,e,c),i&&i.m(o,c),n=!0},p(o,[c]){o[0].length>0?r?(r.p(o,c),c&1&&b(r,1)):(r=Je(o),r.c(),b(r,1),r.m(e.parentNode,e)):r&&(P(),k(r,1,1,()=>{r=null}),F()),l?l.p&&(!n||c&8)&&Ne(l,s,o,o[3],n?Ee(s,o[3],c,null):Me(o[3]),null):i&&i.p&&(!n||c&15)&&i.p(o,n?c:-1)},i(o){n||(b(r),b(i,o),n=!0)},o(o){k(r),k(i,o),n=!1},d(o){r&&r.d(o),o&&x(e),i&&i.d(o)}}}function Ht(t){return typeof t.prototype=="undefined"}async function Ue(t){return t().then(e=>e.default)}function Gt(t,e,n){let r,s,l;ae(t,W,a=>n(0,r=a)),ae(t,G,a=>n(1,s=a)),ae(t,H,a=>n(2,l=a));let{$$slots:i={},$$scope:o}=e;const c=()=>{ce(H,l=!0,l)},u=()=>{ce(G,s=!1,s)},p=()=>{ce(H,l=!0,l)},f=()=>{ce(G,s=!1,s)};return t.$$set=a=>{"$$scope"in a&&n(3,o=a.$$scope)},[r,s,l,o,i,c,u,p,f]}class Jt extends Y{constructor(e){super(),X(this,e,Gt,Dt,K,{})}}var Kt="/svelte-todo/assets/add-task.99c110bd.svg";function Qe(t){let e,n,r,s,l,i,o,c,u,p,f,a,_,d;return{c(){e=v("div"),n=v("div"),r=v("h2"),s=pe(t[1]),l=E(),i=v("p"),o=pe(t[2]),c=E(),u=v("div"),p=v("button"),p.textContent="OK",m(r,"class","svelte-1a5zch0"),m(i,"class","svelte-1a5zch0"),m(u,"class","actions svelte-1a5zch0"),m(n,"class","contents svelte-1a5zch0"),m(e,"role","dialog"),m(e,"class","modal svelte-1a5zch0")},m(h,g){O(h,e,g),y(e,n),y(n,r),y(r,s),y(n,l),y(n,i),y(i,o),y(n,c),y(n,u),y(u,p),a=!0,_||(d=L(p,"click",it),_=!0)},p(h,g){(!a||g&2)&&qe(s,h[1]),(!a||g&4)&&qe(o,h[2])},i(h){a||(T(()=>{f||(f=ye(e,re,{},!0)),f.run(1)}),a=!0)},o(h){f||(f=ye(e,re,{},!1)),f.run(0),a=!1},d(h){h&&x(e),h&&f&&f.end(),_=!1,d()}}}function Ut(t){let e,n,r=t[0]&&Qe(t);return{c(){r&&r.c(),e=J()},m(s,l){r&&r.m(s,l),O(s,e,l),n=!0},p(s,[l]){s[0]?r?(r.p(s,l),l&1&&b(r,1)):(r=Qe(s),r.c(),b(r,1),r.m(e.parentNode,e)):r&&(P(),k(r,1,1,()=>{r=null}),F())},i(s){n||(b(r),n=!0)},o(s){k(r),n=!1},d(s){r&&r.d(s),s&&x(e)}}}function Qt(t,e,n){let{isOpen:r}=e,{title:s}=e,{message:l}=e;return t.$$set=i=>{"isOpen"in i&&n(0,r=i.isOpen),"title"in i&&n(1,s=i.title),"message"in i&&n(2,l=i.message)},[r,s,l]}class Vt extends Y{constructor(e){super(),X(this,e,Qt,Ut,K,{isOpen:0,title:1,message:2})}}function Wt(t){let e,n,r,s,l;return{c(){e=v("div"),m(e,"slot","backdrop"),m(e,"class","backdrop svelte-1xc6ioh")},m(i,o){O(i,e,o),r=!0,s||(l=L(e,"click",it),s=!0)},p:w,i(i){r||(T(()=>{n||(n=ye(e,re,{},!0)),n.run(1)}),r=!0)},o(i){n||(n=ye(e,re,{},!1)),n.run(0),r=!1},d(i){i&&x(e),i&&n&&n.end(),s=!1,l()}}}function Xt(t){let e,n,r,s,l,i,o,c,u,p,f,a,_;return n=new Jt({props:{$$slots:{backdrop:[Wt]},$$scope:{ctx:t}}}),{c(){e=v("header"),B(n.$$.fragment),r=E(),s=v("h1"),s.textContent="The bad news is time flies",l=E(),i=v("section"),o=v("input"),c=E(),u=v("img"),m(s,"class","svelte-1xc6ioh"),m(o,"type","text"),m(o,"id","task-field"),m(o,"placeholder","Add a task..."),m(o,"autocomplete","off"),m(o,"class","svelte-1xc6ioh"),m(u,"class","add-icon svelte-1xc6ioh"),Ye(u.src,p=Kt)||m(u,"src",p),m(u,"alt","calender with a plus sign inside a circle."),m(i,"class","svelte-1xc6ioh"),m(e,"class","svelte-1xc6ioh")},m(d,h){O(d,e,h),I(n,e,null),y(e,r),y(e,s),y(e,l),y(e,i),y(i,o),_e(o,t[0]),t[4](o),y(i,c),y(i,u),f=!0,a||(_=[L(o,"input",t[3]),L(u,"click",t[2])],a=!0)},p(d,[h]){const g={};h&32&&(g.$$scope={dirty:h,ctx:d}),n.$set(g),h&1&&o.value!==d[0]&&_e(o,d[0])},i(d){f||(b(n.$$.fragment,d),f=!0)},o(d){k(n.$$.fragment,d),f=!1},d(d){d&&x(e),R(n),t[4](null),a=!1,q(_)}}}let Yt=/[ \b]+$/;function Zt(t,e,n){let r="",s=null;const l=()=>{if(r.match(Yt)||!r){jt(Vt,{title:"Invalid input.",message:"Please input properly."}),n(0,r="");return}ne.update(c=>{const u=[...c,{id:c.length,content:r,isChecked:!1}];return n(0,r=""),s.focus(),u})};function i(){r=this.value,n(0,r)}function o(c){xe[c?"unshift":"push"](()=>{s=c,n(1,s)})}return[r,s,l,i,o]}class en extends Y{constructor(e){super(),X(this,e,Zt,Xt,K,{})}}var tn="/svelte-todo/assets/garbage.822f295a.svg";function nn(t){let e,n,r,s,l,i,o,c,u,p,f,a,_;return{c(){e=v("div"),n=v("section"),r=v("input"),s=E(),l=v("input"),i=E(),o=v("img"),m(r,"type","checkbox"),m(r,"class","svelte-12cty4y"),m(l,"type","text"),m(l,"autocomplete","off"),l.disabled=t[1],m(l,"class","svelte-12cty4y"),Be(l,"checked",t[0].isChecked),m(o,"class","remove svelte-12cty4y"),Ye(o.src,c=tn)||m(o,"src",c),m(o,"alt","green trash bin."),m(n,"class","task svelte-12cty4y"),m(e,"class","task-container svelte-12cty4y")},m(d,h){O(d,e,h),y(e,n),y(n,r),r.checked=t[0].isChecked,y(n,s),y(n,l),_e(l,t[0].content),y(n,i),y(n,o),f=!0,a||(_=[L(r,"change",t[4]),L(r,"change",t[2]),L(l,"input",t[5]),L(l,"change",t[2]),L(o,"click",t[3])],a=!0)},p(d,[h]){h&1&&(r.checked=d[0].isChecked),(!f||h&2)&&(l.disabled=d[1]),h&1&&l.value!==d[0].content&&_e(l,d[0].content),h&1&&Be(l,"checked",d[0].isChecked)},i(d){f||(T(()=>{p&&p.end(1),u=wt(e,Mt,{y:100,duration:1500}),u.start()}),f=!0)},o(d){u&&u.invalidate(),p=xt(e,re,{}),f=!1},d(d){d&&x(e),d&&p&&p.end(),a=!1,q(_)}}}function rn(t,e,n){let{task:r}=e,s=!1;const l=()=>{ne.update(u=>u)},i=()=>{ne.update(u=>u.filter(p=>p.id!=r.id))};function o(){r.isChecked=this.checked,n(0,r)}function c(){r.content=this.value,n(0,r)}return t.$$set=u=>{"task"in u&&n(0,r=u.task)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=!!r.isChecked)},[r,s,l,i,o,c]}class sn extends Y{constructor(e){super(),X(this,e,rn,nn,K,{task:0})}}function Ve(t,e,n){const r=t.slice();return r[1]=e[n],r}function We(t){let e,n;return e=new sn({props:{task:t[1]}}),{c(){B(e.$$.fragment)},m(r,s){I(e,r,s),n=!0},p(r,s){const l={};s&1&&(l.task=r[1]),e.$set(l)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function ln(t){let e,n,r=t[0],s=[];for(let i=0;i<r.length;i+=1)s[i]=We(Ve(t,r,i));const l=i=>k(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=J()},m(i,o){for(let c=0;c<s.length;c+=1)s[c].m(i,o);O(i,e,o),n=!0},p(i,[o]){if(o&1){r=i[0];let c;for(c=0;c<r.length;c+=1){const u=Ve(i,r,c);s[c]?(s[c].p(u,o),b(s[c],1)):(s[c]=We(u),s[c].c(),b(s[c],1),s[c].m(e.parentNode,e))}for(P(),c=r.length;c<s.length;c+=1)l(c);F()}},i(i){if(!n){for(let o=0;o<r.length;o+=1)b(s[o]);n=!0}},o(i){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)k(s[o]);n=!1},d(i){pt(s,i),i&&x(e)}}}function on(t,e,n){let r;return ae(t,ne,s=>n(0,r=s)),[r]}class cn extends Y{constructor(e){super(),X(this,e,on,ln,K,{})}}function un(t){let e,n,r,s,l;return n=new en({}),s=new cn({}),{c(){e=v("main"),B(n.$$.fragment),r=E(),B(s.$$.fragment)},m(i,o){O(i,e,o),I(n,e,null),y(e,r),I(s,e,null),l=!0},p:w,i(i){l||(b(n.$$.fragment,i),b(s.$$.fragment,i),l=!0)},o(i){k(n.$$.fragment,i),k(s.$$.fragment,i),l=!1},d(i){i&&x(e),R(n),R(s)}}}class an extends Y{constructor(e){super(),X(this,e,null,un,K,{})}}new an({target:document.getElementById("app")});