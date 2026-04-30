(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var oc={exports:{}},_i={},ic={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Nd=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Xd=Symbol.for("react.lazy"),ya=Symbol.iterator;function Vd(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sc=Object.assign,ac={};function en(e,t,r){this.props=e,this.context=t,this.refs=ac,this.updater=r||lc}en.prototype.isReactComponent={};en.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};en.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uc(){}uc.prototype=en.prototype;function Ss(e,t,r){this.props=e,this.context=t,this.refs=ac,this.updater=r||lc}var xs=Ss.prototype=new uc;xs.constructor=Ss;sc(xs,en.prototype);xs.isPureReactComponent=!0;var Sa=Array.isArray,cc=Object.prototype.hasOwnProperty,_s={current:null},fc={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)cc.call(t,n)&&!fc.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:Zn,type:e,key:i,ref:l,props:o,_owner:_s.current}}function Kd(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ks(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var xa=/\/+/g;function Ii(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qd(""+e.key):t.toString(36)}function Do(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Zn:case Ld:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Ii(l,0):n,Sa(o)?(r="",e!=null&&(r=e.replace(xa,"$&/")+"/"),Do(o,t,r,"",function(u){return u})):o!=null&&(ks(o)&&(o=Kd(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(xa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",Sa(e))for(var s=0;s<e.length;s++){i=e[s];var a=n+Ii(i,s);l+=Do(i,t,r,a,o)}else if(a=Vd(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=n+Ii(i,s++),l+=Do(i,t,r,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,r){if(e==null)return e;var n=[],o=0;return Do(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Mo={transition:null},qd={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:_s};function pc(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:io,forEach:function(e,t,r){io(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!ks(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=en;G.Fragment=Nd;G.Profiler=Gd;G.PureComponent=Ss;G.StrictMode=Id;G.Suspense=Hd;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd;G.act=pc;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=sc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=_s.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)cc.call(t,a)&&!fc.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Zn,type:e.type,key:o,ref:i,props:n,_owner:l}};G.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zd,_context:e},e.Consumer=e};G.createElement=dc;G.createFactory=function(e){var t=dc.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Wd,render:e}};G.isValidElement=ks;G.lazy=function(e){return{$$typeof:Xd,_payload:{_status:-1,_result:e},_init:Yd}};G.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};G.unstable_act=pc;G.useCallback=function(e,t){return Pe.current.useCallback(e,t)};G.useContext=function(e){return Pe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Pe.current.useEffect(e,t)};G.useId=function(){return Pe.current.useId()};G.useImperativeHandle=function(e,t,r){return Pe.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Pe.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Pe.current.useReducer(e,t,r)};G.useRef=function(e){return Pe.current.useRef(e)};G.useState=function(e){return Pe.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Pe.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Pe.current.useTransition()};G.version="18.3.1";ic.exports=G;var U=ic.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=U,Jd=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),tp=Object.prototype.hasOwnProperty,rp=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,np={key:!0,ref:!0,__self:!0,__source:!0};function hc(e,t,r){var n,o={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)tp.call(t,n)&&!np.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Jd,type:e,key:i,ref:l,props:o,_owner:rp.current}}_i.Fragment=ep;_i.jsx=hc;_i.jsxs=hc;oc.exports=_i;var y=oc.exports,mc={exports:{}},We={},vc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,O){var A=k.length;k.push(O);e:for(;0<A;){var V=A-1>>>1,z=k[V];if(0<o(z,O))k[V]=O,k[A]=z,A=V;else break e}}function r(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var O=k[0],A=k.pop();if(A!==O){k[0]=A;e:for(var V=0,z=k.length,Rt=z>>>1;V<Rt;){var me=2*(V+1)-1,gt=k[me],Xe=me+1,Fe=k[Xe];if(0>o(gt,A))Xe<z&&0>o(Fe,gt)?(k[V]=Fe,k[Xe]=A,V=Xe):(k[V]=gt,k[me]=A,V=me);else if(Xe<z&&0>o(Fe,A))k[V]=Fe,k[Xe]=A,V=Xe;else break e}}return O}function o(k,O){var A=k.sortIndex-O.sortIndex;return A!==0?A:k.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,d=null,f=3,v=!1,g=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var O=r(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=k)n(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=r(u)}}function _(k){if(x=!1,m(k),!g)if(r(a)!==null)g=!0,$e(w);else{var O=r(u);O!==null&&Le(_,O.startTime-k)}}function w(k,O){g=!1,x&&(x=!1,h(F),F=-1),v=!0;var A=f;try{for(m(O),d=r(a);d!==null&&(!(d.expirationTime>O)||k&&!W());){var V=d.callback;if(typeof V=="function"){d.callback=null,f=d.priorityLevel;var z=V(d.expirationTime<=O);O=e.unstable_now(),typeof z=="function"?d.callback=z:d===r(a)&&n(a),m(O)}else n(a);d=r(a)}if(d!==null)var Rt=!0;else{var me=r(u);me!==null&&Le(_,me.startTime-O),Rt=!1}return Rt}finally{d=null,f=A,v=!1}}var S=!1,T=null,F=-1,R=5,D=-1;function W(){return!(e.unstable_now()-D<R)}function Q(){if(T!==null){var k=e.unstable_now();D=k;var O=!0;try{O=T(!0,k)}finally{O?X():(S=!1,T=null)}}else S=!1}var X;if(typeof c=="function")X=function(){c(Q)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,ut=Me.port2;Me.port1.onmessage=Q,X=function(){ut.postMessage(null)}}else X=function(){E(Q,0)};function $e(k){T=k,S||(S=!0,X())}function Le(k,O){F=E(function(){k(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,$e(w))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var A=f;f=O;try{return k()}finally{f=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,O){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var A=f;f=k;try{return O()}finally{f=A}},e.unstable_scheduleCallback=function(k,O,A){var V=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?V+A:V):A=V,k){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,k={id:p++,callback:O,priorityLevel:k,startTime:A,expirationTime:z,sortIndex:-1},A>V?(k.sortIndex=A,t(u,k),r(a)===null&&k===r(u)&&(x?(h(F),F=-1):x=!0,Le(_,A-V))):(k.sortIndex=z,t(a,k),g||v||(g=!0,$e(w))),k},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(k){var O=f;return function(){var A=f;f=O;try{return k.apply(this,arguments)}finally{f=A}}}})(gc);vc.exports=gc;var op=vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=U,je=op;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yc=new Set,Un={};function xr(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(Un[e]=t,e=0;e<t.length;e++)yc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_a={},ka={};function sp(e){return Sl.call(ka,e)?!0:Sl.call(_a,e)?!1:lp.test(e)?ka[e]=!0:(_a[e]=!0,!1)}function ap(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function up(e,t,r,n){if(t===null||typeof t>"u"||ap(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ws=/[\-:]([a-z])/g;function Es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ws,Es);Se[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ws,Es);Se[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ws,Es);Se[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ts(e,t,r,n){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(up(t,r,o,n)&&(r=null),n||o===null?sp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ut=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Sc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),Ps=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),_c=Symbol.for("react.offscreen"),wa=Symbol.iterator;function ln(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Gi;function vn(e){if(Gi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Gi=t&&t[1]||""}return`
`+Gi+e}var zi=!1;function ji(e,t){if(!e||zi)return"";zi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{zi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?vn(e):""}function cp(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fr:return"Fragment";case Ar:return"Portal";case xl:return"Profiler";case Cs:return"StrictMode";case _l:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xc:return(e.displayName||"Context")+".Consumer";case Sc:return(e._context.displayName||"Context")+".Provider";case Ps:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case As:return t=e.displayName||null,t!==null?t:wl(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return wl(e(t))}catch{}}return null}function fp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wl(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dp(e){var t=kc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=dp(e))}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=kc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function El(e,t){var r=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ea(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&Ts(e,"checked",t,!1)}function Tl(e,t){Ec(e,t);var r=qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Cl(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ta(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Cl(e,t,r){(t!=="number"||Yo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function Gr(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+qt(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(gn(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qt(r)}}function Tc(e,t){var r=qt(t.value),n=qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,Pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pp=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Ac(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Ac(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var hp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,zr=null,jr=null;function Aa(e){if(e=to(e)){if(typeof Rl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ci(t),Rl(e.stateNode,e.type,t))}}function bc(e){zr?jr?jr.push(e):jr=[e]:zr=e}function Uc(){if(zr){var e=zr,t=jr;if(jr=zr=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Rc(e,t){return e(t)}function Bc(){}var Wi=!1;function Oc(e,t,r){if(Wi)return e(t,r);Wi=!0;try{return Rc(e,t,r)}finally{Wi=!1,(zr!==null||jr!==null)&&(Bc(),Uc())}}function Bn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ci(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Bl=!1;if(Pt)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",sn,sn),window.removeEventListener("test",sn,sn)}catch{Bl=!1}function mp(e,t,r,n,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(p){this.onError(p)}}var kn=!1,qo=null,Zo=!1,Ol=null,vp={onError:function(e){kn=!0,qo=e}};function gp(e,t,r,n,o,i,l,s,a){kn=!1,qo=null,mp.apply(vp,arguments)}function yp(e,t,r,n,o,i,l,s,a){if(gp.apply(this,arguments),kn){if(kn){var u=qo;kn=!1,qo=null}else throw Error(C(198));Zo||(Zo=!0,Ol=u)}}function _r(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fa(e){if(_r(e)!==e)throw Error(C(188))}function Sp(e){var t=e.alternate;if(!t){if(t=_r(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Fa(o),e;if(i===n)return Fa(o),t;i=i.sibling}throw Error(C(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function Mc(e){return e=Sp(e),e!==null?Lc(e):null}function Lc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lc(e);if(t!==null)return t;e=e.sibling}return null}var Nc=je.unstable_scheduleCallback,ba=je.unstable_cancelCallback,xp=je.unstable_shouldYield,_p=je.unstable_requestPaint,se=je.unstable_now,kp=je.unstable_getCurrentPriorityLevel,bs=je.unstable_ImmediatePriority,Ic=je.unstable_UserBlockingPriority,Jo=je.unstable_NormalPriority,wp=je.unstable_LowPriority,Gc=je.unstable_IdlePriority,ki=null,mt=null;function Ep(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Pp,Tp=Math.log,Cp=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-(Tp(e)/Cp|0)|0}var uo=64,co=4194304;function yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ei(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~o;s!==0?n=yn(s):(i&=l,i!==0&&(n=yn(i)))}else l=r&~o,l!==0?n=yn(l):i!==0&&(n=yn(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-lt(t),o=1<<r,n|=e[r],t&=~o;return n}function Ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-lt(i),s=1<<l,a=o[l];a===-1?(!(s&r)||s&n)&&(o[l]=Ap(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=uo;return uo<<=1,!(uo&4194240)&&(uo=64),e}function Hi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Jn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=r}function bp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-lt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Us(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-lt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var K=0;function jc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wc,Rs,Hc,$c,Xc,Ml=!1,fo=[],Wt=null,Ht=null,$t=null,On=new Map,Dn=new Map,Nt=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function an(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=to(t),t!==null&&Rs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rp(e,t,r,n,o){switch(t){case"focusin":return Wt=an(Wt,e,t,r,n,o),!0;case"dragenter":return Ht=an(Ht,e,t,r,n,o),!0;case"mouseover":return $t=an($t,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return On.set(i,an(On.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Dn.set(i,an(Dn.get(i)||null,e,t,r,n,o)),!0}return!1}function Vc(e){var t=cr(e.target);if(t!==null){var r=_r(t);if(r!==null){if(t=r.tag,t===13){if(t=Dc(r),t!==null){e.blockedOn=t,Xc(e.priority,function(){Hc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ul=n,r.target.dispatchEvent(n),Ul=null}else return t=to(r),t!==null&&Rs(t),e.blockedOn=r,!1;t.shift()}return!0}function Ra(e,t,r){Lo(e)&&r.delete(t)}function Bp(){Ml=!1,Wt!==null&&Lo(Wt)&&(Wt=null),Ht!==null&&Lo(Ht)&&(Ht=null),$t!==null&&Lo($t)&&($t=null),On.forEach(Ra),Dn.forEach(Ra)}function un(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Bp)))}function Mn(e){function t(o){return un(o,e)}if(0<fo.length){un(fo[0],e);for(var r=1;r<fo.length;r++){var n=fo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Wt!==null&&un(Wt,e),Ht!==null&&un(Ht,e),$t!==null&&un($t,e),On.forEach(t),Dn.forEach(t),r=0;r<Nt.length;r++)n=Nt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(r=Nt[0],r.blockedOn===null);)Vc(r),r.blockedOn===null&&Nt.shift()}var Wr=Ut.ReactCurrentBatchConfig,ti=!0;function Op(e,t,r,n){var o=K,i=Wr.transition;Wr.transition=null;try{K=1,Bs(e,t,r,n)}finally{K=o,Wr.transition=i}}function Dp(e,t,r,n){var o=K,i=Wr.transition;Wr.transition=null;try{K=4,Bs(e,t,r,n)}finally{K=o,Wr.transition=i}}function Bs(e,t,r,n){if(ti){var o=Ll(e,t,r,n);if(o===null)el(e,t,n,ri,r),Ua(e,n);else if(Rp(o,e,t,r,n))n.stopPropagation();else if(Ua(e,n),t&4&&-1<Up.indexOf(e)){for(;o!==null;){var i=to(o);if(i!==null&&Wc(i),i=Ll(e,t,r,n),i===null&&el(e,t,n,ri,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else el(e,t,n,null,r)}}var ri=null;function Ll(e,t,r,n){if(ri=null,e=Fs(n),e=cr(e),e!==null)if(t=_r(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Dc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case bs:return 1;case Ic:return 4;case Jo:case wp:return 16;case Gc:return 536870912;default:return 16}default:return 16}}var zt=null,Os=null,No=null;function Qc(){if(No)return No;var e,t=Os,r=t.length,n,o="value"in zt?zt.value:zt.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return No=o.slice(e,1<n?1-n:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Ba(){return!1}function He(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?po:Ba,this.isPropagationStopped=Ba,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=He(tn),eo=ne({},tn,{view:0,detail:0}),Mp=He(eo),$i,Xi,cn,wi=ne({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cn&&(cn&&e.type==="mousemove"?($i=e.screenX-cn.screenX,Xi=e.screenY-cn.screenY):Xi=$i=0,cn=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Oa=He(wi),Lp=ne({},wi,{dataTransfer:0}),Np=He(Lp),Ip=ne({},eo,{relatedTarget:0}),Vi=He(Ip),Gp=ne({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=He(Gp),jp=ne({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=He(jp),Hp=ne({},tn,{data:0}),Da=He(Hp),$p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vp[e])?!!t[e]:!1}function Ms(){return Kp}var Qp=ne({},eo,{key:function(e){if(e.key){var t=$p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=He(Qp),qp=ne({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=He(qp),Zp=ne({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),Jp=He(Zp),eh=ne({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=He(eh),rh=ne({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nh=He(rh),oh=[9,13,27,32],Ls=Pt&&"CompositionEvent"in window,wn=null;Pt&&"documentMode"in document&&(wn=document.documentMode);var ih=Pt&&"TextEvent"in window&&!wn,Yc=Pt&&(!Ls||wn&&8<wn&&11>=wn),La=" ",Na=!1;function qc(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function lh(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:(Na=!0,La);case"textInput":return e=t.data,e===La&&Na?null:e;default:return null}}function sh(e,t){if(br)return e==="compositionend"||!Ls&&qc(e,t)?(e=Qc(),No=Os=zt=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yc&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function Jc(e,t,r,n){bc(n),t=ni(t,"onChange"),0<t.length&&(r=new Ds("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var En=null,Ln=null;function uh(e){ff(e,0)}function Ei(e){var t=Br(e);if(wc(t))return e}function ch(e,t){if(e==="change")return t}var ef=!1;if(Pt){var Ki;if(Pt){var Qi="oninput"in document;if(!Qi){var Ga=document.createElement("div");Ga.setAttribute("oninput","return;"),Qi=typeof Ga.oninput=="function"}Ki=Qi}else Ki=!1;ef=Ki&&(!document.documentMode||9<document.documentMode)}function za(){En&&(En.detachEvent("onpropertychange",tf),Ln=En=null)}function tf(e){if(e.propertyName==="value"&&Ei(Ln)){var t=[];Jc(t,Ln,e,Fs(e)),Oc(uh,t)}}function fh(e,t,r){e==="focusin"?(za(),En=t,Ln=r,En.attachEvent("onpropertychange",tf)):e==="focusout"&&za()}function dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Ln)}function ph(e,t){if(e==="click")return Ei(t)}function hh(e,t){if(e==="input"||e==="change")return Ei(t)}function mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:mh;function Nn(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Sl.call(t,o)||!at(e[o],t[o]))return!1}return!0}function ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wa(e,t){var r=ja(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ja(r)}}function rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(){for(var e=window,t=Yo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Yo(e.document)}return t}function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=nf(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&rf(r.ownerDocument.documentElement,r)){if(n!==null&&Ns(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Wa(r,i);var l=Wa(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gh=Pt&&"documentMode"in document&&11>=document.documentMode,Ur=null,Nl=null,Tn=null,Il=!1;function Ha(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Il||Ur==null||Ur!==Yo(n)||(n=Ur,"selectionStart"in n&&Ns(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Tn&&Nn(Tn,n)||(Tn=n,n=ni(Nl,"onSelect"),0<n.length&&(t=new Ds("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Ur)))}function ho(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Rr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Yi={},of={};Pt&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Ti(e){if(Yi[e])return Yi[e];if(!Rr[e])return e;var t=Rr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in of)return Yi[e]=t[r];return e}var lf=Ti("animationend"),sf=Ti("animationiteration"),af=Ti("animationstart"),uf=Ti("transitionend"),cf=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){cf.set(e,t),xr(t,[e])}for(var qi=0;qi<$a.length;qi++){var Zi=$a[qi],yh=Zi.toLowerCase(),Sh=Zi[0].toUpperCase()+Zi.slice(1);Jt(yh,"on"+Sh)}Jt(lf,"onAnimationEnd");Jt(sf,"onAnimationIteration");Jt(af,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(uf,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function Xa(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,yp(n,t,void 0,e),e.currentTarget=null}function ff(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Xa(o,s,u),i=a}else for(l=0;l<n.length;l++){if(s=n[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Xa(o,s,u),i=a}}}if(Zo)throw e=Ol,Zo=!1,Ol=null,e}function q(e,t){var r=t[Hl];r===void 0&&(r=t[Hl]=new Set);var n=e+"__bubble";r.has(n)||(df(t,e,2,!1),r.add(n))}function Ji(e,t,r){var n=0;t&&(n|=4),df(r,e,n,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function In(e){if(!e[mo]){e[mo]=!0,yc.forEach(function(r){r!=="selectionchange"&&(xh.has(r)||Ji(r,!1,e),Ji(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,Ji("selectionchange",!1,t))}}function df(e,t,r,n){switch(Kc(t)){case 1:var o=Op;break;case 4:o=Dp;break;default:o=Bs}r=o.bind(null,t,r,e),o=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function el(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=cr(s),l===null)return;if(a=l.tag,a===5||a===6){n=i=l;continue e}s=s.parentNode}}n=n.return}Oc(function(){var u=i,p=Fs(r),d=[];e:{var f=cf.get(e);if(f!==void 0){var v=Ds,g=e;switch(e){case"keypress":if(Io(r)===0)break e;case"keydown":case"keyup":v=Yp;break;case"focusin":g="focus",v=Vi;break;case"focusout":g="blur",v=Vi;break;case"beforeblur":case"afterblur":v=Vi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jp;break;case lf:case sf:case af:v=zp;break;case uf:v=th;break;case"scroll":v=Mp;break;case"wheel":v=nh;break;case"copy":case"cut":case"paste":v=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ma}var x=(t&4)!==0,E=!x&&e==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var c=u,m;c!==null;){m=c;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,h!==null&&(_=Bn(c,h),_!=null&&x.push(Gn(c,_,m)))),E)break;c=c.return}0<x.length&&(f=new v(f,g,null,r,p),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&r!==Ul&&(g=r.relatedTarget||r.fromElement)&&(cr(g)||g[At]))break e;if((v||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,v?(g=r.relatedTarget||r.toElement,v=u,g=g?cr(g):null,g!==null&&(E=_r(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(x=Oa,_="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ma,_="onPointerLeave",h="onPointerEnter",c="pointer"),E=v==null?f:Br(v),m=g==null?f:Br(g),f=new x(_,c+"leave",v,r,p),f.target=E,f.relatedTarget=m,_=null,cr(p)===u&&(x=new x(h,c+"enter",g,r,p),x.target=m,x.relatedTarget=E,_=x),E=_,v&&g)t:{for(x=v,h=g,c=0,m=x;m;m=Er(m))c++;for(m=0,_=h;_;_=Er(_))m++;for(;0<c-m;)x=Er(x),c--;for(;0<m-c;)h=Er(h),m--;for(;c--;){if(x===h||h!==null&&x===h.alternate)break t;x=Er(x),h=Er(h)}x=null}else x=null;v!==null&&Va(d,f,v,x,!1),g!==null&&E!==null&&Va(d,E,g,x,!0)}}e:{if(f=u?Br(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var w=ch;else if(Ia(f))if(ef)w=hh;else{w=dh;var S=fh}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=ph);if(w&&(w=w(e,u))){Jc(d,w,r,p);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Cl(f,"number",f.value)}switch(S=u?Br(u):window,e){case"focusin":(Ia(S)||S.contentEditable==="true")&&(Ur=S,Nl=u,Tn=null);break;case"focusout":Tn=Nl=Ur=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Ha(d,r,p);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":Ha(d,r,p)}var T;if(Ls)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else br?qc(e,r)&&(F="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(F="onCompositionStart");F&&(Yc&&r.locale!=="ko"&&(br||F!=="onCompositionStart"?F==="onCompositionEnd"&&br&&(T=Qc()):(zt=p,Os="value"in zt?zt.value:zt.textContent,br=!0)),S=ni(u,F),0<S.length&&(F=new Da(F,e,null,r,p),d.push({event:F,listeners:S}),T?F.data=T:(T=Zc(r),T!==null&&(F.data=T)))),(T=ih?lh(e,r):sh(e,r))&&(u=ni(u,"onBeforeInput"),0<u.length&&(p=new Da("onBeforeInput","beforeinput",null,r,p),d.push({event:p,listeners:u}),p.data=T))}ff(d,t)})}function Gn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ni(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Bn(e,r),i!=null&&n.unshift(Gn(e,i,o)),i=Bn(e,t),i!=null&&n.push(Gn(e,i,o))),e=e.return}return n}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var s=r,a=s.alternate,u=s.stateNode;if(a!==null&&a===n)break;s.tag===5&&u!==null&&(s=u,o?(a=Bn(r,i),a!=null&&l.unshift(Gn(r,a,s))):o||(a=Bn(r,i),a!=null&&l.push(Gn(r,a,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var _h=/\r\n?/g,kh=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(_h,`
`).replace(kh,"")}function vo(e,t,r){if(t=Ka(t),Ka(e)!==t&&r)throw Error(C(425))}function oi(){}var Gl=null,zl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,wh=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Th)}:Wl;function Th(e){setTimeout(function(){throw e})}function tl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Mn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Mn(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var rn=Math.random().toString(36).slice(2),pt="__reactFiber$"+rn,zn="__reactProps$"+rn,At="__reactContainer$"+rn,Hl="__reactEvents$"+rn,Ch="__reactListeners$"+rn,Ph="__reactHandles$"+rn;function cr(e){var t=e[pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[At]||r[pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ya(e);e!==null;){if(r=e[pt])return r;e=Ya(e)}return t}e=r,r=e.parentNode}return null}function to(e){return e=e[pt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ci(e){return e[zn]||null}var $l=[],Or=-1;function er(e){return{current:e}}function Z(e){0>Or||(e.current=$l[Or],$l[Or]=null,Or--)}function Y(e,t){Or++,$l[Or]=e.current,e.current=t}var Zt={},we=er(Zt),Be=er(!1),mr=Zt;function Kr(e,t){var r=e.type.contextTypes;if(!r)return Zt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function ii(){Z(Be),Z(we)}function qa(e,t,r){if(we.current!==Zt)throw Error(C(168));Y(we,t),Y(Be,r)}function pf(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(C(108,fp(e)||"Unknown",o));return ne({},r,n)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,mr=we.current,Y(we,e),Y(Be,Be.current),!0}function Za(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=pf(e,t,mr),n.__reactInternalMemoizedMergedChildContext=e,Z(Be),Z(we),Y(we,e)):Z(Be),Y(Be,r)}var kt=null,Pi=!1,rl=!1;function hf(e){kt===null?kt=[e]:kt.push(e)}function Ah(e){Pi=!0,hf(e)}function tr(){if(!rl&&kt!==null){rl=!0;var e=0,t=K;try{var r=kt;for(K=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}kt=null,Pi=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),Nc(bs,tr),o}finally{K=t,rl=!1}}return null}var Dr=[],Mr=0,si=null,ai=0,Ke=[],Qe=0,vr=null,Et=1,Tt="";function sr(e,t){Dr[Mr++]=ai,Dr[Mr++]=si,si=e,ai=t}function mf(e,t,r){Ke[Qe++]=Et,Ke[Qe++]=Tt,Ke[Qe++]=vr,vr=e;var n=Et;e=Tt;var o=32-lt(n)-1;n&=~(1<<o),r+=1;var i=32-lt(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Et=1<<32-lt(t)+o|r<<o|n,Tt=i+e}else Et=1<<i|r<<o|n,Tt=e}function Is(e){e.return!==null&&(sr(e,1),mf(e,1,0))}function Gs(e){for(;e===si;)si=Dr[--Mr],Dr[Mr]=null,ai=Dr[--Mr],Dr[Mr]=null;for(;e===vr;)vr=Ke[--Qe],Ke[Qe]=null,Tt=Ke[--Qe],Ke[Qe]=null,Et=Ke[--Qe],Ke[Qe]=null}var ze=null,Ge=null,ee=!1,it=null;function vf(e,t){var r=Ye(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ja(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ge=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vr!==null?{id:Et,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ye(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ze=e,Ge=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(ee){var t=Ge;if(t){var r=t;if(!Ja(e,t)){if(Xl(e))throw Error(C(418));t=Xt(r.nextSibling);var n=ze;t&&Ja(e,t)?vf(n,r):(e.flags=e.flags&-4097|2,ee=!1,ze=e)}}else{if(Xl(e))throw Error(C(418));e.flags=e.flags&-4097|2,ee=!1,ze=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function go(e){if(e!==ze)return!1;if(!ee)return eu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=Ge)){if(Xl(e))throw gf(),Error(C(418));for(;t;)vf(e,t),t=Xt(t.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ge=Xt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=ze?Xt(e.stateNode.nextSibling):null;return!0}function gf(){for(var e=Ge;e;)e=Xt(e.nextSibling)}function Qr(){Ge=ze=null,ee=!1}function zs(e){it===null?it=[e]:it.push(e)}var Fh=Ut.ReactCurrentBatchConfig;function fn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tu(e){var t=e._init;return t(e._payload)}function yf(e){function t(h,c){if(e){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function r(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function n(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function o(h,c){return h=Yt(h,c),h.index=0,h.sibling=null,h}function i(h,c,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=2,c):m):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,c,m,_){return c===null||c.tag!==6?(c=ul(m,h.mode,_),c.return=h,c):(c=o(c,m),c.return=h,c)}function a(h,c,m,_){var w=m.type;return w===Fr?p(h,c,m.props.children,_,m.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Mt&&tu(w)===c.type)?(_=o(c,m.props),_.ref=fn(h,c,m),_.return=h,_):(_=Xo(m.type,m.key,m.props,null,h.mode,_),_.ref=fn(h,c,m),_.return=h,_)}function u(h,c,m,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=cl(m,h.mode,_),c.return=h,c):(c=o(c,m.children||[]),c.return=h,c)}function p(h,c,m,_,w){return c===null||c.tag!==7?(c=hr(m,h.mode,_,w),c.return=h,c):(c=o(c,m),c.return=h,c)}function d(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ul(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lo:return m=Xo(c.type,c.key,c.props,null,h.mode,m),m.ref=fn(h,null,c),m.return=h,m;case Ar:return c=cl(c,h.mode,m),c.return=h,c;case Mt:var _=c._init;return d(h,_(c._payload),m)}if(gn(c)||ln(c))return c=hr(c,h.mode,m,null),c.return=h,c;yo(h,c)}return null}function f(h,c,m,_){var w=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(h,c,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:return m.key===w?a(h,c,m,_):null;case Ar:return m.key===w?u(h,c,m,_):null;case Mt:return w=m._init,f(h,c,w(m._payload),_)}if(gn(m)||ln(m))return w!==null?null:p(h,c,m,_,null);yo(h,m)}return null}function v(h,c,m,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(m)||null,s(c,h,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case lo:return h=h.get(_.key===null?m:_.key)||null,a(c,h,_,w);case Ar:return h=h.get(_.key===null?m:_.key)||null,u(c,h,_,w);case Mt:var S=_._init;return v(h,c,m,S(_._payload),w)}if(gn(_)||ln(_))return h=h.get(m)||null,p(c,h,_,w,null);yo(c,_)}return null}function g(h,c,m,_){for(var w=null,S=null,T=c,F=c=0,R=null;T!==null&&F<m.length;F++){T.index>F?(R=T,T=null):R=T.sibling;var D=f(h,T,m[F],_);if(D===null){T===null&&(T=R);break}e&&T&&D.alternate===null&&t(h,T),c=i(D,c,F),S===null?w=D:S.sibling=D,S=D,T=R}if(F===m.length)return r(h,T),ee&&sr(h,F),w;if(T===null){for(;F<m.length;F++)T=d(h,m[F],_),T!==null&&(c=i(T,c,F),S===null?w=T:S.sibling=T,S=T);return ee&&sr(h,F),w}for(T=n(h,T);F<m.length;F++)R=v(T,h,F,m[F],_),R!==null&&(e&&R.alternate!==null&&T.delete(R.key===null?F:R.key),c=i(R,c,F),S===null?w=R:S.sibling=R,S=R);return e&&T.forEach(function(W){return t(h,W)}),ee&&sr(h,F),w}function x(h,c,m,_){var w=ln(m);if(typeof w!="function")throw Error(C(150));if(m=w.call(m),m==null)throw Error(C(151));for(var S=w=null,T=c,F=c=0,R=null,D=m.next();T!==null&&!D.done;F++,D=m.next()){T.index>F?(R=T,T=null):R=T.sibling;var W=f(h,T,D.value,_);if(W===null){T===null&&(T=R);break}e&&T&&W.alternate===null&&t(h,T),c=i(W,c,F),S===null?w=W:S.sibling=W,S=W,T=R}if(D.done)return r(h,T),ee&&sr(h,F),w;if(T===null){for(;!D.done;F++,D=m.next())D=d(h,D.value,_),D!==null&&(c=i(D,c,F),S===null?w=D:S.sibling=D,S=D);return ee&&sr(h,F),w}for(T=n(h,T);!D.done;F++,D=m.next())D=v(T,h,F,D.value,_),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?F:D.key),c=i(D,c,F),S===null?w=D:S.sibling=D,S=D);return e&&T.forEach(function(Q){return t(h,Q)}),ee&&sr(h,F),w}function E(h,c,m,_){if(typeof m=="object"&&m!==null&&m.type===Fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:e:{for(var w=m.key,S=c;S!==null;){if(S.key===w){if(w=m.type,w===Fr){if(S.tag===7){r(h,S.sibling),c=o(S,m.props.children),c.return=h,h=c;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Mt&&tu(w)===S.type){r(h,S.sibling),c=o(S,m.props),c.ref=fn(h,S,m),c.return=h,h=c;break e}r(h,S);break}else t(h,S);S=S.sibling}m.type===Fr?(c=hr(m.props.children,h.mode,_,m.key),c.return=h,h=c):(_=Xo(m.type,m.key,m.props,null,h.mode,_),_.ref=fn(h,c,m),_.return=h,h=_)}return l(h);case Ar:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){r(h,c.sibling),c=o(c,m.children||[]),c.return=h,h=c;break e}else{r(h,c);break}else t(h,c);c=c.sibling}c=cl(m,h.mode,_),c.return=h,h=c}return l(h);case Mt:return S=m._init,E(h,c,S(m._payload),_)}if(gn(m))return g(h,c,m,_);if(ln(m))return x(h,c,m,_);yo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(r(h,c.sibling),c=o(c,m),c.return=h,h=c):(r(h,c),c=ul(m,h.mode,_),c.return=h,h=c),l(h)):r(h,c)}return E}var Yr=yf(!0),Sf=yf(!1),ui=er(null),ci=null,Lr=null,js=null;function Ws(){js=Lr=ci=null}function Hs(e){var t=ui.current;Z(ui),e._currentValue=t}function Kl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Hr(e,t){ci=e,js=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(js!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(ci===null)throw Error(C(308));Lr=e,ci.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var fr=null;function $s(e){fr===null?fr=[e]:fr.push(e)}function xf(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,$s(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ft(e,n)}function Ft(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Lt=!1;function Xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ft(e,r)}return o=n.interleaved,o===null?(t.next=t,$s(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ft(e,r)}function Go(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Us(e,r)}}function ru(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fi(e,t,r,n){var o=e.updateQueue;Lt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;l=0,p=u=a=null,s=i;do{var f=s.lane,v=s.eventTime;if((n&f)===f){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(f=t,v=r,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(v,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(v,d,f):g,f==null)break e;d=ne({},d,f);break e;case 2:Lt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=v,a=d):p=p.next=v,l|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(p===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yr|=l,e.lanes=l,e.memoizedState=d}}function nu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(C(191,o));o.call(n)}}}var ro={},vt=er(ro),jn=er(ro),Wn=er(ro);function dr(e){if(e===ro)throw Error(C(174));return e}function Vs(e,t){switch(Y(Wn,t),Y(jn,e),Y(vt,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}Z(vt),Y(vt,t)}function qr(){Z(vt),Z(jn),Z(Wn)}function kf(e){dr(Wn.current);var t=dr(vt.current),r=Al(t,e.type);t!==r&&(Y(jn,e),Y(vt,r))}function Ks(e){jn.current===e&&(Z(vt),Z(jn))}var te=er(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function Qs(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var zo=Ut.ReactCurrentDispatcher,ol=Ut.ReactCurrentBatchConfig,gr=0,re=null,fe=null,pe=null,pi=!1,Cn=!1,Hn=0,bh=0;function xe(){throw Error(C(321))}function Ys(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!at(e[r],t[r]))return!1;return!0}function qs(e,t,r,n,o,i){if(gr=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?Oh:Dh,e=r(n,o),Cn){i=0;do{if(Cn=!1,Hn=0,25<=i)throw Error(C(301));i+=1,pe=fe=null,t.updateQueue=null,zo.current=Mh,e=r(n,o)}while(Cn)}if(zo.current=hi,t=fe!==null&&fe.next!==null,gr=0,pe=fe=re=null,pi=!1,t)throw Error(C(300));return e}function Zs(){var e=Hn!==0;return Hn=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?re.memoizedState=pe=e:pe=pe.next=e,pe}function Je(){if(fe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=pe===null?re.memoizedState:pe.next;if(t!==null)pe=t,fe=e;else{if(e===null)throw Error(C(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},pe===null?re.memoizedState=pe=e:pe=pe.next=e}return pe}function $n(e,t){return typeof t=="function"?t(e):t}function il(e){var t=Je(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=fe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((gr&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=d,l=n):a=a.next=d,re.lanes|=p,yr|=p}u=u.next}while(u!==null&&u!==i);a===null?l=n:a.next=s,at(n,t.memoizedState)||(Re=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,yr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ll(e){var t=Je(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);at(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function wf(){}function Ef(e,t){var r=re,n=Je(),o=t(),i=!at(n.memoizedState,o);if(i&&(n.memoizedState=o,Re=!0),n=n.queue,Js(Pf.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(r.flags|=2048,Xn(9,Cf.bind(null,r,n,o,t),void 0,null),he===null)throw Error(C(349));gr&30||Tf(r,t,o)}return o}function Tf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Cf(e,t,r,n){t.value=r,t.getSnapshot=n,Af(t)&&Ff(e)}function Pf(e,t,r){return r(function(){Af(t)&&Ff(e)})}function Af(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!at(e,r)}catch{return!0}}function Ff(e){var t=Ft(e,1);t!==null&&st(t,e,1,-1)}function ou(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=Bh.bind(null,re,e),[t.memoizedState,e]}function Xn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function bf(){return Je().memoizedState}function jo(e,t,r,n){var o=dt();re.flags|=e,o.memoizedState=Xn(1|t,r,void 0,n===void 0?null:n)}function Ai(e,t,r,n){var o=Je();n=n===void 0?null:n;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,n!==null&&Ys(n,l.deps)){o.memoizedState=Xn(t,r,i,n);return}}re.flags|=e,o.memoizedState=Xn(1|t,r,i,n)}function iu(e,t){return jo(8390656,8,e,t)}function Js(e,t){return Ai(2048,8,e,t)}function Uf(e,t){return Ai(4,2,e,t)}function Rf(e,t){return Ai(4,4,e,t)}function Bf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Of(e,t,r){return r=r!=null?r.concat([e]):null,Ai(4,4,Bf.bind(null,t,e),r)}function ea(){}function Df(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ys(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Mf(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ys(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Lf(e,t,r){return gr&21?(at(r,t)||(r=zc(),re.lanes|=r,yr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=r)}function Uh(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var n=ol.transition;ol.transition={};try{e(!1),t()}finally{K=r,ol.transition=n}}function Nf(){return Je().memoizedState}function Rh(e,t,r){var n=Qt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},If(e))Gf(t,r);else if(r=xf(e,t,r,n),r!==null){var o=Ce();st(r,e,n,o),zf(r,t,n)}}function Bh(e,t,r){var n=Qt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(If(e))Gf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,r);if(o.hasEagerState=!0,o.eagerState=s,at(s,l)){var a=t.interleaved;a===null?(o.next=o,$s(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}r=xf(e,t,o,n),r!==null&&(o=Ce(),st(r,e,n,o),zf(r,t,n))}}function If(e){var t=e.alternate;return e===re||t!==null&&t===re}function Gf(e,t){Cn=pi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function zf(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Us(e,r)}}var hi={readContext:Ze,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Oh={readContext:Ze,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:iu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,jo(4194308,4,Bf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var r=dt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=dt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Rh.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:ea,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=Uh.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=re,o=dt();if(ee){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),he===null)throw Error(C(349));gr&30||Tf(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,iu(Pf.bind(null,n,i,e),[e]),n.flags|=2048,Xn(9,Cf.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=dt(),t=he.identifierPrefix;if(ee){var r=Tt,n=Et;r=(n&~(1<<32-lt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dh={readContext:Ze,useCallback:Df,useContext:Ze,useEffect:Js,useImperativeHandle:Of,useInsertionEffect:Uf,useLayoutEffect:Rf,useMemo:Mf,useReducer:il,useRef:bf,useState:function(){return il($n)},useDebugValue:ea,useDeferredValue:function(e){var t=Je();return Lf(t,fe.memoizedState,e)},useTransition:function(){var e=il($n)[0],t=Je().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:Ef,useId:Nf,unstable_isNewReconciler:!1},Mh={readContext:Ze,useCallback:Df,useContext:Ze,useEffect:Js,useImperativeHandle:Of,useInsertionEffect:Uf,useLayoutEffect:Rf,useMemo:Mf,useReducer:ll,useRef:bf,useState:function(){return ll($n)},useDebugValue:ea,useDeferredValue:function(e){var t=Je();return fe===null?t.memoizedState=e:Lf(t,fe.memoizedState,e)},useTransition:function(){var e=ll($n)[0],t=Je().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:Ef,useId:Nf,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ql(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ne({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Fi={isMounted:function(e){return(e=e._reactInternals)?_r(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ce(),o=Qt(e),i=Ct(n,o);i.payload=t,r!=null&&(i.callback=r),t=Vt(e,i,o),t!==null&&(st(t,e,o,n),Go(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ce(),o=Qt(e),i=Ct(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Vt(e,i,o),t!==null&&(st(t,e,o,n),Go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ce(),n=Qt(e),o=Ct(r,n);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,n),t!==null&&(st(t,e,n,r),Go(t,e,n))}};function lu(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!Nn(r,n)||!Nn(o,i):!0}function jf(e,t,r){var n=!1,o=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(o=Oe(t)?mr:we.current,n=t.contextTypes,i=(n=n!=null)?Kr(e,o):Zt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function su(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Fi.enqueueReplaceState(t,t.state,null)}function Yl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Xs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ze(i):(i=Oe(t)?mr:we.current,o.context=Kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ql(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Fi.enqueueReplaceState(o,o.state,null),fi(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t){try{var r="",n=t;do r+=cp(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Lh=typeof WeakMap=="function"?WeakMap:Map;function Wf(e,t,r){r=Ct(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vi||(vi=!0,ss=n),ql(e,t)},r}function Hf(e,t,r){r=Ct(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ql(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ql(e,t),typeof n!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function au(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Lh;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=qh.bind(null,e,t,r),t.then(e,e))}function uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cu(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ct(-1,1),t.tag=2,Vt(r,t,1))),r.lanes|=1),e)}var Nh=Ut.ReactCurrentOwner,Re=!1;function Ee(e,t,r,n){t.child=e===null?Sf(t,null,r,n):Yr(t,e.child,r,n)}function fu(e,t,r,n,o){r=r.render;var i=t.ref;return Hr(t,o),n=qs(e,t,r,n,i,o),r=Zs(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(ee&&r&&Is(t),t.flags|=1,Ee(e,t,n,o),t.child)}function du(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,$f(e,t,i,n,o)):(e=Xo(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Nn,r(l,n)&&e.ref===t.ref)return bt(e,t,o)}return t.flags|=1,e=Yt(i,n),e.ref=t.ref,e.return=t,t.child=e}function $f(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Nn(i,n)&&e.ref===t.ref)if(Re=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,bt(e,t,o)}return Zl(e,t,r,n,o)}function Xf(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Ir,Ie),Ie|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Ir,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Y(Ir,Ie),Ie|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Y(Ir,Ie),Ie|=n;return Ee(e,t,o,r),t.child}function Vf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,r,n,o){var i=Oe(r)?mr:we.current;return i=Kr(t,i),Hr(t,o),r=qs(e,t,r,n,i,o),n=Zs(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(ee&&n&&Is(t),t.flags|=1,Ee(e,t,r,o),t.child)}function pu(e,t,r,n,o){if(Oe(r)){var i=!0;li(t)}else i=!1;if(Hr(t,o),t.stateNode===null)Wo(e,t),jf(t,r,n),Yl(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Oe(r)?mr:we.current,u=Kr(t,u));var p=r.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||a!==u)&&su(t,l,n,u),Lt=!1;var f=t.memoizedState;l.state=f,fi(t,n,l,o),a=t.memoizedState,s!==n||f!==a||Be.current||Lt?(typeof p=="function"&&(Ql(t,r,p,n),a=t.memoizedState),(s=Lt||lu(t,r,s,n,f,a,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),l.props=n,l.state=a,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,_f(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:nt(t.type,s),l.props=u,d=t.pendingProps,f=l.context,a=r.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Oe(r)?mr:we.current,a=Kr(t,a));var v=r.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||f!==a)&&su(t,l,n,a),Lt=!1,f=t.memoizedState,l.state=f,fi(t,n,l,o);var g=t.memoizedState;s!==d||f!==g||Be.current||Lt?(typeof v=="function"&&(Ql(t,r,v,n),g=t.memoizedState),(u=Lt||lu(t,r,u,n,f,g,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),l.props=n,l.state=g,l.context=a,n=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return Jl(e,t,r,n,i,o)}function Jl(e,t,r,n,o,i){Vf(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&Za(t,r,!1),bt(e,t,i);n=t.stateNode,Nh.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Yr(t,e.child,null,i),t.child=Yr(t,null,s,i)):Ee(e,t,s,i),t.memoizedState=n.state,o&&Za(t,r,!0),t.child}function Kf(e){var t=e.stateNode;t.pendingContext?qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qa(e,t.context,!1),Vs(e,t.containerInfo)}function hu(e,t,r,n,o){return Qr(),zs(o),t.flags|=256,Ee(e,t,r,n),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qf(e,t,r){var n=t.pendingProps,o=te.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(te,o&1),e===null)return Vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ri(l,n,0,null),e=hr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ts(r),t.memoizedState=es,e):ta(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ih(e,t,l,n,s,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=Yt(o,a),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Yt(s,i):(i=hr(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?ts(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=es,n}return i=e.child,e=i.sibling,n=Yt(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ta(e,t){return t=Ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,r,n){return n!==null&&zs(n),Yr(t,e.child,null,r),e=ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ih(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=sl(Error(C(422))),So(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Ri({mode:"visible",children:n.children},o,0,null),i=hr(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Yr(t,e.child,null,l),t.child.memoizedState=ts(l),t.memoizedState=es,i);if(!(t.mode&1))return So(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(C(419)),n=sl(i,n,void 0),So(e,t,l,n)}if(s=(l&e.childLanes)!==0,Re||s){if(n=he,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ft(e,o),st(n,e,o,-1))}return sa(),n=sl(Error(C(421))),So(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=Xt(o.nextSibling),ze=t,ee=!0,it=null,e!==null&&(Ke[Qe++]=Et,Ke[Qe++]=Tt,Ke[Qe++]=vr,Et=e.id,Tt=e.overflow,vr=t),t=ta(t,n.children),t.flags|=4096,t)}function mu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Kl(e.return,t,r)}function al(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Yf(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Ee(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,r,t);else if(e.tag===19)mu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Y(te,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&di(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),al(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&di(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}al(t,!0,r,null,i);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=Yt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Gh(e,t,r){switch(t.tag){case 3:Kf(t),Qr();break;case 5:kf(t);break;case 1:Oe(t.type)&&li(t);break;case 4:Vs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Y(ui,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?Qf(e,t,r):(Y(te,te.current&1),e=bt(e,t,r),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Yf(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,r)}return bt(e,t,r)}var qf,rs,Zf,Jf;qf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};rs=function(){};Zf=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,dr(vt.current);var i=null;switch(r){case"input":o=El(e,o),n=El(e,n),i=[];break;case"select":o=ne({},o,{value:void 0}),n=ne({},n,{value:void 0}),i=[];break;case"textarea":o=Pl(e,o),n=Pl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=oi)}Fl(r,n);var l;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Un.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var a=n[u];if(s=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(r||(r={}),r[l]=a[l])}else r||(i||(i=[]),i.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Un.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Jf=function(e,t,r,n){r!==n&&(t.flags|=4)};function dn(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function zh(e,t,r){var n=t.pendingProps;switch(Gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Oe(t.type)&&ii(),_e(t),null;case 3:return n=t.stateNode,qr(),Z(Be),Z(we),Qs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(cs(it),it=null))),rs(e,t),_e(t),null;case 5:Ks(t);var o=dr(Wn.current);if(r=t.type,e!==null&&t.stateNode!=null)Zf(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return _e(t),null}if(e=dr(vt.current),go(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[pt]=t,n[zn]=i,e=(t.mode&1)!==0,r){case"dialog":q("cancel",n),q("close",n);break;case"iframe":case"object":case"embed":q("load",n);break;case"video":case"audio":for(o=0;o<Sn.length;o++)q(Sn[o],n);break;case"source":q("error",n);break;case"img":case"image":case"link":q("error",n),q("load",n);break;case"details":q("toggle",n);break;case"input":Ea(n,i),q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},q("invalid",n);break;case"textarea":Ca(n,i),q("invalid",n)}Fl(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&vo(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&vo(n.textContent,s,e),o=["children",""+s]):Un.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&q("scroll",n)}switch(r){case"input":so(n),Ta(n,i,!0);break;case"textarea":so(n),Pa(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=oi)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[pt]=t,e[zn]=n,qf(e,t,!1,!1),t.stateNode=e;e:{switch(l=bl(r,n),r){case"dialog":q("cancel",e),q("close",e),o=n;break;case"iframe":case"object":case"embed":q("load",e),o=n;break;case"video":case"audio":for(o=0;o<Sn.length;o++)q(Sn[o],e);o=n;break;case"source":q("error",e),o=n;break;case"img":case"image":case"link":q("error",e),q("load",e),o=n;break;case"details":q("toggle",e),o=n;break;case"input":Ea(e,n),o=El(e,n),q("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ne({},n,{value:void 0}),q("invalid",e);break;case"textarea":Ca(e,n),o=Pl(e,n),q("invalid",e);break;default:o=n}Fl(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Fc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Pc(e,a)):i==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Rn(e,a):typeof a=="number"&&Rn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Un.hasOwnProperty(i)?a!=null&&i==="onScroll"&&q("scroll",e):a!=null&&Ts(e,i,a,l))}switch(r){case"input":so(e),Ta(e,n,!1);break;case"textarea":so(e),Pa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Gr(e,!!n.multiple,i,!1):n.defaultValue!=null&&Gr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Jf(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=dr(Wn.current),dr(vt.current),go(t)){if(n=t.stateNode,r=t.memoizedProps,n[pt]=t,(i=n.nodeValue!==r)&&(e=ze,e!==null))switch(e.tag){case 3:vo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[pt]=t,t.stateNode=n}return _e(t),null;case 13:if(Z(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ge!==null&&t.mode&1&&!(t.flags&128))gf(),Qr(),t.flags|=98560,i=!1;else if(i=go(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[pt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else it!==null&&(cs(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):sa())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return qr(),rs(e,t),e===null&&In(t.stateNode.containerInfo),_e(t),null;case 10:return Hs(t.type._context),_e(t),null;case 17:return Oe(t.type)&&ii(),_e(t),null;case 19:if(Z(te),i=t.memoizedState,i===null)return _e(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)dn(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=di(e),l!==null){for(t.flags|=128,dn(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>Jr&&(t.flags|=128,n=!0,dn(i,!1),t.lanes=4194304)}else{if(!n)if(e=di(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ee)return _e(t),null}else 2*se()-i.renderingStartTime>Jr&&r!==1073741824&&(t.flags|=128,n=!0,dn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,r=te.current,Y(te,n?r&1|2:r&1),t):(_e(t),null);case 22:case 23:return la(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ie&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function jh(e,t){switch(Gs(t),t.tag){case 1:return Oe(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),Z(Be),Z(we),Qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ks(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return qr(),null;case 10:return Hs(t.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var xo=!1,ke=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,B=null;function Nr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ie(e,t,n)}else r.current=null}function ns(e,t,r){try{r()}catch(n){ie(e,t,n)}}var vu=!1;function Hh(e,t){if(Gl=ti,e=nf(),Ns(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,s=-1,a=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var v;d!==r||o!==0&&d.nodeType!==3||(s=l+o),d!==i||n!==0&&d.nodeType!==3||(a=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===r&&++u===o&&(s=l),f===i&&++p===n&&(a=l),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}r=s===-1||a===-1?null:{start:s,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(zl={focusedElem:e,selectionRange:r},ti=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,E=g.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:nt(t.type,x),E);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){ie(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return g=vu,vu=!1,g}function Pn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ns(t,r,i)}o=o.next}while(o!==n)}}function bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function os(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[zn],delete t[Hl],delete t[Ch],delete t[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function td(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=oi));else if(n!==4&&(e=e.child,e!==null))for(is(e,t,r),e=e.sibling;e!==null;)is(e,t,r),e=e.sibling}function ls(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ls(e,t,r),e=e.sibling;e!==null;)ls(e,t,r),e=e.sibling}var ge=null,ot=!1;function Bt(e,t,r){for(r=r.child;r!==null;)rd(e,t,r),r=r.sibling}function rd(e,t,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ki,r)}catch{}switch(r.tag){case 5:ke||Nr(r,t);case 6:var n=ge,o=ot;ge=null,Bt(e,t,r),ge=n,ot=o,ge!==null&&(ot?(e=ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ge.removeChild(r.stateNode));break;case 18:ge!==null&&(ot?(e=ge,r=r.stateNode,e.nodeType===8?tl(e.parentNode,r):e.nodeType===1&&tl(e,r),Mn(e)):tl(ge,r.stateNode));break;case 4:n=ge,o=ot,ge=r.stateNode.containerInfo,ot=!0,Bt(e,t,r),ge=n,ot=o;break;case 0:case 11:case 14:case 15:if(!ke&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ns(r,t,l),o=o.next}while(o!==n)}Bt(e,t,r);break;case 1:if(!ke&&(Nr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ie(r,t,s)}Bt(e,t,r);break;case 21:Bt(e,t,r);break;case 22:r.mode&1?(ke=(n=ke)||r.memoizedState!==null,Bt(e,t,r),ke=n):Bt(e,t,r);break;default:Bt(e,t,r)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wh),t.forEach(function(n){var o=Jh.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function tt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,ot=!1;break e;case 3:ge=s.stateNode.containerInfo,ot=!0;break e;case 4:ge=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(ge===null)throw Error(C(160));rd(i,l,o),ge=null,ot=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}function nd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ft(e),n&4){try{Pn(3,e,e.return),bi(3,e)}catch(x){ie(e,e.return,x)}try{Pn(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:tt(t,e),ft(e),n&512&&r!==null&&Nr(r,r.return);break;case 5:if(tt(t,e),ft(e),n&512&&r!==null&&Nr(r,r.return),e.flags&32){var o=e.stateNode;try{Rn(o,"")}catch(x){ie(e,e.return,x)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ec(o,i),bl(s,l);var u=bl(s,i);for(l=0;l<a.length;l+=2){var p=a[l],d=a[l+1];p==="style"?Fc(o,d):p==="dangerouslySetInnerHTML"?Pc(o,d):p==="children"?Rn(o,d):Ts(o,p,d,u)}switch(s){case"input":Tl(o,i);break;case"textarea":Tc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Gr(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?Gr(o,!!i.multiple,i.defaultValue,!0):Gr(o,!!i.multiple,i.multiple?[]:"",!1))}o[zn]=i}catch(x){ie(e,e.return,x)}}break;case 6:if(tt(t,e),ft(e),n&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ie(e,e.return,x)}}break;case 3:if(tt(t,e),ft(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:tt(t,e),ft(e);break;case 13:tt(t,e),ft(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(oa=se())),n&4&&yu(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(ke=(u=ke)||p,tt(t,e),ke=u):tt(t,e),ft(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(B=e,p=e.child;p!==null;){for(d=B=p;B!==null;){switch(f=B,v=f.child,f.tag){case 0:case 11:case 14:case 15:Pn(4,f,f.return);break;case 1:Nr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){n=f,r=f.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){ie(n,r,x)}}break;case 5:Nr(f,f.return);break;case 22:if(f.memoizedState!==null){xu(d);continue}}v!==null?(v.return=f,B=v):xu(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,a=d.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ac("display",l))}catch(x){ie(e,e.return,x)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ie(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tt(t,e),ft(e),n&4&&yu(e);break;case 21:break;default:tt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(td(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Rn(o,""),n.flags&=-33);var i=gu(e);ls(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,s=gu(e);is(e,s,l);break;default:throw Error(C(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $h(e,t,r){B=e,od(e)}function od(e,t,r){for(var n=(e.mode&1)!==0;B!==null;){var o=B,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||xo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ke;s=xo;var u=ke;if(xo=l,(ke=a)&&!u)for(B=o;B!==null;)l=B,a=l.child,l.tag===22&&l.memoizedState!==null?_u(o):a!==null?(a.return=l,B=a):_u(o);for(;i!==null;)B=i,od(i),i=i.sibling;B=o,xo=s,ke=u}Su(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,B=i):Su(e)}}function Su(e){for(;B!==null;){var t=B;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||bi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ke)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:nt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&nu(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}nu(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Mn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ke||t.flags&512&&os(t)}catch(f){ie(t,t.return,f)}}if(t===e){B=null;break}if(r=t.sibling,r!==null){r.return=t.return,B=r;break}B=t.return}}function xu(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var r=t.sibling;if(r!==null){r.return=t.return,B=r;break}B=t.return}}function _u(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{bi(4,t)}catch(a){ie(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(a){ie(t,o,a)}}var i=t.return;try{os(t)}catch(a){ie(t,i,a)}break;case 5:var l=t.return;try{os(t)}catch(a){ie(t,l,a)}}}catch(a){ie(t,t.return,a)}if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}var Xh=Math.ceil,mi=Ut.ReactCurrentDispatcher,ra=Ut.ReactCurrentOwner,qe=Ut.ReactCurrentBatchConfig,$=0,he=null,ae=null,ye=0,Ie=0,Ir=er(0),de=0,Vn=null,yr=0,Ui=0,na=0,An=null,Ue=null,oa=0,Jr=1/0,_t=null,vi=!1,ss=null,Kt=null,_o=!1,jt=null,gi=0,Fn=0,as=null,Ho=-1,$o=0;function Ce(){return $&6?se():Ho!==-1?Ho:Ho=se()}function Qt(e){return e.mode&1?$&2&&ye!==0?ye&-ye:Fh.transition!==null?($o===0&&($o=zc()),$o):(e=K,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function st(e,t,r,n){if(50<Fn)throw Fn=0,as=null,Error(C(185));Jn(e,r,n),(!($&2)||e!==he)&&(e===he&&(!($&2)&&(Ui|=r),de===4&&It(e,ye)),De(e,n),r===1&&$===0&&!(t.mode&1)&&(Jr=se()+500,Pi&&tr()))}function De(e,t){var r=e.callbackNode;Fp(e,t);var n=ei(e,e===he?ye:0);if(n===0)r!==null&&ba(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ba(r),t===1)e.tag===0?Ah(ku.bind(null,e)):hf(ku.bind(null,e)),Eh(function(){!($&6)&&tr()}),r=null;else{switch(jc(n)){case 1:r=bs;break;case 4:r=Ic;break;case 16:r=Jo;break;case 536870912:r=Gc;break;default:r=Jo}r=dd(r,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function id(e,t){if(Ho=-1,$o=0,$&6)throw Error(C(327));var r=e.callbackNode;if($r()&&e.callbackNode!==r)return null;var n=ei(e,e===he?ye:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=yi(e,n);else{t=n;var o=$;$|=2;var i=sd();(he!==e||ye!==t)&&(_t=null,Jr=se()+500,pr(e,t));do try{Qh();break}catch(s){ld(e,s)}while(!0);Ws(),mi.current=i,$=o,ae!==null?t=0:(he=null,ye=0,t=de)}if(t!==0){if(t===2&&(o=Dl(e),o!==0&&(n=o,t=us(e,o))),t===1)throw r=Vn,pr(e,0),It(e,n),De(e,se()),r;if(t===6)It(e,n);else{if(o=e.current.alternate,!(n&30)&&!Vh(o)&&(t=yi(e,n),t===2&&(i=Dl(e),i!==0&&(n=i,t=us(e,i))),t===1))throw r=Vn,pr(e,0),It(e,n),De(e,se()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:ar(e,Ue,_t);break;case 3:if(It(e,n),(n&130023424)===n&&(t=oa+500-se(),10<t)){if(ei(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wl(ar.bind(null,e,Ue,_t),t);break}ar(e,Ue,_t);break;case 4:if(It(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-lt(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=se()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Xh(n/1960))-n,10<n){e.timeoutHandle=Wl(ar.bind(null,e,Ue,_t),n);break}ar(e,Ue,_t);break;case 5:ar(e,Ue,_t);break;default:throw Error(C(329))}}}return De(e,se()),e.callbackNode===r?id.bind(null,e):null}function us(e,t){var r=An;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=yi(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&cs(t)),e}function cs(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Vh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!at(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~na,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-lt(t),n=1<<r;e[r]=-1,t&=~n}}function ku(e){if($&6)throw Error(C(327));$r();var t=ei(e,0);if(!(t&1))return De(e,se()),null;var r=yi(e,t);if(e.tag!==0&&r===2){var n=Dl(e);n!==0&&(t=n,r=us(e,n))}if(r===1)throw r=Vn,pr(e,0),It(e,t),De(e,se()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,Ue,_t),De(e,se()),null}function ia(e,t){var r=$;$|=1;try{return e(t)}finally{$=r,$===0&&(Jr=se()+500,Pi&&tr())}}function Sr(e){jt!==null&&jt.tag===0&&!($&6)&&$r();var t=$;$|=1;var r=qe.transition,n=K;try{if(qe.transition=null,K=1,e)return e()}finally{K=n,qe.transition=r,$=t,!($&6)&&tr()}}function la(){Ie=Ir.current,Z(Ir)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,wh(r)),ae!==null)for(r=ae.return;r!==null;){var n=r;switch(Gs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ii();break;case 3:qr(),Z(Be),Z(we),Qs();break;case 5:Ks(n);break;case 4:qr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Hs(n.type._context);break;case 22:case 23:la()}r=r.return}if(he=e,ae=e=Yt(e.current,null),ye=Ie=t,de=0,Vn=null,na=Ui=yr=0,Ue=An=null,fr!==null){for(t=0;t<fr.length;t++)if(r=fr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}fr=null}return e}function ld(e,t){do{var r=ae;try{if(Ws(),zo.current=hi,pi){for(var n=re.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}pi=!1}if(gr=0,pe=fe=re=null,Cn=!1,Hn=0,ra.current=null,r===null||r.return===null){de=1,Vn=t,ae=null;break}e:{var i=e,l=r.return,s=r,a=t;if(t=ye,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=uu(l);if(v!==null){v.flags&=-257,cu(v,l,s,i,t),v.mode&1&&au(i,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(a),t.updateQueue=x}else g.add(a);break e}else{if(!(t&1)){au(i,u,t),sa();break e}a=Error(C(426))}}else if(ee&&s.mode&1){var E=uu(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),cu(E,l,s,i,t),zs(Zr(a,s));break e}}i=a=Zr(a,s),de!==4&&(de=2),An===null?An=[i]:An.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Wf(i,a,t);ru(i,h);break e;case 1:s=a;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kt===null||!Kt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Hf(i,s,t);ru(i,_);break e}}i=i.return}while(i!==null)}ud(r)}catch(w){t=w,ae===r&&r!==null&&(ae=r=r.return);continue}break}while(!0)}function sd(){var e=mi.current;return mi.current=hi,e===null?hi:e}function sa(){(de===0||de===3||de===2)&&(de=4),he===null||!(yr&268435455)&&!(Ui&268435455)||It(he,ye)}function yi(e,t){var r=$;$|=2;var n=sd();(he!==e||ye!==t)&&(_t=null,pr(e,t));do try{Kh();break}catch(o){ld(e,o)}while(!0);if(Ws(),$=r,mi.current=n,ae!==null)throw Error(C(261));return he=null,ye=0,de}function Kh(){for(;ae!==null;)ad(ae)}function Qh(){for(;ae!==null&&!xp();)ad(ae)}function ad(e){var t=fd(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?ud(e):ae=t,ra.current=null}function ud(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=jh(r,t),r!==null){r.flags&=32767,ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ae=null;return}}else if(r=zh(r,t,Ie),r!==null){ae=r;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);de===0&&(de=5)}function ar(e,t,r){var n=K,o=qe.transition;try{qe.transition=null,K=1,Yh(e,t,r,n)}finally{qe.transition=o,K=n}return null}function Yh(e,t,r,n){do $r();while(jt!==null);if($&6)throw Error(C(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(bp(e,i),e===he&&(ae=he=null,ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_o||(_o=!0,dd(Jo,function(){return $r(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=qe.transition,qe.transition=null;var l=K;K=1;var s=$;$|=4,ra.current=null,Hh(e,r),nd(r,e),vh(zl),ti=!!Gl,zl=Gl=null,e.current=r,$h(r),_p(),$=s,K=l,qe.transition=i}else e.current=r;if(_o&&(_o=!1,jt=e,gi=o),i=e.pendingLanes,i===0&&(Kt=null),Ep(r.stateNode),De(e,se()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=ss,ss=null,e;return gi&1&&e.tag!==0&&$r(),i=e.pendingLanes,i&1?e===as?Fn++:(Fn=0,as=e):Fn=0,tr(),null}function $r(){if(jt!==null){var e=jc(gi),t=qe.transition,r=K;try{if(qe.transition=null,K=16>e?16:e,jt===null)var n=!1;else{if(e=jt,jt=null,gi=0,$&6)throw Error(C(331));var o=$;for($|=4,B=e.current;B!==null;){var i=B,l=i.child;if(B.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(B=u;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:Pn(8,p,i)}var d=p.child;if(d!==null)d.return=p,B=d;else for(;B!==null;){p=B;var f=p.sibling,v=p.return;if(ed(p),p===u){B=null;break}if(f!==null){f.return=v,B=f;break}B=v}}}var g=i.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}B=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,B=l;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,B=h;break e}B=i.return}}var c=e.current;for(B=c;B!==null;){l=B;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,B=m;else e:for(l=c;B!==null;){if(s=B,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bi(9,s)}}catch(w){ie(s,s.return,w)}if(s===l){B=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,B=_;break e}B=s.return}}if($=o,tr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ki,e)}catch{}n=!0}return n}finally{K=r,qe.transition=t}}return!1}function wu(e,t,r){t=Zr(r,t),t=Wf(e,t,1),e=Vt(e,t,1),t=Ce(),e!==null&&(Jn(e,1,t),De(e,t))}function ie(e,t,r){if(e.tag===3)wu(e,e,r);else for(;t!==null;){if(t.tag===3){wu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Kt===null||!Kt.has(n))){e=Zr(r,e),e=Hf(t,e,1),t=Vt(t,e,1),e=Ce(),t!==null&&(Jn(t,1,e),De(t,e));break}}t=t.return}}function qh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&r,he===e&&(ye&r)===r&&(de===4||de===3&&(ye&130023424)===ye&&500>se()-oa?pr(e,0):na|=r),De(e,t)}function cd(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var r=Ce();e=Ft(e,t),e!==null&&(Jn(e,t,r),De(e,r))}function Zh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),cd(e,r)}function Jh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),cd(e,r)}var fd;fd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Re=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Re=!1,Gh(e,t,r);Re=!!(e.flags&131072)}else Re=!1,ee&&t.flags&1048576&&mf(t,ai,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Wo(e,t),e=t.pendingProps;var o=Kr(t,we.current);Hr(t,r),o=qs(null,t,n,e,o,r);var i=Zs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(n)?(i=!0,li(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xs(t),o.updater=Fi,t.stateNode=o,o._reactInternals=t,Yl(t,n,e,r),t=Jl(null,t,n,!0,i,r)):(t.tag=0,ee&&i&&Is(t),Ee(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Wo(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=tm(n),e=nt(n,e),o){case 0:t=Zl(null,t,n,e,r);break e;case 1:t=pu(null,t,n,e,r);break e;case 11:t=fu(null,t,n,e,r);break e;case 14:t=du(null,t,n,nt(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:nt(n,o),Zl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:nt(n,o),pu(e,t,n,o,r);case 3:e:{if(Kf(t),e===null)throw Error(C(387));n=t.pendingProps,i=t.memoizedState,o=i.element,_f(e,t),fi(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Zr(Error(C(423)),t),t=hu(e,t,n,r,o);break e}else if(n!==o){o=Zr(Error(C(424)),t),t=hu(e,t,n,r,o);break e}else for(Ge=Xt(t.stateNode.containerInfo.firstChild),ze=t,ee=!0,it=null,r=Sf(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Qr(),n===o){t=bt(e,t,r);break e}Ee(e,t,n,r)}t=t.child}return t;case 5:return kf(t),e===null&&Vl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,jl(n,o)?l=null:i!==null&&jl(n,i)&&(t.flags|=32),Vf(e,t),Ee(e,t,l,r),t.child;case 6:return e===null&&Vl(t),null;case 13:return Qf(e,t,r);case 4:return Vs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Yr(t,null,n,r):Ee(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:nt(n,o),fu(e,t,n,o,r);case 7:return Ee(e,t,t.pendingProps,r),t.child;case 8:return Ee(e,t,t.pendingProps.children,r),t.child;case 12:return Ee(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Y(ui,n._currentValue),n._currentValue=l,i!==null)if(at(i.value,l)){if(i.children===o.children&&!Be.current){t=bt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===n){if(i.tag===1){a=Ct(-1,r&-r),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=r,a=i.alternate,a!==null&&(a.lanes|=r),Kl(i.return,r,t),s.lanes|=r;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),Kl(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ee(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Hr(t,r),o=Ze(o),n=n(o),t.flags|=1,Ee(e,t,n,r),t.child;case 14:return n=t.type,o=nt(n,t.pendingProps),o=nt(n.type,o),du(e,t,n,o,r);case 15:return $f(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:nt(n,o),Wo(e,t),t.tag=1,Oe(n)?(e=!0,li(t)):e=!1,Hr(t,r),jf(t,n,o),Yl(t,n,o,r),Jl(null,t,n,!0,e,r);case 19:return Yf(e,t,r);case 22:return Xf(e,t,r)}throw Error(C(156,t.tag))};function dd(e,t){return Nc(e,t)}function em(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,r,n){return new em(e,t,r,n)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ps)return 11;if(e===As)return 14}return 2}function Yt(e,t){var r=e.alternate;return r===null?(r=Ye(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xo(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")aa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Fr:return hr(r.children,o,i,t);case Cs:l=8,o|=8;break;case xl:return e=Ye(12,r,t,o|2),e.elementType=xl,e.lanes=i,e;case _l:return e=Ye(13,r,t,o),e.elementType=_l,e.lanes=i,e;case kl:return e=Ye(19,r,t,o),e.elementType=kl,e.lanes=i,e;case _c:return Ri(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sc:l=10;break e;case xc:l=9;break e;case Ps:l=11;break e;case As:l=14;break e;case Mt:l=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ye(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function hr(e,t,r,n){return e=Ye(7,e,n,t),e.lanes=r,e}function Ri(e,t,r,n){return e=Ye(22,e,n,t),e.elementType=_c,e.lanes=r,e.stateNode={isHidden:!1},e}function ul(e,t,r){return e=Ye(6,e,null,t),e.lanes=r,e}function cl(e,t,r){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rm(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ua(e,t,r,n,o,i,l,s,a){return e=new rm(e,t,r,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xs(i),e}function nm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function pd(e){if(!e)return Zt;e=e._reactInternals;e:{if(_r(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Oe(r))return pf(e,r,t)}return t}function hd(e,t,r,n,o,i,l,s,a){return e=ua(r,n,!0,e,o,i,l,s,a),e.context=pd(null),r=e.current,n=Ce(),o=Qt(r),i=Ct(n,o),i.callback=t??null,Vt(r,i,o),e.current.lanes=o,Jn(e,o,n),De(e,n),e}function Bi(e,t,r,n){var o=t.current,i=Ce(),l=Qt(o);return r=pd(r),t.context===null?t.context=r:t.pendingContext=r,t=Ct(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Vt(o,t,l),e!==null&&(st(e,o,l,i),Go(e,o,l)),l}function Si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ca(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function om(){return null}var md=typeof reportError=="function"?reportError:function(e){console.error(e)};function fa(e){this._internalRoot=e}Oi.prototype.render=fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Bi(e,t,null,null)};Oi.prototype.unmount=fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sr(function(){Bi(null,e,null,null)}),t[At]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=$c();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&t!==0&&t<Nt[r].priority;r++);Nt.splice(r,0,e),r===0&&Vc(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function im(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Si(l);i.call(u)}}var l=hd(t,n,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=l,e[At]=l.current,In(e.nodeType===8?e.parentNode:e),Sr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=Si(a);s.call(u)}}var a=ua(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=a,e[At]=a.current,In(e.nodeType===8?e.parentNode:e),Sr(function(){Bi(t,a,r,n)}),a}function Mi(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Si(l);s.call(a)}}Bi(t,l,e,o)}else l=im(r,t,e,o,n);return Si(l)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yn(t.pendingLanes);r!==0&&(Us(t,r|1),De(t,se()),!($&6)&&(Jr=se()+500,tr()))}break;case 13:Sr(function(){var n=Ft(e,1);if(n!==null){var o=Ce();st(n,e,1,o)}}),ca(e,1)}};Rs=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var r=Ce();st(t,e,134217728,r)}ca(e,134217728)}};Hc=function(e){if(e.tag===13){var t=Qt(e),r=Ft(e,t);if(r!==null){var n=Ce();st(r,e,t,n)}ca(e,t)}};$c=function(){return K};Xc=function(e,t){var r=K;try{return K=e,t()}finally{K=r}};Rl=function(e,t,r){switch(t){case"input":if(Tl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ci(n);if(!o)throw Error(C(90));wc(n),Tl(n,o)}}}break;case"textarea":Tc(e,r);break;case"select":t=r.value,t!=null&&Gr(e,!!r.multiple,t,!1)}};Rc=ia;Bc=Sr;var lm={usingClientEntryPoint:!1,Events:[to,Br,Ci,bc,Uc,ia]},pn={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sm={bundleType:pn.bundleType,version:pn.version,rendererPackageName:pn.rendererPackageName,rendererConfig:pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:pn.findFiberByHostInstance||om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{ki=ko.inject(sm),mt=ko}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;We.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(t))throw Error(C(200));return nm(e,t,null,r)};We.createRoot=function(e,t){if(!da(e))throw Error(C(299));var r=!1,n="",o=md;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ua(e,1,!1,null,null,r,!1,n,o),e[At]=t.current,In(e.nodeType===8?e.parentNode:e),new fa(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Mc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Sr(e)};We.hydrate=function(e,t,r){if(!Di(t))throw Error(C(200));return Mi(null,e,t,!0,r)};We.hydrateRoot=function(e,t,r){if(!da(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=md;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=hd(t,null,e,1,r??null,o,!1,i,l),e[At]=t.current,In(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Oi(t)};We.render=function(e,t,r){if(!Di(t))throw Error(C(200));return Mi(null,e,t,!1,r)};We.unmountComponentAtNode=function(e){if(!Di(e))throw Error(C(40));return e._reactRootContainer?(Sr(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};We.unstable_batchedUpdates=ia;We.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Di(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Mi(e,t,r,!1,n)};We.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),mc.exports=We;var am=mc.exports,gd,Cu=am;gd=Cu.createRoot,Cu.hydrateRoot;function yd(e,t={}){return{segments:e,mode:t.mode??"fill",strokeWidth:t.strokeWidth??0,fillColor:t.fillColor??[0,0,0],strokeColor:t.strokeColor??[0,0,0],fillOpacity:t.fillOpacity??1,strokeOpacity:t.strokeOpacity??1}}function um(e){const t=cm(e),r={tokens:t,index:0,cx:0,cy:0,startX:0,startY:0,lastCubicC2:null,lastQuadC1:null},n=[];let o=null,i=null;for(;r.index<t.length;){const l=t[r.index];if(fm(l))i=l,r.index+=1;else if(i===null)throw new SyntaxError(`path must start with a command, got ${l}`);switch(i){case"M":case"m":{const[s,a]=rt(r,i==="m");r.cx=s,r.cy=a,r.startX=s,r.startY=a,o=[],n.push(o),i=i==="m"?"l":"L";break}case"L":case"l":{if(!o)throw new SyntaxError("L before M");const[s,a]=rt(r,i==="l");o.push(xn(r.cx,r.cy,s,a)),r.cx=s,r.cy=a,r.lastCubicC2=null,r.lastQuadC1=null;break}case"H":case"h":{if(!o)throw new SyntaxError("H before M");let s=parseFloat(Gt(r));i==="h"&&(s+=r.cx),o.push(xn(r.cx,r.cy,s,r.cy)),r.cx=s,r.lastCubicC2=null,r.lastQuadC1=null;break}case"V":case"v":{if(!o)throw new SyntaxError("V before M");let s=parseFloat(Gt(r));i==="v"&&(s+=r.cy),o.push(xn(r.cx,r.cy,r.cx,s)),r.cy=s,r.lastCubicC2=null,r.lastQuadC1=null;break}case"C":case"c":{if(!o)throw new SyntaxError("C before M");const[s,a]=rt(r,i==="c"),[u,p]=rt(r,i==="c"),[d,f]=rt(r,i==="c");o.push([r.cx,r.cy,s,a,u,p,d,f]),r.cx=d,r.cy=f,r.lastCubicC2=[u,p],r.lastQuadC1=null;break}case"S":case"s":{if(!o)throw new SyntaxError("S before M");const[s,a]=r.lastCubicC2?[2*r.cx-r.lastCubicC2[0],2*r.cy-r.lastCubicC2[1]]:[r.cx,r.cy],[u,p]=rt(r,i==="s"),[d,f]=rt(r,i==="s");o.push([r.cx,r.cy,s,a,u,p,d,f]),r.cx=d,r.cy=f,r.lastCubicC2=[u,p],r.lastQuadC1=null;break}case"Q":case"q":{if(!o)throw new SyntaxError("Q before M");const[s,a]=rt(r,i==="q"),[u,p]=rt(r,i==="q");o.push(Pu(r.cx,r.cy,s,a,u,p)),r.cx=u,r.cy=p,r.lastQuadC1=[s,a],r.lastCubicC2=null;break}case"T":case"t":{if(!o)throw new SyntaxError("T before M");const[s,a]=r.lastQuadC1?[2*r.cx-r.lastQuadC1[0],2*r.cy-r.lastQuadC1[1]]:[r.cx,r.cy],[u,p]=rt(r,i==="t");o.push(Pu(r.cx,r.cy,s,a,u,p)),r.cx=u,r.cy=p,r.lastQuadC1=[s,a],r.lastCubicC2=null;break}case"A":case"a":{if(!o)throw new SyntaxError("A before M");const s=parseFloat(Gt(r)),a=parseFloat(Gt(r)),u=parseFloat(Gt(r)),p=Au(r),d=Au(r),[f,v]=rt(r,i==="a");for(const g of dm(r.cx,r.cy,s,a,u,p,d,f,v))o.push(g);r.cx=f,r.cy=v,r.lastCubicC2=null,r.lastQuadC1=null;break}case"Z":case"z":{if(!o)throw new SyntaxError("Z before M");(Math.abs(r.cx-r.startX)>1e-6||Math.abs(r.cy-r.startY)>1e-6)&&o.push(xn(r.cx,r.cy,r.startX,r.startY)),r.cx=r.startX,r.cy=r.startY,r.lastCubicC2=null,r.lastQuadC1=null,i=null;break}default:throw new SyntaxError(`unsupported path command "${i}"`)}}return{paths:n.filter(l=>l.length>0).map(l=>yd(l))}}function cm(e){const t=/[MmLlHhVvCcSsQqTtZzAa]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi;return e.match(t)??[]}function fm(e){return/^[MmLlHhVvCcSsQqTtZzAa]$/.test(e)}function Gt(e){const t=e.tokens[e.index];if(t===void 0)throw new SyntaxError("unexpected end of path");return e.index+=1,t}function rt(e,t){const r=parseFloat(Gt(e)),n=parseFloat(Gt(e));return t?[e.cx+r,e.cy+n]:[r,n]}function xn(e,t,r,n){const o=e+(r-e)/3,i=t+(n-t)/3,l=e+2*(r-e)/3,s=t+2*(n-t)/3;return[e,t,o,i,l,s,r,n]}function Pu(e,t,r,n,o,i){const l=e+.6666666666666666*(r-e),s=t+2/3*(n-t),a=o+2/3*(r-o),u=i+2/3*(n-i);return[e,t,l,s,a,u,o,i]}function Au(e){const t=Gt(e),r=t[0];if(r!=="0"&&r!=="1")throw new SyntaxError(`arc flag must be 0 or 1, got "${t}"`);return t.length>1&&e.tokens.splice(e.index,0,t.slice(1)),r==="1"?1:0}function dm(e,t,r,n,o,i,l,s,a){if(e===s&&t===a)return[];if(r=Math.abs(r),n=Math.abs(n),r===0||n===0)return[xn(e,t,s,a)];const u=o*Math.PI/180,p=Math.cos(u),d=Math.sin(u),f=(e-s)/2,v=(t-a)/2,g=p*f+d*v,x=-d*f+p*v;let E=r*r,h=n*n;const c=g*g,m=x*x,_=c/E+m/h;if(_>1){const z=Math.sqrt(_);r*=z,n*=z,E=r*r,h=n*n}const w=i===l?-1:1,S=E*h-E*m-h*c,T=E*m+h*c,F=w*Math.sqrt(Math.max(0,S/T)),R=F*(r*x)/n,D=-F*(n*g)/r,W=p*R-d*D+(e+s)/2,Q=d*R+p*D+(t+a)/2,X=(g-R)/r,Me=(x-D)/n,ut=(-g-R)/r,$e=(-x-D)/n,Le=Fu(1,0,X,Me);let k=Fu(X,Me,ut,$e);!l&&k>0?k-=2*Math.PI:l&&k<0&&(k+=2*Math.PI);const O=Math.max(1,Math.ceil(Math.abs(k)/(Math.PI/2))),A=k/O,V=[];for(let z=0;z<O;z++)V.push(pm(W,Q,r,n,p,d,Le+z*A,Le+(z+1)*A));return V}function Fu(e,t,r,n){const o=Math.sqrt((e*e+t*t)*(r*r+n*n)),i=Math.acos(Math.max(-1,Math.min(1,(e*r+t*n)/o)));return e*n-t*r<0?-i:i}function pm(e,t,r,n,o,i,l,s){const a=1.3333333333333333*Math.tan((s-l)/4),u=Math.cos(l),p=Math.sin(l),d=Math.cos(s),f=Math.sin(s),v=(S,T)=>[o*S-i*T+e,i*S+o*T+t],[g,x]=v(r*u,n*p),[E,h]=v(r*d,n*f),[c,m]=v(r*(u-a*p),n*(p+a*u)),[_,w]=v(r*(d+a*f),n*(f-a*d));return[g,x,c,m,_,w,E,h]}function Sd(e){const t=e.trim();if(!t)return null;const r=t.toLowerCase();if(r==="none"||r==="transparent"||r==="currentcolor")return null;const n=xd(t);if(n)return n;const o=hm(t);if(o)return o;const i=mm[r];return i||null}function bu(e){const t=e.trim(),r=/^#([0-9a-f]{4}|[0-9a-f]{8})$/i.exec(t);if(r){const o=r[1];return o.length===4?parseInt(o[3]+o[3],16)/255:parseInt(o.slice(6,8),16)/255}const n=/^rgba\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*([\d.]+)\s*\)$/i.exec(t);return n?Vo(parseFloat(n[1])):1}function xd(e){const t=/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(e);if(!t)return null;const r=t[1];return r.length===3||r.length===4?[parseInt(r[0]+r[0],16)/255,parseInt(r[1]+r[1],16)/255,parseInt(r[2]+r[2],16)/255]:[parseInt(r.slice(0,2),16)/255,parseInt(r.slice(2,4),16)/255,parseInt(r.slice(4,6),16)/255]}function hm(e){const t=/^rgba?\(\s*([\d.]+%?)\s*[, ]\s*([\d.]+%?)\s*[, ]\s*([\d.]+%?)/i.exec(e);return t?[Vo(fl(t[1])),Vo(fl(t[2])),Vo(fl(t[3]))]:null}function fl(e){return e.endsWith("%")?parseFloat(e)/100:parseFloat(e)/255}function Vo(e){return e<0?0:e>1?1:e}const mm=(()=>{const e={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},t={};for(const r in e)t[r]=xd(e[r]);return t})();function vm(e,t={}){var u;const{maxPaths:r=16,currentColor:n=[0,0,0]}=t,o=new DOMParser().parseFromString(e,"image/svg+xml"),i=o.querySelector("parsererror");if(i)throw new Error(`SVG parse error: ${((u=i.textContent)==null?void 0:u.trim())??"unknown"}`);const l=Array.from(o.querySelectorAll("path"));if(l.length===0)throw new Error("SVG contains no <path> elements — convert shapes to paths first.");const s=[];let a=0;for(const p of l){const d=p.getAttribute("d");if(!d)continue;const v=um(d).paths.flatMap(x=>x.segments);if(v.length===0)continue;if(s.length>=r){a+=1;continue}const g=gm(p,n);s.push(yd(v,g))}if(s.length===0)throw new Error("SVG <path> elements had no usable `d` data.");return a>0&&console.warn(`[bezier-sdf] SVG has ${s.length+a} paths, exceeds renderer limit of ${r}. Rendering first ${r}.`),{paths:s}}function gm(e,t){let r=null,n=null,o=null,i=null,l=null,s=e;for(;s&&s.tagName.toLowerCase()!=="svg";){const c=Ru(s.getAttribute("style"));r??(r=c.fill??s.getAttribute("fill")),n??(n=c.stroke??s.getAttribute("stroke")),o??(o=c["stroke-width"]??s.getAttribute("stroke-width")),i??(i=c["fill-opacity"]??s.getAttribute("fill-opacity")),l??(l=c["stroke-opacity"]??s.getAttribute("stroke-opacity")),s=s.parentElement}if(s){const c=Ru(s.getAttribute("style"));r??(r=c.fill??s.getAttribute("fill")),n??(n=c.stroke??s.getAttribute("stroke")),o??(o=c["stroke-width"]??s.getAttribute("stroke-width")),i??(i=c["fill-opacity"]??s.getAttribute("fill-opacity")),l??(l=c["stroke-opacity"]??s.getAttribute("stroke-opacity"))}const a=r===null?[0,0,0]:Uu(r,t),u=n===null?null:Uu(n,t),p=a!==null,d=u!==null,f=p&&d?"both":d?"stroke":"fill",v=o!==null?parseFloat(o):1,g=i!==null?Bu(parseFloat(i)):1,x=l!==null?Bu(parseFloat(l)):1,E=r!==null?bu(r):1,h=n!==null?bu(n):1;return{mode:f,strokeWidth:isFinite(v)?v:1,fillColor:a??[0,0,0],strokeColor:u??[0,0,0],fillOpacity:g*E,strokeOpacity:x*h}}function Uu(e,t){const r=e.trim().toLowerCase();return r==="none"||r==="transparent"?null:r==="currentcolor"?t:Sd(e)??[0,0,0]}function Ru(e){if(!e)return{};const t={};for(const r of e.split(";")){const n=r.indexOf(":");if(n<0)continue;const o=r.slice(0,n).trim().toLowerCase(),i=r.slice(n+1).trim();o&&i&&(t[o]=i)}return t}function Bu(e){return isFinite(e)?e<0?0:e>1?1:e:1}function ym(e,t={}){const{extent:r=.95,flipY:n=!0}=t;let o=1/0,i=1/0,l=-1/0,s=-1/0;for(const h of e.paths){const c=h.mode==="fill"?0:h.strokeWidth*.5;let m=1/0,_=1/0,w=-1/0,S=-1/0;for(const T of h.segments)for(const F of[0,6]){const R=T[F],D=T[F+1];R<m&&(m=R),R>w&&(w=R),D<_&&(_=D),D>S&&(S=D)}isFinite(m)&&(m-c<o&&(o=m-c),w+c>l&&(l=w+c),_-c<i&&(i=_-c),S+c>s&&(s=S+c))}if(!isFinite(o))return{mark:e,transform:{offsetX:0,offsetY:0,scale:1,flipY:!1}};const a=(o+l)/2,u=(i+s)/2,p=(l-o)/2,d=(s-i)/2,f=Math.max(p,d)||1,v=r/f,g=n?-1:1,x=(h,c)=>[(h-a)*v,(c-u)*v*g];return{mark:{paths:e.paths.map(h=>{const c=h.segments.map(m=>{const[_,w]=x(m[0],m[1]),[S,T]=x(m[2],m[3]),[F,R]=x(m[4],m[5]),[D,W]=x(m[6],m[7]);return[_,w,S,T,F,R,D,W]});return{...h,segments:c,strokeWidth:h.strokeWidth*v}}),renderMode:e.renderMode},transform:{offsetX:-a,offsetY:-u,scale:v,flipY:n}}}const Tr=16;function Kn(e,t){return{markA:Ou(e,"A"),markB:Ou(t,"B")}}function Ou(e,t){if(e.paths.length<=Tr)return e;console.warn(`[bezier-sdf] morph effect supports up to ${Tr} paths per side; paths ${Tr}..${e.paths.length-1} of shape ${t} have been merged into path ${Tr-1}`);const r=e.paths.slice(0,Tr-1),n=e.paths.slice(Tr-1),o=n[0],i=[];for(const s of n)for(const a of s.segments)i.push(a);const l={segments:i,mode:o.mode,strokeWidth:o.strokeWidth,fillColor:o.fillColor,strokeColor:o.strokeColor,fillOpacity:o.fillOpacity,strokeOpacity:o.strokeOpacity};return{paths:[...r,l],renderMode:e.renderMode}}const Du=1024,_d=1.2,M=16,Te=M/4,kd={resolution:0,zoom:8,sminK:12,offset:16,compositeMode:24,pathCount:28,color:32,opacity:44,bound:48,cursor:56,cursorPull:64,cursorRadius:68,ripples:80,pathMode:144,pathStrokeHalfW:144+Te*16,pathFillOpacity:144+Te*16*2,pathStrokeOpacity:144+Te*16*3,pathFillColor:144+Te*16*4,pathStrokeColor:144+Te*16*4+M*16,pathOffsets:144+Te*16*4+M*16*2},Sm=kd,Mu=kd.pathOffsets+M/2*16,Ot=160+Te*16*2+M/2*16,wd={resolution:0,zoom:8,sminK:12,offset:16,pathCount:24,opacity:28,refractionStrength:32,chromaticStrength:36,fresnelStrength:40,tintStrength:44,rimColor:48,bound:60,tintColor:64,frostStrength:76,cursor:80,cursorPull:88,cursorRadius:92,ripples:96,pathMode:160,pathStrokeHalfW:160+Te*16,pathOffsets:160+Te*16*2,dynamicSdf:Ot,blendT:Ot+4,useOverrideA:Ot+8,useOverrideB:Ot+12,morphColorA:Ot+16,morphColorB:Ot+32,pathColorsA:Ot+48,pathColorsB:Ot+48+M*16},xm=wd,Lu=wd.pathColorsB+M*16,_m={resolution:0,zoom:8,morphT:12,offset:16,opacity:24,bound:28,colorA:32,useOverrideA:44,colorB:48,useOverrideB:60,pathColorsA:64,pathColorsB:64+M*16},km=_m,Nu=64+M*16*2,Ed={pathCount:0,fillRule:4,outputMode:8,pathEnds:16,pathMode:16+M/4*16,pathHalfW:16+M/4*16*2},Cr=Ed,wm=Ed.pathHalfW+M/4*16,Em=`
struct Segment {
  a: vec4<f32>, // (P0, P1)
  b: vec4<f32>, // (P2, P3)
};
struct BakeParams {
  pathCount: u32,
  fillRule: u32,
  outputMode: u32,
  _pad: u32,
  pathEnds:  array<vec4<u32>, ${M/4}>,
  pathMode:  array<vec4<u32>, ${M/4}>,
  pathHalfW: array<vec4<f32>, ${M/4}>,
};

@group(0) @binding(0) var<storage, read> segments: array<Segment>;
@group(0) @binding(1) var<uniform> bake: BakeParams;

struct VsOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) uv: vec2<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 3.0, -1.0),
    vec2<f32>(-1.0,  3.0),
  );
  var out: VsOut;
  out.pos = vec4<f32>(pos[vi], 0.0, 1.0);
  // Bake region is [-BOUND, BOUND]². Fullscreen triangle covers [-1, 3],
  // so we scale by BOUND here; only the [-1, 1] quad portion is visible
  // in the render target.
  out.uv = pos[vi] * ${_d};
  return out;
}

fn bezier(p0: vec2<f32>, p1: vec2<f32>, p2: vec2<f32>, p3: vec2<f32>, t: f32) -> vec2<f32> {
  let u = 1.0 - t;
  return u*u*u * p0 + 3.0*u*u*t * p1 + 3.0*u*t*t * p2 + t*t*t * p3;
}
fn bezier_deriv(p0: vec2<f32>, p1: vec2<f32>, p2: vec2<f32>, p3: vec2<f32>, t: f32) -> vec2<f32> {
  let u = 1.0 - t;
  return 3.0*u*u * (p1 - p0) + 6.0*u*t * (p2 - p1) + 3.0*t*t * (p3 - p2);
}

fn dist_to_cubic(p: vec2<f32>, p0: vec2<f32>, p1: vec2<f32>, p2: vec2<f32>, p3: vec2<f32>) -> vec2<f32> {
  var crossings: f32 = 0.0;
  var prevY = p0.y - p.y;
  var prevX = p0.x;
  for (var i: i32 = 1; i <= 16; i = i + 1) {
    let t = f32(i) / 16.0;
    let b = bezier(p0, p1, p2, p3, t);
    let y = b.y - p.y;
    let crossed = (prevY <= 0.0 && y > 0.0) || (prevY > 0.0 && y <= 0.0);
    if (crossed) {
      let s = prevY / (prevY - y);
      let xc = mix(prevX, b.x, s);
      if (xc > p.x) { crossings = crossings + 1.0; }
    }
    prevY = y;
    prevX = b.x;
  }
  var bestT: f32 = 0.0;
  var bestD2: f32 = 1e20;
  for (var i: i32 = 0; i <= 12; i = i + 1) {
    let t = f32(i) / 12.0;
    let b = bezier(p0, p1, p2, p3, t);
    let d2 = dot(b - p, b - p);
    if (d2 < bestD2) { bestD2 = d2; bestT = t; }
  }
  for (var i: i32 = 0; i < 3; i = i + 1) {
    let b = bezier(p0, p1, p2, p3, bestT);
    let db = bezier_deriv(p0, p1, p2, p3, bestT);
    let diff = b - p;
    let u = 1.0 - bestT;
    let ddb = 6.0 * u * (p2 - 2.0 * p1 + p0) + 6.0 * bestT * (p3 - 2.0 * p2 + p1);
    let f = dot(diff, db);
    let fp = dot(db, db) + dot(diff, ddb);
    if (abs(fp) > 1e-8) {
      bestT = clamp(bestT - f / fp, 0.0, 1.0);
    }
  }
  let bfinal = bezier(p0, p1, p2, p3, bestT);
  return vec2<f32>(length(bfinal - p), crossings);
}

fn pathEnd(i: u32) -> u32 {
  return bake.pathEnds[i / 4u][i % 4u];
}
fn pathMode(i: u32) -> u32 {
  return bake.pathMode[i / 4u][i % 4u];
}
fn pathHalfW(i: u32) -> f32 {
  return bake.pathHalfW[i / 4u][i % 4u];
}

@fragment
fn fs_main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
  // Flip Y — our geometry uses +y up, render targets use +y down.
  let p = vec2<f32>(uv.x, -uv.y);

  if (bake.fillRule == 1u) {
    // Even-odd across every segment in the bake — global parity (legacy).
    // No per-path notion in this mode, so winning path index is always 0.
    var minD: f32 = 1e20;
    var crossings: f32 = 0.0;
    let count = arrayLength(&segments);
    for (var i: u32 = 0u; i < count; i = i + 1u) {
      let seg = segments[i];
      let r = dist_to_cubic(p, seg.a.xy, seg.a.zw, seg.b.xy, seg.b.zw);
      if (r.x < minD) { minD = r.x; }
      crossings = crossings + r.y;
    }
    let inside = (i32(crossings) % 2) == 1;
    let signed_d = select(minD, -minD, inside);
    if (bake.outputMode == 1u) {
      return vec4<f32>(0.0, 0.0, 0.0, 1.0);
    }
    return vec4<f32>(signed_d, 0.0, 0.0, 1.0);
  }

  // Nonzero (default): per-path even-odd, hard-unioned via min(). Outer
  // loop bound is MAX_PATHS; runtime pathCount and per-path span drive
  // the early exits. Total inner iterations sum to the total segment
  // count — same work as the global loop, partitioned per path.
  //
  // Stroked paths (pathMode == 1) bypass even-odd and use the sausage
  // SDF (pathMinD - halfW) — open subpaths in stroked SVGs would
  // otherwise produce garbage parity that corrupts the union.
  //
  // winningPathIdx tracks which path produced the smallest signed
  // distance at this fragment — used by outputMode == 1u (path-index
  // pass) to emit a per-pixel ownership map for downstream per-path
  // color lookup.
  var result: f32 = 1e20;
  var winningPathIdx: u32 = 0u;
  var prevEnd: u32 = 0u;
  for (var p_i: u32 = 0u; p_i < ${M}u; p_i = p_i + 1u) {
    if (p_i >= bake.pathCount) { break; }
    let segEnd = pathEnd(p_i);
    var pathMinD: f32 = 1e20;
    var pathCrossings: f32 = 0.0;
    for (var idx: u32 = prevEnd; idx < segEnd; idx = idx + 1u) {
      let seg = segments[idx];
      let r = dist_to_cubic(p, seg.a.xy, seg.a.zw, seg.b.xy, seg.b.zw);
      if (r.x < pathMinD) { pathMinD = r.x; }
      pathCrossings = pathCrossings + r.y;
    }
    var pathSigned: f32;
    if (pathMode(p_i) == 1u) {
      pathSigned = pathMinD - pathHalfW(p_i);
    } else {
      let insidePath = (i32(pathCrossings) % 2) == 1;
      pathSigned = select(pathMinD, -pathMinD, insidePath);
    }
    if (pathSigned < result) {
      result = pathSigned;
      winningPathIdx = p_i;
    }
    prevEnd = segEnd;
  }
  if (bake.outputMode == 1u) {
    return vec4<f32>(f32(winningPathIdx) / 15.0, 0.0, 0.0, 1.0);
  }
  return vec4<f32>(result, 0.0, 0.0, 1.0);
}
`,Td=2,Cd=Array.from({length:M},(e,t)=>`@group(0) @binding(${Td+t}) var tex${t}: texture_2d<f32>;`).join(`
`),Qn=Td+M,Tm=Array.from({length:M},(e,t)=>`  if (i == ${t}u) { return textureSample(tex${t}, samp, t).r; }`).join(`
`),Cm=`
struct Uniforms {
  resolution: vec2<f32>,
  zoom: f32,
  sminK: f32,
  offset: vec2<f32>,
  compositeMode: u32,
  pathCount: u32,
  color: vec3<f32>,
  opacity: f32,
  bound: f32,
  _pad0: f32,
  cursor: vec2<f32>,
  cursorPull: f32,
  cursorRadius: f32,
  _padR: vec2<f32>,
  ripples: array<vec4<f32>, 4>,
  // Scalar-per-path values packed four-wide to satisfy WGSL's 16-byte
  // uniform-array stride; pathXyz[i / 4][i % 4] is the per-path value.
  pathMode: array<vec4<u32>, ${Te}>,
  pathStrokeHalfW: array<vec4<f32>, ${Te}>,
  pathFillOpacity: array<vec4<f32>, ${Te}>,
  pathStrokeOpacity: array<vec4<f32>, ${Te}>,
  // Colors padded to vec4 (.rgb used, .a ignored) — vec3 arrays need
  // stride 16 anyway, so padding explicitly keeps the JS writer honest.
  pathFillColor: array<vec4<f32>, ${M}>,
  pathStrokeColor: array<vec4<f32>, ${M}>,
  // Two vec2 per vec4: pathOffsets[i >> 1].xy for even i, .zw for odd.
  pathOffsets: array<vec4<f32>, ${M/2}>,
};

@group(0) @binding(0) var<uniform> U: Uniforms;
@group(0) @binding(1) var samp: sampler;
${Cd}

struct VsOut {
  @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 3.0, -1.0),
    vec2<f32>(-1.0,  3.0),
  );
  var out: VsOut;
  out.pos = vec4<f32>(pos[vi], 0.0, 1.0);
  return out;
}

