(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(32),r=a.n(s),i=(a(98),a(2)),o=a(13),l=a(14),j=a(25),d=a(26),h=(a(99),a(11)),u=a(6),b=a.p+"static/media/ft-logo.0e4fff41.png",m=a(7),O=a(39),x=a.n(O),p=Object(l.a)((function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a,c,n){return t.app.post("/signup",{username:e,password:a,email:c,team_id:n})},this.login=function(e,a){return t.app.post("/login",{username:e,password:a})},this.logout=function(){return t.app.get("/logout")},this.isloggedin=function(){return t.app.get("/isloggedin")},this.app=x.a.create({baseURL:"".concat("https://footicket.herokuapp.com/api","/auth"),withCredentials:!0})})),g=(a(58),a(144)),f=a(139),v=a(147),y=a(143),N=a(145),w=a(87),S=a(86),k=a(0),C=new p,I=function(e){var t=e.loggedUser,a=e.storeUser,n=Object(c.useState)(""),s=Object(u.a)(n,2),r=s[0],i=s[1],o=t?t.username:"Mi Perfil";return Object(k.jsx)(g.a,{bg:"light",expand:"lg",children:Object(k.jsxs)(f.a,{fluid:!0,children:[Object(k.jsx)(g.a.Brand,{as:m.b,to:"/",children:Object(k.jsx)("img",{src:b,alt:"logo",style:{width:"35px"}})}),Object(k.jsx)(g.a.Toggle,{"aria-controls":"navbarScroll"}),Object(k.jsxs)(g.a.Collapse,{id:"navbarScroll",children:[Object(k.jsxs)(v.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"600px"},navbarScroll:!0,children:[Object(k.jsx)(y.a,{title:o,id:"navbarScrollingDropdown",children:t?Object(k.jsxs)(k.Fragment,{children:["STANDARD"===t.role?Object(k.jsx)(y.a.Item,{as:m.b,to:"/profile-user",children:"Mi perfil "}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(y.a.Item,{as:m.b,to:"/team/profile",children:"Vender entradas"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/profile-user-team",children:"Mis ventas"})]}),Object(k.jsx)(y.a.Divider,{}),Object(k.jsx)(y.a.Item,{as:m.b,onClick:function(){C.logout().then((function(e){return a(null)})).catch((function(e){return console.log(e)}))},to:"/",children:"Cerrar Sesion"})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(y.a.Item,{as:m.b,to:"/login",children:"Iniciar Sesion"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/signup",children:"Registro"})]})}),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(y.a,{title:"Tickets",id:"navbarScrollingDropdown",children:[Object(k.jsx)(y.a.Item,{as:m.b,to:"/league/england",children:"Premier League"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/league/spain",children:"LaLiga"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/league/italy",children:"Serie A"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/league/germany",children:"Bundesliga"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/league/argentina",children:"Liga prof. Argentina"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/league/france",children:"League 1"})]})}),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(y.a,{title:"Posiciones",id:"navbarScrollingDropdown",children:[Object(k.jsx)(y.a.Item,{as:m.b,to:"/standings/england",children:"Premier League"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/standings/spain",children:"LaLiga"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/standings/italy",children:"Serie A"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/standings/argentina",children:"Liga Prof. Argentina"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/standings/germany",children:"Bundesliga"}),Object(k.jsx)(y.a.Item,{as:m.b,to:"/standings/france",children:"League 1"})]})})]}),Object(k.jsxs)(N.a,{onSubmit:function(e){e.preventDefault()},className:"d-flex",children:[Object(k.jsx)(w.a,{type:"search",placeholder:"Busqueda por equipo",className:"me-2","aria-label":"Search",name:"teamName",value:r,onChange:function(e){i(e.currentTarget.value)}}),Object(k.jsx)(S.a,{variant:"",type:"submit",children:Object(k.jsx)(m.b,{to:"/matches/team/".concat(r),children:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(k.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})})})]})]})]})})},T=a(8),L=a(88),F=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),c.authService.signup(c.state.username,c.state.password,c.state.email,c.state.team_id).then((function(e){c.props.storeUser(e.data),c.props.history.push("/")})).catch((function(e){return console.log(e.response.data.message)}))},c.handleInputChange=function(e){var t=e.currentTarget,a=t.name,n=t.value;c.setState(Object(T.a)({},a,n))},c.state={username:"",email:"",password:"",team_id:""},c.authService=new p,c}return Object(l.a)(a,[{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"auth-cont",children:Object(k.jsx)("div",{className:"auth-cont-2",children:Object(k.jsx)(L.a,{children:Object(k.jsxs)(N.a,{onSubmit:this.handleSubmit,children:[Object(k.jsx)("h2",{style:{textAlign:"center"},children:" Registrarse"}),Object(k.jsx)("hr",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsxs)(N.a.Group,{className:"mb-3",controlId:"username",children:[Object(k.jsx)(N.a.Label,{children:"Nombre de Usuario"}),Object(k.jsx)(N.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text",placeholder:"Elige un nombre de usuario"})]}),Object(k.jsxs)(N.a.Group,{className:"mb-3",controlId:"email",children:[Object(k.jsx)(N.a.Label,{children:"Correo electronico"}),Object(k.jsx)(N.a.Control,{onChange:this.handleInputChange,value:this.state.email,name:"email",type:"text",placeholder:"ejemplo@gmail.com"})]}),Object(k.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(k.jsx)(N.a.Label,{children:"Contrase\xf1a"}),Object(k.jsx)(N.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password",placeholder:"Contrase\xf1a"})]}),Object(k.jsx)(S.a,{id:"login-button",type:"submit",children:"Registrarse"}),Object(k.jsxs)("p",{children:[Object(k.jsx)("br",{})," \xbfYa no eres parte de la comunidad de FootTicket?",Object(k.jsx)("br",{})]}),Object(k.jsx)("p",{children:Object(k.jsx)(m.b,{as:m.b,to:"/login",children:"Login"})})]})})})})]})}}]),a}(c.Component),U=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),c.authService.login(c.state.username,c.state.password).then((function(e){c.props.storeUser(e.data),c.props.history.push("/")})).catch((function(e){return console.log(e.response.data.message)}))},c.handleInputChange=function(e){var t=e.currentTarget,a=t.name,n=t.value;c.setState(Object(T.a)({},a,n))},c.state={username:"",password:""},c.authService=new p,c}return Object(l.a)(a,[{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"auth-cont",children:Object(k.jsx)("div",{className:"auth-cont-2",children:Object(k.jsxs)(L.a,{children:[Object(k.jsx)("h2",{style:{textAlign:"center"},children:" Iniciar Sesion"}),Object(k.jsx)("hr",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsxs)(N.a,{onSubmit:this.handleSubmit,children:[Object(k.jsxs)(N.a.Group,{className:"mb-3",controlId:"username",children:[Object(k.jsx)(N.a.Label,{children:"Nombre de Usuario"}),Object(k.jsx)(N.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text",placeholder:"Nombre de usuario"})]}),Object(k.jsxs)(N.a.Group,{className:"mb-3",controlId:"password",children:[Object(k.jsx)(N.a.Label,{children:"Contrase\xf1a"}),Object(k.jsx)(N.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password",placeholder:"*******"})]}),Object(k.jsx)(S.a,{id:"login-button",type:"submit",children:"Iniciar Sesi\xf3n"}),Object(k.jsxs)("p",{children:[Object(k.jsx)("br",{})," \xbfA\xfan no eres parte de la comunidad de FootTicket?"," ",Object(k.jsx)("br",{})]}),Object(k.jsx)("p",{children:Object(k.jsx)(m.b,{as:m.b,to:"/signup",children:"Registrate"})})]})]})})})]})}}]),a}(c.Component),A=a(39),M=Object(l.a)((function e(){var t=this;Object(o.a)(this,e),this.getAllMatches=function(e){return t.axiosApp.get("/matches/league/".concat(e))},this.getTeamId=function(e){return t.axiosApp.get("/matches/team/".concat(e))},this.getTeamMatches=function(e){return t.axiosApp.get("/matches/team/matches/".concat(e))},this.checkMatch=function(e){return t.axiosApp.get("/team-profile/check-match/".concat(e))},this.createMatch=function(e){return t.axiosApp.post("/team-profile/create-match",e)},this.createTicket=function(e,a,c,n,s,r){return t.axiosApp.post("/tickets/create-ticket/".concat(e,"/").concat(a,"/").concat(c,"/").concat(n,"/").concat(s,"/").concat(r))},this.sendEmail=function(e){return t.axiosApp.post("/checkout/finish/".concat(e))},this.getAllTicketsMatches=function(){return t.axiosApp.get("/matches/get-matches")},this.getMatchInfo=function(e){return t.axiosApp.get("/matches/get-match-info/".concat(e))},this.getTeamInfo=function(e){return t.axiosApp.get("/matches/team-info/".concat(e))},this.axiosApp=A.create({baseURL:"https://footicket.herokuapp.com/api",withCredentials:!0})})),P=a(140),E=a(146),B=a(141),D=(a(72),a(40));var H=function(e){var t=e.match,a=Object(c.useState)(0),n=Object(u.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(0),o=Object(u.a)(i,2),l=o[0],j=o[1],d=new M;return Object(c.useEffect)((function(){d.checkMatch(t.fixture.id).then((function(e){r(e.data[0].capacity),j(e.data[0].price)})).catch((function(e){return console.log(e)}))}),[]),0===t?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(E.a,{style:{width:"18rem",margin:"20px"},children:[Object(k.jsx)(E.a.Body,{children:Object(k.jsxs)(E.a.Title,{children:[Object(k.jsx)("p",{className:"vs",children:Object(k.jsxs)(m.b,{to:"/matches/team/".concat(null===t||void 0===t?void 0:t.teams.home.name),children:[Object(k.jsx)("img",{src:null===t||void 0===t?void 0:t.teams.home.logo,alt:"hola",className:"team-logo"}),null===t||void 0===t?void 0:t.teams.home.name]})}),Object(k.jsx)("p",{className:"vs",children:Object(k.jsxs)(m.b,{to:"/matches/team/".concat(null===t||void 0===t?void 0:t.teams.away.name),children:[Object(k.jsx)("img",{src:null===t||void 0===t?void 0:t.teams.away.logo,alt:"hola",className:"team-logo"}),null===t||void 0===t?void 0:t.teams.away.name]})}),Object(k.jsx)("p",{className:"more-info",children:Object(D.formatDate)(new Date(null===t||void 0===t?void 0:t.fixture.date))}),Object(k.jsx)("p",{className:"more-info",children:null===t||void 0===t?void 0:t.league.name}),Object(k.jsx)("p",{className:"more-info",children:null===t||void 0===t?void 0:t.fixture.venue.name})]})}),Object(k.jsx)(B.a,{className:"list-group-flush"}),Object(k.jsx)(E.a.Body,{children:0!==s?Object(k.jsxs)(E.a.Text,{children:[Object(k.jsxs)("p",{className:"precio",children:[" Precio \u20ac",l]}),Object(k.jsx)("br",{}),Object(k.jsx)(E.a.Link,{children:Object(k.jsx)(m.b,{className:"button-details",to:{pathname:"/match/details",state:{match:t}},children:"Entradas"})})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("p",{className:"button-avisame",children:"No hay entradas disponibles"})]})})]})})},R=new M;var _=function(){var e,t,a,n=Object(c.useState)([]),s=Object(u.a)(n,2),r=s[0],i=s[1],o=Object(h.h)().country;return Object(c.useEffect)((function(){R.getAllMatches(o).then((function(e){i(e.data)})).catch((function(e){return console.log(e)}))}),[o]),0===r.length?Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"logo-contenedor",children:[Object(k.jsx)("div",{className:"logo-radius",children:Object(k.jsx)("img",{src:"Liga Profesional Argentina"===(null===(e=r[0])||void 0===e?void 0:e.league.name)?"https://www.ligaprofesional.ar/wp-content/uploads/2022/04/logo-LPF.png":null===(t=r[0])||void 0===t?void 0:t.league.logo,alt:"Logo",className:"title-img"})}),Object(k.jsx)("h2",{style:{marginLeft:"15px"},children:null===(a=r[0])||void 0===a?void 0:a.league.name})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"container",children:r.map((function(e){return Object(k.jsx)(H,{match:e})}))})]})},q=a(89),z=a(90),G=a(74),J=a.n(G),V=(a(129),a(91)),Y=a(50),K=Object(V.a)("pk_test_51K6CRIH1ByOTHJYIK1GUeHbZBB9fDj0e6pgIqEMJzBCCAhBNTi5sAFS5Sp8o4wczaUvt0HkIVgt5lL7kE1HMiBXI00OYrBqhn6"),W=function(e){var t=Object(Y.useStripe)(),a=Object(Y.useElements)(),c=new M;console.log(e.teamHome,"props.match.teams.home.nameprueba"),console.log(e,"props.match.teams.away.nameprueba");var n=function(){var n=Object(z.a)(J.a.mark((function n(r){var i,o,l,j,d;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t.createPaymentMethod({type:"card",card:a.getElement(Y.CardElement)});case 3:if(i=n.sent,o=i.error,l=i.paymentMethod,o){n.next=13;break}return j=l.id,n.next=10,x.a.post("".concat("https://footicket.herokuapp.com/api","/matches/checkout"),{id:j,amount:100*e.price});case 10:d=n.sent,d.data,c.createTicket(e.price,e.matchId,e.number,e.info,e.teamHome,e.teamAway).then((function(e){return c.sendEmail(e.data._id)})).then((function(e){s.push("/finish/".concat(e.data._id))})).catch((function(e){console.log(e)}));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=Object(h.f)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:"form-control",onSubmit:n,children:[Object(k.jsx)(Y.CardElement,{options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{fontFamily:"Arial, sans-serif",color:"#fa755a",iconColor:"#fa755a"}}}}),Object(k.jsx)("button",{className:"btn btn-success",id:"pay",type:"submit",children:"Pagar"})]})})};var X=function(e){return Object(k.jsx)(Y.Elements,{stripe:K,children:Object(k.jsx)(W,Object(i.a)({},e))})},Z=a.p+"static/media/visa.8cfb69c0.png",Q=a.p+"static/media/amex.9ecea2dc.png",$=a.p+"static/media/mastercard.98e6700b.png";var ee=function(e){var t=Object(h.g)().state.match,a=Object(c.useState)(0),n=Object(u.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(0),o=Object(u.a)(i,2),l=o[0],j=o[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),m=b[0],O=b[1],x=Object(c.useState)(0),p=Object(u.a)(x,2),g=p[0],f=p[1],v=new M;Object(c.useEffect)((function(){v.checkMatch(t.fixture.id).then((function(e){r(e.data[0].capacity),j(e.data[0].price),O(e.data[0].matchId)})).catch((function(e){return console.log(e)}))}),[]);var y=l*g,w=Object(c.useState)(""),S=Object(u.a)(w,2),C=S[0],I=S[1],T=Object(c.useState)(""),L=Object(u.a)(T,2),F=L[0],U=L[1],A=Object(c.useState)(""),P=Object(u.a)(A,2),H=P[0],R=P[1],_=null===t||void 0===t?void 0:t.teams.home.name,z=null===t||void 0===t?void 0:t.teams.away.name,G=H;return console.log(G,"purch info"),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"top-section",children:[Object(k.jsx)("div",{children:Object(k.jsxs)("h2",{className:"teamnamedetails",children:[Object(k.jsx)("img",{src:null===t||void 0===t?void 0:t.teams.home.logo,alt:"Home Logo",className:"imgteam"}),null===t||void 0===t?void 0:t.teams.home.name]})}),Object(k.jsx)("div",{children:Object(k.jsxs)("h2",{className:"teamnamedetails",children:[Object(k.jsx)("img",{src:null===t||void 0===t?void 0:t.league.logo,style:{width:"55px"},alt:"League Logo"}),null===t||void 0===t?void 0:t.league.name]})}),Object(k.jsx)("div",{children:Object(k.jsxs)("h2",{className:"teamnamedetails",children:[Object(k.jsx)("img",{src:null===t||void 0===t?void 0:t.teams.away.logo,alt:"Away Logo",className:"imgteam"}),null===t||void 0===t?void 0:t.teams.away.name]})})]}),Object(k.jsx)("div",{className:"fullcontainer",children:Object(k.jsxs)("div",{className:"formulario2",children:[Object(k.jsxs)("div",{className:"border-container",children:[Object(k.jsxs)(N.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(k.jsx)(N.a.Control,{className:"form-info",type:"text",placeholder:"Nombre",onChange:function(e){return I(e.target.value)},value:C}),Object(k.jsx)(N.a.Control,{className:"form-info",type:"text",placeholder:"Apellido",value:F,onChange:function(e){return U(e.target.value)}}),Object(k.jsx)(N.a.Control,{className:"form-info",type:"text",placeholder:"Email",value:H,onChange:function(e){return R(e.target.value)}}),Object(k.jsx)(N.a.Control,{className:"form-info",type:"text",placeholder:"Telefono",style:{margin:"0px"}})]}),Object(k.jsxs)("div",{className:"contenedordos",children:["Seleccione la cantidad de entradas",Object(k.jsx)("br",{}),Object(k.jsx)(N.a.Group,{controlId:"formBasicSelect",children:Object(k.jsxs)(N.a.Control,{as:"select",value:g,onChange:function(e){f(e.target.value)},children:[Object(k.jsx)("option",{value:"0",children:"Cantidad de entradas"}),Object(k.jsx)("option",{value:"1",children:"1"}),Object(k.jsx)("option",{value:"2",children:"2"}),Object(k.jsx)("option",{value:"3",children:"3"}),Object(k.jsx)("option",{value:"4",children:"4"}),Object(k.jsx)("option",{value:"5",children:"5"})]})}),Object(k.jsx)("br",{}),Object(k.jsxs)("h3",{className:"price",children:[" Total: \u20ac",y," "]}),Object(k.jsxs)("div",{className:"credit-card-logos",children:[Object(k.jsx)("img",{src:Z,alt:"Visa",style:{width:"35px",marginRight:"30px"}}),Object(k.jsx)("img",{src:Q,alt:"Amex",style:{width:"35px",marginRight:"30px"}}),Object(k.jsx)("img",{src:$,alt:"Master",style:{width:"35px"}})]}),Object(k.jsx)(X,{price:y,matchId:m,number:g,match:t,info:G,teamHome:_,teamAway:z}),Object(k.jsx)("p",{style:{fontSize:"12px",textAlign:"center"},children:"*Para simular una venta insertar tarjeta de prueba 4242 4242 4242 4242"})]})]}),Object(k.jsx)("div",{className:"second-box",children:Object(k.jsx)(E.a,{style:{width:"18rem"},children:Object(k.jsxs)(B.a,{variant:"flush",children:[Object(k.jsx)(E.a.Header,{children:"Fecha"}),Object(k.jsx)(B.a.Item,{children:Object(D.formatDate)(new Date(null===t||void 0===t?void 0:t.fixture.date))}),Object(k.jsx)(E.a.Header,{children:"Estadio"}),Object(k.jsx)(B.a.Item,{children:null===t||void 0===t?void 0:t.fixture.venue.name}),Object(k.jsx)(E.a.Header,{children:"Precio"}),Object(k.jsxs)(B.a.Item,{children:["\u20ac ",l]})]})})})]})}),Object(k.jsx)("div",{className:"contenedor-mobile",children:Object(k.jsxs)(E.a,{style:{width:"18rem"},children:[Object(k.jsxs)(B.a,{className:"list-group-flush",children:[Object(k.jsx)(q.a,{children:Object(D.formatDate)(new Date(null===t||void 0===t?void 0:t.fixture.date))}),Object(k.jsx)(q.a,{children:null===t||void 0===t?void 0:t.league.round}),Object(k.jsx)(q.a,{children:null===t||void 0===t?void 0:t.fixture.venue.name}),Object(k.jsxs)(q.a,{children:["Precio: ",l]}),Object(k.jsxs)(q.a,{children:["\xdaltimas ",s," entradas disponibles"]})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"contador",children:Object(k.jsxs)(N.a.Group,{controlId:"formBasicSelect",children:[Object(k.jsxs)(N.a.Control,{as:"select",value:g,onChange:function(e){f(e.target.value)},children:[Object(k.jsx)("option",{value:"0",children:"Cantidad de entradas"}),Object(k.jsx)("option",{value:"1",children:"1"}),Object(k.jsx)("option",{value:"2",children:"2"}),Object(k.jsx)("option",{value:"3",children:"3"}),Object(k.jsx)("option",{value:"4",children:"4"}),Object(k.jsx)("option",{value:"5",children:"5"})]}),Object(k.jsx)("br",{})]})}),Object(k.jsxs)("h3",{className:"price",children:[" Total: \u20ac",y," "]}),Object(k.jsxs)("div",{className:"credit-card-logos",children:[Object(k.jsx)("img",{src:Z,alt:"Visa",style:{width:"35px",marginRight:"30px"}}),Object(k.jsx)("img",{src:Q,alt:"Amex",style:{width:"35px",marginRight:"30px"}}),Object(k.jsx)("img",{src:$,alt:"Master",style:{width:"35px"}})]}),Object(k.jsx)(N.a.Control,{type:"text",placeholder:"Nombre del titular de la tarjeta",style:{marginRight:"10px;"}}),Object(k.jsx)(N.a.Control,{type:"text",placeholder:"Email",value:H,onChange:function(e){return R(e.target.value)}}),Object(k.jsx)(N.a.Control,{type:"text",placeholder:"Numero de telefono",style:{marginBottom:"10px;"}}),Object(k.jsx)(X,{price:y,matchId:m,number:g,info:G,teamHome:_,teamAway:z})]})})]})},te=new M;var ae=function(){var e=Object(h.h)().teamName,t=Object(c.useState)([]),a=Object(u.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){te.getTeamId(e).then((function(e){return te.getTeamMatches(e.data)})).then((function(e){s(e.data.response)})).catch((function(e){return console.log(e)}))}),[e]);var r=Object(c.useState)([]),i=Object(u.a)(r,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){te.getTeamInfo(e).then((function(e){l(e.data.response[0])})).catch((function(e){return console.log(e)}))}),[e]),console.log(o,"quee"),console.log(e,"quee"),0===n.length||0===o.length?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"logo-contenedor",children:[Object(k.jsx)("div",{className:"logo-radius",children:Object(k.jsx)("img",{src:null===o||void 0===o?void 0:o.team.logo,alt:"Logo",className:"title-img"})}),Object(k.jsx)("h2",{style:{marginLeft:"15px"},children:e})]}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"container",children:n.map((function(e){return Object(k.jsx)(H,{match:e})}))})]})},ce=a(142);var ne=function(e){var t,a,n,s,r,i,o,l=new M,j=Object(c.useState)(0),d=Object(u.a)(j,2),b=d[0],m=d[1],O=Object(c.useState)(0),x=Object(u.a)(O,2),p=x[0],g=x[1];Object(c.useEffect)((function(){var t;e.match.dbInfo&&(0!==(null===(t=e.match.dbInfo)||void 0===t?void 0:t.length)&&(m(e.match.dbInfo[0].capacity),g(e.match.dbInfo[0].price)))}),[e.match]);var f=function(t,a){m("add"===a?Number(b)+1:0===b?0:Number(b)-1),console.log(e.match.fixture.id)},v=Object(h.f)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(E.a,{style:{width:"18rem"},children:[Object(k.jsxs)(E.a.Body,{children:[Object(k.jsxs)(E.a.Title,{children:[Object(k.jsx)("img",{src:null===(t=e.match)||void 0===t?void 0:t.teams.home.logo,alt:"hola",style:{width:"20px"}}),null===(a=e.match)||void 0===a?void 0:a.teams.home.name," vs",Object(k.jsx)("img",{src:null===(n=e.match)||void 0===n?void 0:n.teams.away.logo,alt:"hola",style:{width:"20px"}}),null===(s=e.match)||void 0===s?void 0:s.teams.away.name]}),Object(k.jsx)(E.a.Text,{})]}),Object(k.jsxs)(B.a,{className:"list-group-flush",children:[Object(k.jsx)(q.a,{children:Object(D.formatDate)(new Date(null===(r=e.match)||void 0===r?void 0:r.fixture.date))}),Object(k.jsx)(q.a,{children:null===(i=e.match)||void 0===i?void 0:i.league.round}),Object(k.jsx)(q.a,{children:null===(o=e.match)||void 0===o?void 0:o.fixture.venue.name})]}),Object(k.jsx)(E.a.Body,{children:Object(k.jsxs)(N.a,{onSubmit:function(t){t.preventDefault(),l.checkMatch(e.match.fixture.id).then((function(t){0===t.data.length?(l.createMatch({capacity:b,price:p,matchId:e.match.fixture.id}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),v.push("/")):l.updateMatch({id:t.data[0]._id,price:p,capacity:b}).then((function(e){m(e.data.capacity),g(e.data.price),v.push("/")})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},children:[Object(k.jsx)("div",{className:"contador",children:Object(k.jsxs)(ce.a,{className:"mb-3",children:[Object(k.jsx)(S.a,{onClick:function(e){return f(0,"remove")},variant:"outline-secondary",id:"button-addon1",children:"-"}),Object(k.jsx)(w.a,{"aria-label":"capacity","aria-describedby":"capacity",onChange:function(e){m(e.currentTarget.value)},value:Number(b),id:"button-addon1"}),Object(k.jsx)(S.a,{onClick:function(e){return f(0,"add")},variant:"outline-secondary",id:"button-addon1",children:"+"})]})}),Object(k.jsxs)(ce.a,{className:"mb-3",id:"ticketprice",children:[Object(k.jsx)(ce.a.Text,{children:"\u20ac"}),Object(k.jsx)(w.a,{"aria-label":"price",value:Number(p),onChange:function(e){g(e.currentTarget.value)}})]}),Object(k.jsx)(S.a,{as:"input",id:"pay",type:"submit",value:"Enviar"})]})})]})})},se=new M;var re=function(e){var t=Object(c.useState)([]),a=Object(u.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){se.getTeamMatches(e.loggedUser.team_id).then((function(e){var t=e.data.response;return t.forEach((function(e){se.checkMatch(e.fixture.id).then((function(t){e.dbInfo=t.data})).catch((function(e){return console.log(e)}))})),s(t)})).catch((function(e){return console.log(e)}))}),[e.loggedUser.team_id]),0===n.length?Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{className:"title",children:" Proximos Partidos "}),Object(k.jsx)("div",{className:"contenedor",children:n.map((function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(ne,{match:e})})}))})]})},ie=(a(130),a(69));var oe=function(){return Object(k.jsxs)("footer",{class:"footer-distributed",children:[Object(k.jsxs)("div",{class:"footer-left",children:[Object(k.jsxs)("h3",{children:[Object(k.jsx)("img",{src:b,alt:"logo",className:"logo",style:{width:"35px"}}),"Foo",Object(k.jsx)("span",{children:"Ticket"})]}),Object(k.jsxs)("p",{class:"footer-links",children:[Object(k.jsx)(m.b,{as:m.b,to:"/login",children:"Iniciar Sesion"}),Object(k.jsx)(m.b,{as:m.b,to:"/signup",children:"Registrate"}),Object(k.jsx)(m.b,{as:m.b,to:"/league/england",children:"Premier League"}),Object(k.jsx)(m.b,{as:m.b,to:"/league/spain",children:"LaLiga"}),Object(k.jsx)(m.b,{as:m.b,to:"/league/italy",children:"Serie A"})]}),Object(k.jsx)("p",{class:"footer-company-name",children:"Footicket \xa9 2022"})]}),Object(k.jsxs)("div",{class:"footer-center",children:[Object(k.jsx)("div",{children:Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{children:"Pl. de Legazpi, 8 "})," 28045, Madrid"]})}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"+34.667.460.0552"})}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:Object(k.jsx)("a",{href:"mailto:support@company.com",children:"support@footicket.com"})})})]}),Object(k.jsxs)("div",{class:"footer-right",children:[Object(k.jsxs)("p",{class:"footer-company-about",children:[Object(k.jsx)("span",{children:"Sobre nosotros"}),"Footicket es una aplicaci\xf3n que simula la compra y venta de entradas en las principales ligas del mundo. El club elije el precio y la cantidad de entradas que decide poner a la venta"]}),Object(k.jsxs)("div",{class:"footer-icons",children:[Object(k.jsx)(m.b,{as:m.b,to:"#",children:Object(k.jsx)(ie.a,{})}),Object(k.jsx)(m.b,{as:m.b,to:"#",children:Object(k.jsx)(ie.c,{})}),Object(k.jsx)(m.b,{as:m.b,to:"#",children:Object(k.jsx)(ie.b,{})})]})]})]})};a(131);var le=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=function(e){e.preventDefault()};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"s006",children:Object(k.jsx)("form",{onSubmit:s,children:Object(k.jsx)("fieldset",{children:Object(k.jsx)("div",{className:"inner-form",children:Object(k.jsxs)("div",{className:"input-field",children:[Object(k.jsx)(m.b,{to:"/matches/team/".concat(a),children:Object(k.jsx)("button",{className:"btn-search",id:"myBtn",onSubmit:s,type:"submit",children:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(k.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})})}),Object(k.jsx)("input",{id:"search",type:"text",placeholder:"Busca por Equipo o Seleccion Nacional - WC 2022",name:"teamName",value:a,onChange:function(e){n(e.currentTarget.value)}})]})})})})})})};var je=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(le,{}),Object(k.jsx)(oe,{})]})};var de=function(){return Object(k.jsx)("div",{className:"card-accepted",children:Object(k.jsxs)(E.a,{children:[Object(k.jsx)(E.a.Header,{children:"Compra Finalizada"}),Object(k.jsxs)(E.a.Body,{children:[Object(k.jsx)(E.a.Title,{children:"\xa1Gracias por confiar en FooTicket!"}),Object(k.jsx)(E.a.Text,{children:"En breve recibir\xe1s un mail con tus Tickets para el partido. O recibir\xe1s la informaci\xf3n adecuada de donde y en que horario retriar los tickets del partido."}),Object(k.jsx)(m.b,{className:"button-details",to:"/",children:"Inicio"})]})]})})};var he=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(u.a)(s,2),i=(r[0],r[1]),o=new M;return Object(c.useEffect)((function(){o.getAllTicketsMatches().then((function(e){console.log(e.data),n(e.data.allMatches),i(e.data.dbInfo)})).catch((function(e){return console.log(e)}))}),[]),0===a.length?Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:" Partidos con entradas "}),Object(k.jsx)("div",{className:"container",children:a.map((function(e){return Object(k.jsx)(H,{match:e},e.fixture.id)}))})]})},ue=Object(l.a)((function e(){var t=this;Object(o.a)(this,e),this.getProfile=function(e){return t.app.get("/".concat(e))},this.getTicketProfile=function(){return t.app.get("/UserTickets")},this.app=x.a.create({baseURL:"".concat("https://footicket.herokuapp.com/api","/profile-user"),withCredentials:!0})}));var be=function(e){var t=Object(c.useState)({}),a=Object(u.a)(t,2),n=a[0],s=a[1],r=new M;return Object(c.useEffect)((function(){r.getMatchInfo(e.ticket.match_id).then((function(e){var t,a;s({home:null===(t=e.data.response[0].teams)||void 0===t?void 0:t.home.name,away:null===(a=e.data.response[0].teams)||void 0===a?void 0:a.away.name})})).catch((function(e){return console.log(e)}))}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("p",{children:["Partido: ",n.home," - ",n.away]}),Object(k.jsxs)("p",{children:["N\xfamero de entradas: ",e.ticket.numberOfTickets]}),Object(k.jsxs)("p",{children:["Precio de entradas: \u20ac",e.ticket.totalPrice]}),Object(k.jsx)("hr",{})]})},me=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={user:void 0,tickets:[],saved:!1,teams:{}},c.profileService=new ue,c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.profileService.getProfile(this.props.loggedUser._id).then((function(t){return e.setState({user:t.data.user})})).catch((function(e){return console.log(e)})),this.profileService.getTicketProfile().then((function(t){console.log(t.data),e.setState({tickets:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e,t;return this.props.loggedUser?Object(k.jsx)(f.a,{className:"conteiner-profile",children:Object(k.jsx)(E.a,{style:{width:"18rem"},children:Object(k.jsxs)(E.a.Body,{children:[Object(k.jsx)(E.a.Title,{children:"Tu perfil"}),Object(k.jsxs)(E.a.Text,{children:["Nombre de usuario: ",null===(e=this.state.user)||void 0===e?void 0:e.username,Object(k.jsx)("hr",{}),"Email: ",null===(t=this.state.user)||void 0===t?void 0:t.email,Object(k.jsx)("hr",{}),Object(k.jsx)(E.a.Title,{children:"Tus compras: "}),this.state.tickets.map((function(e){return Object(k.jsx)(be,{ticket:e})}))]})]})})}):Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}}]),a}(c.Component),Oe=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={user:void 0,tickets:[],saved:!1},c.profileService=new ue,c}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.profileService.getProfile(this.props.loggedUser._id).then((function(t){return e.setState({user:t.data.user})})).catch((function(e){return console.log(e)})),this.profileService.getTicketProfile().then((function(t){console.log(t.data),e.setState({tickets:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return this.props.loggedUser?Object(k.jsx)(f.a,{className:"conteiner-profile",children:Object(k.jsx)(E.a,{style:{width:"18rem"},children:Object(k.jsx)(E.a.Body,{children:Object(k.jsxs)(E.a.Text,{children:[Object(k.jsxs)("h4",{children:[" ",null===(e=this.state.user)||void 0===e?void 0:e.username]}),Object(k.jsx)("hr",{}),0!==this.state.tickets.length?this.state.tickets.map((function(e){console.log("holaaa",e.numberOfTickets);var t=e.numberOfTickets*e.totalPrice;return Object(k.jsxs)(k.Fragment,{children:["Tus ventas: ",Object(k.jsxs)("h4",{children:[e.numberOfTickets," "]}),Object(k.jsx)("p",{children:"Precio total de entradas vendidas:"}),Object(k.jsxs)("h4",{children:["\u20ac",t]})]})})):Object(k.jsx)("p",{children:"No hay ventas"})]})})})}):Object(k.jsx)(P.a,{animation:"border",role:"status",id:"pluswrap",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}}]),a}(c.Component),xe=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).storeUser=function(e){c.setState({loggedUser:e})},c.state={loggedUser:void 0},c.authService=new p,c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.authService.isloggedin().then((function(t){return e.storeUser(t.data)})).catch((function(t){return e.storeUser(null)}))}},{key:"render",value:function(){var e=this;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(I,{storeUser:this.storeUser,loggedUser:this.state.loggedUser}),Object(k.jsx)("main",{children:Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/",exact:!0,render:function(){return Object(k.jsx)(je,{})}}),Object(k.jsx)(h.a,{path:"/signup",render:function(t){return Object(k.jsx)(F,Object(i.a)(Object(i.a)({},t),{},{storeUser:e.storeUser}))}}),Object(k.jsx)(h.a,{path:"/login",render:function(t){return Object(k.jsx)(U,Object(i.a)(Object(i.a)({},t),{},{storeUser:e.storeUser}))}}),Object(k.jsx)(h.a,{path:"/tickets",render:function(e){return Object(k.jsx)(he,Object(i.a)({},e))}}),Object(k.jsx)(h.a,{path:"/league/:country",render:function(t){return Object(k.jsx)(_,Object(i.a)(Object(i.a)({},t),{},{storeUser:e.storeUser}))}}),Object(k.jsx)(h.a,{path:"/match/details",render:function(e){return Object(k.jsx)(ee,Object(i.a)({},e))}}),Object(k.jsx)(h.a,{path:"/matches/team/:teamName",render:function(e){return Object(k.jsx)(ae,Object(i.a)({},e))}}),Object(k.jsx)(h.a,{path:"/team/profile",render:function(t){return Object(k.jsx)(re,Object(i.a)({loggedUser:e.state.loggedUser},t))}}),Object(k.jsx)(h.a,{path:"/profile-user",render:function(t){return Object(k.jsx)(me,Object(i.a)({loggedUser:e.state.loggedUser},t))}}),Object(k.jsx)(h.a,{path:"/profile-user-team",render:function(t){return Object(k.jsx)(Oe,Object(i.a)({loggedUser:e.state.loggedUser},t))}}),Object(k.jsx)(h.a,{path:"/finish/:ticketId",render:function(e){return Object(k.jsx)(de,Object(i.a)({},e))}})]})})]})}}]),a}(c.Component),pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,148)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(132);r.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(m.a,{children:Object(k.jsx)(xe,{})})}),document.getElementById("root")),pe()},40:function(e,t){e.exports={formatDate:function(e){var t=""+(e.getMonth()+1),a=""+e.getDate(),c=e.getFullYear(),n=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),[a,t,c].join("-")+" "+[n,s].join(":")+"h"}}},58:function(e,t,a){},72:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.d9288d08.chunk.js.map