(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(e,t,_){e.exports=_.p+"img/logo.78d6734.svg"},240:function(e,t,_){"use strict";_.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav",attrs:{id:"head-mega"}},[n("div",{staticClass:"nav__pre"},[n("a",{staticClass:"nav__pre__link",attrs:{href:""}},[e._v("Pre-link 1")]),e._v(" "),n("a",{staticClass:"nav__pre__link",attrs:{href:""}},[e._v("Pre-link 2")]),e._v(" "),n("a",{staticClass:"nav__pre__link",attrs:{href:""}},[e._v("Pre-link 3")])]),e._v(" "),n("div",{staticClass:"nav__inner"},[n("a",{staticClass:"nav__logo",attrs:{href:""}},[n("img",{staticClass:"nav__logo__img",attrs:{src:_(216),alt:""}})]),e._v(" "),n("div",{staticClass:"nav__hmb"},[n("span",{staticClass:"nav__hmb__line"}),e._v(" "),n("span",{staticClass:"nav__hmb__line"}),e._v(" "),n("span",{staticClass:"nav__hmb__line"})]),e._v(" "),n("nav",{staticClass:"nav__core"},[n("span",{staticClass:"nav__core__link nav__core__link--sub",attrs:{"data-presub":"0"}},[e._v("Link 1 with sublevel")]),e._v(" "),n("span",{staticClass:"nav__core__link nav__core__link--sub",attrs:{"data-presub":"1"}},[e._v("Link 2 with sublevel")]),e._v(" "),n("a",{staticClass:"nav__core__link",attrs:{href:""}},[e._v("Link 3")]),e._v(" "),n("a",{staticClass:"nav__core__link",attrs:{href:""}},[e._v("Link 4")])])]),e._v(" "),n("div",{staticClass:"nav__sub"},[n("span",{staticClass:"nav__sub__exit"},[e._v("\n      Back\n    ")]),e._v(" "),n("div",{staticClass:"nav__sub__item",attrs:{"data-sub":"0"}},[n("div",{staticClass:"nav__sub__box"},[n("h2",[e._v("\n          Feel free to put multiple elements here, even a grid.\n        ")]),e._v(" "),n("h4",[e._v("Lorem ipsum dolor sit.")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus!\n        ")]),e._v(" "),n("a",{staticClass:"nav__btn",attrs:{href:""}},[e._v("Button")])])]),e._v(" "),n("div",{staticClass:"nav__sub__item",attrs:{"data-sub":"1"}},[n("div",{staticClass:"nav__sub__box"},[n("h3",[e._v("Lorem, ipsum.")]),e._v(" "),n("h5",[e._v("Lorem ipsum dolor sit amet.")]),e._v(" "),n("p",[e._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing.\n        ")]),e._v(" "),n("a",{staticClass:"nav__btn",attrs:{href:""}},[e._v("Button")])])])])])}],r=(_(16),_(33),{mounted:function(){var e;(e=document.querySelector("#head-mega")).querySelector(".nav__hmb").addEventListener("click",(function(t){t.preventDefault(),this.classList.toggle("active"),e.querySelector(".nav__core").classList.toggle("active"),e.querySelector(".nav__core:not(.active)")&&e.querySelector(".nav__sub__item.active")&&e.querySelector(".nav__core__link--sub.active")&&(e.querySelector(".nav__sub.active").classList.remove("active"),e.querySelector(".nav__sub__item.active").classList.remove("active"),e.querySelector(".nav__core__link--sub.active").classList.remove("active"),e.querySelector(".nav__sub").style.minHeight="0px")})),e.querySelectorAll(".nav__core__link--sub").forEach((function(element){element.addEventListener("click",(function(t){t.preventDefault();var _=element.dataset.presub,n=window.innerWidth>0?window.innerWidth:screen.width;if(element.classList.contains("active"))e.querySelector(".nav__sub").classList.remove("active"),e.querySelector('.nav__sub__item[data-sub="'+_+'"]').classList.remove("active"),e.querySelector('.nav__core__link--sub[data-presub="'+_+'"]').classList.remove("active"),e.querySelector(".nav__sub").style.minHeight="0px";else if(e.querySelector(".nav__sub__item.active")&&e.querySelector(".nav__core__link--sub.active")&&(e.querySelector(".nav__sub.active").classList.remove("active"),e.querySelector(".nav__sub__item.active").classList.remove("active"),e.querySelector(".nav__core__link--sub.active").classList.remove("active"),e.querySelector(".nav__sub").style.minHeight="0px"),element.classList.add("active"),e.querySelector(".nav__sub").classList.add("active"),e.querySelector('.nav__sub__item[data-sub="'+_+'"]').classList.add("active"),n<769){var r=e.querySelector(".nav__core").clientHeight;e.querySelector(".nav__sub").style.minHeight=r+"px"}}))})),e.querySelector(".nav__sub__exit").addEventListener("click",(function(){e.querySelector(".nav__sub.active").classList.remove("active"),e.querySelector(".nav__sub__item.active").classList.remove("active"),e.querySelector(".nav__core__link--sub.active").classList.remove("active"),e.querySelector(".nav__sub").style.minHeight="0px"}))}}),v=_(43),component=Object(v.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),n,!1,null,null,null);t.default=component.exports}}]);