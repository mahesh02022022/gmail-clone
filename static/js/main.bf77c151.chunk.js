(this["webpackJsonpgmail-clone-yt"]=this["webpackJsonpgmail-clone-yt"]||[]).push([[0],{108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){},122:function(e,t,s){},126:function(e,t,s){},127:function(e,t,s){},128:function(e,t,s){},129:function(e,t,s){},131:function(e,t,s){},132:function(e,t,s){"use strict";s.r(t);var c=s(3),i=s(1),a=s.n(i),n=s(31),j=s.n(n),l=(s(108),s(109),s(110),s(65)),r=s.n(l),o=s(148),d=s(151),b=s(66),m=s.n(b),O=s(53),h=s.n(O),x=s(67),u=s.n(x),p=s(68),f=s.n(p),v=s(17),_=s(39),w=Object(_.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),g=w.actions,N=g.login,T=g.logout,y=function(e){return e.user.user},I=w.reducer,M=s(41),S=M.a.initializeApp({apiKey:"AIzaSyDQaCOCUqe6nz91R_5onp_0AfINruUaefA",authDomain:"clone-16c07.firebaseapp.com",projectId:"clone-16c07",storageBucket:"clone-16c07.appspot.com",messagingSenderId:"686375666588",appId:"1:686375666588:web:6aee70ac22aabfd25afe59",measurementId:"G-JL8QDZJRDB"}).firestore(),H=M.a.auth(),D=new M.a.auth.GoogleAuthProvider;var E=function(){var e=Object(v.c)(y),t=Object(v.b)();return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__left",children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(r.a,{})}),Object(c.jsx)("img",{src:"https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png",alt:""})]}),Object(c.jsxs)("div",{className:"header__middle",children:[Object(c.jsx)(m.a,{}),Object(c.jsx)("input",{placeholder:"Search mail",type:"text"}),Object(c.jsx)(h.a,{className:"header__inputCaret"})]}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(u.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(f.a,{})}),Object(c.jsx)(d.a,{onClick:function(){H.signOut().then((function(){t(T())}))},src:null===e||void 0===e?void 0:e.photoUrl})]})]})},P=s(149),R=(s(120),s(69)),k=s.n(R),C=s(54),L=s.n(C);s(121);var U=function(e){var t=e.Icon,s=e.title,i=e.number,a=e.selected;return Object(c.jsxs)("div",{className:"sidebarOption ".concat(a&&"sidebarOption--active"),children:[Object(c.jsx)(t,{}),Object(c.jsx)("h3",{children:s}),Object(c.jsx)("p",{children:i})]})},q=s(70),z=s.n(q),A=s(71),B=s.n(A),J=s(46),W=s.n(J),G=s(72),Q=s.n(G),F=s(73),K=s.n(F),V=s(74),Z=s.n(V),$=s(75),X=s.n($),Y=s(76),ee=s.n(Y),te=s(77),se=s.n(te),ce=Object(_.b)({name:"mail",initialState:{selectedMail:null,sendMessageIsOpen:!1},reducers:{selectMail:function(e,t){e.selectedMail=t.payload},openSendMessage:function(e){e.sendMessageIsOpen=!0},closeSendMessage:function(e){e.sendMessageIsOpen=!1}}}),ie=ce.actions,ae=ie.selectMail,ne=ie.openSendMessage,je=ie.closeSendMessage,le=function(e){return e.mail.selectedMail},re=function(e){return e.mail.sendMessageIsOpen},oe=ce.reducer;var de=function(){var e=Object(v.b)();return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)(P.a,{startIcon:Object(c.jsx)(k.a,{fontSize:"large"}),className:"sidebar__compose",onClick:function(){return e(ne())},children:"Compose"}),Object(c.jsx)(U,{Icon:L.a,title:"Inbox",number:54,selected:!0}),Object(c.jsx)(U,{Icon:z.a,title:"Starred",number:54}),Object(c.jsx)(U,{Icon:B.a,title:"Snoozed",number:54}),Object(c.jsx)(U,{Icon:W.a,title:"Important",number:54}),Object(c.jsx)(U,{Icon:Q.a,title:"Sent",number:54}),Object(c.jsx)(U,{Icon:K.a,title:"Drafts",number:54}),Object(c.jsx)(U,{Icon:Z.a,title:"More",number:54}),Object(c.jsx)("div",{className:"sidebar__footer",children:Object(c.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(X.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(ee.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(se.a,{})})]})})]})},be=(s(122),s(78)),me=s.n(be),Oe=s(79),he=s.n(Oe),xe=s(80),ue=s.n(xe),pe=s(81),fe=s.n(pe),ve=s(82),_e=s.n(ve),we=s(83),ge=s.n(we),Ne=s(84),Te=s.n(Ne),ye=s(55),Ie=s.n(ye),Me=s(14),Se=s(85),He=s.n(Se),De=s(86),Ee=s.n(De),Pe=s(87),Re=s.n(Pe);var ke=function(){var e=Object(Me.f)(),t=Object(v.c)(le);return Object(c.jsxs)("div",{className:"mail",children:[Object(c.jsxs)("div",{className:"mail__tools",children:[Object(c.jsxs)("div",{className:"mail__toolsLeft",children:[Object(c.jsx)(o.a,{onClick:function(){return e.push("/")},children:Object(c.jsx)(me.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(he.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(ue.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(fe.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(_e.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(ge.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Te.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(W.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Ie.a,{})})]}),Object(c.jsxs)("div",{className:"mail__toolsRight",children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(He.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Ee.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Re.a,{})})]})]}),Object(c.jsxs)("div",{className:"mail__body",children:[Object(c.jsxs)("div",{className:"mail__bodyHeader",children:[Object(c.jsx)("h2",{children:null===t||void 0===t?void 0:t.subject}),Object(c.jsx)(W.a,{className:"mail__important"}),Object(c.jsx)("p",{children:null===t||void 0===t?void 0:t.title}),Object(c.jsx)("p",{className:"mail__time",children:null===t||void 0===t?void 0:t.time})]}),Object(c.jsx)("div",{className:"mail__message",children:Object(c.jsx)("p",{children:null===t||void 0===t?void 0:t.description})})]})]})},Ce=s(51),Le=s(33),Ue=s(150),qe=s(90),ze=s.n(qe),Ae=s(94),Be=s.n(Ae),Je=s(91),We=s.n(Je),Ge=s(92),Qe=s.n(Ge),Fe=s(93),Ke=s.n(Fe),Ve=s(95),Ze=s.n(Ve),$e=s(96),Xe=s.n($e);s(126),s(127);var Ye=function(e){var t=e.Icon,s=e.title,i=e.color,a=e.selected;return Object(c.jsxs)("div",{className:"section ".concat(a&&"section--selected"),style:{borderBottom:"3px solid ".concat(i),color:"".concat(a&&i)},children:[Object(c.jsx)(t,{}),Object(c.jsx)("h4",{children:s})]})},et=s(88),tt=s.n(et),st=s(89),ct=s.n(st);s(128);var it=function(e){var t=e.id,s=e.title,i=e.subject,a=e.description,n=e.time,j=Object(Me.f)(),l=Object(v.b)();return Object(c.jsxs)("div",{onClick:function(){l(ae({id:t,title:s,subject:i,description:a,time:n})),j.push("/mail")},className:"emailRow",children:[Object(c.jsxs)("div",{className:"emailRow__options",children:[Object(c.jsx)(Ue.a,{}),Object(c.jsx)(o.a,{children:Object(c.jsx)(tt.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(ct.a,{})})]}),Object(c.jsx)("h3",{className:"emailRow__title",children:s}),Object(c.jsx)("div",{className:"emailRow__message",children:Object(c.jsxs)("h4",{children:[i," ",Object(c.jsxs)("span",{className:"emailRow__description",children:["- ",a]})]})}),Object(c.jsx)("p",{className:"emailRow__time",children:n})]})};var at=function(){var e=Object(i.useState)([]),t=Object(Le.a)(e,2),s=t[0],a=t[1];return Object(i.useEffect)((function(){S.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(c.jsxs)("div",{className:"emailList",children:[Object(c.jsxs)("div",{className:"emailList__settings",children:[Object(c.jsxs)("div",{className:"emailList__settingsLeft",children:[Object(c.jsx)(Ue.a,{}),Object(c.jsx)(o.a,{children:Object(c.jsx)(h.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(ze.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Ie.a,{})})]}),Object(c.jsxs)("div",{className:"emailList__settingsRight",children:[Object(c.jsx)(o.a,{children:Object(c.jsx)(We.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Qe.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Ke.a,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(Be.a,{})})]})]}),Object(c.jsxs)("div",{className:"emailList__sections",children:[Object(c.jsx)(Ye,{Icon:L.a,title:"Primary",color:"red",selected:!0}),Object(c.jsx)(Ye,{Icon:Ze.a,title:"Social",color:"#1A73E8"}),Object(c.jsx)(Ye,{Icon:Xe.a,title:"Promotions",color:"green"})]}),Object(c.jsxs)("div",{className:"emailList__list",children:[s.map((function(e){var t=e.id,s=e.data,i=s.to,a=s.subject,n=s.message,j=s.timestamp;return Object(c.jsx)(it,{id:t,title:i,subject:a,description:n,time:new Date(1e3*(null===j||void 0===j?void 0:j.seconds)).toUTCString()},t)})),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})," ",Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is a test",time:"10pm"}),Object(c.jsx)(it,{title:"Twitch",subject:"Hey fellow streamer!!!",description:"This is DOPE",time:"10pm"})]})]})},nt=(s(129),s(97)),jt=s.n(nt),lt=s(98);var rt=function(){var e=Object(lt.a)(),t=e.register,s=e.handleSubmit,i=(e.watch,e.errors),a=Object(v.b)();return Object(c.jsxs)("div",{className:"sendMail",children:[Object(c.jsxs)("div",{className:"sendMail__header",children:[Object(c.jsx)("h3",{children:"New Message"}),Object(c.jsx)(jt.a,{onClick:function(){return a(je())},className:"sendMail__close"})]}),Object(c.jsxs)("form",{onSubmit:s((function(e){console.log(e),S.collection("emails").add({to:e.to,subject:e.subject,message:e.message,timestamp:M.a.firestore.FieldValue.serverTimestamp()}),a(je())})),children:[Object(c.jsx)("input",{name:"to",placeholder:"To",type:"email",ref:t({required:!0})}),i.to&&Object(c.jsx)("p",{className:"sendMail__error",children:"To is Required!"}),Object(c.jsx)("input",{name:"subject",placeholder:"Subject",type:"text",ref:t({required:!0})}),i.subject&&Object(c.jsx)("p",{className:"sendMail__error",children:"Subject is Required!"}),Object(c.jsx)("input",{name:"message",placeholder:"Message...",type:"text",className:"sendMail__message",ref:t({required:!0})}),i.message&&Object(c.jsx)("p",{className:"sendMail__error",children:"Message is Required!"}),Object(c.jsx)("div",{className:"sendMail__options",children:Object(c.jsx)(P.a,{className:"sendMail__send",variant:"contained",color:"primary",type:"submit",children:"Send"})})]})]})};s(131);var ot=function(){var e=Object(v.b)();return Object(c.jsx)("div",{className:"login",children:Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("img",{src:"https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg",alt:""}),Object(c.jsx)(P.a,{variant:"contained",color:"primary",onClick:function(){H.signInWithPopup(D).then((function(t){var s=t.user;e(N({displayName:s.displayName,email:s.email,photoUrl:s.photoURL}))})).catch((function(e){return alert(e.message)}))},children:"Login"})]})})};var dt=function(){var e=Object(v.c)(re),t=Object(v.c)(y),s=Object(v.b)();return Object(i.useEffect)((function(){H.onAuthStateChanged((function(e){e&&s(N({displayName:e.displayName,email:e.email,photoUrl:e.photoURL}))}))}),[]),Object(c.jsx)(Ce.a,{children:t?Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(E,{}),Object(c.jsxs)("div",{className:"app__body",children:[Object(c.jsx)(de,{}),Object(c.jsxs)(Me.c,{children:[Object(c.jsx)(Me.a,{path:"/mail",children:Object(c.jsx)(ke,{})}),Object(c.jsx)(Me.a,{path:"/",children:Object(c.jsx)(at,{})})]})]}),e&&Object(c.jsx)(rt,{})]}):Object(c.jsx)(ot,{})})},bt=Object(_.a)({reducer:{mail:oe,user:I}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v.a,{store:bt,children:Object(c.jsx)(dt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[132,1,2]]]);
//# sourceMappingURL=main.bf77c151.chunk.js.map