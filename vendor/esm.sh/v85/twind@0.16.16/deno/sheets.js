/* esm.sh - esbuild bundle(twind@0.16.16/sheets) deno production */
var l=Object.defineProperty;var o=(t,e)=>l(t,"name",{value:e,configurable:!0});var c="__twind",s=o(t=>{let e=self[c];return e||(e=document.head.appendChild(document.createElement("style")),e.id=c,t&&(e.nonce=t),e.appendChild(document.createTextNode(""))),e},"getStyleElement"),y=o(({nonce:t,target:e=s(t)}={})=>{let n=e.childNodes.length;return{target:e,insert:(r,i)=>e.insertBefore(document.createTextNode(r),e.childNodes[n+i])}},"domSheet"),a=o(()=>{let t=[],e=[],n=o((r,i)=>e[i]=r(e[i]),"invoke");return{init:r=>n(r,t.push(r)-1),reset:(r=[])=>([r,e]=[e,r],t.forEach(n),r)}},"createStorage"),p=o(()=>{let t=a(),e;return t.init((n=[])=>e=n),Object.defineProperties({get target(){return[...e]},insert:(n,r)=>e.splice(r,0,n)},Object.getOwnPropertyDescriptors(t))},"virtualSheet"),g=o(t=>({id:c,textContent:(Array.isArray(t)?t:t.target).join("")}),"getStyleTagProperties"),v=o((t,e)=>{let{id:n,textContent:r}=g(t);return e={...e,id:n},`<style${Object.keys(e).reduce((i,d)=>`${i} ${d}=${JSON.stringify(e[d])}`,"")}>${r}</style>`},"getStyleTag");export{y as domSheet,v as getStyleTag,g as getStyleTagProperties,p as virtualSheet};
