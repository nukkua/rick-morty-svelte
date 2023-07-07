var ie=Object.defineProperty;var ue=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var M=(e,t,n)=>(ue(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();function S(){}function Y(e){return e()}function z(){return Object.create(null)}function N(e){e.forEach(Y)}function Z(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function D(e,t){return e===t?!0:(j||(j=document.createElement("a")),j.href=t,e===j.href)}function le(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function I(){return U(" ")}function G(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return Array.from(e.childNodes)}function de(e,t){t=""+t,e.data!==t&&(e.data=t)}let V;function L(e){V=e}const E=[],H=[];let O=[];const J=[],he=Promise.resolve();let F=!1;function pe(){F||(F=!0,he.then(te))}function K(e){O.push(e)}const R=new Set;let x=0;function te(){if(x!==0)return;const e=V;do{try{for(;x<E.length;){const t=E[x];x++,L(t),ge(t.$$)}}catch(t){throw E.length=0,x=0,t}for(L(null),E.length=0,x=0;H.length;)H.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];R.has(n)||(R.add(n),n())}O.length=0}while(E.length);for(;J.length;)J.pop()();F=!1,R.clear(),L(e)}function ge(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}function me(e){const t=[],n=[];O.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),O=t}const q=new Set;let v;function _e(){v={r:0,c:[],p:v}}function $e(){v.r||N(v.c),v=v.p}function A(e,t){e&&e.i&&(q.delete(e),e.i(t))}function T(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),v.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ye(e){e&&e.c()}function ne(e,t,n){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),K(()=>{const o=e.$$.on_mount.map(Y).filter(Z);e.$$.on_destroy?e.$$.on_destroy.push(...o):N(o),e.$$.on_mount=[]}),c.forEach(K)}function re(e,t){const n=e.$$;n.fragment!==null&&(me(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(E.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,r,c,o,f,h=[-1]){const p=V;L(e);const s=e.$$={fragment:null,ctx:[],props:o,update:S,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:z(),dirty:h,skip_bound:!1,root:t.target||p.$$.root};f&&f(s.root);let g=!1;if(s.ctx=n?n(e,t.props||{},(d,y,...w)=>{const P=w.length?w[0]:y;return s.ctx&&c(s.ctx[d],s.ctx[d]=P)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](P),g&&be(e,d)),y}):[],s.update(),g=!0,N(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const d=ae(t.target);s.fragment&&s.fragment.l(d),d.forEach(C)}else s.fragment&&s.fragment.c();t.intro&&A(e.$$.fragment),ne(e,t.target,t.anchor),te()}L(p)}class oe{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){re(this,1),this.$destroy=S}$on(t,n){if(!Z(n))return S;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);function we(e){let t,n,r,c,o,f,h=e[0].name+"",p;return{c(){t=$("div"),n=$("img"),o=I(),f=$("h1"),p=U(h),D(n.src,r=e[0].image)||_(n,"src",r),_(n,"alt",c=e[0].name),_(t,"class","character")},m(s,g){B(s,t,g),m(t,n),m(t,o),m(t,f),m(f,p)},p(s,[g]){g&1&&!D(n.src,r=s[0].image)&&_(n,"src",r),g&1&&c!==(c=s[0].name)&&_(n,"alt",c),g&1&&h!==(h=s[0].name+"")&&de(p,h)},i:S,o:S,d(s){s&&C(t)}}}function xe(e,t,n){let{character:r}=t;return e.$$set=c=>{"character"in c&&n(0,r=c.character)},[r]}class Ee extends oe{constructor(t){super(),ce(this,t,xe,we,ee,{character:0})}}function W(e,t,n){const r=e.slice();return r[5]=t[n],r}function X(e){let t,n;return t=new Ee({props:{character:e[5]}}),{c(){ye(t.$$.fragment)},m(r,c){ne(t,r,c),n=!0},p(r,c){const o={};c&1&&(o.character=r[5]),t.$set(o)},i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){T(t.$$.fragment,r),n=!1},d(r){re(t,r)}}}function Oe(e){let t,n,r,c,o,f,h,p,s,g,d,y,w,P,b=Q(e[0]),u=[];for(let i=0;i<b.length;i+=1)u[i]=X(W(e,b,i));const se=i=>T(u[i],1,1,()=>{u[i]=null});return{c(){t=$("h1"),t.textContent="Rick and Morty",n=I(),r=$("div"),c=$("div"),o=$("button"),f=U("Previous"),p=I(),s=$("button"),s.textContent="Next",g=I(),d=$("div");for(let i=0;i<u.length;i+=1)u[i].c();_(t,"class","title"),_(o,"class","btn"),o.disabled=h=e[1]===1,_(s,"class","btn"),_(c,"class","btns"),_(d,"class","grid"),_(r,"class","container")},m(i,a){B(i,t,a),B(i,n,a),B(i,r,a),m(r,c),m(c,o),m(o,f),m(c,p),m(c,s),m(r,g),m(r,d);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(d,null);y=!0,w||(P=[G(o,"click",e[3]),G(s,"click",e[2])],w=!0)},p(i,[a]){if((!y||a&2&&h!==(h=i[1]===1))&&(o.disabled=h),a&1){b=Q(i[0]);let l;for(l=0;l<b.length;l+=1){const k=W(i,b,l);u[l]?(u[l].p(k,a),A(u[l],1)):(u[l]=X(k),u[l].c(),A(u[l],1),u[l].m(d,null))}for(_e(),l=b.length;l<u.length;l+=1)se(l);$e()}},i(i){if(!y){for(let a=0;a<b.length;a+=1)A(u[a]);y=!0}},o(i){u=u.filter(Boolean);for(let a=0;a<u.length;a+=1)T(u[a]);y=!1},d(i){i&&(C(t),C(n),C(r)),fe(u,i),w=!1,N(P)}}}function Ne(e,t,n){let r=[],c=1;async function o(){const s=await(await fetch(`https://rickandmortyapi.com/api/character?page=${c}`)).json();console.log(s),n(0,r=s.results)}o();function f(){n(1,c++,c),o()}function h(){n(1,c--,c),o()}return[r,c,f,h]}class Pe extends oe{constructor(t){super(),ce(this,t,Ne,Oe,ee,{})}}new Pe({target:document.getElementById("app")});
