/*! For license information please see 6.chunk.d22993eabb268a8dab9f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{621:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var s=n(0);const i={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},c={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},o="mousemove",r="mouseup";function a(e,t){if(0===t)return e;const n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function u(e,t){const n=t=>{const n="touches"in t;n&&t.touches.length>1||e(((e,i)=>{i.trackMouse&&!n&&(document.addEventListener(o,s),document.addEventListener(r,p));const{clientX:u,clientY:l}=n?t.touches[0]:t,O=a([u,l],i.rotationAngle);return i.onTouchStartOrOnMouseDown&&i.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),c),{initial:O.slice(),xy:O,start:t.timeStamp||0})}))},s=t=>{e(((e,n)=>{const s="touches"in t;if(s&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:c,clientY:o}=s?t.touches[0]:t,[r,u]=a([c,o],n.rotationAngle),p=r-e.xy[0],l=u-e.xy[1],O=Math.abs(p),h=Math.abs(l),g=(t.timeStamp||0)-e.start,v=Math.sqrt(O*O+h*h)/(g||1),b=[p/(g||1),l/(g||1)],d=function(e,t,n,s){return e>t?n>0?"Right":"Left":s>0?"Down":"Up"}(O,h,p,l),w="number"==typeof n.delta?n.delta:n.delta[d.toLowerCase()]||i.delta;if(O<w&&h<w&&!e.swiping)return e;const j={absX:O,absY:h,deltaX:p,deltaY:l,dir:d,event:t,first:e.first,initial:e.initial,velocity:v,vxvy:b};j.first&&n.onSwipeStart&&n.onSwipeStart(j),n.onSwiping&&n.onSwiping(j);let f=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${d}`])&&(f=!0),f&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:j,swiping:!0})}))},u=t=>{e(((e,n)=>{let s;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){s=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(s);const i=n[`onSwiped${s.dir}`];i&&i(s)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),c),{eventData:s})}))},p=e=>{document.removeEventListener(o,s),document.removeEventListener(r,p),u(e)},l=(e,t)=>{let c=()=>{};if(e&&e.addEventListener){const o=Object.assign(Object.assign({},i.touchEventOptions),t.touchEventOptions),r=[["touchstart",n,o],["touchmove",s,Object.assign(Object.assign({},o),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",u,o]];r.forEach((([t,n,s])=>e.addEventListener(t,n,s))),c=()=>r.forEach((([t,n])=>e.removeEventListener(t,n)))}return c},O={ref:t=>{null!==t&&e(((e,n)=>{if(e.el===t)return e;const s={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),s.cleanUpTouch=void 0),n.trackTouch&&t&&(s.cleanUpTouch=l(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),s)}))}};return t.trackMouse&&(O.onMouseDown=n),[O,l]}function p(e){const{trackMouse:t}=e,n=s.useRef(Object.assign({},c)),o=s.useRef(Object.assign({},i)),r=s.useRef(Object.assign({},o.current));let a;for(a in r.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},i),e),i)void 0===o.current[a]&&(o.current[a]=i[a]);const[p,l]=s.useMemo((()=>u((e=>n.current=e(n.current,o.current)),{trackMouse:t})),[t]);return n.current=function(e,t,n,s){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:s(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:s(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(n.current,o.current,r.current,l),p}}}]);