"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next-themes/dist/index.module.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-themes/dist/index.module.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": function() { return /* binding */ $; },\n/* harmony export */   \"useTheme\": function() { return /* binding */ y; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nconst c=[\"light\",\"dark\"],i=\"(prefers-color-scheme: dark)\",d=\"undefined\"==typeof window,u=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),h={setTheme:e=>{},themes:[]},y=()=>{var e;return null!==(e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(u))&&void 0!==e?e:h},$=r=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(u)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r.children):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(f,r),v=[\"light\",\"dark\"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:m=!0,storageKey:d=\"theme\",themes:h=v,defaultTheme:y=(l?\"system\":\"light\"),attribute:$=\"data-theme\",value:f,children:w,nonce:T})=>{const[E,k]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>S(d,y)),[C,L]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>S(d)),x=f?Object.values(f):h,I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{let t=e;if(!t)return;\"system\"===e&&l&&(t=p());const r=f?f[t]:t,o=n?b():null,a=document.documentElement;if(\"class\"===$?(a.classList.remove(...x),r&&a.classList.add(r)):r?a.setAttribute($,r):a.removeAttribute($),m){const e=c.includes(y)?y:null,n=c.includes(t)?t:e;a.style.colorScheme=n}null==o||o()},[]),O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{k(e);try{localStorage.setItem(d,e)}catch(e){}},[t]),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{const n=p(e);L(n),\"system\"===E&&l&&!t&&I(\"system\")},[E,t]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const e=window.matchMedia(i);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const e=e=>{e.key===d&&O(e.newValue||y)};return window.addEventListener(\"storage\",e),()=>window.removeEventListener(\"storage\",e)},[O]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{I(null!=t?t:E)},[t,E]);const A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({theme:E,setTheme:O,forcedTheme:t,resolvedTheme:\"system\"===E?C:E,themes:l?[...h,\"system\"]:h,systemTheme:l?C:void 0}),[E,O,t,C,l,h]);/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(u.Provider,{value:A},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(g,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:l,enableColorScheme:m,storageKey:d,themes:h,defaultTheme:y,attribute:$,value:f,children:w,attrs:x,nonce:T}),w)},g=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:o,enableColorScheme:a,defaultTheme:s,value:l,attrs:m,nonce:d})=>{const u=\"system\"===s,h=\"class\"===r?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(\",\")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,y=a?c.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:\"if(e==='light'||e==='dark')d.style.colorScheme=e\":\"\",$=(e,t=!1,n=!0)=>{const o=l?l[e]:e,s=t?e+\"|| ''\":`'${o}'`;let m=\"\";return a&&n&&!t&&c.includes(e)&&(m+=`d.style.colorScheme = '${e}';`),\"class\"===r?m+=t||o?`c.add(${s})`:\"null\":o&&(m+=`d[s](n,${s})`),m},v=t?`!function(){${h}${$(t)}}()`:o?`!function(){try{${h}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${u})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$(\"dark\")}}else{${$(\"light\")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:\"\"}${$(l?\"x[e]\":\"e\",!0)}}${u?\"\":\"else{\"+$(s,!1,!1)+\"}\"}${y}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${n}');if(e){${l?`var x=${JSON.stringify(l)};`:\"\"}${$(l?\"x[e]\":\"e\",!0)}}else{${$(s,!1,!1)};}${y}}catch(t){}}();`;/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),S=(e,t)=>{if(d)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},b=()=>{const e=document.createElement(\"style\");return e.appendChild(document.createTextNode(\"*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}\")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?\"dark\":\"light\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC10aGVtZXMvZGlzdC9pbmRleC5tb2R1bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0SSxzR0FBc0csb0RBQUMsWUFBWSxjQUFjLFdBQVcsUUFBUSxNQUFNLGlCQUFpQixpREFBQyxxQkFBcUIsTUFBTSxpREFBQyxpQkFBaUIsMERBQWUsQ0FBQywyQ0FBQywrQkFBK0IsMERBQWUsNkJBQTZCLDhNQUE4TSxJQUFJLFdBQVcsK0NBQUMsbUJBQW1CLCtDQUFDLG9DQUFvQyxrREFBQyxLQUFLLFFBQVEsYUFBYSx5QkFBeUIseURBQXlELDhHQUE4RyxpREFBaUQsc0JBQXNCLGFBQWEsT0FBTyxrREFBQyxLQUFLLEtBQUssSUFBSSwwQkFBMEIsV0FBVyxRQUFRLGtEQUFDLEtBQUssYUFBYSxzQ0FBc0MsUUFBUSxnREFBQyxNQUFNLDZCQUE2QixxREFBcUQsTUFBTSxnREFBQyxNQUFNLFlBQVksNkJBQTZCLHdGQUF3RixNQUFNLGdEQUFDLE1BQU0sZUFBZSxRQUFRLFFBQVEsOENBQUMsT0FBTyxrSEFBa0gsaUJBQWlCLG9CQUFvQiwwREFBZSxhQUFhLFFBQVEsY0FBYywwREFBZSxJQUFJLGlLQUFpSyxLQUFLLGdCQUFnQiwyQ0FBQyxHQUFHLGlIQUFpSCxJQUFJLGlGQUFpRixXQUFXLGFBQWEsRUFBRSxjQUFjLEVBQUUsdUNBQXVDLEVBQUUsbUJBQW1CLGlGQUFpRixFQUFFLDJFQUEyRSxtQ0FBbUMsRUFBRSxHQUFHLFNBQVMsOERBQThELEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixJQUFJLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSxHQUFHLHdCQUF3QixFQUFFLEdBQUcsU0FBUyxFQUFFLHlCQUF5QiwyQkFBMkIsRUFBRSxXQUFXLEtBQUssRUFBRSxhQUFhLFdBQVcsRUFBRSxXQUFXLG1CQUFtQixLQUFLLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxlQUFlLEVBQUUsRUFBRSxHQUFHLFdBQVcsaUJBQWlCLElBQUksRUFBRSxFQUFFLDhCQUE4QixFQUFFLEdBQUcsTUFBTSxFQUFFLFdBQVcsbUJBQW1CLEtBQUssRUFBRSxvQkFBb0IsS0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLG9CQUFvQiwwREFBZSxXQUFXLGlDQUFpQyxVQUFVLEVBQUUsbUJBQW1CLFlBQVksTUFBTSxJQUFJLGtDQUFrQyxVQUFVLFlBQVksUUFBUSx3Q0FBd0MsZ0RBQWdELGtDQUFrQywrQkFBK0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsc0NBQXNDLHVEQUF1RCw2QkFBNkIsS0FBSyw2REFBc0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtdGhlbWVzL2Rpc3QvaW5kZXgubW9kdWxlLmpzP2Y0NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGUse3VzZUNvbnRleHQgYXMgdCxGcmFnbWVudCBhcyBuLHVzZVN0YXRlIGFzIHIsdXNlQ2FsbGJhY2sgYXMgbyx1c2VFZmZlY3QgYXMgYSx1c2VNZW1vIGFzIHMsbWVtbyBhcyBsLGNyZWF0ZUNvbnRleHQgYXMgbX1mcm9tXCJyZWFjdFwiO2NvbnN0IGM9W1wibGlnaHRcIixcImRhcmtcIl0saT1cIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIixkPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3csdT0vKiNfX1BVUkVfXyovbSh2b2lkIDApLGg9e3NldFRoZW1lOmU9Pnt9LHRoZW1lczpbXX0seT0oKT0+e3ZhciBlO3JldHVybiBudWxsIT09KGU9dCh1KSkmJnZvaWQgMCE9PWU/ZTpofSwkPXI9PnQodSk/LyojX19QVVJFX18qL2UuY3JlYXRlRWxlbWVudChuLG51bGwsci5jaGlsZHJlbik6LyojX19QVVJFX18qL2UuY3JlYXRlRWxlbWVudChmLHIpLHY9W1wibGlnaHRcIixcImRhcmtcIl0sZj0oe2ZvcmNlZFRoZW1lOnQsZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZTpuPSExLGVuYWJsZVN5c3RlbTpsPSEwLGVuYWJsZUNvbG9yU2NoZW1lOm09ITAsc3RvcmFnZUtleTpkPVwidGhlbWVcIix0aGVtZXM6aD12LGRlZmF1bHRUaGVtZTp5PShsP1wic3lzdGVtXCI6XCJsaWdodFwiKSxhdHRyaWJ1dGU6JD1cImRhdGEtdGhlbWVcIix2YWx1ZTpmLGNoaWxkcmVuOncsbm9uY2U6VH0pPT57Y29uc3RbRSxrXT1yKCgpPT5TKGQseSkpLFtDLExdPXIoKCk9PlMoZCkpLHg9Zj9PYmplY3QudmFsdWVzKGYpOmgsST1vKGU9PntsZXQgdD1lO2lmKCF0KXJldHVybjtcInN5c3RlbVwiPT09ZSYmbCYmKHQ9cCgpKTtjb25zdCByPWY/Zlt0XTp0LG89bj9iKCk6bnVsbCxhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtpZihcImNsYXNzXCI9PT0kPyhhLmNsYXNzTGlzdC5yZW1vdmUoLi4ueCksciYmYS5jbGFzc0xpc3QuYWRkKHIpKTpyP2Euc2V0QXR0cmlidXRlKCQscik6YS5yZW1vdmVBdHRyaWJ1dGUoJCksbSl7Y29uc3QgZT1jLmluY2x1ZGVzKHkpP3k6bnVsbCxuPWMuaW5jbHVkZXModCk/dDplO2Euc3R5bGUuY29sb3JTY2hlbWU9bn1udWxsPT1vfHxvKCl9LFtdKSxPPW8oZT0+e2soZSk7dHJ5e2xvY2FsU3RvcmFnZS5zZXRJdGVtKGQsZSl9Y2F0Y2goZSl7fX0sW3RdKSxNPW8oZT0+e2NvbnN0IG49cChlKTtMKG4pLFwic3lzdGVtXCI9PT1FJiZsJiYhdCYmSShcInN5c3RlbVwiKX0sW0UsdF0pO2EoKCk9Pntjb25zdCBlPXdpbmRvdy5tYXRjaE1lZGlhKGkpO3JldHVybiBlLmFkZExpc3RlbmVyKE0pLE0oZSksKCk9PmUucmVtb3ZlTGlzdGVuZXIoTSl9LFtNXSksYSgoKT0+e2NvbnN0IGU9ZT0+e2Uua2V5PT09ZCYmTyhlLm5ld1ZhbHVlfHx5KX07cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLGUpLCgpPT53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIixlKX0sW09dKSxhKCgpPT57SShudWxsIT10P3Q6RSl9LFt0LEVdKTtjb25zdCBBPXMoKCk9Pih7dGhlbWU6RSxzZXRUaGVtZTpPLGZvcmNlZFRoZW1lOnQscmVzb2x2ZWRUaGVtZTpcInN5c3RlbVwiPT09RT9DOkUsdGhlbWVzOmw/Wy4uLmgsXCJzeXN0ZW1cIl06aCxzeXN0ZW1UaGVtZTpsP0M6dm9pZCAwfSksW0UsTyx0LEMsbCxoXSk7LyojX19QVVJFX18qL3JldHVybiBlLmNyZWF0ZUVsZW1lbnQodS5Qcm92aWRlcix7dmFsdWU6QX0sLyojX19QVVJFX18qL2UuY3JlYXRlRWxlbWVudChnLHtmb3JjZWRUaGVtZTp0LGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2U6bixlbmFibGVTeXN0ZW06bCxlbmFibGVDb2xvclNjaGVtZTptLHN0b3JhZ2VLZXk6ZCx0aGVtZXM6aCxkZWZhdWx0VGhlbWU6eSxhdHRyaWJ1dGU6JCx2YWx1ZTpmLGNoaWxkcmVuOncsYXR0cnM6eCxub25jZTpUfSksdyl9LGc9LyojX19QVVJFX18qL2woKHtmb3JjZWRUaGVtZTp0LHN0b3JhZ2VLZXk6bixhdHRyaWJ1dGU6cixlbmFibGVTeXN0ZW06byxlbmFibGVDb2xvclNjaGVtZTphLGRlZmF1bHRUaGVtZTpzLHZhbHVlOmwsYXR0cnM6bSxub25jZTpkfSk9Pntjb25zdCB1PVwic3lzdGVtXCI9PT1zLGg9XCJjbGFzc1wiPT09cj9gdmFyIGQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGM9ZC5jbGFzc0xpc3Q7Yy5yZW1vdmUoJHttLm1hcChlPT5gJyR7ZX0nYCkuam9pbihcIixcIil9KTtgOmB2YXIgZD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsbj0nJHtyfScscz0nc2V0QXR0cmlidXRlJztgLHk9YT9jLmluY2x1ZGVzKHMpJiZzP2BpZihlPT09J2xpZ2h0J3x8ZT09PSdkYXJrJ3x8IWUpZC5zdHlsZS5jb2xvclNjaGVtZT1lfHwnJHtzfSdgOlwiaWYoZT09PSdsaWdodCd8fGU9PT0nZGFyaycpZC5zdHlsZS5jb2xvclNjaGVtZT1lXCI6XCJcIiwkPShlLHQ9ITEsbj0hMCk9Pntjb25zdCBvPWw/bFtlXTplLHM9dD9lK1wifHwgJydcIjpgJyR7b30nYDtsZXQgbT1cIlwiO3JldHVybiBhJiZuJiYhdCYmYy5pbmNsdWRlcyhlKSYmKG0rPWBkLnN0eWxlLmNvbG9yU2NoZW1lID0gJyR7ZX0nO2ApLFwiY2xhc3NcIj09PXI/bSs9dHx8bz9gYy5hZGQoJHtzfSlgOlwibnVsbFwiOm8mJihtKz1gZFtzXShuLCR7c30pYCksbX0sdj10P2AhZnVuY3Rpb24oKXske2h9JHskKHQpfX0oKWA6bz9gIWZ1bmN0aW9uKCl7dHJ5eyR7aH12YXIgZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnJHtufScpO2lmKCdzeXN0ZW0nPT09ZXx8KCFlJiYke3V9KSl7dmFyIHQ9JyR7aX0nLG09d2luZG93Lm1hdGNoTWVkaWEodCk7aWYobS5tZWRpYSE9PXR8fG0ubWF0Y2hlcyl7JHskKFwiZGFya1wiKX19ZWxzZXskeyQoXCJsaWdodFwiKX19fWVsc2UgaWYoZSl7JHtsP2B2YXIgeD0ke0pTT04uc3RyaW5naWZ5KGwpfTtgOlwiXCJ9JHskKGw/XCJ4W2VdXCI6XCJlXCIsITApfX0ke3U/XCJcIjpcImVsc2V7XCIrJChzLCExLCExKStcIn1cIn0ke3l9fWNhdGNoKGUpe319KClgOmAhZnVuY3Rpb24oKXt0cnl7JHtofXZhciBlPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCcke259Jyk7aWYoZSl7JHtsP2B2YXIgeD0ke0pTT04uc3RyaW5naWZ5KGwpfTtgOlwiXCJ9JHskKGw/XCJ4W2VdXCI6XCJlXCIsITApfX1lbHNleyR7JChzLCExLCExKX07fSR7eX19Y2F0Y2godCl7fX0oKTtgOy8qI19fUFVSRV9fKi9yZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse25vbmNlOmQsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDp2fX0pfSwoKT0+ITApLFM9KGUsdCk9PntpZihkKXJldHVybjtsZXQgbjt0cnl7bj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShlKXx8dm9pZCAwfWNhdGNoKGUpe31yZXR1cm4gbnx8dH0sYj0oKT0+e2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiKnstd2Via2l0LXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LW1vei10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LW1zLXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH1cIikpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZSksKCk9Pnt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KSxzZXRUaW1lb3V0KCgpPT57ZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChlKX0sMSl9fSxwPWU9PihlfHwoZT13aW5kb3cubWF0Y2hNZWRpYShpKSksZS5tYXRjaGVzP1wiZGFya1wiOlwibGlnaHRcIik7ZXhwb3J0eyQgYXMgVGhlbWVQcm92aWRlcix5IGFzIHVzZVRoZW1lfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next-themes/dist/index.module.js\n"));

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            process.env.NEXT_PUBLIC_UMAMI_ID && process.env.NEXT_PUBLIC_UMAMI_URL && \"development\" === \"production\" && /*#__PURE__*/ 0,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            \";\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                enableSystem: true,\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tuguldur\\\\Desktop\\\\blog-ordinary\\\\pages\\\\_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNpQztBQUNTO0FBQ2Q7QUFDZ0I7QUFFN0IsU0FBU0csR0FBRyxDQUFDLEtBQWtDLEVBQUU7UUFBbENDLFNBQVMsR0FBWCxLQUFrQyxDQUFoQ0EsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQWtDLENBQXJCQSxTQUFTO0lBQ2hELHFCQUNFOztZQUNHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQy9CRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UscUJBQXFCLElBQ2pDSCxhQVhLLEtBV29CLFlBQVksa0JBQ25DLENBR0U7MEJBRU4sOERBQUNMLG9EQUFPOzs7O29CQUFHOzBCQUNYLDhEQUFDRyxTQUFTLHFGQUFLQyxTQUFTOzs7O29CQUFJO1lBQUEsR0FDNUI7MEJBQUEsOERBQUNILHNEQUFhO2dCQUFDVSxZQUFZLEVBQUUsSUFBSTtnQkFBRUMsU0FBUyxFQUFDLE9BQU87MEJBQ3BELDRFQUFDVCxTQUFTLHFGQUFLQyxTQUFTOzs7O3dCQUFJOzs7OztvQkFDWjs7b0JBQ2YsQ0FDSDtBQUNKLENBQUM7QUFsQnVCRixLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgJ3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICduZXh0LXRoZW1lcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVU1BTUlfSUQgJiZcclxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VTUFNSV9VUkwgJiZcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIChcclxuICAgICAgICAgIDxTY3JpcHRcclxuICAgICAgICAgICAgZGF0YS13ZWJzaXRlLWlkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VTUFNSV9JRH1cclxuICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VTUFNSV9VUkx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIGVuYWJsZVN5c3RlbT17dHJ1ZX0gYXR0cmlidXRlPVwiY2xhc3NcIj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTY3JpcHQiLCJUb2FzdGVyIiwiVGhlbWVQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VTUFNSV9JRCIsIk5FWFRfUFVCTElDX1VNQU1JX1VSTCIsImRhdGEtd2Vic2l0ZS1pZCIsInNyYyIsImVuYWJsZVN5c3RlbSIsImF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});