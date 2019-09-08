(window.webpackJsonpreactstein=window.webpackJsonpreactstein||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(4),i=n.n(s),a=(n(13),n(1)),p=n.n(a),c=n(5),j=n(2),y=(n(15),function(e){return o.a.createElement("div",{className:"renderer"},o.a.createElement("div",{className:"ceiling"}),o.a.createElement("div",{className:"floor"}),o.a.createElement("div",{className:"walls"}))}),l=n(6),u=n(7),f=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"toMap",value:function(e){return t=JSON.parse(e),n=O("Map"),v(t,n,h);var t,n}},{key:"mapToJson",value:function(e){return JSON.stringify((t=e,n=O("Map"),v(t,n,m)),null,2);var t,n}}]),e}();function d(e,t){throw Error("Invalid value ".concat(JSON.stringify(t)," for type ").concat(JSON.stringify(e)))}function h(e){if(void 0===e.jsonToJS){var t={};e.props.forEach(function(e){return t[e.json]={key:e.js,typ:e.typ}}),e.jsonToJS=t}return e.jsonToJS}function m(e){if(void 0===e.jsToJSON){var t={};e.props.forEach(function(e){return t[e.js]={key:e.json,typ:e.typ}}),e.jsToJSON=t}return e.jsToJSON}function v(e,t,n){if("any"===t)return e;if(null===t)return null===e?e:d(t,e);if(!1===t)return d(t,e);for(;"object"===typeof t&&void 0!==t.ref;)t=E[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:d(e,t)}(t,e):"object"===typeof t?t.hasOwnProperty("unionMembers")?function(e,t){for(var r=e.length,o=0;o<r;o++){var s=e[o];try{return v(t,s,n)}catch(i){}}return d(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map(function(t){return v(t,e,n)}):d("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!==typeof r||Array.isArray(r))return d("object",r);var o={};return Object.getOwnPropertyNames(e).forEach(function(t){var s=e[t],i=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[s.key]=v(i,s.typ,n)}),Object.getOwnPropertyNames(r).forEach(function(s){Object.prototype.hasOwnProperty.call(e,s)||(o[s]=v(r[s],t,n))}),o}(n(t),t.additional,e):d(t,e):t===Date&&"number"!==typeof e?function(e,t){if(null===t)return null;var n=new Date(t);return isNaN(n.valueOf())?d("Date",t):n}(0,e):function(e,t){return typeof e===typeof t?t:d(e,t)}(t,e)}function g(e){return{arrayItems:e}}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{unionMembers:t}}function b(e,t){return{props:e,additional:t}}function O(e){return{ref:e}}var E={Map:b([{json:"height",js:"height",typ:0},{json:"infinite",js:"infinite",typ:!0},{json:"layers",js:"layers",typ:g(O("Layer"))},{json:"nextlayerid",js:"nextlayerid",typ:0},{json:"nextobjectid",js:"nextobjectid",typ:0},{json:"orientation",js:"orientation",typ:""},{json:"properties",js:"properties",typ:g(O("Property"))},{json:"renderorder",js:"renderorder",typ:""},{json:"tiledversion",js:"tiledversion",typ:""},{json:"tileheight",js:"tileheight",typ:0},{json:"tilesets",js:"tilesets",typ:g(O("Tileset"))},{json:"tilewidth",js:"tilewidth",typ:0},{json:"type",js:"type",typ:""},{json:"version",js:"version",typ:3.14},{json:"width",js:"width",typ:0}],!1),Layer:b([{json:"data",js:"data",typ:w(void 0,g(0))},{json:"height",js:"height",typ:w(void 0,0)},{json:"id",js:"id",typ:0},{json:"name",js:"name",typ:""},{json:"opacity",js:"opacity",typ:0},{json:"type",js:"type",typ:""},{json:"visible",js:"visible",typ:!0},{json:"width",js:"width",typ:w(void 0,0)},{json:"x",js:"x",typ:0},{json:"y",js:"y",typ:0},{json:"properties",js:"properties",typ:w(void 0,g(O("Property")))},{json:"draworder",js:"draworder",typ:w(void 0,"")},{json:"objects",js:"objects",typ:w(void 0,g(O("Object")))}],!1),Object:b([{json:"height",js:"height",typ:0},{json:"id",js:"id",typ:0},{json:"name",js:"name",typ:""},{json:"properties",js:"properties",typ:g(O("Property"))},{json:"rotation",js:"rotation",typ:0},{json:"type",js:"type",typ:""},{json:"visible",js:"visible",typ:!0},{json:"width",js:"width",typ:0},{json:"x",js:"x",typ:0},{json:"y",js:"y",typ:0}],!1),Property:b([{json:"name",js:"name",typ:""},{json:"type",js:"type",typ:""},{json:"value",js:"value",typ:""}],!1),Tileset:b([{json:"columns",js:"columns",typ:0},{json:"firstgid",js:"firstgid",typ:0},{json:"image",js:"image",typ:""},{json:"imageheight",js:"imageheight",typ:0},{json:"imagewidth",js:"imagewidth",typ:0},{json:"margin",js:"margin",typ:0},{json:"name",js:"name",typ:""},{json:"properties",js:"properties",typ:g(O("Property"))},{json:"spacing",js:"spacing",typ:0},{json:"tilecount",js:"tilecount",typ:0},{json:"tileheight",js:"tileheight",typ:0},{json:"tilewidth",js:"tilewidth",typ:0}],!1)},x=function(){return o.a.createElement("div",{className:"loader",style:{textAlign:"center"}},o.a.createElement("svg",{style:{width:"50px",height:"50px",display:"inline-block"},version:"1.1",id:"L4",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"},o.a.createElement("circle",{fill:"#fff",stroke:"none",cx:"6",cy:"50",r:"6"},o.a.createElement("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})),o.a.createElement("circle",{fill:"#fff",stroke:"none",cx:"26",cy:"50",r:"6"},o.a.createElement("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})),o.a.createElement("circle",{fill:"#fff",stroke:"none",cx:"46",cy:"50",r:"6"},o.a.createElement("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"}))))},N=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(null),a=Object(j.a)(i,2),l=a[0],u=a[1];return Object(r.useEffect)(function(){!1===n&&function(){var e=Object(c.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch((n="/assets/E1M2.json","/reactstein/".concat(n))).then(function(e){return e.text()});case 2:t=e.sent,u(f.toMap(t)),s(!0);case 5:case"end":return e.stop()}var n},e)}));return function(){return e.apply(this,arguments)}}()()}),o.a.createElement("div",{className:"App"},n&&l?o.a.createElement(y,{cols:80,rows:43,level:l}):o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.47bc2766.chunk.js.map