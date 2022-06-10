/* esm.sh - esbuild bundle(domutils@2.8.0) deno production */
import * as __domelementtype$ from "/v78/domelementtype@2.3.0/deno/domelementtype.js";import * as __dom_serializer$$ from "/v78/dom-serializer@1.4.1/deno/dom-serializer.js";const __dom_serializer$=Object.assign({__esModule:true},__dom_serializer$$);import * as __domhandler$$ from "/v78/domhandler@4.3.1/deno/domhandler.js";const __domhandler$=Object.assign({__esModule:true},__domhandler$$);var le=Object.create;var R=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var ve=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var y=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var pe=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of oe(t))!de.call(e,i)&&i!==r&&R(e,i,{get:()=>t[i],enumerable:!(n=se(t,i))||n.enumerable});return e};var G=(e,t,r)=>(r=e!=null?le(ve(e)):{},pe(t||!e||!e.__esModule?R(r,"default",{value:e,enumerable:!0}):r,e));var N=b(v=>{"use strict";var ce=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(v,"__esModule",{value:!0});v.innerText=v.textContent=v.getText=v.getInnerHTML=v.getOuterHTML=void 0;var m=__domhandler$,ge=ce(__dom_serializer$),he=__domelementtype$;function J(e,t){return(0,ge.default)(e,t)}v.getOuterHTML=J;function me(e,t){return(0,m.hasChildren)(e)?e.children.map(function(r){return J(r,t)}).join(""):""}v.getInnerHTML=me;function j(e){return Array.isArray(e)?e.map(j).join(""):(0,m.isTag)(e)?e.name==="br"?`
`:j(e.children):(0,m.isCDATA)(e)?j(e.children):(0,m.isText)(e)?e.data:""}v.getText=j;function I(e){return Array.isArray(e)?e.map(I).join(""):(0,m.hasChildren)(e)&&!(0,m.isComment)(e)?I(e.children):(0,m.isText)(e)?e.data:""}v.textContent=I;function B(e){return Array.isArray(e)?e.map(B).join(""):(0,m.hasChildren)(e)&&(e.type===he.ElementType.Tag||(0,m.isCDATA)(e))?B(e.children):(0,m.isText)(e)?e.data:""}v.innerText=B});var W=b(o=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.prevElementSibling=o.nextElementSibling=o.getName=o.hasAttrib=o.getAttributeValue=o.getSiblings=o.getParent=o.getChildren=void 0;var K=__domhandler$,ye=[];function Q(e){var t;return(t=e.children)!==null&&t!==void 0?t:ye}o.getChildren=Q;function U(e){return e.parent||null}o.getParent=U;function be(e){var t,r,n=U(e);if(n!=null)return Q(n);for(var i=[e],a=e.prev,u=e.next;a!=null;)i.unshift(a),t=a,a=t.prev;for(;u!=null;)i.push(u),r=u,u=r.next;return i}o.getSiblings=be;function Te(e,t){var r;return(r=e.attribs)===null||r===void 0?void 0:r[t]}o.getAttributeValue=Te;function xe(e,t){return e.attribs!=null&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&e.attribs[t]!=null}o.hasAttrib=xe;function _e(e){return e.name}o.getName=_e;function Oe(e){for(var t,r=e.next;r!==null&&!(0,K.isTag)(r);)t=r,r=t.next;return r}o.nextElementSibling=Oe;function Ce(e){for(var t,r=e.prev;r!==null&&!(0,K.isTag)(r);)t=r,r=t.prev;return r}o.prevElementSibling=Ce});var X=b(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.prepend=d.prependChild=d.append=d.appendChild=d.replaceElement=d.removeElement=void 0;function E(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var t=e.parent.children;t.splice(t.lastIndexOf(e),1)}}d.removeElement=E;function Ee(e,t){var r=t.prev=e.prev;r&&(r.next=t);var n=t.next=e.next;n&&(n.prev=t);var i=t.parent=e.parent;if(i){var a=i.children;a[a.lastIndexOf(e)]=t}}d.replaceElement=Ee;function Ae(e,t){if(E(t),t.next=null,t.parent=e,e.children.push(t)>1){var r=e.children[e.children.length-2];r.next=t,t.prev=r}else t.prev=null}d.appendChild=Ae;function De(e,t){E(t);var r=e.parent,n=e.next;if(t.next=n,t.prev=e,e.next=t,t.parent=r,n){if(n.prev=t,r){var i=r.children;i.splice(i.lastIndexOf(n),0,t)}}else r&&r.children.push(t)}d.append=De;function Pe(e,t){if(E(t),t.parent=e,t.prev=null,e.children.unshift(t)!==1){var r=e.children[1];r.prev=t,t.next=r}else t.next=null}d.prependChild=Pe;function je(e,t){E(t);var r=e.parent;if(r){var n=r.children;n.splice(n.indexOf(e),0,t)}e.prev&&(e.prev.next=t),t.parent=r,t.prev=e.prev,t.next=e,e.prev=t}d.prepend=je});var H=b(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.findAll=p.existsOne=p.findOne=p.findOneChild=p.find=p.filter=void 0;var A=__domhandler$;function qe(e,t,r,n){return r===void 0&&(r=!0),n===void 0&&(n=1/0),Array.isArray(t)||(t=[t]),F(e,t,r,n)}p.filter=qe;function F(e,t,r,n){for(var i=[],a=0,u=t;a<u.length;a++){var l=u[a];if(e(l)&&(i.push(l),--n<=0))break;if(r&&(0,A.hasChildren)(l)&&l.children.length>0){var s=F(e,l.children,r,n);if(i.push.apply(i,s),n-=s.length,n<=0)break}}return i}p.find=F;function Se(e,t){return t.find(e)}p.findOneChild=Se;function Y(e,t,r){r===void 0&&(r=!0);for(var n=null,i=0;i<t.length&&!n;i++){var a=t[i];if((0,A.isTag)(a))e(a)?n=a:r&&a.children.length>0&&(n=Y(e,a.children));else continue}return n}p.findOne=Y;function Z(e,t){return t.some(function(r){return(0,A.isTag)(r)&&(e(r)||r.children.length>0&&Z(e,r.children))})}p.existsOne=Z;function Me(e,t){for(var r,n=[],i=t.filter(A.isTag),a;a=i.shift();){var u=(r=a.children)===null||r===void 0?void 0:r.filter(A.isTag);u&&u.length>0&&i.unshift.apply(i,u),e(a)&&n.push(a)}return n}p.findAll=Me});var L=b(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.getElementsByTagType=g.getElementsByTagName=g.getElementById=g.getElements=g.testElement=void 0;var x=__domhandler$,S=H(),q={tag_name:function(e){return typeof e=="function"?function(t){return(0,x.isTag)(t)&&e(t.name)}:e==="*"?x.isTag:function(t){return(0,x.isTag)(t)&&t.name===e}},tag_type:function(e){return typeof e=="function"?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return typeof e=="function"?function(t){return(0,x.isText)(t)&&e(t.data)}:function(t){return(0,x.isText)(t)&&t.data===e}}};function k(e,t){return typeof t=="function"?function(r){return(0,x.isTag)(r)&&t(r.attribs[e])}:function(r){return(0,x.isTag)(r)&&r.attribs[e]===t}}function we(e,t){return function(r){return e(r)||t(r)}}function ee(e){var t=Object.keys(e).map(function(r){var n=e[r];return Object.prototype.hasOwnProperty.call(q,r)?q[r](n):k(r,n)});return t.length===0?null:t.reduce(we)}function Ie(e,t){var r=ee(e);return r?r(t):!0}g.testElement=Ie;function Be(e,t,r,n){n===void 0&&(n=1/0);var i=ee(e);return i?(0,S.filter)(i,t,r,n):[]}g.getElements=Be;function Ne(e,t,r){return r===void 0&&(r=!0),Array.isArray(t)||(t=[t]),(0,S.findOne)(k("id",e),t,r)}g.getElementById=Ne;function Fe(e,t,r,n){return r===void 0&&(r=!0),n===void 0&&(n=1/0),(0,S.filter)(q.tag_name(e),t,r,n)}g.getElementsByTagName=Fe;function He(e,t,r,n){return r===void 0&&(r=!0),n===void 0&&(n=1/0),(0,S.filter)(q.tag_type(e),t,r,n)}g.getElementsByTagType=He});var ne=b(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.uniqueSort=T.compareDocumentPosition=T.removeSubsets=void 0;var te=__domhandler$;function Le(e){for(var t=e.length;--t>=0;){var r=e[t];if(t>0&&e.lastIndexOf(r,t-1)>=0){e.splice(t,1);continue}for(var n=r.parent;n;n=n.parent)if(e.includes(n)){e.splice(t,1);break}}return e}T.removeSubsets=Le;function re(e,t){var r=[],n=[];if(e===t)return 0;for(var i=(0,te.hasChildren)(e)?e:e.parent;i;)r.unshift(i),i=i.parent;for(i=(0,te.hasChildren)(t)?t:t.parent;i;)n.unshift(i),i=i.parent;for(var a=Math.min(r.length,n.length),u=0;u<a&&r[u]===n[u];)u++;if(u===0)return 1;var l=r[u-1],s=l.children,h=r[u],P=n[u];return s.indexOf(h)>s.indexOf(P)?l===t?20:4:l===e?10:2}T.compareDocumentPosition=re;function Ve(e){return e=e.filter(function(t,r,n){return!n.includes(t,r+1)}),e.sort(function(t,r){var n=re(t,r);return n&2?-1:n&4?1:0}),e}T.uniqueSort=Ve});var ae=b(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.getFeed=void 0;var $e=N(),D=L();function ze(e){var t=M(Qe,e);return t?t.name==="feed"?Re(t):Ge(t):null}w.getFeed=ze;function Re(e){var t,r=e.children,n={type:"atom",items:(0,D.getElementsByTagName)("entry",r).map(function(u){var l,s=u.children,h={media:ie(s)};c(h,"id","id",s),c(h,"title","title",s);var P=(l=M("link",s))===null||l===void 0?void 0:l.attribs.href;P&&(h.link=P);var $=_("summary",s)||_("content",s);$&&(h.description=$);var z=_("updated",s);return z&&(h.pubDate=new Date(z)),h})};c(n,"id","id",r),c(n,"title","title",r);var i=(t=M("link",r))===null||t===void 0?void 0:t.attribs.href;i&&(n.link=i),c(n,"description","subtitle",r);var a=_("updated",r);return a&&(n.updated=new Date(a)),c(n,"author","email",r,!0),n}function Ge(e){var t,r,n=(r=(t=M("channel",e.children))===null||t===void 0?void 0:t.children)!==null&&r!==void 0?r:[],i={type:e.name.substr(0,3),id:"",items:(0,D.getElementsByTagName)("item",e.children).map(function(u){var l=u.children,s={media:ie(l)};c(s,"id","guid",l),c(s,"title","title",l),c(s,"link","link",l),c(s,"description","description",l);var h=_("pubDate",l);return h&&(s.pubDate=new Date(h)),s})};c(i,"title","title",n),c(i,"link","link",n),c(i,"description","description",n);var a=_("lastBuildDate",n);return a&&(i.updated=new Date(a)),c(i,"author","managingEditor",n,!0),i}var Je=["url","type","lang"],Ke=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function ie(e){return(0,D.getElementsByTagName)("media:content",e).map(function(t){for(var r=t.attribs,n={medium:r.medium,isDefault:!!r.isDefault},i=0,a=Je;i<a.length;i++){var u=a[i];r[u]&&(n[u]=r[u])}for(var l=0,s=Ke;l<s.length;l++){var u=s[l];r[u]&&(n[u]=parseInt(r[u],10))}return r.expression&&(n.expression=r.expression),n})}function M(e,t){return(0,D.getElementsByTagName)(e,t,!0,1)[0]}function _(e,t,r){return r===void 0&&(r=!1),(0,$e.textContent)((0,D.getElementsByTagName)(e,t,r,1)).trim()}function c(e,t,r,n,i){i===void 0&&(i=!1);var a=_(r,n,i);a&&(e[t]=a)}function Qe(e){return e==="rss"||e==="feed"||e==="rdf:RDF"}});var V=b(f=>{"use strict";var Ue=f&&f.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),O=f&&f.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Ue(t,e,r)};Object.defineProperty(f,"__esModule",{value:!0});f.hasChildren=f.isDocument=f.isComment=f.isText=f.isCDATA=f.isTag=void 0;O(N(),f);O(W(),f);O(X(),f);O(H(),f);O(L(),f);O(ne(),f);O(ae(),f);var C=__domhandler$;Object.defineProperty(f,"isTag",{enumerable:!0,get:function(){return C.isTag}});Object.defineProperty(f,"isCDATA",{enumerable:!0,get:function(){return C.isCDATA}});Object.defineProperty(f,"isText",{enumerable:!0,get:function(){return C.isText}});Object.defineProperty(f,"isComment",{enumerable:!0,get:function(){return C.isComment}});Object.defineProperty(f,"isDocument",{enumerable:!0,get:function(){return C.isDocument}});Object.defineProperty(f,"hasChildren",{enumerable:!0,get:function(){return C.hasChildren}})});var ue=G(V()),fe=G(V()),{__esModule:ut,hasChildren:ft,isTag:lt,isCDATA:st,isText:ot,isComment:vt,isDocument:dt}=fe,{default:We,...Xe}=fe,pt=ue.default??We??Xe;export{ut as __esModule,pt as default,ft as hasChildren,st as isCDATA,vt as isComment,dt as isDocument,lt as isTag,ot as isText};