fn smin(a: f32, b: f32, k: f32) -> f32 {
  let h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

// Polynomial smooth-min — iquilezles.org/articles/smin. Returns
// (smin_value, h) where 'h' is the cubic mix-weight *toward 'a'*: h → 1
// when 'a' is much smaller (a dominates), h → 0 when 'b' is much
// smaller. Callers use the same h to blend per-path colors with
// mix(color_b, color_a, h). As k → 0 the h factor clamps to 0/1 and
// the -h*(1-h)*k bump vanishes, so this degenerates cleanly to min()
// and hard color selection. 'k' must be strictly positive.
fn sminPoly(a: f32, b: f32, k: f32) -> vec2<f32> {
  let h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  let d = mix(b, a, h) - h * (1.0 - h) * k;
  return vec2<f32>(d, h);
}

// Coupling between the per-pixel effects field and the local smin
// strength used for color-blend fusion in per-path composite mode.
// At rest 'effectsField = 0' so 'localK = 0' and the blend path
// contributes nothing.
const SMIN_COUPLING: f32 = 0.3;
// Width of the transition band between pure Porter-Duff (rest) and
// the full smin-blend result (active effects).
const BLEND_EPS: f32 = 0.002;

fn pathOffset(i: u32) -> vec2<f32> {
  let v = U.pathOffsets[i / 2u];
  return select(v.zw, v.xy, (i & 1u) == 0u);
}

fn sampleIdx(i: u32, uv: vec2<f32>) -> f32 {
  let po = pathOffset(i);
  let local = uv - po;
  let t = clamp((local / U.bound) * 0.5 + 0.5, vec2<f32>(0.0), vec2<f32>(1.0));
${Tm}
  return 0.0;
}

// Total subtractive deformation field at uv — cursor pull (Gaussian)
// plus any active ripple rings. See the GLSL shader's effectsField for
// the full fill-vs-stroke rationale; in short, call sites subtract this
// from the scene SDF for fills and from the sausage SDF
// (abs(d) - halfW) for strokes, which is itself a proper fill SDF.
fn effectsField(uv: vec2<f32>) -> f32 {
  let delta = uv - U.cursor;
  let r2 = dot(delta, delta);
  let sigma = max(U.cursorRadius, 1e-4);
  var total = U.cursorPull * exp(-r2 / (2.0 * sigma * sigma));
  let RIPPLE_WIDTH: f32 = 0.12;
  for (var i: i32 = 0; i < 4; i = i + 1) {
    let r = U.ripples[i];
    let rd = length(uv - r.xy);
    let rp = (rd - r.z) / RIPPLE_WIDTH;
    total = total + r.w * exp(-rp * rp);
  }
  return total;
}

@fragment
fn fs_main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
  let res = U.resolution;
  var uv = (fragCoord.xy - 0.5 * res) / min(res.x, res.y);
  uv.y = -uv.y;
  uv = uv * (2.0 / U.zoom);
  uv = uv - U.offset;

  let field = effectsField(uv);

  if (U.compositeMode == 0u) {
    // Legacy single-color smin. Effective k is boosted locally by the
    // effects field — at rest 'k = U.sminK'; under cursor/ripple the
    // extra term strengthens fusion only where the distortion reaches,
    // so adjacent subpaths visibly bridge instead of each rippling
    // independently. Output stays single-color (legacy silhouette paints
    // 'U.color'); color-blend fusion is a per-path-mode feature.
    let k = max(U.sminK + field * SMIN_COUPLING, 1e-4);
    var d = sampleIdx(0u, uv);
    for (var i: u32 = 1u; i < ${M}u; i = i + 1u) {
      if (i >= U.pathCount) { break; }
      d = smin(d, sampleIdx(i, uv), k);
    }
    d = d - field;
    let aa = fwidth(d) * 1.2;
    let mask = 1.0 - smoothstep(-aa, aa, d);
    return vec4<f32>(U.color, mask * U.opacity);
  }

  // Per-path composite. Two results are computed and blended by
  // 'blendWeight', a smoothstep of 'localK = field * SMIN_COUPLING':
  //   (A) Porter-Duff "over" across independent distorted paths — used
  //       at rest so per-path paint and document-order overlaps match
  //       the SVG exactly.
  //   (B) Smin + color-blend across fills, strokes composited "over"
  //       on top — used under active effects so adjacent subpaths fuse
  //       with smooth color gradients through the bridge.
  let localK = field * SMIN_COUPLING;
  let blendWeight = smoothstep(0.0, 2.0 * BLEND_EPS, localK);

  // (A) Porter-Duff "over" — stable per-path composite.
  var overAcc = vec4<f32>(0.0);
  for (var i: u32 = 0u; i < ${M}u; i = i + 1u) {
    if (i >= U.pathCount) { break; }
    let d = sampleIdx(i, uv);
    let slot = i / 4u;
    let sub = i % 4u;
    let mode = U.pathMode[slot][sub];
    let fillOp = U.pathFillOpacity[slot][sub];
    let strokeOp = U.pathStrokeOpacity[slot][sub];
    let halfW = U.pathStrokeHalfW[slot][sub];
    if (mode != 1u) {
      let dFill = d - field;
      let aa = fwidth(dFill) * 1.2;
      let a = (1.0 - smoothstep(-aa, aa, dFill)) * fillOp;
      let src = vec4<f32>(U.pathFillColor[i].rgb * a, a);
      overAcc = src + overAcc * (1.0 - src.a);
    }
    if (mode != 0u) {
      let de = abs(d) - halfW - field;
      let aaS = fwidth(de) * 1.2;
      let a = (1.0 - smoothstep(-aaS, aaS, de)) * strokeOp;
      let src = vec4<f32>(U.pathStrokeColor[i].rgb * a, a);
      overAcc = src + overAcc * (1.0 - src.a);
    }
  }

  // (B) Smin + color-blend across fills. Always computed (not gated on
  // blendWeight) — WGSL's uniformity analyzer flags textureSample inside
  // a branch whose predicate is per-fragment (blendWeight depends on
  // fragCoord via effectsField), so we run it unconditionally. Cost is
  // two extra MAX_PATHS-bounded loops per fragment; when blendWeight = 0
  // the mix below discards the result so visual behaviour is identical.
  let kK = max(localK, 1e-4);
  var hasFill = false;
  var accSdf: f32 = 0.0;
  var accCol = vec3<f32>(0.0);
  var accOp: f32 = 0.0;
  for (var i: u32 = 0u; i < ${M}u; i = i + 1u) {
    if (i >= U.pathCount) { break; }
    let slot = i / 4u;
    let sub = i % 4u;
    let mode = U.pathMode[slot][sub];
    if (mode != 1u) {
      let d = sampleIdx(i, uv);
      let fillOp = U.pathFillOpacity[slot][sub];
      let col = U.pathFillColor[i].rgb;
      if (!hasFill) {
        accSdf = d;
        accCol = col;
        accOp = fillOp;
        hasFill = true;
      } else {
        let sh = sminPoly(accSdf, d, kK);
        accCol = mix(col, accCol, sh.y);
        accOp = mix(fillOp, accOp, sh.y);
        accSdf = sh.x;
      }
    }
  }
  var blendAcc = vec4<f32>(0.0);
  if (hasFill) {
    let dFill = accSdf - field;
    let aa = fwidth(dFill) * 1.2;
    let a = (1.0 - smoothstep(-aa, aa, dFill)) * accOp;
    blendAcc = vec4<f32>(accCol * a, a);
  }
  for (var i: u32 = 0u; i < ${M}u; i = i + 1u) {
    if (i >= U.pathCount) { break; }
    let slot = i / 4u;
    let sub = i % 4u;
    let mode = U.pathMode[slot][sub];
    if (mode != 0u) {
      let d = sampleIdx(i, uv);
      let strokeOp = U.pathStrokeOpacity[slot][sub];
      let halfW = U.pathStrokeHalfW[slot][sub];
      let de = abs(d) - halfW - field;
      let aaS = fwidth(de) * 1.2;
      let a = (1.0 - smoothstep(-aaS, aaS, de)) * strokeOp;
      let src = vec4<f32>(U.pathStrokeColor[i].rgb * a, a);
      blendAcc = src + blendAcc * (1.0 - src.a);
    }
  }

  let acc = mix(overAcc, blendAcc, blendWeight);
  var rgb = vec3<f32>(0.0);
  if (acc.a > 1e-6) { rgb = acc.rgb / acc.a; }
  return vec4<f32>(rgb, acc.a * U.opacity);
}
`,Pm=Array.from({length:M},(e,t)=>`  if (i == ${t}u) { return textureSample(tex${t}, samp, t).r; }`).join(`
`),Yn=Qn+1,fs=Yn+1,ds=Yn+2,ps=Yn+3,Am=`
struct GlassUniforms {
  resolution: vec2<f32>,
  zoom: f32,
  sminK: f32,
  offset: vec2<f32>,
  pathCount: u32,
  opacity: f32,
  refractionStrength: f32,
  chromaticStrength: f32,
  fresnelStrength: f32,
  tintStrength: f32,
  rimColor: vec3<f32>,
  bound: f32,
  tintColor: vec3<f32>,
  frostStrength: f32,
  cursor: vec2<f32>,
  cursorPull: f32,
  cursorRadius: f32,
  ripples: array<vec4<f32>, 4>,
  // Per-path render mode (0=fill, 1=stroke, 2=both) and stroke half-width.
  // Mirrors the sample pipeline so strokes render as glass sausages
  // (abs(d) - halfW, a proper 2D fill SDF) instead of solid silhouettes.
  // For mode 2 ("both"), glass treats the path as a fill — the filled
  // silhouette is what the lens refracts through; a stroke on top of
  // glass rarely reads visually. Scalars packed four-wide to satisfy
  // WGSL's 16-byte uniform-array stride.
  pathMode: array<vec4<u32>, ${Te}>,
  pathStrokeHalfW: array<vec4<f32>, ${Te}>,
  // Two vec2 per vec4, indexed via pathOffset() helper below.
  pathOffsets: array<vec4<f32>, ${M/2}>,
  // Dynamic-SDF mode: when 'dynamicSdf' is non-zero the lens SDF at
  // each pixel is mix(sample(tex0), sample(sdfB), blendT) — used for
  // glass-on-morph composition (and any future effect that wants a
  // blended-SDF source). See WEBGL_GLASS_FRAG for the full rationale.
  //
  // In dynamic-SDF mode, the tint that's normally driven by the single
  // 'tintColor' uniform becomes per-pixel: sample each side's path-
  // index map, look up 'pathColorsA/B' for that path index, and lerp
  // by blendT. 'useOverrideA/B' falls back to 'morphColorA/B' (a flat
  // single-color override per side, used when the React 'color' /
  // 'toColor' props are set).
  dynamicSdf: u32,
  blendT: f32,
  useOverrideA: u32,
  useOverrideB: u32,
  morphColorA: vec3<f32>,
  _padA: f32,
  morphColorB: vec3<f32>,
  _padB: f32,
  pathColorsA: array<vec4<f32>, ${M}>,
  pathColorsB: array<vec4<f32>, ${M}>,
};

