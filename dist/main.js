/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderCards */ \"./src/modules/renderCards.js\");\n/* harmony import */ var _modules_renderCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderCatalog */ \"./src/modules/renderCatalog.js\");\n/* harmony import */ var _modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleCheckbox */ \"./src/modules/toggleCheckbox.js\");\n/* harmony import */ var _modules_toggleCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggleCart */ \"./src/modules/toggleCart.js\");\n/* harmony import */ var _modules_addCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addCart */ \"./src/modules/addCart.js\");\n/* harmony import */ var _modules_actionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/actionPage */ \"./src/modules/actionPage.js\");\n\n\n\n\n\n\n\n\n\n\n(async function() {\n\tconst db = await (0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t(0,_modules_renderCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(db);\n\t(0,_modules_renderCatalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t(0,_modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t(0,_modules_toggleCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\t(0,_modules_addCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\t(0,_modules_actionPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBYTs7QUFFMkI7QUFDUTtBQUNJO0FBQ0U7QUFDUjtBQUNOO0FBQ007O0FBRTlDO0FBQ0Esa0JBQWtCLDREQUFPO0FBQ3pCLENBQUMsZ0VBQVc7QUFDWixDQUFDLGtFQUFhO0FBQ2QsQ0FBQyxtRUFBYztBQUNmLENBQUMsK0RBQVU7QUFDWCxDQUFDLDREQUFPO0FBQ1IsQ0FBQywrREFBVTtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vem9uZXN0YXJ0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZXMvZ2V0RGF0YSc7XG5pbXBvcnQgcmVuZGVyQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL3JlbmRlckNhcmRzJztcbmltcG9ydCByZW5kZXJDYXRhbG9nIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJDYXRhbG9nJztcbmltcG9ydCB0b2dnbGVDaGVja2JveCBmcm9tICcuL21vZHVsZXMvdG9nZ2xlQ2hlY2tib3gnO1xuaW1wb3J0IHRvZ2dsZUNhcnQgZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZUNhcnQnO1xuaW1wb3J0IGFkZENhcnQgZnJvbSAnLi9tb2R1bGVzL2FkZENhcnQnO1xuaW1wb3J0IGFjdGlvblBhZ2UgZnJvbSAnLi9tb2R1bGVzL2FjdGlvblBhZ2UnO1xuXG4oYXN5bmMgZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGRiID0gYXdhaXQgZ2V0RGF0YSgpO1xuXHRyZW5kZXJDYXJkcyhkYik7XG5cdHJlbmRlckNhdGFsb2coKTtcblx0dG9nZ2xlQ2hlY2tib3goKTtcblx0dG9nZ2xlQ2FydCgpO1xuXHRhZGRDYXJ0KCk7XG5cdGFjdGlvblBhZ2UoKTtcbn0oKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/actionPage.js":
/*!***********************************!*\
  !*** ./src/modules/actionPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ actionPage)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\n\nfunction actionPage() {\n\tconst cards = document.querySelectorAll('.goods .card'),\n\t\tdiscountCheckbox = document.getElementById('discount-checkbox'),\n\t\tgoods = document.querySelector('.goods'),\n\t\tmin = document.getElementById('min'),\n\t\tmax = document.getElementById('max'),\n\t\tsearch = document.querySelector('.search-wrapper_input'),\n\t\tsearchBtn = document.querySelector('.search-btn');\n\n\t// фильтр по акции\n\n\tdiscountCheckbox.addEventListener('click', _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\t// discountCheckbox.addEventListener('click', () => {\n\t//   cards.forEach((card) => {\n\t//     if (discountCheckbox.checked) {\n\t//       if (!card.querySelector('.card-sale')) {\n\t//         card.parentNode.style.display = 'none';\n\t//       }\n\t//     } else {\n\t//       card.parentNode.style.display = '';\n\t//     }\n\t//   });\n\t// });\n\n\t// фильтр по цене\n\n\tmin.addEventListener('change', _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\tmax.addEventListener('change', _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\t// function filterPrice() {\n\t//   cards.forEach((card) => {\n\t//     const cardPrice = card.querySelector('.card-price');\n\t//     const price = parseFloat(cardPrice.textContent);\n\t//     console.log(card.parentNode);\n\n\t//     if ((min.value && price < min.value) || (max.value && price > max.value)) {\n\t//       card.parentNode.remove();\n\t//     } else {\n\t//       goods.appendChild(card.parentNode);\n\t//     }\n\t//   });\n\t// }\n\n\t// поиск  \n\n\tsearchBtn.addEventListener('click', () => {\n\t\tconst searchText = new RegExp(search.value.trim(), 'i');\n\t\tcards.forEach((card) => {\n\t\t\tconst title = card.querySelector('.card-title');\n\t\t\tif (!searchText.test(title.textContent)) {\n\t\t\t\tcard.parentNode.style.display = 'none';\n\t\t\t} else {\n\t\t\t\tcard.parentNode.style.display = '';\n\t\t\t}\n\t\t});\n\t\tsearch.value = '';\n\t});\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hY3Rpb25QYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCOztBQUVmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLCtDQUFNOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMOztBQUVBLGdDQUFnQywrQ0FBTTtBQUN0QyxnQ0FBZ0MsK0NBQU07O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL296b25lc3RhcnQvLi9zcmMvbW9kdWxlcy9hY3Rpb25QYWdlLmpzPzFjODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGlvblBhZ2UoKSB7XG5cdGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvb2RzIC5jYXJkJyksXG5cdFx0ZGlzY291bnRDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3VudC1jaGVja2JveCcpLFxuXHRcdGdvb2RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzJyksXG5cdFx0bWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbicpLFxuXHRcdG1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgnKSxcblx0XHRzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXdyYXBwZXJfaW5wdXQnKSxcblx0XHRzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xuXG5cdC8vINGE0LjQu9GM0YLRgCDQv9C+INCw0LrRhtC40LhcblxuXHRkaXNjb3VudENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyKTtcblxuXHQvLyBkaXNjb3VudENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHQvLyAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcblx0Ly8gICAgIGlmIChkaXNjb3VudENoZWNrYm94LmNoZWNrZWQpIHtcblx0Ly8gICAgICAgaWYgKCFjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXNhbGUnKSkge1xuXHQvLyAgICAgICAgIGNhcmQucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQvLyAgICAgICB9XG5cdC8vICAgICB9IGVsc2Uge1xuXHQvLyAgICAgICBjYXJkLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHQvLyAgICAgfVxuXHQvLyAgIH0pO1xuXHQvLyB9KTtcblxuXHQvLyDRhNC40LvRjNGC0YAg0L/QviDRhtC10L3QtVxuXG5cdG1pbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWx0ZXIpO1xuXHRtYXguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsdGVyKTtcblxuXHQvLyBmdW5jdGlvbiBmaWx0ZXJQcmljZSgpIHtcblx0Ly8gICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdC8vICAgICBjb25zdCBjYXJkUHJpY2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByaWNlJyk7XG5cdC8vICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoY2FyZFByaWNlLnRleHRDb250ZW50KTtcblx0Ly8gICAgIGNvbnNvbGUubG9nKGNhcmQucGFyZW50Tm9kZSk7XG5cblx0Ly8gICAgIGlmICgobWluLnZhbHVlICYmIHByaWNlIDwgbWluLnZhbHVlKSB8fCAobWF4LnZhbHVlICYmIHByaWNlID4gbWF4LnZhbHVlKSkge1xuXHQvLyAgICAgICBjYXJkLnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cdC8vICAgICB9IGVsc2Uge1xuXHQvLyAgICAgICBnb29kcy5hcHBlbmRDaGlsZChjYXJkLnBhcmVudE5vZGUpO1xuXHQvLyAgICAgfVxuXHQvLyAgIH0pO1xuXHQvLyB9XG5cblx0Ly8g0L/QvtC40YHQuiAgXG5cblx0c2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGNvbnN0IHNlYXJjaFRleHQgPSBuZXcgUmVnRXhwKHNlYXJjaC52YWx1ZS50cmltKCksICdpJyk7XG5cdFx0Y2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRpdGxlJyk7XG5cdFx0XHRpZiAoIXNlYXJjaFRleHQudGVzdCh0aXRsZS50ZXh0Q29udGVudCkpIHtcblx0XHRcdFx0Y2FyZC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYXJkLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHNlYXJjaC52YWx1ZSA9ICcnO1xuXHR9KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/actionPage.js\n");

/***/ }),

