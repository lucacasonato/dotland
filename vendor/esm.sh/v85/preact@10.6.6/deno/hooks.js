/* esm.sh - esbuild bundle(preact@10.6.6/hooks) deno production */
var q=Object.defineProperty;var r=(_,n)=>q(_,"name",{value:n,configurable:!0});import{options as e}from"/v85/preact@10.6.6/deno/preact.js";var i,o,l,a=0,g=[],H=e.__b,p=e.__r,d=e.diffed,y=e.__c,E=e.unmount;function f(_,n){e.__h&&e.__h(o,_,a||n),a=0;var t=o.__H||(o.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}r(f,"m");function D(_){return a=1,x(F,_)}r(D,"l");function x(_,n,t){var u=f(i++,2);return u.t=_,u.__c||(u.__=[t?t(n):F(void 0,n),function(c){var s=u.t(u.__[0],c);u.__[0]!==s&&(u.__=[s,u.__[1]],u.__c.setState({}))}],u.__c=o),u.__}r(x,"p");function R(_,n){var t=f(i++,3);!e.__s&&m(t.__H,n)&&(t.__=_,t.__H=n,o.__H.__h.push(t))}r(R,"y");function C(_,n){var t=f(i++,4);!e.__s&&m(t.__H,n)&&(t.__=_,t.__H=n,o.__h.push(t))}r(C,"h");function S(_){return a=5,A(function(){return{current:_}},[])}r(S,"s");function j(_,n,t){a=6,C(function(){typeof _=="function"?_(n()):_&&(_.current=n())},t==null?t:t.concat(_))}r(j,"_");function A(_,n){var t=f(i++,7);return m(t.__H,n)&&(t.__=_(),t.__H=n,t.__h=_),t.__}r(A,"d");function w(_,n){return a=8,A(function(){return _},n)}r(w,"A");function B(_){var n=o.context[_.__c],t=f(i++,9);return t.c=_,n?(t.__==null&&(t.__=!0,n.sub(o)),n.props.value):_.__}r(B,"F");function I(_,n){e.useDebugValue&&e.useDebugValue(n?n(_):_)}r(I,"T");function L(_){var n=f(i++,10),t=D();return n.__=_,o.componentDidCatch||(o.componentDidCatch=function(u){n.__&&n.__(u),t[1](u)}),[t[0],function(){t[1](void 0)}]}r(L,"q");function T(){for(var _;_=g.shift();)if(_.__P)try{_.__H.__h.forEach(h),_.__H.__h.forEach(v),_.__H.__h=[]}catch(n){_.__H.__h=[],e.__e(n,_.__v)}}r(T,"x");e.__b=function(_){o=null,H&&H(_)},e.__r=function(_){p&&p(_),i=0;var n=(o=_.__c).__H;n&&(n.__h.forEach(h),n.__h.forEach(v),n.__h=[])},e.diffed=function(_){d&&d(_);var n=_.__c;n&&n.__H&&n.__H.__h.length&&(g.push(n)!==1&&l===e.requestAnimationFrame||((l=e.requestAnimationFrame)||function(t){var u,c=r(function(){clearTimeout(s),b&&cancelAnimationFrame(u),setTimeout(t)},"u"),s=setTimeout(c,100);b&&(u=requestAnimationFrame(c))})(T)),o=null},e.__c=function(_,n){n.some(function(t){try{t.__h.forEach(h),t.__h=t.__h.filter(function(u){return!u.__||v(u)})}catch(u){n.some(function(c){c.__h&&(c.__h=[])}),n=[],e.__e(u,t.__v)}}),y&&y(_,n)},e.unmount=function(_){E&&E(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(u){try{h(u)}catch(c){n=c}}),n&&e.__e(n,t.__v))};var b=typeof requestAnimationFrame=="function";function h(_){var n=o,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),o=n}r(h,"g");function v(_){var n=o;_.__c=_.__(),o=n}r(v,"j");function m(_,n){return!_||_.length!==n.length||n.some(function(t,u){return t!==_[u]})}r(m,"k");function F(_,n){return typeof n=="function"?n(_):n}r(F,"w");export{w as useCallback,B as useContext,I as useDebugValue,R as useEffect,L as useErrorBoundary,j as useImperativeHandle,C as useLayoutEffect,A as useMemo,x as useReducer,S as useRef,D as useState};