@group(0) @binding(0) var<uniform> U: GlassUniforms;
@group(0) @binding(1) var samp: sampler;
${Cd}
@group(0) @binding(${Qn}) var backdrop: texture_2d<f32>;
@group(0) @binding(${Qn+1}) var sdfB: texture_2d<f32>;
@group(0) @binding(${fs}) var pathIdxA: texture_2d<f32>;
@group(0) @binding(${ds}) var pathIdxB: texture_2d<f32>;
@group(0) @binding(${ps}) var sampNearest: sampler;

fn decodePathIdx(v: f32) -> u32 {
  let raw = u32(round(clamp(v, 0.0, 1.0) * 15.0));
  return min(raw, ${M-1}u);
}

struct VsOut {
  @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 3.0, -1.0),
    vec2<f32>(-1.0,  3.0),
  );
  var out: VsOut;
  out.pos = vec4<f32>(pos[vi], 0.0, 1.0);
  return out;
}

fn smin(a: f32, b: f32, k: f32) -> f32 {
  let h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

fn pathOffset(i: u32) -> vec2<f32> {
  let v = U.pathOffsets[i / 2u];
  return select(v.zw, v.xy, (i & 1u) == 0u);
}

fn sampleSdf(i: u32, uv: vec2<f32>) -> f32 {
  let po = pathOffset(i);
  let local = uv - po;
  let t = clamp((local / U.bound) * 0.5 + 0.5, vec2<f32>(0.0), vec2<f32>(1.0));
${Pm}
  return 0.0;
}

// Coupling between the effects field and the local smin strength used
// for cross-path fusion in glass. Added to 'U.sminK' so the at-rest
// fusion baseline is preserved and the cursor region gets a stronger
// bridge on top. Tune down specifically for glass if strong cursor
// pulls over-fuse.
const GLASS_SMIN_COUPLING: f32 = 0.3;

// Converts a raw per-path SDF to the right fill-SDF for glass rendering:
//   - fill (0) or both (2): the scene SDF as-is
//   - stroke (1):           abs(d) - halfW, the SDF of the curve dilated
//                           by halfW, i.e. the "sausage" region — itself a
//                           proper 2D fill SDF, so all the glass math
//                           (height field, normals, refraction, Fresnel)
//                           works on it unchanged.
// Then smooth-unions across all active paths with the caller-supplied
// 'k'. Caller injects 'U.sminK + localK' so fusion strengthens under
// the cursor (see 'lens' below).
fn shapeSdf(uv: vec2<f32>, kIn: f32) -> f32 {
  let k = max(kIn, 1e-4);
  let d0 = sampleSdf(0u, uv);
  let m0 = U.pathMode[0][0];
  let h0 = U.pathStrokeHalfW[0][0];
  var d = select(d0, abs(d0) - h0, m0 == 1u);
  for (var i: u32 = 1u; i < ${M}u; i = i + 1u) {
    if (i >= U.pathCount) { break; }
    let di = sampleSdf(i, uv);
    let mi = U.pathMode[i / 4u][i % 4u];
    let hi = U.pathStrokeHalfW[i / 4u][i % 4u];
    let ci = select(di, abs(di) - hi, mi == 1u);
    d = smin(d, ci, k);
  }
  return d;
}

// Mirror of the sample shader's effectsField. Lets the glass material
// compose with cursor pull + ripple deformations by subtracting this
// field from the lens SDF wherever it's evaluated (silhouette pass and
// each height-field tap).
fn effectsField(uv: vec2<f32>) -> f32 {
  let delta = uv - U.cursor;
  let r2 = dot(delta, delta);
  let sigma = max(U.cursorRadius, 1e-4);
  var total = U.cursorPull * exp(-r2 / (2.0 * sigma * sigma));
  let RIPPLE_WIDTH: f32 = 0.12;
  for (var i: i32 = 0; i < 4; i = i + 1) {
    let r = U.ripples[i];
    let rd = length(uv - r.xy);
    let rp = (rd - r.z) / RIPPLE_WIDTH;
    total = total + r.w * exp(-rp * rp);
  }
  return total;
}

// Combined lens SDF at 'uv'. Two source modes selected by 'U.dynamicSdf':
//   - 0: cross-path smin silhouette (with local k boosted by the effects
//     field) — existing glass behaviour.
//   - 1: per-fragment lerp 'mix(dA, dB, U.blendT)' over two combined
//     SDFs sampled from tex0 (shape A) and sdfB (shape B). Skips smin
//     because each side was already flattened-and-baked into a single
//     proper fill SDF by the morph pipeline.
// In both modes the same effects field is subtracted, so cursor and
// ripple deformations compose with whichever SDF source drives the lens.
fn lens(uv: vec2<f32>) -> f32 {
  let f = effectsField(uv);
  if (U.dynamicSdf != 0u) {
    let st = clamp((uv / U.bound) * 0.5 + 0.5, vec2<f32>(0.0), vec2<f32>(1.0));
    let dA = textureSample(tex0, samp, st).r;
    let dB = textureSample(sdfB, samp, st).r;
    return mix(dA, dB, U.blendT) - f;
  }
  return shapeSdf(uv, U.sminK + f * GLASS_SMIN_COUPLING) - f;
}

@fragment
fn fs_main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
  let res = U.resolution;
  var uv = (fragCoord.xy - 0.5 * res) / min(res.x, res.y);
  uv.y = -uv.y;
  uv = uv * (2.0 / U.zoom);
  uv = uv - U.offset;

  let d = lens(uv);
  let aa = fwidth(d) * 1.2;
  let insideMask = 1.0 - smoothstep(-aa, aa, d);

  // See the GLSL mirror for the full rationale: any height field that's
  // a function of the SDF has a zero-gradient plateau along the shape's
  // medial axis, which reads as hard refraction facets. The fix is to
  // build the height field from a *blurred indicator* instead — smooth
  // each SDF sample through a smoothstep to get 0-or-1 inside/outside
  // values, then average 9 samples over a radial kernel. The result is
  // a genuine smooth dome: flat plateau in the interior, smooth rising
  // rim, no medial-axis creases.
  let SDF_BLUR:  f32 = 0.08;
  let SOFT_EDGE: f32 = 0.03;
  let D:         f32 = 0.70710678 * SDF_BLUR;  // = SDF_BLUR / √2

  var h  = (1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv))) * 2.0;
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2<f32>(SDF_BLUR, 0.0)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv - vec2<f32>(SDF_BLUR, 0.0)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2<f32>(0.0, SDF_BLUR)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv - vec2<f32>(0.0, SDF_BLUR)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2<f32>( D,  D)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2<f32>( D, -D)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2<f32>(-D,  D)));
  h = h + 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2<f32>(-D, -D)));
  h = h / 10.0;

  let grad = vec2<f32>(dpdx(h), dpdy(h));
  let gradMag = length(grad);
  let normal = grad / max(gradMag, 1e-6);

  // Lens intensity falls out of the smoothed height: 1 at the rim
  // (h ≈ 0.5), 0 in the interior (h = 1). Doubled so the rim peak
  // normalises to 1.
  let lensAmount = clamp((1.0 - h) * 2.0, 0.0, 1.0);

  // Interior proxy for tint and frost — derived from h so bands follow
  // the smoothed height field rather than the SDF iso-contours, which
  // would otherwise paint medial-axis cusps into the tint.
  let interior = smoothstep(0.5, 1.0, h);

  let sdfToUv = vec2<f32>(min(res.x, res.y)) / res;
  let refractOffset = normal * h * (1.0 - h) * lensAmount * U.refractionStrength * sdfToUv;

  let backdropUv = fragCoord.xy / res;
  let offR = backdropUv + refractOffset * (1.0 - U.chromaticStrength);
  let offG = backdropUv + refractOffset;
  let offB = backdropUv + refractOffset * (1.0 + U.chromaticStrength);

  // Chromatic sample at the G offset returns rgb (center of the frost
  // kernel too, so we don't re-fetch it). R and B channels get their
  // own offset samples to produce the fringe.
  let gRgb = textureSample(backdrop, samp, offG).rgb;
  let rCh  = textureSample(backdrop, samp, offR).r;
  let bCh  = textureSample(backdrop, samp, offB).b;
  let chromaticColor = vec3<f32>(rCh, gRgb.g, bCh);

  // 5-tap cross-blur frost, radius scaled by interior depth. Gives the
  // "slightly frosted window" quality across the middle of the lens;
  // at the rim the radius is near zero so chromatic refraction still
  // reads sharply. Sampled unconditionally — a branch here would take
  // textureSample out of uniform control flow and derivatives would
  // go undefined.
  let frostPx = U.frostStrength * interior;
  let fs = vec2<f32>(frostPx) / res;
  var frost = gRgb;
  frost = frost + textureSample(backdrop, samp, offG + vec2<f32>(fs.x, 0.0)).rgb;
  frost = frost + textureSample(backdrop, samp, offG - vec2<f32>(fs.x, 0.0)).rgb;
  frost = frost + textureSample(backdrop, samp, offG + vec2<f32>(0.0, fs.y)).rgb;
  frost = frost + textureSample(backdrop, samp, offG - vec2<f32>(0.0, fs.y)).rgb;
  frost = frost * 0.2;

  var color = mix(frost, chromaticColor, lensAmount);

  let rim = smoothstep(-0.03, -0.005, d) * (1.0 - smoothstep(-0.005, 0.0, d));
  color = color + U.rimColor * rim * U.fresnelStrength;

  // Interior tint. In glass+morph (dynamic-SDF) mode the tint is per-
  // pixel — sample each side's path-index map, look up that path's
  // color, lerp by blendT. Override flags fall back to a flat color
  // per side (or the single-tint material when both are unset). Plain
  // glass mode preserves the existing single-color tint.
  var tintColor: vec3<f32>;
  if (U.dynamicSdf != 0u) {
    let st = clamp((uv / U.bound) * 0.5 + 0.5, vec2<f32>(0.0), vec2<f32>(1.0));
    var tA: vec3<f32>;
    if (U.useOverrideA != 0u) {
      tA = U.morphColorA;
    } else {
      let idxA = decodePathIdx(textureSample(pathIdxA, sampNearest, st).r);
      tA = U.pathColorsA[idxA].rgb;
    }
    var tB: vec3<f32>;
    if (U.useOverrideB != 0u) {
      tB = U.morphColorB;
    } else {
      let idxB = decodePathIdx(textureSample(pathIdxB, sampNearest, st).r);
      tB = U.pathColorsB[idxB].rgb;
    }
    tintColor = mix(tA, tB, U.blendT);
  } else {
    tintColor = U.tintColor;
  }
  color = mix(color, tintColor, clamp(interior * U.tintStrength, 0.0, 1.0));

  return vec4<f32>(color, insideMask * U.opacity);
  //return vec4<f32>(normal * 0.5 + 0.5, 0.0, insideMask);
}
`,hs=2,ms=3,vs=4,gs=5,ys=6,Fm=`
struct MorphUniforms {
  resolution: vec2<f32>,
  zoom: f32,
  morphT: f32,
  offset: vec2<f32>,
  opacity: f32,
  bound: f32,
  colorA: vec3<f32>,
  useOverrideA: u32,
  colorB: vec3<f32>,
  useOverrideB: u32,
  pathColorsA: array<vec4<f32>, ${M}>,
  pathColorsB: array<vec4<f32>, ${M}>,
};

