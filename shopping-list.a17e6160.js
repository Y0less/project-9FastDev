!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),i("iE7OH").register(JSON.parse('{"1QMrX":"shopping-list.a17e6160.js","34dqz":"mobile.a9653c9a.png","gNz39":"mobile@2x.a472d73e.png","jD4zk":"tablet-desck.fed7a1f9.png","cViWx":"tablet-desck@2x.24f1324d.png","2VEnG":"amazon.b8fa90cb.png","8Y5Mm":"apple-books.5a9f17e3.png","c1l3T":"bookshop.91914384.png","410VS":"icons.58cb19ae.svg","1XaNB":"index.d628f063.css","9FMue":"index.9bee8e8d.js"}')),i("i8Q71"),i("18VO4");var a,s=i("bpxeT"),l=i("2TvXO"),c=i("h6c0i"),u=i("46hgj"),p=i("jzQFI");a=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("34dqz");var d;d=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("gNz39");var f;f=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("jD4zk");var g;g=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("cViWx");var h;h=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("2VEnG");var v;v=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("8Y5Mm");var m;m=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("c1l3T");var E;E=i("aNJCr").getBundleURL("1QMrX")+i("iE7OH").resolve("410VS");var b={listEl:document.querySelector(".js-shopping-list")},_=(0,p.load)(p.LOCAL_STORAGE_KEY),H=_||[];function k(){return(k=n(s)(n(l).mark((function e(t){var r,o,i,a;return n(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.map((function(e){return u.default.fetchBookById(e)})),e.next=4,Promise.allSettled(r);case 4:o=e.sent,i=o.map((function(e){return e.value})),a=O(i),b.listEl.innerHTML=a,b.listEl.addEventListener("click",x),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c.Notify.failure("HTTP request failed");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function x(e){var n=(0,p.load)(p.LOCAL_STORAGE_KEY);if(e.target.closest(".js-remove")){var t=e.target.closest("[id]").id;b.listEl.querySelector("[data-id='".concat(t,"']")).remove();var r=n.filter((function(e){return e!==t}));(0,p.save)(p.LOCAL_STORAGE_KEY,r),(0,p.load)(p.LOCAL_STORAGE_KEY).length||(b.listEl.innerHTML=R())}}function O(e){return console.log(e),e.map((function(e){var t=e._id,r=e.book_image,o=e.list_name,i=e.description,a=e.author,s=e.buy_links,l=e.title,c=s.find((function(e){return e.name.toLowerCase().includes("amazon")})).url,u=s.find((function(e){return e.name.toLowerCase().includes("apple")})).url,p=s.find((function(e){return e.name.toLowerCase().includes("bookshop")})).url;return'\n     <li data-id="'.concat(t,'" class="js-book shopping-list-js-book"><div class="shopping-list-book-image-wrapper"><img src="').concat(r,'" alt="').concat(l,'" class="shopping-list-book-image" width="" height=""/></div><div><h2 class="shopping-list-title-book">').concat(l,'</h2><p class="shopping-list-list-name">').concat(o,'</p><p class="shopping-list-description">').concat(i,'</p><div class="shopping-list-author-links"><p class="shopping-list-book-author">').concat(a,'</p><ul class="shopping-list-links-list"><li><a href="').concat(c,'" class="shopping-list-links-icon-amazon" target="_blank" rel="noreferrer noopener"><img src="').concat(n(h),'" alt="icon of Amazon" width="" height=""/></a></li><li><a href="').concat(u,'" class="shopping-list-links-icon-apple" target="_blank" rel="noreferrer noopener"><img src="').concat(n(v),'" alt="icon of Apple-books" width="" height="" /></a></li><li><a href="').concat(p,'" class="shopping-list-links-icon" target="_blank" rel="noreferrer noopener"><img src="').concat(n(m),'" alt="icon of bookshop" width="" height="" /></a></li></ul></div><button id=').concat(t,' class="js-remove shopping-list-btn-remove" type= "button"><svg class="icon-remove shopping-list-icon-remove" width="18px" height="18px"><use href="').concat(n(E),'#icon-dump"></use></svg></button></div></li>')})).join("")}function R(){return'<div class="shopping-list-default"><p class="shopping-list-default-message">This page is empty, add some books and proceed to order.</p><picture><source\n          srcset="'.concat(n(f)," 1x, ").concat(n(g),' 2x"\n          media="(min-width: 768px)"\n        />\n        <source\n          srcset="\n            ').concat(n(a),"   1x,\n            ").concat(n(d),' 2x\n          "\n          media="(min-width: 320px)"\n        />\n        <img\n          src="').concat(n(a),'"\n          class="shopping-list-default-picture"\n          alt="stack of books"\n          width="265"\n          height="198"\n        />\n      </picture>\n          </div>')}H.length?function(e){k.apply(this,arguments)}(H):b.listEl.innerHTML=R(),i("9VC5X")}();
//# sourceMappingURL=shopping-list.a17e6160.js.map
