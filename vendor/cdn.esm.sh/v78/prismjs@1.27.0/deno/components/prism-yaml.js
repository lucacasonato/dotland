/* esm.sh - esbuild bundle(prismjs@1.27.0/components/prism-yaml) deno production */
var g=Object.create;var p=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var h=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var v=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of m(e))!k.call(r,n)&&n!==t&&p(r,n,{get:()=>e[n],enumerable:!(a=x(e,n))||a.enumerable});return r};var f=(r,e,t)=>(t=r!=null?g(b(r)):{},v(e||!r||!r.__esModule?p(t,"default",{value:r,enumerable:!0}):t,r));var d=h(()=>{(function(r){var e=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+t.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+t.source+")?)",n=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function u(s,o){o=(o||"").replace(/m/g,"")+"m";var c=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return s});return RegExp(c,o)}r.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+n+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:u(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:u(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:u(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:u(l),lookbehind:!0,greedy:!0},number:{pattern:u(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},r.languages.yml=r.languages.yaml})(Prism)});var i=f(d()),y=f(d()),{default:$,...A}=y,P=i.default??$??A;export{P as default};