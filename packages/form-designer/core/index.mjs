(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(`.sidebar-collapse[data-v-d8f06279] .ant-collapse-header {\r
  padding: 12px 16px !important;\r
  transition: all 0.3s ease;
}
.sidebar-collapse[data-v-d8f06279] .ant-collapse-header:hover {\r
  background-color: rgba(0, 0, 0, 0.02);
}
.dark .sidebar-collapse[data-v-d8f06279] .ant-collapse-header:hover {\r
  background-color: rgba(255, 255, 255, 0.02);
}
.sidebar-collapse[data-v-d8f06279] .ant-collapse-content-box {\r
  padding: 4px 12px 16px 12px !important;
}\r
/* layer: preflights */
[data-v-d8f06279],[data-v-d8f06279]::before,[data-v-d8f06279]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-d8f06279]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-d8f06279]{display:grid;}
.grid-cols-3[data-v-d8f06279]{grid-template-columns:repeat(3,minmax(0,1fr));}
.mb-1[data-v-d8f06279]{margin-bottom:0.25rem;}
.h-4[data-v-d8f06279]{height:1rem;}
.w-1[data-v-d8f06279]{width:0.25rem;}
.flex[data-v-d8f06279]{display:flex;}
.flex-col[data-v-d8f06279]{flex-direction:column;}
.table[data-v-d8f06279]{display:table;}
.active\\:scale-95[data-v-d8f06279]:active{--un-scale-x:0.95;--un-scale-y:0.95;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-grab[data-v-d8f06279]{cursor:grab;}
.items-center[data-v-d8f06279]{align-items:center;}
.justify-start[data-v-d8f06279]{justify-content:flex-start;}
.gap-2[data-v-d8f06279]{gap:0.5rem;}
.space-y-4[data-v-d8f06279]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.border[data-v-d8f06279]{border-width:1px;}
.border-transparent[data-v-d8f06279]{border-color:transparent;}
.border-zinc-900\\/30[data-v-d8f06279]{border-color:rgb(24 24 27 / 0.3);}
.hover\\:border-gray-100\\/30[data-v-d8f06279]:hover{border-color:rgb(243 244 246 / 0.3);}
.hover\\:border-primary[data-v-d8f06279]:hover{border-color:var(--primary-color, #4f46e5);}
.rounded-full[data-v-d8f06279]{border-radius:9999px;}
.rounded-xl[data-v-d8f06279]{border-radius:0.75rem;}
.bg-amber-500[data-v-d8f06279]{--un-bg-opacity:1;background-color:rgb(245 158 11 / var(--un-bg-opacity)) /* #f59e0b */;}
.bg-blue-500[data-v-d8f06279]{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-emerald-500[data-v-d8f06279]{--un-bg-opacity:1;background-color:rgb(16 185 129 / var(--un-bg-opacity)) /* #10b981 */;}
.bg-primary[data-v-d8f06279]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.bg-transparent[data-v-d8f06279]{background-color:transparent /* transparent */;}
.bg-white[data-v-d8f06279]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-zinc-900[data-v-d8f06279]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.hover\\:bg-zinc-800[data-v-d8f06279]:hover{--un-bg-opacity:1;background-color:rgb(39 39 42 / var(--un-bg-opacity)) /* #27272a */;}
.p-1[data-v-d8f06279]{padding:0.25rem;}
.p-2[data-v-d8f06279]{padding:0.5rem;}
.p-3[data-v-d8f06279]{padding:0.75rem;}
.px-2[data-v-d8f06279]{padding-left:0.5rem;padding-right:0.5rem;}
.pt-2[data-v-d8f06279]{padding-top:0.5rem;}
.text-center[data-v-d8f06279]{text-align:center;}
.text-\\[10px\\][data-v-d8f06279]{font-size:10px;}
.text-\\[13px\\][data-v-d8f06279]{font-size:13px;}
.dark .dark\\:text-zinc-100[data-v-d8f06279]{--un-text-opacity:1;color:rgb(244 244 245 / var(--un-text-opacity)) /* #f4f4f5 */;}
.dark .dark\\:text-zinc-400[data-v-d8f06279],
.text-zinc-400[data-v-d8f06279]{--un-text-opacity:1;color:rgb(161 161 170 / var(--un-text-opacity)) /* #a1a1aa */;}
.text-gray-400[data-v-d8f06279]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-d8f06279]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600[data-v-d8f06279]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-900[data-v-d8f06279],
.group:hover .group-hover\\:text-gray-900[data-v-d8f06279]{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity)) /* #111827 */;}
.dark .group:hover .dark\\:group-hover\\:text-primary[data-v-d8f06279]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.group:hover .group-hover\\:text-primary-dark[data-v-d8f06279]{color:color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) /* color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) */;}
.group:hover .group-hover\\:text-zinc-200[data-v-d8f06279]{--un-text-opacity:1;color:rgb(228 228 231 / var(--un-text-opacity)) /* #e4e4e7 */;}
.font-black[data-v-d8f06279]{font-weight:900;}
.tracking-wider[data-v-d8f06279]{letter-spacing:0.05em;}
.uppercase[data-v-d8f06279]{text-transform:uppercase;}
.hover\\:shadow-sm[data-v-d8f06279]:hover{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition[data-v-d8f06279]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all[data-v-d8f06279]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-d8f06279]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-200[data-v-d8f06279]{transition-duration:200ms;}
.ease[data-v-d8f06279]{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}/* layer: preflights */
[data-v-f73546dc],[data-v-f73546dc]::before,[data-v-f73546dc]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-f73546dc]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-\\[14px\\][data-v-f73546dc]{width:14px;}
.flex[data-v-f73546dc]{display:flex;}
.flex-1[data-v-f73546dc]{flex:1 1 0%;}
.table[data-v-f73546dc]{display:table;}
.cursor-pointer[data-v-f73546dc]{cursor:pointer;}
.items-center[data-v-f73546dc]{align-items:center;}
.gap-2[data-v-f73546dc]{gap:0.5rem;}
.truncate[data-v-f73546dc]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rounded[data-v-f73546dc]{border-radius:0.25rem;}
.rounded-lg[data-v-f73546dc]{border-radius:0.5rem;}
.bg-primary-10[data-v-f73546dc]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.dark .dark\\:bg-primary-20[data-v-f73546dc]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.dark .dark\\:hover\\:bg-primary-10[data-v-f73546dc]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.hover\\:bg-primary-5[data-v-f73546dc]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%) */;}
.hover\\:bg-red-50[data-v-f73546dc]:hover{--un-bg-opacity:1;background-color:rgb(254 242 242 / var(--un-bg-opacity)) /* #fef2f2 */;}
.p-1[data-v-f73546dc]{padding:0.25rem;}
.px[data-v-f73546dc]{padding-left:1rem;padding-right:1rem;}
.px-2[data-v-f73546dc]{padding-left:0.5rem;padding-right:0.5rem;}
.py-1\\.5[data-v-f73546dc]{padding-top:0.375rem;padding-bottom:0.375rem;}
.text-xs[data-v-f73546dc]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-primary-light[data-v-f73546dc]{color:color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) */;}
.text-gray-400[data-v-f73546dc]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-primary[data-v-f73546dc]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.hover\\:text-primary[data-v-f73546dc]:hover{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.hover\\:text-red-500[data-v-f73546dc]:hover{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity)) /* #ef4444 */;}
.font-medium[data-v-f73546dc]{font-weight:500;}
.transition-all[data-v-f73546dc]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-f73546dc]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.drag-ghost[data-v-6437ea5b] {\r
  opacity: 0.5;\r
  background: #c8ebfb;
}\r
/* layer: preflights */
[data-v-6437ea5b],[data-v-6437ea5b]::before,[data-v-6437ea5b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-6437ea5b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.space-y-1[data-v-6437ea5b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.25rem * var(--un-space-y-reverse));}
.p-4[data-v-6437ea5b]{padding:1rem;}
.py-10[data-v-6437ea5b]{padding-top:2.5rem;padding-bottom:2.5rem;}
.text-center[data-v-6437ea5b]{text-align:center;}
.text-xs[data-v-6437ea5b]{font-size:0.75rem;line-height:1rem;}
.text-gray-400[data-v-6437ea5b]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.italic[data-v-6437ea5b]{font-style:italic;}/* layer: preflights */
[data-v-05b9271f],[data-v-05b9271f]::before,[data-v-05b9271f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-05b9271f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static[data-v-05b9271f]{position:static;}
.mb-2[data-v-05b9271f]{margin-bottom:0.5rem;}
.mb-4[data-v-05b9271f]{margin-bottom:1rem;}
.w-full[data-v-05b9271f]{width:100%;}
.flex[data-v-05b9271f]{display:flex;}
.items-start[data-v-05b9271f]{align-items:flex-start;}
.items-center[data-v-05b9271f]{align-items:center;}
.justify-between[data-v-05b9271f]{justify-content:space-between;}
.gap-2[data-v-05b9271f]{gap:0.5rem;}
.space-y-3[data-v-05b9271f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.border[data-v-05b9271f]{border-width:1px;}
.border-2[data-v-05b9271f]{border-width:2px;}
.border-gray-100\\/30[data-v-05b9271f]{border-color:rgb(243 244 246 / 0.3);}
.border-zinc-900\\/30[data-v-05b9271f]{border-color:rgb(24 24 27 / 0.3);}
.hover\\:border-primary[data-v-05b9271f]:hover{border-color:var(--primary-color, #4f46e5);}
.hover\\:border-primary\\/30[data-v-05b9271f]:hover{border-color:var(--primary-color, #4f46e5);}
.rounded[data-v-05b9271f]{border-radius:0.25rem;}
.rounded-md[data-v-05b9271f]{border-radius:0.375rem;}
.rounded-xl[data-v-05b9271f]{border-radius:0.75rem;}
.border-dashed[data-v-05b9271f]{border-style:dashed;}
.border-none[data-v-05b9271f]{border-style:none;}
.bg-black[data-v-05b9271f]{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.bg-gray-50[data-v-05b9271f]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-primary-10[data-v-05b9271f]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-transparent[data-v-05b9271f]{background-color:transparent /* transparent */;}
.bg-white[data-v-05b9271f]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-zinc-900[data-v-05b9271f]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.dark .dark\\:bg-primary-20[data-v-05b9271f]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.dark .dark\\:hover\\:bg-primary-30[data-v-05b9271f]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%) */;}
.hover\\:bg-primary-20[data-v-05b9271f]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.p-0[data-v-05b9271f]{padding:0;}
.p-1[data-v-05b9271f]{padding:0.25rem;}
.p-3[data-v-05b9271f]{padding:0.75rem;}
.p-4[data-v-05b9271f]{padding:1rem;}
.px-2[data-v-05b9271f]{padding-left:0.5rem;padding-right:0.5rem;}
.py-1[data-v-05b9271f]{padding-top:0.25rem;padding-bottom:0.25rem;}
.py-10[data-v-05b9271f]{padding-top:2.5rem;padding-bottom:2.5rem;}
.text-center[data-v-05b9271f]{text-align:center;}
.text-\\[10px\\][data-v-05b9271f]{font-size:10px;}
.text-sm[data-v-05b9271f]{font-size:0.875rem;line-height:1.25rem;}
.text-xs[data-v-05b9271f]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-primary-light[data-v-05b9271f]{color:color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) */;}
.dark .dark\\:text-zinc-200[data-v-05b9271f],
.text-zinc-200[data-v-05b9271f]{--un-text-opacity:1;color:rgb(228 228 231 / var(--un-text-opacity)) /* #e4e4e7 */;}
.text-gray-300[data-v-05b9271f]{--un-text-opacity:1;color:rgb(209 213 219 / var(--un-text-opacity)) /* #d1d5db */;}
.text-gray-400[data-v-05b9271f]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-05b9271f]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-800[data-v-05b9271f]{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-primary[data-v-05b9271f]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.text-zinc-400[data-v-05b9271f]{--un-text-opacity:1;color:rgb(161 161 170 / var(--un-text-opacity)) /* #a1a1aa */;}
.text-zinc-500[data-v-05b9271f]{--un-text-opacity:1;color:rgb(113 113 122 / var(--un-text-opacity)) /* #71717a */;}
.hover\\:text-red-500[data-v-05b9271f]:hover{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity)) /* #ef4444 */;}
.font-bold[data-v-05b9271f]{font-weight:700;}
.tracking-widest[data-v-05b9271f]{letter-spacing:0.1em;}
.uppercase[data-v-05b9271f]{text-transform:uppercase;}
.opacity-0[data-v-05b9271f]{opacity:0;}
.group:hover .group-hover\\:opacity-100[data-v-05b9271f]{opacity:1;}
.shadow-sm[data-v-05b9271f]{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.outline-none[data-v-05b9271f]{outline:2px solid transparent;outline-offset:2px;}
.focus\\:ring-0[data-v-05b9271f]:focus{--un-ring-width:0px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition-all[data-v-05b9271f]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-05b9271f]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-opacity[data-v-05b9271f]{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}/* layer: preflights */
[data-v-579c47cc],[data-v-579c47cc]::before,[data-v-579c47cc]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-579c47cc]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none[data-v-579c47cc]{pointer-events:none;}
.absolute[data-v-579c47cc]{position:absolute;}
.relative[data-v-579c47cc]{position:relative;}
.left-12[data-v-579c47cc]{left:3rem;}
.left-full[data-v-579c47cc]{left:100%;}
.top-0[data-v-579c47cc]{top:0;}
.z-10[data-v-579c47cc]{z-index:10;}
.z-20[data-v-579c47cc]{z-index:20;}
.z-50[data-v-579c47cc]{z-index:50;}
.ml-2[data-v-579c47cc]{margin-left:0.5rem;}
.h-14[data-v-579c47cc]{height:3.5rem;}
.h-full[data-v-579c47cc]{height:100%;}
.w-\\[272px\\][data-v-579c47cc]{width:272px;}
.w-12[data-v-579c47cc]{width:3rem;}
.w-full[data-v-579c47cc]{width:100%;}
.flex[data-v-579c47cc]{display:flex;}
.flex-1[data-v-579c47cc]{flex:1 1 0%;}
.shrink-0[data-v-579c47cc]{flex-shrink:0;}
.flex-col[data-v-579c47cc]{flex-direction:column;}
.-translate-x-8[data-v-579c47cc]{--un-translate-x:-2rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.translate-x-0[data-v-579c47cc]{--un-translate-x:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.rotate-45[data-v-579c47cc]{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:45deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center[data-v-579c47cc]{align-items:center;}
.justify-between[data-v-579c47cc]{justify-content:space-between;}
.gap-1[data-v-579c47cc]{gap:0.25rem;}
.gap-4[data-v-579c47cc]{gap:1rem;}
.overflow-hidden[data-v-579c47cc]{overflow:hidden;}
.overflow-y-auto[data-v-579c47cc]{overflow-y:auto;}
.whitespace-nowrap[data-v-579c47cc]{white-space:nowrap;}
.border-b[data-v-579c47cc]{border-bottom-width:1px;}
.border-r[data-v-579c47cc]{border-right-width:1px;}
.border-gray-200\\/20[data-v-579c47cc]{border-color:rgb(229 231 235 / 0.2);}
.border-zinc-900\\/30[data-v-579c47cc],
.dark .dark\\:border-zinc-900\\/30[data-v-579c47cc]{border-color:rgb(24 24 27 / 0.3);}
.rounded[data-v-579c47cc]{border-radius:0.25rem;}
.rounded-md[data-v-579c47cc]{border-radius:0.375rem;}
.rounded-xl[data-v-579c47cc]{border-radius:0.75rem;}
.bg-\\[\\#141414\\][data-v-579c47cc],
.dark .dark\\:bg-\\[\\#141414\\][data-v-579c47cc]{--un-bg-opacity:1;background-color:rgb(20 20 20 / var(--un-bg-opacity)) /* #141414 */;}
.bg-gray-50[data-v-579c47cc]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-gray-800[data-v-579c47cc]{--un-bg-opacity:1;background-color:rgb(31 41 55 / var(--un-bg-opacity)) /* #1f2937 */;}
.bg-primary-10[data-v-579c47cc]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-white[data-v-579c47cc]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.dark .dark\\:bg-primary[data-v-579c47cc]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.dark .dark\\:hover\\:bg-zinc-900[data-v-579c47cc]:hover{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.hover\\:bg-gray-100[data-v-579c47cc]:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.hover\\:bg-gray-200[data-v-579c47cc]:hover{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.p-1\\.5[data-v-579c47cc]{padding:0.375rem;}
.p-2\\.5[data-v-579c47cc]{padding:0.625rem;}
.px-2[data-v-579c47cc]{padding-left:0.5rem;padding-right:0.5rem;}
.px-4[data-v-579c47cc]{padding-left:1rem;padding-right:1rem;}
.py-1[data-v-579c47cc]{padding-top:0.25rem;padding-bottom:0.25rem;}
.py-4[data-v-579c47cc]{padding-top:1rem;padding-bottom:1rem;}
.text-sm[data-v-579c47cc]{font-size:0.875rem;line-height:1.25rem;}
.text-xs[data-v-579c47cc]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-white[data-v-579c47cc],
.text-white[data-v-579c47cc]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.dark .dark\\:text-zinc-200[data-v-579c47cc]{--un-text-opacity:1;color:rgb(228 228 231 / var(--un-text-opacity)) /* #e4e4e7 */;}
.dark .dark\\:text-zinc-400[data-v-579c47cc]{--un-text-opacity:1;color:rgb(161 161 170 / var(--un-text-opacity)) /* #a1a1aa */;}
.text-gray-400[data-v-579c47cc]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-579c47cc]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-800[data-v-579c47cc]{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-primary[data-v-579c47cc]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.font-bold[data-v-579c47cc]{font-weight:700;}
.tab[data-v-579c47cc]{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}
.opacity-0[data-v-579c47cc]{opacity:0;}
.opacity-100[data-v-579c47cc],
.group:hover .group-hover\\:opacity-100[data-v-579c47cc]{opacity:1;}
.shadow-2xl[data-v-579c47cc]{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-sm[data-v-579c47cc]{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.outline[data-v-579c47cc]{outline-style:solid;}
.transition-all[data-v-579c47cc]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-579c47cc]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300[data-v-579c47cc]{transition-duration:300ms;}
.ease-in-out[data-v-579c47cc]{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}/* layer: preflights */
[data-v-469d0e0e],[data-v-469d0e0e]::before,[data-v-469d0e0e]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-469d0e0e]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-469d0e0e]{width:100%;}/* layer: preflights */
[data-v-bc5162eb],[data-v-bc5162eb]::before,[data-v-bc5162eb]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-bc5162eb]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-bc5162eb]{width:100%;}/* layer: preflights */
[data-v-df521ca8],[data-v-df521ca8]::before,[data-v-df521ca8]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-df521ca8]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative[data-v-df521ca8]{position:relative;}
.w-full[data-v-df521ca8]{width:100%;}/* layer: preflights */
[data-v-1e771bc3],[data-v-1e771bc3]::before,[data-v-1e771bc3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-1e771bc3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-1e771bc3]{width:100%;}
.border-primary[data-v-1e771bc3]{border-color:var(--primary-color, #4f46e5);}
.border-transparent[data-v-1e771bc3]{border-color:transparent;}
.bg-primary-10[data-v-1e771bc3]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-primary-20[data-v-1e771bc3]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.hover\\:bg-primary-10[data-v-1e771bc3]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.hover\\:bg-primary-20[data-v-1e771bc3]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.hover\\:bg-primary-30[data-v-1e771bc3]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%) */;}
.hover\\:bg-primary-5[data-v-1e771bc3]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%) */;}
.text-primary[data-v-1e771bc3]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.text-primary-light[data-v-1e771bc3]{color:color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) */;}
.outline[data-v-1e771bc3]{outline-style:solid;}
.transition-all[data-v-1e771bc3]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}/* layer: preflights */
[data-v-041f05e9],[data-v-041f05e9]::before,[data-v-041f05e9]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-041f05e9]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-041f05e9]{width:100%;}
.flex[data-v-041f05e9]{display:flex;}
.flex-wrap[data-v-041f05e9]{flex-wrap:wrap;}
.gap-4[data-v-041f05e9]{gap:1rem;}
[data-v-e866eb1d] .table-striped td {\r
  background-color: #fafafa;
}
.dark[data-v-e866eb1d] .table-striped td {\r
  background-color: #1d1d1d;
}\r
/* layer: preflights */
[data-v-e866eb1d],[data-v-e866eb1d]::before,[data-v-e866eb1d]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e866eb1d]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-e866eb1d]{width:100%;}/* layer: preflights */
[data-v-c5e9d7ea],[data-v-c5e9d7ea]::before,[data-v-c5e9d7ea]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c5e9d7ea]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.h-full[data-v-c5e9d7ea]{height:100%;}
.min-h-\\[24px\\][data-v-c5e9d7ea]{min-height:24px;}
.w-full[data-v-c5e9d7ea]{width:100%;}
.flex[data-v-c5e9d7ea]{display:flex;}
.flex-row[data-v-c5e9d7ea]{flex-direction:row;}
.flex-col[data-v-c5e9d7ea]{flex-direction:column;}
.flex-wrap[data-v-c5e9d7ea]{flex-wrap:wrap;}
.content-start[data-v-c5e9d7ea]{align-content:flex-start;}
.items-start[data-v-c5e9d7ea]{align-items:flex-start;}
.items-center[data-v-c5e9d7ea]{align-items:center;}
.gap-1[data-v-c5e9d7ea]{gap:0.25rem;}
.gap-2[data-v-c5e9d7ea]{gap:0.5rem;}
.gap-4[data-v-c5e9d7ea]{gap:1rem;}
.space-y-1[data-v-c5e9d7ea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.25rem * var(--un-space-y-reverse));}
.space-y-2[data-v-c5e9d7ea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}
.space-y-4[data-v-c5e9d7ea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.p-1[data-v-c5e9d7ea]{padding:0.25rem;}
.p-2[data-v-c5e9d7ea]{padding:0.5rem;}
.p-4[data-v-c5e9d7ea]{padding:1rem;}
.px[data-v-c5e9d7ea]{padding-left:1rem;padding-right:1rem;}/* layer: preflights */
[data-v-516cf6c7],[data-v-516cf6c7]::before,[data-v-516cf6c7]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-516cf6c7]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-516cf6c7]{width:100%;}
.flex[data-v-516cf6c7]{display:flex;}
.justify-center[data-v-516cf6c7]{justify-content:center;}
.px[data-v-516cf6c7]{padding-left:1rem;padding-right:1rem;}
.custom-divider[data-v-4ce27e44] {\r
  margin: 0 !important;
}\r
/* layer: preflights */
[data-v-4ce27e44],[data-v-4ce27e44]::before,[data-v-4ce27e44]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-4ce27e44]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-4ce27e44]{width:100%;}
.flex[data-v-4ce27e44]{display:flex;}
.items-center[data-v-4ce27e44]{align-items:center;}
.px-2[data-v-4ce27e44]{padding-left:0.5rem;padding-right:0.5rem;}
.py-4[data-v-4ce27e44]{padding-top:1rem;padding-bottom:1rem;}
.text-xs[data-v-4ce27e44]{font-size:0.75rem;line-height:1rem;}
.text-gray-400[data-v-4ce27e44]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}/* layer: preflights */
[data-v-1baf4e41],[data-v-1baf4e41]::before,[data-v-1baf4e41]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-1baf4e41]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-b56386eb],[data-v-b56386eb]::before,[data-v-b56386eb]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-b56386eb]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-1d21bb92],[data-v-1d21bb92]::before,[data-v-1d21bb92]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-1d21bb92]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.py-4[data-v-1d21bb92]{padding-top:1rem;padding-bottom:1rem;}
.text-center[data-v-1d21bb92]{text-align:center;}
.text-xs[data-v-1d21bb92]{font-size:0.75rem;line-height:1rem;}
.text-gray-400[data-v-1d21bb92]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.italic[data-v-1d21bb92]{font-style:italic;}/* layer: preflights */
[data-v-fc7176d7],[data-v-fc7176d7]::before,[data-v-fc7176d7]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-fc7176d7]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-fc7176d7]{width:100%;}/* layer: preflights */
[data-v-38af1c22],[data-v-38af1c22]::before,[data-v-38af1c22]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-38af1c22]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-e534a44f],[data-v-e534a44f]::before,[data-v-e534a44f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e534a44f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-cbc5a32e],[data-v-cbc5a32e]::before,[data-v-cbc5a32e]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-cbc5a32e]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-8902f5c4],[data-v-8902f5c4]::before,[data-v-8902f5c4]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-8902f5c4]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.p-4[data-v-8902f5c4]{padding:1rem;}
.text-center[data-v-8902f5c4]{text-align:center;}
.text-xs[data-v-8902f5c4]{font-size:0.75rem;line-height:1rem;}
.text-gray-400[data-v-8902f5c4]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.italic[data-v-8902f5c4]{font-style:italic;}/* layer: preflights */
[data-v-8ea0ebd3],[data-v-8ea0ebd3]::before,[data-v-8ea0ebd3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-8ea0ebd3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-c46539fe],[data-v-c46539fe]::before,[data-v-c46539fe]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c46539fe]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
.page-header[data-v-a7471628] {\r
  width: 100%;
}\r
/* layer: preflights */
[data-v-a7471628],[data-v-a7471628]::before,[data-v-a7471628]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-a7471628]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.m-0[data-v-a7471628]{margin:0;}
.mt-1[data-v-a7471628]{margin-top:0.25rem;}
.flex[data-v-a7471628]{display:flex;}
.cursor-pointer[data-v-a7471628]{cursor:pointer;}
.items-center[data-v-a7471628]{align-items:center;}
.justify-between[data-v-a7471628]{justify-content:space-between;}
.gap-2[data-v-a7471628]{gap:0.5rem;}
.gap-4[data-v-a7471628]{gap:1rem;}
.border-b[data-v-a7471628]{border-bottom-width:1px;}
.border-gray-100[data-v-a7471628]{--un-border-opacity:1;border-color:rgb(243 244 246 / var(--un-border-opacity));}
.border-zinc-800[data-v-a7471628]{--un-border-opacity:1;border-color:rgb(39 39 42 / var(--un-border-opacity));}
.bg-white[data-v-a7471628]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-zinc-900[data-v-a7471628]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.px-6[data-v-a7471628]{padding-left:1.5rem;padding-right:1.5rem;}
.py-4[data-v-a7471628]{padding-top:1rem;padding-bottom:1rem;}
.text-sm[data-v-a7471628]{font-size:0.875rem;line-height:1.25rem;}
.text-xl[data-v-a7471628]{font-size:1.25rem;line-height:1.75rem;}
.text-gray-500[data-v-a7471628]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-900[data-v-a7471628]{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity)) /* #111827 */;}
.text-zinc-100[data-v-a7471628]{--un-text-opacity:1;color:rgb(244 244 245 / var(--un-text-opacity)) /* #f4f4f5 */;}
.text-zinc-400[data-v-a7471628]{--un-text-opacity:1;color:rgb(161 161 170 / var(--un-text-opacity)) /* #a1a1aa */;}
.font-semibold[data-v-a7471628]{font-weight:600;}
.hover\\:opacity-70[data-v-a7471628]:hover{opacity:0.7;}
.transition-colors[data-v-a7471628]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}/* layer: preflights */
[data-v-721e4743],[data-v-721e4743]::before,[data-v-721e4743]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-721e4743]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-730ce025],[data-v-730ce025]::before,[data-v-730ce025]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-730ce025]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-d3113b94],[data-v-d3113b94]::before,[data-v-d3113b94]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-d3113b94]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-d3113b94]{width:100%;}/* layer: preflights */
[data-v-e5473e2f],[data-v-e5473e2f]::before,[data-v-e5473e2f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e5473e2f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-e5473e2f]{width:100%;}/* layer: preflights */
[data-v-ac5a1725],[data-v-ac5a1725]::before,[data-v-ac5a1725]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-ac5a1725]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-ac5a1725]{width:100%;}/* layer: preflights */
[data-v-9c6e154a],[data-v-9c6e154a]::before,[data-v-9c6e154a]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-9c6e154a]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-9c6e154a]{width:100%;}
.border[data-v-9c6e154a]{border-width:1px;}
.border-gray-200[data-v-9c6e154a]{--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}
.rounded[data-v-9c6e154a]{border-radius:0.25rem;}
.border-dashed[data-v-9c6e154a]{border-style:dashed;}
.p-4[data-v-9c6e154a]{padding:1rem;}
.text-center[data-v-9c6e154a]{text-align:center;}
.text-xs[data-v-9c6e154a]{font-size:0.75rem;line-height:1rem;}
.text-gray-400[data-v-9c6e154a]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.italic[data-v-9c6e154a]{font-style:italic;}/* layer: preflights */
[data-v-72f8bfdd],[data-v-72f8bfdd]::before,[data-v-72f8bfdd]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-72f8bfdd]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-72f8bfdd]{width:100%;}/* layer: preflights */
[data-v-9cc85b06],[data-v-9cc85b06]::before,[data-v-9cc85b06]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-9cc85b06]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-b9c5d366],[data-v-b9c5d366]::before,[data-v-b9c5d366]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-b9c5d366]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-b9c5d366]{width:100%;}/* layer: preflights */
[data-v-1cdf18fc],[data-v-1cdf18fc]::before,[data-v-1cdf18fc]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-1cdf18fc]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-0717d7ee],[data-v-0717d7ee]::before,[data-v-0717d7ee]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-0717d7ee]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-0717d7ee]{width:100%;}/* layer: preflights */
[data-v-7f8f36bf],[data-v-7f8f36bf]::before,[data-v-7f8f36bf]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-7f8f36bf]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-e081bf5e],[data-v-e081bf5e]::before,[data-v-e081bf5e]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e081bf5e]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-e081bf5e]{width:100%;}/* layer: preflights */
[data-v-2e832424],[data-v-2e832424]::before,[data-v-2e832424]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-2e832424]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.h-full[data-v-2e832424]{height:100%;}
.w-full[data-v-2e832424]{width:100%;}
.flex[data-v-2e832424]{display:flex;}
.flex-col[data-v-2e832424]{flex-direction:column;}
.items-center[data-v-2e832424]{align-items:center;}
.justify-center[data-v-2e832424]{justify-content:center;}/* layer: preflights */
[data-v-1d04f7e3],[data-v-1d04f7e3]::before,[data-v-1d04f7e3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-1d04f7e3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-23de4256],[data-v-23de4256]::before,[data-v-23de4256]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-23de4256]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-0b51bc81],[data-v-0b51bc81]::before,[data-v-0b51bc81]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-0b51bc81]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-eaf4d6f5],[data-v-eaf4d6f5]::before,[data-v-eaf4d6f5]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-eaf4d6f5]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.h-32[data-v-eaf4d6f5]{height:8rem;}
.flex[data-v-eaf4d6f5]{display:flex;}
.items-center[data-v-eaf4d6f5]{align-items:center;}
.justify-center[data-v-eaf4d6f5]{justify-content:center;}
.bg-gray-100[data-v-eaf4d6f5]{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.dark .dark\\:bg-zinc-800[data-v-eaf4d6f5]{--un-bg-opacity:1;background-color:rgb(39 39 42 / var(--un-bg-opacity)) /* #27272a */;}
.text-gray-400[data-v-eaf4d6f5]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}/* layer: preflights */
[data-v-77b86ed6],[data-v-77b86ed6]::before,[data-v-77b86ed6]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-77b86ed6]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-6336ec25],[data-v-6336ec25]::before,[data-v-6336ec25]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-6336ec25]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-f8c7bec4],[data-v-f8c7bec4]::before,[data-v-f8c7bec4]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-f8c7bec4]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-b55bdb09],[data-v-b55bdb09]::before,[data-v-b55bdb09]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-b55bdb09]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-2459232a],[data-v-2459232a]::before,[data-v-2459232a]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-2459232a]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-d13684f6],[data-v-d13684f6]::before,[data-v-d13684f6]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-d13684f6]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-489739a3],[data-v-489739a3]::before,[data-v-489739a3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-489739a3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-d738b2ee],[data-v-d738b2ee]::before,[data-v-d738b2ee]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-d738b2ee]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-24a43c31],[data-v-24a43c31]::before,[data-v-24a43c31]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-24a43c31]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: preflights */
[data-v-88a1e247],[data-v-88a1e247]::before,[data-v-88a1e247]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-88a1e247]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.w-full[data-v-88a1e247]{width:100%;}
.flex[data-v-88a1e247]{display:flex;}
.justify-center[data-v-88a1e247]{justify-content:center;}
.p-4[data-v-88a1e247]{padding:1rem;}
.px[data-v-88a1e247]{padding-left:1rem;padding-right:1rem;}
.py-4[data-v-88a1e247]{padding-top:1rem;padding-bottom:1rem;}
.text-center[data-v-88a1e247]{text-align:center;}
.text-xs[data-v-88a1e247]{font-size:0.75rem;line-height:1rem;}
.text-gray-400[data-v-88a1e247]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.italic[data-v-88a1e247]{font-style:italic;}/* layer: preflights */
[data-v-2778039b],[data-v-2778039b]::before,[data-v-2778039b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-2778039b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.table[data-v-2778039b]{display:table;}
.row-col-container[data-v-e873b2b8] {\r
  width: 100%;\r
  display: flex;
}\r
/* layer: preflights */
[data-v-e873b2b8],[data-v-e873b2b8]::before,[data-v-e873b2b8]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e873b2b8]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.fixed[data-v-e873b2b8]{position:fixed;}
.relative[data-v-e873b2b8]{position:relative;}
.h-full[data-v-e873b2b8]{height:100%;}
.w-auto[data-v-e873b2b8]{width:auto;}
.w-full[data-v-e873b2b8]{width:100%;}
.flex[data-v-e873b2b8]{display:flex;}
.flex-1[data-v-e873b2b8]{flex:1 1 0%;}
.shrink-0[data-v-e873b2b8]{flex-shrink:0;}
.grow-0[data-v-e873b2b8]{flex-grow:0;}
.flex-col[data-v-e873b2b8]{flex-direction:column;}
.items-stretch[data-v-e873b2b8]{align-items:stretch;}
.px[data-v-e873b2b8]{padding-left:1rem;padding-right:1rem;}
.flex-container[data-v-ff392e20] {\r
  width: 100%;\r
  min-height: 40px;\r
  display: flex;
}
.flex-child[data-v-ff392e20] {\r
  position: relative;\r
  min-width: 0; /* Fix flexbox overflow */
}\r
/* layer: preflights */
[data-v-ff392e20],[data-v-ff392e20]::before,[data-v-ff392e20]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-ff392e20]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.fixed[data-v-ff392e20]{position:fixed;}
.relative[data-v-ff392e20]{position:relative;}
.flex[data-v-ff392e20]{display:flex;}
.px[data-v-ff392e20]{padding-left:1rem;padding-right:1rem;}
.grid-container[data-v-2e39f6ae] {\r
  width: 100%;\r
  min-height: 40px;
}
.grid-child[data-v-2e39f6ae] {\r
  position: relative;\r
  width: 100%;
}\r
/* layer: preflights */
[data-v-2e39f6ae],[data-v-2e39f6ae]::before,[data-v-2e39f6ae]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-2e39f6ae]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative[data-v-2e39f6ae]{position:relative;}
.w-full[data-v-2e39f6ae]{width:100%;}
.box-container[data-v-eda8cbec] {\r
  width: 100%;\r
  min-height: 24px;\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: flex-start;\r
  align-content: flex-start;
}
.box-child[data-v-eda8cbec] {\r
  position: relative;\r
  width: auto;
}\r
/* layer: preflights */
[data-v-eda8cbec],[data-v-eda8cbec]::before,[data-v-eda8cbec]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-eda8cbec]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative[data-v-eda8cbec]{position:relative;}
.flex[data-v-eda8cbec]{display:flex;}
.flex-wrap[data-v-eda8cbec]{flex-wrap:wrap;}
.col-container[data-v-a1acccf3] {\r
  width: 100%;\r
  min-height: 24px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: stretch;
}
.col-child[data-v-a1acccf3] {\r
  position: relative;\r
  width: 100%;
}
.col-child.fixed-width[data-v-a1acccf3] {\r
  width: auto;\r
  flex-shrink: 0;\r
  flex-grow: 0;
}\r
/* layer: preflights */
[data-v-a1acccf3],[data-v-a1acccf3]::before,[data-v-a1acccf3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-a1acccf3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.fixed[data-v-a1acccf3]{position:fixed;}
.relative[data-v-a1acccf3]{position:relative;}
.flex[data-v-a1acccf3]{display:flex;}
.flex-shrink[data-v-a1acccf3]{flex-shrink:1;}
.flex-grow[data-v-a1acccf3]{flex-grow:1;}
.px[data-v-a1acccf3]{padding-left:1rem;padding-right:1rem;}
.full-width-container[data-v-85fda02b] {\r
  width: 100%;\r
  min-height: 40px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;
}
.full-width-content[data-v-85fda02b] {\r
  width: 100%;\r
  display: flex;\r
  flex-direction: column;
}
.full-width-child[data-v-85fda02b] {\r
  position: relative;\r
  width: 100%;
}\r
/* layer: preflights */
[data-v-85fda02b],[data-v-85fda02b]::before,[data-v-85fda02b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-85fda02b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.relative[data-v-85fda02b]{position:relative;}
.flex[data-v-85fda02b]{display:flex;}
.px[data-v-85fda02b]{padding-left:1rem;padding-right:1rem;}
.default-container[data-v-c41d1018] {\r
  width: 100%;\r
  min-height: 40px;\r
  display: flex;\r
  flex-direction: column;
}
.default-child[data-v-c41d1018] {\r
  position: relative;\r
  width: 100%;
}\r
/* layer: preflights */
[data-v-c41d1018],[data-v-c41d1018]::before,[data-v-c41d1018]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c41d1018]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.default-container[data-v-c41d1018]:default{width:100%;}
@media (min-width: 640px){
.default-container[data-v-c41d1018]:default{max-width:640px;}
}
@media (min-width: 768px){
.default-container[data-v-c41d1018]:default{max-width:768px;}
}
@media (min-width: 1024px){
.default-container[data-v-c41d1018]:default{max-width:1024px;}
}
@media (min-width: 1280px){
.default-container[data-v-c41d1018]:default{max-width:1280px;}
}
@media (min-width: 1536px){
.default-container[data-v-c41d1018]:default{max-width:1536px;}
}
/* layer: default */
.relative[data-v-c41d1018]{position:relative;}
.flex[data-v-c41d1018]{display:flex;}/* layer: preflights */
[data-v-56641631],[data-v-56641631]::before,[data-v-56641631]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-56641631]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none[data-v-56641631]{pointer-events:none;}
.absolute[data-v-56641631]{position:absolute;}
.fixed[data-v-56641631]{position:fixed;}
.relative[data-v-56641631]{position:relative;}
.-inset-1[data-v-56641631]{inset:-0.25rem;}
.inset-0[data-v-56641631]{inset:0;}
.-left-4[data-v-56641631]{left:-1rem;}
.-right-2[data-v-56641631]{right:-0.5rem;}
.-top-2[data-v-56641631]{top:-0.5rem;}
.-top-4[data-v-56641631]{top:-1rem;}
.bottom-0[data-v-56641631]{bottom:0;}
.left-0[data-v-56641631]{left:0;}
.left-1\\/2[data-v-56641631]{left:50%;}
.right-0[data-v-56641631]{right:0;}
.top-0[data-v-56641631]{top:0;}
.top-1\\/2[data-v-56641631]{top:50%;}
.z-10[data-v-56641631]{z-index:10;}
.z-20[data-v-56641631]{z-index:20;}
.z-30[data-v-56641631]{z-index:30;}
.z-40[data-v-56641631]{z-index:40;}
.z-50[data-v-56641631]{z-index:50;}
.mb-0\\.5[data-v-56641631]{margin-bottom:0.125rem;}
.h-1[data-v-56641631]{height:0.25rem;}
.h-full[data-v-56641631]{height:100%;}
.min-h-\\[32px\\][data-v-56641631]{min-height:32px;}
.min-h-\\[40px\\][data-v-56641631]{min-height:40px;}
.min-w-\\[160px\\][data-v-56641631]{min-width:160px;}
.min-w-\\[80px\\][data-v-56641631]{min-width:80px;}
.w-1[data-v-56641631]{width:0.25rem;}
.w-auto[data-v-56641631]{width:auto;}
.w-full[data-v-56641631]{width:100%;}
.flex[data-v-56641631]{display:flex;}
.shrink-0[data-v-56641631]{flex-shrink:0;}
.flex-col[data-v-56641631]{flex-direction:column;}
.origin-top-right[data-v-56641631]{transform-origin:top right;}
.-translate-x-1\\/2[data-v-56641631]{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1\\/2[data-v-56641631]{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.translate-x-1\\/2[data-v-56641631]{--un-translate-x:50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.translate-y-1\\/2[data-v-56641631]{--un-translate-y:50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.rotate-90[data-v-56641631]{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:90deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.scale-75[data-v-56641631]{--un-scale-x:0.75;--un-scale-y:0.75;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group\\/scissors:hover .group-hover\\/scissors\\:scale-110[data-v-56641631]{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:scale-110[data-v-56641631]:hover{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:scale-125[data-v-56641631]:hover{--un-scale-x:1.25;--un-scale-y:1.25;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center[data-v-56641631]{align-items:center;}
.justify-center[data-v-56641631]{justify-content:center;}
.gap-1[data-v-56641631]{gap:0.25rem;}
.overflow-hidden[data-v-56641631]{overflow:hidden;}
.border[data-v-56641631],
.border-1[data-v-56641631]{border-width:1px;}
.border-l[data-v-56641631]{border-left-width:1px;}
.border-t[data-v-56641631]{border-top-width:1px;}
.border-gray-100\\/30[data-v-56641631]{border-color:rgb(243 244 246 / 0.3);}
.border-primary[data-v-56641631],
.border-primary\\/40[data-v-56641631]{border-color:var(--primary-color, #4f46e5);}
.border-primary-30[data-v-56641631]{border-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%);}
.border-slate-300[data-v-56641631]{--un-border-opacity:1;border-color:rgb(203 213 225 / var(--un-border-opacity));}
.border-slate-700[data-v-56641631]{--un-border-opacity:1;border-color:rgb(51 65 85 / var(--un-border-opacity));}
.border-zinc-900\\/30[data-v-56641631]{border-color:rgb(24 24 27 / 0.3);}
.rounded-full[data-v-56641631]{border-radius:9999px;}
.rounded-lg[data-v-56641631]{border-radius:0.5rem;}
.border-dashed[data-v-56641631]{border-style:dashed;}
.bg-primary[data-v-56641631]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.bg-primary-10[data-v-56641631]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-primary-5[data-v-56641631]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 95%) */;}
.bg-slate-50\\/50[data-v-56641631]{background-color:rgb(248 250 252 / 0.5) /* #f8fafc */;}
.bg-slate-800[data-v-56641631]{--un-bg-opacity:1;background-color:rgb(30 41 59 / var(--un-bg-opacity)) /* #1e293b */;}
.bg-slate-900\\/20[data-v-56641631]{background-color:rgb(15 23 42 / 0.2) /* #0f172a */;}
.bg-white[data-v-56641631]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.hover\\:bg-primary-dark[data-v-56641631]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) /* color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) */;}
.p-1[data-v-56641631]{padding:0.25rem;}
.p-1\\.5[data-v-56641631]{padding:0.375rem;}
.p-2[data-v-56641631]{padding:0.5rem;}
.p-4[data-v-56641631]{padding:1rem;}
.px[data-v-56641631]{padding-left:1rem;padding-right:1rem;}
.py-1[data-v-56641631]{padding-top:0.25rem;padding-bottom:0.25rem;}
.text-\\[8px\\][data-v-56641631]{font-size:8px;}
.text-gray-300[data-v-56641631]{--un-text-opacity:1;color:rgb(209 213 219 / var(--un-text-opacity)) /* #d1d5db */;}
.text-gray-400[data-v-56641631]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-slate-400[data-v-56641631]{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity)) /* #94a3b8 */;}
.text-slate-600[data-v-56641631]{--un-text-opacity:1;color:rgb(71 85 105 / var(--un-text-opacity)) /* #475569 */;}
.text-white[data-v-56641631]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.hover\\:text-red-400[data-v-56641631]:hover{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity)) /* #f87171 */;}
.hover\\:text-red-600[data-v-56641631]:hover{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity)) /* #dc2626 */;}
.font-bold[data-v-56641631]{font-weight:700;}
.tracking-wider[data-v-56641631]{letter-spacing:0.05em;}
.uppercase[data-v-56641631]{text-transform:uppercase;}
.opacity-0[data-v-56641631]{opacity:0;}
.opacity-100[data-v-56641631]{opacity:1;}
.opacity-50[data-v-56641631]{opacity:0.5;}
.shadow-md[data-v-56641631]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl[data-v-56641631]{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-2[data-v-56641631]{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.dark .dark\\:ring-slate-700[data-v-56641631]{--un-ring-opacity:1;--un-ring-color:rgb(51 65 85 / var(--un-ring-opacity)) /* #334155 */;}
.ring-white[data-v-56641631]{--un-ring-opacity:1;--un-ring-color:rgb(255 255 255 / var(--un-ring-opacity)) /* #fff */;}
.transition-all[data-v-56641631]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-opacity[data-v-56641631]{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform[data-v-56641631]{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-150[data-v-56641631]{transition-duration:150ms;}
.duration-200[data-v-56641631]{transition-duration:200ms;}
.duration-300[data-v-56641631]{transition-duration:300ms;}/* layer: preflights */
[data-v-214b5c4f],[data-v-214b5c4f]::before,[data-v-214b5c4f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-214b5c4f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute[data-v-214b5c4f]{position:absolute;}
.fixed[data-v-214b5c4f]{position:fixed;}
.relative[data-v-214b5c4f]{position:relative;}
.bottom-0[data-v-214b5c4f]{bottom:0;}
.left-0[data-v-214b5c4f]{left:0;}
.right-0[data-v-214b5c4f]{right:0;}
.top-0[data-v-214b5c4f]{top:0;}
.z-50[data-v-214b5c4f]{z-index:50;}
.mx-auto[data-v-214b5c4f]{margin-left:auto;margin-right:auto;}
.mb-4[data-v-214b5c4f]{margin-bottom:1rem;}
.mt-2[data-v-214b5c4f]{margin-top:0.5rem;}
.h-\\[500px\\][data-v-214b5c4f]{height:500px;}
.h-1[data-v-214b5c4f]{height:0.25rem;}
.h-16[data-v-214b5c4f]{height:4rem;}
.h-full[data-v-214b5c4f]{height:100%;}
.min-h-\\[200px\\][data-v-214b5c4f]{min-height:200px;}
.min-h-\\[800px\\][data-v-214b5c4f]{min-height:800px;}
.w-1[data-v-214b5c4f]{width:0.25rem;}
.w-16[data-v-214b5c4f]{width:4rem;}
.w-auto[data-v-214b5c4f]{width:auto;}
.w-full[data-v-214b5c4f]{width:100%;}
.flex[data-v-214b5c4f]{display:flex;}
.flex-1[data-v-214b5c4f]{flex:1 1 0%;}
.shrink-0[data-v-214b5c4f]{flex-shrink:0;}
.flex-col[data-v-214b5c4f]{flex-direction:column;}
.-translate-x-1\\/2[data-v-214b5c4f]{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1\\/2[data-v-214b5c4f]{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.translate-x-1\\/2[data-v-214b5c4f]{--un-translate-x:50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.translate-y-1\\/2[data-v-214b5c4f]{--un-translate-y:50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group:hover .group-hover\\:scale-110[data-v-214b5c4f]{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center[data-v-214b5c4f]{align-items:center;}
.justify-center[data-v-214b5c4f]{justify-content:center;}
.space-y-12[data-v-214b5c4f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(3rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(3rem * var(--un-space-y-reverse));}
.space-y-2[data-v-214b5c4f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}
.space-y-6[data-v-214b5c4f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.overflow-auto[data-v-214b5c4f]{overflow:auto;}
.overflow-hidden[data-v-214b5c4f]{overflow:hidden;}
.border-2[data-v-214b5c4f]{border-width:2px;}
.border-gray-200[data-v-214b5c4f]{--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}
.border-zinc-800[data-v-214b5c4f]{--un-border-opacity:1;border-color:rgb(39 39 42 / var(--un-border-opacity));}
.hover\\:border-primary\\/40[data-v-214b5c4f]:hover{border-color:var(--primary-color, #4f46e5);}
.rounded-\\[calc\\(1rem-1\\.5px\\)\\][data-v-214b5c4f]{border-radius:calc(1rem - 1.5px);}
.rounded-2xl[data-v-214b5c4f]{border-radius:1rem;}
.border-dashed[data-v-214b5c4f]{border-style:dashed;}
.bg-\\[\\#141414\\][data-v-214b5c4f]{--un-bg-opacity:1;background-color:rgb(20 20 20 / var(--un-bg-opacity)) /* #141414 */;}
.bg-\\[\\#F1F3F6\\][data-v-214b5c4f]{--un-bg-opacity:1;background-color:rgb(241 243 246 / var(--un-bg-opacity)) /* #F1F3F6 */;}
.bg-black[data-v-214b5c4f]{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.bg-gray-50[data-v-214b5c4f]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-primary[data-v-214b5c4f]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.bg-white[data-v-214b5c4f]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-zinc-900[data-v-214b5c4f]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.bg-zinc-900\\/50[data-v-214b5c4f]{background-color:rgb(24 24 27 / 0.5) /* #18181b */;}
.hover\\:bg-primary\\/5[data-v-214b5c4f]:hover{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.p-10[data-v-214b5c4f]{padding:2.5rem;}
.p-12[data-v-214b5c4f]{padding:3rem;}
.px[data-v-214b5c4f]{padding-left:1rem;padding-right:1rem;}
.px-\\[4px\\][data-v-214b5c4f]{padding-left:4px;padding-right:4px;}
.py-10[data-v-214b5c4f]{padding-top:2.5rem;padding-bottom:2.5rem;}
.pb-32[data-v-214b5c4f]{padding-bottom:8rem;}
.text-lg[data-v-214b5c4f]{font-size:1.125rem;line-height:1.75rem;}
.text-xs[data-v-214b5c4f]{font-size:0.75rem;line-height:1rem;}
.text-gray-300[data-v-214b5c4f]{--un-text-opacity:1;color:rgb(209 213 219 / var(--un-text-opacity)) /* #d1d5db */;}
.text-gray-400[data-v-214b5c4f]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-214b5c4f]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-slate-400[data-v-214b5c4f]{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity)) /* #94a3b8 */;}
.group:hover .group-hover\\:text-primary[data-v-214b5c4f]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.font-bold[data-v-214b5c4f]{font-weight:700;}
.shadow-gray-200\\/50[data-v-214b5c4f]{--un-shadow-color:rgb(229 231 235 / 0.5) /* #e5e7eb */;}
.shadow-primary\\/10[data-v-214b5c4f]{--un-shadow-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.shadow-sm[data-v-214b5c4f]{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl[data-v-214b5c4f]{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition-all[data-v-214b5c4f]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-214b5c4f]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform[data-v-214b5c4f]{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-150[data-v-214b5c4f]{transition-duration:150ms;}
.duration-300[data-v-214b5c4f]{transition-duration:300ms;}
.duration-500[data-v-214b5c4f]{transition-duration:500ms;}/* layer: preflights */
[data-v-30faf84a],[data-v-30faf84a]::before,[data-v-30faf84a]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-30faf84a]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.flex[data-v-30faf84a]{display:flex;}
.rotate-45[data-v-30faf84a]{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:45deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center[data-v-30faf84a]{align-items:center;}
.justify-between[data-v-30faf84a]{justify-content:space-between;}
.gap-1[data-v-30faf84a]{gap:0.25rem;}
.gap-3[data-v-30faf84a]{gap:0.75rem;}
.border-b[data-v-30faf84a]{border-bottom-width:1px;}
.border-gray-100\\/30[data-v-30faf84a]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-30faf84a]{border-color:rgb(24 24 27 / 0.3);}
.rounded-md[data-v-30faf84a]{border-radius:0.375rem;}
.rounded-xl[data-v-30faf84a]{border-radius:0.75rem;}
.bg-gray-50[data-v-30faf84a]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-primary[data-v-30faf84a]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.bg-primary-10[data-v-30faf84a]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.dark .dark\\:bg-\\[\\#141414\\][data-v-30faf84a]{--un-bg-opacity:1;background-color:rgb(20 20 20 / var(--un-bg-opacity)) /* #141414 */;}
.dark .dark\\:bg-primary-20[data-v-30faf84a]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.dark .dark\\:hover\\:bg-zinc-900[data-v-30faf84a]:hover{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.hover\\:bg-gray-100[data-v-30faf84a]:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.p-1\\.5[data-v-30faf84a]{padding:0.375rem;}
.p-2[data-v-30faf84a]{padding:0.5rem;}
.px-6[data-v-30faf84a]{padding-left:1.5rem;padding-right:1.5rem;}
.py-4[data-v-30faf84a]{padding-top:1rem;padding-bottom:1rem;}
.text-\\[10px\\][data-v-30faf84a]{font-size:10px;}
.text-sm[data-v-30faf84a]{font-size:0.875rem;line-height:1.25rem;}
.dark .dark\\:text-white[data-v-30faf84a],
.text-white[data-v-30faf84a]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.dark .dark\\:text-zinc-500[data-v-30faf84a]{--un-text-opacity:1;color:rgb(113 113 122 / var(--un-text-opacity)) /* #71717a */;}
.text-gray-400[data-v-30faf84a]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-900[data-v-30faf84a]{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity)) /* #111827 */;}
.text-primary[data-v-30faf84a]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.font-bold[data-v-30faf84a]{font-weight:700;}
.font-medium[data-v-30faf84a]{font-weight:500;}
.leading-tight[data-v-30faf84a]{line-height:1.25;}
.tracking-wider[data-v-30faf84a]{letter-spacing:0.05em;}
.uppercase[data-v-30faf84a]{text-transform:uppercase;}
.shadow-lg[data-v-30faf84a]{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-primary-20[data-v-30faf84a]{--un-shadow-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.transition-colors[data-v-30faf84a]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}/* layer: preflights */
[data-v-62ea4c92],[data-v-62ea4c92]::before,[data-v-62ea4c92]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-62ea4c92]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-2[data-v-62ea4c92]{margin-bottom:0.5rem;}
.mb-4[data-v-62ea4c92]{margin-bottom:1rem;}
.block[data-v-62ea4c92]{display:block;}
.h-3[data-v-62ea4c92]{height:0.75rem;}
.w-1[data-v-62ea4c92]{width:0.25rem;}
.flex[data-v-62ea4c92]{display:flex;}
.cursor-pointer[data-v-62ea4c92]{cursor:pointer;}
.items-center[data-v-62ea4c92]{align-items:center;}
.justify-between[data-v-62ea4c92]{justify-content:space-between;}
.gap-2[data-v-62ea4c92]{gap:0.5rem;}
.space-y-5[data-v-62ea4c92]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.25rem * var(--un-space-y-reverse));}
.space-y-6[data-v-62ea4c92]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.truncate[data-v-62ea4c92]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.border[data-v-62ea4c92]{border-width:1px;}
.border-gray-100\\/30[data-v-62ea4c92]{border-color:rgb(243 244 246 / 0.3);}
.border-zinc-900\\/30[data-v-62ea4c92]{border-color:rgb(24 24 27 / 0.3);}
.rounded-full[data-v-62ea4c92]{border-radius:9999px;}
.rounded-xl[data-v-62ea4c92]{border-radius:0.75rem;}
.bg-gray-50[data-v-62ea4c92]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-primary[data-v-62ea4c92]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.bg-slate-800[data-v-62ea4c92]{--un-bg-opacity:1;background-color:rgb(30 41 59 / var(--un-bg-opacity)) /* #1e293b */;}
.bg-slate-950[data-v-62ea4c92]{--un-bg-opacity:1;background-color:rgb(2 6 23 / var(--un-bg-opacity)) /* #020617 */;}
.p-4[data-v-62ea4c92]{padding:1rem;}
.px-4[data-v-62ea4c92]{padding-left:1rem;padding-right:1rem;}
.py-2[data-v-62ea4c92]{padding-top:0.5rem;padding-bottom:0.5rem;}
.text-\\[10px\\][data-v-62ea4c92]{font-size:10px;}
.text-\\[11px\\][data-v-62ea4c92]{font-size:11px;}
.text-sm[data-v-62ea4c92]{font-size:0.875rem;line-height:1.25rem;}
.text-gray-400[data-v-62ea4c92]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-62ea4c92]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-slate-200[data-v-62ea4c92]{--un-text-opacity:1;color:rgb(226 232 240 / var(--un-text-opacity)) /* #e2e8f0 */;}
.text-slate-500[data-v-62ea4c92]{--un-text-opacity:1;color:rgb(100 116 139 / var(--un-text-opacity)) /* #64748b */;}
.font-bold[data-v-62ea4c92]{font-weight:700;}
.tracking-wide[data-v-62ea4c92]{letter-spacing:0.025em;}
.tracking-wider[data-v-62ea4c92]{letter-spacing:0.05em;}
.font-mono[data-v-62ea4c92]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}
.uppercase[data-v-62ea4c92]{text-transform:uppercase;}/* layer: preflights */
[data-v-127ce862],[data-v-127ce862]::before,[data-v-127ce862]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-127ce862]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.fixed[data-v-127ce862]{position:fixed;}
.mb-2[data-v-127ce862]{margin-bottom:0.5rem;}
.mb-4[data-v-127ce862]{margin-bottom:1rem;}
.block[data-v-127ce862]{display:block;}
.h-3[data-v-127ce862]{height:0.75rem;}
.w-1[data-v-127ce862]{width:0.25rem;}
.w-full[data-v-127ce862]{width:100%;}
.flex[data-v-127ce862]{display:flex;}
.items-center[data-v-127ce862]{align-items:center;}
.gap-2[data-v-127ce862]{gap:0.5rem;}
.space-y-4[data-v-127ce862]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.rounded-full[data-v-127ce862]{border-radius:9999px;}
.bg-blue-500[data-v-127ce862]{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.text-\\[11px\\][data-v-127ce862]{font-size:11px;}
.text-gray-400[data-v-127ce862]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-127ce862]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-127ce862]{font-weight:700;}
.tracking-wide[data-v-127ce862]{letter-spacing:0.025em;}
.tracking-wider[data-v-127ce862]{letter-spacing:0.05em;}
.uppercase[data-v-127ce862]{text-transform:uppercase;}/* layer: preflights */
[data-v-da3904ea],[data-v-da3904ea]::before,[data-v-da3904ea]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-da3904ea]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-da3904ea]{display:grid;}
.grid-cols-2[data-v-da3904ea]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-1[data-v-da3904ea]{margin-bottom:0.25rem;}
.mb-3[data-v-da3904ea]{margin-bottom:0.75rem;}
.block[data-v-da3904ea]{display:block;}
.w-full[data-v-da3904ea]{width:100%;}
.flex[data-v-da3904ea]{display:flex;}
.items-center[data-v-da3904ea]{align-items:center;}
.justify-between[data-v-da3904ea]{justify-content:space-between;}
.gap-4[data-v-da3904ea]{gap:1rem;}
.space-y-4[data-v-da3904ea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-da3904ea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border-t[data-v-da3904ea]{border-top-width:1px;}
.border-gray-100\\/30[data-v-da3904ea]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-da3904ea]{border-color:rgb(24 24 27 / 0.3);}
.pt-4[data-v-da3904ea]{padding-top:1rem;}
.text-\\[10px\\][data-v-da3904ea]{font-size:10px;}
.text-\\[11px\\][data-v-da3904ea]{font-size:11px;}
.text-xs[data-v-da3904ea]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-da3904ea],
.text-gray-400[data-v-da3904ea]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-da3904ea]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-da3904ea]{font-weight:700;}
.tracking-wider[data-v-da3904ea]{letter-spacing:0.05em;}
.uppercase[data-v-da3904ea]{text-transform:uppercase;}
.outline[data-v-da3904ea]{outline-style:solid;}/* layer: preflights */
[data-v-6c2acdcc],[data-v-6c2acdcc]::before,[data-v-6c2acdcc]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-6c2acdcc]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-6c2acdcc]{display:grid;}
.grid-cols-2[data-v-6c2acdcc]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-1[data-v-6c2acdcc]{margin-bottom:0.25rem;}
.mb-3[data-v-6c2acdcc]{margin-bottom:0.75rem;}
.block[data-v-6c2acdcc]{display:block;}
.w-24[data-v-6c2acdcc]{width:6rem;}
.flex[data-v-6c2acdcc]{display:flex;}
.items-center[data-v-6c2acdcc]{align-items:center;}
.justify-between[data-v-6c2acdcc]{justify-content:space-between;}
.gap-4[data-v-6c2acdcc]{gap:1rem;}
.space-y-3[data-v-6c2acdcc]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-6c2acdcc]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-6c2acdcc]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border-t[data-v-6c2acdcc]{border-top-width:1px;}
.border-gray-100\\/30[data-v-6c2acdcc]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-6c2acdcc]{border-color:rgb(24 24 27 / 0.3);}
.pt-4[data-v-6c2acdcc]{padding-top:1rem;}
.text-\\[10px\\][data-v-6c2acdcc]{font-size:10px;}
.text-\\[11px\\][data-v-6c2acdcc]{font-size:11px;}
.text-xs[data-v-6c2acdcc]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-6c2acdcc],
.text-gray-400[data-v-6c2acdcc]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-6c2acdcc]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-6c2acdcc]{font-weight:700;}
.tracking-wider[data-v-6c2acdcc]{letter-spacing:0.05em;}
.uppercase[data-v-6c2acdcc]{text-transform:uppercase;}/* layer: preflights */
[data-v-f922793f],[data-v-f922793f]::before,[data-v-f922793f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-f922793f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-f922793f]{display:grid;}
.grid-cols-2[data-v-f922793f]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-3[data-v-f922793f]{margin-bottom:0.75rem;}
.block[data-v-f922793f]{display:block;}
.h-9[data-v-f922793f]{height:2.25rem;}
.w-32[data-v-f922793f]{width:8rem;}
.flex[data-v-f922793f]{display:flex;}
.flex-1[data-v-f922793f]{flex:1 1 0%;}
.items-center[data-v-f922793f]{align-items:center;}
.justify-center[data-v-f922793f]{justify-content:center;}
.justify-between[data-v-f922793f]{justify-content:space-between;}
.gap-2[data-v-f922793f]{gap:0.5rem;}
.gap-4[data-v-f922793f]{gap:1rem;}
.space-y-3[data-v-f922793f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-f922793f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-f922793f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border-t[data-v-f922793f]{border-top-width:1px;}
.border-gray-100\\/30[data-v-f922793f]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-f922793f]{border-color:rgb(24 24 27 / 0.3);}
.rounded-lg[data-v-f922793f]{border-radius:0.5rem;}
.p-1[data-v-f922793f]{padding:0.25rem;}
.pt-4[data-v-f922793f]{padding-top:1rem;}
.text-\\[11px\\][data-v-f922793f]{font-size:11px;}
.text-xs[data-v-f922793f]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-f922793f],
.text-gray-400[data-v-f922793f]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-f922793f]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-f922793f]{font-weight:700;}
.tracking-wider[data-v-f922793f]{letter-spacing:0.05em;}
.uppercase[data-v-f922793f]{text-transform:uppercase;}/* layer: preflights */
[data-v-6151bb0d],[data-v-6151bb0d]::before,[data-v-6151bb0d]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-6151bb0d]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.sticky[data-v-6151bb0d]{position:sticky;}
.grid[data-v-6151bb0d]{display:grid;}
.grid-cols-2[data-v-6151bb0d]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-1[data-v-6151bb0d]{margin-bottom:0.25rem;}
.mb-3[data-v-6151bb0d]{margin-bottom:0.75rem;}
.block[data-v-6151bb0d]{display:block;}
.h-9[data-v-6151bb0d]{height:2.25rem;}
.w-20[data-v-6151bb0d]{width:5rem;}
.flex[data-v-6151bb0d]{display:flex;}
.flex-1[data-v-6151bb0d]{flex:1 1 0%;}
.items-center[data-v-6151bb0d]{align-items:center;}
.justify-center[data-v-6151bb0d]{justify-content:center;}
.justify-between[data-v-6151bb0d]{justify-content:space-between;}
.gap-2[data-v-6151bb0d]{gap:0.5rem;}
.gap-4[data-v-6151bb0d]{gap:1rem;}
.space-y-3[data-v-6151bb0d]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-6151bb0d]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-6151bb0d]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border-t[data-v-6151bb0d]{border-top-width:1px;}
.border-gray-100\\/30[data-v-6151bb0d]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-6151bb0d]{border-color:rgb(24 24 27 / 0.3);}
.rounded-lg[data-v-6151bb0d]{border-radius:0.5rem;}
.p-1[data-v-6151bb0d]{padding:0.25rem;}
.pl-4[data-v-6151bb0d]{padding-left:1rem;}
.pt-2[data-v-6151bb0d]{padding-top:0.5rem;}
.pt-4[data-v-6151bb0d]{padding-top:1rem;}
.text-\\[10px\\][data-v-6151bb0d]{font-size:10px;}
.text-\\[11px\\][data-v-6151bb0d]{font-size:11px;}
.text-xs[data-v-6151bb0d]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-6151bb0d],
.text-gray-400[data-v-6151bb0d]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-6151bb0d]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600[data-v-6151bb0d]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-6151bb0d]{font-weight:700;}
.tracking-wider[data-v-6151bb0d]{letter-spacing:0.05em;}
.uppercase[data-v-6151bb0d]{text-transform:uppercase;}/* layer: preflights */
[data-v-bbd87851],[data-v-bbd87851]::before,[data-v-bbd87851]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-bbd87851]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-bbd87851]{display:grid;}
.grid-cols-2[data-v-bbd87851]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-2[data-v-bbd87851]{margin-bottom:0.5rem;}
.block[data-v-bbd87851]{display:block;}
.w-full[data-v-bbd87851]{width:100%;}
.gap-4[data-v-bbd87851]{gap:1rem;}
.text-\\[11px\\][data-v-bbd87851]{font-size:11px;}
.text-gray-500[data-v-bbd87851]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-bbd87851]{font-weight:700;}
.tracking-wide[data-v-bbd87851]{letter-spacing:0.025em;}
.uppercase[data-v-bbd87851]{text-transform:uppercase;}/* layer: preflights */
[data-v-2eeaa6f8],[data-v-2eeaa6f8]::before,[data-v-2eeaa6f8]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-2eeaa6f8]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-2[data-v-2eeaa6f8]{margin-bottom:0.5rem;}
.block[data-v-2eeaa6f8]{display:block;}
.w-full[data-v-2eeaa6f8]{width:100%;}
.space-y-4[data-v-2eeaa6f8]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-2eeaa6f8]{font-size:11px;}
.text-gray-500[data-v-2eeaa6f8]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-2eeaa6f8]{font-weight:700;}
.tracking-wide[data-v-2eeaa6f8]{letter-spacing:0.025em;}
.uppercase[data-v-2eeaa6f8]{text-transform:uppercase;}/* layer: preflights */
[data-v-c347c405],[data-v-c347c405]::before,[data-v-c347c405]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c347c405]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-2[data-v-c347c405]{margin-bottom:0.5rem;}
.block[data-v-c347c405]{display:block;}
.w-full[data-v-c347c405]{width:100%;}
.space-y-4[data-v-c347c405]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-c347c405]{font-size:11px;}
.text-gray-500[data-v-c347c405]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-c347c405]{font-weight:700;}
.tracking-wide[data-v-c347c405]{letter-spacing:0.025em;}
.uppercase[data-v-c347c405]{text-transform:uppercase;}/* layer: preflights */
[data-v-0df3a525],[data-v-0df3a525]::before,[data-v-0df3a525]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-0df3a525]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-2[data-v-0df3a525]{margin-bottom:0.5rem;}
.block[data-v-0df3a525]{display:block;}
.w-full[data-v-0df3a525]{width:100%;}
.space-y-4[data-v-0df3a525]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-0df3a525]{font-size:11px;}
.text-gray-500[data-v-0df3a525]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-0df3a525]{font-weight:700;}
.tracking-wide[data-v-0df3a525]{letter-spacing:0.025em;}
.uppercase[data-v-0df3a525]{text-transform:uppercase;}/* layer: preflights */
[data-v-e6c5e432],[data-v-e6c5e432]::before,[data-v-e6c5e432]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e6c5e432]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-2[data-v-e6c5e432]{margin-bottom:0.5rem;}
.block[data-v-e6c5e432]{display:block;}
.w-full[data-v-e6c5e432]{width:100%;}
.space-y-4[data-v-e6c5e432]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-e6c5e432]{font-size:11px;}
.text-gray-500[data-v-e6c5e432]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-e6c5e432]{font-weight:700;}
.tracking-wide[data-v-e6c5e432]{letter-spacing:0.025em;}
.uppercase[data-v-e6c5e432]{text-transform:uppercase;}/* layer: preflights */
[data-v-0776fde2],[data-v-0776fde2]::before,[data-v-0776fde2]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-0776fde2]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.space-y-4[data-v-0776fde2]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}/* layer: preflights */
[data-v-067b6ac0],[data-v-067b6ac0]::before,[data-v-067b6ac0]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-067b6ac0]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-067b6ac0]{display:grid;}
.grid-cols-2[data-v-067b6ac0]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-2[data-v-067b6ac0]{margin-bottom:0.5rem;}
.block[data-v-067b6ac0]{display:block;}
.h-8[data-v-067b6ac0]{height:2rem;}
.w-12[data-v-067b6ac0]{width:3rem;}
.w-4[data-v-067b6ac0]{width:1rem;}
.w-8[data-v-067b6ac0]{width:2rem;}
.w-full[data-v-067b6ac0]{width:100%;}
.flex[data-v-067b6ac0]{display:flex;}
.flex-1[data-v-067b6ac0]{flex:1 1 0%;}
.cursor-pointer[data-v-067b6ac0]{cursor:pointer;}
.items-center[data-v-067b6ac0]{align-items:center;}
.gap-2[data-v-067b6ac0]{gap:0.5rem;}
.space-y-2[data-v-067b6ac0]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}
.space-y-6[data-v-067b6ac0]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border-0[data-v-067b6ac0]{border-width:0px;}
.rounded[data-v-067b6ac0]{border-radius:0.25rem;}
.p-0[data-v-067b6ac0]{padding:0;}
.px[data-v-067b6ac0]{padding-left:1rem;padding-right:1rem;}
.text-\\[10px\\][data-v-067b6ac0]{font-size:10px;}
.text-\\[11px\\][data-v-067b6ac0]{font-size:11px;}
.text-gray-400[data-v-067b6ac0]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-067b6ac0]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-067b6ac0]{font-weight:700;}
.tracking-wide[data-v-067b6ac0]{letter-spacing:0.025em;}
.uppercase[data-v-067b6ac0]{text-transform:uppercase;}/* layer: preflights */
[data-v-cecafc45],[data-v-cecafc45]::before,[data-v-cecafc45]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-cecafc45]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-cecafc45]{display:grid;}
.grid-cols-2[data-v-cecafc45]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-2[data-v-cecafc45]{margin-bottom:0.5rem;}
.block[data-v-cecafc45]{display:block;}
.w-full[data-v-cecafc45]{width:100%;}
.gap-4[data-v-cecafc45]{gap:1rem;}
.space-y-4[data-v-cecafc45]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-cecafc45]{font-size:11px;}
.text-gray-500[data-v-cecafc45]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-cecafc45]{font-weight:700;}
.tracking-wide[data-v-cecafc45]{letter-spacing:0.025em;}
.uppercase[data-v-cecafc45]{text-transform:uppercase;}/* layer: preflights */
[data-v-47ba5a99],[data-v-47ba5a99]::before,[data-v-47ba5a99]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-47ba5a99]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-47ba5a99]{display:grid;}
.grid-cols-2[data-v-47ba5a99]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-1[data-v-47ba5a99]{margin-bottom:0.25rem;}
.mb-2[data-v-47ba5a99]{margin-bottom:0.5rem;}
.mb-3[data-v-47ba5a99]{margin-bottom:0.75rem;}
.block[data-v-47ba5a99]{display:block;}
.w-full[data-v-47ba5a99]{width:100%;}
.flex[data-v-47ba5a99]{display:flex;}
.gap-4[data-v-47ba5a99]{gap:1rem;}
.space-y-4[data-v-47ba5a99]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.border-t[data-v-47ba5a99]{border-top-width:1px;}
.border-gray-100\\/30[data-v-47ba5a99]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-47ba5a99]{border-color:rgb(24 24 27 / 0.3);}
.pt-2[data-v-47ba5a99]{padding-top:0.5rem;}
.text-\\[10px\\][data-v-47ba5a99]{font-size:10px;}
.text-\\[11px\\][data-v-47ba5a99]{font-size:11px;}
.text-gray-400[data-v-47ba5a99]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-47ba5a99]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.font-bold[data-v-47ba5a99]{font-weight:700;}
.tracking-wide[data-v-47ba5a99]{letter-spacing:0.025em;}
.tracking-wider[data-v-47ba5a99]{letter-spacing:0.05em;}
.uppercase[data-v-47ba5a99]{text-transform:uppercase;}/* layer: preflights */
[data-v-59bf712e],[data-v-59bf712e]::before,[data-v-59bf712e]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-59bf712e]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.grid[data-v-59bf712e]{display:grid;}
.grid-cols-2[data-v-59bf712e]{grid-template-columns:repeat(2,minmax(0,1fr));}
.mb-1[data-v-59bf712e]{margin-bottom:0.25rem;}
.mb-3[data-v-59bf712e]{margin-bottom:0.75rem;}
.block[data-v-59bf712e]{display:block;}
.w-24[data-v-59bf712e]{width:6rem;}
.w-full[data-v-59bf712e]{width:100%;}
.flex[data-v-59bf712e]{display:flex;}
.items-center[data-v-59bf712e]{align-items:center;}
.justify-between[data-v-59bf712e]{justify-content:space-between;}
.gap-4[data-v-59bf712e]{gap:1rem;}
.space-y-3[data-v-59bf712e]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-59bf712e]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-59bf712e]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border-t[data-v-59bf712e]{border-top-width:1px;}
.border-gray-100\\/30[data-v-59bf712e]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-59bf712e]{border-color:rgb(24 24 27 / 0.3);}
.pt-4[data-v-59bf712e]{padding-top:1rem;}
.text-\\[10px\\][data-v-59bf712e]{font-size:10px;}
.text-\\[11px\\][data-v-59bf712e]{font-size:11px;}
.text-xs[data-v-59bf712e]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-59bf712e],
.text-gray-400[data-v-59bf712e]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-59bf712e]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-59bf712e]{font-weight:700;}
.tracking-wider[data-v-59bf712e]{letter-spacing:0.05em;}
.uppercase[data-v-59bf712e]{text-transform:uppercase;}/* layer: preflights */
[data-v-e7865a18],[data-v-e7865a18]::before,[data-v-e7865a18]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e7865a18]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-e7865a18]{margin-bottom:0.25rem;}
.mb-3[data-v-e7865a18]{margin-bottom:0.75rem;}
.mt-1[data-v-e7865a18]{margin-top:0.25rem;}
.block[data-v-e7865a18]{display:block;}
.w-24[data-v-e7865a18]{width:6rem;}
.flex[data-v-e7865a18]{display:flex;}
.items-center[data-v-e7865a18]{align-items:center;}
.justify-between[data-v-e7865a18]{justify-content:space-between;}
.space-y-4[data-v-e7865a18]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-e7865a18]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-e7865a18]{font-size:10px;}
.text-\\[11px\\][data-v-e7865a18]{font-size:11px;}
.text-xs[data-v-e7865a18]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-e7865a18],
.text-gray-400[data-v-e7865a18]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-e7865a18]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-e7865a18]{font-weight:700;}
.tracking-wider[data-v-e7865a18]{letter-spacing:0.05em;}
.uppercase[data-v-e7865a18]{text-transform:uppercase;}
.italic[data-v-e7865a18]{font-style:italic;}/* layer: preflights */
[data-v-4a81ccea],[data-v-4a81ccea]::before,[data-v-4a81ccea]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-4a81ccea]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-4a81ccea]{margin-bottom:0.25rem;}
.mb-3[data-v-4a81ccea]{margin-bottom:0.75rem;}
.block[data-v-4a81ccea]{display:block;}
.w-24[data-v-4a81ccea]{width:6rem;}
.flex[data-v-4a81ccea]{display:flex;}
.items-center[data-v-4a81ccea]{align-items:center;}
.justify-between[data-v-4a81ccea]{justify-content:space-between;}
.space-y-4[data-v-4a81ccea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-4a81ccea]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-4a81ccea]{font-size:10px;}
.text-\\[11px\\][data-v-4a81ccea]{font-size:11px;}
.text-xs[data-v-4a81ccea]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-4a81ccea],
.text-gray-400[data-v-4a81ccea]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-4a81ccea]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-4a81ccea]{font-weight:700;}
.tracking-wider[data-v-4a81ccea]{letter-spacing:0.05em;}
.uppercase[data-v-4a81ccea]{text-transform:uppercase;}/* layer: preflights */
[data-v-1e4ff375],[data-v-1e4ff375]::before,[data-v-1e4ff375]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-1e4ff375]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-1e4ff375]{margin-bottom:0.25rem;}
.mb-3[data-v-1e4ff375]{margin-bottom:0.75rem;}
.mr-1[data-v-1e4ff375]{margin-right:0.25rem;}
.block[data-v-1e4ff375]{display:block;}
.w-24[data-v-1e4ff375]{width:6rem;}
.flex[data-v-1e4ff375]{display:flex;}
.flex-1[data-v-1e4ff375]{flex:1 1 0%;}
.items-center[data-v-1e4ff375]{align-items:center;}
.justify-between[data-v-1e4ff375]{justify-content:space-between;}
.gap-2[data-v-1e4ff375]{gap:0.5rem;}
.space-y-3[data-v-1e4ff375]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-1e4ff375]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-1e4ff375]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-1e4ff375]{font-size:10px;}
.text-\\[11px\\][data-v-1e4ff375]{font-size:11px;}
.text-xs[data-v-1e4ff375]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-1e4ff375],
.text-gray-400[data-v-1e4ff375]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-1e4ff375]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-1e4ff375]{font-weight:700;}
.tracking-wider[data-v-1e4ff375]{letter-spacing:0.05em;}
.uppercase[data-v-1e4ff375]{text-transform:uppercase;}/* layer: preflights */
[data-v-c85903ff],[data-v-c85903ff]::before,[data-v-c85903ff]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c85903ff]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-c85903ff]{margin-bottom:0.25rem;}
.mb-3[data-v-c85903ff]{margin-bottom:0.75rem;}
.mr-1[data-v-c85903ff]{margin-right:0.25rem;}
.block[data-v-c85903ff]{display:block;}
.w-24[data-v-c85903ff]{width:6rem;}
.flex[data-v-c85903ff]{display:flex;}
.flex-1[data-v-c85903ff]{flex:1 1 0%;}
.items-center[data-v-c85903ff]{align-items:center;}
.justify-between[data-v-c85903ff]{justify-content:space-between;}
.gap-2[data-v-c85903ff]{gap:0.5rem;}
.space-y-3[data-v-c85903ff]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-c85903ff]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-c85903ff]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-c85903ff]{font-size:10px;}
.text-\\[11px\\][data-v-c85903ff]{font-size:11px;}
.text-xs[data-v-c85903ff]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-c85903ff],
.text-gray-400[data-v-c85903ff]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-c85903ff]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-c85903ff]{font-weight:700;}
.tracking-wider[data-v-c85903ff]{letter-spacing:0.05em;}
.uppercase[data-v-c85903ff]{text-transform:uppercase;}/* layer: preflights */
[data-v-c6c3d2e3],[data-v-c6c3d2e3]::before,[data-v-c6c3d2e3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c6c3d2e3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-c6c3d2e3]{margin-bottom:0.25rem;}
.mb-3[data-v-c6c3d2e3]{margin-bottom:0.75rem;}
.mr-1[data-v-c6c3d2e3]{margin-right:0.25rem;}
.block[data-v-c6c3d2e3]{display:block;}
.w-24[data-v-c6c3d2e3]{width:6rem;}
.flex[data-v-c6c3d2e3]{display:flex;}
.flex-1[data-v-c6c3d2e3]{flex:1 1 0%;}
.flex-col[data-v-c6c3d2e3]{flex-direction:column;}
.items-center[data-v-c6c3d2e3]{align-items:center;}
.justify-between[data-v-c6c3d2e3]{justify-content:space-between;}
.gap-2[data-v-c6c3d2e3]{gap:0.5rem;}
.space-y-3[data-v-c6c3d2e3]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-c6c3d2e3]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-c6c3d2e3]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border[data-v-c6c3d2e3]{border-width:1px;}
.border-gray-100\\/30[data-v-c6c3d2e3]{border-color:rgb(243 244 246 / 0.3);}
.rounded-lg[data-v-c6c3d2e3]{border-radius:0.5rem;}
.p-2[data-v-c6c3d2e3]{padding:0.5rem;}
.text-\\[10px\\][data-v-c6c3d2e3]{font-size:10px;}
.text-\\[11px\\][data-v-c6c3d2e3]{font-size:11px;}
.text-xs[data-v-c6c3d2e3]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-c6c3d2e3],
.text-gray-400[data-v-c6c3d2e3]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-c6c3d2e3]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-c6c3d2e3]{font-weight:700;}
.tracking-wider[data-v-c6c3d2e3]{letter-spacing:0.05em;}
.uppercase[data-v-c6c3d2e3]{text-transform:uppercase;}
.tab[data-v-c6c3d2e3]{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}/* layer: preflights */
[data-v-8b8464ef],[data-v-8b8464ef]::before,[data-v-8b8464ef]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-8b8464ef]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-8b8464ef]{margin-bottom:0.25rem;}
.mb-3[data-v-8b8464ef]{margin-bottom:0.75rem;}
.mr-1[data-v-8b8464ef]{margin-right:0.25rem;}
.inline[data-v-8b8464ef]{display:inline;}
.block[data-v-8b8464ef]{display:block;}
.w-24[data-v-8b8464ef]{width:6rem;}
.flex[data-v-8b8464ef]{display:flex;}
.flex-1[data-v-8b8464ef]{flex:1 1 0%;}
.items-center[data-v-8b8464ef]{align-items:center;}
.justify-between[data-v-8b8464ef]{justify-content:space-between;}
.gap-2[data-v-8b8464ef]{gap:0.5rem;}
.space-y-3[data-v-8b8464ef]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-8b8464ef]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-8b8464ef]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-8b8464ef]{font-size:10px;}
.text-\\[11px\\][data-v-8b8464ef]{font-size:11px;}
.text-xs[data-v-8b8464ef]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-8b8464ef],
.text-gray-400[data-v-8b8464ef]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-8b8464ef]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-8b8464ef]{font-weight:700;}
.tracking-wider[data-v-8b8464ef]{letter-spacing:0.05em;}
.uppercase[data-v-8b8464ef]{text-transform:uppercase;}/* layer: preflights */
[data-v-a315a09c],[data-v-a315a09c]::before,[data-v-a315a09c]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-a315a09c]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-a315a09c]{margin-bottom:0.75rem;}
.w-24[data-v-a315a09c]{width:6rem;}
.flex[data-v-a315a09c]{display:flex;}
.items-center[data-v-a315a09c]{align-items:center;}
.justify-between[data-v-a315a09c]{justify-content:space-between;}
.space-y-4[data-v-a315a09c]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-a315a09c]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-a315a09c]{font-size:11px;}
.text-xs[data-v-a315a09c]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-a315a09c],
.text-gray-400[data-v-a315a09c]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-a315a09c]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-a315a09c]{font-weight:700;}
.tracking-wider[data-v-a315a09c]{letter-spacing:0.05em;}
.uppercase[data-v-a315a09c]{text-transform:uppercase;}/* layer: preflights */
[data-v-8f74f55f],[data-v-8f74f55f]::before,[data-v-8f74f55f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-8f74f55f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-8f74f55f]{margin-bottom:0.25rem;}
.mb-3[data-v-8f74f55f]{margin-bottom:0.75rem;}
.block[data-v-8f74f55f]{display:block;}
.flex[data-v-8f74f55f]{display:flex;}
.items-center[data-v-8f74f55f]{align-items:center;}
.justify-between[data-v-8f74f55f]{justify-content:space-between;}
.space-y-4[data-v-8f74f55f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-8f74f55f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-8f74f55f]{font-size:10px;}
.text-\\[11px\\][data-v-8f74f55f]{font-size:11px;}
.text-xs[data-v-8f74f55f]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-8f74f55f],
.text-gray-400[data-v-8f74f55f]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-8f74f55f]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-8f74f55f]{font-weight:700;}
.tracking-wider[data-v-8f74f55f]{letter-spacing:0.05em;}
.uppercase[data-v-8f74f55f]{text-transform:uppercase;}/* layer: preflights */
[data-v-2c5d2209],[data-v-2c5d2209]::before,[data-v-2c5d2209]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-2c5d2209]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-2c5d2209]{margin-bottom:0.25rem;}
.mb-3[data-v-2c5d2209]{margin-bottom:0.75rem;}
.block[data-v-2c5d2209]{display:block;}
.flex[data-v-2c5d2209]{display:flex;}
.items-center[data-v-2c5d2209]{align-items:center;}
.justify-between[data-v-2c5d2209]{justify-content:space-between;}
.space-y-4[data-v-2c5d2209]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-2c5d2209]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-2c5d2209]{font-size:10px;}
.text-\\[11px\\][data-v-2c5d2209]{font-size:11px;}
.text-xs[data-v-2c5d2209]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-2c5d2209],
.text-gray-400[data-v-2c5d2209]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-2c5d2209]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-2c5d2209]{font-weight:700;}
.tracking-wider[data-v-2c5d2209]{letter-spacing:0.05em;}
.uppercase[data-v-2c5d2209]{text-transform:uppercase;}/* layer: preflights */
[data-v-e26e0c69],[data-v-e26e0c69]::before,[data-v-e26e0c69]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e26e0c69]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-e26e0c69]{margin-bottom:0.25rem;}
.mb-3[data-v-e26e0c69]{margin-bottom:0.75rem;}
.mr-1[data-v-e26e0c69]{margin-right:0.25rem;}
.block[data-v-e26e0c69]{display:block;}
.flex[data-v-e26e0c69]{display:flex;}
.flex-1[data-v-e26e0c69]{flex:1 1 0%;}
.flex-col[data-v-e26e0c69]{flex-direction:column;}
.items-center[data-v-e26e0c69]{align-items:center;}
.justify-between[data-v-e26e0c69]{justify-content:space-between;}
.gap-2[data-v-e26e0c69]{gap:0.5rem;}
.space-y-3[data-v-e26e0c69]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-e26e0c69]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-e26e0c69]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.border[data-v-e26e0c69]{border-width:1px;}
.border-gray-100\\/30[data-v-e26e0c69]{border-color:rgb(243 244 246 / 0.3);}
.rounded-lg[data-v-e26e0c69]{border-radius:0.5rem;}
.p-2[data-v-e26e0c69]{padding:0.5rem;}
.text-\\[10px\\][data-v-e26e0c69]{font-size:10px;}
.text-\\[11px\\][data-v-e26e0c69]{font-size:11px;}
.text-xs[data-v-e26e0c69]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-e26e0c69],
.text-gray-400[data-v-e26e0c69]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-e26e0c69]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-e26e0c69]{font-weight:700;}
.tracking-wider[data-v-e26e0c69]{letter-spacing:0.05em;}
.uppercase[data-v-e26e0c69]{text-transform:uppercase;}/* layer: preflights */
[data-v-778b6f87],[data-v-778b6f87]::before,[data-v-778b6f87]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-778b6f87]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-778b6f87]{margin-bottom:0.25rem;}
.mb-3[data-v-778b6f87]{margin-bottom:0.75rem;}
.mr-1[data-v-778b6f87]{margin-right:0.25rem;}
.block[data-v-778b6f87]{display:block;}
.w-24[data-v-778b6f87]{width:6rem;}
.flex[data-v-778b6f87]{display:flex;}
.flex-1[data-v-778b6f87]{flex:1 1 0%;}
.items-center[data-v-778b6f87]{align-items:center;}
.justify-between[data-v-778b6f87]{justify-content:space-between;}
.gap-2[data-v-778b6f87]{gap:0.5rem;}
.space-y-3[data-v-778b6f87]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-778b6f87]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-778b6f87]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-778b6f87]{font-size:10px;}
.text-\\[11px\\][data-v-778b6f87]{font-size:11px;}
.text-xs[data-v-778b6f87]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-778b6f87],
.text-gray-400[data-v-778b6f87]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-778b6f87]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-778b6f87]{font-weight:700;}
.tracking-wider[data-v-778b6f87]{letter-spacing:0.05em;}
.uppercase[data-v-778b6f87]{text-transform:uppercase;}/* layer: preflights */
[data-v-6aa85969],[data-v-6aa85969]::before,[data-v-6aa85969]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-6aa85969]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-6aa85969]{margin-bottom:0.25rem;}
.mb-3[data-v-6aa85969]{margin-bottom:0.75rem;}
.block[data-v-6aa85969]{display:block;}
.flex[data-v-6aa85969]{display:flex;}
.items-center[data-v-6aa85969]{align-items:center;}
.justify-between[data-v-6aa85969]{justify-content:space-between;}
.space-y-4[data-v-6aa85969]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-6aa85969]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-6aa85969]{font-size:10px;}
.text-\\[11px\\][data-v-6aa85969]{font-size:11px;}
.text-xs[data-v-6aa85969]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-6aa85969],
.text-gray-400[data-v-6aa85969]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-6aa85969]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-6aa85969]{font-weight:700;}
.tracking-wider[data-v-6aa85969]{letter-spacing:0.05em;}
.uppercase[data-v-6aa85969]{text-transform:uppercase;}/* layer: preflights */
[data-v-e0b7236f],[data-v-e0b7236f]::before,[data-v-e0b7236f]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e0b7236f]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-e0b7236f]{margin-bottom:0.25rem;}
.mb-3[data-v-e0b7236f]{margin-bottom:0.75rem;}
.mr-1[data-v-e0b7236f]{margin-right:0.25rem;}
.block[data-v-e0b7236f]{display:block;}
.w-24[data-v-e0b7236f]{width:6rem;}
.flex[data-v-e0b7236f]{display:flex;}
.flex-1[data-v-e0b7236f]{flex:1 1 0%;}
.items-center[data-v-e0b7236f]{align-items:center;}
.justify-between[data-v-e0b7236f]{justify-content:space-between;}
.gap-2[data-v-e0b7236f]{gap:0.5rem;}
.space-y-3[data-v-e0b7236f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4[data-v-e0b7236f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-e0b7236f]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-e0b7236f]{font-size:10px;}
.text-\\[11px\\][data-v-e0b7236f]{font-size:11px;}
.text-xs[data-v-e0b7236f]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-e0b7236f],
.text-gray-400[data-v-e0b7236f]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-e0b7236f]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-e0b7236f]{font-weight:700;}
.tracking-wider[data-v-e0b7236f]{letter-spacing:0.05em;}
.uppercase[data-v-e0b7236f]{text-transform:uppercase;}/* layer: preflights */
[data-v-9b604f81],[data-v-9b604f81]::before,[data-v-9b604f81]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-9b604f81]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-9b604f81]{margin-bottom:0.75rem;}
.w-24[data-v-9b604f81]{width:6rem;}
.flex[data-v-9b604f81]{display:flex;}
.items-center[data-v-9b604f81]{align-items:center;}
.justify-between[data-v-9b604f81]{justify-content:space-between;}
.space-y-4[data-v-9b604f81]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-9b604f81]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-9b604f81]{font-size:11px;}
.text-xs[data-v-9b604f81]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-9b604f81],
.text-gray-400[data-v-9b604f81]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-9b604f81]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-9b604f81]{font-weight:700;}
.tracking-wider[data-v-9b604f81]{letter-spacing:0.05em;}
.uppercase[data-v-9b604f81]{text-transform:uppercase;}/* layer: preflights */
[data-v-c4d69d52],[data-v-c4d69d52]::before,[data-v-c4d69d52]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c4d69d52]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-c4d69d52]{margin-bottom:0.75rem;}
.flex[data-v-c4d69d52]{display:flex;}
.items-center[data-v-c4d69d52]{align-items:center;}
.justify-between[data-v-c4d69d52]{justify-content:space-between;}
.space-y-4[data-v-c4d69d52]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-c4d69d52]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-c4d69d52]{font-size:11px;}
.text-xs[data-v-c4d69d52]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-c4d69d52],
.text-gray-400[data-v-c4d69d52]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-c4d69d52]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-c4d69d52]{font-weight:700;}
.tracking-wider[data-v-c4d69d52]{letter-spacing:0.05em;}
.uppercase[data-v-c4d69d52]{text-transform:uppercase;}/* layer: preflights */
[data-v-85427120],[data-v-85427120]::before,[data-v-85427120]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-85427120]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-85427120]{margin-bottom:0.75rem;}
.flex[data-v-85427120]{display:flex;}
.items-center[data-v-85427120]{align-items:center;}
.justify-between[data-v-85427120]{justify-content:space-between;}
.space-y-4[data-v-85427120]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-85427120]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-85427120]{font-size:11px;}
.text-xs[data-v-85427120]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-85427120],
.text-gray-400[data-v-85427120]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-85427120]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-85427120]{font-weight:700;}
.tracking-wider[data-v-85427120]{letter-spacing:0.05em;}
.uppercase[data-v-85427120]{text-transform:uppercase;}/* layer: preflights */
[data-v-dbfd43a0],[data-v-dbfd43a0]::before,[data-v-dbfd43a0]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-dbfd43a0]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-dbfd43a0]{margin-bottom:0.75rem;}
.w-24[data-v-dbfd43a0]{width:6rem;}
.flex[data-v-dbfd43a0]{display:flex;}
.items-center[data-v-dbfd43a0]{align-items:center;}
.justify-between[data-v-dbfd43a0]{justify-content:space-between;}
.space-y-4[data-v-dbfd43a0]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-dbfd43a0]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-dbfd43a0]{font-size:11px;}
.text-xs[data-v-dbfd43a0]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-dbfd43a0],
.text-gray-400[data-v-dbfd43a0]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-dbfd43a0]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-dbfd43a0]{font-weight:700;}
.tracking-wider[data-v-dbfd43a0]{letter-spacing:0.05em;}
.uppercase[data-v-dbfd43a0]{text-transform:uppercase;}/* layer: preflights */
[data-v-20e2d497],[data-v-20e2d497]::before,[data-v-20e2d497]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-20e2d497]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-20e2d497]{margin-bottom:0.75rem;}
.inline[data-v-20e2d497]{display:inline;}
.w-24[data-v-20e2d497]{width:6rem;}
.flex[data-v-20e2d497]{display:flex;}
.items-center[data-v-20e2d497]{align-items:center;}
.justify-between[data-v-20e2d497]{justify-content:space-between;}
.space-y-4[data-v-20e2d497]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-20e2d497]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-20e2d497]{font-size:11px;}
.text-xs[data-v-20e2d497]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-20e2d497],
.text-gray-400[data-v-20e2d497]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-20e2d497]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-20e2d497]{font-weight:700;}
.tracking-wider[data-v-20e2d497]{letter-spacing:0.05em;}
.uppercase[data-v-20e2d497]{text-transform:uppercase;}/* layer: preflights */
[data-v-b922c2ff],[data-v-b922c2ff]::before,[data-v-b922c2ff]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-b922c2ff]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-b922c2ff]{margin-bottom:0.75rem;}
.flex[data-v-b922c2ff]{display:flex;}
.items-center[data-v-b922c2ff]{align-items:center;}
.justify-between[data-v-b922c2ff]{justify-content:space-between;}
.space-y-4[data-v-b922c2ff]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-b922c2ff]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-b922c2ff]{font-size:11px;}
.text-xs[data-v-b922c2ff]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-b922c2ff],
.text-gray-400[data-v-b922c2ff]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-b922c2ff]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-b922c2ff]{font-weight:700;}
.tracking-wider[data-v-b922c2ff]{letter-spacing:0.05em;}
.uppercase[data-v-b922c2ff]{text-transform:uppercase;}/* layer: preflights */
[data-v-66ec1fcf],[data-v-66ec1fcf]::before,[data-v-66ec1fcf]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-66ec1fcf]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-66ec1fcf]{margin-bottom:0.75rem;}
.w-24[data-v-66ec1fcf]{width:6rem;}
.flex[data-v-66ec1fcf]{display:flex;}
.items-center[data-v-66ec1fcf]{align-items:center;}
.justify-between[data-v-66ec1fcf]{justify-content:space-between;}
.space-y-4[data-v-66ec1fcf]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-66ec1fcf]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-66ec1fcf]{font-size:11px;}
.text-xs[data-v-66ec1fcf]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-66ec1fcf],
.text-gray-400[data-v-66ec1fcf]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-66ec1fcf]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-66ec1fcf]{font-weight:700;}
.tracking-wider[data-v-66ec1fcf]{letter-spacing:0.05em;}
.uppercase[data-v-66ec1fcf]{text-transform:uppercase;}/* layer: preflights */
[data-v-0429c12c],[data-v-0429c12c]::before,[data-v-0429c12c]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-0429c12c]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-0429c12c]{margin-bottom:0.75rem;}
.w-24[data-v-0429c12c]{width:6rem;}
.flex[data-v-0429c12c]{display:flex;}
.items-center[data-v-0429c12c]{align-items:center;}
.justify-between[data-v-0429c12c]{justify-content:space-between;}
.space-y-4[data-v-0429c12c]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-0429c12c]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-0429c12c]{font-size:11px;}
.text-xs[data-v-0429c12c]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-0429c12c],
.text-gray-400[data-v-0429c12c]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-0429c12c]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-0429c12c]{font-weight:700;}
.tracking-wider[data-v-0429c12c]{letter-spacing:0.05em;}
.uppercase[data-v-0429c12c]{text-transform:uppercase;}/* layer: preflights */
[data-v-094420f0],[data-v-094420f0]::before,[data-v-094420f0]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-094420f0]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-094420f0]{margin-bottom:0.75rem;}
.w-24[data-v-094420f0]{width:6rem;}
.flex[data-v-094420f0]{display:flex;}
.items-center[data-v-094420f0]{align-items:center;}
.justify-between[data-v-094420f0]{justify-content:space-between;}
.space-y-4[data-v-094420f0]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-094420f0]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-094420f0]{font-size:11px;}
.text-xs[data-v-094420f0]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-094420f0],
.text-gray-400[data-v-094420f0]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-094420f0]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-094420f0]{font-weight:700;}
.tracking-wider[data-v-094420f0]{letter-spacing:0.05em;}
.uppercase[data-v-094420f0]{text-transform:uppercase;}/* layer: preflights */
[data-v-00f6c0fb],[data-v-00f6c0fb]::before,[data-v-00f6c0fb]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-00f6c0fb]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-00f6c0fb]{margin-bottom:0.75rem;}
.w-24[data-v-00f6c0fb]{width:6rem;}
.flex[data-v-00f6c0fb]{display:flex;}
.items-center[data-v-00f6c0fb]{align-items:center;}
.justify-between[data-v-00f6c0fb]{justify-content:space-between;}
.space-y-4[data-v-00f6c0fb]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-00f6c0fb]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-00f6c0fb]{font-size:11px;}
.text-xs[data-v-00f6c0fb]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-00f6c0fb],
.text-gray-400[data-v-00f6c0fb]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-00f6c0fb]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-00f6c0fb]{font-weight:700;}
.tracking-wider[data-v-00f6c0fb]{letter-spacing:0.05em;}
.uppercase[data-v-00f6c0fb]{text-transform:uppercase;}/* layer: preflights */
[data-v-99afbf4b],[data-v-99afbf4b]::before,[data-v-99afbf4b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-99afbf4b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-99afbf4b]{margin-bottom:0.75rem;}
.flex[data-v-99afbf4b]{display:flex;}
.items-center[data-v-99afbf4b]{align-items:center;}
.justify-between[data-v-99afbf4b]{justify-content:space-between;}
.space-y-4[data-v-99afbf4b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-99afbf4b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-99afbf4b]{font-size:11px;}
.text-xs[data-v-99afbf4b]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-99afbf4b],
.text-gray-400[data-v-99afbf4b]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-99afbf4b]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-99afbf4b]{font-weight:700;}
.tracking-wider[data-v-99afbf4b]{letter-spacing:0.05em;}
.uppercase[data-v-99afbf4b]{text-transform:uppercase;}/* layer: preflights */
[data-v-aa09f3ba],[data-v-aa09f3ba]::before,[data-v-aa09f3ba]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-aa09f3ba]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-aa09f3ba]{margin-bottom:0.75rem;}
.flex[data-v-aa09f3ba]{display:flex;}
.items-center[data-v-aa09f3ba]{align-items:center;}
.justify-between[data-v-aa09f3ba]{justify-content:space-between;}
.space-y-4[data-v-aa09f3ba]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-aa09f3ba]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-aa09f3ba]{font-size:11px;}
.text-xs[data-v-aa09f3ba]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-aa09f3ba],
.text-gray-400[data-v-aa09f3ba]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-aa09f3ba]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-aa09f3ba]{font-weight:700;}
.tracking-wider[data-v-aa09f3ba]{letter-spacing:0.05em;}
.uppercase[data-v-aa09f3ba]{text-transform:uppercase;}/* layer: preflights */
[data-v-a8d8a894],[data-v-a8d8a894]::before,[data-v-a8d8a894]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-a8d8a894]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-a8d8a894]{margin-bottom:0.75rem;}
.w-24[data-v-a8d8a894]{width:6rem;}
.flex[data-v-a8d8a894]{display:flex;}
.items-center[data-v-a8d8a894]{align-items:center;}
.justify-between[data-v-a8d8a894]{justify-content:space-between;}
.space-y-4[data-v-a8d8a894]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-a8d8a894]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-a8d8a894]{font-size:11px;}
.text-xs[data-v-a8d8a894]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-a8d8a894],
.text-gray-400[data-v-a8d8a894]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-a8d8a894]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-a8d8a894]{font-weight:700;}
.tracking-wider[data-v-a8d8a894]{letter-spacing:0.05em;}
.uppercase[data-v-a8d8a894]{text-transform:uppercase;}/* layer: preflights */
[data-v-3424791b],[data-v-3424791b]::before,[data-v-3424791b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-3424791b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-3424791b]{margin-bottom:0.25rem;}
.mb-3[data-v-3424791b]{margin-bottom:0.75rem;}
.block[data-v-3424791b]{display:block;}
.w-24[data-v-3424791b]{width:6rem;}
.flex[data-v-3424791b]{display:flex;}
.items-center[data-v-3424791b]{align-items:center;}
.justify-between[data-v-3424791b]{justify-content:space-between;}
.space-y-4[data-v-3424791b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-3424791b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-3424791b]{font-size:10px;}
.text-\\[11px\\][data-v-3424791b]{font-size:11px;}
.text-xs[data-v-3424791b]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-3424791b],
.text-gray-400[data-v-3424791b]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-3424791b]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-3424791b]{font-weight:700;}
.tracking-wider[data-v-3424791b]{letter-spacing:0.05em;}
.uppercase[data-v-3424791b]{text-transform:uppercase;}/* layer: preflights */
[data-v-88756b62],[data-v-88756b62]::before,[data-v-88756b62]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-88756b62]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-88756b62]{margin-bottom:0.75rem;}
.w-24[data-v-88756b62]{width:6rem;}
.flex[data-v-88756b62]{display:flex;}
.items-center[data-v-88756b62]{align-items:center;}
.justify-between[data-v-88756b62]{justify-content:space-between;}
.space-y-4[data-v-88756b62]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-88756b62]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-88756b62]{font-size:11px;}
.text-xs[data-v-88756b62]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-88756b62],
.text-gray-400[data-v-88756b62]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-88756b62]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-88756b62]{font-weight:700;}
.tracking-wider[data-v-88756b62]{letter-spacing:0.05em;}
.uppercase[data-v-88756b62]{text-transform:uppercase;}/* layer: preflights */
[data-v-3f5e85ed],[data-v-3f5e85ed]::before,[data-v-3f5e85ed]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-3f5e85ed]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-3f5e85ed]{margin-bottom:0.75rem;}
.flex[data-v-3f5e85ed]{display:flex;}
.items-center[data-v-3f5e85ed]{align-items:center;}
.justify-between[data-v-3f5e85ed]{justify-content:space-between;}
.space-y-4[data-v-3f5e85ed]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-3f5e85ed]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-3f5e85ed]{font-size:11px;}
.text-xs[data-v-3f5e85ed]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-3f5e85ed],
.text-gray-400[data-v-3f5e85ed]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-3f5e85ed]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-3f5e85ed]{font-weight:700;}
.tracking-wider[data-v-3f5e85ed]{letter-spacing:0.05em;}
.uppercase[data-v-3f5e85ed]{text-transform:uppercase;}/* layer: preflights */
[data-v-6294fa8b],[data-v-6294fa8b]::before,[data-v-6294fa8b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-6294fa8b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-6294fa8b]{margin-bottom:0.75rem;}
.w-24[data-v-6294fa8b]{width:6rem;}
.flex[data-v-6294fa8b]{display:flex;}
.items-center[data-v-6294fa8b]{align-items:center;}
.justify-between[data-v-6294fa8b]{justify-content:space-between;}
.space-y-4[data-v-6294fa8b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-6294fa8b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-6294fa8b]{font-size:11px;}
.text-xs[data-v-6294fa8b]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-6294fa8b],
.text-gray-400[data-v-6294fa8b]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-6294fa8b]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-6294fa8b]{font-weight:700;}
.tracking-wider[data-v-6294fa8b]{letter-spacing:0.05em;}
.uppercase[data-v-6294fa8b]{text-transform:uppercase;}/* layer: preflights */
[data-v-3b6c528b],[data-v-3b6c528b]::before,[data-v-3b6c528b]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-3b6c528b]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-3b6c528b]{margin-bottom:0.25rem;}
.mb-3[data-v-3b6c528b]{margin-bottom:0.75rem;}
.block[data-v-3b6c528b]{display:block;}
.space-y-4[data-v-3b6c528b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-3b6c528b]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-3b6c528b]{font-size:10px;}
.text-\\[11px\\][data-v-3b6c528b]{font-size:11px;}
.text-gray-400[data-v-3b6c528b]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.font-bold[data-v-3b6c528b]{font-weight:700;}
.tracking-wider[data-v-3b6c528b]{letter-spacing:0.05em;}
.uppercase[data-v-3b6c528b]{text-transform:uppercase;}/* layer: preflights */
[data-v-e6a51081],[data-v-e6a51081]::before,[data-v-e6a51081]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e6a51081]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-e6a51081]{margin-bottom:0.25rem;}
.mb-3[data-v-e6a51081]{margin-bottom:0.75rem;}
.block[data-v-e6a51081]{display:block;}
.w-24[data-v-e6a51081]{width:6rem;}
.flex[data-v-e6a51081]{display:flex;}
.items-center[data-v-e6a51081]{align-items:center;}
.justify-between[data-v-e6a51081]{justify-content:space-between;}
.space-y-4[data-v-e6a51081]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-e6a51081]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-e6a51081]{font-size:10px;}
.text-\\[11px\\][data-v-e6a51081]{font-size:11px;}
.text-xs[data-v-e6a51081]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-e6a51081],
.text-gray-400[data-v-e6a51081]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-e6a51081]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-e6a51081]{font-weight:700;}
.tracking-wider[data-v-e6a51081]{letter-spacing:0.05em;}
.uppercase[data-v-e6a51081]{text-transform:uppercase;}/* layer: preflights */
[data-v-c20b2652],[data-v-c20b2652]::before,[data-v-c20b2652]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c20b2652]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-c20b2652]{margin-bottom:0.25rem;}
.mb-3[data-v-c20b2652]{margin-bottom:0.75rem;}
.block[data-v-c20b2652]{display:block;}
.space-y-4[data-v-c20b2652]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-c20b2652]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-c20b2652]{font-size:10px;}
.text-\\[11px\\][data-v-c20b2652]{font-size:11px;}
.text-gray-400[data-v-c20b2652]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.font-bold[data-v-c20b2652]{font-weight:700;}
.tracking-wider[data-v-c20b2652]{letter-spacing:0.05em;}
.uppercase[data-v-c20b2652]{text-transform:uppercase;}/* layer: preflights */
[data-v-e081f3b9],[data-v-e081f3b9]::before,[data-v-e081f3b9]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-e081f3b9]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-e081f3b9]{margin-bottom:0.75rem;}
.w-24[data-v-e081f3b9]{width:6rem;}
.flex[data-v-e081f3b9]{display:flex;}
.items-center[data-v-e081f3b9]{align-items:center;}
.justify-between[data-v-e081f3b9]{justify-content:space-between;}
.space-y-4[data-v-e081f3b9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-e081f3b9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-e081f3b9]{font-size:11px;}
.text-xs[data-v-e081f3b9]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-e081f3b9],
.text-gray-400[data-v-e081f3b9]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-e081f3b9]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-e081f3b9]{font-weight:700;}
.tracking-wider[data-v-e081f3b9]{letter-spacing:0.05em;}
.uppercase[data-v-e081f3b9]{text-transform:uppercase;}/* layer: preflights */
[data-v-23bb6a0a],[data-v-23bb6a0a]::before,[data-v-23bb6a0a]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-23bb6a0a]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-23bb6a0a]{margin-bottom:0.25rem;}
.mb-3[data-v-23bb6a0a]{margin-bottom:0.75rem;}
.block[data-v-23bb6a0a]{display:block;}
.w-24[data-v-23bb6a0a]{width:6rem;}
.flex[data-v-23bb6a0a]{display:flex;}
.items-center[data-v-23bb6a0a]{align-items:center;}
.justify-between[data-v-23bb6a0a]{justify-content:space-between;}
.space-y-4[data-v-23bb6a0a]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-23bb6a0a]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-23bb6a0a]{font-size:10px;}
.text-\\[11px\\][data-v-23bb6a0a]{font-size:11px;}
.text-xs[data-v-23bb6a0a]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-23bb6a0a],
.text-gray-400[data-v-23bb6a0a]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-23bb6a0a]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-23bb6a0a]{font-weight:700;}
.tracking-wider[data-v-23bb6a0a]{letter-spacing:0.05em;}
.uppercase[data-v-23bb6a0a]{text-transform:uppercase;}/* layer: preflights */
[data-v-511a87a8],[data-v-511a87a8]::before,[data-v-511a87a8]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-511a87a8]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-511a87a8]{margin-bottom:0.25rem;}
.mb-3[data-v-511a87a8]{margin-bottom:0.75rem;}
.block[data-v-511a87a8]{display:block;}
.w-24[data-v-511a87a8]{width:6rem;}
.flex[data-v-511a87a8]{display:flex;}
.items-center[data-v-511a87a8]{align-items:center;}
.justify-between[data-v-511a87a8]{justify-content:space-between;}
.space-y-4[data-v-511a87a8]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-511a87a8]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-511a87a8]{font-size:10px;}
.text-\\[11px\\][data-v-511a87a8]{font-size:11px;}
.text-xs[data-v-511a87a8]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-511a87a8],
.text-gray-400[data-v-511a87a8]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-511a87a8]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-511a87a8]{font-weight:700;}
.tracking-wider[data-v-511a87a8]{letter-spacing:0.05em;}
.uppercase[data-v-511a87a8]{text-transform:uppercase;}/* layer: preflights */
[data-v-320bc446],[data-v-320bc446]::before,[data-v-320bc446]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-320bc446]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-320bc446]{margin-bottom:0.75rem;}
.flex[data-v-320bc446]{display:flex;}
.items-center[data-v-320bc446]{align-items:center;}
.justify-between[data-v-320bc446]{justify-content:space-between;}
.space-y-4[data-v-320bc446]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-320bc446]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-320bc446]{font-size:11px;}
.text-xs[data-v-320bc446]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-320bc446],
.text-gray-400[data-v-320bc446]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-320bc446]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-320bc446]{font-weight:700;}
.tracking-wider[data-v-320bc446]{letter-spacing:0.05em;}
.uppercase[data-v-320bc446]{text-transform:uppercase;}
.outline[data-v-320bc446]{outline-style:solid;}/* layer: preflights */
[data-v-97714ee9],[data-v-97714ee9]::before,[data-v-97714ee9]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-97714ee9]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-97714ee9]{margin-bottom:0.75rem;}
.flex[data-v-97714ee9]{display:flex;}
.items-center[data-v-97714ee9]{align-items:center;}
.justify-between[data-v-97714ee9]{justify-content:space-between;}
.space-y-4[data-v-97714ee9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-97714ee9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-97714ee9]{font-size:11px;}
.text-xs[data-v-97714ee9]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-97714ee9],
.text-gray-400[data-v-97714ee9]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-97714ee9]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-97714ee9]{font-weight:700;}
.tracking-wider[data-v-97714ee9]{letter-spacing:0.05em;}
.uppercase[data-v-97714ee9]{text-transform:uppercase;}/* layer: preflights */
[data-v-b11debee],[data-v-b11debee]::before,[data-v-b11debee]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-b11debee]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-b11debee]{margin-bottom:0.75rem;}
.block[data-v-b11debee]{display:block;}
.w-24[data-v-b11debee]{width:6rem;}
.flex[data-v-b11debee]{display:flex;}
.items-center[data-v-b11debee]{align-items:center;}
.justify-between[data-v-b11debee]{justify-content:space-between;}
.space-y-4[data-v-b11debee]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-b11debee]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[11px\\][data-v-b11debee]{font-size:11px;}
.text-xs[data-v-b11debee]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-b11debee],
.text-gray-400[data-v-b11debee]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-b11debee]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-b11debee]{font-weight:700;}
.tracking-wider[data-v-b11debee]{letter-spacing:0.05em;}
.uppercase[data-v-b11debee]{text-transform:uppercase;}/* layer: preflights */
[data-v-fbf1d01e],[data-v-fbf1d01e]::before,[data-v-fbf1d01e]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-fbf1d01e]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-fbf1d01e]{margin-bottom:0.25rem;}
.mb-3[data-v-fbf1d01e]{margin-bottom:0.75rem;}
.block[data-v-fbf1d01e]{display:block;}
.w-24[data-v-fbf1d01e]{width:6rem;}
.w-full[data-v-fbf1d01e]{width:100%;}
.flex[data-v-fbf1d01e]{display:flex;}
.items-center[data-v-fbf1d01e]{align-items:center;}
.justify-between[data-v-fbf1d01e]{justify-content:space-between;}
.space-y-4[data-v-fbf1d01e]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-fbf1d01e]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-fbf1d01e]{font-size:10px;}
.text-\\[11px\\][data-v-fbf1d01e]{font-size:11px;}
.text-xs[data-v-fbf1d01e]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-fbf1d01e],
.text-gray-400[data-v-fbf1d01e]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-fbf1d01e]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-fbf1d01e]{font-weight:700;}
.tracking-wider[data-v-fbf1d01e]{letter-spacing:0.05em;}
.uppercase[data-v-fbf1d01e]{text-transform:uppercase;}/* layer: preflights */
[data-v-0e6763f9],[data-v-0e6763f9]::before,[data-v-0e6763f9]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-0e6763f9]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-1[data-v-0e6763f9]{margin-bottom:0.25rem;}
.mb-3[data-v-0e6763f9]{margin-bottom:0.75rem;}
.block[data-v-0e6763f9]{display:block;}
.w-24[data-v-0e6763f9]{width:6rem;}
.flex[data-v-0e6763f9]{display:flex;}
.items-center[data-v-0e6763f9]{align-items:center;}
.justify-between[data-v-0e6763f9]{justify-content:space-between;}
.space-y-4[data-v-0e6763f9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6[data-v-0e6763f9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.text-\\[10px\\][data-v-0e6763f9]{font-size:10px;}
.text-\\[11px\\][data-v-0e6763f9]{font-size:11px;}
.text-xs[data-v-0e6763f9]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-gray-400[data-v-0e6763f9],
.text-gray-400[data-v-0e6763f9]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600[data-v-0e6763f9]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-0e6763f9]{font-weight:700;}
.tracking-wider[data-v-0e6763f9]{letter-spacing:0.05em;}
.uppercase[data-v-0e6763f9]{text-transform:uppercase;}/* layer: preflights */
[data-v-4695b605],[data-v-4695b605]::before,[data-v-4695b605]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-4695b605]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-4[data-v-4695b605]{margin-bottom:1rem;}
.h-3[data-v-4695b605]{height:0.75rem;}
.w-1[data-v-4695b605]{width:0.25rem;}
.flex[data-v-4695b605]{display:flex;}
.flex-1[data-v-4695b605]{flex:1 1 0%;}
.table[data-v-4695b605]{display:table;}
.items-center[data-v-4695b605]{align-items:center;}
.gap-2[data-v-4695b605]{gap:0.5rem;}
.space-y-6[data-v-4695b605]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.space-y-8[data-v-4695b605]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(2rem * var(--un-space-y-reverse));}
.overflow-y-auto[data-v-4695b605]{overflow-y:auto;}
.border-t[data-v-4695b605]{border-top-width:1px;}
.border-gray-100\\/30[data-v-4695b605]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-4695b605]{border-color:rgb(24 24 27 / 0.3);}
.rounded-full[data-v-4695b605]{border-radius:9999px;}
.bg-blue-500[data-v-4695b605]{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-emerald-500[data-v-4695b605]{--un-bg-opacity:1;background-color:rgb(16 185 129 / var(--un-bg-opacity)) /* #10b981 */;}
.bg-indigo-500[data-v-4695b605]{--un-bg-opacity:1;background-color:rgb(99 102 241 / var(--un-bg-opacity)) /* #6366f1 */;}
.bg-primary[data-v-4695b605]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.p-6[data-v-4695b605]{padding:1.5rem;}
.pt-4[data-v-4695b605]{padding-top:1rem;}
.text-\\[11px\\][data-v-4695b605]{font-size:11px;}
.text-gray-400[data-v-4695b605]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.font-bold[data-v-4695b605]{font-weight:700;}
.tracking-wider[data-v-4695b605]{letter-spacing:0.05em;}
.uppercase[data-v-4695b605]{text-transform:uppercase;}/* layer: preflights */
[data-v-eb9c2b86],[data-v-eb9c2b86]::before,[data-v-eb9c2b86]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-eb9c2b86]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.mb-3[data-v-eb9c2b86]{margin-bottom:0.75rem;}
.mb-4[data-v-eb9c2b86]{margin-bottom:1rem;}
.block[data-v-eb9c2b86]{display:block;}
.h-3[data-v-eb9c2b86]{height:0.75rem;}
.w-1[data-v-eb9c2b86]{width:0.25rem;}
.flex[data-v-eb9c2b86]{display:flex;}
.cursor-pointer[data-v-eb9c2b86]{cursor:pointer;}
.items-center[data-v-eb9c2b86]{align-items:center;}
.justify-between[data-v-eb9c2b86]{justify-content:space-between;}
.gap-2[data-v-eb9c2b86]{gap:0.5rem;}
.space-y-6[data-v-eb9c2b86]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.space-y-8[data-v-eb9c2b86]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(2rem * var(--un-space-y-reverse));}
.border[data-v-eb9c2b86]{border-width:1px;}
.border-gray-100\\/30[data-v-eb9c2b86]{border-color:rgb(243 244 246 / 0.3);}
.border-zinc-900\\/30[data-v-eb9c2b86],
.dark .dark\\:border-zinc-900\\/30[data-v-eb9c2b86]{border-color:rgb(24 24 27 / 0.3);}
.rounded-full[data-v-eb9c2b86]{border-radius:9999px;}
.rounded-xl[data-v-eb9c2b86]{border-radius:0.75rem;}
.border-dashed[data-v-eb9c2b86]{border-style:dashed;}
.bg-emerald-500[data-v-eb9c2b86]{--un-bg-opacity:1;background-color:rgb(16 185 129 / var(--un-bg-opacity)) /* #10b981 */;}
.bg-gray-50[data-v-eb9c2b86]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-primary[data-v-eb9c2b86]{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.bg-slate-800[data-v-eb9c2b86]{--un-bg-opacity:1;background-color:rgb(30 41 59 / var(--un-bg-opacity)) /* #1e293b */;}
.p-4[data-v-eb9c2b86]{padding:1rem;}
.text-center[data-v-eb9c2b86]{text-align:center;}
.text-\\[10px\\][data-v-eb9c2b86]{font-size:10px;}
.text-\\[11px\\][data-v-eb9c2b86]{font-size:11px;}
.text-sm[data-v-eb9c2b86]{font-size:0.875rem;line-height:1.25rem;}
.text-gray-400[data-v-eb9c2b86]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-eb9c2b86]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-slate-200[data-v-eb9c2b86]{--un-text-opacity:1;color:rgb(226 232 240 / var(--un-text-opacity)) /* #e2e8f0 */;}
.font-bold[data-v-eb9c2b86]{font-weight:700;}
.font-medium[data-v-eb9c2b86]{font-weight:500;}
.tracking-wide[data-v-eb9c2b86]{letter-spacing:0.025em;}
.tracking-wider[data-v-eb9c2b86]{letter-spacing:0.05em;}
.uppercase[data-v-eb9c2b86]{text-transform:uppercase;}/* layer: preflights */
[data-v-4c634488],[data-v-4c634488]::before,[data-v-4c634488]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-4c634488]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.flex-1[data-v-4c634488]{flex:1 1 0%;}
.overflow-y-auto[data-v-4c634488]{overflow-y:auto;}
.p-6[data-v-4c634488]{padding:1.5rem;}/* layer: preflights */
[data-v-5517ede3],[data-v-5517ede3]::before,[data-v-5517ede3]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-5517ede3]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.h-full[data-v-5517ede3]{height:100%;}
.flex[data-v-5517ede3]{display:flex;}
.flex-col[data-v-5517ede3]{flex-direction:column;}
.overflow-hidden[data-v-5517ede3]{overflow:hidden;}
.border-l[data-v-5517ede3]{border-left-width:1px;}
.border-gray-100\\/30[data-v-5517ede3]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-5517ede3]{border-color:rgb(24 24 27 / 0.3);}
.bg-white[data-v-5517ede3]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.dark .dark\\:bg-\\[\\#141414\\][data-v-5517ede3]{--un-bg-opacity:1;background-color:rgb(20 20 20 / var(--un-bg-opacity)) /* #141414 */;}
.dark .dark\\:bg-black[data-v-5517ede3]{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.shadow-xl[data-v-5517ede3]{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}/* layer: preflights */
[data-v-018cf68a],[data-v-018cf68a]::before,[data-v-018cf68a]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-018cf68a]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.fixed[data-v-018cf68a]{position:fixed;}
.h-full[data-v-018cf68a]{height:100%;}
.min-w-\\[120px\\][data-v-018cf68a]{min-width:120px;}
.min-w-\\[60px\\][data-v-018cf68a]{min-width:60px;}
.w-auto[data-v-018cf68a]{width:auto;}
.w-full[data-v-018cf68a]{width:100%;}
.flex[data-v-018cf68a]{display:flex;}
.shrink-0[data-v-018cf68a]{flex-shrink:0;}
.flex-col[data-v-018cf68a]{flex-direction:column;}
.items-stretch[data-v-018cf68a]{align-items:stretch;}
.px[data-v-018cf68a]{padding-left:1rem;padding-right:1rem;}/* layer: preflights */
[data-v-a95c26c9],[data-v-a95c26c9]::before,[data-v-a95c26c9]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-a95c26c9]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.fixed[data-v-a95c26c9]{position:fixed;}
.min-h-full[data-v-a95c26c9]{min-height:100%;}
.w-auto[data-v-a95c26c9]{width:auto;}
.w-full[data-v-a95c26c9]{width:100%;}
.shrink-0[data-v-a95c26c9]{flex-shrink:0;}
.space-y-12[data-v-a95c26c9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(3rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(3rem * var(--un-space-y-reverse));}
.space-y-2[data-v-a95c26c9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}
.space-y-6[data-v-a95c26c9]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.bg-\\[\\#141414\\][data-v-a95c26c9]{--un-bg-opacity:1;background-color:rgb(20 20 20 / var(--un-bg-opacity)) /* #141414 */;}
.bg-white[data-v-a95c26c9]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.p-10[data-v-a95c26c9]{padding:2.5rem;}
.transition-colors[data-v-a95c26c9]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300[data-v-a95c26c9]{transition-duration:300ms;}/* layer: preflights */
[data-v-608b4cdc],[data-v-608b4cdc]::before,[data-v-608b4cdc]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-608b4cdc]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none[data-v-608b4cdc]{pointer-events:none;}
.absolute[data-v-608b4cdc]{position:absolute;}
.fixed[data-v-608b4cdc]{position:fixed;}
.relative[data-v-608b4cdc]{position:relative;}
.inset-0[data-v-608b4cdc]{inset:0;}
.-top-1[data-v-608b4cdc]{top:-0.25rem;}
.-top-1\\.5[data-v-608b4cdc]{top:-0.375rem;}
.left-1\\/2[data-v-608b4cdc]{left:50%;}
.right-0[data-v-608b4cdc]{right:0;}
.right-4[data-v-608b4cdc]{right:1rem;}
.top-full[data-v-608b4cdc]{top:100%;}
.z-\\[60\\][data-v-608b4cdc]{z-index:60;}
.z-\\[70\\][data-v-608b4cdc]{z-index:70;}
.z-10[data-v-608b4cdc]{z-index:10;}
.z-30[data-v-608b4cdc]{z-index:30;}
.z-40[data-v-608b4cdc]{z-index:40;}
.z-50[data-v-608b4cdc]{z-index:50;}
.grid[data-v-608b4cdc]{display:grid;}
.grid-cols-5[data-v-608b4cdc]{grid-template-columns:repeat(5,minmax(0,1fr));}
.mx-1[data-v-608b4cdc]{margin-left:0.25rem;margin-right:0.25rem;}
.mb-3[data-v-608b4cdc]{margin-bottom:0.75rem;}
.mb-4[data-v-608b4cdc]{margin-bottom:1rem;}
.mr-2[data-v-608b4cdc]{margin-right:0.5rem;}
.mt-2[data-v-608b4cdc]{margin-top:0.5rem;}
.mt-3[data-v-608b4cdc]{margin-top:0.75rem;}
.hidden[data-v-608b4cdc]{display:none;}
.h-16[data-v-608b4cdc]{height:4rem;}
.h-2[data-v-608b4cdc]{height:0.5rem;}
.h-3[data-v-608b4cdc]{height:0.75rem;}
.h-4[data-v-608b4cdc]{height:1rem;}
.h-6[data-v-608b4cdc]{height:1.5rem;}
.h-8[data-v-608b4cdc]{height:2rem;}
.min-w-\\[200px\\][data-v-608b4cdc]{min-width:200px;}
.min-w-\\[300px\\][data-v-608b4cdc]{min-width:300px;}
.w-12[data-v-608b4cdc]{width:3rem;}
.w-2[data-v-608b4cdc]{width:0.5rem;}
.w-3[data-v-608b4cdc]{width:0.75rem;}
.w-4[data-v-608b4cdc]{width:1rem;}
.w-48[data-v-608b4cdc]{width:12rem;}
.w-6[data-v-608b4cdc]{width:1.5rem;}
.w-64[data-v-608b4cdc]{width:16rem;}
.w-full[data-v-608b4cdc]{width:100%;}
.w-px[data-v-608b4cdc]{width:1px;}
.flex[data-v-608b4cdc]{display:flex;}
.flex-1[data-v-608b4cdc]{flex:1 1 0%;}
.shrink-0[data-v-608b4cdc]{flex-shrink:0;}
.-translate-x-1\\/2[data-v-608b4cdc]{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-rotate-90[data-v-608b4cdc]{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:-90deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.rotate-45[data-v-608b4cdc]{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:45deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:scale-125[data-v-608b4cdc]:hover{--un-scale-x:1.25;--un-scale-y:1.25;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-pointer[data-v-608b4cdc]{cursor:pointer;}
.items-center[data-v-608b4cdc]{align-items:center;}
.justify-end[data-v-608b4cdc]{justify-content:flex-end;}
.justify-center[data-v-608b4cdc]{justify-content:center;}
.justify-between[data-v-608b4cdc]{justify-content:space-between;}
.gap-1[data-v-608b4cdc]{gap:0.25rem;}
.gap-2[data-v-608b4cdc]{gap:0.5rem;}
.gap-3[data-v-608b4cdc]{gap:0.75rem;}
.gap-4[data-v-608b4cdc]{gap:1rem;}
.gap-6[data-v-608b4cdc]{gap:1.5rem;}
.space-y-3[data-v-608b4cdc]>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.border[data-v-608b4cdc]{border-width:1px;}
.border-2[data-v-608b4cdc]{border-width:2px;}
.border-b[data-v-608b4cdc]{border-bottom-width:1px;}
.border-l[data-v-608b4cdc]{border-left-width:1px;}
.border-t[data-v-608b4cdc]{border-top-width:1px;}
.border-gray-100\\/30[data-v-608b4cdc]{border-color:rgb(243 244 246 / 0.3);}
.border-gray-50[data-v-608b4cdc]{--un-border-opacity:1;border-color:rgb(249 250 251 / var(--un-border-opacity));}
.border-zinc-900\\/30[data-v-608b4cdc],
.dark .dark\\:border-zinc-900\\/30[data-v-608b4cdc]{border-color:rgb(24 24 27 / 0.3);}
.rounded[data-v-608b4cdc]{border-radius:0.25rem;}
.rounded-full[data-v-608b4cdc]{border-radius:9999px;}
.rounded-lg[data-v-608b4cdc]{border-radius:0.5rem;}
.rounded-xl[data-v-608b4cdc]{border-radius:0.75rem;}
.border-none[data-v-608b4cdc]{border-style:none;}
.bg-gray-100[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.bg-gray-200[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.bg-primary-10[data-v-608b4cdc]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-transparent[data-v-608b4cdc]{background-color:transparent /* transparent */;}
.bg-white[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-white\\/80[data-v-608b4cdc]{background-color:rgb(255 255 255 / 0.8) /* #fff */;}
.bg-zinc-950[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(9 9 11 / var(--un-bg-opacity)) /* #09090b */;}
.dark .dark\\:bg-primary-20[data-v-608b4cdc]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.dark .dark\\:bg-slate-800[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(30 41 59 / var(--un-bg-opacity)) /* #1e293b */;}
.dark .dark\\:bg-zinc-800[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(39 39 42 / var(--un-bg-opacity)) /* #27272a */;}
.dark .dark\\:bg-zinc-900[data-v-608b4cdc]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.dark .dark\\:hover\\:bg-primary\\/20[data-v-608b4cdc]:hover{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.dark .dark\\:hover\\:bg-red-900\\/20[data-v-608b4cdc]:hover{background-color:rgb(127 29 29 / 0.2) /* #7f1d1d */;}
.dark .dark\\:hover\\:bg-zinc-900[data-v-608b4cdc]:hover{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.hover\\:bg-gray-100[data-v-608b4cdc]:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.hover\\:bg-primary\\/10[data-v-608b4cdc]:hover{background-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.hover\\:bg-red-50[data-v-608b4cdc]:hover{--un-bg-opacity:1;background-color:rgb(254 242 242 / var(--un-bg-opacity)) /* #fef2f2 */;}
.from-primary[data-v-608b4cdc]{--un-gradient-from-position:0%;--un-gradient-from:var(--primary-color, #4f46e5) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(255 255 255 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.to-primary-dark[data-v-608b4cdc]{--un-gradient-to-position:100%;--un-gradient-to:color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) var(--un-gradient-to-position);}
.bg-gradient-to-br[data-v-608b4cdc]{--un-gradient-shape:to bottom right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.p-1[data-v-608b4cdc]{padding:0.25rem;}
.p-2[data-v-608b4cdc]{padding:0.5rem;}
.p-3[data-v-608b4cdc]{padding:0.75rem;}
.p-4[data-v-608b4cdc]{padding:1rem;}
.px[data-v-608b4cdc]{padding-left:1rem;padding-right:1rem;}
.px-1[data-v-608b4cdc]{padding-left:0.25rem;padding-right:0.25rem;}
.px-3[data-v-608b4cdc]{padding-left:0.75rem;padding-right:0.75rem;}
.px-6[data-v-608b4cdc]{padding-left:1.5rem;padding-right:1.5rem;}
.py-1\\.5[data-v-608b4cdc]{padding-top:0.375rem;padding-bottom:0.375rem;}
.pt-3[data-v-608b4cdc]{padding-top:0.75rem;}
.text-\\[10px\\][data-v-608b4cdc]{font-size:10px;}
.text-lg[data-v-608b4cdc]{font-size:1.125rem;line-height:1.75rem;}
.text-sm[data-v-608b4cdc]{font-size:0.875rem;line-height:1.25rem;}
.dark .dark\\:text-primary-light[data-v-608b4cdc]{color:color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) */;}
.dark .dark\\:text-slate-400[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity)) /* #94a3b8 */;}
.dark .dark\\:text-zinc-200[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(228 228 231 / var(--un-text-opacity)) /* #e4e4e7 */;}
.dark .dark\\:text-zinc-400[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(161 161 170 / var(--un-text-opacity)) /* #a1a1aa */;}
.text-gray-400[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-800[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-primary[data-v-608b4cdc]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.text-white[data-v-608b4cdc]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.dark .dark\\:hover\\:text-red-400[data-v-608b4cdc]:hover{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity)) /* #f87171 */;}
.hover\\:text-red-500[data-v-608b4cdc]:hover{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity)) /* #ef4444 */;}
.font-bold[data-v-608b4cdc]{font-weight:700;}
.font-medium[data-v-608b4cdc]{font-weight:500;}
.tracking-tight[data-v-608b4cdc]{letter-spacing:-0.025em;}
.tracking-wider[data-v-608b4cdc]{letter-spacing:0.05em;}
.tracking-widest[data-v-608b4cdc]{letter-spacing:0.1em;}
.uppercase[data-v-608b4cdc]{text-transform:uppercase;}
.dark .dark\\:shadow-primary\\/40[data-v-608b4cdc],
.shadow-primary\\/20[data-v-608b4cdc]{--un-shadow-color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.shadow-2xl[data-v-608b4cdc]{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-black\\/20[data-v-608b4cdc]{--un-shadow-color:rgb(0 0 0 / 0.2) /* #000 */;}
.shadow-gray-200\\/50[data-v-608b4cdc]{--un-shadow-color:rgb(229 231 235 / 0.5) /* #e5e7eb */;}
.shadow-inner[data-v-608b4cdc]{--un-shadow:inset 0 2px 4px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-lg[data-v-608b4cdc]{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-sm[data-v-608b4cdc]{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl[data-v-608b4cdc]{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.backdrop-blur-md[data-v-608b4cdc]{--un-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);}
.transition-all[data-v-608b4cdc]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-608b4cdc]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform[data-v-608b4cdc]{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-200[data-v-608b4cdc]{transition-duration:200ms;}
.duration-300[data-v-608b4cdc]{transition-duration:300ms;}
@media (min-width: 640px){
.sm\\:block[data-v-608b4cdc]{display:block;}
}/* layer: preflights */
[data-v-00259a37],[data-v-00259a37]::before,[data-v-00259a37]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-00259a37]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute[data-v-00259a37]{position:absolute;}
.right-\\[320px\\][data-v-00259a37]{right:320px;}
.top-2[data-v-00259a37]{top:0.5rem;}
.z-50[data-v-00259a37]{z-index:50;}
.mb-1[data-v-00259a37]{margin-bottom:0.25rem;}
.ml-auto[data-v-00259a37]{margin-left:auto;}
.max-h-96[data-v-00259a37]{max-height:24rem;}
.w-64[data-v-00259a37]{width:16rem;}
.w-full[data-v-00259a37]{width:100%;}
.flex[data-v-00259a37]{display:flex;}
.flex-col[data-v-00259a37]{flex-direction:column;}
.items-center[data-v-00259a37]{align-items:center;}
.justify-between[data-v-00259a37]{justify-content:space-between;}
.gap-2[data-v-00259a37]{gap:0.5rem;}
.overflow-hidden[data-v-00259a37]{overflow:hidden;}
.overflow-y-auto[data-v-00259a37]{overflow-y:auto;}
.border[data-v-00259a37]{border-width:1px;}
.border-b[data-v-00259a37]{border-bottom-width:1px;}
.border-gray-100\\/30[data-v-00259a37]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-zinc-900\\/30[data-v-00259a37]{border-color:rgb(24 24 27 / 0.3);}
.rounded[data-v-00259a37]{border-radius:0.25rem;}
.rounded-2xl[data-v-00259a37]{border-radius:1rem;}
.rounded-xl[data-v-00259a37]{border-radius:0.75rem;}
.bg-primary-10[data-v-00259a37]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-white[data-v-00259a37]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.dark .dark\\:bg-primary-20[data-v-00259a37]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.dark .dark\\:bg-zinc-900[data-v-00259a37]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.dark .dark\\:hover\\:bg-zinc-900[data-v-00259a37]:hover{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.hover\\:bg-gray-50[data-v-00259a37]:hover{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.p-2[data-v-00259a37]{padding:0.5rem;}
.p-3[data-v-00259a37]{padding:0.75rem;}
.p-4[data-v-00259a37]{padding:1rem;}
.p-8[data-v-00259a37]{padding:2rem;}
.px-1\\.5[data-v-00259a37]{padding-left:0.375rem;padding-right:0.375rem;}
.py-0\\.5[data-v-00259a37]{padding-top:0.125rem;padding-bottom:0.125rem;}
.text-center[data-v-00259a37]{text-align:center;}
.text-left[data-v-00259a37]{text-align:left;}
.text-\\[10px\\][data-v-00259a37]{font-size:10px;}
.text-sm[data-v-00259a37]{font-size:0.875rem;line-height:1.25rem;}
.text-xs[data-v-00259a37]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-primary-light[data-v-00259a37]{color:color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) */;}
.text-gray-400[data-v-00259a37]{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-primary[data-v-00259a37]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.hover\\:text-gray-600[data-v-00259a37]:hover{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold[data-v-00259a37]{font-weight:700;}
.shadow-2xl[data-v-00259a37]{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition-colors[data-v-00259a37]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}\r
/* 自定义滚动条样式 */
::-webkit-scrollbar {\r
  width: 6px;\r
  height: 6px;
}
::-webkit-scrollbar-track {\r
  background: transparent;
}
::-webkit-scrollbar-thumb {\r
  background: #E2E8F0;\r
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {\r
  background: #CBD5E1;
}
.dark ::-webkit-scrollbar-thumb {\r
  background: #334155;
}
.dark ::-webkit-scrollbar-thumb:hover {\r
  background: #475569;
}\r
\r
/* 动画效果 */
.fade-enter-active, .fade-leave-active {\r
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {\r
  opacity: 0;
}
@property --ai-head-start {\r
  syntax: '<percentage>';\r
  inherits: false;\r
  initial-value: 92%;
}
@property --ai-head-fade {\r
  syntax: '<percentage>';\r
  inherits: false;\r
  initial-value: 95%;
}
@property --ai-tail-end {\r
  syntax: '<percentage>';\r
  inherits: false;\r
  initial-value: 85%;
}
@property --ai-tail-fade {\r
  syntax: '<percentage>';\r
  inherits: false;\r
  initial-value: 75%;
}\r
\r
/* AI 动态渐变边框 */
.ai-gradient-border {\r
  position: relative;\r
  padding: 2px;\r
  border-radius: 1rem;\r
  overflow: hidden;\r
  isolation: isolate;\r
  background: rgba(226, 232, 240, 0.6);\r
  --ai-c1: rgba(66, 133, 244, 0.6);\r
  --ai-c2: rgba(234, 67, 53, 0.6);\r
  --ai-c3: rgba(251, 188, 5, 0.6);\r
  --ai-c4: rgba(52, 168, 83, 0.6);\r
  --ai-blur: 4px;\r
  --ai-bright-base: 0.9;\r
  --ai-bright-peak: 1.1;\r
  --ai-bright-dim: 0.8;
}
.dark .ai-gradient-border {\r
  background: rgba(30, 41, 59, 0.6);\r
  --ai-c1: rgba(138, 180, 248, 1);\r
  --ai-c2: rgba(242, 139, 130, 1);\r
  --ai-c3: rgba(253, 226, 147, 1);\r
  --ai-c4: rgba(129, 201, 149, 1);\r
  --ai-blur: 8px;\r
  --ai-bright-base: 1;\r
  --ai-bright-peak: 1.3;\r
  --ai-bright-dim: 0.85;
}
.ai-gradient-border::before {\r
  content: '';\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 4000px;\r
  height: 4000px;\r
  background: conic-gradient(\r
    from 0deg,\r
    var(--ai-c1) 0%,\r
    var(--ai-c2) 25%,\r
    var(--ai-c3) 50%,\r
    var(--ai-c4) 75%,\r
    var(--ai-c1) 100%\r
  );\r
  -webkit-mask-image: conic-gradient(\r
    from 0deg,\r
    transparent 0%,\r
    rgba(0,0,0,1) 5%,\r
    rgba(0,0,0,1) var(--ai-tail-fade),\r
    transparent var(--ai-tail-end),\r
    transparent var(--ai-head-start),\r
    rgba(0,0,0,1) var(--ai-head-fade),\r
    rgba(0,0,0,1) 98%,\r
    transparent 100%\r
  );\r
  mask-image: conic-gradient(\r
    from 0deg,\r
    transparent 0%,\r
    rgba(0,0,0,1) 5%,\r
    rgba(0,0,0,1) var(--ai-tail-fade),\r
    transparent var(--ai-tail-end),\r
    transparent var(--ai-head-start),\r
    rgba(0,0,0,1) var(--ai-head-fade),\r
    rgba(0,0,0,1) 98%,\r
    transparent 100%\r
  );\r
  animation: \r
    spin 12s linear infinite,\r
    breathe 4s ease-in-out infinite alternate,\r
    color-shift 12s linear infinite;\r
  z-index: -1;
}
@keyframes spin {
0% { transform: translate(-50%, -50%) rotate(0deg);
}
100% { transform: translate(-50%, -50%) rotate(360deg);
}
}
@keyframes breathe {
0% { \r
    --ai-tail-fade: 75%;\r
    --ai-tail-end: 85%;\r
    --ai-head-start: 92%;\r
    --ai-head-fade: 95%;
}
100% { \r
    --ai-tail-fade: 35%;\r
    --ai-tail-end: 45%;\r
    --ai-head-start: 55%;\r
    --ai-head-fade: 65%;
}
}
@keyframes color-shift {
0% { filter: blur(var(--ai-blur)) hue-rotate(0deg) brightness(var(--ai-bright-base));
}
50% { filter: blur(var(--ai-blur)) hue-rotate(180deg) brightness(var(--ai-bright-peak));
}
100% { filter: blur(var(--ai-blur)) hue-rotate(360deg) brightness(var(--ai-bright-base));
}
}\r
/* layer: preflights */
[data-v-c7f7a3a9],[data-v-c7f7a3a9]::before,[data-v-c7f7a3a9]::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}[data-v-c7f7a3a9]::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute[data-v-c7f7a3a9]{position:absolute;}
.fixed[data-v-c7f7a3a9]{position:fixed;}
.relative[data-v-c7f7a3a9]{position:relative;}
.inset-0[data-v-c7f7a3a9]{inset:0;}
.bottom-8[data-v-c7f7a3a9]{bottom:2rem;}
.left-1\\/2[data-v-c7f7a3a9]{left:50%;}
.right-0[data-v-c7f7a3a9]{right:0;}
.isolate[data-v-c7f7a3a9]{isolation:isolate;}
.z-\\[100\\][data-v-c7f7a3a9]{z-index:100;}
.z-30[data-v-c7f7a3a9]{z-index:30;}
.mx-auto[data-v-c7f7a3a9]{margin-left:auto;margin-right:auto;}
.mb-4[data-v-c7f7a3a9]{margin-bottom:1rem;}
.mb-6[data-v-c7f7a3a9]{margin-bottom:1.5rem;}
.hidden[data-v-c7f7a3a9]{display:none;}
.h-14[data-v-c7f7a3a9]{height:3.5rem;}
.h-full[data-v-c7f7a3a9]{height:100%;}
.h-screen[data-v-c7f7a3a9]{height:100vh;}
.max-w-5xl[data-v-c7f7a3a9]{max-width:64rem;}
.max-w-sm[data-v-c7f7a3a9]{max-width:24rem;}
.min-h-\\[800px\\][data-v-c7f7a3a9]{min-height:800px;}
.w-12[data-v-c7f7a3a9]{width:3rem;}
.w-80[data-v-c7f7a3a9]{width:20rem;}
.w-full[data-v-c7f7a3a9]{width:100%;}
.hover\\:w-80[data-v-c7f7a3a9]:hover{width:20rem;}
.flex[data-v-c7f7a3a9]{display:flex;}
.flex-1[data-v-c7f7a3a9]{flex:1 1 0%;}
.shrink-0[data-v-c7f7a3a9]{flex-shrink:0;}
.flex-col[data-v-c7f7a3a9]{flex-direction:column;}
.-translate-x-1\\/2[data-v-c7f7a3a9]{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform[data-v-c7f7a3a9]{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center[data-v-c7f7a3a9]{align-items:center;}
.justify-end[data-v-c7f7a3a9]{justify-content:flex-end;}
.justify-center[data-v-c7f7a3a9]{justify-content:center;}
.justify-between[data-v-c7f7a3a9]{justify-content:space-between;}
.gap-2[data-v-c7f7a3a9]{gap:0.5rem;}
.gap-3[data-v-c7f7a3a9]{gap:0.75rem;}
.overflow-auto[data-v-c7f7a3a9]{overflow:auto;}
.overflow-hidden[data-v-c7f7a3a9]{overflow:hidden;}
.b[data-v-c7f7a3a9],
.border[data-v-c7f7a3a9]{border-width:1px;}
.border-b[data-v-c7f7a3a9]{border-bottom-width:1px;}
.border-l[data-v-c7f7a3a9]{border-left-width:1px;}
.border-gray-100[data-v-c7f7a3a9]{--un-border-opacity:1;border-color:rgb(243 244 246 / var(--un-border-opacity));}
.border-gray-100\\/30[data-v-c7f7a3a9]{border-color:rgb(243 244 246 / 0.3);}
.dark .dark\\:border-slate-700[data-v-c7f7a3a9]{--un-border-opacity:1;border-color:rgb(51 65 85 / var(--un-border-opacity));}
.dark .dark\\:border-zinc-900\\/30[data-v-c7f7a3a9]{border-color:rgb(24 24 27 / 0.3);}
.rounded-\\[calc\\(1rem-1\\.5px\\)\\][data-v-c7f7a3a9]{border-radius:calc(1rem - 1.5px);}
.rounded-2xl[data-v-c7f7a3a9]{border-radius:1rem;}
.rounded-full[data-v-c7f7a3a9]{border-radius:9999px;}
.rounded-lg[data-v-c7f7a3a9]{border-radius:0.5rem;}
.rounded-xl[data-v-c7f7a3a9]{border-radius:0.75rem;}
.bg-\\[\\#0a0a0a\\][data-v-c7f7a3a9],
.dark .dark\\:bg-\\[\\#0a0a0a\\][data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(10 10 10 / var(--un-bg-opacity)) /* #0a0a0a */;}
.bg-\\[\\#141414\\][data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(20 20 20 / var(--un-bg-opacity)) /* #141414 */;}
.bg-\\[\\#F1F3F6\\][data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(241 243 246 / var(--un-bg-opacity)) /* #F1F3F6 */;}
.bg-\\[\\#F8F9FB\\][data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(248 249 251 / var(--un-bg-opacity)) /* #F8F9FB */;}
.bg-black[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.bg-black\\/50[data-v-c7f7a3a9]{background-color:rgb(0 0 0 / 0.5) /* #000 */;}
.bg-gray-100[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.bg-gray-50[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-green-500[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}
.bg-primary-10[data-v-c7f7a3a9]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 90%) */;}
.bg-red-500[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(239 68 68 / var(--un-bg-opacity)) /* #ef4444 */;}
.bg-slate-900[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(15 23 42 / var(--un-bg-opacity)) /* #0f172a */;}
.bg-white[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.dark .dark\\:bg-primary-20[data-v-c7f7a3a9]{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.dark .dark\\:bg-slate-700[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(51 65 85 / var(--un-bg-opacity)) /* #334155 */;}
.dark .dark\\:bg-slate-800[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(30 41 59 / var(--un-bg-opacity)) /* #1e293b */;}
.dark .dark\\:bg-zinc-900[data-v-c7f7a3a9]{--un-bg-opacity:1;background-color:rgb(24 24 27 / var(--un-bg-opacity)) /* #18181b */;}
.dark .dark\\:hover\\:bg-primary-30[data-v-c7f7a3a9]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 70%) */;}
.dark .dark\\:hover\\:bg-slate-600[data-v-c7f7a3a9]:hover{--un-bg-opacity:1;background-color:rgb(71 85 105 / var(--un-bg-opacity)) /* #475569 */;}
.hover\\:bg-gray-200[data-v-c7f7a3a9]:hover{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.hover\\:bg-primary-20[data-v-c7f7a3a9]:hover{background-color:color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), transparent 80%) */;}
.hover\\:bg-red-600[data-v-c7f7a3a9]:hover{--un-bg-opacity:1;background-color:rgb(220 38 38 / var(--un-bg-opacity)) /* #dc2626 */;}
.p-1[data-v-c7f7a3a9]{padding:0.25rem;}
.p-10[data-v-c7f7a3a9]{padding:2.5rem;}
.p-4[data-v-c7f7a3a9]{padding:1rem;}
.p-6[data-v-c7f7a3a9]{padding:1.5rem;}
.px[data-v-c7f7a3a9],
.px-4[data-v-c7f7a3a9]{padding-left:1rem;padding-right:1rem;}
.px-10[data-v-c7f7a3a9]{padding-left:2.5rem;padding-right:2.5rem;}
.px-6[data-v-c7f7a3a9]{padding-left:1.5rem;padding-right:1.5rem;}
.py-1\\.5[data-v-c7f7a3a9]{padding-top:0.375rem;padding-bottom:0.375rem;}
.py-10[data-v-c7f7a3a9]{padding-top:2.5rem;padding-bottom:2.5rem;}
.py-2[data-v-c7f7a3a9]{padding-top:0.5rem;padding-bottom:0.5rem;}
.py-3[data-v-c7f7a3a9]{padding-top:0.75rem;padding-bottom:0.75rem;}
.text-lg[data-v-c7f7a3a9]{font-size:1.125rem;line-height:1.75rem;}
.text-sm[data-v-c7f7a3a9]{font-size:0.875rem;line-height:1.25rem;}
.text-xs[data-v-c7f7a3a9]{font-size:0.75rem;line-height:1rem;}
.dark .dark\\:text-primary-light[data-v-c7f7a3a9]{color:color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) /* color-mix(in srgb, var(--primary-color, #4f46e5), white 80%) */;}
.dark .dark\\:text-slate-300[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(203 213 225 / var(--un-text-opacity)) /* #cbd5e1 */;}
.dark .dark\\:text-slate-400[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity)) /* #94a3b8 */;}
.text-\\[\\#2C3E50\\][data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(44 62 80 / var(--un-text-opacity)) /* #2C3E50 */;}
.text-gray-600[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-primary[data-v-c7f7a3a9]{color:var(--primary-color, #4f46e5) /* var(--primary-color, #4f46e5) */;}
.text-red-500[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity)) /* #ef4444 */;}
.text-white[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.text-zinc-200[data-v-c7f7a3a9]{--un-text-opacity:1;color:rgb(228 228 231 / var(--un-text-opacity)) /* #e4e4e7 */;}
.font-bold[data-v-c7f7a3a9]{font-weight:700;}
.font-mono[data-v-c7f7a3a9]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}
.font-sans[data-v-c7f7a3a9]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}
.shadow-2xl[data-v-c7f7a3a9]{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-gray-200\\/50[data-v-c7f7a3a9]{--un-shadow-color:rgb(229 231 235 / 0.5) /* #e5e7eb */;}
.shadow-primary-dark\\/10[data-v-c7f7a3a9]{--un-shadow-color:color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) /* color-mix(in srgb, var(--primary-color, #4f46e5), black 20%) */;}
.shadow-xl[data-v-c7f7a3a9]{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.backdrop-blur-sm[data-v-c7f7a3a9]{--un-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);}
.filter[data-v-c7f7a3a9]{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}
.transition[data-v-c7f7a3a9]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all[data-v-c7f7a3a9]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors[data-v-c7f7a3a9]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-200[data-v-c7f7a3a9]{transition-duration:200ms;}
.duration-300[data-v-c7f7a3a9]{transition-duration:300ms;}
.duration-500[data-v-c7f7a3a9]{transition-duration:500ms;}
.ease[data-v-c7f7a3a9],
.ease-in-out[data-v-c7f7a3a9]{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}`));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { defineComponent as e, ref as t, openBlock as l, createElementBlock as a, createElementVNode as s, createVNode as r, unref as n, withCtx as o, Fragment as i, renderList as p, normalizeClass as d, createBlock as c, resolveDynamicComponent as u, toDisplayString as m, computed as x, resolveComponent as g, normalizeStyle as y, withModifiers as v, createCommentVNode as f, withDirectives as b, vModelText as h, vModelSelect as k, createTextVNode as w, createSlots as _, mergeProps as z, renderSlot as C, h as I, normalizeProps as $, guardReactiveProps as D, onMounted as j, onUnmounted as M, watch as B } from "vue";
import * as P from "ant-design-vue";
import { Input as S, Collapse as T, CollapsePanel as E, InputNumber as A, Select as R, SelectOption as W, Button as U, CheckboxGroup as L, Table as G, Row as N, Divider as H, Breadcrumb as O, Steps as F, Tabs as V, Menu as J, Pagination as K, RadioGroup as Z, Radio as q, Image as Q, Card as Y, Dropdown as X, Timeline as ee, TimelineItem as te, Tour as le, AutoComplete as ae, Cascader as se, DatePicker as re, Form as ne, Mentions as oe, Rate as ie, Slider as pe, Switch as de, TimePicker as ce, Transfer as ue, TreeSelect as me, Upload as xe, Avatar as ge, Badge as ye, Calendar as ve, Carousel as fe, Comment as be, Descriptions as he, DescriptionsItem as ke, Empty as we, List as _e, ListItem as ze, Popover as Ce, QRCode as Ie, Segmented as $e, Statistic as De, Tag as je, Col as Me, RadioButton as Be, Textarea as Pe, ConfigProvider as Se, theme as Te } from "ant-design-vue";
import { Search as Ee, Box as Ae, Layout as Re, Rows as We, Maximize as Ue, Grid as Le, Type as Ge, Hash as Ne, List as He, MousePointer2 as Oe, CheckSquare as Fe, Table as Ve, Star as Je, Minus as Ke, Navigation as Ze, MoreHorizontal as qe, Menu as Qe, Heading1 as Ye, ListOrdered as Xe, Edit3 as et, Layers as tt, Calendar as lt, FormInput as at, AtSign as st, Radio as rt, StarHalf as nt, Sliders as ot, ToggleLeft as it, Clock as pt, ArrowLeftRight as dt, TreeDeciduous as ct, Upload as ut, User as mt, Bell as xt, Play as gt, FoldVertical as yt, MessageSquare as vt, FileText as ft, Ban as bt, Image as ht, MessageCircle as kt, QrCode as wt, Columns as _t, TrendingUp as zt, Bookmark as Ct, Tag as It, History as $t, Plane as Dt, ChevronDown as jt, ChevronRight as Mt, Trash2 as Bt, Boxes as Pt, Square as St, Plus as Tt, LayoutGrid as Et, AlignLeft as At, Database as Rt, Pin as Wt, X as Ut, ArrowLeft as Lt, Scissors as Gt, Settings as Nt, LayoutTemplate as Ht, Code as Ot, Monitor as Ft, Laptop as Vt, Tablet as Jt, Smartphone as Kt, PanelLeft as Zt, PanelRight as qt, Undo2 as Qt, Redo2 as Yt, Moon as Xt, Sun as el, Save as tl, Download as ll, Copy as al } from "lucide-vue-next";
import { defineStore as sl } from "pinia";
import rl from "vuedraggable";
import * as nl from "@ant-design/icons-vue";
import { DownOutlined as ol, PlusOutlined as il, UploadOutlined as pl } from "@ant-design/icons-vue";
const dl = [];
for (let e2 = 0; e2 < 256; ++e2) dl.push((e2 + 256).toString(16).slice(1));
let cl;
const ul = new Uint8Array(16);
const ml = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function xl(e2, t2, l2) {
  if (ml.randomUUID && !e2) return ml.randomUUID();
  const a2 = (e2 = e2 || {}).random ?? e2.rng?.() ?? (function() {
    if (!cl) {
      if ("undefined" == typeof crypto || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      cl = crypto.getRandomValues.bind(crypto);
    }
    return cl(ul);
  })();
  if (a2.length < 16) throw new Error("Random bytes length must be >= 16");
  return a2[6] = 15 & a2[6] | 64, a2[8] = 63 & a2[8] | 128, (function(e3, t3 = 0) {
    return (dl[e3[t3 + 0]] + dl[e3[t3 + 1]] + dl[e3[t3 + 2]] + dl[e3[t3 + 3]] + "-" + dl[e3[t3 + 4]] + dl[e3[t3 + 5]] + "-" + dl[e3[t3 + 6]] + dl[e3[t3 + 7]] + "-" + dl[e3[t3 + 8]] + dl[e3[t3 + 9]] + "-" + dl[e3[t3 + 10]] + dl[e3[t3 + 11]] + dl[e3[t3 + 12]] + dl[e3[t3 + 13]] + dl[e3[t3 + 14]] + dl[e3[t3 + 15]]).toLowerCase();
  })(a2);
}
const gl = { "container-box": "盒子容器", "container-row-col": "行列容器", "container-col": "列容器", "container-flex": "弹性容器", "container-full-width": "全宽居中", "container-grid": "栅格布局", input: "输入框", "number-input": "数字输入框", select: "下拉框", button: "按钮", checkbox: "复选框", table: "表格", icon: "图标", divider: "分割线", breadcrumb: "面包屑", dropdown: "下拉菜单", menu: "导航菜单", "page-header": "页头", pagination: "分页", steps: "步骤条", "auto-complete": "自动完成", cascader: "级联选择", "date-picker": "日期选择框", form: "表单", mentions: "提及", radio: "单选框", rate: "评分", slider: "滑动输入条", switch: "开关", "time-picker": "时间选择框", transfer: "穿梭框", "tree-select": "树选择", upload: "上传", avatar: "头像", badge: "徽标数", calendar: "日历", card: "卡片", carousel: "走马灯", collapse: "折叠面板", comment: "评论", descriptions: "描述列表", empty: "空状态", image: "图片", list: "列表", popover: "气泡卡片", qrcode: "二维码", segmented: "分段控制器", statistic: "统计数值", tabs: "标签页", tag: "标签", timeline: "时间轴", tour: "漫游式引导" };
class yl {
  static getElementLabel(e2) {
    return "container-row-col" === e2.type ? "column" === e2.props?.direction ? "列容器" : "行容器" : "container-col" === e2.type ? "列容器" : e2.label || gl[e2.type] || "未知组件";
  }
  static createNewElement(e2) {
    const t2 = gl[e2], l2 = { id: xl(), type: e2, label: t2, placeholder: "input" === e2 || "number-input" === e2 || "select" === e2 ? "请输入..." : void 0, required: false, children: e2.startsWith("container-") ? "container-row-col" === e2 ? [this.createNewElement("container-col")] : "container-grid" === e2 ? [this.createNewElement("container-col"), this.createNewElement("container-col"), this.createNewElement("container-col")] : [] : void 0, options: ["select", "checkbox", "radio", "segmented", "tabs"].includes(e2) ? ["选项 1", "选项 2"] : void 0, props: "button" === e2 ? { text: "提交按钮", theme: "primary" } : "table" === e2 ? { columns: ["列 1", "列 2"], data: [] } : "icon" === e2 ? { icon: "StarOutlined", size: 24 } : "divider" === e2 ? { text: "分割线", orientation: "center", type: "horizontal" } : "breadcrumb" === e2 ? { items: ["首页", "列表", "详情"] } : "dropdown" === e2 ? { text: "下拉菜单", items: ["操作 1", "操作 2"] } : "menu" === e2 ? { items: ["导航 1", "导航 2"], mode: "horizontal" } : "page-header" === e2 ? { title: "标题", subTitle: "副标题" } : "pagination" === e2 ? { total: 50, current: 1 } : "steps" === e2 ? { current: 0, items: ["步骤 1", "步骤 2"] } : "auto-complete" === e2 ? { options: ["选项 1", "选项 2"] } : "cascader" === e2 ? { options: [{ label: "选项 1", value: "1", children: [{ label: "子项 1", value: "1-1" }] }] } : "date-picker" === e2 ? { format: "YYYY-MM-DD" } : "mentions" === e2 ? { options: ["张三", "李四"] } : "rate" === e2 ? { count: 5, value: 3 } : "slider" === e2 ? { min: 0, max: 100, value: 30 } : "switch" === e2 ? { checked: false } : "time-picker" === e2 ? { format: "HH:mm:ss" } : "transfer" === e2 ? { dataSource: [{ key: "1", title: "选项 1" }, { key: "2", title: "选项 2" }], targetKeys: [] } : "tree-select" === e2 ? { treeData: [{ label: "节点 1", value: "1", children: [{ label: "子节点 1", value: "1-1" }] }] } : "upload" === e2 ? { listType: "text" } : "tour" === e2 ? { steps: [{ title: "第一步", description: "这是第一步的内容" }] } : "form" === e2 ? { layout: "horizontal", colon: true } : "avatar" === e2 ? { shape: "circle", size: "large", src: "https://picsum.photos/seed/avatar/200" } : "badge" === e2 ? { count: 5 } : "calendar" === e2 ? { fullscreen: false } : "card" === e2 ? { title: "卡片标题", hoverable: true } : "carousel" === e2 ? { autoplay: true } : "collapse" === e2 ? { items: [{ header: "面板 1", content: "内容 1" }] } : "comment" === e2 ? { author: "作者", content: "评论内容" } : "descriptions" === e2 ? { title: "描述列表", items: [{ label: "姓名", value: "张三" }] } : "empty" === e2 ? { description: "暂无数据" } : "image" === e2 ? { src: "https://picsum.photos/seed/image/400/300", width: 200 } : "list" === e2 ? { dataSource: ["列表项 1", "列表项 2"] } : "popover" === e2 ? { title: "标题", content: "气泡内容" } : "qrcode" === e2 ? { value: "https://antdv.com/" } : "segmented" === e2 ? { options: ["选项 1", "选项 2"] } : "statistic" === e2 ? { title: "统计", value: 112893 } : "tabs" === e2 ? { items: [{ key: "1", tab: "标签 1" }, { key: "2", tab: "标签 2" }] } : "tag" === e2 ? { text: "标签", color: "blue" } : "timeline" === e2 ? { items: ["事件 1", "事件 2"] } : "container-row-col" === e2 ? { direction: "row", justifyContent: "start", alignItems: "stretch", rowGap: 8, colGap: 8, minHeight: 40 } : "container-col" === e2 ? { direction: "column", justifyContent: "start", alignItems: "stretch" } : "container-flex" === e2 ? { flexDirection: "row", flexWrap: "nowrap", justifyContent: "start", alignItems: "stretch", rowGap: 8, colGap: 8, mobileDirection: "column", rows: 1 } : "container-full-width" === e2 ? { contentWidth: "60%", rowGap: 16 } : "container-grid" === e2 ? { cols: 3, rows: 1, align: "top", justify: "start", gutter: [16, 16], wrap: true } : {} };
    return "container-row-col" === e2 && (l2.label = this.getElementLabel(l2)), l2;
  }
  static findElementById(e2, t2) {
    for (const l2 of e2) {
      if (l2.id === t2) return l2;
      if (l2.children) {
        const e3 = this.findElementById(l2.children, t2);
        if (e3) return e3;
      }
    }
    return null;
  }
  static findParentById(e2, t2, l2 = null) {
    for (const a2 of e2) {
      if (a2.id === t2) return l2;
      if (a2.children) {
        const e3 = this.findParentById(a2.children, t2, a2);
        if (e3) return e3;
      }
    }
    return null;
  }
  static removeElementById(e2, t2) {
    return e2.filter((e3) => e3.id !== t2 && (e3.children && (e3.children = this.removeElementById(e3.children, t2)), true));
  }
}
const vl = sl("form", { state: () => ({ elements: [], selectedElementId: null, hoveredElementId: null, draggedElementId: null, isDragging: false, dropTarget: { parentId: null, index: null, position: "bottom" }, dataSources: [], deviceMode: "desktop", canvasWidth: 1200, canvasZoom: 100, isAutoZoom: true, history: [], historyIndex: -1, isDarkMode: false, primaryColor: "#4f46e5", canvasSpacing: "normal", showSidebar: true, showPropertiesPanel: true, isSidebarPinned: true, isPropertiesPanelPinned: true }), actions: { saveHistory() {
  const e2 = JSON.stringify({ elements: this.elements, dataSources: this.dataSources, canvasWidth: this.canvasWidth, deviceMode: this.deviceMode });
  this.historyIndex < this.history.length - 1 && (this.history = this.history.slice(0, this.historyIndex + 1)), this.history.push(e2), this.history.length > 50 ? this.history.shift() : this.historyIndex++;
}, undo() {
  if (this.historyIndex > 0) {
    this.historyIndex--;
    const e2 = JSON.parse(this.history[this.historyIndex]);
    this.elements = e2.elements, this.dataSources = e2.dataSources, this.canvasWidth = e2.canvasWidth ?? 1200, this.deviceMode = e2.deviceMode ?? "desktop";
  }
}, redo() {
  if (this.historyIndex < this.history.length - 1) {
    this.historyIndex++;
    const e2 = JSON.parse(this.history[this.historyIndex]);
    this.elements = e2.elements, this.dataSources = e2.dataSources, this.canvasWidth = e2.canvasWidth ?? 1200, this.deviceMode = e2.deviceMode ?? "desktop";
  }
}, toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode, this.isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
}, setDeviceMode(e2) {
  this.deviceMode = e2;
  this.canvasWidth;
  switch (e2) {
    case "mobile-portrait":
      this.canvasWidth = 480;
      break;
    case "mobile-landscape":
      this.canvasWidth = 768;
      break;
    case "tablet":
      this.canvasWidth = 992;
      break;
    case "desktop":
      this.canvasWidth = 1200;
      break;
    case "large-screen":
      this.canvasWidth = 1920;
  }
  this.isAutoZoom = true;
}, setCanvasSpacing(e2) {
  this.canvasSpacing = e2, this.saveHistory();
}, addElement(e2, t2 = null, l2) {
  const a2 = yl.createNewElement(e2);
  if (t2) {
    const e3 = this.findElementById(this.elements, t2);
    e3 && e3.children && (void 0 !== l2 ? e3.children.splice(l2, 0, a2) : e3.children.push(a2));
  } else void 0 !== l2 ? this.elements.splice(l2, 0, a2) : this.elements.push(a2);
  this.selectedElementId = a2.id, this.saveHistory();
}, findElementById: (e2, t2) => yl.findElementById(e2, t2), findParentById(e2) {
  return yl.findParentById(this.elements, e2);
}, removeElement(e2) {
  this.elements = yl.removeElementById(this.elements, e2), this.selectedElementId === e2 && (this.selectedElementId = null), this.saveHistory();
}, updateElement(e2, t2) {
  const l2 = this.findElementById(this.elements, e2);
  l2 && (Object.assign(l2, t2), this.saveHistory());
}, selectElement(e2) {
  this.selectedElementId = e2;
}, setHoveredElement(e2) {
  this.hoveredElementId = e2;
}, setDropTarget(e2, t2, l2 = "bottom") {
  this.dropTarget = { parentId: e2, index: t2, position: l2 };
}, clearDropTarget() {
  this.dropTarget = { parentId: null, index: null, position: "bottom" };
}, moveElement(e2, t2, l2) {
  if (t2) {
    let l3 = t2;
    for (; l3; ) {
      if (l3 === e2) return;
      const t3 = this.findParentById(l3);
      l3 = t3 ? t3.id : null;
    }
  }
  const a2 = this.findElementById(this.elements, e2);
  if (!a2) return;
  const s2 = this.findParentById(e2), r2 = (s2 ? s2.children : this.elements).findIndex((t3) => t3.id === e2), n2 = JSON.parse(JSON.stringify(a2));
  this.elements = yl.removeElementById(this.elements, e2);
  let o2 = l2;
  if (s2?.id === t2 && -1 !== r2 && r2 < l2 && (o2 -= 1), t2) {
    const e3 = this.findElementById(this.elements, t2);
    if (e3) {
      e3.children || (e3.children = []);
      const t3 = Math.min(Math.max(0, o2), e3.children.length);
      e3.children.splice(t3, 0, n2);
    }
  } else {
    const e3 = Math.min(Math.max(0, o2), this.elements.length);
    this.elements.splice(e3, 0, n2);
  }
  this.selectedElementId = n2.id, this.saveHistory();
}, splitCol(e2) {
  const t2 = yl.findParentById(this.elements, e2), l2 = this.findElementById(this.elements, e2);
  if (!t2 || !l2) return;
  const a2 = yl.createNewElement("container-col");
  if ("fixed" === l2.props?.widthType && (a2.props = { ...a2.props, widthType: "fixed", width: l2.props.width || 200 }), "container-row-col" === t2.type && "row" === t2.props?.direction) {
    const l3 = t2.children.findIndex((t3) => t3.id === e2);
    t2.children.splice(l3 + 1, 0, a2);
  } else {
    const s2 = t2.children.findIndex((t3) => t3.id === e2), r2 = yl.createNewElement("container-row-col");
    r2.props = { ...r2.props, direction: "row" }, r2.children = [l2, a2], t2.children[s2] = r2;
  }
  this.saveHistory();
}, splitRow(e2) {
  const t2 = yl.findParentById(this.elements, e2), l2 = this.findElementById(this.elements, e2);
  if (!t2 || !l2) return;
  const a2 = yl.createNewElement("container-col");
  if ("container-row-col" === t2.type && "column" === t2.props?.direction) {
    const l3 = t2.children.findIndex((t3) => t3.id === e2);
    t2.children.splice(l3 + 1, 0, a2);
  } else {
    const s2 = t2.children.findIndex((t3) => t3.id === e2), r2 = yl.createNewElement("container-row-col");
    r2.props = { ...r2.props, direction: "column" }, "fixed" === l2.props?.widthType && (r2.props.widthType = "fixed", r2.props.width = l2.props.width || 200, l2.props.widthType = "auto"), r2.children = [l2, a2], t2.children[s2] = r2;
  }
  this.saveHistory();
}, clearForm() {
  this.elements = [], this.selectedElementId = null, this.canvasWidth = 1200, this.deviceMode = "desktop", this.saveHistory();
}, loadConfig(e2) {
  try {
    const t2 = JSON.parse(e2);
    t2.elements && (this.elements = t2.elements), t2.dataSources && (this.dataSources = t2.dataSources), t2.canvasWidth && (this.canvasWidth = t2.canvasWidth), t2.deviceMode && (this.deviceMode = t2.deviceMode), this.saveHistory();
  } catch (e3) {
  }
}, addDataSource() {
  this.dataSources.push({ id: xl(), name: `数据源 ${this.dataSources.length + 1}`, type: "static", config: "{}" }), this.saveHistory();
}, updateDataSource(e2, t2) {
  const l2 = this.dataSources.find((t3) => t3.id === e2);
  l2 && (Object.assign(l2, t2), this.saveHistory());
}, removeDataSource(e2) {
  this.dataSources = this.dataSources.filter((t2) => t2.id !== e2), this.saveHistory();
} } }), fl = { class: "p-2 space-y-4" }, bl = { class: "px-2 pt-2" }, hl = { class: "grid grid-cols-3 gap-2 p-1" }, kl = ["onDragstart"], wl = { class: "grid grid-cols-3 gap-2 p-1" }, _l = ["onDragstart"], zl = { class: "grid grid-cols-3 gap-2 p-1" }, Cl = ["onDragstart"], Il = { class: "grid grid-cols-3 gap-2 p-1" }, $l = ["onDragstart"], Dl = { class: "grid grid-cols-3 gap-2 p-1" }, jl = ["onDragstart"], Ml = (e2, t2) => {
  const l2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2) l2[e3] = a2;
  return l2;
}, Bl = Ml(e({ __name: "ComponentList", setup(e2) {
  const x2 = vl(), g2 = t(["layout", "basic", "navigation", "data-entry", "data-display", "feedback"]), y2 = [{ type: "container-box", icon: Ae, label: "盒子容器" }, { type: "container-row-col", icon: Re, label: "行列容器" }, { type: "container-flex", icon: We, label: "弹性容器" }, { type: "container-full-width", icon: Ue, label: "全宽居中" }, { type: "container-grid", icon: Le, label: "栅格容器" }], v2 = [{ type: "input", icon: Ge, label: "输入框" }, { type: "number-input", icon: Ne, label: "数字输入框" }, { type: "select", icon: He, label: "下拉框" }, { type: "button", icon: Oe, label: "按钮" }, { type: "checkbox", icon: Fe, label: "复选框" }, { type: "table", icon: Ve, label: "表格" }, { type: "icon", icon: Je, label: "图标" }, { type: "divider", icon: Ke, label: "分割线" }], f2 = [{ type: "breadcrumb", icon: Ze, label: "面包屑" }, { type: "dropdown", icon: qe, label: "下拉菜单" }, { type: "menu", icon: Qe, label: "导航菜单" }, { type: "page-header", icon: Ye, label: "页头" }, { type: "pagination", icon: Ne, label: "分页" }, { type: "steps", icon: Xe, label: "步骤条" }], b2 = [{ type: "auto-complete", icon: et, label: "自动完成" }, { type: "cascader", icon: tt, label: "级联选择" }, { type: "date-picker", icon: lt, label: "日期选择" }, { type: "form", icon: at, label: "表单" }, { type: "mentions", icon: st, label: "提及" }, { type: "radio", icon: rt, label: "单选框" }, { type: "rate", icon: nt, label: "评分" }, { type: "slider", icon: ot, label: "滑动输入" }, { type: "switch", icon: it, label: "开关" }, { type: "time-picker", icon: pt, label: "时间选择" }, { type: "transfer", icon: dt, label: "穿梭框" }, { type: "tree-select", icon: ct, label: "树选择" }, { type: "upload", icon: ut, label: "上传" }], h2 = [{ type: "avatar", icon: mt, label: "头像" }, { type: "badge", icon: xt, label: "徽标数" }, { type: "calendar", icon: lt, label: "日历" }, { type: "card", icon: Re, label: "卡片" }, { type: "carousel", icon: gt, label: "走马灯" }, { type: "collapse", icon: yt, label: "折叠面板" }, { type: "comment", icon: vt, label: "评论" }, { type: "descriptions", icon: ft, label: "描述列表" }, { type: "empty", icon: bt, label: "空状态" }, { type: "image", icon: ht, label: "图片" }, { type: "list", icon: He, label: "列表" }, { type: "popover", icon: kt, label: "气泡卡片" }, { type: "qrcode", icon: wt, label: "二维码" }, { type: "segmented", icon: _t, label: "分段控制器" }, { type: "statistic", icon: zt, label: "统计数值" }, { type: "tabs", icon: Ct, label: "标签页" }, { type: "tag", icon: It, label: "标签" }, { type: "timeline", icon: $t, label: "时间轴" }, { type: "tour", icon: Dt, label: "漫游式引导" }], k2 = (e3, t2) => {
    e3.dataTransfer && (e3.dataTransfer.setData("application/vue-form-builder-type", t2), e3.dataTransfer.effectAllowed = "copy", x2.isDragging = true);
  }, w2 = () => {
    x2.isDragging = false, x2.clearDropTarget(), !x2.isSidebarPinned && x2.showSidebar && (x2.showSidebar = false);
  };
  return (e3, t2) => (l(), a("div", fl, [s("div", bl, [r(n(S), { placeholder: "搜索组件...", "allow-clear": "" }, { prefix: o(() => [r(n(Ee), { size: 14, class: "text-gray-400" })]), _: 1 })]), r(n(T), { activeKey: g2.value, "onUpdate:activeKey": t2[0] || (t2[0] = (e4) => g2.value = e4), bordered: false, "expand-icon-position": "end", class: "bg-transparent sidebar-collapse" }, { default: o(() => [r(n(E), { key: "layout" }, { header: o(() => [...t2[1] || (t2[1] = [s("div", { class: "flex items-center gap-2" }, [s("div", { class: "w-1 h-4 bg-primary rounded-full" }), s("span", { class: "text-[13px] font-black text-gray-900 dark:text-zinc-100 uppercase tracking-wider" }, "布局与容器")], -1)])]), default: o(() => [s("div", hl, [(l(), a(i, null, p(y2, (e4) => s("div", { key: e4.type, draggable: "true", onDragstart: (t3) => k2(t3, e4.type), onDragend: w2, class: d(["flex flex-col items-center justify-start gap-2 p-3 border rounded-xl cursor-grab transition-all duration-200 group active:scale-95", n(x2).isDarkMode ? "bg-zinc-900 border-zinc-900/30 hover:border-primary hover:bg-zinc-800" : "bg-white border-transparent hover:border-gray-100/30 hover:shadow-sm"]) }, [(l(), c(u(e4.icon), { size: 24, "stroke-width": "1.5", class: "text-gray-500 group-hover:text-primary-dark dark:text-zinc-400 dark:group-hover:text-primary mb-1" })), s("span", { class: d(["text-[10px] text-center transition-colors", n(x2).isDarkMode ? "text-zinc-400 group-hover:text-zinc-200" : "text-gray-600 group-hover:text-gray-900"]) }, m(e4.label), 3)], 42, kl)), 64))])]), _: 1 }), r(n(E), { key: "basic" }, { header: o(() => [...t2[2] || (t2[2] = [s("div", { class: "flex items-center gap-2" }, [s("div", { class: "w-1 h-4 bg-primary rounded-full" }), s("span", { class: "text-[13px] font-black text-gray-900 dark:text-zinc-100 uppercase tracking-wider" }, "基础元素")], -1)])]), default: o(() => [s("div", wl, [(l(), a(i, null, p(v2, (e4) => s("div", { key: e4.type, draggable: "true", onDragstart: (t3) => k2(t3, e4.type), onDragend: w2, class: d(["flex flex-col items-center justify-start gap-2 p-3 border rounded-xl cursor-grab transition-all duration-200 group active:scale-95", n(x2).isDarkMode ? "bg-zinc-900 border-zinc-900/30 hover:border-primary hover:bg-zinc-800" : "bg-white border-transparent hover:border-gray-100/30 hover:shadow-sm"]) }, [(l(), c(u(e4.icon), { size: 24, "stroke-width": "1.5", class: "text-gray-500 group-hover:text-primary-dark dark:text-zinc-400 dark:group-hover:text-primary mb-1" })), s("span", { class: d(["text-[10px] text-center transition-colors", n(x2).isDarkMode ? "text-zinc-400 group-hover:text-zinc-200" : "text-gray-600 group-hover:text-gray-900"]) }, m(e4.label), 3)], 42, _l)), 64))])]), _: 1 }), r(n(E), { key: "navigation" }, { header: o(() => [...t2[3] || (t2[3] = [s("div", { class: "flex items-center gap-2" }, [s("div", { class: "w-1 h-4 bg-blue-500 rounded-full" }), s("span", { class: "text-[13px] font-black text-gray-900 dark:text-zinc-100 uppercase tracking-wider" }, "导航组件")], -1)])]), default: o(() => [s("div", zl, [(l(), a(i, null, p(f2, (e4) => s("div", { key: e4.type, draggable: "true", onDragstart: (t3) => k2(t3, e4.type), onDragend: w2, class: d(["flex flex-col items-center justify-start gap-2 p-3 border rounded-xl cursor-grab transition-all duration-200 group active:scale-95", n(x2).isDarkMode ? "bg-zinc-900 border-zinc-900/30 hover:border-primary hover:bg-zinc-800" : "bg-white border-transparent hover:border-gray-100/30 hover:shadow-sm"]) }, [(l(), c(u(e4.icon), { size: 24, "stroke-width": "1.5", class: "text-gray-500 group-hover:text-primary-dark dark:text-zinc-400 dark:group-hover:text-primary mb-1" })), s("span", { class: d(["text-[10px] text-center transition-colors", n(x2).isDarkMode ? "text-zinc-400 group-hover:text-zinc-200" : "text-gray-600 group-hover:text-gray-900"]) }, m(e4.label), 3)], 42, Cl)), 64))])]), _: 1 }), r(n(E), { key: "data-entry" }, { header: o(() => [...t2[4] || (t2[4] = [s("div", { class: "flex items-center gap-2" }, [s("div", { class: "w-1 h-4 bg-emerald-500 rounded-full" }), s("span", { class: "text-[13px] font-black text-gray-900 dark:text-zinc-100 uppercase tracking-wider" }, "数据录入")], -1)])]), default: o(() => [s("div", Il, [(l(), a(i, null, p(b2, (e4) => s("div", { key: e4.type, draggable: "true", onDragstart: (t3) => k2(t3, e4.type), onDragend: w2, class: d(["flex flex-col items-center justify-start gap-2 p-3 border rounded-xl cursor-grab transition-all duration-200 group active:scale-95", n(x2).isDarkMode ? "bg-zinc-900 border-zinc-900/30 hover:border-primary hover:bg-zinc-800" : "bg-white border-transparent hover:border-gray-100/30 hover:shadow-sm"]) }, [(l(), c(u(e4.icon), { size: 24, "stroke-width": "1.5", class: "text-gray-500 group-hover:text-primary-dark dark:text-zinc-400 dark:group-hover:text-primary mb-1" })), s("span", { class: d(["text-[10px] text-center transition-colors", n(x2).isDarkMode ? "text-zinc-400 group-hover:text-zinc-200" : "text-gray-600 group-hover:text-gray-900"]) }, m(e4.label), 3)], 42, $l)), 64))])]), _: 1 }), r(n(E), { key: "data-display" }, { header: o(() => [...t2[5] || (t2[5] = [s("div", { class: "flex items-center gap-2" }, [s("div", { class: "w-1 h-4 bg-amber-500 rounded-full" }), s("span", { class: "text-[13px] font-black text-gray-900 dark:text-zinc-100 uppercase tracking-wider" }, "数据展示")], -1)])]), default: o(() => [s("div", Dl, [(l(), a(i, null, p(h2, (e4) => s("div", { key: e4.type, draggable: "true", onDragstart: (t3) => k2(t3, e4.type), onDragend: w2, class: d(["flex flex-col items-center justify-start gap-2 p-3 border rounded-xl cursor-grab transition-all duration-200 group active:scale-95", n(x2).isDarkMode ? "bg-zinc-900 border-zinc-900/30 hover:border-primary hover:bg-zinc-800" : "bg-white border-transparent hover:border-gray-100/30 hover:shadow-sm"]) }, [(l(), c(u(e4.icon), { size: 24, "stroke-width": "1.5", class: "text-gray-500 group-hover:text-primary-dark dark:text-zinc-400 dark:group-hover:text-primary mb-1" })), s("span", { class: d(["text-[10px] text-center transition-colors", n(x2).isDarkMode ? "text-zinc-400 group-hover:text-zinc-200" : "text-gray-600 group-hover:text-gray-900"]) }, m(e4.label), 3)], 42, jl)), 64))])]), _: 1 })]), _: 1 }, 8, ["activeKey"])]));
} }), [["__scopeId", "data-v-d8f06279"]]), Pl = { class: "outline-item" }, Sl = { key: 1, class: "w-[14px]" }, Tl = { class: "text-xs font-medium truncate flex-1" }, El = { key: 0, class: "children" }, Al = Ml(e({ __name: "OutlineItem", props: { element: {}, depth: {} }, setup(e2) {
  const i2 = e2, p2 = vl(), b2 = t(true), h2 = x(() => yl.getElementLabel(i2.element));
  return (t2, i3) => {
    const x2 = g("OutlineItem", true);
    return l(), a("div", Pl, [s("div", { class: d(["flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-primary-5 dark:hover:bg-primary-10 cursor-pointer transition-colors", { "bg-primary-10 text-primary dark:bg-primary-20 dark:text-primary-light": n(p2).selectedElementId === e2.element.id || n(p2).hoveredElementId === e2.element.id }]), style: y({ paddingLeft: 12 * e2.depth + 8 + "px" }), onClick: i3[2] || (i3[2] = (t3) => n(p2).selectElement(e2.element.id)), onMouseenter: i3[3] || (i3[3] = (t3) => n(p2).setHoveredElement(e2.element.id)), onMouseleave: i3[4] || (i3[4] = (e3) => n(p2).setHoveredElement(null)) }, [e2.element.children ? (l(), c(u(b2.value ? n(jt) : n(Mt)), { key: 0, size: 14, class: "text-gray-400 hover:text-primary", onClick: i3[0] || (i3[0] = v((e3) => b2.value = !b2.value, ["stop"])) })) : (l(), a("div", Sl)), (l(), c(u((k2 = e2.element.type, { "container-box": St, "container-row-col": Re, "container-col": We, "container-flex": Pt, "container-full-width": Ue, "container-grid": Le, input: Ge, "number-input": Ne, select: He, button: Oe, checkbox: Fe, table: Ve }[k2] || Ge)), { size: 14, class: d(["text-gray-400", { "text-primary": n(p2).hoveredElementId === e2.element.id || n(p2).selectedElementId === e2.element.id }]) }, null, 8, ["class"])), s("span", Tl, m(h2.value), 1), n(p2).hoveredElementId === e2.element.id ? (l(), a("button", { key: 2, onClick: i3[1] || (i3[1] = v((t3) => n(p2).removeElement(e2.element.id), ["stop"])), class: "p-1 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-all", title: "删除组件" }, [r(n(Bt), { size: 12 })])) : f("", true)], 38), e2.element.children && b2.value ? (l(), a("div", El, [r(n(rl), { modelValue: e2.element.children, "onUpdate:modelValue": i3[5] || (i3[5] = (t3) => e2.element.children = t3), "item-key": "id", group: "outline-elements", "ghost-class": "drag-ghost", "chosen-class": "drag-chosen", animation: 200, onChange: i3[6] || (i3[6] = (e3) => n(p2).saveHistory()), tag: "div" }, { item: o(({ element: t3 }) => [(l(), a("div", { class: "draggable-item", key: t3.id }, [r(x2, { element: t3, depth: e2.depth + 1 }, null, 8, ["element", "depth"])]))]), _: 1 }, 8, ["modelValue"])])) : f("", true)]);
    var k2;
  };
} }), [["__scopeId", "data-v-f73546dc"]]), Rl = { class: "p-4" }, Wl = { key: 0, class: "text-center py-10" }, Ul = { key: 1 }, Ll = Ml(e({ __name: "OutlinePanel", setup(e2) {
  const t2 = vl();
  return (e3, i2) => (l(), a("div", Rl, [0 === n(t2).elements.length ? (l(), a("div", Wl, [...i2[2] || (i2[2] = [s("p", { class: "text-xs text-gray-400 italic" }, "暂无组件", -1)])])) : (l(), a("div", Ul, [r(n(rl), { modelValue: n(t2).elements, "onUpdate:modelValue": i2[0] || (i2[0] = (e4) => n(t2).elements = e4), "item-key": "id", group: "outline-elements", "ghost-class": "drag-ghost", "chosen-class": "drag-chosen", animation: 200, onChange: i2[1] || (i2[1] = (e4) => n(t2).saveHistory()), tag: "div", class: "space-y-1" }, { item: o(({ element: e4 }) => [(l(), a("div", { class: "draggable-item", key: e4.id }, [r(Al, { element: e4, depth: 0 }, null, 8, ["element"])]))]), _: 1 }, 8, ["modelValue"])]))]));
} }), [["__scopeId", "data-v-6437ea5b"]]), Gl = { class: "p-4" }, Nl = { class: "flex justify-between items-center mb-4" }, Hl = { key: 1, class: "space-y-3" }, Ol = { class: "flex justify-between items-start mb-2" }, Fl = ["onUpdate:modelValue"], Vl = ["onClick"], Jl = { class: "flex items-center gap-2" }, Kl = ["onUpdate:modelValue"], Zl = Ml(e({ __name: "DataSourcePanel", setup(e2) {
  const t2 = vl();
  return (e3, o2) => (l(), a("div", Gl, [s("div", Nl, [o2[1] || (o2[1] = s("h3", { class: "text-xs font-bold text-gray-800 dark:text-zinc-200" }, "全局数据源", -1)), s("button", { onClick: o2[0] || (o2[0] = (e4) => n(t2).addDataSource()), class: "p-1 bg-primary-10 dark:bg-primary-20 text-primary dark:text-primary-light rounded hover:bg-primary-20 dark:hover:bg-primary-30 transition-colors" }, [r(n(Tt), { size: 14 })])]), 0 === n(t2).dataSources.length ? (l(), a("div", { key: 0, class: d(["text-center py-10 border-2 border-dashed rounded-xl", n(t2).isDarkMode ? "border-zinc-900/30 text-zinc-500" : "border-gray-100/30 text-gray-400"]) }, [...o2[2] || (o2[2] = [s("p", { class: "text-xs" }, "点击右上角按钮新增", -1)])], 2)) : (l(), a("div", Hl, [(l(true), a(i, null, p(n(t2).dataSources, (e4) => (l(), a("div", { key: e4.id, class: d(["p-3 border rounded-xl shadow-sm transition-all group", n(t2).isDarkMode ? "bg-zinc-900 border-zinc-900/30 hover:border-primary" : "bg-white border-gray-100/30 hover:border-primary/30"]) }, [s("div", Ol, [b(s("input", { "onUpdate:modelValue": (t3) => e4.name = t3, class: d(["text-sm font-bold bg-transparent border-none outline-none focus:ring-0 p-0 w-full", n(t2).isDarkMode ? "text-zinc-200" : "text-gray-800"]) }, null, 10, Fl), [[h, e4.name]]), s("button", { onClick: (l2) => n(t2).removeDataSource(e4.id), class: "text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" }, [r(n(Bt), { size: 14 })], 8, Vl)]), s("div", Jl, [b(s("select", { "onUpdate:modelValue": (t3) => e4.type = t3, class: d(["text-[10px] font-bold uppercase tracking-widest border-none rounded-md px-2 py-1 outline-none", n(t2).isDarkMode ? "bg-black text-zinc-400" : "bg-gray-50 text-gray-500"]) }, [...o2[3] || (o2[3] = [s("option", { value: "static" }, "静态数据", -1), s("option", { value: "api" }, "远程接口", -1)])], 10, Kl), [[k, e4.type]])])], 2))), 128))]))]));
} }), [["__scopeId", "data-v-05b9271f"]]), ql = ["onClick", "title"], Ql = { class: "absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50" }, Yl = { class: "h-14 border-b flex items-center justify-between px-4 shrink-0 border-gray-200/20 dark:border-zinc-900/30" }, Xl = { class: "font-bold text-sm text-gray-800 dark:text-zinc-200" }, ea = { class: "flex items-center gap-1" }, ta = ["title"], la = { class: "flex-1 overflow-y-auto" }, aa = Ml(e({ __name: "Sidebar", setup(e2) {
  const o2 = vl(), g2 = t("components"), y2 = [{ id: "components", label: "物料", icon: Et }, { id: "outline", label: "大纲", icon: At }, { id: "datasource", label: "数据", icon: Rt }], v2 = x(() => y2.find((e3) => e3.id === g2.value)?.label || ""), b2 = () => {
    o2.isSidebarPinned || !o2.showSidebar || o2.isDragging || (o2.showSidebar = false);
  };
  return (e3, t2) => (l(), a("div", { class: "flex h-full w-full relative z-10", onMouseleave: b2 }, [s("div", { class: d(["w-12 shrink-0 flex flex-col items-center py-4 gap-4 border-r z-20 transition-colors duration-300", n(o2).isDarkMode ? "bg-[#141414] border-zinc-900/30" : "bg-gray-50 border-gray-200/20"]) }, [(l(), a(i, null, p(y2, (e4) => s("button", { key: e4.id, onClick: (t3) => {
    return l2 = e4.id, g2.value = l2, void (o2.showSidebar || (o2.showSidebar = true));
    var l2;
  }, class: d(["p-2.5 rounded-xl transition-all relative group", g2.value === e4.id && n(o2).showSidebar ? "bg-white text-primary shadow-sm dark:bg-primary dark:text-white" : "text-gray-500 hover:bg-gray-200 dark:text-zinc-400 dark:hover:bg-zinc-900"]), title: e4.label }, [(l(), c(u(e4.icon), { size: 20, "stroke-width": "1.5" })), s("div", Ql, m(e4.label), 1)], 10, ql)), 64))], 2), s("div", { class: d(["flex flex-col w-[272px] shrink-0 h-full overflow-hidden bg-white dark:bg-[#141414] z-10 transition-all duration-300 ease-in-out border-r border-gray-200/20 dark:border-zinc-900/30", n(o2).isSidebarPinned && n(o2).showSidebar ? "relative" : "absolute left-12 top-0 shadow-2xl", n(o2).showSidebar ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0 pointer-events-none"]) }, [s("div", Yl, [s("h2", Xl, m(v2.value), 1), s("div", ea, [s("button", { onClick: t2[0] || (t2[0] = (e4) => n(o2).isSidebarPinned = !n(o2).isSidebarPinned), class: d(["p-1.5 rounded-md transition-colors", n(o2).isSidebarPinned ? "text-primary bg-primary-10 dark:bg-primary dark:text-white" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900"]), title: n(o2).isSidebarPinned ? "取消固定" : "固定侧边栏" }, [r(n(Wt), { size: 14, class: d({ "rotate-45": !n(o2).isSidebarPinned }) }, null, 8, ["class"])], 10, ta), s("button", { onClick: t2[1] || (t2[1] = (e4) => n(o2).showSidebar = false), class: "p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-md transition-colors", title: "收起面板" }, [r(n(Ut), { size: 16 })])])]), s("div", la, ["components" === g2.value ? (l(), c(Bl, { key: 0 })) : "outline" === g2.value ? (l(), c(Ll, { key: 1 })) : "datasource" === g2.value ? (l(), c(Zl, { key: 2 })) : f("", true)])], 2)], 32));
} }), [["__scopeId", "data-v-579c47cc"]]), sa = { class: "w-full" }, ra = Ml(e({ __name: "InputRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), a("div", sa, [r(n(S), { placeholder: e2.element.placeholder, value: void 0, readonly: !e2.isPreview, size: e2.element.props?.size || "middle", bordered: e2.element.props?.bordered ?? true, "allow-clear": e2.element.props?.allowClear ?? true, disabled: e2.element.props?.disabled, maxlength: e2.element.props?.maxlength, "show-count": e2.element.props?.showCount }, null, 8, ["placeholder", "readonly", "size", "bordered", "allow-clear", "disabled", "maxlength", "show-count"])])) }), [["__scopeId", "data-v-469d0e0e"]]), na = { class: "w-full" }, oa = Ml(e({ __name: "NumberInputRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), a("div", na, [r(n(A), { placeholder: e2.element.placeholder, class: "w-full", readonly: !e2.isPreview, size: e2.element.props?.size || "middle", bordered: e2.element.props?.bordered ?? true, disabled: e2.element.props?.disabled, min: e2.element.props?.min, max: e2.element.props?.max, step: e2.element.props?.step || 1, precision: e2.element.props?.precision, controls: e2.element.props?.controls ?? true, keyboard: e2.element.props?.keyboard ?? true, "string-mode": e2.element.props?.stringMode ?? false }, null, 8, ["placeholder", "readonly", "size", "bordered", "disabled", "min", "max", "step", "precision", "controls", "keyboard", "string-mode"])])) }), [["__scopeId", "data-v-bc5162eb"]]), ia = { class: "w-full relative" }, pa = Ml(e({ __name: "SelectRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), a("div", ia, [r(n(R), { placeholder: e2.element.placeholder || "请选择", class: "w-full", disabled: e2.element.props?.disabled || !e2.isPreview, size: e2.element.props?.size || "middle", "allow-clear": e2.element.props?.allowClear ?? true, "show-search": e2.element.props?.showSearch ?? true, mode: e2.element.props?.mode || void 0, "max-tag-count": e2.element.props?.maxTagCount || "responsive", bordered: e2.element.props?.bordered ?? true }, { default: o(() => [(l(true), a(i, null, p(e2.element.options, (e3, t3) => (l(), c(n(W), { key: t3, value: e3 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["placeholder", "disabled", "size", "allow-clear", "show-search", "mode", "max-tag-count", "bordered"])])) }), [["__scopeId", "data-v-df521ca8"]]), da = { class: "w-full" }, ca = Ml(e({ __name: "ButtonRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, s2 = x(() => {
    switch (t2.element.props?.theme || "primary") {
      case "primary":
      case "danger":
      default:
        return "primary";
      case "secondary":
      case "outline":
        return "default";
      case "ghost":
        return "link";
    }
  });
  return (t3, i2) => (l(), a("div", da, [r(n(U), { type: s2.value, danger: "danger" === e2.element.props?.theme || e2.element.props?.danger, ghost: "ghost" === e2.element.props?.theme || e2.element.props?.ghost, size: e2.element.props?.size || "middle", shape: e2.element.props?.shape || "default", block: e2.element.props?.block ?? true, loading: e2.element.props?.loading, disabled: e2.element.props?.disabled || !e2.isPreview && "button" !== e2.element.type, class: d(["transition-all", [e2.element.props?.block ?? 1 ? "w-full" : "", { "border-primary text-primary hover:bg-primary-5": "outline" === e2.element.props?.theme && !e2.isDarkMode, "border-primary text-primary hover:bg-primary-10": "outline" === e2.element.props?.theme && e2.isDarkMode, "bg-primary-10 text-primary border-transparent hover:bg-primary-20": "secondary" === e2.element.props?.theme && !e2.isDarkMode, "bg-primary-20 text-primary-light border-transparent hover:bg-primary-30": "secondary" === e2.element.props?.theme && e2.isDarkMode }]]) }, { default: o(() => [w(m(e2.element.props?.text || "按钮"), 1)]), _: 1 }, 8, ["type", "danger", "ghost", "size", "shape", "block", "loading", "disabled", "class"])]));
} }), [["__scopeId", "data-v-1e771bc3"]]), ua = { class: "flex flex-wrap gap-4 w-full" }, ma = Ml(e({ __name: "CheckboxRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), a("div", ua, [r(n(L), { options: e2.element.options, disabled: e2.element.props?.disabled || !e2.isPreview }, null, 8, ["options", "disabled"])])) }), [["__scopeId", "data-v-041f05e9"]]), xa = { class: "w-full" }, ga = Ml(e({ __name: "TableRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, s2 = x(() => (t2.element.props?.columns || []).map((e3) => ({ title: e3, dataIndex: e3, key: e3 }))), i2 = x(() => {
    const e3 = [], l2 = t2.element.props?.showPagination ? 10 : 3;
    for (let a2 = 0; a2 < l2; a2++) {
      const l3 = { key: a2 };
      (t2.element.props?.columns || []).forEach((e4) => {
        l3[e4] = `数据 ${a2 + 1}`;
      }), e3.push(l3);
    }
    return e3;
  });
  return (t3, p2) => (l(), a("div", xa, [r(n(G), { columns: s2.value, "data-source": i2.value, size: e2.element.props?.size || "small", pagination: !!e2.element.props?.showPagination && { pageSize: e2.element.props?.pageSize || 5 }, bordered: e2.element.props?.bordered ?? true, "show-header": e2.element.props?.showHeader ?? true, sticky: e2.element.props?.sticky ?? false, "row-class-name": (t4, l2) => e2.element.props?.stripe && l2 % 2 == 1 ? "table-striped" : null }, _({ _: 2 }, [e2.element.props?.title ? { name: "title", fn: o(() => [w(m(e2.element.props.title), 1)]), key: "0" } : void 0, e2.element.props?.footer ? { name: "footer", fn: o(() => [w(m(e2.element.props.footer), 1)]), key: "1" } : void 0]), 1032, ["columns", "data-source", "size", "pagination", "bordered", "show-header", "sticky", "row-class-name"])]));
} }), [["__scopeId", "data-v-e866eb1d"]]), ya = Ml(e({ __name: "ContainerRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = vl(), s2 = x(() => "container-grid" === t2.element.type ? N : "div"), r2 = x(() => "container-grid" === t2.element.type ? { align: t2.element.props?.align || "top", justify: t2.element.props?.justify || "start", gutter: t2.element.props?.gutter || [16, 16], wrap: t2.element.props?.wrap ?? true } : {}), n2 = x(() => ({ compact: "space-y-1", normal: "space-y-2", loose: "space-y-4" })[a2.canvasSpacing] || "space-y-2"), i2 = x(() => ({ compact: "gap-1", normal: "gap-2", loose: "gap-4" })[a2.canvasSpacing] || "gap-2"), p2 = x(() => ({ compact: "p-1", normal: "p-2", loose: "p-4" })[a2.canvasSpacing] || "p-2"), d2 = x(() => {
    const e3 = {};
    if ("container-box" === t2.element.type && Object.assign(e3, t2.element.styles || {}), "container-row-col" === t2.element.type) {
      const l3 = t2.element.props?.direction || "row", a3 = t2.element.props?.rowGap ?? 8, s3 = t2.element.props?.colGap ?? 8, r3 = t2.element.props?.minHeight ?? 40;
      e3.gap = "column" === l3 ? `${a3}px` : `${s3}px`, e3.minHeight = `${r3}px`;
    }
    if ("container-flex" === t2.element.type) {
      const s3 = "mobile-portrait" === a2.deviceMode || "mobile-landscape" === a2.deviceMode;
      e3.flexDirection = s3 ? t2.element.props?.mobileDirection || "column" : t2.element.props?.flexDirection || "row", e3.flexWrap = t2.element.props?.flexWrap || "nowrap", e3.justifyContent = (l2 = t2.element.props?.justifyContent, { start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around", evenly: "space-evenly" }[l2 || "start"] || "flex-start"), e3.alignItems = ((e4) => ({ start: "flex-start", end: "flex-end", center: "center", baseline: "baseline", stretch: "stretch" })[e4 || "stretch"] || "stretch")(t2.element.props?.alignItems), e3.rowGap = `${t2.element.props?.rowGap ?? 8}px`, e3.columnGap = `${t2.element.props?.colGap ?? 8}px`;
    }
    var l2;
    return "container-full-width" === t2.element.type && (e3.maxWidth = t2.element.props?.contentWidth || "60%", e3.gap = `${t2.element.props?.rowGap || 0}px`, e3.marginLeft = "auto", e3.marginRight = "auto"), e3;
  }), m2 = x(() => {
    const e3 = `min-h-[24px] h-full ${p2.value}`, l2 = "container-row-col" === t2.element.type ? "" : i2.value;
    switch (t2.element.type) {
      case "container-row-col":
        return [e3, "flex w-full", "column" === t2.element.props?.direction ? "flex-col" : "flex-row", `justify-${t2.element.props?.justifyContent || "start"}`, `items-${t2.element.props?.alignItems || "stretch"}`];
      case "container-col":
        return [e3, "flex flex-col w-full", l2, `justify-${t2.element.props?.justifyContent || "start"}`, `items-${t2.element.props?.alignItems || "stretch"}`];
      case "container-flex":
        return [e3, "flex w-full", l2];
      case "container-grid":
        return `${e3} w-full`;
      case "container-box":
        return `${e3} flex flex-wrap ${l2} items-start content-start w-full`;
      case "container-full-width":
        return `${e3} flex flex-col items-center w-full`;
      default:
        return `${e3} w-full ${n2.value}`;
    }
  });
  return (e3, t3) => (l(), c(u(s2.value), z({ class: m2.value, style: d2.value }, r2.value), { default: o(() => [C(e3.$slots, "default", {}, void 0, true)]), _: 3 }, 16, ["class", "style"]));
} }), [["__scopeId", "data-v-c5e9d7ea"]]), va = { class: "flex justify-center w-full" }, fa = Ml(e({ __name: "IconRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, { StarOutlined: s2 } = nl, r2 = x(() => {
    const e3 = t2.element.props?.icon || "StarOutlined";
    return nl[e3];
  });
  return (t3, o2) => (l(), a("div", va, [r2.value ? (l(), c(u(r2.value), { key: 0, style: y({ fontSize: (e2.element.props?.size || 24) + "px", color: e2.element.props?.color }) }, null, 8, ["style"])) : (l(), c(n(s2), { key: 1, style: { fontSize: "24px" } }))]));
} }), [["__scopeId", "data-v-516cf6c7"]]), ba = { class: "w-full py-4 flex items-center" }, ha = { key: 0, class: "px-2 text-xs text-gray-400" }, ka = Ml(e({ __name: "DividerRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, s2 = x(() => {
    const { text: e3, ...l2 } = t2.element.props || {};
    return l2;
  });
  return (t3, i2) => (l(), a("div", ba, [r(n(H), z(s2.value, { class: "custom-divider" }), { default: o(() => [e2.element.props?.text ? (l(), a("span", ha, m(e2.element.props.text), 1)) : f("", true)]), _: 1 }, 16)]));
} }), [["__scopeId", "data-v-4ce27e44"]]), wa = Ml(e({ __name: "BreadcrumbRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = x(() => (t2.element.props?.items || []).map((e3) => "string" == typeof e3 ? { title: e3 } : e3));
  return (t3, s2) => (l(), c(n(O), z(e2.element.props, { items: a2.value }), null, 16, ["items"]));
} }), [["__scopeId", "data-v-1baf4e41"]]), _a = Ml(e({ __name: "StepsRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = x(() => (t2.element.props?.items || []).map((e3) => "string" == typeof e3 ? { title: e3 } : e3));
  return (t3, s2) => (l(), c(n(F), z(e2.element.props, { items: a2.value }), null, 16, ["items"]));
} }), [["__scopeId", "data-v-b56386eb"]]), za = Ml(e({ __name: "TabsRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = x(() => (t2.element.props?.items || t2.element.options || []).map((e3, t3) => ({ key: e3.key || String(t3 + 1), label: e3.tab || ("string" == typeof e3 ? e3 : `标签 ${t3 + 1}`), children: I("div", { class: "py-4 text-gray-400 text-center italic text-xs" }, `标签页内容 ${t3 + 1}`) })));
  return (t3, s2) => (l(), c(n(V), z(e2.element.props, { items: a2.value }), null, 16, ["items"]));
} }), [["__scopeId", "data-v-1d21bb92"]]), Ca = Ml(e({ __name: "MenuRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = x(() => (t2.element.props?.items || []).map((e3, t3) => ({ key: String(t3), label: e3, title: e3 })));
  return (t3, s2) => (l(), c(n(J), z(e2.element.props, { items: a2.value, class: "w-full" }), null, 16, ["items"]));
} }), [["__scopeId", "data-v-fc7176d7"]]), Ia = Ml(e({ __name: "PaginationRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(K), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-38af1c22"]]), $a = Ml(e({ __name: "RadioRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), c(n(Z), $(D(e2.element.props)), { default: o(() => [(l(true), a(i, null, p(e2.element.options, (e3, t3) => (l(), c(n(q), { key: t3, value: e3 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 16)) }), [["__scopeId", "data-v-e534a44f"]]), Da = Ml(e({ __name: "ImageRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(Q), z(e2.element.props, { preview: e2.element.props?.preview ?? false }), null, 16, ["preview"])) }), [["__scopeId", "data-v-cbc5a32e"]]), ja = Ml(e({ __name: "CardRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(Y), $(D(e2.element.props)), { default: o(() => [...a2[0] || (a2[0] = [s("div", { class: "p-4 text-gray-400 text-center italic text-xs" }, "卡片内容区域", -1)])]), _: 1 }, 16)) }), [["__scopeId", "data-v-8902f5c4"]]), Ma = Ml(e({ __name: "CollapseRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, r2) => (l(), c(n(T), $(D(e2.element.props)), { default: o(() => [(l(true), a(i, null, p(e2.element.props?.items, (e3, t3) => (l(), c(n(E), { key: t3, header: e3.header }, { default: o(() => [s("p", null, m(e3.content), 1)]), _: 2 }, 1032, ["header"]))), 128))]), _: 1 }, 16)) }), [["__scopeId", "data-v-8ea0ebd3"]]), Ba = Ml(e({ __name: "DropdownRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = x(() => ({ items: (t2.element.props?.items || []).map((e3, t3) => "string" == typeof e3 ? { label: e3, key: String(t3) } : e3) }));
  return (t3, s2) => (l(), c(n(X), z(e2.element.props, { menu: a2.value }), { default: o(() => [r(n(U), null, { default: o(() => [w(m(e2.element.props?.text || "下拉菜单") + " ", 1), r(n(ol))]), _: 1 })]), _: 1 }, 16, ["menu"]));
} }), [["__scopeId", "data-v-c46539fe"]]), Pa = { class: "flex items-center justify-between" }, Sa = { class: "flex items-center gap-4" }, Ta = { key: 0, class: "cursor-pointer hover:opacity-70" }, Ea = Ml(e({ __name: "PageHeaderRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, o2) => (l(), a("div", { class: d(["page-header px-6 py-4 border-b transition-colors", e2.isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-100"]) }, [s("div", Pa, [s("div", Sa, [false !== e2.element.props?.backIcon ? (l(), a("div", Ta, [r(n(Lt), { size: 20 })])) : f("", true), s("div", null, [s("h1", { class: d(["text-xl font-semibold m-0", e2.isDarkMode ? "text-zinc-100" : "text-gray-900"]) }, m(e2.element.props?.title || "标题"), 3), e2.element.props?.subTitle ? (l(), a("p", { key: 0, class: d(["text-sm mt-1 m-0", e2.isDarkMode ? "text-zinc-400" : "text-gray-500"]) }, m(e2.element.props?.subTitle), 3)) : f("", true)])]), o2[0] || (o2[0] = s("div", { class: "flex items-center gap-2" }, null, -1))])], 2)) }), [["__scopeId", "data-v-a7471628"]]), Aa = Ml(e({ __name: "TimelineRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), c(n(ee), $(D(e2.element.props)), { default: o(() => [(l(true), a(i, null, p(e2.element.props?.items, (e3, t3) => (l(), c(n(te), { key: t3 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1024))), 128))]), _: 1 }, 16)) }), [["__scopeId", "data-v-721e4743"]]), Ra = Ml(e({ __name: "TourRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(le), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-730ce025"]]), Wa = Ml(e({ __name: "AutoCompleteRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ae), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-d3113b94"]]), Ua = Ml(e({ __name: "CascaderRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(se), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-e5473e2f"]]), La = Ml(e({ __name: "DatePickerRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(re), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-ac5a1725"]]), Ga = Ml(e({ __name: "FormRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ne), z(e2.element.props, { class: "w-full" }), { default: o(() => [...a2[0] || (a2[0] = [s("div", { class: "p-4 border border-dashed border-gray-200 rounded text-center text-gray-400 italic text-xs" }, " 表单容器 (请拖入表单项) ", -1)])]), _: 1 }, 16)) }), [["__scopeId", "data-v-9c6e154a"]]), Na = Ml(e({ __name: "MentionsRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(oe), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-72f8bfdd"]]), Ha = Ml(e({ __name: "RateRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ie), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-9cc85b06"]]), Oa = Ml(e({ __name: "SliderRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(pe), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-b9c5d366"]]), Fa = Ml(e({ __name: "SwitchRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(de), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-1cdf18fc"]]), Va = Ml(e({ __name: "TimePickerRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ce), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-0717d7ee"]]), Ja = Ml(e({ __name: "TransferRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ue), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-7f8f36bf"]]), Ka = Ml(e({ __name: "TreeSelectRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(me), z(e2.element.props, { class: "w-full" }), null, 16)) }), [["__scopeId", "data-v-e081bf5e"]]), Za = { class: "w-full" }, qa = { key: 0, class: "flex flex-col items-center justify-center h-full" }, Qa = Ml(e({ __name: "UploadRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, i2) => (l(), a("div", Za, [r(n(xe), $(D(e2.element.props)), { default: o(() => ["picture-card" === e2.element.props?.listType ? (l(), a("div", qa, [r(n(il)), i2[0] || (i2[0] = s("div", { style: { "margin-top": "8px" } }, "上传", -1))])) : (l(), c(n(U), { key: 1 }, { icon: o(() => [r(n(pl))]), default: o(() => [i2[1] || (i2[1] = w(" 点击上传 ", -1))]), _: 1 }))]), _: 1 }, 16)])) }), [["__scopeId", "data-v-2e832424"]]), Ya = Ml(e({ __name: "AvatarRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ge), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-1d04f7e3"]]), Xa = Ml(e({ __name: "BadgeRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ye), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-23de4256"]]), es = Ml(e({ __name: "CalendarRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(ve), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-0b51bc81"]]), ts = { class: "text-gray-400" }, ls = Ml(e({ __name: "CarouselRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, r2) => (l(), c(n(fe), $(D(e2.element.props)), { default: o(() => [(l(), a(i, null, p(4, (e3) => s("div", { key: e3, class: "h-32 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center" }, [s("h3", ts, "幻灯片 " + m(e3), 1)])), 64))]), _: 1 }, 16)) }), [["__scopeId", "data-v-eaf4d6f5"]]), as = Ml(e({ __name: "CommentRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(be), $(D(e2.element.props)), { content: o(() => [s("p", null, m(e2.element.props?.content || "这是一条评论内容。"), 1)]), _: 1 }, 16)) }), [["__scopeId", "data-v-77b86ed6"]]), ss = Ml(e({ __name: "DescriptionsRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(he), $(D(e2.element.props)), { default: o(() => [r(n(ke), { label: "用户名" }, { default: o(() => [...a2[0] || (a2[0] = [w("admin", -1)])]), _: 1 }), r(n(ke), { label: "电话" }, { default: o(() => [...a2[1] || (a2[1] = [w("1810000000", -1)])]), _: 1 }), r(n(ke), { label: "地址" }, { default: o(() => [...a2[2] || (a2[2] = [w("北京市朝阳区", -1)])]), _: 1 })]), _: 1 }, 16)) }), [["__scopeId", "data-v-6336ec25"]]), rs = Ml(e({ __name: "EmptyRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(we), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-f8c7bec4"]]), ns = Ml(e({ __name: "ListRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, s2) => (l(), c(n(_e), $(D(e2.element.props)), { default: o(() => [(l(true), a(i, null, p(e2.element.props?.dataSource, (e3, t3) => (l(), c(n(ze), { key: t3 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1024))), 128))]), _: 1 }, 16)) }), [["__scopeId", "data-v-b55bdb09"]]), os = Ml(e({ __name: "PopoverRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(Ce), $(D(e2.element.props)), { content: o(() => [s("p", null, m(e2.element.props?.content || "气泡内容"), 1)]), default: o(() => [r(n(U), { type: "primary" }, { default: o(() => [...a2[0] || (a2[0] = [w("悬停查看", -1)])]), _: 1 })]), _: 1 }, 16)) }), [["__scopeId", "data-v-2459232a"]]), is = Ml(e({ __name: "QRCodeRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(Ie), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-d13684f6"]]), ps = Ml(e({ __name: "SegmentedRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n($e), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-489739a3"]]), ds = Ml(e({ __name: "StatisticRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(De), $(D(e2.element.props)), null, 16)) }), [["__scopeId", "data-v-d738b2ee"]]), cs = Ml(e({ __name: "TagRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup: (e2) => (t2, a2) => (l(), c(n(je), $(D(e2.element.props)), { default: o(() => [w(m(e2.element.props?.text || "标签"), 1)]), _: 1 }, 16)) }), [["__scopeId", "data-v-24a43c31"]]), us = { class: "py-4 text-gray-400 text-center italic text-xs" }, ms = { key: 5, class: "p-4 text-gray-400 text-center italic text-xs" }, xs = Ml(e({ __name: "GenericRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, { SelectOption: r2, Radio: g2, RadioGroup: v2, Divider: b2, Breadcrumb: h2, BreadcrumbItem: k2, Dropdown: _2, Menu: C2, MenuItem: I2, PageHeader: $2, Pagination: D2, Steps: j2, Step: M2, AutoComplete: B2, Cascader: S2, DatePicker: T2, Form: E2, Mentions: A2, Rate: R2, Slider: W2, Switch: U2, TimePicker: L2, Transfer: G2, TreeSelect: N2, Upload: H2, Avatar: O2, Badge: F2, Calendar: V2, Card: J2, Carousel: K2, Collapse: Z2, CollapsePanel: q2, Comment: Q2, Descriptions: Y2, Empty: X2, Image: ee2, List: te2, Popover: le2, QRCode: ae2, Segmented: se2, Statistic: re2, Tabs: ne2, TabPane: oe2, Tag: ie2, Timeline: pe2 } = P, { StarOutlined: de2 } = nl, ce2 = x(() => {
    const e3 = t2.element.type;
    return { icon: null, divider: b2, breadcrumb: h2, dropdown: _2, menu: C2, "page-header": $2, pagination: D2, steps: j2, "auto-complete": B2, cascader: S2, "date-picker": T2, form: E2, mentions: A2, radio: v2, rate: R2, slider: W2, switch: U2, "time-picker": L2, transfer: G2, "tree-select": N2, upload: H2, avatar: O2, badge: F2, calendar: V2, card: J2, carousel: K2, collapse: Z2, comment: Q2, descriptions: Y2, empty: X2, image: ee2, list: te2, popover: le2, qrcode: ae2, segmented: se2, statistic: re2, tabs: ne2, tag: ie2, timeline: pe2 }[e3];
  }), ue2 = x(() => {
    if ("icon" !== t2.element.type) return null;
    const e3 = t2.element.props?.icon || "StarOutlined";
    return nl[e3];
  });
  return (t3, x2) => (l(), a("div", { class: d(["w-full", "icon" === e2.element.type ? "flex justify-center" : ""]) }, ["icon" === e2.element.type ? (l(), a(i, { key: 0 }, [ue2.value ? (l(), c(u(ue2.value), { key: 0, style: y({ fontSize: (e2.element.props?.size || 24) + "px", color: e2.element.props?.color }) }, null, 8, ["style"])) : (l(), c(n(de2), { key: 1, style: { fontSize: "24px" } }))], 64)) : (l(), c(u(ce2.value), z({ key: 1 }, e2.element.props, { disabled: e2.element.props?.disabled || !e2.isPreview && !["button", "tabs", "collapse", "steps"].includes(e2.element.type), class: "w-full" }), { default: o(() => ["breadcrumb" === e2.element.type ? (l(true), a(i, { key: 0 }, p(e2.element.props?.items, (e3, t4) => (l(), c(n(k2), { key: t4 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1024))), 128)) : "steps" === e2.element.type ? (l(true), a(i, { key: 1 }, p(e2.element.props?.items, (e3, t4) => (l(), c(n(M2), { key: t4, title: e3 }, null, 8, ["title"]))), 128)) : "tabs" === e2.element.type ? (l(true), a(i, { key: 2 }, p(e2.element.props?.items || e2.element.options, (e3, t4) => (l(), c(n(oe2), { key: e3.key || t4, tab: e3.tab || e3 }, { default: o(() => [s("div", us, "标签页内容 " + m(Number(t4) + 1), 1)]), _: 2 }, 1032, ["tab"]))), 128)) : "menu" === e2.element.type ? (l(true), a(i, { key: 3 }, p(e2.element.props?.items, (e3, t4) => (l(), c(n(I2), { key: t4 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1024))), 128)) : ["select", "radio", "segmented"].includes(e2.element.type) ? (l(), a(i, { key: 4 }, ["select" === e2.element.type ? (l(true), a(i, { key: 0 }, p(e2.element.options, (e3, t4) => (l(), c(n(r2), { key: t4, value: e3 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1032, ["value"]))), 128)) : "radio" === e2.element.type ? (l(true), a(i, { key: 1 }, p(e2.element.options, (e3, t4) => (l(), c(n(g2), { key: t4, value: e3 }, { default: o(() => [w(m(e3), 1)]), _: 2 }, 1032, ["value"]))), 128)) : f("", true)], 64)) : "card" === e2.element.type ? (l(), a("div", ms, "卡片内容区域")) : "image" === e2.element.type ? (l(), c(n(ee2), z({ key: 6 }, e2.element.props, { preview: e2.element.props?.preview ?? false }), null, 16, ["preview"])) : "collapse" === e2.element.type ? (l(true), a(i, { key: 7 }, p(e2.element.props?.items, (e3, t4) => (l(), c(n(q2), { key: t4, header: e3.header }, { default: o(() => [s("p", null, m(e3.content), 1)]), _: 2 }, 1032, ["header"]))), 128)) : e2.element.props?.text ? (l(), a(i, { key: 8 }, [w(m(e2.element.props.text), 1)], 64)) : f("", true)]), _: 1 }, 16, ["disabled"]))], 2));
} }), [["__scopeId", "data-v-88a1e247"]]), gs = Ml(e({ __name: "ElementRenderer", props: { element: {}, isDarkMode: { type: Boolean }, isPreview: { type: Boolean } }, setup(e2) {
  const t2 = e2, a2 = x(() => {
    if (t2.element.type.startsWith("container-")) return ya;
    return { input: ra, "number-input": oa, select: pa, button: ca, checkbox: ma, table: ga, icon: fa, divider: ka, breadcrumb: wa, steps: _a, tabs: za, menu: Ca, pagination: Ia, radio: $a, image: Da, card: ja, collapse: Ma, dropdown: Ba, "page-header": Ea, timeline: Aa, tour: Ra, "auto-complete": Wa, cascader: Ua, "date-picker": La, form: Ga, mentions: Na, rate: Ha, slider: Oa, switch: Fa, "time-picker": Va, transfer: Ja, "tree-select": Ka, upload: Qa, avatar: Ya, badge: Xa, calendar: es, carousel: ls, comment: as, descriptions: ss, empty: rs, list: ns, popover: os, qrcode: is, segmented: ps, statistic: ds, tag: cs }[t2.element.type] || xs;
  });
  return (t3, s2) => (l(), c(u(a2.value), { element: e2.element, "is-dark-mode": e2.isDarkMode, "is-preview": e2.isPreview }, { default: o(() => [C(t3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["element", "is-dark-mode", "is-preview"]));
} }), [["__scopeId", "data-v-2778039b"]]);
function ys(e2, t2) {
  if (!e2.dataTransfer) return;
  const l2 = e2.dataTransfer.getData("application/vue-form-builder-type"), a2 = t2.draggedElementId, { parentId: s2, index: r2, position: n2 } = t2.dropTarget;
  if (null === r2) return t2.clearDropTarget(), t2.draggedElementId = null, void (t2.isDragging = false);
  let o2 = s2, i2 = r2;
  "inside" !== n2 && (i2 = "top" === n2 || "left" === n2 ? r2 : r2 + 1), l2 ? t2.addElement(l2, o2, i2) : a2 && a2 !== o2 && t2.moveElement(a2, o2, i2), t2.clearDropTarget(), t2.draggedElementId = null, t2.isDragging = false;
}
const vs = Ml(e({ __name: "RowColContainer", props: { element: {}, gapValue: {}, spacingValue: {} }, setup(e2) {
  vl();
  const t2 = (e3) => ({ start: "flex-start", end: "flex-end", center: "center", baseline: "baseline", stretch: "stretch" })[e3 || "stretch"] || "stretch";
  return (s2, n2) => {
    return l(), a("div", { class: "row-col-container relative", style: y({ flexDirection: "column" === e2.element.props?.direction ? "column" : "row", gap: "column" === e2.element.props?.direction ? (e2.element.props?.rowGap ?? 8) + "px" : (e2.element.props?.colGap ?? 8) + "px", minHeight: (e2.element.props?.minHeight ?? 40) + "px", justifyContent: (o2 = e2.element.props?.justifyContent, { start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around", evenly: "space-evenly" }[o2 || "start"] || "flex-start"), alignItems: t2(e2.element.props?.alignItems) }) }, [(l(true), a(i, null, p(e2.element.children, (t3, s3) => (l(), a("div", { key: t3.id, class: d(["relative flex-1 flex flex-col items-stretch", { "shrink-0 grow-0 w-auto": "fixed" === t3.props?.widthType }]), style: y("fixed" === t3.props?.widthType ? { width: (t3.props?.width || 200) + "px" } : {}) }, [r(Ps, { element: t3, "parent-id": e2.element.id, index: s3, "is-row-col-child": true, class: "w-full h-full" }, null, 8, ["element", "parent-id", "index"])], 6))), 128))], 4);
    var o2;
  };
} }), [["__scopeId", "data-v-e873b2b8"]]), fs = Ml(e({ __name: "FlexContainer", props: { element: {} }, setup(e2) {
  const t2 = e2, s2 = vl(), n2 = x(() => "mobile-portrait" === s2.deviceMode || "mobile-landscape" === s2.deviceMode ? t2.element.props?.mobileDirection || "column" : t2.element.props?.flexDirection || "row"), o2 = (e3) => ({ start: "flex-start", end: "flex-end", center: "center", baseline: "baseline", stretch: "stretch" })[e3 || "stretch"] || "stretch";
  return (t3, s3) => {
    return l(), a("div", { class: "flex-container", style: y({ flexDirection: n2.value, flexWrap: e2.element.props?.flexWrap || "nowrap", justifyContent: (d2 = e2.element.props?.justifyContent, { start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around", evenly: "space-evenly" }[d2 || "start"] || "flex-start"), alignItems: o2(e2.element.props?.alignItems), rowGap: (e2.element.props?.rowGap ?? 8) + "px", columnGap: (e2.element.props?.colGap ?? 8) + "px" }) }, [(l(true), a(i, null, p(e2.element.children, (t4, s4) => (l(), a("div", { key: t4.id, class: "flex-child", style: y({ flexGrow: t4.props?.flexGrow ?? 0, flexShrink: t4.props?.flexShrink ?? 1, flexBasis: t4.props?.flexBasis || "auto", order: t4.props?.order ?? 0, alignSelf: t4.props?.alignSelf || "auto", width: "fixed" === t4.props?.widthType ? (t4.props?.width || 200) + "px" : void 0 }) }, [r(Ps, { element: t4, "parent-id": e2.element.id, index: s4 }, null, 8, ["element", "parent-id", "index"])], 4))), 128))], 4);
    var d2;
  };
} }), [["__scopeId", "data-v-ff392e20"]]), bs = Ml(e({ __name: "GridContainer", props: { element: {}, gapValue: {}, spacingValue: {} }, setup: (e2) => (t2, s2) => (l(), c(n(N), { class: "grid-container w-full", align: e2.element.props?.align || "top", justify: e2.element.props?.justify || "start", gutter: e2.element.props?.gutter || [16, 16], wrap: e2.element.props?.wrap ?? true }, { default: o(() => [(l(true), a(i, null, p(e2.element.children, (t3, a2) => (l(), c(n(Me), { key: t3.id, class: "grid-child", flex: t3.props?.flex, offset: t3.props?.offset || 0, order: t3.props?.order || 0, pull: t3.props?.pull || 0, push: t3.props?.push || 0, span: t3.props?.span ?? 24 / (e2.element.props?.cols || 3), xs: t3.props?.xs, sm: t3.props?.sm, md: t3.props?.md, lg: t3.props?.lg, xl: t3.props?.xl, xxl: t3.props?.xxl }, { default: o(() => [r(Ps, { element: t3, "parent-id": e2.element.id, index: a2 }, null, 8, ["element", "parent-id", "index"])]), _: 2 }, 1032, ["flex", "offset", "order", "pull", "push", "span", "xs", "sm", "md", "lg", "xl", "xxl"]))), 128))]), _: 1 }, 8, ["align", "justify", "gutter", "wrap"])) }), [["__scopeId", "data-v-2e39f6ae"]]), hs = Ml(e({ __name: "BoxContainer", props: { element: {}, gapValue: {}, spacingValue: {} }, setup: (e2) => (t2, s2) => (l(), a("div", { class: "box-container", style: y({ gap: e2.gapValue, ...e2.element.styles }) }, [(l(true), a(i, null, p(e2.element.children, (t3, s3) => (l(), a("div", { key: t3.id, class: "box-child" }, [r(Ps, { element: t3, "parent-id": e2.element.id, index: s3 }, null, 8, ["element", "parent-id", "index"])]))), 128))], 4)) }), [["__scopeId", "data-v-eda8cbec"]]), ks = Ml(e({ __name: "ColContainer", props: { element: {}, gapValue: {}, spacingValue: {} }, setup: (e2) => (t2, s2) => (l(), a("div", { class: "col-container", style: y({ gap: e2.gapValue, ...e2.element.styles }) }, [(l(true), a(i, null, p(e2.element.children, (t3, s3) => (l(), a("div", { key: t3.id, class: d(["col-child", { "fixed-width": "fixed" === t3.props?.widthType }]), style: y("fixed" === t3.props?.widthType ? { width: (t3.props?.width || 200) + "px" } : {}) }, [r(Ps, { element: t3, "parent-id": e2.element.id, index: s3 }, null, 8, ["element", "parent-id", "index"])], 6))), 128))], 4)) }), [["__scopeId", "data-v-a1acccf3"]]), ws = { class: "full-width-container" }, _s = Ml(e({ __name: "FullWidthContainer", props: { element: {} }, setup: (e2) => (t2, n2) => (l(), a("div", ws, [s("div", { class: "full-width-content", style: y({ maxWidth: e2.element.props?.contentWidth || "60%", gap: (e2.element.props?.rowGap || 0) + "px" }) }, [(l(true), a(i, null, p(e2.element.children, (t3, s2) => (l(), a("div", { key: t3.id, class: "full-width-child" }, [r(Ps, { element: t3, "parent-id": e2.element.id, index: s2 }, null, 8, ["element", "parent-id", "index"])]))), 128))], 4)])) }), [["__scopeId", "data-v-85fda02b"]]), zs = Ml(e({ __name: "DefaultContainer", props: { element: {}, gapValue: {}, spacingValue: {} }, setup: (e2) => (t2, s2) => (l(), a("div", { class: "default-container", style: y({ gap: e2.spacingValue }) }, [(l(true), a(i, null, p(e2.element.children, (t3, s3) => (l(), a("div", { key: t3.id, class: "default-child" }, [r(Ps, { element: t3, "parent-id": e2.element.id, index: s3 }, null, 8, ["element", "parent-id", "index"])]))), 128))], 4)) }), [["__scopeId", "data-v-c41d1018"]]), Cs = { key: 1, class: "absolute inset-0 border-1 border-primary bg-primary-10 rounded-lg z-40 pointer-events-none" }, Is = { key: 2, class: "absolute inset-0 overflow-hidden pointer-events-none z-10" }, $s = { key: 5, class: "absolute -right-2 -top-2 flex gap-1 transition-all duration-200 z-30 scale-75 origin-top-right" }, Ds = { key: 6, class: "w-full h-full" }, js = { key: 8, class: "absolute -inset-1 bg-primary-5 pointer-events-none rounded-lg" }, Ms = { key: 9, class: "absolute -inset-1 border-1 border-dashed border-primary pointer-events-none rounded-lg z-20" }, Bs = e({ __name: "CanvasElement", props: { element: {}, parentId: {}, index: {}, isRowColChild: { type: Boolean } }, setup(e2) {
  const o2 = { "container-row-col": vs, "container-col": ks, "container-flex": fs, "container-grid": bs, "container-box": hs, "container-full-width": _s }, i2 = e2, p2 = vl(), m2 = t(false), g2 = t(false), b2 = (e3) => {
    p2.setHoveredElement(i2.element.id), "row" === e3 ? m2.value = true : g2.value = true;
  }, h2 = () => {
    m2.value = false, g2.value = false;
  }, k2 = x(() => ({ compact: "0.25rem", normal: "0.5rem", loose: "1rem" })[p2.canvasSpacing] || "0.5rem"), w2 = x(() => ({ compact: "0.25rem", normal: "0.5rem", loose: "1rem" })[p2.canvasSpacing] || "0.5rem"), _2 = x(() => ({ compact: "p-1", normal: "p-2", loose: "p-4" })[p2.canvasSpacing] || "p-2"), z2 = x(() => i2.element.type.startsWith("container-")), C2 = (e3) => {
    e3.dataTransfer && (e3.dataTransfer.effectAllowed = "move"), p2.draggedElementId = i2.element.id, p2.isDragging = true;
  }, I2 = () => {
    p2.draggedElementId = null, p2.isDragging = false, p2.clearDropTarget();
  }, $2 = (e3) => {
    e3.dataTransfer && (e3.dataTransfer.dropEffect = p2.draggedElementId ? "move" : "copy");
    const t2 = (function(e4, t3, l2) {
      const a2 = t3.getBoundingClientRect(), s2 = e4.clientX - a2.left, r2 = e4.clientY - a2.top, n2 = a2.width, o3 = a2.height;
      if (l2) {
        const e5 = 0.25 * n2, t4 = 0.25 * o3;
        if (s2 > e5 && s2 < n2 - e5 && r2 > t4 && r2 < o3 - t4) return "inside";
      }
      const i3 = r2, p3 = o3 - r2, d2 = s2, c2 = n2 - s2, u2 = Math.min(i3, p3, d2, c2);
      return u2 === i3 ? "top" : u2 === p3 ? "bottom" : u2 === d2 ? "left" : "right";
    })(e3, e3.currentTarget, z2.value);
    "inside" === t2 ? p2.setDropTarget(i2.element.id, i2.element.children?.length || 0, "inside") : p2.setDropTarget(i2.parentId, i2.index, t2);
  }, D2 = (e3) => {
    ys(e3, p2);
  };
  return (t2, i3) => {
    return l(), a("div", { class: d(["canvas-element-wrapper relative transition-all duration-200 rounded-lg", [z2.value ? "min-h-[32px]" : "", n(p2).hoveredElementId === e2.element.id || n(p2).selectedElementId === e2.element.id ? "z-10" : "", n(p2).draggedElementId === e2.element.id ? "opacity-50" : "", "fixed" === e2.element.props?.widthType ? "w-auto shrink-0" : "w-full"]]), style: y("fixed" === e2.element.props?.widthType ? { width: (e2.element.props?.width || 200) + "px" } : {}), draggable: "true", onDragstart: v(C2, ["stop"]), onDragend: v(I2, ["stop"]), onDragover: v($2, ["prevent", "stop"]), onDrop: v(D2, ["prevent", "stop"]), onClick: i3[5] || (i3[5] = v((t3) => n(p2).selectElement(e2.element.id), ["stop"])), onMouseenter: i3[6] || (i3[6] = v((t3) => n(p2).setHoveredElement(e2.element.id), ["stop"])), onMouseleave: i3[7] || (i3[7] = v((t3) => n(p2).setHoveredElement(e2.parentId), ["stop"])) }, [n(p2).dropTarget.parentId === e2.parentId && n(p2).dropTarget.index === e2.index ? (l(), a("div", { key: 0, class: d(["absolute bg-primary z-50 transition-all duration-150", "left" === n(p2).dropTarget.position ? "top-0 left-0 w-1 h-full -translate-x-1/2" : "right" === n(p2).dropTarget.position ? "top-0 right-0 w-1 h-full translate-x-1/2" : "top" === n(p2).dropTarget.position ? "top-0 left-0 w-full h-1 -translate-y-1/2" : "bottom-0 left-0 w-full h-1 translate-y-1/2"]) }, null, 2)) : f("", true), z2.value && n(p2).dropTarget.parentId === e2.element.id && "inside" === n(p2).dropTarget.position ? (l(), a("div", Cs)) : f("", true), e2.isRowColChild ? (l(), a("div", Is, [s("div", { class: d(["absolute top-1/2 left-0 w-full border-t border-dashed border-primary/40 transition-opacity duration-150", m2.value && n(p2).hoveredElementId === e2.element.id ? "opacity-100" : "opacity-0"]) }, null, 2), s("div", { class: d(["absolute left-1/2 top-0 h-full border-l border-dashed border-primary/40 transition-opacity duration-150", g2.value && n(p2).hoveredElementId === e2.element.id ? "opacity-100" : "opacity-0"]) }, null, 2)])) : f("", true), e2.isRowColChild ? (l(), a("div", { key: 3, class: d(["absolute -left-4 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-200", n(p2).hoveredElementId === e2.element.id ? "opacity-100" : "opacity-0 pointer-events-none"]), onMouseenter: i3[1] || (i3[1] = (e3) => b2("row")), onMouseleave: h2 }, [s("button", { onClick: i3[0] || (i3[0] = v((t3) => n(p2).splitRow(e2.element.id), ["stop"])), class: "bg-primary hover:bg-primary-dark text-white rounded-full p-1.5 shadow-xl hover:scale-125 transition-all flex items-center justify-center ring-2 ring-white dark:ring-slate-700 group/scissors", title: "行拆分" }, [r(n(Gt), { size: 14, class: "text-white group-hover/scissors:scale-110 transition-transform" })])], 34)) : f("", true), e2.isRowColChild ? (l(), a("div", { key: 4, class: d(["absolute -top-4 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-200", n(p2).hoveredElementId === e2.element.id ? "opacity-100" : "opacity-0 pointer-events-none"]), onMouseenter: i3[3] || (i3[3] = (e3) => b2("col")), onMouseleave: h2 }, [s("button", { onClick: i3[2] || (i3[2] = v((t3) => n(p2).splitCol(e2.element.id), ["stop"])), class: "bg-primary hover:bg-primary-dark text-white rounded-full p-1.5 shadow-xl hover:scale-125 transition-all rotate-90 flex items-center justify-center ring-2 ring-white dark:ring-slate-700 group/scissors", title: "列拆分" }, [r(n(Gt), { size: 14, class: "text-white group-hover/scissors:scale-110 transition-transform" })])], 34)) : f("", true), n(p2).hoveredElementId === e2.element.id ? (l(), a("div", $s, [s("button", { onClick: i3[4] || (i3[4] = v((t3) => n(p2).removeElement(e2.element.id), ["stop"])), class: d(["p-1 rounded-lg shadow-md border transition-all hover:scale-110", n(p2).isDarkMode ? "bg-slate-800 text-slate-400 hover:text-red-400 border-zinc-900/30" : "bg-white text-gray-400 hover:text-red-600 border-gray-100/30"]) }, [r(n(Bt), { size: 14 })], 2)])) : f("", true), z2.value ? (l(), a("div", Ds, [s("div", { class: d(["min-h-[40px] rounded-lg transition-all duration-300", "border-dashed border-1", _2.value, n(p2).isDarkMode ? "border-slate-700 bg-slate-900/20" : "border-slate-300 bg-slate-50/50", n(p2).hoveredElementId === e2.element.id ? n(p2).isDarkMode ? "bg-primary-10 border-primary" : "bg-primary-5 border-primary-30" : ""]) }, [(l(), c(u((x2 = e2.element.type, o2[x2] || zs)), { element: e2.element, "gap-value": w2.value, "spacing-value": k2.value }, null, 8, ["element", "gap-value", "spacing-value"])), 0 === e2.element.children?.length ? (l(), a("div", { key: 0, class: d(["flex flex-col items-center justify-center py-1 pointer-events-none", n(p2).isDarkMode ? "text-slate-600" : "text-gray-300"]) }, [r(n(Tt), { size: 14, class: "mb-0.5 opacity-50" }), i3[8] || (i3[8] = s("span", { class: "text-[8px] font-bold uppercase tracking-wider" }, "拖拽组件到此处", -1))], 2)) : f("", true)], 2)])) : (l(), a("div", { key: 7, class: d(["w-full pointer-events-none", "button" !== e2.element.type ? "min-w-[160px]" : "min-w-[80px]"]) }, [r(gs, { element: e2.element, "is-dark-mode": n(p2).isDarkMode }, null, 8, ["element", "is-dark-mode"])], 2)), n(p2).hoveredElementId === e2.element.id && n(p2).selectedElementId !== e2.element.id ? (l(), a("div", js)) : f("", true), n(p2).selectedElementId === e2.element.id ? (l(), a("div", Ms)) : f("", true)], 38);
    var x2;
  };
} }), Ps = Ml(Bs, [["__scopeId", "data-v-56641631"]]);
function Ss(e2, t2 = 8) {
  const l2 = vl(), a2 = () => {
    if (!e2.value || !l2.isAutoZoom) return;
    const a3 = e2.value.clientWidth - t2, s3 = l2.canvasWidth;
    l2.canvasZoom = a3 > 0 && a3 < s3 ? Number((a3 / s3 * 100).toFixed(2)) : 100;
  };
  let s2 = null;
  return j(() => {
    a2(), e2.value && (s2 = new ResizeObserver(() => {
      window.requestAnimationFrame(() => {
        a2();
      });
    }), s2.observe(e2.value));
  }), M(() => {
    s2 && s2.disconnect();
  }), B(() => [l2.canvasWidth, l2.isAutoZoom, l2.showSidebar, l2.showPropertiesPanel], () => {
    setTimeout(a2, 50);
  }, { deep: true }), { calculateZoom: a2 };
}
const Ts = { key: 0, class: "h-1 bg-primary w-full mt-2 z-50" }, Es = e({ __name: "Canvas", setup(e2) {
  const o2 = vl(), c2 = t(null);
  Ss(c2, 8);
  const u2 = x(() => ({ compact: "space-y-2", normal: "space-y-6", loose: "space-y-12" })[o2.canvasSpacing] || "space-y-6"), m2 = (e3) => {
    e3.dataTransfer && (e3.dataTransfer.dropEffect = "copy");
    e3.target.closest(".canvas-element-wrapper") || o2.setDropTarget(null, o2.elements.length, "bottom");
  }, g2 = (e3) => {
  }, b2 = (e3) => {
    ys(e3, o2);
  };
  return (e3, t2) => (l(), a("div", { ref_key: "containerRef", ref: c2, class: d(["flex-1 px-[4px] py-10 overflow-auto transition-colors duration-300", n(o2).isDarkMode ? "bg-black" : "bg-[#F1F3F6]"]), onClick: t2[0] || (t2[0] = (e4) => n(o2).selectElement(null)) }, [s("div", { class: d(["mx-auto transition-all duration-500 ai-gradient-border shadow-xl", n(o2).isDarkMode ? "shadow-primary/10" : "shadow-gray-200/50"]), style: y({ width: n(o2).canvasWidth + "px", zoom: n(o2).canvasZoom / 100 }) }, [s("div", { class: d(["w-full h-full min-h-[800px] rounded-[calc(1rem-1.5px)] p-10 relative overflow-hidden", n(o2).isDarkMode ? "bg-[#141414]" : "bg-white"]) }, [0 === n(o2).elements.length ? (l(), a("div", { key: 0, class: d(["h-[500px] flex flex-col items-center justify-center text-gray-400 border-2 border-dashed rounded-2xl p-12 group transition-all duration-500", n(o2).isDarkMode ? "border-zinc-800 bg-zinc-900/50 hover:border-primary/40 hover:bg-primary/5" : "border-gray-200 bg-gray-50 hover:border-primary/40 hover:bg-primary/5"]), onDragover: v(m2, ["prevent"]), onDragleave: g2, onDrop: v(b2, ["prevent"]) }, [s("div", { class: d(["w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500", n(o2).isDarkMode ? "bg-zinc-900" : "bg-white"]) }, [r(n(Tt), { size: 32, class: "text-gray-300 group-hover:text-primary" })], 2), s("p", { class: d(["text-lg font-bold group-hover:text-primary transition-colors", n(o2).isDarkMode ? "text-slate-400" : "text-gray-500"]) }, "拖拽组件到此处", 2), t2[1] || (t2[1] = s("p", { class: "text-xs mt-2 text-gray-400" }, "支持基础容器、基础元素等多种组件", -1))], 34)) : (l(), a("div", { key: 1, class: d(["relative h-full min-h-[200px] pb-32", u2.value]), onDragover: v(m2, ["prevent"]), onDragleave: g2, onDrop: v(b2, ["prevent"]) }, [(l(true), a(i, null, p(n(o2).elements, (e4, t3) => (l(), a("div", { key: e4.id, class: d(["relative group/item", "fixed" === e4.props?.widthType ? "w-auto shrink-0" : "w-full"]) }, [null === n(o2).dropTarget.parentId && n(o2).dropTarget.index === t3 ? (l(), a("div", { key: 0, class: d(["absolute bg-primary z-50 transition-all duration-150", "left" === n(o2).dropTarget.position ? "top-0 left-0 w-1 h-full -translate-x-1/2" : "right" === n(o2).dropTarget.position ? "top-0 right-0 w-1 h-full translate-x-1/2" : "top" === n(o2).dropTarget.position ? "top-0 left-0 w-full h-1 -translate-y-1/2" : "bottom-0 left-0 w-full h-1 translate-y-1/2"]) }, null, 2)) : f("", true), r(Ps, { element: e4, "parent-id": null, index: t3 }, null, 8, ["element", "index"])], 2))), 128)), n(o2).elements.length > 0 && null === n(o2).dropTarget.parentId && n(o2).dropTarget.index === n(o2).elements.length ? (l(), a("div", Ts)) : f("", true)], 34))], 2)], 6)], 2));
} }), As = Ml(Es, [["__scopeId", "data-v-214b5c4f"]]), Rs = { class: "px-6 py-4 border-b border-gray-100/30 dark:border-zinc-900/30 flex items-center justify-between bg-gray-50 dark:bg-[#141414]" }, Ws = { class: "flex items-center gap-3" }, Us = { class: "p-2 bg-primary rounded-xl shadow-lg shadow-primary-20" }, Ls = { class: "text-sm font-bold text-gray-900 dark:text-white leading-tight" }, Gs = { class: "text-[10px] text-gray-400 dark:text-zinc-500 font-medium uppercase tracking-wider" }, Ns = { class: "flex items-center gap-1" }, Hs = ["title"], Os = e({ __name: "PanelHeader", props: { title: {}, subtitle: {} }, setup(e2) {
  const t2 = vl();
  return (o2, i2) => (l(), a("div", Rs, [s("div", Ws, [s("div", Us, [r(n(Nt), { size: 18, class: "text-white" })]), s("div", null, [s("h2", Ls, m(e2.title), 1), s("p", Gs, m(e2.subtitle), 1)])]), s("div", Ns, [s("button", { onClick: i2[0] || (i2[0] = (e3) => n(t2).isPropertiesPanelPinned = !n(t2).isPropertiesPanelPinned), class: d(["p-1.5 rounded-md transition-colors", n(t2).isPropertiesPanelPinned ? "text-primary bg-primary-10 dark:bg-primary-20" : "text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900"]), title: n(t2).isPropertiesPanelPinned ? "取消固定" : "固定侧边栏" }, [r(n(Wt), { size: 14, class: d({ "rotate-45": !n(t2).isPropertiesPanelPinned }) }, null, 8, ["class"])], 10, Hs)])]));
} }), Fs = Ml(Os, [["__scopeId", "data-v-30faf84a"]]), Vs = { class: "space-y-6" }, Js = { class: "space-y-5" }, Ks = e({ __name: "CommonProperties", props: { element: {}, parentElement: {}, isDarkMode: { type: Boolean } }, emits: ["update:field", "update:props"], setup: (e2) => (t2, o2) => (l(), a("div", Vs, [s("section", null, [o2[5] || (o2[5] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-primary rounded-full" }), w(" 基础信息 ")], -1)), s("div", Js, [s("div", null, [o2[2] || (o2[2] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "组件 ID", -1)), s("div", { class: d(["px-4 py-2 border rounded-xl text-[10px] font-mono truncate", e2.isDarkMode ? "bg-slate-950 border-zinc-900/30 text-slate-500" : "bg-gray-50 border-gray-100/30 text-gray-400"]) }, m(e2.element.id), 3)]), s("div", null, [o2[3] || (o2[3] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "显示名称", -1)), r(n(S), { value: e2.element.label, onInput: o2[0] || (o2[0] = (e3) => t2.$emit("update:field", "label", e3.target.value)), placeholder: "请输入显示名称" }, null, 8, ["value"])]), e2.element.type.startsWith("container-") ? f("", true) : (l(), a("div", { key: 0, class: d(["flex items-center justify-between p-4 border rounded-xl", e2.isDarkMode ? "bg-slate-800 border-zinc-900/30 text-slate-200" : "bg-gray-50 border-gray-100/30"]) }, [o2[4] || (o2[4] = s("label", { class: "text-sm font-bold cursor-pointer" }, "必填校验", -1)), r(n(de), { checked: e2.element.required, onChange: o2[1] || (o2[1] = (l2) => t2.$emit("update:field", "required", !e2.element.required)) }, null, 8, ["checked"])], 2))])])])) }), Zs = Ml(Ks, [["__scopeId", "data-v-62ea4c92"]]), qs = { key: 0 }, Qs = { class: "space-y-4" }, Ys = { key: 0 }, Xs = e({ __name: "LayoutProperties", props: { element: {}, parentElement: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => "container-row-col" === e2.parentElement?.type || "container-flex" === e2.parentElement?.type || "container-col" === e2.parentElement?.type ? (l(), a("section", qs, [o3[4] || (o3[4] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-blue-500 rounded-full" }), w(" 布局设置 ")], -1)), s("div", Qs, [s("div", null, [o3[2] || (o3[2] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "宽度类型", -1)), r(n($e), { value: e2.element.props?.widthType || "auto", block: "", onChange: o3[0] || (o3[0] = (e3) => p2("widthType", e3)), options: [{ value: "auto", label: "自适应" }, { value: "fixed", label: "固定" }] }, null, 8, ["value"])]), "fixed" === e2.element.props?.widthType ? (l(), a("div", Ys, [o3[3] || (o3[3] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "固定宽度 (px)", -1)), r(n(A), { value: e2.element.props?.width || 200, onChange: o3[1] || (o3[1] = (e3) => p2("width", e3)), class: "w-full", min: 0 }, null, 8, ["value"])])) : f("", true)])])) : f("", true);
} }), er = Ml(Xs, [["__scopeId", "data-v-127ce862"]]), tr = { class: "space-y-6" }, lr = { class: "space-y-4" }, ar = { class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, sr = { class: "space-y-4" }, rr = { class: "flex items-center justify-between" }, nr = { class: "flex items-center justify-between" }, or = { class: "grid grid-cols-2 gap-4" }, ir = { class: "flex items-center justify-between" }, pr = { class: "flex items-center justify-between" }, dr = { class: "flex items-center justify-between" }, cr = { class: "flex items-center justify-between" }, ur = { class: "flex items-center justify-between" }, mr = e({ __name: "ButtonProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", tr, [s("section", null, [i3[10] || (i3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "内容设置", -1)), s("div", lr, [s("div", null, [i3[9] || (i3[9] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "按钮文字", -1)), r(n(S), { value: e2.element.props?.text, onInput: i3[0] || (i3[0] = (e3) => d2("text", e3.target.value)), placeholder: "请输入按钮文字", size: "small" }, null, 8, ["value"])])])]), s("section", ar, [i3[30] || (i3[30] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "样式设置", -1)), s("div", sr, [s("div", null, [i3[16] || (i3[16] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "按钮主题", -1)), r(n(R), { value: e2.element.props?.theme || "primary", onChange: i3[1] || (i3[1] = (e3) => d2("theme", e3)), class: "w-full", size: "small" }, { default: o(() => [r(n(W), { value: "primary" }, { default: o(() => [...i3[11] || (i3[11] = [w("主要按钮", -1)])]), _: 1 }), r(n(W), { value: "secondary" }, { default: o(() => [...i3[12] || (i3[12] = [w("次要按钮", -1)])]), _: 1 }), r(n(W), { value: "outline" }, { default: o(() => [...i3[13] || (i3[13] = [w("描边按钮", -1)])]), _: 1 }), r(n(W), { value: "ghost" }, { default: o(() => [...i3[14] || (i3[14] = [w("幽灵按钮", -1)])]), _: 1 }), r(n(W), { value: "danger" }, { default: o(() => [...i3[15] || (i3[15] = [w("危险按钮", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", rr, [i3[20] || (i3[20] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "按钮尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "middle", onChange: i3[2] || (i3[2] = (e3) => d2("size", e3.target.value)), size: "small", "button-style": "solid" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...i3[17] || (i3[17] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "middle" }, { default: o(() => [...i3[18] || (i3[18] = [w("中", -1)])]), _: 1 }), r(n(Be), { value: "large" }, { default: o(() => [...i3[19] || (i3[19] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", nr, [i3[24] || (i3[24] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "按钮形状", -1)), r(n(Z), { value: e2.element.props?.shape || "default", onChange: i3[3] || (i3[3] = (e3) => d2("shape", e3.target.value)), size: "small", "button-style": "solid" }, { default: o(() => [r(n(Be), { value: "default" }, { default: o(() => [...i3[21] || (i3[21] = [w("默认", -1)])]), _: 1 }), r(n(Be), { value: "round" }, { default: o(() => [...i3[22] || (i3[22] = [w("圆角", -1)])]), _: 1 }), r(n(Be), { value: "circle" }, { default: o(() => [...i3[23] || (i3[23] = [w("圆形", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", or, [s("div", ir, [i3[25] || (i3[25] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "撑满容器", -1)), r(n(de), { checked: e2.element.props?.block ?? true, onChange: i3[4] || (i3[4] = (e3) => d2("block", e3)), size: "small" }, null, 8, ["checked"])]), s("div", pr, [i3[26] || (i3[26] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "危险状态", -1)), r(n(de), { checked: e2.element.props?.danger ?? false, onChange: i3[5] || (i3[5] = (e3) => d2("danger", e3)), size: "small" }, null, 8, ["checked"])]), s("div", dr, [i3[27] || (i3[27] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "幽灵模式", -1)), r(n(de), { checked: e2.element.props?.ghost ?? false, onChange: i3[6] || (i3[6] = (e3) => d2("ghost", e3)), size: "small" }, null, 8, ["checked"])]), s("div", cr, [i3[28] || (i3[28] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "加载中", -1)), r(n(de), { checked: e2.element.props?.loading ?? false, onChange: i3[7] || (i3[7] = (e3) => d2("loading", e3)), size: "small" }, null, 8, ["checked"])])]), s("div", ur, [i3[29] || (i3[29] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用状态", -1)), r(n(de), { checked: e2.element.props?.disabled ?? false, onChange: i3[8] || (i3[8] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), xr = Ml(mr, [["__scopeId", "data-v-da3904ea"]]), gr = { class: "space-y-6" }, yr = { class: "space-y-4" }, vr = { class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, fr = { class: "space-y-4" }, br = { class: "flex items-center justify-between" }, hr = { class: "grid grid-cols-2 gap-4" }, kr = { class: "flex items-center justify-between" }, wr = { key: 0, class: "flex items-center justify-between" }, _r = { key: 1, class: "flex items-center justify-between" }, zr = { key: 2, class: "flex items-center justify-between" }, Cr = { key: 3, class: "flex items-center justify-between" }, Ir = { class: "flex items-center justify-between" }, $r = { key: 0, class: "space-y-3" }, Dr = { class: "flex items-center justify-between" }, jr = { class: "flex items-center justify-between" }, Mr = { key: 1, class: "space-y-3" }, Br = { class: "flex items-center justify-between" }, Pr = { class: "flex items-center justify-between" }, Sr = { class: "flex items-center justify-between" }, Tr = { class: "flex items-center justify-between" }, Er = e({ __name: "InputProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:field", "update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", gr, [s("section", null, [i3[15] || (i3[15] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "内容设置", -1)), s("div", yr, [s("div", null, [i3[14] || (i3[14] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "占位提示", -1)), r(n(S), { value: e2.element.placeholder, onInput: i3[0] || (i3[0] = (e3) => t3.$emit("update:field", "placeholder", e3.target.value)), placeholder: "请输入占位提示", size: "small" }, null, 8, ["value"])])])]), s("section", vr, [i3[32] || (i3[32] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "样式设置", -1)), s("div", fr, [s("div", br, [i3[19] || (i3[19] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "组件尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "middle", onChange: i3[1] || (i3[1] = (e3) => d2("size", e3.target.value)), size: "small", "button-style": "solid" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...i3[16] || (i3[16] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "middle" }, { default: o(() => [...i3[17] || (i3[17] = [w("中", -1)])]), _: 1 }), r(n(Be), { value: "large" }, { default: o(() => [...i3[18] || (i3[18] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", hr, [s("div", kr, [i3[20] || (i3[20] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示边框", -1)), r(n(de), { checked: e2.element.props?.bordered ?? true, onChange: i3[2] || (i3[2] = (e3) => d2("bordered", e3)), size: "small" }, null, 8, ["checked"])]), "input" === e2.element.type ? (l(), a("div", wr, [i3[21] || (i3[21] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "允许清除", -1)), r(n(de), { checked: e2.element.props?.allowClear ?? true, onChange: i3[3] || (i3[3] = (e3) => d2("allowClear", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true), "number-input" === e2.element.type ? (l(), a("div", _r, [i3[22] || (i3[22] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示控制器", -1)), r(n(de), { checked: e2.element.props?.controls ?? true, onChange: i3[4] || (i3[4] = (e3) => d2("controls", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true), "number-input" === e2.element.type ? (l(), a("div", zr, [i3[23] || (i3[23] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "键盘快捷键", -1)), r(n(de), { checked: e2.element.props?.keyboard ?? true, onChange: i3[5] || (i3[5] = (e3) => d2("keyboard", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true), "number-input" === e2.element.type ? (l(), a("div", Cr, [i3[24] || (i3[24] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "字符串模式", -1)), r(n(de), { checked: e2.element.props?.stringMode ?? false, onChange: i3[6] || (i3[6] = (e3) => d2("stringMode", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true), s("div", Ir, [i3[25] || (i3[25] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用状态", -1)), r(n(de), { checked: e2.element.props?.disabled ?? false, onChange: i3[7] || (i3[7] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])])]), "input" === e2.element.type ? (l(), a("div", $r, [s("div", Dr, [i3[26] || (i3[26] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "最大长度", -1)), r(n(A), { value: e2.element.props?.maxlength, onChange: i3[8] || (i3[8] = (e3) => d2("maxlength", e3)), min: 1, size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", jr, [i3[27] || (i3[27] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示字数", -1)), r(n(de), { checked: e2.element.props?.showCount ?? false, onChange: i3[9] || (i3[9] = (e3) => d2("showCount", e3)), size: "small" }, null, 8, ["checked"])])])) : f("", true), "number-input" === e2.element.type ? (l(), a("div", Mr, [s("div", Br, [i3[28] || (i3[28] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "最小值", -1)), r(n(A), { value: e2.element.props?.min, onChange: i3[10] || (i3[10] = (e3) => d2("min", e3)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", Pr, [i3[29] || (i3[29] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "最大值", -1)), r(n(A), { value: e2.element.props?.max, onChange: i3[11] || (i3[11] = (e3) => d2("max", e3)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", Sr, [i3[30] || (i3[30] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "步长", -1)), r(n(A), { value: e2.element.props?.step || 1, onChange: i3[12] || (i3[12] = (e3) => d2("step", e3)), min: 1e-6, size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", Tr, [i3[31] || (i3[31] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "数值精度", -1)), r(n(A), { value: e2.element.props?.precision, onChange: i3[13] || (i3[13] = (e3) => d2("precision", e3)), min: 0, max: 10, size: "small", class: "w-24" }, null, 8, ["value"])])])) : f("", true)])])]));
} }), Ar = Ml(Er, [["__scopeId", "data-v-6c2acdcc"]]), Rr = { class: "space-y-6" }, Wr = { class: "space-y-3" }, Ur = { class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, Lr = { class: "space-y-4" }, Gr = { key: 0, class: "flex items-center justify-between" }, Nr = { key: 1, class: "flex items-center justify-between" }, Hr = { key: 2, class: "space-y-4" }, Or = { class: "flex items-center justify-between" }, Fr = { class: "grid grid-cols-2 gap-4" }, Vr = { class: "flex items-center justify-between" }, Jr = { class: "flex items-center justify-between" }, Kr = { class: "flex items-center justify-between" }, Zr = { class: "flex items-center justify-between" }, qr = { key: 3, class: "flex items-center justify-between" }, Qr = e({ __name: "OptionsProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:field", "update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = () => {
    const e3 = [...d2.element.options || [], `选项 ${(d2.element.options?.length || 0) + 1}`];
    c2("update:field", "options", e3);
  };
  return (t3, x2) => {
    const y2 = g("ARadio");
    return l(), a("div", Rr, [s("section", null, [x2[9] || (x2[9] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "选项管理", -1)), s("div", Wr, [(l(true), a(i, null, p(e2.element.options, (t4, s2) => (l(), a("div", { key: s2, class: "flex items-center gap-2 group" }, [r(n(S), { value: t4, onInput: (e3) => ((e4, t5) => {
      const l2 = [...d2.element.options || []];
      l2[e4] = t5, c2("update:field", "options", l2);
    })(Number(s2), e3.target.value), placeholder: "选项名称", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e3) => ((e4) => {
      const t5 = d2.element.options.filter((t6, l2) => l2 !== e4);
      c2("update:field", "options", t5);
    })(Number(s2)), disabled: e2.element.options.length <= 1, class: "flex items-center justify-center p-1" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick", "disabled"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, class: "flex items-center justify-center gap-2 h-9 rounded-lg" }, { default: o(() => [r(n(Tt), { size: 14 }), x2[8] || (x2[8] = w(" 添加新选项 ", -1))]), _: 1 })])]), s("section", Ur, [x2[26] || (x2[26] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "样式设置", -1)), s("div", Lr, [["select", "radio", "segmented"].includes(e2.element.type) ? (l(), a("div", Gr, [x2[13] || (x2[13] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "middle", onChange: x2[0] || (x2[0] = (e3) => u2("size", e3.target.value)), size: "small", "button-style": "solid" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...x2[10] || (x2[10] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "middle" }, { default: o(() => [...x2[11] || (x2[11] = [w("中", -1)])]), _: 1 }), r(n(Be), { value: "large" }, { default: o(() => [...x2[12] || (x2[12] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])) : f("", true), "radio" === e2.element.type ? (l(), a("div", Nr, [x2[16] || (x2[16] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "单选框样式", -1)), r(n(Z), { value: e2.element.props?.optionType || "default", onChange: x2[1] || (x2[1] = (e3) => u2("optionType", e3.target.value)), size: "small" }, { default: o(() => [r(y2, { value: "default" }, { default: o(() => [...x2[14] || (x2[14] = [w("默认", -1)])]), _: 1 }), r(y2, { value: "button" }, { default: o(() => [...x2[15] || (x2[15] = [w("按钮", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])) : f("", true), "select" === e2.element.type ? (l(), a("div", Hr, [s("div", Or, [x2[20] || (x2[20] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "选择模式", -1)), r(n(R), { value: e2.element.props?.mode || "default", onChange: x2[2] || (x2[2] = (e3) => u2("mode", "default" === e3 ? void 0 : e3)), size: "small", class: "w-32" }, { default: o(() => [r(n(W), { value: "default" }, { default: o(() => [...x2[17] || (x2[17] = [w("单选", -1)])]), _: 1 }), r(n(W), { value: "multiple" }, { default: o(() => [...x2[18] || (x2[18] = [w("多选", -1)])]), _: 1 }), r(n(W), { value: "tags" }, { default: o(() => [...x2[19] || (x2[19] = [w("标签", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Fr, [s("div", Vr, [x2[21] || (x2[21] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "允许清除", -1)), r(n(de), { checked: e2.element.props?.allowClear ?? true, onChange: x2[3] || (x2[3] = (e3) => u2("allowClear", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Jr, [x2[22] || (x2[22] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "支持搜索", -1)), r(n(de), { checked: e2.element.props?.showSearch ?? true, onChange: x2[4] || (x2[4] = (e3) => u2("showSearch", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Kr, [x2[23] || (x2[23] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示边框", -1)), r(n(de), { checked: e2.element.props?.bordered ?? true, onChange: x2[5] || (x2[5] = (e3) => u2("bordered", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Zr, [x2[24] || (x2[24] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用状态", -1)), r(n(de), { checked: e2.element.props?.disabled ?? false, onChange: x2[6] || (x2[6] = (e3) => u2("disabled", e3)), size: "small" }, null, 8, ["checked"])])])])) : f("", true), ["checkbox", "radio", "segmented"].includes(e2.element.type) ? (l(), a("div", qr, [x2[25] || (x2[25] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用状态", -1)), r(n(de), { checked: e2.element.props?.disabled ?? false, onChange: x2[7] || (x2[7] = (e3) => u2("disabled", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true)])])]);
  };
} }), Yr = Ml(Qr, [["__scopeId", "data-v-f922793f"]]), Xr = { class: "space-y-6" }, en = { class: "space-y-3" }, tn = { class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, ln = { class: "space-y-4" }, an = { class: "flex items-center justify-between" }, sn = { class: "grid grid-cols-2 gap-4" }, rn = { class: "flex items-center justify-between" }, nn = { class: "flex items-center justify-between" }, on = { class: "flex items-center justify-between" }, pn = { class: "flex items-center justify-between" }, dn = { class: "space-y-3 pt-2" }, cn = { class: "flex items-center justify-between" }, un = { key: 0, class: "flex items-center justify-between pl-4" }, mn = { class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, xn = { class: "space-y-4" }, gn = e({ __name: "TableProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    c2("update:props", { ...d2.element.props, [e3]: t3 });
  }, m2 = () => {
    const e3 = [...d2.element.props?.columns || [], `列 ${(d2.element.props?.columns?.length || 0) + 1}`];
    u2("columns", e3);
  };
  return (t3, c3) => (l(), a("div", Xr, [s("section", null, [c3[10] || (c3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "列管理", -1)), s("div", en, [(l(true), a(i, null, p(e2.element.props?.columns, (t4, s2) => (l(), a("div", { key: s2, class: "flex items-center gap-2 group" }, [r(n(S), { value: t4, onInput: (e3) => ((e4, t5) => {
    const l2 = [...d2.element.props?.columns || []];
    l2[e4] = t5, u2("columns", l2);
  })(Number(s2), e3.target.value), placeholder: "列名称", class: "flex-1" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e3) => ((e4) => {
    const t5 = d2.element.props.columns.filter((t6, l2) => l2 !== e4);
    u2("columns", t5);
  })(Number(s2)), disabled: e2.element.props.columns.length <= 1, class: "flex items-center justify-center p-1" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick", "disabled"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, class: "flex items-center justify-center gap-2 h-9 rounded-lg" }, { default: o(() => [r(n(Tt), { size: 14 }), c3[9] || (c3[9] = w(" 添加列 ", -1))]), _: 1 })])]), s("section", tn, [c3[21] || (c3[21] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "表格设置", -1)), s("div", ln, [s("div", an, [c3[14] || (c3[14] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "表格尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "small", onChange: c3[0] || (c3[0] = (e3) => u2("size", e3.target.value)), size: "small", "button-style": "solid" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...c3[11] || (c3[11] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "middle" }, { default: o(() => [...c3[12] || (c3[12] = [w("中", -1)])]), _: 1 }), r(n(Be), { value: "default" }, { default: o(() => [...c3[13] || (c3[13] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", sn, [s("div", rn, [c3[15] || (c3[15] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示边框", -1)), r(n(de), { checked: e2.element.props?.bordered ?? true, onChange: c3[1] || (c3[1] = (e3) => u2("bordered", e3)), size: "small" }, null, 8, ["checked"])]), s("div", nn, [c3[16] || (c3[16] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "斑马纹", -1)), r(n(de), { checked: e2.element.props?.stripe ?? false, onChange: c3[2] || (c3[2] = (e3) => u2("stripe", e3)), size: "small" }, null, 8, ["checked"])]), s("div", on, [c3[17] || (c3[17] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示表头", -1)), r(n(de), { checked: e2.element.props?.showHeader ?? true, onChange: c3[3] || (c3[3] = (e3) => u2("showHeader", e3)), size: "small" }, null, 8, ["checked"])]), s("div", pn, [c3[18] || (c3[18] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "固定表头", -1)), r(n(de), { checked: e2.element.props?.sticky ?? false, onChange: c3[4] || (c3[4] = (e3) => u2("sticky", e3)), size: "small" }, null, 8, ["checked"])])]), s("div", dn, [s("div", cn, [c3[19] || (c3[19] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示分页", -1)), r(n(de), { checked: e2.element.props?.showPagination ?? false, onChange: c3[5] || (c3[5] = (e3) => u2("showPagination", e3)), size: "small" }, null, 8, ["checked"])]), e2.element.props?.showPagination ? (l(), a("div", un, [c3[20] || (c3[20] = s("span", { class: "text-xs text-gray-500" }, "每页行数", -1)), r(n(A), { value: e2.element.props?.pageSize || 5, onChange: c3[6] || (c3[6] = (e3) => u2("pageSize", e3)), min: 1, size: "small", class: "w-20" }, null, 8, ["value"])])) : f("", true)])])]), s("section", mn, [c3[24] || (c3[24] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "文本设置", -1)), s("div", xn, [s("div", null, [c3[22] || (c3[22] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "表格标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: c3[7] || (c3[7] = (e3) => u2("title", e3.target.value)), placeholder: "输入表格标题", size: "small" }, null, 8, ["value"])]), s("div", null, [c3[23] || (c3[23] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "表格页脚", -1)), r(n(S), { value: e2.element.props?.footer, onInput: c3[8] || (c3[8] = (e3) => u2("footer", e3.target.value)), placeholder: "输入表格页脚", size: "small" }, null, 8, ["value"])])])])]));
} }), yn = Ml(gn, [["__scopeId", "data-v-6151bb0d"]]), vn = { class: "grid grid-cols-2 gap-4" }, fn = { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, bn = { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, hn = e({ __name: "GapProperties", props: { rowValue: {}, colValue: {}, rowKey: { default: "rowGap" }, colKey: { default: "colGap" }, rowLabel: { default: "行间距 (px)" }, colLabel: { default: "列间距 (px)" } }, emits: ["update"], setup: (e2) => (t2, o2) => (l(), a("div", vn, [s("div", null, [s("label", fn, m(e2.rowLabel), 1), r(n(A), { value: e2.rowValue, onChange: o2[0] || (o2[0] = (l2) => t2.$emit("update", e2.rowKey, l2)), class: "w-full", min: 0 }, null, 8, ["value"])]), s("div", null, [s("label", bn, m(e2.colLabel), 1), r(n(A), { value: e2.colValue, onChange: o2[1] || (o2[1] = (l2) => t2.$emit("update", e2.colKey, l2)), class: "w-full", min: 0 }, null, 8, ["value"])])])) }), kn = Ml(hn, [["__scopeId", "data-v-bbd87851"]]), wn = { class: "space-y-4" }, _n = e({ __name: "FlexProperties", props: { element: {} }, emits: ["update"], setup: (e2) => (t2, d2) => (l(), a("div", wn, [s("div", null, [d2[9] || (d2[9] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "布局方向 (电脑)", -1)), r(n(Z), { value: e2.element.props?.flexDirection || "row", onChange: d2[0] || (d2[0] = (e3) => t2.$emit("update", "flexDirection", e3.target.value)), "button-style": "solid", size: "small", class: "w-full" }, { default: o(() => [r(n(Be), { value: "row" }, { default: o(() => [...d2[7] || (d2[7] = [w("水平 (Row)", -1)])]), _: 1 }), r(n(Be), { value: "column" }, { default: o(() => [...d2[8] || (d2[8] = [w("垂直 (Column)", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", null, [d2[10] || (d2[10] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "行数 (自动生成)", -1)), r(n(R), { value: e2.element.props?.rows || 1, onChange: d2[1] || (d2[1] = (e3) => t2.$emit("update", "rows", e3)), class: "w-full" }, { default: o(() => [(l(), a(i, null, p([1, 2, 3, 4, 5, 6, 8, 10], (e3) => r(n(W), { key: e3, value: e3 }, { default: o(() => [w(m(e3) + " 行", 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), s("div", null, [d2[13] || (d2[13] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "布局方向 (手机)", -1)), r(n(Z), { value: e2.element.props?.mobileDirection || "column", onChange: d2[2] || (d2[2] = (e3) => t2.$emit("update", "mobileDirection", e3.target.value)), "button-style": "solid", size: "small", class: "w-full" }, { default: o(() => [r(n(Be), { value: "row" }, { default: o(() => [...d2[11] || (d2[11] = [w("水平 (Row)", -1)])]), _: 1 }), r(n(Be), { value: "column" }, { default: o(() => [...d2[12] || (d2[12] = [w("垂直 (Column)", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", null, [d2[16] || (d2[16] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "换行设置", -1)), r(n(Z), { value: e2.element.props?.flexWrap || "nowrap", onChange: d2[3] || (d2[3] = (e3) => t2.$emit("update", "flexWrap", e3.target.value)), "button-style": "solid", size: "small", class: "w-full" }, { default: o(() => [r(n(Be), { value: "nowrap" }, { default: o(() => [...d2[14] || (d2[14] = [w("不换行", -1)])]), _: 1 }), r(n(Be), { value: "wrap" }, { default: o(() => [...d2[15] || (d2[15] = [w("换行", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", null, [d2[23] || (d2[23] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "主轴对齐 (Justify)", -1)), r(n(R), { value: e2.element.props?.justifyContent || "start", onChange: d2[4] || (d2[4] = (e3) => t2.$emit("update", "justifyContent", e3)), class: "w-full" }, { default: o(() => [r(n(W), { value: "start" }, { default: o(() => [...d2[17] || (d2[17] = [w("起点对齐", -1)])]), _: 1 }), r(n(W), { value: "center" }, { default: o(() => [...d2[18] || (d2[18] = [w("居中对齐", -1)])]), _: 1 }), r(n(W), { value: "end" }, { default: o(() => [...d2[19] || (d2[19] = [w("终点对齐", -1)])]), _: 1 }), r(n(W), { value: "between" }, { default: o(() => [...d2[20] || (d2[20] = [w("两端对齐", -1)])]), _: 1 }), r(n(W), { value: "around" }, { default: o(() => [...d2[21] || (d2[21] = [w("分散对齐", -1)])]), _: 1 }), r(n(W), { value: "evenly" }, { default: o(() => [...d2[22] || (d2[22] = [w("平均分配", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", null, [d2[29] || (d2[29] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "交叉轴对齐 (Align)", -1)), r(n(R), { value: e2.element.props?.alignItems || "stretch", onChange: d2[5] || (d2[5] = (e3) => t2.$emit("update", "alignItems", e3)), class: "w-full" }, { default: o(() => [r(n(W), { value: "start" }, { default: o(() => [...d2[24] || (d2[24] = [w("起点对齐", -1)])]), _: 1 }), r(n(W), { value: "center" }, { default: o(() => [...d2[25] || (d2[25] = [w("居中对齐", -1)])]), _: 1 }), r(n(W), { value: "end" }, { default: o(() => [...d2[26] || (d2[26] = [w("终点对齐", -1)])]), _: 1 }), r(n(W), { value: "stretch" }, { default: o(() => [...d2[27] || (d2[27] = [w("拉伸对齐", -1)])]), _: 1 }), r(n(W), { value: "baseline" }, { default: o(() => [...d2[28] || (d2[28] = [w("基线对齐", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), r(kn, { "row-value": e2.element.props?.rowGap ?? 8, "col-value": e2.element.props?.colGap ?? 8, onUpdate: d2[6] || (d2[6] = (e3, l2) => t2.$emit("update", e3, l2)) }, null, 8, ["row-value", "col-value"])])) }), zn = Ml(_n, [["__scopeId", "data-v-2eeaa6f8"]]), Cn = { class: "space-y-4" }, In = e({ __name: "RowColProperties", props: { element: {} }, emits: ["update"], setup: (e2) => (t2, o2) => (l(), a("div", Cn, [r(kn, { "row-value": e2.element.props?.rowGap ?? 8, "col-value": e2.element.props?.colGap ?? 8, onUpdate: o2[0] || (o2[0] = (e3, l2) => t2.$emit("update", e3, l2)) }, null, 8, ["row-value", "col-value"]), s("div", null, [o2[2] || (o2[2] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "最小高度 (px)", -1)), r(n(A), { value: e2.element.props?.minHeight ?? 40, onChange: o2[1] || (o2[1] = (e3) => t2.$emit("update", "minHeight", e3)), class: "w-full", min: 0 }, null, 8, ["value"])])])) }), $n = Ml(In, [["__scopeId", "data-v-c347c405"]]), Dn = { class: "space-y-4" }, jn = e({ __name: "GridProperties", props: { element: {} }, emits: ["update"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = [...d2.element.props?.gutter || [16, 16]];
    "rowGap" === e3 ? l2[0] = t3 : l2[1] = t3, c2("update", "gutter", l2);
  };
  return (t3, d3) => (l(), a("div", Dn, [s("div", null, [d3[5] || (d3[5] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "默认列数 (等分)", -1)), r(n(R), { value: e2.element.props?.cols || 3, onChange: d3[0] || (d3[0] = (e3) => t3.$emit("update", "cols", e3)), class: "w-full" }, { default: o(() => [(l(), a(i, null, p([1, 2, 3, 4, 6, 8, 12, 24], (e3) => r(n(W), { key: e3, value: e3 }, { default: o(() => [w(m(e3) + " 列", 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), s("div", null, [d3[6] || (d3[6] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "行数 (自动生成)", -1)), r(n(R), { value: e2.element.props?.rows || 1, onChange: d3[1] || (d3[1] = (e3) => t3.$emit("update", "rows", e3)), class: "w-full" }, { default: o(() => [(l(), a(i, null, p([1, 2, 3, 4, 5, 6, 8, 10], (e3) => r(n(W), { key: e3, value: e3 }, { default: o(() => [w(m(e3) + " 行", 1)]), _: 2 }, 1032, ["value"])), 64))]), _: 1 }, 8, ["value"])]), s("div", null, [d3[11] || (d3[11] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "垂直对齐 (Align)", -1)), r(n(R), { value: e2.element.props?.align || "top", onChange: d3[2] || (d3[2] = (e3) => t3.$emit("update", "align", e3)), class: "w-full" }, { default: o(() => [r(n(W), { value: "top" }, { default: o(() => [...d3[7] || (d3[7] = [w("顶部对齐", -1)])]), _: 1 }), r(n(W), { value: "middle" }, { default: o(() => [...d3[8] || (d3[8] = [w("居中对齐", -1)])]), _: 1 }), r(n(W), { value: "bottom" }, { default: o(() => [...d3[9] || (d3[9] = [w("底部对齐", -1)])]), _: 1 }), r(n(W), { value: "stretch" }, { default: o(() => [...d3[10] || (d3[10] = [w("拉伸对齐", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", null, [d3[18] || (d3[18] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "水平排列 (Justify)", -1)), r(n(R), { value: e2.element.props?.justify || "start", onChange: d3[3] || (d3[3] = (e3) => t3.$emit("update", "justify", e3)), class: "w-full" }, { default: o(() => [r(n(W), { value: "start" }, { default: o(() => [...d3[12] || (d3[12] = [w("左对齐", -1)])]), _: 1 }), r(n(W), { value: "end" }, { default: o(() => [...d3[13] || (d3[13] = [w("右对齐", -1)])]), _: 1 }), r(n(W), { value: "center" }, { default: o(() => [...d3[14] || (d3[14] = [w("居中对齐", -1)])]), _: 1 }), r(n(W), { value: "space-around" }, { default: o(() => [...d3[15] || (d3[15] = [w("分散对齐", -1)])]), _: 1 }), r(n(W), { value: "space-between" }, { default: o(() => [...d3[16] || (d3[16] = [w("两端对齐", -1)])]), _: 1 }), r(n(W), { value: "space-evenly" }, { default: o(() => [...d3[17] || (d3[17] = [w("平均分配", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), r(kn, { "row-value": e2.element.props?.gutter?.[0] ?? 16, "col-value": e2.element.props?.gutter?.[1] ?? 16, "row-label": "水平间距 (px)", "col-label": "垂直间距 (px)", onUpdate: u2 }, null, 8, ["row-value", "col-value"]), s("div", null, [d3[19] || (d3[19] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "自动换行 (Wrap)", -1)), r(n(de), { checked: e2.element.props?.wrap ?? true, onChange: d3[4] || (d3[4] = (e3) => t3.$emit("update", "wrap", e3)) }, null, 8, ["checked"])])]));
} }), Mn = Ml(jn, [["__scopeId", "data-v-0df3a525"]]), Bn = { class: "space-y-4" }, Pn = e({ __name: "FullWidthProperties", props: { element: {} }, emits: ["update"], setup: (e2) => (t2, o2) => (l(), a("div", Bn, [s("div", null, [o2[2] || (o2[2] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "行间距 (px)", -1)), r(n(A), { value: e2.element.props?.rowGap ?? 16, onChange: o2[0] || (o2[0] = (e3) => t2.$emit("update", "rowGap", e3)), class: "w-full", min: 0 }, null, 8, ["value"])]), s("div", null, [o2[3] || (o2[3] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "中间内容宽度 (px/%)", -1)), r(n(S), { value: e2.element.props?.contentWidth || "60%", onChange: o2[1] || (o2[1] = (e3) => t2.$emit("update", "contentWidth", e3.target.value)), placeholder: "例如: 1200px 或 60%" }, null, 8, ["value"])])])) }), Sn = Ml(Pn, [["__scopeId", "data-v-e6c5e432"]]), Tn = { class: "space-y-4" }, En = e({ __name: "ContainerProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const s2 = e2, r2 = t2, n2 = { "container-flex": zn, "container-row-col": $n, "container-grid": Mn, "container-full-width": Sn }, o2 = x(() => n2[s2.element.type]), i2 = (e3, t3) => {
    const l2 = { ...s2.element.props || {}, [e3]: t3 };
    r2("update:props", l2);
  };
  return (t3, s3) => (l(), a("div", Tn, [o2.value ? (l(), c(u(o2.value), { key: 0, element: e2.element, onUpdate: i2 }, null, 40, ["element"])) : f("", true)]));
} }), An = Ml(En, [["__scopeId", "data-v-0776fde2"]]), Rn = { class: "space-y-6" }, Wn = { class: "grid grid-cols-2 gap-2" }, Un = { class: "text-[10px] text-gray-400 w-4" }, Ln = { class: "grid grid-cols-2 gap-2" }, Gn = { class: "text-[10px] text-gray-400 w-4" }, Nn = { class: "space-y-2" }, Hn = { class: "flex items-center gap-2" }, On = { class: "flex items-center gap-2" }, Fn = { class: "flex items-center gap-2" }, Vn = ["value"], Jn = { class: "flex items-center gap-2" }, Kn = e({ __name: "BoxProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:styles"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.styles || {} }, a2 = ["marginTop", "marginBottom", "marginLeft", "marginRight", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "borderWidth", "borderRadius"];
    if ("" !== t3 && null != t3) {
      let s2 = t3.toString();
      !a2.includes(e3) || s2.endsWith("px") || isNaN(Number(s2)) || (s2 = `${s2}px`), l2[e3] = s2;
    } else delete l2[e3];
    c2("update:styles", l2);
  }, x2 = (e3) => {
    if (null == e3 || "" === e3) return "";
    return e3.toString().replace("px", "");
  };
  return (t3, d3) => (l(), a("div", Rn, [s("div", null, [d3[5] || (d3[5] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "外边距 (Margin)", -1)), s("div", Wn, [(l(), a(i, null, p(["Top", "Bottom", "Left", "Right"], (t4) => s("div", { key: t4, class: "flex items-center gap-2" }, [s("span", Un, m("Top" === t4 ? "上" : "Bottom" === t4 ? "下" : "Left" === t4 ? "左" : "右"), 1), r(n(A), { value: x2(e2.element.styles?.[`margin${t4}`]), onChange: (e3) => u2(`margin${t4}`, e3), placeholder: "0", class: "w-full" }, null, 8, ["value", "onChange"])])), 64))])]), s("div", null, [d3[6] || (d3[6] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "内边距 (Padding)", -1)), s("div", Ln, [(l(), a(i, null, p(["Top", "Bottom", "Left", "Right"], (t4) => s("div", { key: t4, class: "flex items-center gap-2" }, [s("span", Gn, m("Top" === t4 ? "上" : "Bottom" === t4 ? "下" : "Left" === t4 ? "左" : "右"), 1), r(n(A), { value: x2(e2.element.styles?.[`padding${t4}`]), onChange: (e3) => u2(`padding${t4}`, e3), placeholder: "0", class: "w-full" }, null, 8, ["value", "onChange"])])), 64))])]), s("div", null, [d3[15] || (d3[15] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "边框 (Border)", -1)), s("div", Nn, [s("div", Hn, [d3[7] || (d3[7] = s("span", { class: "text-[10px] text-gray-400 w-12" }, "宽度", -1)), r(n(A), { value: x2(e2.element.styles?.borderWidth), onChange: d3[0] || (d3[0] = (e3) => u2("borderWidth", e3)), placeholder: "0", class: "flex-1" }, null, 8, ["value"])]), s("div", On, [d3[12] || (d3[12] = s("span", { class: "text-[10px] text-gray-400 w-12" }, "样式", -1)), r(n(R), { value: e2.element.styles?.borderStyle || "solid", onChange: d3[1] || (d3[1] = (e3) => u2("borderStyle", e3)), class: "flex-1" }, { default: o(() => [r(n(W), { value: "solid" }, { default: o(() => [...d3[8] || (d3[8] = [w("实线", -1)])]), _: 1 }), r(n(W), { value: "dashed" }, { default: o(() => [...d3[9] || (d3[9] = [w("虚线", -1)])]), _: 1 }), r(n(W), { value: "dotted" }, { default: o(() => [...d3[10] || (d3[10] = [w("点线", -1)])]), _: 1 }), r(n(W), { value: "none" }, { default: o(() => [...d3[11] || (d3[11] = [w("无", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Fn, [d3[13] || (d3[13] = s("span", { class: "text-[10px] text-gray-400 w-12" }, "颜色", -1)), s("input", { type: "color", value: e2.element.styles?.borderColor || "#f3f4f6", onInput: d3[2] || (d3[2] = (e3) => u2("borderColor", e3.target.value)), class: "w-8 h-8 rounded cursor-pointer border-0 p-0" }, null, 40, Vn), r(n(S), { value: e2.element.styles?.borderColor || "", onInput: d3[3] || (d3[3] = (e3) => u2("borderColor", e3.target.value)), placeholder: "#f3f4f6", class: "flex-1" }, null, 8, ["value"])]), s("div", Jn, [d3[14] || (d3[14] = s("span", { class: "text-[10px] text-gray-400 w-12" }, "圆角", -1)), r(n(A), { value: x2(e2.element.styles?.borderRadius), onChange: d3[4] || (d3[4] = (e3) => u2("borderRadius", e3)), placeholder: "0", class: "flex-1" }, null, 8, ["value"])])])])]));
} }), Zn = Ml(Kn, [["__scopeId", "data-v-067b6ac0"]]), qn = { class: "space-y-4" }, Qn = { class: "grid grid-cols-2 gap-4" }, Yn = e({ __name: "FlexChildProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", qn, [s("div", Qn, [s("div", null, [i3[5] || (i3[5] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "Flex Grow (放大)", -1)), r(n(A), { value: e2.element.props?.flexGrow ?? 0, onChange: i3[0] || (i3[0] = (e3) => d2("flexGrow", e3)), class: "w-full", min: 0 }, null, 8, ["value"])]), s("div", null, [i3[6] || (i3[6] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "Flex Shrink (缩小)", -1)), r(n(A), { value: e2.element.props?.flexShrink ?? 1, onChange: i3[1] || (i3[1] = (e3) => d2("flexShrink", e3)), class: "w-full", min: 0 }, null, 8, ["value"])])]), s("div", null, [i3[7] || (i3[7] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "Flex Basis (基准)", -1)), r(n(S), { value: e2.element.props?.flexBasis || "auto", onChange: i3[2] || (i3[2] = (e3) => d2("flexBasis", e3.target.value)), placeholder: "例如: 200px, 20%, auto", class: "w-full" }, null, 8, ["value"])]), s("div", null, [i3[8] || (i3[8] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "排序 (Order)", -1)), r(n(A), { value: e2.element.props?.order ?? 0, onChange: i3[3] || (i3[3] = (e3) => d2("order", e3)), class: "w-full" }, null, 8, ["value"])]), s("div", null, [i3[14] || (i3[14] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "自身对齐 (Align Self)", -1)), r(n(R), { value: e2.element.props?.alignSelf || "auto", onChange: i3[4] || (i3[4] = (e3) => d2("alignSelf", e3)), class: "w-full" }, { default: o(() => [r(n(W), { value: "auto" }, { default: o(() => [...i3[9] || (i3[9] = [w("自动 (Auto)", -1)])]), _: 1 }), r(n(W), { value: "start" }, { default: o(() => [...i3[10] || (i3[10] = [w("起点对齐", -1)])]), _: 1 }), r(n(W), { value: "center" }, { default: o(() => [...i3[11] || (i3[11] = [w("居中对齐", -1)])]), _: 1 }), r(n(W), { value: "end" }, { default: o(() => [...i3[12] || (i3[12] = [w("终点对齐", -1)])]), _: 1 }), r(n(W), { value: "stretch" }, { default: o(() => [...i3[13] || (i3[13] = [w("拉伸对齐", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])]));
} }), Xn = Ml(Yn, [["__scopeId", "data-v-cecafc45"]]), eo = { class: "space-y-4" }, to = { class: "grid grid-cols-2 gap-4" }, lo = { class: "grid grid-cols-2 gap-4" }, ao = { class: "grid grid-cols-2 gap-4" }, so = { class: "pt-2 border-t border-gray-100/30 dark:border-zinc-900/30" }, ro = { class: "grid grid-cols-2 gap-4" }, no = e({ __name: "GridColProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", eo, [s("div", to, [s("div", null, [o3[12] || (o3[12] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "占位格数 (Span)", -1)), r(n(A), { value: e2.element.props?.span, onChange: o3[0] || (o3[0] = (e3) => p2("span", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认等分" }, null, 8, ["value"])]), s("div", null, [o3[13] || (o3[13] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "偏移格数 (Offset)", -1)), r(n(A), { value: e2.element.props?.offset ?? 0, onChange: o3[1] || (o3[1] = (e3) => p2("offset", e3)), class: "w-full", min: 0, max: 24 }, null, 8, ["value"])])]), s("div", lo, [s("div", null, [o3[14] || (o3[14] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "左侧推格 (Push)", -1)), r(n(A), { value: e2.element.props?.push ?? 0, onChange: o3[2] || (o3[2] = (e3) => p2("push", e3)), class: "w-full", min: 0, max: 24 }, null, 8, ["value"])]), s("div", null, [o3[15] || (o3[15] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "右侧拉格 (Pull)", -1)), r(n(A), { value: e2.element.props?.pull ?? 0, onChange: o3[3] || (o3[3] = (e3) => p2("pull", e3)), class: "w-full", min: 0, max: 24 }, null, 8, ["value"])])]), s("div", ao, [s("div", null, [o3[16] || (o3[16] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "顺序 (Order)", -1)), r(n(A), { value: e2.element.props?.order ?? 0, onChange: o3[4] || (o3[4] = (e3) => p2("order", e3)), class: "w-full" }, null, 8, ["value"])]), s("div", null, [o3[17] || (o3[17] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide" }, "Flex 填充", -1)), r(n(S), { value: e2.element.props?.flex, onChange: o3[5] || (o3[5] = (e3) => p2("flex", e3.target.value)), class: "w-full", placeholder: "如: 1, auto, none" }, null, 8, ["value"])])]), s("div", so, [o3[24] || (o3[24] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "响应式配置 (格数)", -1)), s("div", ro, [s("div", null, [o3[18] || (o3[18] = s("label", { class: "block text-[10px] font-bold text-gray-500 mb-1" }, "超小屏 (xs <576px)", -1)), r(n(A), { value: e2.element.props?.xs, onChange: o3[6] || (o3[6] = (e3) => p2("xs", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认" }, null, 8, ["value"])]), s("div", null, [o3[19] || (o3[19] = s("label", { class: "block text-[10px] font-bold text-gray-500 mb-1" }, "小屏 (sm ≥576px)", -1)), r(n(A), { value: e2.element.props?.sm, onChange: o3[7] || (o3[7] = (e3) => p2("sm", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认" }, null, 8, ["value"])]), s("div", null, [o3[20] || (o3[20] = s("label", { class: "block text-[10px] font-bold text-gray-500 mb-1" }, "中屏 (md ≥768px)", -1)), r(n(A), { value: e2.element.props?.md, onChange: o3[8] || (o3[8] = (e3) => p2("md", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认" }, null, 8, ["value"])]), s("div", null, [o3[21] || (o3[21] = s("label", { class: "block text-[10px] font-bold text-gray-500 mb-1" }, "大屏 (lg ≥992px)", -1)), r(n(A), { value: e2.element.props?.lg, onChange: o3[9] || (o3[9] = (e3) => p2("lg", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认" }, null, 8, ["value"])]), s("div", null, [o3[22] || (o3[22] = s("label", { class: "block text-[10px] font-bold text-gray-500 mb-1" }, "超大屏 (xl ≥1200px)", -1)), r(n(A), { value: e2.element.props?.xl, onChange: o3[10] || (o3[10] = (e3) => p2("xl", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认" }, null, 8, ["value"])]), s("div", null, [o3[23] || (o3[23] = s("label", { class: "block text-[10px] font-bold text-gray-500 mb-1" }, "极宽屏 (xxl ≥1600px)", -1)), r(n(A), { value: e2.element.props?.xxl, onChange: o3[11] || (o3[11] = (e3) => p2("xxl", e3)), class: "w-full", min: 0, max: 24, placeholder: "默认" }, null, 8, ["value"])])])])]));
} }), oo = Ml(no, [["__scopeId", "data-v-47ba5a99"]]), io = { class: "space-y-6" }, po = { class: "space-y-4" }, co = { key: 0 }, uo = { key: 1, class: "flex items-center justify-between" }, mo = { key: 2, class: "flex items-center justify-between" }, xo = { class: "grid grid-cols-2 gap-4" }, go = { key: 0, class: "flex items-center justify-between" }, yo = { key: 1, class: "flex items-center justify-between" }, vo = { class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, fo = { class: "space-y-4" }, bo = { key: 0, class: "space-y-4" }, ho = { key: 0, class: "flex items-center justify-between" }, ko = { key: 1 }, wo = { key: 2, class: "space-y-3" }, _o = { key: 3, class: "space-y-3" }, zo = { class: "flex items-center justify-between" }, Co = { class: "flex items-center justify-between" }, Io = e({ __name: "GenericProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:field", "update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", io, [s("section", null, [i3[22] || (i3[22] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "基础设置", -1)), s("div", po, [["divider", "button", "tag", "badge", "page-header"].includes(e2.element.type) ? (l(), a("div", co, [i3[14] || (i3[14] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "显示文字", -1)), r(n(S), { value: e2.element.props?.text || e2.element.props?.title, onInput: i3[0] || (i3[0] = (t4) => d2("page-header" === e2.element.type ? "title" : "text", t4.target.value)), size: "small" }, null, 8, ["value"])])) : f("", true), ["button", "avatar", "badge", "tag", "switch", "rate", "slider", "segmented"].includes(e2.element.type) ? (l(), a("div", uo, [i3[18] || (i3[18] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "middle", onChange: i3[1] || (i3[1] = (e3) => d2("size", e3.target.value)), size: "small", "button-style": "solid" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...i3[15] || (i3[15] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "middle" }, { default: o(() => [...i3[16] || (i3[16] = [w("中", -1)])]), _: 1 }), r(n(Be), { value: "large" }, { default: o(() => [...i3[17] || (i3[17] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])) : f("", true), ["tag", "badge", "rate", "slider", "switch"].includes(e2.element.type) ? (l(), a("div", mo, [i3[19] || (i3[19] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "颜色", -1)), r(n(S), { value: e2.element.props?.color, onInput: i3[2] || (i3[2] = (e3) => d2("color", e3.target.value)), size: "small", class: "w-24", placeholder: "#1890ff" }, null, 8, ["value"])])) : f("", true), s("div", xo, [["button", "switch", "rate", "slider", "upload", "transfer", "cascader", "select", "input", "number-input"].includes(e2.element.type) ? (l(), a("div", go, [i3[20] || (i3[20] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled ?? false, onChange: i3[3] || (i3[3] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true), ["card", "image", "avatar"].includes(e2.element.type) ? (l(), a("div", yo, [i3[21] || (i3[21] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "悬浮效果", -1)), r(n(de), { checked: e2.element.props?.hoverable ?? true, onChange: i3[4] || (i3[4] = (e3) => d2("hoverable", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true)])])]), s("section", vo, [i3[35] || (i3[35] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "专属设置", -1)), s("div", fo, [["image", "avatar"].includes(e2.element.type) ? (l(), a("div", bo, [s("div", null, [i3[23] || (i3[23] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "资源地址 (URL)", -1)), r(n(S), { value: e2.element.props?.src, onInput: i3[5] || (i3[5] = (e3) => d2("src", e3.target.value)), size: "small", placeholder: "https://..." }, null, 8, ["value"])]), "image" === e2.element.type ? (l(), a("div", ho, [i3[24] || (i3[24] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "开启预览", -1)), r(n(de), { checked: e2.element.props?.preview ?? false, onChange: i3[6] || (i3[6] = (e3) => d2("preview", e3)), size: "small" }, null, 8, ["checked"])])) : f("", true)])) : f("", true), "qrcode" === e2.element.type ? (l(), a("div", ko, [i3[25] || (i3[25] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "内容", -1)), r(n(S), { value: e2.element.props?.value, onInput: i3[7] || (i3[7] = (e3) => d2("value", e3.target.value)), size: "small" }, null, 8, ["value"])])) : f("", true), "statistic" === e2.element.type ? (l(), a("div", wo, [s("div", null, [i3[26] || (i3[26] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: i3[8] || (i3[8] = (e3) => d2("title", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [i3[27] || (i3[27] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "数值", -1)), r(n(A), { value: e2.element.props?.value, onChange: i3[9] || (i3[9] = (e3) => d2("value", e3)), size: "small", class: "w-full" }, null, 8, ["value"])]), s("div", null, [i3[28] || (i3[28] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "前缀", -1)), r(n(S), { value: e2.element.props?.prefix, onInput: i3[10] || (i3[10] = (e3) => d2("prefix", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [i3[29] || (i3[29] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "后缀", -1)), r(n(S), { value: e2.element.props?.suffix, onInput: i3[11] || (i3[11] = (e3) => d2("suffix", e3.target.value)), size: "small" }, null, 8, ["value"])])])) : f("", true), "divider" === e2.element.type ? (l(), a("div", _o, [s("div", zo, [i3[33] || (i3[33] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "文字位置", -1)), r(n(R), { value: e2.element.props?.orientation || "center", onChange: i3[12] || (i3[12] = (e3) => d2("orientation", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "left" }, { default: o(() => [...i3[30] || (i3[30] = [w("左", -1)])]), _: 1 }), r(n(W), { value: "center" }, { default: o(() => [...i3[31] || (i3[31] = [w("中", -1)])]), _: 1 }), r(n(W), { value: "right" }, { default: o(() => [...i3[32] || (i3[32] = [w("右", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Co, [i3[34] || (i3[34] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "虚线", -1)), r(n(de), { checked: e2.element.props?.dashed, onChange: i3[13] || (i3[13] = (e3) => d2("dashed", e3)), size: "small" }, null, 8, ["checked"])])])) : f("", true)])])]));
} }), $o = Ml(Io, [["__scopeId", "data-v-59bf712e"]]), Do = { class: "space-y-6" }, jo = { class: "space-y-4" }, Mo = { class: "flex items-center justify-between" }, Bo = { class: "flex items-center justify-between" }, Po = { class: "flex items-center justify-between" }, So = { class: "flex items-center justify-between" }, To = e({ __name: "IconProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:field", "update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", Do, [s("section", null, [o3[11] || (o3[11] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "图标设置", -1)), s("div", jo, [s("div", null, [o3[5] || (o3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "图标名称 (Ant Design Icons)", -1)), r(n(S), { value: e2.element.props?.icon || "StarOutlined", onInput: o3[0] || (o3[0] = (e3) => p2("icon", e3.target.value)), size: "small", placeholder: "例如: StarOutlined, UserOutlined" }, null, 8, ["value"]), o3[6] || (o3[6] = s("p", { class: "text-[10px] text-gray-400 mt-1 italic" }, "请从 @ant-design/icons-vue 中选择图标名称", -1))]), s("div", Mo, [o3[7] || (o3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "图标大小 (px)", -1)), r(n(A), { value: e2.element.props?.size || 24, onChange: o3[1] || (o3[1] = (e3) => p2("size", e3)), size: "small", min: 12, max: 128, class: "w-24" }, null, 8, ["value"])]), s("div", Bo, [o3[8] || (o3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "图标颜色", -1)), r(n(S), { value: e2.element.props?.color, onInput: o3[2] || (o3[2] = (e3) => p2("color", e3.target.value)), size: "small", class: "w-24", placeholder: "#1890ff" }, null, 8, ["value"])]), s("div", Po, [o3[9] || (o3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "旋转角度", -1)), r(n(A), { value: e2.element.props?.rotate || 0, onChange: o3[3] || (o3[3] = (e3) => p2("rotate", e3)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", So, [o3[10] || (o3[10] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "是否旋转", -1)), r(n(de), { checked: e2.element.props?.spin || false, onChange: o3[4] || (o3[4] = (e3) => p2("spin", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), Eo = Ml(To, [["__scopeId", "data-v-e7865a18"]]), Ao = { class: "space-y-6" }, Ro = { class: "space-y-4" }, Wo = { class: "flex items-center justify-between" }, Uo = { class: "flex items-center justify-between" }, Lo = { class: "flex items-center justify-between" }, Go = e({ __name: "DividerProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Ao, [s("section", null, [i3[13] || (i3[13] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "分割线设置", -1)), s("div", Ro, [s("div", null, [i3[4] || (i3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "文本内容", -1)), r(n(S), { value: e2.element.props?.text, onInput: i3[0] || (i3[0] = (e3) => d2("text", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", Wo, [i3[7] || (i3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "方向", -1)), r(n(Z), { value: e2.element.props?.type || "horizontal", onChange: i3[1] || (i3[1] = (e3) => d2("type", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "horizontal" }, { default: o(() => [...i3[5] || (i3[5] = [w("水平", -1)])]), _: 1 }), r(n(Be), { value: "vertical" }, { default: o(() => [...i3[6] || (i3[6] = [w("垂直", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Uo, [i3[11] || (i3[11] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "文本位置", -1)), r(n(R), { value: e2.element.props?.orientation || "center", onChange: i3[2] || (i3[2] = (e3) => d2("orientation", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "left" }, { default: o(() => [...i3[8] || (i3[8] = [w("左", -1)])]), _: 1 }), r(n(W), { value: "center" }, { default: o(() => [...i3[9] || (i3[9] = [w("中", -1)])]), _: 1 }), r(n(W), { value: "right" }, { default: o(() => [...i3[10] || (i3[10] = [w("右", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Lo, [i3[12] || (i3[12] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "虚线", -1)), r(n(de), { checked: e2.element.props?.dashed, onChange: i3[3] || (i3[3] = (e3) => d2("dashed", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), No = Ml(Go, [["__scopeId", "data-v-4a81ccea"]]), Ho = { class: "space-y-6" }, Oo = { class: "space-y-4" }, Fo = { class: "flex items-center justify-between" }, Vo = { class: "space-y-3" }, Jo = e({ __name: "BreadcrumbProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = () => {
    const e3 = [...d2.element.props?.items || []];
    e3.push(`新路径 ${e3.length + 1}`), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", Ho, [s("section", null, [c3[4] || (c3[4] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "面包屑设置", -1)), s("div", Oo, [s("div", Fo, [c3[1] || (c3[1] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "分隔符", -1)), r(n(S), { value: e2.element.props?.separator || "/", onInput: c3[0] || (c3[0] = (e3) => u2("separator", e3.target.value)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", Vo, [c3[3] || (c3[3] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "项管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex items-center gap-2 group" }, [r(n(S), { value: e3, onInput: (e4) => ((e5, t5) => {
    const l2 = [...d2.element.props?.items || []];
    l2[e5] = t5, u2("items", l2);
  })(Number(t4), e4.target.value), placeholder: "名称", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[2] || (c3[2] = w(" 添加项 ", -1))]), _: 1 })])])])]));
} }), Ko = Ml(Jo, [["__scopeId", "data-v-1e4ff375"]]), Zo = { class: "space-y-6" }, qo = { class: "space-y-4" }, Qo = { class: "flex items-center justify-between" }, Yo = { class: "flex items-center justify-between" }, Xo = { class: "flex items-center justify-between" }, ei = { class: "space-y-3" }, ti = e({ __name: "StepsProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = () => {
    const e3 = [...d2.element.props?.items || []];
    e3.push(`步骤 ${e3.length + 1}`), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", Zo, [s("section", null, [c3[12] || (c3[12] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "步骤条设置", -1)), s("div", qo, [s("div", Qo, [c3[3] || (c3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "当前步骤", -1)), r(n(A), { value: e2.element.props?.current || 0, onChange: c3[0] || (c3[0] = (e3) => u2("current", e3)), size: "small", min: 0, class: "w-24" }, null, 8, ["value"])]), s("div", Yo, [c3[6] || (c3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "方向", -1)), r(n(Z), { value: e2.element.props?.direction || "horizontal", onChange: c3[1] || (c3[1] = (e3) => u2("direction", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "horizontal" }, { default: o(() => [...c3[4] || (c3[4] = [w("水平", -1)])]), _: 1 }), r(n(Be), { value: "vertical" }, { default: o(() => [...c3[5] || (c3[5] = [w("垂直", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Xo, [c3[9] || (c3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "default", onChange: c3[2] || (c3[2] = (e3) => u2("size", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...c3[7] || (c3[7] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "default" }, { default: o(() => [...c3[8] || (c3[8] = [w("默认", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", ei, [c3[11] || (c3[11] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "步骤管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex items-center gap-2 group" }, [r(n(S), { value: e3, onInput: (e4) => ((e5, t5) => {
    const l2 = [...d2.element.props?.items || []];
    l2[e5] = t5, u2("items", l2);
  })(Number(t4), e4.target.value), placeholder: "步骤名称", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[10] || (c3[10] = w(" 添加步骤 ", -1))]), _: 1 })])])])]));
} }), li = Ml(ti, [["__scopeId", "data-v-c85903ff"]]), ai = { class: "space-y-6" }, si = { class: "space-y-4" }, ri = { class: "flex items-center justify-between" }, ni = { class: "flex items-center justify-between" }, oi = { class: "space-y-3" }, ii = { class: "flex items-center gap-2" }, pi = e({ __name: "TabsProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = (e3, t3, l2) => {
    const a2 = [...d2.element.props?.items || []];
    a2[e3] = { ...a2[e3], [l2]: t3 }, u2("items", a2);
  }, x2 = () => {
    const e3 = [...d2.element.props?.items || []], t3 = e3.length + 1;
    e3.push({ key: String(t3), tab: `标签 ${t3}`, content: `内容 ${t3}` }), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", ai, [s("section", null, [c3[13] || (c3[13] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "标签页设置", -1)), s("div", si, [s("div", ri, [c3[5] || (c3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "类型", -1)), r(n(R), { value: e2.element.props?.type || "line", onChange: c3[0] || (c3[0] = (e3) => u2("type", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "line" }, { default: o(() => [...c3[2] || (c3[2] = [w("线条", -1)])]), _: 1 }), r(n(W), { value: "card" }, { default: o(() => [...c3[3] || (c3[3] = [w("卡片", -1)])]), _: 1 }), r(n(W), { value: "editable-card" }, { default: o(() => [...c3[4] || (c3[4] = [w("可编辑卡片", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", ni, [c3[10] || (c3[10] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "位置", -1)), r(n(R), { value: e2.element.props?.tabPosition || "top", onChange: c3[1] || (c3[1] = (e3) => u2("tabPosition", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "top" }, { default: o(() => [...c3[6] || (c3[6] = [w("上", -1)])]), _: 1 }), r(n(W), { value: "bottom" }, { default: o(() => [...c3[7] || (c3[7] = [w("下", -1)])]), _: 1 }), r(n(W), { value: "left" }, { default: o(() => [...c3[8] || (c3[8] = [w("左", -1)])]), _: 1 }), r(n(W), { value: "right" }, { default: o(() => [...c3[9] || (c3[9] = [w("右", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", oi, [c3[12] || (c3[12] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "标签页管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex flex-col gap-2 p-2 border border-gray-100/30 rounded-lg group" }, [s("div", ii, [r(n(S), { value: e3.tab, onInput: (e4) => m2(Number(t4), e4.target.value, "tab"), placeholder: "标签标题", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]), r(n(Pe), { value: e3.content, onInput: (e4) => m2(Number(t4), e4.target.value, "content"), placeholder: "标签内容", size: "small", rows: 2 }, null, 8, ["value", "onInput"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: x2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[11] || (c3[11] = w(" 添加标签页 ", -1))]), _: 1 })])])])]));
} }), di = Ml(pi, [["__scopeId", "data-v-c6c3d2e3"]]), ci = { class: "space-y-6" }, ui = { class: "space-y-4" }, mi = { class: "flex items-center justify-between" }, xi = { class: "flex items-center justify-between" }, gi = { class: "space-y-3" }, yi = e({ __name: "MenuProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = () => {
    const e3 = [...d2.element.props?.items || []];
    e3.push(`菜单项 ${e3.length + 1}`), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", ci, [s("section", null, [c3[11] || (c3[11] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "菜单设置", -1)), s("div", ui, [s("div", mi, [c3[5] || (c3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "模式", -1)), r(n(R), { value: e2.element.props?.mode || "horizontal", onChange: c3[0] || (c3[0] = (e3) => u2("mode", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "horizontal" }, { default: o(() => [...c3[2] || (c3[2] = [w("水平", -1)])]), _: 1 }), r(n(W), { value: "vertical" }, { default: o(() => [...c3[3] || (c3[3] = [w("垂直", -1)])]), _: 1 }), r(n(W), { value: "inline" }, { default: o(() => [...c3[4] || (c3[4] = [w("内嵌", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", xi, [c3[8] || (c3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "主题", -1)), r(n(Z), { value: e2.element.props?.theme || "light", onChange: c3[1] || (c3[1] = (e3) => u2("theme", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "light" }, { default: o(() => [...c3[6] || (c3[6] = [w("亮色", -1)])]), _: 1 }), r(n(Be), { value: "dark" }, { default: o(() => [...c3[7] || (c3[7] = [w("暗色", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", gi, [c3[10] || (c3[10] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "菜单项管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex items-center gap-2 group" }, [r(n(S), { value: e3, onInput: (e4) => ((e5, t5) => {
    const l2 = [...d2.element.props?.items || []];
    l2[e5] = t5, u2("items", l2);
  })(Number(t4), e4.target.value), placeholder: "菜单项名称", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[9] || (c3[9] = w(" 添加菜单项 ", -1))]), _: 1 })])])])]));
} }), vi = Ml(yi, [["__scopeId", "data-v-8b8464ef"]]), fi = { class: "space-y-6" }, bi = { class: "space-y-4" }, hi = { class: "flex items-center justify-between" }, ki = { class: "flex items-center justify-between" }, wi = { class: "flex items-center justify-between" }, _i = { class: "flex items-center justify-between" }, zi = { class: "flex items-center justify-between" }, Ci = e({ __name: "PaginationProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", fi, [s("section", null, [i3[12] || (i3[12] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "分页设置", -1)), s("div", bi, [s("div", hi, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "总条数", -1)), r(n(A), { value: e2.element.props?.total || 50, onChange: i3[0] || (i3[0] = (e3) => d2("total", e3)), size: "small", min: 0, class: "w-24" }, null, 8, ["value"])]), s("div", ki, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "每页条数", -1)), r(n(A), { value: e2.element.props?.pageSize || 10, onChange: i3[1] || (i3[1] = (e3) => d2("pageSize", e3)), size: "small", min: 1, class: "w-24" }, null, 8, ["value"])]), s("div", wi, [i3[7] || (i3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示跳转", -1)), r(n(de), { checked: e2.element.props?.showQuickJumper, onChange: i3[2] || (i3[2] = (e3) => d2("showQuickJumper", e3)), size: "small" }, null, 8, ["checked"])]), s("div", _i, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示条数", -1)), r(n(de), { checked: e2.element.props?.showSizeChanger, onChange: i3[3] || (i3[3] = (e3) => d2("showSizeChanger", e3)), size: "small" }, null, 8, ["checked"])]), s("div", zi, [i3[11] || (i3[11] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "default", onChange: i3[4] || (i3[4] = (e3) => d2("size", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...i3[9] || (i3[9] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "default" }, { default: o(() => [...i3[10] || (i3[10] = [w("默认", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), Ii = Ml(Ci, [["__scopeId", "data-v-a315a09c"]]), $i = { class: "space-y-6" }, Di = { class: "space-y-4" }, ji = { class: "flex items-center justify-between" }, Mi = e({ __name: "ImageProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", $i, [s("section", null, [o3[10] || (o3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "图片设置", -1)), s("div", Di, [s("div", null, [o3[5] || (o3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "图片地址", -1)), r(n(S), { value: e2.element.props?.src, onInput: o3[0] || (o3[0] = (e3) => p2("src", e3.target.value)), size: "small", placeholder: "https://..." }, null, 8, ["value"])]), s("div", null, [o3[6] || (o3[6] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "宽度", -1)), r(n(S), { value: e2.element.props?.width, onInput: o3[1] || (o3[1] = (e3) => p2("width", e3.target.value)), size: "small", placeholder: "200" }, null, 8, ["value"])]), s("div", null, [o3[7] || (o3[7] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "高度", -1)), r(n(S), { value: e2.element.props?.height, onInput: o3[2] || (o3[2] = (e3) => p2("height", e3.target.value)), size: "small", placeholder: "200" }, null, 8, ["value"])]), s("div", ji, [o3[8] || (o3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "预览", -1)), r(n(de), { checked: e2.element.props?.preview ?? false, onChange: o3[3] || (o3[3] = (e3) => p2("preview", e3)), size: "small" }, null, 8, ["checked"])]), s("div", null, [o3[9] || (o3[9] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "替代文字", -1)), r(n(S), { value: e2.element.props?.alt, onInput: o3[4] || (o3[4] = (e3) => p2("alt", e3.target.value)), size: "small" }, null, 8, ["value"])])])])]));
} }), Bi = Ml(Mi, [["__scopeId", "data-v-8f74f55f"]]), Pi = { class: "space-y-6" }, Si = { class: "space-y-4" }, Ti = { class: "flex items-center justify-between" }, Ei = { class: "flex items-center justify-between" }, Ai = { class: "flex items-center justify-between" }, Ri = e({ __name: "CardProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Pi, [s("section", null, [i3[10] || (i3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "卡片设置", -1)), s("div", Si, [s("div", null, [i3[4] || (i3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: i3[0] || (i3[0] = (e3) => d2("title", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", Ti, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "边框", -1)), r(n(de), { checked: e2.element.props?.bordered ?? true, onChange: i3[1] || (i3[1] = (e3) => d2("bordered", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Ei, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "悬停阴影", -1)), r(n(de), { checked: e2.element.props?.hoverable, onChange: i3[2] || (i3[2] = (e3) => d2("hoverable", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Ai, [i3[9] || (i3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "default", onChange: i3[3] || (i3[3] = (e3) => d2("size", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...i3[7] || (i3[7] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "default" }, { default: o(() => [...i3[8] || (i3[8] = [w("默认", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), Wi = Ml(Ri, [["__scopeId", "data-v-2c5d2209"]]), Ui = { class: "space-y-6" }, Li = { class: "space-y-4" }, Gi = { class: "flex items-center justify-between" }, Ni = { class: "flex items-center justify-between" }, Hi = { class: "flex items-center justify-between" }, Oi = { class: "space-y-3" }, Fi = { class: "flex items-center gap-2" }, Vi = e({ __name: "CollapseProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = (e3, t3, l2) => {
    const a2 = [...d2.element.props?.items || []];
    a2[e3] = { ...a2[e3], [l2]: t3 }, u2("items", a2);
  }, x2 = () => {
    const e3 = [...d2.element.props?.items || []], t3 = e3.length + 1;
    e3.push({ header: `面板 ${t3}`, content: `内容 ${t3}` }), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", Ui, [s("section", null, [c3[8] || (c3[8] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "折叠面板设置", -1)), s("div", Li, [s("div", Gi, [c3[3] || (c3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "手风琴模式", -1)), r(n(de), { checked: e2.element.props?.accordion, onChange: c3[0] || (c3[0] = (e3) => u2("accordion", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Ni, [c3[4] || (c3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "无边框", -1)), r(n(de), { checked: false === e2.element.props?.bordered, onChange: c3[1] || (c3[1] = (e3) => u2("bordered", !e3)), size: "small" }, null, 8, ["checked"])]), s("div", Hi, [c3[5] || (c3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "幽灵模式", -1)), r(n(de), { checked: e2.element.props?.ghost, onChange: c3[2] || (c3[2] = (e3) => u2("ghost", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Oi, [c3[7] || (c3[7] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "面板管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex flex-col gap-2 p-2 border border-gray-100/30 rounded-lg group" }, [s("div", Fi, [r(n(S), { value: e3.header, onInput: (e4) => m2(Number(t4), e4.target.value, "header"), placeholder: "面板标题", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]), r(n(Pe), { value: e3.content, onInput: (e4) => m2(Number(t4), e4.target.value, "content"), placeholder: "面板内容", size: "small", rows: 2 }, null, 8, ["value", "onInput"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: x2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[6] || (c3[6] = w(" 添加面板 ", -1))]), _: 1 })])])])]));
} }), Ji = Ml(Vi, [["__scopeId", "data-v-e26e0c69"]]), Ki = { class: "space-y-6" }, Zi = { class: "space-y-4" }, qi = { class: "flex items-center justify-between" }, Qi = { class: "flex items-center justify-between" }, Yi = { class: "space-y-3" }, Xi = e({ __name: "DropdownProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = () => {
    const e3 = [...d2.element.props?.items || []];
    e3.push(`菜单项 ${e3.length + 1}`), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", Ki, [s("section", null, [c3[17] || (c3[17] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "下拉菜单设置", -1)), s("div", Zi, [s("div", null, [c3[3] || (c3[3] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "按钮文本", -1)), r(n(S), { value: e2.element.props?.content, onInput: c3[0] || (c3[0] = (e3) => u2("content", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", qi, [c3[7] || (c3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "触发方式", -1)), r(n(R), { value: e2.element.props?.trigger || "hover", onChange: c3[1] || (c3[1] = (e3) => u2("trigger", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "hover" }, { default: o(() => [...c3[4] || (c3[4] = [w("悬停", -1)])]), _: 1 }), r(n(W), { value: "click" }, { default: o(() => [...c3[5] || (c3[5] = [w("点击", -1)])]), _: 1 }), r(n(W), { value: "contextmenu" }, { default: o(() => [...c3[6] || (c3[6] = [w("右键", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Qi, [c3[14] || (c3[14] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "位置", -1)), r(n(R), { value: e2.element.props?.placement || "bottomLeft", onChange: c3[2] || (c3[2] = (e3) => u2("placement", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "bottomLeft" }, { default: o(() => [...c3[8] || (c3[8] = [w("左下", -1)])]), _: 1 }), r(n(W), { value: "bottomCenter" }, { default: o(() => [...c3[9] || (c3[9] = [w("中下", -1)])]), _: 1 }), r(n(W), { value: "bottomRight" }, { default: o(() => [...c3[10] || (c3[10] = [w("右下", -1)])]), _: 1 }), r(n(W), { value: "topLeft" }, { default: o(() => [...c3[11] || (c3[11] = [w("左上", -1)])]), _: 1 }), r(n(W), { value: "topCenter" }, { default: o(() => [...c3[12] || (c3[12] = [w("中上", -1)])]), _: 1 }), r(n(W), { value: "topRight" }, { default: o(() => [...c3[13] || (c3[13] = [w("右上", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Yi, [c3[16] || (c3[16] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "菜单项管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex items-center gap-2 group" }, [r(n(S), { value: e3, onInput: (e4) => ((e5, t5) => {
    const l2 = [...d2.element.props?.items || []];
    l2[e5] = t5, u2("items", l2);
  })(Number(t4), e4.target.value), placeholder: "菜单项名称", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[15] || (c3[15] = w(" 添加菜单项 ", -1))]), _: 1 })])])])]));
} }), ep = Ml(Xi, [["__scopeId", "data-v-778b6f87"]]), tp = { class: "space-y-6" }, lp = { class: "space-y-4" }, ap = { class: "flex items-center justify-between" }, sp = { class: "flex items-center justify-between" }, rp = e({ __name: "PageHeaderProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", tp, [s("section", null, [o3[8] || (o3[8] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "页头设置", -1)), s("div", lp, [s("div", null, [o3[4] || (o3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "主标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: o3[0] || (o3[0] = (e3) => p2("title", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [o3[5] || (o3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "副标题", -1)), r(n(S), { value: e2.element.props?.subTitle, onInput: o3[1] || (o3[1] = (e3) => p2("subTitle", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", ap, [o3[6] || (o3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示返回", -1)), r(n(de), { checked: false !== e2.element.props?.backIcon, onChange: o3[2] || (o3[2] = (e3) => p2("backIcon", e3)), size: "small" }, null, 8, ["checked"])]), s("div", sp, [o3[7] || (o3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "紧凑模式", -1)), r(n(de), { checked: e2.element.props?.compact, onChange: o3[3] || (o3[3] = (e3) => p2("compact", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), np = Ml(rp, [["__scopeId", "data-v-6aa85969"]]), op = { class: "space-y-6" }, ip = { class: "space-y-4" }, pp = { class: "flex items-center justify-between" }, dp = { class: "flex items-center justify-between" }, cp = { class: "space-y-3" }, up = e({ __name: "TimelineProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const d2 = e2, c2 = t2, u2 = (e3, t3) => {
    const l2 = { ...d2.element.props || {}, [e3]: t3 };
    c2("update:props", l2);
  }, m2 = () => {
    const e3 = [...d2.element.props?.items || []];
    e3.push(`新事件 ${e3.length + 1}`), u2("items", e3);
  };
  return (t3, c3) => (l(), a("div", op, [s("section", null, [c3[9] || (c3[9] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "时间轴设置", -1)), s("div", ip, [s("div", pp, [c3[5] || (c3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "模式", -1)), r(n(R), { value: e2.element.props?.mode || "left", onChange: c3[0] || (c3[0] = (e3) => u2("mode", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "left" }, { default: o(() => [...c3[2] || (c3[2] = [w("左侧", -1)])]), _: 1 }), r(n(W), { value: "right" }, { default: o(() => [...c3[3] || (c3[3] = [w("右侧", -1)])]), _: 1 }), r(n(W), { value: "alternate" }, { default: o(() => [...c3[4] || (c3[4] = [w("交替", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", dp, [c3[6] || (c3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "倒序", -1)), r(n(de), { checked: e2.element.props?.reverse, onChange: c3[1] || (c3[1] = (e3) => u2("reverse", e3)), size: "small" }, null, 8, ["checked"])]), s("div", cp, [c3[8] || (c3[8] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "节点管理", -1)), (l(true), a(i, null, p(e2.element.props?.items || [], (e3, t4) => (l(), a("div", { key: t4, class: "flex items-center gap-2 group" }, [r(n(S), { value: e3, onInput: (e4) => ((e5, t5) => {
    const l2 = [...d2.element.props?.items || []];
    l2[e5] = t5, u2("items", l2);
  })(Number(t4), e4.target.value), placeholder: "节点内容", class: "flex-1", size: "small" }, null, 8, ["value", "onInput"]), r(n(U), { type: "text", danger: "", onClick: (e4) => ((e5) => {
    const t5 = (d2.element.props?.items || []).filter((t6, l2) => l2 !== e5);
    u2("items", t5);
  })(Number(t4)), size: "small" }, { icon: o(() => [r(n(Bt), { size: 14 })]), _: 1 }, 8, ["onClick"])]))), 128)), r(n(U), { type: "dashed", block: "", onClick: m2, size: "small" }, { default: o(() => [r(n(Tt), { size: 14, class: "mr-1" }), c3[7] || (c3[7] = w(" 添加节点 ", -1))]), _: 1 })])])])]));
} }), mp = Ml(up, [["__scopeId", "data-v-e0b7236f"]]), xp = { class: "space-y-6" }, gp = { class: "space-y-4" }, yp = { class: "flex items-center justify-between" }, vp = { class: "flex items-center justify-between" }, fp = { class: "flex items-center justify-between" }, bp = e({ __name: "TourProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", xp, [s("section", null, [i3[8] || (i3[8] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "漫游导览设置", -1)), s("div", gp, [s("div", yp, [i3[3] || (i3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示箭头", -1)), r(n(de), { checked: e2.element.props?.arrow ?? true, onChange: i3[0] || (i3[0] = (e3) => d2("arrow", e3)), size: "small" }, null, 8, ["checked"])]), s("div", vp, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "遮罩", -1)), r(n(de), { checked: e2.element.props?.mask ?? true, onChange: i3[1] || (i3[1] = (e3) => d2("mask", e3)), size: "small" }, null, 8, ["checked"])]), s("div", fp, [i3[7] || (i3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "类型", -1)), r(n(R), { value: e2.element.props?.type || "default", onChange: i3[2] || (i3[2] = (e3) => d2("type", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "default" }, { default: o(() => [...i3[5] || (i3[5] = [w("默认", -1)])]), _: 1 }), r(n(W), { value: "primary" }, { default: o(() => [...i3[6] || (i3[6] = [w("强调", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), hp = Ml(bp, [["__scopeId", "data-v-9b604f81"]]), kp = { class: "space-y-6" }, wp = { class: "space-y-4" }, _p = { class: "flex items-center justify-between" }, zp = { class: "flex items-center justify-between" }, Cp = e({ __name: "AutoCompleteProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", kp, [s("section", null, [o3[4] || (o3[4] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "基础设置", -1)), s("div", wp, [s("div", _p, [o3[2] || (o3[2] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", zp, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "允许清除", -1)), r(n(de), { checked: e2.element.props?.allowClear, onChange: o3[1] || (o3[1] = (e3) => p2("allowClear", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), Ip = Ml(Cp, [["__scopeId", "data-v-c4d69d52"]]), $p = { class: "space-y-6" }, Dp = { class: "space-y-4" }, jp = { class: "flex items-center justify-between" }, Mp = { class: "flex items-center justify-between" }, Bp = e({ __name: "CascaderProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", $p, [s("section", null, [o3[4] || (o3[4] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "基础设置", -1)), s("div", Dp, [s("div", jp, [o3[2] || (o3[2] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Mp, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "可搜索", -1)), r(n(de), { checked: e2.element.props?.showSearch, onChange: o3[1] || (o3[1] = (e3) => p2("showSearch", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), Pp = Ml(Bp, [["__scopeId", "data-v-85427120"]]), Sp = { class: "space-y-6" }, Tp = { class: "space-y-4" }, Ep = { class: "flex items-center justify-between" }, Ap = { class: "flex items-center justify-between" }, Rp = { class: "flex items-center justify-between" }, Wp = e({ __name: "DatePickerProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Sp, [s("section", null, [i3[9] || (i3[9] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "基础设置", -1)), s("div", Tp, [s("div", Ep, [i3[3] || (i3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: i3[0] || (i3[0] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Ap, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示时间", -1)), r(n(de), { checked: e2.element.props?.showTime, onChange: i3[1] || (i3[1] = (e3) => d2("showTime", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Rp, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(R), { value: e2.element.props?.size || "default", onChange: i3[2] || (i3[2] = (e3) => d2("size", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "small" }, { default: o(() => [...i3[5] || (i3[5] = [w("小", -1)])]), _: 1 }), r(n(W), { value: "default" }, { default: o(() => [...i3[6] || (i3[6] = [w("默认", -1)])]), _: 1 }), r(n(W), { value: "large" }, { default: o(() => [...i3[7] || (i3[7] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), Up = Ml(Wp, [["__scopeId", "data-v-dbfd43a0"]]), Lp = { class: "space-y-6" }, Gp = { class: "space-y-4" }, Np = { class: "flex items-center justify-between" }, Hp = { class: "flex items-center justify-between" }, Op = { class: "flex items-center justify-between" }, Fp = e({ __name: "FormProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Lp, [s("section", null, [i3[9] || (i3[9] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "表单设置", -1)), s("div", Gp, [s("div", Np, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "布局", -1)), r(n(R), { value: e2.element.props?.layout || "horizontal", onChange: i3[0] || (i3[0] = (e3) => d2("layout", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "horizontal" }, { default: o(() => [...i3[3] || (i3[3] = [w("水平", -1)])]), _: 1 }), r(n(W), { value: "vertical" }, { default: o(() => [...i3[4] || (i3[4] = [w("垂直", -1)])]), _: 1 }), r(n(W), { value: "inline" }, { default: o(() => [...i3[5] || (i3[5] = [w("内嵌", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Hp, [i3[7] || (i3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示冒号", -1)), r(n(de), { checked: e2.element.props?.colon ?? true, onChange: i3[1] || (i3[1] = (e3) => d2("colon", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Op, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "必填星号", -1)), r(n(de), { checked: e2.element.props?.requiredMark ?? true, onChange: i3[2] || (i3[2] = (e3) => d2("requiredMark", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), Vp = Ml(Fp, [["__scopeId", "data-v-20e2d497"]]), Jp = { class: "space-y-6" }, Kp = { class: "space-y-4" }, Zp = { class: "flex items-center justify-between" }, qp = { class: "flex items-center justify-between" }, Qp = e({ __name: "MentionsProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", Jp, [s("section", null, [o3[4] || (o3[4] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "基础设置", -1)), s("div", Kp, [s("div", Zp, [o3[2] || (o3[2] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", qp, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "自动获得焦点", -1)), r(n(de), { checked: e2.element.props?.autofocus, onChange: o3[1] || (o3[1] = (e3) => p2("autofocus", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), Yp = Ml(Qp, [["__scopeId", "data-v-b922c2ff"]]), Xp = { class: "space-y-6" }, ed = { class: "space-y-4" }, td = { class: "flex items-center justify-between" }, ld = { class: "flex items-center justify-between" }, ad = { class: "flex items-center justify-between" }, sd = e({ __name: "RateProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", Xp, [s("section", null, [o3[6] || (o3[6] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "评分设置", -1)), s("div", ed, [s("div", td, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "总数", -1)), r(n(A), { value: e2.element.props?.count || 5, onChange: o3[0] || (o3[0] = (e3) => p2("count", e3)), size: "small", min: 1, class: "w-24" }, null, 8, ["value"])]), s("div", ld, [o3[4] || (o3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "允许半选", -1)), r(n(de), { checked: e2.element.props?.allowHalf, onChange: o3[1] || (o3[1] = (e3) => p2("allowHalf", e3)), size: "small" }, null, 8, ["checked"])]), s("div", ad, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "允许清除", -1)), r(n(de), { checked: e2.element.props?.allowClear ?? true, onChange: o3[2] || (o3[2] = (e3) => p2("allowClear", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), rd = Ml(sd, [["__scopeId", "data-v-66ec1fcf"]]), nd = { class: "space-y-6" }, od = { class: "space-y-4" }, id = { class: "flex items-center justify-between" }, pd = { class: "flex items-center justify-between" }, dd = { class: "flex items-center justify-between" }, cd = { class: "flex items-center justify-between" }, ud = { class: "flex items-center justify-between" }, md = Ml(e({ __name: "SliderProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", nd, [s("section", null, [o3[10] || (o3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "滑块设置", -1)), s("div", od, [s("div", id, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "最小值", -1)), r(n(A), { value: e2.element.props?.min || 0, onChange: o3[0] || (o3[0] = (e3) => p2("min", e3)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", pd, [o3[6] || (o3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "最大值", -1)), r(n(A), { value: e2.element.props?.max || 100, onChange: o3[1] || (o3[1] = (e3) => p2("max", e3)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", dd, [o3[7] || (o3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "步长", -1)), r(n(A), { value: e2.element.props?.step || 1, onChange: o3[2] || (o3[2] = (e3) => p2("step", e3)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", cd, [o3[8] || (o3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "垂直模式", -1)), r(n(de), { checked: e2.element.props?.vertical, onChange: o3[3] || (o3[3] = (e3) => p2("vertical", e3)), size: "small" }, null, 8, ["checked"])]), s("div", ud, [o3[9] || (o3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "范围选择", -1)), r(n(de), { checked: e2.element.props?.range, onChange: o3[4] || (o3[4] = (e3) => p2("range", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), [["__scopeId", "data-v-0429c12c"]]), xd = { class: "space-y-6" }, gd = { class: "space-y-4" }, yd = { class: "flex items-center justify-between" }, vd = { class: "flex items-center justify-between" }, fd = { class: "flex items-center justify-between" }, bd = { class: "flex items-center justify-between" }, hd = Ml(e({ __name: "SwitchProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", xd, [s("section", null, [i3[10] || (i3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "开关设置", -1)), s("div", gd, [s("div", yd, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "开启文字", -1)), r(n(S), { value: e2.element.props?.checkedChildren, onInput: i3[0] || (i3[0] = (e3) => d2("checkedChildren", e3.target.value)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", vd, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "关闭文字", -1)), r(n(S), { value: e2.element.props?.unCheckedChildren, onInput: i3[1] || (i3[1] = (e3) => d2("unCheckedChildren", e3.target.value)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", fd, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "加载中", -1)), r(n(de), { checked: e2.element.props?.loading, onChange: i3[2] || (i3[2] = (e3) => d2("loading", e3)), size: "small" }, null, 8, ["checked"])]), s("div", bd, [i3[9] || (i3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(Z), { value: e2.element.props?.size || "default", onChange: i3[3] || (i3[3] = (e3) => d2("size", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "small" }, { default: o(() => [...i3[7] || (i3[7] = [w("小", -1)])]), _: 1 }), r(n(Be), { value: "default" }, { default: o(() => [...i3[8] || (i3[8] = [w("默认", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-094420f0"]]), kd = { class: "space-y-6" }, wd = { class: "space-y-4" }, _d = { class: "flex items-center justify-between" }, zd = { class: "flex items-center justify-between" }, Cd = { class: "flex items-center justify-between" }, Id = Ml(e({ __name: "TimePickerProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", kd, [s("section", null, [o3[6] || (o3[6] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "时间选择设置", -1)), s("div", wd, [s("div", _d, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", zd, [o3[4] || (o3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "格式", -1)), r(n(S), { value: e2.element.props?.format || "HH:mm:ss", onInput: o3[1] || (o3[1] = (e3) => p2("format", e3.target.value)), size: "small", class: "w-24" }, null, 8, ["value"])]), s("div", Cd, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "允许清除", -1)), r(n(de), { checked: e2.element.props?.allowClear ?? true, onChange: o3[2] || (o3[2] = (e3) => p2("allowClear", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), [["__scopeId", "data-v-00f6c0fb"]]), $d = { class: "space-y-6" }, Dd = { class: "space-y-4" }, jd = { class: "flex items-center justify-between" }, Md = { class: "flex items-center justify-between" }, Bd = { class: "flex items-center justify-between" }, Pd = Ml(e({ __name: "TransferProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", $d, [s("section", null, [o3[6] || (o3[6] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "穿梭框设置", -1)), s("div", Dd, [s("div", jd, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Md, [o3[4] || (o3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示搜索", -1)), r(n(de), { checked: e2.element.props?.showSearch, onChange: o3[1] || (o3[1] = (e3) => p2("showSearch", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Bd, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "单选模式", -1)), r(n(de), { checked: e2.element.props?.oneWay, onChange: o3[2] || (o3[2] = (e3) => p2("oneWay", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), [["__scopeId", "data-v-99afbf4b"]]), Sd = { class: "space-y-6" }, Td = { class: "space-y-4" }, Ed = { class: "flex items-center justify-between" }, Ad = { class: "flex items-center justify-between" }, Rd = { class: "flex items-center justify-between" }, Wd = Ml(e({ __name: "TreeSelectProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", Sd, [s("section", null, [o3[6] || (o3[6] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "树选择设置", -1)), s("div", Td, [s("div", Ed, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Ad, [o3[4] || (o3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "多选", -1)), r(n(de), { checked: e2.element.props?.multiple, onChange: o3[1] || (o3[1] = (e3) => p2("multiple", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Rd, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示搜索", -1)), r(n(de), { checked: e2.element.props?.showSearch, onChange: o3[2] || (o3[2] = (e3) => p2("showSearch", e3)), size: "small" }, null, 8, ["checked"])])])])]));
} }), [["__scopeId", "data-v-aa09f3ba"]]), Ud = { class: "space-y-6" }, Ld = { class: "space-y-4" }, Gd = { class: "flex items-center justify-between" }, Nd = { class: "flex items-center justify-between" }, Hd = { class: "flex items-center justify-between" }, Od = { class: "flex items-center justify-between" }, Fd = Ml(e({ __name: "UploadProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Ud, [s("section", null, [i3[11] || (i3[11] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "上传设置", -1)), s("div", Ld, [s("div", Gd, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: i3[0] || (i3[0] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Nd, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "多选", -1)), r(n(de), { checked: e2.element.props?.multiple, onChange: i3[1] || (i3[1] = (e3) => d2("multiple", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Hd, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示列表", -1)), r(n(de), { checked: e2.element.props?.showUploadList ?? true, onChange: i3[2] || (i3[2] = (e3) => d2("showUploadList", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Od, [i3[10] || (i3[10] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "列表类型", -1)), r(n(R), { value: e2.element.props?.listType || "text", onChange: i3[3] || (i3[3] = (e3) => d2("listType", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "text" }, { default: o(() => [...i3[7] || (i3[7] = [w("文本", -1)])]), _: 1 }), r(n(W), { value: "picture" }, { default: o(() => [...i3[8] || (i3[8] = [w("图片", -1)])]), _: 1 }), r(n(W), { value: "picture-card" }, { default: o(() => [...i3[9] || (i3[9] = [w("图片卡片", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-a8d8a894"]]), Vd = { class: "space-y-6" }, Jd = { class: "space-y-4" }, Kd = { class: "flex items-center justify-between" }, Zd = { class: "flex items-center justify-between" }, qd = Ml(e({ __name: "AvatarProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Vd, [s("section", null, [i3[11] || (i3[11] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "头像设置", -1)), s("div", Jd, [s("div", null, [i3[3] || (i3[3] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "资源地址 (URL)", -1)), r(n(S), { value: e2.element.props?.src, onInput: i3[0] || (i3[0] = (e3) => d2("src", e3.target.value)), size: "small", placeholder: "https://..." }, null, 8, ["value"])]), s("div", Kd, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "形状", -1)), r(n(Z), { value: e2.element.props?.shape || "circle", onChange: i3[1] || (i3[1] = (e3) => d2("shape", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "circle" }, { default: o(() => [...i3[4] || (i3[4] = [w("圆", -1)])]), _: 1 }), r(n(Be), { value: "square" }, { default: o(() => [...i3[5] || (i3[5] = [w("方", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Zd, [i3[10] || (i3[10] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(R), { value: e2.element.props?.size || "default", onChange: i3[2] || (i3[2] = (e3) => d2("size", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "small" }, { default: o(() => [...i3[7] || (i3[7] = [w("小", -1)])]), _: 1 }), r(n(W), { value: "default" }, { default: o(() => [...i3[8] || (i3[8] = [w("默认", -1)])]), _: 1 }), r(n(W), { value: "large" }, { default: o(() => [...i3[9] || (i3[9] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-3424791b"]]), Qd = { class: "space-y-6" }, Yd = { class: "space-y-4" }, Xd = { class: "flex items-center justify-between" }, ec = { class: "flex items-center justify-between" }, tc = { class: "flex items-center justify-between" }, lc = { class: "flex items-center justify-between" }, ac = Ml(e({ __name: "BadgeProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", Qd, [s("section", null, [o3[8] || (o3[8] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "徽标设置", -1)), s("div", Yd, [s("div", Xd, [o3[4] || (o3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "数值", -1)), r(n(A), { value: e2.element.props?.count || 0, onChange: o3[0] || (o3[0] = (e3) => p2("count", e3)), size: "small", min: 0, class: "w-24" }, null, 8, ["value"])]), s("div", ec, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "最大值", -1)), r(n(A), { value: e2.element.props?.overflowCount || 99, onChange: o3[1] || (o3[1] = (e3) => p2("overflowCount", e3)), size: "small", min: 1, class: "w-24" }, null, 8, ["value"])]), s("div", tc, [o3[6] || (o3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示点", -1)), r(n(de), { checked: e2.element.props?.dot, onChange: o3[2] || (o3[2] = (e3) => p2("dot", e3)), size: "small" }, null, 8, ["checked"])]), s("div", lc, [o3[7] || (o3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "颜色", -1)), r(n(S), { value: e2.element.props?.color, onInput: o3[3] || (o3[3] = (e3) => p2("color", e3.target.value)), size: "small", class: "w-24", placeholder: "red" }, null, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-88756b62"]]), sc = { class: "space-y-6" }, rc = { class: "space-y-4" }, nc = { class: "flex items-center justify-between" }, oc = { class: "flex items-center justify-between" }, ic = Ml(e({ __name: "CalendarProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", sc, [s("section", null, [i3[6] || (i3[6] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "日历设置", -1)), s("div", rc, [s("div", nc, [i3[2] || (i3[2] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "全屏", -1)), r(n(de), { checked: e2.element.props?.fullscreen ?? true, onChange: i3[0] || (i3[0] = (e3) => d2("fullscreen", e3)), size: "small" }, null, 8, ["checked"])]), s("div", oc, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "模式", -1)), r(n(Z), { value: e2.element.props?.mode || "month", onChange: i3[1] || (i3[1] = (e3) => d2("mode", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "month" }, { default: o(() => [...i3[3] || (i3[3] = [w("月", -1)])]), _: 1 }), r(n(Be), { value: "year" }, { default: o(() => [...i3[4] || (i3[4] = [w("年", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-3f5e85ed"]]), pc = { class: "space-y-6" }, dc = { class: "space-y-4" }, cc = { class: "flex items-center justify-between" }, uc = { class: "flex items-center justify-between" }, mc = { class: "flex items-center justify-between" }, xc = { class: "flex items-center justify-between" }, gc = Ml(e({ __name: "CarouselProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", pc, [s("section", null, [i3[14] || (i3[14] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "轮播设置", -1)), s("div", dc, [s("div", cc, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "自动播放", -1)), r(n(de), { checked: e2.element.props?.autoplay, onChange: i3[0] || (i3[0] = (e3) => d2("autoplay", e3)), size: "small" }, null, 8, ["checked"])]), s("div", uc, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "显示指示点", -1)), r(n(de), { checked: e2.element.props?.dots ?? true, onChange: i3[1] || (i3[1] = (e3) => d2("dots", e3)), size: "small" }, null, 8, ["checked"])]), s("div", mc, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "动画", -1)), r(n(R), { value: e2.element.props?.effect || "scrollx", onChange: i3[2] || (i3[2] = (e3) => d2("effect", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "scrollx" }, { default: o(() => [...i3[6] || (i3[6] = [w("滚动", -1)])]), _: 1 }), r(n(W), { value: "fade" }, { default: o(() => [...i3[7] || (i3[7] = [w("渐隐", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", xc, [i3[13] || (i3[13] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "点位置", -1)), r(n(R), { value: e2.element.props?.dotPosition || "bottom", onChange: i3[3] || (i3[3] = (e3) => d2("dotPosition", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "top" }, { default: o(() => [...i3[9] || (i3[9] = [w("上", -1)])]), _: 1 }), r(n(W), { value: "bottom" }, { default: o(() => [...i3[10] || (i3[10] = [w("下", -1)])]), _: 1 }), r(n(W), { value: "left" }, { default: o(() => [...i3[11] || (i3[11] = [w("左", -1)])]), _: 1 }), r(n(W), { value: "right" }, { default: o(() => [...i3[12] || (i3[12] = [w("右", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-6294fa8b"]]), yc = { class: "space-y-6" }, vc = { class: "space-y-4" }, fc = Ml(e({ __name: "CommentProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", yc, [s("section", null, [o3[6] || (o3[6] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "评论设置", -1)), s("div", vc, [s("div", null, [o3[3] || (o3[3] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "作者", -1)), r(n(S), { value: e2.element.props?.author, onInput: o3[0] || (o3[0] = (e3) => p2("author", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [o3[4] || (o3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "内容", -1)), r(n(Pe), { value: e2.element.props?.content, onInput: o3[1] || (o3[1] = (e3) => p2("content", e3.target.value)), size: "small", rows: 3 }, null, 8, ["value"])]), s("div", null, [o3[5] || (o3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "时间", -1)), r(n(S), { value: e2.element.props?.datetime, onInput: o3[2] || (o3[2] = (e3) => p2("datetime", e3.target.value)), size: "small" }, null, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-3b6c528b"]]), bc = { class: "space-y-6" }, hc = { class: "space-y-4" }, kc = { class: "flex items-center justify-between" }, wc = { class: "flex items-center justify-between" }, _c = { class: "flex items-center justify-between" }, zc = Ml(e({ __name: "DescriptionsProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", bc, [s("section", null, [i3[11] || (i3[11] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "详情设置", -1)), s("div", hc, [s("div", null, [i3[4] || (i3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: i3[0] || (i3[0] = (e3) => d2("title", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", kc, [i3[5] || (i3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "边框", -1)), r(n(de), { checked: e2.element.props?.bordered, onChange: i3[1] || (i3[1] = (e3) => d2("bordered", e3)), size: "small" }, null, 8, ["checked"])]), s("div", wc, [i3[9] || (i3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(R), { value: e2.element.props?.size || "default", onChange: i3[2] || (i3[2] = (e3) => d2("size", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "small" }, { default: o(() => [...i3[6] || (i3[6] = [w("小", -1)])]), _: 1 }), r(n(W), { value: "default" }, { default: o(() => [...i3[7] || (i3[7] = [w("默认", -1)])]), _: 1 }), r(n(W), { value: "middle" }, { default: o(() => [...i3[8] || (i3[8] = [w("中", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", _c, [i3[10] || (i3[10] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "列数", -1)), r(n(A), { value: e2.element.props?.column || 3, onChange: i3[3] || (i3[3] = (e3) => d2("column", e3)), size: "small", min: 1, class: "w-24" }, null, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-e6a51081"]]), Cc = { class: "space-y-6" }, Ic = { class: "space-y-4" }, $c = Ml(e({ __name: "EmptyProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", Cc, [s("section", null, [o3[4] || (o3[4] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "空状态设置", -1)), s("div", Ic, [s("div", null, [o3[2] || (o3[2] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "描述文字", -1)), r(n(S), { value: e2.element.props?.description, onInput: o3[0] || (o3[0] = (e3) => p2("description", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [o3[3] || (o3[3] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "图片地址", -1)), r(n(S), { value: e2.element.props?.image, onInput: o3[1] || (o3[1] = (e3) => p2("image", e3.target.value)), size: "small", placeholder: "https://..." }, null, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-c20b2652"]]), Dc = { class: "space-y-6" }, jc = { class: "space-y-4" }, Mc = { class: "flex items-center justify-between" }, Bc = { class: "flex items-center justify-between" }, Pc = { class: "flex items-center justify-between" }, Sc = Ml(e({ __name: "ListProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Dc, [s("section", null, [i3[9] || (i3[9] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "列表设置", -1)), s("div", jc, [s("div", Mc, [i3[3] || (i3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "边框", -1)), r(n(de), { checked: e2.element.props?.bordered, onChange: i3[0] || (i3[0] = (e3) => d2("bordered", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Bc, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "分割线", -1)), r(n(de), { checked: e2.element.props?.split ?? true, onChange: i3[1] || (i3[1] = (e3) => d2("split", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Pc, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(R), { value: e2.element.props?.size || "default", onChange: i3[2] || (i3[2] = (e3) => d2("size", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "small" }, { default: o(() => [...i3[5] || (i3[5] = [w("小", -1)])]), _: 1 }), r(n(W), { value: "default" }, { default: o(() => [...i3[6] || (i3[6] = [w("默认", -1)])]), _: 1 }), r(n(W), { value: "large" }, { default: o(() => [...i3[7] || (i3[7] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-e081f3b9"]]), Tc = { class: "space-y-6" }, Ec = { class: "space-y-4" }, Ac = { class: "flex items-center justify-between" }, Rc = { class: "flex items-center justify-between" }, Wc = Ml(e({ __name: "PopoverProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Tc, [s("section", null, [i3[15] || (i3[15] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "气泡设置", -1)), s("div", Ec, [s("div", null, [i3[4] || (i3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: i3[0] || (i3[0] = (e3) => d2("title", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [i3[5] || (i3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "内容", -1)), r(n(Pe), { value: e2.element.props?.content, onInput: i3[1] || (i3[1] = (e3) => d2("content", e3.target.value)), size: "small", rows: 3 }, null, 8, ["value"])]), s("div", Ac, [i3[9] || (i3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "触发方式", -1)), r(n(R), { value: e2.element.props?.trigger || "hover", onChange: i3[2] || (i3[2] = (e3) => d2("trigger", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "hover" }, { default: o(() => [...i3[6] || (i3[6] = [w("悬停", -1)])]), _: 1 }), r(n(W), { value: "click" }, { default: o(() => [...i3[7] || (i3[7] = [w("点击", -1)])]), _: 1 }), r(n(W), { value: "focus" }, { default: o(() => [...i3[8] || (i3[8] = [w("聚焦", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), s("div", Rc, [i3[14] || (i3[14] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "位置", -1)), r(n(R), { value: e2.element.props?.placement || "top", onChange: i3[3] || (i3[3] = (e3) => d2("placement", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "top" }, { default: o(() => [...i3[10] || (i3[10] = [w("上", -1)])]), _: 1 }), r(n(W), { value: "bottom" }, { default: o(() => [...i3[11] || (i3[11] = [w("下", -1)])]), _: 1 }), r(n(W), { value: "left" }, { default: o(() => [...i3[12] || (i3[12] = [w("左", -1)])]), _: 1 }), r(n(W), { value: "right" }, { default: o(() => [...i3[13] || (i3[13] = [w("右", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-23bb6a0a"]]), Uc = { class: "space-y-6" }, Lc = { class: "space-y-4" }, Gc = { class: "flex items-center justify-between" }, Nc = { class: "flex items-center justify-between" }, Hc = { class: "flex items-center justify-between" }, Oc = { class: "flex items-center justify-between" }, Fc = Ml(e({ __name: "QRCodeProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", Uc, [s("section", null, [i3[14] || (i3[14] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "二维码设置", -1)), s("div", Lc, [s("div", null, [i3[5] || (i3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "内容 (Value)", -1)), r(n(S), { value: e2.element.props?.value, onInput: i3[0] || (i3[0] = (e3) => d2("value", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", Gc, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(A), { value: e2.element.props?.size || 160, onChange: i3[1] || (i3[1] = (e3) => d2("size", e3)), size: "small", min: 10, class: "w-24" }, null, 8, ["value"])]), s("div", Nc, [i3[7] || (i3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "颜色", -1)), r(n(S), { value: e2.element.props?.color, onInput: i3[2] || (i3[2] = (e3) => d2("color", e3.target.value)), size: "small", class: "w-24", placeholder: "#000" }, null, 8, ["value"])]), s("div", Hc, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "背景色", -1)), r(n(S), { value: e2.element.props?.bgColor, onInput: i3[3] || (i3[3] = (e3) => d2("bgColor", e3.target.value)), size: "small", class: "w-24", placeholder: "#fff" }, null, 8, ["value"])]), s("div", Oc, [i3[13] || (i3[13] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "纠错等级", -1)), r(n(R), { value: e2.element.props?.errorLevel || "M", onChange: i3[4] || (i3[4] = (e3) => d2("errorLevel", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "L" }, { default: o(() => [...i3[9] || (i3[9] = [w("L (7%)", -1)])]), _: 1 }), r(n(W), { value: "M" }, { default: o(() => [...i3[10] || (i3[10] = [w("M (15%)", -1)])]), _: 1 }), r(n(W), { value: "Q" }, { default: o(() => [...i3[11] || (i3[11] = [w("Q (25%)", -1)])]), _: 1 }), r(n(W), { value: "H" }, { default: o(() => [...i3[12] || (i3[12] = [w("H (30%)", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-511a87a8"]]), Vc = { class: "space-y-6" }, Jc = { class: "space-y-4" }, Kc = { class: "flex items-center justify-between" }, Zc = { class: "flex items-center justify-between" }, qc = { key: 0, class: "flex items-center justify-between" }, Qc = Ml(e({ __name: "RadioProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  }, c2 = (e3) => {
    p2("update:props", e3);
  };
  return (t3, i3) => (l(), a("div", Vc, [s("section", null, [i3[10] || (i3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "单选框设置", -1)), s("div", Jc, [s("div", Kc, [i3[3] || (i3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: i3[0] || (i3[0] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", Zc, [i3[6] || (i3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "选项类型", -1)), r(n(Z), { value: e2.element.props?.optionType || "default", onChange: i3[1] || (i3[1] = (e3) => d2("optionType", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "default" }, { default: o(() => [...i3[4] || (i3[4] = [w("默认", -1)])]), _: 1 }), r(n(Be), { value: "button" }, { default: o(() => [...i3[5] || (i3[5] = [w("按钮", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])]), "button" === e2.element.props?.optionType ? (l(), a("div", qc, [i3[9] || (i3[9] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "按钮风格", -1)), r(n(Z), { value: e2.element.props?.buttonStyle || "outline", onChange: i3[2] || (i3[2] = (e3) => d2("buttonStyle", e3.target.value)), size: "small" }, { default: o(() => [r(n(Be), { value: "outline" }, { default: o(() => [...i3[7] || (i3[7] = [w("描边", -1)])]), _: 1 }), r(n(Be), { value: "solid" }, { default: o(() => [...i3[8] || (i3[8] = [w("填色", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])) : f("", true), r(Yr, { element: e2.element, "is-dark-mode": e2.isDarkMode, "onUpdate:props": c2 }, null, 8, ["element", "is-dark-mode"])])])]));
} }), [["__scopeId", "data-v-320bc446"]]), Yc = { class: "space-y-6" }, Xc = { class: "space-y-4" }, eu = { class: "flex items-center justify-between" }, tu = { class: "flex items-center justify-between" }, lu = Ml(e({ __name: "CheckboxProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  }, d2 = (e3) => {
    i2("update:props", e3);
  };
  return (t3, o3) => (l(), a("div", Yc, [s("section", null, [o3[4] || (o3[4] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "多选框设置", -1)), s("div", Xc, [s("div", eu, [o3[2] || (o3[2] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: o3[0] || (o3[0] = (e3) => p2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", tu, [o3[3] || (o3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "全选状态", -1)), r(n(de), { checked: e2.element.props?.indeterminate, onChange: o3[1] || (o3[1] = (e3) => p2("indeterminate", e3)), size: "small" }, null, 8, ["checked"])]), r(Yr, { element: e2.element, "is-dark-mode": e2.isDarkMode, "onUpdate:props": d2 }, null, 8, ["element", "is-dark-mode"])])])]));
} }), [["__scopeId", "data-v-97714ee9"]]), au = { class: "space-y-6" }, su = { class: "space-y-4" }, ru = { class: "flex items-center justify-between" }, nu = { class: "flex items-center justify-between" }, ou = { class: "flex items-center justify-between" }, iu = Ml(e({ __name: "SegmentedProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const i2 = e2, p2 = t2, d2 = (e3, t3) => {
    const l2 = { ...i2.element.props || {}, [e3]: t3 };
    p2("update:props", l2);
  };
  return (t3, i3) => (l(), a("div", au, [s("section", null, [i3[9] || (i3[9] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "分段控制器设置", -1)), s("div", su, [s("div", ru, [i3[3] || (i3[3] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "禁用", -1)), r(n(de), { checked: e2.element.props?.disabled, onChange: i3[0] || (i3[0] = (e3) => d2("disabled", e3)), size: "small" }, null, 8, ["checked"])]), s("div", nu, [i3[4] || (i3[4] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "通栏", -1)), r(n(de), { checked: e2.element.props?.block, onChange: i3[1] || (i3[1] = (e3) => d2("block", e3)), size: "small" }, null, 8, ["checked"])]), s("div", ou, [i3[8] || (i3[8] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "尺寸", -1)), r(n(R), { value: e2.element.props?.size || "default", onChange: i3[2] || (i3[2] = (e3) => d2("size", e3)), size: "small", class: "w-24" }, { default: o(() => [r(n(W), { value: "small" }, { default: o(() => [...i3[5] || (i3[5] = [w("小", -1)])]), _: 1 }), r(n(W), { value: "default" }, { default: o(() => [...i3[6] || (i3[6] = [w("默认", -1)])]), _: 1 }), r(n(W), { value: "large" }, { default: o(() => [...i3[7] || (i3[7] = [w("大", -1)])]), _: 1 })]), _: 1 }, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-b11debee"]]), pu = { class: "space-y-6" }, du = { class: "space-y-4" }, cu = { class: "flex items-center justify-between" }, uu = Ml(e({ __name: "StatisticProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", pu, [s("section", null, [o3[10] || (o3[10] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "统计设置", -1)), s("div", du, [s("div", null, [o3[5] || (o3[5] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "标题", -1)), r(n(S), { value: e2.element.props?.title, onInput: o3[0] || (o3[0] = (e3) => p2("title", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [o3[6] || (o3[6] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "数值", -1)), r(n(A), { value: e2.element.props?.value, onChange: o3[1] || (o3[1] = (e3) => p2("value", e3)), size: "small", class: "w-full" }, null, 8, ["value"])]), s("div", cu, [o3[7] || (o3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "精度", -1)), r(n(A), { value: e2.element.props?.precision, onChange: o3[2] || (o3[2] = (e3) => p2("precision", e3)), size: "small", min: 0, class: "w-24" }, null, 8, ["value"])]), s("div", null, [o3[8] || (o3[8] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "前缀", -1)), r(n(S), { value: e2.element.props?.prefix, onInput: o3[3] || (o3[3] = (e3) => p2("prefix", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", null, [o3[9] || (o3[9] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "后缀", -1)), r(n(S), { value: e2.element.props?.suffix, onInput: o3[4] || (o3[4] = (e3) => p2("suffix", e3.target.value)), size: "small" }, null, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-fbf1d01e"]]), mu = { class: "space-y-6" }, xu = { class: "space-y-4" }, gu = { class: "flex items-center justify-between" }, yu = { class: "flex items-center justify-between" }, vu = { class: "flex items-center justify-between" }, fu = Ml(e({ __name: "TagProperties", props: { element: {}, isDarkMode: { type: Boolean } }, emits: ["update:props"], setup(e2, { emit: t2 }) {
  const o2 = e2, i2 = t2, p2 = (e3, t3) => {
    const l2 = { ...o2.element.props || {}, [e3]: t3 };
    i2("update:props", l2);
  };
  return (t3, o3) => (l(), a("div", mu, [s("section", null, [o3[8] || (o3[8] = s("h4", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3" }, "标签设置", -1)), s("div", xu, [s("div", null, [o3[4] || (o3[4] = s("label", { class: "block text-[10px] text-gray-400 mb-1 uppercase" }, "文本内容", -1)), r(n(S), { value: e2.element.props?.content, onInput: o3[0] || (o3[0] = (e3) => p2("content", e3.target.value)), size: "small" }, null, 8, ["value"])]), s("div", gu, [o3[5] || (o3[5] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "颜色", -1)), r(n(S), { value: e2.element.props?.color, onInput: o3[1] || (o3[1] = (e3) => p2("color", e3.target.value)), size: "small", class: "w-24", placeholder: "blue" }, null, 8, ["value"])]), s("div", yu, [o3[6] || (o3[6] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "可关闭", -1)), r(n(de), { checked: e2.element.props?.closable, onChange: o3[2] || (o3[2] = (e3) => p2("closable", e3)), size: "small" }, null, 8, ["checked"])]), s("div", vu, [o3[7] || (o3[7] = s("span", { class: "text-xs text-gray-600 dark:text-gray-400" }, "图标", -1)), r(n(S), { value: e2.element.props?.icon, onInput: o3[3] || (o3[3] = (e3) => p2("icon", e3.target.value)), size: "small", class: "w-24", placeholder: "CheckOutlined" }, null, 8, ["value"])])])])]));
} }), [["__scopeId", "data-v-0e6763f9"]]), bu = { class: "flex-1 overflow-y-auto custom-scrollbar" }, hu = { class: "p-6 space-y-8" }, ku = { class: "space-y-6" }, wu = { key: 0, class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, _u = { key: 1, class: "pt-4 border-t border-gray-100/30 dark:border-zinc-900/30" }, zu = { key: 0 }, Cu = Ml(e({ __name: "ElementProperties", props: { element: {}, parentElement: {}, isDarkMode: { type: Boolean } }, setup(e2) {
  const t2 = e2, n2 = vl(), o2 = x(() => {
    if (!t2.element) return null;
    if ("container-box" === t2.element.type) return Zn;
    if (t2.element.type.startsWith("container-")) return An;
    return { button: xr, input: Ar, "number-input": Ar, select: Yr, checkbox: lu, table: yn, icon: Eo, divider: No, breadcrumb: Ko, dropdown: ep, menu: vi, "page-header": np, pagination: Ii, steps: li, "auto-complete": Ip, cascader: Pp, "date-picker": Up, form: Vp, mentions: Yp, radio: Qc, rate: rd, slider: md, switch: hd, "time-picker": Id, transfer: Pd, "tree-select": Wd, upload: Fd, avatar: qd, badge: ac, calendar: ic, card: Wi, carousel: gc, collapse: Ji, comment: fc, descriptions: zc, empty: $c, image: Bi, list: Sc, popover: Wc, qrcode: Fc, segmented: iu, statistic: uu, tabs: di, tag: fu, timeline: mp, tour: hp }[t2.element.type] || $o;
  }), i2 = (e3, l2) => {
    n2.updateElement(t2.element.id, { [e3]: l2 });
  }, p2 = (e3) => {
    if ("container-grid" === t2.element.type) {
      const l2 = (e3.cols || t2.element.props?.cols || 3) * (e3.rows || t2.element.props?.rows || 1), a2 = [...t2.element.children || []], s2 = a2.length;
      if (l2 > s2) for (let e4 = 0; e4 < l2 - s2; e4++) a2.push(yl.createNewElement("container-col"));
      else if (l2 < s2) {
        let e4 = s2 - l2;
        for (; e4 > 0 && a2.length > 0; ) {
          const t3 = a2[a2.length - 1];
          if ("container-col" !== t3.type || t3.children && 0 !== t3.children.length) break;
          a2.pop(), e4--;
        }
      }
      n2.updateElement(t2.element.id, { props: e3, children: a2 });
    } else if ("container-flex" === t2.element.type && e3.rows !== t2.element.props?.rows) {
      const l2 = e3.rows || 1, a2 = [...t2.element.children || []], s2 = a2.length;
      if (l2 > s2) for (let e4 = 0; e4 < l2 - s2; e4++) a2.push(yl.createNewElement("container-flex"));
      else if (l2 < s2) {
        let e4 = s2 - l2;
        for (; e4 > 0 && a2.length > 0; ) {
          const t3 = a2[a2.length - 1];
          if ("container-box" !== t3.type && "container-flex" !== t3.type || t3.children && 0 !== t3.children.length) break;
          a2.pop(), e4--;
        }
      }
      l2 > 1 && "column" !== e3.flexDirection && (e3.flexDirection = "column"), n2.updateElement(t2.element.id, { props: e3, children: a2 });
    } else n2.updateElement(t2.element.id, { props: e3 });
  }, d2 = (e3) => {
    n2.updateElement(t2.element.id, { styles: e3 });
  };
  return (t3, n3) => (l(), a("div", bu, [s("div", hu, [s("section", null, [n3[2] || (n3[2] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-primary rounded-full" }), w(" 通用配置 ")], -1)), s("div", ku, [r(Zs, { element: e2.element, "parent-element": e2.parentElement, "is-dark-mode": e2.isDarkMode, "onUpdate:field": i2, "onUpdate:props": p2 }, null, 8, ["element", "parent-element", "is-dark-mode"]), r(er, { element: e2.element, "parent-element": e2.parentElement, "is-dark-mode": e2.isDarkMode, "onUpdate:props": p2 }, null, 8, ["element", "parent-element", "is-dark-mode"]), "container-flex" === e2.parentElement?.type ? (l(), a("div", wu, [n3[0] || (n3[0] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-emerald-500 rounded-full" }), w(" 弹性子项配置 ")], -1)), r(Xn, { element: e2.element, "is-dark-mode": e2.isDarkMode, "onUpdate:props": p2 }, null, 8, ["element", "is-dark-mode"])])) : f("", true), "container-grid" === e2.parentElement?.type ? (l(), a("div", _u, [n3[1] || (n3[1] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-blue-500 rounded-full" }), w(" 栅格子项配置 ")], -1)), r(oo, { element: e2.element, "is-dark-mode": e2.isDarkMode, "onUpdate:props": p2 }, null, 8, ["element", "is-dark-mode"])])) : f("", true)])]), o2.value ? (l(), a("section", zu, [n3[3] || (n3[3] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-indigo-500 rounded-full" }), w(" 专属配置 ")], -1)), (l(), c(u(o2.value), { element: e2.element, "is-dark-mode": e2.isDarkMode, "onUpdate:field": i2, "onUpdate:props": p2, "onUpdate:styles": d2 }, null, 40, ["element", "is-dark-mode"]))])) : f("", true)])]));
} }), [["__scopeId", "data-v-4695b605"]]), Iu = { class: "space-y-8" }, $u = { class: "space-y-6" }, Du = { class: "p-4 rounded-xl border border-dashed border-gray-100/30 dark:border-zinc-900/30 text-center" }, ju = { class: "text-[10px] text-gray-400 font-medium" }, Mu = Ml(e({ __name: "CanvasProperties", setup(e2) {
  const t2 = vl();
  return (e3, o2) => (l(), a("div", Iu, [s("section", null, [o2[4] || (o2[4] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-primary rounded-full" }), w(" 画布设置 ")], -1)), s("div", $u, [s("div", null, [o2[2] || (o2[2] = s("label", { class: "block text-[11px] font-bold text-gray-500 mb-3 uppercase tracking-wide" }, "组件间距", -1)), r(n($e), { value: n(t2).canvasSpacing, "onUpdate:value": o2[0] || (o2[0] = (e4) => n(t2).canvasSpacing = e4), block: "", options: [{ value: "compact", label: "紧凑" }, { value: "normal", label: "标准" }, { value: "loose", label: "宽松" }] }, null, 8, ["value"])]), s("div", { class: d(["flex items-center justify-between p-4 border rounded-xl", n(t2).isDarkMode ? "bg-slate-800 border-zinc-900/30 text-slate-200" : "bg-gray-50 border-gray-100/30"]) }, [o2[3] || (o2[3] = s("label", { class: "text-sm font-bold cursor-pointer" }, "深色模式", -1)), r(n(de), { checked: n(t2).isDarkMode, onChange: o2[1] || (o2[1] = (e4) => n(t2).toggleDarkMode()) }, null, 8, ["checked"])], 2)])]), s("section", null, [o2[5] || (o2[5] = s("h3", { class: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2" }, [s("span", { class: "w-1 h-3 bg-emerald-500 rounded-full" }), w(" 页面信息 ")], -1)), s("div", Du, [s("p", ju, "当前页面包含 " + m(n(t2).elements.length) + " 个顶级组件", 1)])])]));
} }), [["__scopeId", "data-v-eb9c2b86"]]), Bu = { class: "flex-1 overflow-y-auto custom-scrollbar p-6" }, Pu = Ml(e({ __name: "CanvasSettings", setup: (e2) => (e3, t2) => (l(), a("div", Bu, [r(Mu)])) }), [["__scopeId", "data-v-4c634488"]]), Su = { key: 0, class: "h-full flex flex-col bg-white dark:bg-[#141414] border-l border-gray-100/30 dark:border-zinc-900/30 shadow-xl overflow-hidden" }, Tu = { key: 1, class: "h-full flex flex-col bg-white dark:bg-black border-l border-gray-100/30 dark:border-zinc-900/30 shadow-xl overflow-hidden" }, Eu = Ml(e({ __name: "PropertiesPanel", setup(e2) {
  const t2 = vl(), s2 = x(() => t2.findElementById(t2.elements, t2.selectedElementId || "") || null), o2 = x(() => t2.selectedElementId ? t2.findParentById(t2.selectedElementId) : null), i2 = x(() => s2.value ? yl.getElementLabel(s2.value) : "");
  return (e3, p2) => s2.value ? (l(), a("div", Su, [r(Fs, { title: "属性设置", subtitle: i2.value }, null, 8, ["subtitle"]), r(Cu, { element: s2.value, "parent-element": o2.value, "is-dark-mode": n(t2).isDarkMode }, null, 8, ["element", "parent-element", "is-dark-mode"])])) : (l(), a("div", Tu, [r(Fs, { title: "全局设置", subtitle: "CANVAS SETTINGS" }), r(Pu)]));
} }), [["__scopeId", "data-v-5517ede3"]]), Au = Ml(e({ __name: "PreviewElement", props: { element: {} }, setup(e2) {
  const t2 = vl(), s2 = e2, u2 = x(() => s2.element.type.startsWith("container-"));
  return (s3, m2) => {
    const x2 = g("PreviewElement", true);
    return l(), a("div", { class: d(["preview-element h-full", "fixed" === e2.element.props?.widthType ? "w-auto shrink-0" : "w-full", u2.value || "button" === e2.element.type ? "" : "min-w-[120px]"]), style: y("fixed" === e2.element.props?.widthType ? { width: (e2.element.props?.width || 200) + "px" } : {}) }, [r(gs, { element: e2.element, "is-dark-mode": n(t2).isDarkMode, "is-preview": true, class: d(e2.element.type.startsWith("container-") ? "h-full" : "") }, _({ _: 2 }, [u2.value ? { name: "default", fn: o(() => [(l(true), a(i, null, p(e2.element.children, (t3) => (l(), a(i, { key: t3.id }, ["container-grid" === e2.element.type ? (l(), c(n(Me), { key: 0, flex: t3.props?.flex, offset: t3.props?.offset || 0, order: t3.props?.order || 0, pull: t3.props?.pull || 0, push: t3.props?.push || 0, span: t3.props?.span ?? 24 / (e2.element.props?.cols || 3), xs: t3.props?.xs, sm: t3.props?.sm, md: t3.props?.md, lg: t3.props?.lg, xl: t3.props?.xl, xxl: t3.props?.xxl }, { default: o(() => [r(x2, { element: t3 }, null, 8, ["element"])]), _: 2 }, 1032, ["flex", "offset", "order", "pull", "push", "span", "xs", "sm", "md", "lg", "xl", "xxl"])) : (l(), a("div", { key: 1, class: d(["flex flex-col items-stretch", "button" !== t3.type ? "min-w-[120px]" : "min-w-[60px]", "container-box" === e2.element.type ? "w-auto" : "container-row-col" === e2.element.type ? "fixed" === t3.props?.widthType ? "w-auto shrink-0" : "column" === e2.element.props?.direction ? "w-full" : "" : "container-col" === e2.element.type ? "fixed" === t3.props?.widthType ? "w-auto shrink-0" : "w-full" : "container-flex" === e2.element.type ? "fixed" === t3.props?.widthType ? "w-auto shrink-0" : "" : "w-full"]), style: y({ width: "fixed" === t3.props?.widthType ? (t3.props?.width || 200) + "px" : void 0, flexGrow: t3.props?.flexGrow ?? ("container-row-col" !== e2.element.type && "container-col" !== e2.element.type || "fixed" === t3.props?.widthType ? 0 : 1), flexShrink: t3.props?.flexShrink ?? ("fixed" === t3.props?.widthType ? 0 : 1), flexBasis: t3.props?.flexBasis || ("fixed" !== t3.props?.widthType && (("container-row-col" === e2.element.type || "container-col" === e2.element.type) && (t3.props?.flexGrow ?? 1) > 0 || "container-flex" === e2.element.type && (t3.props?.flexGrow ?? 0) > 0) ? "0%" : "auto"), order: t3.props?.order ?? 0, alignSelf: t3.props?.alignSelf || "auto" }) }, [r(x2, { element: t3, class: "w-full h-full" }, null, 8, ["element"])], 6))], 64))), 128))]), key: "0" } : void 0]), 1032, ["element", "is-dark-mode", "class"])], 6);
  };
} }), [["__scopeId", "data-v-018cf68a"]]), Ru = Ml(e({ __name: "Preview", setup(e2) {
  const t2 = vl(), o2 = x(() => ({ compact: "space-y-2", normal: "space-y-6", loose: "space-y-12" })[t2.canvasSpacing] || "space-y-6"), c2 = () => {
  };
  return (e3, u2) => (l(), a("div", { class: d(["w-full min-h-full p-10 transition-colors duration-300", n(t2).isDarkMode ? "bg-[#141414]" : "bg-white"]) }, [s("form", { onSubmit: v(c2, ["prevent"]), class: d(["w-full min-h-full", o2.value]) }, [(l(true), a(i, null, p(n(t2).elements, (e4) => (l(), a("div", { key: e4.id, class: d("fixed" === e4.props?.widthType ? "w-auto shrink-0" : "w-full") }, [r(Au, { element: e4 }, null, 8, ["element"])], 2))), 128))], 34)], 2));
} }), [["__scopeId", "data-v-a95c26c9"]]), Wu = { class: "flex items-center gap-3 min-w-[200px]" }, Uu = { class: "bg-gradient-to-br from-primary to-primary-dark p-2 rounded-xl shadow-lg shadow-primary/20 dark:shadow-primary/40" }, Lu = { class: "flex items-center gap-6" }, Gu = { class: "flex items-center gap-2 px-1" }, Nu = { class: "flex items-center gap-4" }, Hu = ["title"], Ou = { class: "relative" }, Fu = { class: "relative z-10" }, Vu = { class: "space-y-3" }, Ju = { class: "flex items-center justify-between gap-2" }, Ku = { class: "flex items-center justify-between gap-2" }, Zu = { class: "flex items-center justify-between gap-2 pt-3 border-t border-gray-100/30 dark:border-zinc-900/30 mt-3" }, qu = { class: "flex items-center gap-2 min-w-[300px] justify-end" }, Qu = { key: 0, class: "flex items-center gap-1 mr-2" }, Yu = { key: 1, class: "w-px h-6 bg-gray-200 dark:bg-zinc-800 mx-1" }, Xu = { class: "flex items-center gap-1 mr-2" }, em = { class: "flex items-center gap-1" }, tm = { class: "relative" }, lm = { class: "grid grid-cols-5 gap-2 relative z-10" }, am = ["onClick"], sm = { class: "mt-3 pt-3 border-t border-gray-50 dark:border-zinc-900/30 relative z-10" }, rm = Ml(e({ __name: "TopBar", props: { mode: {} }, emits: ["update:mode", "toggle-history", "clear", "import", "save", "export-vue"], setup(e2) {
  const x2 = vl(), g2 = t(false), k2 = t(false);
  return (t2, w2) => (l(), a("header", { class: d(["h-16 border-b flex items-center justify-between px-6 shrink-0 z-40 transition-all duration-300", n(x2).isDarkMode ? "bg-zinc-950 border-zinc-900/30 shadow-lg shadow-black/20" : "bg-white/80 backdrop-blur-md border-gray-100/30 shadow-sm shadow-gray-200/50"]) }, [s("div", Wu, [s("div", Uu, [r(n(Ht), { size: 22, class: "text-white" })]), w2[23] || (w2[23] = s("div", { class: "hidden sm:block" }, [s("h1", { class: "text-lg font-bold tracking-tight" }, "摸鱼表单设计器"), s("p", { class: "text-[10px] text-gray-400 font-medium uppercase tracking-widest" }, "Mfish Form Designer")], -1))]), s("div", Lu, [r(n($e), { value: e2.mode, "onUpdate:value": w2[0] || (w2[0] = (e3) => t2.$emit("update:mode", e3)), options: [{ value: "build", label: "设计", payload: { icon: n(et) } }, { value: "preview", label: "预览", payload: { icon: n(gt) } }, { value: "json", label: "JSON", payload: { icon: n(Ot) } }] }, { label: o((e3) => [s("div", Gu, [(l(), c(u(e3.payload.icon), { size: 14 })), s("span", null, m(e3.label), 1)])]), _: 1 }, 8, ["value", "options"]), w2[29] || (w2[29] = s("div", { class: "w-px h-6 bg-gray-100 dark:bg-slate-800" }, null, -1)), s("div", Nu, [r(n($e), { value: n(x2).deviceMode, onChange: w2[1] || (w2[1] = (e3) => n(x2).setDeviceMode(e3)), options: [{ value: "large-screen", payload: { icon: n(Ft), label: "大屏 (1920px)" } }, { value: "desktop", payload: { icon: n(Vt), label: "电脑 (1200px)" } }, { value: "tablet", payload: { icon: n(Jt), label: "平板 (992px)" } }, { value: "mobile-landscape", payload: { icon: n(Kt), label: "手机横屏 (768px)", class: "-rotate-90" } }, { value: "mobile-portrait", payload: { icon: n(Kt), label: "手机竖屏 (480px)" } }], class: d({ "dark-segmented": n(x2).isDarkMode }) }, { label: o(({ payload: e3 }) => [s("div", { class: "flex items-center justify-center p-1", title: e3.label }, [(l(), c(u(e3.icon), { size: 16, class: d(e3.class) }, null, 8, ["class"]))], 8, Hu)]), _: 1 }, 8, ["value", "options", "class"]), s("div", Ou, [s("button", { onClick: w2[2] || (w2[2] = (e3) => g2.value = !g2.value), class: "text-sm font-medium text-primary dark:text-primary-light hover:bg-primary/10 dark:hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-3" }, [s("span", null, m(n(x2).canvasWidth) + "px", 1), s("span", null, m(Number(n(x2).canvasZoom).toFixed(2)) + "%", 1)]), g2.value ? (l(), a("div", { key: 0, class: "fixed inset-0 z-40", onClick: w2[3] || (w2[3] = (e3) => g2.value = false) })) : f("", true), g2.value ? (l(), a("div", { key: 1, onMouseleave: w2[8] || (w2[8] = (e3) => g2.value = false), class: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-100/30 dark:border-zinc-900/30 p-4 z-50" }, [w2[28] || (w2[28] = s("div", { class: "absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-zinc-900 border-t border-l border-gray-100/30 dark:border-zinc-900/30 rotate-45" }, null, -1)), s("div", Fu, [w2[27] || (w2[27] = s("h3", { class: "font-bold text-sm mb-4 text-gray-800 dark:text-zinc-200" }, "画布设置", -1)), s("div", Vu, [s("div", Ju, [w2[24] || (w2[24] = s("span", { class: "text-sm text-gray-600 dark:text-zinc-400 w-12" }, "宽度", -1)), r(n(A), { value: n(x2).canvasWidth, "onUpdate:value": w2[4] || (w2[4] = (e3) => n(x2).canvasWidth = e3), onInput: w2[5] || (w2[5] = (e3) => n(x2).isAutoZoom = false), class: "flex-1", suffix: "px", min: 0 }, null, 8, ["value"])]), s("div", Ku, [w2[25] || (w2[25] = s("span", { class: "text-sm text-gray-600 dark:text-zinc-400 w-12" }, "缩放", -1)), r(n(A), { value: n(x2).canvasZoom, "onUpdate:value": w2[6] || (w2[6] = (e3) => n(x2).canvasZoom = e3), disabled: n(x2).isAutoZoom, class: "flex-1", suffix: "%", min: 1 }, null, 8, ["value", "disabled"])]), s("div", Zu, [w2[26] || (w2[26] = s("span", { class: "text-sm text-gray-600 dark:text-slate-400" }, "自动适配", -1)), r(n(de), { checked: n(x2).isAutoZoom, "onUpdate:checked": w2[7] || (w2[7] = (e3) => n(x2).isAutoZoom = e3) }, null, 8, ["checked"])])])])], 32)) : f("", true)])])]), s("div", qu, ["preview" !== e2.mode ? (l(), a("div", Qu, [s("button", { onClick: w2[9] || (w2[9] = (e3) => n(x2).showSidebar = !n(x2).showSidebar), class: d(["p-2 rounded-lg transition-colors", n(x2).showSidebar ? "bg-primary-10 text-primary dark:bg-primary-20 dark:text-primary-light" : "hover:bg-gray-100 dark:hover:bg-zinc-900 text-gray-500 dark:text-slate-400"]), title: "切换左侧边栏" }, [r(n(Zt), { size: 18 })], 2), s("button", { onClick: w2[10] || (w2[10] = (e3) => n(x2).showPropertiesPanel = !n(x2).showPropertiesPanel), class: d(["p-2 rounded-lg transition-colors", n(x2).showPropertiesPanel ? "bg-primary-10 text-primary dark:bg-primary-20 dark:text-primary-light" : "hover:bg-gray-100 dark:hover:bg-zinc-900 text-gray-500 dark:text-slate-400"]), title: "切换右侧面板" }, [r(n(qt), { size: 18 })], 2)])) : f("", true), "preview" !== e2.mode ? (l(), a("div", Yu)) : f("", true), s("div", Xu, [s("button", { onClick: w2[11] || (w2[11] = (...e3) => n(x2).undo && n(x2).undo(...e3)), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-zinc-400 transition-colors", title: "撤回" }, [r(n(Qt), { size: 18 })]), s("button", { onClick: w2[12] || (w2[12] = (...e3) => n(x2).redo && n(x2).redo(...e3)), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-zinc-400 transition-colors", title: "重做" }, [r(n(Yt), { size: 18 })]), s("button", { onClick: w2[13] || (w2[13] = (e3) => t2.$emit("toggle-history")), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-zinc-400 transition-colors", title: "历史记录" }, [r(n($t), { size: 18 })])]), w2[32] || (w2[32] = s("div", { class: "w-px h-6 bg-gray-200 dark:bg-zinc-800 mx-1" }, null, -1)), s("div", em, [s("button", { onClick: w2[14] || (w2[14] = (e3) => t2.$emit("clear")), class: "p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400 transition-colors", title: "清空画布" }, [r(n(Bt), { size: 18 })]), s("button", { onClick: w2[15] || (w2[15] = (...e3) => n(x2).toggleDarkMode && n(x2).toggleDarkMode(...e3)), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-zinc-400 transition-colors", title: "夜间模式" }, [n(x2).isDarkMode ? (l(), c(n(el), { key: 1, size: 18 })) : (l(), c(n(Xt), { key: 0, size: 18 }))]), s("div", tm, [s("button", { onClick: w2[16] || (w2[16] = v((e3) => k2.value = !k2.value, ["stop"])), class: d(["p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg transition-all flex items-center gap-1 relative z-30", { "bg-gray-100 dark:bg-zinc-900 shadow-inner": k2.value }]), title: "主题色" }, [s("div", { class: "w-4 h-4 rounded-full shadow-sm pointer-events-none border border-gray-100/30 dark:border-zinc-900/30", style: y({ backgroundColor: n(x2).primaryColor || "#4f46e5" }) }, null, 4)], 2), k2.value ? (l(), a("div", { key: 0, class: "fixed inset-0 z-[60]", onClick: w2[17] || (w2[17] = (e3) => k2.value = false) })) : f("", true), k2.value ? (l(), a("div", { key: 1, onClick: w2[19] || (w2[19] = v(() => {
  }, ["stop"])), class: "absolute top-full right-0 mt-2 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-gray-100/30 dark:border-zinc-900/30 z-[70] w-48 animate-in fade-in slide-in-from-top-2 duration-200" }, [w2[30] || (w2[30] = s("div", { class: "absolute -top-1 right-4 w-2 h-2 bg-white dark:bg-zinc-900 border-t border-l border-gray-100/30 dark:border-zinc-900/30 rotate-45" }, null, -1)), w2[31] || (w2[31] = s("p", { class: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 relative z-10" }, "选择主题色", -1)), s("div", lm, [(l(), a(i, null, p(["#4f46e5", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#6366f1", "#14b8a6", "#f43f5e"], (e3) => s("button", { key: e3, onClick: (t3) => {
    n(x2).primaryColor = e3, k2.value = false;
  }, class: "w-6 h-6 rounded-full transition-transform hover:scale-125 border-2", style: y({ backgroundColor: e3, borderColor: n(x2).primaryColor === e3 ? "white" : "transparent" }) }, null, 12, am)), 64))]), s("div", sm, [b(s("input", { type: "color", "onUpdate:modelValue": w2[18] || (w2[18] = (e3) => n(x2).primaryColor = e3), class: "w-full h-8 rounded cursor-pointer bg-transparent border-none" }, null, 512), [[h, n(x2).primaryColor]])])])) : f("", true)]), s("button", { onClick: w2[20] || (w2[20] = (e3) => t2.$emit("import")), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-slate-400 transition-colors", title: "导入配置" }, [r(n(ut), { size: 18 })]), s("button", { onClick: w2[21] || (w2[21] = (e3) => t2.$emit("save")), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-slate-400 transition-colors", title: "保存配置" }, [r(n(tl), { size: 18 })]), s("button", { onClick: w2[22] || (w2[22] = (e3) => t2.$emit("export-vue")), class: "p-2 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-lg text-gray-500 dark:text-slate-400 transition-colors", title: "导出 Vue 文件" }, [r(n(ll), { size: 18 })])])])], 2));
} }), [["__scopeId", "data-v-608b4cdc"]]), nm = { class: "absolute top-2 right-[320px] w-64 bg-white dark:bg-zinc-900 border border-gray-100/30 dark:border-zinc-900/30 rounded-2xl shadow-2xl z-50 overflow-hidden" }, om = { class: "p-4 border-b border-gray-100/30 dark:border-zinc-900/30 flex justify-between items-center" }, im = { class: "max-h-96 overflow-y-auto p-2 flex flex-col" }, pm = { key: 0, class: "p-8 text-center text-gray-400 text-xs" }, dm = ["onClick"], cm = { class: "flex items-center gap-2" }, um = { key: 0, class: "ml-auto text-[10px] bg-primary-10 dark:bg-primary-20 px-1.5 py-0.5 rounded" }, mm = Ml(e({ __name: "HistoryPanel", emits: ["close"], setup(e2) {
  const t2 = vl();
  return (e3, o2) => (l(), a("div", nm, [s("div", om, [o2[1] || (o2[1] = s("h3", { class: "font-bold text-sm" }, "历史记录", -1)), s("button", { onClick: o2[0] || (o2[0] = (t3) => e3.$emit("close")), class: "text-gray-400 hover:text-gray-600" }, [r(n(Ut), { size: 16 })])]), s("div", im, [0 === n(t2).history.length ? (l(), a("div", pm, "暂无记录")) : f("", true), (l(true), a(i, null, p(n(t2).history, (e4, o3) => (l(), a("button", { key: n(t2).history.length - 1 - o3, onClick: (e5) => ((e6) => {
    t2.historyIndex = e6;
    const l2 = JSON.parse(t2.history[e6]);
    t2.elements = l2.elements, t2.dataSources = l2.dataSources, t2.canvasWidth = l2.canvasWidth ?? 1200, t2.deviceMode = l2.deviceMode ?? "desktop";
  })(n(t2).history.length - 1 - o3), class: d(["w-full text-left p-3 rounded-xl text-xs transition-colors mb-1", n(t2).historyIndex === n(t2).history.length - 1 - o3 ? "bg-primary-10 dark:bg-primary-20 text-primary dark:text-primary-light font-bold" : "hover:bg-gray-50 dark:hover:bg-zinc-900"]) }, [s("div", cm, [r(n(pt), { size: 12 }), s("span", null, "状态 " + m(n(t2).history.length - o3), 1), n(t2).historyIndex === n(t2).history.length - 1 - o3 ? (l(), a("span", um, "当前")) : f("", true)])], 10, dm))), 128))])]));
} }), [["__scopeId", "data-v-00259a37"]]);
const xm = { class: "flex-1 flex overflow-hidden relative" }, gm = { class: "flex-1 flex flex-col overflow-hidden relative" }, ym = { key: 2, class: "flex-1 bg-gray-50 dark:bg-[#0a0a0a] p-10 overflow-hidden flex flex-col" }, vm = { class: "max-w-5xl w-full mx-auto flex-1 flex flex-col ai-gradient-border shadow-xl overflow-hidden" }, fm = { class: "h-14 border-b border-gray-100/30 dark:border-zinc-900/30 flex items-center justify-between px-6 shrink-0" }, bm = { class: "flex items-center gap-2" }, hm = { class: "flex-1 overflow-auto p-6 font-mono text-sm" }, km = { class: "text-gray-700 dark:text-slate-300" }, wm = { key: 0, class: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" }, _m = { class: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 p-6 max-w-sm w-full animate-in fade-in zoom-in duration-200" }, zm = { class: "flex items-center gap-3 mb-4 text-red-500" }, Cm = { class: "flex gap-3" }, Im = { key: 1, class: "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-4 duration-300" }, $m = { class: "bg-green-500 p-1 rounded-full" }, Dm = Ml(e({ __name: "App", setup(e2) {
  const i2 = t("build"), p2 = vl(), u2 = x(() => {
    const e3 = p2.primaryColor, t2 = parseInt(e3.slice(1, 3), 16), l2 = parseInt(e3.slice(3, 5), 16), a2 = parseInt(e3.slice(5, 7), 16);
    return { "--primary-color": e3, "--primary-rgb": `${t2} ${l2} ${a2}` };
  }), g2 = t(false), v2 = t(false), b2 = t(false), h2 = t(null), k2 = t(null), { calculateZoom: _2 } = Ss(k2, 80);
  B(i2, (e3) => {
    "preview" === e3 && setTimeout(_2, 100);
  }), B(() => p2.primaryColor, (e3) => {
    document.documentElement.style.setProperty("--primary-color", e3);
  }, { immediate: true });
  const z2 = x(() => JSON.stringify({ elements: p2.elements, dataSources: p2.dataSources, canvasWidth: p2.canvasWidth, deviceMode: p2.deviceMode }, null, 2)), C2 = (e3) => {
    document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || ((e3.ctrlKey || e3.metaKey) && "s" === e3.key.toLowerCase() ? (e3.preventDefault(), I2()) : !e3.ctrlKey && !e3.metaKey || "z" !== e3.key.toLowerCase() || e3.shiftKey ? (e3.ctrlKey || e3.metaKey) && "z" === e3.key.toLowerCase() && e3.shiftKey ? (e3.preventDefault(), p2.redo()) : "Delete" === e3.key || "Backspace" === e3.key ? p2.selectedElementId && (e3.preventDefault(), p2.removeElement(p2.selectedElementId)) : (e3.ctrlKey || e3.metaKey) && ["1", "2", "3"].includes(e3.key) && (e3.preventDefault(), "1" === e3.key && (i2.value = "build"), "2" === e3.key && (i2.value = "preview"), "3" === e3.key && (i2.value = "json")) : (e3.preventDefault(), p2.undo()));
  };
  j(() => {
    0 === p2.history.length && p2.saveHistory(), window.addEventListener("keydown", C2);
  }), M(() => {
    window.removeEventListener("keydown", C2);
  });
  const I2 = () => {
    const e3 = new Blob([z2.value], { type: "application/json" }), t2 = URL.createObjectURL(e3), l2 = document.createElement("a");
    l2.href = t2, l2.download = `form-config-${(/* @__PURE__ */ new Date()).getTime()}.json`, l2.click(), URL.revokeObjectURL(t2);
  }, $2 = () => {
    const e3 = (function(e4) {
      const t3 = /* @__PURE__ */ new Set(), l3 = /* @__PURE__ */ new Set(), a3 = [], s2 = (e5, r3 = 2, n3 = false) => {
        const o3 = "  ".repeat(r3);
        let i4 = "", p4 = "", d3 = false;
        const c3 = { input: "Input", "number-input": "InputNumber", select: "Select", button: "Button", checkbox: "CheckboxGroup", radio: "RadioGroup", table: "Table", divider: "Divider", breadcrumb: "Breadcrumb", steps: "Steps", tabs: "Tabs", menu: "Menu", pagination: "Pagination", image: "Image", card: "Card", collapse: "Collapse", dropdown: "Dropdown", "page-header": "PageHeader", timeline: "Timeline", tour: "Tour", "auto-complete": "AutoComplete", cascader: "Cascader", "date-picker": "DatePicker", "time-picker": "TimePicker", form: "Form", mentions: "Mentions", rate: "Rate", slider: "Slider", switch: "Switch", transfer: "Transfer", "tree-select": "TreeSelect", upload: "Upload", avatar: "Avatar", badge: "Badge", calendar: "Calendar", carousel: "Carousel", comment: "Comment", descriptions: "Descriptions", empty: "Empty", list: "List", popover: "Popover", qrcode: "QRCode", segmented: "Segmented", statistic: "Statistic", tag: "Tag", icon: "Icon" };
        if (e5.type.startsWith("container-")) d3 = true, "container-grid" === e5.type ? (p4 = "ARow", t3.add("Row"), t3.add("Col")) : p4 = "div";
        else {
          const l4 = c3[e5.type] || e5.type.split("-").map((e6) => e6.charAt(0).toUpperCase() + e6.slice(1)).join("");
          "icon" === e5.type ? (p4 = e5.props?.icon || "StarOutlined", t3.add(`${p4}`)) : (p4 = `A${l4}`, t3.add(l4));
        }
        let u3 = "";
        if (e5.props) for (const [t4, l4] of Object.entries(e5.props)) null != l4 && "" !== l4 && ("items" === t4 && ["dropdown", "tabs", "collapse", "breadcrumb", "steps", "menu", "timeline"].includes(e5.type) || "text" === t4 && ["button", "divider", "dropdown", "tag"].includes(e5.type) || ["columns", "showPagination", "pageSize", "stripe", "title", "footer"].includes(t4) && "table" === e5.type || "content" === t4 && ["comment", "popover"].includes(e5.type) || ["size", "color", "icon"].includes(t4) && "icon" === e5.type || ["cols", "rows", "direction", "rowGap", "colGap", "minHeight", "justifyContent", "alignItems", "flexDirection", "flexWrap"].includes(t4) && e5.type.startsWith("container-") || ["flexGrow", "flexShrink", "flexBasis", "widthType", "width"].includes(t4) && ["container-col", "container-box"].includes(e5.type) || (u3 += "string" == typeof l4 ? ` ${t4}="${l4}"` : "boolean" == typeof l4 ? l4 ? ` ${t4}` : ` :${t4}="false"` : "object" == typeof l4 ? ` :${t4}='${JSON.stringify(l4)}'` : ` :${t4}="${l4}"`));
        if (e5.options && Array.isArray(e5.options) && ["select", "checkbox", "radio", "segmented"].includes(e5.type)) {
          const t4 = e5.options.map((e6) => "string" == typeof e6 ? { value: e6, label: e6 } : e6);
          u3 += ` :options='${JSON.stringify(t4)}'`;
        }
        let m2 = "", x2 = {};
        e5.styles && (x2 = { ...e5.styles }), "icon" === e5.type && (e5.props?.size && (x2.fontSize = `${e5.props.size}px`), e5.props?.color && (x2.color = e5.props.color));
        const g3 = (e6, t4) => {
          const l4 = `el-${e6.replace(/-/g, "_")}`;
          let s3 = `.${l4} {
`;
          for (const [e7, l5] of Object.entries(t4)) s3 += `  ${e7.replace(/[A-Z]/g, (e8) => `-${e8.toLowerCase()}`)}: ${l5}${"number" != typeof l5 || ["flex", "opacity", "zIndex", "fontWeight"].includes(e7) ? "" : "px"};
`;
          return s3 += "}", a3.push(s3), l4;
        };
        if (Object.keys(x2).length > 0 && (m2 = ` class="${g3(e5.id, x2)}"`), ["input", "number-input", "select", "radio", "checkbox", "switch", "slider", "rate", "date-picker", "time-picker", "cascader", "tree-select", "auto-complete", "mentions"].includes(e5.type)) {
          const a4 = `model_${e5.id.replace(/-/g, "_")}`;
          l3.add(`const ${a4} = ref(null);`), t3.add("ref"), "switch" === e5.type ? u3 += ` v-model:checked="${a4}"` : u3 += ` v-model:value="${a4}"`;
        }
        if ("image" !== e5.type || "preview" in (e5.props || {}) || (u3 += ' :preview="false"'), d3) if ("container-grid" === e5.type) {
          let t4 = "";
          e5.props?.gutter && (t4 += ` :gutter='${JSON.stringify(e5.props.gutter)}'`), e5.props?.align && (t4 += ` align="${e5.props.align}"`), e5.props?.justify && (t4 += ` justify="${e5.props.justify}"`), i4 += `${o3}<ARow${t4}${m2}>
`, e5.children && e5.children.forEach((t5) => {
            if ("container-col" === t5.type) {
              let l4 = "";
              if (t5.props) for (const [e6, a4] of Object.entries(t5.props)) ["span", "offset", "push", "pull", "order", "flex", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e6) && (l4 += "string" == typeof a4 ? ` ${e6}="${a4}"` : ` :${e6}="${a4}"`);
              if (!l4.includes("span=")) {
                const t6 = e5.props?.cols || 3;
                l4 += ` :span="${Math.floor(24 / t6)}"`;
              }
              i4 += `${o3}  <ACol${l4}>
`, t5.children && t5.children.forEach((e6) => {
                i4 += s2(e6, r3 + 2, n3);
              }), i4 += `${o3}  </ACol>
`;
            } else i4 += s2(t5, r3 + 1, n3);
          }), i4 += `${o3}</ARow>
`;
        } else if ("container-row-col" === e5.type) {
          const t4 = (e6) => ({ start: "flex-start", end: "flex-end", center: "center", baseline: "baseline", stretch: "stretch" })[e6 || "stretch"] || "stretch", l4 = { display: "flex", flexDirection: "column" === e5.props?.direction ? "column" : "row", gap: `${"column" === e5.props?.direction ? e5.props?.rowGap ?? 8 : e5.props?.colGap ?? 8}px`, minHeight: `${e5.props?.minHeight ?? 40}px`, justifyContent: (y2 = e5.props?.justifyContent, { start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around", evenly: "space-evenly" }[y2 || "start"] || "flex-start"), alignItems: t4(e5.props?.alignItems) }, a4 = g3(e5.id, { ...l4, ...x2 });
          i4 += `${o3}<div class="${a4}">
`, e5.children && e5.children.forEach((e6) => {
            const t5 = { position: "relative", display: "flex", flexDirection: "column", alignItems: "stretch", ..."fixed" === e6.props?.widthType ? { width: `${e6.props?.width || 200}px`, flexShrink: 0, flexGrow: 0 } : { flex: 1 } }, l5 = g3(e6.id, t5);
            i4 += `${o3}  <div class="${l5}">
`, e6.children && e6.children.forEach((e7) => {
              i4 += s2(e7, r3 + 2, n3);
            }), i4 += `${o3}  </div>
`;
          }), i4 += `${o3}</div>
`;
        } else if ("container-flex" === e5.type) {
          const t4 = (e6) => ({ start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around", evenly: "space-evenly" })[e6 || "start"] || "flex-start", l4 = (e6) => ({ start: "flex-start", end: "flex-end", center: "center", baseline: "baseline", stretch: "stretch" })[e6 || "stretch"] || "stretch", a4 = { display: "flex", flexDirection: e5.props?.flexDirection || "row", flexWrap: e5.props?.flexWrap || "nowrap", justifyContent: t4(e5.props?.justifyContent), alignItems: l4(e5.props?.alignItems), gap: `${e5.props?.rowGap ?? 8}px ${e5.props?.colGap ?? 8}px`, minHeight: `${e5.props?.minHeight || 40}px`, width: "100%" }, p5 = g3(e5.id, { ...a4, ...x2 });
          i4 += `${o3}<div class="${p5}">
`, e5.children && e5.children.forEach((e6) => {
            const t5 = { flexGrow: e6.props?.flexGrow ?? 0, flexShrink: e6.props?.flexShrink ?? 1, flexBasis: e6.props?.flexBasis || "auto", order: e6.props?.order ?? 0, alignSelf: e6.props?.alignSelf || "auto", position: "relative", minWidth: 0, ..."fixed" === e6.props?.widthType ? { width: `${e6.props?.width || 200}px` } : {} }, l5 = g3(e6.id, t5);
            i4 += `${o3}  <div class="${l5}">
`, i4 += s2(e6, r3 + 2, n3), i4 += `${o3}  </div>
`;
          }), i4 += `${o3}</div>
`;
        } else if ("container-full-width" === e5.type) {
          const t4 = { width: "100%", display: "flex", justifyContent: "center" }, l4 = { width: e5.props?.contentWidth || "100%" }, a4 = g3(`${e5.id}-outer`, { ...t4, ...x2 }), p5 = g3(`${e5.id}-inner`, l4);
          i4 += `${o3}<div class="${a4}">
`, i4 += `${o3}  <div class="${p5}">
`, e5.children && e5.children.forEach((e6) => {
            i4 += s2(e6, r3 + 2, n3);
          }), i4 += `${o3}  </div>
`, i4 += `${o3}</div>
`;
        } else if ("container-box" === e5.type) {
          const t4 = { display: "flex", flexWrap: "wrap", alignItems: "flex-start", alignContent: "flex-start", width: "100%", minHeight: "24px", gap: `${e5.props?.gap || 8}px` }, l4 = g3(e5.id, { ...t4, ...x2 });
          i4 += `${o3}<div class="${l4}">
`, e5.children && e5.children.forEach((e6) => {
            const t5 = g3(`${e6.id}-wrapper`, { position: "relative", width: "auto" });
            i4 += `${o3}  <div class="${t5}">
`, i4 += s2(e6, r3 + 2, n3), i4 += `${o3}  </div>
`;
          }), i4 += `${o3}</div>
`;
        } else i4 += `${o3}<div${m2}>
`, e5.children && e5.children.forEach((e6) => {
          i4 += s2(e6, r3 + 1, n3);
        }), i4 += `${o3}</div>
`;
        else {
          const a4 = ["input", "number-input", "select", "radio", "checkbox", "switch", "slider", "rate", "date-picker", "time-picker", "cascader", "tree-select", "auto-complete", "mentions"].includes(e5.type);
          if (n3 && a4) return t3.add("FormItem"), i4 += `${o3}<AFormItem label="${e5.label || ""}">
`, i4 += s2(e5, r3 + 1, false), i4 += `${o3}</AFormItem>
`, i4;
          if ("tabs" === e5.type) t3.add("TabPane"), i4 += `${o3}<ATabs${u3}${m2}>
`, (e5.props?.items || e5.options || []).forEach((t4, l4) => {
            const a5 = t4.key || l4, s3 = t4.tab || t4, r4 = g3(`${e5.id}-tab-${l4}`, { padding: "16px", textAlign: "center", color: "#9ca3af", fontStyle: "italic", fontSize: "12px" });
            i4 += `${o3}  <ATabPane key="${a5}" tab="${s3}">
`, i4 += `${o3}    <div class="${r4}">标签页内容 ${l4 + 1}</div>
`, i4 += `${o3}  </ATabPane>
`;
          }), i4 += `${o3}</ATabs>
`;
          else if ("collapse" === e5.type) t3.add("CollapsePanel"), i4 += `${o3}<ACollapse${u3}${m2}>
`, (e5.props?.items || []).forEach((e6, t4) => {
            const l4 = e6.key || t4, a5 = e6.header || e6;
            i4 += `${o3}  <ACollapsePanel key="${l4}" header="${a5}">
`, i4 += `${o3}    <p>${e6.content || "面板内容"}</p>
`, i4 += `${o3}  </ACollapsePanel>
`;
          }), i4 += `${o3}</ACollapse>
`;
          else if ("carousel" === e5.type) {
            const t4 = g3(`${e5.id}-item`, { height: "128px", backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }), l4 = g3(`${e5.id}-text`, { color: "#9ca3af", margin: "0" });
            i4 += `${o3}<ACarousel${u3}${m2}>
`;
            for (let e6 = 1; e6 <= 4; e6++) i4 += `${o3}  <div class="${t4}">
`, i4 += `${o3}    <h3 class="${l4}">幻灯片 ${e6}</h3>
`, i4 += `${o3}  </div>
`;
            i4 += `${o3}</ACarousel>
`;
          } else if ("table" === e5.type) {
            const t4 = (e5.props?.columns || []).map((e6) => ({ title: e6, dataIndex: e6, key: e6 })), a5 = e5.props?.showPagination ? 10 : 3, s3 = [];
            for (let t5 = 0; t5 < a5; t5++) {
              const l4 = { key: t5 };
              (e5.props?.columns || []).forEach((e6) => {
                l4[e6] = `数据 ${t5 + 1}`;
              }), s3.push(l4);
            }
            const r4 = `table_${e5.id.replace(/-/g, "_")}`;
            l3.add(`const ${r4}Columns = ${JSON.stringify(t4, null, 2)};`), l3.add(`const ${r4}Data = ${JSON.stringify(s3, null, 2)};`);
            let n4 = u3;
            e5.props?.showPagination ? n4 += ` :pagination="{ pageSize: ${e5.props?.pageSize || 5} }"` : n4 += ' :pagination="false"', e5.props?.stripe && (n4 += ` :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"`), i4 += `${o3}<ATable :columns="${r4}Columns" :data-source="${r4}Data"${n4}${m2}>
`, e5.props?.title && (i4 += `${o3}  <template #title>${e5.props.title}</template>
`), e5.props?.footer && (i4 += `${o3}  <template #footer>${e5.props.footer}</template>
`), i4 += `${o3}</ATable>
`;
          } else if ("breadcrumb" === e5.type) t3.add("BreadcrumbItem"), i4 += `${o3}<ABreadcrumb${u3}${m2}>
`, (e5.props?.items || []).forEach((e6, t4) => {
            i4 += `${o3}  <ABreadcrumbItem key="${t4}">${e6}</ABreadcrumbItem>
`;
          }), i4 += `${o3}</ABreadcrumb>
`;
          else if ("steps" === e5.type) t3.add("Step"), i4 += `${o3}<ASteps${u3}${m2}>
`, (e5.props?.items || []).forEach((e6, t4) => {
            i4 += `${o3}  <AStep key="${t4}" title="${e6}" />
`;
          }), i4 += `${o3}</ASteps>
`;
          else if ("menu" === e5.type) t3.add("MenuItem"), i4 += `${o3}<AMenu${u3}${m2}>
`, (e5.props?.items || []).forEach((e6, t4) => {
            i4 += `${o3}  <AMenuItem key="${t4}">${e6}</AMenuItem>
`;
          }), i4 += `${o3}</AMenu>
`;
          else if ("timeline" === e5.type) t3.add("TimelineItem"), i4 += `${o3}<ATimeline${u3}${m2}>
`, (e5.props?.items || []).forEach((e6, t4) => {
            i4 += `${o3}  <ATimelineItem key="${t4}">${e6}</ATimelineItem>
`;
          }), i4 += `${o3}</ATimeline>
`;
          else if ("upload" === e5.type) if (t3.add("Button"), "picture-card" === e5.props?.listType) {
            t3.add("PlusOutlined");
            const l4 = g3(`${e5.id}-card`, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }), a5 = g3(`${e5.id}-text`, { marginTop: "8px" });
            i4 += `${o3}<AUpload${u3}${m2}>
`, i4 += `${o3}  <div class="${l4}">
`, i4 += `${o3}    <PlusOutlined />
`, i4 += `${o3}    <div class="${a5}">上传</div>
`, i4 += `${o3}  </div>
`, i4 += `${o3}</AUpload>
`;
          } else t3.add("UploadOutlined"), i4 += `${o3}<AUpload${u3}${m2}>
`, i4 += `${o3}  <AButton>
`, i4 += `${o3}    <template #icon><UploadOutlined /></template>
`, i4 += `${o3}    点击上传
`, i4 += `${o3}  </AButton>
`, i4 += `${o3}</AUpload>
`;
          else if ("descriptions" === e5.type) t3.add("DescriptionsItem"), i4 += `${o3}<ADescriptions${u3}${m2}>
`, (e5.props?.items || [{ label: "姓名", value: "张三" }]).forEach((e6, t4) => {
            i4 += `${o3}  <ADescriptionsItem key="${t4}" label="${e6.label}">${e6.value}</ADescriptionsItem>
`;
          }), i4 += `${o3}</ADescriptions>
`;
          else if ("list" === e5.type) t3.add("ListItem"), i4 += `${o3}<AList${u3}${m2}>
`, i4 += `${o3}  <template #renderItem="{ item }">
`, i4 += `${o3}    <AListItem>{{ item }}</AListItem>
`, i4 += `${o3}  </template>
`, i4 += `${o3}</AList>
`;
          else if ("comment" === e5.type) i4 += `${o3}<AComment${u3}${m2}>
`, i4 += `${o3}  <template #content>
`, i4 += `${o3}    <p>${e5.props?.content || "这是一条评论内容。"}</p>
`, i4 += `${o3}  </template>
`, i4 += `${o3}</AComment>
`;
          else if ("popover" === e5.type) t3.add("Button"), i4 += `${o3}<APopover${u3}${m2}>
`, i4 += `${o3}  <template #content>
`, i4 += `${o3}    <p>${e5.props?.content || "气泡内容"}</p>
`, i4 += `${o3}  </template>
`, i4 += `${o3}  <AButton type="primary">悬停查看</AButton>
`, i4 += `${o3}</APopover>
`;
          else if ("form" === e5.type) {
            if (i4 += `${o3}<AForm${u3}${m2}>
`, e5.children && e5.children.length > 0) e5.children.forEach((e6) => {
              i4 += s2(e6, r3 + 1, true);
            });
            else {
              const t4 = g3(`${e5.id}-empty`, { padding: "16px", border: "1px dashed #e5e7eb", borderRadius: "4px", textAlign: "center", color: "#9ca3af", fontStyle: "italic", fontSize: "12px" });
              i4 += `${o3}  <div class="${t4}">
`, i4 += `${o3}    表单容器 (请拖入表单项)
`, i4 += `${o3}  </div>
`;
            }
            i4 += `${o3}</AForm>
`;
          } else if ("button" === e5.type) i4 += `${o3}<AButton${u3}${m2}>${e5.props?.text || "按钮"}</AButton>
`;
          else if ("dropdown" === e5.type) t3.add("Menu"), t3.add("MenuItem"), t3.add("DownOutlined"), i4 += `${o3}<ADropdown${u3}${m2}>
`, i4 += `${o3}  <a class="ant-dropdown-link" @click.prevent>
`, i4 += `${o3}    ${e5.props?.text || "下拉菜单"} <DownOutlined />
`, i4 += `${o3}  </a>
`, i4 += `${o3}  <template #overlay>
`, i4 += `${o3}    <AMenu>
`, (e5.props?.items || ["菜单项 1", "菜单项 2", "菜单项 3"]).forEach((e6, t4) => {
            i4 += `${o3}      <AMenuItem key="${t4}">${e6}</AMenuItem>
`;
          }), i4 += `${o3}    </AMenu>
`, i4 += `${o3}  </template>
`, i4 += `${o3}</ADropdown>
`;
          else if ("card" === e5.type) i4 += `${o3}<ACard${u3}${m2}>
`, e5.children && e5.children.forEach((e6) => {
            i4 += s2(e6, r3 + 1, n3);
          }), i4 += `${o3}</ACard>
`;
          else if ("badge" === e5.type) {
            if (i4 += `${o3}<ABadge${u3}${m2}>
`, e5.children) e5.children.forEach((e6) => {
              i4 += s2(e6, r3 + 1, n3);
            });
            else {
              const t4 = g3(`${e5.id}-empty`, { width: "32px", height: "32px", background: "#eee", borderRadius: "4px" });
              i4 += `${o3}  <div class="${t4}" />
`;
            }
            i4 += `${o3}</ABadge>
`;
          } else if ("tag" === e5.type) i4 += `${o3}<ATag${u3}${m2}>${e5.props?.text || "标签"}</ATag>
`;
          else if ("divider" === e5.type) {
            if (i4 += `${o3}<ADivider${u3}${m2}>
`, e5.props?.text) {
              const t4 = g3(`${e5.id}-text`, { fontSize: "12px", color: "#9ca3af" });
              i4 += `${o3}  <span class="${t4}">${e5.props.text}</span>
`;
            }
            i4 += `${o3}</ADivider>
`;
          } else i4 += `${o3}<${p4}${u3}${m2} />
`;
        }
        var y2;
        return i4;
      };
      let r2 = "";
      e4.forEach((e5) => {
        r2 += s2(e5, 1, false);
      });
      const n2 = Array.from(t3), o2 = n2.filter((e5) => "ref" === e5 || "reactive" === e5), i3 = n2.filter((e5) => e5.endsWith("Outlined") || e5.endsWith("Filled") || e5.endsWith("TwoTone")), p3 = n2.filter((e5) => !i3.includes(e5) && "ref" !== e5 && "reactive" !== e5);
      let d2 = '<script setup lang="ts">\n';
      o2.length > 0 && (d2 += `import { ${o2.join(", ")} } from 'vue';
`), p3.length > 0 && (d2 += `import { ${p3.map((e5) => `${e5} as A${e5}`).join(", ")} } from 'ant-design-vue';
`), i3.length > 0 && (d2 += `import { ${i3.join(", ")} } from '@ant-design/icons-vue';
`), d2 += "\n", l3.size > 0 && (d2 += Array.from(l3).join("\n") + "\n"), d2 += "<\/script>\n";
      const c2 = `<style scoped>
${a3.join("\n\n")}

.table-striped {
  background-color: #fafafa;
}
</style>
`;
      return `<template>
  <div class="page-container">
${r2}  </div>
</template>

${d2}
${c2}`;
    })(p2.elements), t2 = new Blob([e3], { type: "text/plain" }), l2 = URL.createObjectURL(t2), a2 = document.createElement("a");
    a2.href = l2, a2.download = `FormDesign-${(/* @__PURE__ */ new Date()).getTime()}.vue`, a2.click(), URL.revokeObjectURL(l2);
  }, D2 = () => {
    h2.value?.click();
  }, P2 = (e3) => {
    const t2 = e3.target.files?.[0];
    if (t2) {
      const e4 = new FileReader();
      e4.onload = (e5) => {
        const t3 = e5.target?.result;
        p2.loadConfig(t3);
      }, e4.readAsText(t2);
    }
  }, S2 = () => {
    v2.value = true;
  }, T2 = () => {
    p2.clearForm(), v2.value = false;
  }, E2 = () => {
    navigator.clipboard.writeText(z2.value), b2.value = true, setTimeout(() => {
      b2.value = false;
    }, 2e3);
  };
  return (e3, t2) => (l(), c(n(Se), { theme: { algorithm: n(p2).isDarkMode ? n(Te).darkAlgorithm : n(Te).defaultAlgorithm, token: { colorPrimary: n(p2).primaryColor, borderRadius: 12, colorBorder: n(p2).isDarkMode ? "#262626" : "#f5f5f5", colorBorderSecondary: n(p2).isDarkMode ? "#1a1a1a" : "#fafafa" } } }, { default: o(() => [s("div", { class: d(["h-screen flex flex-col overflow-hidden font-sans transition-colors duration-300", n(p2).isDarkMode ? "dark bg-black text-zinc-200" : "bg-[#F8F9FB] text-[#2C3E50]"]), style: y(u2.value) }, [r(rm, { mode: i2.value, "onUpdate:mode": t2[0] || (t2[0] = (e4) => i2.value = e4), onToggleHistory: t2[1] || (t2[1] = (e4) => g2.value = !g2.value), onClear: S2, onImport: D2, onSave: I2, onExportVue: $2 }, null, 8, ["mode"]), s("main", xm, ["preview" !== i2.value ? (l(), a("div", { key: 0, class: d(["h-full transition-all duration-300 ease-in-out z-30 flex", n(p2).showSidebar && n(p2).isSidebarPinned ? "w-80" : "w-12"]) }, [r(aa, { class: "w-full h-full" })], 2)) : f("", true), s("div", gm, ["build" === i2.value ? (l(), c(As, { key: 0 })) : "preview" === i2.value ? (l(), a("div", { key: 1, ref_key: "previewContainerRef", ref: k2, class: d(["flex-1 px-10 py-10 overflow-auto transition-colors duration-300", n(p2).isDarkMode ? "bg-[#0a0a0a]" : "bg-[#F1F3F6]"]) }, [s("div", { class: d(["mx-auto ai-gradient-border shadow-xl transition-all duration-500 shrink-0", n(p2).isDarkMode ? "shadow-primary-dark/10" : "shadow-gray-200/50"]), style: y({ width: n(p2).canvasWidth + "px", zoom: n(p2).canvasZoom / 100 }) }, [s("div", { class: d(["w-full h-full min-h-[800px] rounded-[calc(1rem-1.5px)] overflow-hidden", n(p2).isDarkMode ? "bg-[#141414]" : "bg-white"]) }, [r(Ru)], 2)], 6)], 2)) : "json" === i2.value ? (l(), a("div", ym, [s("div", vm, [s("div", { class: d(["w-full h-full flex flex-col rounded-[calc(1rem-1.5px)] overflow-hidden", n(p2).isDarkMode ? "bg-[#141414]" : "bg-white"]) }, [s("div", fm, [s("div", bm, [r(n(Ot), { size: 18, class: "text-primary" }), t2[4] || (t2[4] = s("span", { class: "font-bold text-sm" }, "配置文件 (JSON)", -1))]), s("button", { onClick: E2, class: "flex items-center gap-2 px-4 py-1.5 bg-primary-10 dark:bg-primary-20 text-primary dark:text-primary-light text-xs font-bold rounded-lg hover:bg-primary-20 dark:hover:bg-primary-30 transition-colors" }, [r(n(al), { size: 14 }), t2[5] || (t2[5] = w(" 复制代码 ", -1))])]), s("div", hm, [s("pre", km, m(z2.value), 1)])], 2)])])) : f("", true)]), "preview" !== i2.value && n(p2).showPropertiesPanel ? (l(), a("div", { key: 1, class: d(["h-full transition-all duration-300 ease-in-out z-30 overflow-hidden group flex justify-end bg-white dark:bg-zinc-900", n(p2).isPropertiesPanelPinned ? "relative w-80 border-l border-gray-100/30 dark:border-zinc-900/30" : "absolute right-0 w-12 hover:w-80 shadow-xl border-l border-gray-100/30 dark:border-zinc-900/30"]) }, [r(Eu, { class: "w-80 h-full shrink-0" })], 2)) : f("", true), g2.value ? (l(), c(mm, { key: 2, onClose: t2[2] || (t2[2] = (e4) => g2.value = false) })) : f("", true)]), s("input", { type: "file", ref_key: "fileInput", ref: h2, class: "hidden", accept: ".json", onChange: P2 }, null, 544), v2.value ? (l(), a("div", wm, [s("div", _m, [s("div", zm, [r(n(Bt), { size: 24 }), t2[6] || (t2[6] = s("h3", { class: "text-lg font-bold" }, "确认清空？", -1))]), t2[7] || (t2[7] = s("p", { class: "text-gray-600 dark:text-slate-400 mb-6" }, "确定要清空当前画布上的所有表单项吗？此操作不可撤销。", -1)), s("div", Cm, [s("button", { onClick: t2[3] || (t2[3] = (e4) => v2.value = false), class: "flex-1 px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-xl font-bold transition-colors" }, "取消"), s("button", { onClick: T2, class: "flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-colors" }, "确认清空")])])])) : f("", true), b2.value ? (l(), a("div", Im, [s("div", $m, [r(n(Fe), { size: 14, class: "text-white" })]), t2[8] || (t2[8] = s("span", { class: "text-sm font-bold" }, "配置已成功复制到剪贴板！", -1))])) : f("", true)], 6)]), _: 1 }, 8, ["theme"]));
} }), [["__scopeId", "data-v-c7f7a3a9"]]);
export {
  Dm as FormDesigner
};
