(this.webpackJsonpdigits=this.webpackJsonpdigits||[]).push([[0],{28:function(n,e,t){n.exports=t(41)},33:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(19),i=t.n(o),c=(t(33),t(5)),l=t(7),s=t(2),u=t(3);function d(){var n=Object(s.a)(["\n  letter-spacing: 0.05em;\n  text-align: center;\n  padding-top: 1em;\n"]);return d=function(){return n},n}function m(){var n=Object(s.a)(["\n  width: calc(100% - 32px);\n  height: 2em;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  letter-spacing: 0.1em;\n  border-radius: 6px;\n  border: none;\n  text-align: center;\n"]);return m=function(){return n},n}function f(){var n=Object(s.a)(["\n  max-width: 730px;\n  margin: auto;\n"]);return f=function(){return n},n}function p(){var n=Object(s.a)(["\n  margin: auto;\n  text-align: center;\n  text-decoration: none;\n  margin-bottom: 2em;\n"]);return p=function(){return n},n}function b(){var n=Object(s.a)(["\n  padding: 4.16% 8.33%;\n"]);return b=function(){return n},n}function h(){var n=Object(s.a)(['\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: \'Montserrat\', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    font-size: 16px;\n}\n\nul {\n    list-style: none;\n}\n\na {\n    color: #9acd91;\n    text-decoration: none;\n}\n\n#root {\n    height: 100%;\n    width: 100%;\n    background-color: #00b7b8;\n    background-image: linear-gradient(to right top, #845ec2, #0086e6, #00a3e0, #00b7b8, #35c486);\n}\n']);return h=function(){return n},n}var g=Object(u.a)(h()),v=u.b.div(b()),E=u.b.h1(p()),w=u.b.main(f()),x=u.b.input(m()),k=u.b.h2(d()),y=t(8),O=t(23),j=t.n(O),C=t(27),z=[1,2,3,4,5,6,7,8,9];function A(n,e){if(n.length!==e.length)throw console.error(n,e),Error("Ambos arrays devem ter as mesmas dimens\xf5es");for(var t=0,a=0;a<n.length;a++)t+=n[a]*e[a];return t}function N(){var n=Object(a.useState)(""),e=Object(y.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(""),c=Object(y.a)(i,2),l=c[0],s=c[1];return r.a.createElement(w,null,r.a.createElement(E,null,"CPF"),r.a.createElement("p",null,"No campo abaixo, digite o seu CPF e descubra quais s\xe3o os seus d\xedgitos verificadores."),r.a.createElement(j.a,{value:t,mask:[/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/,".",/\d/,/\d/,/\d/],className:"form-control input",guide:!0,placeholder:"Digite o seu CPF",id:"input-cpf",type:"text",onChange:function(n){var e=n.target.value||"";if((e=e.replace(/\./g,"").replace(/_/g,""))!==t){if(console.log(e),o(e),9===e.length)try{var a=function(n,e){var t=Object(y.a)(e,2),a=t[0],r=t[1],o=Array.from(n).reduce((function(n,e,t,a){return t%3===0&&0!==t&&t!==a.length-1&&(n+="."),n+=e}),"");return"".concat(o,"-").concat(a).concat(r)}(e,function(n){var e=Array.from(n).map((function(n){return Number(n)})),t=A(z,e)%11,a=10===t?0:t,r=[].concat(Object(C.a)(e),[a]),o=A([0].concat(z),r)%11;return[a,10===o?0:o]}(e));return s(a)}catch(n){console.error(n)}s("")}},render:function(n,e){return r.a.createElement(x,Object.assign({ref:n},e))}}),l&&r.a.createElement(k,null,"O seu CPF \xe9: ",l))}function S(){return r.a.createElement(w,null,r.a.createElement(E,null,"Bem vindo!"),r.a.createElement("p",null,"Neste site voc\xea pode descobrir mais sobre d\xedgitos verificadores e como s\xe3o utilizados em diversas partes do seu dia a dia."),r.a.createElement("p",null,"Navegue pelas se\xe7\xf5es e descubra como estes d\xedgitos funcionam e afetam a sua vida. Um dica, come\xe7e pela se\xe7\xe3o ",r.a.createElement(c.b,{to:"/cpf"},"CPF"),"."),r.a.createElement("p",null,"N\xe3o se preocupe, nenhuma de suas informa\xe7\xf5es ser\xe1 salva ou compartilhada. Na verdade, elas nunca ir\xe3o deixar o seu computador, pois todos os c\xe1lculos que utilizamos s\xe3o realizados no seu navegador."))}function F(){var n=Object(s.a)(["\n  position: absolute;\n  display: inline-block;\n  text-align: center;\n  bottom: 4.16%;\n  margin: auto;\n  left: 0;\n  right: 0;\n  z-index: 11;\n"]);return F=function(){return n},n}var P=u.b.div(F());function W(){return r.a.createElement(P,null,r.a.createElement("span",null,"Feito por"," ",r.a.createElement("a",{href:"https://hugoas.dev",target:"_blank",rel:"noopener noreferrer"},"Hugo Azevedo")))}function L(){var n=Object(s.a)(["\n  li {\n    margin-left: 2em;\n    margin-right: 2em;\n  }\n"]);return L=function(){return n},n}function R(){var n=Object(s.a)(['\n  display: block;\n  position: relative;\n  height: 30px;\n\n  a {\n    color: white !important;\n    text-transform: uppercase;\n    letter-spacing: 0.063em;\n    font-size: 0.75em;\n    padding-bottom: 0;\n\n    &::before {\n      transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;\n      background: #845ec2;\n    }\n\n    &::after {\n      transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);\n      background: #2fffad;\n    }\n\n    &::after,\n    &::before {\n      content: "";\n      position: absolute;\n      top: calc(100% + 8px);\n      width: 0;\n      right: 0;\n      height: 3px;\n    }\n\n    &.active:after {\n      background: #2fffad;\n      width: 100%;\n      left: 0;\n    }\n\n    &:hover::after,\n    &:hover::before {\n      width: 100%;\n      left: 0;\n    }\n  }\n']);return R=function(){return n},n}function B(){var n=Object(s.a)(["\n  background: transparent;\n  transition: top 1s ease;\n  color: white !important;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: max(4.16%, 4em);\n  padding: 0;\n  margin-top: 0;\n"]);return B=function(){return n},n}var U=u.b.ul(B()),I=u.b.li(R()),M=Object(u.b)(I)(L());function q(n){var e=n.matchesLocation,t=n.brand,a=n.navigationItems,o=n.about;return r.a.createElement(U,null,r.a.createElement(I,null,r.a.createElement(c.b,{to:"/",isActive:e(t)},t.title)),r.a.createElement(M,null,r.a.createElement(U,null,a.map((function(n){return r.a.createElement(I,{key:n.path,className:n.disabled?"inner-link-holder--disabled":""},r.a.createElement(c.b,{to:n.path,isActive:e(n.path)},n.title))})))),r.a.createElement(I,null,r.a.createElement(c.b,{to:o.path,isActive:e(o)},o.title)))}function D(){var n=Object(s.a)(["\n  position: absolute;\n  left: 8.33%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 11;\n  margin-top: 5px;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: white;\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return D=function(){return n},n}var H=u.b.button(D(),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"rotate3d(0, 1, 0, 90deg)":"rotate(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),J=function(n){var e=n.open,t=n.setOpen;return r.a.createElement(H,{open:e,onClick:function(){return t(!e)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};function T(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #00a3e0;\n  height: 100vh;\n  text-align: left;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  transition: transform 0.3s ease-in-out;\n  transform: ",";\n\n  @media (max-width: 900px) {\n    width: 100%;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: white;\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 900px) {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: #845ec2;\n    }\n  }\n"]);return T=function(){return n},n}var V=u.b.nav(T(),(function(n){return n.open?"translateX(0)":"translateX(-100%)"}));function X(n){var e=n.open,t=n.setOpen,a=n.navigationItems,o=n.matchesLocation,i=n.brand,l=n.about;return r.a.createElement(V,{open:e},r.a.createElement(c.b,{className:i.disabled?"disabled":"",onClick:function(){return t(!1)},to:i.path,isActive:o(i.path)},i.title),a.map((function(n){return r.a.createElement(c.b,{className:n.disabled?"disabled":"",onClick:function(){return t(!1)},key:n.path,to:n.path,isActive:o(n.path)},n.title)})),r.a.createElement(c.b,{className:i.disabled?"disabled":"",onClick:function(){return t(!1)},to:l.path,isActive:o(l.path)},l.title))}function _(n){var e,t,o=Object(a.useState)(!1),i=Object(y.a)(o,2),c=i[0],l=i[1],s=Object(a.useRef)();return e=s,t=function(){return l(!1)},Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)}}),[e,t]),r.a.createElement("div",{ref:s},r.a.createElement(J,{open:c,setOpen:l}),r.a.createElement(X,Object.assign({open:c,setOpen:l},n)))}var $=t(26);var G={brand:{title:"D\xedgitos verificadores",path:"/"},navigationItems:[{title:"CPF",path:"/cpf"},{title:"Cart\xe3o de cr\xe9dito (EM BREVE)",path:"/credit",disabled:!0},{title:"C\xf3digo de barras (EM BREVE)",path:"/barcode",disabled:!0}],about:{title:"Sobre",path:"/about"},matchesLocation:function(n){var e=n.path;return function(n,t){return t===e}}};function K(){return r.a.createElement($.a,{query:"(max-width: 900px)"},(function(n){return n?r.a.createElement(_,G):r.a.createElement(q,G)}))}var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(c.a,{basename:"/digits"},r.a.createElement(v,{id:"main"},r.a.createElement(K,null),r.a.createElement(l.b,{exact:!0,path:"/",component:S}),r.a.createElement(l.b,{exact:!0,path:"/cpf",component:N}),r.a.createElement(l.a,{to:"/"}),r.a.createElement(W,null))))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/digits",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/digits","/service-worker.js");Y?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Z(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(e,n)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.b74ebc97.chunk.js.map