!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,y=function(){return s.Date.now()};function p(e,t,n){var o,u,i,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=u;return o=u=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),s?j(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function O(){var e=y();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?m(n,i-(e-l)):n}(e))}function T(e){return f=void 0,p&&o?j(e):(o=u=void 0,a)}function w(){var e=y(),n=h(e);if(o=arguments,u=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(O,t),j(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,b(n)&&(s=!!n.leading,i=(d="maxWait"in n)?v(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=u=f=void 0},w.flush=function(){return void 0===f?a:T(y())},w}function b(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=i.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):u.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),S=(document.querySelector("button"),"feedback-form-state"),h={email:"",message:""},O=document.querySelector(".js-input"),T=document.querySelector(".js-textarea"),w=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};j.addEventListener("input",(function(e){e.preventDefault(),h={email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value},function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}(S,h)})),w(S)?(O.value=w(S).email,T.value=w(S).message):(O.value="",T.value=""),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),j.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.062c5df5.js.map