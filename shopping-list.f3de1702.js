function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"hbTCY":"shopping-list.f3de1702.js","4OOBK":"mobile.a9653c9a.png","8Tym4":"mobile@2x.a472d73e.png","gr3Am":"tablet-desck.fed7a1f9.png","cfk6k":"tablet-desck@2x.24f1324d.png","6IByG":"amazon.b8fa90cb.png","afe81":"apple-books.5a9f17e3.png","kJjGN":"bookshop.91914384.png","8OQ7p":"icons.58cb19ae.svg","1XaNB":"index.7945747b.css","hE9ny":"index.67ed9195.js"}')),r("bUb57"),r("75VGX");var s,l=r("iQIUW"),a=r("e7MOj"),p=r("5uEKZ");s=new URL(r("kyEFX").resolve("4OOBK"),import.meta.url).toString();var c;c=new URL(r("kyEFX").resolve("8Tym4"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("gr3Am"),import.meta.url).toString();var u;u=new URL(r("kyEFX").resolve("cfk6k"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("6IByG"),import.meta.url).toString();var g;g=new URL(r("kyEFX").resolve("afe81"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("kJjGN"),import.meta.url).toString();var m;m=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var v=r("gjiCh");const b={listEl:document.querySelector(".js-shopping-list")},k=(0,p.load)(p.LOCAL_STORAGE_KEY),E=k||[];function _(e){const t=(0,p.load)(p.LOCAL_STORAGE_KEY);if(!e.target.closest(".js-remove"))return;const n=e.target.closest("[id]").id;b.listEl.querySelector(`[data-id='${n}']`).remove();const i=t.filter((e=>e!==n));(0,p.save)(p.LOCAL_STORAGE_KEY,i),(0,p.load)(p.LOCAL_STORAGE_KEY).length||(b.listEl.innerHTML=w())}function w(){return`<div class="shopping-list-default"><p class="shopping-list-default-message">This page is empty, add some books and proceed to order.</p><picture><source\n          srcset="${t(d)} 1x, ${t(u)} 2x"\n          media="(min-width: 768px)"\n        />\n        <source\n          srcset="\n            ${t(s)}   1x,\n            ${t(c)} 2x\n          "\n          media="(min-width: 320px)"\n        />\n        <img\n          src="${t(s)}"\n          class="shopping-list-default-picture"\n          alt="stack of books"\n          width="265"\n          height="198"\n        />\n      </picture>\n          </div>`}E.length?async function(e){(0,v.default)();try{const n=e.map((e=>a.default.fetchBookById(e))),i=await Promise.allSettled(n),o=function(e){return console.log(e),e.map((({_id:e,book_image:n,list_name:i,description:o,author:r,buy_links:s,title:l})=>{const a=s.find((({name:e})=>e.toLowerCase().includes("amazon"))).url,p=s.find((({name:e})=>e.toLowerCase().includes("apple"))).url,c=s.find((({name:e})=>e.toLowerCase().includes("bookshop"))).url;return`\n     <li data-id="${e}" class="js-book shopping-list-js-book"><div class="shopping-list-book-image-wrapper"><img src="${n}" alt="${l}" class="shopping-list-book-image" width="" height=""/></div><div><h2 class="shopping-list-title-book">${l}</h2><p class="shopping-list-list-name">${i}</p><p class="shopping-list-description">${o}</p><div class="shopping-list-author-links"><p class="shopping-list-book-author">${r}</p><ul class="shopping-list-links-list"><li><a href="${a}" class="shopping-list-links-icon-amazon" target="_blank" rel="noreferrer noopener"><img src="${t(f)}" alt="icon of Amazon" width="" height=""/></a></li><li><a href="${p}" class="shopping-list-links-icon-apple" target="_blank" rel="noreferrer noopener"><img src="${t(g)}" alt="icon of Apple-books" width="" height="" /></a></li><li><a href="${c}" class="shopping-list-links-icon" target="_blank" rel="noreferrer noopener"><img src="${t(h)}" alt="icon of bookshop" width="" height="" /></a></li></ul></div><button id=${e} class="js-remove shopping-list-btn-remove" type= "button"><svg class="icon-remove shopping-list-icon-remove" width="18px" height="18px"><use href="${t(m)}#icon-dump"></use></svg></button></div></li>`})).join("")}(i.map((({value:e})=>e)));b.listEl.innerHTML=o,b.listEl.addEventListener("click",_)}catch(e){l.Notify.failure("HTTP request failed")}(0,v.default)()}(E):b.listEl.innerHTML=w(),r("4S0r6");
//# sourceMappingURL=shopping-list.f3de1702.js.map
