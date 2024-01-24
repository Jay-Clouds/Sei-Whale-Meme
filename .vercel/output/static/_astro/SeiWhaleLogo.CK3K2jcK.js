import{r as e}from"./index.UCAuQZPX.js";import{u as k,f as L,a as W,P as $,L as j}from"./motion.j5wMBtoh.js";import{j as O}from"./jsx-runtime.G4i-1Giy.js";function I(){const n=e.useRef(!1);return k(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function U(){const n=I(),[s,t]=e.useState(0),r=e.useCallback(()=>{n.current&&t(s+1)},[s]);return[e.useCallback(()=>L.postRender(r),[r]),s]}class b extends e.Component{getSnapshotBeforeUpdate(s){const t=this.props.childRef.current;if(t&&s.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:n,isPresent:s}){const t=e.useId(),r=e.useRef(null),h=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:d,height:l,top:a,left:m}=h.current;if(s||!r.current||!d||!l)return;r.current.dataset.motionPopId=t;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[s]),e.createElement(b,{isPresent:s,childRef:r,sizeRef:h},e.cloneElement(n,{ref:r}))}const P=({children:n,initial:s,isPresent:t,onExitComplete:r,custom:h,presenceAffectsLayout:d,mode:l})=>{const a=W(T),m=e.useId(),f=e.useMemo(()=>({id:m,initial:s,isPresent:t,custom:h,onExitComplete:o=>{a.set(o,!0);for(const c of a.values())if(!c)return;r&&r()},register:o=>(a.set(o,!1),()=>a.delete(o))}),d?void 0:[t]);return e.useMemo(()=>{a.forEach((o,c)=>a.set(c,!1))},[t]),e.useEffect(()=>{!t&&!a.size&&r&&r()},[t]),l==="popLayout"&&(n=e.createElement(B,{isPresent:t},n)),e.createElement($.Provider,{value:f},n)};function T(){return new Map}function _(n){return e.useEffect(()=>()=>n(),[])}const p=n=>n.key||"";function A(n,s){n.forEach(t=>{const r=p(t);s.set(r,t)})}function D(n){const s=[];return e.Children.forEach(n,t=>{e.isValidElement(t)&&s.push(t)}),s}const Z=({children:n,custom:s,initial:t=!0,onExitComplete:r,exitBeforeEnter:h,presenceAffectsLayout:d=!0,mode:l="sync"})=>{const a=e.useContext(j).forceRender||U()[0],m=I(),f=D(n);let o=f;const c=e.useRef(new Map).current,g=e.useRef(o),E=e.useRef(new Map).current,x=e.useRef(!0);if(k(()=>{x.current=!1,A(f,E),g.current=o}),_(()=>{x.current=!0,E.clear(),c.clear()}),x.current)return e.createElement(e.Fragment,null,o.map(i=>e.createElement(P,{key:p(i),isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:d,mode:l},i)));o=[...o];const y=g.current.map(p),M=f.map(p),S=y.length;for(let i=0;i<S;i++){const u=y[i];M.indexOf(u)===-1&&!c.has(u)&&c.set(u,void 0)}return l==="wait"&&c.size&&(o=[]),c.forEach((i,u)=>{if(M.indexOf(u)!==-1)return;const w=E.get(u);if(!w)return;const F=y.indexOf(u);let R=i;if(!R){const K=()=>{c.delete(u);const v=Array.from(E.keys()).filter(C=>!M.includes(C));if(v.forEach(C=>E.delete(C)),g.current=f.filter(C=>{const z=p(C);return z===u||v.includes(z)}),!c.size){if(m.current===!1)return;a(),r&&r()}};R=e.createElement(P,{key:p(w),isPresent:!1,onExitComplete:K,custom:s,presenceAffectsLayout:d,mode:l},w),c.set(u,R)}o.splice(F,0,R)}),o=o.map(i=>{const u=i.key;return c.has(u)?i:e.createElement(P,{key:p(i),isPresent:!0,presenceAffectsLayout:d,mode:l},i)}),e.createElement(e.Fragment,null,c.size?o:o.map(i=>e.cloneElement(i)))},G="/_astro/SeiWhale.2JjrgyvZ.png",q=()=>O.jsx("img",{src:G,alt:"Sei Whale",width:"50",height:"50"});export{Z as A,q as S,G as a};
