(this.webpackJsonphomestay=this.webpackJsonphomestay||[]).push([[0],{117:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=a(17),u=a(5),m=a(4),d=a(11),p=a(13),h=a(6),f=a(7),v=a(9),g=a(10),b=(a(71),a(8)),E=a(22),k=(a(72),a(73),a(128)),j=["fotos"];var w=function(e){var t=e.fotos,a=(Object(E.a)(e,j),n.useState(0)),r=Object(b.a)(a,2),s=r[0],o=r[1],c=Object(n.useState)({listFoto:[]}),l=Object(b.a)(c,2),i=l[0],u=l[1];return Object(n.useEffect)((function(){var e=t.map((function(e){return{src:e}}));u((function(t){return Object(p.a)(Object(p.a)({},t),{},{listFoto:e})}))}),[]),n.createElement("div",{style:{background:"black",width:"100%"}},n.createElement(k.a,{index:s,onRequestChange:function(e){o(e)}},i.listFoto.map((function(e){return n.createElement(k.b,{objectFit:"contain",key:e.src,src:e.src})}))))},y=["kosan","onClose"];var O=function(e){var t=e.kosan,a=e.onClose;return Object(E.a)(e,y),r.a.createElement("div",{className:"containerPopup",id:"containerPopup",onClick:function(e){a(e)}},r.a.createElement("div",{className:"popupContent"},r.a.createElement("div",{className:"popupImg"},r.a.createElement(w,{fotos:t.foto})),r.a.createElement("div",{className:"popupkosanInfo"},r.a.createElement("div",{className:"popupkosanInfoNama"},t.nama),r.a.createElement("div",{className:"popupkosanInfoDs"},t.deskripsi),r.a.createElement("div",{className:"popupkosanInfoharga"},"Wa : ",t.wa),r.a.createElement("div",{className:"popupkosanInfoharga"},"Rp",function(e){var t=e.replace(/[^,\d]/g,"").toString().split(","),a=t[0].length%3,n=t[0].substr(0,a),r=t[0].substr(a).match(/\d{3}/gi);return r&&(n+=(a?".":"")+r.join(".")),n=void 0!=t[1]?n+","+t[1]:n}(t.harga)))))},N=["selectKosan","kosan"];var C=function(e){var t=e.selectKosan,a=e.kosan,s=(Object(E.a)(e,N),Object(n.useState)({popup:!1})),o=Object(b.a)(s,2),c=o[0],l=o[1];return r.a.createElement(n.Fragment,null,c.popup?r.a.createElement(O,{kosan:a,onClose:function(e){!function(e){"containerPopup"===e.target.id&&l((function(e){return Object(p.a)(Object(p.a)({},e),{},{popup:!1})}))}(e)}}):null,r.a.createElement("div",{className:"homestay",onClick:function(){t(a),l((function(e){return Object(p.a)(Object(p.a)({},e),{},{popup:!0})}))}},r.a.createElement("div",{className:"homestay-foto"},r.a.createElement("img",{src:a.foto&&a.foto[0]?a.foto[0]:"",alt:a.nama})),r.a.createElement("div",null,r.a.createElement("div",{className:"homestay-judul"},a.nama),r.a.createElement("div",{className:"homestay-harga"},"Rp",function(e){var t=e.replace(/[^,\d]/g,"").toString().split(","),a=t[0].length%3,n=t[0].substr(0,a),r=t[0].substr(a).match(/\d{3}/gi);return r&&(n+=(a?".":"")+r.join(".")),n=void 0!=t[1]?n+","+t[1]:n}(a.harga)))))},S=a(64),x=a.n(S),F=(a(95),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e="marker";return this.props.selected&&(e+=" selected"),r.a.createElement("div",{className:e},this.props.text)}}]),a}(r.a.Component)),K=F,D=(a(96),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={isLoggedIn:!1},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoggedIn:this.checkCookie("user")})}},{key:"checkCookie",value:function(e){return!!document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"navdd"},r.a.createElement("li",{className:"navit"},r.a.createElement(i.b,{className:"active",to:"/"},"WELCOM IN HOME")),r.a.createElement("li",{className:"dd",style:{float:"right"}},r.a.createElement("a",{href:"javascript:void(0)",className:"dropbtn"},"Action"),r.a.createElement("div",{className:"dd-content"},r.a.createElement(i.b,{to:"/dashboard"},"Dashboard"),r.a.createElement(i.b,{to:"/logout"},"Logout"),r.a.createElement(i.b,{hidden:this.props.isLoggedIn,to:"/login"},"Login"),r.a.createElement(i.b,{hidden:this.props.isLoggedIn,to:"/register"},"Register"))))}}]),a}(n.Component)),T=a(127),L="https://kosanbe.ayato.life",I=function(){var e=Object(d.a)(Object(m.a)().mark((function e(){var t,a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get(L+"/kosan");case 2:return t=e.sent,a=t.data,n=t.error,e.abrupt("return",{data:a,error:n});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var a,n,r;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(L+"/kosan",t,{headers:{"Content-Type":"multipart/form-data"}});case 2:return a=e.sent,n=a.error,r=a.data,e.abrupt("return",{error:n,data:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t,a){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({id:t,kosan:a}),e.next=3,T.a.patch(L+"/kosan/"+t,a);case 3:return e.abrupt("return",{data:{data:"Berhasil Update Kosan "}});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var a,n,r;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.delete(L+"/kosan/"+t);case 2:return a=e.sent,n=a.data,r=a.error,e.abrupt("return",{data:n,error:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t,a){var n,r,s;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(L+"/kosan/addfoto/"+t,a,{headers:{"Content-Type":"multipart/form-data"}});case 2:return n=e.sent,r=n.data,s=n.error,e.abrupt("return",{data:r,error:s});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t,a){var n,r,s;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,a),!t||!a){e.next=8;break}return e.next=4,T.a.delete(L+"/fotoKos/".concat(t,"?foto=").concat(a));case 4:return n=e.sent,r=n.data,s=n.error,e.abrupt("return",{data:r,error:s});case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).selectKosan=function(e){n.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{selectedKosan:e})}))},n.handleSearch=function(e){n.setState({search:e.target.value,kosan:n.state.allKosan.filter((function(t){return new RegExp(e.target.value,"i").exec(t.nama)}))})},n.handlekos=function(e){},n.state={kosan:[],allKosan:[],selectedKosan:!1,kosLocation:{},search:""},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(Object(m.a)().mark((function e(){var t,a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,a=t.error,n=t.data,console.log(n.data),a?console.log(a):n.data&&this.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{kosan:n.data,allKosan:n.data})}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkCookie",value:function(e){}},{key:"render",value:function(){var e=this,t={lat:-7.761321,lng:113.2372833};return this.state.selectedKosan&&(t={lat:Number(this.state.selectedKosan.lat),lng:Number(this.state.selectedKosan.long)}),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"main"},r.a.createElement(D,{isLoggedIn:this.checkCookie("user")}),r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",className:"searchinput",placeholder:"search...",value:this.state.search,onChange:this.handleSearch})),r.a.createElement("div",{className:"homestays"},this.state.kosan.map((function(t){return r.a.createElement(C,{key:t.id,kosan:t,selectKosan:e.selectKosan})})))),r.a.createElement("div",{className:"peta"},r.a.createElement(x.a,{center:t,zoom:12},this.state.kosan.map((function(t){var a,n=Number(t.lat),s=Number(t.long);return console.log(t),r.a.createElement(K,{key:t.id,lat:n,lng:s,text:t.harga,selected:t.id===(null===(a=e.state.selectedKosan)||void 0===a?void 0:a.id)})})))))}}]),a}(n.Component),W=U,H=a(19),P=a.n(H),X=a(65),$=a.n(X)()((function(e){return{isLoggedIn:!1,user:null,users:[]}})),B=(a(61),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).fetchUsers=function(){fetch("https://api.jsonbin.io/v3/b/63a8472901a72b59f238ef90",{method:"GET",headers:{"Content-Type":"application/json","X-Master-Key":"$2b$10$vWIkDxaKY.PAOwcpb/jFH.pyoWktZhboUgiSrlhXoQiylw33vX2MS"}}).then((function(e){return e.json()})).then((function(e){n.setState({users:e.record.users}),console.log(n.state.users)})).catch((function(e){console.error("Error:",e)}))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.password,s=a,o=r,c=n.state.users.filter((function(e){return e.email===s&&e.password===o}));c.length>0?(P.a.fire("Success!","Login Success! Redirect in 3 seconds","success"),n.setState({email:"",password:""}),n.setCookie("user",JSON.stringify({loggedIn:!0,email:c[0].email,username:c[0].username}),1),setTimeout((function(){window.location.hash="#/dashboard"}),3e3)):P.a.fire("Oops...","Email or Password is wrong!","error")},n.state={email:"",password:"",users:[]},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){document.title="Login",this.fetchUsers()}},{key:"setCookie",value:function(e,t,a){var n=new Date;n.setTime(n.getTime()+60*a*60*1e3),document.cookie=e+" = "+t+"; expires = "+n.toGMTString()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"testbox"},r.a.createElement("div",null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css",rel:"stylesheet"})),r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("hr",{style:{marginBottom:"50px",marginTop:"50px"}}),r.a.createElement("label",{id:"icon",htmlFor:"name"},r.a.createElement("i",{className:"icon-envelope "})),r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Email",required:!0,value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("label",{id:"icon",htmlFor:"name"},r.a.createElement("i",{className:"icon-user"})),r.a.createElement("input",{type:"password",name:"name",id:"name",placeholder:"Password",required:!0,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:"/register"},"Register"),"."),r.a.createElement("button",{className:"button",type:"submit"},"Login")))}}]),a}(n.Component));function G(){fetch("https://api.jsonbin.io/v3/b/63a8472901a72b59f238ef90",{method:"GET",headers:{"Content-Type":"application/json","X-Master-Key":"$2b$10$vWIkDxaKY.PAOwcpb/jFH.pyoWktZhboUgiSrlhXoQiylw33vX2MS"}}).then((function(e){return e.json()})).then((function(e){$.setState({users:e.record.users}),console.log($.getState().users)})).catch((function(e){console.error("Error:",e)}))}var J=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleRegister=function(e){e.preventDefault();var t,a=n.state.users;0===a.length&&(G(),console.log("get all owners")),a.push({fullname:n.state.username,address:"-",phone:"-",email:n.state.email,username:n.state.username,password:n.state.password}),$.setState({users:a}),t=n.state.users,fetch("https://api.jsonbin.io/v3/b/63a8472901a72b59f238ef90",{method:"PUT",headers:{"Content-Type":"application/json","X-Master-Key":"$2b$10$vWIkDxaKY.PAOwcpb/jFH.pyoWktZhboUgiSrlhXoQiylw33vX2MS"},body:JSON.stringify({users:t})}).then((function(e){return e.json()})).then((function(e){$.setState({users:e.record.users}),console.log($.getState().users)})).catch((function(e){console.error("Error:",e)})),P.a.fire("Success!","Register Success! Redirect in 3 seconds","success"),n.setState({users:$.getState().users}),console.log(n.state.users),setTimeout((function(){window.location.hash="#/login"}),3e3)},n.state={email:"",username:"",password:"",users:$.getState().users},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){document.title="Register",G(),this.setState({users:$.getState().users}),console.log(this.state.users)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"testbox"},r.a.createElement("div",null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css",rel:"stylesheet"})),r.a.createElement("h1",null,"Registration"),r.a.createElement("form",null,r.a.createElement("hr",{style:{marginBottom:"50px"}}),r.a.createElement("label",{id:"icon",htmlFor:"name"},r.a.createElement("i",{className:"icon-envelope "})),r.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),r.a.createElement("label",{id:"icon",htmlFor:"name"},r.a.createElement("i",{className:"icon-user"})),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Name",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},required:!0}),r.a.createElement("label",{id:"icon",htmlFor:"name"},r.a.createElement("i",{className:"icon-shield"})),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(i.b,{to:"/login"},"Login"),"."),r.a.createElement(i.b,{href:"#",onClick:this.handleRegister,className:"button",style:{textAlign:"center"}},"Register")))}}]),a}(n.Component),Q=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{style:{textAlign:"center"}},"404 Not Found")}}]),a}(n.Component),z=Q,Y=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"site-footer",style:{backgroundColor:"#f1f2f7"}},r.a.createElement("div",{className:"footer-inner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},"Copyright \xa9 2018 Ela Admin"),r.a.createElement("div",{className:"col-sm-6 text-right"},"Designed by ",r.a.createElement("a",{href:"https://colorlib.com"},"Colorlib")))))}}]),a}(n.Component),Z=Y,V=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{id:"header",className:"header"},r.a.createElement("div",{className:"top-left"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"TO HOME"),r.a.createElement(i.b,{id:"menuToggle",className:"menutoggle"},r.a.createElement("i",{className:"fa fa-bars"})))))}}]),a}(n.Component),ee=V,te=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"}),r.a.createElement("script",{src:"assets/js/main.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.min.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/flot-pie@1.0.0/src/jquery.flot.pie.min.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/flot-spline@0.0.1/js/jquery.flot.spline.min.js"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"}))}}]),a}(n.Component),ae=te,ne=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={path:window.location.pathname.split("/")[1]},n}return Object(f.a)(a,[{key:"deleteCookie",value:function(e){var t=new Date;document.cookie=e+"=; expires="+t.toGMTString()}},{key:"render",value:function(){var e=this;return r.a.createElement("aside",{id:"left-panel",className:"left-panel"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-default"},r.a.createElement("div",{id:"main-menu",className:"main-menu collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"menu-title"},"Main Menu"),r.a.createElement("li",{className:"dashboard"===this.state.path?"active":""},r.a.createElement(i.b,{to:"/dashboard"},r.a.createElement("i",{className:"menu-icon fa fa-laptop"}),"Dashboard ")),r.a.createElement("li",{className:"dashboard-kosan"===this.state.path?"active":""},r.a.createElement(i.b,{to:"/dashboard-kosan"},r.a.createElement("i",{className:"menu-icon fa fa-home"}),"Kosan")),r.a.createElement("li",{className:"logout"===this.state.path?"active":""},r.a.createElement("a",{onClick:function(){return e.deleteCookie("user")},href:"/"},r.a.createElement("i",{className:"menu-icon fa fa-sign-out"}),"Logout "))))))}}]),a}(n.Component),re=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),r.a.createElement("title",null,"Ela Admin - HTML5 Admin Template"),r.a.createElement("meta",{name:"description",content:"Ela Admin - HTML5 Admin Template"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"https://i.imgur.com/QRAUqs9.png"}),r.a.createElement("link",{rel:"shortcut icon",href:"https://i.imgur.com/QRAUqs9.png"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"assets/css/cs-skin-elastic.css"}),r.a.createElement("link",{rel:"stylesheet",href:"assets/css/style.css"}),r.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css",rel:"stylesheet"}),r.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css",rel:"stylesheet"}),r.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css",rel:"stylesheet"}),r.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css",rel:"stylesheet"}))),r.a.createElement(ne,null),r.a.createElement("div",{id:"right-panel",className:"right-panel"},r.a.createElement(ee,null),this.props.children,r.a.createElement(Z,null)),r.a.createElement(ae,null))}}]),a}(n.Component),se=re,oe=(a(117),a.p+"static/media/edit-image.84445f2a.png"),ce=["kos"],le=["idKos","foto","onClose"],ie=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={isLoggedIn:n.checkCookie("user"),user:$.getState().user,kosan:[],kosedit:{},koseditShow:!1},n}return Object(f.a)(a,[{key:"gettingKos",value:function(){var e=Object(d.a)(Object(m.a)().mark((function e(){var t,a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,a=t.error,n=t.data,console.log(n),a||this.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{kosan:n.data})}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(d.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.title="Admin Panel - Dashboard",this.state.isLoggedIn||(window.location.hash="#/login"),this.gettingKos();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkCookie",value:function(e){return!!document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"))}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null}},{key:"render",value:function(){return r.a.createElement(se,{style:{width:"100%"}},r.a.createElement("div",{className:"content lsjdshfoiierf",style:{width:"100%"}},this.state.kosan.map((function(e){return r.a.createElement(ue,{kos:e})}))))}}]),a}(n.Component);function ue(e){var t=e.kos,a=(Object(E.a)(e,ce),Object(n.useState)({show:!1,editFotoShow:!1})),s=Object(b.a)(a,2),o=s[0],c=s[1],l=Object(n.useState)({_id:"",nama:"",deskripsi:"",harga:""}),i=Object(b.a)(l,2),u=i[0],h=i[1],f=function(){var e=Object(d.a)(Object(m.a)().mark((function e(){var t,a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(u._id,{nama:u.nama,deskripsi:u.deskripsi,harga:u.harga});case 2:t=e.sent,a=t.error,n=t.data,a?P.a.fire("Delete Kos Gagal"):P.a.fire(n.data).then((function(){window.location.reload()}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){h((function(t){return Object(p.a)(Object(p.a)({},t),e)}))},g=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var a,n,r;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("DELETE",t),e.next=3,R(t);case 3:return a=e.sent,n=a.error,r=a.data,n?P.a.fire("Delete Kos Gagal"):P.a.fire(r.data).then((function(){window.location.reload()})),e.abrupt("return",0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,o.editFotoShow?r.a.createElement(me,{idKos:t.id,foto:t.foto,onClose:function(e){"dsihfoihfphjfp"===e.target.id&&c((function(e){return Object(p.a)(Object(p.a)({},e),{},{editFotoShow:!1})}))}}):null,r.a.createElement("div",{className:"asfjdqd"},r.a.createElement("div",{className:"jsfdahifh",onClick:function(){o.editFotoShow?c((function(e){return Object(p.a)(Object(p.a)({},e),{},{editFotoShow:!1})})):c((function(e){return Object(p.a)(Object(p.a)({},e),{},{editFotoShow:!0})}))}},r.a.createElement("img",{src:oe,alt:"edit"})),r.a.createElement("div",{className:"sdsdwiIMG"},r.a.createElement("img",{src:t.foto&&t.foto[0]?t.foto[0]:"",alt:""})),o.show?r.a.createElement("div",{style:{width:"80%",margin:"10px 0"}},r.a.createElement("div",{className:"idsfdwhfwhwodow"},"Nama",r.a.createElement("input",{onChange:function(e){v({nama:e.target.value})},type:"text",value:u.nama})),r.a.createElement("div",{className:"idsfdwhfwhwodow"},"Deskripsi",r.a.createElement("textarea",{onChange:function(e){v({deskripsi:e.target.value})},type:"text",value:u.deskripsi})),r.a.createElement("div",{className:"idsfdwhfwhwodow"},"Harga",r.a.createElement("input",{onChange:function(e){v({harga:e.target.value})},type:"text",value:u.harga})),r.a.createElement("button",{style:{marginTop:10},onClick:function(e){f()}},"Update")):r.a.createElement("div",{className:""},t.nama),r.a.createElement("div",{className:"skdjNav"},r.a.createElement("button",{onClick:function(){var e;e=t.id,o.show?c((function(e){return Object(p.a)(Object(p.a)({},e),{},{show:!1})})):(h((function(a){return Object(p.a)(Object(p.a)({},a),{},{_id:e,nama:t.nama,deskripsi:t.deskripsi,harga:t.harga})})),c((function(e){return Object(p.a)(Object(p.a)({},e),{},{show:!0})})))}},"Edit"),r.a.createElement("button",{onClick:function(e){g(t.id)}},"Delete"))))}var me=function(e){var t=e.idKos,a=e.foto,s=e.onClose,o=(Object(E.a)(e,le),Object(n.useRef)(null)),c=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t,a){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,a);case 2:n=e.sent,n.data,n.error,alert("Sukses Hapus Foto Kos"),window.location.reload();case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"editFotoContaner",id:"dsihfoihfphjfp",onClick:function(e){s(e)}},r.a.createElement("div",{className:"editFotoContent"},a.map((function(e){return r.a.createElement("div",{className:"editFotoFotoContanr"},r.a.createElement("div",{className:"editFotoFotoContanrBtnDelete",onClick:function(){c(t,e)}},"X"),r.a.createElement("img",{src:e}))})),r.a.createElement("div",{className:"buttontambahFoto",onClick:function(){o.current.click()}},r.a.createElement("input",{onChange:function(e){!function(e){if(e.target.files[0]){var a=new FormData;a.append("file",e.target.files[0]),q(t,a).then((function(e){console.log(e),alert("Berhasil Tambah Foto"),window.location.reload()}))}}(e)},ref:o,type:"file",hidden:!0}),"Tambah Foto")))},de=ie,pe=(a(118),a(41)),he=a.n(pe);he.a.config();var fe=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleFile=function(e){n.setState({foto_kosan:e.target.files[0]}),n.handleUpload()},n.handleUpload=function(){n.setState({upload_status:"Uploading..."})},n.fileChanegHandler=function(e){var t=new FormData;t.append("file",e.target),n.setState({foto_kosan:t})},n.getDataKosan=function(){},n.handleSubmit=function(){var e=Object(d.a)(Object(m.a)().mark((function e(t){var a,r,s,o,c,l,i,u,d,p,h;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.nama_kos,s=a.deskripsi,o=a.no_wa,c=a.harga,l=a.lat,i=a.long,(u=new FormData).append("file",n.state.foto_kosan),u.append("body",JSON.stringify({nama:r,deskripsi:s,harga:c,wa:o,lat:l,long:i,username:n.state.user.username})),e.next=7,_(u);case 7:d=e.sent,p=d.error,h=d.data,p?(console.log(p),P.a.fire("Gagal","Data Kosan Gagal Ditambahkan!","error")):(console.log(h),P.a.fire("Berhasil","Data Kosan Berhasil Ditambahkan!","success"),window.location.reload());case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={nama_kos:"",deskripsi:"",no_wa:"",harga:"",lat:"",long:"",foto_kosan:"",data_kosan:[],upload_status:"",isLoggedIn:n.checkCookie("user"),user:JSON.parse(n.getCookie("user"))},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){document.title="Admin Panel - Kosan",this.state.isLoggedIn||(window.location.hash="#/login"),this.getDataKosan(),console.log(this.state.user)}},{key:"checkCookie",value:function(e){return!!document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"))}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null}},{key:"getFiles",value:function(e){console.log(e[0].base64.split(",")[1])}},{key:"render",value:function(){var e=this;return r.a.createElement(se,null,r.a.createElement("div",{className:"content",style:{backgroundColor:"#f1f2f7"}},r.a.createElement("div",{className:"animated fadeIn"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("strong",{className:"card-title"},"Tambah Data Kosan")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nama_kos",className:"form-control-label"},"Nama Kosan"),r.a.createElement("input",{type:"tel",name:"nama_kos",id:"nama_kos",className:"form-control",style:{width:"100%"},value:this.state.nama_kos,onChange:function(t){return e.setState({nama_kos:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"deskripsi",className:"form-control-label"},"Deskripsi Kosan"),r.a.createElement("textarea",{type:"tel",name:"deskripsi",id:"deskripsi",className:"form-control",style:{width:"100%"},value:this.state.deskripsi,onChange:function(t){return e.setState({deskripsi:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"harga"},"Harga Sewa (per bulan)"),r.a.createElement("input",{type:"number",name:"harga",id:"harga",className:"form-control",style:{width:"100%"},value:this.state.harga,onChange:function(t){return e.setState({harga:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"harga"},"Nomor WhatsApp"),r.a.createElement("input",{type:"tel",name:"wa",id:"wa",className:"form-control",style:{width:"100%"},value:this.state.no_wa,onChange:function(t){return e.setState({no_wa:t.target.value})}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lat",className:"form-control-label"},"Latitude"),r.a.createElement("input",{type:"number",name:"lat",id:"lat",className:"form-control",value:this.state.lat,onChange:function(t){return e.setState({lat:t.target.value})}}))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"long",className:"form-control-label"},"Longitude"),r.a.createElement("input",{type:"number",name:"long",id:"long",className:"form-control",value:this.state.long,onChange:function(t){return e.setState({long:t.target.value})}})))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("label",{htmlFor:"foto_kosan",className:"form-control-label"},"Foto Kosan ",r.a.createElement("span",{className:"badge badge-success"},"Status: ",this.state.upload_status))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("input",{type:"file",id:"file",onChange:function(t){e.setState({foto_kosan:t.target.files[0]})}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary float-right mt-3"},r.a.createElement("i",{className:"fa fa-fw fa-plus"}),"Tambah")))))))))}}]),a}(n.Component),ve=fe,ge=a(129);a(123);function be(){return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:r.a.createElement(W,null),element:r.a.createElement(W,null)}),r.a.createElement(u.a,{path:"/dashboard",component:r.a.createElement(de,null),element:r.a.createElement(de,null)}),r.a.createElement(u.a,{path:"/dashboard-kosan",component:r.a.createElement(ve,null),element:r.a.createElement(ve,null)}),r.a.createElement(u.a,{path:"/login",component:r.a.createElement(B,null),element:r.a.createElement(B,null)}),r.a.createElement(u.a,{path:"/register",component:r.a.createElement(J,null),element:r.a.createElement(J,null)}),r.a.createElement(u.a,{path:"*",component:r.a.createElement(z,null),element:r.a.createElement(z,null)})))}he.a.config(),o.a.render(r.a.createElement(ge.a,null,r.a.createElement(be,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/kosdankontrakan",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/kosdankontrakan","/service-worker.js");c?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):l(e)}))}}()},61:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.5a7446d9.chunk.js.map