@group(0) @binding(0) var<uniform> U: MorphUniforms;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(${hs}) var sdfA: texture_2d<f32>;
@group(0) @binding(${ms}) var sdfB: texture_2d<f32>;
@group(0) @binding(${vs}) var pathIdxA: texture_2d<f32>;
@group(0) @binding(${gs}) var pathIdxB: texture_2d<f32>;
// Nearest sampler dedicated to the path-index lookups. Linear filtering
// would blend integer-encoded path indices at region boundaries (e.g.
// indices 3 and 7 on either side of an edge would produce a sample at
// 5/15 — pointing into a third region's colors). NEAREST guarantees
// each fragment reads exactly one texel's encoded index.
@group(0) @binding(${ys}) var sampNearest: sampler;

struct VsOut {
  @builtin(position) pos: vec4<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 3.0, -1.0),
    vec2<f32>(-1.0,  3.0),
  );
  var out: VsOut;
  out.pos = vec4<f32>(pos[vi], 0.0, 1.0);
  return out;
}

// Decode the [0..15]/15 path-index encoding the bake writes back into a
// u32. Half-float storage is plenty for 16 buckets; clamp to MAX_PATHS-1
// in case sampling lands fractionally above 15/15 from filter edges.
fn decodePathIdx(v: f32) -> u32 {
  let raw = u32(round(clamp(v, 0.0, 1.0) * 15.0));
  return min(raw, ${M-1}u);
}

