(function(t){function e(e){for(var i,o,n=e[0],c=e[1],l=e[2],f=0,m=[];f<n.length;f++)o=n[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1bfe":function(t,e,a){},"2aa5":function(t){t.exports=JSON.parse('{"portada_imagen":"//live.staticflickr.com/65535/49511061106_f5087d2be5_k.jpg","datos-personales":{"nombre":"Alberto Feijoo Ibaseta","telefono":"652438090","email":"alfeiba@telecable.es"},"cameras":[{"id":"1","img":"https://raulgf92.github.io/ibaseta_homepge/public/img/pentax_k5_ii_01.jpg","url":"https://www.photographyblog.com/reviews/pentax_k5_ii_review"},{"id":"2","img":"https://raulgf92.github.io/ibaseta_homepge/public/img/pentax_k5_ii_08.jpg","url":"https://www.photographyblog.com/reviews/sigma_dp1s_review"},{"id":"3","img":"https://raulgf92.github.io/ibaseta_homepge/public/img/samsung_nx11_01.jpg","url":"https://www.photographyblog.com/reviews/samsung_nx11_review"},{"id":"4","img":"https://raulgf92.github.io/ibaseta_homepge/public/img/samsung_nx11_07.jpg","url":"https://www.photographyblog.com/reviews/samsung_nx11_review"},{"id":"5","img":"https://raulgf92.github.io/ibaseta_homepge/public/img/sigma_dp1s_01.jpg","url":"https://www.photographyblog.com/reviews/sigma_dp1s_review"},{"id":"6","img":"https://raulgf92.github.io/ibaseta_homepge/public/img/sigma_dp1s_06.jpg","url":"https://www.photographyblog.com/reviews/sigma_dp1s_review"}]}')},3101:function(t,e,a){"use strict";var i=a("8fd2"),s=a.n(i);s.a},"36d3":function(t,e,a){"use strict";var i=a("1bfe"),s=a.n(i);s.a},"49f8":function(t,e,a){var i={"./en.json":"edd4","./es.json":"a306"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="49f8"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("home-page"),a("main",{staticClass:"main"},[a("social-media",{attrs:{id:"social_media"}}),a("album",{attrs:{id:"album"}}),a("contact-info",{attrs:{id:"contact"}}),a("camera-carrousel",{attrs:{id:"cameras"}})],1),a("footer-page")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[t.showMenu?a("div",{staticClass:"mobile_menu"},[a("h1",[t._v("Menu")]),a("div",{staticClass:"close-menu",on:{click:function(e){t.showMenu=!1}}},[a("i",{staticClass:"fas fa-times"})]),a("div",{staticClass:"mobile_menu_inner"},[a("hr",{staticClass:"separator"}),a("ul",{staticClass:"menu-list"},[a("li",{staticClass:"menu-list-item",on:{click:function(e){return t.goTo("#album")}}},[t._v("Fotografias")]),a("li",{staticClass:"menu-list-item",on:{click:function(e){return t.goTo("#cameras")}}},[t._v("Mis Cámaras")]),a("li",{staticClass:"menu-list-item",on:{click:function(e){return t.goTo("#contact")}}},[t._v("Contacto")])])])]):t._e(),a("img",{staticClass:"home-page_background",attrs:{src:t.url}}),a("div",{staticClass:"home-page_inner"},[a("nav",[t._m(0),a("div",{staticClass:"right"},[a("ul",{staticClass:"menu-desktop"},[a("li",[a("a",{attrs:{href:"#album"},on:{click:function(e){t.showMenu=!1}}},[t._v("Fotografias")])]),a("li",[a("a",{attrs:{href:"#cameras"},on:{click:function(e){t.showMenu=!1}}},[t._v("Mis Cámaras")])]),a("li",[a("a",{attrs:{href:"#contact"},on:{click:function(e){t.showMenu=!1}}},[t._v("Contacto")])])]),a("div",{staticClass:"menu-mobile-icon",on:{click:function(e){t.showMenu=!0}}},[a("i",{staticClass:"fas fa-bars"})])])]),a("main",[a("div",{staticClass:"resume"},[a("h1",[t._v("Álbumes fotográficos")]),a("button",{on:{click:function(e){return t.onNovedadesClick()}}},[t._v("Novedades")])])]),a("footer")])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("label",{staticClass:"title"},[t._v("Alberto Feijoo Ibaseta")])])}],c=a("2aa5"),l={name:"HomePage",data:function(){return{url:c.portada_imagen,showMenu:!1}},computed:{},methods:{onNovedadesClick:function(){window.open("https://www.flickr.com/photos/ibaseta2/albums/72157656150903658","_blank")},goTo:function(t){this.showMenu=!1,window.location=t}}},u=l,f=(a("b239"),a("2877")),m=Object(f["a"])(u,o,n,!1,null,"3bc749b5",null),p=m.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-page"},[a("div",{staticClass:"footer-page_inner"},[t._m(0),a("div",{staticClass:"right"},[a("ul",[a("li",[t._v("@"+t._s(t.nombre)+" 2020")]),a("li",[t._v("License MIT")]),t._m(1)])])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("div",{staticClass:"inner"},[a("label",[t._v("Mapa Sitio")]),a("ul",[a("li",[a("a",{attrs:{href:"#album"}},[t._v("Fotografias")])]),a("li",[a("a",{attrs:{href:"#cameras"}},[t._v("Mis Cámaras")])]),a("li",[a("a",{attrs:{href:"#contact"}},[t._v("Contacto")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._v("Powered by "),a("a",{attrs:{href:"https://raulgf92.github.io/homepage/"}},[t._v("@raulgf92")])])}],g={name:"FooterPage",data:function(){return{nombre:"Nombre Apellidos Apellidos"}}},h=g,_=(a("3101"),Object(f["a"])(h,d,b,!1,null,"43fbdf28",null)),v=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"album"},[a("div",{staticClass:"album-inner"},[a("div",{staticClass:"album-grid"},t._l(t.getGridCells,(function(t){return a("album-cell",{key:t.id,attrs:{title:t.text,background:t.background,url:t.url}})})),1)])])},k=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"album-cell"},[a("div",{staticClass:"album-cell_inner",on:{click:function(e){return t.onClick()}}},[a("img",{attrs:{src:t.background}}),a("div",{staticClass:"title"},[a("label",[t._v(t._s(t.title))])])])])},j=[],x={name:"AlbumCell",props:{title:{type:String,required:!0},background:{type:String,required:!0},url:{type:String,required:!0}},methods:{onClick:function(){window.open(this.url,"_blank")}}},y=x,O=(a("36d3"),Object(f["a"])(y,C,j,!1,null,"08797c2c",null)),M=O.exports,E=a("b094"),S={name:"Album",components:{AlbumCell:M},computed:{getGridCells:function(){return E.album}}},P=S,$=(a("f960"),Object(f["a"])(P,w,k,!1,null,"576acc62",null)),A=$.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-media"},[a("div",{staticClass:"social-media-inner"},[a("div",{staticClass:"separator"}),a("div",{staticClass:"social-media-inner-horizontal"},[a("i",{staticClass:"fab fa-facebook"}),a("i",{staticClass:"fab fa-youtube"}),a("i",{staticClass:"fab fa-flickr"})]),a("div",{staticClass:"separator"})])])}],F={name:"SocialMedia"},L=F,I=(a("e3ef"),Object(f["a"])(L,N,T,!1,null,null,null)),J=I.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"camera-carrousel"},[t._m(0),a("br"),a("carousel",{staticClass:"carrousel",attrs:{autoplay:""}},t._l(t.getCameras,(function(e){return a("slide",{key:e.id},[a("img",{attrs:{src:e.img},on:{click:function(a){return t.onClick(e)}}})])})),1)],1)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h1",[t._v("Mis Cámaras")]),a("div",{staticStyle:{"min-width":"20px"}}),a("sub",{staticStyle:{color:"lightgray"}},[t._v("( Pulsa sobre ellas para conocer la especificación )")])])}],D=a("0a63"),G=a.n(D),z={name:"CameraCarrousel",components:{Carousel:D["Carousel"],Slide:D["Slide"]},computed:{getCameras:function(){return c.cameras}},methods:{onClick:function(t){window.open(t.url,"_blank")},getImg:function(t){return a("a261")(t)}}},B=z,H=(a("ce53"),Object(f["a"])(B,q,U,!1,null,null,null)),Z=H.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-info"},[a("div",{staticClass:"contact-info-left"},[a("div",{staticClass:"contact-info-left_inner"},[a("div",{staticClass:"contact-item"},[a("i",{staticClass:"fas fa-phone-square"}),a("span",[t._v("689235456")])]),a("br"),a("div",{staticClass:"contact-item"},[a("i",{staticClass:"fas fa-envelope"}),a("span",[t._v("alfeiba@telecable.es")])])])]),a("div",{staticClass:"contact-info-right"},[a("div",{staticClass:"contact-info-right_inner"},[a("iframe",{attrs:{src:"https://maps.google.com/maps?width=100%&height=600&hl=es&q=cand%C3%A1s+()&ie=UTF8&t=&z=14&iwloc=B&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])])])}],R={name:"ContactInfo"},V=R,W=(a("6157"),Object(f["a"])(V,K,Q,!1,null,"13c34b78",null)),X=W.exports,Y={name:"App",components:{HomePage:p,FooterPage:v,Album:A,SocialMedia:J,CameraCarrousel:Z,ContactInfo:X}},tt=Y,et=(a("5c0b"),Object(f["a"])(tt,s,r,!1,null,null,null)),at=et.exports,it=(a("4160"),a("d3b7"),a("ac1f"),a("466d"),a("159b"),a("ddb0"),a("a925"));function st(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var i=a.match(/([A-Za-z0-9-_]+)\./i);if(i&&i.length>1){var s=i[1];e[s]=t(a)}})),e}i["a"].use(it["a"]);var rt=new it["a"]({locale:"es",fallbackLocale:"en",messages:st()});i["a"].use(G.a),i["a"].config.productionTip=!1,new i["a"]({i18n:rt,render:function(t){return t(at)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},6157:function(t,e,a){"use strict";var i=a("d7aa"),s=a.n(i);s.a},6363:function(t,e,a){},"8fd2":function(t,e,a){},"9c0c":function(t,e,a){},a261:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="a261"},a306:function(t){t.exports=JSON.parse('{"message":"hello i18n !!"}')},b094:function(t){t.exports=JSON.parse('{"album":[{"id":1,"text":"Candás","background":"//live.staticflickr.com/7892/32369018157_690e313893_4k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":2,"text":"Carreño","background":"//live.staticflickr.com/5642/22902208296_ae4e1db79a_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634162344590"},{"id":3,"text":"Luanco","background":"//live.staticflickr.com/4829/46291863752_69804562e5_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":4,"text":"Aviles","background":"//live.staticflickr.com/4771/40706383832_f621a7fb70_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":5,"text":"Oviedo","background":"//live.staticflickr.com/4791/39854485705_ebc4980c5f_b.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":6,"text":"Gijón","background":"//live.staticflickr.com/65535/49511233512_0d5e6c89de_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":7,"text":"Lastres","background":"//live.staticflickr.com/7705/17170809785_0d09b92d34_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":8,"text":"Llanes","background":"//live.staticflickr.com/4847/31494024927_9e9d867b51_b.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":9,"text":"Luarca","background":"//live.staticflickr.com/467/31388491952_f74070b039_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":10,"text":"Asturias","background":"//live.staticflickr.com/2876/33026404953_a3817da058_h.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":11,"text":"España","background":"//live.staticflickr.com/7511/16227225166_dff2127f58_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":12,"text":"Bélgica","background":"//live.staticflickr.com/3736/9381463093_b56e5288ef_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":13,"text":"París","background":"//live.staticflickr.com/3855/15161284431_1b0ed25885_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":14,"text":"Murales","background":"//live.staticflickr.com/4513/37976758382_2b136d477e_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":15,"text":"Puertas","background":"//live.staticflickr.com/7296/9155462164_d876f9ae93_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"},{"id":16,"text":"Google Maps","background":"//live.staticflickr.com/7645/16330923304_4601c1b918_k.jpg","url":"https://www.flickr.com/photos/ibaseta2/albums/72157634157560153"}]}')},b239:function(t,e,a){"use strict";var i=a("ffce"),s=a.n(i);s.a},cd0b:function(t,e,a){},ce53:function(t,e,a){"use strict";var i=a("cd0b"),s=a.n(i);s.a},d7aa:function(t,e,a){},e3ef:function(t,e,a){"use strict";var i=a("e58f"),s=a.n(i);s.a},e58f:function(t,e,a){},edd4:function(t){t.exports=JSON.parse('{"message":"hello i18n !!"}')},f960:function(t,e,a){"use strict";var i=a("6363"),s=a.n(i);s.a},ffce:function(t,e,a){}});
//# sourceMappingURL=app.4cdf8263.js.map