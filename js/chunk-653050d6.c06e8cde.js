(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-653050d6"],{"0be0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{staticClass:"pane-dialog",on:{clickOutside:t.close,mousedown:function(e){t.clickOutsideClose=!1},mouseup:function(e){t.clickOutsideClose=!0}},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"title -editable",domProps:{textContent:t._s(t.name)},on:{dblclick:t.renamePane}}),n("div",{staticClass:"column -center"})]},proxy:!0}])},[n("prices-settings",{attrs:{paneId:t.paneId}})],1)},o=[],s=n("1ea0"),i=n("1506"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-group mb8"},[n("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"left"},expression:"{ placement: 'left' }"}],staticClass:"checkbox-control",attrs:{title:"ex: BTC-USD"}},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.showPairs},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_PAIRS")}}}),n("div"),n("span",[t._v("Symbols")])])]),n("div",{staticClass:"form-group mb8"},[n("label",{staticClass:"checkbox-control"},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.showVolume},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_VOLUME")}}}),n("div"),n("span",[t._v("Volume")])])]),n("div",{staticClass:"form-group mb8"},[n("label",{staticClass:"checkbox-control"},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.showVolumeDelta},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_VOLUME_DELTA")}}}),n("div"),n("span",[t._v("Volume Δ")])])]),n("div",{staticClass:"form-group mb8"},[n("label",{staticClass:"checkbox-control"},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.showPrice},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_PRICE")}}}),n("div"),n("span",[t._v("Price")])])]),n("div",{staticClass:"form-group mb8"},[n("label",{staticClass:"checkbox-control"},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.showChange},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_CHANGE")}}}),n("div"),n("span",[t._v("Change %")])])]),n("div",{staticClass:"form-group mb8"},[n("label",{staticClass:"checkbox-control"},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.animateSort},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_SORT_ANIMATION")}}}),n("div"),n("span",[t._v("Animation")])])]),n("div",{staticClass:"form-group mb8"},[n("label",[t._v("Period "),n("span",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-info",attrs:{title:"Reset stats after certain time"}})]),n("dropdown-button",{staticClass:"-outline form-control -arrow w-100",attrs:{options:{0:"No period",1:"1m",15:"15m",30:"30m",60:"1h",240:"4h"},placeholder:"Period"},on:{input:function(e){return t.$store.commit(t.paneId+"/SET_PERIOD",e)}},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})],1),n("div",{staticClass:"form-group mb8"},[n("label",[t._v("Sort by")]),n("div",{staticClass:"column"},[n("prices-sort-dropdown",{staticClass:"-outline form-control -arrow flex-grow-1",attrs:{"pane-id":t.paneId}}),t.sortType?n("label",{staticClass:"checkbox-control -sort ml8",attrs:{title:1===t.sortOrder?"ASC":"DESC"}},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:1===t.sortOrder},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_SORT_ORDER")}}}),n("div",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{title:"Switch order"}})]):t._e()],1)])])},c=[],u=n("9ab4"),l=n("60a3"),p=n("92b4"),f=n("3918");function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function w(t){var e=k();return function(){var n,r=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){if(e&&("object"===d(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var C=function(t){b(n,t);var e=w(n);function n(){return h(this,n),e.apply(this,arguments)}return y(n,[{key:"showPairs",get:function(){return this.$store.state[this.paneId].showPairs}},{key:"showVolume",get:function(){return this.$store.state[this.paneId].showVolume}},{key:"showPrice",get:function(){return this.$store.state[this.paneId].showPrice}},{key:"showVolumeDelta",get:function(){return this.$store.state[this.paneId].showVolumeDelta}},{key:"period",get:function(){return this.$store.state[this.paneId].period}},{key:"showChange",get:function(){return this.$store.state[this.paneId].showChange}},{key:"animateSort",get:function(){return this.$store.state[this.paneId].animateSort}},{key:"sortType",get:function(){return this.$store.state[this.paneId].sortType}},{key:"sortOrder",get:function(){return this.$store.state[this.paneId].sortOrder}},{key:"selectSortType",value:function(t){t===this.sortType&&this.$store.commit(this.paneId+"/TOGGLE_SORT_ORDER"),this.$store.commit(this.paneId+"/SET_SORT_TYPE",t)}}]),n}(l["c"]);C=Object(u["a"])([Object(l["a"])({components:{PricesSortDropdown:p["a"],DropdownButton:f["a"]},name:"PricesSettings",props:{paneId:{type:String,required:!0}}})],C);var S=C,I=S,P=n("2877"),E=Object(P["a"])(I,a,c,!1,null,null,null),T=E.exports,$={components:{PricesSettings:T},mixins:[s["a"],i["a"]],data:function(){return{renaming:!1}},methods:{}},x=$,j=Object(P["a"])(x,r,o,!1,null,null,null);e["default"]=j.exports},1506:function(t,e,n){"use strict";var r=n("9ab4"),o=n("0c01"),s=n("06c2"),i=n("be31"),a=n("bd60"),c=n("2b0e"),u=n("2fe1");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){return y(t)||m(t,e)||d(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,s=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0)if(s.push(r.value),e&&s.length===e)break}catch(c){a=!0,o=c}finally{try{i||null==n["return"]||n["return"]()}finally{if(a)throw o}}return s}}function y(t){if(Array.isArray(t))return t}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function k(t){var e=S();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){if(e&&("object"===l(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var P=function(t){g(n,t);var e=k(n);function n(){return b(this,n),e.apply(this,arguments)}return w(n,[{key:"pane",get:function(){return this.$store.state.panes.panes[this.paneId]}},{key:"name",get:function(){var t=this.$store.state.panes.panes[this.paneId].name;if(!t){if(!t&&this.$store.state.panes.panes[this.paneId].markets.length){var e=Object(s["m"])(this.$store.state.panes.panes[this.paneId].markets[0]),n=p(e,2),r=n[1];return r+" - "+this.$store.state.panes.panes[this.paneId].type}return this.paneId}return t},set:function(t){this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}},{key:"renamePane",value:async function(){var t=await o["a"].prompt({action:"Rename",input:this.name});t!==this.name&&(this.name=t)}},{key:"resetPane",value:async function(t){await this.close(),t||(t=JSON.parse(JSON.stringify(a["a"][this.$store.state.panes.panes[this.paneId].type].state))),await this.$store.dispatch("panes/resetPane",{id:this.paneId,data:t})}},{key:"getPreset",value:async function(){return await i["a"].getState(this.paneId)}}]),n}(c["default"]);P=Object(r["a"])([Object(u["b"])({props:{paneId:{required:!0,type:String}}})],P),e["a"]=P}}]);
//# sourceMappingURL=chunk-653050d6.c06e8cde.js.map