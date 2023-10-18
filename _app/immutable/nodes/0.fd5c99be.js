import{t as Mt,s as Y,c as Dt,i as St,r as Ct,g as X,d as Q,u as Z,e as tt,f as et,h as Tt,b as st,j as lt,k as $t,n as j,l as nt,o as It}from"../chunks/scheduler.71af12de.js";import{S as P,i as G,g,h as v,j as I,f as h,k as m,a as k,x as N,p as ot,b as at,d as D,t as S,s as E,m as K,c as M,n as W,l as B,y,o as rt,z as Ot,A as O,B as Vt,C as Nt,e as F,D as xt,r as H,u as A,v as q,w as z,E as Bt}from"../chunks/index.e9246ef9.js";import{n as R,e as ct,u as Lt,o as jt,s as U,w as Ht,d as At,a as qt,b as zt,H as Ut}from"../chunks/notifier.86a1f490.js";const Kt=!1,Wt=!0,De=Object.freeze(Object.defineProperty({__proto__:null,prerender:Wt,ssr:Kt},Symbol.toStringTag,{value:"Module"}));async function Yt(o,t){const e=R.subscribe(l=>{l&&(o.dispatchEvent(new CustomEvent("notify",{detail:l})),R.set())});await Mt();try{const l=JSON.parse(sessionStorage.getItem(t));for(const r of l)R.set(r)}catch{}finally{try{sessionStorage.removeItem(t)}catch{}}return{destroy(){e()}}}function ut(o,t,e){const l=o.slice();return l[9]=t[e],l}function ft(o){let t,e="✕",l,r;function n(){return o[7](o[9])}return{c(){t=g("button"),t.textContent=e,this.h()},l(a){t=v(a,"BUTTON",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-ho7t84"&&(t.textContent=e),this.h()},h(){m(t,"class","close svelte-vlqkf6")},m(a,u){k(a,t,u),l||(r=N(t,"click",n),l=!0)},p(a,u){o=a},d(a){a&&h(t),l=!1,r()}}}function dt(o,t){let e,l,r,n=t[9].message+"",a,u,f,c,s,i,d,_,p=t[9].persist&&ft(t);function C(){return t[8](t[9])}return{key:o,first:null,c(){e=g("li"),p&&p.c(),l=E(),r=g("div"),a=K(n),u=E(),f=g("div"),c=E(),this.h()},l(b){e=v(b,"LI",{class:!0,style:!0});var w=I(e);p&&p.l(w),l=M(w),r=v(w,"DIV",{class:!0});var V=I(r);a=W(V,n),V.forEach(h),u=M(w),f=v(w,"DIV",{class:!0,style:!0});var L=I(f);L.forEach(h),c=M(w),w.forEach(h),this.h()},h(){m(r,"class","content svelte-vlqkf6"),m(f,"class","progress svelte-vlqkf6"),B(f,"animation-duration",t[9].timeout+"ms"),m(e,"class","toast svelte-vlqkf6"),B(e,"background",t[9].background),this.first=e},m(b,w){k(b,e,w),p&&p.m(e,null),y(e,l),y(e,r),y(r,a),y(e,u),y(e,f),y(e,c),i=!0,d||(_=N(f,"animationend",C),d=!0)},p(b,w){t=b,t[9].persist?p?p.p(t,w):(p=ft(t),p.c(),p.m(e,l)):p&&(p.d(1),p=null),(!i||w&2)&&n!==(n=t[9].message+"")&&rt(a,n),(!i||w&2)&&B(f,"animation-duration",t[9].timeout+"ms"),(!i||w&2)&&B(e,"background",t[9].background)},i(b){i||(s&&s.end(1),i=!0)},o(b){b&&(s=Ot(e,Gt,{})),i=!1},d(b){b&&h(e),p&&p.d(),b&&s&&s.end(),d=!1,_()}}}function Pt(o){let t,e=[],l=new Map,r,n,a,u,f=ct(o[1]);const c=s=>s[9].id;for(let s=0;s<f.length;s+=1){let i=ut(o,f,s),d=c(i);l.set(d,e[s]=dt(d,i))}return{c(){t=g("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=v(s,"UL",{class:!0});var i=I(t);for(let d=0;d<e.length;d+=1)e[d].l(i);i.forEach(h),this.h()},h(){m(t,"class","toasts svelte-vlqkf6")},m(s,i){k(s,t,i);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(t,null);n=!0,a||(u=[Dt(r=Yt.call(null,t,o[0])),N(t,"notify",o[2])],a=!0)},p(s,[i]){i&26&&(f=ct(s[1]),ot(),e=Lt(e,i,c,1,s,f,l,t,jt,dt,null,ut),at()),r&&St(r.update)&&i&1&&r.update.call(null,s[0])},i(s){if(!n){for(let i=0;i<f.length;i+=1)D(e[i]);n=!0}},o(s){for(let i=0;i<e.length;i+=1)S(e[i]);n=!1},d(s){s&&h(t);for(let i=0;i<e.length;i+=1)e[i].d();a=!1,Ct(u)}}}function Gt(o,{delay:t=0,duration:e=1e3}){return{delay:t,duration:e,css:l=>`opacity: ${(l-.7)*1}; transform-origin: top right;`}}function Jt(o,t,e){let{themes:l={danger:"#bb2124",success:"#22bb33",warning:"#f0ad4e",info:"#5bc0de",default:"#aaaaaa"}}=t,{timeout:r=3e3}=t,{sessionKey:n="byk-toasts"}=t,a=[];function u({detail:d}){const{message:_,type:p,options:C={}}=d,b=l[p]||l.default,w=C.persist,V=C.persist?0:C.timeout||r,L=Math.random().toString(36).replace(/[^a-z]+/g,"");try{sessionStorage.setItem(n,JSON.stringify([...JSON.parse(sessionStorage.getItem(n)||"[]"),{...d,id:L}]))}catch{}e(1,a=[{id:L,message:_,background:b,persist:w,timeout:V,width:"100%"},...a])}function f(d){!d.persist&&c(d.id)}function c(d){const _=p=>p.id!==d;e(1,a=a.filter(_));try{sessionStorage.setItem(n,JSON.stringify(JSON.parse(sessionStorage.getItem(n)||"[]").filter(_)))}catch{}}const s=d=>c(d.id),i=d=>f(d);return o.$$set=d=>{"themes"in d&&e(5,l=d.themes),"timeout"in d&&e(6,r=d.timeout),"sessionKey"in d&&e(0,n=d.sessionKey)},[n,a,u,f,c,l,r,s,i]}class Ft extends P{constructor(t){super(),G(this,t,Jt,Pt,Y,{themes:5,timeout:6,sessionKey:0})}}async function Rt(o){if(o==X(U)){_t();return}else X(U)&&_t();if(!window.ergoConnector[o]){Ht(`${o} not detected.`,4e3);return}const t=await Xt(o);return t&&(U.set(o),localStorage.setItem("connected_ergo_wallet",o)),t}async function Xt(o){if(!window.ergoConnector)return At("Please install Nautilus Wallet",4e3),!1;if(window.ergo)return!0;let t;try{t=await ergoConnector[o].connect()}catch{t=!1}return t}async function _t(){const o=X(U);if(U.set(""),localStorage.removeItem("connected_ergo_wallet"),window.ergoConnector)await ergoConnector[o].disconnect();else return!0}async function Qt(){const o=localStorage.getItem("connected_ergo_wallet");if(o)try{await ergoConnector[o].connect(),U.set(o)}catch{}}const Zt=o=>({}),ht=o=>({});function te(o){let t,e,l,r,n,a,u,f;const c=o[4].default,s=Q(c,o,o[3],null),i=o[4].btn,d=Q(i,o,o[3],ht);return{c(){t=g("dialog"),e=g("div"),s&&s.c(),l=E(),r=g("div"),n=g("button"),d&&d.c(),this.h()},l(_){t=v(_,"DIALOG",{class:!0});var p=I(t);e=v(p,"DIV",{class:!0});var C=I(e);s&&s.l(C),l=M(C),r=v(C,"DIV",{class:!0});var b=I(r);n=v(b,"BUTTON",{class:!0});var w=I(n);d&&d.l(w),w.forEach(h),b.forEach(h),C.forEach(h),p.forEach(h),this.h()},h(){m(n,"class","btn-secondary w-full"),n.autofocus=!0,m(r,"class","flex justify-end mt-8"),m(e,"class","backdrop-blur-md bg-opacity-10 shadow-sm svelte-1rfxz43"),m(t,"class","svelte-1rfxz43")},m(_,p){k(_,t,p),y(t,e),s&&s.m(e,null),y(e,l),y(e,r),y(r,n),d&&d.m(n,null),o[7](t),a=!0,n.focus(),u||(f=[N(n,"click",o[6]),N(e,"click",Vt(o[5])),N(t,"close",o[8]),N(t,"click",Nt(o[9]))],u=!0)},p(_,[p]){s&&s.p&&(!a||p&8)&&Z(s,c,_,_[3],a?et(c,_[3],p,null):tt(_[3]),null),d&&d.p&&(!a||p&8)&&Z(d,i,_,_[3],a?et(i,_[3],p,Zt):tt(_[3]),ht)},i(_){a||(D(s,_),D(d,_),a=!0)},o(_){S(s,_),S(d,_),a=!1},d(_){_&&h(t),s&&s.d(_),d&&d.d(_),o[7](null),u=!1,Ct(f)}}}function ee(o,t,e){let{$$slots:l={},$$scope:r}=t,{showModal:n}=t,{onBtnClick:a}=t,u;function f(_){Tt.call(this,o,_)}const c=()=>{u.close(),a&&a()};function s(_){st[_?"unshift":"push"](()=>{u=_,e(2,u)})}const i=()=>{e(0,n=!1)},d=()=>u.close();return o.$$set=_=>{"showModal"in _&&e(0,n=_.showModal),"onBtnClick"in _&&e(1,a=_.onBtnClick),"$$scope"in _&&e(3,r=_.$$scope)},o.$$.update=()=>{o.$$.dirty&5&&u&&n&&u.showModal()},[n,a,u,r,l,f,c,s,i,d]}class Et extends P{constructor(t){super(),G(this,t,ee,te,Y,{showModal:0,onBtnClick:1})}}function mt(o){let t,e,l;return{c(){t=g("div"),e=K(o[2]),l=K(" Σ")},l(r){t=v(r,"DIV",{});var n=I(t);e=W(n,o[2]),l=W(n," Σ"),n.forEach(h)},m(r,n){k(r,t,n),y(t,e),y(t,l)},p(r,n){n&4&&rt(e,r[2])},d(r){r&&h(t)}}}function le(o){let t,e="Connect Wallet",l,r;return{c(){t=g("button"),t.textContent=e,this.h()},l(n){t=v(n,"BUTTON",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-5lfpxu"&&(t.textContent=e),this.h()},h(){m(t,"class","btn")},m(n,a){k(n,t,a),l||(r=N(t,"click",o[4]),l=!0)},p:j,d(n){n&&h(t),l=!1,r()}}}function se(o){let t,e="Disconnect",l,r;return{c(){t=g("button"),t.textContent=e,this.h()},l(n){t=v(n,"BUTTON",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-1salfjw"&&(t.textContent=e),this.h()},h(){m(t,"class","btn-secondary")},m(n,a){k(n,t,a),l||(r=N(t,"click",o[3]),l=!0)},p:j,d(n){n&&h(t),l=!1,r()}}}function pt(o){let t,e,l;function r(a){o[5](a)}let n={$$slots:{btn:[re],default:[ae]},$$scope:{ctx:o}};return o[1]!==void 0&&(n.showModal=o[1]),t=new Et({props:n}),st.push(()=>xt(t,"showModal",r)),{c(){H(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,u){q(t,a,u),l=!0},p(a,u){const f={};u&257&&(f.$$scope={dirty:u,ctx:a}),!e&&u&2&&(e=!0,f.showModal=a[1],$t(()=>e=!1)),t.$set(f)},i(a){l||(D(t.$$.fragment,a),l=!0)},o(a){S(t.$$.fragment,a),l=!1},d(a){z(t,a)}}}function ne(o){let t,e,l,r,n,a,u,f,c=o[0]=="nautilus"&&bt();return{c(){t=g("button"),e=g("div"),c&&c.c(),l=K(`
							Nautilus`),r=E(),n=g("img"),this.h()},l(s){t=v(s,"BUTTON",{class:!0});var i=I(t);e=v(i,"DIV",{});var d=I(e);c&&c.l(d),l=W(d,`
							Nautilus`),d.forEach(h),r=M(i),n=v(i,"IMG",{style:!0,src:!0,alt:!0}),i.forEach(h),this.h()},h(){B(n,"height","2em"),B(n,"width","2em"),nt(n.src,a="/wallets/nautilus.svg")||m(n,"src",a),m(n,"alt",""),m(t,"class","btn w-full flex justify-center items-center"),Bt(t,"grayscale",!window.ergoConnector.nautilus)},m(s,i){k(s,t,i),y(t,e),c&&c.m(e,null),y(e,l),y(t,r),y(t,n),u||(f=N(t,"click",o[3]),u=!0)},p(s,i){s[0]=="nautilus"?c||(c=bt(),c.c(),c.m(e,l)):c&&(c.d(1),c=null)},d(s){s&&h(t),c&&c.d(),u=!1,f()}}}function oe(o){let t,e='<div>Install Nautilus</div> <img style="height:2em;width:2em;" src="/wallets/nautilus.svg" alt=""/>';return{c(){t=g("a"),t.innerHTML=e,this.h()},l(l){t=v(l,"A",{href:!0,target:!0,style:!0,class:!0,"data-svelte-h":!0}),O(t)!=="svelte-1i7jfil"&&(t.innerHTML=e),this.h()},h(){m(t,"href","https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai"),m(t,"target","blank_"),B(t,"height","50px"),m(t,"class","p-2 w-full flex justify-center items-center bg-white border-orange-900 text-black bg-green-100 rounded-md bg-opacity-30 hover:bg-opacity-80")},m(l,r){k(l,t,r)},p:j,d(l){l&&h(t)}}}function bt(o){let t;return{c(){t=K("Disconnect")},l(e){t=W(e,"Disconnect")},m(e,l){k(e,t,l)},d(e){e&&h(t)}}}function ae(o){let t,e,l="Ergo Wallets",r,n;function a(c,s){return!window.ergoConnector||!window.ergoConnector.nautilus?oe:ne}let f=a()(o);return{c(){t=g("div"),e=g("div"),e.textContent=l,r=E(),n=g("div"),f.c(),this.h()},l(c){t=v(c,"DIV",{class:!0});var s=I(t);e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-2t9ozx"&&(e.textContent=l),r=M(s),n=v(s,"DIV",{class:!0});var i=I(n);f.l(i),i.forEach(h),s.forEach(h),this.h()},h(){m(e,"class","pl-1 uppercase font-bold text-xl text-slate-400"),m(n,"class","w-full mt-6 mb-4"),m(t,"class","w-52 h-52")},m(c,s){k(c,t,s),y(t,e),y(t,r),y(t,n),f.m(n,null)},p(c,s){f.p(c,s)},d(c){c&&h(t),f.d()}}}function re(o){let t,e="close";return{c(){t=g("span"),t.textContent=e,this.h()},l(l){t=v(l,"SPAN",{slot:!0,"data-svelte-h":!0}),O(t)!=="svelte-1mqjhf7"&&(t.textContent=e),this.h()},h(){m(t,"slot","btn")},m(l,r){k(l,t,r)},p:j,d(l){l&&h(t)}}}function ie(o){let t,e,l,r,n=+o[2]>0&&mt(o);function a(s,i){return s[0]?se:le}let u=a(o),f=u(o),c=o[1]&&pt(o);return{c(){n&&n.c(),t=E(),f.c(),e=E(),c&&c.c(),l=F()},l(s){n&&n.l(s),t=M(s),f.l(s),e=M(s),c&&c.l(s),l=F()},m(s,i){n&&n.m(s,i),k(s,t,i),f.m(s,i),k(s,e,i),c&&c.m(s,i),k(s,l,i),r=!0},p(s,[i]){+s[2]>0?n?n.p(s,i):(n=mt(s),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null),u===(u=a(s))&&f?f.p(s,i):(f.d(1),f=u(s),f&&(f.c(),f.m(e.parentNode,e))),s[1]?c?(c.p(s,i),i&2&&D(c,1)):(c=pt(s),c.c(),D(c,1),c.m(l.parentNode,l)):c&&(ot(),S(c,1,1,()=>{c=null}),at())},i(s){r||(D(c),r=!0)},o(s){S(c),r=!1},d(s){s&&(h(t),h(e),h(l)),n&&n.d(s),f.d(s),c&&c.d(s)}}}function ce(o,t,e){let l;lt(o,U,i=>e(0,l=i));let r=!1;async function n(){e(1,r=!1),await Rt("nautilus"),l||e(2,u="0.00")}let a="0",u="0.00";async function f(i){var d;(d=window.ergoConnector[i])!=null&&d.isConnected&&(a=await ergo.get_balance(),e(2,u=(+a/10**9).toFixed(2)))}const c=()=>e(1,r=!0);function s(i){r=i,e(1,r)}return o.$$.update=()=>{o.$$.dirty&1&&f(l)},[l,r,u,n,c,s]}class ue extends P{constructor(t){super(),G(this,t,ce,ie,Y,{})}}function fe(o){let t,e,l,r,n="Bitbox";return{c(){t=g("img"),l=E(),r=g("div"),r.textContent=n,this.h()},l(a){t=v(a,"IMG",{src:!0,alt:!0,class:!0}),l=M(a),r=v(a,"DIV",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-1yqaequ"&&(r.textContent=n),this.h()},h(){nt(t.src,e="chest/bitmasks/icon.png")||m(t,"src",e),m(t,"alt",""),m(t,"class","w-12 ml-2"),m(r,"class","font-bold text-2xl ml-2")},m(a,u){k(a,t,u),k(a,l,u),k(a,r,u)},d(a){a&&(h(t),h(l),h(r))}}}function de(o){let t,e,l,r,n="HodlBox";return{c(){t=g("img"),l=E(),r=g("div"),r.textContent=n,this.h()},l(a){t=v(a,"IMG",{src:!0,alt:!0,class:!0}),l=M(a),r=v(a,"DIV",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-cjn1ca"&&(r.textContent=n),this.h()},h(){nt(t.src,e="ship.png")||m(t,"src",e),m(t,"alt",""),m(t,"class","w-16"),m(r,"class","font-bold text-2xl")},m(a,u){k(a,t,u),k(a,l,u),k(a,r,u)},d(a){a&&(h(t),h(l),h(r))}}}function _e(o){let t,e,l,r,n,a,u=o[1].map(gt).filter(vt).map(yt).reduce(wt,0)+"",f,c,s,i,d;function _(b,w){return b[0]==Ut?de:fe}let p=_(o),C=p(o);return i=new ue({}),{c(){t=g("div"),e=g("div"),l=g("a"),C.c(),r=E(),n=g("div"),a=K("THVL $"),f=K(u),c=E(),s=g("div"),H(i.$$.fragment),this.h()},l(b){t=v(b,"DIV",{class:!0,style:!0});var w=I(t);e=v(w,"DIV",{class:!0});var V=I(e);l=v(V,"A",{href:!0,class:!0});var L=I(l);C.l(L),L.forEach(h),r=M(V),n=v(V,"DIV",{class:!0});var $=I(n);a=W($,"THVL $"),f=W($,u),$.forEach(h),V.forEach(h),c=M(w),s=v(w,"DIV",{class:!0});var x=I(s);A(i.$$.fragment,x),x.forEach(h),w.forEach(h),this.h()},h(){m(l,"href","/"),m(l,"class","flex items-center gap-2"),m(n,"class","pt-1"),m(e,"class","flex items-center gap-4"),m(s,"class","flex items-center gap-4"),m(t,"class","z-10 fixed flex p-4 items-center w-full justify-between backdrop-blur bg-opacity-10 shadow-sm"),B(t,"height","77px"),B(t,"border-bottom","1px solid #80808045")},m(b,w){k(b,t,w),y(t,e),y(e,l),C.m(l,null),y(e,r),y(e,n),y(n,a),y(n,f),y(t,c),y(t,s),q(i,s,null),d=!0},p(b,[w]){p!==(p=_(b))&&(C.d(1),C=p(b),C&&(C.c(),C.m(l,null))),(!d||w&2)&&u!==(u=b[1].map(gt).filter(vt).map(yt).reduce(wt,0)+"")&&rt(f,u)},i(b){d||(D(i.$$.fragment,b),d=!0)},o(b){S(i.$$.fragment,b),d=!1},d(b){b&&h(t),C.d(),z(i)}}}const gt=o=>{var t;return(t=o.treasure)==null?void 0:t.name},vt=o=>o,yt=o=>o.replace(".00","").replace(",","").match(/(\d+)/)[0],wt=(o,t)=>+o+ +t;function he(o,t,e){let l,r;return lt(o,qt,n=>e(0,l=n)),lt(o,zt,n=>e(1,r=n)),[l,r]}class me extends P{constructor(t){super(),G(this,t,he,_e,Y,{})}}function pe(o){let t,e=`<div class="pl-1 uppercase font-bold text-slate-400 text-xl">Know Your Assumptions</div> <div class="w-full mt-6 mb-4">HodlBox is an open source UI for interacting with contracts on the Ergo Blockchain.<br/><br/> <span class="font-bold text-slate-400">Notice that:</span> <ul><li>- We don&#39;t log, collect, profile, share or sell your data;</li> <li>- HodlBox operates on a live blockchain, thus transactions are final, and irreversible once
				they have status «confirmed»;</li> <li>- Every transaction can be viewed via <a href="https://explorer.ergoplatform.com/">explorer</a>;</li> <li>- All code is <a href="https://github.com/c8e4/ergobay-org">open source</a> and available for
				public review.</li></ul> <br/>
		SavonarolaLabs doesn&#39;t guarantee the absence of bugs and errors.<br/>
		NO assistance can offered if a user is hacked or cheated out of passwords, currency or private keys.<br/>
		This is a BETA version, we recommend that you DO NOT use it to make large transactions!<br/><br/> <span class="font-bold text-slate-400">By accepting these KYA, you agree that:</span><br/>
		You will use the product at your own peril and risk;<br/>
		Only YOU are responsible for your assets;<br/>
		Only YOU are responsible for securely storing your recovery phrase.</div>`;return{c(){t=g("div"),t.innerHTML=e,this.h()},l(l){t=v(l,"DIV",{style:!0,"data-svelte-h":!0}),O(t)!=="svelte-uytrzh"&&(t.innerHTML=e),this.h()},h(){B(t,"max-width","900px")},m(l,r){k(l,t,r)},p:j,i:j,o:j,d(l){l&&h(t)}}}class be extends P{constructor(t){super(),G(this,t,null,pe,Y,{})}}function kt(o){let t,e,l;function r(a){o[2](a)}let n={onBtnClick:we,$$slots:{btn:[ve],default:[ge]},$$scope:{ctx:o}};return o[0]!==void 0&&(n.showModal=o[0]),t=new Et({props:n}),st.push(()=>xt(t,"showModal",r)),{c(){H(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,u){q(t,a,u),l=!0},p(a,u){const f={};u&8&&(f.$$scope={dirty:u,ctx:a}),!e&&u&1&&(e=!0,f.showModal=a[0],$t(()=>e=!1)),t.$set(f)},i(a){l||(D(t.$$.fragment,a),l=!0)},o(a){S(t.$$.fragment,a),l=!1},d(a){z(t,a)}}}function ge(o){let t,e;return t=new be({}),{c(){H(t.$$.fragment)},l(l){A(t.$$.fragment,l)},m(l,r){q(t,l,r),e=!0},i(l){e||(D(t.$$.fragment,l),e=!0)},o(l){S(t.$$.fragment,l),e=!1},d(l){z(t,l)}}}function ve(o){let t,e="i understand and accept the kya";return{c(){t=g("span"),t.textContent=e,this.h()},l(l){t=v(l,"SPAN",{slot:!0,"data-svelte-h":!0}),O(t)!=="svelte-3stus9"&&(t.textContent=e),this.h()},h(){m(t,"slot","btn")},m(l,r){k(l,t,r)},p:j,d(l){l&&h(t)}}}function ye(o){let t,e,l='<div class="text-slate-500 font-bold">Open Source</div> <div><a href="https://github.com/SavonarolaLabs/hodlbox-xyz">Web Interface</a></div> <div><a href="https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl.ts">Contract Erg</a></div> <div><a href="https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl_hodlerg3.ts">Contract HodlERG3</a></div>',r,n,a='<div class="text-slate-500 font-bold">Social</div> <div><a href="https://discord.com/channels/832508980357627944/1159876443925393448">Discord</a></div> <div><a href="https://twitter.com/c8e4d2">Twitter</a></div>',u,f,c,s="KYA",i,d,_,p="Know Your Assumptions",C,b,w,V,L,$=o[0]&&kt(o);return{c(){t=g("div"),e=g("div"),e.innerHTML=l,r=E(),n=g("div"),n.innerHTML=a,u=E(),f=g("div"),c=g("div"),c.textContent=s,i=E(),d=g("div"),_=g("button"),_.textContent=p,C=E(),$&&$.c(),b=F(),this.h()},l(x){t=v(x,"DIV",{class:!0,style:!0});var T=I(t);e=v(T,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-wabao3"&&(e.innerHTML=l),r=M(T),n=v(T,"DIV",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1iunin4"&&(n.innerHTML=a),u=M(T),f=v(T,"DIV",{class:!0});var J=I(f);c=v(J,"DIV",{class:!0,"data-svelte-h":!0}),O(c)!=="svelte-13hq7ny"&&(c.textContent=s),i=M(J),d=v(J,"DIV",{});var it=I(d);_=v(it,"BUTTON",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-16ddfvd"&&(_.textContent=p),it.forEach(h),J.forEach(h),T.forEach(h),C=M(x),$&&$.l(x),b=F(),this.h()},h(){m(e,"class","flex flex-col gap-4"),m(n,"class","flex flex-col gap-4"),m(c,"class","text-slate-500 font-bold"),m(_,"class","svelte-1f8h6sa"),m(f,"class","flex flex-col gap-4"),m(t,"class","w-full flex justify-around py-8 shadow-md"),B(t,"border-top","1px solid #80808045")},m(x,T){k(x,t,T),y(t,e),y(t,r),y(t,n),y(t,u),y(t,f),y(f,c),y(f,i),y(f,d),y(d,_),k(x,C,T),$&&$.m(x,T),k(x,b,T),w=!0,V||(L=N(_,"click",o[1]),V=!0)},p(x,[T]){x[0]?$?($.p(x,T),T&1&&D($,1)):($=kt(x),$.c(),D($,1),$.m(b.parentNode,b)):$&&(ot(),S($,1,1,()=>{$=null}),at())},i(x){w||(D($),w=!0)},o(x){S($),w=!1},d(x){x&&(h(t),h(C),h(b)),$&&$.d(x),V=!1,L()}}}function we(){localStorage.setItem("ergobay_kya_accepted","true")}function ke(o,t,e){let l=!1;It(()=>{localStorage.getItem("ergobay_kya_accepted")||e(0,l=!0)});const r=()=>e(0,l=!0);function n(a){l=a,e(0,l)}return[l,r,n]}class Ce extends P{constructor(t){super(),G(this,t,ke,ye,Y,{})}}function $e(o){let t,e,l,r,n,a,u;t=new Ft({}),l=new me({});const f=o[1].default,c=Q(f,o,o[0],null);return a=new Ce({}),{c(){H(t.$$.fragment),e=E(),H(l.$$.fragment),r=E(),c&&c.c(),n=E(),H(a.$$.fragment)},l(s){A(t.$$.fragment,s),e=M(s),A(l.$$.fragment,s),r=M(s),c&&c.l(s),n=M(s),A(a.$$.fragment,s)},m(s,i){q(t,s,i),k(s,e,i),q(l,s,i),k(s,r,i),c&&c.m(s,i),k(s,n,i),q(a,s,i),u=!0},p(s,[i]){c&&c.p&&(!u||i&1)&&Z(c,f,s,s[0],u?et(f,s[0],i,null):tt(s[0]),null)},i(s){u||(D(t.$$.fragment,s),D(l.$$.fragment,s),D(c,s),D(a.$$.fragment,s),u=!0)},o(s){S(t.$$.fragment,s),S(l.$$.fragment,s),S(c,s),S(a.$$.fragment,s),u=!1},d(s){s&&(h(e),h(r),h(n)),z(t,s),z(l,s),c&&c.d(s),z(a,s)}}}function Ie(o,t,e){let{$$slots:l={},$$scope:r}=t;return It(async()=>{await Qt()}),o.$$set=n=>{"$$scope"in n&&e(0,r=n.$$scope)},[r,l]}class Se extends P{constructor(t){super(),G(this,t,Ie,$e,Y,{})}}export{Se as component,De as universal};