(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["crypto"],{c104:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("v-toolbar",{attrs:{dark:"",flat:""}},[e("v-icon",{staticClass:"ml-4 mb-3",attrs:{"x-large":""}},[t._v("mdi-bitcoin")]),e("h2",{staticClass:"text-md-h3 ml-4 mb-4",attrs:{color:"blue-grey darken-2"}},[t._v("Latest Crypto News")])],1),e("v-container",[t.info?e("v-row",{attrs:{dense:""}},t._l(t.info.articles,(function(a,s){return e("v-col",{key:s,attrs:{cols:"12"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var r=s.hover;return[e("v-card",{staticClass:"ma-2",attrs:{color:a.color,elevation:r?16:2,href:a.url,target:"blank","min-height":"210"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"320px","max-width":"100vw",src:a.urlToImage}}),e("div",{staticClass:"d-flex flex-wrap justify-space-between"},[e("div",[e("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(a.title)}}),e("v-card-subtitle",[t._v(t._s(t._f("formatDate")(a.publishedAt))+" -- "+t._s(a.source.name))]),e("v-card-text",[t._v(" "+t._s(a.description)+" ")]),e("v-card-subtitle",[t._v(t._s(t._f("timePassed")(a.publishedAt)))])],1)])],1)]}}],null,!0)})],1)})),1):e("v-row",{attrs:{dense:""}},[e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"80vw",type:"article"}}),e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"80vw",type:"article"}}),e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"80vw",type:"article"}}),e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"80vw",type:"article"}}),e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"80vw",type:"article"}})],1)],1)],1)},r=[],o=e("bc3a"),i=e.n(o),l=e("c1df"),n=e.n(l),c={name:"Home",data:function(){return{info:null}},mounted:function(){var t=this;i.a.get("https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&apiKey=8a5c505e545b4210a318e5adcf13b6bb").then((function(a){return t.info=a.data}))},filters:{formatDate:function(t){if(t)return n()(String(t)).locale("en-be").format("LLLL")},timePassed:function(t){if(t)return n()(t).startOf().fromNow()}}},d=c,u=e("2877"),v=e("6544"),f=e.n(v),m=e("b0af"),w=e("99d9"),b=e("62ad"),h=e("a523"),p=e("ce87"),C=e("132d"),x=e("adda"),_=e("0fd9"),g=e("3129"),y=e("71d9"),k=Object(u["a"])(d,s,r,!1,null,null,null);a["default"]=k.exports;f()(k,{VCard:m["a"],VCardSubtitle:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:b["a"],VContainer:h["a"],VHover:p["a"],VIcon:C["a"],VImg:x["a"],VRow:_["a"],VSkeletonLoader:g["a"],VToolbar:y["a"]})}}]);
//# sourceMappingURL=crypto.85382bb3.js.map