@fragment
fn fs_main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
  let res = U.resolution;
  var uv = (fragCoord.xy - 0.5 * res) / min(res.x, res.y);
  uv.y = -uv.y;
  uv = uv * (2.0 / U.zoom);
  uv = uv - U.offset;

  let st = clamp((uv / U.bound) * 0.5 + 0.5, vec2<f32>(0.0), vec2<f32>(1.0));
  let dA = textureSample(sdfA, samp, st).r;
  let dB = textureSample(sdfB, samp, st).r;
  let d = mix(dA, dB, U.morphT);
  let aa = fwidth(d) * 1.2;
  let mask = 1.0 - smoothstep(-aa, aa, d);

  // Per-side color resolution. Override ⇒ flat color; otherwise sample
  // the path-index map and look up the per-path color. WGSL allows
  // dynamic indexing of uniform arrays directly so no unrolling needed.
  var colorA: vec3<f32>;
  if (U.useOverrideA != 0u) {
    colorA = U.colorA;
  } else {
    let idxA = decodePathIdx(textureSample(pathIdxA, sampNearest, st).r);
    colorA = U.pathColorsA[idxA].rgb;
  }
  var colorB: vec3<f32>;
  if (U.useOverrideB != 0u) {
    colorB = U.colorB;
  } else {
    let idxB = decodePathIdx(textureSample(pathIdxB, sampNearest, st).r);
    colorB = U.pathColorsB[idxB].rgb;
  }
  let color = mix(colorA, colorB, U.morphT);
  return vec4<f32>(color, mask * U.opacity);
}
`;function Xr(e,t,r){if(e.paths.length===0)throw new Error("mark must contain at least one path");if(e.paths.length>t)throw new Error(`mark has ${e.paths.length} paths but this renderer supports at most ${t}. Merge smaller paths together, or file a feature request.`);for(let n=0;n<e.paths.length;n++){const o=e.paths[n];if(o.segments.length>r)throw new Error(`path[${n}] has ${o.segments.length} segments but the per-path cap is ${r}. Simplify the trace in Inkscape (Path → Simplify) or merge paths.`)}}const or={refractionStrength:.05,chromaticStrength:.015,fresnelStrength:.3,tintStrength:.1,frostStrength:2.5,rimColor:[1,1,1],tintColor:[.91,.94,1]};function Iu(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)return[e.naturalWidth||e.width,e.naturalHeight||e.height];const t=e;return[t.width,t.height]}const bn=1024,wo=2;class bm{constructor(){this.kind="webgpu",this.device=null,this.context=null,this.format="bgra8unorm",this.samplePipeline=null,this.bakePipeline=null,this.bakeBindGroupLayout=null,this.nearestSampler=null,this.uniformBuffer=null,this.textures=[],this.dummyTexture=null,this.sampleBindGroup=null,this.uniformData=new ArrayBuffer(Mu),this.glassPipeline=null,this.glassUniformBuffer=null,this.glassBindGroup=null,this.glassBindGroupLayout=null,this.sampler=null,this.backdropTexture=null,this.glassUniformData=new ArrayBuffer(Lu),this.morphPipeline=null,this.morphUniformBuffer=null,this.morphBindGroup=null,this.morphTexA=null,this.morphTexB=null,this.morphPathIdxTexA=null,this.morphPathIdxTexB=null,this.morphUniformData=new ArrayBuffer(Nu),this._pathCount=0,this.disposed=!1,this.mode="baked"}get pathCount(){return this._pathCount}async init({canvas:t,mark:r,backdrop:n,morphTo:o,morphFillRule:i}){if(Xr(r,M,bn),o&&Xr(o,M,bn),o){const c=Kn(r,o);zu(c.markA,"A"),zu(c.markB,"B")}if(this._pathCount=o?1:r.paths.length,!("gpu"in navigator)||!navigator.gpu)throw new Error("WebGPU not available");const l=await navigator.gpu.requestAdapter({powerPreference:"low-power"});if(!l)throw new Error("no WebGPU adapter");const s=n?M+4:M,a=l.limits.maxSampledTexturesPerShaderStage;if(a<s)throw new Error(`adapter exposes maxSampledTexturesPerShaderStage=${a}; bezier-sdf needs ${s} (MAX_PATHS=${M}${n?" + backdrop + sdfB + 2× pathIdx":""})`);const u=await l.requestDevice({requiredLimits:{maxSampledTexturesPerShaderStage:s}});this.device=u,u.lost.then(c=>{this.disposed||console.warn("[bezier-sdf] GPU device lost:",c.message)});const p=t.getContext("webgpu");if(!p)throw new Error("could not acquire webgpu context");this.context=p,this.format=navigator.gpu.getPreferredCanvasFormat(),p.configure({device:u,format:this.format,alphaMode:"premultiplied"});const d=u.createShaderModule({code:Em}),f=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),v=u.createRenderPipeline({layout:u.createPipelineLayout({bindGroupLayouts:[f]}),vertex:{module:d,entryPoint:"vs_main"},fragment:{module:d,entryPoint:"fs_main",targets:[{format:"r16float"}]},primitive:{topology:"triangle-list"}});if(this.bakePipeline=v,this.bakeBindGroupLayout=f,o){this.initMorph(u,r,o,i??"nonzero",n);return}this.textures=r.paths.map(c=>this.allocBakeTexture(u));for(let c=0;c<r.paths.length;c++){const m=r.paths[c].segments;this.runBakeSegments(u,this.textures[c],m,[m.length],0,[0],[0])}this.dummyTexture=u.createTexture({size:[1,1],format:"r16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT});{const c=u.createCommandEncoder();c.beginRenderPass({colorAttachments:[{view:this.dummyTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]}).end(),u.queue.submit([c.finish()])}this.uniformBuffer=u.createBuffer({size:Mu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const g=u.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});this.sampler=g,this.nearestSampler=u.createSampler({magFilter:"nearest",minFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});const x=u.createShaderModule({code:Cm}),E=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},...Array.from({length:M},(c,m)=>({binding:wo+m,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}))]});this.samplePipeline=u.createRenderPipeline({layout:u.createPipelineLayout({bindGroupLayouts:[E]}),vertex:{module:x,entryPoint:"vs_main"},fragment:{module:x,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list"}});const h=c=>(c<this.textures.length?this.textures[c]:this.dummyTexture).createView();this.sampleBindGroup=u.createBindGroup({layout:E,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:g},...Array.from({length:M},(c,m)=>({binding:wo+m,resource:h(m)}))]}),n&&this.initGlass(u,g,n,h)}initMorph(t,r,n,o,i){const l=Kn(r,n),s=o==="evenodd"?1:0,a=Gu(l.markA),u=Gu(l.markB),p=this.allocBakeTexture(t),d=this.allocBakeTexture(t),f=this.allocBakeTexture(t),v=this.allocBakeTexture(t);this.runBakeSegments(t,p,a.segments,a.pathEnds,s,a.pathModes,a.pathHalfW,0),this.runBakeSegments(t,f,a.segments,a.pathEnds,s,a.pathModes,a.pathHalfW,1),this.runBakeSegments(t,d,u.segments,u.pathEnds,s,u.pathModes,u.pathHalfW,0),this.runBakeSegments(t,v,u.segments,u.pathEnds,s,u.pathModes,u.pathHalfW,1),this.morphTexA=p,this.morphTexB=d,this.morphPathIdxTexA=f,this.morphPathIdxTexB=v;const g=t.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"});if(this.sampler=g,this.nearestSampler=t.createSampler({magFilter:"nearest",minFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),i){this.dummyTexture=t.createTexture({size:[1,1],format:"r16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT});{const c=t.createCommandEncoder();c.beginRenderPass({colorAttachments:[{view:this.dummyTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]}).end(),t.queue.submit([c.finish()])}this.textures=[p];const h=c=>(c<this.textures.length?this.textures[c]:this.dummyTexture).createView();this.initGlass(t,g,i,h);return}this.morphUniformBuffer=t.createBuffer({size:Nu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const x=t.createShaderModule({code:Fm}),E=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:hs,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:ms,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:vs,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:gs,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:ys,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}]});this.morphPipeline=t.createRenderPipeline({layout:t.createPipelineLayout({bindGroupLayouts:[E]}),vertex:{module:x,entryPoint:"vs_main"},fragment:{module:x,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list"}}),this.morphBindGroup=t.createBindGroup({layout:E,entries:[{binding:0,resource:{buffer:this.morphUniformBuffer}},{binding:1,resource:g},{binding:hs,resource:p.createView()},{binding:ms,resource:d.createView()},{binding:vs,resource:f.createView()},{binding:gs,resource:v.createView()},{binding:ys,resource:this.nearestSampler}]})}initGlass(t,r,n,o){const[i,l]=Iu(n);if(!i||!l)throw new Error("liquid-glass: backdrop has zero size (not loaded yet?)");const s=t.createTexture({size:[i,l],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});t.queue.copyExternalImageToTexture({source:n,flipY:!1},{texture:s},[i,l,1]),this.backdropTexture=s;const a=t.createBuffer({size:Lu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.glassUniformBuffer=a;const u=t.createShaderModule({code:Am}),p=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},...Array.from({length:M},(d,f)=>({binding:wo+f,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}})),{binding:Qn,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:Yn,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:fs,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:ds,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}},{binding:ps,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}]});this.glassBindGroupLayout=p,this.glassPipeline=t.createRenderPipeline({layout:t.createPipelineLayout({bindGroupLayouts:[p]}),vertex:{module:u,entryPoint:"vs_main"},fragment:{module:u,entryPoint:"fs_main",targets:[{format:this.format,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list"}}),this.glassBindGroup=this.buildGlassBindGroup(t,o,s)}buildGlassBindGroup(t,r,n){const o=(this.morphTexB??this.dummyTexture).createView(),i=(this.morphPathIdxTexA??this.dummyTexture).createView(),l=(this.morphPathIdxTexB??this.dummyTexture).createView();return t.createBindGroup({layout:this.glassBindGroupLayout,entries:[{binding:0,resource:{buffer:this.glassUniformBuffer}},{binding:1,resource:this.sampler},...Array.from({length:M},(s,a)=>({binding:wo+a,resource:r(a)})),{binding:Qn,resource:n.createView()},{binding:Yn,resource:o},{binding:fs,resource:i},{binding:ds,resource:l},{binding:ps,resource:this.nearestSampler}]})}allocBakeTexture(t){return t.createTexture({size:[Du,Du],format:"r16float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}runBakeIntoTexture(t,r,n){this.runBakeSegments(t,r,n.segments,[n.segments.length],0,[0],[0])}runBakeSegments(t,r,n,o,i,l,s,a=0){const u=this.bakePipeline,p=this.bakeBindGroupLayout;if(!u||!p)return;const d=new Float32Array(n.length*8);for(let h=0;h<n.length;h++)d.set(n[h],h*8);const f=t.createBuffer({size:Math.max(d.byteLength,16),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});new Float32Array(f.getMappedRange()).set(d),f.unmap();const v=t.createBuffer({size:wm,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});{const h=new DataView(v.getMappedRange());h.setUint32(Cr.pathCount,o.length,!0),h.setUint32(Cr.fillRule,i,!0),h.setUint32(Cr.outputMode,a,!0);for(let c=0;c<M;c++)h.setUint32(Cr.pathEnds+c*4,o[c]??0,!0),h.setUint32(Cr.pathMode+c*4,l[c]??0,!0),h.setFloat32(Cr.pathHalfW+c*4,s[c]??0,!0)}v.unmap();const g=t.createBindGroup({layout:p,entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:{buffer:v}}]}),x=t.createCommandEncoder(),E=x.beginRenderPass({colorAttachments:[{view:r.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});E.setPipeline(u),E.setBindGroup(0,g),E.draw(3),E.end(),t.queue.submit([x.finish()]),f.destroy(),v.destroy()}rebake(t){const r=this.device;if(!(!r||this.disposed||!this.bakePipeline)){if(t.paths.length!==this.textures.length)throw new Error(`rebake: mark has ${t.paths.length} paths but renderer was init'd with ${this.textures.length}`);Xr(t,M,bn);for(let n=0;n<t.paths.length;n++)this.runBakeIntoTexture(r,this.textures[n],t.paths[n])}}setBackdrop(t){const r=this.device;if(!r||this.disposed||!this.glassBindGroupLayout||!this.sampler)return;const[n,o]=Iu(t);if(!n||!o)return;const i=this.backdropTexture,l=r.createTexture({size:[n,o],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});r.queue.copyExternalImageToTexture({source:t,flipY:!1},{texture:l},[n,o,1]),this.backdropTexture=l;const s=a=>(a<this.textures.length?this.textures[a]:this.dummyTexture).createView();this.glassBindGroup=this.buildGlassBindGroup(r,s,l),i==null||i.destroy()}render(t){const{device:r,context:n}=this;if(!r||!n||this.disposed)return;if(t.morph&&this.morphPipeline&&this.morphBindGroup&&this.morphUniformBuffer){this.renderMorph(r,n,t);return}if(t.glass&&this.glassPipeline&&this.glassBindGroup&&this.glassUniformBuffer){this.renderGlass(r,n,t);return}const{samplePipeline:o,uniformBuffer:i,sampleBindGroup:l}=this;if(!o||!i||!l)return;const s=t.pathModes!==void 0||t.pathFillColors!==void 0||t.pathStrokeColors!==void 0||t.pathStrokeHalfW!==void 0,a=new DataView(this.uniformData);new Uint8Array(this.uniformData).fill(0);const u=Sm;a.setFloat32(u.resolution,t.width,!0),a.setFloat32(u.resolution+4,t.height,!0),a.setFloat32(u.zoom,t.zoom,!0),a.setFloat32(u.sminK,t.sminK,!0),a.setFloat32(u.offset,t.offsetX,!0),a.setFloat32(u.offset+4,t.offsetY,!0),a.setUint32(u.compositeMode,s?1:0,!0),a.setUint32(u.pathCount,this._pathCount,!0),a.setFloat32(u.color,t.color[0],!0),a.setFloat32(u.color+4,t.color[1],!0),a.setFloat32(u.color+8,t.color[2],!0),a.setFloat32(u.opacity,t.opacity,!0),a.setFloat32(u.bound,1.2,!0);const p=t.cursor??[0,0];a.setFloat32(u.cursor,p[0],!0),a.setFloat32(u.cursor+4,p[1],!0),a.setFloat32(u.cursorPull,t.cursorPull??0,!0),a.setFloat32(u.cursorRadius,t.cursorRadius??1,!0),ju(a,u.ripples,t.ripples),Wu(a,u.pathOffsets,t.pathOffsets),s&&(Hu(a,u.pathMode,t.pathModes),Eo(a,u.pathStrokeHalfW,t.pathStrokeHalfW,0),Eo(a,u.pathFillOpacity,t.pathFillOpacity,1),Eo(a,u.pathStrokeOpacity,t.pathStrokeOpacity,1),Pr(a,u.pathFillColor,t.pathFillColors),Pr(a,u.pathStrokeColor,t.pathStrokeColors)),r.queue.writeBuffer(i,0,this.uniformData);const d=r.createCommandEncoder(),f=d.beginRenderPass({colorAttachments:[{view:n.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});f.setPipeline(o),f.setBindGroup(0,l),f.draw(3),f.end(),r.queue.submit([d.finish()])}renderMorph(t,r,n){const o=this.morphPipeline,i=this.morphBindGroup,l=this.morphUniformBuffer,s=n.morph,a=new DataView(this.morphUniformData);new Uint8Array(this.morphUniformData).fill(0);const u=km;a.setFloat32(u.resolution,n.width,!0),a.setFloat32(u.resolution+4,n.height,!0),a.setFloat32(u.zoom,n.zoom,!0),a.setFloat32(u.morphT,s.t,!0),a.setFloat32(u.offset,n.offsetX,!0),a.setFloat32(u.offset+4,n.offsetY,!0),a.setFloat32(u.opacity,n.opacity,!0),a.setFloat32(u.bound,_d,!0),a.setFloat32(u.colorA,s.colorA[0],!0),a.setFloat32(u.colorA+4,s.colorA[1],!0),a.setFloat32(u.colorA+8,s.colorA[2],!0),a.setFloat32(u.colorB,s.colorB[0],!0),a.setFloat32(u.colorB+4,s.colorB[1],!0),a.setFloat32(u.colorB+8,s.colorB[2],!0);const p=!s.pathColorsA||s.pathColorsA.length===0,d=!s.pathColorsB||s.pathColorsB.length===0;a.setUint32(u.useOverrideA,p?1:0,!0),a.setUint32(u.useOverrideB,d?1:0,!0),p||Pr(a,u.pathColorsA,s.pathColorsA),d||Pr(a,u.pathColorsB,s.pathColorsB),t.queue.writeBuffer(l,0,this.morphUniformData);const f=t.createCommandEncoder(),v=f.beginRenderPass({colorAttachments:[{view:r.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});v.setPipeline(o),v.setBindGroup(0,i),v.draw(3),v.end(),t.queue.submit([f.finish()])}renderGlass(t,r,n){var x;const o=this.glassPipeline,i=this.glassBindGroup,l=this.glassUniformBuffer,s=new DataView(this.glassUniformData);new Uint8Array(this.glassUniformData).fill(0);const a=xm;s.setFloat32(a.resolution,n.width,!0),s.setFloat32(a.resolution+4,n.height,!0),s.setFloat32(a.zoom,n.zoom,!0),s.setFloat32(a.sminK,n.sminK,!0),s.setFloat32(a.offset,n.offsetX,!0),s.setFloat32(a.offset+4,n.offsetY,!0),s.setUint32(a.pathCount,this._pathCount,!0),s.setFloat32(a.opacity,n.opacity,!0),s.setFloat32(a.refractionStrength,n.refractionStrength??or.refractionStrength,!0),s.setFloat32(a.chromaticStrength,n.chromaticStrength??or.chromaticStrength,!0),s.setFloat32(a.fresnelStrength,n.fresnelStrength??or.fresnelStrength,!0),s.setFloat32(a.tintStrength,n.tintStrength??or.tintStrength,!0);const u=n.rimColor??or.rimColor;s.setFloat32(a.rimColor,u[0],!0),s.setFloat32(a.rimColor+4,u[1],!0),s.setFloat32(a.rimColor+8,u[2],!0),s.setFloat32(a.bound,1.2,!0);const p=n.tintColor??or.tintColor;s.setFloat32(a.tintColor,p[0],!0),s.setFloat32(a.tintColor+4,p[1],!0),s.setFloat32(a.tintColor+8,p[2],!0),s.setFloat32(a.frostStrength,n.frostStrength??or.frostStrength,!0);const d=n.cursor??[0,0];s.setFloat32(a.cursor,d[0],!0),s.setFloat32(a.cursor+4,d[1],!0),s.setFloat32(a.cursorPull,n.cursorPull??0,!0),s.setFloat32(a.cursorRadius,n.cursorRadius??1,!0),ju(s,a.ripples,n.ripples),Hu(s,a.pathMode,n.pathModes),Eo(s,a.pathStrokeHalfW,n.pathStrokeHalfW,0),Wu(s,a.pathOffsets,n.pathOffsets);const f=!!n.morph&&this.morphTexB!==null;if(s.setUint32(a.dynamicSdf,f?1:0,!0),s.setFloat32(a.blendT,((x=n.morph)==null?void 0:x.t)??0,!0),f){const E=n.morph,h=!E.pathColorsA||E.pathColorsA.length===0,c=!E.pathColorsB||E.pathColorsB.length===0;s.setUint32(a.useOverrideA,h?1:0,!0),s.setUint32(a.useOverrideB,c?1:0,!0),s.setFloat32(a.morphColorA,E.colorA[0],!0),s.setFloat32(a.morphColorA+4,E.colorA[1],!0),s.setFloat32(a.morphColorA+8,E.colorA[2],!0),s.setFloat32(a.morphColorB,E.colorB[0],!0),s.setFloat32(a.morphColorB+4,E.colorB[1],!0),s.setFloat32(a.morphColorB+8,E.colorB[2],!0),h||Pr(s,a.pathColorsA,E.pathColorsA),c||Pr(s,a.pathColorsB,E.pathColorsB)}else s.setUint32(a.useOverrideA,1,!0),s.setUint32(a.useOverrideB,1,!0);t.queue.writeBuffer(l,0,this.glassUniformData);const v=t.createCommandEncoder(),g=v.beginRenderPass({colorAttachments:[{view:r.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});g.setPipeline(o),g.setBindGroup(0,i),g.draw(3),g.end(),t.queue.submit([v.finish()])}dispose(){var t,r,n,o,i,l,s,a,u,p,d;this.disposed||(this.disposed=!0,(t=this.uniformBuffer)==null||t.destroy(),(r=this.glassUniformBuffer)==null||r.destroy(),(n=this.morphUniformBuffer)==null||n.destroy(),this.textures.forEach(f=>f.destroy()),(o=this.dummyTexture)==null||o.destroy(),(i=this.backdropTexture)==null||i.destroy(),(l=this.morphTexA)==null||l.destroy(),(s=this.morphTexB)==null||s.destroy(),(a=this.morphPathIdxTexA)==null||a.destroy(),(u=this.morphPathIdxTexB)==null||u.destroy(),(p=this.context)==null||p.unconfigure(),(d=this.device)==null||d.destroy(),this.uniformBuffer=null,this.glassUniformBuffer=null,this.morphUniformBuffer=null,this.textures=[],this.dummyTexture=null,this.backdropTexture=null,this.morphTexA=null,this.morphTexB=null,this.morphPathIdxTexA=null,this.morphPathIdxTexB=null,this.context=null,this.device=null,this.samplePipeline=null,this.sampleBindGroup=null,this.bakePipeline=null,this.bakeBindGroupLayout=null,this.glassPipeline=null,this.glassBindGroup=null,this.glassBindGroupLayout=null,this.morphPipeline=null,this.morphBindGroup=null,this.sampler=null,this.nearestSampler=null)}}function Gu(e){const t=[],r=[],n=[],o=[];for(const i of e.paths){for(const l of i.segments)t.push(l);r.push(t.length),n.push(i.mode==="stroke"?1:0),o.push(i.mode==="fill"?0:i.strokeWidth*.5)}return{segments:t,pathEnds:r,pathModes:n,pathHalfW:o}}function zu(e,t){let r=0;for(const n of e.paths)r+=n.segments.length;if(r>bn)throw new Error(`morph shape ${t} has ${r} combined segments but the bake shader's per-shape cap is ${bn}. Simplify the source SVG (Inkscape → Path → Simplify) or merge duplicate paths.`)}function ju(e,t,r){for(let n=0;n<4;n++){const o=r==null?void 0:r[n],i=t+n*16;e.setFloat32(i,o?o[0]:0,!0),e.setFloat32(i+4,o?o[1]:0,!0),e.setFloat32(i+8,o?o[2]:0,!0),e.setFloat32(i+12,o?o[3]:0,!0)}}function Wu(e,t,r){for(let n=0;n<M;n++){const o=r[n],i=n>>1,l=(n&1)*8,s=t+i*16+l;e.setFloat32(s,o?o[0]:0,!0),e.setFloat32(s+4,o?o[1]:0,!0)}}function Hu(e,t,r){for(let n=0;n<M;n++){const o=r==null?void 0:r[n],i=o==="stroke"?1:o==="both"?2:0;e.setUint32(t+n*4,i,!0)}}function Eo(e,t,r,n){for(let o=0;o<M;o++)e.setFloat32(t+o*4,(r==null?void 0:r[o])??n,!0)}function Pr(e,t,r){for(let n=0;n<M;n++){const o=r==null?void 0:r[n],i=t+n*16;e.setFloat32(i,(o==null?void 0:o[0])??0,!0),e.setFloat32(i+4,(o==null?void 0:o[1])??0,!0),e.setFloat32(i+8,(o==null?void 0:o[2])??0,!0)}}const N=16,wt=1024,Pd=`
uniform int       u_segCount;
uniform sampler2D u_segments;
uniform float     u_segmentTexWidth;
uniform int       u_pathCount;
uniform int       u_pathEnds[${N}];
uniform int       u_pathMode[${N}];
uniform float     u_pathHalfW[${N}];
uniform int       u_fillRule;

vec4 fetchSeg(int i) {
  float u = (float(i) + 0.5) / u_segmentTexWidth;
  return texture2D(u_segments, vec2(u, 0.5));
}

