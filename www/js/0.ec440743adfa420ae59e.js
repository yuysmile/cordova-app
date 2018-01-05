webpackJsonp([0],{28:function(t,e,o){"use strict";function i(t){o(41)}Object.defineProperty(e,"__esModule",{value:!0});var a=o(34),n=o(43),r=o(0),s=i,l=r(a.a,n.a,!1,s,null,null);e.default=l.exports},34:function(t,e,o){"use strict";function i(t,e,o){var i=o>0?1:-1;return{roll:Math.atan2(e,i*Math.sqrt(Math.pow(o,2)+.001*Math.pow(t,2)))*s,pitch:-Math.atan2(t,Math.sqrt(Math.pow(e,2)+Math.pow(o,2)))*s}}var a=o(6),n=a.dom.viewport,r=a.event.position,s=180/Math.PI;e.a={name:"index",components:{QLayout:a.QLayout,QToolbar:a.QToolbar,QToolbarTitle:a.QToolbarTitle,QBtn:a.QBtn,QIcon:a.QIcon,QList:a.QList,QListHeader:a.QListHeader,QItem:a.QItem,QItemSide:a.QItemSide,QItemMain:a.QItemMain},data:function(){return{orienting:window.DeviceOrientationEvent&&!this.$q.platform.is.desktop,rotating:window.DeviceMotionEvent&&!this.$q.platform.is.desktop,moveX:0,moveY:0,rotateY:0,rotateX:0}},computed:{position:function(){var t="rotateX("+this.rotateX+"deg) rotateY("+this.rotateY+"deg)";return{top:this.moveY+"px",left:this.moveX+"px","-webkit-transform":t,"-ms-transform":t,transform:t}}},methods:{launch:function(t){Object(a.openURL)(t)},move:function(t){var e=n(),o=e.width,i=e.height,a=r(t),s=a.top,l=a.left,c=i/2,m=o/2;this.moveX=(l-m)/m*-30,this.moveY=(s-c)/c*-30,this.rotateY=l/o*40*2-40,this.rotateX=-(s/i*40*2-40)},rotate:function(t){if(t.rotationRate&&null!==t.rotationRate.beta&&null!==t.rotationRate.gamma)this.rotateX=.7*t.rotationRate.beta,this.rotateY=-.7*t.rotationRate.gamma;else{var e=t.acceleration.x||t.accelerationIncludingGravity.x,o=t.acceleration.y||t.accelerationIncludingGravity.y,a=t.acceleration.z||t.accelerationIncludingGravity.z-9.81,n=i(e,o,a);this.rotateX=.7*n.roll,this.rotateY=-.7*n.pitch}},orient:function(t){null===t.beta||null===t.gamma?(window.removeEventListener("deviceorientation",this.orient,!1),this.orienting=!1,window.addEventListener("devicemotion",this.rotate,!1)):(this.rotateX=.7*t.beta,this.rotateY=-.7*t.gamma)}},mounted:function(){var t=this;this.$nextTick(function(){t.orienting?window.addEventListener("deviceorientation",t.orient,!1):t.rotating?window.addEventListener("devicemove",t.rotate,!1):document.addEventListener("mousemove",t.move)})},beforeDestroy:function(){this.orienting?window.removeEventListener("deviceorientation",this.orient,!1):this.rotating?window.removeEventListener("devicemove",this.rotate,!1):document.removeEventListener("mousemove",this.move)}}},41:function(t,e,o){var i=o(42);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(26)("1e3b51ca",i,!0)},42:function(t,e,o){e=t.exports=o(25)(void 0),e.push([t.i,".logo-container{width:255px;height:242px;-webkit-perspective:800px;perspective:800px;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}",""])},43:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{ref:"layout",attrs:{view:"lHh Lpr fff","left-class":{"bg-grey-2":!0}}},[i("q-toolbar",{staticClass:"glossy",attrs:{slot:"header"},slot:"header"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layout.toggleLeft()}}},[i("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),i("q-toolbar-title",[t._v("\n      Quasar App\n      "),i("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("R on Quasar v"+t._s(t.$q.version))])])],1),t._v(" "),i("div",{attrs:{slot:"left"},slot:"left"},[i("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[i("q-list-header",[t._v("Essential Links")]),t._v(" "),i("q-item",{on:{click:function(e){t.launch("http://quasar-framework.org")}}},[i("q-item-side",{attrs:{icon:"school"}}),t._v(" "),i("q-item-main",{attrs:{label:"Docs",sublabel:"quasar-framework.org"}})],1),t._v(" "),i("q-item",{on:{click:function(e){t.launch("http://forum.quasar-framework.org")}}},[i("q-item-side",{attrs:{icon:"record_voice_over"}}),t._v(" "),i("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),t._v(" "),i("q-item",{on:{click:function(e){t.launch("https://gitter.im/quasarframework/Lobby")}}},[i("q-item-side",{attrs:{icon:"chat"}}),t._v(" "),i("q-item-main",{attrs:{label:"Gitter Channel",sublabel:"Quasar Lobby"}})],1),t._v(" "),i("q-item",{on:{click:function(e){t.launch("https://twitter.com/quasarframework")}}},[i("q-item-side",{attrs:{icon:"rss feed"}}),t._v(" "),i("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1),t._v(" "),i("div",{staticClass:"layout-padding logo-container non-selectable no-pointer-events"},[i("div",{staticClass:"logo",style:t.position},[i("img",{attrs:{src:o(44)}})])])],1)},a=[],n={render:i,staticRenderFns:a};e.a=n},44:function(t,e,o){t.exports=o.p+"img/quasar-logo-full.c3e8865.svg"}});