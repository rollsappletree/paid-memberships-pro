!function(){"use strict";var e,r={242:function(){var e=window.wp.blocks;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}var t=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,i=JSON.parse('{"u2":"pmpro/account-profile-section"}');(0,e.registerBlockType)(i.u2,{edit:function(e){let{attributes:i,setAttributes:p}=e;const a=(0,o.useBlockProps)({});return[(0,t.createElement)("div",r({className:"pmpro-block-element"},a),(0,t.createElement)("span",{className:"pmpro-block-title"},(0,n.__)("Paid Memberships Pro","paid-memberships-pro")),(0,t.createElement)("span",{className:"pmpro-block-subtitle"}," ",(0,n.__)("Membership Account: Profile","paid-memberships-pro")),(0,t.createElement)("input",{placeholder:(0,n.__)("No title will be shown.","paid-memberships-pro"),type:"text",value:i.title,className:"block-editor-plain-text",onChange:e=>{p({title:e.target.value})}}))]}})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=function(r,t,o,i){if(!t){var p=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,s=0;s<t.length;s++)(!1&i||p>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[s])}))?t.splice(s--,1):(a=!1,i<p&&(p=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(r=l)}}return r}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,o,i]},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={160:0,535:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,i,p=t[0],a=t[1],s=t[2],l=0;if(p.some((function(r){return 0!==e[r]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var c=s(n)}for(r&&r(t);l<p.length;l++)i=p[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},t=self.webpackChunkpaid_memberships_pro=self.webpackChunkpaid_memberships_pro||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[535],(function(){return n(242)}));o=n.O(o)}();