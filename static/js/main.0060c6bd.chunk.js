(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/error.6fdafc7f.gif"},27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),u=a(15),s=a(16),o=a(23),i=a(17),m=a(24),d=a(62),f=a(60),p=a(61),E=(a(32),a(59)),h=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"header-title"},r.a.createElement(E.a,{to:"/"},"Game of Thrones DB")),r.a.createElement("ul",{className:"header-list"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/characters/"},"Characters")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/houses/"},"Houses")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/books/"},"Books"))))},b=a(6),v=(a(36),a(2)),g=a.n(v),w=a(7),j=function(){var e=function(){var e=Object(w.a)(g.a.mark(function e(t){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.anapioficeandfire.com/api").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t=function(){var t=Object(w.a)(g.a.mark(function t(){var a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/books/");case 2:return a=t.sent,t.abrupt("return",a.map(i));case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(w.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/books/".concat(a,"/"));case 2:return n=t.sent,t.abrupt("return",i(n));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n=function(){var t=Object(w.a)(g.a.mark(function t(){var a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/characters?page=5&pageSize=10");case 2:return a=t.sent,t.abrupt("return",a.map(s));case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),r=function(){var t=Object(w.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/characters/".concat(a));case 2:return n=t.sent,t.abrupt("return",s(n));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(w.a)(g.a.mark(function t(){var a;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/houses/");case 2:return a=t.sent,t.abrupt("return",a.map(o));case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(w.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/houses/".concat(a,"/"));case 2:return n=t.sent,t.abrupt("return",o(n));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),u=function(e,t){var a=/\/([0-9]*)$/;return t&&e.overlord?e.overlord.match(a)[1]:e.url.match(a)[1]},s=function(e){return{id:u(e),name:e.name||"-",gender:e.gender||"-",born:e.born||"-",died:e.died||"-",culture:e.culture||"-",selectable:e.url}},o=function(e){return{id:u(e,!0),name:e.name||"-",region:e.region||"-",words:e.words||"-",titles:e.titles||"-",overlord:e.overlord||"-",ancestraWeapons:e.ancestraWeapons||"-",selectable:e.overlord}},i=function(e){return{id:u(e),name:e.name||"-",numberOfPages:e.numberOfPages||"-",publisher:e.publisher||"-",released:e.released||"-",selectable:e.url}};return{getResource:e,getAllBooks:t,getBook:a,getAllCharacters:n,getCharacter:r,getAllHouses:l,getHouse:c,isSet:function(e){return e||"no info :("}}},O=(a(40),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spin"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),k=a(18),N=a.n(k),x=(a(42),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"error",className:"photo",src:N.a}),r.a.createElement("span",null,"Something goes wrong :("))}),C=a(1),y=function(e){var t=e.char,a=e.onClose,n=t.name,l=t.gender,c=t.born,u=t.died,s=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"randomTitle"},r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("div",{type:"button",className:"closeButton",onClick:function(){return a()}},"X")),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between randomRows"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between randomRows"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,u)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between randomRows"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,s))))},S=function(e){var t=e.interval,a=e.onClose,l=Object(n.useState)({}),c=Object(b.a)(l,2),u=c[0],s=c[1],o=Object(n.useState)(!0),i=Object(b.a)(o,2),m=i[0],d=i[1],f=Object(n.useState)(!1),p=Object(b.a)(f,2),E=p[0],h=p[1],v=new j;Object(n.useEffect)(function(){k();var e=setInterval(k,t);return function(){clearInterval(e)}},[t]);var g=function(e){s(e),d(!1)},w=function(e){h(!0),d(!1)},k=function(){var e=Math.floor(140*Math.random()+25);v.getCharacter(e).then(g).catch(w)},N=E?r.a.createElement(x,null):null,C=m?r.a.createElement(O,null):null,S=m||E?null:r.a.createElement(y,{char:u,onClose:a});return r.a.createElement("div",{className:"random-block rounded"},N,C,S)};S.prototyps={interval:C.number},S.defaultProps={interval:1500};var R=S,B=a(19),I=a.n(B),A=(a(45),function(e){var t=e.getData,a=e.renderItem,l=e.onItemSelected,c=Object(n.useState)(null),u=Object(b.a)(c,2),s=u[0],o=u[1];Object(n.useEffect)(function(){t().then(function(e){o(e)})},[t]);if(!s)return r.a.createElement(O,null);var i=s.map(function(e){var t=e.id,n=a(e);return r.a.createElement("li",{key:I()(),className:"list-group-item",onClick:function(){return l(t)}},n)});return r.a.createElement("ul",{className:"item-list list-group"},i)});A.defaultProps={onItemSelected:function(){}};var P=A,D=(a(47),function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},n),r.a.createElement("span",{className:"description"},t[a]))}),W=function(e){var t=e.itemId,a=e.getData,l=e.children,c=Object(n.useState)(null),u=Object(b.a)(c,2),s=u[0],o=u[1];if(Object(n.useEffect)(function(){!function(){var e=Object(w.a)(g.a.mark(function e(){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,a(t);case 4:n=e.sent,o(n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t,a]),!s)return r.a.createElement("span",{className:"select-error"},"Please select an item in the list");var i=s.name;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,i),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(l,function(e){return r.a.cloneElement(e,{item:s})})))},H=function(e){var t=e.left,a=e.right;return r.a.createElement(f.a,null,r.a.createElement(p.a,{md:"6"},t),r.a.createElement(p.a,{md:"6"},a))},G=function(e){var t=e.fields,a=e.page,l=Object(n.useState)(null),c=Object(b.a)(l,2),u=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(b.a)(o,2),m=i[0],d=i[1];Object(n.useEffect)(function(){var e=function(){d(!0)};return window.addEventListener("error",e),function(){window.removeEventListener("error",e)}},[]);var f=new j;if(m)return r.a.createElement(x,null);var p=r.a.createElement(P,{onItemSelected:function(e){s(e)},getData:"books"===a?f.getAllBooks:"characters"===a?f.getAllCharacters:f.getAllHouses,renderItem:function(e){return e.name}}),E=r.a.createElement(W,{itemId:u,getData:"books"===a?f.getBook:"characters"===a?f.getCharacter:f.getHouse},t.map(function(e){return r.a.createElement(D,{key:e.id,field:e.field,label:e.label})}));return r.a.createElement(H,{left:p,right:E})},T=a(63),F=a(65),J=a(64),L=(a(50),[{id:"pages",field:"numberOfPages",label:"Number of pages"},{id:"publisher",field:"publisher",label:"Publisher"},{id:"released",field:"publisher",label:"Publisher"}]),M=[{id:"region",field:"region",label:"Region"},{id:"words",field:"words",label:"Words"},{id:"titles",field:"titles",label:"Titles"},{id:"ancestralWeapons",field:"ancestralWeapons",label:"Ancestral Weapons"}],z=[{id:"gender",field:"gender",label:"Gender"},{id:"born",field:"born",label:"Born"},{id:"died",field:"died",label:"Died"},{id:"culture",field:"culture",label:"Culture"}],X=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={showRandomChar:!0,error:!1},a.toggleRandomChar=function(){a.setState(function(e){return{showRandomChar:!e.showRandomChar}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.error?r.a.createElement(x,null):r.a.createElement(T.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(d.a,null,r.a.createElement(h,null)),r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,this.state.showRandomChar&&r.a.createElement(R,{onClose:this.toggleRandomChar}))),r.a.createElement(F.a,null,r.a.createElement(J.a,{path:"/characters"},r.a.createElement(G,{fields:z,page:"characters"})),r.a.createElement(J.a,{path:"/houses"},r.a.createElement(G,{fields:M,page:"houses"})),r.a.createElement(J.a,{path:"/books"},r.a.createElement(G,{fields:L,page:"books"}))))))}}]),t}(n.Component);a(53),a(55);c.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.0060c6bd.chunk.js.map