(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{378:function(e,t,n){"use strict";n.r(t);var a={name:"ThemeManager",beforeMount:function(){function e(e){window.__theme=e,t=e,document.body.setAttribute("data-theme",e),window.__onThemeChange(e)}var t;window.__onThemeChange=function(){};try{t=localStorage.getItem("theme")}catch(e){}window.__setPreferredTheme=function(t){e(t);try{localStorage.setItem("theme",t)}catch(e){}};var n=window.matchMedia("(prefers-color-scheme: dark)");n.addListener((function(e){window.__setPreferredTheme(e.matches?"dark":"light")})),e(t||(n.matches?"dark":"light"))}},i=n(18),o=Object(i.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{visibility:"hidden",display:"none"}})}),[],!1,null,null,null);t.default=o.exports}}]);