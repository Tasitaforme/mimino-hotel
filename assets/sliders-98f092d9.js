(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();(function(e){typeof e.matches!="function"&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(t){for(var o=this,n=(o.document||o.ownerDocument).querySelectorAll(t),r=0;n[r]&&n[r]!==o;)++r;return Boolean(n[r])}),typeof e.closest!="function"&&(e.closest=function(t){for(var o=this;o&&o.nodeType===1;){if(o.matches(t))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close"),n=document.querySelector("body");e.forEach(function(r){r.addEventListener("click",function(s){s.preventDefault();var i=this.getAttribute("data-modal"),h=document.querySelector('.modal[data-modal="'+i+'"]');h.classList.add("active"),t.classList.add("active"),n.classList.add("no-scroll")})}),o.forEach(function(r){r.addEventListener("click",function(s){var i=this.closest(".modal");i.classList.remove("active"),t.classList.remove("active"),n.classList.remove("no-scroll")})}),document.body.addEventListener("keyup",function(r){var s=r.keyCode;s==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.querySelector("body").classList.remove("no-scroll"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.querySelector("body").classList.remove("no-scroll")})});function c(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var o=t.createTextRange();o.collapse(!0),o.moveEnd("character",e),o.moveStart("character",e),o.select()}}function d(e){var t=this.placeholder,o=0,n=t.replace(/\D/g,""),r=this.value.replace(/\D/g,"");n.length>=r.length&&(r=n),t=t.replace(/[_\d]/g,function(s){return r.charAt(o++)||"_"}),this.value=t,o=t.lastIndexOf(r.substr(-1)),o<t.length&&t!=this.placeholder?o++:o=t.indexOf("_"),c(o,this)}window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#online_phone");e.addEventListener("input",d,!1),e.focus(),c(3,e)});window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#online_phone-two");e.addEventListener("input",d,!1),e.focus(),c(3,e)});const l=document.querySelector("#day-value"),u=document.querySelector("#price-value"),f=document.querySelector("#btn-up"),v=document.querySelector("#btn-down");u.value=2500;l.value=1;function a(e){+l.value>0&&(u.value=+l.value*e)}l.addEventListener("input",e=>{+l.value>0&&+l.value<365&&a(2500)});f.addEventListener("click",e=>{+l.value<365&&(l.value=+l.value+1),a(2500)});v.addEventListener("click",e=>{+l.value>1&&(l.value=+l.value-1),a(2500)});(()=>{const e={openMenuBtn:document.querySelector("[data-Menu-open]"),closeMenuBtn:document.querySelector("[data-Menu-close]"),menu:document.querySelector("[data-Menu]"),body:document.querySelector("body")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t);function t(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}})();const m={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};m.addEventListener();$(".hotel-hero-slider").slick({slide:".hotel-hero-slider-item",slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,dots:!1,variableWidth:!0,prevArrow:$(".hotel-hero-prev"),nextArrow:$(".hotel-hero-next")});$(".hotel-hero-slider").on("afterChange",function(e,t,o){o===0?$(".hotel-hero-prev").css("opacity","0.3"):$(".hotel-hero-prev").css("opacity","1"),o===t.slideCount-1?$(".hotel-hero-next").css("opacity","0.3"):$(".hotel-hero-next").css("opacity","1")});$(".restaurant-hero-slider").slick({slide:".restaurant-hero-slider-item",slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,dots:!1,variableWidth:!0,prevArrow:$(".restaurant-hero-prev"),nextArrow:$(".restaurant-hero-next")});$(".restaurant-hero-slider").on("afterChange",function(e,t,o){o===0?$(".restaurant-hero-prev").css("opacity","0.3"):$(".restaurant-hero-prev").css("opacity","1"),o===t.slideCount-1?$(".restaurant-hero-next").css("opacity","0.3"):$(".restaurant-hero-next").css("opacity","1")});$(".home-restaurantdetails-slider").slick({dots:!1,arrows:!0,infinite:!0,speed:300,slidesToShow:5,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:2,slidesToScroll:1}}]});$(document).ready(function(){$(".menu-slider").slick({adaptiveHeight:!0,speed:500,infinite:!1,slidesToShow:4,arrows:!1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,arrows:!0}}],appendArrows:$(".btn-arrows")})});$(".hero-room-slider").slick({slide:".hero-room-slider-item",slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!0,dots:!1,variableWidth:!0,prevArrow:$(".hero-room-prev"),nextArrow:$(".hero-room-next")});$(".hero-room-slider").on("afterChange",function(e,t,o){o===0?$(".hero-room-prev").css("opacity","0.3"):$(".hero-room-prev").css("opacity","1"),o===t.slideCount-1?$(".hero-room-next").css("opacity","0.3"):$(".hero-room-next").css("opacity","1")});$(document).ready(function(){$(".home-hotel-details-slider").slick({infinite:!1,slidesToShow:2,slidesToScroll:2,variableWidth:!0})});
