(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f4fd947"],{1506:function(t,e,s){"use strict";var a=s("9ab4"),i=s("0c01"),n=s("06c2"),r=s("be31"),o=s("bd60"),l=s("2b0e"),c=s("2fe1");let p=class extends l["default"]{get pane(){return this.$store.state.panes.panes[this.paneId]}get name(){const t=this.$store.state.panes.panes[this.paneId].name;if(!t){if(!t&&this.$store.state.panes.panes[this.paneId].markets.length){const[,t]=Object(n["m"])(this.$store.state.panes.panes[this.paneId].markets[0]);return t+" - "+this.$store.state.panes.panes[this.paneId].type}return this.paneId}return t}set name(t){this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}async renamePane(){const t=await i["a"].prompt({action:"Rename",input:this.name});t!==this.name&&(this.name=t)}async resetPane(t){await this.close(),t||(t=JSON.parse(JSON.stringify(o["a"][this.$store.state.panes.panes[this.paneId].type].state))),await this.$store.dispatch("panes/resetPane",{id:this.paneId,data:t})}async getPreset(){return await r["a"].getState(this.paneId)}};p=Object(a["a"])([Object(c["b"])({props:{paneId:{required:!0,type:String}}})],p),e["a"]=p},ce8b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("Dialog",{staticClass:"pane-dialog",on:{clickOutside:t.close,mousedown:function(e){t.clickOutsideClose=!1},mouseup:function(e){t.clickOutsideClose=!0}},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"title -editable",domProps:{textContent:t._s(t.name)},on:{dblclick:t.renamePane}}),e("div",{staticClass:"column -center"})]},proxy:!0}])},[e("website-settings",{attrs:{paneId:t.paneId}})],1)},i=[],n=s("1ea0"),r=s("1506"),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"form-group mb16"},[e("label",[t._v(" Url "),e("i",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-info mr8",attrs:{title:"Some url might not work because of the cross domain policy in place for that website"}}),t.originalUrl?e("span",[t._v("("),e("a",{attrs:{href:t.originalUrl,target:"_blank"},domProps:{textContent:t._s(t.originalUrlTrimmed)}}),t._v(")")]):t._e()]),e("input",{ref:"input",staticClass:"form-control w-100",attrs:{type:"text",placeholder:"ex: https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&font_family=sans&header_bg_color=30343B&header_text_color=FFFFFF&link_color=0091C2&news_feed=trending&text_color=333333&title=Latest%20News"},domProps:{value:t.url},on:{change:function(e){return t.$store.dispatch(t.paneId+"/setUrl",e.target.value)}}})]),e("div",{staticClass:"form-group mb16"},[e("label",[t._v("Automatic reload "),e("i",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-info",attrs:{title:"Automaticaly reload the website after some time"}})]),e("dropdown-button",{staticClass:"-outline form-control -arrow",attrs:{value:t.reloadTimer,options:{0:"Never","10s":"every 10 seconds","1m":"every minute","15m":"every 15 minutes","30m":"every 30 minutes","1h":"every hour","2h":"every 2 hours","4h":"every 4 hours"},placeholder:"Never"},on:{input:function(e){return t.$store.commit(t.paneId+"/SET_RELOAD_TIMER",e)}}})],1),e("div",{staticClass:"form-group"},[e("label",{staticClass:"checkbox-control"},[e("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.interactive},on:{change:function(e){return t.$store.commit(t.paneId+"/TOGGLE_INTERACTIVE")}}}),e("div"),e("span",[t._v("Interactive "),e("i",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"left"},expression:"{ theme: 'left' }"}],staticClass:"icon-info",attrs:{title:"Allow interaction (click, scroll etc)<br>Keep it OFF to move the pane around with ease."}})])])])])},l=[],c=s("9ab4"),p=s("60a3"),d=s("7ab0"),u=s("3918");let m=class extends p["c"]{get originalUrlTrimmed(){return this.originalUrl.length<=33?this.originalUrl:this.originalUrl.slice(0,15)+"[...]"+this.originalUrl.substr(-15)}get url(){return this.$store.state[this.paneId].url}get interactive(){return this.$store.state[this.paneId].interactive}get reloadTimer(){return this.$store.state[this.paneId].reloadTimer}created(){this.originalUrl=this.$store.state[this.paneId].url}async mounted(){this.originalUrl||(await this.$nextTick(),this.$refs.input.focus())}};m=Object(c["a"])([Object(p["a"])({components:{Slider:d["a"],DropdownButton:u["a"]},name:"WebsiteSettings",props:{paneId:{type:String,required:!0}}})],m);var h=m,f=h,g=s("2877"),v=Object(g["a"])(f,o,l,!1,null,null,null),b=v.exports,y={components:{WebsiteSettings:b},mixins:[n["a"],r["a"]],data:()=>({renaming:!1}),methods:{}},_=y,w=Object(g["a"])(_,a,i,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2f4fd947.cfe5b6d9.js.map