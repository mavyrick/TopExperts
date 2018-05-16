webpackJsonp([4],{87:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"__hotReload",function(){return F});var n=r(0);var s=r.n(n);var i=r(1);var a=r.n(i);var o=r(106);var l=r(29);var c=r(27);var p=r(18);var u=r(6);var m=r(208);var f=r(977);var d=r(795);var v=r(988);var g=r(76);var _=r(17);var h=r(10);var y=r(117);var b=r(990);var w=r(991);var E=r(993);var x=r.n(E);var O=r(994);var k=r(125);var N=r.n(k);var P=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var R=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s))e[s]=t[s]}return e};var j=this&&this.__decorate||function(e,t,r,n){var s=arguments.length,i=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)if(a=e[o])i=(s<3?a(i):s>3?a(t,r,i):a(t,r))||i;return s>3&&i&&Object.defineProperty(t,r,i),i};var L=r(9);var A=function(e){return n["createElement"]("span",{className:E["renderFilterAccent"]},e)};var T=function(e,t){return!e?n["createElement"]("div",null):n["createElement"]("div",{className:E["filtersDescription"]},n["createElement"](c["a"],{message:o["a"].filters.filterDescription[t],sector:A(o["a"].sectors[e.get("sector")]),period:A(o["a"].periods[e.get("period")]),asBenchmark:e.get("benchmark")==="none"?" ":o["a"].filters.asBenchmark,benchmark:A(o["a"].benchmarks[e.get("benchmark")].replace("{personType}",""))}))};var B=function(e,t,r){y["a"].getTopExperts({type:t,period:e.get("period"),benchmark:e.get("benchmark"),sector:e.get("sector"),hasServerRendering:r()})};var W=function(e){P(t,e);function t(){var t=e!==null&&e.apply(this,arguments)||this;t.state={isWindowEndReached:false};t.areFiltersAtDefaultState=function(e){if(e===void 0){e=t.props}var r=e.expertsList.get("filters");return L.is(r,k["defaultFiltersState"])};t.scrollHandler=function(){var e=t.state.isWindowEndReached;var r=t.refs.divLimit;var n=r.getBoundingClientRect();var s=n.top<window.innerHeight&&n.top;if(s!==e){t.setState({isWindowEndReached:s})}};t.isBeingRestricted=function(e){if(e===void 0){e=t.props}var r=e.route.type,n=e.hasPayed;if(r!=="analyst"&&r!=="insider"){return false}var s=["insider","analyst"];if(n){return false}if(r==="insider"){return true}return!t.areFiltersAtDefaultState(e)};t.renderLoading=function(){return n["createElement"]("div",{className:E["loaderWrapper"]},n["createElement"]("img",{className:E["loader"],src:Object(p["f"])("loader")}))};return t}t.prototype.componentDidMount=function(){this.sub=Object(g["a"])("scroll").subscribe(this.scrollHandler);B(this.getFilters(),this.props.route.type,this.props.hasServerRendering)};t.prototype.componentWillUnmount=function(){this.sub.dispose()};t.prototype.getFilters=function(e){if(e===void 0){e=this.props}return this.isBeingRestricted(e)?k["defaultFiltersState"]:e.expertsList.get("filters")};t.prototype.shouldGetData=function(e,t){if(t===void 0){t=this.props}if(t.expertsList.get("fetchstate")===h["a"].Loading){return false}if(e===t){return false}var r=!L.is(this.getFilters(e),this.getFilters(t));var n=e.route.type!==t.route.type;return r||n};t.prototype.componentDidUpdate=function(e){var t=e.location.url;var r=this.props.location.url;if(this.shouldGetData(e)){B(this.getFilters(),this.props.route.type,this.props.hasServerRendering)}};t.prototype.render=function(){var e=this.props.route,t=e.type,r=e.name;var s=this.props.auth;var a=Object(p["p"])(this,["props","auth","experts"]);var m=this.props.expertsList||null;var g=l["a"].getIn(["filters","groupsForType",t]);var _=m&&m.get("filters");var h=this.isBeingRestricted();var y=m&&m.getIn(["experts",t]);var b=m&&m.get("stats");var x=m&&m.get("isFiltersOpened");var k=o["a"].expertsList.banners[t];var N=this.state.isWindowEndReached;var P=m.getIn(["filters","sector"]);var j=!y||y.size===0;return n["createElement"]("div",{className:i("view-container",(L={},L[E["isBeingRestricted"]]=h,L))},n["createElement"](f["a"],{auth:s,pageName:r,groups:g,state:_,scrollableFixedLimit:N,disable:j,personType:t,banners:n["createElement"]("div",{style:{textAlign:"center",width:"238px",background:"#414243",paddingBottom:"50px"}},k&&n["createElement"]("div",{className:E["banners"]},k.map(function(e,t){return n["createElement"]("div",{key:t,className:E["banner"]},typeof e==="function"?n["createElement"](e,{isShown:x||u["i"].test("(min-width: 1235px)")}):n["createElement"](v["a"],R({},e,{href:e.href||e.to,pageName:e.title.replace(/\s+/g,"-").toLowerCase()})))}))),isOpened:x},n["createElement"]("div",null,n["createElement"]("h1",{className:E["h1"]},n["createElement"](c["a"],{message:o["a"].expertsList.title,expertsLimit:o["a"].topExpertsLimit,expertType:o["a"].expertsList.expertType[t]})),n["createElement"]("h2",{className:i(E["h2"],(A={},A[E["isBeingRestricted"]]=h,A))},n["createElement"](c["a"],{message:o["a"].expertsList.desc[t]})),T(_,t),h?n["createElement"](O["a"],{sector:P,type:t}):j?this.renderLoading():n["createElement"](w["a"],{auth:s,experts:y,subscriptions:a,stats:b}))),n["createElement"]("div",{className:E["divLimit"],ref:"divLimit"},n["createElement"](d["a"],null)));var L,A};t=j([Object(_["a"])(function(e,t){return{hasPayed:e.auth.hasPayed}}),b["a"],Object(m["a"])()],t);return t}(n["Component"]);t["default"]=W;var F=true},977:function(e,t,r){"use strict";var n=r(978);r.d(t,"a",function(){return n["a"]});var s=true},978:function(e,t,r){"use strict";var n=r(0);var s=r.n(n);var i=r(8);var a=r.n(i);var o=r(3);var l=r(979);var c=r(987);var p=r.n(c);var u=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var m=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s))e[s]=t[s]}return e};var f=function(e){u(t,e);function t(){var t=e!==null&&e.apply(this,arguments)||this;t.static={children:i["any"].isRequired};return t}t.prototype.render=function(){var e=this.props,t=e.children,r=e.theme;return n["createElement"]("div",{className:c["view"]+" "+c["view-"+r]},n["createElement"]("div",{className:c["innerView"]},n["createElement"](l["a"],m({},this.props)),n["createElement"]("div",{className:c["page"]+" "+c["page-"+r]},t)))};t.defaultProps={theme:"dark"};return t}(o["a"]);t["a"]=f;var d=true},979:function(e,t,r){"use strict";var n=r(8);var s=r.n(n);var i=r(0);var a=r.n(i);var o=r(106);var l=r(117);var c=r(9);var p=r.n(c);var u=r(980);var m=r(27);var f=r(667);var d=r(3);var v=r(85);var g=r(1);var _=r.n(g);var h=r(124);var y=r(22);var b=r(15);var w=r(984);var E=r(51);var x=r(6);var O=r(986);var k=r.n(O);var N=r(18);var P=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var R=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s))e[s]=t[s]}return e};var j=this&&this.__decorate||function(e,t,r,n){var s=arguments.length,i=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)if(a=e[o])i=(s<3?a(i):s>3?a(t,r,i):a(t,r))||i;return s>3&&i&&Object.defineProperty(t,r,i),i};var L=function(e){P(t,e);function t(t){var r=e.call(this,t)||this;r.toggleFilters=function(){if(r.filterTransition){return}l["a"].toggleFilters();if(r.state.filtersOpen){r.cancelFiltersOpen=setTimeout(function(){r.setState({filtersOpen:false})},250)}else{clearTimeout(r.cancelFiltersOpen);r.setState({filtersOpen:true})}r.filterTransition=true;setTimeout(function(){return r.filterTransition=false},250)};r.state={filtersOpen:false};return r}t.prototype.componentDidUpdate=function(){setTimeout(h["b"],500)};t.prototype.handleOutsideClick=function(e){var t=this;return function(e){return t.refs.outsideClicker!==e.target?t.toggleFilters():null}};t.prototype.toggleFixedApp=function(e){var t=x["i"].test("(max-width: "+v["a"]+"px)");if(t){Object(E["d"])(e)}};t.prototype.render=function(e){var t=e===void 0?this.props:e,r=t.groups,n=t.state,s=t.auth,a=t.disable,o=t.isAnalystPage,l=t.personType,c=t.banners,p=t.theme,u=t.title,m=t.title2,f=t.showRankingGlossary,d=t.isOpened;var v=this.state.filtersOpen;return i["createElement"]("div",{ref:"outsideClicker",onClick:this.handleOutsideClick(d),className:g(O["wrapper"],O["wrapper-"+p],(_={},_[O["wrapperActive"]]=d,_))},i["createElement"](A,R({},this.props,{filtersOpen:v})));var _};return t}(d["a"]);L.propTypes={banners:n["any"],disable:n["bool"],groups:n["instanceOf"](c["List"]),pageName:n["string"].isRequired,isOpened:n["bool"],isAnalystPage:n["bool"],personType:n["string"].isRequired,theme:n["string"],showRankingGlossary:n["bool"],title:n["string"],title2:n["string"],state:n["instanceOf"](c["Map"]).isRequired};L.defaultProps={theme:"dark"};t["a"]=L;var A=function(e){P(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.render=function(e){var t=e===void 0?this.props:e,r=t.groups,n=t.state,s=t.auth,a=t.disable,l=t.filtersOpen,c=t.isAnalystPage,p=t.personType,d=t.banners,v=t.theme,_=t.title,h=t.pageName,w=t.title2,E=t.showRankingGlossary,x=t.isOpened;return i["createElement"]("div",null,i["createElement"]("div",{className:g(O["btnWrapper"],(k={},k[O["btnWrapperActive"]]=x,k))},i["createElement"]("button",{className:O["outsideClickerButton"],onClick:this.toggleFilters},i["createElement"]("img",{src:"/new-images/filters-tab.png",className:O["imgBtn"]}))),i["createElement"]("div",{className:O["formWrapper"]+" "+O["formWrapper-"+v]},i["createElement"]("button",{className:O["closeButton"],onClick:this.toggleFilters},Object(y["a"])("arrowFat","svg",{dim:[15,15],className:O["svg"]})),i["createElement"]("form",{className:g(O["form"],(P={},P[O["filtersOpen"]]=l,P))},!c&&i["createElement"](b["a"],{to:Object(N["a"])("topExperts"),onClick:function(){return Object(f["a"])("clickedBackToTopExperts",h)},className:O["back"]},i["createElement"]("img",{className:O["backImg"],src:Object(N["f"])("back")}),i["createElement"](m["a"],{message:o["a"].filters.back,topExpertsLimit:o["a"].topExpertsLimit})),i["createElement"]("div",{className:O["innerBase"]},i["createElement"]("div",{className:O["title"]+" "+O["title-"+v]},_||o["a"].filters[p==="hedgefund"?"titleInfo":"title"]),w&&i["createElement"]("div",{className:O["title-2"]},w),r.map(function(e){return i["createElement"](u["a"],{auth:s,pageName:h,id:e,theme:v,disable:a,personType:p,key:e,state:n})}))),E&&i["createElement"]("div",{className:O["ranking-glossary"]},null,i["createElement"]("a",{href:"/glossary/h/how-are-experts-ranked/",onClick:function(){return Object(f["a"])("clickedGlossaryLink")},target:"_blank"},o["a"].filters.howAreRanked)),d));var k,P};t=j([w["a"]],t);return t}(d["a"]);var T=true},980:function(e,t,r){"use strict";var n=r(8);var s=r.n(n);var i=r(0);var a=r.n(i);var o=r(106);var l=r(29);var c=r(9);var p=r.n(c);var u=r(981);var m=r(20);var f=r(667);var d=r(3);var v=r(983);var g=r.n(v);var _=r(18);var h=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var y=function(e){h(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.render=function(e){var t=e===void 0?this.props:e,r=t.id,n=t.personType,s=t.disable,a=t.auth,c=t.pageName,p=t.theme,d=t.state;var g=l["a"].getIn(["filters","groups",r,"fieldsets"]);var h=l["a"].getIn(["filters","groups",r,"plan"]);return i["createElement"]("div",null,i["createElement"]("div",{className:v["title"]+" "+v["title-"+p]},o["a"].filters.groups[r]),g.map(function(e){return i["createElement"](u["a"],{id:e,disable:s,auth:a,pageName:c,group:e||r,theme:p,personType:n,key:e,state:d&&d.get(e)})}),!Object(m["isAllowed"])("filtersGroup."+r,a)&&false?i["createElement"]("div",{className:v["badgeWrapper"]},i["createElement"]("a",{href:Object(_["a"])("plans"),onClick:function(e){Object(f["a"])("clickedPlanBadge",{pageName:c,badge:h});if(Object(m["userPlanName"])(a)==="open")return;e.preventDefault();Object(m["promote"])("filtersGroup."+r,a)},className:v["badge"]+" "+v[h]},i["createElement"]("img",{className:v["whiteLock"],src:Object(_["f"])("whiteLock")}),o["a"].plans[h])):null)};return t}(d["a"]);y.propTypes={disable:n["bool"],id:n["string"].isRequired,personType:n["string"].isRequired,state:n["instanceOf"](c["Map"]).isRequired,theme:n["string"]};y.contextTypes={actions:n["any"]};t["a"]=y;var b=true},981:function(e,t,r){"use strict";var n=r(8);var s=r.n(n);var i=r(0);var a=r.n(i);var o=r(9);var l=r.n(o);var c=r(1);var p=r.n(c);var u=r(106);var m=r(29);var f=r(20);var d=r(117);var v=r(3);var g=r(27);var _=r(204);var h=r(120);var y=r(667);var b=r(982);var w=r.n(b);var E=r(18);var x=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var O=function(e,t){return e[t]};var k=function(e,t){return new o["Map"](t.reduce(O,e)).entrySeq()};var N=function(e,t,r){return r===t};var P=function(e,t,r,n,s){return function(i){var a=i.target;Object(y["a"])("clickedFilterOption",{pageName:s,id:e,option:a.value});var o="filtersGroup."+r;var l=s+".filtersGroup."+r;var c=Object(f["analyticsNames"])(l);var p=c==="top-analysts-choose-sector";h["a"].log(l,c);if(p){t.changeFilter({id:e,val:a.value});Object(f["invokeSetLastPromotionTrigger"])(c)}else if(Object(f["isAllowed"])(o,n)){t.changeFilter({id:e,val:a.value})}else{Object(f["promote"])(o,n,c);return false}}};var R=function(e,t,r,n,s,a,o,l){return function(p){var u=p[0],f=p[1];return i["createElement"]("label",{key:e+"_"+u,className:c(b["label"],(d={},d[b["labelActive"]]=N(e,u,t),d))},i["createElement"]("input",{className:b["input"],onChange:P(e,r,n,a,o),name:e,disabled:s,value:u,type:m["a"].getIn(["filters","fieldsets",e,"type"]),checked:N(e,u,t)}),i["createElement"]("img",{className:b["inputAlt"],src:Object(E["f"])(N(e,u,t)?"activeRadio":"radio")}),i["createElement"]("span",null,i["createElement"](g["a"],{message:f,personType:i["createElement"]("span",{className:b["person-type"]},l[0].toUpperCase()+l.substr(1)+"'s ")})));var d}};var j=function(e){return e?function(t,r){var n=t[0],s=t[1];var i=r[0],a=r[1];return e.indexOf(n)-e.indexOf(i)}:function(){return-1}};var L=function(e){return i["createElement"]("p",{className:b["infoText"]},u["a"].filters.fieldsets[e].info)};var A=function(e,t,r,n,s,i,a,o,l){if(e.get("type")==="info"){return L(t)}var c=m["a"].getIn(["order",t]);return k(u["a"],e.get("fields")).filter(function(e){var t=e[0];return!c||c.includes(t)}).sort(j(c)).map(R(t,r,n,s,i,a,o,l)).toArray()};var T=function(e){x(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.render=function(e){var t=e===void 0?this.props:e,r=t.group,n=t.id,s=t.auth,a=t.disable,o=t.theme,l=t.pageName,p=t.personType,f=t.state;var v=u["a"].filters.fieldsets[n];var g=v.label;var h=v.tooltip&&v.tooltip[p];var y=m["a"].getIn(["filters","fieldsets",n]);return i["createElement"]("fieldset",{className:b["fieldset"]},g?i["createElement"]("legend",{className:c(b["legend"],b["legend-"+o],b["legend."+y.get("type")])},i["createElement"]("div",{className:b["info"]},h?i["createElement"](_["b"],{tooltip:h}):null),g):null,A(y,n,f,d["a"],r,a,s,l,p))};return t}(v["a"]);T.propTypes={disable:n["bool"],id:n["string"].isRequired,theme:n["string"],group:n["string"].isRequired,personType:n["string"].isRequired,state:n["string"]};t["a"]=T;var B=true},982:function(e,t){e.exports={fieldset:"client-components-sr-components-filtersfieldset__fieldset",legend:"client-components-sr-components-filtersfieldset__legend","legend-dark":"client-components-sr-components-filtersfieldset__legend-dark",legendDark:"client-components-sr-components-filtersfieldset__legend-dark","legend-light":"client-components-sr-components-filtersfieldset__legend-light",legendLight:"client-components-sr-components-filtersfieldset__legend-light",info:"client-components-sr-components-filtersfieldset__info",label:"client-components-sr-components-filtersfieldset__label",labelActive:"client-components-sr-components-filtersfieldset__labelActive",input:"client-components-sr-components-filtersfieldset__input",inputAlt:"client-components-sr-components-filtersfieldset__inputAlt",infoText:"client-components-sr-components-filtersfieldset__infoText"}},983:function(e,t){e.exports={title:"client-components-sr-components-filtersgroup__title","title-dark":"client-components-sr-components-filtersgroup__title-dark",titleDark:"client-components-sr-components-filtersgroup__title-dark","title-light":"client-components-sr-components-filtersgroup__title-light",titleLight:"client-components-sr-components-filtersgroup__title-light",inputAlt:"client-components-sr-components-filtersgroup__inputAlt",badgeWrapper:"client-components-sr-components-filtersgroup__badgeWrapper",badge:"client-components-sr-components-filtersgroup__badge",whiteLock:"client-components-sr-components-filtersgroup__whiteLock",premium:"client-components-sr-components-filtersgroup__premium",ultimate:"client-components-sr-components-filtersgroup__ultimate"}},984:function(e,t,r){"use strict";var n=r(985);r.d(t,"a",function(){return n["a"]});var s=true},985:function(e,t,r){"use strict";var n=r(0);var s=r.n(n);var i=r(3);var a=r(77);var o=r.n(a);var l=r(76);var c=r(1);var p=r.n(c);var u=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var m=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s))e[s]=t[s]}return e};t["a"]=function(e){return function(t){u(r,t);function r(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=t.apply(this,e)||this;n.lastTop=0;n.scrollHandler=function(){var e=n.props.scrollableFixedLimit;var t=n.refs.scrollableFixed;var r=n.state,s=r.isFixed,i=r.isOut,o=r.top,l=r.hasScrolledUp,c=r.isAboveElementHeight;var p=n.refs.scrollableFixed.getBoundingClientRect().height;if(a["msie"]&&a["version"]<=9)return;var u=n.lastTop>window.pageYOffset;n.lastTop=window.pageYOffset;var m=t.getBoundingClientRect();var f=e;var d=u&&m.top<0&&!o;var v=window.pageYOffset+window.innerHeight>p+145;var g=!(window.pageYOffset<60)&&!f;var _=p>window.innerHeight-100;if(s!==g||i!==f||l!==u||v!==c){var h=110;n.setState({isTooTall:_,isAboveElementHeight:v,isFixed:v&&!f&&(!_||_&&g),top:i?o:h,isOut:f,hasScrolledUp:u})}};n.style=function(){var e=n.state,t=e.isFixed,r=e.isTooTall,s=e.top,i=e.isOut;var a=n.props.scrollableFixedLimit;var o={};if(t){o.position="fixed";if(r){if(i){o.bottom=window.innerHeight-a}else{o.bottom=12}}else{o.top=s}}return o};n.state={isFixed:false,top:0,isOut:false,transition:"0.25s all ease-in-out",hasScrolledUp:false,elementHeight:0,isAboveElementHeight:false,isTooTall:false};return n}r.prototype.componentDidMount=function(){this.sub=Object(l["a"])("scroll").subscribe(this.scrollHandler)};r.prototype.componentWillUnmount=function(){this.sub.dispose()};r.prototype.render=function(t){var r=t===void 0?this.state:t,s=r.isFixed,i=r.isOut,a=r.hasScrolledUp;return n["createElement"]("div",{className:c("scrollableFixed",{isFixed:s,isOut:i,hasScrolledUp:a}),ref:"scrollableFixed",style:this.style()},n["createElement"](e,m({},this.props)))};return r}(i["a"])};var f=true},986:function(e,t){e.exports={wrapper:"client-components-sr-components-filters__wrapper",btnWrapper:"client-components-sr-components-filters__btnWrapper",outsideClickerButton:"client-components-sr-components-filters__outsideClickerButton",imgBtn:"client-components-sr-components-filters__imgBtn",backImg:"client-components-sr-components-filters__backImg",back:"client-components-sr-components-filters__back",formWrapper:"client-components-sr-components-filters__formWrapper","formWrapper-dark":"client-components-sr-components-filters__formWrapper-dark",formWrapperDark:"client-components-sr-components-filters__formWrapper-dark","formWrapper-light":"client-components-sr-components-filters__formWrapper-light",formWrapperLight:"client-components-sr-components-filters__formWrapper-light",closeButton:"client-components-sr-components-filters__closeButton","ranking-glossary":"client-components-sr-components-filters__ranking-glossary",rankingGlossary:"client-components-sr-components-filters__ranking-glossary","ranking-glossary-a":"client-components-sr-components-filters__ranking-glossary-a",rankingGlossaryA:"client-components-sr-components-filters__ranking-glossary-a",form:"client-components-sr-components-filters__form",filtersOpen:"client-components-sr-components-filters__filtersOpen",innerBase:"client-components-sr-components-filters__innerBase",title:"client-components-sr-components-filters__title","title-2":"client-components-sr-components-filters__title-2",title2:"client-components-sr-components-filters__title-2","title-dark":"client-components-sr-components-filters__title-dark",titleDark:"client-components-sr-components-filters__title-dark","title-light":"client-components-sr-components-filters__title-light",titleLight:"client-components-sr-components-filters__title-light",svg:"client-components-sr-components-filters__svg",btnWrapperActive:"client-components-sr-components-filters__btnWrapperActive",wrapperActive:"client-components-sr-components-filters__wrapperActive",banners:"client-components-sr-components-filters__banners","wrapper-light":"client-components-sr-components-filters__wrapper-light",wrapperLight:"client-components-sr-components-filters__wrapper-light"}},987:function(e,t){e.exports={view:"client-components-filters-wrapper-style__view","view-dark":"client-components-filters-wrapper-style__view-dark",viewDark:"client-components-filters-wrapper-style__view-dark","view-light":"client-components-filters-wrapper-style__view-light",viewLight:"client-components-filters-wrapper-style__view-light",loaderWrapper:"client-components-filters-wrapper-style__loaderWrapper",innerView:"client-components-filters-wrapper-style__innerView",page:"client-components-filters-wrapper-style__page",h1:"client-components-filters-wrapper-style__h1",h2:"client-components-filters-wrapper-style__h2",filtersDescription:"client-components-filters-wrapper-style__filtersDescription",sideMenu:"client-components-filters-wrapper-style__sideMenu",banners:"client-components-filters-wrapper-style__banners",banner:"client-components-filters-wrapper-style__banner",newslettersBanner:"client-components-filters-wrapper-style__newslettersBanner","page-light":"client-components-filters-wrapper-style__page-light",pageLight:"client-components-filters-wrapper-style__page-light"}},988:function(e,t,r){"use strict";var n=r(0);var s=r.n(n);var i=r(22);var a=r(15);var o=r(667);var l=r(989);var c=r.n(l);var p=function(e){var t=e.title,r=e.icon,s=e.desc,c=e.href,p=e.to,u=e.button,m=e.pageName;var f=function(){return Object(o["a"])("clickedBanner",c,m)};return n["createElement"]("div",{className:l["wrapper"]},n["createElement"]("div",{className:l["title"]},t),n["createElement"]("div",{className:l["content"]},n["createElement"]("div",{className:l["table"]},n["createElement"]("div",{className:l["tableRow"]},n["createElement"]("div",{className:l["icon"]},Object(i["a"])(r,"img",{className:l["img"]})),n["createElement"]("div",{className:l["descWrapper"]},n["createElement"]("div",{className:l["desc"]},s)))),n["createElement"](a["a"],{className:l["button"],href:c,to:p,onClick:f},u)))};t["a"]=p;var u=true},989:function(e,t){e.exports={wrapper:"client-components-sr-components-filter-banner__wrapper",title:"client-components-sr-components-filter-banner__title",content:"client-components-sr-components-filter-banner__content",table:"client-components-sr-components-filter-banner__table",tableRow:"client-components-sr-components-filter-banner__tableRow",icon:"client-components-sr-components-filter-banner__icon",desc:"client-components-sr-components-filter-banner__desc",descWrapper:"client-components-sr-components-filter-banner__descWrapper",button:"client-components-sr-components-filter-banner__button"}},990:function(e,t,r){"use strict";var n=r(205);var s=function(){function e(){}e.prototype.toTitle=function(e){return"Top 25 "+({analyst:"Analysts",blogger:"Bloggers",insider:"Corporate Insiders",hedgefund:"Hedge Fund Managers"}[e]||"Experts")};e.prototype.toDescription=function(e){return"See the best 25 "+({analyst:"Sell-Side Analysts that generated the highest returns.",blogger:"Financial Bloggers that have consistently outperformed the market.",insider:"Corporate Insiders whose buy/sell transactions have consistently outperformed the market.",hedgefund:"Hedge Fund Managers that generated the highest returns on the assets under their management."}[e]||"Experts")};e.prototype.getSeo=function(e){return{title:this.toTitle(e),description:this.toDescription(e),canonical:"/"+e+"/top"}};return e}();var i=new s;t["a"]=Object(n["a"])(function(e){var t=e.route.type,r=e.location.pathname;return{title:i.toTitle(t),description:i.toDescription(t),canonical:r}});var a=true},991:function(e,t,r){"use strict";var n=r(0);var s=r.n(n);var i=r(3);var a=r(796);var o=r(18);var l=r(29);var c=r(1);var p=r.n(c);var u=r(992);var m=r.n(u);var f=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var d=function(e){return l["a"].getIn(["minMediaWidth",e])};var v=Object(o["i"])(d("medium")).replace("@media ","");var g=function(e,t,r){return function(s,i){return n["createElement"]("li",{className:u["li"],key:s.get("id")},n["createElement"]("div",{className:c(u["count"],(o={},o[u["countBig"]]=i<10,o))},i+1,"."),n["createElement"]("div",{className:u["personCard"]},n["createElement"](a["a"],{auth:r,count:i+1,person:s,stats:e,subscriptions:t})));var o}};var _=function(e){f(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.render=function(e){var t=e===void 0?this.props:e,r=t.experts,s=t.subscriptions,i=t.stats,a=t.auth;return n["createElement"]("ul",{className:u["ul"]},r.map(g(i,s,a)))};return t}(i["a"]);t["a"]=_;var h=true},992:function(e,t){e.exports={ul:"client-components-experts-list-persons-list__ul",li:"client-components-experts-list-persons-list__li",personCard:"client-components-experts-list-persons-list__personCard",count:"client-components-experts-list-persons-list__count",countBig:"client-components-experts-list-persons-list__countBig"}},993:function(e,t){e.exports={view:"client-components-experts-list-styles__view",loaderWrapper:"client-components-experts-list-styles__loaderWrapper",innerView:"client-components-experts-list-styles__innerView",page:"client-components-experts-list-styles__page",h1:"client-components-experts-list-styles__h1",h2:"client-components-experts-list-styles__h2",isBeingRestricted:"client-components-experts-list-styles__isBeingRestricted",filtersDescription:"client-components-experts-list-styles__filtersDescription",sideMenu:"client-components-experts-list-styles__sideMenu",banners:"client-components-experts-list-styles__banners",banner:"client-components-experts-list-styles__banner",newslettersBanner:"client-components-experts-list-styles__newslettersBanner",renderFilterAccent:"client-components-experts-list-styles__renderFilterAccent"}},994:function(e,t,r){"use strict";var n=r(0);var s=r.n(n);var i=r(239);var a=r(3);var o=r(18);var l=r(17);var c=r(20);var p=r(995);var u=r.n(p);var m=r(996);var f=r(106);var d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var v=this&&this.__decorate||function(e,t,r,n){var s=arguments.length,i=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)if(a=e[o])i=(s<3?a(i):s>3?a(t,r,i):a(t,r))||i;return s>3&&i&&Object.defineProperty(t,r,i),i};var g=function(e){d(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.componentDidMount=function(){i["a"].km("sawUpgradePopup");var e=this.props.type;if(e==="insider"){Object(c["invokeSetLastPromotionTrigger"])(null,"top-insiders-page")}};t.prototype.componentWillUnmount=function(){i["a"].km("clickedAnywhereButDialog")};t.prototype.render=function(){var e=this.props,t=e.type,r=e.auth,s=e.sector;var i=m["a"][t];var a=Object(o["a"])("blueSanpPayment",Object(c["blueSnapPaymentParams"])(r,"premium",r.hasPayed,"top-insiders-join-now"));var l=f["a"].sectors[s];var u=i.header({sector:l})||"All Sectors";return n["createElement"]("div",{className:p["widthWrapper"]},n["createElement"]("div",{className:p["wrapper"]},n["createElement"]("img",{className:p["imgHeader"],src:i.img}),n["createElement"]("div",{className:p["header"]},u),n["createElement"]("div",{className:p["subheader"]},i.subheader),n["createElement"](h,{link:a,theme:p}),n["createElement"]("div",{className:p["getMore"]},n["createElement"]("div",{className:p["getMoreHeader"]},"Get MUCH more with ",n["createElement"]("span",null,"TipRanks Premium"),":"),n["createElement"]("div",{className:p["getMoreContent"]},n["createElement"]("ul",{className:p["bullets"]}," ",y.map(function(e){return n["createElement"]("li",{key:e},n["createElement"]("img",{src:"/new-images/checkmark-green.png"}),n["createElement"]("span",null,e))})),n["createElement"](h,{link:a,theme:{detailsWrapper:p["detailsWrapper2"],money:p["money2"],detailsBtn:p["detailsBtn2"],seeAllPlans:p["seeAllPlans2"],shouldBold:""}})))))};t=v([Object(l["a"])(function(e){return{auth:e.auth}})],t);return t}(a["a"]);t["a"]=g;function _(e){e.preventDefault();var t=e.target.href;setTimeout(function(){window.location=t},500);i["a"].km("clickedUpgradePopupSubscribeNow");return false}var h=function(e){var t=e.link,r=e.theme,s=r.shouldBold,i=r.detailsWrapper,a=r.money,o=r.detailsBtn,l=r.seeAllPlans;return n["createElement"]("div",{className:i},n["createElement"]("div",{className:s},"Only ",n["createElement"]("span",{className:a},"$29.95"),"/Month"),n["createElement"]("a",{onClick:_,href:t,className:o},"Join Now"),n["createElement"]("a",{href:"/plans",className:l},"See all plans and compare pricing"))};var y=["Daily email alerts from top performing analysts","Top stock ratings from the best performing analysts","Live feed of daily ratings from thousands of analysts","5 - Star analyst consensus and price targets"]},995:function(e,t){e.exports={vwTablet:"(max-width: 769px)",vwMobile:"(max-width: 321px)",wrapper:"client-components-experts-list-ExpertsListRestrictedPage__wrapper",header:"client-components-experts-list-ExpertsListRestrictedPage__header",subheader:"client-components-experts-list-ExpertsListRestrictedPage__subheader",getMore:"client-components-experts-list-ExpertsListRestrictedPage__getMore",getMoreContent:"client-components-experts-list-ExpertsListRestrictedPage__getMoreContent",getMoreHeader:"client-components-experts-list-ExpertsListRestrictedPage__getMoreHeader",bullets:"client-components-experts-list-ExpertsListRestrictedPage__bullets",detailsWrapper:"client-components-experts-list-ExpertsListRestrictedPage__detailsWrapper",detailsBtn:"client-components-experts-list-ExpertsListRestrictedPage__detailsBtn",seeAllPlans:"client-components-experts-list-ExpertsListRestrictedPage__seeAllPlans",money:"client-components-experts-list-ExpertsListRestrictedPage__money",detailsWrapper2:"client-components-experts-list-ExpertsListRestrictedPage__detailsWrapper2 client-components-experts-list-ExpertsListRestrictedPage__detailsWrapper",detailsBtn2:"client-components-experts-list-ExpertsListRestrictedPage__detailsBtn2 client-components-experts-list-ExpertsListRestrictedPage__detailsBtn",seeAllPlans2:"client-components-experts-list-ExpertsListRestrictedPage__seeAllPlans2 client-components-experts-list-ExpertsListRestrictedPage__seeAllPlans",money2:"client-components-experts-list-ExpertsListRestrictedPage__money2",widthWrapper:"client-components-experts-list-ExpertsListRestrictedPage__widthWrapper",imgHeader:"client-components-experts-list-ExpertsListRestrictedPage__imgHeader",shouldBold:"client-components-experts-list-ExpertsListRestrictedPage__shouldBold"}},996:function(e,t,r){"use strict";t["a"]={analyst:{header:function(e){var t=e.sector;return"Find and Follow the Top Ranked Analysts in the "+t+" Sector"},subheader:"See the recommendations made by the best performing analysts in the sector",img:"/new-images/analyst-baldwin.png"},insider:{header:function(){return"Find and Follow the Most Profitable Insiders on TipRanks"},subheader:"Follow the Insiders with the highest returns on their transactions and never miss a profitable transaction again!",img:"/new-images/insider-joe.png"},blogger:{header:function(){return null}}}}});