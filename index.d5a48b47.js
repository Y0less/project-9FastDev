!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.d5a48b47.js","bs6yd":"default-mobile-book-cover.eaf37d8e.png","1XaNB":"index.d628f063.css","9FMue":"index.9bee8e8d.js"}')),r("i8Q71");var c=r("bpxeT"),s=r("8nrFW"),a=r("2TvXO"),i=r("46hgj"),l=document.querySelector("dialog"),u=!1;function d(){return u?u?(l.close(),void(u=!1)):void 0:(l.showModal(),void(u=!0))}c=r("bpxeT"),s=r("8nrFW"),a=r("2TvXO"),i=r("46hgj");var p=r("h6c0i"),f={topBooksList:document.querySelector(".best-books"),mainPage:document.querySelector(".main-content"),categoriesTitle:document.querySelector(".all-categories-title")},h=f.topBooksList,m=f.mainPage,b=f.categoriesTitle;function y(){return v.apply(this,arguments)}function v(){return(v=e(c)(e(a).mark((function t(){var n;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,i.default.fetchTopBooks();case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),B(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function k(){return g.apply(this,arguments)}function g(){return(g=e(c)(e(a).mark((function t(){var n,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(),b.classList.add("chosen-category"),n=document.querySelector(".all-categories-list"),e(s)(n.children).forEach((function(e){e.classList.contains("chosen-category")&&e.classList.remove("chosen-category")})),t.next=7,y();case 7:o=t.sent,document.querySelector(".home-title").remove(),'<h1 class="home-title">\n      Best Sellers <span class="home-title-part"> Books </span>\n    </h1>',m.insertAdjacentHTML("afterbegin",'<h1 class="home-title">\n      Best Sellers <span class="home-title-part"> Books </span>\n    </h1>'),S(o,w),L(),d();case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){document.querySelectorAll(".best-books-btn").forEach((function(e){return e.addEventListener("click",E)}))}function w(e){return e.map((function(e){var t=e.author,n=e.book_image,o=e.title,r=e._id;return" <li id=".concat(r,' class="js-book best-books-link">\n                    <img class="best-book-icon" src="').concat(n,'" alt="').concat(o,'"/>\n                    <h3 class="best-book-title">').concat(o,'</h3>\n                    <p class="best-book-author">').concat(t,"</p>\n                  </li>")})).join(" ")}function S(e,t){var n=e.map((function(e){var n=e.books,o=e.list_name;return'  <div class="best-books-sections">\n            <h2 class="best-books-heder">'.concat(o,'</h2>\n            <ul class="best-books-list">\n                      ').concat(t(n),'\n            </ul>\n            <button type="submit" id="').concat(o,'" class="best-books-btn">SEE MORE</button>\n          </div>')}));h.innerHTML=n.join(" ")}function E(e){return x.apply(this,arguments)}function x(){return(x=e(c)(e(a).mark((function t(n){var o;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),q(),e.next=4,j(n);case 4:o=e.sent,_(n),O(o,n),d();case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(){window.scrollTo(0,0)}function j(e){return T.apply(this,arguments)}function T(){return(T=e(c)(e(a).mark((function t(n){var o,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=null,h.innerHTML="",e.prev=2,r=n.target.id,e.next=6,i.default.fetchCategory(r);case 6:o=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),B(e.t0);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function _(t){var n=t.target.id;b.classList.remove("chosen-category");var o=document.querySelector(".all-categories-list");e(s)(o.children).find((function(e){return e.id===n})).classList.add("chosen-category")}function O(e,t){e&&H(e,t.target.id)}function H(e,t){var n;!function(e){var t=function(e){var t=e.split(" "),n=[];t.length>1&&n.push(t.splice(t.length-1,1).join(""));return n.unshift(t.join(" ")),n}(e);document.querySelector(".home-title").remove();var n='<h1 class="home-title">\n      '.concat(t[0],' <span class="home-title-part"> ').concat(t[1]," </span>\n    </h1>");m.insertAdjacentHTML("afterbegin",n)}(t),n=e.map((function(e){var t=e.author,n=e.book_image,o=e.title,r=e._id;return" <li id=".concat(r,' class="js-book group-book-link">\n                    <img class="group-book-icon" src="').concat(n,'" alt="').concat(o,'" width = 180px />\n                    <h4 class="group-book-title">').concat(o,'</h4>\n                    <span class="group-book-author">').concat(t,"</span>\n                  </li>")})),h.innerHTML=n.join(" "),h.classList.replace("best-books","category-book-page")}function B(e){m.innerHTML="",p.Notify.failure("OOPS!!! Something went wrong! Try reloading the page or select another BOOK CATEGORY!!!",{position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"})}k();var C={categoriesSection:document.querySelector(".all-categories"),bookCategoriesList:document.querySelector(".all-categories-list"),bookCategory:document.querySelector(".category")},A=C.categoriesSection,M=C.bookCategoriesList;function R(){return F.apply(this,arguments)}function F(){return(F=e(c)(e(a).mark((function t(){var n;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,i.default.fetchCategoryList();case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function N(){return(N=e(c)(e(a).mark((function t(){var n,o,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,o=n.sort((function(e,t){return e.list_name.localeCompare(t.list_name)})),r=o.map((function(e){var t=e.list_name;return'<li id="'.concat(t,'" class="category">').concat(t,"</li>")})),M.innerHTML=r.join(" ");case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function U(e){return Y.apply(this,arguments)}function Y(){return(Y=e(c)(e(a).mark((function t(n){var o;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=null,e.prev=1,e.next=4,i.default.fetchCategory(n);case 4:o=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function G(){return(G=e(c)(e(a).mark((function t(n){var o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("category"!==n.target.className){t.next=15;break}return h.innerHTML="",d(),b.classList.remove("chosen-category"),e(s)(M.children).forEach((function(e){e.classList.contains("chosen-category")&&e.classList.remove("chosen-category")})),n.target.classList.add("chosen-category"),o=n.target.textContent,t.next=10,U(o);case 10:H(t.sent,o),d(),t.next=16;break;case 15:"all-categories-title"===n.target.className&&(h.innerHTML="",d(),k(),d());case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){N.apply(this,arguments)}(),A.addEventListener("click",(function(e){return G.apply(this,arguments)})),r("18VO4"),r("jzQFI"),r("46hgj"),console.log("Hello Pop Up!"),r("9VC5X");c=r("bpxeT"),a=r("2TvXO"),p=r("h6c0i"),i=r("46hgj");var K,P=r("jzQFI");K=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("bs6yd");var W={booksList:document.querySelector(".js-books-list"),backdrop:document.querySelector(".js-backdrop"),modalWin:document.querySelector(".js-modal-window"),closeModalBtn:document.querySelector(".js-modal-window-close-btn")};function X(){return(X=e(c)(e(a).mark((function t(n){var o,r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.target.closest(".js-book")){e.next=3;break}return e.abrupt("return");case 3:return r=o.id,e.prev=4,e.next=7,i.default.fetchBookById(r);case 7:z(e.sent,W.modalWin),J(r),I(W.backdrop),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),p.Notify.failure("HTTP request failed");case 16:case"end":return e.stop()}}),t,null,[[4,13]])})))).apply(this,arguments)}function z(t,n){var o=t.title,r=t.author,c=t.description,s=t.book_image,a=t.buy_links,i=t._id,l=n.querySelector("img"),u=n.querySelector(".modal-book-title"),d=n.querySelector(".modal-book-author"),p=n.querySelector(".modal-book-description"),f=n.querySelectorAll("a"),h=n.querySelectorAll(".js-modal-btn");l.src=s||e(K),l.alt=o,u.textContent=o,d.textContent=r,p.textContent=c||"book description missing",f.forEach((function(e){var t=a.find((function(t){return t.name.toLowerCase().includes(e.id)})).url;e.href=t})),h.forEach((function(e){e.id=i}))}function I(e){e.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",D),W.backdrop.addEventListener("click",V),W.closeModalBtn.addEventListener("click",Q)}function Q(){W.backdrop.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",D),W.backdrop.removeEventListener("click",V)}function V(e){e.currentTarget===e.target&&Q()}function D(e){"Escape"===e.code&&Q()}function J(e){var t=(0,P.load)(P.LOCAL_STORAGE_KEY)?(0,P.load)(P.LOCAL_STORAGE_KEY):[];t.length&&(t.some((function(t){return t===e}))?Z():$())}function Z(){document.querySelector(".js-add-btn").style.display="none",document.querySelector(".js-remove-btn").style.display="block",document.querySelector(".js-modal-desc-text").style.display="block"}function $(){document.querySelector(".js-remove-btn").style.display="none",document.querySelector(".js-add-btn").style.display="block",document.querySelector(".js-modal-desc-text").style.display="none"}W.booksList.addEventListener("click",(function(e){return X.apply(this,arguments)}));var ee={signUpBtn:document.querySelector(".js-sign-up"),backdrop:document.querySelector(".js-sign-up-backdrop"),closeModalBtn:document.querySelector(".js-sign-up-close")};function te(){ee.backdrop.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",oe),ee.backdrop.removeEventListener("click",ne)}function ne(e){e.currentTarget===e.target&&te()}function oe(e){"Escape"===e.code&&te()}ee.signUpBtn.addEventListener("click",(function(e){e.preventDefault(),t=ee.backdrop,t.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",oe),t.addEventListener("click",ne),ee.closeModalBtn.addEventListener("click",te);var t}));s=r("8nrFW"),P=r("jzQFI");({actionLSBtn:document.querySelector(".js-modal-buttons")}).actionLSBtn.addEventListener("click",(function(t){var n=(0,P.load)(P.LOCAL_STORAGE_KEY),o=n||[],r=t.target.id,c=null;o.some((function(e){return e===r}))?(c=o.filter((function(e){return e!==r})),$()):(c=e(s)(o).concat([r]),Z());(0,P.save)(P.LOCAL_STORAGE_KEY,c)}));var re=document.querySelector(".btnUp");re.addEventListener("click",(function e(){window.scrollY>0&&(window.scrollBy(0,-75),setTimeout(e,0))})),window.addEventListener("scroll",(function(){var e=window.scrollY,t=document.documentElement.clientHeight;e>t?re.classList.add("show"):re.classList.remove("show")}))}();
//# sourceMappingURL=index.d5a48b47.js.map
