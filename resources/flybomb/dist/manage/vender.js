webpackJsonp([5],{0:function(e,t,n){n(1731),n(653),n(689),e.exports=n(841)},1731:function(e,t){/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),i="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===i.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}())}});