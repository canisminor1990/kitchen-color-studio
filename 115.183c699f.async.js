(self.webpackChunkantd_color_editor=self.webpackChunkantd_color_editor||[]).push([[115],{79642:function(L,M,e){"use strict";var P=e(99978),_=e(50959),v=e(13641),u=e(63753),r=e(11527),n=v.ZP.div.withConfig({componentId:"sc-a2s3pw-0"})(["overflow:hidden;display:flex;flex:1;align-items:center;justify-content:flex-start;width:100%;min-width:236px;padding:6px 12px 6px 6px;font-family:var(--leva-fonts-mono);font-size:12px;color:",";background:",";border:1px solid ",";border-radius:4px;& + &{margin-top:4px;}"],function(d){var h=d.color1;return h},function(d){var h=d.color2;return h},function(d){var h=d.theme;return h.colorBorderSecondary}),f=v.ZP.div.withConfig({componentId:"sc-a2s3pw-1"})(["display:flex;align-items:center;width:80px;"]),E=(0,_.memo)(function(d){var h=d.color1,s=d.color2,o=d.children;return(0,r.jsxs)(n,{color1:h,color2:s,children:[(0,r.jsx)(f,{children:(0,r.jsx)(u.Z,{color1:h,color2:s})}),(0,r.jsx)("div",{children:o||"".concat((0,P.H)(h).toHexString(!1)," on ").concat((0,P.H)(s).toHexString(!1))})]})});M.Z=E},57854:function(L,M,e){"use strict";var P=e(93525),_=e.n(P),v=e(92468),u=e(50959),r=e(13641),n=e(79642),f=e(29891),E=e(11527),d=r.ZP.div.withConfig({componentId:"sc-1t7bqwe-0"})(["position:relative;display:flex;flex-direction:column;width:100%;"]),h=r.ZP.div.withConfig({componentId:"sc-1t7bqwe-1"})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 8px;font-size:12px;color:",";background:",";border-radius:","px;"],function(o){var c=o.tagColor;return c[1]},function(o){var c=o.tagColor;return c[0]},function(o){var c=o.theme;return c.borderRadiusSM}),s=(0,u.memo)(function(o){var c=o.colors,m=c.map(function(l){return f.P.apply(void 0,_()(l))}),T=m.filter(function(l){return l.aa}).length/m.length*100,x=["#46d20033","#52b915"];T<=80?x=["#8edc073b","#9bcb09"]:T<=64?x=["#8edc073b","#ebbb03"]:T<=50?x=["#ffbc0745","#f99b00"]:T<=32?x=["#ff630b29","#f14c19"]:T<=16&&(x=["#ed1c0a1c","#ec011bf2"]);var b=(0,E.jsx)(d,{children:c.map(function(l,g){return(0,E.jsx)(n.Z,{color1:l[0],color2:l[1]},g)})});return(0,E.jsx)(v.Z,{content:b,title:"W3C Accessibility \u53EF\u8BFB\u6027\u6D4B\u8BD5",children:(0,E.jsx)("a",{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef",rel:"noreferrer",target:"_blank",children:(0,E.jsxs)(h,{tagColor:x,children:["AA coverage ",Math.round(T),"%"]})})})});M.Z=s},63753:function(L,M,e){"use strict";var P=e(7428),_=e(50959),v=e(13641),u=e(29891),r=e(11527),n=v.ZP.div.withConfig({componentId:"sc-r6pl9l-0"})(["display:inline-block;margin-left:4px;padding:2px 4px;font-size:10px;line-height:1;background:",";border-radius:4px;"],function(E){var d=E.theme;return d.colorPrimary}),f=(0,_.memo)(function(E){var d=E.color1,h=E.color2,s=(0,u.P)(d,h),o=s.shield,c=function(x){return(0,r.jsx)("span",{style:{color:x?"#52c41a":"gray"},children:x?"pass":"fail"})},m=(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["CTS \u21E2 ",s.cts]}),(0,r.jsxs)("div",{children:["AA",(0,r.jsx)(n,{children:"large"})," \u21E2 ",c(s.aaLarge)]}),(0,r.jsxs)("div",{children:["AA",(0,r.jsx)(n,{children:"small"})," \u21E2 ",c(s.aaaSmall)]}),(0,r.jsxs)("div",{children:["AAA",(0,r.jsx)(n,{children:"large"})," \u21E2 ",c(s.aaaLarge)]}),(0,r.jsxs)("div",{children:["AAA",(0,r.jsx)(n,{children:"small"})," \u21E2 ",c(s.aaaSmall)]})]});return(0,r.jsx)(P.Z,{title:m,children:(0,r.jsx)("a",{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef",rel:"noreferrer",target:"_blank",children:(0,r.jsx)("img",{src:o})})})});M.Z=f},29891:function(L,M,e){"use strict";e.d(M,{P:function(){return v}});var P=e(49421),_=function(r){return r==="AAA"?"https://gw.alipayobjects.com/zos/antfincdn/%26v4N7EPfwD/aaa.svg":r==="AA"?"https://gw.alipayobjects.com/zos/antfincdn/AiDCarDp5o/aa.svg":" https://gw.alipayobjects.com/zos/antfincdn/2X4RlcXBHX/fail.svg"},v=function(r,n){var f=(0,P.FA)(r,n,{level:"AA",size:"small"}),E=(0,P.FA)(r,n,{level:"AA",size:"large"}),d=(0,P.FA)(r,n,{level:"AAA",size:"small"}),h=(0,P.FA)(r,n,{level:"AAA",size:"large"}),s=f||E,o=d||h,c=o?"AAA":s?"AA":"Fail";return{aa:s,aaLarge:E,aaSmall:f,aaa:o,aaaLarge:h,aaaSmall:d,cts:(0,P.h7)(r,n).toFixed(2),result:c,shield:_(c)}}},93196:function(L,M,e){"use strict";e.d(M,{f:function(){return u}});var P=e(72319),_={edit:{isolateEdit:!1},pattern:{displayFliterStep:!1,isFliterStep:!1,isolateDark:!1}},v=[{color:"#1677FF",darkColor:"#1677FF",id:"Primary",title:"Primary",type:"normal"},{color:"#1677FF",darkColor:"#1677FF",id:"Neutral",title:"Neutral",type:"neutral"},{color:"#da4a45",darkColor:"#da4a45",id:"Red",title:"Red",type:"normal"},{color:"#e09f00",darkColor:"#be8600",id:"Yellow",title:"Yellow",type:"normal"},{color:"#67c03a",darkColor:"#4ca41f",id:"Green",title:"Green",type:"normal"},{color:"#00bec3",darkColor:"#00a1a5",id:"Sky",title:"Sky",type:"normal"},{color:"#9b59eb",darkColor:"#9b59eb",id:"Purple",title:"Purple",type:"normal"}],u={colorList:v,generate:P.u,stepFliter:[],system:_}},1126:function(L,M,e){"use strict";var P=e(69219),_=e(50959),v=e(13641),u=e(62309),r=e(50640),n=e(11527),f=v.ZP.div.withConfig({componentId:"sc-17wkdcd-0"})(["cursor:pointer;position:relative;width:48px;height:32px;background-position:0 0,0 8px,8px -8px,-8px 0;background-size:16px 16px;&:active{transform:scale(0.95);}"]),E=v.ZP.div.withConfig({componentId:"sc-17wkdcd-1"})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;"]),d=v.ZP.div.withConfig({componentId:"sc-17wkdcd-2"})(["display:flex;align-items:center;width:64px;height:32px;"]),h=v.ZP.div.withConfig({componentId:"sc-17wkdcd-3"})(["opacity:0.5;"]),s=v.ZP.div.withConfig({componentId:"sc-17wkdcd-4"})(["padding:8px 16px 32px 0;"]),o=v.ZP.div.withConfig({componentId:"sc-17wkdcd-5"})(["display:flex;flex:1;align-items:center;justify-content:center;"]),c=(0,_.memo)(function(m){var T=m.scale,x=m.colorType,b=x===void 0?"hex":x,l=m.showDetail,g=m.highLights,a=m.midHighLight,t=m.isFliterStep;return(0,n.jsx)(o,{children:(0,n.jsx)(s,{children:(0,n.jsxs)(P.Z,{direction:l?"horizontal":"vertical",size:2,children:[(0,n.jsxs)(P.Z,{direction:l?"vertical":"horizontal",size:2,children:[(0,n.jsx)(d,{style:l?{width:32}:{}},"scale-num"),Array.from({length:T.light.length}).fill("").map(function(A,p){var O=g==null?void 0:g.includes(p),D=a===p;return(0,n.jsx)(f,{style:l?{width:32}:{},children:(0,n.jsx)(E,{children:(0,n.jsx)(h,{style:{fontWeight:D?700:400,opacity:t?O?1:.1:.5},children:p+1})})},"num"+p)})]},"scale-title"),(0,n.jsx)(u.Z,{colorType:b,scale:T.light,showDetail:l,title:"light"},"light"),(0,n.jsx)(u.Z,{alpha:!0,colorType:b,scale:T.light.map(function(A){return(0,r.Z)(A,"#fff")}),showDetail:l,solidScale:T.light,title:"lightA"},"lightA"),(0,n.jsx)(u.Z,{colorType:b,scale:T.dark,showDetail:l,title:"dark"},"dark"),(0,n.jsx)(u.Z,{alpha:!0,colorType:b,scale:T.dark.map(function(A){return(0,r.Z)(A,"#000")}),showDetail:l,solidScale:T.dark,title:"darkA"},"darkA")]})})})});M.Z=c},91514:function(L,M,e){"use strict";var P=e(47435),_=e(18398),v=e(47101),u=e(69219),r=e(65042),n=e(50959),f=e(13641),E=e(93196),d=e(33018),h=e(11767),s=e(57854),o=e(1126),c=e(11527),m=_.Z,T=f.ZP.div.withConfig({componentId:"sc-wm4jrk-0"})([".studio-collapse-title{overflow:auto;background:",";border-radius:","px !important;}.studio-collapse-title-collapsed,.studio-collapse-title-expand{font-size:14px;font-weight:600;line-height:1;}.studio-divider{margin-top:8px !important;border-color:",";}"],function(l){var g=l.theme;return g.colorBgContainer},function(l){var g=l.theme;return g.borderRadius},function(l){var g=l.theme;return g.colorBorderSecondary}),x=f.ZP.div.withConfig({componentId:"sc-wm4jrk-1"})(["display:inline-block;width:16px;height:16px;border-radius:3px;"]),b=(0,n.memo)(function(l){var g=l.color,a=g===void 0?{color:"#1677FF",title:"nuname",type:"normal"}:g,t=l.config,A=t===void 0?E.f:t,p=l.displayConfig,O=p===void 0?{colorType:"hex",showDetail:!1}:p,D=l.scales,y=(0,r.r)(),C=y.isDarkMode,B=(0,d.Z)(),R=B.generateGroup,I=(0,n.useRef)(),U=A.system,i=A.stepFliter,W=A.generate,j=U.pattern,K=O.colorType,k=O.showDetail,w=(0,h.Z)(D,[a.color,(a==null?void 0:a.darkColor)||a.color]);return(0,c.jsx)(T,{isDarkMode:C,children:(0,c.jsx)(m,{defaultExpand:!0,extra:function(){return(0,c.jsxs)(u.Z,{children:[(0,c.jsx)(v.Z,{icon:(0,c.jsx)(P.Z,{}),onClick:function(){return R(I.current)},title:"\u590D\u5236\u4E3A Sketch \u7D20\u6750\u8D34"}),D.dark.length>=3&&(0,c.jsx)(s.Z,{colors:w})]})},title:(0,c.jsxs)(u.Z,{align:"center",size:4,children:[(0,c.jsx)(x,{style:{background:a.color}}),j.isolateDark&&(0,c.jsx)(x,{style:{background:a.darkColor}}),a.title]}),children:(0,c.jsx)("div",{ref:I,children:(0,c.jsx)(o.Z,{colorType:K,highLights:j.isFliterStep?i:[],isFliterStep:j.isFliterStep&&!j.displayFliterStep,midHighLight:W.step.up,scale:D,showDetail:k})})})})});M.Z=b},62309:function(L,M,e){"use strict";var P=e(69219),_=e(18621),v=e(96395),u=e(50959),r=e(90943),n=e.n(r),f=e(13641),E=e(44226),d=e(11527),h="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAntljEKADAIA23p6v//qQ+wfUEcCu1yriEgp0FHRJSJcnehmmWm1Dv/lO4HIg1AAAKjTqm03ea88zMCCEDgO4HV5bS757f+7wRoAAIQ4B9gByAAgQ3pfiDmXmAeEwAAAABJRU5ErkJggg==) 0% 0% / 26px",s="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAAZUlEQVRIDe2VMQoAMAgDa9/g/1/oIzrpZBCh2dLFkkoDF0Fz99OdiOjks+2/7S8fRRmMMIVoRGSoYzvvqF8ZIMKlC1GhQBc6IkPzq32QmdAzkEGihpWOSPsAss8HegYySNSw0hE9WQ4StafZFqkAAAAASUVORK5CYII=) 0% 0% / 26px",o=f.ZP.div.withConfig({componentId:"sc-1g79kas-0"})(["cursor:pointer;position:relative;width:48px;height:32px;background-position:0 0,0 8px,8px -8px,-8px 0;background-size:16px 16px;&:active{transform:scale(0.95);}"]),c=(0,f.ZP)(o).withConfig({componentId:"sc-1g79kas-1"})(["width:180px;font-family:var(--leva-fonts-mono);font-size:var(--leva-fontSizes-root);"]),m=f.ZP.div.withConfig({componentId:"sc-1g79kas-2"})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;"]),T=f.ZP.div.withConfig({componentId:"sc-1g79kas-3"})(["display:flex;align-items:center;width:64px;height:32px;"]),x=f.ZP.div.withConfig({componentId:"sc-1g79kas-4"})(["opacity:0.5;"]),b=(0,u.memo)(function(l){var g=l.title,a=l.scale,t=l.solidScale,A=l.colorType,p=l.showDetail,O=l.alpha,D=g.includes("dark"),y={};switch(g){case"lightA":{y={background:h,backgroundColor:"#fff"};break}case"darkA":{y={background:s,backgroundColor:"#000"};break}default:break}return(0,d.jsxs)(P.Z,{direction:p?"vertical":"horizontal",size:2,children:[(0,d.jsx)(T,{style:p?{}:{padding:8},children:(0,d.jsx)(x,{children:g})},"title"),a.map(function(C,B){if(!p)return(0,d.jsx)(r.CopyToClipboard,{text:C,children:(0,d.jsx)(o,{onClick:function(){return _.ZP.success(C)},style:y,title:C,children:(0,d.jsx)(m,{style:{backgroundColor:C}})})},C);var R=(0,E.Z)(C,A,D);return R=R.replace(" ",""),(0,d.jsx)(r.CopyToClipboard,{text:R,children:(0,d.jsx)(c,{onClick:function(){return _.ZP.success(R)},style:y,title:C,children:(0,d.jsx)(m,{style:{backgroundColor:C,color:(0,v.XV)(String(O?t==null?void 0:t[B]:C),O?t==null?void 0:t[D?0:t.length-1]:a[D?0:a.length-1],O?t==null?void 0:t[D?t.length-1:0]:a[D?a.length-1:0],!0)},children:(0,d.jsx)("div",{children:R})})})},C+B)})]})});M.Z=b},33018:function(L,M,e){"use strict";var P=e(25359),_=e.n(P),v=e(54689),u=e.n(v),r=e(49811),n=e.n(r),f=e(54306),E=e.n(f),d=e(18621),h=e(874),s=e.n(h),o=e(29478),c=e(50959);typeof window!="undefined"&&(window.DUMI_HTML2SKETCH={nodeToGroup:o.Sg,nodeToSymbol:o.Zv});var m=function(){var x=(0,c.useState)(),b=E()(x,2),l=b[0],g=b[1],a=function(){var t=n()(_()().mark(function A(p,O){var D,y,C,B,R,I;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,console.groupCollapsed("[html2sketch]\u5F00\u59CB\u8F6C\u6362..."),!Array.isArray(p)){i.next=26;break}y=[],C=u()(p),i.prev=5,C.s();case 7:if((B=C.n()).done){i.next=15;break}return R=B.value,i.next=11,O(R);case 11:I=i.sent,y.push(I);case 13:i.next=7;break;case 15:i.next=20;break;case 17:i.prev=17,i.t0=i.catch(5),C.e(i.t0);case 20:return i.prev=20,C.f(),i.finish(20);case 23:D=y,i.next=29;break;case 26:return i.next=28,O(p);case 28:D=i.sent;case 29:return console.groupEnd(),console.log("\u89E3\u6790\u7ED3\u679C:",D),s()(JSON.stringify(D)),g(D),i.next=35,d.ZP.success("\u8F6C\u6362\u6210\u529F\u{1F389} \u5DF2\u590D\u5236\u5230\u526A\u5207\u677F");case 35:return i.abrupt("return",D);case 38:return i.prev=38,i.t1=i.catch(0),i.next=42,d.ZP.error("\u89E3\u6790\u5931\u8D25,\u8BF7\u68C0\u67E5 Console \u8F93\u51FA \u{1F636}");case 42:console.groupEnd(),console.groupEnd(),console.error("\u62A5\u9519\u5982\u4E0B:"),console.error(i.t1);case 46:case"end":return i.stop()}},A,null,[[0,38],[5,17,20,23]])}));return function(p,O){return t.apply(this,arguments)}}();return{generateGroup:function(){var t=n()(_()().mark(function p(O){return _()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,a(O,function(){var C=n()(_()().mark(function B(R){var I;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,o.Sg)(R);case 2:return I=i.sent,i.abrupt("return",I.toSketchJSON());case 4:case"end":return i.stop()}},B)}));return function(B){return C.apply(this,arguments)}}());case 2:case"end":return y.stop()}},p)}));function A(p){return t.apply(this,arguments)}return A}(),generateSymbol:function(){var t=n()(_()().mark(function p(O){return _()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,a(O,function(){var C=n()(_()().mark(function B(R){var I;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,o.Zv)(R);case 2:return I=i.sent,i.abrupt("return",I.toSketchJSON());case 4:case"end":return i.stop()}},B)}));return function(B){return C.apply(this,arguments)}}());case 2:case"end":return y.stop()}},p)}));function A(p){return t.apply(this,arguments)}return A}(),sketchJSON:l}};M.Z=m},44226:function(L,M,e){"use strict";var P=e(99978),_=e(48453),v=e.n(_),u=e(11135),r=function(f,E,d){var h=f,s=v()(f).alpha()!==1,o=new P.C(f);switch(E){case"mix":{h=s?o.toRgbString():o.toHexString(!1);break}case"hex":{h=s?o.toHex8String(!1):o.toHexString(!1);break}case"hct":{h=(0,u.ch)(f,s);break}case"rgb":{h=o.toRgbString();break}case"hsl":{h=o.toHslString();break}case"hsv":{h=o.toHsvString();break}case"cts":{h=(0,u.Ro)(f,d?"#000":"#fff",s);break}default:break}return h};M.Z=r},11135:function(L,M,e){"use strict";e.d(M,{Ro:function(){return d},Wg:function(){return n},ch:function(){return E},xC:function(){return f}});var P=e(54306),_=e.n(P),v=e(59424),u=e(48453),r=e.n(u),n=function(s){var o=v.OP.fromInt((0,v.fq)(s));return[o.hue,o.chroma,o.tone]},f=function(s){var o=v.OP.from(s[0],s[1],s[2]);return(0,v.PQ)(o.toInt())},E=function(s,o){if(o){var c=r()(s).rgba(),m=_()(c,4),T=m[0],x=m[1],b=m[2],l=m[3],g=r().rgb(T,x,b).hex(),a=n(g);return"hcta(".concat(a.map(function(A){return Math.round(A)}).join(","),",").concat(l,")")}else{var t=n(s);return"hct(".concat(t.map(function(A){return Math.round(A)}).join(","),")")}},d=function(s,o,c){var m;return c?m="cts(--)":(m=r().contrast(s,o).toFixed(2),m="cts("+m+")"),m}},11767:function(L,M){"use strict";var e=function(_,v){var u=v[0],r=v[1]||v[0],n=_.light.length-1,f=[[u,"#fff"],[_.light[n],_.light[0]],n>=4&&[_.light[n-1],_.light[1]],[_.light[n],u],[r,"#000"],[_.dark[n],_.dark[0]],_.dark.length>=4&&[_.dark[n-1],_.dark[1]],[_.dark[n],r]].filter(Boolean);return f};M.Z=e},72319:function(L,M,e){"use strict";e.d(M,{u:function(){return T}});var P=e(54306),_=e.n(P),v=e(93525),u=e.n(v),r=e(21140),n=e.n(r),f=e(63466),E=e.n(f),d=e(52510),h=e.n(d),s=e(65943),o=e.n(s),c=e(78721),m=e(11135),T={dark:{down:{cEasing:[0,0,1,1],cTarget:5,hEasing:[0,0,1,1],hRotate:-10,tEasing:[0,0,1,1],tTarget:98},up:{cEasing:[0,0,1,1],cTarget:50,hEasing:[0,0,1,1],hRotate:20,tEasing:[0,0,1,1],tTarget:10}},hue:{multiply:-.5,segment:[100,200]},light:{down:{cEasing:[0,0,1,1],cTarget:50,hEasing:[0,0,1,1],hRotate:20,tEasing:[0,0,1,1],tTarget:10},up:{cEasing:[0,0,1,1],cTarget:5,hEasing:[0,0,1,1],hRotate:-10,tEasing:[0,0,1,1],tTarget:98}},neutral:{cEasingDown:[0,0,1,1],cEasingUp:[0,0,1,1],cStart:15,cTarget:10,standard:"#888"},step:{down:5,up:5}},x=function(){function b(l){n()(this,b),h()(this,"config",T),this.config=(0,c.Z)(this.config,l)}return E()(b,[{key:"gen",value:function(g){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{neutral:!1,theme:"light"};if(a.neutral)return this.genNeutral(g,a);var t=(0,m.Wg)(g),A=this.genList(t,"up",a.theme==="dark").reverse(),p=this.genList(t,"down",a.theme==="dark"),O=[].concat(u()(A),[t],u()(p));return O.map(function(D){return(0,m.xC)(D)})}},{key:"genNeutral",value:function(g,a){var t=(0,m.Wg)(g);t=[t[0],this.config.neutral.cStart,(0,m.Wg)(this.config.neutral.standard)[2]],this.config.neutral.cStart===1&&(t=(0,m.Wg)(this.config.neutral.standard),this.config.neutral.cStart=2,this.config.neutral.cTarget=2);var A=this.genList(t,"up",a.theme==="dark",!0).reverse(),p=this.genList(t,"down",a.theme==="dark",!0),O=[].concat(u()(A),[t],u()(p));return O.map(function(D){return(0,m.xC)(D)})}},{key:"genList",value:function(g){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"up",t=arguments.length>2?arguments[2]:void 0,A=arguments.length>3?arguments[3]:void 0,p=t?this.config.dark.up:this.config.light.up,O=t?this.config.dark.down:this.config.light.down,D=a==="up"?this.config.step.up:this.config.step.down,y=[],C=a==="up"?p:O,B=C.hRotate,R=C.tTarget,I=C.hEasing,U=C.tEasing,i=a==="up"?p:O,W=i.cTarget,j=i.cEasing;A&&(W=this.config.neutral.cTarget,j=a==="up"?this.config.neutral.cEasingUp:this.config.neutral.cEasingDown);for(var K=o().apply(void 0,u()(I)),k=o().apply(void 0,u()(j)),w=o().apply(void 0,u()(U)),S=_()(g,3),H=S[0],z=S[1],G=S[2],Z=1;Z<=D;Z++){var F=Z/D,N=this.hueRotate(H,B*K(F)),J=z+(W-z)*k(F),V=G+(R-G)*w(F);y.push([N,J,V])}return y}},{key:"hueRotate",value:function(g,a){var t=g+this.calcHueRotate(g,a);return t>360&&(t=t-360),t<0&&(t=t+360),t}},{key:"genCalcHueVaule",value:function(g,a,t,A){var p=Math.PI/180,O=360/(a-g),D=-1*O*p*(3*g+a)/4,y=t*A,C=(t+y)/2,B=(t-y)/2;return function(R){var I=R*p;return B*Math.sin(O*I+D)+C}}},{key:"calcHueRotate",value:function(g,a){var t=this.config.hue,A=t.segment,p=t.multiply,O=this.genCalcHueVaule(A[0],A[1],a,p);return O(g)}}]),b}();M.Z=x},50640:function(L,M,e){"use strict";var P=e(54306),_=e.n(P),v=e(48453),u=e.n(v);function r(E){return E>=0&&E<=255}function n(E){return E.length<4?"rgb(".concat(E.join(","),")"):"rgba(".concat(E.join(","),")")}function f(E,d){for(var h=u()(E).rgb(),s=_()(h,3),o=s[0],c=s[1],m=s[2],T=u()(d).rgb(),x=_()(T,3),b=x[0],l=x[1],g=x[2],a=.01;a<=1;a+=.01){var t=Math.round((o-b*(1-a))/a),A=Math.round((c-l*(1-a))/a),p=Math.round((m-g*(1-a))/a);if(r(t)&&r(A)&&r(p))return u()(n([t,A,p,Math.round(a*100)/100])).hex()}return u()(n([o,c,m,1])).hex()}M.Z=f},11965:function(){},57002:function(){},84232:function(){},14050:function(){}}]);