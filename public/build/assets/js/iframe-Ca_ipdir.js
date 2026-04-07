var N=Object.defineProperty,$=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var d=(e,r,t)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&d(e,t,r[t]);if(m)for(var t of m(r))p.call(r,t)&&d(e,t,r[t]);return e},E=(e,r)=>$(e,k(r));var w=(e,r)=>{var t={};for(var n in e)h.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&m)for(var n of m(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};import{aT as L,r as c,j as M,b as P}from"./react-vendor-xYZnmIII.js";import{c as S}from"./ui-components-CQM92IK3.js";import"./inertia-vendor-cBbDTmhJ.js";import"./ui-vendor-Ds9iwIxa.js";import"./interactive-vendor-B1OgcAgP.js";const B=D=>{var i=D,{children:e,className:r,previewTheme:t}=i,n=w(i,["children","className","previewTheme"]);const f=L(),a=c.useRef(null),[u,x]=c.useState(null),[b,g]=c.useState(!1),l=c.useRef({x:0,y:0}),R=c.useMemo(()=>f.props.project.theme_config,[f.props.project.theme_config]);return c.useEffect(()=>{if(a.current){const o=a.current.contentDocument;if(o){o.documentElement&&(l.current={x:o.documentElement.scrollLeft||o.body.scrollLeft,y:o.documentElement.scrollTop||o.body.scrollTop});const T=t==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t,j=Array.from(window.document.styleSheets).map(s=>{try{if(s.href)return`<link rel="stylesheet" href="${s.href}" />`;if(s.ownerNode)return`<style>${s.ownerNode.innerHTML}</style>`}catch(I){if(s.href)return`<link rel="stylesheet" href="${s.href}" />`}return""}).filter(Boolean).join(`
`);o.open(),o.write(`
                  <!DOCTYPE html>
                  <html lang="en" class="${T}">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      ${j}
                    </head>
                    <body id="previewIframe" class="min-h-screen">
                    </body>
                  </html>
                `),o.close(),setTimeout(()=>{const s=o.body;s&&(x(s),g(!0),requestAnimationFrame(()=>{o.documentElement&&l.current&&(o.documentElement.scrollTop=l.current.y,o.documentElement.scrollLeft=l.current.x)}))},100)}}},[t,R]),M.jsx("iframe",E(y({ref:a,className:S("h-full max-h-screen w-full",r)},n),{children:u&&b&&P.createPortal(e,u)}))};export{B as default};
