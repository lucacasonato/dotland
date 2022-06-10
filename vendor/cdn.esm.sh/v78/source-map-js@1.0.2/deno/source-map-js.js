/* esm.sh - esbuild bundle(source-map-js@1.0.2) deno production */
var qe=Object.create;var ue=Object.defineProperty;var Pe=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Fe=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty;var w=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var $e=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of je(e))!Ue.call(t,o)&&o!==n&&ue(t,o,{get:()=>e[o],enumerable:!(r=Pe(e,o))||r.enumerable});return t};var se=(t,e,n)=>(n=t!=null?qe(Fe(t)):{},$e(e||!t||!t.__esModule?ue(n,"default",{value:t,enumerable:!0}):n,t));var ae=w(V=>{var le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");V.encode=function(t){if(0<=t&&t<le.length)return le[t];throw new TypeError("Must be between 0 and 63: "+t)};V.decode=function(t){var e=65,n=90,r=97,o=122,i=48,u=57,l=43,s=47,a=26,c=52;return e<=t&&t<=n?t-e:r<=t&&t<=o?t-r+a:i<=t&&t<=u?t-i+c:t==l?62:t==s?63:-1}});var X=w(J=>{var ce=ae(),k=5,fe=1<<k,he=fe-1,de=fe;function ze(t){return t<0?(-t<<1)+1:(t<<1)+0}function Be(t){var e=(t&1)===1,n=t>>1;return e?-n:n}J.encode=function(e){var n="",r,o=ze(e);do r=o&he,o>>>=k,o>0&&(r|=de),n+=ce.encode(r);while(o>0);return n};J.decode=function(e,n,r){var o=e.length,i=0,u=0,l,s;do{if(n>=o)throw new Error("Expected more digits in base 64 VLQ value.");if(s=ce.decode(e.charCodeAt(n++)),s===-1)throw new Error("Invalid base64 digit: "+e.charAt(n-1));l=!!(s&de),s&=he,i=i+(s<<u),u+=k}while(l);r.value=Be(i),r.rest=n}});var I=w(S=>{function Qe(t,e,n){if(e in t)return t[e];if(arguments.length===3)return n;throw new Error('"'+e+'" is a required argument.')}S.getArg=Qe;var ge=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,We=/^data:.+\,.+$/;function D(t){var e=t.match(ge);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}S.urlParse=D;function G(t){var e="";return t.scheme&&(e+=t.scheme+":"),e+="//",t.auth&&(e+=t.auth+"@"),t.host&&(e+=t.host),t.port&&(e+=":"+t.port),t.path&&(e+=t.path),e}S.urlGenerate=G;var Ve=32;function ke(t){var e=[];return function(n){for(var r=0;r<e.length;r++)if(e[r].input===n){var o=e[0];return e[0]=e[r],e[r]=o,e[0].result}var i=t(n);return e.unshift({input:n,result:i}),e.length>Ve&&e.pop(),i}}var Z=ke(function(e){var n=e,r=D(e);if(r){if(!r.path)return e;n=r.path}for(var o=S.isAbsolute(n),i=[],u=0,l=0;;)if(u=l,l=n.indexOf("/",u),l===-1){i.push(n.slice(u));break}else for(i.push(n.slice(u,l));l<n.length&&n[l]==="/";)l++;for(var s,a=0,l=i.length-1;l>=0;l--)s=i[l],s==="."?i.splice(l,1):s===".."?a++:a>0&&(s===""?(i.splice(l+1,a),a=0):(i.splice(l,2),a--));return n=i.join("/"),n===""&&(n=o?"/":"."),r?(r.path=n,G(r)):n});S.normalize=Z;function ve(t,e){t===""&&(t="."),e===""&&(e=".");var n=D(e),r=D(t);if(r&&(t=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),G(n);if(n||e.match(We))return e;if(r&&!r.host&&!r.path)return r.host=e,G(r);var o=e.charAt(0)==="/"?e:Z(t.replace(/\/+$/,"")+"/"+e);return r?(r.path=o,G(r)):o}S.join=ve;S.isAbsolute=function(t){return t.charAt(0)==="/"||ge.test(t)};function Je(t,e){t===""&&(t="."),t=t.replace(/\/$/,"");for(var n=0;e.indexOf(t+"/")!==0;){var r=t.lastIndexOf("/");if(r<0||(t=t.slice(0,r),t.match(/^([^\/]+:\/)?\/*$/)))return e;++n}return Array(n+1).join("../")+e.substr(t.length+1)}S.relative=Je;var _e=function(){var t=Object.create(null);return!("__proto__"in t)}();function pe(t){return t}function Xe(t){return me(t)?"$"+t:t}S.toSetString=_e?pe:Xe;function Ze(t){return me(t)?t.slice(1):t}S.fromSetString=_e?pe:Ze;function me(t){if(!t)return!1;var e=t.length;if(e<9||t.charCodeAt(e-1)!==95||t.charCodeAt(e-2)!==95||t.charCodeAt(e-3)!==111||t.charCodeAt(e-4)!==116||t.charCodeAt(e-5)!==111||t.charCodeAt(e-6)!==114||t.charCodeAt(e-7)!==112||t.charCodeAt(e-8)!==95||t.charCodeAt(e-9)!==95)return!1;for(var n=e-10;n>=0;n--)if(t.charCodeAt(n)!==36)return!1;return!0}function Ke(t,e,n){var r=O(t.source,e.source);return r!==0||(r=t.originalLine-e.originalLine,r!==0)||(r=t.originalColumn-e.originalColumn,r!==0||n)||(r=t.generatedColumn-e.generatedColumn,r!==0)||(r=t.generatedLine-e.generatedLine,r!==0)?r:O(t.name,e.name)}S.compareByOriginalPositions=Ke;function Ye(t,e,n){var r;return r=t.originalLine-e.originalLine,r!==0||(r=t.originalColumn-e.originalColumn,r!==0||n)||(r=t.generatedColumn-e.generatedColumn,r!==0)||(r=t.generatedLine-e.generatedLine,r!==0)?r:O(t.name,e.name)}S.compareByOriginalPositionsNoSource=Ye;function He(t,e,n){var r=t.generatedLine-e.generatedLine;return r!==0||(r=t.generatedColumn-e.generatedColumn,r!==0||n)||(r=O(t.source,e.source),r!==0)||(r=t.originalLine-e.originalLine,r!==0)||(r=t.originalColumn-e.originalColumn,r!==0)?r:O(t.name,e.name)}S.compareByGeneratedPositionsDeflated=He;function er(t,e,n){var r=t.generatedColumn-e.generatedColumn;return r!==0||n||(r=O(t.source,e.source),r!==0)||(r=t.originalLine-e.originalLine,r!==0)||(r=t.originalColumn-e.originalColumn,r!==0)?r:O(t.name,e.name)}S.compareByGeneratedPositionsDeflatedNoLine=er;function O(t,e){return t===e?0:t===null?1:e===null?-1:t>e?1:-1}function rr(t,e){var n=t.generatedLine-e.generatedLine;return n!==0||(n=t.generatedColumn-e.generatedColumn,n!==0)||(n=O(t.source,e.source),n!==0)||(n=t.originalLine-e.originalLine,n!==0)||(n=t.originalColumn-e.originalColumn,n!==0)?n:O(t.name,e.name)}S.compareByGeneratedPositionsInflated=rr;function nr(t){return JSON.parse(t.replace(/^\)]}'[^\n]*\n/,""))}S.parseSourceMapInput=nr;function tr(t,e,n){if(e=e||"",t&&(t[t.length-1]!=="/"&&e[0]!=="/"&&(t+="/"),e=t+e),n){var r=D(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var o=r.path.lastIndexOf("/");o>=0&&(r.path=r.path.substring(0,o+1))}e=ve(G(r),e)}return Z(e)}S.computeSourceURL=tr});var H=w(Se=>{var K=I(),Y=Object.prototype.hasOwnProperty,b=typeof Map<"u";function E(){this._array=[],this._set=b?new Map:Object.create(null)}E.fromArray=function(e,n){for(var r=new E,o=0,i=e.length;o<i;o++)r.add(e[o],n);return r};E.prototype.size=function(){return b?this._set.size:Object.getOwnPropertyNames(this._set).length};E.prototype.add=function(e,n){var r=b?e:K.toSetString(e),o=b?this.has(e):Y.call(this._set,r),i=this._array.length;(!o||n)&&this._array.push(e),o||(b?this._set.set(e,i):this._set[r]=i)};E.prototype.has=function(e){if(b)return this._set.has(e);var n=K.toSetString(e);return Y.call(this._set,n)};E.prototype.indexOf=function(e){if(b){var n=this._set.get(e);if(n>=0)return n}else{var r=K.toSetString(e);if(Y.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')};E.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)};E.prototype.toArray=function(){return this._array.slice()};Se.ArraySet=E});var Le=w(ye=>{var Ce=I();function or(t,e){var n=t.generatedLine,r=e.generatedLine,o=t.generatedColumn,i=e.generatedColumn;return r>n||r==n&&i>=o||Ce.compareByGeneratedPositionsInflated(t,e)<=0}function U(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}U.prototype.unsortedForEach=function(e,n){this._array.forEach(e,n)};U.prototype.add=function(e){or(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))};U.prototype.toArray=function(){return this._sorted||(this._array.sort(Ce.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};ye.MappingList=U});var ee=w(Me=>{var q=X(),p=I(),$=H().ArraySet,ir=Le().MappingList;function M(t){t||(t={}),this._file=p.getArg(t,"file",null),this._sourceRoot=p.getArg(t,"sourceRoot",null),this._skipValidation=p.getArg(t,"skipValidation",!1),this._sources=new $,this._names=new $,this._mappings=new ir,this._sourcesContents=null}M.prototype._version=3;M.fromSourceMap=function(e){var n=e.sourceRoot,r=new M({file:e.file,sourceRoot:n});return e.eachMapping(function(o){var i={generated:{line:o.generatedLine,column:o.generatedColumn}};o.source!=null&&(i.source=o.source,n!=null&&(i.source=p.relative(n,i.source)),i.original={line:o.originalLine,column:o.originalColumn},o.name!=null&&(i.name=o.name)),r.addMapping(i)}),e.sources.forEach(function(o){var i=o;n!==null&&(i=p.relative(n,o)),r._sources.has(i)||r._sources.add(i);var u=e.sourceContentFor(o);u!=null&&r.setSourceContent(o,u)}),r};M.prototype.addMapping=function(e){var n=p.getArg(e,"generated"),r=p.getArg(e,"original",null),o=p.getArg(e,"source",null),i=p.getArg(e,"name",null);this._skipValidation||this._validateMapping(n,r,o,i),o!=null&&(o=String(o),this._sources.has(o)||this._sources.add(o)),i!=null&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:n.line,generatedColumn:n.column,originalLine:r!=null&&r.line,originalColumn:r!=null&&r.column,source:o,name:i})};M.prototype.setSourceContent=function(e,n){var r=e;this._sourceRoot!=null&&(r=p.relative(this._sourceRoot,r)),n!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[p.toSetString(r)]=n):this._sourcesContents&&(delete this._sourcesContents[p.toSetString(r)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))};M.prototype.applySourceMap=function(e,n,r){var o=n;if(n==null){if(e.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);o=e.file}var i=this._sourceRoot;i!=null&&(o=p.relative(i,o));var u=new $,l=new $;this._mappings.unsortedForEach(function(s){if(s.source===o&&s.originalLine!=null){var a=e.originalPositionFor({line:s.originalLine,column:s.originalColumn});a.source!=null&&(s.source=a.source,r!=null&&(s.source=p.join(r,s.source)),i!=null&&(s.source=p.relative(i,s.source)),s.originalLine=a.line,s.originalColumn=a.column,a.name!=null&&(s.name=a.name))}var c=s.source;c!=null&&!u.has(c)&&u.add(c);var d=s.name;d!=null&&!l.has(d)&&l.add(d)},this),this._sources=u,this._names=l,e.sources.forEach(function(s){var a=e.sourceContentFor(s);a!=null&&(r!=null&&(s=p.join(r,s)),i!=null&&(s=p.relative(i,s)),this.setSourceContent(s,a))},this)};M.prototype._validateMapping=function(e,n,r,o){if(n&&typeof n.line!="number"&&typeof n.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!n&&!r&&!o)){if(e&&"line"in e&&"column"in e&&n&&"line"in n&&"column"in n&&e.line>0&&e.column>=0&&n.line>0&&n.column>=0&&r)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:n,name:o}))}};M.prototype._serializeMappings=function(){for(var e=0,n=1,r=0,o=0,i=0,u=0,l="",s,a,c,d,h=this._mappings.toArray(),g=0,_=h.length;g<_;g++){if(a=h[g],s="",a.generatedLine!==n)for(e=0;a.generatedLine!==n;)s+=";",n++;else if(g>0){if(!p.compareByGeneratedPositionsInflated(a,h[g-1]))continue;s+=","}s+=q.encode(a.generatedColumn-e),e=a.generatedColumn,a.source!=null&&(d=this._sources.indexOf(a.source),s+=q.encode(d-u),u=d,s+=q.encode(a.originalLine-1-o),o=a.originalLine-1,s+=q.encode(a.originalColumn-r),r=a.originalColumn,a.name!=null&&(c=this._names.indexOf(a.name),s+=q.encode(c-i),i=c)),l+=s}return l};M.prototype._generateSourcesContent=function(e,n){return e.map(function(r){if(!this._sourcesContents)return null;n!=null&&(r=p.relative(n,r));var o=p.toSetString(r);return Object.prototype.hasOwnProperty.call(this._sourcesContents,o)?this._sourcesContents[o]:null},this)};M.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(e.file=this._file),this._sourceRoot!=null&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e};M.prototype.toString=function(){return JSON.stringify(this.toJSON())};Me.SourceMapGenerator=M});var we=w(N=>{N.GREATEST_LOWER_BOUND=1;N.LEAST_UPPER_BOUND=2;function re(t,e,n,r,o,i){var u=Math.floor((e-t)/2)+t,l=o(n,r[u],!0);return l===0?u:l>0?e-u>1?re(u,e,n,r,o,i):i==N.LEAST_UPPER_BOUND?e<r.length?e:-1:u:u-t>1?re(t,u,n,r,o,i):i==N.LEAST_UPPER_BOUND?u:t<0?-1:t}N.search=function(e,n,r,o){if(n.length===0)return-1;var i=re(-1,n.length,e,n,r,o||N.GREATEST_LOWER_BOUND);if(i<0)return-1;for(;i-1>=0&&r(n[i],n[i-1],!0)===0;)--i;return i}});var Ee=w(Oe=>{function ur(t){function e(o,i,u){var l=o[i];o[i]=o[u],o[u]=l}function n(o,i){return Math.round(o+Math.random()*(i-o))}function r(o,i,u,l){if(u<l){var s=n(u,l),a=u-1;e(o,s,l);for(var c=o[l],d=u;d<l;d++)i(o[d],c,!1)<=0&&(a+=1,e(o,a,d));e(o,a+1,d);var h=a+1;r(o,i,u,h-1),r(o,i,h+1,l)}}return r}function sr(t){let e=ur.toString();return new Function(`return ${e}`)()(t)}var Ae=new WeakMap;Oe.quickSort=function(t,e,n=0){let r=Ae.get(e);r===void 0&&(r=sr(e),Ae.set(e,r)),r(t,e,n,t.length-1)}});var Re=w(z=>{var f=I(),te=we(),x=H().ArraySet,lr=X(),P=Ee().quickSort;function v(t,e){var n=t;return typeof t=="string"&&(n=f.parseSourceMapInput(t)),n.sections!=null?new A(n,e):new C(n,e)}v.fromSourceMap=function(t,e){return C.fromSourceMap(t,e)};v.prototype._version=3;v.prototype.__generatedMappings=null;Object.defineProperty(v.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}});v.prototype.__originalMappings=null;Object.defineProperty(v.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}});v.prototype._charIsMappingSeparator=function(e,n){var r=e.charAt(n);return r===";"||r===","};v.prototype._parseMappings=function(e,n){throw new Error("Subclasses must implement _parseMappings")};v.GENERATED_ORDER=1;v.ORIGINAL_ORDER=2;v.GREATEST_LOWER_BOUND=1;v.LEAST_UPPER_BOUND=2;v.prototype.eachMapping=function(e,n,r){var o=n||null,i=r||v.GENERATED_ORDER,u;switch(i){case v.GENERATED_ORDER:u=this._generatedMappings;break;case v.ORIGINAL_ORDER:u=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}for(var l=this.sourceRoot,s=e.bind(o),a=this._names,c=this._sources,d=this._sourceMapURL,h=0,g=u.length;h<g;h++){var _=u[h],m=_.source===null?null:c.at(_.source);m=f.computeSourceURL(l,m,d),s({source:m,generatedLine:_.generatedLine,generatedColumn:_.generatedColumn,originalLine:_.originalLine,originalColumn:_.originalColumn,name:_.name===null?null:a.at(_.name)})}};v.prototype.allGeneratedPositionsFor=function(e){var n=f.getArg(e,"line"),r={source:f.getArg(e,"source"),originalLine:n,originalColumn:f.getArg(e,"column",0)};if(r.source=this._findSourceIndex(r.source),r.source<0)return[];var o=[],i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",f.compareByOriginalPositions,te.LEAST_UPPER_BOUND);if(i>=0){var u=this._originalMappings[i];if(e.column===void 0)for(var l=u.originalLine;u&&u.originalLine===l;)o.push({line:f.getArg(u,"generatedLine",null),column:f.getArg(u,"generatedColumn",null),lastColumn:f.getArg(u,"lastGeneratedColumn",null)}),u=this._originalMappings[++i];else for(var s=u.originalColumn;u&&u.originalLine===n&&u.originalColumn==s;)o.push({line:f.getArg(u,"generatedLine",null),column:f.getArg(u,"generatedColumn",null),lastColumn:f.getArg(u,"lastGeneratedColumn",null)}),u=this._originalMappings[++i]}return o};z.SourceMapConsumer=v;function C(t,e){var n=t;typeof t=="string"&&(n=f.parseSourceMapInput(t));var r=f.getArg(n,"version"),o=f.getArg(n,"sources"),i=f.getArg(n,"names",[]),u=f.getArg(n,"sourceRoot",null),l=f.getArg(n,"sourcesContent",null),s=f.getArg(n,"mappings"),a=f.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);u&&(u=f.normalize(u)),o=o.map(String).map(f.normalize).map(function(c){return u&&f.isAbsolute(u)&&f.isAbsolute(c)?f.relative(u,c):c}),this._names=x.fromArray(i.map(String),!0),this._sources=x.fromArray(o,!0),this._absoluteSources=this._sources.toArray().map(function(c){return f.computeSourceURL(u,c,e)}),this.sourceRoot=u,this.sourcesContent=l,this._mappings=s,this._sourceMapURL=e,this.file=a}C.prototype=Object.create(v.prototype);C.prototype.consumer=v;C.prototype._findSourceIndex=function(t){var e=t;if(this.sourceRoot!=null&&(e=f.relative(this.sourceRoot,e)),this._sources.has(e))return this._sources.indexOf(e);var n;for(n=0;n<this._absoluteSources.length;++n)if(this._absoluteSources[n]==t)return n;return-1};C.fromSourceMap=function(e,n){var r=Object.create(C.prototype),o=r._names=x.fromArray(e._names.toArray(),!0),i=r._sources=x.fromArray(e._sources.toArray(),!0);r.sourceRoot=e._sourceRoot,r.sourcesContent=e._generateSourcesContent(r._sources.toArray(),r.sourceRoot),r.file=e._file,r._sourceMapURL=n,r._absoluteSources=r._sources.toArray().map(function(g){return f.computeSourceURL(r.sourceRoot,g,n)});for(var u=e._mappings.toArray().slice(),l=r.__generatedMappings=[],s=r.__originalMappings=[],a=0,c=u.length;a<c;a++){var d=u[a],h=new Ne;h.generatedLine=d.generatedLine,h.generatedColumn=d.generatedColumn,d.source&&(h.source=i.indexOf(d.source),h.originalLine=d.originalLine,h.originalColumn=d.originalColumn,d.name&&(h.name=o.indexOf(d.name)),s.push(h)),l.push(h)}return P(r.__originalMappings,f.compareByOriginalPositions),r};C.prototype._version=3;Object.defineProperty(C.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function Ne(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}var ne=f.compareByGeneratedPositionsDeflatedNoLine;function be(t,e){let n=t.length,r=t.length-e;if(!(r<=1))if(r==2){let o=t[e],i=t[e+1];ne(o,i)>0&&(t[e]=i,t[e+1]=o)}else if(r<20)for(let o=e;o<n;o++)for(let i=o;i>e;i--){let u=t[i-1],l=t[i];if(ne(u,l)<=0)break;t[i-1]=l,t[i]=u}else P(t,ne,e)}C.prototype._parseMappings=function(e,n){var r=1,o=0,i=0,u=0,l=0,s=0,a=e.length,c=0,d={},h={},g=[],_=[],m,De,y,R,ie;let W=0;for(;c<a;)if(e.charAt(c)===";")r++,c++,o=0,be(_,W),W=_.length;else if(e.charAt(c)===",")c++;else{for(m=new Ne,m.generatedLine=r,R=c;R<a&&!this._charIsMappingSeparator(e,R);R++);for(De=e.slice(c,R),y=[];c<R;)lr.decode(e,c,h),ie=h.value,c=h.rest,y.push(ie);if(y.length===2)throw new Error("Found a source, but no line and column");if(y.length===3)throw new Error("Found a source and line, but no column");if(m.generatedColumn=o+y[0],o=m.generatedColumn,y.length>1&&(m.source=l+y[1],l+=y[1],m.originalLine=i+y[2],i=m.originalLine,m.originalLine+=1,m.originalColumn=u+y[3],u=m.originalColumn,y.length>4&&(m.name=s+y[4],s+=y[4])),_.push(m),typeof m.originalLine=="number"){let F=m.source;for(;g.length<=F;)g.push(null);g[F]===null&&(g[F]=[]),g[F].push(m)}}be(_,W),this.__generatedMappings=_;for(var j=0;j<g.length;j++)g[j]!=null&&P(g[j],f.compareByOriginalPositionsNoSource);this.__originalMappings=[].concat(...g)};C.prototype._findMapping=function(e,n,r,o,i,u){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[o]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[o]);return te.search(e,n,i,u)};C.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var n=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(n.generatedLine===r.generatedLine){n.lastGeneratedColumn=r.generatedColumn-1;continue}}n.lastGeneratedColumn=1/0}};C.prototype.originalPositionFor=function(e){var n={generatedLine:f.getArg(e,"line"),generatedColumn:f.getArg(e,"column")},r=this._findMapping(n,this._generatedMappings,"generatedLine","generatedColumn",f.compareByGeneratedPositionsDeflated,f.getArg(e,"bias",v.GREATEST_LOWER_BOUND));if(r>=0){var o=this._generatedMappings[r];if(o.generatedLine===n.generatedLine){var i=f.getArg(o,"source",null);i!==null&&(i=this._sources.at(i),i=f.computeSourceURL(this.sourceRoot,i,this._sourceMapURL));var u=f.getArg(o,"name",null);return u!==null&&(u=this._names.at(u)),{source:i,line:f.getArg(o,"originalLine",null),column:f.getArg(o,"originalColumn",null),name:u}}}return{source:null,line:null,column:null,name:null}};C.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return e==null}):!1};C.prototype.sourceContentFor=function(e,n){if(!this.sourcesContent)return null;var r=this._findSourceIndex(e);if(r>=0)return this.sourcesContent[r];var o=e;this.sourceRoot!=null&&(o=f.relative(this.sourceRoot,o));var i;if(this.sourceRoot!=null&&(i=f.urlParse(this.sourceRoot))){var u=o.replace(/^file:\/\//,"");if(i.scheme=="file"&&this._sources.has(u))return this.sourcesContent[this._sources.indexOf(u)];if((!i.path||i.path=="/")&&this._sources.has("/"+o))return this.sourcesContent[this._sources.indexOf("/"+o)]}if(n)return null;throw new Error('"'+o+'" is not in the SourceMap.')};C.prototype.generatedPositionFor=function(e){var n=f.getArg(e,"source");if(n=this._findSourceIndex(n),n<0)return{line:null,column:null,lastColumn:null};var r={source:n,originalLine:f.getArg(e,"line"),originalColumn:f.getArg(e,"column")},o=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",f.compareByOriginalPositions,f.getArg(e,"bias",v.GREATEST_LOWER_BOUND));if(o>=0){var i=this._originalMappings[o];if(i.source===r.source)return{line:f.getArg(i,"generatedLine",null),column:f.getArg(i,"generatedColumn",null),lastColumn:f.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}};z.BasicSourceMapConsumer=C;function A(t,e){var n=t;typeof t=="string"&&(n=f.parseSourceMapInput(t));var r=f.getArg(n,"version"),o=f.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new x,this._names=new x;var i={line:-1,column:0};this._sections=o.map(function(u){if(u.url)throw new Error("Support for url field in sections not implemented.");var l=f.getArg(u,"offset"),s=f.getArg(l,"line"),a=f.getArg(l,"column");if(s<i.line||s===i.line&&a<i.column)throw new Error("Section offsets must be ordered and non-overlapping.");return i=l,{generatedOffset:{generatedLine:s+1,generatedColumn:a+1},consumer:new v(f.getArg(u,"map"),e)}})}A.prototype=Object.create(v.prototype);A.prototype.constructor=v;A.prototype._version=3;Object.defineProperty(A.prototype,"sources",{get:function(){for(var t=[],e=0;e<this._sections.length;e++)for(var n=0;n<this._sections[e].consumer.sources.length;n++)t.push(this._sections[e].consumer.sources[n]);return t}});A.prototype.originalPositionFor=function(e){var n={generatedLine:f.getArg(e,"line"),generatedColumn:f.getArg(e,"column")},r=te.search(n,this._sections,function(i,u){var l=i.generatedLine-u.generatedOffset.generatedLine;return l||i.generatedColumn-u.generatedOffset.generatedColumn}),o=this._sections[r];return o?o.consumer.originalPositionFor({line:n.generatedLine-(o.generatedOffset.generatedLine-1),column:n.generatedColumn-(o.generatedOffset.generatedLine===n.generatedLine?o.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}};A.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})};A.prototype.sourceContentFor=function(e,n){for(var r=0;r<this._sections.length;r++){var o=this._sections[r],i=o.consumer.sourceContentFor(e,!0);if(i)return i}if(n)return null;throw new Error('"'+e+'" is not in the SourceMap.')};A.prototype.generatedPositionFor=function(e){for(var n=0;n<this._sections.length;n++){var r=this._sections[n];if(r.consumer._findSourceIndex(f.getArg(e,"source"))!==-1){var o=r.consumer.generatedPositionFor(e);if(o){var i={line:o.line+(r.generatedOffset.generatedLine-1),column:o.column+(r.generatedOffset.generatedLine===o.line?r.generatedOffset.generatedColumn-1:0)};return i}}}return{line:null,column:null}};A.prototype._parseMappings=function(e,n){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var o=this._sections[r],i=o.consumer._generatedMappings,u=0;u<i.length;u++){var l=i[u],s=o.consumer._sources.at(l.source);s=f.computeSourceURL(o.consumer.sourceRoot,s,this._sourceMapURL),this._sources.add(s),s=this._sources.indexOf(s);var a=null;l.name&&(a=o.consumer._names.at(l.name),this._names.add(a),a=this._names.indexOf(a));var c={source:s,generatedLine:l.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(o.generatedOffset.generatedLine===l.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:a};this.__generatedMappings.push(c),typeof c.originalLine=="number"&&this.__originalMappings.push(c)}P(this.__generatedMappings,f.compareByGeneratedPositionsDeflated),P(this.__originalMappings,f.compareByOriginalPositions)};z.IndexedSourceMapConsumer=A});var Ie=w(Ge=>{var ar=ee().SourceMapGenerator,B=I(),cr=/(\r?\n)/,fr=10,T="$$$isSourceNode$$$";function L(t,e,n,r,o){this.children=[],this.sourceContents={},this.line=t??null,this.column=e??null,this.source=n??null,this.name=o??null,this[T]=!0,r!=null&&this.add(r)}L.fromStringWithSourceMap=function(e,n,r){var o=new L,i=e.split(cr),u=0,l=function(){var h=_(),g=_()||"";return h+g;function _(){return u<i.length?i[u++]:void 0}},s=1,a=0,c=null;return n.eachMapping(function(h){if(c!==null)if(s<h.generatedLine)d(c,l()),s++,a=0;else{var g=i[u]||"",_=g.substr(0,h.generatedColumn-a);i[u]=g.substr(h.generatedColumn-a),a=h.generatedColumn,d(c,_),c=h;return}for(;s<h.generatedLine;)o.add(l()),s++;if(a<h.generatedColumn){var g=i[u]||"";o.add(g.substr(0,h.generatedColumn)),i[u]=g.substr(h.generatedColumn),a=h.generatedColumn}c=h},this),u<i.length&&(c&&d(c,l()),o.add(i.splice(u).join(""))),n.sources.forEach(function(h){var g=n.sourceContentFor(h);g!=null&&(r!=null&&(h=B.join(r,h)),o.setSourceContent(h,g))}),o;function d(h,g){if(h===null||h.source===void 0)o.add(g);else{var _=r?B.join(r,h.source):h.source;o.add(new L(h.originalLine,h.originalColumn,_,g,h.name))}}};L.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(n){this.add(n)},this);else if(e[T]||typeof e=="string")e&&this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};L.prototype.prepend=function(e){if(Array.isArray(e))for(var n=e.length-1;n>=0;n--)this.prepend(e[n]);else if(e[T]||typeof e=="string")this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};L.prototype.walk=function(e){for(var n,r=0,o=this.children.length;r<o;r++)n=this.children[r],n[T]?n.walk(e):n!==""&&e(n,{source:this.source,line:this.line,column:this.column,name:this.name})};L.prototype.join=function(e){var n,r,o=this.children.length;if(o>0){for(n=[],r=0;r<o-1;r++)n.push(this.children[r]),n.push(e);n.push(this.children[r]),this.children=n}return this};L.prototype.replaceRight=function(e,n){var r=this.children[this.children.length-1];return r[T]?r.replaceRight(e,n):typeof r=="string"?this.children[this.children.length-1]=r.replace(e,n):this.children.push("".replace(e,n)),this};L.prototype.setSourceContent=function(e,n){this.sourceContents[B.toSetString(e)]=n};L.prototype.walkSourceContents=function(e){for(var n=0,r=this.children.length;n<r;n++)this.children[n][T]&&this.children[n].walkSourceContents(e);for(var o=Object.keys(this.sourceContents),n=0,r=o.length;n<r;n++)e(B.fromSetString(o[n]),this.sourceContents[o[n]])};L.prototype.toString=function(){var e="";return this.walk(function(n){e+=n}),e};L.prototype.toStringWithSourceMap=function(e){var n={code:"",line:1,column:0},r=new ar(e),o=!1,i=null,u=null,l=null,s=null;return this.walk(function(a,c){n.code+=a,c.source!==null&&c.line!==null&&c.column!==null?((i!==c.source||u!==c.line||l!==c.column||s!==c.name)&&r.addMapping({source:c.source,original:{line:c.line,column:c.column},generated:{line:n.line,column:n.column},name:c.name}),i=c.source,u=c.line,l=c.column,s=c.name,o=!0):o&&(r.addMapping({generated:{line:n.line,column:n.column}}),i=null,o=!1);for(var d=0,h=a.length;d<h;d++)a.charCodeAt(d)===fr?(n.line++,n.column=0,d+1===h?(i=null,o=!1):o&&r.addMapping({source:c.source,original:{line:c.line,column:c.column},generated:{line:n.line,column:n.column},name:c.name})):n.column++}),this.walkSourceContents(function(a,c){r.setSourceContent(a,c)}),{code:n.code,map:r}};Ge.SourceNode=L});var oe=w(Q=>{Q.SourceMapGenerator=ee().SourceMapGenerator;Q.SourceMapConsumer=Re().SourceMapConsumer;Q.SourceNode=Ie().SourceNode});var xe=se(oe()),Te=se(oe()),{SourceMapGenerator:Or,SourceMapConsumer:Er,SourceNode:br}=Te,{default:hr,...dr}=Te,Nr=xe.default??hr??dr;export{Er as SourceMapConsumer,Or as SourceMapGenerator,br as SourceNode,Nr as default};