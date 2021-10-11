(()=>{"use strict";var e={330:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(81),o=n.n(a),i=n(645),r=n.n(i)()(o());r.push([e.id,"*{margin:0;padding:0;box-sizing:border-box;font-size:16px;font-family:Arial, Helvetica, sans-serif;color:#393939}button{font-size:1.2rem;text-align:left;padding:0.5rem;border:none;border-radius:5px}body{width:100%;height:100vh;display:grid;grid-template-columns:15% 85%;grid-template-rows:15% 75% 10%;grid-template-areas:'header header' 'navbar main' 'footer footer'}body header,body footer{background-color:#393939}body header *,body footer *{color:#fff}body header{grid-area:header;display:flex;align-items:center;padding:2rem}body header h1{font-size:3rem}body .nav-bar{grid-area:navbar;display:flex;flex-direction:column;padding:1rem;gap:3rem;background-color:#e6e6e6}body .nav-bar div{display:inherit;flex-direction:inherit;gap:0.5rem}body .nav-bar div button{background-color:rgba(255,255,255,0)}body .nav-bar div button:hover{background-color:#d5d5d5}body .nav-bar div button.selected{background-color:#d5d5d5;font-weight:bold}body .nav-bar div h3{font-size:1.7rem}body .main-content{grid-area:main;padding-top:3rem;display:flex;justify-content:center}body .main-content .project-container{width:80%;display:flex;flex-direction:column;gap:1rem}body .main-content .project-container h2{font-size:2rem;font-weight:normal}body .main-content .project-container .tasks-container{display:flex;flex-direction:column;gap:0.5rem}body .main-content .project-container .tasks-container .single-task-container{width:100%;background-color:#f9f9f9;display:flex;flex-direction:column}body .main-content .project-container .tasks-container .single-task-container:hover{background-color:#eee}body .main-content .project-container .tasks-container .single-task-container .task-header{display:flex;flex-direction:row;justify-content:space-between;border:none;border-radius:5px;padding:0.5rem}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-left-side{display:flex;align-items:center;gap:0.5rem}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-left-side .task-checkbox{font-size:1.2rem;width:1rem;height:1rem}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-left-side .task-label{font-size:1.2rem}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-left-side .project-reminder{font-size:0.75rem;text-align:center}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-center .description-btn{font-size:0.85rem;padding:0.2rem;background-color:rgba(255,255,255,0)}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-center .description-btn:hover{text-decoration:underline}body .main-content .project-container .tasks-container .single-task-container .task-header .task-header-right-side .task-due-date{font-size:1.2rem}body .main-content .project-container .tasks-container .single-task-container .description-container{padding:1rem;display:flex;align-items:center;justify-content:center}body .main-content .project-container .tasks-container .single-task-container .description-container .task-description{font-size:1rem}body .main-content .project-container .tasks-container .single-task-container .description-container.hidden{display:none}body .main-content .project-container .tasks-container .single-task-container .check-label-container{display:flex;gap:1rem;align-items:center}body .main-content .project-container .tasks-container .single-task-container .due-date-container{display:flex;align-items:center;gap:1rem}body .main-content .project-container .add-task-btn{background-color:rgba(255,255,255,0)}body .main-content .project-container .add-task-btn:hover{background-color:#eee}body footer{grid-area:footer;padding:2rem;display:flex;justify-content:center}body .overlay{width:100vw;height:100vh;background-color:rgba(0,0,0,0.776);z-index:1;position:absolute;display:flex;align-items:center;justify-content:center}body .overlay.hidden{display:none}body .overlay .form-container{border-radius:10px;background-color:white;display:flex;flex-direction:column;align-items:center}body .overlay .form-container .form-close-btn{align-self:flex-end;text-align:end;margin:1rem;padding:0.25rem;border-radius:50%;aspect-ratio:1 / 1;display:flex;justify-content:center;align-items:center}body .overlay .form-container .form-close-btn:hover{background-color:#d5d5d5}body .overlay .form-container h2{font-size:2rem;font-weight:normal}body .overlay .form-container form{padding:3rem;padding-top:1rem;border:none;display:flex;flex-direction:column;gap:1rem;align-items:stretch}body .overlay .form-container form label{font-size:1.2rem}body .overlay .form-container form input{font-size:1.2rem;padding:0.5rem}body .overlay .form-container form input[type=\"submit\"]{align-self:center;font-size:1rem;padding:0.5rem 1rem;border:none}",""]);const d=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},r=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var d=n(i[r]);t[d].references--}for(var c=a(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t=(e={},{on:function(t,n){e[t]=e[t]||[],e[t].push(n)},off:function(t,n){if(e[t])for(var a=0;a<e[t].length;a++)if(e[t][a]===n){e[t].splice(a,1);break}},emit:function(t,n){e[t]&&e[t].forEach((function(e){e(n)}))},printEvents:function(){console.log(e)}});class a{constructor(e){this.title=e,this.tasks={}}addTask(e){this.tasks[e.title]=e}}class o{constructor(e,t,n){this.title=e,this.description=t,this.dueDate=n}}(function(){const e=document.querySelector(".overlay");function n(){e.textContent="",e.classList.add("hidden")}function i(t){const a=document.createElement("div");a.classList.add("form-container");const o=document.createElement("p");o.classList.add("form-close-btn");const i=document.createElement("i");i.classList.add("fa"),i.classList.add("fa-remove"),o.appendChild(i),o.addEventListener("click",n),o.appendChild(i),a.appendChild(o);const d=document.createElement("h2");a.appendChild(d);const c=document.createElement("form"),s=document.createElement("input");s.setAttribute("type","text"),s.required=!0,c.appendChild(s),a.appendChild(c);const l=document.createElement("input");l.setAttribute("type","submit");const p=[...t.classList];if(p.includes("add-project-btn")&&(a.classList.add("new-project-form-container"),d.textContent="Add New Project",c.classList.add("new-project-form"),s.placeholder="Project Name",l.value="Add Project"),p.includes("add-task-btn")){a.classList.add("new-task-form-container"),d.textContent="Add New Task",c.classList.add("new-task-form"),s.placeholder="Title";const e=document.createElement("input");e.setAttribute("type","text"),e.placeholder="Description",c.appendChild(e);const t=document.createElement("div");t.classList.add("due-date-container");const n=document.createElement("label");n.setAttribute("for","due-date"),n.textContent="Due Date: ";const o=document.createElement("input");o.setAttribute("type","date"),o.id="due-date",o.placeholder="Due Date",t.appendChild(n),t.appendChild(o),c.appendChild(t),l.value="Add Task"}c.addEventListener("submit",r),c.appendChild(l),e.appendChild(a),e.classList.toggle("hidden")}function r(e){e.preventDefault();const i=e.target,r=[...i.classList],d=[...i.querySelectorAll("input")];d.pop();const c=d.map((e=>e.value));if(r.includes("new-project-form")){const e=new a(...c);t.emit("newUserProjectCreated",e)}if(r.includes("new-task-form")){const e=new o(...c),n=e.dueDate.split("-").map((e=>+e));n[1]--,e.dueDate=new Date(...n),t.emit("newTaskCreated",e)}n()}t.on("addProjectBtnClicked",i),t.on("addTaskBtnClicked",i)})(),function(){const e={},n={};let a=null;function o(e){a=e}t.on("staticProjectCreated",(function(n){e[n.title]=n,t.emit("staticProjectListUpdated",e)})),t.on("newUserProjectCreated",(function(e){n[e.title]=e,t.emit("userProjectListUpdated",n)})),t.on("projectBtnClicked",o),t.on("newTaskCreated",(function(e){e.originalProject=a,a.addTask(e)})),t.on("documentLoaded",o)}(),function(){const e={};t.on("newTaskCreated",(function(n){e[n.title]=n,t.emit("taskListUpdated",e)})),t.on("taskListUpdated",(function(){const n=new Date,a=Object.values(e);!function(e,n){const a=e.toDateString(),o=n.filter((e=>a===e.dueDate.toDateString()));t.emit("todaysTasksAssembled",o)}(n,a),function(e,n){const a=new Date(e.getFullYear(),e.getMonth(),e.getDate()),o=new Date,i=a.getDate()+6;o.setDate(i);const r=n.filter((e=>e.dueDate.getTime()<o.getTime()&&e.dueDate.getTime()>=a.getTime()));t.emit("thisWeeksTasksAssembled",r)}(n,a)}))}();const i=document.querySelector("main");let r;const d=function(e){r=e},c=function(e){const n=e.target;t.emit("addTaskBtnClicked",n)},s=function(e){const t=e.target,n=t.parentElement.parentElement.parentElement.querySelector(".description-container");n.classList.toggle("hidden"),t.textContent=n.classList.contains("hidden")?"Show Description":"Hide Description"},l=function(){i.textContent="";const e=document.createElement("div"),t=r.title.replace(/\s/g,"-");e.classList.add(`${t}-container`),e.classList.add("project-container");const n=document.createElement("h2");n.textContent=r.title,e.appendChild(n);const a=document.createElement("div");a.classList.add("tasks-container"),e.appendChild(a);for(const e in r.tasks){const t=r.tasks[e],n=t.title.replace(/\s/g,"-"),o=document.createElement("div");o.classList.add("single-task-container");const i=document.createElement("div");i.classList.add("task-header"),o.appendChild(i);const d=document.createElement("div");d.classList.add("task-header-left-side"),i.appendChild(d);const c=document.createElement("div");c.classList.add("task-header-center"),i.appendChild(c);const l=document.createElement("div");l.classList.add("task-header-right-side"),i.appendChild(l);const p=document.createElement("div");p.classList.add("description-container"),p.classList.add("hidden"),o.appendChild(p);const u=document.createElement("input");u.setAttribute("type","checkbox"),u.classList.add("task-checkbox"),u.id=`${n}-checkbox`,d.appendChild(u);const m=document.createElement("label");if(m.classList.add("task-label"),m.setAttribute("for",`${n}-checkbox`),m.textContent=t.title,d.appendChild(m),"Today"===r.title||"This week"===r.title){const e=document.createElement("p");e.classList.add("project-reminder"),e.textContent=`(${t.originalProject.title})`,d.appendChild(e)}if(t.description){const e=document.createElement("button");e.classList.add("description-btn"),e.textContent="Show Description",e.addEventListener("click",s),c.appendChild(e);const n=document.createElement("p");n.classList.add("task-description"),n.classList.add("hidden"),n.textContent=t.description,p.appendChild(n)}const f=document.createElement("p");f.classList.add("task-due-date"),f.textContent=t.dueDate.toDateString(),l.appendChild(f),a.appendChild(o)}if("Today"!==r.title&&"This week"!==r.title){const t=document.createElement("i");t.classList.add("fa"),t.classList.add("fa-plus");const n=document.createElement("button");n.classList.add("add-task-btn"),n.appendChild(t);const a=document.createTextNode(" Add Task");n.appendChild(a),n.addEventListener("click",c),e.appendChild(n)}i.appendChild(e)};t.on("documentLoaded",d),t.on("documentLoaded",l),t.on("projectBtnClicked",d),t.on("projectBtnClicked",l),t.on("newTaskCreated",l),function(){const e=document.querySelector("nav"),n=function(){const e=document.createElement("div");e.classList.add("static-nav");const n=function(e){const n=document.createElement("button"),o=document.createElement("i");let i;if(o.classList.add("fa"),"inbox"===e){n.classList.add("inbox"),o.classList.add("fa-inbox"),i=document.createTextNode(" Inbox");const e=new a("Inbox");t.emit("staticProjectCreated",e),t.emit("documentLoaded",e),n.project=e}if("today"===e){n.classList.add("today"),o.classList.add("fa-calendar-o"),i=document.createTextNode(" Today");const e=new a("Today");t.emit("staticProjectCreated",e),t.on("todaysTasksAssembled",(t=>{e.tasks=t})),n.project=e}if("this week"===e){n.classList.add("this-week"),o.classList.add("fa-calendar"),i=document.createTextNode(" This week");const e=new a("This week");t.emit("staticProjectCreated",e),t.on("thisWeeksTasksAssembled",(t=>{e.tasks=t})),n.project=e}return n.appendChild(o),n.appendChild(i),n.addEventListener("click",d),n},o=n("inbox"),i=n("today"),r=n("this week");return e.appendChild(o),e.appendChild(i),e.appendChild(r),e}();e.appendChild(n);const[o,i]=function(){const e=document.createElement("div");e.classList.add("projects-nav");const t=document.createElement("h3");t.textContent="Projects";const n=document.createElement("div");n.classList.add("user-projects");const a=document.createElement("button");a.classList.add("add-project-btn");const o=document.createElement("i");o.classList.add("fa"),o.classList.add("fa-plus");const i=document.createTextNode(" Add Project");return a.appendChild(o),a.appendChild(i),a.addEventListener("click",r),e.appendChild(t),e.appendChild(n),e.appendChild(a),[e,n]}();function r(e){const n=e.target;t.emit("addProjectBtnClicked",n)}function d(n){const a=n.target;e.querySelectorAll("button").forEach((e=>{e.classList.contains("selected")&&e.classList.remove("selected")})),a.classList.add("selected");const o=a.project;t.emit("projectBtnClicked",o)}function c(e){const t=document.createElement("button");return t.project=e,t.textContent=e.title,t.addEventListener("click",d),t}e.appendChild(o),t.on("userProjectListUpdated",(function(e){i.textContent="";for(const t in e){const n=c(e[t]);i.appendChild(n)}}))}();var p=n(379),u=n.n(p),m=n(795),f=n.n(m),h=n(569),b=n.n(h),k=n(565),g=n.n(k),y=n(216),v=n.n(y),x=n(589),C=n.n(x),L=n(330),j={};j.styleTagTransform=C(),j.setAttributes=g(),j.insert=b().bind(null,"head"),j.domAPI=f(),j.insertStyleElement=v(),u()(L.Z,j),L.Z&&L.Z.locals&&L.Z.locals,t.printEvents()})()})();