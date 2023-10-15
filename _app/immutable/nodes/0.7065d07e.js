import{t as kt,s as q,c as Ct,i as $t,r as pt,g as Q,d as X,u as Z,e as tt,f as et,h as It,b as lt,j as Mt,k as bt,n as L,l as xt,o as gt}from"../chunks/scheduler.71af12de.js";import{S as K,i as Y,g as p,h as b,j as $,f as _,k as g,a as y,x as O,p as st,b as nt,d as M,t as T,s as x,m as P,c as E,n as J,l as B,y as v,o as vt,z as Et,A as N,B as St,C as Tt,e as G,D as wt,r as A,u as H,v as z,w as U,E as Dt}from"../chunks/index.e9246ef9.js";import{n as R,e as at,u as Nt,o as Ot,s as W,w as Bt,d as Lt}from"../chunks/notifier.6362f670.js";const Vt=!1,jt=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:jt,ssr:Vt},Symbol.toStringTag,{value:"Module"}));async function At(o,t){const e=R.subscribe(s=>{s&&(o.dispatchEvent(new CustomEvent("notify",{detail:s})),R.set())});await kt();try{const s=JSON.parse(sessionStorage.getItem(t));for(const i of s)R.set(i)}catch{}finally{try{sessionStorage.removeItem(t)}catch{}}return{destroy(){e()}}}function it(o,t,e){const s=o.slice();return s[9]=t[e],s}function rt(o){let t,e="✕",s,i;function n(){return o[7](o[9])}return{c(){t=p("button"),t.textContent=e,this.h()},l(a){t=b(a,"BUTTON",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-ho7t84"&&(t.textContent=e),this.h()},h(){g(t,"class","close svelte-vlqkf6")},m(a,f){y(a,t,f),s||(i=O(t,"click",n),s=!0)},p(a,f){o=a},d(a){a&&_(t),s=!1,i()}}}function ct(o,t){let e,s,i,n=t[9].message+"",a,f,u,r,l,c,d,h,m=t[9].persist&&rt(t);function S(){return t[8](t[9])}return{key:o,first:null,c(){e=p("li"),m&&m.c(),s=x(),i=p("div"),a=P(n),f=x(),u=p("div"),r=x(),this.h()},l(k){e=b(k,"LI",{class:!0,style:!0});var w=$(e);m&&m.l(w),s=E(w),i=b(w,"DIV",{class:!0});var V=$(i);a=J(V,n),V.forEach(_),f=E(w),u=b(w,"DIV",{class:!0,style:!0});var j=$(u);j.forEach(_),r=E(w),w.forEach(_),this.h()},h(){g(i,"class","content svelte-vlqkf6"),g(u,"class","progress svelte-vlqkf6"),B(u,"animation-duration",t[9].timeout+"ms"),g(e,"class","toast svelte-vlqkf6"),B(e,"background",t[9].background),this.first=e},m(k,w){y(k,e,w),m&&m.m(e,null),v(e,s),v(e,i),v(i,a),v(e,f),v(e,u),v(e,r),c=!0,d||(h=O(u,"animationend",S),d=!0)},p(k,w){t=k,t[9].persist?m?m.p(t,w):(m=rt(t),m.c(),m.m(e,s)):m&&(m.d(1),m=null),(!c||w&2)&&n!==(n=t[9].message+"")&&vt(a,n),(!c||w&2)&&B(u,"animation-duration",t[9].timeout+"ms"),(!c||w&2)&&B(e,"background",t[9].background)},i(k){c||(l&&l.end(1),c=!0)},o(k){k&&(l=Et(e,zt,{})),c=!1},d(k){k&&_(e),m&&m.d(),k&&l&&l.end(),d=!1,h()}}}function Ht(o){let t,e=[],s=new Map,i,n,a,f,u=at(o[1]);const r=l=>l[9].id;for(let l=0;l<u.length;l+=1){let c=it(o,u,l),d=r(c);s.set(d,e[l]=ct(d,c))}return{c(){t=p("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=b(l,"UL",{class:!0});var c=$(t);for(let d=0;d<e.length;d+=1)e[d].l(c);c.forEach(_),this.h()},h(){g(t,"class","toasts svelte-vlqkf6")},m(l,c){y(l,t,c);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(t,null);n=!0,a||(f=[Ct(i=At.call(null,t,o[0])),O(t,"notify",o[2])],a=!0)},p(l,[c]){c&26&&(u=at(l[1]),st(),e=Nt(e,c,r,1,l,u,s,t,Ot,ct,null,it),nt()),i&&$t(i.update)&&c&1&&i.update.call(null,l[0])},i(l){if(!n){for(let c=0;c<u.length;c+=1)M(e[c]);n=!0}},o(l){for(let c=0;c<e.length;c+=1)T(e[c]);n=!1},d(l){l&&_(t);for(let c=0;c<e.length;c+=1)e[c].d();a=!1,pt(f)}}}function zt(o,{delay:t=0,duration:e=1e3}){return{delay:t,duration:e,css:s=>`opacity: ${(s-.7)*1}; transform-origin: top right;`}}function Ut(o,t,e){let{themes:s={danger:"#bb2124",success:"#22bb33",warning:"#f0ad4e",info:"#5bc0de",default:"#aaaaaa"}}=t,{timeout:i=3e3}=t,{sessionKey:n="byk-toasts"}=t,a=[];function f({detail:d}){const{message:h,type:m,options:S={}}=d,k=s[m]||s.default,w=S.persist,V=S.persist?0:S.timeout||i,j=Math.random().toString(36).replace(/[^a-z]+/g,"");try{sessionStorage.setItem(n,JSON.stringify([...JSON.parse(sessionStorage.getItem(n)||"[]"),{...d,id:j}]))}catch{}e(1,a=[{id:j,message:h,background:k,persist:w,timeout:V,width:"100%"},...a])}function u(d){!d.persist&&r(d.id)}function r(d){const h=m=>m.id!==d;e(1,a=a.filter(h));try{sessionStorage.setItem(n,JSON.stringify(JSON.parse(sessionStorage.getItem(n)||"[]").filter(h)))}catch{}}const l=d=>r(d.id),c=d=>u(d);return o.$$set=d=>{"themes"in d&&e(5,s=d.themes),"timeout"in d&&e(6,i=d.timeout),"sessionKey"in d&&e(0,n=d.sessionKey)},[n,a,f,u,r,s,i,l,c]}class Wt extends K{constructor(t){super(),Y(this,t,Ut,Ht,q,{themes:5,timeout:6,sessionKey:0})}}async function qt(o){if(o==Q(W)){ut();return}else Q(W)&&ut();if(!window.ergoConnector[o]){Bt(`${o} not detected.`,4e3);return}const t=await Kt(o);return t&&(W.set(o),localStorage.setItem("connected_ergo_wallet",o)),t}async function Kt(o){if(!window.ergoConnector)return Lt("Please install Nautilus Wallet",4e3),!1;if(window.ergo)return!0;let t;try{t=await ergoConnector[o].connect()}catch{t=!1}return t}async function ut(){const o=Q(W);if(W.set(""),localStorage.removeItem("connected_ergo_wallet"),window.ergoConnector)await ergoConnector[o].disconnect();else return!0}async function Yt(){const o=localStorage.getItem("connected_ergo_wallet");if(o)try{await ergoConnector[o].connect(),W.set(o)}catch{}}const Pt=o=>({}),ft=o=>({});function Jt(o){let t,e,s,i,n,a,f,u;const r=o[4].default,l=X(r,o,o[3],null),c=o[4].btn,d=X(c,o,o[3],ft);return{c(){t=p("dialog"),e=p("div"),l&&l.c(),s=x(),i=p("div"),n=p("button"),d&&d.c(),this.h()},l(h){t=b(h,"DIALOG",{class:!0});var m=$(t);e=b(m,"DIV",{class:!0});var S=$(e);l&&l.l(S),s=E(S),i=b(S,"DIV",{class:!0});var k=$(i);n=b(k,"BUTTON",{class:!0});var w=$(n);d&&d.l(w),w.forEach(_),k.forEach(_),S.forEach(_),m.forEach(_),this.h()},h(){g(n,"class","btn-secondary w-full"),n.autofocus=!0,g(i,"class","flex justify-end mt-8"),g(e,"class","backdrop-blur-md bg-opacity-10 shadow-sm svelte-1rfxz43"),g(t,"class","svelte-1rfxz43")},m(h,m){y(h,t,m),v(t,e),l&&l.m(e,null),v(e,s),v(e,i),v(i,n),d&&d.m(n,null),o[7](t),a=!0,n.focus(),f||(u=[O(n,"click",o[6]),O(e,"click",St(o[5])),O(t,"close",o[8]),O(t,"click",Tt(o[9]))],f=!0)},p(h,[m]){l&&l.p&&(!a||m&8)&&Z(l,r,h,h[3],a?et(r,h[3],m,null):tt(h[3]),null),d&&d.p&&(!a||m&8)&&Z(d,c,h,h[3],a?et(c,h[3],m,Pt):tt(h[3]),ft)},i(h){a||(M(l,h),M(d,h),a=!0)},o(h){T(l,h),T(d,h),a=!1},d(h){h&&_(t),l&&l.d(h),d&&d.d(h),o[7](null),f=!1,pt(u)}}}function Ft(o,t,e){let{$$slots:s={},$$scope:i}=t,{showModal:n}=t,{onBtnClick:a}=t,f;function u(h){It.call(this,o,h)}const r=()=>{f.close(),a&&a()};function l(h){lt[h?"unshift":"push"](()=>{f=h,e(2,f)})}const c=()=>{e(0,n=!1)},d=()=>f.close();return o.$$set=h=>{"showModal"in h&&e(0,n=h.showModal),"onBtnClick"in h&&e(1,a=h.onBtnClick),"$$scope"in h&&e(3,i=h.$$scope)},o.$$.update=()=>{o.$$.dirty&5&&f&&n&&f.showModal()},[n,a,f,i,s,u,r,l,c,d]}class yt extends K{constructor(t){super(),Y(this,t,Ft,Jt,q,{showModal:0,onBtnClick:1})}}function dt(o){let t,e,s;return{c(){t=p("div"),e=P(o[2]),s=P(" Σ")},l(i){t=b(i,"DIV",{});var n=$(t);e=J(n,o[2]),s=J(n," Σ"),n.forEach(_)},m(i,n){y(i,t,n),v(t,e),v(t,s)},p(i,n){n&4&&vt(e,i[2])},d(i){i&&_(t)}}}function Gt(o){let t,e="Connect Wallet",s,i;return{c(){t=p("button"),t.textContent=e,this.h()},l(n){t=b(n,"BUTTON",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-5lfpxu"&&(t.textContent=e),this.h()},h(){g(t,"class","btn")},m(n,a){y(n,t,a),s||(i=O(t,"click",o[4]),s=!0)},p:L,d(n){n&&_(t),s=!1,i()}}}function Rt(o){let t,e="Disconnect",s,i;return{c(){t=p("button"),t.textContent=e,this.h()},l(n){t=b(n,"BUTTON",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-1salfjw"&&(t.textContent=e),this.h()},h(){g(t,"class","btn-secondary")},m(n,a){y(n,t,a),s||(i=O(t,"click",o[3]),s=!0)},p:L,d(n){n&&_(t),s=!1,i()}}}function ht(o){let t,e,s;function i(a){o[5](a)}let n={$$slots:{btn:[te],default:[Zt]},$$scope:{ctx:o}};return o[1]!==void 0&&(n.showModal=o[1]),t=new yt({props:n}),lt.push(()=>wt(t,"showModal",i)),{c(){A(t.$$.fragment)},l(a){H(t.$$.fragment,a)},m(a,f){z(t,a,f),s=!0},p(a,f){const u={};f&257&&(u.$$scope={dirty:f,ctx:a}),!e&&f&2&&(e=!0,u.showModal=a[1],bt(()=>e=!1)),t.$set(u)},i(a){s||(M(t.$$.fragment,a),s=!0)},o(a){T(t.$$.fragment,a),s=!1},d(a){U(t,a)}}}function Qt(o){let t,e,s,i,n,a,f,u,r=o[0]=="nautilus"&&_t();return{c(){t=p("button"),e=p("div"),r&&r.c(),s=P(`
							Nautilus`),i=x(),n=p("img"),this.h()},l(l){t=b(l,"BUTTON",{class:!0});var c=$(t);e=b(c,"DIV",{});var d=$(e);r&&r.l(d),s=J(d,`
							Nautilus`),d.forEach(_),i=E(c),n=b(c,"IMG",{style:!0,src:!0,alt:!0}),c.forEach(_),this.h()},h(){B(n,"height","2em"),B(n,"width","2em"),xt(n.src,a="/wallets/nautilus.svg")||g(n,"src",a),g(n,"alt",""),g(t,"class","btn w-full flex justify-center items-center"),Dt(t,"grayscale",!window.ergoConnector.nautilus)},m(l,c){y(l,t,c),v(t,e),r&&r.m(e,null),v(e,s),v(t,i),v(t,n),f||(u=O(t,"click",o[3]),f=!0)},p(l,c){l[0]=="nautilus"?r||(r=_t(),r.c(),r.m(e,s)):r&&(r.d(1),r=null)},d(l){l&&_(t),r&&r.d(),f=!1,u()}}}function Xt(o){let t,e='<div>Install Nautilus</div> <img style="height:2em;width:2em;" src="/wallets/nautilus.svg" alt=""/>';return{c(){t=p("a"),t.innerHTML=e,this.h()},l(s){t=b(s,"A",{href:!0,target:!0,style:!0,class:!0,"data-svelte-h":!0}),N(t)!=="svelte-1i7jfil"&&(t.innerHTML=e),this.h()},h(){g(t,"href","https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai"),g(t,"target","blank_"),B(t,"height","50px"),g(t,"class","p-2 w-full flex justify-center items-center bg-white border-orange-900 text-black bg-green-100 rounded-md bg-opacity-30 hover:bg-opacity-80")},m(s,i){y(s,t,i)},p:L,d(s){s&&_(t)}}}function _t(o){let t;return{c(){t=P("Disconnect")},l(e){t=J(e,"Disconnect")},m(e,s){y(e,t,s)},d(e){e&&_(t)}}}function Zt(o){let t,e,s="Ergo Wallets",i,n;function a(r,l){return!window.ergoConnector||!window.ergoConnector.nautilus?Xt:Qt}let u=a()(o);return{c(){t=p("div"),e=p("div"),e.textContent=s,i=x(),n=p("div"),u.c(),this.h()},l(r){t=b(r,"DIV",{class:!0});var l=$(t);e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-2t9ozx"&&(e.textContent=s),i=E(l),n=b(l,"DIV",{class:!0});var c=$(n);u.l(c),c.forEach(_),l.forEach(_),this.h()},h(){g(e,"class","pl-1 uppercase font-bold text-xl text-slate-400"),g(n,"class","w-full mt-6 mb-4"),g(t,"class","w-52 h-52")},m(r,l){y(r,t,l),v(t,e),v(t,i),v(t,n),u.m(n,null)},p(r,l){u.p(r,l)},d(r){r&&_(t),u.d()}}}function te(o){let t,e="close";return{c(){t=p("span"),t.textContent=e,this.h()},l(s){t=b(s,"SPAN",{slot:!0,"data-svelte-h":!0}),N(t)!=="svelte-1mqjhf7"&&(t.textContent=e),this.h()},h(){g(t,"slot","btn")},m(s,i){y(s,t,i)},p:L,d(s){s&&_(t)}}}function ee(o){let t,e,s,i,n=+o[2]>0&&dt(o);function a(l,c){return l[0]?Rt:Gt}let f=a(o),u=f(o),r=o[1]&&ht(o);return{c(){n&&n.c(),t=x(),u.c(),e=x(),r&&r.c(),s=G()},l(l){n&&n.l(l),t=E(l),u.l(l),e=E(l),r&&r.l(l),s=G()},m(l,c){n&&n.m(l,c),y(l,t,c),u.m(l,c),y(l,e,c),r&&r.m(l,c),y(l,s,c),i=!0},p(l,[c]){+l[2]>0?n?n.p(l,c):(n=dt(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null),f===(f=a(l))&&u?u.p(l,c):(u.d(1),u=f(l),u&&(u.c(),u.m(e.parentNode,e))),l[1]?r?(r.p(l,c),c&2&&M(r,1)):(r=ht(l),r.c(),M(r,1),r.m(s.parentNode,s)):r&&(st(),T(r,1,1,()=>{r=null}),nt())},i(l){i||(M(r),i=!0)},o(l){T(r),i=!1},d(l){l&&(_(t),_(e),_(s)),n&&n.d(l),u.d(l),r&&r.d(l)}}}function le(o,t,e){let s;Mt(o,W,c=>e(0,s=c));let i=!1;async function n(){e(1,i=!1),await qt("nautilus"),s||e(2,f="0.00")}let a="0",f="0.00";async function u(c){var d;(d=window.ergoConnector[c])!=null&&d.isConnected&&(a=await ergo.get_balance(),e(2,f=(+a/10**9).toFixed(2)))}const r=()=>e(1,i=!0);function l(c){i=c,e(1,i)}return o.$$.update=()=>{o.$$.dirty&1&&u(s)},[s,i,f,n,r,l]}class se extends K{constructor(t){super(),Y(this,t,le,ee,q,{})}}function ne(o){let t,e,s='<img src="ship.png" alt="" class="w-16"/> <div class="font-bold text-2xl">HodlBox</div>',i,n,a,f;return a=new se({}),{c(){t=p("div"),e=p("a"),e.innerHTML=s,i=x(),n=p("div"),A(a.$$.fragment),this.h()},l(u){t=b(u,"DIV",{class:!0,style:!0});var r=$(t);e=b(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),N(e)!=="svelte-pia6u3"&&(e.innerHTML=s),i=E(r),n=b(r,"DIV",{class:!0});var l=$(n);H(a.$$.fragment,l),l.forEach(_),r.forEach(_),this.h()},h(){g(e,"href","/"),g(e,"class","flex items-center gap-2"),g(n,"class","flex items-center gap-4"),g(t,"class","z-10 fixed flex p-4 items-center w-full justify-between backdrop-blur bg-opacity-10 shadow-sm"),B(t,"height","77px"),B(t,"border-bottom","1px solid #80808045")},m(u,r){y(u,t,r),v(t,e),v(t,i),v(t,n),z(a,n,null),f=!0},p:L,i(u){f||(M(a.$$.fragment,u),f=!0)},o(u){T(a.$$.fragment,u),f=!1},d(u){u&&_(t),U(a)}}}class oe extends K{constructor(t){super(),Y(this,t,null,ne,q,{})}}function ae(o){let t,e=`<div class="pl-1 uppercase font-bold text-slate-400 text-xl">Know Your Assumptions</div> <div class="w-full mt-6 mb-4">HodlBox is an open source UI for interacting with contracts on the Ergo Blockchain.<br/><br/> <span class="font-bold text-slate-400">Notice that:</span> <ul><li>- We don&#39;t log, collect, profile, share or sell your data;</li> <li>- SigmaFi operates on a live blockchain, thus transactions are final, and irreversible once
				they have status «confirmed»;</li> <li>- Every transaction can be viewed via <a href="https://explorer.ergoplatform.com/">explorer</a>;</li> <li>- All code is <a href="https://github.com/c8e4/ergobay-org">open source</a> and available for
				public review.</li></ul> <br/>
		SavonarolaLabs doesn&#39;t guarantee the absence of bugs and errors.<br/>
		NO assistance can offered if a user is hacked or cheated out of passwords, currency or private keys.<br/>
		This is a ALPHA version, we recommend that you DO NOT use it to make large transactions!<br/><br/> <span class="font-bold text-slate-400">By accepting these KYA, you agree that:</span><br/>
		You will use the product at your own peril and risk;<br/>
		Only YOU are responsible for your assets;<br/>
		Only YOU are responsible for securely storing your recovery phrase.</div>`;return{c(){t=p("div"),t.innerHTML=e,this.h()},l(s){t=b(s,"DIV",{style:!0,"data-svelte-h":!0}),N(t)!=="svelte-mnxc8n"&&(t.innerHTML=e),this.h()},h(){B(t,"max-width","900px")},m(s,i){y(s,t,i)},p:L,i:L,o:L,d(s){s&&_(t)}}}class ie extends K{constructor(t){super(),Y(this,t,null,ae,q,{})}}function mt(o){let t,e,s;function i(a){o[2](a)}let n={onBtnClick:fe,$$slots:{btn:[ce],default:[re]},$$scope:{ctx:o}};return o[0]!==void 0&&(n.showModal=o[0]),t=new yt({props:n}),lt.push(()=>wt(t,"showModal",i)),{c(){A(t.$$.fragment)},l(a){H(t.$$.fragment,a)},m(a,f){z(t,a,f),s=!0},p(a,f){const u={};f&8&&(u.$$scope={dirty:f,ctx:a}),!e&&f&1&&(e=!0,u.showModal=a[0],bt(()=>e=!1)),t.$set(u)},i(a){s||(M(t.$$.fragment,a),s=!0)},o(a){T(t.$$.fragment,a),s=!1},d(a){U(t,a)}}}function re(o){let t,e;return t=new ie({}),{c(){A(t.$$.fragment)},l(s){H(t.$$.fragment,s)},m(s,i){z(t,s,i),e=!0},i(s){e||(M(t.$$.fragment,s),e=!0)},o(s){T(t.$$.fragment,s),e=!1},d(s){U(t,s)}}}function ce(o){let t,e="i understand and accept the kya";return{c(){t=p("span"),t.textContent=e,this.h()},l(s){t=b(s,"SPAN",{slot:!0,"data-svelte-h":!0}),N(t)!=="svelte-3stus9"&&(t.textContent=e),this.h()},h(){g(t,"slot","btn")},m(s,i){y(s,t,i)},p:L,d(s){s&&_(t)}}}function ue(o){let t,e,s='<div class="text-slate-500 font-bold">Open Source</div> <div><a href="https://github.com/SavonarolaLabs/hodlbox-xyz">Web Interface</a></div> <div><a href="https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl.ts">Contract Erg</a></div> <div><a href="https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl_hodlerg3.ts">Contract HodlERG3</a></div>',i,n,a='<div class="text-slate-500 font-bold">Social</div> <div><a href="https://discord.com/channels/832508980357627944/1159876443925393448">Discord</a></div> <div><a href="https://twitter.com/c8e4d2">Twitter</a></div>',f,u,r,l="KYA",c,d,h,m="Know Your Assumptions",S,k,w,V,j,C=o[0]&&mt(o);return{c(){t=p("div"),e=p("div"),e.innerHTML=s,i=x(),n=p("div"),n.innerHTML=a,f=x(),u=p("div"),r=p("div"),r.textContent=l,c=x(),d=p("div"),h=p("button"),h.textContent=m,S=x(),C&&C.c(),k=G(),this.h()},l(I){t=b(I,"DIV",{class:!0,style:!0});var D=$(t);e=b(D,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-wabao3"&&(e.innerHTML=s),i=E(D),n=b(D,"DIV",{class:!0,"data-svelte-h":!0}),N(n)!=="svelte-1iunin4"&&(n.innerHTML=a),f=E(D),u=b(D,"DIV",{class:!0});var F=$(u);r=b(F,"DIV",{class:!0,"data-svelte-h":!0}),N(r)!=="svelte-13hq7ny"&&(r.textContent=l),c=E(F),d=b(F,"DIV",{});var ot=$(d);h=b(ot,"BUTTON",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-16ddfvd"&&(h.textContent=m),ot.forEach(_),F.forEach(_),D.forEach(_),S=E(I),C&&C.l(I),k=G(),this.h()},h(){g(e,"class","flex flex-col gap-4"),g(n,"class","flex flex-col gap-4"),g(r,"class","text-slate-500 font-bold"),g(h,"class","svelte-1f8h6sa"),g(u,"class","flex flex-col gap-4"),g(t,"class","w-full flex justify-around py-8 shadow-md"),B(t,"border-top","1px solid #80808045")},m(I,D){y(I,t,D),v(t,e),v(t,i),v(t,n),v(t,f),v(t,u),v(u,r),v(u,c),v(u,d),v(d,h),y(I,S,D),C&&C.m(I,D),y(I,k,D),w=!0,V||(j=O(h,"click",o[1]),V=!0)},p(I,[D]){I[0]?C?(C.p(I,D),D&1&&M(C,1)):(C=mt(I),C.c(),M(C,1),C.m(k.parentNode,k)):C&&(st(),T(C,1,1,()=>{C=null}),nt())},i(I){w||(M(C),w=!0)},o(I){T(C),w=!1},d(I){I&&(_(t),_(S),_(k)),C&&C.d(I),V=!1,j()}}}function fe(){localStorage.setItem("ergobay_kya_accepted","true")}function de(o,t,e){let s=!1;gt(()=>{localStorage.getItem("ergobay_kya_accepted")||e(0,s=!0)});const i=()=>e(0,s=!0);function n(a){s=a,e(0,s)}return[s,i,n]}class he extends K{constructor(t){super(),Y(this,t,de,ue,q,{})}}function _e(o){let t,e,s,i,n,a,f;t=new Wt({}),s=new oe({});const u=o[1].default,r=X(u,o,o[0],null);return a=new he({}),{c(){A(t.$$.fragment),e=x(),A(s.$$.fragment),i=x(),r&&r.c(),n=x(),A(a.$$.fragment)},l(l){H(t.$$.fragment,l),e=E(l),H(s.$$.fragment,l),i=E(l),r&&r.l(l),n=E(l),H(a.$$.fragment,l)},m(l,c){z(t,l,c),y(l,e,c),z(s,l,c),y(l,i,c),r&&r.m(l,c),y(l,n,c),z(a,l,c),f=!0},p(l,[c]){r&&r.p&&(!f||c&1)&&Z(r,u,l,l[0],f?et(u,l[0],c,null):tt(l[0]),null)},i(l){f||(M(t.$$.fragment,l),M(s.$$.fragment,l),M(r,l),M(a.$$.fragment,l),f=!0)},o(l){T(t.$$.fragment,l),T(s.$$.fragment,l),T(r,l),T(a.$$.fragment,l),f=!1},d(l){l&&(_(e),_(i),_(n)),U(t,l),U(s,l),r&&r.d(l),U(a,l)}}}function me(o,t,e){let{$$slots:s={},$$scope:i}=t;return gt(async()=>{await Yt()}),o.$$set=n=>{"$$scope"in n&&e(0,i=n.$$scope)},[i,s]}class we extends K{constructor(t){super(),Y(this,t,me,_e,q,{})}}export{we as component,ve as universal};
