function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var c={id:e,exports:{}};return o[e]=c,t.call(c.exports,c,c.exports),c.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=c),c("kyEFX").register(JSON.parse('{"5ZPII":"index.d7b7330e.js","259VH":"default-mobile-book-cover.eaf37d8e.png","1XaNB":"index.7945747b.css","hE9ny":"index.67ed9195.js"}')),c("bUb57");var s=c("e7MOj"),i=c("gjiCh"),r=(s=c("e7MOj"),c("iQIUW"));i=c("gjiCh");const l={topBooksList:document.querySelector(".best-books"),mainPage:document.querySelector(".main-content"),categoriesTitle:document.querySelector(".all-categories-title")},{topBooksList:a,mainPage:d,categoriesTitle:u}=l;async function y(){(0,i.default)(),u.classList.add("chosen-category");[...document.querySelector(".all-categories-list").children].forEach((e=>{e.classList.contains("chosen-category")&&e.classList.remove("chosen-category")}));const e=await async function(){let e=null;try{e=await s.default.fetchTopBooks()}catch(e){g(e)}return e}();document.querySelector(".home-title").remove();d.insertAdjacentHTML("afterbegin",'<h1 class="home-title">\n      Best Sellers <span class="home-title-part"> Books </span>\n    </h1>'),function(e,t){const o=e.map((({books:e,list_name:o})=>`  <div class="best-books-sections">\n            <h2 class="best-books-heder">${o}</h2>\n            <ul class="best-books-list">\n                      ${t(e)}\n            </ul>\n            <button type="submit" id="${o}" class="best-books-btn">SEE MORE</button>\n          </div>`));a.innerHTML=o.join(" ")}(e,m),document.querySelectorAll(".best-books-btn").forEach((e=>e.addEventListener("click",f))),(0,i.default)()}function m(e){return e.map((({author:e,book_image:t,title:o,_id:n})=>` <li id=${n} class="js-book best-books-link">\n                    <img class="best-book-icon" src="${t}" alt="${o}"/>\n                    <h3 class="best-book-title">${o}</h3>\n                    <p class="best-book-author">${e}</p>\n                  </li>`)).join(" ")}async function f(e){(0,i.default)(),window.scrollTo(0,0);const t=await async function(e){let t=null;a.innerHTML="";try{const o=e.target.id;t=await s.default.fetchCategory(o)}catch(e){g(e)}return t}(e);!function(e){const t=e.target.id;u.classList.remove("chosen-category");const o=[...document.querySelector(".all-categories-list").children];o.find((e=>e.id===t)).classList.add("chosen-category")}(e),function(e,t){if(e){b(e,t.target.id)}}(t,e),(0,i.default)()}function b(e,t){!function(e){const t=function(e){const t=e.split(" "),o=[];t.length>1&&o.push(t.splice(t.length-1,1).join(""));return o.unshift(t.join(" ")),o}(e);document.querySelector(".home-title").remove();const o=`<h1 class="home-title">\n      ${t[0]} <span class="home-title-part"> ${t[1]} </span>\n    </h1>`;d.insertAdjacentHTML("afterbegin",o)}(t),function(e){const t=e.map((({author:e,book_image:t,title:o,_id:n})=>` <li id=${n} class="js-book group-book-link">\n                    <img class="group-book-icon" src="${t}" alt="${o}" width = 180px />\n                    <h4 class="group-book-title">${o}</h4>\n                    <span class="group-book-author">${e}</span>\n                  </li>`));a.innerHTML=t.join(" ")}(e),a.classList.replace("best-books","category-book-page")}function g(e){d.innerHTML="",r.Notify.failure("OOPS!!! Something went wrong! Try reloading the page or select another BOOK CATEGORY!!!",{position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"})}y();const p={categoriesSection:document.querySelector(".all-categories"),bookCategoriesList:document.querySelector(".all-categories-list"),bookCategory:document.querySelector(".category")},{categoriesSection:h,bookCategoriesList:k,bookCategory:L}=p;!async function(){const e=(await async function(){let e=null;try{e=await s.default.fetchCategoryList()}catch(e){console.log(e)}return e}()).sort(((e,t)=>e.list_name.localeCompare(t.list_name))).map((({list_name:e})=>`<li id="${e}" class="category">${e}</li>`));k.innerHTML=e.join(" ")}(),h.addEventListener("click",(async function(e){if("category"===e.target.className){a.innerHTML="",(0,i.default)(),u.classList.remove("chosen-category");[...k.children].forEach((e=>{e.classList.contains("chosen-category")&&e.classList.remove("chosen-category")})),e.target.classList.add("chosen-category");const t=e.target.textContent;b(await async function(e){let t=null;try{t=await s.default.fetchCategory(e)}catch(e){console.log(e)}return t}(t),t),(0,i.default)()}else"all-categories-title"===e.target.className&&(a.innerHTML="",(0,i.default)(),y(),(0,i.default)())})),c("75VGX"),c("5uEKZ"),c("e7MOj"),console.log("Hello Pop Up!"),c("4S0r6");r=c("iQIUW"),s=c("e7MOj");var S,v=c("5uEKZ");S=new URL(c("kyEFX").resolve("259VH"),import.meta.url).toString();const E={booksList:document.querySelector(".js-books-list"),backdrop:document.querySelector(".js-backdrop"),modalWin:document.querySelector(".js-modal-window"),closeModalBtn:document.querySelector(".js-modal-window-close-btn")};function w(){E.backdrop.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",q),E.backdrop.removeEventListener("click",j)}function j(e){e.currentTarget===e.target&&w()}function q(e){"Escape"===e.code&&w()}function _(){document.querySelector(".js-add-btn").style.display="none",document.querySelector(".js-remove-btn").style.display="block",document.querySelector(".js-modal-desc-text").style.display="block"}function T(){document.querySelector(".js-remove-btn").style.display="none",document.querySelector(".js-add-btn").style.display="block",document.querySelector(".js-modal-desc-text").style.display="none"}E.booksList.addEventListener("click",(async function(t){const o=t.target.closest(".js-book");if(!o)return;const n=o.id;try{!function(t,o){const{title:n,author:c,description:s,book_image:i,buy_links:r,_id:l}=t,a=o.querySelector("img"),d=o.querySelector(".modal-book-title"),u=o.querySelector(".modal-book-author"),y=o.querySelector(".modal-book-description"),m=o.querySelectorAll("a"),f=o.querySelectorAll(".js-modal-btn");a.src=i||e(S),a.alt=n,d.textContent=n,u.textContent=c,y.textContent=s||"book description missing",m.forEach((e=>{const t=r.find((({name:t})=>t.toLowerCase().includes(e.id))).url;e.href=t})),f.forEach((e=>{e.id=l}))}(await s.default.fetchBookById(n),E.modalWin),function(e){const t=(0,v.load)(v.LOCAL_STORAGE_KEY)?(0,v.load)(v.LOCAL_STORAGE_KEY):[];if(!t.length)return;if(t.some((t=>t===e)))return void _();T()}(n),E.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",q),E.backdrop.addEventListener("click",j),E.closeModalBtn.addEventListener("click",w)}catch(e){r.Notify.failure("HTTP request failed")}}));const C={signUpBtn:document.querySelector(".js-sign-up"),backdrop:document.querySelector(".js-sign-up-backdrop"),closeModalBtn:document.querySelector(".js-sign-up-close")};function H(){C.backdrop.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",M),C.backdrop.removeEventListener("click",O)}function O(e){e.currentTarget===e.target&&H()}function M(e){"Escape"===e.code&&H()}C.signUpBtn.addEventListener("click",(function(e){e.preventDefault(),t=C.backdrop,t.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",M),t.addEventListener("click",O),C.closeModalBtn.addEventListener("click",H);var t}));v=c("5uEKZ");({actionLSBtn:document.querySelector(".js-modal-buttons")}).actionLSBtn.addEventListener("click",(function(e){const t=(0,v.load)(v.LOCAL_STORAGE_KEY),o=t||[],n=e.target.id;let c=null;o.some((e=>e===n))?(c=o.filter((e=>e!==n)),T()):(c=[...o,n],_());(0,v.save)(v.LOCAL_STORAGE_KEY,c)}));const A=document.querySelector(".btnUp");A.addEventListener("click",(function e(){window.scrollY>0&&(window.scrollBy(0,-75),setTimeout(e,0))})),window.addEventListener("scroll",(function(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t?A.classList.add("show"):A.classList.remove("show")})),c("gjiCh");
//# sourceMappingURL=index.d7b7330e.js.map
