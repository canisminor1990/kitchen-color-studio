(self.webpackChunkantd_color_editor=self.webpackChunkantd_color_editor||[]).push([[452],{49421:function(i,d,e){"use strict";e.d(d,{FA:function(){return c},h7:function(){return u}});var l=e(99978);function u(t,s){var a=new l.C(t),r=new l.C(s);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)}function c(t,s,a){var r,o;a===void 0&&(a={level:"AA",size:"small"});var f=u(t,s);switch(((r=a.level)!==null&&r!==void 0?r:"AA")+((o=a.size)!==null&&o!==void 0?o:"small")){case"AAsmall":case"AAAlarge":return f>=4.5;case"AAlarge":return f>=3;case"AAAsmall":return f>=7;default:return!1}}function n(t,s,a){a===void 0&&(a={includeFallbackColors:!1,level:"AA",size:"small"});for(var r=null,o=0,f=a.includeFallbackColors,v=a.level,m=a.size,_=0,P=s;_<P.length;_++){var h=P[_],A=u(t,h);A>o&&(o=A,r=new TinyColor(h))}return c(t,r,{level:v,size:m})||!f?r:(a.includeFallbackColors=!1,n(t,["#fff","#000"],a))}},48822:function(i,d,e){"use strict";e.r(d);var l=e(57854),u=e(11527);d.default=function(){var c=[["#1677ff","#001355"],["#001355","#1677ff"],["#fff","#1677ff"],["#000","#1677ff"],["#fff","#001355"],["#000","#001355"]];return(0,u.jsx)(l.Z,{colors:c})}},94395:function(i,d,e){"use strict";e.r(d);var l=e(69219),u=e(29891),c=e(8669),n=e(86745),t=e(11527);d.default=function(){var s=(0,n.WQ)(),a=(0,n.M4)({color1:"#1677FF",color2:"#001355"},{store:s}),r=a.color1,o=a.color2,f=(0,u.P)(r,o);return(0,t.jsxs)(l.Z,{direction:"vertical",style:{background:"var(--leva-colors-elevation2)",padding:16},children:[(0,t.jsxs)(l.Z,{align:"start",children:[(0,t.jsx)(n.MT,{fill:!0,flat:!0,store:s,titleBar:!1}),(0,t.jsx)(c.Z,{color1:r,color2:o})]}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:JSON.stringify(f,null,4)})})]})}},79642:function(i,d,e){"use strict";var l=e(99978),u=e(50959),c=e(13641),n=e(63753),t=e(11527),s=c.ZP.div.withConfig({componentId:"sc-a2s3pw-0"})(["overflow:hidden;display:flex;flex:1;align-items:center;justify-content:flex-start;width:100%;min-width:236px;padding:6px 12px 6px 6px;font-family:var(--leva-fonts-mono);font-size:12px;color:",";background:",";border:1px solid ",";border-radius:4px;& + &{margin-top:4px;}"],function(o){var f=o.color1;return f},function(o){var f=o.color2;return f},function(o){var f=o.theme;return f.colorBorderSecondary}),a=c.ZP.div.withConfig({componentId:"sc-a2s3pw-1"})(["display:flex;align-items:center;width:80px;"]),r=(0,u.memo)(function(o){var f=o.color1,v=o.color2,m=o.children;return(0,t.jsxs)(s,{color1:f,color2:v,children:[(0,t.jsx)(a,{children:(0,t.jsx)(n.Z,{color1:f,color2:v})}),(0,t.jsx)("div",{children:m||"".concat((0,l.H)(f).toHexString(!1)," on ").concat((0,l.H)(v).toHexString(!1))})]})});d.Z=r},57854:function(i,d,e){"use strict";var l=e(93525),u=e.n(l),c=e(92468),n=e(50959),t=e(13641),s=e(79642),a=e(29891),r=e(11527),o=t.ZP.div.withConfig({componentId:"sc-1t7bqwe-0"})(["position:relative;display:flex;flex-direction:column;width:100%;"]),f=t.ZP.div.withConfig({componentId:"sc-1t7bqwe-1"})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 8px;font-size:12px;color:",";background:",";border-radius:","px;"],function(m){var _=m.tagColor;return _[1]},function(m){var _=m.tagColor;return _[0]},function(m){var _=m.theme;return _.borderRadiusSM}),v=(0,n.memo)(function(m){var _=m.colors,P=_.map(function(O){return a.P.apply(void 0,u()(O))}),h=P.filter(function(O){return O.aa}).length/P.length*100,A=["#46d20033","#52b915"];h<=80?A=["#8edc073b","#9bcb09"]:h<=64?A=["#8edc073b","#ebbb03"]:h<=50?A=["#ffbc0745","#f99b00"]:h<=32?A=["#ff630b29","#f14c19"]:h<=16&&(A=["#ed1c0a1c","#ec011bf2"]);var R=(0,r.jsx)(o,{children:_.map(function(O,x){return(0,r.jsx)(s.Z,{color1:O[0],color2:O[1]},x)})});return(0,r.jsx)(c.Z,{content:R,title:"W3C Accessibility \u53EF\u8BFB\u6027\u6D4B\u8BD5",children:(0,r.jsx)("a",{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef",rel:"noreferrer",target:"_blank",children:(0,r.jsxs)(f,{tagColor:A,children:["AA coverage ",Math.round(h),"%"]})})})});d.Z=v},63753:function(i,d,e){"use strict";var l=e(7428),u=e(50959),c=e(13641),n=e(29891),t=e(11527),s=c.ZP.div.withConfig({componentId:"sc-r6pl9l-0"})(["display:inline-block;margin-left:4px;padding:2px 4px;font-size:10px;line-height:1;background:",";border-radius:4px;"],function(r){var o=r.theme;return o.colorPrimary}),a=(0,u.memo)(function(r){var o=r.color1,f=r.color2,v=(0,n.P)(o,f),m=v.shield,_=function(A){return(0,t.jsx)("span",{style:{color:A?"#52c41a":"gray"},children:A?"pass":"fail"})},P=(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{children:["CTS \u21E2 ",v.cts]}),(0,t.jsxs)("div",{children:["AA",(0,t.jsx)(s,{children:"large"})," \u21E2 ",_(v.aaLarge)]}),(0,t.jsxs)("div",{children:["AA",(0,t.jsx)(s,{children:"small"})," \u21E2 ",_(v.aaaSmall)]}),(0,t.jsxs)("div",{children:["AAA",(0,t.jsx)(s,{children:"large"})," \u21E2 ",_(v.aaaLarge)]}),(0,t.jsxs)("div",{children:["AAA",(0,t.jsx)(s,{children:"small"})," \u21E2 ",_(v.aaaSmall)]})]});return(0,t.jsx)(l.Z,{title:P,children:(0,t.jsx)("a",{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef",rel:"noreferrer",target:"_blank",children:(0,t.jsx)("img",{src:m})})})});d.Z=a},8669:function(i,d,e){"use strict";var l=e(50959),u=e(13641),c=e(79642),n=e(11527),t=u.ZP.div.withConfig({componentId:"sc-1mkr5me-0"})(["position:relative;display:flex;flex-direction:column;width:100%;"]),s=(0,l.memo)(function(a){var r=a.color1,o=a.color2;return(0,n.jsxs)(t,{children:[(0,n.jsx)(c.Z,{color1:r,color2:o,children:[r,"on",o].join(" ")}),(0,n.jsx)(c.Z,{color1:o,color2:r,children:[o,"on",r].join(" ")}),(0,n.jsx)(c.Z,{color1:"#fff",color2:r,children:["White text on",o].join(" ")}),(0,n.jsx)(c.Z,{color1:"#000",color2:r,children:["Black text on",o].join(" ")})]})});d.Z=s},29891:function(i,d,e){"use strict";e.d(d,{P:function(){return c}});var l=e(49421),u=function(t){return t==="AAA"?"https://gw.alipayobjects.com/zos/antfincdn/%26v4N7EPfwD/aaa.svg":t==="AA"?"https://gw.alipayobjects.com/zos/antfincdn/AiDCarDp5o/aa.svg":" https://gw.alipayobjects.com/zos/antfincdn/2X4RlcXBHX/fail.svg"},c=function(t,s){var a=(0,l.FA)(t,s,{level:"AA",size:"small"}),r=(0,l.FA)(t,s,{level:"AA",size:"large"}),o=(0,l.FA)(t,s,{level:"AAA",size:"small"}),f=(0,l.FA)(t,s,{level:"AAA",size:"large"}),v=a||r,m=o||f,_=m?"AAA":v?"AA":"Fail";return{aa:v,aaLarge:r,aaSmall:a,aaa:m,aaaLarge:f,aaaSmall:o,cts:(0,l.h7)(t,s).toFixed(2),result:_,shield:u(_)}}},39326:function(i,d,e){"use strict";var l=e(50959),u=e(92194);d.Z=()=>{const[c,n]=l.useState(!1);return l.useEffect(()=>{n((0,u.fk)())},[]),c}},69219:function(i,d,e){"use strict";e.d(d,{Z:function(){return O}});var l=e(84875),u=e.n(l),c=e(31413),n=e(50959),t=e(39326),s=e(40780),a=e(91013);const r=n.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),o=r.Provider;var v=x=>{let{className:y,direction:C,index:E,marginDirection:g,children:p,split:M,wrap:D,style:S}=x;const{horizontalSize:W,verticalSize:z,latestIndex:B,supportFlexGap:T}=n.useContext(r);let b={};return T||(C==="vertical"?E<B&&(b={marginBottom:W/(M?2:1)}):b=Object.assign(Object.assign({},E<B&&{[g]:W/(M?2:1)}),D&&{paddingBottom:z})),p==null?null:n.createElement(n.Fragment,null,n.createElement("div",{className:y,style:Object.assign(Object.assign({},b),S)},p),E<B&&M&&n.createElement("span",{className:`${y}-split`,style:b},M))},m=e(67772),_=function(x,y){var C={};for(var E in x)Object.prototype.hasOwnProperty.call(x,E)&&y.indexOf(E)<0&&(C[E]=x[E]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,E=Object.getOwnPropertySymbols(x);g<E.length;g++)y.indexOf(E[g])<0&&Object.prototype.propertyIsEnumerable.call(x,E[g])&&(C[E[g]]=x[E[g]]);return C};const P={small:8,middle:16,large:24};function h(x){return typeof x=="string"?P[x]:x||0}const R=n.forwardRef((x,y)=>{var C,E;const{getPrefixCls:g,space:p,direction:M}=n.useContext(s.E_),{size:D=(p==null?void 0:p.size)||"small",align:S,className:W,rootClassName:z,children:B,direction:T="horizontal",prefixCls:b,split:Q,style:Y,wrap:X=!1,classNames:Z,styles:F}=x,q=_(x,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),K=(0,t.Z)(),[w,U]=n.useMemo(()=>(Array.isArray(D)?D:[D,D]).map(j=>h(j)),[D]),k=(0,c.Z)(B,{keepEmpty:!0}),V=S===void 0&&T==="horizontal"?"center":S,I=g("space",b),[ee,te]=(0,m.Z)(I),re=u()(I,p==null?void 0:p.className,te,`${I}-${T}`,{[`${I}-rtl`]:M==="rtl",[`${I}-align-${V}`]:V},W,z),J=u()(`${I}-item`,(C=Z==null?void 0:Z.item)!==null&&C!==void 0?C:(E=p==null?void 0:p.classNames)===null||E===void 0?void 0:E.item),ne=M==="rtl"?"marginLeft":"marginRight";let N=0;const oe=k.map((j,$)=>{var G,H;j!=null&&(N=$);const le=j&&j.key||`${J}-${$}`;return n.createElement(v,{className:J,key:le,direction:T,index:$,marginDirection:ne,split:Q,wrap:X,style:(G=F==null?void 0:F.item)!==null&&G!==void 0?G:(H=p==null?void 0:p.styles)===null||H===void 0?void 0:H.item},j)}),ae=n.useMemo(()=>({horizontalSize:w,verticalSize:U,latestIndex:N,supportFlexGap:K}),[w,U,N,K]);if(k.length===0)return null;const L={};return X&&(L.flexWrap="wrap",K||(L.marginBottom=-U)),K&&(L.columnGap=w,L.rowGap=U),ee(n.createElement("div",Object.assign({ref:y,className:re,style:Object.assign(Object.assign(Object.assign({},L),p==null?void 0:p.style),Y)},q),n.createElement(o,{value:ae},oe)))});R.Compact=a.ZP;var O=R},30006:function(i,d,e){var l=e(25705);function u(c){if(Array.isArray(c))return l(c)}i.exports=u,i.exports.__esModule=!0,i.exports.default=i.exports},16660:function(i){function d(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}i.exports=d,i.exports.__esModule=!0,i.exports.default=i.exports},95848:function(i){function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i.exports=d,i.exports.__esModule=!0,i.exports.default=i.exports},93525:function(i,d,e){var l=e(30006),u=e(16660),c=e(41442),n=e(95848);function t(s){return l(s)||u(s)||c(s)||n()}i.exports=t,i.exports.__esModule=!0,i.exports.default=i.exports}}]);
