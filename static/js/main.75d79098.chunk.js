(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var a=i(7),c=i(1),s=i(0);const n=Object(c.createContext)(),l=e=>{let{children:t}=e;const[i,a]=Object(c.useState)("light");Object(c.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");a(e.matches?"dark":"light"),e.addEventListener("change",(e=>{a(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(n.Provider,{value:[{themeName:i,toggleTheme:()=>{const e="dark"===i?"light":"dark";localStorage.setItem("themeName",e),a(e)}}],children:t})},r={homepage:".",title:"GS."},o={name:"Gayatri Shivani",role:"FullStack Developer",description:"thrive on solving complex problems and building high-performance applications. With expertise in React, Java, Spring Boot, and microservices, I create scalable, efficient solutions while ensuring seamless communication with Kafka. From robust backends to intuitive frontends, I build applications that perform well and scale effortlessly.",resume:"https://drive.google.com/file/d/1bLbEv26LGj9JtvBQs2x2-NAYR50G0409/view?usp=sharing",social:{linkedin:"https://linkedin.com/in/gayatrishivani",github:"https://github.com/gayatrishivani"}},j=[{name:"Tata Consultancy Services (TCS)",title:"System Engineer",timeStart:"May,2022",timeEnd:"Present",description_title:"Working as a seinor fullStack developer in SBI kiosk a payment applicaton playing as a key task performer.",description:["Responsible for making the transactions work in the production environment.","Devloping modules which the client requires.","Leading a small team size of 3."],techStack:["java","SpringBoot","java microservices","kafka MQ","Apache Ignite","PSQL","ReactJS"],image:"/img/tcs.png"},{name:"CodersArts",title:"Python Intern",timeStart:"Dec,2021",timeEnd:"May,2022",description_title:"Worked as python developer intern. excelling in machince learning and Deep learning.",description:["Created employment management systems using Django framework and reactJS using PSQL database.","Deployed the application in amazon web service (AWS) with elasticBeanstack.","Applied machine learning/artifitial intelligance in analysis dataset of the company.","In addition used d3js in displaying the dataset analysis."],techStack:["python","Machine Learning","Deep Learning","Django"],image:"/img/codersArts.png"}],h=[{name:"Ichoose",description:"An ecommerce web application, using django framework and react-native framework. The application is build in mind for small scale startup-bussiness, where the retail owner gets loan using pooling techique of customer. while customer get benifit of loan intrest and stocks raising. Customer can directly ask the user for a product customisation.",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com/gayatrishivani/ichoose-ead-project-sem6",livePreview:"https://github.com/gayatrishivani/ichoose-ead-project-sem6"},{name:"Storify",description:"A wattpad/magazine web application web application where the author when on mindblock can use our new feature of generating new mutiple scenarios to continue a story. Used Django framework to develop the website",stack:["Django","Html/css/JS","MongoDB"],sourceCode:"https://github.com/gayatrishivani/Storify-project-sem5",livePreview:"https://github.com/gayatrishivani/Storify-project-sem5"},{name:"Sudoku",description:"A small sudoku game developed using python",stack:["Python"],sourceCode:"https://github.com/gayatrishivani/Sudoku-python-project-sem2",livePreview:"https://github.com/gayatrishivani/Sudoku-python-project-sem2"}],d=["Java","Java Microservices","Kafka MQ","SpringBoot","Apache Ignite","HTML","CSS","JavaScript","React","MongoDB","PSQL","Oracle","Git","Junit"],m="gayatrishivani123@gmail.com";var b=i(13),p=i.n(b),u=i(11),g=i.n(u),x=i(15),O=i.n(x),v=i(14),k=i.n(v);i(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(c.useContext)(n),[i,a]=Object(c.useState)(!1),l=()=>a(!i);return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:i?"flex":null},className:"nav__list",children:[j.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#experience",onClick:l,className:"link link--nav",children:"Experience"})}):null,h.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,d.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,m?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(s.jsx)(g.a,{}):Object(s.jsx)(p.a,{})}),Object(s.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:i?Object(s.jsx)(k.a,{}):Object(s.jsx)(O.a,{})})]})};i(29);var N=()=>{const{homepage:e,title:t}=r;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(f,{})]})},_=i(8),y=i.n(_),S=i(16),w=i.n(S);i(30);var C=()=>{const{name:e,role:t,description:i,resume:a,social:c}=o;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:i&&i}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(y.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(w.a,{})})]})]})]})},P=i(3),E=i.n(P);i(32);var A=e=>{let{project:t}=e;return Object(s.jsxs)("div",{className:"experience_container",children:[Object(s.jsxs)("div",{className:"media",children:[Object(s.jsx)("div",{className:"media-left",children:Object(s.jsx)("figure",{className:"image image-48",children:Object(s.jsx)("img",{src:"/cleanfolio"+t.image,alt:"Placeholder"})})}),Object(s.jsxs)("div",{className:"media-content",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsxs)("h5",{children:[t.title," \u2003 ",t.timeStart,"-",t.timeEnd]})]})]}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("p",{children:t.description_title}),t.description&&Object(s.jsx)("ul",{className:"exp__description",children:t.description.map((e=>Object(s.jsx)("li",{className:"exp__desc-item",children:e},E()())))}),t.techStack&&Object(s.jsx)("ul",{className:"exp__stack",children:t.techStack.map((e=>Object(s.jsx)("li",{className:"exp__stack-item",children:e},E()())))})]})]})};i(33);var D=()=>j.length?Object(s.jsxs)("section",{id:"experience",className:"section experience",children:[Object(s.jsx)("h2",{className:"section__title",children:"Experience"}),Object(s.jsx)("div",{className:"experience__grid",children:j.map((e=>Object(s.jsx)(A,{project:e},E()())))})]}):null,L=i(17),I=i.n(L);i(34);var J=e=>{let{project:t}=e;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(s.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(y.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(I.a,{})})]})};i(35);var M=()=>h.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:h.map((e=>Object(s.jsx)(J,{project:e},E()())))})]}):null;i(36);var B=()=>d.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())))})]}):null,R=i(18),T=i.n(R);i(37);var Q=()=>{const[e,t]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top","aria-label":"top",children:Object(s.jsx)(T.a,{fontSize:"large"})})}):null};i(38);var G=()=>m?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(m),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;i(39);var z=()=>Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:".",className:"link footer__link",children:"updated@2025"})});i(40);var W=()=>{const[{themeName:e}]=Object(c.useContext)(n);return Object(s.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(s.jsx)(N,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(C,{}),Object(s.jsx)(D,{}),Object(s.jsx)(M,{}),Object(s.jsx)(B,{}),Object(s.jsx)(G,{})]}),Object(s.jsx)(Q,{}),Object(s.jsx)(z,{})]})};i(41);Object(a.render)(Object(s.jsx)(l,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.75d79098.chunk.js.map