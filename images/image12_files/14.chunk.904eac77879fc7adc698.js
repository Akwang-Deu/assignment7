/*! For license information please see 14.chunk.904eac77879fc7adc698.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{678:function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var n=i(4),s=i(0),r=i.n(s),a=i(2),l=i(9),o=i(16),c=i(679),d=i(441),p=i(437),u=i(161),h=i(1),S=i(5);const g=a.styled.div({position:"relative"}),b=Object(a.styled)((e=>{var{isHero:t}=e,i=Object(n.__rest)(e,["isHero"]);return r.a.createElement(a.styled.Div,Object.assign({css:Object.assign({overflow:"hidden"},t&&Object.assign({},h.fullViewportWidthBlock()))},i))})),m=a.styled.div({width:"100%",display:"inline-block",verticalAlign:"middle"}),y=Object(a.styled)(u.c,{position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:h.ZIndex.CarouselButtons,pointerEvents:"none",display:"flex",justifyContent:"space-between",padding:{x:h.large}}),x=Object(a.styled)(l.c,Object.assign({pointerEvents:"auto",backgroundColor:h.WHITE,fontSize:"10px"},Object(S.media)("print",{display:"none"}))),v=Object(a.styled)(x,{}),O=Object(a.styled)(x,{});class j extends r.a.Component{constructor(e){super(e),this.goToSlide=e=>{this.setState({currentSlide:e})},this.goPrev=()=>{this.goToSlide(this.state.currentSlide-1)},this.goNext=()=>{this.goToSlide(this.state.currentSlide+1)},this.onSlideIndexClick=e=>{this.goToSlide(this.state.currentSlide+e)},this.state={currentSlide:0}}render(){const e=r.a.Children.toArray(this.props.children),t=e.length,i=0===this.state.currentSlide,n=this.state.currentSlide===t-1;return r.a.createElement(g,null,r.a.createElement(b,{isHero:this.props.isHero},r.a.createElement(d.c,{SlideComponent:m,next:this.goNext,prev:this.goPrev,slideWidthPercent:100,currentSlide:this.state.currentSlide,continuous:this.props.continuous,autoSlideTime:this.props.autoSlideTime,animationStyle:this.props.animationStyle||d.a.Gentle},e),!this.props.hideSlideIndexMarkers&&r.a.createElement(r.a.Fragment,null,this.props.styledSlideIndexMarkers?this.props.styledSlideIndexMarkers({nbrOfSlides:t,activeSlideIndex:Object(p.a)(this.state.currentSlide,e.length),onSlideIndexClick:this.onSlideIndexClick}):r.a.createElement(c.a,{nbrOfSlides:t,activeSlideIndex:Object(p.a)(this.state.currentSlide,e.length),onSlideIndexClick:this.onSlideIndexClick}))),!this.props.hideNavigationButtons&&r.a.createElement(y,null,(this.props.continuous||!i)&&r.a.createElement(v,{variant:l.b.Large,appearance:[l.a.Bare,l.a.Round],onClick:this.goPrev},r.a.createElement(o.a.SimpleLeft,null)),(this.props.continuous||!n)&&r.a.createElement(O,{variant:l.b.Large,appearance:[l.a.Bare,l.a.Round],onClick:this.goNext},r.a.createElement(o.a.SimpleRight,null))))}}},679:function(e,t,i){"use strict";var n=i(4),s=i(0),r=i.n(s),a=i(2),l=i(1),o=i(5);const c=a.styled.div({position:"relative",display:"flex",justifyContent:"center"}),d=Object(a.styled)(c,{position:"absolute",left:0,right:0,zIndex:1,pointerEvents:"none"}),p={active:{backgroundColor:l.WHITE,opacity:1},inactve:{backgroundColor:l.monochromeDark,opacity:.7},diameter:8},u=Object(a.styled)((e=>{var{isActive:t,indexStyling:i}=e,s=Object(n.__rest)(e,["isActive","indexStyling"]);return r.a.createElement(a.styled.Div,Object.assign({css:Object.assign(Object.assign(Object.assign(Object.assign({},i.inactve),{margin:{x:l.pixelsToUnit(2)},width:l.pixelsToUnit(i.diameter,l.Unit.Rem),height:l.pixelsToUnit(i.diameter,l.Unit.Rem),border:{y:{x:{radius:"50%"}}},cursor:"pointer"}),l.transition({property:"opacity"})),t&&{opacity:0,cursor:"default"})},s))})),h=Object(a.styled)((e=>{var{isActive:t,indexStyling:i}=e,s=Object(n.__rest)(e,["isActive","indexStyling"]);return r.a.createElement(u,Object.assign({css:Object.assign(Object.assign(Object.assign(Object.assign({},i.active),{transform:"scale(1)"}),l.transition({property:["opacity","transform"]})),!t&&{opacity:0,transform:"scale(0)"})},s,{isActive:t,indexStyling:i}))}));class S extends r.a.PureComponent{constructor(){super(...arguments),this.onSlideIndexClick=e=>{const t=e-this.props.activeSlideIndex;this.props.onSlideIndexClick(t)}}render(){const e=this.props.markerStyling||p;return r.a.createElement(a.styled.Div,{className:this.props.className},r.a.createElement(c,null,[...Array(this.props.nbrOfSlides).fill(1)].map(((t,i)=>r.a.createElement(u,{key:i,isActive:this.props.activeSlideIndex===i,onClick:()=>this.onSlideIndexClick(i),indexStyling:e}))),r.a.createElement(d,null,[...Array(this.props.nbrOfSlides).fill(1)].map(((t,i)=>r.a.createElement(h,{key:i,isActive:this.props.activeSlideIndex===i,onClick:()=>this.onSlideIndexClick(i),indexStyling:e}))))))}}t.a=Object(a.styled)(S,Object.assign({position:"absolute",zIndex:l.ZIndex.CarouselButtons,bottom:l.pixelsToUnit(8),left:0,right:0,width:"100%"},Object(o.media)("print",{display:"none"})))}}]);