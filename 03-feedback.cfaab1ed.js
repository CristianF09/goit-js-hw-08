var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return g(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function O(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function S(){var e,n,i,o=p();if(O(o))return h(o);f=setTimeout(S,(e=o-l,n=o-c,i=t-e,d?m(i,a-n):i))}function h(e){return(f=void 0,b&&o)?j(e):(o=r=void 0,u)}function T(){var e,n=p(),i=O(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(S,t),s?j(e):u;if(d)return f=setTimeout(S,t),j(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=y(t)||0,g(i)&&(s=!!i.leading,a=(d="maxWait"in i)?v(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}(e,t,{leading:o,maxWait:t,trailing:r})},document.addEventListener("DOMContentLoaded",()=>{var e;let n=document.querySelector(".feedback-form"),i=n.querySelector('input[name="email"]'),o=n.querySelector('textarea[name="message"]'),r="feedback-form-state",a=((e=t)&&e.__esModule?e.default:e)(()=>{let e={email:i.value,message:o.value};localStorage.setItem(r,JSON.stringify(e))},500);i.addEventListener("input",a),o.addEventListener("input",a),(()=>{let e=localStorage.getItem(r);if(e){let{email:t,message:n}=JSON.parse(e);i.value=t||"",o.value=n||""}})(),n.addEventListener("submit",e=>{e.preventDefault(),console.log({email:i.value,message:o.value}),localStorage.removeItem(r),n.reset()})});
//# sourceMappingURL=03-feedback.cfaab1ed.js.map
