(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-20371e45":"d8e5459e","chunk-5af7d964":"e5488d53"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-20371e45":1,"chunk-5af7d964":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-20371e45":"44845de3","chunk-5af7d964":"ffc5ecd3"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/thef2e-2019-w9-notebook/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("router-view")],1)},a=[],u={created:function(){this.$store.dispatch("getNotes")}},c=u,i=(n("5c0b"),n("2877")),s=Object(i["a"])(c,o,a,!1,null,null,null),f=s.exports,l=n("8c4f");r["a"].use(l["a"]);var d=new l["a"]({routes:[{path:"/notebook/:id",name:"notebook",component:function(){return n.e("chunk-5af7d964").then(n.bind(null,"0463"))}},{path:"/",name:"home",component:function(){return n.e("chunk-20371e45").then(n.bind(null,"bb51"))}},{path:"*",redirect:{name:"home"}}]}),p=n("2f62");r["a"].use(p["a"]);var h=[{name:"Default",mark:!1}],m={load:function(){return JSON.parse(localStorage.getItem("notes")||JSON.stringify(h))},save:function(e){localStorage.setItem("notes",JSON.stringify(e))},remove:function(e){localStorage.removeItem(e)}},v=new p["a"].Store({state:{notes:[]},mutations:{setNotes:function(e,t){e.notes=t,m.save(e.notes)},addNote:function(e,t){e.notes.push(t),m.save(e.notes)},removeNote:function(e,t){var n=e.notes.indexOf(t.note);e.notes.splice(n,1),m.save(e.notes),m.remove("note".concat(t.idx))},markNote:function(e,t){var n=e.notes.indexOf(t);e.notes[n].mark=!e.notes[n].mark,m.save(e.notes)}},actions:{getNotes:function(e){var t=e.commit;t("setNotes",m.load())}}});r["a"].config.productionTip=!1,new r["a"]({router:d,store:v,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),o=n.n(r);o.a},e332:function(e,t,n){}});
//# sourceMappingURL=app.b092d0b3.js.map