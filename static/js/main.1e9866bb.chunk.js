(this.webpackJsonpmo=this.webpackJsonpmo||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/profile.50f55265.png"},,function(e,t,a){e.exports=a.p+"static/media/paper-plane.f7ceb5de.svg"},,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/bug.fff085bd.JPG"},function(e,t,a){e.exports=a.p+"static/media/expenses.706bb9e5.jpg"},function(e,t,a){e.exports=a.p+"static/media/game.e2e3ec25.JPG"},function(e,t,a){e.exports=a.p+"static/media/car.4a545188.JPG"},function(e,t,a){e.exports=a.p+"static/media/kora.28095af2.jpg"},function(e,t,a){e.exports=a.p+"static/media/hrms.d7520f58.jpg"},function(e,t,a){e.exports=a.p+"static/media/task.023eb14a.jpg"},function(e,t,a){e.exports=a.p+"static/media/etl.4d8ef509.jpg"},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),c=a.n(o),i=a(2),r=a(34),s=a(1),m=(a(16),a(17),a(5));function p(){s.a.timeline({ease:"power4.inOut"}).to(".menu",0,{display:"flex"}).to(".menu-curtain",.5,{width:"100%"}).to(".menu-content",.5,{width:"100%"},"-=.3").to(".link",.3,{x:0,stagger:.1}).to(".contact-link",.3,{opacity:1,stagger:.1}),s.a.to(".line2",{duration:.2,opacity:0}),s.a.to(".line1",{duration:.4,y:"8.9px"}),s.a.to(".line1",{delay:.4,rotation:45}),s.a.to(".line3",{duration:.4,y:"-8.9px"}),s.a.to(".line3",{delay:.4,rotation:-45})}function d(){s.a.timeline({ease:"power4.inOut"}).to(".contact-link",.3,{opacity:0,stagger:.1}).to(".link",.3,{x:"-1000px",stagger:.1},"-=.3").to(".menu-content",.5,{width:"0%"}).to(".menu-curtain",.5,{width:"0%"},"-=.3").to(".menu",0,{display:"none"}),s.a.to(".line1",{rotation:0,duration:.4}),s.a.to(".line1",{delay:.4,y:0}),s.a.to(".line3",{rotation:0,duration:.4}),s.a.to(".line3",{delay:.4,y:0}),s.a.to(".line2",{delay:.5,duration:.1,opacity:1,display:"block"})}s.a.registerPlugin(m.a);var u=function(){var e=Object(n.useState)("about"),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),m=r[0],u=r[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),f=h[0],x=h[1];function v(){x(!0),!0===m?(d(),u(!1)):(p(),u(!0)),setTimeout((function(){x(!1)}),1500)}function E(e){document.querySelector("body").style.overflow="hidden";var t=window.innerWidth,n=s.a.timeline();n.to("#".concat(e),0,{x:t,display:"flex"}),n.to("#".concat(a),.7,{x:-t}),n.to("#".concat(a),0,{display:"none"}),n.to("#".concat(e),.7,{x:0}),o(e),setTimeout((function(){document.querySelector("body").style.overflow="auto"}),2e3)}return Object(n.useEffect)((function(){s.a.to("#header",.7,{y:0,delay:.5})}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"flex",id:"header"},l.a.createElement("div",{className:"logo",onClick:function(){s.a.timeline().to(".dot",.3,{x:10,ease:"back.out(1.7)"}).to(".dot",.3,{x:0})}},"mo",l.a.createElement("span",{className:"dot"},".")),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"toggler flex"},l.a.createElement("button",{onClick:v,disabled:f},l.a.createElement("span",{className:"toggler-line line1"}),l.a.createElement("span",{className:"toggler-line line2"}),l.a.createElement("span",{className:"toggler-line line3"})))),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"menu-curtain"}),l.a.createElement("div",{className:"menu-content"},l.a.createElement("div",{className:"links flex flex-column center"},l.a.createElement("div",{className:"link",onClick:function(){v(),E("about")}},l.a.createElement("div",{className:"link-title"},"about"),l.a.createElement("div",{className:"link-info"},"Information about me.")),l.a.createElement("div",{className:"link",onClick:function(){v(),E("projects")}},l.a.createElement("div",{className:"link-title"},"projects"),l.a.createElement("div",{className:"link-info"},"A list of my projects.")),l.a.createElement("div",{className:"link",onClick:function(){v(),E("contact")}},l.a.createElement("div",{className:"link-title"},"contact"),l.a.createElement("div",{className:"link-info"},"Get in touch."))),l.a.createElement("div",{className:"contact-links flex"},l.a.createElement("a",{className:"contact-link",href:"https://www.linkedin.com/in/mo-elhaj/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),l.a.createElement("a",{className:"contact-link",href:"https://github.com/moelhaj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"})))))))},g=a(10),h=a(6),f=a.n(h);a(18);s.a.registerPlugin(g.a);var x=function(){return Object(n.useEffect)((function(){s.a.fromTo(".profile-image-container",.5,{scale:0},{opacity:1,scale:1,delay:1}),s.a.fromTo(".profile-image",.5,{y:50},{y:0,opacity:1,ease:"back.out(4)",delay:1.5}),s.a.timeline({delay:2,repeat:-1,ease:"back.out(1.2)"}).to(".heading",.1,{text:"Hi, I'm mo",y:"-100px"}).to(".text",.1,{text:"A motivated problem solver who enjoys coding and building solution",y:"-100px"}).to(".heading",.5,{y:0,opacity:1}).to(".text",.5,{y:0,opacity:1},"-=.2").to(".text",7,{x:0}).to(".heading",.5,{y:"50px",opacity:0}).to(".text",.5,{y:"65px",opacity:0},"-=.2").to(".heading",.1,{text:"Front-End Developer"}).to(".text",.1,{text:"React, Angular, Vue, React Native, GSAP, and more"}).to(".heading",.1,{y:"-100"}).to(".text",.1,{y:"-100"}).to(".heading",.5,{y:0,opacity:1}).to(".text",.5,{y:0,opacity:1},"-=.2").to(".text",7,{x:0}).to(".heading",.5,{y:"50px",opacity:0}).to(".text",.5,{y:"65px",opacity:0},"-=.2").to(".heading",.1,{text:"Backend Developer"}).to(".text",.1,{text:"JavaScript, Python, PHP, Node.js, Express.js, Django, Laravel and more"}).to(".heading",.1,{y:"-100"}).to(".text",.1,{y:"-100"}).to(".heading",.5,{y:0,opacity:1}).to(".text",.5,{y:0,opacity:1},"-=.2").to(".text",7,{x:0}).to(".heading",.5,{y:"50px",opacity:0}).to(".text",.5,{y:"65px",opacity:0},"-=.2")}),[]),l.a.createElement("section",{id:"about",className:"about flex"},l.a.createElement("div",{className:"container flex flex-column center p15",style:{paddingTop:"70px"}},l.a.createElement("div",{className:"flex center profile-image-container"},l.a.createElement("img",{src:f.a,className:"profile-image",alt:"profile"})),l.a.createElement("div",{className:"flex flex-column center"},l.a.createElement("div",{className:"overflow-hidden intro-heading"},l.a.createElement("h1",{className:"heading"},"Hi, I'm mo")),l.a.createElement("div",{className:"overflow-hidden intro-text"},l.a.createElement("p",{className:"text"},"A motivated problem solver who enjoys coding and building solutions")))))},v=(a(19),[{title:"Bug Tracker",tags:["Node.js","Express.js","React","MongoDB"],details:"Bug Tracker app, built using MERN Stack.",github:"https://github.com/moElhaj/mern-bug-tracker",demo:"https://mo-bug-tracker.herokuapp.com",image:"".concat(a(20))},{title:"Expenses Tracker",tags:["Node.js","Express.js","React","MongoDB"],details:"Track your finances to know where your money is going.",github:"https://github.com/moElhaj/expenses-tracker",demo:"https://mo-expenses.herokuapp.com",image:"".concat(a(21))},{title:"Guess the word",tags:["Angular"],details:"Guess the word using the given clues. A fun game built using Angular.",github:"https://github.com/moElhaj/angular-word-game",demo:"https://mo-game.herokuapp.com",image:"".concat(a(22))},{title:"ML cars prices",tags:["Flask","Python"],details:"Estimate cars prices based on features specified by you using Machine Learning.",github:"https://github.com/moElhaj/Machine-Learning-Car-Estimator",demo:"https://codex-garage.herokuapp.com",image:"".concat(a(23))},{title:"Football App",tags:["React Native"],details:"Follow premier league, live scores, and standings",github:"https://github.com/moElhaj/react-native-football-app",demo:"https://expo.io/@moelhaj/kora",image:"".concat(a(24))},{title:"Employee Management",tags:["PHP"],details:"Payrolls and Human Resources Management.",github:"https://github.com/moElhaj/php-employees-management",image:"".concat(a(25))},{title:"Task Management",tags:["ASP.NET"],details:"Manage tasks, sort by priority and flow due dates.",github:"https://github.com/moElhaj/aspnet-task-management",image:"".concat(a(26))},{title:"ETL Pipeline",tags:["SQL","Python"],details:"Extracting data from csv, transforming it, and loading into a Data Warehouse.",github:"https://github.com/moElhaj/elt-pipeline",image:"".concat(a(27))}]);var E=function(){var e=Object(n.useRef)(),t=Object(n.useState)(0),a=Object(i.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){}),[]),l.a.createElement("section",{id:"projects",className:"projects flex center"},l.a.createElement("div",{className:"container p15"},l.a.createElement("div",{ref:e,className:"project",style:{backgroundImage:"url(".concat(v[o].image,")")}},l.a.createElement("div",{className:"project-curtain"}),l.a.createElement("div",{className:"project-content w-100 h-100 flex flex-column"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"box"},l.a.createElement("h3",{className:"project-title"},v[o].title)),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"box"},l.a.createElement("h3",{className:"project-id"},o<10?"0".concat(o+1):o+1))),l.a.createElement("div",{className:"box",style:{marginTop:"30px"}},l.a.createElement("p",{className:"project-details"},v[o].details)),l.a.createElement("div",{className:"box",style:{marginTop:"30px"}},l.a.createElement("div",{className:"flex project-tags"},v[o].tags.map((function(e,t){return l.a.createElement("div",{key:t,className:"tag flex v-center"},e)})))),l.a.createElement("div",{className:"box",style:{marginTop:"30px"}},l.a.createElement("div",{className:"flex v-center project-links"},v[o].demo&&l.a.createElement("a",{className:"flex v-center project-link",href:v[o].demo,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},l.a.createElement("path",{fillRule:"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}))),v[o].github&&l.a.createElement("a",{className:"flex v-center project-link",href:v[o].github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))))),l.a.createElement("div",{className:"project-controls flex h-center"},l.a.createElement("svg",{onClick:function(){var t=e.current.getBoundingClientRect().width;s.a.to([".project-title",".project-id"],1,{y:"100px"}),s.a.to(".project-curtain",1,{width:"100%"}),setTimeout((function(){c(0===o?v.length-1:o-1)}),900),s.a.to([".project-title",".project-id"],1,{y:0,delay:1}),s.a.to(".project-curtain",1,{x:t,delay:1}),s.a.to(".project-curtain",0,{width:"0%",x:0,delay:2})},xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16"},l.a.createElement("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})),l.a.createElement("svg",{onClick:function(){var t=e.current.getBoundingClientRect().width;s.a.to([".project-title",".project-id"],1,{y:"100px"}),s.a.to(".project-curtain",1,{width:"100%"}),setTimeout((function(){o>=v.length-1?c(0):c(o+1)}),900),s.a.to([".project-title",".project-id"],1,{y:0,delay:1}),s.a.to(".project-curtain",1,{x:t,delay:1}),s.a.to(".project-curtain",0,{width:"0%",x:0,delay:2})},xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},l.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))))},y=a(7),b=a.n(y),w=a(8),N=a.n(w);a(30);var j=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1];return l.a.createElement("section",{id:"contact",className:"contact flex flex-column center"},l.a.createElement("h1",{style:{marginBottom:"20px"}},"get in touch"),l.a.createElement("form",{id:"contact-form",onSubmit:function(e){o(!0),e.preventDefault(),s.a.timeline().to(".btn-text",.5,{x:120}).to(".paper-plane",.5,{x:0}),b.a.sendForm("service_apzyxis","template_w4m759g",e.target,"user_Pgmtn1fOzzBMCnRBXmIxM").then((function(e){document.getElementById("contact-form").reset(),s.a.timeline().to(".paper-plane",.5,{x:120}).to(".success",.5,{scale:1,opacity:1}).to(".success",.5,{scale:0,opacity:1,delay:1}).to(".btn-text",.5,{x:0}).to(".paper-plane",0,{opacity:0}).to(".paper-plane",0,{x:"-150px"}).to(".paper-plane",0,{opacity:1}),o(!1)}),(function(e){document.getElementById("contact-form").reset(),s.a.timeline().to(".paper-plane",.5,{x:120}).to(".failure",.5,{scale:1,opacity:1}).to(".failure",.5,{scale:0,opacity:1,delay:1}).to(".btn-text",.5,{x:0}).to(".paper-plane",0,{opacity:0}).to(".paper-plane",0,{x:"-150px"}).to(".paper-plane",0,{opacity:1}),o(!1)}))}},l.a.createElement("div",{className:"flex flex-column w-100"},l.a.createElement("input",{type:"text",name:"from_name",placeholder:"Name",required:!0}),l.a.createElement("input",{type:"email",name:"from_email",placeholder:"Email",required:!0}),l.a.createElement("textarea",{name:"message",cols:"30",rows:"2",placeholder:"Message",required:!0}),l.a.createElement("div",{className:"flex center",style:{marginTop:"10px"}},l.a.createElement("button",{className:"btn flex center",disabled:a},l.a.createElement("div",{className:"overflow-hidden position-relative w-100 h-100 flex center"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"var(--red)",className:"failure bi bi-x",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"var(--green)",className:"success bi bi-check2",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})),l.a.createElement("img",{src:N.a,className:"paper-plane",alt:"contact animation"}),l.a.createElement("div",{className:"btn-text"},"Send")))))))},k=(a(31),function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"loader-content flex center full"},l.a.createElement("div",{className:"overflow-hidden"},l.a.createElement("h1",{className:"loader-letter"},"m")),l.a.createElement("div",{className:"overflow-hidden"},l.a.createElement("h1",{className:"loader-letter"},"o")),l.a.createElement("div",{className:"overflow-hidden"},l.a.createElement("h1",{className:"loader-letter"},"."))))}),M=function(){return l.a.createElement("div",{className:"orientation flex flex-column center"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",className:"bi bi-phone",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"}),l.a.createElement("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})),l.a.createElement("p",null,"Please rotate your device back"))};var B=function(){var e=Object(r.a)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){s.a.timeline().to(".loader-letter",.5,{y:0,ease:"back.out(2)",stagger:.1,delay:1}).to(".loader-letter",2,{y:"100px",ease:"back.out(2)",stagger:.1,delay:2}).to(".loader-content",.5,{width:0},"-=1"),setTimeout((function(){c(!1)}),5300)}),[]),0===e.angle?l.a.createElement(l.a.Fragment,null," ",o?l.a.createElement(k,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(x,null),l.a.createElement(E,null),l.a.createElement(j,null))):l.a.createElement(M,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1e9866bb.chunk.js.map