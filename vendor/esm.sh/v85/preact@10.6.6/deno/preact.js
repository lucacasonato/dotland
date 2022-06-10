/* esm.sh - esbuild bundle(preact@10.6.6) deno production */
var Y=Object.defineProperty;var u=(t,e)=>Y(t,"name",{value:e,configurable:!0});var w,h,R,Z,P,B,F,$,D={},V=[],ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(t,e){for(var n in e)t[n]=e[n];return t}u(b,"a");function j(t){var e=t.parentNode;e&&e.removeChild(t)}u(j,"h");function te(t,e,n){var r,l,_,s={};for(_ in e)_=="key"?r=e[_]:_=="ref"?l=e[_]:s[_]=e[_];if(arguments.length>2&&(s.children=arguments.length>3?w.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)s[_]===void 0&&(s[_]=t.defaultProps[_]);return S(t,s,r,l,null)}u(te,"v");function S(t,e,n,r,l){var _={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++R};return l==null&&h.vnode!=null&&h.vnode(_),_}u(S,"y");function ce(){return{current:null}}u(ce,"p");function L(t){return t.children}u(L,"d");function U(t,e){this.props=t,this.context=e}u(U,"_");function x(t,e){if(e==null)return t.__?x(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?x(t):null}u(x,"k");function z(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return z(t)}}u(z,"b");function M(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!T.__r++||F!==h.debounceRendering)&&((F=h.debounceRendering)||B)(T)}u(M,"m");function T(){for(var t;T.__r=P.length;)t=P.sort(function(e,n){return e.__v.__b-n.__v.__b}),P=[],t.some(function(e){var n,r,l,_,s,p;e.__d&&(s=(_=(n=e).__v).__e,(p=n.__P)&&(r=[],(l=b({},_)).__v=_.__v+1,W(p,_,l,n.__n,p.ownerSVGElement!==void 0,_.__h!=null?[s]:null,r,s??x(_),_.__h),K(r,_),_.__e!=s&&z(_)))})}u(T,"g");function G(t,e,n,r,l,_,s,p,a,d){var o,v,c,i,f,C,y,m=r&&r.__k||V,g=m.length;for(n.__k=[],o=0;o<e.length;o++)if((i=n.__k[o]=(i=e[o])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?S(null,i,null,null,i):Array.isArray(i)?S(L,{children:i},null,null,null):i.__b>0?S(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(c=m[o])===null||c&&i.key==c.key&&i.type===c.type)m[o]=void 0;else for(v=0;v<g;v++){if((c=m[v])&&i.key==c.key&&i.type===c.type){m[v]=void 0;break}c=null}W(t,i,c=c||D,l,_,s,p,a,d),f=i.__e,(v=i.ref)&&c.ref!=v&&(y||(y=[]),c.ref&&y.push(c.ref,null,i),y.push(v,i.__c||f,i)),f!=null?(C==null&&(C=f),typeof i.type=="function"&&i.__k===c.__k?i.__d=a=q(i,a,t):a=J(t,i,c,m,f,a),typeof n.type=="function"&&(n.__d=a)):a&&c.__e==a&&a.parentNode!=t&&(a=x(c))}for(n.__e=C,o=g;o--;)m[o]!=null&&(typeof n.type=="function"&&m[o].__e!=null&&m[o].__e==n.__d&&(n.__d=x(r,o+1)),X(m[o],m[o]));if(y)for(o=0;o<y.length;o++)Q(y[o],y[++o],y[++o])}u(G,"w");function q(t,e,n){for(var r,l=t.__k,_=0;l&&_<l.length;_++)(r=l[_])&&(r.__=t,e=typeof r.type=="function"?q(r,e,n):J(n,r,r,l,r.__e,e));return e}u(q,"x");function ne(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){ne(n,e)}):e.push(t)),e}u(ne,"A");function J(t,e,n,r,l,_){var s,p,a;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(n==null||l!=_||l.parentNode==null)e:if(_==null||_.parentNode!==t)t.appendChild(l),s=null;else{for(p=_,a=0;(p=p.nextSibling)&&a<r.length;a+=2)if(p==l)break e;t.insertBefore(l,_),s=_}return s!==void 0?s:l.nextSibling}u(J,"P");function _e(t,e,n,r,l){var _;for(_ in n)_==="children"||_==="key"||_ in e||N(t,_,null,n[_],r);for(_ in e)l&&typeof e[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===e[_]||N(t,_,e[_],n[_],r)}u(_e,"C");function H(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ee.test(e)?n:n+"px"}u(H,"$");function N(t,e,n,r,l){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||H(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||H(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r||t.addEventListener(e,_?O:I,_):t.removeEventListener(e,_?O:I,_);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}u(N,"H");function I(t){this.l[t.type+!1](h.event?h.event(t):t)}u(I,"I");function O(t){this.l[t.type+!0](h.event?h.event(t):t)}u(O,"T");function W(t,e,n,r,l,_,s,p,a){var d,o,v,c,i,f,C,y,m,g,A,k=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,p=e.__e=n.__e,e.__h=null,_=[p]),(d=h.__b)&&d(e);try{e:if(typeof k=="function"){if(y=e.props,m=(d=k.contextType)&&r[d.__c],g=d?m?m.props.value:d.__:r,n.__c?C=(o=e.__c=n.__c).__=o.__E:("prototype"in k&&k.prototype.render?e.__c=o=new k(y,g):(e.__c=o=new U(y,g),o.constructor=k,o.render=re),m&&m.sub(o),o.props=y,o.state||(o.state={}),o.context=g,o.__n=r,v=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=b({},o.__s)),b(o.__s,k.getDerivedStateFromProps(y,o.__s))),c=o.props,i=o.state,v)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&y!==c&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,g)===!1||e.__v===n.__v){o.props=y,o.state=o.__s,e.__v!==n.__v&&(o.__d=!1),o.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(E){E&&(E.__=e)}),o.__h.length&&s.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(c,i,f)})}o.context=g,o.props=y,o.state=o.__s,(d=h.__r)&&d(e),o.__d=!1,o.__v=e,o.__P=t,d=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=b(b({},r),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(c,i)),A=d!=null&&d.type===L&&d.key==null?d.props.children:d,G(t,Array.isArray(A)?A:[A],e,n,r,l,_,s,p,a),o.base=e.__e,e.__h=null,o.__h.length&&s.push(o),C&&(o.__E=o.__=null),o.__e=!1}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=oe(n.__e,e,n,r,l,_,s,a);(d=h.diffed)&&d(e)}catch(E){e.__v=null,(a||_!=null)&&(e.__e=p,e.__h=!!a,_[_.indexOf(p)]=null),h.__e(E,e,n)}}u(W,"j");function K(t,e){h.__c&&h.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){h.__e(r,n.__v)}})}u(K,"z");function oe(t,e,n,r,l,_,s,p){var a,d,o,v=n.props,c=e.props,i=e.type,f=0;if(i==="svg"&&(l=!0),_!=null){for(;f<_.length;f++)if((a=_[f])&&"setAttribute"in a==!!i&&(i?a.localName===i:a.nodeType===3)){t=a,_[f]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),_=null,p=!1}if(i===null)v===c||p&&t.data===c||(t.data=c);else{if(_=_&&w.call(t.childNodes),d=(v=n.props||D).dangerouslySetInnerHTML,o=c.dangerouslySetInnerHTML,!p){if(_!=null)for(v={},f=0;f<t.attributes.length;f++)v[t.attributes[f].name]=t.attributes[f].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(_e(t,c,v,l,p),o)e.__k=[];else if(f=e.props.children,G(t,Array.isArray(f)?f:[f],e,n,r,l&&i!=="foreignObject",_,s,_?_[0]:n.__k&&x(n,0),p),_!=null)for(f=_.length;f--;)_[f]!=null&&j(_[f]);p||("value"in c&&(f=c.value)!==void 0&&(f!==t.value||i==="progress"&&!f||i==="option"&&f!==v.value)&&N(t,"value",f,v.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==t.checked&&N(t,"checked",f,v.checked,!1))}return t}u(oe,"L");function Q(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){h.__e(r,n)}}u(Q,"M");function X(t,e,n){var r,l;if(h.unmount&&h.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Q(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){h.__e(_,e)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&X(r[l],e,typeof t.type!="function");n||t.__e==null||j(t.__e),t.__e=t.__d=void 0}u(X,"N");function re(t,e,n){return this.constructor(t,n)}u(re,"O");function le(t,e,n){var r,l,_;h.__&&h.__(t,e),l=(r=typeof n=="function")?null:n&&n.__k||e.__k,_=[],W(e,t=(!r&&n||e).__k=te(L,null,[t]),l||D,D,e.ownerSVGElement!==void 0,!r&&n?[n]:l?null:e.firstChild?w.call(e.childNodes):null,_,!r&&n?n:l?l.__e:e.firstChild,r),K(_,t)}u(le,"S");function ie(t,e){le(t,e,ie)}u(ie,"q");function fe(t,e,n){var r,l,_,s=b({},t.props);for(_ in e)_=="key"?r=e[_]:_=="ref"?l=e[_]:s[_]=e[_];return arguments.length>2&&(s.children=arguments.length>3?w.call(arguments,2):n),S(t.type,s,r||t.key,l||t.ref,null)}u(fe,"B");function ue(t,e){var n={__c:e="__cC"+$++,__:t,Consumer:function(r,l){return r.children(l)},Provider:function(r){var l,_;return this.getChildContext||(l=[],(_={})[e]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&l.some(M)},this.sub=function(s){l.push(s);var p=s.componentWillUnmount;s.componentWillUnmount=function(){l.splice(l.indexOf(s),1),p&&p.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}u(ue,"D");w=V.slice,h={__e:function(t,e){for(var n,r,l;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),l=n.__d),l)return n.__E=n}catch(_){t=_}throw t}},R=0,Z=u(function(t){return t!=null&&t.constructor===void 0},"i"),U.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof t=="function"&&(t=t(b({},n),this.props)),t&&b(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),M(this))},U.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),M(this))},U.prototype.render=L,P=[],B=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,T.__r=0,$=0;export{U as Component,L as Fragment,fe as cloneElement,ue as createContext,te as createElement,ce as createRef,te as h,ie as hydrate,Z as isValidElement,h as options,le as render,ne as toChildArray};