(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10024d20"],{"0c11":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{staticClass:"pane-dialog",on:{clickOutside:t.close},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"title -editable",domProps:{textContent:t._s(t.name)},on:{dblclick:t.renamePane}}),n("div",{staticClass:"column -center"})]},proxy:!0}])},[n("stats-settings",{attrs:{paneId:t.paneId}})],1)},o=[],a=n("1ea0"),i=n("1506"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-stats settings-section"},[n("div",{staticClass:"column mb16"},[n("div",{staticClass:"form-group -fill"},[n("label",[t._v("Window "),n("i",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-info",attrs:{title:"Interval in which data is summed (ex: 1m)"}})]),n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Window (minutes)"},domProps:{value:t.statsWindowStringified},on:{change:function(e){return t.$store.commit(t.paneId+"/SET_WINDOW",e.target.value)}}})]),n("div",{staticClass:"form-group -tight"},[n("label",{attrs:{for:""}},[t._v("Graph")]),n("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"bottom"},expression:"{ placement: 'bottom' }"}],staticClass:"checkbox-control checkbox-control-input flex-right",attrs:{title:"Enable graph"}},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.enableChart},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_CHART",e.target.checked)}}}),n("div")])])]),n("div",{staticClass:"column"},[n("i",{staticClass:"icon-bucket -center mr4"}),n("span",{staticClass:"-fill"},[t._v("BUCKETS ("+t._s(t.buckets.length)+")")]),n("a",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"-nowrap -text",attrs:{href:"javascript:void(0);",title:"Add a stat"},on:{click:function(e){return t.$store.dispatch(t.paneId+"/createBucket")}}},[t._v(" Add "),n("i",{staticClass:"icon-plus ml4 -lower"})])]),t._l(t.buckets,(function(e){return n("div",{key:e.id,staticClass:"column mt8"},[n("div",{staticClass:"form-group -tight"},[n("label",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"bottom"},expression:"{ placement: 'bottom' }"}],staticClass:"checkbox-control checkbox-control-input flex-right",attrs:{title:"Enable bucket"}},[n("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:e.enabled},on:{change:function(n){return t.$store.dispatch(t.paneId+"/updateBucket",{id:e.id,prop:"enabled",value:n.target.checked})}}}),n("div")])]),n("div",{staticClass:"form-group -fill -center"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"form-group -tight"},[n("button",{staticClass:"btn -green",on:{click:function(n){return t.openStat(e.id)}}},[n("i",{staticClass:"icon-edit"})])])])}))],2)},c=[],u=n("9ab4"),l=n("0c01"),p=n("2818"),f=n("60a3"),d=n("28f3");function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){var e=S();return function(){var n,r=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){if(e&&("object"===y(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var C=function(t){v(n,t);var e=w(n);function n(){return h(this,n),e.apply(this,arguments)}return m(n,[{key:"enableChart",get:function(){return this.$store.state[this.paneId].enableChart}},{key:"buckets",get:function(){var t=this;return Object.keys(this.$store.state[this.paneId].buckets).map((function(e){return t.$store.state[t.paneId].buckets[e]}))}},{key:"window",get:function(){return this.$store.state[this.paneId].window}},{key:"statsWindowStringified",get:function(){return Object(d["n"])(this.window||0)}},{key:"openStat",value:function(t){l["a"].open(p["a"],{bucketId:t,paneId:this.paneId})}}]),n}(f["c"]);C=Object(u["a"])([Object(f["a"])({name:"StatsSettings",props:{paneId:{type:String,required:!0}}})],C);var I=C,j=I,x=n("2877"),P=Object(x["a"])(j,s,c,!1,null,null,null),E=P.exports,$={components:{StatsSettings:E},mixins:[a["a"],i["a"]],data:function(){return{renaming:!1}},methods:{}},R=$,T=Object(x["a"])(R,r,o,!1,null,null,null);e["default"]=T.exports},1506:function(t,e,n){"use strict";var r=n("9ab4"),o=n("0c01"),a=n("06c2"),i=n("be31"),s=n("bd60"),c=n("2b0e"),u=n("2fe1");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){return b(t)||h(t,e)||d(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"===typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),e&&a.length===e)break}catch(c){s=!0,o=c}finally{try{i||null==n["return"]||n["return"]()}finally{if(s)throw o}}return a}}function b(t){if(Array.isArray(t))return t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function w(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function O(t){var e=C();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){if(e&&("object"===l(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var j=function(t){w(n,t);var e=O(n);function n(){return m(this,n),e.apply(this,arguments)}return g(n,[{key:"pane",get:function(){return this.$store.state.panes.panes[this.paneId]}},{key:"name",get:function(){var t=this.$store.state.panes.panes[this.paneId].name;if(!t){if(!t&&this.$store.state.panes.panes[this.paneId].markets.length){var e=Object(a["m"])(this.$store.state.panes.panes[this.paneId].markets[0]),n=p(e,2),r=n[1];return r+" - "+this.$store.state.panes.panes[this.paneId].type}return this.paneId}return t},set:function(t){this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}},{key:"renamePane",value:async function(){var t=await o["a"].prompt({action:"Rename",input:this.name});t!==this.name&&(this.name=t)}},{key:"resetPane",value:async function(t){await this.close(),t||(t=JSON.parse(JSON.stringify(s["a"][this.$store.state.panes.panes[this.paneId].type].state))),await this.$store.dispatch("panes/resetPane",{id:this.paneId,data:t})}},{key:"getPreset",value:async function(){return await i["a"].getState(this.paneId)}}]),n}(c["default"]);j=Object(r["a"])([Object(u["b"])({props:{paneId:{required:!0,type:String}}})],j),e["a"]=j}}]);
//# sourceMappingURL=chunk-10024d20.8ebea174.js.map