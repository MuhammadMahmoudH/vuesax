(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{649:function(e,t,n){"use strict";n.r(t);var s={data:function(){return{selected:[],users:[]}},mounted:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){console.log(t),e.users=t})},methods:{handleSelected:function(e){console.log("hola mundp"),this.$vs.notify({title:"Color",text:"Lorem ipsum dolor sit amet, consectetur",color:"success"})}}},a=n(1),o=Object(a.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vs-table",{attrs:{data:e.users},on:{selected:e.handleSelected},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,function(t,a){return n("vs-tr",{key:a,attrs:{data:t}},[n("vs-td",{attrs:{data:s[a].email}},[e._v("\n          "+e._s(s[a].email)+"\n        ")]),e._v(" "),n("vs-td",{attrs:{data:s[a].username}},[e._v("\n          "+e._s(s[a].username)+"\n        ")]),e._v(" "),n("vs-td",{attrs:{data:s[a].id}},[e._v("\n          "+e._s(s[a].id)+"\n        ")])],1)})}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("template",{slot:"header"},[n("h3",[e._v("\n        Users\n      ")])]),e._v(" "),n("template",{slot:"thead"},[n("vs-th",[e._v("\n        Email\n      ")]),e._v(" "),n("vs-th",[e._v("\n        Name\n      ")]),e._v(" "),n("vs-th",[e._v("\n        Nro\n      ")])],1)],2)],1)},[],!1,null,null,null);o.options.__file="Single.vue";t.default=o.exports}}]);