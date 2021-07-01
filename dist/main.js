(()=>{"use strict";var n={150:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),a=t.n(r),i=t(667),o=t.n(i),c=t(134),s=a()((function(n){return n[1]})),d=o()(c);s.push([n.id,"p {\n\tfont-size: medium;\n}\nimg {\n\twidth: 200px;\n\tborder-radius: 5%;\n}\nbody {\n\tbackground-image: url("+d+");\n\tbackground-attachment: fixed;\n\tbackground-size: cover;\n}\n#container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 100vh;\n}\n\nheader {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\tpadding: 1rem;\n\tmargin-top: -10px;\n\tbackground-color: rgba(255, 255, 255, 0.9);\n}\n.restaurant-name {\n\tdisplay: inline-block;\n}\nmain {\n\tmax-width: 700px;\n\tpadding: 4rem;\n\tmargin: 6rem 0;\n\tfont-size: 2rem;\n\tbackground-color: rgba(255, 255, 255, 0.9);\n}\n#menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-gap: 4rem;\n}\n.dishContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\ttext-align: center;\n\tjustify-content: center;\n\theight: 350px;\n\tpadding: 4rem;\n\tcursor: pointer;\n\tbackground-color: rgba(255, 255, 255, 0.8);\n}\n#home {\n\ttext-align: center;\n}\n.nav-button {\n\tborder-style: none;\n\tborder-bottom: solid 3px green;\n\tpadding: 1rem;\n\tfont-size: 1.5rem;\n\tbackground-color: transparent;\n\tcursor: pointer;\n}\nfooter {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\tpadding: 1rem;\n\ttext-align: center;\n\tmargin-bottom: -10px;\n\tbackground-color: rgba(255, 255, 255, 0.9);\n}\n",""]);const l=s},917:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: "";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n',""]);const i=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(m)):e.push({identifier:u,updater:a(m,r),references:1}),o.push(u)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var s=r(n,a),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},134:(n,e,t)=>{n.exports=t.p+"dc7698761747d2c986ec.jpg"},277:(n,e,t)=>{n.exports=t.p+"4303b6632fd0b010e091.jpg"},315:(n,e,t)=>{n.exports=t.p+"b43c8031f076ccbf1eea.jpg"},850:(n,e,t)=>{n.exports=t.p+"ac7c279fb454a3d4f324.jpg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n=function(){let n=document.createElement("div");n.classList.add("home"),n.setAttribute("id","home"),n.innerHTML="<h4>If you are around and you are missing the taste of the algerian's delicious food</h4><h4> This is the perfect corner for you</h4>";let e=document.querySelector("main");e.textContent="",e.appendChild(n)};let e=[{name:"Couscous",image:t(277),discription:"Numerous tiny, light, tender grains, ideally arranged to form a pyramid and served on a platter at the end of a meal - that is couscous, the national dish of Algeria and a must-have dish in any Algerian restaurant. "},{name:"Rechta",image:t(315),discription:"Rechta is a traditional Algerian dish consisting of thin and flat noodles and chicken sauce. The noodles are made with a combination of flour, salt, water, and ghee, while the sauce is made with chicken pieces, onions, garlic, oil, chickpeas, ras el hanout, cinnamon, turnips, potatoes, and zucchini."},{name:"Tli-Tli",image:t(850),discription:"Tlitli is an Algerian dish made from small orzo pasta also called bird tongues. this dish can be prepared , in white sauce or red sauce. The preparation of the sauce is a very basic spicy North African recipe with tomato, onion, paprika, meat and chickpeas of course."}];const r=function(t){"home-button"!=t.srcElement.id?"menu-button"!=t.srcElement.id?"contact-button"!=t.srcElement.id||function(){let n=document.createElement("div");n.classList.add("contact"),n.setAttribute("id","contact"),n.innerHTML="<h3>if you want to contact us </h3>";let e=document.querySelector("main");e.textContent="",e.appendChild(n)}():function(){let n=document.querySelector("main"),t=document.createElement("div");t.classList.add("menu"),t.setAttribute("id","menu"),e.forEach((n=>{let e=document.createElement("div");e.classList.add("dishContainer"),e.innerHTML=`\n        <h2>${n.name}</h2>\n        <img src=${n.image} alt="Chef">\n        <p>${n.discription}</p>\n        `,t.appendChild(e)})),n.textContent="",n.appendChild(t)}():n()};var a=t(379),i=t.n(a),o=t(795),c=t.n(o),s=t(695),d=t.n(s),l=t(216),u=t.n(l),p=t(917),m={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=d()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};m.domAPI=c(),m.insertStyleElement=u(),i()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var h=t(150),f={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=d()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};f.domAPI=c(),f.insertStyleElement=u(),i()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,function(){let e=document.getElementById("container");e.appendChild(function(){let n=document.createElement("header");return n.classList.add("header"),n.appendChild(function(){let n=document.createElement("h1");return n.classList.add("restaurant-name"),n.innerHTML="<span style='color:green;'>The </span> <span style='color:red;'>Algerian </span> <span style='color:green;'>Corner</span>  ",n}()),n.appendChild(function(){let n=document.createElement("nav");return n.classList.add("nav-bar"),n.appendChild(function(){let n=document.createElement("button");return n.classList.add("nav-button"),n.setAttribute("id","home-button"),n.innerHTML="HOME",n.addEventListener("click",r),n}()),n.appendChild(function(){let n=document.createElement("button");return n.classList.add("nav-button"),n.setAttribute("id","menu-button"),n.innerHTML="MENU",n.addEventListener("click",r),n}()),n.appendChild(function(){let n=document.createElement("button");return n.classList.add("nav-button"),n.setAttribute("id","contact-button"),n.innerHTML="CONTACT US",n.addEventListener("click",r),n}()),n}()),n}()),e.appendChild(function(){let n=document.createElement("main");return n.classList.add("main"),n}()),e.appendChild(function(){let n=document.createElement("footer");return n.classList.add("footer"),n.innerHTML="    <p>Copyright © Created by <a href=https://github.com/krimoelbahri> Elbahri </a>. TOP project</p>",n}()),n()}()})()})();