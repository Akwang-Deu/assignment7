/*! For license information please see 56.chunk.65a1dcfbea08f952de51.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{945:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(2),l=n(11),c=n(1),r=n(26),d=n(16),s=n(45),p=n(5),g=n(46),u=n(63),k=n(43),b=n(24);const m=a.styled.div(Object.assign({display:"flex",flexDirection:"column"},Object(p.media)(c.mediaMaxMobile,{backgroundColor:c.GREY_LIGHT}))),y=a.styled.div({fontSize:16,paddingBottom:c.spacing(),fontWeight:700}),f=Object(a.styled)({textAlign:"left",cursor:"pointer",textDecoration:"none",fontSize:14,lineHeight:1.25,paddingBottom:c.spacing(.5),color:c.BLACK}),x=Object(a.styled)({display:"flex",justifyContent:"space-between",color:c.BLACK,backgroundColor:c.WHITE,fontSize:12,lineHeight:1.25,padding:{top:c.spacing(1),bottom:c.spacing(1),x:c.spacing(2)},":last-child":{paddingBottom:c.spacing(2)}}),w=a.styled.button({textAlign:"left",cursor:"pointer",display:"flex",justifyContent:"space-between",color:c.BLACK,backgroundColor:c.WHITE,fontSize:12,lineHeight:1.25,border:{xy:{width:0}},padding:{top:c.spacing(1),bottom:c.spacing(2),x:c.spacing(2)}}),E=a.styled.button({textAlign:"left",backgroundColor:"transparent",cursor:"pointer",border:{xy:{width:0}},padding:{xy:0}}),C=f(s.a),S=f(E),h=x(C),v=x(w);t.default=Object(l.a)((e=>({currentBreakpoint:e.currentBreakpoint})))((function(e){const t=Object(r.c)(e.currentBreakpoint),[n]=Object(b.useDecision)(k.o,{decideOptions:[b.OptimizelyDecideOption.DISABLE_DECISION_EVENT]}),i=n.variables.menu_identifier,a=()=>{e.identifier===i&&g.c.track(u.j)},l=()=>{var e;null===(e=null===window||void 0===window?void 0:window.UC_UI)||void 0===e||e.showSecondLayer()};return o.a.createElement(m,null,!t&&o.a.createElement(y,null,e.title),e.optionLinks.map(((e,n)=>t?o.a.createElement(h,{key:`${e.linkText}-${n}`,to:e.linkUrl,onClick:a},e.linkText,t&&o.a.createElement(d.a.SimpleRight,{size:"11"})):o.a.createElement(C,{key:`${e.linkText}-${n}`,to:e.linkUrl,onClick:a},e.linkText))),!!e.privacySettingsLink&&o.a.createElement(o.a.Fragment,null,t?o.a.createElement(v,{onClick:l},e.privacySettingsLink," ",o.a.createElement(d.a.SimpleRight,{size:"11"})):o.a.createElement(S,{onClick:l},e.privacySettingsLink)))}))}}]);