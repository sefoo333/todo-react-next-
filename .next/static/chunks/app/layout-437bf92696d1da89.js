(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8324:function(A,e,t){Promise.resolve().then(t.t.bind(t,5326,23)),Promise.resolve().then(t.bind(t,5394)),Promise.resolve().then(t.t.bind(t,3054,23)),Promise.resolve().then(t.bind(t,5004))},5394:function(A,e,t){"use strict";t.r(e),t.d(e,{darkmode:function(){return i},default:function(){return o}});var n=t(7437),r=t(9838),a=t(6356);t(1352);var c=t(2265);let i=(0,c.createContext)();function o(A){let[e,t]=(0,c.useState)("dark");return(0,n.jsxs)("div",{className:"main relative",children:[(0,n.jsx)("img",{className:"w-full relative",src:r.Z.src,alt:"image"}),(0,n.jsxs)("div",{className:"text",children:[(0,n.jsx)("h1",{children:"TODO"}),(0,n.jsx)(i.Provider,{value:e,children:"dark"===e?(0,n.jsx)(a.Dq,{onClick:()=>{"dark"===e?t("light"):t("dark"),console.log(e)}}):(0,n.jsx)(a.hjx,{onClick:()=>{"dark"===e?t("light"):t("dark"),console.log(e)}})})]})]})}},5004:function(A,e,t){"use strict";t.d(e,{default:function(){return s}});var n=t(7437),r=t(1444),a=t(9753),c=t(9068),i=t(1352);let o=(0,a.xC)({reducer:{todo:c.ZP,darker:i.dT}});function s(A){let{children:e}=A;return(0,n.jsx)(r.zt,{store:o,children:e})}},1352:function(A,e,t){"use strict";t.d(e,{dT:function(){return n}});let n=(0,t(9753).oM)({initialState:[],name:"darkMode",reducers:{add_dark:(A,e)=>{A.push("done"),console.log(A)}}}),{add_dark:r}=n.actions;n.reducer},9068:function(A,e,t){"use strict";t.d(e,{IH:function(){return r},T_:function(){return a},ZH:function(){return c}});let n=(0,t(9753).oM)({name:"todoSlice",initialState:[],reducers:{add:(A,e)=>{if(""!==e.payload){let t={id:Date.now(),name:e.payload,check:!1};A.push(t),console.log(t)}return A},ischecked:(A,e)=>{A.map(A=>{e.payload==A.id&&(A.check?A.check=!1:A.check=!0,console.log(A.check))})},clear:(A,e)=>[]}}),{add:r,ischecked:a,clear:c}=n.actions;e.ZP=n.reducer},3054:function(){},9838:function(A,e){"use strict";e.Z={src:"/_next/static/media/bg-desktop-dark.b69c1296.jpg",height:300,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAig+t/8QAFhABAQEAAAAAAAAAAAAAAAAAAQAi/9oACAEBAAE/ABc3/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEEM//aAAgBAgEBPwCjRn//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQQz/9oACAEDAQE/AJskf//Z",blurWidth:8,blurHeight:2}},5326:function(A){A.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(A){A.O(0,[370,51,638,971,23,744],function(){return A(A.s=8324)}),_N_E=A.O()}]);