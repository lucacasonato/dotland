/* esm.sh - esbuild bundle(twas@2.1.2) deno production */
var v=Object.defineProperty;var l=(t,n)=>v(t,"name",{value:n,configurable:!0});var a=l(function(t,n){return n>=t?Math.floor(n/t):0},"r");function w(t,n){n||(n=Date.now());var e=(n-t)/1e3,h=a(60,e),u=a(60,h),f=a(24,u),s=a(7,f),i=a(30,f),c=a(12,i),r=c,o="year";if(e<=1)return"just now";c>0?(r=c,o="year"):i>0?(r=i,o="month"):s>0?(r=s,o="week"):f>0?(r=f,o="day"):u>0?(r=u,o="hour"):h>0?(r=h,o="minute"):e>0&&(r=e,o="second");var d=Math.floor(r);return(d===1?r===u?"an":"a":d)+" "+o+(d>1?"s":"")+" ago"}l(w,"default");export{w as default};