/***/ "./src/modules/addCart.js":
/*!********************************!*\
  !*** ./src/modules/addCart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addCart)\n/* harmony export */ });\nfunction addCart() {\n\tconst cards = document.querySelectorAll('.goods .card');\n\tconst cartWrapper = document.querySelector('.cart-wrapper');\n\tconst cartEmpty = document.getElementById('cart-empty');\n\tconst countGoods = document.querySelector('.counter');\n\n\tcards.forEach((card) => {\n\t\tconst btn = card.querySelector('button');\n\t\tbtn.addEventListener('click', () => {\n\t\t\tconst cardClone = card.cloneNode(true);\n\t\t\tcartWrapper.appendChild(cardClone);\n\n\t\t\tshowData();\n\n\t\t\tconst removeBtn = cardClone.querySelector('.btn');\n\t\t\tremoveBtn.textContent = 'Удалить из корзины';\n\t\t\tremoveBtn.addEventListener('click', () => {\n\t\t\t\tcardClone.remove();\n\t\t\t\tshowData();\n\t\t\t});\n\t\t});\n\t});\n\n\tfunction showData() {\n\t\tconst cardsCart = cartWrapper.querySelectorAll('.card'),\n\t\t\tcardsPrice = cartWrapper.querySelectorAll('.card-price'),\n\t\t\tcardTotal = document.querySelector('.cart-total span');\n\t\tlet sum = 0;\n\t\tcountGoods.textContent = cardsCart.length;\n\n\t\tcardsPrice.forEach((cardPrice) => {\n\t\t\tlet price = parseFloat(cardPrice.textContent);\n\t\t\tsum += price;\n\t\t\tconsole.log(sum);\n\t\t});\n\n\t\tcardTotal.textContent = sum;\n\n\t\tif (cardsCart.length !== 0) {\n\t\t\tcartEmpty.remove();\n\t\t} else {\n\t\t\tcartWrapper.appendChild(cartEmpty);\n\t\t}\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGRDYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vem9uZXN0YXJ0Ly4vc3JjL21vZHVsZXMvYWRkQ2FydC5qcz8xNDY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZENhcnQoKSB7XG5cdGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvb2RzIC5jYXJkJyk7XG5cdGNvbnN0IGNhcnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtd3JhcHBlcicpO1xuXHRjb25zdCBjYXJ0RW1wdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1lbXB0eScpO1xuXHRjb25zdCBjb3VudEdvb2RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcblxuXHRjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG5cdFx0Y29uc3QgYnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBjYXJkQ2xvbmUgPSBjYXJkLmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdGNhcnRXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRDbG9uZSk7XG5cblx0XHRcdHNob3dEYXRhKCk7XG5cblx0XHRcdGNvbnN0IHJlbW92ZUJ0biA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG5cdFx0XHRyZW1vdmVCdG4udGV4dENvbnRlbnQgPSAn0KPQtNCw0LvQuNGC0Ywg0LjQtyDQutC+0YDQt9C40L3Riyc7XG5cdFx0XHRyZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdGNhcmRDbG9uZS5yZW1vdmUoKTtcblx0XHRcdFx0c2hvd0RhdGEoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBzaG93RGF0YSgpIHtcblx0XHRjb25zdCBjYXJkc0NhcnQgPSBjYXJ0V3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLFxuXHRcdFx0Y2FyZHNQcmljZSA9IGNhcnRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXByaWNlJyksXG5cdFx0XHRjYXJkVG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC10b3RhbCBzcGFuJyk7XG5cdFx0bGV0IHN1bSA9IDA7XG5cdFx0Y291bnRHb29kcy50ZXh0Q29udGVudCA9IGNhcmRzQ2FydC5sZW5ndGg7XG5cblx0XHRjYXJkc1ByaWNlLmZvckVhY2goKGNhcmRQcmljZSkgPT4ge1xuXHRcdFx0bGV0IHByaWNlID0gcGFyc2VGbG9hdChjYXJkUHJpY2UudGV4dENvbnRlbnQpO1xuXHRcdFx0c3VtICs9IHByaWNlO1xuXHRcdFx0Y29uc29sZS5sb2coc3VtKTtcblx0XHR9KTtcblxuXHRcdGNhcmRUb3RhbC50ZXh0Q29udGVudCA9IHN1bTtcblxuXHRcdGlmIChjYXJkc0NhcnQubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHRjYXJ0RW1wdHkucmVtb3ZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhcnRXcmFwcGVyLmFwcGVuZENoaWxkKGNhcnRFbXB0eSk7XG5cdFx0fVxuXHR9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/addCart.js\n");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter() {\n\tconst cards = document.querySelectorAll('.goods .card'),\n\t\tdiscountCheckbox = document.getElementById('discount-checkbox'),\n\t\tmin = document.getElementById('min'),\n\t\tmax = document.getElementById('max'),\n\t\tactiveLi = document.querySelector('.catalog-list li.active');\n\tcards.forEach((card) => {\n\t\tconst cardPrice = card.querySelector('.card-price');\n\t\tconst price = parseFloat(cardPrice.textContent);\n\t\tconst discount = card.querySelector('.card-sale');\n\n\t\tcard.parentNode.style.display = '';\n\n\t\tif ((min.value && price < min.value) || (max.value && price > max.value)) {\n\t\t\tcard.parentNode.style.display = 'none';\n\t\t} else if (discountCheckbox.checked && !discount) {\n\t\t\tcard.parentNode.style.display = 'none';\n\t\t} else if (activeLi) {\n\t\t\tif (card.dataset.category !== activeLi.textContent) {\n\t\t\t\tcard.parentNode.style.display = 'none';\n\t\t\t}\n\t\t}\n\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9maWx0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vem9uZXN0YXJ0Ly4vc3JjL21vZHVsZXMvZmlsdGVyLmpzPzk0ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyKCkge1xuXHRjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb29kcyAuY2FyZCcpLFxuXHRcdGRpc2NvdW50Q2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY291bnQtY2hlY2tib3gnKSxcblx0XHRtaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluJyksXG5cdFx0bWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heCcpLFxuXHRcdGFjdGl2ZUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctbGlzdCBsaS5hY3RpdmUnKTtcblx0Y2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdGNvbnN0IGNhcmRQcmljZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtcHJpY2UnKTtcblx0XHRjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoY2FyZFByaWNlLnRleHRDb250ZW50KTtcblx0XHRjb25zdCBkaXNjb3VudCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtc2FsZScpO1xuXG5cdFx0Y2FyZC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuXHRcdGlmICgobWluLnZhbHVlICYmIHByaWNlIDwgbWluLnZhbHVlKSB8fCAobWF4LnZhbHVlICYmIHByaWNlID4gbWF4LnZhbHVlKSkge1xuXHRcdFx0Y2FyZC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fSBlbHNlIGlmIChkaXNjb3VudENoZWNrYm94LmNoZWNrZWQgJiYgIWRpc2NvdW50KSB7XG5cdFx0XHRjYXJkLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9IGVsc2UgaWYgKGFjdGl2ZUxpKSB7XG5cdFx0XHRpZiAoY2FyZC5kYXRhc2V0LmNhdGVnb3J5ICE9PSBhY3RpdmVMaS50ZXh0Q29udGVudCkge1xuXHRcdFx0XHRjYXJkLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/filter.js\n");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\nfunction getData() {\n\tconst goodsWrapper = document.querySelector('.goods');\n\treturn fetch('../db/db.json')\n\t\t.then((response) => {\n\t\t\tif (response.ok) {\n\t\t\t\treturn response.json();\n\t\t\t} else {\n\t\t\t\tthrow new Error('Данные не были получены, ошибка: ' + response.status);\n\t\t\t}\n\t\t})\n\t\t.then((data) => {\n\t\t\treturn data;\n\t\t})\n\t\t.catch((err) => {\n\t\t\tconsole.warn(err);\n\t\t\tgoodsWrapper.innerHTML = '<div style=\"color:red; font-size:30px\">Запустите сервер для загрузки товаров...</div>';\n\t\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3pvbmVzdGFydC8uL3NyYy9tb2R1bGVzL2dldERhdGEuanM/NzVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRhKCkge1xuXHRjb25zdCBnb29kc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHMnKTtcblx0cmV0dXJuIGZldGNoKCcuLi9kYi9kYi5qc29uJylcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCfQlNCw0L3QvdGL0LUg0L3QtSDQsdGL0LvQuCDQv9C+0LvRg9GH0LXQvdGLLCDQvtGI0LjQsdC60LA6ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUud2FybihlcnIpO1xuXHRcdFx0Z29vZHNXcmFwcGVyLmlubmVySFRNTCA9ICc8ZGl2IHN0eWxlPVwiY29sb3I6cmVkOyBmb250LXNpemU6MzBweFwiPtCX0LDQv9GD0YHRgtC40YLQtSDRgdC10YDQstC10YAg0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YLQvtCy0LDRgNC+0LIuLi48L2Rpdj4nO1xuXHRcdH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getData.js\n");

/***/ }),

/***/ "./src/modules/renderCards.js":
/*!************************************!*\
  !*** ./src/modules/renderCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderCards)\n/* harmony export */ });\nfunction renderCards(data) {\n\tconst goodsWrapper = document.querySelector('.goods');\n\tdata.goods.forEach((good) => {\n\t\tconst card = document.createElement('div');\n\t\tcard.className = '<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">';\n\t\tcard.innerHTML = `      \n\t\t\t\t<div class=\"card\" data-category=\"${good.category}\">\n\t\t\t\t\t${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}          \n          <div class=\"card-img-wrapper\">\n            <span class=\"card-img-top\"\n              style=\"background-image: url('${good.img}')\"></span>\n          </div>\n          <div class=\"card-body justify-content-between\">\n            <div class=\"card-price\" style=\"${good.sale ? 'color:red' : ''}\">${good.price} Руб.</div>\n            <h5 class=\"card-title\">${good.title}</h5>\n            <button class=\"btn btn-primary\">В корзину</button>\n          </div>\n        </div>`;\n\n\t\tgoodsWrapper.appendChild(card);\n\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9yZW5kZXJDYXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWM7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0EsNkNBQTZDLDZCQUE2QixJQUFJLFlBQVk7QUFDMUYscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3pvbmVzdGFydC8uL3NyYy9tb2R1bGVzL3JlbmRlckNhcmRzLmpzPzdkZmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ2FyZHMoZGF0YSkge1xuXHRjb25zdCBnb29kc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHMnKTtcblx0ZGF0YS5nb29kcy5mb3JFYWNoKChnb29kKSA9PiB7XG5cdFx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGNhcmQuY2xhc3NOYW1lID0gJzxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIj4nO1xuXHRcdGNhcmQuaW5uZXJIVE1MID0gYCAgICAgIFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiIGRhdGEtY2F0ZWdvcnk9XCIke2dvb2QuY2F0ZWdvcnl9XCI+XG5cdFx0XHRcdFx0JHtnb29kLnNhbGUgPyAnPGRpdiBjbGFzcz1cImNhcmQtc2FsZVwiPvCflKVIb3QgU2FsZfCflKU8L2Rpdj4nIDogJyd9ICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2dvb2QuaW1nfScpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXByaWNlXCIgc3R5bGU9XCIke2dvb2Quc2FsZSA/ICdjb2xvcjpyZWQnIDogJyd9XCI+JHtnb29kLnByaWNlfSDQoNGD0LEuPC9kaXY+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtnb29kLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+0JIg0LrQvtGA0LfQuNC90YM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcblxuXHRcdGdvb2RzV3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcblx0fSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/renderCards.js\n");

/***/ }),

/***/ "./src/modules/renderCatalog.js":
/*!**************************************!*\
  !*** ./src/modules/renderCatalog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderCatalog)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\n\nfunction renderCatalog() {\n\tconst cards = document.querySelectorAll('.goods .card');\n\tconst catalogList = document.querySelector('.catalog-list');\n\tconst catalogWrapper = document.querySelector('.catalog');\n\tconst catalogBtn = document.querySelector('.catalog-button');\n\tconst categories = new Set();\n\tconst filterTitle = document.querySelector('.filter-title h5');\n\n\tcards.forEach((card) => {\n\t\tcategories.add(card.dataset.category);\n\t});\n\n\tcategories.forEach((item) => {\n\t\tconst li = document.createElement('li');\n\t\tli.textContent = item;\n\t\tcatalogList.appendChild(li);\n\t});\n\n\tconst allLi = catalogList.querySelectorAll('li');\n\n\tcatalogBtn.addEventListener('click', () => {\n\t\tif (catalogWrapper.style.display) {\n\t\t\tcatalogWrapper.style.display = '';\n\t\t} else {\n\t\t\tcatalogWrapper.style.display = 'block';\n\t\t}\n\n\t\tif (event.target.tagName === 'LI') {\n\t\t\t// cards.forEach((card) => {\n\t\t\t// \tif (card.dataset.category === event.target.textContent) {\n\t\t\t// \t\tcard.parentNode.style.display = '';\n\t\t\t// \t} else {\n\t\t\t// \t\tcard.parentNode.style.display = 'none';\n\t\t\t// \t}\n\t\t\t// });\n\t\t\tallLi.forEach((elem) => {\n\t\t\t\tif (elem === event.target) {\n\t\t\t\t\telem.classList.add('active');\n\t\t\t\t} else {\n\t\t\t\t\telem.classList.remove('active');\n\t\t\t\t}\n\t\t\t});\n\t\t\tfilterTitle.textContent = event.target.textContent;\n\t\t\t(0,_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t\t}\n\t});\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9yZW5kZXJDYXRhbG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCOztBQUVmO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRyxtREFBTTtBQUNUO0FBQ0EsRUFBRTs7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL296b25lc3RhcnQvLi9zcmMvbW9kdWxlcy9yZW5kZXJDYXRhbG9nLmpzPzM3NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNhdGFsb2coKSB7XG5cdGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvb2RzIC5jYXJkJyk7XG5cdGNvbnN0IGNhdGFsb2dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2ctbGlzdCcpO1xuXHRjb25zdCBjYXRhbG9nV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nJyk7XG5cdGNvbnN0IGNhdGFsb2dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZy1idXR0b24nKTtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZmlsdGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXRpdGxlIGg1Jyk7XG5cblx0Y2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuXHRcdGNhdGVnb3JpZXMuYWRkKGNhcmQuZGF0YXNldC5jYXRlZ29yeSk7XG5cdH0pO1xuXG5cdGNhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaS50ZXh0Q29udGVudCA9IGl0ZW07XG5cdFx0Y2F0YWxvZ0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuXHR9KTtcblxuXHRjb25zdCBhbGxMaSA9IGNhdGFsb2dMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cblx0Y2F0YWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRpZiAoY2F0YWxvZ1dyYXBwZXIuc3R5bGUuZGlzcGxheSkge1xuXHRcdFx0Y2F0YWxvZ1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRhbG9nV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpIHtcblx0XHRcdC8vIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcblx0XHRcdC8vIFx0aWYgKGNhcmQuZGF0YXNldC5jYXRlZ29yeSA9PT0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSB7XG5cdFx0XHQvLyBcdFx0Y2FyZC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdC8vIFx0XHRjYXJkLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfSk7XG5cdFx0XHRhbGxMaS5mb3JFYWNoKChlbGVtKSA9PiB7XG5cdFx0XHRcdGlmIChlbGVtID09PSBldmVudC50YXJnZXQpIHtcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0ZmlsdGVyVGl0bGUudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG5cdFx0XHRmaWx0ZXIoKTtcblx0XHR9XG5cdH0pO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/renderCatalog.js\n");

/***/ }),

