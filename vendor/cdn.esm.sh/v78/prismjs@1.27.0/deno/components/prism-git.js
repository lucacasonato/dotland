/* esm.sh - esbuild bundle(prismjs@1.27.0/components/prism-git) deno production */
var n=Object.create;var d=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty;var g=(t,m)=>()=>(m||t((m={exports:{}}).exports,m),m.exports);var p=(t,m,e,a)=>{if(m&&typeof m=="object"||typeof m=="function")for(let r of c(m))!l.call(t,r)&&r!==e&&d(t,r,{get:()=>m[r],enumerable:!(a=$(m,r))||a.enumerable});return t};var i=(t,m,e)=>(e=t!=null?n(f(t)):{},p(m||!t||!t.__esModule?d(e,"default",{value:t,enumerable:!0}):e,t));var o=g(()=>{Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m}});var s=i(o()),u=i(o()),{default:w,...h}=u,j=s.default??w??h;export{j as default};