vec2 bezier(vec2 p0, vec2 p1, vec2 p2, vec2 p3, float t) {
  float u = 1.0 - t;
  return u*u*u * p0 + 3.0*u*u*t * p1 + 3.0*u*t*t * p2 + t*t*t * p3;
}
vec2 bezierDeriv(vec2 p0, vec2 p1, vec2 p2, vec2 p3, float t) {
  float u = 1.0 - t;
  return 3.0*u*u * (p1 - p0) + 6.0*u*t * (p2 - p1) + 3.0*t*t * (p3 - p2);
}
float distToCubic(vec2 p, vec2 p0, vec2 p1, vec2 p2, vec2 p3, inout int crossings) {
  const int NS = 16;
  float prevY = p0.y - p.y;
  float prevX = p0.x;
  for (int i = 1; i <= NS; i++) {
    float t = float(i) / float(NS);
    vec2 b = bezier(p0, p1, p2, p3, t);
    float y = b.y - p.y;
    if ((prevY <= 0.0 && y > 0.0) || (prevY > 0.0 && y <= 0.0)) {
      float s = prevY / (prevY - y);
      float xc = mix(prevX, b.x, s);
      if (xc > p.x) crossings += 1;
    }
    prevY = y;
    prevX = b.x;
  }
  float bestT = 0.0;
  float bestD2 = 1e20;
  const int NC = 12;
  for (int i = 0; i <= NC; i++) {
    float t = float(i) / float(NC);
    vec2 b = bezier(p0, p1, p2, p3, t);
    float d2 = dot(b - p, b - p);
    if (d2 < bestD2) { bestD2 = d2; bestT = t; }
  }
  for (int i = 0; i < 3; i++) {
    vec2 b  = bezier(p0, p1, p2, p3, bestT);
    vec2 db = bezierDeriv(p0, p1, p2, p3, bestT);
    vec2 diff = b - p;
    float u = 1.0 - bestT;
    vec2 ddb = 6.0*u*(p2 - 2.0*p1 + p0) + 6.0*bestT*(p3 - 2.0*p2 + p1);
    float f  = dot(diff, db);
    float fp = dot(db, db) + dot(diff, ddb);
    if (abs(fp) > 1e-8) {
      bestT = clamp(bestT - f / fp, 0.0, 1.0);
    }
  }
  vec2 b = bezier(p0, p1, p2, p3, bestT);
  return length(b - p);
}
float sceneSDF(vec2 p, out int winningPathIdx) {
  winningPathIdx = 0;
  if (u_fillRule == 1) {
    // Even-odd across every segment in the bake — global parity. Lets
    // designers use cross-path crossings as subtraction; also the only
    // mode in which the legacy fill-rule artifact can appear. There is
    // no per-path notion in this mode, so winningPathIdx stays 0.
    float minD = 1e20;
    int crossings = 0;
    for (int i = 0; i < ${wt}; i++) {
      if (i >= u_segCount) break;
      vec4 a = fetchSeg(i * 2);
      vec4 b = fetchSeg(i * 2 + 1);
      float d = distToCubic(p, a.xy, a.zw, b.xy, b.zw, crossings);
      if (d < minD) minD = d;
    }
    bool inside = (crossings - (crossings / 2) * 2) == 1;
    return inside ? -minD : minD;
  }

  // Nonzero (default): per-path even-odd, hard-unioned via min(). Outer
  // loop's bound (MAX_PATHS) and inner loop's bound (MAX_LOOP_BOUND) are
  // compile-time constants; runtime u_pathCount and per-path span
  // (segEnd - prevEnd) drive the early exits. Total inner iterations
  // sum to the total segment count — same work as the global loop, just
  // partitioned into per-path crossings.
  //
  // Stroked paths (u_pathMode[i] == 1) bypass even-odd entirely and use
  // the sausage SDF (pathMinD - halfW). Open subpaths inside a stroked
  // SVG would otherwise produce garbage parity that corrupts the union.
  //
  // winningPathIdx tracks which path produced the smallest signed
  // distance at this fragment. Used by the bake's path-index output mode
  // to write a per-pixel ownership map alongside the distance field —
  // the renderer then samples both to look up per-path colors at draw
  // time (preserves the source SVG's region colors through the morph).
  float result = 1e20;
  int prevEnd = 0;
  for (int p_i = 0; p_i < ${N}; p_i++) {
    if (p_i >= u_pathCount) break;
    int segEnd = u_pathEnds[p_i];
    int pathSegs = segEnd - prevEnd;
    float pathMinD = 1e20;
    int pathCrossings = 0;
    for (int j = 0; j < ${wt}; j++) {
      if (j >= pathSegs) break;
      int idx = j + prevEnd;
      vec4 a = fetchSeg(idx * 2);
      vec4 b = fetchSeg(idx * 2 + 1);
      float d = distToCubic(p, a.xy, a.zw, b.xy, b.zw, pathCrossings);
      if (d < pathMinD) pathMinD = d;
    }
    float pathSigned;
    if (u_pathMode[p_i] == 1) {
      pathSigned = pathMinD - u_pathHalfW[p_i];
    } else {
      bool insidePath = (pathCrossings - (pathCrossings / 2) * 2) == 1;
      pathSigned = insidePath ? -pathMinD : pathMinD;
    }
    if (pathSigned < result) {
      result = pathSigned;
      winningPathIdx = p_i;
    }
    prevEnd = segEnd;
  }
  return result;
}
`,To=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Um=`
attribute vec2 a_pos;
varying vec2 v_uv;
uniform float u_bound;
void main() {
  v_uv = a_pos * u_bound;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,Rm=`
precision highp float;
varying vec2 v_uv;
uniform int u_bakeOutput;
${Pd}
void main() {
  int idx = 0;
  float d = sceneSDF(v_uv, idx);
  if (u_bakeOutput == 1) {
    gl_FragColor = vec4(float(idx) / 15.0, 0.0, 0.0, 1.0);
  } else {
    gl_FragColor = vec4(d, 0.0, 0.0, 1.0);
  }
}
`,Ad=Array.from({length:N},(e,t)=>`uniform sampler2D u_sdf${t};`).join(`
`),Fd=Array.from({length:N},(e,t)=>`  if (i == ${t}) return texture2D(u_sdf${t}, t).r;`).join(`
`),xi=e=>`
vec3 lookupPathColor${e}(int idx) {
${Array.from({length:N},(t,r)=>`  if (idx == ${r}) return u_pathColors${e}[${r}];`).join(`
`)}
  return u_pathColors${e}[0];
}`,Bm=`
#extension GL_OES_standard_derivatives : enable
precision highp float;

#define MAX_PATHS ${N}
#define MAX_PATH_VEC4 ${N/4}

uniform vec2  u_res;
uniform float u_zoom;
uniform vec2  u_offset;
uniform float u_opacity;

// Legacy single-color smin path.
uniform vec3  u_color;
uniform float u_sminK;

uniform float u_bound;
uniform int   u_pathCount;
${Ad}
uniform vec2  u_pathOffset[MAX_PATHS];
uniform vec2  u_cursor;
uniform float u_cursorPull;
uniform float u_cursorRadius;
uniform vec4  u_ripples[4];  // (x, y, age, amplitude) per slot

// Per-path composite uniforms (only meaningful when u_compositeMode != 0).
// Scalar-per-path values pack four per vec4/ivec4, indexed by v4Idx/i4Idx.
uniform int   u_compositeMode;
uniform ivec4 u_pathMode[MAX_PATH_VEC4];          // 0=fill, 1=stroke, 2=both
uniform vec4  u_pathStrokeHalfW[MAX_PATH_VEC4];
uniform vec4  u_pathFillOpacity[MAX_PATH_VEC4];
uniform vec4  u_pathStrokeOpacity[MAX_PATH_VEC4];
uniform vec3  u_pathFillColor[MAX_PATHS];
uniform vec3  u_pathStrokeColor[MAX_PATHS];

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

// Polynomial smooth-min — iquilezles.org/articles/smin. Returns
// (smin_value, h) where 'h' is the cubic mix-weight *toward 'a'*: h → 1
// when 'a' is much smaller (a dominates), h → 0 when 'b' is much
// smaller, h = 0.5 at crossover. Callers propagate the same 'h' into a
// mix(color_b, color_a, h) to blend per-path colors coherently with the
// SDF blend. Easy to flip the sign/argument order when refactoring —
// use a two-color contrast case to sanity-check.
//
// As k → 0, (b-a)/k tends to ±∞ and h clamps to 0/1, so the h factor
// hard-selects the nearer path and the -h*(1-h)*k bump vanishes — this
// degenerates cleanly to min() and hard color selection. k must be
// strictly positive (clamped at call site) to avoid the divide.
vec2 sminPoly(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  float d = mix(b, a, h) - h * (1.0 - h) * k;
  return vec2(d, h);
}

// Coupling between the per-pixel effects field and the local smin
// strength used for color-blend fusion in per-path composite mode. At
// rest 'effectsField = 0' so 'localK = 0' and the smin path collapses
// to a hard-min color selection — pre-multiplied through smoothstep it
// contributes nothing to the final blend. Tune up for stronger bridging
// under the cursor; too high fuses paths at the effect's periphery.
const float SMIN_COUPLING = 0.3;
// Width of the transition band between pure Porter-Duff (rest) and the
// full smin-blend result (active effects). Narrow — mostly a safety
// smoothstep to avoid any aliasing at the exact zero-field boundary.
const float BLEND_EPS = 0.002;

float sampleIdx(int i, vec2 uv) {
  // Unrolled per-index fetch — GLSL ES 1.00 disallows dynamic indexing
  // of sampler arrays, so the if-chain dispatches to MAX_PATHS named
  // samplers declared above. Per-path offset lookup uses a non-sampler
  // array, which dynamic indexing *is* allowed on.
  vec2 po = u_pathOffset[i];
  vec2 local = uv - po;
  vec2 t = clamp((local / u_bound) * 0.5 + 0.5, 0.0, 1.0);
${Fd}
  return 0.0;
}

float v4Idx(vec4 v, int i) {
  if (i == 0) return v.x;
  if (i == 1) return v.y;
  if (i == 2) return v.z;
  return v.w;
}
int i4Idx(ivec4 v, int i) {
  if (i == 0) return v.x;
  if (i == 1) return v.y;
  if (i == 2) return v.z;
  return v.w;
}

// Total subtractive deformation field at uv — the cursor pull plus any
// active ripple rings. Returned (rather than mutating an inout d) so
// call sites can subtract it from whichever SDF they're rendering:
//
//   - For fills, subtract from the scene SDF directly (d -= field).
//     The zero-contour bulges toward the cursor.
//   - For strokes, subtract from the sausage SDF abs(d) - halfWidth.
//     That virtual region (Minkowski sum of the curve and a disk of
//     radius halfWidth) is itself a proper fill SDF — distorting it
//     thickens/warps the ink near the cursor instead of producing the
//     amoeba-blob breakdown you get from applying the field to d and
//     then taking abs.
float effectsField(vec2 uv) {
  // Cursor pull — Gaussian falloff. Bounded peak (= u_cursorPull) at
  // r = 0; ~0 past 3·u_cursorRadius. u_cursorPull = 0 disables.
  vec2 delta = uv - u_cursor;
  float r2 = dot(delta, delta);
  float sigma = max(u_cursorRadius, 1e-4);
  float total = u_cursorPull * exp(-r2 / (2.0 * sigma * sigma));

  // Up to 4 concurrent shockwave rings. JS advances each ring's radius
  // (ripples[i].z) and tapers its amplitude (ripples[i].w) independently.
  // Dead slots (amplitude=0) contribute nothing.
  const float RIPPLE_WIDTH = 0.12;
  for (int i = 0; i < 4; i++) {
    vec4 r = u_ripples[i];
    float rd = length(uv - r.xy);
    float rp = (rd - r.z) / RIPPLE_WIDTH;
    total += r.w * exp(-rp * rp);
  }
  return total;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  uv *= 2.0 / u_zoom;
  uv -= u_offset;

  float field = effectsField(uv);

  if (u_compositeMode == 0) {
    // Legacy single-color smin. The effective k is boosted locally by
    // the effects field — at rest 'k = u_sminK' (author-chosen baseline);
    // under cursor/ripple the extra term strengthens fusion only where
    // the distortion reaches, so adjacent subpaths visibly bridge into
    // one liquid blob instead of each rippling independently. Output is
    // still a single color (the legacy silhouette paints 'u_color');
    // color-blend fusion is a per-path-mode feature.
    float k = max(u_sminK + field * SMIN_COUPLING, 1e-4);
    float d = sampleIdx(0, uv);
    for (int i = 1; i < MAX_PATHS; i++) {
      if (i >= u_pathCount) break;
      d = smin(d, sampleIdx(i, uv), k);
    }
    d -= field;
    float aa = fwidth(d) * 1.2;
    float mask = 1.0 - smoothstep(-aa, aa, d);
    gl_FragColor = vec4(u_color, mask * u_opacity);
    return;
  }

  // Per-path composite. Two results are computed and blended by
  // 'blendWeight', a smoothstep of 'localK = field * SMIN_COUPLING':
  //   (A) Porter-Duff "over" across independent distorted paths. Used
  //       at rest (blendWeight = 0) so per-path paint and document-order
  //       overlaps render exactly as the SVG specified.
  //   (B) Smin + color-blend across fills, with strokes composited
  //       "over" on top. Used under active effects (blendWeight → 1)
  //       so adjacent subpaths fuse into one liquid blob with smooth
  //       color gradients through the bridge.
  // The blend is smooth in 'localK' so crossing the effect threshold
  // doesn't flash a discontinuity; width is BLEND_EPS·2.
  float localK = field * SMIN_COUPLING;
  float blendWeight = smoothstep(0.0, 2.0 * BLEND_EPS, localK);

  // (A) Porter-Duff "over" — stable per-path composite. Identical to the
  // pre-session result; each path's fill and stroke distort independently
  // and stack in document order.
  vec4 overAcc = vec4(0.0);
  for (int i = 0; i < MAX_PATHS; i++) {
    if (i >= u_pathCount) break;
    float d = sampleIdx(i, uv);
    int mode = i4Idx(u_pathMode[i / 4], i - (i / 4) * 4);
    float fillOp   = v4Idx(u_pathFillOpacity[i / 4],   i - (i / 4) * 4);
    float strokeOp = v4Idx(u_pathStrokeOpacity[i / 4], i - (i / 4) * 4);
    float halfW    = v4Idx(u_pathStrokeHalfW[i / 4],   i - (i / 4) * 4);
    if (mode != 1) {
      float dFill = d - field;
      float aa = fwidth(dFill) * 1.2;
      float a = (1.0 - smoothstep(-aa, aa, dFill)) * fillOp;
      vec4 src = vec4(u_pathFillColor[i] * a, a);
      overAcc = src + overAcc * (1.0 - src.a);
    }
    if (mode != 0) {
      float de = abs(d) - halfW - field;
      float aaS = fwidth(de) * 1.2;
      float a = (1.0 - smoothstep(-aaS, aaS, de)) * strokeOp;
      vec4 src = vec4(u_pathStrokeColor[i] * a, a);
      overAcc = src + overAcc * (1.0 - src.a);
    }
  }

  // (B) Smin + color-blend across fills. Always computed (not gated on
  // blendWeight) — kept parallel with the WGSL twin, where gating on a
  // per-fragment predicate breaks the uniformity analyzer around
  // textureSample. Cost is two extra MAX_PATHS-bounded loops; when
  // blendWeight = 0 the mix below discards the result.
  float kK = max(localK, 1e-4);
  bool  hasFill = false;
  float accSdf  = 0.0;
  vec3  accCol  = vec3(0.0);
  float accOp   = 0.0;
  for (int i = 0; i < MAX_PATHS; i++) {
    if (i >= u_pathCount) break;
    int mode = i4Idx(u_pathMode[i / 4], i - (i / 4) * 4);
    if (mode != 1) {
      float d = sampleIdx(i, uv);
      float fillOp = v4Idx(u_pathFillOpacity[i / 4], i - (i / 4) * 4);
      vec3  col    = u_pathFillColor[i];
      if (!hasFill) {
        accSdf = d;
        accCol = col;
        accOp  = fillOp;
        hasFill = true;
      } else {
        vec2 sh = sminPoly(accSdf, d, kK);
        accCol = mix(col,    accCol, sh.y);
        accOp  = mix(fillOp, accOp,  sh.y);
        accSdf = sh.x;
      }
    }
  }
  vec4 blendAcc = vec4(0.0);
  if (hasFill) {
    float dFill = accSdf - field;
    float aa = fwidth(dFill) * 1.2;
    float a = (1.0 - smoothstep(-aa, aa, dFill)) * accOp;
    blendAcc = vec4(accCol * a, a);
  }
  // Strokes composite "over" the blended fill — they don't participate
  // in the color-blend smin (per-path half-widths make cross-path
  // sausage-SDF smin ill-defined).
  for (int i = 0; i < MAX_PATHS; i++) {
    if (i >= u_pathCount) break;
    int mode = i4Idx(u_pathMode[i / 4], i - (i / 4) * 4);
    if (mode != 0) {
      float d = sampleIdx(i, uv);
      float strokeOp = v4Idx(u_pathStrokeOpacity[i / 4], i - (i / 4) * 4);
      float halfW    = v4Idx(u_pathStrokeHalfW[i / 4],   i - (i / 4) * 4);
      float de = abs(d) - halfW - field;
      float aaS = fwidth(de) * 1.2;
      float a = (1.0 - smoothstep(-aaS, aaS, de)) * strokeOp;
      vec4 src = vec4(u_pathStrokeColor[i] * a, a);
      blendAcc = src + blendAcc * (1.0 - src.a);
    }
  }

  vec4 acc = mix(overAcc, blendAcc, blendWeight);
  vec3 rgb = acc.a > 1e-6 ? acc.rgb / acc.a : vec3(0.0);
  gl_FragColor = vec4(rgb, acc.a * u_opacity);
}
`,Om=`
#extension GL_OES_standard_derivatives : enable
precision highp float;

#define MAX_PATHS ${N}
#define MAX_PATH_VEC4 ${N/4}

uniform vec2  u_res;
uniform float u_zoom;
uniform vec2  u_offset;
uniform float u_opacity;
uniform float u_sminK;
uniform float u_bound;
uniform int   u_pathCount;
${Ad}

uniform sampler2D u_backdrop;
uniform float u_refractionStrength;
uniform float u_chromaticStrength;
uniform float u_fresnelStrength;
uniform float u_tintStrength;
uniform float u_frostStrength;
uniform vec3  u_rimColor;
uniform vec3  u_tintColor;

uniform vec2  u_cursor;
uniform float u_cursorPull;
uniform float u_cursorRadius;
uniform vec4  u_ripples[4];
uniform vec2  u_pathOffset[MAX_PATHS];

// Per-path render mode (0=fill, 1=stroke, 2=both) and stroke half-width.
// Mirrors the sample pipeline so stroked paths enter the glass shader as
// their sausage SDF (abs(d) - halfW, a proper 2D fill SDF). "both" is
// treated as fill here — a stroke overlay on top of a glass lens doesn't
// read visually. Packed four per vec4/ivec4 for 16 paths in 4 slots.
uniform ivec4 u_pathMode[MAX_PATH_VEC4];
uniform vec4  u_pathStrokeHalfW[MAX_PATH_VEC4];

// Dynamic-SDF mode plumbing. When u_dynamicSdf is true, the lens SDF at
// each pixel is mix(texture(u_sdf0, st), texture(u_sdfB, st), u_blendT)
// — two combined SDFs (one per side of a morph bake) blended per
// fragment. Per-path SDFs and smin are not used in this mode because the
// flatten-then-bake morph pipeline has already unioned each side into a
// single combined SDF; the result is a proper fill SDF that all the glass
// math (height field, normals, refraction, Fresnel) operates on
// unchanged. The flag is intentionally generic — anything that wants to
// drive the glass SDF dynamically (chained morphs, displacement effects,
// procedural distortion) can reuse it by binding a second texture and
// feeding a blend parameter.
uniform bool      u_dynamicSdf;
uniform sampler2D u_sdfB;
uniform float     u_blendT;

// Per-path tint plumbing. In dynamic-SDF (glass+morph) mode, tint at
// each pixel comes from per-path colors looked up via the same path-
// index textures the morph render pipeline uses — so a multi-color SVG
// flowing under a glass lens shows region-by-region tinting that lerps
// across the morph. When u_useOverrideA/B is set, the side falls back to
// the existing u_tintColor material (frosted blue glass by default); this
// preserves the look of single-color logos and lets callers force a flat
// tint via color/toColor props.
uniform sampler2D u_pathIdxA;
uniform sampler2D u_pathIdxB;
uniform vec3  u_pathColorsA[MAX_PATHS];
uniform vec3  u_pathColorsB[MAX_PATHS];
uniform int   u_useOverrideA;
uniform int   u_useOverrideB;
uniform vec3  u_morphColorA;
uniform vec3  u_morphColorB;

${xi("A")}
${xi("B")}

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

float sampleSdf(int i, vec2 uv) {
  vec2 po = u_pathOffset[i];
  vec2 local = uv - po;
  vec2 t = clamp((local / u_bound) * 0.5 + 0.5, 0.0, 1.0);
${Fd}
  return 0.0;
}

float v4Idx(vec4 v, int i) {
  if (i == 0) return v.x;
  if (i == 1) return v.y;
  if (i == 2) return v.z;
  return v.w;
}
int i4Idx(ivec4 v, int i) {
  if (i == 0) return v.x;
  if (i == 1) return v.y;
  if (i == 2) return v.z;
  return v.w;
}

// Coupling between the effects field and the local smin strength used
// for cross-path fusion in glass. Added to 'u_sminK' so the at-rest
// fusion baseline is preserved (when field=0, effective k = u_sminK)
// and the cursor region gets a stronger bridge on top. Tune down
// specifically for glass if strong cursor pulls over-fuse.
const float GLASS_SMIN_COUPLING = 0.3;

// Converts a raw per-path SDF to the right fill-SDF for glass rendering:
//   - fill (0) or both (2): the scene SDF as-is
//   - stroke (1):           abs(d) - halfW, the sausage SDF (the curve
//                           dilated by halfW — itself a proper 2D fill
//                           SDF, so the glass math downstream applies
//                           unchanged).
// Then smooth-unions across all active paths with the caller-supplied
// 'k'. Caller injects 'u_sminK + localK' so fusion strengthens under
// the cursor (see 'lens' below).
float shapeSdf(vec2 uv, float k) {
  k = max(k, 1e-4);
  float d0 = sampleSdf(0, uv);
  int m0 = i4Idx(u_pathMode[0], 0);
  float h0 = v4Idx(u_pathStrokeHalfW[0], 0);
  float d = (m0 == 1) ? (abs(d0) - h0) : d0;
  for (int i = 1; i < MAX_PATHS; i++) {
    if (i >= u_pathCount) break;
    float di = sampleSdf(i, uv);
    int mi = i4Idx(u_pathMode[i / 4], i - (i / 4) * 4);
    float hi = v4Idx(u_pathStrokeHalfW[i / 4], i - (i / 4) * 4);
    float ci = (mi == 1) ? (abs(di) - hi) : di;
    d = smin(d, ci, k);
  }
  return d;
}

// Mirror of the sample shader's effectsField. Subtracted from the lens
// SDF at every evaluation site so glass composes with cursor pull and
// ripple deformations.
float effectsField(vec2 uv) {
  vec2 delta = uv - u_cursor;
  float r2 = dot(delta, delta);
  float sigma = max(u_cursorRadius, 1e-4);
  float total = u_cursorPull * exp(-r2 / (2.0 * sigma * sigma));
  const float RIPPLE_WIDTH = 0.12;
  for (int i = 0; i < 4; i++) {
    vec4 r = u_ripples[i];
    float rd = length(uv - r.xy);
    float rp = (rd - r.z) / RIPPLE_WIDTH;
    total += r.w * exp(-rp * rp);
  }
  return total;
}

// Combined lens SDF at 'uv': the silhouette minus the distortion field.
//
// Two source modes selected by u_dynamicSdf:
//   - false: cross-path smin over the per-path baked SDFs (existing
//     glass behaviour). Both the smin strength and the SDF subtraction
//     use the same field at this 'uv', so under the cursor the paths
//     fuse more strongly *and* the boundary bulges toward the cursor —
//     one coherent localized deformation.
//   - true:  per-fragment lerp mix(dA, dB, u_blendT) of two combined
//     SDFs sampled from u_sdf0 (shape A) and u_sdfB (shape B). No
//     smin is applied because each side was already flattened-and-baked
//     into a single proper fill SDF by the morph pipeline (per-path
//     stroke-to-sausage conversion happens at bake time). The same
//     effects field still subtracts so cursor/ripple deformations
//     compose with the morph.
float lens(vec2 uv) {
  float f = effectsField(uv);
  if (u_dynamicSdf) {
    vec2 st = clamp((uv / u_bound) * 0.5 + 0.5, 0.0, 1.0);
    float dA = texture2D(u_sdf0, st).r;
    float dB = texture2D(u_sdfB, st).r;
    return mix(dA, dB, u_blendT) - f;
  }
  return shapeSdf(uv, u_sminK + f * GLASS_SMIN_COUPLING) - f;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  uv *= 2.0 / u_zoom;
  uv -= u_offset;

  float d = lens(uv);
  float aa = fwidth(d) * 1.2;
  float insideMask = 1.0 - smoothstep(-aa, aa, d);

  // --- Lens height field ---
  //
  // Every function of the SDF has a zero-gradient set along the shape's
  // medial axis — that's a property of the SDF itself (local extremum
  // of depth), not something blurring can remove. Using such a field
  // directly as a lens produces faceted refraction along the creases,
  // no matter how finely you smooth.
  //
  // So we don't build the height field from the SDF. We build it from
  // a *smoothed indicator function*: convert each SDF sample to a soft
  // inside/outside value via smoothstep (1 inside, 0 outside), then
  // average over a 9-tap radial kernel. The resulting h is a genuine
  // smooth dome — flat plateau in the interior (indicator=1 everywhere
  // in the neighborhood) and a smooth rising edge at the rim. Its
  // gradient is rim-concentrated without medial-axis creases, which is
  // the actual geometry of a liquid-glass bevel.
  //
  // 9 SDF evaluations per fragment, per path. For typical 1-path logos
  // that's 9 texture reads; well within budget.
  const float SDF_BLUR = 0.08;   // radial sample distance in SDF space
  const float SOFT_EDGE = 0.03;  // half-width of the inside/outside ramp
  const float D = 0.70710678 * SDF_BLUR;  // diagonal tap distance (= B/√2)

  float h  = (1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv))) * 2.0;
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2(SDF_BLUR, 0.0)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv - vec2(SDF_BLUR, 0.0)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2(0.0, SDF_BLUR)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv - vec2(0.0, SDF_BLUR)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2( D,  D)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2( D, -D)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2(-D,  D)));
  h += 1.0 - smoothstep(-SOFT_EDGE, SOFT_EDGE, lens(uv + vec2(-D, -D)));
  h /= 10.0;  // center weight 2 + 8 outer = 10

  // Gradient of the smoothed indicator. Points *inward* (toward the
  // interior plateau where h → 1). Magnitude peaks at the rim and falls
  // to zero in the interior — exactly the rim-concentrated profile we
  // want, derived naturally rather than hand-tuned.
  vec2 grad = vec2(dFdx(h), dFdy(h));
  float gradMag = length(grad);
  vec2 normal = grad / max(gradMag, 1e-6);

  // Lens intensity: (1 - h) doubled. At the rim h≈0.5 so peaks at 1; in
  // the flat interior h=1 so decays to 0. Replaces the old explicit
  // exp(-depth*k) profile — this one falls out of the height field.
  float lensAmount = clamp((1.0 - h) * 2.0, 0.0, 1.0);

  // Interior proxy for tint and frost, also derived from h so tint
  // bands follow the smoothed height field instead of the SDF's
  // iso-contours (which have medial-axis cusps and would paint those
  // same creases into the tint).
  float interior = smoothstep(0.5, 1.0, h);

  // Convert the isotropic SDF-space offset to backdrop-uv space and
  // refract along the inward normal.
  vec2 sdfToUv = vec2(min(u_res.x, u_res.y)) / u_res;
  vec2 refractOffset = normal * h * (1.0 - h) * lensAmount * u_refractionStrength * sdfToUv;

  vec2 backdropUv = gl_FragCoord.xy / u_res;
  vec2 offR = backdropUv + refractOffset * (1.0 - u_chromaticStrength);
  vec2 offG = backdropUv + refractOffset;
  vec2 offB = backdropUv + refractOffset * (1.0 + u_chromaticStrength);

  // Backdrop color, two-part:
  //   - Chromatic sample, sharp, used at the rim. Three taps at
  //     channel-specific offsets. Chroma scales with lensAmount because
  //     it rides on refractOffset, so the fringe only appears at the rim.
  //   - Frosted sample, soft, used across the interior. A 5-tap cross
  //     average at uvG gives a cheap box-ish blur. Radius scales with
  //     interior so the rim stays sharp; full blur in the center reads
  //     as the "slightly frosted window" liquid-glass look.
  vec3 uvG_rgb = texture2D(u_backdrop, offG).rgb;
  float rCh = texture2D(u_backdrop, offR).r;
  float bCh = texture2D(u_backdrop, offB).b;
  vec3 chromaticColor = vec3(rCh, uvG_rgb.g, bCh);

  // Always sample unconditionally. When frostPx≈0 the four offsets
  // collapse onto offG and the average is a no-op; keeping it out of a
  // branch also dodges derivative-uniformity concerns in the WGSL twin.
  float frostPx = u_frostStrength * interior;
  vec2 fs = vec2(frostPx) / u_res;
  vec3 frost = uvG_rgb;
  frost += texture2D(u_backdrop, offG + vec2(fs.x, 0.0)).rgb;
  frost += texture2D(u_backdrop, offG - vec2(fs.x, 0.0)).rgb;
  frost += texture2D(u_backdrop, offG + vec2(0.0, fs.y)).rgb;
  frost += texture2D(u_backdrop, offG - vec2(0.0, fs.y)).rgb;
  frost *= 0.2;

  // Blend: rim = crisp chromatic split, interior = frost.
  vec3 color = mix(frost, chromaticColor, lensAmount);

  // Fresnel rim — bright narrow band along the shape's edge.
  float rim = smoothstep(-0.03, -0.005, d) * (1.0 - smoothstep(-0.005, 0.0, d));
  color += u_rimColor * rim * u_fresnelStrength;

  // Interior tint — slight color wash in proportion to depth. In glass+
  // morph mode, tint is per-pixel: sample each side's path-index map and
  // look up the corresponding per-path color, then lerp by u_blendT.
  // u_useOverrideA/B falls back to the single-color material (default
  // frosted blue glass via u_tintColor, or u_morphColorA/B when the
  // caller forced a flat color through the React color/toColor props).
  // In plain glass mode (no dynamic SDF) the existing single u_tintColor
  // material is preserved unchanged.
  vec3 tintColor;
  if (u_dynamicSdf) {
    vec2 st = clamp((uv / u_bound) * 0.5 + 0.5, 0.0, 1.0);
    vec3 tA;
    if (u_useOverrideA == 1) {
      tA = u_morphColorA;
    } else {
      int idxA = int(floor(texture2D(u_pathIdxA, st).r * 15.0 + 0.5));
      tA = lookupPathColorA(idxA);
    }
    vec3 tB;
    if (u_useOverrideB == 1) {
      tB = u_morphColorB;
    } else {
      int idxB = int(floor(texture2D(u_pathIdxB, st).r * 15.0 + 0.5));
      tB = lookupPathColorB(idxB);
    }
    tintColor = mix(tA, tB, u_blendT);
  } else {
    tintColor = u_tintColor;
  }
  color = mix(color, tintColor, clamp(interior * u_tintStrength, 0.0, 1.0));

  gl_FragColor = vec4(color, insideMask * u_opacity);
}
`,Dm=`
#extension GL_OES_standard_derivatives : enable
precision highp float;

#define MAX_PATHS ${N}

uniform vec2  u_res;
uniform float u_zoom;
uniform vec2  u_offset;
uniform float u_opacity;
uniform float u_bound;
uniform float u_morphT;
uniform sampler2D u_sdfA;
uniform sampler2D u_sdfB;
uniform sampler2D u_pathIdxA;
uniform sampler2D u_pathIdxB;
uniform vec3  u_colorA;
uniform vec3  u_colorB;
uniform vec3  u_pathColorsA[MAX_PATHS];
uniform vec3  u_pathColorsB[MAX_PATHS];
uniform int   u_useOverrideA;
uniform int   u_useOverrideB;

${xi("A")}
${xi("B")}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  uv *= 2.0 / u_zoom;
  uv -= u_offset;

  vec2 st = clamp((uv / u_bound) * 0.5 + 0.5, 0.0, 1.0);
  float dA = texture2D(u_sdfA, st).r;
  float dB = texture2D(u_sdfB, st).r;
  float d = mix(dA, dB, u_morphT);
  float aa = fwidth(d) * 1.2;
  float mask = 1.0 - smoothstep(-aa, aa, d);

  // Per-side color resolution. Override ⇒ flat color; otherwise sample
  // the path-index map and look up the per-path color. The +0.5 inside
  // round() handles half-float rounding-to-nearest off the [0..15]/15
  // encoding the bake writes.
  vec3 colorA;
  if (u_useOverrideA == 1) {
    colorA = u_colorA;
  } else {
    int idxA = int(floor(texture2D(u_pathIdxA, st).r * 15.0 + 0.5));
    colorA = lookupPathColorA(idxA);
  }
  vec3 colorB;
  if (u_useOverrideB == 1) {
    colorB = u_colorB;
  } else {
    int idxB = int(floor(texture2D(u_pathIdxB, st).r * 15.0 + 0.5));
    colorB = lookupPathColorB(idxB);
  }
  vec3 color = mix(colorA, colorB, u_morphT);
  gl_FragColor = vec4(color, mask * u_opacity);
}
`,Mm=`
#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2  u_res;
uniform float u_zoom;
uniform vec2  u_offset;
uniform vec3  u_color;
uniform float u_opacity;
${Pd}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  uv *= 2.0 / u_zoom;
  uv -= u_offset;
  int idx = 0;
  float d = sceneSDF(uv, idx);
  float aa = fwidth(d) * 1.2;
  float mask = 1.0 - smoothstep(-aa, aa, d);
  gl_FragColor = vec4(u_color, mask * u_opacity);
  //gl_FragColor = vec4(normal * 0.5 + 0.5, 0.0, insideMask);
}
`,Co=1.2,Po=1024,ir={refractionStrength:.05,chromaticStrength:.015,fresnelStrength:.3,tintStrength:.1,frostStrength:2.5,rimColor:[1,1,1],tintColor:[.91,.94,1]},Ao=N,dl=N+1,Fo=N+2,bo=N+3,Uo=0;class pl{constructor(){this.kind="webgl",this.gl=null,this.buffer=null,this.bakeProgram=null,this.bakeUniforms={},this.sampleProgram=null,this.directProgram=null,this.glassProgram=null,this.morphProgram=null,this.morphTexA=null,this.morphTexB=null,this.morphPathIdxTexA=null,this.morphPathIdxTexB=null,this.morphSegmentTextures=[],this.dummyPathIdxTex=null,this.morphUniforms={},this.textures=[],this.segmentTextures=[],this.directSegmentTexture=null,this.backdropTexture=null,this.sampleUniforms={},this.directUniforms={},this.glassUniforms={},this._mode="baked",this._pathCount=0,this.disposed=!1,this.ripplesBuf=new Float32Array(16),this.pathOffsetBuf=new Float32Array(N*2),this.pathModeBuf=new Int32Array(N),this.pathScalarBuf=new Float32Array(N),this.pathVec3Buf=new Float32Array(N*3),this.morphColorsABuf=new Float32Array(N*3),this.morphColorsBBuf=new Float32Array(N*3),this.bakePathEndsBuf=new Int32Array(N),this.bakePathModeBuf=new Int32Array(N),this.bakePathHalfWBuf=new Float32Array(N),this.halfFloatType=0,this.segmentFormat=null}get mode(){return this._mode}get pathCount(){return this._pathCount}async init({canvas:t,mark:r,backdrop:n,morphTo:o,morphFillRule:i}){if(Xr(r,N,wt),o&&Xr(o,N,wt),o){const f=Kn(r,o);Xu(f.markA,"A"),Xu(f.markB,"B")}const l=t.getContext("webgl",{antialias:!0,premultipliedAlpha:!1,alpha:!0,preserveDrawingBuffer:!1});if(!l)throw new Error("WebGL not supported");if(this.gl=l,!l.getExtension("OES_standard_derivatives"))throw new Error("OES_standard_derivatives not available");const s=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),a=n?N+4:N;if(s<a)throw new Error(`this GPU exposes ${s} fragment texture units; bezier-sdf needs ${a} (MAX_PATHS=${N}${n?" + backdrop + sdfB + 2× pathIdx":""})`);l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA);const u=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,u),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),l.STATIC_DRAW),this.buffer=u;const p=Nm(l);if(!p)throw new Error("OES_texture_float or OES_texture_half_float required (neither available)");if(this.segmentFormat=p,o){if(this._pathCount=1,!this.initMorph(l,r,o,i??"nonzero",n))throw new Error("morph effect requires half-float texture extensions (unavailable in this context)");return}if(this._pathCount=r.paths.length,!this.tryInitBaked(l,r.paths)){if(n)throw new Error("liquid-glass requires half-float texture extensions (unavailable in this context)");this._mode="direct";const f=r.paths.flatMap(v=>v.segments);this.initDirect(l,f),console.info("[bezier-sdf] half-float textures unavailable, using direct shader (no per-path animation)")}n&&this.initGlass(l,n)}initMorph(t,r,n,o,i){const l=t.getExtension("OES_texture_half_float"),s=t.getExtension("EXT_color_buffer_half_float"),a=t.getExtension("OES_texture_half_float_linear");if(!l||!s||!a)return!1;const u=l.HALF_FLOAT_OES;if(this.halfFloatType=u,!this.initBakeProgram(t))return!1;const p=this.bakeProgram,d=Kn(r,n),f=o==="evenodd"?1:0,v=$u(d.markA),g=$u(d.markB),x=[],E=D=>{D.forEach(W=>W&&t.deleteTexture(W)),x.forEach(W=>t.deleteTexture(W))},h=this.uploadSegmentTexture(t,v.segments);x.push(h);const c=this.bakeOne(t,p,h,v.segments.length,u,v.pathEnds,f,v.pathModes,v.pathHalfW,0);if(!c)return E([]),t.deleteProgram(p),this.bakeProgram=null,!1;const m=this.bakeOne(t,p,h,v.segments.length,u,v.pathEnds,f,v.pathModes,v.pathHalfW,1);if(!m)return E([c]),t.deleteProgram(p),this.bakeProgram=null,!1;const _=this.uploadSegmentTexture(t,g.segments);x.push(_);const w=this.bakeOne(t,p,_,g.segments.length,u,g.pathEnds,f,g.pathModes,g.pathHalfW,0);if(!w)return E([c,m]),t.deleteProgram(p),this.bakeProgram=null,!1;const S=this.bakeOne(t,p,_,g.segments.length,u,g.pathEnds,f,g.pathModes,g.pathHalfW,1);if(!S)return E([c,m,w]),t.deleteProgram(p),this.bakeProgram=null,!1;if(t.bindFramebuffer(t.FRAMEBUFFER,null),this.morphTexA=c,this.morphTexB=w,this.morphPathIdxTexA=m,this.morphPathIdxTexB=S,this.morphSegmentTextures=x,i)return this.textures=[c],this.initGlass(t,i),t.activeTexture(t.TEXTURE0+dl),t.bindTexture(t.TEXTURE_2D,w),t.activeTexture(t.TEXTURE0+Fo),t.bindTexture(t.TEXTURE_2D,m),t.activeTexture(t.TEXTURE0+bo),t.bindTexture(t.TEXTURE_2D,S),!0;const T=hn(t,To,Dm);if(!T)return E([c,m,w,S]),this.morphTexA=null,this.morphTexB=null,this.morphPathIdxTexA=null,this.morphPathIdxTexB=null,this.morphSegmentTextures=[],t.deleteProgram(p),this.bakeProgram=null,!1;this.morphProgram=T,t.useProgram(T);const F=t.getAttribLocation(T,"a_pos");t.enableVertexAttribArray(F),t.vertexAttribPointer(F,2,t.FLOAT,!1,0,0);const R=D=>t.getUniformLocation(T,D);return this.morphUniforms={res:R("u_res"),zoom:R("u_zoom"),offset:R("u_offset"),opacity:R("u_opacity"),bound:R("u_bound"),morphT:R("u_morphT"),colorA:R("u_colorA"),colorB:R("u_colorB"),pathColorsA:R("u_pathColorsA[0]"),pathColorsB:R("u_pathColorsB[0]"),useOverrideA:R("u_useOverrideA"),useOverrideB:R("u_useOverrideB")},t.uniform1i(R("u_sdfA"),0),t.uniform1i(R("u_sdfB"),1),t.uniform1i(R("u_pathIdxA"),2),t.uniform1i(R("u_pathIdxB"),3),t.uniform1f(this.morphUniforms.bound,Co),!0}initGlass(t,r){const n=hn(t,To,Om);if(!n)throw new Error("liquid-glass shader failed to link");this.glassProgram=n,t.useProgram(n);const o=t.getAttribLocation(n,"a_pos");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);const i=s=>t.getUniformLocation(n,s);this.glassUniforms={res:i("u_res"),zoom:i("u_zoom"),offset:i("u_offset"),opacity:i("u_opacity"),sminK:i("u_sminK"),bound:i("u_bound"),pathCount:i("u_pathCount"),backdrop:i("u_backdrop"),refractionStrength:i("u_refractionStrength"),chromaticStrength:i("u_chromaticStrength"),fresnelStrength:i("u_fresnelStrength"),tintStrength:i("u_tintStrength"),frostStrength:i("u_frostStrength"),rimColor:i("u_rimColor"),tintColor:i("u_tintColor"),cursor:i("u_cursor"),cursorPull:i("u_cursorPull"),cursorRadius:i("u_cursorRadius"),ripples:i("u_ripples"),pathOffset:i("u_pathOffset[0]"),pathMode:i("u_pathMode[0]"),pathStrokeHalfW:i("u_pathStrokeHalfW[0]"),dynamicSdf:i("u_dynamicSdf"),blendT:i("u_blendT"),pathColorsA:i("u_pathColorsA[0]"),pathColorsB:i("u_pathColorsB[0]"),useOverrideA:i("u_useOverrideA"),useOverrideB:i("u_useOverrideB"),morphColorA:i("u_morphColorA"),morphColorB:i("u_morphColorB")};for(let s=0;s<N;s++)t.uniform1i(i(`u_sdf${s}`),s);t.uniform1i(this.glassUniforms.backdrop,Ao),t.uniform1i(i("u_sdfB"),dl),t.uniform1i(i("u_pathIdxA"),Fo),t.uniform1i(i("u_pathIdxB"),bo),t.uniform1f(this.glassUniforms.bound,Co),t.uniform1i(this.glassUniforms.pathCount,this._pathCount),t.uniform1i(this.glassUniforms.dynamicSdf,0),t.uniform1f(this.glassUniforms.blendT,0),t.uniform1i(this.glassUniforms.useOverrideA,1),t.uniform1i(this.glassUniforms.useOverrideB,1),this.dummyPathIdxTex||(this.dummyPathIdxTex=Lm(t,this.halfFloatType),this.dummyPathIdxTex&&(t.activeTexture(t.TEXTURE0+Fo),t.bindTexture(t.TEXTURE_2D,this.dummyPathIdxTex),t.activeTexture(t.TEXTURE0+bo),t.bindTexture(t.TEXTURE_2D,this.dummyPathIdxTex)));const l=t.createTexture();if(t.activeTexture(t.TEXTURE0+Ao),t.bindTexture(t.TEXTURE_2D,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),this.backdropTexture=l,this.sampleProgram){t.useProgram(this.sampleProgram);const s=t.getAttribLocation(this.sampleProgram,"a_pos");t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0)}}tryInitBaked(t,r){const n=t.getExtension("OES_texture_half_float"),o=t.getExtension("EXT_color_buffer_half_float"),i=t.getExtension("OES_texture_half_float_linear");if(!n||!o||!i)return!1;const l=n.HALF_FLOAT_OES;if(this.halfFloatType=l,!this.initBakeProgram(t))return!1;const s=this.bakeProgram,a=[],u=[];for(const v of r){const g=this.uploadSegmentTexture(t,v.segments);u.push(g);const x=this.bakeOne(t,s,g,v.segments.length,l);if(!x)return a.forEach(E=>t.deleteTexture(E)),u.forEach(E=>t.deleteTexture(E)),t.deleteProgram(s),this.bakeProgram=null,!1;a.push(x)}this.textures=a,this.segmentTextures=u,t.bindFramebuffer(t.FRAMEBUFFER,null);const p=hn(t,To,Bm);if(!p)return a.forEach(v=>t.deleteTexture(v)),this.textures=[],t.deleteProgram(s),this.bakeProgram=null,!1;this.sampleProgram=p,t.useProgram(p);const d=t.getAttribLocation(p,"a_pos");t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0);const f=v=>t.getUniformLocation(p,v);this.sampleUniforms={res:f("u_res"),zoom:f("u_zoom"),offset:f("u_offset"),color:f("u_color"),opacity:f("u_opacity"),bound:f("u_bound"),sminK:f("u_sminK"),pathCount:f("u_pathCount"),cursor:f("u_cursor"),cursorPull:f("u_cursorPull"),cursorRadius:f("u_cursorRadius"),ripples:f("u_ripples"),compositeMode:f("u_compositeMode"),pathOffset:f("u_pathOffset[0]"),pathMode:f("u_pathMode[0]"),pathStrokeHalfW:f("u_pathStrokeHalfW[0]"),pathFillOpacity:f("u_pathFillOpacity[0]"),pathStrokeOpacity:f("u_pathStrokeOpacity[0]"),pathFillColor:f("u_pathFillColor[0]"),pathStrokeColor:f("u_pathStrokeColor[0]")};for(let v=0;v<N;v++)t.uniform1i(f(`u_sdf${v}`),v);return t.uniform1f(this.sampleUniforms.bound,Co),t.uniform1i(this.sampleUniforms.pathCount,r.length),!0}bakeOne(t,r,n,o,i,l=[o],s=0,a=[0],u=[0],p=0){const d=t.createTexture(),f=p===1?t.NEAREST:t.LINEAR;return t.bindTexture(t.TEXTURE_2D,d),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,Po,Po,0,t.RGBA,i,null),this.runBakeIntoTexture(t,r,d,n,o,l,s,a,u,p)?d:(t.deleteTexture(d),null)}runBakeIntoTexture(t,r,n,o,i,l=[i],s=0,a=[0],u=[0],p=0){const d=t.createFramebuffer();if(t.bindFramebuffer(t.FRAMEBUFFER,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE)return t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(d),!1;t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.useProgram(r);const f=t.getAttribLocation(r,"a_pos");t.enableVertexAttribArray(f),t.vertexAttribPointer(f,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0+Uo),t.bindTexture(t.TEXTURE_2D,o);const v=this.bakeUniforms;t.uniform1f(v.bound,Co),t.uniform1i(v.segCount,i),t.uniform1f(v.segmentTexWidth,i*2),t.uniform1i(v.pathCount,l.length),t.uniform1i(v.fillRule,s),t.uniform1i(v.bakeOutput,p);const g=this.bakePathEndsBuf;for(let h=0;h<N;h++)g[h]=l[h]??0;t.uniform1iv(v.pathEnds,g);const x=this.bakePathModeBuf;for(let h=0;h<N;h++)x[h]=a[h]??0;t.uniform1iv(v.pathMode,x);const E=this.bakePathHalfWBuf;for(let h=0;h<N;h++)E[h]=u[h]??0;return t.uniform1fv(v.pathHalfW,E),t.viewport(0,0,Po,Po),t.disable(t.BLEND),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,6),t.enable(t.BLEND),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(d),!0}initBakeProgram(t){if(this.bakeProgram)return!0;const r=hn(t,Um,Rm);return r?(this.bakeProgram=r,t.useProgram(r),this.bakeUniforms={bound:t.getUniformLocation(r,"u_bound"),segCount:t.getUniformLocation(r,"u_segCount"),segmentTexWidth:t.getUniformLocation(r,"u_segmentTexWidth"),pathCount:t.getUniformLocation(r,"u_pathCount"),pathEnds:t.getUniformLocation(r,"u_pathEnds[0]"),pathMode:t.getUniformLocation(r,"u_pathMode[0]"),pathHalfW:t.getUniformLocation(r,"u_pathHalfW[0]"),fillRule:t.getUniformLocation(r,"u_fillRule"),bakeOutput:t.getUniformLocation(r,"u_bakeOutput")},t.uniform1i(t.getUniformLocation(r,"u_segments"),Uo),!0):!1}uploadSegmentTexture(t,r){const n=this.segmentFormat;if(!n)throw new Error("segmentFormat not initialized");const o=r.length,i=Math.max(o*2,1),l=new Float32Array(i*4);for(let u=0;u<o;u++){const p=r[u];l[u*8+0]=p[0],l[u*8+1]=p[1],l[u*8+2]=p[2],l[u*8+3]=p[3],l[u*8+4]=p[4],l[u*8+5]=p[5],l[u*8+6]=p[6],l[u*8+7]=p[7]}const s=n.precision==="float"?l:Ku(l),a=t.createTexture();if(!a)throw new Error("createTexture returned null");return t.bindTexture(t.TEXTURE_2D,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,1,0,t.RGBA,n.type,s),a}reuploadSegmentTexture(t,r,n){const o=this.segmentFormat;if(!o)throw new Error("segmentFormat not initialized");const i=n.length,l=Math.max(i*2,1),s=new Float32Array(l*4);for(let u=0;u<i;u++){const p=n[u];s[u*8+0]=p[0],s[u*8+1]=p[1],s[u*8+2]=p[2],s[u*8+3]=p[3],s[u*8+4]=p[4],s[u*8+5]=p[5],s[u*8+6]=p[6],s[u*8+7]=p[7]}const a=o.precision==="float"?s:Ku(s);t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,l,1,0,t.RGBA,o.type,a)}rebake(t){const r=this.gl;if(!(!r||this.disposed)&&!(this._mode!=="baked"||!this.bakeProgram)){if(t.paths.length!==this.textures.length)throw new Error(`rebake: mark has ${t.paths.length} paths but renderer was init'd with ${this.textures.length}`);Xr(t,N,wt);for(let n=0;n<t.paths.length;n++){const o=t.paths[n].segments,i=this.segmentTextures[n];this.reuploadSegmentTexture(r,i,o),this.runBakeIntoTexture(r,this.bakeProgram,this.textures[n],i,o.length)}if(this.sampleProgram){r.useProgram(this.sampleProgram);const n=r.getAttribLocation(this.sampleProgram,"a_pos");r.enableVertexAttribArray(n),r.vertexAttribPointer(n,2,r.FLOAT,!1,0,0)}}}setBackdrop(t){const r=this.gl;!r||this.disposed||this.backdropTexture&&(r.activeTexture(r.TEXTURE0+Ao),r.bindTexture(r.TEXTURE_2D,this.backdropTexture),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t))}initDirect(t,r){if(r.length>wt)throw new Error(`direct mode has ${r.length} combined segments but the bake shader's loop bound is ${wt}. Simplify the source SVG (Inkscape → Path → Simplify) or merge duplicate paths.`);const n=hn(t,To,Mm);if(!n)throw new Error("direct shader failed to link");this.directProgram=n,t.useProgram(n);const o=t.getAttribLocation(n,"a_pos");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0),this.directUniforms={res:t.getUniformLocation(n,"u_res"),zoom:t.getUniformLocation(n,"u_zoom"),offset:t.getUniformLocation(n,"u_offset"),color:t.getUniformLocation(n,"u_color"),opacity:t.getUniformLocation(n,"u_opacity"),segCount:t.getUniformLocation(n,"u_segCount"),segmentTexWidth:t.getUniformLocation(n,"u_segmentTexWidth"),pathCount:t.getUniformLocation(n,"u_pathCount"),pathEnds:t.getUniformLocation(n,"u_pathEnds[0]"),fillRule:t.getUniformLocation(n,"u_fillRule")},t.uniform1i(t.getUniformLocation(n,"u_segments"),Uo),this.directSegmentTexture=this.uploadSegmentTexture(t,r),t.uniform1i(this.directUniforms.segCount,r.length),t.uniform1f(this.directUniforms.segmentTexWidth,r.length*2),t.uniform1i(this.directUniforms.pathCount,1);const i=this.bakePathEndsBuf;i.fill(0),i[0]=r.length,t.uniform1iv(this.directUniforms.pathEnds,i),t.uniform1i(this.directUniforms.fillRule,1)}fillPathOffsets(t){const r=this.pathOffsetBuf;for(let n=0;n<N;n++){const o=t.pathOffsets[n];r[n*2]=o?o[0]:0,r[n*2+1]=o?o[1]:0}return r}fillPathModes(t){const r=this.pathModeBuf,n=t.pathModes;for(let o=0;o<N;o++){const i=n==null?void 0:n[o];r[o]=i==="stroke"?1:i==="both"?2:0}return r}fillPathScalars(t,r){const n=this.pathScalarBuf;for(let o=0;o<N;o++)n[o]=(t==null?void 0:t[o])??r;return n}fillPathColors(t){const r=this.pathVec3Buf;for(let n=0;n<N;n++){const o=t==null?void 0:t[n];r[n*3]=(o==null?void 0:o[0])??0,r[n*3+1]=(o==null?void 0:o[1])??0,r[n*3+2]=(o==null?void 0:o[2])??0}return r}render(t){var n;const r=this.gl;if(!(!r||this.disposed)){if(r.viewport(0,0,t.width,t.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),t.morph&&this.morphProgram&&this.morphTexA&&this.morphTexB){r.useProgram(this.morphProgram),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.morphTexA),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,this.morphTexB),this.morphPathIdxTexA&&(r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.morphPathIdxTexA)),this.morphPathIdxTexB&&(r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,this.morphPathIdxTexB));const o=this.morphUniforms;r.uniform2f(o.res,t.width,t.height),r.uniform1f(o.zoom,t.zoom),r.uniform2f(o.offset,t.offsetX,t.offsetY),r.uniform1f(o.opacity,t.opacity),r.uniform1f(o.morphT,t.morph.t);const i=t.morph.colorA,l=t.morph.colorB;r.uniform3f(o.colorA,i[0],i[1],i[2]),r.uniform3f(o.colorB,l[0],l[1],l[2]);const s=!t.morph.pathColorsA||t.morph.pathColorsA.length===0,a=!t.morph.pathColorsB||t.morph.pathColorsB.length===0;r.uniform1i(o.useOverrideA,s?1:0),r.uniform1i(o.useOverrideB,a?1:0),s||r.uniform3fv(o.pathColorsA,Ro(this.morphColorsABuf,t.morph.pathColorsA)),a||r.uniform3fv(o.pathColorsB,Ro(this.morphColorsBBuf,t.morph.pathColorsB)),r.drawArrays(r.TRIANGLES,0,6);return}if(t.glass&&this.glassProgram&&this.backdropTexture){r.useProgram(this.glassProgram);for(let d=0;d<this.textures.length;d++)r.activeTexture(r.TEXTURE0+d),r.bindTexture(r.TEXTURE_2D,this.textures[d]);r.activeTexture(r.TEXTURE0+Ao),r.bindTexture(r.TEXTURE_2D,this.backdropTexture);const o=!!t.morph&&this.morphTexB!==null;o&&(r.activeTexture(r.TEXTURE0+dl),r.bindTexture(r.TEXTURE_2D,this.morphTexB),this.morphPathIdxTexA&&(r.activeTexture(r.TEXTURE0+Fo),r.bindTexture(r.TEXTURE_2D,this.morphPathIdxTexA)),this.morphPathIdxTexB&&(r.activeTexture(r.TEXTURE0+bo),r.bindTexture(r.TEXTURE_2D,this.morphPathIdxTexB)));const i=this.glassUniforms;r.uniform2f(i.res,t.width,t.height),r.uniform1f(i.zoom,t.zoom),r.uniform2f(i.offset,t.offsetX,t.offsetY),r.uniform1f(i.opacity,t.opacity),r.uniform1f(i.sminK,t.sminK),r.uniform1f(i.refractionStrength,t.refractionStrength??ir.refractionStrength),r.uniform1f(i.chromaticStrength,t.chromaticStrength??ir.chromaticStrength),r.uniform1f(i.fresnelStrength,t.fresnelStrength??ir.fresnelStrength),r.uniform1f(i.tintStrength,t.tintStrength??ir.tintStrength),r.uniform1f(i.frostStrength,t.frostStrength??ir.frostStrength);const l=t.rimColor??ir.rimColor;r.uniform3f(i.rimColor,l[0],l[1],l[2]);const s=t.tintColor??ir.tintColor;r.uniform3f(i.tintColor,s[0],s[1],s[2]);const a=t.cursor??[0,0];r.uniform2f(i.cursor,a[0],a[1]),r.uniform1f(i.cursorPull,t.cursorPull??0),r.uniform1f(i.cursorRadius,t.cursorRadius??1);const u=this.ripplesBuf;u.fill(0);const p=t.ripples;if(p)for(let d=0;d<4&&d<p.length;d++){const f=p[d];u[d*4]=f[0],u[d*4+1]=f[1],u[d*4+2]=f[2],u[d*4+3]=f[3]}if(r.uniform4fv(i.ripples,u),r.uniform2fv(i.pathOffset,this.fillPathOffsets(t)),r.uniform4iv(i.pathMode,this.fillPathModes(t)),r.uniform4fv(i.pathStrokeHalfW,this.fillPathScalars(t.pathStrokeHalfW,0)),r.uniform1i(i.dynamicSdf,o?1:0),r.uniform1f(i.blendT,((n=t.morph)==null?void 0:n.t)??0),o){const d=t.morph.colorA,f=t.morph.colorB;r.uniform3f(i.morphColorA,d[0],d[1],d[2]),r.uniform3f(i.morphColorB,f[0],f[1],f[2]);const v=!t.morph.pathColorsA||t.morph.pathColorsA.length===0,g=!t.morph.pathColorsB||t.morph.pathColorsB.length===0;r.uniform1i(i.useOverrideA,v?1:0),r.uniform1i(i.useOverrideB,g?1:0),v||r.uniform3fv(i.pathColorsA,Ro(this.morphColorsABuf,t.morph.pathColorsA)),g||r.uniform3fv(i.pathColorsB,Ro(this.morphColorsBBuf,t.morph.pathColorsB))}r.drawArrays(r.TRIANGLES,0,6);return}if(this._mode==="baked"&&this.sampleProgram){r.useProgram(this.sampleProgram);for(let u=0;u<this.textures.length;u++)r.activeTexture(r.TEXTURE0+u),r.bindTexture(r.TEXTURE_2D,this.textures[u]);const o=this.sampleUniforms;r.uniform2f(o.res,t.width,t.height),r.uniform1f(o.zoom,t.zoom),r.uniform2f(o.offset,t.offsetX,t.offsetY),r.uniform3f(o.color,t.color[0],t.color[1],t.color[2]),r.uniform1f(o.opacity,t.opacity),r.uniform1f(o.sminK,t.sminK),r.uniform2fv(o.pathOffset,this.fillPathOffsets(t));const i=t.cursor??[0,0];r.uniform2f(o.cursor,i[0],i[1]),r.uniform1f(o.cursorPull,t.cursorPull??0),r.uniform1f(o.cursorRadius,t.cursorRadius??1);const l=this.ripplesBuf;l.fill(0);const s=t.ripples;if(s)for(let u=0;u<4&&u<s.length;u++){const p=s[u];l[u*4]=p[0],l[u*4+1]=p[1],l[u*4+2]=p[2],l[u*4+3]=p[3]}r.uniform4fv(o.ripples,l);const a=t.pathModes!==void 0||t.pathFillColors!==void 0||t.pathStrokeColors!==void 0||t.pathStrokeHalfW!==void 0;r.uniform1i(o.compositeMode,a?1:0),a&&(r.uniform4iv(o.pathMode,this.fillPathModes(t)),r.uniform4fv(o.pathStrokeHalfW,this.fillPathScalars(t.pathStrokeHalfW,0)),r.uniform4fv(o.pathFillOpacity,this.fillPathScalars(t.pathFillOpacity,1)),r.uniform4fv(o.pathStrokeOpacity,this.fillPathScalars(t.pathStrokeOpacity,1)),r.uniform3fv(o.pathFillColor,this.fillPathColors(t.pathFillColors)),r.uniform3fv(o.pathStrokeColor,this.fillPathColors(t.pathStrokeColors))),r.drawArrays(r.TRIANGLES,0,6);return}if(this.directProgram){r.useProgram(this.directProgram),this.directSegmentTexture&&(r.activeTexture(r.TEXTURE0+Uo),r.bindTexture(r.TEXTURE_2D,this.directSegmentTexture));const o=this.directUniforms;r.uniform2f(o.res,t.width,t.height),r.uniform1f(o.zoom,t.zoom),r.uniform2f(o.offset,t.offsetX,t.offsetY),r.uniform3f(o.color,t.color[0],t.color[1],t.color[2]),r.uniform1f(o.opacity,t.opacity),r.drawArrays(r.TRIANGLES,0,6)}}}dispose(){var r;if(this.disposed)return;this.disposed=!0;const t=this.gl;t&&(this.bakeProgram&&t.deleteProgram(this.bakeProgram),this.sampleProgram&&t.deleteProgram(this.sampleProgram),this.directProgram&&t.deleteProgram(this.directProgram),this.glassProgram&&t.deleteProgram(this.glassProgram),this.morphProgram&&t.deleteProgram(this.morphProgram),this.textures.forEach(n=>t.deleteTexture(n)),this.segmentTextures.forEach(n=>t.deleteTexture(n)),this.directSegmentTexture&&t.deleteTexture(this.directSegmentTexture),this.backdropTexture&&t.deleteTexture(this.backdropTexture),this.morphTexA&&t.deleteTexture(this.morphTexA),this.morphTexB&&t.deleteTexture(this.morphTexB),this.morphPathIdxTexA&&t.deleteTexture(this.morphPathIdxTexA),this.morphPathIdxTexB&&t.deleteTexture(this.morphPathIdxTexB),this.dummyPathIdxTex&&t.deleteTexture(this.dummyPathIdxTex),this.morphSegmentTextures.forEach(n=>t.deleteTexture(n)),this.buffer&&t.deleteBuffer(this.buffer),(r=t.getExtension("WEBGL_lose_context"))==null||r.loseContext()),this.gl=null,this.bakeProgram=null,this.sampleProgram=null,this.directProgram=null,this.glassProgram=null,this.morphProgram=null,this.textures=[],this.segmentTextures=[],this.directSegmentTexture=null,this.backdropTexture=null,this.morphTexA=null,this.morphTexB=null,this.morphPathIdxTexA=null,this.morphPathIdxTexB=null,this.dummyPathIdxTex=null,this.morphSegmentTextures=[],this.buffer=null}}function $u(e){const t=[],r=[],n=[],o=[];for(const i of e.paths){for(const l of i.segments)t.push(l);r.push(t.length),n.push(i.mode==="stroke"?1:0),o.push(i.mode==="fill"?0:i.strokeWidth*.5)}return{segments:t,pathEnds:r,pathModes:n,pathHalfW:o}}function Xu(e,t){let r=0;for(const n of e.paths)r+=n.segments.length;if(r>wt)throw new Error(`morph shape ${t} has ${r} combined segments but the bake shader's loop bound is ${wt}. Simplify the source SVG (Inkscape → Path → Simplify) or merge duplicate paths.`)}function Ro(e,t){for(let r=0;r<N;r++){const n=t[r];e[r*3]=n?n[0]:0,e[r*3+1]=n?n[1]:0,e[r*3+2]=n?n[2]:0}return e}function Lm(e,t){const r=e.createTexture();return r?(e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,t,new Uint16Array(4)),r):null}function Nm(e){if(e.getExtension("OES_texture_float")&&Vu(e,e.FLOAT,new Float32Array(4)))return{type:e.FLOAT,precision:"float"};const t=e.getExtension("OES_texture_half_float");if(t){const r=t.HALF_FLOAT_OES;if(Vu(e,r,new Uint16Array(4)))return{type:r,precision:"half"}}return null}function Vu(e,t,r){const n=e.createTexture();if(!n)return!1;e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,t,r);const o=e.getError()===e.NO_ERROR;return e.deleteTexture(n),o}const bd=new Float32Array(1),Im=new Uint32Array(bd.buffer);function Ku(e){const t=new Uint16Array(e.length);for(let r=0;r<e.length;r++){bd[0]=e[r];const n=Im[0],o=n>>>16&32768;let i=n>>>23&255,l=n&8388607;if(i===255){t[r]=o|31744|(l?512:0);continue}let s=i-127+15;if(s>=31){t[r]=o|31744;continue}if(s<=0){if(s<-10){t[r]=o;continue}l|=8388608;const u=1-s;let p=l>>>u+13;l>>>u+12&1&&(p+=1),t[r]=o|p;continue}let a=l>>>13;if(l&4096&&(a+=1,a&1024&&(a=0,s+=1,s>=31))){t[r]=o|31744;continue}t[r]=o|s<<10|a}return t}function hn(e,t,r){const n=Qu(e,e.VERTEX_SHADER,t),o=Qu(e,e.FRAGMENT_SHADER,r);if(!n||!o)return null;const i=e.createProgram();return i?(e.attachShader(i,n),e.attachShader(i,o),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)?i:(console.warn("[bezier-sdf] program link failed:",e.getProgramInfoLog(i)),e.deleteProgram(i),null)):null}function Qu(e,t,r){const n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)?n:(console.warn("[bezier-sdf] shader compile failed:",e.getShaderInfoLog(n)),e.deleteShader(n),null)):null}async function Gm(e,t){if(e==="webgl"){const o=new pl;return await o.init(t),{renderer:o,actualKind:"webgl"}}if(e==="webgpu"||e==="auto"&&typeof navigator<"u"&&"gpu"in navigator)try{const o=new bm;return await o.init(t),{renderer:o,actualKind:"webgpu"}}catch(o){if(e==="webgpu")throw o;const i=o instanceof Error?o:new Error(String(o));try{const l=new pl;return await l.init(t),{renderer:l,actualKind:"webgl",fallbackFrom:{kind:"webgpu",error:i}}}catch(l){const s=l instanceof Error?l.message:String(l),a=new Error(`WebGPU init failed and WebGL fallback also failed.
  WebGPU: ${i.message}
  WebGL:  ${s}`);throw a.cause=l,a.gpuCause=i,a}}const n=new pl;return await n.init(t),{renderer:n,actualKind:"webgl"}}const Bo=new Map;function Yu(e){const t=Bo.get(e);if(t)return t;const r=(async()=>{const n=await fetch(e);if(!n.ok)throw new Error(`failed to fetch ${e}: ${n.status} ${n.statusText}`);const o=await n.text(),i=vm(o);return ym(i).mark})();return Bo.set(e,r),r.catch(()=>{Bo.get(e)===r&&Bo.delete(e)}),r}function ur(e){const t=Sd(e);return t?[t[0],t[1],t[2]]:[0,0,0]}function zm({mark:e,color:t,opacity:r,className:n,style:o,ariaLabel:i}){return y.jsx("svg",{className:n,style:{width:"100%",height:"100%",display:"block",...o},viewBox:"-1 -1 2 2",preserveAspectRatio:"xMidYMid meet",role:i?"img":"presentation","aria-label":i,children:e.paths.map((l,s)=>jm(l,s,t,r))})}function jm(e,t,r,n){const o=Wm(e);if(!o)return null;if(r!==void 0)return y.jsx("path",{d:o,fill:e.mode==="stroke"?"none":r,stroke:e.mode!=="fill"?r:"none",strokeWidth:e.mode!=="fill"?e.strokeWidth:void 0,strokeLinecap:"round",strokeLinejoin:"round",fillRule:"evenodd",opacity:n},t);const i=e.mode!=="stroke",l=e.mode!=="fill";return y.jsx("path",{d:o,fill:i?qu(e.fillColor):"none",fillOpacity:i?e.fillOpacity*n:void 0,stroke:l?qu(e.strokeColor):"none",strokeOpacity:l?e.strokeOpacity*n:void 0,strokeWidth:l?e.strokeWidth:void 0,strokeLinecap:"round",strokeLinejoin:"round",fillRule:"evenodd"},t)}function Wm(e){const t=e.segments;if(t.length===0)return"";const r=t[0],n=[`M ${Dt(r[0])} ${Dt(-r[1])}`];for(const o of t)n.push(`C ${Dt(o[2])} ${Dt(-o[3])} ${Dt(o[4])} ${Dt(-o[5])} ${Dt(o[6])} ${Dt(-o[7])}`);return e.mode!=="stroke"&&n.push("Z"),n.join(" ")}function qu(e){const t=r=>Math.max(0,Math.min(255,Math.round(r*255))).toString(16).padStart(2,"0");return`#${t(e[0])}${t(e[1])}${t(e[2])}`}function Dt(e){return Number.isFinite(e)?e.toFixed(4):"0"}const hl={duration:1400,startOffset:.3,sminK:.08},Hm=e=>1-Math.pow(1-e,3);function ml(e,t,r){if(e<=1)return e===1?[[0,0]]:[];if(e===2)return[[r*t,0],[-r*t,0]];const n=[];for(let o=0;o<e;o++){const i=o/e*Math.PI*2;n.push([Math.cos(i)*r*t,Math.sin(i)*r*t])}return n}const $m={name:"reveal",needsPointer:!1,scrollTrigger:!0,create({pathCount:e,reducedMotion:t,params:r}){const n=r;let o=(n==null?void 0:n.duration)??hl.duration,i=(n==null?void 0:n.startOffset)??hl.startOffset,l=(n==null?void 0:n.sminK)??hl.sminK;const s=()=>({pathOffsets:ml(e,0,i),opacity:1,sminK:l}),a=()=>({pathOffsets:ml(e,1,i),opacity:e===1?0:1,sminK:l});if(t)return{frame:()=>s(),active:()=>!1};let u=null;return{frame(p){if(u===null)return a();const d=Math.min(1,Math.max(0,(p-u)/o)),f=Hm(d),v=1-f;return{pathOffsets:ml(e,v,i),opacity:e===1?f:1,sminK:l}},active(p){return u===null?!1:p-u<o},replay(p){u=p},setParams(p){const d=p;typeof d.duration=="number"&&(o=d.duration),typeof d.startOffset=="number"&&(i=d.startOffset),typeof d.sminK=="number"&&(l=d.sminK)}}}},vl={speed:2.8,amplitude:.08,decay:3.5},Zu=.001,Ju=[0,0,0,0],Xm={name:"ripple",needsPointer:!0,scrollTrigger:!1,create({reducedMotion:e,params:t}){const r=t;let n=(r==null?void 0:r.speed)??vl.speed,o=(r==null?void 0:r.amplitude)??vl.amplitude,i=(r==null?void 0:r.decay)??vl.decay,l=r==null?void 0:r.duration;const s=[null,null,null,null];let a=0;const u=()=>o<=Zu||i<=0?0:Math.log(o/Zu)/i,p=()=>{const f=u();return typeof l=="number"?Math.min(f,l):f},d=(f,v)=>{if(!f)return Ju;const g=(v-f.startMs)/1e3;return g<0||g>p()?Ju:[f.x,f.y,g*n,o*Math.exp(-g*i)]};return{frame(f){return{ripples:s.map(v=>d(v,f))}},active(f){const v=p();for(const g of s)if(g&&(f-g.startMs)/1e3<v)return!0;return!1},pointerDown(f,v,g){e||(s[a]={x:f,y:v,startMs:g},a=(a+1)%s.length)},setParams(f){const v=f;typeof v.speed=="number"&&(n=v.speed),typeof v.amplitude=="number"&&(o=v.amplitude),typeof v.decay=="number"&&(i=v.decay),typeof v.duration=="number"&&(l=v.duration)}}}},gl={pull:.08,radius:.15,lerp:.5},Vm=1e-5,Km={name:"liquid-cursor",needsPointer:!0,scrollTrigger:!1,create({reducedMotion:e,params:t}){if(e)return{frame:()=>({cursorPull:0}),active:()=>!1};const r=t;let n=(r==null?void 0:r.pull)??gl.pull,o=(r==null?void 0:r.radius)??gl.radius,i=(r==null?void 0:r.lerp)??gl.lerp,l=0,s=0,a=0,u=0,p=0;return{frame(){return a+=(l-a)*i,u+=(s-u)*i,{cursor:[a,u],cursorPull:p,cursorRadius:o}},active(){if(p>0)return!0;const d=l-a,f=s-u;return d*d+f*f>Vm},pointerMove(d,f){l=d,s=f,p=n},pointerLeave(){p=0},pointerDown(d,f){l=d,s=f,p=n},setParams(d){const f=d;typeof f.pull=="number"&&(n=f.pull,p>0&&(p=n)),typeof f.radius=="number"&&(o=f.radius),typeof f.lerp=="number"&&(i=f.lerp)}}}},lr={refractionStrength:.05,chromaticStrength:.015,fresnelStrength:.3,tintStrength:.1,frostStrength:2.5,rimColor:"#ffffff",tintColor:"#e8f0ff"},Qm={rate:15},Ym=.001,Ud={name:"morph",needsPointer:!0,scrollTrigger:!1,create({reducedMotion:e,params:t}){const r=t;let n=(r==null?void 0:r.rate)??Qm.rate,o=0,i=0,l=null;return e?{frame:()=>({morphT:0}),active:()=>!1}:{frame(s){if(l===null)return l=s,{morphT:i};const a=Math.max(0,(s-l)/1e3);l=s;const u=1-Math.exp(-n*a);return i+=(o-i)*u,{morphT:i}},active(){return Math.abs(o-i)>Ym},pointerMove(){o!==1&&(o=1,l=null)},pointerLeave(){o!==0&&(o=0,l=null)},pointerDown(){o=o<.5?1:0,l=null},setParams(s){const a=s;typeof a.rate=="number"&&(n=a.rate)}}}},Oo=.005,qm={reveal:$m,ripple:Xm,"liquid-cursor":Km,morph:Ud};function ec(e){return Array.from({length:e},()=>[0,0])}function Zm(e){if(typeof e=="string")return{name:e};const{name:t,...r}=e,n=r;return{name:t,params:Object.keys(n).length?n:void 0}}function pa(e){if(e==="none")return[];const t=Array.isArray(e)?e:typeof e=="string"?[e]:[e],r=new Set,n=[];for(const o of t){const{name:i,params:l}=Zm(o);i!=="liquid-glass"&&(r.has(i)||(r.add(i),n.push({def:qm[i],params:l})))}return n}function Ko(e){if(e==="none")return null;const t=Array.isArray(e)?e:typeof e=="string"?[e]:[e];for(const r of t){if(r==="liquid-glass")return{};if(typeof r=="object"&&"name"in r&&r.name==="liquid-glass"){const{name:n,...o}=r;return o}}return null}function Jm(e){const t=Ko(e)?["liquid-glass"]:[],r=pa(e).map(n=>n.def.name);return[...t,...r].sort().join(",")}function e0(e){const t={};for(const{def:r,params:n}of pa(e))n&&(t[r.name]=n);return t}function t0(e){const t={};for(const r of e)r.pathOffsets!==void 0&&(t.pathOffsets=r.pathOffsets),r.opacity!==void 0&&(t.opacity=(t.opacity??1)*r.opacity),r.sminK!==void 0&&(t.sminK=r.sminK),r.cursor!==void 0&&(t.cursor=r.cursor),r.cursorPull!==void 0&&(t.cursorPull=r.cursorPull),r.cursorRadius!==void 0&&(t.cursorRadius=r.cursorRadius),r.ripples!==void 0&&(t.ripples=r.ripples),r.morphT!==void 0&&(t.morphT=r.morphT);return t}function tc(e,t,r){const n=e.getBoundingClientRect(),o=(t-n.left)*(e.width/n.width),i=(r-n.top)*(e.height/n.height),l=Math.min(e.width,e.height);return[(o-.5*e.width)/l*2,(.5*e.height-i)/l*2]}function r0(e){return{pathModes:e.paths.map(t=>t.mode),pathStrokeHalfW:e.paths.map(t=>t.strokeWidth*.5),pathFillColors:e.paths.map(t=>t.fillColor),pathStrokeColors:e.paths.map(t=>t.strokeColor),pathFillOpacity:e.paths.map(t=>t.fillOpacity),pathStrokeOpacity:e.paths.map(t=>t.strokeOpacity)}}async function n0(e){return typeof e=="string"?new Promise((t,r)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>r(new Error(`liquid-glass: failed to load backdrop "${e}". The image must be same-origin or served with CORS headers.`)),n.src=e}):(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement&&!e.complete&&await new Promise((t,r)=>{e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>r(new Error("liquid-glass: backdrop image failed to load")),{once:!0})}),e)}function o0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement?{w:e.naturalWidth||e.width,h:e.naturalHeight||e.height}:{w:e.width,h:e.height}}function i0(e,t,r,n){const{w:o,h:i}=o0(e),l=t/r;let s=o,a=i;if(o>0&&i>0){const x=o/i;x>l?s=i*l:x<l&&(a=o/l)}const u=(o-s)*.5,p=(i-a)*.5,d=document.createElement("canvas");d.width=t,d.height=r;const f=d.getContext("2d");if(!f)throw new Error("liquid-glass: 2D context unavailable for backdrop prep");if(f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(e,u,p,s,a,0,0,t,r),n<=0)return d;const v=document.createElement("canvas");v.width=t,v.height=r;const g=v.getContext("2d");if(!g)throw new Error("liquid-glass: 2D context unavailable for backdrop blur");return g.filter=`blur(${n}px)`,g.drawImage(d,0,0),v}function l0(e){return{refractionStrength:e.refractionStrength??lr.refractionStrength,chromaticStrength:e.chromaticStrength??lr.chromaticStrength,fresnelStrength:e.fresnelStrength??lr.fresnelStrength,tintStrength:e.tintStrength??lr.tintStrength,frostStrength:e.frostStrength??lr.frostStrength,rimColor:ur(e.rimColor??lr.rimColor),tintColor:ur(e.tintColor??lr.tintColor)}}const Rd=U.forwardRef(function({src:t,to:r,toFillColor:n,fillRule:o,color:i,opacity:l=1,effect:s="none",autoPlay:a=!1,renderer:u="auto",onReady:p,onError:d,pauseWhenOffscreen:f=!0,className:v,style:g,ariaLabel:x,backdrop:E,backdropBlur:h=6,material:c},m){const _=U.useRef(null),w=U.useRef(null),[S,T]=U.useState(null),[F,R]=U.useState(null),[D,W]=U.useState(!1),Q=U.useMemo(()=>S?r0(S):null,[S]),X=U.useRef({color:i,toFillColor:n,morphFillRule:o,opacity:l,perPath:Q,pauseWhenOffscreen:f,rafId:0,visible:!0,replay:()=>{},requestRender:()=>{},pushParams:k=>{}});X.current.color=i,X.current.toFillColor=n,X.current.morphFillRule=o,X.current.opacity=l,X.current.perPath=Q,X.current.pauseWhenOffscreen=f;const Me=U.useMemo(()=>Jm(s),[s]),ut=U.useMemo(()=>e0(s),[s]),$e=U.useRef(s);$e.current=s,U.useImperativeHandle(m,()=>({replay:()=>X.current.replay()}),[]),U.useEffect(()=>{let k=!1;return T(null),W(!1),Yu(t).then(O=>{k||T(O)},O=>{k||d==null||d(O instanceof Error?O:new Error(String(O)))}),()=>{k=!0}},[t,d]),U.useEffect(()=>{if(!r){R(null);return}let k=!1;return R(null),Yu(r).then(O=>{k||R(O)},O=>{k||d==null||d(O instanceof Error?O:new Error(String(O)))}),()=>{k=!0}},[r,d]),U.useEffect(()=>{var ga;if(!S)return;const k=w.current,O=_.current;if(!k||!O)return;const A=X.current,V=typeof window<"u"&&(((ga=window.matchMedia)==null?void 0:ga.call(window,"(prefers-reduced-motion: reduce)").matches)??!1),z=()=>{const L=O.getBoundingClientRect(),oe=Math.min(window.devicePixelRatio||1,2),b=Math.max(1,Math.floor(L.width*oe)),yt=Math.max(1,Math.floor(L.height*oe));return k.width===b&&k.height===yt?!1:(k.width=b,k.height=yt,!0)},Rt=Ko($e.current),me=c==="glass"||Rt!==null;if(me&&!E){const L=new Error("liquid-glass material requires a `backdrop` prop (URL or HTMLImageElement/HTMLCanvasElement/ImageBitmap)");d==null||d(L),W(!0);return}const gt=pa($e.current),Xe=r&&!gt.some(L=>L.def.name==="morph")?[...gt,{def:Ud}]:gt,Fe=Xe.map(L=>L.def),Li=Fe.some(L=>L.needsPointer),no=Fe.some(L=>L.scrollTrigger);Fe.some(L=>L.name==="reveal");const kr=Fe.some(L=>L.name==="morph");if(kr&&!F)return;kr&&!r&&console.warn('[bezier-sdf] effect="morph" requires the `to` prop; rendering shape A only');const Ve=kr&&F?Kn(S,F):null,rr=Ve?Ve.markA.paths.map(L=>L.mode==="stroke"?L.strokeColor:L.fillColor):null,oo=Ve?Ve.markB.paths.map(L=>L.mode==="stroke"?L.strokeColor:L.fillColor):null,Ni=me&&Ve!==null;let nr=!1,et=null,ue=[],P=null,I=null,ce=null;A.visible=!0,A.rafId=0,z();const Ne=L=>{const oe=et;if(!oe)return!0;const b=ue.length>0?t0(ue.map(j=>j.frame(L))):null,yt=(b==null?void 0:b.pathOffsets)??ec(oe.pathCount),H=A.perPath;if(kr&&Ve&&!me){const j=!!A.color,J=!!A.toFillColor,le=j?ur(A.color):[0,0,0],xt=J?ur(A.toFillColor):[0,0,0];return oe.render({width:k.width,height:k.height,zoom:1,sminK:Oo,offsetX:0,offsetY:0,pathOffsets:ec(oe.pathCount),color:[0,0,0],opacity:((b==null?void 0:b.opacity)??1)*A.opacity,morph:{t:(b==null?void 0:b.morphT)??0,colorA:le,colorB:xt,pathColorsA:j?void 0:rr??void 0,pathColorsB:J?void 0:oo??void 0}}),ue.some(ve=>ve.active(L))}if(me){const j=Ko($e.current)??{},J=l0(j),le=A.perPath,xt=Ni?(()=>{const ve=!!A.color,ct=!!A.toFillColor,Dd=ve?ur(A.color):[0,0,0],Md=ct?ur(A.toFillColor):[0,0,0];return{t:(b==null?void 0:b.morphT)??0,colorA:Dd,colorB:Md,pathColorsA:ve?void 0:rr??void 0,pathColorsB:ct?void 0:oo??void 0}})():void 0;return oe.render({width:k.width,height:k.height,zoom:1,sminK:(b==null?void 0:b.sminK)??Oo,offsetX:0,offsetY:0,pathOffsets:yt,color:[0,0,0],opacity:((b==null?void 0:b.opacity)??1)*A.opacity,cursor:b==null?void 0:b.cursor,cursorPull:b==null?void 0:b.cursorPull,cursorRadius:b==null?void 0:b.cursorRadius,ripples:b==null?void 0:b.ripples,pathModes:le==null?void 0:le.pathModes,pathStrokeHalfW:le==null?void 0:le.pathStrokeHalfW,glass:!0,refractionStrength:J.refractionStrength,chromaticStrength:J.chromaticStrength,fresnelStrength:J.fresnelStrength,tintStrength:J.tintStrength,frostStrength:J.frostStrength,rimColor:J.rimColor,tintColor:J.tintColor,morph:xt}),ue.some(ve=>ve.active(L))}if((H?H.pathModes.every(j=>j==="fill"):!0)&&A.color!==void 0){const[j,J,le]=ur(A.color);oe.render({width:k.width,height:k.height,zoom:1,sminK:(b==null?void 0:b.sminK)??Oo,offsetX:0,offsetY:0,pathOffsets:yt,color:[j,J,le],opacity:((b==null?void 0:b.opacity)??1)*A.opacity,cursor:b==null?void 0:b.cursor,cursorPull:b==null?void 0:b.cursorPull,cursorRadius:b==null?void 0:b.cursorRadius,ripples:b==null?void 0:b.ripples})}else{const j=H??{pathModes:[],pathStrokeHalfW:[],pathFillColors:[],pathStrokeColors:[],pathFillOpacity:[],pathStrokeOpacity:[]};oe.render({width:k.width,height:k.height,zoom:1,sminK:(b==null?void 0:b.sminK)??Oo,offsetX:0,offsetY:0,pathOffsets:yt,color:[0,0,0],opacity:((b==null?void 0:b.opacity)??1)*A.opacity,cursor:b==null?void 0:b.cursor,cursorPull:b==null?void 0:b.cursorPull,cursorRadius:b==null?void 0:b.cursorRadius,ripples:b==null?void 0:b.ripples,pathModes:j.pathModes,pathStrokeHalfW:j.pathStrokeHalfW,pathFillColors:j.pathFillColors,pathStrokeColors:j.pathStrokeColors,pathFillOpacity:j.pathFillOpacity,pathStrokeOpacity:j.pathStrokeOpacity})}return ue.some(j=>j.active(L))},nn=L=>{Ne(L)&&(A.visible||!A.pauseWhenOffscreen)?A.rafId=requestAnimationFrame(nn):A.rafId=0},wr=()=>{A.rafId===0&&(!A.visible&&A.pauseWhenOffscreen||(A.rafId=requestAnimationFrame(nn)))};A.requestRender=()=>{Ne(performance.now())},A.replay=()=>{var oe;const L=performance.now();for(const b of ue)(oe=b.replay)==null||oe.call(b,L);wr()};let on=null,ha=0,ma=0;const va=()=>{if(!on)return null;const L=k.width,oe=k.height;if(L<=1||oe<=1||L===ha&&oe===ma)return null;const b=i0(on,L,oe,h);return ha=L,ma=oe,b};return(async()=>{var b,yt;let L;if(me&&E){try{const H=await n0(E);if(nr)return;on=H}catch(H){if(nr)return;d==null||d(H instanceof Error?H:new Error(String(H))),W(!0);return}z(),L=va()??on}try{const H=await Gm(u,{canvas:k,mark:Ve?Ve.markA:S,backdrop:L,morphTo:Ve?Ve.markB:void 0,morphFillRule:A.morphFillRule});if(nr){H.renderer.dispose();return}et=H.renderer,p==null||p({kind:H.actualKind})}catch(H){if(nr)return;d==null||d(H instanceof Error?H:new Error(String(H))),W(!0);return}if(ue=Xe.map(H=>H.def.create({pathCount:et.pathCount,reducedMotion:V,autoPlay:a,params:H.params})),A.pushParams=H=>{var be,St;for(let j=0;j<ue.length;j++){const J=Fe[j].name;(St=(be=ue[j]).setParams)==null||St.call(be,H[J]??{})}Ne(performance.now())},Ne(performance.now()),P=new ResizeObserver(()=>{if(z()){if(me&&et&&on){const H=va();H&&et.setBackdrop(H)}Ne(performance.now())}}),P.observe(O),Li){const H=j=>{var ve;const[J,le]=tc(k,j.clientX,j.clientY),xt=performance.now();for(const ct of ue)(ve=ct.pointerMove)==null||ve.call(ct,J,le,xt);wr()},be=()=>{var J;const j=performance.now();for(const le of ue)(J=le.pointerLeave)==null||J.call(le,j);wr()},St=j=>{var ve;const[J,le]=tc(k,j.clientX,j.clientY),xt=performance.now();for(const ct of ue)(ve=ct.pointerDown)==null||ve.call(ct,J,le,xt);wr()};k.addEventListener("pointermove",H),k.addEventListener("pointerleave",be),k.addEventListener("pointerdown",St),k.style.touchAction="none",ce=()=>{k.removeEventListener("pointermove",H),k.removeEventListener("pointerleave",be),k.removeEventListener("pointerdown",St)}}const oe=no&&!a&&!V;if(oe||f){let H=!1;I=new IntersectionObserver(be=>{var J,le;const St=be[be.length-1];if(!St)return;const j=St.isIntersecting;if(A.visible=j,j){if(oe&&!H){H=!0;const xt=performance.now();for(let ve=0;ve<ue.length;ve++)Fe[ve].scrollTrigger&&((le=(J=ue[ve]).replay)==null||le.call(J,xt))}wr()}else A.pauseWhenOffscreen&&A.rafId!==0&&(cancelAnimationFrame(A.rafId),A.rafId=0)},{threshold:.01}),I.observe(O)}if(no&&(a||V)){const H=performance.now();for(let be=0;be<ue.length;be++)Fe[be].scrollTrigger&&((yt=(b=ue[be]).replay)==null||yt.call(b,H));wr()}})(),()=>{nr=!0,A.rafId!==0&&cancelAnimationFrame(A.rafId),A.rafId=0,A.requestRender=()=>{},A.replay=()=>{},A.pushParams=()=>{},ce==null||ce(),P==null||P.disconnect(),I==null||I.disconnect(),et==null||et.dispose(),et=null,ue=[]}},[S,F,r,o,u,Me,a,p,d,E,h,c]),U.useEffect(()=>{X.current.requestRender()},[i,l,n]),U.useEffect(()=>{X.current.pushParams(ut)},[ut]);const Le=U.useMemo(()=>{const k=Ko(s);return k?JSON.stringify(k):""},[s]);return U.useEffect(()=>{Le&&X.current.requestRender()},[Le]),D&&S?y.jsx("div",{ref:_,className:v,style:{position:"relative",...g},"aria-label":x,role:x?"img":void 0,children:y.jsx(zm,{mark:S,color:i,opacity:l,style:{position:"absolute",inset:0}})}):y.jsx("div",{ref:_,className:v,style:{position:"relative",...g},"aria-label":x,role:x?"img":void 0,children:y.jsx("canvas",{ref:w,style:{display:"block",width:"100%",height:"100%"}})})}),ht={refractionStrength:.05,chromaticStrength:.015,fresnelStrength:.3,tintStrength:.1,frostStrength:2.5,rimColor:"#ffffff",tintColor:"#e8f0ff"};function Bd(){const e=document.createElement("canvas");e.width=1280,e.height=720;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,e.width,e.height);r.addColorStop(0,"#1b2a6b"),r.addColorStop(.45,"#c2185b"),r.addColorStop(1,"#ffb74d"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height);const n=[[.22,.28,280,"#00e5ff"],[.72,.18,240,"#ffd54f"],[.5,.68,320,"#ff4081"],[.85,.78,220,"#b388ff"],[.12,.82,200,"#69f0ae"]];for(const[i,l,s,a]of n){const u=i*e.width,p=l*e.height,d=t.createRadialGradient(u,p,0,u,p,s);d.addColorStop(0,a),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.fillRect(u-s,p-s,s*2,s*2)}t.strokeStyle="rgba(255,255,255,0.28)",t.lineWidth=2;const o=60;for(let i=0;i<=e.width;i+=o)t.beginPath(),t.moveTo(i,0),t.lineTo(i,e.height),t.stroke();for(let i=0;i<=e.height;i+=o)t.beginPath(),t.moveTo(0,i),t.lineTo(e.width,i),t.stroke();return e}const qn="/logo.svg",Od="bezier-sdf:theme";function s0(){var t;if(typeof window>"u")return"dark";const e=window.localStorage.getItem(Od);return e==="light"||e==="dark"?e:(t=window.matchMedia)!=null&&t.call(window,"(prefers-color-scheme: light)").matches?"light":"dark"}const a0=[{id:"native-paint",number:"01",title:"Native SVG paint",effect:"none",code:"<LiveGraphic src={src} />",hint:"per-path fills/strokes"},{id:"reveal-auto",number:"02",title:"Reveal · autoplay",color:"#ff3a7a",effect:"reveal",autoPlay:!0,code:'<LiveGraphic effect="reveal" autoPlay />',replay:!0},{id:"ripple",number:"03",title:"Ripple",color:"#9af078",effect:"ripple",code:'<LiveGraphic effect="ripple" />',hint:"click the plate"},{id:"liquid",number:"04",title:"Liquid cursor",color:"#ffb84d",effect:"liquid-cursor",code:'<LiveGraphic effect="liquid-cursor" />',hint:"hover the plate"},{id:"combo",number:"05",title:"Liquid cursor + ripple",color:"#d78aff",effect:["liquid-cursor","ripple"],code:"<LiveGraphic effect={['liquid-cursor','ripple']} />",hint:"hover, then click"},{id:"liquid-glass",number:"06",title:"Liquid glass",effect:{name:"liquid-glass",...ht},code:"<LiveGraphic effect={{ name: 'liquid-glass' }} backdrop={img} />",hint:"refracts the backdrop",backdrop:!0,backdropUpload:!0},{id:"morph",number:"07",title:"Morph",color:"#ff3a7a",toFillColor:"#10c8ff",to:"/morph-circle.svg",effect:"morph",code:'<LiveGraphic effect="morph" to={target} />',hint:"hover to morph; upload a target SVG",toUpload:!0}],u0="/morph-circle.svg",rc="#10c8ff",nc={reveal:{duration:1400,startOffset:.3,sminK:.08},ripple:{speed:2.8,duration:.9,amplitude:.08,decay:3.5},"liquid-cursor":{pull:.08,radius:.15,lerp:.5},glass:{refractionStrength:ht.refractionStrength,chromaticStrength:ht.chromaticStrength,fresnelStrength:ht.fresnelStrength,tintStrength:ht.tintStrength,frostStrength:ht.frostStrength},morph:{rate:15}},yl={reveal:[{key:"duration",label:"duration (ms)",min:200,max:4e3,step:50},{key:"startOffset",label:"start offset",min:0,max:1,step:.01},{key:"sminK",label:"smin k",min:0,max:.5,step:.005}],ripple:[{key:"speed",label:"speed",min:.5,max:8,step:.05},{key:"duration",label:"duration",min:.1,max:3,step:.05},{key:"amplitude",label:"amplitude",min:0,max:.2,step:.005},{key:"decay",label:"decay",min:.5,max:10,step:.1}],"liquid-cursor":[{key:"pull",label:"pull",min:0,max:.3,step:.005},{key:"radius",label:"radius",min:.02,max:.5,step:.005},{key:"lerp",label:"lerp",min:.05,max:1,step:.01}]},c0=[{key:"refractionStrength",label:"refraction",min:0,max:.2,step:.005},{key:"chromaticStrength",label:"chromatic",min:0,max:.1,step:.001},{key:"fresnelStrength",label:"fresnel",min:0,max:1,step:.01},{key:"tintStrength",label:"tint",min:0,max:1,step:.01},{key:"frostStrength",label:"frost",min:0,max:8,step:.1}],f0=[{key:"rate",label:"rate",min:1,max:60,step:.5}],Qo=["reveal","ripple","liquid-cursor"],d0={reveal:"autoplay or replay to see it",ripple:"click the plate","liquid-cursor":"hover the plate"};function p0(e,t,r,n,o,i){const l=Qo.filter(s=>e[s]).map(s=>{if(s==="ripple"){const a=r?t.ripple.duration:1/0;return{name:s,...t.ripple,duration:a}}return{name:s,...t[s]}});return n&&l.push({name:"liquid-glass",...t.glass,...o}),i&&l.push({name:"morph",...t.morph}),l.length===0?"none":l}function h0({src:e,bakeKey:t,onError:r}){const[n,o]=U.useState({reveal:!1,ripple:!0,"liquid-cursor":!0}),[i,l]=U.useState(!1),[s,a]=U.useState(ht.rimColor),[u,p]=U.useState(ht.tintColor),[d,f]=U.useState(null),[v,g]=U.useState(null),x=U.useRef(null),[E,h]=U.useState(!1),[c,m]=U.useState(null),[_,w]=U.useState(null),[S,T]=U.useState(rc),F=U.useRef(null),[R,D]=U.useState(nc),[W,Q]=U.useState(!1),[X,Me]=U.useState(!0),[ut,$e]=U.useState("#ff6a3d");U.useEffect(()=>{Me(e===qn)},[e]);const[Le,k]=U.useState(1),[O,A]=U.useState(!1),V=U.useRef(null),z=U.useMemo(()=>i&&!d?Bd():null,[i,d]),Rt=i?d??z??void 0:void 0,me=i?d??(z==null?void 0:z.toDataURL())??null:null;U.useEffect(()=>()=>{d&&URL.revokeObjectURL(d)},[d]);const gt=P=>{var Ne;const I=(Ne=P.target.files)==null?void 0:Ne[0];if(P.target.value="",!I||!I.type.startsWith("image/"))return;const ce=URL.createObjectURL(I);d&&URL.revokeObjectURL(d),f(ce),g(I.name)},Xe=()=>{d&&URL.revokeObjectURL(d),f(null),g(null)};U.useEffect(()=>()=>{c&&URL.revokeObjectURL(c)},[c]);const Fe=P=>{var nn;const I=(nn=P.target.files)==null?void 0:nn[0];if(P.target.value="",!I||!(I.type==="image/svg+xml"||I.name.toLowerCase().endsWith(".svg")))return;const Ne=URL.createObjectURL(I);c&&URL.revokeObjectURL(c),m(Ne),w(I.name)},Li=()=>{c&&URL.revokeObjectURL(c),m(null),w(null)},no=c??u0,kr=p0(n,R,W,i,{rimColor:s,tintColor:u},E),Ve=P=>{o(I=>({...I,[P]:!I[P]}))},rr=(P,I,ce)=>{D(Ne=>({...Ne,[P]:{...Ne[P],[I]:ce}}))},oo=(P,I)=>{D(ce=>({...ce,glass:{...ce.glass,[P]:I}}))},Ni=(P,I)=>{D(ce=>({...ce,morph:{...ce.morph,[P]:I}}))},nr=()=>l(P=>!P),et=()=>h(P=>!P),ue=()=>{D(nc),a(ht.rimColor),p(ht.tintColor),T(rc)};return y.jsxs("section",{className:"playground","aria-label":"playground",children:[y.jsxs("header",{className:"playground-head",children:[y.jsxs("div",{children:[y.jsx("span",{className:"card-num",children:"00"}),y.jsx("h2",{children:"Playground"})]}),y.jsx("p",{children:"Toggle effects, compose freely, and drag sliders to tune parameters live."})]}),y.jsxs("div",{className:"playground-body",children:[y.jsx("div",{className:"playground-canvas",style:me?{backgroundImage:`url(${me})`,backgroundSize:"cover",backgroundPosition:"center"}:void 0,children:y.jsx(Rd,{ref:V,src:e,color:X?ut:void 0,opacity:Le,effect:kr,material:i?"glass":void 0,backdrop:Rt,to:E?no:void 0,toFillColor:E&&X?S:void 0,autoPlay:O,ariaLabel:"playground logo",onError:r,style:{position:"absolute",inset:0}},t)}),y.jsxs("div",{className:"playground-controls",children:[y.jsxs("div",{className:"ctrl-group",children:[y.jsx("div",{className:"ctrl-group-head",children:"effects"}),y.jsxs("div",{className:"effect-toggles",children:[Qo.map(P=>y.jsxs("label",{className:"chip","data-on":n[P]?"true":"false",children:[y.jsx("input",{type:"checkbox",checked:n[P],onChange:()=>Ve(P)}),y.jsx("span",{children:P})]},P)),y.jsxs("label",{className:"chip","data-on":i?"true":"false",children:[y.jsx("input",{type:"checkbox",checked:i,onChange:nr}),y.jsx("span",{children:"glass"})]}),y.jsxs("label",{className:"chip","data-on":E?"true":"false",children:[y.jsx("input",{type:"checkbox",checked:E,onChange:et}),y.jsx("span",{children:"morph"})]})]}),Qo.some(P=>n[P])||i||E?y.jsx("div",{className:"effect-hint",children:[...Qo.filter(P=>n[P]).map(P=>d0[P]),...i?["refracts the backdrop"]:[],...E?["hover to morph"]:[]].join(" · ")}):null]}),y.jsxs("div",{className:"ctrl-group",children:[y.jsx("div",{className:"ctrl-group-head",children:"appearance"}),y.jsxs("label",{className:"row",children:[y.jsx("span",{className:"row-label",children:"tint"}),y.jsx("input",{type:"checkbox",checked:X,onChange:P=>Me(P.target.checked)}),y.jsx("input",{type:"color",value:ut,onChange:P=>$e(P.target.value),disabled:!X,"aria-label":"tint color"}),y.jsx("code",{className:"row-val",children:X?ut:"native"})]}),y.jsxs("label",{className:"row",children:[y.jsx("span",{className:"row-label",children:"opacity"}),y.jsx("input",{type:"range",min:0,max:1,step:.01,value:Le,onChange:P=>k(Number(P.target.value))}),y.jsx("code",{className:"row-val",children:Le.toFixed(2)})]})]}),n.reveal?y.jsxs("div",{className:"ctrl-group",children:[y.jsxs("div",{className:"ctrl-group-head",children:["reveal",y.jsxs("span",{className:"group-actions",children:[y.jsxs("label",{className:"row inline",children:[y.jsx("input",{type:"checkbox",checked:O,onChange:P=>A(P.target.checked)}),y.jsx("span",{children:"autoPlay"})]}),y.jsx("button",{type:"button",className:"btn",onClick:()=>{var P;return(P=V.current)==null?void 0:P.replay()},children:"↺ replay"})]})]}),yl.reveal.map(P=>y.jsx(mn,{spec:P,value:R.reveal[P.key],onChange:I=>rr("reveal",P.key,I)},P.key))]}):null,n.ripple?y.jsxs("div",{className:"ctrl-group",children:[y.jsx("div",{className:"ctrl-group-head",children:"ripple"}),yl.ripple.map(P=>{if(P.key==="duration"){const I=Math.max(0,-Math.floor(Math.log10(P.step)));return y.jsxs("div",{className:"row",children:[y.jsxs("span",{className:"row-label row-label-check",children:[y.jsx("input",{type:"checkbox",checked:W,onChange:ce=>Q(ce.target.checked),"aria-label":"enable duration cap"}),"duration"]}),y.jsx("input",{type:"range",min:P.min,max:P.max,step:P.step,value:R.ripple.duration,onChange:ce=>rr("ripple","duration",Number(ce.target.value)),disabled:!W}),y.jsx("code",{className:"row-val",children:W?R.ripple.duration.toFixed(I):"—"})]},P.key)}return y.jsx(mn,{spec:P,value:R.ripple[P.key],onChange:I=>rr("ripple",P.key,I)},P.key)})]}):null,n["liquid-cursor"]?y.jsxs("div",{className:"ctrl-group",children:[y.jsx("div",{className:"ctrl-group-head",children:"liquid-cursor"}),yl["liquid-cursor"].map(P=>y.jsx(mn,{spec:P,value:R["liquid-cursor"][P.key],onChange:I=>rr("liquid-cursor",P.key,I)},P.key))]}):null,i?y.jsxs("div",{className:"ctrl-group",children:[y.jsxs("div",{className:"ctrl-group-head",children:["glass",y.jsxs("span",{className:"group-actions",children:[y.jsx("input",{ref:x,type:"file",accept:"image/*",onChange:gt,style:{display:"none"}}),y.jsx("button",{type:"button",className:"btn",onClick:()=>{var P;return(P=x.current)==null?void 0:P.click()},title:v??"use a custom backdrop image",children:"↑ backdrop"}),d?y.jsx("button",{type:"button",className:"btn",onClick:Xe,children:"reset"}):null]})]}),v?y.jsx("div",{className:"effect-hint",children:v}):null,c0.map(P=>y.jsx(mn,{spec:P,value:R.glass[P.key],onChange:I=>oo(P.key,I)},P.key)),y.jsxs("label",{className:"row",children:[y.jsx("span",{className:"row-label",children:"rim"}),y.jsx("input",{type:"color",value:s,onChange:P=>a(P.target.value),"aria-label":"rim color"}),y.jsx("code",{className:"row-val",children:s})]}),y.jsxs("label",{className:"row",children:[y.jsx("span",{className:"row-label",children:"tint color"}),y.jsx("input",{type:"color",value:u,onChange:P=>p(P.target.value),"aria-label":"tint color"}),y.jsx("code",{className:"row-val",children:u})]})]}):null,E?y.jsxs("div",{className:"ctrl-group",children:[y.jsxs("div",{className:"ctrl-group-head",children:["morph",y.jsxs("span",{className:"group-actions",children:[y.jsx("input",{ref:F,type:"file",accept:".svg,image/svg+xml",onChange:Fe,style:{display:"none"}}),y.jsx("button",{type:"button",className:"btn",onClick:()=>{var P;return(P=F.current)==null?void 0:P.click()},title:_??"upload a target SVG to morph into",children:"↑ target"}),c?y.jsx("button",{type:"button",className:"btn",onClick:Li,children:"reset"}):null]})]}),y.jsx("div",{className:"effect-hint",children:_??"morph-circle.svg"}),f0.map(P=>y.jsx(mn,{spec:P,value:R.morph[P.key],onChange:I=>Ni(P.key,I)},P.key)),y.jsxs("label",{className:"row",children:[y.jsx("span",{className:"row-label",children:"to color"}),y.jsx("input",{type:"color",value:S,onChange:P=>T(P.target.value),"aria-label":"morph end color"}),y.jsx("code",{className:"row-val",children:S})]})]}):null,y.jsx("button",{type:"button",className:"btn playground-reset",onClick:ue,children:"reset params"})]})]})]})}function mn({spec:e,value:t,onChange:r}){return y.jsxs("label",{className:"row",children:[y.jsx("span",{className:"row-label",children:e.label}),y.jsx("input",{type:"range",min:e.min,max:e.max,step:e.step,value:t,onChange:n=>r(Number(n.target.value))}),y.jsx("code",{className:"row-val",children:e.step>=1?t.toFixed(0):t.toFixed(Math.max(0,-Math.floor(Math.log10(e.step))))})]})}function m0({spec:e,src:t,bakeKey:r,onError:n}){const o=U.useRef(null),i=U.useRef(null),l=U.useRef(null),[s,a]=U.useState(null),[u,p]=U.useState(null);U.useEffect(()=>()=>{s&&URL.revokeObjectURL(s)},[s]),U.useEffect(()=>()=>{u&&URL.revokeObjectURL(u)},[u]);const d=U.useMemo(()=>e.backdrop&&!s?Bd():null,[e.backdrop,s]),f=s??d??void 0,v=s??(d==null?void 0:d.toDataURL())??null,g=v?{backgroundImage:`url(${v})`,backgroundSize:"cover",backgroundPosition:"center"}:void 0,x=c=>{var w;const m=(w=c.target.files)==null?void 0:w[0];if(c.target.value="",!m||!m.type.startsWith("image/"))return;const _=URL.createObjectURL(m);a(S=>(S&&URL.revokeObjectURL(S),_))},E=c=>{var S;const m=(S=c.target.files)==null?void 0:S[0];if(c.target.value="",!m||!(m.type==="image/svg+xml"||m.name.toLowerCase().endsWith(".svg")))return;const w=URL.createObjectURL(m);p(T=>(T&&URL.revokeObjectURL(T),w))},h=u??e.to;return y.jsxs("article",{className:"card",children:[y.jsxs("header",{className:"card-head",children:[y.jsx("span",{className:"card-title",children:e.title}),y.jsx("span",{className:"card-num",children:e.number})]}),y.jsx("div",{className:"card-surface",style:g,children:y.jsx(Rd,{ref:o,src:t,color:t===qn?e.color:void 0,to:h,toFillColor:t===qn?e.toFillColor:void 0,effect:e.effect,backdrop:f,autoPlay:e.autoPlay,ariaLabel:e.title,onError:n},`${e.id}:${r}`)}),y.jsxs("footer",{className:"card-foot",children:[y.jsx("code",{children:e.code}),e.hint?y.jsx("span",{className:"hint",children:e.hint}):null]}),e.replay?y.jsx("button",{type:"button",className:"card-replay",onClick:()=>{var c;return(c=o.current)==null?void 0:c.replay()},children:"↺ replay"}):null,e.backdropUpload?y.jsxs(y.Fragment,{children:[y.jsx("input",{ref:i,type:"file",accept:"image/*",onChange:x,style:{display:"none"}}),y.jsx("button",{type:"button",className:"card-replay",onClick:()=>{var c;return(c=i.current)==null?void 0:c.click()},title:"replace the backdrop with a custom image",children:"↑ backdrop"})]}):null,e.toUpload?y.jsxs(y.Fragment,{children:[y.jsx("input",{ref:l,type:"file",accept:".svg,image/svg+xml",onChange:E,style:{display:"none"}}),y.jsx("button",{type:"button",className:"card-replay",onClick:()=>{var c;return(c=l.current)==null?void 0:c.click()},title:"replace the morph target with a custom SVG",children:"↑ target"})]}):null]})}function v0(){const[e,t]=U.useState(qn),[r,n]=U.useState(null),[o,i]=U.useState(!1),[l,s]=U.useState(null),[a,u]=U.useState(0),[p,d]=U.useState(s0),f=U.useRef(null),v=U.useRef(null),g=U.useRef(!1),x=U.useRef(null),E=U.useCallback((S,T="info")=>{s({msg:S,kind:T}),v.current!==null&&window.clearTimeout(v.current),v.current=window.setTimeout(()=>s(null),3800)},[]),h=U.useCallback(S=>{if(!(S.type==="image/svg+xml"||S.name.toLowerCase().endsWith(".svg"))){E(`${S.name} isn't an SVG`,"error");return}f.current&&URL.revokeObjectURL(f.current);const F=URL.createObjectURL(S);f.current=F,g.current=!1,t(F),n(S.name),u(R=>R+1),E(`baked ${S.name}`)},[E]),c=U.useCallback(()=>{f.current&&URL.revokeObjectURL(f.current),f.current=null,g.current=!1,t(qn),n(null),u(S=>S+1)},[]);U.useEffect(()=>{let S=0;const T=Q=>{var X;return!!((X=Q.dataTransfer)!=null&&X.types.includes("Files"))},F=Q=>{T(Q)&&(Q.preventDefault(),S+=1,i(!0))},R=Q=>{T(Q)&&Q.preventDefault()},D=Q=>{T(Q)&&(S=Math.max(0,S-1),S===0&&i(!1))},W=Q=>{var Me;if(!T(Q))return;Q.preventDefault(),S=0,i(!1);const X=(Me=Q.dataTransfer)==null?void 0:Me.files[0];X&&h(X)};return window.addEventListener("dragenter",F),window.addEventListener("dragover",R),window.addEventListener("dragleave",D),window.addEventListener("drop",W),()=>{window.removeEventListener("dragenter",F),window.removeEventListener("dragover",R),window.removeEventListener("dragleave",D),window.removeEventListener("drop",W)}},[h]),U.useEffect(()=>()=>{f.current&&URL.revokeObjectURL(f.current),v.current!==null&&window.clearTimeout(v.current)},[]),U.useEffect(()=>{document.documentElement.dataset.theme=p,window.localStorage.setItem(Od,p)},[p]);const m=U.useCallback(S=>{g.current||(g.current=!0,console.error("[bezier-sdf] live-graphic error:",S),E(S.message,"error"),f.current&&c())},[E,c]),_=S=>{var F;const T=(F=S.target.files)==null?void 0:F[0];T&&h(T),S.target.value=""},w=r??"logo.svg";return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"page",children:[y.jsxs("header",{className:"intro",children:[y.jsxs("div",{children:[y.jsxs("h1",{children:["@bezier-sdf/react ",y.jsx("span",{className:"v",children:"v0.1.0"})]}),y.jsxs("p",{children:["A gallery for ",y.jsx("code",{children:"@bezier-sdf/react"})," — a drop-in component that bakes an SVG into a GPU signed-distance field."]}),y.jsxs("p",{children:["Drag any ",y.jsx("code",{children:".svg"})," onto the page to re-bake every plate below."]})]}),y.jsxs("div",{className:"upload",children:[y.jsxs("span",{className:"file-pill","data-custom":r?"true":"false",title:w,children:[y.jsx("span",{className:"dot"}),y.jsx("span",{className:"name",children:w})]}),y.jsx("input",{ref:x,type:"file",accept:".svg,image/svg+xml",onChange:_,style:{display:"none"}}),y.jsx("button",{type:"button",className:"btn","data-variant":"accent",onClick:()=>{var S;return(S=x.current)==null?void 0:S.click()},children:"↑ upload"}),r?y.jsx("button",{type:"button",className:"btn",onClick:c,children:"reset"}):null,y.jsx("button",{type:"button",className:"btn",onClick:()=>d(S=>S==="dark"?"light":"dark"),"aria-label":`switch to ${p==="dark"?"light":"dark"} mode`,title:`switch to ${p==="dark"?"light":"dark"} mode`,children:p==="dark"?"☀ light":"☾ dark"})]})]}),y.jsx(h0,{src:e,bakeKey:a,onError:m}),y.jsx("section",{className:"gallery","aria-label":"effect gallery",children:a0.map(S=>y.jsx(m0,{spec:S,src:e,bakeKey:a,onError:m},S.id))})]}),y.jsx("div",{className:"drop-overlay","data-active":o?"true":"false","aria-hidden":!0,children:"drop .svg to bake"}),y.jsx("div",{className:"toast","data-visible":l?"true":"false","data-kind":(l==null?void 0:l.kind)??"info",role:"status","aria-live":"polite",children:l==null?void 0:l.msg})]})}const g0=gd(document.getElementById("root"));g0.render(y.jsx(U.StrictMode,{children:y.jsx(v0,{})}));
