// ==UserScript==
// @name        fb-userscript
// @version     0.1.0
// @license     MIT
// @homepage    https://crashmax-dev.github.io/fb-userscript/
// @match       https://crashmax-dev.github.io/fb-userscript/*
// @match       http://localhost:3000/*
// @match       https://review.intern.facebook.com/*
// @grant       GM_addStyle
// @updateURL   https://crashmax-dev.github.io/fb-userscript/fb-userscript.meta.js
// @downloadURL https://crashmax-dev.github.io/fb-userscript/fb-userscript.user.js
// ==/UserScript==

var __defProp=Object.defineProperty,__defNormalProp=(c,m,f)=>m in c?__defProp(c,m,{enumerable:!0,configurable:!0,writable:!0,value:f}):c[m]=f,__publicField=(c,m,f)=>(__defNormalProp(c,typeof m!="symbol"?m+"":m,f),f),__accessCheck=(c,m,f)=>{if(!m.has(c))throw TypeError("Cannot "+f)},__privateGet=(c,m,f)=>(__accessCheck(c,m,"read from private field"),f?f.call(c):m.get(c)),__privateAdd=(c,m,f)=>{if(m.has(c))throw TypeError("Cannot add the same private member more than once");m instanceof WeakSet?m.add(c):m.set(c,f)},__privateSet=(c,m,f,M)=>(__accessCheck(c,m,"write to private field"),M?M.call(c,f):m.set(c,f),f);(function(){var c;const m=a=>(e,t)=>(a.set(e,t),t),f=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,M=536870912,C=M*2,A=(a,e)=>t=>{const n=e.get(t);let s=n===void 0?t.size:n<C?n+1:0;if(!t.has(s))return a(t,s);if(t.size<M){for(;t.has(s);)s=Math.floor(Math.random()*C);return a(t,s)}if(t.size>f)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(s);)s=Math.floor(Math.random()*f);return a(t,s)},N=new WeakMap,F=m(N),L=A(F,N),S=a=>a.method!==void 0&&a.method==="call",R=a=>a.error===null&&typeof a.id=="number",D=((a,e)=>{let t=null;return()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),s=URL.createObjectURL(n);return t=a(s),setTimeout(()=>URL.revokeObjectURL(s)),t}})(a=>{const e=new Map([[0,()=>{}]]),t=new Map([[0,()=>{}]]),n=new Map,s=new Worker(a);return s.addEventListener("message",({data:l})=>{if(S(l)){const{params:{timerId:i,timerType:u}}=l;if(u==="interval"){const r=e.get(i);if(typeof r=="number"){const o=n.get(r);if(o===void 0||o.timerId!==i||o.timerType!==u)throw new Error("The timer is in an undefined state.")}else if(typeof r<"u")r();else throw new Error("The timer is in an undefined state.")}else if(u==="timeout"){const r=t.get(i);if(typeof r=="number"){const o=n.get(r);if(o===void 0||o.timerId!==i||o.timerType!==u)throw new Error("The timer is in an undefined state.")}else if(typeof r<"u")r(),t.delete(i);else throw new Error("The timer is in an undefined state.")}}else if(R(l)){const{id:i}=l,u=n.get(i);if(u===void 0)throw new Error("The timer is in an undefined state.");const{timerId:r,timerType:o}=u;n.delete(i),o==="interval"?e.delete(r):t.delete(r)}else{const{error:{message:i}}=l;throw new Error(i)}}),{clearInterval:l=>{const i=L(n);n.set(i,{timerId:l,timerType:"interval"}),e.set(l,i),s.postMessage({id:i,method:"clear",params:{timerId:l,timerType:"interval"}})},clearTimeout:l=>{const i=L(n);n.set(i,{timerId:l,timerType:"timeout"}),t.set(l,i),s.postMessage({id:i,method:"clear",params:{timerId:l,timerType:"timeout"}})},setInterval:(l,i)=>{const u=L(e);return e.set(u,()=>{l(),typeof e.get(u)=="function"&&s.postMessage({id:null,method:"set",params:{delay:i,now:performance.now(),timerId:u,timerType:"interval"}})}),s.postMessage({id:null,method:"set",params:{delay:i,now:performance.now(),timerId:u,timerType:"interval"}}),u},setTimeout:(l,i)=>{const u=L(t);return t.set(u,l),s.postMessage({id:null,method:"set",params:{delay:i,now:performance.now(),timerId:u,timerType:"timeout"}}),u}}},`(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error('The given type "'.concat(i,'" is not supported'));(e=>{const r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error('The given method "'.concat(s.method,'" is not supported'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error('The given type "'.concat(d,'" is not supported'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`),V=a=>D().clearInterval(a),P=(a,e)=>D().setInterval(a,e);class U{constructor(){__privateAdd(this,c,{})}on(e,t){const n=__privateGet(this,c)[e];return n?n.push(t):__privateGet(this,c)[e]=[t],this}addListener(e,t){return this.on(e,t)}once(e,t){const n=(...s)=>{this.off(e,n),t(...s)};return this.on(e,n),this}emit(e,...t){const n=__privateGet(this,c)[e]||[];for(let s=0;s<n.length;s++)n[s](...t);return!!n.length}off(e,t){return __privateGet(this,c)[e]&&(__privateGet(this,c)[e]=__privateGet(this,c)[e].filter(n=>n!==t)),this}removeListener(e,t){return this.off(e,t)}removeAllListeners(e){return e?delete __privateGet(this,c)[e]:__privateSet(this,c,{}),this}eventNames(){return Reflect.ownKeys(__privateGet(this,c))}listeners(e){return __privateGet(this,c)[e]}listenerCount(e){var t;return((t=__privateGet(this,c)[e])==null?void 0:t.length)??0}}c=new WeakMap;const E=new U;class W{constructor(){__publicField(this,"interval"),__publicField(this,"time")}start(e){this.stop(),this.time=e,this.interval=P(()=>this.tick(),1e3)}stop(){this.interval&&(V(this.interval),this.interval=null)}tick(){this.time.seconds--,this.time.minutes>0&&this.time.seconds<0&&(this.time.seconds=59,this.time.minutes--),E.emit("timer_tick",this.time),this.time.minutes===0&&this.time.seconds===0&&E.emit("timer_stop")}}function I(a,e,...t){const n=document.createElement(a);return typeof e=="string"?n.append(B(e)):Array.isArray(e)?n.append(...e):(Object.assign(n,e),Object.assign(n.style,e?.style)),t.length&&n.append(...t),n}function B(a){return document.createTextNode(a)}var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var O={exports:{}};(function(a,e){(function(t,n){a.exports=n()})(K,function(){return function(t){function n(h){if(s[h])return s[h].exports;var g=s[h]={exports:{},id:h,loaded:!1};return t[h].call(g.exports,g,g.exports,n),g.loaded=!0,g.exports}var s={};return n.m=t,n.c=s,n.p="",n(0)}([function(t,n,s){function h(d){return d&&d.__esModule?d:{default:d}}var g=s(1),T=h(g);t.exports=T.default},function(t,n,s){function h(r,o){if(!(r instanceof o))throw new TypeError("Cannot call a class as a function")}function g(){var r=this,o=this.el,p=this.opts||i,y={};if(o.style.position="absolute",this.handle=p.handle||o,p.constrain){for(var w=p.relativeTo||o.parentNode,v=o,b=0,_=0;v!==w;)v=v.parentNode,(0,T.isRelative)(v)&&(b-=v.offsetLeft,_-=v.offsetTop),v===w&&(b+=v.offsetLeft,_+=v.offsetTop);var ee=b+w.offsetWidth-o.offsetWidth,te=_+w.offsetHeight-o.offsetHeight;y.xClamp=(0,T.generateClamp)(b,ee),y.yClamp=(0,T.generateClamp)(_,te)}this.opts=p,this.data=y,this.events={mousedown:d.mousedown.bind(this),mouseup:d.mouseup.bind(this),touchstart:d.touchstart.bind(this),touchstop:d.touchstop.bind(this),scrollFix:function(ne){r.isDragging&&ne.preventDefault()}},this.handleMove=l(this.opts.customMove),this.handle.addEventListener("mousedown",this.events.mousedown,!1),this.handle.addEventListener("touchstart",this.events.touchstart,!1),document.addEventListener("touchmove",this.events.scrollFix,{passive:!1})}Object.defineProperty(n,"__esModule",{value:!0});var T=s(2),d=s(3),l=(0,T.generateMoveFn)(),i={constrain:!1,relativeTo:null,handle:null,ignoreFn:null,highlightInputs:!1,onMouseDown:null,onMouseMove:null,onMouseUp:null,onTouchStart:null,onTouchMove:null,onTouchStop:null,customMove:null},u=function(){function r(o,p){if(h(this,r),!o)throw Error("Must include moveable element");this.el=o,this.opts=p,g.call(this)}return r.prototype.reinit=function(){this.destroy(),g.call(this)},r.prototype.destroy=function(){var o=this.events;this.handle.removeEventListener("mousedown",o.mousedown,!1),document.removeEventListener("mousemove",o.mousemove,!1),document.removeEventListener("mouseup",o.mouseup,!1),this.handle.removeEventListener("touchstart",o.touchstart,!1),document.removeEventListener("touchmove",o.touchmove,!1),document.removeEventListener("touchstop",o.touchstop,!1),document.removeEventListener("touchmove",this.events.scrollFix,{passive:!1})},r}();n.default=function(r,o){return new u(r,o)}},function(t,n){function s(d,l){return function(i){return Math.min(Math.max(i,d),l)}}function h(d){return window.getComputedStyle(d).position==="relative"}function g(){return window.requestAnimationFrame?function(d){var l=d||T;return function(i,u,r){window.requestAnimationFrame(function(){l(i,u,r)})}}:function(d){return function(l,i,u){var r=d||T;r(l,i,u)}}}function T(d,l,i){d.style.left=l+"px",d.style.top=i+"px"}Object.defineProperty(n,"__esModule",{value:!0}),n.generateClamp=s,n.isRelative=h,n.generateMoveFn=g},function(t,n){function s(i){var u=this.opts;if(u.highlightInputs){var r=i.target.tagName.toLowerCase();if(r==="input"||r==="textarea")return}if(!u.ignoreFn||!u.ignoreFn(i)){if(i.button===0){var o=this.el,p=this.events;typeof u.onMouseDown=="function"&&u.onMouseDown(o,i);var y=i.clientX-o.offsetLeft,w=i.clientY-o.offsetTop;p.mousemove=h.bind(this,y,w),document.addEventListener("mousemove",p.mousemove,!1),document.addEventListener("mouseup",p.mouseup,!1)}i.preventDefault()}}function h(i,u,r){var o=this.el,p=this.opts,y=this.data;typeof p.onMouseMove=="function"&&p.onMouseMove(o,r);var w=r.clientX-i,v=r.clientY-u;return p.constrain&&(w=y.xClamp(w),v=y.yClamp(v)),this.handleMove(o,w,v),r.preventDefault(),!1}function g(i){var u=this.el,r=this.opts,o=this.events;typeof r.onMouseUp=="function"&&r.onMouseUp(u,i),document.removeEventListener("mouseup",o.mouseup,!1),document.removeEventListener("mousemove",o.mousemove,!1)}function T(i){var u=this.opts;if(u.highlightInputs){var r=i.target.tagName.toLowerCase();if(r==="input"||r==="textarea")return}if(!u.ignoreFn||!u.ignoreFn(i)){var o=this.el,p=this.events;typeof u.onTouchStart=="function"&&u.onTouchStart(o,i);var y=i.targetTouches[0],w=y.clientX-o.offsetLeft,v=y.clientY-o.offsetTop;p.touchmove=d.bind(this,w,v),this.isDragging=!0,document.addEventListener("touchmove",p.touchmove,!1),document.addEventListener("touchend",p.touchstop,!1),document.addEventListener("touchcancel",p.touchstop,!1)}}function d(i,u,r){var o=this.el,p=this.opts,y=this.data;typeof p.onTouchMove=="function"&&p.onTouchMove(o,r);var w=r.targetTouches[0],v=w.clientX-i,b=w.clientY-u;return p.constrain&&(v=y.xClamp(v),b=y.yClamp(b)),this.handleMove(o,v,b),r.preventDefault(),!1}function l(i){this.isDragging=!1;var u=this.el,r=this.opts,o=this.events;typeof r.onTouchStop=="function"&&r.onTouchStop(u,i),document.removeEventListener("touchmove",o.touchmove,!1),document.removeEventListener("touchend",o.touchstop,!1),document.removeEventListener("touchcancel",o.touchstop,!1)}Object.defineProperty(n,"__esModule",{value:!0}),n.mousedown=s,n.mousemove=h,n.mouseup=g,n.touchstart=T,n.touchmove=d,n.touchstop=l}])})})(O);const G=z(O.exports);class X{constructor(...e){__publicField(this,"target"),__publicField(this,"displace"),__publicField(this,"options");var t;this.target=((t=this.options)==null?void 0:t.handle)??e[0],this.options=e[1],this.displace=G(...e),this.destroy(),this.reinit=this.reinit.bind(this);const n=()=>{this.displace.reinit(),this.target.removeEventListener("mouseenter",n)};this.target.addEventListener("mouseenter",n),window.addEventListener("resize",this.reinit)}reinit(){this.displace.reinit()}destroy(){this.displace.destroy(),window.removeEventListener("resize",this.reinit)}changePosition(e,t){this.target.style.left=`${e}px`,this.target.style.top=`${t}px`}}class q{constructor(e,t,n,s){__publicField(this,"encode"),__publicField(this,"decode"),this.key=e,this.initialValue=t,this.storage=n,this.encode=h=>s?.encode?s.encode(h):JSON.stringify(h),this.decode=h=>s?.decode?s.decode(h):JSON.parse(h),this.exists()||this.write(this.initialValue)}get values(){try{const e=this.storage.getItem(this.key);return e?this.decode(e):this.initialValue}catch{return this.initialValue}}write(e){e instanceof Function&&(e=e(this.values));try{this.storage.setItem(this.key,this.encode(e))}catch(t){return console.error(`Failed to save (${this.key}):`,t.message),this.initialValue}return e}exists(){return this.storage.getItem(this.key)!==null}reset(){this.write(this.initialValue)}}class Y extends q{constructor(e,t,n){super(e,t,localStorage,n)}}class ${constructor(){__publicField(this,"initialData",{time:{minutes:1,seconds:35},position:{x:0,y:0}}),__publicField(this,"storage",new Y("fb-userscript",this.initialData))}get data(){return this.storage.values}getByKey(e){return this.data[e]}write(e){this.storage.write(e)}reset(){this.storage.reset()}}const x=new $;class H{constructor(){__publicField(this,"el"),__publicField(this,"interact")}mount(e){this.el=I("div",{className:"overlay"},e),this.interact=new X(e,{constrain:!0,relativeTo:this.el,handle:e,onMouseDown:()=>{this.el.classList.add("grabbing")},onMouseUp:()=>{this.el.classList.remove("grabbing")},onMouseMove:t=>{const{x:n,y:s}=t.getBoundingClientRect();x.write(h=>({...h,position:{x:n,y:s}}))}}),this.updatePosition(),document.body.appendChild(this.el)}updatePosition(){const{x:e,y:t}=x.getByKey("position");this.interact.changePosition(e,t)}}function k(a){return a=Math.abs(a),a>9?`${a}`:`0${a}`}const j=["minutes","seconds"];class J{constructor(){__publicField(this,"el"),__publicField(this,"seconds"),__publicField(this,"minutes"),__publicField(this,"inputClock",0),__publicField(this,"currentInput")}get inputData(){return{type:this.currentInput.dataset.type,time:this.currentInput.textContent}}mount(){for(const e of j){const t=I("div",{contentEditable:"true"});t.dataset.type=e,t.addEventListener("keydown",n=>this.onKeyDown(n)),t.addEventListener("click",n=>{n.preventDefault(),this.focusInput(t)}),this[e]=t}this.updateInputValues(),this.el=I("div",{className:"timer"},this.minutes,":",this.seconds)}focusInput(e){this.currentInput=e,this.currentInput.focus(),this.updateInputClock(0)}onKeyDown(e){switch(e.preventDefault(),e.key){case"Enter":case"Escape":E.emit("timer_start",x.getByKey("time")),this.currentInput.blur();break;case"ArrowLeft":case"ArrowRight":this.navigateInput();break;case"ArrowUp":case"ArrowDown":this.incrementInputValue(e.key==="ArrowUp"?1:-1);break;default:if(Number.isNaN(parseInt(e.key)))return;this.changeInputValue(e.key)}}navigateInput(){const e=this.currentInput.nextElementSibling??this.currentInput.previousElementSibling;this.focusInput(e)}changeInputValue(e){const{type:t,time:n}=this.inputData,s=this.inputClock?n.slice(1)+e:n.slice(0,1)+e,h=this.parseTime(t,s);this.writeInputValues(t,h),this.updateInputClock()}incrementInputValue(e){const{type:t,time:n}=this.inputData,s=this.parseTime(t,n,e);this.writeInputValues(t,s)}writeInputValues(e,t){this[e].textContent=k(t),x.write(n=>({...n,time:{...n.time,[e]:t}}))}updateInputClock(e){this.inputClock=e??(this.inputClock+1)%2}parseTime(e,t,n=0){let s=parseInt(t)+n;switch(e){case"minutes":s<0&&(s=99),s>99&&(s=0);break;case"seconds":s<0&&(s=59),s>59&&(s=0);break}return s}updateInputValues(e){const{minutes:t,seconds:n}=e??x.getByKey("time");this.minutes.textContent=k(t),this.seconds.textContent=k(n)}}class Z{constructor(){__publicField(this,"el"),__publicField(this,"container"),__publicField(this,"draggable"),__publicField(this,"timer")}mount(e,t){this.timer=t,this.draggable=e,this.container=I("div",{className:"widget-container"},this.timer.el),this.el=I("div",{className:"widget",onmouseenter:()=>{this.draggable.el.classList.add("moved")},onmouseleave:()=>{this.draggable.el.classList.remove("moved")},onauxclick:n=>{n.preventDefault()},oncontextmenu:n=>{n.preventDefault()}},this.container)}}const re="";class Q{constructor(){__publicField(this,"timer"),__publicField(this,"draggable"),__publicField(this,"widget"),__publicField(this,"countdown"),this.timer=new J,this.draggable=new H,this.widget=new Z,this.countdown=new W}mount(){this.timer.mount(),this.widget.mount(this.draggable,this.timer),this.draggable.mount(this.widget.el),E.on("timer_start",e=>{this.countdown.start(e)}),E.on("timer_stop",()=>{this.countdown.stop()}),E.on("timer_tick",e=>{this.timer.updateInputValues(e)})}}new Q().mount(),GM_addStyle(".overlay{left:0;top:0;width:100%;height:100%;cursor:grab}.overlay.moved{position:fixed}.overlay.grabbing{cursor:grabbing}.overlay .widget{z-index:999999;position:fixed!important;background-color:#1f1f23;width:70px;height:32px;box-shadow:0 6px 16px #00000080,0 0 4px #0006;border:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;align-items:center;justify-content:center}.overlay .widget-container{font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;font-size:24px;color:#fff}.timer{display:flex;flex-direction:row}.timer div{display:block;text-align:center;caret-color:transparent}.timer div:focus{outline:none;color:tomato}")})();
