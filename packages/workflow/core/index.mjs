(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.pointer-events-none{pointer-events:none;}.visible{visibility:visible;}.absolute{position:absolute;}.fixed{position:fixed;}.relative{position:relative;}.-left-\\[2000px\\]{left:-2000px;}.-left-3{left:-0.75rem;}.-top-\\[2000px\\]{top:-2000px;}.-top-10{top:-2.5rem;}.-top-5{top:-1.25rem;}.bottom-0{bottom:0;}.bottom-8{bottom:2rem;}.left-0{left:0;}.left-1\\/2{left:50%;}.left-full{left:100%;}.right-0{right:0;}.right-4{right:1rem;}.right-6{right:1.5rem;}.right-full{right:100%;}.top-1\\/2{top:50%;}.top-14{top:3.5rem;}.top-16{top:4rem;}.top-18{top:4.5rem;}.top-4{top:1rem;}.top-6{top:1.5rem;}.z-\\[100\\]{z-index:100;}.z-\\[110\\]{z-index:110;}.z-\\[120\\]{z-index:120;}.z-\\[130\\]{z-index:130;}.z-\\[60\\]{z-index:60;}.z-1{z-index:1;}.z-10{z-index:10;}.z-20{z-index:20;}.z-30{z-index:30;}.z-50{z-index:50;}.grid{display:grid;}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem;}.mx-1{margin-left:0.25rem;margin-right:0.25rem;}.mx-auto{margin-left:auto;margin-right:auto;}.my-1{margin-top:0.25rem;margin-bottom:0.25rem;}.-mt-1{margin-top:-0.25rem;}.mb-1\\.5{margin-bottom:0.375rem;}.mb-4{margin-bottom:1rem;}.ml-1{margin-left:0.25rem;}.ml-4{margin-left:1rem;}.mr-10{margin-right:2.5rem;}.mr-2{margin-right:0.5rem;}.mr-4{margin-right:1rem;}.mt-1{margin-top:0.25rem;}.hidden{display:none;}.aspect-square{aspect-ratio:1/1;}.h-\\[28px\\]{height:28px;}.h-\\[60vh\\]{height:60vh;}.h-1\\.5{height:0.375rem;}.h-10{height:2.5rem;}.h-14{height:3.5rem;}.h-3,.h3{height:0.75rem;}.h-4{height:1rem;}.h-5{height:1.25rem;}.h-6{height:1.5rem;}.h-8{height:2rem;}.h-9{height:2.25rem;}.h-full{height:100%;}.h-px{height:1px;}.max-h-\\[400px\\]{max-height:400px;}.max-h-\\[80vh\\]{max-height:80vh;}.max-w-\\[120px\\]{max-width:120px;}.max-w-\\[95vw\\]{max-width:95vw;}.min-w-\\[60px\\]{min-width:60px;}.w-\\[240px\\]{width:240px;}.w-10{width:2.5rem;}.w-12{width:3rem;}.w-2\\/3{width:66.6666666667%;}.w-3{width:0.75rem;}.w-5{width:1.25rem;}.w-6{width:1.5rem;}.w-64{width:16rem;}.w-8{width:2rem;}.w-80{width:20rem;}.w-9{width:2.25rem;}.w-auto{width:auto;}.w-full{width:100%;}.w-px{width:1px;}.flex{display:flex;}.flex-1{flex:1 1 0%;}.flex-shrink{flex-shrink:1;}.flex-shrink-0,.shrink-0{flex-shrink:0;}.flex-row{flex-direction:row;}.flex-col{flex-direction:column;}.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.-translate-y-1{--un-translate-y:-0.25rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.translate-y-0{--un-translate-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.translate-y-2{--un-translate-y:0.5rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.scale-0{--un-scale-x:0;--un-scale-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.scale-100{--un-scale-x:1;--un-scale-y:1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.scale-150{--un-scale-x:1.5;--un-scale-y:1.5;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.scale-95{--un-scale-x:0.95;--un-scale-y:0.95;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.group:hover .group-hover\\:scale-110{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.hover\\:scale-125:hover{--un-scale-x:1.25;--un-scale-y:1.25;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.active\\:scale-95:active{--un-scale-x:0.95;--un-scale-y:0.95;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.cursor-pointer{cursor:pointer;}.cursor-grab{cursor:grab;}.resize{resize:both;}.items-center{align-items:center;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-1{gap:0.25rem;}.gap-1\\.5{gap:0.375rem;}.gap-2{gap:0.5rem;}.gap-3{gap:0.75rem;}.space-y-0\\.5>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.125rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.125rem * var(--un-space-y-reverse));}.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.25rem * var(--un-space-y-reverse));}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}.space-y-3>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}.space-y-4>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}.space-y-6>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}.overflow-hidden{overflow:hidden;}.overflow-x-auto{overflow-x:auto;}.overflow-y-auto{overflow-y:auto;}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.whitespace-nowrap{white-space:nowrap;}.border,.border-1{border-width:1px;}.border-2{border-width:2px;}.border-4{border-width:4px;}.border-b{border-bottom-width:1px;}.border-t{border-top-width:1px;}.border-blue-200{--un-border-opacity:1;border-color:rgb(191 219 254 / var(--un-border-opacity));}.border-emerald-200{--un-border-opacity:1;border-color:rgb(167 243 208 / var(--un-border-opacity));}.border-rose-200{--un-border-opacity:1;border-color:rgb(254 205 211 / var(--un-border-opacity));}.border-slate-100{--un-border-opacity:1;border-color:rgb(241 245 249 / var(--un-border-opacity));}.border-slate-200{--un-border-opacity:1;border-color:rgb(226 232 240 / var(--un-border-opacity));}.border-slate-200\\/50{border-color:rgb(226 232 240 / 0.5);}.border-transparent{border-color:transparent;}.border-white{--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));}.dark .dark\\:border-\\[\\#1f1f1f\\]{--un-border-opacity:1;border-color:rgb(31 31 31 / var(--un-border-opacity));}.dark .dark\\:border-\\[\\#262626\\]{--un-border-opacity:1;border-color:rgb(38 38 38 / var(--un-border-opacity));}.dark .dark\\:border-blue-500\\/20{border-color:rgb(59 130 246 / 0.2);}.dark .dark\\:border-emerald-500\\/20{border-color:rgb(16 185 129 / 0.2);}.dark .dark\\:border-rose-500\\/20{border-color:rgb(244 63 94 / 0.2);}.dark .dark\\:border-slate-700{--un-border-opacity:1;border-color:rgb(51 65 85 / var(--un-border-opacity));}.dark .dark\\:border-slate-700\\/50{border-color:rgb(51 65 85 / 0.5);}.dark .dark\\:border-slate-800{--un-border-opacity:1;border-color:rgb(30 41 59 / var(--un-border-opacity));}.dark .dark\\:hover\\:border-blue-500\\/30:hover{border-color:rgb(59 130 246 / 0.3);}.dark .dark\\:hover\\:border-blue-500\\/50:hover{border-color:rgb(59 130 246 / 0.5);}.hover\\:border-blue-200:hover{--un-border-opacity:1;border-color:rgb(191 219 254 / var(--un-border-opacity));}.hover\\:border-blue-300:hover{--un-border-opacity:1;border-color:rgb(147 197 253 / var(--un-border-opacity));}.border-r-slate-900{--un-border-opacity:1;--un-border-right-opacity:var(--un-border-opacity);border-right-color:rgb(15 23 42 / var(--un-border-right-opacity));}.dark .dark\\:border-r-white{--un-border-opacity:1;--un-border-right-opacity:var(--un-border-opacity);border-right-color:rgb(255 255 255 / var(--un-border-right-opacity));}.rounded{border-radius:0.25rem;}.rounded-2,.rounded-lg{border-radius:0.5rem;}.rounded-2xl{border-radius:1rem;}.rounded-full{border-radius:9999px;}.rounded-xl{border-radius:0.75rem;}.rounded-t-2xl{border-top-left-radius:1rem;border-top-right-radius:1rem;}.border-dashed{border-style:dashed;}.bg-amber-500{--un-bg-opacity:1;background-color:rgb(245 158 11 / var(--un-bg-opacity)) /* #f59e0b */;}.bg-blue-50,.group:hover .group-hover\\:bg-blue-50{--un-bg-opacity:1;background-color:rgb(239 246 255 / var(--un-bg-opacity)) /* #eff6ff */;}.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}.bg-blue-500\\/10,.dark .dark\\:bg-blue-500\\/10{background-color:rgb(59 130 246 / 0.1) /* #3b82f6 */;}.bg-emerald-50{--un-bg-opacity:1;background-color:rgb(236 253 245 / var(--un-bg-opacity)) /* #ecfdf5 */;}.bg-emerald-500{--un-bg-opacity:1;background-color:rgb(16 185 129 / var(--un-bg-opacity)) /* #10b981 */;}.bg-rose-50{--un-bg-opacity:1;background-color:rgb(255 241 242 / var(--un-bg-opacity)) /* #fff1f2 */;}.bg-rose-500{--un-bg-opacity:1;background-color:rgb(244 63 94 / var(--un-bg-opacity)) /* #f43f5e */;}.bg-slate-100{--un-bg-opacity:1;background-color:rgb(241 245 249 / var(--un-bg-opacity)) /* #f1f5f9 */;}.bg-slate-200{--un-bg-opacity:1;background-color:rgb(226 232 240 / var(--un-bg-opacity)) /* #e2e8f0 */;}.bg-slate-50{--un-bg-opacity:1;background-color:rgb(248 250 252 / var(--un-bg-opacity)) /* #f8fafc */;}.bg-slate-50\\/30{background-color:rgb(248 250 252 / 0.3) /* #f8fafc */;}.bg-slate-50\\/50{background-color:rgb(248 250 252 / 0.5) /* #f8fafc */;}.bg-slate-900{--un-bg-opacity:1;background-color:rgb(15 23 42 / var(--un-bg-opacity)) /* #0f172a */;}.bg-white,.dark .dark\\:bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}.dark .dark\\:bg-\\[\\#121212\\]{--un-bg-opacity:1;background-color:rgb(18 18 18 / var(--un-bg-opacity)) /* #121212 */;}.dark .dark\\:bg-\\[\\#1a1a1a\\]{--un-bg-opacity:1;background-color:rgb(26 26 26 / var(--un-bg-opacity)) /* #1a1a1a */;}.dark .dark\\:bg-\\[\\#1a1a1a\\]\\/30{background-color:rgb(26 26 26 / 0.3) /* #1a1a1a */;}.dark .dark\\:bg-\\[\\#1a1a1a\\]\\/50{background-color:rgb(26 26 26 / 0.5) /* #1a1a1a */;}.dark .dark\\:bg-\\[\\#262626\\]{--un-bg-opacity:1;background-color:rgb(38 38 38 / var(--un-bg-opacity)) /* #262626 */;}.dark .dark\\:bg-emerald-500\\/10{background-color:rgb(16 185 129 / 0.1) /* #10b981 */;}.dark .dark\\:bg-rose-500\\/10{background-color:rgb(244 63 94 / 0.1) /* #f43f5e */;}.dark .dark\\:bg-slate-700{--un-bg-opacity:1;background-color:rgb(51 65 85 / var(--un-bg-opacity)) /* #334155 */;}.dark .dark\\:bg-slate-800{--un-bg-opacity:1;background-color:rgb(30 41 59 / var(--un-bg-opacity)) /* #1e293b */;}.dark .dark\\:bg-slate-800\\/50{background-color:rgb(30 41 59 / 0.5) /* #1e293b */;}.dark .dark\\:hover\\:bg-\\[\\#1a1a1a\\]:hover{--un-bg-opacity:1;background-color:rgb(26 26 26 / var(--un-bg-opacity)) /* #1a1a1a */;}.dark .dark\\:hover\\:bg-\\[\\#1f1f1f\\]:hover{--un-bg-opacity:1;background-color:rgb(31 31 31 / var(--un-bg-opacity)) /* #1f1f1f */;}.dark .dark\\:hover\\:bg-\\[\\#262626\\]:hover{--un-bg-opacity:1;background-color:rgb(38 38 38 / var(--un-bg-opacity)) /* #262626 */;}.dark .dark\\:hover\\:bg-slate-700:hover{--un-bg-opacity:1;background-color:rgb(51 65 85 / var(--un-bg-opacity)) /* #334155 */;}.dark .group:hover .dark\\:group-hover\\:bg-blue-500\\/20{background-color:rgb(59 130 246 / 0.2) /* #3b82f6 */;}.hover\\:bg-slate-50:hover{--un-bg-opacity:1;background-color:rgb(248 250 252 / var(--un-bg-opacity)) /* #f8fafc */;}.p-1{padding:0.25rem;}.p-1\\.5{padding:0.375rem;}.p-2{padding:0.5rem;}.p-3{padding:0.75rem;}.p-4{padding:1rem;}.px,.px-4{padding-left:1rem;padding-right:1rem;}.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.pb-1{padding-bottom:0.25rem;}.pb-2{padding-bottom:0.5rem;}.pb-4{padding-bottom:1rem;}.pr-2{padding-right:0.5rem;}.pt-2{padding-top:0.5rem;}.pt-3{padding-top:0.75rem;}.pt-4{padding-top:1rem;}.text-center{text-align:center;}.text-left{text-align:left;}.text-\\[10px\\]{font-size:10px;}.text-\\[11px\\]{font-size:11px;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.dark .dark\\:text-blue-400{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity)) /* #60a5fa */;}.dark .dark\\:text-emerald-400{--un-text-opacity:1;color:rgb(52 211 153 / var(--un-text-opacity)) /* #34d399 */;}.dark .dark\\:text-rose-400{--un-text-opacity:1;color:rgb(251 113 133 / var(--un-text-opacity)) /* #fb7185 */;}.dark .dark\\:text-slate-100,.dark .group:hover .dark\\:group-hover\\:text-slate-100{--un-text-opacity:1;color:rgb(241 245 249 / var(--un-text-opacity)) /* #f1f5f9 */;}.dark .dark\\:text-slate-200{--un-text-opacity:1;color:rgb(226 232 240 / var(--un-text-opacity)) /* #e2e8f0 */;}.dark .dark\\:text-slate-300{--un-text-opacity:1;color:rgb(203 213 225 / var(--un-text-opacity)) /* #cbd5e1 */;}.dark .dark\\:text-slate-400,.text-slate-400{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity)) /* #94a3b8 */;}.dark .dark\\:text-slate-500,.text-slate-500{--un-text-opacity:1;color:rgb(100 116 139 / var(--un-text-opacity)) /* #64748b */;}.dark .dark\\:text-slate-900,.text-slate-900,.group:hover .group-hover\\:text-slate-900{--un-text-opacity:1;color:rgb(15 23 42 / var(--un-text-opacity)) /* #0f172a */;}.text-amber-500{--un-text-opacity:1;color:rgb(245 158 11 / var(--un-text-opacity)) /* #f59e0b */;}.text-blue-500,.group:hover .group-hover\\:text-blue-500{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}.text-blue-600,.group:hover .group-hover\\:text-blue-600{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}.text-emerald-500{--un-text-opacity:1;color:rgb(16 185 129 / var(--un-text-opacity)) /* #10b981 */;}.text-emerald-600{--un-text-opacity:1;color:rgb(5 150 105 / var(--un-text-opacity)) /* #059669 */;}.text-rose-500{--un-text-opacity:1;color:rgb(244 63 94 / var(--un-text-opacity)) /* #f43f5e */;}.text-rose-600{--un-text-opacity:1;color:rgb(225 29 72 / var(--un-text-opacity)) /* #e11d48 */;}.text-slate-700{--un-text-opacity:1;color:rgb(51 65 85 / var(--un-text-opacity)) /* #334155 */;}.text-slate-800{--un-text-opacity:1;color:rgb(30 41 59 / var(--un-text-opacity)) /* #1e293b */;}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}.dark .dark\\:hover\\:text-slate-300:hover{--un-text-opacity:1;color:rgb(203 213 225 / var(--un-text-opacity)) /* #cbd5e1 */;}.hover\\:text-slate-600:hover{--un-text-opacity:1;color:rgb(71 85 105 / var(--un-text-opacity)) /* #475569 */;}.font-bold{font-weight:700;}.font-medium{font-weight:500;}.font-semibold{font-weight:600;}.leading-relaxed{line-height:1.625;}.tracking-wider{letter-spacing:0.05em;}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}.uppercase{text-transform:uppercase;}.italic{font-style:italic;}.opacity-0{opacity:0;}.opacity-100,.group:hover .group-hover\\:opacity-100{opacity:1;}.shadow-2xl{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.hover\\:shadow-xl:hover{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.ring{--un-ring-width:3px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.ring-opacity-10{--un-ring-opacity:0.1;}.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-150{transition-duration:150ms;}.duration-200{transition-duration:200ms;}.duration-300{transition-duration:300ms;}.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.ease-in{transition-timing-function:cubic-bezier(0.4, 0, 1, 1);}.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);}@media (min-width: 768px){.md\\:static{position:static;}.md\\:bottom-auto{bottom:auto;}.md\\:left-4{left:1rem;}.md\\:left-auto{left:auto;}.md\\:top-0{top:0;}.md\\:top-1\\/2{top:50%;}.md\\:z-auto{z-index:auto;}.md\\:mx-auto{margin-left:auto;margin-right:auto;}.md\\:my-1{margin-top:0.25rem;margin-bottom:0.25rem;}.md\\:block{display:block;}.md\\:hidden{display:none;}.md\\:h-12{height:3rem;}.md\\:h-px{height:1px;}.md\\:max-h-none{max-height:none;}.md\\:max-w-none{max-width:none;}.md\\:w-12{width:3rem;}.md\\:w-64{width:16rem;}.md\\:w-8{width:2rem;}.md\\:w-80{width:20rem;}.md\\:w-auto{width:auto;}.md\\:w-full{width:100%;}.md\\:flex{display:flex;}.md\\:flex-col{flex-direction:column;}.md\\:-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.md\\:translate-x-0{--un-translate-x:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.md\\:items-center{align-items:center;}.md\\:justify-center{justify-content:center;}.md\\:overflow-visible{overflow:visible;}.md\\:border{border-width:1px;}.md\\:rounded-xl{border-radius:0.75rem;}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}.md\\:duration-200{transition-duration:200ms;}}.vue-flow {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n  direction: ltr;\n}\n\n.vue-flow__container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n\n.vue-flow__pane {\n  z-index: 1;\n}\n\n.vue-flow__pane.draggable {\n    cursor: grab;\n  }\n\n.vue-flow__pane.selection {\n    cursor: pointer;\n  }\n\n.vue-flow__pane.dragging {\n    cursor: grabbing;\n  }\n\n.vue-flow__transformationpane {\n  transform-origin: 0 0;\n  z-index: 2;\n  pointer-events: none;\n}\n\n.vue-flow__viewport {\n  z-index: 4;\n  overflow: clip;\n}\n\n.vue-flow__selection {\n  z-index: 6;\n}\n\n.vue-flow__edge-labels {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.vue-flow__nodesselection-rect:focus,\n.vue-flow__nodesselection-rect:focus-visible {\n  outline: none;\n}\n\n.vue-flow .vue-flow__edges {\n  pointer-events: none;\n  overflow: visible;\n}\n\n.vue-flow__edge-path,\n.vue-flow__connection-path {\n  stroke: #b1b1b7;\n  stroke-width: 1;\n  fill: none;\n}\n\n.vue-flow__edge {\n  pointer-events: visibleStroke;\n  cursor: pointer;\n}\n\n.vue-flow__edge.animated path {\n    stroke-dasharray: 5;\n    animation: dashdraw 0.5s linear infinite;\n  }\n\n.vue-flow__edge.animated path.vue-flow__edge-interaction {\n    stroke-dasharray: none;\n    animation: none;\n  }\n\n.vue-flow__edge.inactive {\n    pointer-events: none;\n  }\n\n.vue-flow__edge.selected,\n  .vue-flow__edge:focus,\n  .vue-flow__edge:focus-visible {\n    outline: none;\n  }\n\n.vue-flow__edge.selected .vue-flow__edge-path,\n  .vue-flow__edge:focus .vue-flow__edge-path,\n  .vue-flow__edge:focus-visible .vue-flow__edge-path {\n    stroke: #555;\n  }\n\n.vue-flow__edge-textwrapper {\n    pointer-events: all;\n  }\n\n.vue-flow__edge-textbg {\n    fill: white;\n  }\n\n.vue-flow__edge-text {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n\n.vue-flow__connection {\n  pointer-events: none;\n}\n\n.vue-flow__connection .animated {\n    stroke-dasharray: 5;\n    animation: dashdraw 0.5s linear infinite;\n  }\n\n.vue-flow__connectionline {\n  z-index: 1001;\n}\n\n.vue-flow__nodes {\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n\n.vue-flow__node {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: all;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  cursor: default;\n}\n\n.vue-flow__node.draggable {\n    cursor: grab;\n    pointer-events: all;\n  }\n\n.vue-flow__node.draggable.dragging {\n      cursor: grabbing;\n    }\n\n.vue-flow__nodesselection {\n  z-index: 3;\n  transform-origin: left top;\n  pointer-events: none;\n}\n\n.vue-flow__nodesselection-rect {\n    position: absolute;\n    pointer-events: all;\n    cursor: grab;\n  }\n\n.vue-flow__nodesselection-rect.dragging {\n      cursor: grabbing;\n    }\n\n.vue-flow__handle {\n  position: absolute;\n  pointer-events: none;\n  min-width: 5px;\n  min-height: 5px;\n}\n\n.vue-flow__handle.connectable {\n    pointer-events: all;\n    cursor: crosshair;\n  }\n\n.vue-flow__handle-bottom {\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 50%);\n  }\n\n.vue-flow__handle-top {\n    left: 50%;\n    top: 0;\n    transform: translate(-50%, -50%);\n  }\n\n.vue-flow__handle-left {\n    top: 50%;\n    left: 0;\n    transform: translate(-50%, -50%);\n  }\n\n.vue-flow__handle-right {\n    top: 50%;\n    right: 0;\n    transform: translate(50%, -50%);\n  }\n\n.vue-flow__edgeupdater {\n  cursor: move;\n  pointer-events: all;\n}\n\n.vue-flow__panel {\n  position: absolute;\n  z-index: 5;\n  margin: 15px;\n}\n\n.vue-flow__panel.top {\n    top: 0;\n  }\n\n.vue-flow__panel.bottom {\n    bottom: 0;\n  }\n\n.vue-flow__panel.left {\n    left: 0;\n  }\n\n.vue-flow__panel.right {\n    right: 0;\n  }\n\n.vue-flow__panel.center {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n@keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n:root {\n  --vf-node-bg: #fff;\n  --vf-node-text: #222;\n  --vf-connection-path: #b1b1b7;\n  --vf-handle: #555;\n}\n\n.vue-flow__edge.updating .vue-flow__edge-path {\n      stroke: #777;\n    }\n\n.vue-flow__edge-text {\n  font-size: 10px;\n}\n\n.vue-flow__edge-textbg {\n  fill: #fff;\n}\n\n.vue-flow__connection-path {\n  stroke: var(--vf-connection-path);\n}\n\n.vue-flow__node {\n  cursor: grab;\n}\n\n.vue-flow__node.selectable:focus,\n  .vue-flow__node.selectable:focus-visible {\n    outline: none;\n  }\n\n.vue-flow__node-default,\n.vue-flow__node-input,\n.vue-flow__node-output {\n  padding: 10px;\n  border-radius: 3px;\n  width: 150px;\n  font-size: 12px;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  color: var(--vf-node-text);\n  background-color: var(--vf-node-bg);\n  border-color: var(--vf-node-color);\n}\n\n.vue-flow__node-default.selected,\n  .vue-flow__node-default.selected:hover,\n  .vue-flow__node-input.selected,\n  .vue-flow__node-input.selected:hover,\n  .vue-flow__node-output.selected,\n  .vue-flow__node-output.selected:hover {\n    box-shadow: 0 0 0 0.5px var(--vf-box-shadow);\n  }\n\n.vue-flow__node-default.selected,\n  .vue-flow__node-default:focus,\n  .vue-flow__node-default:focus-visible,\n  .vue-flow__node-input.selected,\n  .vue-flow__node-input:focus,\n  .vue-flow__node-input:focus-visible,\n  .vue-flow__node-output.selected,\n  .vue-flow__node-output:focus,\n  .vue-flow__node-output:focus-visible {\n    outline: none;\n    border: 1px solid #555;\n  }\n\n.vue-flow__node-default .vue-flow__handle, .vue-flow__node-input .vue-flow__handle, .vue-flow__node-output .vue-flow__handle {\n    background: var(--vf-handle);\n  }\n\n.vue-flow__node-default.selectable:hover, .vue-flow__node-input.selectable:hover, .vue-flow__node-output.selectable:hover {\n    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\n  }\n\n.vue-flow__node-input {\n  --vf-node-color: var(--vf-node-color, #0041d0);\n  --vf-handle: var(--vf-node-color, #0041d0);\n  --vf-box-shadow: var(--vf-node-color, #0041d0);\n\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #0041d0);\n}\n\n.vue-flow__node-input.selected,\n  .vue-flow__node-input:focus,\n  .vue-flow__node-input:focus-visible {\n    outline: none;\n    border: 1px solid var(--vf-node-color, #0041d0);\n  }\n\n.vue-flow__node-default {\n  --vf-handle: var(--vf-node-color, #1a192b);\n  --vf-box-shadow: var(--vf-node-color, #1a192b);\n\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #1a192b);\n}\n\n.vue-flow__node-default.selected,\n  .vue-flow__node-default:focus,\n  .vue-flow__node-default:focus-visible {\n    outline: none;\n    border: 1px solid var(--vf-node-color, #1a192b);\n  }\n\n.vue-flow__node-output {\n  --vf-handle: var(--vf-node-color, #ff0072);\n  --vf-box-shadow: var(--vf-node-color, #ff0072);\n\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #ff0072);\n}\n\n.vue-flow__node-output.selected,\n  .vue-flow__node-output:focus,\n  .vue-flow__node-output:focus-visible {\n    outline: none;\n    border: 1px solid var(--vf-node-color, #ff0072);\n  }\n\n.vue-flow__nodesselection-rect,\n.vue-flow__selection {\n  background: rgba(0, 89, 220, 0.08);\n  border: 1px dotted rgba(0, 89, 220, 0.8);\n}\n\n.vue-flow__nodesselection-rect:focus,\n  .vue-flow__nodesselection-rect:focus-visible,\n  .vue-flow__selection:focus,\n  .vue-flow__selection:focus-visible {\n    outline: none;\n  }\n\n.vue-flow__handle {\n  width: 6px;\n  height: 6px;\n  background: var(--vf-handle);\n  border: 1px solid #fff;\n  border-radius: 100%;\n}\n.vue-flow__controls {\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n}\n\n.vue-flow__controls-button {\n  background: #fefefe;\n  border: none;\n  border-bottom: 1px solid #eee;\n  box-sizing: content-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  user-select: none;\n  padding: 5px;\n}\n\n.vue-flow__controls-button svg {\n  width: 100%;\n  max-width: 12px;\n  max-height: 12px;\n}\n\n.vue-flow__controls-button:hover {\n  background: #f4f4f4;\n}\n\n\n.vue-flow__controls-button:disabled {\n  pointer-events: none;\n}\n\n.vue-flow__controls-button:disabled svg {\n  fill-opacity: 0.4;\n}\n.vue-flow__minimap {\n  background-color: #fff;\n}\n\n.vue-flow__minimap.pannable {\n  cursor: grab;\n}\n\n.vue-flow__minimap.dragging {\n  cursor: grabbing;\n}\n\n.vue-flow__minimap-mask.pannable {\n  cursor: grab;\n}\n.no-scrollbar[data-v-29345a62]::-webkit-scrollbar {\n  display: none;\n}\n.no-scrollbar[data-v-29345a62] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.custom-handle[data-v-a2e6f19b] {\n  width: 1px;\n  height: 1px;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: crosshair;\n  overflow: visible;\n}\n.custom-handle[data-v-a2e6f19b]::after {\n  content: "";\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: transparent;\n  z-index: -1;\n}\n/* Override Vue Flow default handle positions to be exactly on the edge */\n.vue-flow__handle-left {\n  top: 50%;\n}\n.handle-inner[data-v-a2e6f19b] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.handle-bar[data-v-a2e6f19b] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #cbd5e1;\n  border-radius: 1px;\n  transition: all 0.2s ease;\n  z-index: 1;\n}\n.dark .handle-bar[data-v-a2e6f19b] {\n  background-color: #475569;\n}\n.custom-handle:hover .handle-bar[data-v-a2e6f19b] {\n  background-color: var(--v2cf98a46);\n  transform: translate(-50%, -50%) scale(1.2);\n}\n.handle-bar.vertical[data-v-a2e6f19b] {\n  width: 2px;\n  height: 10px;\n}\n.handle-bar.horizontal[data-v-a2e6f19b] {\n  width: 10px;\n  height: 2px;\n}\n.custom-handle:hover .handle-inner[data-v-a2e6f19b] {\n  transform: scale(1.1);\n  filter: brightness(0.9);\n}\n/* Ensure handles are interactive even when parent is not hovered during drag */\n.vue-flow__handle-connecting .custom-handle[data-v-a2e6f19b] {\n  opacity: 1 !important;\n}\n/* Disable pointer events on source handles during connection drag so target handles underneath can receive the drop */\n.vue-flow__edges-connecting,.vue-flow__connecting,.vue-flow__edge-updating {\n  pointer-events: none !important;\n}\n.condition-source-handle[data-v-a2e6f19b] {\n  right: -20px !important;\n  top: 50% !important;\n  transform: translateY(-50%) !important;\n}\n.custom-edge[data-v-affbe827] {\n  stroke-width: 2;\n  transition: stroke 0.2s, stroke-width 0.2s, stroke-dasharray 0.2s;\n}\n.custom-edge.is-hovered[data-v-affbe827],\n.custom-edge.is-selected[data-v-affbe827] {\n  stroke-width: 3;\n  stroke: var(--v4e349b69);\n}\n.custom-edge.is-selected[data-v-affbe827] {\n  stroke-dasharray: none !important;\n  animation: none !important;\n}\n.vue-flow__pane {\n  cursor: grab;\n}\n.vue-flow__pane.dragging {\n  cursor: grabbing;\n}\n.vue-flow__pane.selection {\n  cursor: default !important;\n}\n.vue-flow__selectionpane {\n  z-index: 100;\n  cursor: default !important;\n}\n.vue-flow__selection {\n  background: color-mix(in srgb, var(--v2d5f94ea) 10%, transparent) !important;\n  border: 1px solid color-mix(in srgb, var(--v2d5f94ea) 80%, transparent) !important;\n  border-radius: 4px;\n}\n.dark .vue-flow__selection {\n  background: color-mix(in srgb, var(--v2d5f94ea) 20%, transparent) !important;\n  border: 1px solid color-mix(in srgb, var(--v2d5f94ea) 60%, transparent) !important;\n}\n/* 匹配 Dify 的自定义 Vue Flow 样式 */\n.vue-flow__node-custom {\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n.vue-flow__edge-path {\n  stroke: #94a3b8;\n  stroke-width: 2;\n  transition: stroke 0.2s, stroke-width 0.2s;\n  stroke-dasharray: 5;\n  animation: vue-flow__edge-dash 0.5s linear infinite;\n}\n.vue-flow__edge.selected .vue-flow__edge-path {\n  stroke: var(--v2d5f94ea);\n  stroke-width: 3;\n  stroke-dasharray: none !important;\n  animation: none !important;\n}\n@keyframes vue-flow__edge-dash {\nfrom {\n    stroke-dashoffset: 10;\n}\nto {\n    stroke-dashoffset: 0;\n}\n}\n.vue-flow__connection-path {\n  stroke: var(--v2d5f94ea);\n  stroke-width: 2;\n}\n.vue-flow__handle {\n  width: 8px;\n  height: 8px;\n  background: var(--v2d5f94ea);\n  border: 2px solid white;\n}\n.vue-flow__handle:hover {\n  width: 10px;\n  height: 10px;\n}\n/* 确保在连接期间连接点可交互且可见 */\n.vue-flow__handle-connecting .custom-handle {\n  opacity: 1 !important;\n}\n.vue-flow__handle-valid {\n  background-color: #10b981 !important;\n}\n/* 小地图暗色模式样式 */\n.vue-flow__minimap {\n  background-color: #f0f1f3;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.dark .vue-flow__minimap {\n  background-color: #232324;\n}\n.vue-flow__minimap svg {\n  background-color: var(--component-background-color);\n}\n.dark .vue-flow__minimap svg {\n  background-color: var(--component-background-color);\n}\n.vue-flow__minimap .vue-flow__minimap-mask {\n  fill: #f0f1f3;\n}\n.dark .vue-flow__minimap .vue-flow__minimap-mask {\n  fill: #232324;\n}\n.dark .vue-flow__minimap .vue-flow__minimap-node {\n  fill: #232324;\n}\n/* 控件暗色模式样式 */\n.vue-flow__controls {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n  background: #ffffff;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.dark .vue-flow__controls {\n  background: #1a1a1a;\n  border: 1px solid #2d2d2d;\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);\n}\n.vue-flow__controls-button {\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e2e8f0;\n  color: #475569;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vue-flow__controls-button:last-child {\n  border-bottom: none;\n}\n.vue-flow__controls-button:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n.dark .vue-flow__controls-button {\n  background: #1a1a1a;\n  border-bottom: 1px solid #2d2d2d;\n  color: #a1a1aa;\n}\n.dark .vue-flow__controls-button:hover {\n  background: #262626;\n  color: #e4e4e7;\n}\n.vue-flow__controls-button svg {\n  fill: currentColor;\n  width: 16px;\n  height: 16px;\n}\n.vue-flow__controls-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.vue-flow__controls-button:disabled:hover {\n  background: #ffffff;\n  color: #475569;\n}\n.dark .vue-flow__controls-button:disabled:hover {\n  background: #1a1a1a;\n  color: #a1a1aa;\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { defineComponent as e, openBlock as t, createElementBlock as a, Fragment as o, createElementVNode as l, normalizeStyle as s, unref as d, normalizeClass as n, createVNode as r, createTextVNode as i, renderList as c, createCommentVNode as u, toDisplayString as p, createStaticVNode as g, computed as v, resolveComponent as f, createBlock as y, resolveDynamicComponent as m, withModifiers as b, renderSlot as h, withCtx as x, ref as k, watch as w, useCssVars as C, inject as _, useTemplateRef as T, onMounted as $, onUnmounted as N, Transition as E, nextTick as S, markRaw as z, provide as D, isRef as P } from "vue";
import { MarkerType as B, useVueFlow as A, Handle as I, Position as U, getSmoothStepPath as O, getBezierPath as j, getStraightPath as H, BaseEdge as L, EdgeLabelRenderer as M, VueFlow as F, ConnectionMode as J } from "@vue-flow/core";
import { Controls as R } from "@vue-flow/controls";
import { MiniMap as V } from "@vue-flow/minimap";
import { MousePointer2 as X, Hand as Y, Activity as W, Plus as K, Users as Z, Workflow as G, GitBranch as q } from "lucide-vue-next";
import { useRootSetting as Q } from "@mfish/core/hooks";
import { Icon as ee } from "@mfish/core/components/Icon";
import { Input as te, Textarea as ae, Select as oe, SelectOption as le, Tooltip as se, RadioGroup as de, RadioButton as ne, theme as re } from "ant-design-vue";
import { ScrollContainer as ie } from "@mfish/core/components/Container";
import ce from "dagre";
import { defHttp as ue } from "@mfish/core/utils/http/axios";
import { ThemeEnum as pe } from "@mfish/core/enums";
import { Background as ge } from "@vue-flow/background";
class ve {
  constructor(e2, t2, a2) {
    this.getFlowState = e2, this.applyState = t2, this.onUpdate = a2;
  }
  getFlowState;
  applyState;
  onUpdate;
  stack = [];
  index = -1;
  isUpdate = false;
  maxSize = 50;
  stripState(e2, t2) {
    return { nodes: e2.map((e3) => {
      const { ...t3 } = e3;
      return t3;
    }), edges: t2.map((e3) => {
      const { ...t3 } = e3;
      return t3;
    }) };
  }
  push(e2) {
    if (this.isUpdate) return;
    const t2 = this.getFlowState(), a2 = this.stripState(t2.nodes, t2.edges), o2 = { nodes: JSON.parse(JSON.stringify(a2.nodes)), edges: JSON.parse(JSON.stringify(a2.edges)), viewport: JSON.parse(JSON.stringify(t2.viewport || { x: 0, y: 0, zoom: 1 })), timestamp: Date.now(), label: e2 };
    if (this.index < this.stack.length - 1 && (this.stack = this.stack.slice(0, this.index + 1)), this.stack.length > 0) {
      const e3 = this.stack[this.index], t3 = this.stripState(e3.nodes, e3.edges);
      if (JSON.stringify(t3.nodes) === JSON.stringify(o2.nodes) && JSON.stringify(t3.edges) === JSON.stringify(o2.edges) && JSON.stringify(e3.viewport) === JSON.stringify(o2.viewport)) return;
    }
    this.stack.push(o2), this.index = this.stack.length - 1, this.stack.length > this.maxSize && (this.stack.shift(), this.index--), this.onUpdate([...this.stack], this.index);
  }
  undo() {
    this.index > 0 && (this.index--, this.applyHistoryState(this.stack[this.index]));
  }
  redo() {
    this.index < this.stack.length - 1 && (this.index++, this.applyHistoryState(this.stack[this.index]));
  }
  revertTo(e2) {
    this.index = e2, this.applyHistoryState(this.stack[e2]);
  }
  clear() {
    this.stack = [], this.index = -1, this.onUpdate([], -1);
  }
  applyHistoryState(e2) {
    this.isUpdate = true, this.applyState(JSON.parse(JSON.stringify(e2.nodes)), JSON.parse(JSON.stringify(e2.edges)), JSON.parse(JSON.stringify(e2.viewport))), this.onUpdate([...this.stack], this.index), setTimeout(() => {
      this.isUpdate = false;
    }, 50);
  }
}
class fe {
  constructor(e2, t2, a2, o2) {
    this.getSelectedNodes = e2, this.addNodes = t2, this.deselectAll = a2, this.onPasted = o2;
  }
  getSelectedNodes;
  addNodes;
  deselectAll;
  onPasted;
  clipboard = [];
  pasteOffset = 1;
  copy() {
    const e2 = this.getSelectedNodes().filter((e3) => "start" !== e3.data?.type);
    e2.length > 0 && (this.clipboard = JSON.parse(JSON.stringify(e2)), this.pasteOffset = 1);
  }
  paste() {
    if (0 === this.clipboard.length) return;
    const e2 = this.clipboard.map((e3) => {
      const t2 = e3.data?.type || "node";
      return { ...e3, id: `node_${t2}_${Date.now()}-${Math.random().toString(36).slice(2, 11)}`, position: { x: e3.position.x + 40 * this.pasteOffset, y: e3.position.y + 40 * this.pasteOffset }, selected: true };
    });
    this.pasteOffset++, this.deselectAll(), this.addNodes(e2), this.onPasted(e2.length);
  }
}
const ye = { start: { type: "start", label: "开始", icon: "carbon:play", color: "text-emerald-500", bgColor: "bg-emerald-500" }, end: { type: "end", label: "结束", icon: "carbon:stop", color: "text-rose-500", bgColor: "bg-rose-500" }, approval: { type: "approval", label: "审批", icon: "carbon:user-admin", color: "text-blue-500", bgColor: "bg-blue-500" }, condition: { type: "condition", label: "条件分支", icon: "ant-design:fork-outlined", color: "text-amber-500", bgColor: "bg-amber-500" } };
[Object.keys(ye).map((e2) => ye[e2].bgColor), Object.keys(ye).map((e2) => ye[e2].color)].join(" ");
const me = { getAllNodeMap: () => ye, getAllNodeArray: (e2) => Object.values(ye).filter((t2) => !e2?.includes(t2.type)), getNodeForType: (e2) => ye[e2], getLabelForType: (e2) => e2 && ye[e2]?.label || "自定义", getIconForType: (e2) => ye[e2]?.icon, getColorForType: (e2) => ye[e2]?.color || "text-blue-500", getBgColorForType: (e2) => ye[e2]?.bgColor || "bg-blue-500", getDefaultDataForType(e2) {
  const t2 = { type: e2, label: ye[e2]?.label || "自定义", icon: ye[e2]?.icon?.name || "Activity" };
  return "approval" === e2 ? { ...t2, assignee: "", candidateUsers: "", candidateGroups: "", approvalType: "OR" } : "condition" === e2 ? { ...t2, branches: [{ id: `if_${Date.now()}`, label: "IF", expression: "" }, { id: `else_${Date.now()}`, label: "ELSE" }] } : t2;
} }, be = { class: "absolute z-[100] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl border border-slate-200/50 dark:border-[#262626] transition-colors duration-300 p-2 flex items-center gap-2 /* Desktop: Left Vertical */ md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex-col md:w-auto md:bottom-auto md:max-w-none md:overflow-visible /* Mobile: Bottom Horizontal */ bottom-8 left-1/2 -translate-x-1/2 flex-row w-auto max-w-[95vw] overflow-x-auto no-scrollbar" }, he = { class: "flex gap-1 w-auto md:flex-col md:w-full md:items-center shrink-0" }, xe = { key: 0, class: "w-px h-8 md:w-8 md:h-px bg-slate-100 dark:bg-[#262626] mx-1 md:mx-auto md:my-1 shrink-0" }, ke = ["title", "onDragstart", "onClick"], we = { class: "hidden md:block absolute left-full ml-4 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[110] shadow-xl" }, Ce = { class: "fixed -top-[2000px] -left-[2000px] pointer-events-none" }, _e = ["id"], Te = { class: "flex flex-col" }, $e = { class: "text-sm font-bold text-slate-800 dark:text-slate-100" }, Ne = { key: 0, class: "px-4 pb-4 space-y-1 mt-1" }, Ee = { key: 1, class: "px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50" }, Se = (e2, t2) => {
  const a2 = e2.__vccOpts || e2;
  for (const [e3, o2] of t2) a2[e3] = o2;
  return a2;
}, ze = Se(e({ __name: "Sidebar", props: { tool: {} }, emits: ["update:tool", "add-node"], setup(e2, { emit: v2 }) {
  const f2 = v2, y2 = Q().getThemeColor, m2 = me.getAllNodeArray(["start"]);
  return (v3, b2) => (t(), a(o, null, [l("div", be, [l("div", he, [l("button", { class: n(["relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl border transition-all group active:scale-95 shrink-0", "arrow" === e2.tool ? "" : "border-transparent hover:bg-slate-50 dark:hover:bg-[#262626] text-slate-500 dark:text-slate-400"]), style: s("arrow" === e2.tool ? { backgroundColor: `${d(y2)}1a`, borderColor: `${d(y2)}4d`, color: d(y2) } : {}), title: "选择", onClick: b2[0] || (b2[0] = (e3) => f2("update:tool", "arrow")) }, [r(d(X), { size: 20 }), b2[2] || (b2[2] = l("div", { class: "hidden md:block absolute left-full ml-4 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[110] shadow-xl" }, [i(" 选择 "), l("div", { class: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-white" })], -1))], 6), l("button", { class: n(["relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl border transition-all group active:scale-95 shrink-0", "hand" === e2.tool ? "" : "border-transparent hover:bg-slate-50 dark:hover:bg-[#262626] text-slate-500 dark:text-slate-400"]), style: s("hand" === e2.tool ? { backgroundColor: `${d(y2)}1a`, borderColor: `${d(y2)}4d`, color: d(y2) } : {}), title: "拖拽画布", onClick: b2[1] || (b2[1] = (e3) => f2("update:tool", "hand")) }, [r(d(Y), { size: 20 }), b2[3] || (b2[3] = l("div", { class: "hidden md:block absolute left-full ml-4 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[110] shadow-xl" }, [i(" 拖拽画布 "), l("div", { class: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-white" })], -1))], 6)]), b2[5] || (b2[5] = l("div", { class: "w-px h-8 md:w-8 md:h-px bg-slate-200 dark:bg-[#262626] my-1 mx-auto shrink-0" }, null, -1)), (t(true), a(o, null, c(d(m2), (e3, o2) => (t(), a("div", { key: e3.type, class: "relative group shrink-0 flex items-center md:flex-col md:justify-center" }, [2 === o2 ? (t(), a("div", xe)) : u("", true), l("div", { class: "relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl border border-transparent hover:bg-slate-50 dark:hover:bg-[#262626] cursor-grab transition-all group active:scale-95 shrink-0", draggable: "true", title: e3.label, onDragstart: (t2) => ((e4, t3) => {
    if (e4.dataTransfer) {
      const a2 = document.getElementById(`drag-image-${t3.type}`);
      a2 && e4.dataTransfer.setDragImage(a2, 0, 0), e4.dataTransfer.setData("application/vueflow", "custom"), e4.dataTransfer.setData("application/label", t3.label), e4.dataTransfer.setData("application/nodeType", t3.type), e4.dataTransfer.effectAllowed = "move";
    }
  })(t2, e3), onClick: (t2) => v3.$emit("add-node", e3.type) }, [l("div", { class: n(["w-9 aspect-square flex items-center justify-center rounded-lg text-white shadow-sm transition-all group-hover:scale-110", [e3.bgColor]]) }, [r(d(ee), { icon: e3.icon, size: 18 }, null, 8, ["icon"])], 2), l("div", we, [i(p(e3.label) + " ", 1), b2[4] || (b2[4] = l("div", { class: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-white" }, null, -1))])], 40, ke)]))), 128))]), l("div", Ce, [(t(true), a(o, null, c(d(m2), (e3) => (t(), a("div", { key: e3.type, id: `drag-image-${e3.type}`, class: "w-[240px] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border-2 border-transparent flex flex-col overflow-hidden" }, [l("div", { class: n(["flex items-center gap-3", ["start" === e3.type || "end" === e3.type ? "p-3" : "p-4 pb-2"]]) }, [l("div", { class: n(["w-9 aspect-square flex items-center justify-center rounded-lg text-white shadow-sm transition-all group-hover:scale-110", [e3.bgColor]]) }, [r(d(ee), { icon: e3.icon, size: 18 }, null, 8, ["icon"])], 2), l("div", Te, [l("span", $e, p(e3.label), 1)])], 2), "start" !== e3.type && "end" !== e3.type ? (t(), a("div", Ne, ["condition" === e3.type ? (t(), a(o, { key: 0 }, [b2[6] || (b2[6] = g('<div class="relative flex items-center justify-between h-[28px] pr-2" data-v-29345a62><span class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase" data-v-29345a62>分支 1</span><span class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase" data-v-29345a62>IF</span></div><div class="relative flex items-center justify-between h-[28px] pr-2" data-v-29345a62><span class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase" data-v-29345a62>分支 2</span><span class="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase" data-v-29345a62>ELSE</span></div>', 2))], 64)) : "approval" === e3.type ? (t(), a("div", Ee, [...b2[7] || (b2[7] = [l("p", { class: "text-[10px] text-slate-400 dark:text-slate-500 font-medium" }, "审批人未设置", -1)])])) : (t(), a(o, { key: 2 }, [b2[8] || (b2[8] = l("div", { class: "h-1.5 w-full bg-slate-50 dark:bg-slate-800 rounded-full" }, null, -1)), b2[9] || (b2[9] = l("div", { class: "h-1.5 w-2/3 bg-slate-50 dark:bg-slate-800 rounded-full" }, null, -1))], 64))])) : u("", true)], 8, _e))), 128))])], 64));
} }), [["__scopeId", "data-v-29345a62"]]), De = { class: "space-y-4 pt-4 border-t border-slate-100 dark:border-[#1f1f1f]" }, Pe = { key: 0, class: "space-y-3" }, Be = { class: "w-8 h-8 rounded-lg border border-slate-200 dark:border-[#262626] flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-sm shrink-0" }, Ae = { class: "flex-1 flex items-center gap-2 px-2 py-1 rounded-xl border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#1a1a1a] shadow-sm group" }, Ie = { class: "flex-1 text-xs font-bold text-slate-700 dark:text-slate-200 truncate" }, Ue = { class: "flex items-center gap-3" }, Oe = { class: "w-8 h-8 rounded-lg border border-slate-200 dark:border-[#262626] flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-sm shrink-0" }, je = { class: "w-5 h-5 rounded bg-slate-100 dark:bg-[#262626] flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 transition-colors" }, He = { key: 1, class: "flex gap-3" }, Le = { class: "flex flex-col items-center shrink-0 pt-2" }, Me = { class: "w-8 h-8 rounded-lg border border-slate-200 dark:border-[#262626] flex items-center justify-center bg-white dark:bg-[#1a1a1a] shadow-sm z-10" }, Fe = { class: "flex-1 space-y-6" }, Je = { class: "space-y-2" }, Re = { class: "text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase ml-1" }, Ve = { class: "space-y-2" }, Xe = { class: "flex-1 text-xs font-bold text-slate-700 dark:text-slate-200 truncate" }, Ye = ["onClick"], We = { class: "w-5 h-5 rounded bg-slate-100 dark:bg-[#262626] flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 transition-colors" }, Ke = e({ __name: "CommonNextStep", props: { node: {}, edges: {}, nodes: {} }, setup(e2) {
  const s2 = e2, i2 = me.getAllNodeMap(), u2 = v(() => s2.edges.filter((e3) => e3.source === s2.node.id).map((e3) => s2.nodes.find((t2) => t2.id === e3.target) || { id: e3.target, data: { label: "未知节点", type: "task" } }));
  return (g2, v2) => {
    const h2 = f("AButton");
    return t(), a("div", De, [v2[7] || (v2[7] = l("div", null, [l("h3", { class: "text-sm font-bold text-slate-800 dark:text-slate-200" }, "下一步"), l("p", { class: "text-[11px] text-slate-400 dark:text-slate-500" }, "添加此工作流程中的下一个节点")], -1)), "condition" !== e2.node.data?.type ? (t(), a("div", Pe, [(t(true), a(o, null, c(u2.value, (o2) => (t(), a("div", { key: o2.id, class: "flex items-center gap-3" }, [l("div", Be, [(t(), y(m(d(i2)[e2.node.data?.type]?.icon || d(W)), { size: 16, class: n(d(i2)[e2.node.data?.type]?.color || "text-slate-500") }, null, 8, ["class"]))]), v2[1] || (v2[1] = l("div", { class: "w-6 h-px bg-slate-200 dark:bg-[#262626]" }, null, -1)), l("div", Ae, [l("div", { class: n(["w-5 h-5 rounded flex items-center justify-center shrink-0", [o2.data?.type && d(i2)[o2.data.type]?.color.replace("text-", "bg-").replace("-500", "-500/10") || "bg-blue-500/10", o2.data?.type && d(i2)[o2.data.type]?.color || "text-blue-500"]]) }, [(t(), y(m(d(i2)[o2.data?.type]?.icon || d(W)), { size: 12 }))], 2), l("span", Ie, p(o2.data?.label || o2.label || "已连接节点"), 1), r(h2, { type: "link", onClick: b((e3) => g2.$emit("delete:node", o2.id), ["stop"]), title: "删除节点", "pre-icon": "ant-design:delete-outlined" }, null, 8, ["onClick"])])]))), 128)), l("div", Ue, [l("div", Oe, [(t(), y(m(d(i2)[e2.node.data?.type]?.icon || d(W)), { size: 16, class: n(d(i2)[e2.node.data?.type]?.color || "text-slate-500") }, null, 8, ["class"]))]), v2[3] || (v2[3] = l("div", { class: "w-6 h-px bg-slate-200 dark:bg-[#262626]" }, null, -1)), l("button", { onClick: v2[0] || (v2[0] = (t2) => g2.$emit("add:next-node", { event: t2, nodeId: e2.node.id })), class: "flex-1 flex items-center gap-2 px-2 py-1 rounded-lg border border-dashed border-slate-200 dark:border-[#262626] bg-slate-50/30 dark:bg-[#1a1a1a]/30 hover:bg-slate-50 dark:hover:bg-[#1f1f1f] hover:border-blue-300 dark:hover:border-blue-500/50 transition-all group" }, [l("div", je, [r(d(K), { size: 12 })]), v2[2] || (v2[2] = l("span", { class: "text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors" }, " 选择下一个节点 ", -1))])])])) : (t(), a("div", He, [l("div", Le, [l("div", Me, [(t(), y(m(d(i2)[e2.node.data?.type]?.icon), { size: 16, class: n(d(i2)[e2.node.data?.type]?.color) }, null, 8, ["class"]))]), v2[4] || (v2[4] = l("div", { class: "flex-1 w-px bg-slate-200 dark:bg-[#262626] -mt-1" }, null, -1))]), l("div", Fe, [(t(true), a(o, null, c(e2.node.data.branches, (u3, f2) => {
      return t(), a("div", { key: u3.id, class: "relative" }, [v2[6] || (v2[6] = l("div", { class: "absolute -left-3 top-4 w-3 h-px bg-slate-200 dark:bg-[#262626]" }, null, -1)), l("div", Je, [l("span", Re, p(`分支 ${f2 + 1}`), 1), l("div", Ve, [(t(true), a(o, null, c((x2 = u3.id, s2.edges.filter((e3) => e3.source === s2.node.id && e3.sourceHandle === x2).map((e3) => s2.nodes.find((t2) => t2.id === e3.target) || { id: e3.target, data: { label: "未知节点", type: "task" } })), (e3) => (t(), a("div", { key: e3.id, class: "flex items-center gap-2 px-2 py-1 rounded-lg border border-slate-200 dark:border-[#262626] bg-white dark:bg-[#1a1a1a] shadow-sm group" }, [l("div", { class: n(["rounded flex items-center justify-center shrink-0", [e3.data?.type && d(i2)[e3.data.type]?.color.replace("text-", "bg-").replace("-500", "-500/10") || "bg-blue-500/10", e3.data?.type && d(i2)[e3.data.type]?.color || "text-blue-500"]]) }, [(t(), y(m(d(i2)[e3.data?.type]?.icon || d(W)), { size: 12 }))], 2), l("span", Xe, p(e3.data?.label || e3.label || "已连接节点"), 1), r(h2, { size: "small", type: "link", onClick: b((t2) => g2.$emit("delete:node", e3.id), ["stop"]), title: "删除节点", "pre-icon": "ant-design:delete-outlined" }, null, 8, ["onClick"])]))), 128)), l("button", { onClick: (t2) => g2.$emit("add:next-node", { event: t2, nodeId: e2.node.id, handleId: u3.id }), class: "w-full flex items-center gap-2 px-2 py-1 rounded-lg border border-dashed border-slate-200 dark:border-[#262626] bg-slate-50/30 dark:bg-[#1a1a1a]/30 hover:bg-slate-50 dark:hover:bg-[#1f1f1f] hover:border-blue-300 dark:hover:border-blue-500/50 transition-all group" }, [l("div", We, [r(d(K), { size: 12 })]), v2[5] || (v2[5] = l("span", { class: "text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors" }, " 选择下一个节点 ", -1))], 8, Ye)])])]);
      var x2;
    }), 128))])]))]);
  };
} }), Ze = { key: 0, class: "space-y-6" }, Ge = { class: "space-y-2" }, qe = { class: "space-y-2" }, Qe = { key: 1, class: "p-4 border-t border-slate-100 dark:border-[#1f1f1f]" }, et = e({ __name: "BaseNodeProperties", props: { node: {}, edges: {}, nodes: {} }, emits: ["update:node", "add:next-node", "delete:node", "delete:current-node"], setup(e2, { emit: o2 }) {
  const s2 = e2, n2 = o2, c2 = () => {
    n2("update:node", { ...s2.node });
  };
  return (o3, s3) => {
    const n3 = f("AButton");
    return e2.node && e2.node.data ? (t(), a("div", Ze, [l("div", Ge, [s3[5] || (s3[5] = l("label", { class: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase" }, "节点名称", -1)), r(d(te), { value: e2.node.data.label, "onUpdate:value": s3[0] || (s3[0] = (t2) => e2.node.data.label = t2), onBlur: c2 }, null, 8, ["value"])]), l("div", qe, [s3[6] || (s3[6] = l("label", { class: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase" }, "节点描述", -1)), r(d(ae), { value: e2.node.data.description, "onUpdate:value": s3[1] || (s3[1] = (t2) => e2.node.data.description = t2), onBlur: c2 }, null, 8, ["value"])]), h(o3.$slots, "default"), "end" !== e2.node.data?.type ? (t(), y(Ke, { key: 0, node: e2.node, edges: e2.edges, nodes: e2.nodes, "onAdd:nextNode": s3[2] || (s3[2] = (e3) => o3.$emit("add:next-node", e3)), "onDelete:node": s3[3] || (s3[3] = (e3) => o3.$emit("delete:node", e3)) }, null, 8, ["node", "edges", "nodes"])) : u("", true), "start" !== e2.node.data?.type ? (t(), a("div", Qe, [r(n3, { type: "primary", onClick: s3[4] || (s3[4] = (e3) => o3.$emit("delete:current-node")), "pre-icon": "ant-design:delete-outlined", class: "w-full flex items-center justify-center" }, { default: x(() => [...s3[7] || (s3[7] = [i(" 删除此节点 ", -1)])]), _: 1 })])) : u("", true)])) : u("", true);
  };
} }), tt = { class: "space-y-4 pt-4 border-t border-slate-100 dark:border-[#1f1f1f]" }, at = { class: "flex items-center justify-between" }, ot = { key: 0, class: "text-[11px] text-slate-400 text-center py-2" }, lt = { key: 1, class: "space-y-3" }, st = { class: "flex items-center justify-between" }, dt = { class: "text-[10px] font-bold text-slate-500 uppercase" }, nt = { class: "grid grid-cols-2 gap-2" }, rt = { class: "space-y-1" }, it = { class: "space-y-1" }, ct = { class: "space-y-1" }, ut = e({ __name: "ExecutionListeners", props: { modelValue: {}, type: {} }, emits: ["update:modelValue"], setup(e2, { emit: s2 }) {
  const n2 = e2, u2 = s2, g2 = v(() => "node" === n2.type ? [{ label: "开始 (Start)", value: "start" }, { label: "结束 (End)", value: "end" }] : [{ label: "流转 (Take)", value: "take" }]), m2 = () => {
    const e3 = [...n2.modelValue || []];
    e3.push({ event: "node" === n2.type ? "start" : "take", type: "class", value: "" }), u2("update:modelValue", e3);
  }, b2 = () => {
    u2("update:modelValue", [...n2.modelValue]);
  };
  return (s3, v2) => {
    const h2 = f("AButton");
    return t(), a("div", tt, [l("div", at, [v2[0] || (v2[0] = l("h3", { class: "text-sm font-bold text-slate-800 dark:text-slate-200" }, "执行监听器", -1)), r(h2, { type: "link", onClick: m2, title: "添加监听器", "pre-icon": "ant-design:plus-outlined" })]), e2.modelValue?.length ? (t(), a("div", lt, [(t(true), a(o, null, c(e2.modelValue, (e3, s4) => (t(), a("div", { key: s4, class: "p-3 rounded-xl border border-slate-100 dark:border-[#1f1f1f] bg-slate-50/50 dark:bg-[#1a1a1a] space-y-3" }, [l("div", st, [l("span", dt, "监听器 #" + p(s4 + 1), 1), r(h2, { type: "link", onClick: (e4) => ((e5) => {
      const t2 = n2.modelValue.filter((t3, a2) => a2 !== e5);
      u2("update:modelValue", t2);
    })(s4), "pre-icon": "ant-design:delete-outlined" }, null, 8, ["onClick"])]), l("div", nt, [l("div", rt, [v2[1] || (v2[1] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "事件", -1)), r(d(oe), { value: e3.event, "onUpdate:value": (t2) => e3.event = t2, onChange: b2, class: "w-full" }, { default: x(() => [(t(true), a(o, null, c(g2.value, (e4) => (t(), y(d(le), { key: e4.value, value: e4.value }, { default: x(() => [i(p(e4.label), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["value", "onUpdate:value"])]), l("div", it, [v2[5] || (v2[5] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "类型", -1)), r(d(oe), { value: e3.type, "onUpdate:value": (t2) => e3.type = t2, onChange: b2, class: "w-full" }, { default: x(() => [r(d(le), { value: "class" }, { default: x(() => [...v2[2] || (v2[2] = [i("类 (Class)", -1)])]), _: 1 }), r(d(le), { value: "expression" }, { default: x(() => [...v2[3] || (v2[3] = [i("表达式", -1)])]), _: 1 }), r(d(le), { value: "delegateExpression" }, { default: x(() => [...v2[4] || (v2[4] = [i("代理表达式", -1)])]), _: 1 })]), _: 1 }, 8, ["value", "onUpdate:value"])])]), l("div", ct, [v2[6] || (v2[6] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "值", -1)), r(d(te), { value: e3.value, "onUpdate:value": (t2) => e3.value = t2, onBlur: b2, placeholder: "输入类路径或表达式" }, null, 8, ["value", "onUpdate:value"])])]))), 128))])) : (t(), a("div", ot, " 暂无监听器 "))]);
  };
} }), pt = e({ __name: "NodePropertiesStart", props: { node: {}, edges: {}, nodes: {} }, emits: ["update:node", "add:next-node", "delete:node", "delete:current-node"], setup(e2, { emit: a2 }) {
  const o2 = e2, l2 = a2, s2 = (e3) => {
    l2("update:node", { ...o2.node, data: { ...o2.node.data, executionListeners: e3 } });
  };
  return (a3, o3) => e2.node && e2.node.data ? (t(), y(et, { key: 0, node: e2.node, edges: e2.edges, nodes: e2.nodes, "onUpdate:node": o3[0] || (o3[0] = (e3) => a3.$emit("update:node", e3)), "onAdd:nextNode": o3[1] || (o3[1] = (e3) => a3.$emit("add:next-node", e3)), "onDelete:node": o3[2] || (o3[2] = (e3) => a3.$emit("delete:node", e3)), "onDelete:currentNode": o3[3] || (o3[3] = (e3) => a3.$emit("delete:current-node")) }, { default: x(() => [r(ut, { "model-value": e2.node.data.executionListeners || [], type: "node", "onUpdate:modelValue": s2 }, null, 8, ["model-value"])]), _: 1 }, 8, ["node", "edges", "nodes"])) : u("", true);
} }), gt = e({ __name: "NodePropertiesEnd", props: { node: {}, edges: {}, nodes: {} }, emits: ["update:node", "add:next-node", "delete:node", "delete:current-node"], setup(e2, { emit: a2 }) {
  const o2 = e2, l2 = a2, s2 = (e3) => {
    l2("update:node", { ...o2.node, data: { ...o2.node.data, executionListeners: e3 } });
  };
  return (a3, o3) => e2.node && e2.node.data ? (t(), y(et, { key: 0, node: e2.node, edges: e2.edges, nodes: e2.nodes, "onUpdate:node": o3[0] || (o3[0] = (e3) => a3.$emit("update:node", e3)), "onAdd:nextNode": o3[1] || (o3[1] = (e3) => a3.$emit("add:next-node", e3)), "onDelete:node": o3[2] || (o3[2] = (e3) => a3.$emit("delete:node", e3)), "onDelete:currentNode": o3[3] || (o3[3] = (e3) => a3.$emit("delete:current-node")) }, { default: x(() => [r(ut, { "model-value": e2.node.data.executionListeners || [], type: "node", "onUpdate:modelValue": s2 }, null, 8, ["model-value"])]), _: 1 }, 8, ["node", "edges", "nodes"])) : u("", true);
} }), vt = { class: "space-y-4 pt-4 border-t border-slate-100 dark:border-[#1f1f1f]" }, ft = { class: "flex items-center gap-2" }, yt = { class: "space-y-3" }, mt = { class: "space-y-1" }, bt = { class: "space-y-1" }, ht = { class: "space-y-1" }, xt = { class: "space-y-1" }, kt = e({ __name: "NodePropertiesApproval", props: { node: {}, edges: {}, nodes: {} }, emits: ["update:node", "add:next-node", "delete:node", "delete:current-node"], setup(e2, { emit: a2 }) {
  const o2 = e2, s2 = a2, n2 = k(o2.node.data.approvalType || "OR"), c2 = () => {
    s2("update:node", { ...o2.node });
  }, p2 = (e3) => {
    s2("update:node", { ...o2.node, data: { ...o2.node.data, executionListeners: e3 } });
  };
  function g2(e3) {
    n2.value = e3, s2("update:node", { ...o2.node, data: { ...o2.node.data, approvalType: n2.value } });
  }
  return (a3, o3) => e2.node && e2.node.data ? (t(), y(et, { key: 0, node: e2.node, edges: e2.edges, nodes: e2.nodes, "onUpdate:node": o3[4] || (o3[4] = (e3) => a3.$emit("update:node", e3)), "onAdd:nextNode": o3[5] || (o3[5] = (e3) => a3.$emit("add:next-node", e3)), "onDelete:node": o3[6] || (o3[6] = (e3) => a3.$emit("delete:node", e3)), "onDelete:currentNode": o3[7] || (o3[7] = (e3) => a3.$emit("delete:current-node")) }, { default: x(() => [l("div", vt, [l("div", ft, [r(d(ee), { icon: "ant-design:user-outlined", size: 18 }), o3[8] || (o3[8] = l("div", { class: "text-sm font-bold text-slate-800 dark:text-slate-200" }, "审批设置", -1))]), l("div", yt, [l("div", mt, [o3[9] || (o3[9] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "审批人 (Assignee)", -1)), r(d(te), { value: e2.node.data.assignee || "", onChange: o3[0] || (o3[0] = (t2) => e2.node.data.assignee = t2.target.value), onBlur: c2, placeholder: "输入审批人 ID 或 变量" }, null, 8, ["value"])]), l("div", bt, [o3[10] || (o3[10] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "候选用户 (Candidate Users)", -1)), r(d(te), { value: e2.node.data.candidateUsers || "", onChange: o3[1] || (o3[1] = (t2) => e2.node.data.candidateUsers = t2.target.value), onBlur: c2, placeholder: "多个用户用逗号分隔" }, null, 8, ["value"])]), l("div", ht, [o3[11] || (o3[11] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "候选组织 (Candidate Orgs)", -1)), r(d(te), { value: e2.node.data.candidateGroups || "", onChange: o3[2] || (o3[2] = (t2) => e2.node.data.candidateGroups = t2.target.value), onBlur: c2, placeholder: "多个组织用逗号分隔" }, null, 8, ["value"])]), l("div", xt, [o3[15] || (o3[15] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "审批方式", -1)), r(d(oe), { value: n2.value, "onUpdate:value": o3[3] || (o3[3] = (e3) => n2.value = e3), onChange: g2, class: "w-full" }, { default: x(() => [r(d(le), { value: "OR" }, { default: x(() => [...o3[12] || (o3[12] = [i("或签 (一名成员通过即可)", -1)])]), _: 1 }), r(d(le), { value: "AND" }, { default: x(() => [...o3[13] || (o3[13] = [i("会签 (所有成员必须通过)", -1)])]), _: 1 }), r(d(le), { value: "SEQUENTIAL" }, { default: x(() => [...o3[14] || (o3[14] = [i("依次审批 (按顺序逐一审批)", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])]), r(ut, { "model-value": e2.node.data.executionListeners || [], type: "node", "onUpdate:modelValue": p2 }, null, 8, ["model-value"])]), _: 1 }, 8, ["node", "edges", "nodes"])) : u("", true);
} }), wt = { class: "space-y-4 pt-4 border-t border-slate-100 dark:border-[#1f1f1f]" }, Ct = { class: "flex items-center justify-between" }, _t = { class: "space-y-3" }, Tt = { class: "flex items-center justify-between" }, $t = { class: "text-[10px] font-bold text-slate-500 uppercase" }, Nt = { class: "space-y-1" }, Et = e({ __name: "NodePropertiesCondition", props: { node: {}, edges: {}, nodes: {} }, emits: ["update:node", "add:next-node", "delete:node", "delete:current-node", "update:edge"], setup(e2, { emit: s2 }) {
  const n2 = e2, i2 = s2, g2 = () => {
    const e3 = [...n2.node.data.branches || []], t2 = `case_${Date.now()}`, a2 = e3.findIndex((e4) => e4.id?.startsWith("else_"));
    -1 === a2 ? e3.push({ id: t2, expression: "" }) : e3.splice(a2, 0, { id: t2, label: "ELIF", expression: "" }), i2("update:node", { ...n2.node, data: { ...n2.node.data, branches: e3 } });
  }, v2 = (e3, t2) => {
    t2.expression = e3.target.value, i2("update:node", { ...n2.node });
    const a2 = n2.edges.find((e4) => e4.sourceHandle === t2.id);
    a2 && (a2.data.condition = t2.expression, i2("update:edge", { ...a2 }));
  };
  return (s3, m2) => {
    const b2 = f("AButton");
    return e2.node && e2.node.data ? (t(), y(et, { key: 0, node: e2.node, edges: e2.edges, nodes: e2.nodes, "onUpdate:node": m2[0] || (m2[0] = (e3) => s3.$emit("update:node", e3)), "onAdd:nextNode": m2[1] || (m2[1] = (e3) => s3.$emit("add:next-node", e3)), "onDelete:node": m2[2] || (m2[2] = (e3) => s3.$emit("delete:node", e3)), "onDelete:currentNode": m2[3] || (m2[3] = (e3) => s3.$emit("delete:current-node")) }, { default: x(() => [l("div", wt, [l("div", Ct, [m2[4] || (m2[4] = l("h3", { class: "text-sm font-bold text-slate-800 dark:text-slate-200" }, "分支管理", -1)), r(d(se), { placement: "left", title: "添加分支" }, { default: x(() => [r(b2, { type: "link", onClick: g2, "pre-icon": "ant-design:plus-outlined" })]), _: 1 })]), l("div", _t, [(t(true), a(o, null, c(e2.node.data.branches, (e3, o2) => (t(), a("div", { key: e3.id, class: "p-3 rounded-xl border border-slate-100 dark:border-[#1f1f1f] bg-slate-50/50 dark:bg-[#1a1a1a] space-y-3" }, [l("div", Tt, [l("span", $t, p(`分支 ${o2 + 1}`), 1), e3?.id?.startsWith("if_") || e3?.id?.startsWith("else_") ? u("", true) : (t(), y(b2, { key: 0, type: "link", onClick: (e4) => ((e5) => {
      const t2 = n2.node.data.branches.filter((t3, a2) => a2 !== e5);
      i2("update:node", { ...n2.node, data: { ...n2.node.data, branches: t2 } });
    })(o2), "pre-icon": "ant-design:delete-outlined" }, null, 8, ["onClick"]))]), l("div", Nt, [m2[5] || (m2[5] = l("label", { class: "text-[10px] font-bold text-slate-400 uppercase" }, "条件表达式", -1)), r(d(te), { value: e3.expression || "", onBlur: (t2) => v2(t2, e3), onPressEnter: (t2) => v2(t2, e3), disabled: e3?.id?.startsWith("else_"), placeholder: e3?.id?.startsWith("else_") ? "不满足其他条件时执行" : "输入条件表达式" }, null, 8, ["value", "onBlur", "onPressEnter", "disabled", "placeholder"])])]))), 128))])])]), _: 1 }, 8, ["node", "edges", "nodes"])) : u("", true);
  };
} }), St = { class: "space-y-6" }, zt = { class: "space-y-2" }, Dt = { class: "flex justify-between items-center" }, Pt = { class: "flex justify-between items-center" }, Bt = { class: "flex justify-between items-center" }, At = { class: "p-4 border-t border-slate-100 dark:border-[#1f1f1f]" }, It = e({ __name: "EdgeProperties", props: { edge: {}, frontNode: {} }, emits: ["update:edge", "delete:edge", "update:node"], setup(e2, { emit: o2 }) {
  const s2 = e2, n2 = o2, c2 = Q().getThemeColor, p2 = k(), g2 = v(() => !!s2.edge.markerEnd && ("string" != typeof s2.edge.markerEnd || "none" !== s2.edge.markerEnd)), m2 = k([]), b2 = k("");
  w(() => s2.edge?.data?.executionListeners, (e3) => {
    m2.value = e3 || [];
  }, { immediate: true }), w(() => s2.edge?.data?.condition, (e3) => {
    b2.value = e3 || "";
  }, { immediate: true }), w(g2, (e3) => {
    p2.value = e3 ? "arrow" : "none";
  }, { immediate: true });
  const h2 = () => {
    const e3 = c2.value, t2 = "arrow" === p2.value ? { type: B.ArrowClosed, color: e3 } : "none";
    n2("update:edge", { ...s2.edge, markerEnd: t2 });
  }, C2 = (e3) => {
    n2("update:edge", { ...s2.edge, type: "custom", data: { ...s2.edge.data, pathType: e3 } });
  }, _2 = () => {
    n2("update:edge", { ...s2.edge });
  }, T2 = () => {
    n2("update:edge", { ...s2.edge, data: { ...s2.edge.data, condition: b2.value } });
  }, $2 = () => {
    if ("condition" === s2.frontNode.data.type) {
      const e3 = s2.frontNode.data?.branches?.map((e4) => e4.id === s2.edge.sourceHandle ? { ...e4, expression: b2.value } : e4);
      n2("update:node", { ...s2.frontNode, data: { ...s2.frontNode.data, branches: e3 } });
    }
    T2();
  }, N2 = () => {
    n2("update:edge", { ...s2.edge, data: { ...s2.edge.data, executionListeners: m2.value } });
  };
  return (o3, s3) => {
    const n3 = f("AButton");
    return t(), a("div", St, [l("div", zt, [s3[7] || (s3[7] = l("label", { class: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase" }, "连接线名称", -1)), r(d(te), { value: e2.edge.label, "onUpdate:value": s3[0] || (s3[0] = (t2) => e2.edge.label = t2), onBlur: _2 }, null, 8, ["value"])]), l("div", Dt, [s3[10] || (s3[10] = l("label", { class: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase" }, "箭头设置", -1)), r(d(de), { value: p2.value, "onUpdate:value": s3[1] || (s3[1] = (e3) => p2.value = e3), onChange: h2 }, { default: x(() => [r(d(ne), { value: "arrow" }, { default: x(() => [...s3[8] || (s3[8] = [i("显示", -1)])]), _: 1 }), r(d(ne), { value: "none" }, { default: x(() => [...s3[9] || (s3[9] = [i("隐藏", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), l("div", Pt, [s3[15] || (s3[15] = l("label", { class: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase min-w-[60px]" }, "线条类型", -1)), r(d(oe), { value: e2.edge.data.pathType, "onUpdate:value": s3[2] || (s3[2] = (t2) => e2.edge.data.pathType = t2), onChange: C2, class: "w-full" }, { default: x(() => [r(d(le), { value: "default" }, { default: x(() => [...s3[11] || (s3[11] = [i("默认 (贝塞尔)", -1)])]), _: 1 }), r(d(le), { value: "step" }, { default: x(() => [...s3[12] || (s3[12] = [i("阶梯", -1)])]), _: 1 }), r(d(le), { value: "smoothstep" }, { default: x(() => [...s3[13] || (s3[13] = [i("圆角阶梯", -1)])]), _: 1 }), r(d(le), { value: "straight" }, { default: x(() => [...s3[14] || (s3[14] = [i("直线", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), l("div", Bt, [s3[19] || (s3[19] = l("label", { class: "min-w-[60px] text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase" }, "流转条件", -1)), "condition" === e2.frontNode.data.type ? (t(), y(d(se), { key: 0, title: e2.edge.data.condition, placement: "top" }, { default: x(() => [e2.edge.sourceHandle.startsWith("else_") ? (t(), y(d(te), { key: 1, disabled: "", placeholder: "不满足其他条件时执行" })) : (t(), y(d(te), { key: 0, value: e2.edge.data.condition, "onUpdate:value": s3[3] || (s3[3] = (t2) => e2.edge.data.condition = t2), onBlur: $2, onPressEnter: $2 }, null, 8, ["value"]))]), _: 1 }, 8, ["title"])) : u("", true), "condition" !== e2.frontNode.data.type ? (t(), y(d(de), { key: 1, value: b2.value, "onUpdate:value": s3[4] || (s3[4] = (e3) => b2.value = e3), onChange: T2 }, { default: x(() => [r(d(ne), { value: "" }, { default: x(() => [...s3[16] || (s3[16] = [i("无", -1)])]), _: 1 }), r(d(ne), { value: "approved" }, { default: x(() => [...s3[17] || (s3[17] = [i("通过", -1)])]), _: 1 }), r(d(ne), { value: "rejected" }, { default: x(() => [...s3[18] || (s3[18] = [i("不通过", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])) : u("", true)]), r(ut, { modelValue: m2.value, "onUpdate:modelValue": [s3[5] || (s3[5] = (e3) => m2.value = e3), N2], type: "edge" }, null, 8, ["modelValue"]), l("div", At, [r(n3, { type: "primary", onClick: s3[6] || (s3[6] = (e3) => o3.$emit("delete:edge")), "pre-icon": "ant-design:delete-outlined", class: "w-full flex items-center justify-center" }, { default: x(() => [...s3[20] || (s3[20] = [i(" 删除此连接线 ", -1)])]), _: 1 })])]);
  };
} }), Ut = { class: "p-2 border-b border-slate-100 dark:border-[#1f1f1f] flex items-center justify-between" }, Ot = { class: "flex items-center gap-2" }, jt = { key: 0, class: "font-semibold" }, Ht = { key: 1, style: { "font-size": "18px", "font-weight": "bold" } }, Lt = { key: 0, class: "flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar" }, Mt = { key: 1, class: "flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar" }, Ft = e({ __name: "PropertyPanel", props: { node: {}, edge: {}, edges: {}, nodes: {} }, emits: ["update:node", "update:edge", "delete:node", "delete:edge", "add:next-node", "close"], setup(e2, { emit: o2 }) {
  const n2 = e2, i2 = o2, { token: c2 } = re.useToken(), g2 = v(() => c2.value.colorBorder), b2 = v(() => {
    if (n2.edge) return n2.nodes.find((e3) => e3.id === n2.edge.source);
  }), h2 = (e3) => {
    i2("update:node", e3);
  }, k2 = (e3) => {
    i2("update:edge", e3);
  }, w2 = () => {
    i2("close");
  }, C2 = () => {
    n2.node && i2("delete:node", n2.node.id);
  }, _2 = () => {
    n2.edge && i2("delete:edge", n2.edge.id);
  }, T2 = (e3) => {
    switch (e3) {
      case "start":
        return pt;
      case "end":
        return gt;
      case "approval":
        return kt;
      case "condition":
        return Et;
      default:
        return et;
    }
  };
  return (o3, n3) => {
    const i3 = f("AButton");
    return t(), a("aside", { class: "bg-white dark:bg-[#121212] md:w-80 mb-4 flex flex-col fixed left-0 right-0 bottom-0 top-18 z-[120] md:static md:z-auto md:border rounded-2", style: s({ borderColor: g2.value }) }, [l("div", Ut, [l("div", Ot, [r(d(ee), { icon: "ant-design:setting-outlined", size: 18 }), e2.node ? (t(), a("div", jt, p(e2.node.label || e2.node.data?.label), 1)) : e2.edge ? (t(), a("div", Ht, "连线设置")) : u("", true)]), r(i3, { type: "link", "pre-icon": "ant-design:close-outlined", onClick: w2 })]), r(d(ie), null, { default: x(() => [e2.node ? (t(), a("div", Lt, [(t(), y(m(T2(e2.node.data?.type)), { node: e2.node, edges: e2.edges, nodes: e2.nodes, "onUpdate:node": h2, "onAdd:nextNode": n3[0] || (n3[0] = (e3) => o3.$emit("add:next-node", e3)), "onDelete:node": n3[1] || (n3[1] = (e3) => o3.$emit("delete:node", e3)), "onDelete:currentNode": C2 }, null, 40, ["node", "edges", "nodes"]))])) : e2.edge ? (t(), a("div", Mt, [r(It, { edge: e2.edge, "front-node": b2.value, "onUpdate:edge": k2, "onDelete:edge": _2, "onUpdate:node": h2 }, null, 8, ["edge", "front-node"])])) : u("", true)]), _: 1 })], 4);
  };
} }), Jt = { class: "relative group" }, Rt = { class: "flex flex-col w-full" }, Vt = { class: "text-sm font-bold text-slate-800 dark:text-slate-100" }, Xt = { class: "mr-10 text-xs text-slate-500 dark:text-slate-500 overflow-hidden whitespace-nowrap truncate" }, Yt = { key: 0, class: "px-4 pb-4 space-y-1 mt-1" }, Wt = { class: "text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase" }, Kt = { class: "text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase" }, Zt = ["onClick"], Gt = { key: 1, class: "px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50" }, qt = { key: 0, class: "text-[11px] text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5 truncate" }, Qt = { key: 1, class: "text-[11px] text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5 truncate" }, ea = { key: 2, class: "text-[10px] text-slate-400 dark:text-slate-500 font-medium" }, ta = Se(e({ inheritAttrs: false, __name: "CustomNode", props: { id: {}, type: {}, selected: { type: Boolean }, connectable: { type: [Boolean, Number, String, Function] }, position: {}, dimensions: {}, label: {}, isValidTargetPos: { type: Function }, isValidSourcePos: { type: Function }, parent: {}, parentNodeId: {}, dragging: { type: Boolean }, resizing: { type: Boolean }, zIndex: {}, targetPosition: {}, sourcePosition: {}, dragHandle: {}, data: {}, events: {} }, setup(e2) {
  C((e3) => ({ v2cf98a46: d(k2) }));
  const g2 = e2, { findNode: f2, getEdges: m2 } = A(), b2 = _("onNodeAddNode"), h2 = _("isPreview", false), k2 = Q().getThemeColor, w2 = (e3) => m2.value.some((t2) => {
    if (t2.target === g2.id) {
      const a2 = t2.targetHandle || "left";
      if (e3 === U.Left && a2.includes("left")) return true;
      if (e3 === U.Top && a2.includes("top")) return true;
      if (e3 === U.Right && a2.includes("right")) return true;
      if (e3 === U.Bottom && a2.includes("bottom")) return true;
    }
    if (t2.source === g2.id) {
      const a2 = t2.sourceHandle || "right";
      if (e3 === U.Left && a2.includes("left")) return true;
      if (e3 === U.Top && a2.includes("top")) return true;
      if (e3 === U.Right && a2.includes("right")) return true;
      if (e3 === U.Bottom && a2.includes("bottom")) return true;
      if (e3 === U.Right && "condition" === g2.data?.type && !["left", "top", "bottom"].some((e4) => a2.includes(e4))) return true;
    }
    return false;
  }), T2 = (e3, t2, a2) => {
    e3.stopPropagation();
    const o2 = f2(g2.id);
    o2 && b2 && b2({ event: e3, nodeId: g2.id, handleType: t2, handleId: a2, nodeX: o2.position.x, nodeY: o2.position.y });
  }, $2 = v(() => me.getIconForType(g2.data.type)), N2 = v(() => me.getBgColorForType(g2.data.type));
  return (v2, f3) => (t(), a("div", Jt, [u("", true), l("div", { class: n(["w-[240px] bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md border-1 transition-all duration-200 hover:shadow-xl", [e2.data.active || e2.selected ? "ring ring-opacity-10" : ""]]), style: s({ borderColor: e2.data.active || e2.selected ? d(k2) : "transparent", boxShadow: e2.data.active || e2.selected ? `0 0 0 4px ${d(k2)}1a` : void 0 }) }, [l("div", { class: n(["flex items-center gap-3", ["start" === e2.data.type || "end" === e2.data.type ? "p-3" : "p-4 pb-2"]]) }, [l("div", { class: n(["w-9 h-9 flex items-center justify-center rounded-xl text-white shadow-sm flex-shrink-0", [N2.value]]) }, [r(d(ee), { icon: $2.value, size: 18 }, null, 8, ["icon"])], 2), l("div", Rt, [l("span", Vt, p(e2.data.label), 1), l("div", Xt, p(e2.data.description), 1)])], 2), "start" !== e2.data.type && "end" !== e2.data.type ? (t(), a("div", Yt, ["condition" === e2.data.type ? (t(true), a(o, { key: 0 }, c(e2.data.branches, (e3, o2) => (t(), a("div", { key: e3.id, class: "relative flex items-center justify-between h-[28px] pr-2" }, [l("span", Wt, p(`分支 ${o2 + 1}`), 1), l("span", Kt, p(e3.label), 1), r(d(I), { id: e3.id, type: "source", position: d(U).Right, class: n(["custom-handle z-30 condition-source-handle", [d(h2) ? "pointer-events-none" : ""]]) }, { default: x(() => {
    return [l("div", { class: "handle-bar vertical", style: s((o3 = e3.id, m2.value.some((e4) => e4.target === g2.id && e4.targetHandle === o3 || e4.source === g2.id && e4.sourceHandle === o3) ? { backgroundColor: d(k2) } : {})) }, null, 4), d(h2) ? u("", true) : (t(), a("div", { key: 0, class: "handle-inner z-1 opacity-0 group-hover:opacity-100 transition-opacity", style: s({ backgroundColor: d(k2) }), onClick: (t2) => T2(t2, "source", e3.id) }, [r(d(K), { size: 12, "stroke-width": "3" })], 12, Zt))];
    var o3;
  }), _: 2 }, 1032, ["id", "position", "class"])]))), 128)) : "approval" === e2.data.type ? (t(), a("div", Gt, [e2.data.assignee ? (t(), a("p", qt, [r(d(Z), { size: 10, class: "text-blue-500" }), i(" " + p(e2.data.assignee), 1)])) : e2.data.candidateUsers || e2.data.candidateGroups ? (t(), a("p", Qt, [r(d(Z), { size: 10, class: "text-blue-500" }), i(" " + p(e2.data.candidateUsers || e2.data.candidateGroups), 1)])) : (t(), a("p", ea, "审批人未设置"))])) : (t(), a(o, { key: 2 }, [f3[5] || (f3[5] = l("div", { class: "h-1.5 w-full bg-slate-50 dark:bg-slate-800 rounded-full" }, null, -1)), f3[6] || (f3[6] = l("div", { class: "h-1.5 w-2/3 bg-slate-50 dark:bg-slate-800 rounded-full" }, null, -1))], 64))])) : u("", true)], 6), "start" !== e2.data.type ? (t(), y(d(I), { key: 1, id: "left", type: "target", position: d(U).Left, class: n(["custom-handle z-20", [d(h2) ? "pointer-events-none" : ""]]) }, { default: x(() => [l("div", { class: "handle-bar vertical", style: s(w2(d(U).Left) ? { backgroundColor: d(k2) } : {}) }, null, 4), d(h2) ? u("", true) : (t(), a("div", { key: 0, class: "handle-inner z-1 opacity-0 group-hover:opacity-100 transition-opacity", style: s({ backgroundColor: d(k2) }), onClick: f3[0] || (f3[0] = (e3) => T2(e3, "target", "left")) }, [r(d(K), { size: 12, "stroke-width": "3" })], 4))]), _: 1 }, 8, ["position", "class"])) : u("", true), "end" !== e2.data.type && "condition" !== e2.data.type && "start" !== e2.data.type ? (t(), y(d(I), { key: 2, id: "left-source", type: "source", position: d(U).Left, class: n(["custom-handle z-30", [d(h2) ? "pointer-events-none" : "group-hover:opacity-100"]]) }, null, 8, ["position", "class"])) : u("", true), "start" !== e2.data.type && "condition" !== e2.data.type ? (t(), y(d(I), { key: 3, id: "top", type: "target", position: d(U).Top, class: n(["custom-handle z-20", [d(h2) ? "pointer-events-none" : ""]]) }, { default: x(() => [l("div", { class: "handle-bar horizontal", style: s(w2(d(U).Top) ? { backgroundColor: d(k2) } : {}) }, null, 4), d(h2) ? u("", true) : (t(), a("div", { key: 0, class: "handle-inner z-1 opacity-0 group-hover:opacity-100 transition-opacity", style: s({ backgroundColor: d(k2) }), onClick: f3[1] || (f3[1] = (e3) => T2(e3, "target", "top")) }, [r(d(K), { size: 12, "stroke-width": "3" })], 4))]), _: 1 }, 8, ["position", "class"])) : u("", true), "end" !== e2.data.type && "condition" !== e2.data.type && "start" !== e2.data.type ? (t(), y(d(I), { key: 4, id: "top-source", type: "source", position: d(U).Top, class: n(["custom-handle z-30", [d(h2) ? "pointer-events-none" : "group-hover:opacity-100"]]) }, null, 8, ["position", "class"])) : u("", true), "condition" !== e2.data.type && "end" !== e2.data.type ? (t(), y(d(I), { key: 5, id: "right", type: "source", position: d(U).Right, class: n(["custom-handle z-30", [d(h2) ? "pointer-events-none" : ""]]) }, { default: x(() => [l("div", { class: "handle-bar vertical", style: s(w2(d(U).Right) ? { backgroundColor: d(k2) } : {}) }, null, 4), d(h2) ? u("", true) : (t(), a("div", { key: 0, class: "handle-inner z-1 opacity-0 group-hover:opacity-100 transition-opacity", style: s({ backgroundColor: d(k2) }), onClick: f3[2] || (f3[2] = (e3) => T2(e3, "source", "right")) }, [r(d(K), { size: 12, "stroke-width": "3" })], 4))]), _: 1 }, 8, ["position", "class"])) : u("", true), "start" !== e2.data.type && "condition" !== e2.data.type && "end" !== e2.data.type ? (t(), y(d(I), { key: 6, id: "right-target", type: "target", position: d(U).Right, class: n(["custom-handle z-20", [d(h2) ? "pointer-events-none" : "group-hover:opacity-100"]]) }, null, 8, ["position", "class"])) : u("", true), "end" !== e2.data.type && "condition" !== e2.data.type ? (t(), y(d(I), { key: 7, id: "bottom", type: "source", position: d(U).Bottom, class: n(["custom-handle z-30", [d(h2) ? "pointer-events-none" : ""]]) }, { default: x(() => [l("div", { class: "handle-bar horizontal", style: s(w2(d(U).Bottom) ? { backgroundColor: d(k2) } : {}) }, null, 4), d(h2) ? u("", true) : (t(), a("div", { key: 0, class: "handle-inner z-1 opacity-0 group-hover:opacity-100 transition-opacity", style: s({ backgroundColor: d(k2) }), onClick: f3[3] || (f3[3] = (e3) => T2(e3, "source", "bottom")) }, [r(d(K), { size: 12, "stroke-width": "3" })], 4))]), _: 1 }, 8, ["position", "class"])) : u("", true), "start" !== e2.data.type && "condition" !== e2.data.type && "end" !== e2.data.type ? (t(), y(d(I), { key: 8, id: "bottom-target", type: "target", position: d(U).Bottom, class: n(["custom-handle z-20", [d(h2) ? "pointer-events-none" : "group-hover:opacity-100"]]) }, null, 8, ["position", "class"])) : u("", true)]));
} }), [["__scopeId", "data-v-a2e6f19b"]]), aa = ["d"], oa = Se(e({ inheritAttrs: false, __name: "CustomEdge", props: { id: {}, sourceNode: {}, targetNode: {}, source: {}, target: {}, type: {}, label: { type: [String, Object, Function] }, style: {}, selected: { type: Boolean }, sourcePosition: {}, targetPosition: {}, sourceHandleId: {}, targetHandleId: {}, animated: { type: Boolean }, updatable: { type: Boolean }, markerStart: {}, markerEnd: {}, curvature: {}, interactionWidth: {}, data: {}, events: {}, labelStyle: {}, labelShowBg: { type: Boolean }, labelBgStyle: {}, labelBgPadding: {}, labelBgBorderRadius: {}, sourceX: {}, sourceY: {}, targetX: {}, targetY: {} }, setup(e2) {
  C((e3) => ({ v4e349b69: d(b2) }));
  const i2 = e2, { onEdgeMouseEnter: c2, onEdgeMouseLeave: g2, findEdge: f2 } = A(), y2 = _("onEdgeAddNode"), m2 = _("isPreview", false), b2 = Q().getThemeColor, h2 = k(false), w2 = k(false), T2 = k({ x: 0, y: 0 }), $2 = k(0), N2 = k(false), E2 = v(() => "top" === i2.sourcePosition && "top" === i2.targetPosition || "bottom" === i2.sourcePosition && "bottom" === i2.targetPosition), S2 = v(() => {
    const e3 = i2.data?.customOffset || 0, t2 = i2.data?.pathType || "default";
    if ("orthogonal" === t2) {
      if ("top" === i2.sourcePosition || "bottom" === i2.sourcePosition || "top" === i2.targetPosition || "bottom" === i2.targetPosition) {
        const t3 = (i2.sourceY + i2.targetY) / 2;
        return O({ ...i2, centerY: t3 + e3 });
      }
      {
        const t3 = (i2.sourceX + i2.targetX) / 2;
        return O({ ...i2, centerX: t3 + e3 });
      }
    }
    if (E2.value && "default" === t2) {
      const t3 = i2.sourceX, a2 = i2.sourceY, o2 = i2.targetX, l2 = i2.targetY, s2 = Math.hypot(o2 - t3, l2 - a2), d2 = "bottom" === i2.sourcePosition ? 1 : -1, n2 = d2 * Math.max(0.3 * s2, 80) + e3, r2 = 5 * d2;
      return [`M ${t3} ${a2} L ${t3} ${a2 + r2} C ${t3} ${a2 + n2} ${o2} ${l2 + n2} ${o2} ${l2 + r2} L ${o2} ${l2}`, (t3 + o2) / 2, (a2 + l2) / 2 + r2 + 0.75 * (n2 - r2)];
    }
    switch (t2) {
      case "step":
        return O({ ...i2, borderRadius: 0 });
      case "smoothstep":
        return O(i2);
      case "straight":
        return H(i2);
      default:
        return j(i2);
    }
  }), z2 = v(() => {
    if (false !== i2.data?.showArrow) return i2.markerEnd;
  });
  c2(({ edge: e3 }) => {
    e3.id === i2.id && (h2.value = true);
  }), g2(({ edge: e3 }) => {
    e3.id === i2.id && (h2.value = false);
  });
  const D2 = (e3) => {
    if (!w2.value) return;
    const t2 = e3.clientX - T2.value.x, a2 = e3.clientY - T2.value.y;
    (Math.abs(t2) > 3 || Math.abs(a2) > 3) && (N2.value = true);
    const o2 = 1.5 * ("top" === i2.sourcePosition || "bottom" === i2.sourcePosition || "top" === i2.targetPosition || "bottom" === i2.targetPosition ? a2 : t2), l2 = $2.value + o2, s2 = f2(i2.id);
    s2 && (s2.data = { ...s2.data, customOffset: l2 });
  }, P2 = () => {
    w2.value = false, globalThis.removeEventListener("mousemove", D2), globalThis.removeEventListener("mouseup", P2);
  }, B2 = (e3) => {
    e3.stopPropagation(), N2.value || y2 && y2({ event: e3, edgeId: i2.id, edgeData: i2.data, source: i2.source, target: i2.target, sourcePosition: i2.sourcePosition, targetPosition: i2.targetPosition, centerX: S2.value[1], centerY: S2.value[2] });
  };
  return (c3, g3) => (t(), a(o, null, [l("path", { d: S2.value[0], fill: "none", stroke: "transparent", "stroke-width": "20", style: { "pointer-events": "stroke" }, class: "cursor-pointer" }, null, 8, aa), r(d(L), { id: e2.id, path: S2.value[0], style: s({ ...e2.style, stroke: h2.value || i2.selected ? d(b2) : e2.style?.stroke || d(b2) }), "marker-end": z2.value, class: n(["custom-edge", { "is-hovered": h2.value, "is-selected": i2.selected }]) }, null, 8, ["id", "path", "style", "marker-end", "class"]), r(d(M), null, { default: x(() => [l("div", { style: s({ position: "absolute", transform: `translate(-50%, -50%) translate(${S2.value[1]}px,${S2.value[2]}px)`, pointerEvents: "all" }), class: "nodrag nopan flex items-center justify-center", onMouseenter: g3[1] || (g3[1] = (e3) => h2.value = true), onMouseleave: g3[2] || (g3[2] = (e3) => h2.value = false) }, [e2.data?.condition ? (t(), a("div", { key: 0, class: n(["absolute -top-5 px-2 py-0.5 rounded text-[10px] font-bold uppercase shadow-sm border transition-all duration-200 whitespace-nowrap", ["approved" === e2.data.condition ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400" : "rejected" === e2.data.condition ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400" : "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400", h2.value ? "scale-150 -translate-y-1" : "max-w-[120px] overflow-hidden truncate"]]) }, p("approved" === e2.data.condition ? "通过" : "rejected" === e2.data.condition ? "不通过" : e2.data.condition), 3)) : u("", true), d(m2) ? u("", true) : (t(), a("button", { key: 1, class: n(["w-6 h-6 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-slate-800 transition-all duration-200 z-50 hover:scale-125", h2.value || i2.selected || w2.value ? "scale-100 opacity-100" : "scale-0 opacity-0"]), style: s({ backgroundColor: d(b2), cursor: E2.value || "orthogonal" === e2.data?.pathType ? w2.value ? "grabbing" : "grab" : "pointer" }), onMousedown: g3[0] || (g3[0] = (t2) => {
    return (E2.value || "orthogonal" === e2.data?.pathType) && ((a2 = t2).stopPropagation(), a2.preventDefault(), w2.value = true, N2.value = false, T2.value = { x: a2.clientX, y: a2.clientY }, $2.value = i2.data?.customOffset || 0, globalThis.addEventListener("mousemove", D2), void globalThis.addEventListener("mouseup", P2));
    var a2;
  }), onClick: B2 }, [r(d(K), { size: 14, "stroke-width": "3" })], 38))], 36)]), _: 1 })], 64));
} }), [["__scopeId", "data-v-affbe827"]]), la = { class: "flex-1 overflow-y-auto max-h-[400px] p-2 space-y-4 custom-scrollbar" }, sa = { class: "px-2 mb-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider" }, da = { class: "space-y-0.5" }, na = ["onClick"], ra = { class: "text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors" }, ia = e({ __name: "AddNodeMenu", props: { x: {}, y: {}, isMobile: { type: Boolean } }, emits: ["select", "close"], setup(e2, { emit: i2 }) {
  const u2 = e2, g2 = i2, f2 = T("menuRef"), y2 = k({ x: u2.x, y: u2.y }), m2 = v(() => [{ name: "基础", items: [me.getNodeForType("end"), me.getNodeForType("approval")] }, { name: "逻辑", items: [me.getNodeForType("condition")] }]), b2 = (e3) => {
    e3.target.closest(".add-node-menu") || g2("close");
  }, h2 = () => {
    if (!f2.value || u2.isMobile) return;
    const e3 = f2.value.offsetHeight || 400, t2 = 20;
    let a2 = u2.x, o2 = u2.y;
    a2 + 256 + t2 > window.innerWidth && (a2 = window.innerWidth - 256 - t2), o2 + e3 + t2 > window.innerHeight && (o2 = window.innerHeight - e3 - t2), a2 < t2 && (a2 = t2), o2 < t2 && (o2 = t2), y2.value = { x: a2, y: o2 };
  };
  return $(() => {
    document.addEventListener("mousedown", b2), setTimeout(h2, 0);
  }), N(() => {
    document.removeEventListener("mousedown", b2);
  }), w([() => u2.x, () => u2.y, () => u2.isMobile], () => {
    setTimeout(h2, 0);
  }), (i3, u3) => (t(), a("div", { ref_key: "menuRef", ref: f2, class: n(["add-node-menu fixed z-[130] bg-white dark:bg-[#121212] shadow-2xl border border-slate-100 dark:border-[#1f1f1f] flex flex-col overflow-hidden transition-colors", e2.isMobile ? "w-full bottom-0 left-0 rounded-t-2xl max-h-[80vh] animate-in slide-in-from-bottom duration-300" : "md:w-64 md:rounded-xl md:animate-in md:fade-in md:zoom-in-95 md:duration-200 md:bottom-auto md:left-auto md:max-h-none"]), style: s(e2.isMobile ? {} : { left: `${y2.value.x}px`, top: `${y2.value.y}px` }) }, [u3[0] || (u3[0] = l("div", { class: "md:hidden w-full flex justify-center pt-3 pb-1" }, [l("div", { class: "w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" })], -1)), l("div", la, [(t(true), a(o, null, c(m2.value, (e3) => (t(), a("div", { key: e3.name }, [l("h3", sa, p(e3.name), 1), l("div", da, [(t(true), a(o, null, c(e3.items, (e4) => (t(), a("div", { key: e4.type, onClick: (t2) => ((e5) => {
    g2("select", e5);
  })(e4), class: "w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#1f1f1f] transition-colors group text-left" }, [l("div", { class: n(["w-8 aspect-square flex items-center justify-center rounded-lg text-white shadow-sm", [e4.bgColor]]) }, [r(d(ee), { icon: e4.icon, size: 14 }, null, 8, ["icon"])], 2), l("span", ra, p(e4.label), 1)], 8, na))), 128))])]))), 128))])], 6));
} }), ca = { exportFlow(e2) {
  const t2 = { version: "1.0", timestamp: (/* @__PURE__ */ new Date()).toISOString(), ...e2 }, a2 = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(t2, null, 2))}`, o2 = document.createElement("a");
  o2.setAttribute("href", a2), o2.setAttribute("download", `workflow_${Date.now()}.json`), document.body.append(o2), o2.click(), o2.remove();
}, importFlow: (e2) => e2.text().then((e3) => JSON.parse(e3)) }, ua = { optimize(e2, t2, a2 = "LR") {
  const o2 = new ce.graphlib.Graph();
  return o2.setGraph({ rankdir: a2, nodesep: "TB" === a2 ? 60 : 100, ranksep: "TB" === a2 ? 80 : 150 }), o2.setDefaultEdgeLabel(() => ({})), e2.forEach((e3) => {
    let t3 = 100;
    "condition" === e3.data?.type && e3.data?.branches && (t3 = 100 + 28 * e3.data.branches.length), o2.setNode(e3.id, { width: 240, height: t3 });
  }), t2.forEach((e3) => {
    o2.setEdge(e3.source, e3.target);
  }), ce.layout(o2), e2.map((e3) => {
    const t3 = o2.node(e3.id);
    return { ...e3, position: { x: t3.x - t3.width / 2, y: t3.y - t3.height / 2 } };
  });
} }, pa = (e2) => ue.get({ url: "/workflow/process", params: e2 }), ga = (e2) => ue.get({ url: "/workflow/process/tasks/pending", params: e2 }), va = (e2) => ue.get({ url: "/workflow/process/tasks/all", params: e2 }), fa = (e2) => ue.get({ url: "/workflow/process/tasks/apply", params: e2 }), ya = (e2) => ue.get({ url: "/workflow/process/tasks/total", params: e2 }), ma = (e2) => ue.get({ url: `/workflow/process/tasks/${e2}` }), ba = (e2, t2) => ue.delete({ url: `/workflow/process/${e2}?reason=${t2}` }), ha = (e2) => ue.get({ url: `/workflow/process/image/${e2}` }), xa = (e2) => ue.post({ url: "/workflow/process/tasks/approved", params: e2 }, { successMessageMode: "message" }), ka = (e2) => ue.post({ url: "/workflow/process/tasks/rejected", params: e2 }, { successMessageMode: "message" }), wa = (e2, t2, a2) => ue.download({ method: "post", url: "/workflow/process/buildXml", params: { flowKey: e2, name: t2, flowConfig: a2 } }), Ca = (e2) => ue.get({ url: `/workflow/process/flowManage/${e2}` }), _a = (e2) => ue.get({ url: `/workflow/process/activeDefinitionKeys/${e2}` }), Ta = { class: "h-14 flex items-center justify-between px-4 md:px-6 z-50 transition-colors duration-300 relative" }, $a = { class: "hidden md:flex items-center gap-3" }, Na = { class: "flex md:hidden items-center gap-2" }, Ea = { key: 0, class: "absolute top-16 right-4 w-64 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-slate-200 dark:border-[#262626] p-4 flex flex-col gap-2 z-[100] md:hidden" }, Sa = { class: "flex items-center justify-between" }, za = e({ __name: "TopBar", props: { themeColor: {}, isDark: { type: Boolean }, isMobile: { type: Boolean }, historyIndex: {}, historyStackLength: {}, showHistoryPanel: { type: Boolean }, nodes: {}, edges: {} }, emits: ["undo", "redo", "update:themeColor", "update:isDark", "update:showHistoryPanel", "update:showPreview", "update:nodes", "update:edges", "pushToHistory", "importFlow"], setup(e2, { emit: o2 }) {
  const d2 = e2, n2 = o2, { token: c2 } = re.useToken(), p2 = v(() => c2.value.colorInfoBg), g2 = v(() => c2.value.colorInfoText), { toObject: y2, fitView: m2, getNodes: b2, getEdges: h2, setNodes: C2 } = A(), _2 = k(false), T2 = k(null);
  w(() => d2.isMobile, (e3) => {
    e3 || (_2.value = false);
  });
  const $2 = () => {
    const e3 = y2();
    ca.exportFlow(e3);
  }, N2 = () => {
    T2.value?.click();
  }, z2 = async (e3) => {
    const t2 = e3.target;
    if (!t2.files || 0 === t2.files.length) return;
    const a2 = t2.files[0], o3 = await ca.importFlow(a2);
    n2("importFlow", o3), t2.value = "";
  }, D2 = () => {
    const e3 = d2.isMobile ? "TB" : "LR", t2 = ua.optimize(b2.value, h2.value, e3);
    C2(t2), n2("update:nodes", t2), S(() => {
      m2({ padding: (d2.isMobile, 0.4), duration: 800, minZoom: 0.2, maxZoom: d2.isMobile ? 0.5 : 0.8 }), n2("pushToHistory", "优化布局");
    });
  };
  function P2() {
    const e3 = y2();
    wa("process", "process", JSON.stringify(e3));
  }
  return (o3, d3) => {
    const c3 = f("AButton");
    return t(), a("header", Ta, [d3[26] || (d3[26] = l("div", { class: "flex items-center gap-3" }, [l("div", { class: "font-bold text-2xl hidden md:block" }, "工作流配置"), l("div", { class: "font-bold md:hidden text-sm" }, "工作流配置")], -1)), l("div", $a, [r(c3, { onClick: d3[0] || (d3[0] = (e3) => n2("undo")), disabled: e2.historyIndex <= 0, title: "撤回 (Ctrl+Z)", "pre-icon": "ant-design:undo-outlined" }, null, 8, ["disabled"]), r(c3, { onClick: d3[1] || (d3[1] = (e3) => n2("redo")), disabled: e2.historyIndex >= e2.historyStackLength - 1, title: "重做 (Ctrl+Y)", "pre-icon": "ant-design:redo-outlined" }, null, 8, ["disabled"]), d3[16] || (d3[16] = l("div", { class: "w-px h-4 bg-slate-200 dark:bg-[#262626] mx-1" }, null, -1)), r(c3, { onClick: D2, title: "优化布局", "pre-icon": "ant-design:layout-outlined" }, { default: x(() => [...d3[11] || (d3[11] = [i(" 优化布局 ", -1)])]), _: 1 }), r(c3, { onClick: d3[2] || (d3[2] = (t2) => n2("update:showHistoryPanel", !e2.showHistoryPanel)), class: "p-2 rounded-lg border transition-all mr-2 flex items-center gap-2 text-sm font-medium", style: s(e2.showHistoryPanel ? { backgroundColor: p2.value, border: `1px solid ${g2.value}`, color: g2.value } : {}), title: "查看变更历史", "pre-icon": "ant-design:history-outlined" }, { default: x(() => [...d3[12] || (d3[12] = [i(" 历史 ", -1)])]), _: 1 }, 8, ["style"]), d3[17] || (d3[17] = l("div", { class: "w-px h-4 bg-slate-200 dark:bg-[#262626] mx-1" }, null, -1)), l("input", { type: "file", ref_key: "fileInput", ref: T2, class: "hidden", accept: ".json", onChange: z2 }, null, 544), r(c3, { onClick: N2, "pre-icon": "ant-design:import-outlined" }, { default: x(() => [...d3[13] || (d3[13] = [i(" 导入JSON ", -1)])]), _: 1 }), r(c3, { type: "primary", onClick: $2, "pre-icon": "ant-design:export-outlined" }, { default: x(() => [...d3[14] || (d3[14] = [i("导出JSON ", -1)])]), _: 1 }), r(c3, { type: "primary", onClick: P2, "pre-icon": "ant-design:export-outlined" }, { default: x(() => [...d3[15] || (d3[15] = [i("导出BPMN ", -1)])]), _: 1 })]), l("div", Na, [r(c3, { onClick: d3[3] || (d3[3] = (e3) => _2.value = !_2.value), "pre-icon": _2.value ? "ant-design:close-outlined" : "ant-design:menu-outlined" }, null, 8, ["pre-icon"])]), r(E, { "enter-active-class": "transition duration-200 ease-out", "enter-from-class": "translate-y-2 opacity-0 scale-95", "enter-to-class": "translate-y-0 opacity-100 scale-100", "leave-active-class": "transition duration-150 ease-in", "leave-from-class": "translate-y-0 opacity-100 scale-100", "leave-to-class": "translate-y-2 opacity-0 scale-95" }, { default: x(() => [_2.value ? (t(), a("div", Ea, [l("div", Sa, [r(c3, { class: "flex-1", onClick: d3[4] || (d3[4] = (e3) => n2("undo")), disabled: e2.historyIndex <= 0, "pre-icon": "ant-design:undo-outlined" }, null, 8, ["disabled"]), d3[18] || (d3[18] = l("div", { class: "w-px h-4 bg-slate-200 dark:bg-[#262626] mx-1" }, null, -1)), r(c3, { class: "flex-1", onClick: d3[5] || (d3[5] = (e3) => n2("redo")), disabled: e2.historyIndex >= e2.historyStackLength - 1, "pre-icon": "ant-design:redo-outlined" }, null, 8, ["disabled"])]), d3[24] || (d3[24] = l("div", { class: "h-px bg-slate-100 dark:bg-[#262626]" }, null, -1)), r(c3, { onClick: d3[6] || (d3[6] = (e3) => {
      D2(), _2.value = false;
    }), "pre-icon": "ant-design:layout-outlined" }, { default: x(() => [...d3[19] || (d3[19] = [i(" 优化布局 ", -1)])]), _: 1 }), r(c3, { onClick: d3[7] || (d3[7] = (t2) => {
      n2("update:showHistoryPanel", !e2.showHistoryPanel), _2.value = false;
    }), "pre-icon": "ant-design:history-outlined" }, { default: x(() => [...d3[20] || (d3[20] = [i(" 历史记录 ", -1)])]), _: 1 }), d3[25] || (d3[25] = l("div", { class: "h-px bg-slate-100 dark:bg-[#262626]" }, null, -1)), r(c3, { onClick: d3[8] || (d3[8] = (e3) => {
      N2(), _2.value = false;
    }), "pre-icon": "ant-design:import-outlined" }, { default: x(() => [...d3[21] || (d3[21] = [i(" 导入JSON ", -1)])]), _: 1 }), r(c3, { type: "primary", onClick: d3[9] || (d3[9] = (e3) => {
      $2(), _2.value = false;
    }), "pre-icon": "ant-design:export-outlined" }, { default: x(() => [...d3[22] || (d3[22] = [i(" 导出JSON ", -1)])]), _: 1 }), r(c3, { type: "primary", onClick: d3[10] || (d3[10] = (e3) => {
      P2(), _2.value = false;
    }), "pre-icon": "ant-design:export-outlined" }, { default: x(() => [...d3[23] || (d3[23] = [i(" 导出BPMN ", -1)])]), _: 1 })])) : u("", true)]), _: 1 })]);
  };
} }), Da = { class: "p-2 border-b border-slate-100 dark:border-[#1f1f1f] flex items-center justify-between bg-slate-50/50 dark:bg-[#1a1a1a]/50" }, Pa = { class: "flex items-center gap-2" }, Ba = { class: "flex items-center" }, Aa = { class: "p-3 space-y-2" }, Ia = ["onClick"], Ua = { class: "flex items-center justify-between" }, Oa = { class: "text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded" }, ja = { class: "text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-2" }, Ha = { class: "flex items-center gap-1" }, La = { class: "flex items-center gap-1" }, Ma = e({ __name: "HistoryPanel", props: { show: { type: Boolean }, historyStack: {}, historyIndex: {} }, emits: ["update:show", "revert", "clear"], setup(e2, { emit: n2 }) {
  const g2 = n2, { token: m2 } = re.useToken(), h2 = v(() => m2.value.colorInfoBg), k2 = v(() => m2.value.colorInfoText);
  return (n3, v2) => {
    const m3 = f("AButton");
    return t(), y(E, { "enter-active-class": "transition duration-200 ease-out", "enter-from-class": "translate-y-2 opacity-0 scale-95", "enter-to-class": "translate-y-0 opacity-100 scale-100", "leave-active-class": "transition duration-150 ease-in", "leave-from-class": "translate-y-0 opacity-100 scale-100", "leave-to-class": "translate-y-2 opacity-0 scale-95" }, { default: x(() => [e2.show ? (t(), a("div", { key: 0, class: "absolute right-6 top-6 w-80 bg-white dark:bg-[#121212] rounded-2xl z-[60] shadow-2xl flex flex-col border border-slate-200 dark:border-[#1f1f1f] overflow-hidden", onClick: v2[2] || (v2[2] = b(() => {
    }, ["stop"])) }, [l("div", Da, [l("div", Pa, [r(d(ee), { icon: "ant-design:history-outlined", color: k2.value }, null, 8, ["color"]), v2[3] || (v2[3] = l("div", { class: "font-bold text-slate-800 dark:text-slate-200" }, "变更历史", -1))]), l("div", Ba, [r(d(se), { title: "清空历史", placement: "top" }, { default: x(() => [e2.historyStack.length > 1 ? (t(), y(m3, { key: 0, type: "link", onClick: v2[0] || (v2[0] = (e3) => g2("clear")), "pre-icon": "ant-design:delete-outlined" })) : u("", true)]), _: 1 }), r(m3, { type: "link", onClick: v2[1] || (v2[1] = (e3) => g2("update:show", false)), "pre-icon": "ant-design:close-outlined" })])]), r(d(ie), { class: "h-[60vh]" }, { default: x(() => [l("div", Aa, [(t(true), a(o, null, c([...e2.historyStack].reverse(), (o2, n4) => (t(), a("div", { key: o2.timestamp, onClick: (t2) => g2("revert", e2.historyStack.length - 1 - n4), class: "p-3 rounded-xl cursor-pointer transition-all border flex flex-col gap-1.5 border-slate-100 dark:border-[#262626] hover:bg-slate-50 dark:hover:bg-[#1a1a1a] hover:border-blue-200 dark:hover:border-blue-500/30", style: s(e2.historyStack.length - 1 - n4 === e2.historyIndex ? { backgroundColor: h2.value, border: `1px solid ${k2.value}`, color: k2.value } : {}) }, [l("div", Ua, [l("span", { class: "text-sm font-bold", style: s(e2.historyStack.length - 1 - n4 === e2.historyIndex ? { color: k2.value } : {}) }, p(o2.label), 5), l("span", Oa, p(new Date(o2.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })), 1)]), l("div", ja, [l("span", Ha, [r(d(G), { size: 10 }), i(" " + p(o2.nodes.length) + " 节点", 1)]), v2[4] || (v2[4] = l("span", null, "•", -1)), l("span", La, [r(d(q), { size: 10 }), i(" " + p(o2.edges.length) + " 连线", 1)])])], 12, Ia))), 128))])]), _: 1 }), v2[5] || (v2[5] = l("div", { class: "p-3 bg-slate-50 dark:bg-[#1a1a1a] border-t border-slate-100 dark:border-[#1f1f1f]" }, [l("p", { class: "text-[10px] text-slate-400 text-center leading-relaxed italic" }, " 点击记录可快速回溯。最多保存 50 条。 ")], -1))])) : u("", true)]), _: 1 });
  };
} }), Fa = e({ __name: "FlowBackground", setup(e2) {
  const o2 = v(() => Q().getDarkMode.value === pe.DARK), l2 = k(0), n2 = k(0), i2 = k(null), c2 = (e3) => {
    if (i2.value) {
      const t2 = i2.value.getBoundingClientRect();
      l2.value = e3.clientX - t2.left, n2.value = e3.clientY - t2.top;
    } else l2.value = e3.clientX, n2.value = e3.clientY;
  };
  return $(() => {
    globalThis.addEventListener("mousemove", c2);
  }), N(() => {
    globalThis.removeEventListener("mousemove", c2);
  }), (e3, c3) => (t(), a("div", { ref_key: "containerRef", ref: i2, style: { padding: "8px" } }, [r(d(ge), { "pattern-color": (o2.value, "#64748b"), gap: 20, size: 1, style: s({ WebkitMaskImage: `radial-gradient(
      circle 240px at ${l2.value}px ${n2.value}px,
      rgba(0,0,0,0.95) 0%,
      rgba(0,0,0,0.8) 35%,
      rgba(0,0,0,0.5) 65%,
      rgba(0,0,0,0.2) 85%,
      transparent 100%
    )`, maskImage: `radial-gradient(
      circle 240px at ${l2.value}px ${n2.value}px,
      rgba(0,0,0,0.95) 0%,
      rgba(0,0,0,0.8) 35%,
      rgba(0,0,0,0.5) 65%,
      rgba(0,0,0,0.2) 85%,
      transparent 100%
    )` }) }, null, 8, ["pattern-color", "style"]), r(d(ge), { "pattern-color": o2.value ? "#0f172a" : "#e2e8f0", gap: 20, size: 1 }, null, 8, ["pattern-color"])], 512));
} }), Ja = { class: "flex flex-col h-full w-full overflow-hidden font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300" }, Ra = { class: "flex flex-1 overflow-hidden" }, Va = e({ __name: "BpmnConfig", setup(e2, { expose: o2 }) {
  C((e3) => ({ v2d5f94ea: d(be2) }));
  const n2 = z({ custom: ta }), i2 = z({ custom: oa }), { onConnect: c2, addEdges: p2, addNodes: g2, onPaneReady: f2, onNodeClick: m2, onPaneClick: b2, removeNodes: h2, onEdgeClick: _2, removeEdges: T2, toObject: E2, screenToFlowCoordinate: I2, findNode: U2, findEdge: O2, onNodesChange: j2, onEdgesChange: H2, onNodeDragStart: L2, onNodeDragStop: M2, setNodes: X2, setEdges: Y2, getNodes: W2, getEdges: K2, getSelectedNodes: Z2, getSelectedEdges: G2, fitView: q2, setViewport: ee2, getViewport: te2 } = A(), ae2 = [{ id: "node_start_1", type: "custom", label: "开始", position: { x: 250, y: 50 }, data: { type: "start", label: "开始", icon: "Play" } }], oe2 = [], le2 = k([...ae2]), se2 = k([...oe2]), de2 = k(), ne2 = k();
  let ie2 = false;
  const { token: ce2 } = re.useToken(), ue2 = v(() => ce2.value.colorBorder);
  _2(({ edge: e3, event: t2 }) => {
    if (ie2 = true, setTimeout(() => ie2 = false, 100), t2 && t2.stopPropagation && t2.stopPropagation(), "arrow" === he2.value) G2.value.length <= 1 ? (e3.data || (e3.data = {}), e3.data.pathType && "bezier" !== e3.data.pathType || (e3.data.pathType = "default"), void 0 === e3.data.showArrow && (e3.data.showArrow = true), ne2.value = e3, de2.value = null) : (de2.value = null, ne2.value = null);
    else {
      const a2 = t2.ctrlKey || t2.metaKey || t2.shiftKey;
      a2 || (le2.value.forEach((e4) => e4.selected = false), se2.value.forEach((e4) => e4.selected = false));
      const o3 = O2(e3.id);
      if (o3) {
        o3.data || (o3.data = {}), o3.data.pathType && "bezier" !== o3.data.pathType || (o3.data.pathType = "default"), void 0 === o3.data.showArrow && (o3.data.showArrow = true), o3.selected = !a2 || !o3.selected;
        1 === se2.value.filter((e4) => e4.selected).length ? (ne2.value = o3, de2.value = null) : (ne2.value = null, de2.value = null);
      }
    }
  });
  const ge2 = v(() => Q().getDarkMode.value === pe.DARK), ye2 = k(false), be2 = Q().getThemeColor, he2 = k("hand"), xe2 = k("undefined" != typeof globalThis && window.innerWidth < 768), ke2 = () => {
    xe2.value = window.innerWidth < 768;
  };
  $(() => {
    ke2(), globalThis.addEventListener("resize", ke2), Ae2("初始状态"), globalThis.addEventListener("keydown", Je2);
  }), N(() => {
    globalThis.removeEventListener("resize", ke2), globalThis.removeEventListener("keydown", Je2);
  }), w(ge2, (e3) => {
    e3 ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
  }, { immediate: true }), w(xe2, (e3, t2) => {
    e3 !== t2 && setTimeout(() => {
      we2();
    }, 100);
  });
  const we2 = () => {
    const e3 = xe2.value ? "TB" : "LR", t2 = ua.optimize(W2.value, K2.value, e3);
    X2(t2), le2.value = t2, S(() => {
      q2({ padding: (xe2.value, 0.4), duration: 800, minZoom: 0.2, maxZoom: xe2.value ? 0.5 : 0.8 }), Ae2("优化布局");
    });
  };
  w(() => be2.value, (e3, t2) => {
    e3 !== t2 && (se2.value = se2.value.map((t3) => ({ ...t3, style: { ...t3.style, stroke: e3 }, markerEnd: "object" == typeof t3.markerEnd ? { ...t3.markerEnd, color: e3 } : t3.markerEnd })));
  });
  const Ce2 = k({ show: false, x: 0, y: 0, edgeData: null, nodeData: null });
  f2(({ fitView: e3 }) => {
    if (xe2.value) {
      e3({ padding: 0.8, minZoom: 0.2, maxZoom: 0.5 });
      const { x: t2, y: a2, zoom: o3 } = te2();
      ee2({ x: t2, y: a2 - 0.35 * window.innerHeight, zoom: o3 });
    } else {
      e3({ padding: 0.8, minZoom: 0.2, maxZoom: 0.8 });
      const { x: t2, y: a2, zoom: o3 } = te2(), l2 = 320, s2 = window.innerWidth / 2;
      ee2({ x: t2 + (l2 - s2), y: a2, zoom: o3 });
    }
  }), b2(() => {
    ie2 || (le2.value.forEach((e3) => e3.selected = false), se2.value.forEach((e3) => e3.selected = false), de2.value = null, ne2.value = null, Ce2.value.show = false, Pe2.value = false);
  });
  const _e2 = (e3) => {
    ie2 = true, setTimeout(() => ie2 = false, 100);
    const { node: t2, event: a2 } = e3;
    if (a2 && a2.stopPropagation && a2.stopPropagation(), "arrow" !== he2.value) {
      const e4 = a2.ctrlKey || a2.metaKey || a2.shiftKey;
      e4 || (le2.value.forEach((e5) => {
        e5.id !== t2.id && (e5.selected = false);
      }), se2.value.forEach((e5) => e5.selected = false));
      const o3 = U2(t2.id);
      if (o3) if (o3.selected = !e4 || !o3.selected, o3.selected) {
        le2.value = [...le2.value];
        1 === le2.value.filter((e5) => e5.selected).length ? (de2.value = o3, ne2.value = null) : (de2.value = null, ne2.value = null);
      } else de2.value?.id === o3.id && (de2.value = null);
    }
  };
  m2(({ node: e3 }) => {
    "arrow" === he2.value && (Z2.value.length <= 1 ? (de2.value = e3, ne2.value = null) : (de2.value = null, ne2.value = null));
  });
  const Te2 = (e3) => {
    const t2 = U2(e3);
    t2 && "start" === t2.data?.type || (h2([e3]), de2.value?.id === e3 && (de2.value = null), S(() => {
      Ae2("删除节点");
    }));
  }, $e2 = () => {
    ne2.value && (T2([ne2.value.id]), ne2.value = null, S(() => {
      Ae2("删除连线");
    }));
  }, Ne2 = (e3) => {
    const t2 = O2(e3.id);
    t2 && (Object.assign(t2, e3), S(() => {
      Ae2("更新连线");
    }));
  }, Ee2 = new ve(() => E2(), (e3, t2, a2) => {
    X2(e3), Y2(t2), le2.value = e3, se2.value = t2, a2 && ee2(a2);
  }, (e3, t2) => {
    Se2.value = e3, De2.value = t2;
  }), Se2 = k([]), De2 = k(-1), Pe2 = k(false), Be2 = () => {
    Ee2.clear();
    const e3 = JSON.parse(JSON.stringify(ae2)), t2 = JSON.parse(JSON.stringify(oe2));
    X2(e3), Y2(t2), le2.value = e3, se2.value = t2, ee2({ x: 0, y: 0, zoom: 1 }), S(() => {
      Ae2("初始状态");
    });
  }, Ae2 = (e3) => Ee2.push(e3), Ie2 = () => Ee2.undo(), Ue2 = () => Ee2.redo(), Oe2 = (e3) => Ee2.revertTo(e3), je2 = new fe(() => Z2.value, (e3) => g2(e3), () => le2.value.forEach((e3) => e3.selected = false), (e3) => S(() => Ae2(`粘贴${e3}个节点`)));
  j2((e3) => {
    e3.forEach((e4) => {
      "remove" === e4.type && e4.id === de2.value?.id && (de2.value = null);
    });
    e3.some((e4) => "remove" === e4.type) && S(() => {
      Ae2("删除节点");
    });
  });
  const He2 = k(false);
  L2(({ node: e3 }) => {
    He2.value = true, e3.selected || le2.value.forEach((t2) => {
      t2.id !== e3.id && t2.selected && (t2.draggable = false);
    });
  }), M2(() => {
    He2.value = false, le2.value.forEach((e3) => {
      e3.draggable = true;
    }), S(() => {
      Ae2("移动节点");
    });
  }), H2((e3) => {
    e3.forEach((e4) => {
      "remove" === e4.type && e4.id === ne2.value?.id && (ne2.value = null);
    }), e3.some((e4) => "remove" === e4.type) && S(() => {
      Ae2("删除连线");
    });
  });
  const Le2 = (e3) => {
    const { source: t2, target: a2, sourceHandle: o3, targetHandle: l2 } = e3;
    if (t2 === a2) return false;
    const s2 = U2(t2), d2 = U2(a2);
    if ("start" === d2?.data?.type) return false;
    if ("end" === s2?.data?.type) return false;
    return "condition" === d2?.data?.type && "left" !== l2 ? "start" !== s2?.data?.type : ("condition" !== d2?.data?.type || "left" === l2) && !("condition" === s2?.data?.type && "left" === o3);
  }, Me2 = (e3, t2) => {
    const a2 = U2(e3);
    return "approval" === a2?.data?.type ? "approved" : "condition" === a2?.data?.type ? a2.data?.branches?.find((e4) => e4.id === t2)?.expression : null;
  };
  c2((e3) => {
    if (!Le2(e3)) return;
    let { source: t2, target: a2, sourceHandle: o3, targetHandle: l2 } = e3;
    const s2 = U2(a2);
    if ("condition" === s2?.data?.type && "left" !== l2) {
      const e4 = t2, s3 = o3;
      t2 = a2, o3 = l2, a2 = e4, l2 = Fe2(s3);
    }
    const d2 = { source: t2, target: a2, sourceHandle: o3, targetHandle: l2, id: `e-${t2}-${o3 || ""}-${a2}-${l2 || ""}`, animated: true, style: { stroke: be2.value, strokeWidth: 2 }, type: "custom", markerEnd: { type: B.ArrowClosed, color: be2.value }, data: { showArrow: true, pathType: "default", condition: Me2(t2, o3) } };
    p2([d2]), setTimeout(() => Ae2("建立连接"), 50);
  });
  const Fe2 = (e3) => e3 ? "left-source" === e3 ? "left" : "top-source" === e3 ? "top" : "right" === e3 ? "right-target" : "bottom" === e3 ? "bottom-target" : e3 : "left", Je2 = (e3) => {
    if (!(e3.target instanceof HTMLInputElement || e3.target instanceof HTMLTextAreaElement)) {
      if ("Delete" === e3.key || "Backspace" === e3.key) {
        const e4 = Z2.value, t2 = G2.value;
        let a2 = false;
        if (e4.length > 0) {
          const t3 = e4.filter((e5) => "start" !== e5.data?.type).map((e5) => e5.id);
          t3.length > 0 && (h2(t3), de2.value = null, a2 = true);
        }
        t2.length > 0 && (T2(t2.map((e5) => e5.id)), ne2.value = null, a2 = true), a2 && S(() => {
          Ae2("批量删除");
        });
      }
      (e3.ctrlKey || e3.metaKey) && "z" === e3.key && (e3.preventDefault(), Ie2()), (e3.ctrlKey || e3.metaKey) && ("y" === e3.key || e3.shiftKey && "Z" === e3.key) && (e3.preventDefault(), Ue2()), (e3.ctrlKey || e3.metaKey) && "c" === e3.key && je2.copy(), (e3.ctrlKey || e3.metaKey) && "v" === e3.key && (e3.preventDefault(), je2.paste());
    }
  }, Re2 = (e3) => {
    const t2 = U2(e3.nodeId), a2 = e3.nodeX ?? t2?.position.x ?? 0, o3 = e3.nodeY ?? t2?.position.y ?? 0;
    let l2 = e3.handleId;
    l2 || "approval" !== t2?.data?.type || (l2 = "right"), Ce2.value = { show: true, x: e3.event.clientX, y: e3.event.clientY, edgeData: null, nodeData: { ...e3, handleId: l2, handleType: e3.handleType || "source", nodeX: a2, nodeY: o3 } };
  }, Ve2 = k(null), Xe2 = (e3) => {
    Ve2.value = e3.node.id, He2.value || (e3.node.selected ? le2.value.forEach((e4) => {
      e4.draggable = true;
    }) : le2.value.forEach((t2) => {
      t2.draggable = !(t2.id !== e3.node.id && t2.selected);
    }));
  }, Ye2 = (e3) => {
    Ve2.value === e3.node.id && (Ve2.value = null), He2.value || le2.value.forEach((e4) => {
      e4.draggable = true;
    });
  };
  D("onEdgeAddNode", (e3) => {
    Ce2.value = { show: true, x: e3.event.clientX, y: e3.event.clientY, edgeData: e3, nodeData: null };
  }), D("onNodeAddNode", Re2), D("hoveredNodeId", Ve2);
  const We2 = (e3) => {
    const { edgeData: t2, nodeData: a2 } = Ce2.value;
    if ("start" === e3.type) {
      if (le2.value.some((e4) => "start" === e4.data?.type)) return void (Ce2.value.show = false);
    }
    if (t2) {
      const a3 = `node_${e3.type}_${Date.now()}`, o3 = le2.value.find((e4) => e4.id === t2.source), l2 = le2.value.find((e4) => e4.id === t2.target);
      if (o3 && l2) {
        const e4 = l2.position.x - o3.position.x, a4 = l2.position.y - o3.position.y, s3 = Math.abs(e4) >= Math.abs(a4), d3 = s3 ? 180 : 0, n4 = s3 ? 0 : 120, r3 = t2.centerX, i4 = t2.centerY;
        le2.value.forEach((e5) => {
          s3 ? e5.position.x < r3 ? e5.position = { ...e5.position, x: e5.position.x - d3 } : e5.position = { ...e5.position, x: e5.position.x + d3 } : e5.position.y < i4 ? e5.position = { ...e5.position, y: e5.position.y - n4 } : e5.position = { ...e5.position, y: e5.position.y + n4 };
        });
      }
      const s2 = { id: a3, type: "custom", position: { x: t2.centerX - 120, y: t2.centerY - 40 }, label: e3.label, data: me.getDefaultDataForType(e3.type) };
      g2([s2]), T2([t2.edgeId]);
      const d2 = se2.value.find((e4) => e4.id === t2.edgeId), n3 = d2?.sourceHandle || t2.sourceHandle, r2 = d2?.targetHandle || t2.targetHandle;
      let i3 = r2 || "left", c3 = n3 || "right";
      if ("condition" === e3.type) i3 = "left", c3 = "if";
      else {
        ((e4) => "if" === e4 || "else" === e4 || (e4?.startsWith("elif-") ?? false))(c3) && (c3 = "right"), "right" !== i3 && "bottom" !== i3 && "top-source" !== i3 && "left-source" !== i3 || (i3 = "left");
      }
      p2([{ id: `e-${t2.source}-${n3 || ""}-${a3}-${i3}`, source: t2.source, target: a3, sourceHandle: n3, targetHandle: i3, animated: true, style: { stroke: be2.value, strokeWidth: 2 }, type: "custom", markerEnd: { type: B.ArrowClosed, color: be2.value }, data: { showArrow: true, pathType: d2?.data?.pathType || "default", condition: d2?.data?.condition || Me2(t2.source, n3) } }, { id: `e-${a3}-${c3}-${t2.target}-${r2 || ""}`, source: a3, target: t2.target, sourceHandle: c3, targetHandle: r2, animated: true, style: { stroke: be2.value, strokeWidth: 2 }, type: "custom", markerEnd: { type: B.ArrowClosed, color: be2.value }, data: { showArrow: true, pathType: d2?.data?.pathType || "default", condition: "approval" === e3.type ? "approved" : null } }]), S(() => {
        const t3 = U2(a3);
        t3 && (le2.value.forEach((e4) => e4.selected = false), t3.selected = true, de2.value = t3, ne2.value = null, le2.value = [...le2.value]), Ae2(`插入${e3.label}节点`);
      });
    } else if (a2) {
      const t3 = `node_${e3.type}_${Date.now()}`, o3 = "source" === a2.handleType, l2 = { id: t3, type: "custom", position: { x: o3 ? a2.nodeX + 300 : a2.nodeX - 300, y: a2.nodeY }, label: e3.label, data: me.getDefaultDataForType(e3.type) };
      g2([l2]);
      const s2 = a2.handleId || (o3 ? "right" : "left");
      let d2 = "left";
      switch (s2) {
        case "bottom":
          d2 = "top";
          break;
        case "top":
          d2 = "bottom";
          break;
        case "top-source":
          d2 = "bottom-target";
          break;
        case "bottom-target":
          d2 = "top-source";
          break;
        case "left":
          d2 = "right";
          break;
        case "right":
          d2 = "left";
          break;
        case "left-source":
          d2 = "right-target";
          break;
        case "right-target":
          d2 = "left-source";
      }
      "condition" === e3.type && (d2 = o3 ? "left" : "if"), p2([{ id: o3 ? `e-${a2.nodeId}-${s2}-${t3}-${d2}` : `e-${t3}-${d2}-${a2.nodeId}-${s2}`, source: o3 ? a2.nodeId : t3, target: o3 ? t3 : a2.nodeId, sourceHandle: o3 ? s2 : d2, targetHandle: o3 ? d2 : s2, animated: true, style: { stroke: be2.value, strokeWidth: 2 }, type: "custom", markerEnd: { type: B.ArrowClosed, color: be2.value }, data: { showArrow: true, pathType: "default", condition: Me2(o3 ? a2.nodeId : t3, o3 ? s2 : d2) } }]), S(() => {
        const a3 = U2(t3);
        a3 && (le2.value.forEach((e4) => e4.selected = false), a3.selected = true, de2.value = a3, ne2.value = null, le2.value = [...le2.value]), Ae2(`添加${e3.label}节点`);
      });
    }
    Ce2.value.show = false;
  }, Ke2 = (e3) => {
    if (!e3) return void (de2.value = null);
    const t2 = U2(e3.id);
    t2 && (t2.data = { ...e3.data }, t2.label = e3.label, de2.value = t2, le2.value = [...le2.value], Ae2(`更新节点: ${t2.label}`));
  }, Ze2 = (e3) => {
    e3.preventDefault(), e3.dataTransfer && (e3.dataTransfer.dropEffect = "move");
  }, Ge2 = (e3) => {
    const t2 = e3.dataTransfer?.getData("application/vueflow"), a2 = e3.dataTransfer?.getData("application/label"), o3 = e3.dataTransfer?.getData("application/nodeType");
    if (!t2) return;
    if ("start" === o3) {
      if (le2.value.some((e4) => "start" === e4.data?.type)) return;
    }
    const l2 = I2({ x: e3.clientX, y: e3.clientY }), s2 = { id: `node_${o3}_${Date.now()}`, type: "custom", position: l2, label: a2 || me.getLabelForType(o3), data: me.getDefaultDataForType(o3 || "task") };
    g2([s2]), Ae2(`拖入${a2 || "新"}节点`);
  }, qe2 = (e3) => {
    if ("start" === e3) {
      if (le2.value.some((e4) => "start" === e4.data?.type)) return;
    }
    const t2 = I2({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    t2.x -= 120, t2.y -= 40;
    const a2 = me.getLabelForType(e3), o3 = { id: `node_${e3}_${Date.now()}`, type: "custom", position: t2, label: a2, data: me.getDefaultDataForType(e3 || "task") };
    g2([o3]), Ae2(`添加${e3}节点`);
  }, Qe2 = (e3) => {
    try {
      e3 && (e3.edges && (e3.edges = e3.edges.map((e4) => ({ ...e4, style: { ...e4.style, stroke: be2 }, markerEnd: "object" == typeof e4.markerEnd ? { ...e4.markerEnd, color: be2 } : e4.markerEnd }))), le2.value = e3.nodes, se2.value = e3.edges, setTimeout(() => {
        q2({ padding: (xe2.value, 0.4), duration: 800, minZoom: 0.2, maxZoom: xe2.value ? 0.5 : 0.8 }), Ae2("导入数据");
      }, 50));
    } catch (e4) {
    }
  };
  return o2({ getConfig: () => E2(), initConfig: Qe2, clearHistory: Be2 }), (e3, o3) => (t(), a("div", Ja, [r(za, { "theme-color": d(be2), "onUpdate:themeColor": o3[0] || (o3[0] = (e4) => P(be2) ? be2.value = e4 : null), "is-dark": ge2.value, "onUpdate:isDark": o3[1] || (o3[1] = (e4) => ge2.value = e4), "show-history-panel": Pe2.value, "onUpdate:showHistoryPanel": o3[2] || (o3[2] = (e4) => Pe2.value = e4), "show-preview": ye2.value, "onUpdate:showPreview": o3[3] || (o3[3] = (e4) => ye2.value = e4), nodes: le2.value, "onUpdate:nodes": o3[4] || (o3[4] = (e4) => le2.value = e4), edges: se2.value, "onUpdate:edges": o3[5] || (o3[5] = (e4) => se2.value = e4), "is-mobile": xe2.value, "history-index": De2.value, "history-stack-length": Se2.value.length, onUndo: Ie2, onRedo: Ue2, onPushToHistory: Ae2, onImportFlow: Qe2 }, null, 8, ["theme-color", "is-dark", "show-history-panel", "show-preview", "nodes", "edges", "is-mobile", "history-index", "history-stack-length"]), l("div", Ra, [l("main", { class: "relative ml-4 mr-4 mb-4 flex-1 overflow-hidden rounded-lg border", style: s({ borderColor: ue2.value }), onDrop: Ge2, onDragover: Ze2 }, [r(ze, { tool: he2.value, "onUpdate:tool": o3[6] || (o3[6] = (e4) => he2.value = e4), onAddNode: qe2 }, null, 8, ["tool"]), r(Ma, { show: Pe2.value, "onUpdate:show": o3[7] || (o3[7] = (e4) => Pe2.value = e4), "history-stack": Se2.value, "history-index": De2.value, onRevert: Oe2, onClear: Be2 }, null, 8, ["show", "history-stack", "history-index"]), r(d(F), { nodes: le2.value, "onUpdate:nodes": o3[8] || (o3[8] = (e4) => le2.value = e4), edges: se2.value, "onUpdate:edges": o3[9] || (o3[9] = (e4) => se2.value = e4), "node-types": d(n2), "edge-types": d(i2), "is-valid-connection": Le2, "connection-mode": d(J).Loose, "connection-line-style": { stroke: d(be2), strokeWidth: 2 }, dark: ge2.value, "pan-on-drag": "hand" === he2.value, "selection-on-drag": "arrow" === he2.value, "selection-key-code": "arrow" === he2.value, "multi-selection-key-code": ["Control", "Meta"], "pan-on-scroll": true, "delete-key-code": null, "min-zoom": 0.2, "max-zoom": 1.5, "elements-selectable": "arrow" === he2.value, onNodeMouseEnter: Xe2, onNodeMouseLeave: Ye2, onNodeClick: _e2 }, { default: x(() => [r(Fa), r(d(R), { position: xe2.value ? "top-left" : "bottom-left" }, null, 8, ["position"]), xe2.value ? u("", true) : (t(), y(d(V), { key: 0, pannable: "", zoomable: "" }))]), _: 1 }, 8, ["nodes", "edges", "node-types", "edge-types", "connection-mode", "connection-line-style", "dark", "pan-on-drag", "selection-on-drag", "selection-key-code", "elements-selectable"]), Ce2.value.show ? (t(), y(ia, { key: 0, x: Ce2.value.x, y: Ce2.value.y, "is-mobile": xe2.value, onSelect: We2, onClose: o3[10] || (o3[10] = (e4) => Ce2.value.show = false) }, null, 8, ["x", "y", "is-mobile"])) : u("", true)], 36), de2.value || ne2.value ? (t(), y(Ft, { key: 0, class: "top-14 md:top-0", node: de2.value, edge: ne2.value, edges: d(K2), nodes: d(W2), "onUpdate:node": Ke2, "onDelete:node": Te2, "onUpdate:edge": Ne2, "onDelete:edge": $e2, "onAdd:nextNode": Re2, onClose: o3[11] || (o3[11] = (e4) => {
    de2.value = null, ne2.value = null;
  }) }, null, 8, ["node", "edge", "edges", "nodes"])) : u("", true)])]));
} }), Xa = e({ __name: "FlowPreview", props: { nodes: {}, edges: {} }, setup(e2) {
  const o2 = e2, l2 = z({ custom: ta }), s2 = z({ custom: oa }), n2 = k([]), i2 = k([]), c2 = Q().getThemeColor;
  w(() => o2.nodes, (e3) => {
    e3 && (n2.value = JSON.parse(JSON.stringify(o2.nodes)), o2.edges && (i2.value = o2.edges.map((e4) => ({ ...e4, style: { ...e4.style, stroke: c2 }, markerEnd: "object" == typeof e4.markerEnd ? { ...e4.markerEnd, color: c2 } : e4.markerEnd }))));
  });
  const u2 = ({ fitView: e3 }) => {
    e3({ padding: 0.2, duration: 800 });
  };
  return (e3, o3) => (t(), a("div", null, [r(d(F), { id: "preview-flow", nodes: n2.value, edges: i2.value, "node-types": d(l2), "edge-types": d(s2), "nodes-draggable": false, "nodes-connectable": false, "elements-selectable": false, "pan-on-drag": true, "zoom-on-scroll": false, "zoom-on-pinch": true, "zoom-on-double-click": false, onPaneReady: u2 }, { default: x(() => [r(Fa), r(d(R), { position: "bottom-right" })]), _: 1 }, 8, ["nodes", "edges", "node-types", "edge-types"])]));
} });
export {
  Va as BpmnConfig,
  Xa as FlowPreview,
  xa as approveTask,
  wa as buildXml,
  ba as delProcess,
  _a as getActiveDefinitionKeys,
  va as getAllTasks,
  fa as getApplyTasks,
  ha as getImage,
  ga as getPendingTask,
  pa as getProcessList,
  ma as getProcessTasks,
  ya as getTotalTasks,
  Ca as queryFlowManage,
  ka as rejectTask
};
