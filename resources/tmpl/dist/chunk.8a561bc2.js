webpackJsonp([7],{379:function(t,n,a){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments[1];if("loading"===n.type){return t.update("loading",function(){return n.data.loading})}return"loaded"===n.type?t.update(function(){return(0,r.Map)(n.data)}):"pagination"===n.type?t.update("current",function(){return n.data.current}):t}Object.defineProperty(n,"__esModule",{value:!0});var r=a(64),u=(0,r.Map)({current:1,loading:!1,data:[],pagination:null});n.default=e}});