/***/ "./src/modules/toggleCart.js":
/*!***********************************!*\
  !*** ./src/modules/toggleCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleCart)\n/* harmony export */ });\nfunction toggleCart() {\n\tconst btnCart = document.getElementById('cart');\n\tconst modalCart = document.querySelector('.cart');\n\tconst closeBtn = document.querySelector('.cart-close');\n\n\tbtnCart.addEventListener('click', () => {\n\t\tmodalCart.style.display = 'flex';\n\t\tdocument.body.style.overflow = 'hidden';\n\t});\n\n\tcloseBtn.addEventListener('click', () => {\n\t\tmodalCart.style.display = '';\n\t\tdocument.body.style.overflow = '';\n\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90b2dnbGVDYXJ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL296b25lc3RhcnQvLi9zcmMvbW9kdWxlcy90b2dnbGVDYXJ0LmpzPzRlNWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2FydCgpIHtcblx0Y29uc3QgYnRuQ2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0Jyk7XG5cdGNvbnN0IG1vZGFsQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtY2xvc2UnKTtcblxuXHRidG5DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdG1vZGFsQ2FydC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0fSk7XG5cblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0bW9kYWxDYXJ0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG5cdH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/toggleCart.js\n");

/***/ }),

/***/ "./src/modules/toggleCheckbox.js":
/*!***************************************!*\
  !*** ./src/modules/toggleCheckbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleCheckbox)\n/* harmony export */ });\nfunction toggleCheckbox() {\n\tconst checkbox = document.querySelectorAll('.filter-check_checkbox');\n\n\tcheckbox.forEach(function (elem) {\n\t\telem.addEventListener('change', function () {\n\t\t\tif (this.checked) {\n\t\t\t\tthis.nextElementSibling.classList.add('checked');\n\t\t\t} else {\n\t\t\t\tthis.nextElementSibling.classList.remove('checked');\n\t\t\t}\n\t\t});\n\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90b2dnbGVDaGVja2JveC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL296b25lc3RhcnQvLi9zcmMvbW9kdWxlcy90b2dnbGVDaGVja2JveC5qcz8zNjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUNoZWNrYm94KCkge1xuXHRjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItY2hlY2tfY2hlY2tib3gnKTtcblxuXHRjaGVja2JveC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodGhpcy5jaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/toggleCheckbox.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;