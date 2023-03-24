var le=Object.defineProperty,ce=(f,c,g)=>c in f?le(f,c,{enumerable:!0,configurable:!0,writable:!0,value:g}):f[c]=g,v=(f,c,g)=>(ce(f,typeof c!="symbol"?c+"":c,g),g),B=(f,c,g)=>{if(!c.has(f))throw TypeError("Cannot "+g)},M=(f,c,g)=>(B(f,c,"read from private field"),g?g.call(f):c.get(f)),z=(f,c,g)=>{if(c.has(f))throw TypeError("Cannot add the same private member more than once");c instanceof WeakSet?c.add(f):c.set(f,g)},P=(f,c,g,x)=>(B(f,c,"write to private field"),x?x.call(f,g):c.set(f,g),g);(function(f){var c;function g(o,e,...i){const t=document.createElement(o);return typeof e=="string"?t.append(x(e)):Array.isArray(e)?t.append(...e):(Object.assign(t,e),Object.assign(t.style,e?.style)),i.length&&t.append(...i),t}function x(o){return document.createTextNode(o)}function S(o,e,i){const t=new MutationObserver((s,r)=>{for(const n of s)e(n,r)});return t.observe(o,{childList:!0,subtree:!0,...i}),t}class R{constructor(){z(this,c,{})}on(e,i){const t=M(this,c)[e];return t?t.push(i):M(this,c)[e]=[i],this}addListener(e,i){return this.on(e,i)}once(e,i){const t=(...s)=>{this.off(e,t),i(...s)};return this.on(e,t),this}emit(e,...i){const t=M(this,c)[e]||[];for(let s=0;s<t.length;s++)t[s](...i);return Boolean(t.length)}off(e,i){return M(this,c)[e]&&(M(this,c)[e]=M(this,c)[e].filter(t=>t!==i)),this}removeListener(e,i){return this.off(e,i)}removeAllListeners(e){return e?delete M(this,c)[e]:P(this,c,{}),this}eventNames(){return Reflect.ownKeys(M(this,c))}listeners(e){return M(this,c)[e]}listenerCount(e){var i;return((i=M(this,c)[e])==null?void 0:i.length)??0}}c=new WeakMap;const E=new R;class U{constructor(){v(this,"submitButtonObserver")}addButtonObserver(e){this.submitButtonObserver=S(e,i=>{const t=i.target;t.ariaDisabled!=="true"&&(t.click(),E.emit("timer_end"),this.unmount())},{attributes:!0})}mount(){S(document.body,(e,i)=>{var t,s;if(this.submitButtonObserver)return;const r=document.evaluate("//div[contains(text(), 'Submit')]",document,null,XPathResult.ANY_TYPE,null).iterateNext();if(!r)return;const n=(s=(t=r.parentNode)==null?void 0:t.parentNode)==null?void 0:s.parentElement;n&&n.ariaLabel==="Submit"&&(this.addButtonObserver(n),E.emit("timer_start"))})}unmount(){this.submitButtonObserver&&(this.submitButtonObserver.disconnect(),this.submitButtonObserver=null)}}var X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var O={exports:{}};(function(o,e){(function(i,t){o.exports=t()})(X,function(){return function(i){function t(r){if(s[r])return s[r].exports;var n=s[r]={exports:{},id:r,loaded:!1};return i[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var s={};return t.m=i,t.c=s,t.p="",t(0)}([function(i,t,s){function r(u){return u&&u.__esModule?u:{default:u}}var n=s(1),d=r(n);i.exports=d.default},function(i,t,s){function r(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}function n(){var l=this,a=this.el,p=this.opts||h,T={};if(a.style.position="absolute",this.handle=p.handle||a,p.constrain){for(var b=p.relativeTo||a.parentNode,y=a,L=0,I=0;y!==b;)y=y.parentNode,(0,d.isRelative)(y)&&(L-=y.offsetLeft,I-=y.offsetTop),y===b&&(L+=y.offsetLeft,I+=y.offsetTop);var re=L+b.offsetWidth-a.offsetWidth,ae=I+b.offsetHeight-a.offsetHeight;T.xClamp=(0,d.generateClamp)(L,re),T.yClamp=(0,d.generateClamp)(I,ae)}this.opts=p,this.data=T,this.events={mousedown:u.mousedown.bind(this),mouseup:u.mouseup.bind(this),touchstart:u.touchstart.bind(this),touchstop:u.touchstop.bind(this),scrollFix:function(ue){l.isDragging&&ue.preventDefault()}},this.handleMove=w(this.opts.customMove),this.handle.addEventListener("mousedown",this.events.mousedown,!1),this.handle.addEventListener("touchstart",this.events.touchstart,!1),document.addEventListener("touchmove",this.events.scrollFix,{passive:!1})}Object.defineProperty(t,"__esModule",{value:!0});var d=s(2),u=s(3),w=(0,d.generateMoveFn)(),h={constrain:!1,relativeTo:null,handle:null,ignoreFn:null,highlightInputs:!1,onMouseDown:null,onMouseMove:null,onMouseUp:null,onTouchStart:null,onTouchMove:null,onTouchStop:null,customMove:null},m=function(){function l(a,p){if(r(this,l),!a)throw Error("Must include moveable element");this.el=a,this.opts=p,n.call(this)}return l.prototype.reinit=function(){this.destroy(),n.call(this)},l.prototype.destroy=function(){var a=this.events;this.handle.removeEventListener("mousedown",a.mousedown,!1),document.removeEventListener("mousemove",a.mousemove,!1),document.removeEventListener("mouseup",a.mouseup,!1),this.handle.removeEventListener("touchstart",a.touchstart,!1),document.removeEventListener("touchmove",a.touchmove,!1),document.removeEventListener("touchstop",a.touchstop,!1),document.removeEventListener("touchmove",this.events.scrollFix,{passive:!1})},l}();t.default=function(l,a){return new m(l,a)}},function(i,t){function s(u,w){return function(h){return Math.min(Math.max(h,u),w)}}function r(u){return window.getComputedStyle(u).position==="relative"}function n(){return window.requestAnimationFrame?function(u){var w=u||d;return function(h,m,l){window.requestAnimationFrame(function(){w(h,m,l)})}}:function(u){return function(w,h,m){var l=u||d;l(w,h,m)}}}function d(u,w,h){u.style.left=w+"px",u.style.top=h+"px"}Object.defineProperty(t,"__esModule",{value:!0}),t.generateClamp=s,t.isRelative=r,t.generateMoveFn=n},function(i,t){function s(h){var m=this.opts;if(m.highlightInputs){var l=h.target.tagName.toLowerCase();if(l==="input"||l==="textarea")return}if(!m.ignoreFn||!m.ignoreFn(h)){if(h.button===0){var a=this.el,p=this.events;typeof m.onMouseDown=="function"&&m.onMouseDown(a,h);var T=h.clientX-a.offsetLeft,b=h.clientY-a.offsetTop;p.mousemove=r.bind(this,T,b),document.addEventListener("mousemove",p.mousemove,!1),document.addEventListener("mouseup",p.mouseup,!1)}h.preventDefault()}}function r(h,m,l){var a=this.el,p=this.opts,T=this.data;typeof p.onMouseMove=="function"&&p.onMouseMove(a,l);var b=l.clientX-h,y=l.clientY-m;return p.constrain&&(b=T.xClamp(b),y=T.yClamp(y)),this.handleMove(a,b,y),l.preventDefault(),!1}function n(h){var m=this.el,l=this.opts,a=this.events;typeof l.onMouseUp=="function"&&l.onMouseUp(m,h),document.removeEventListener("mouseup",a.mouseup,!1),document.removeEventListener("mousemove",a.mousemove,!1)}function d(h){var m=this.opts;if(m.highlightInputs){var l=h.target.tagName.toLowerCase();if(l==="input"||l==="textarea")return}if(!m.ignoreFn||!m.ignoreFn(h)){var a=this.el,p=this.events;typeof m.onTouchStart=="function"&&m.onTouchStart(a,h);var T=h.targetTouches[0],b=T.clientX-a.offsetLeft,y=T.clientY-a.offsetTop;p.touchmove=u.bind(this,b,y),this.isDragging=!0,document.addEventListener("touchmove",p.touchmove,!1),document.addEventListener("touchend",p.touchstop,!1),document.addEventListener("touchcancel",p.touchstop,!1)}}function u(h,m,l){var a=this.el,p=this.opts,T=this.data;typeof p.onTouchMove=="function"&&p.onTouchMove(a,l);var b=l.targetTouches[0],y=b.clientX-h,L=b.clientY-m;return p.constrain&&(y=T.xClamp(y),L=T.yClamp(L)),this.handleMove(a,y,L),l.preventDefault(),!1}function w(h){this.isDragging=!1;var m=this.el,l=this.opts,a=this.events;typeof l.onTouchStop=="function"&&l.onTouchStop(m,h),document.removeEventListener("touchmove",a.touchmove,!1),document.removeEventListener("touchend",a.touchstop,!1),document.removeEventListener("touchcancel",a.touchstop,!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.mousedown=s,t.mousemove=r,t.mouseup=n,t.touchstart=d,t.touchmove=u,t.touchstop=w}])})})(O);const W=V(O.exports);class Y{constructor(...e){v(this,"target"),v(this,"displace"),v(this,"options");var i;this.target=((i=this.options)==null?void 0:i.handle)??e[0],this.options=e[1],this.displace=W(...e),this.destroy(),this.reinit=this.reinit.bind(this);const t=()=>{this.displace.reinit(),this.target.removeEventListener("mouseenter",t)};this.target.addEventListener("mouseenter",t),window.addEventListener("resize",this.reinit)}reinit(){this.displace.reinit()}destroy(){this.displace.destroy(),window.removeEventListener("resize",this.reinit)}changePosition(e,i){this.target.style.left=`${e}px`,this.target.style.top=`${i}px`}}class ${constructor(e,i,t,s){v(this,"serialize"),v(this,"deserialize"),this.key=e,this.initialValue=i,this.storage=t,this.serialize=r=>s!=null&&s.serialize?s.serialize(r):JSON.stringify(r),this.deserialize=r=>s!=null&&s.deserialize?s.deserialize(r):JSON.parse(r)}get values(){try{const e=this.storage.getItem(this.key);return e?this.deserialize(e):this.initialValue}catch{return this.initialValue}}write(e){e instanceof Function&&(e=e(this.values));try{this.storage.setItem(this.key,this.serialize(e))}catch(i){return console.error(`Failed to save (${this.key}):`,i.message),this.initialValue}return e}reset(){this.write(this.initialValue)}}class G extends ${constructor(e,i,t){super(e,i,localStorage,t)}}class q{constructor(){v(this,"el"),v(this,"interact"),v(this,"store",new G("overlay-position",{x:0,y:0}))}mount(e){this.el=g("div",{className:"overlay"},e),this.interact=new Y(e,{constrain:!0,relativeTo:this.el,handle:e,onMouseDown:()=>{this.el.classList.add("grabbing")},onMouseUp:s=>{this.el.classList.remove("grabbing");const{x:r,y:n}=s.getBoundingClientRect();this.store.write({x:r,y:n})}});const{x:i,y:t}=this.store.values;this.interact.changePosition(i,t),document.body.appendChild(this.el)}}const H=o=>(e,i)=>(o.set(e,i),i),k=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,C=536870912,N=C*2,J=(o,e)=>i=>{const t=e.get(i);let s=t===void 0?i.size:t<N?t+1:0;if(!i.has(s))return o(i,s);if(i.size<C){for(;i.has(s);)s=Math.floor(Math.random()*N);return o(i,s)}if(i.size>k)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;i.has(s);)s=Math.floor(Math.random()*k);return o(i,s)},D=new WeakMap,K=H(D),_=J(K,D),Q=o=>o.method!==void 0&&o.method==="call",Z=o=>o.error===null&&typeof o.id=="number",F=((o,e)=>{let i=null;return()=>{if(i!==null)return i;const t=new Blob([e],{type:"application/javascript; charset=utf-8"}),s=URL.createObjectURL(t);return i=o(s),setTimeout(()=>URL.revokeObjectURL(s)),i}})(o=>{const e=new Map([[0,()=>{}]]),i=new Map([[0,()=>{}]]),t=new Map,s=new Worker(o);return s.addEventListener("message",({data:r})=>{if(Q(r)){const{params:{timerId:n,timerType:d}}=r;if(d==="interval"){const u=e.get(n);if(typeof u=="number"){const w=t.get(u);if(w===void 0||w.timerId!==n||w.timerType!==d)throw new Error("The timer is in an undefined state.")}else if(typeof u<"u")u();else throw new Error("The timer is in an undefined state.")}else if(d==="timeout"){const u=i.get(n);if(typeof u=="number"){const w=t.get(u);if(w===void 0||w.timerId!==n||w.timerType!==d)throw new Error("The timer is in an undefined state.")}else if(typeof u<"u")u(),i.delete(n);else throw new Error("The timer is in an undefined state.")}}else if(Z(r)){const{id:n}=r,d=t.get(n);if(d===void 0)throw new Error("The timer is in an undefined state.");const{timerId:u,timerType:w}=d;t.delete(n),w==="interval"?e.delete(u):i.delete(u)}else{const{error:{message:n}}=r;throw new Error(n)}}),{clearInterval:r=>{const n=_(t);t.set(n,{timerId:r,timerType:"interval"}),e.set(r,n),s.postMessage({id:n,method:"clear",params:{timerId:r,timerType:"interval"}})},clearTimeout:r=>{const n=_(t);t.set(n,{timerId:r,timerType:"timeout"}),i.set(r,n),s.postMessage({id:n,method:"clear",params:{timerId:r,timerType:"timeout"}})},setInterval:(r,n)=>{const d=_(e);return e.set(d,()=>{r(),typeof e.get(d)=="function"&&s.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:d,timerType:"interval"}})}),s.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:d,timerType:"interval"}}),d},setTimeout:(r,n)=>{const d=_(i);return i.set(d,r),s.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:d,timerType:"timeout"}}),d}}},`(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error('The given type "'.concat(i,'" is not supported'));(e=>{const r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error('The given method "'.concat(s.method,'" is not supported'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error('The given type "'.concat(d,'" is not supported'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`),ee=o=>F().clearInterval(o),te=(o,e)=>F().setInterval(o,e);function j(o){return o.toString().padStart(2,"0")}class ie{constructor(){v(this,"minutes"),v(this,"seconds")}get time(){return`${j(this.minutes)}:${j(this.seconds)}`}reset(){this.minutes=1,this.seconds=36}tick(){this.seconds--,this.minutes>0&&this.seconds<0&&(this.seconds=59,this.minutes--),this.minutes===0&&this.seconds===0&&E.emit("timer_end"),E.emit("overlay_set_time",this.time)}}class se{constructor(){v(this,"interval"),v(this,"countdown",new ie)}reset(){this.stop(),this.start()}start(){this.countdown.reset(),E.emit("overlay_set_time",this.countdown.time),this.interval=te(()=>{this.countdown.tick()},1e3)}stop(){this.interval&&(ee(this.interval),this.interval=null)}}class ne{constructor(){v(this,"el"),v(this,"time"),v(this,"container"),v(this,"draggable")}mount(e){this.draggable=e,this.time=g("time"),this.container=g("div",{className:"widget-container"},this.time),this.el=g("div",{className:"widget",onmouseenter:()=>{this.draggable.el.classList.add("moved")},onmouseleave:()=>{this.draggable.el.classList.remove("moved")},onauxclick:i=>{i.preventDefault(),E.emit("timer_reset")},oncontextmenu:i=>{i.preventDefault()}},this.container),this.timerIdle()}setTime(e){this.time.textContent=e}timerIdle(){this.setTime("IDLE"),this.el.classList.add("timer-idle")}timerEnded(){this.el.classList.add("timer-ended")}timerStarted(){this.el.classList.remove("timer-idle"),this.el.classList.remove("timer-ended")}}const he="";class A{constructor(){v(this,"draggable"),v(this,"widget"),v(this,"timer"),v(this,"clicker"),this.draggable=new q,this.widget=new ne,this.widget.mount(this.draggable),this.draggable.mount(this.widget.el),this.clicker=new U,this.clicker.mount(),this.timer=new se,E.on("timer_start",()=>{console.log("timer_start"),this.timer.start(),this.widget.timerStarted()}),E.on("timer_end",()=>{console.log("timer_end"),this.timer.stop(),this.widget.timerEnded()}),E.on("timer_reset",()=>{console.log("timer_reset"),this.timer.reset(),this.widget.timerStarted(),this.clicker.unmount(),this.clicker.mount()}),E.on("overlay_set_time",e=>{this.widget.setTime(e)})}}const oe=new A;console.log(oe),GM_addStyle(".overlay{left:0;top:0;width:100%;height:100%;cursor:grab}.overlay.moved{position:fixed}.overlay.grabbing{cursor:grabbing}.overlay .widget{position:fixed!important;background-color:#1f1f23;user-select:none;touch-action:none;width:64px;height:32px;box-shadow:0 6px 16px #00000080,0 0 4px #0006;border:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;align-items:center;justify-content:center}.overlay .widget-container{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:lighter;font-size:20px;color:#fff}.timer-ended{background-color:#e91e63!important}.timer-idle{background-color:#03a9f4!important}"),f.App=A,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})})(this["fb-userscript"]=this["fb-userscript"]||{});
