(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=(n(14),n(3)),u=n(4),i=n(6),s=n(5),m=n(7),h=(n(15),n(16),function(e){return r.a.createElement("button",{onClick:e.click},"Dodaj u\u017cytkownika")}),f=(n(17),function(e){var t=e.users.map(function(e){return r.a.createElement("div",{className:"user",key:e.login.uuid},r.a.createElement("div",{className:"picture"},r.a.createElement("img",{src:e.picture.large,alt:e.name.last})),r.a.createElement("div",{className:"user-info"},r.a.createElement("h1",null,e.name.first," ",e.name.last),r.a.createElement("h2",null,e.location.state),r.a.createElement("h3",null,e.location.state),r.a.createElement("p",null,r.a.createElement("span",null,"Phone:")," ",e.phone),r.a.createElement("p",null,r.a.createElement("span",null,"Email:")," ",e.email)))});return r.a.createElement("ul",null,t)}),E="https://randomuser.me/api/?results=1",d=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},n.handleDataFetch=function(){fetch(E).then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(e){var t=e.results;n.setState(function(e){return{users:e.users.concat(t)}})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",null,r.a.createElement(h,{click:this.handleDataFetch}),e.length>0?r.a.createElement(f,{users:e}):e)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3b79a7a2.chunk.js.map