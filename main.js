(()=>{"use strict";var e={330:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,"*{margin:0;padding:0;box-sizing:border-box;font-size:16px;font-family:Arial, Helvetica, sans-serif;color:#393939}button{font-size:1.2rem;text-align:left;padding:0.5rem;border:none;border-radius:5px}body{width:100%;height:100vh;display:grid;grid-template-columns:15% 85%;grid-template-rows:15% 75% 10%;grid-template-areas:'header header' 'navbar main' 'footer footer'}body header,body footer{background-color:#393939}body header *,body footer *{color:#fff}body header{grid-area:header;display:flex;align-items:center;padding:2rem}body header h1{font-size:3rem}body .nav-bar{grid-area:navbar;display:flex;flex-direction:column;padding:1rem;gap:3rem;background-color:#e6e6e6}body .nav-bar div{display:inherit;flex-direction:inherit;gap:0.5rem}body .nav-bar div button{background-color:rgba(255,255,255,0)}body .nav-bar div button:hover{background-color:#d5d5d5}body .nav-bar div button.selected{background-color:#d5d5d5;font-weight:bold}body .nav-bar div h3{font-size:1.7rem}body .main-content{grid-area:main;padding-top:3rem;display:flex;justify-content:center}body .main-content .project-container{width:80%;display:flex;flex-direction:column;gap:1rem}body .main-content .project-container h2{font-size:2rem;font-weight:normal}body .main-content .project-container .tasks-container{display:flex;flex-direction:column;gap:0.5rem}body .main-content .project-container .tasks-container .single-task-container{width:100%;background-color:#f9f9f9;display:flex;align-items:center;gap:0.5rem;justify-content:space-between;border:none;border-radius:5px;padding:0.5rem}body .main-content .project-container .tasks-container .single-task-container:hover{background-color:#eee}body .main-content .project-container .tasks-container .single-task-container .check-label-container{display:flex;gap:1rem;align-items:center}body .main-content .project-container .tasks-container .single-task-container .check-label-container .task-checkbox{font-size:1.2rem;width:1rem;height:1rem}body .main-content .project-container .tasks-container .single-task-container .check-label-container .task-label{font-size:1.2rem}body .main-content .project-container .tasks-container .single-task-container .description-container .description-btn{font-size:0.85rem;padding:0.2rem;background-color:rgba(255,255,255,0)}body .main-content .project-container .tasks-container .single-task-container .description-container .description-btn:hover{text-decoration:underline}body .main-content .project-container .tasks-container .single-task-container .description-container .task-description{font-size:0.85rem}body .main-content .project-container .tasks-container .single-task-container .due-date-container{display:flex;align-items:center;gap:1rem}body .main-content .project-container .tasks-container .single-task-container .due-date-container .task-due-date{font-size:1.2rem}body .main-content .project-container .tasks-container .single-task-container .due-date-container .project-reminder{font-size:0.75rem;text-align:center}body .main-content .project-container .add-task-btn{background-color:rgba(255,255,255,0)}body .main-content .project-container .add-task-btn:hover{background-color:#eee}body footer{grid-area:footer;padding:2rem;display:flex;justify-content:center}body .overlay{width:100vw;height:100vh;background-color:rgba(0,0,0,0.776);z-index:1;position:absolute;display:flex;align-items:center;justify-content:center}body .overlay.hidden{display:none}body .overlay .form-container{border-radius:10px;background-color:white;display:flex;flex-direction:column;align-items:center}body .overlay .form-container .form-close-btn{align-self:flex-end;text-align:end;margin:1rem;padding:0.25rem;border-radius:50%;aspect-ratio:1 / 1;display:flex;justify-content:center;align-items:center}body .overlay .form-container .form-close-btn:hover{background-color:#d5d5d5}body .overlay .form-container h2{font-size:2rem;font-weight:normal}body .overlay .form-container form{padding:3rem;padding-top:1rem;border:none;display:flex;flex-direction:column;gap:1rem;align-items:stretch}body .overlay .form-container form label{font-size:1.2rem}body .overlay .form-container form input{font-size:1.2rem;padding:0.5rem}body .overlay .form-container form input[type=\"submit\"]{align-self:center;font-size:1rem;padding:0.5rem 1rem;border:none}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var d=o(e,a),s=0;s<r.length;s++){var l=n(r[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t=(e={},{on:function(t,n){e[t]=e[t]||[],e[t].push(n)},off:function(t,n){if(e[t])for(var o=0;o<e[t].length;o++)if(e[t][o]===n){e[t].splice(o,1);break}},emit:function(t,n){e[t]&&e[t].forEach((function(e){e(n)}))},printEvents:function(){console.log(e)}});class o{constructor(e){this.title=e,this.tasks={}}addTask(e){this.tasks[e.title]=e}}class a{constructor(e,t,n){this.title=e,this.description=t,this.dueDate=n}}(function(){const e=document.querySelector(".overlay");function n(){e.textContent="",e.classList.add("hidden")}function r(t){const o=document.createElement("div");o.classList.add("form-container");const a=document.createElement("p");a.classList.add("form-close-btn");const r=document.createElement("i");r.classList.add("fa"),r.classList.add("fa-remove"),a.appendChild(r),a.addEventListener("click",n),a.appendChild(r),o.appendChild(a);const c=document.createElement("h2");o.appendChild(c);const d=document.createElement("form"),s=document.createElement("input");s.setAttribute("type","text"),s.required=!0,d.appendChild(s),o.appendChild(d);const l=document.createElement("input");l.setAttribute("type","submit");const p=[...t.classList];if(p.includes("add-project-btn")&&(o.classList.add("new-project-form-container"),c.textContent="Add New Project",d.classList.add("new-project-form"),s.placeholder="Project Name",l.value="Add Project"),p.includes("add-task-btn")){o.classList.add("new-task-form-container"),c.textContent="Add New Task",d.classList.add("new-task-form"),s.placeholder="Title";const e=document.createElement("input");e.setAttribute("type","text"),e.placeholder="Description",d.appendChild(e);const t=document.createElement("div");t.classList.add("due-date-container");const n=document.createElement("label");n.setAttribute("for","due-date"),n.textContent="Due Date: ";const a=document.createElement("input");a.setAttribute("type","date"),a.id="due-date",a.placeholder="Due Date",t.appendChild(n),t.appendChild(a),d.appendChild(t),l.value="Add Task"}d.addEventListener("submit",i),d.appendChild(l),e.appendChild(o),e.classList.toggle("hidden")}function i(e){e.preventDefault();const r=e.target,i=[...r.classList],c=[...r.querySelectorAll("input")];c.pop();const d=c.map((e=>e.value));if(i.includes("new-project-form")){const e=new o(...d);t.emit("newUserProjectCreated",e)}if(i.includes("new-task-form")){const e=new a(...d),n=e.dueDate.split("-").map((e=>+e));n[1]--,e.dueDate=new Date(...n),t.emit("newTaskCreated",e)}n()}t.on("addProjectBtnClicked",r),t.on("addTaskBtnClicked",r)})(),function(){const e={},n={};let o=null;function a(e){o=e}t.on("staticProjectCreated",(function(n){e[n.title]=n,t.emit("staticProjectListUpdated",e)})),t.on("newUserProjectCreated",(function(e){n[e.title]=e,t.emit("userProjectListUpdated",n)})),t.on("projectBtnClicked",a),t.on("newTaskCreated",(function(e){e.originalProject=o,o.addTask(e)})),t.on("documentLoaded",a)}(),function(){const e={};t.on("newTaskCreated",(function(n){e[n.title]=n,t.emit("taskListUpdated",e)})),t.on("taskListUpdated",(function(){const n=new Date,o=Object.values(e);!function(e,n){const o=e.toDateString(),a=n.filter((e=>o===e.dueDate.toDateString()));t.emit("todaysTasksAssembled",a)}(n,o),function(e,n){const o=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=new Date,r=o.getDate()+6;a.setDate(r);const i=n.filter((e=>e.dueDate.getTime()<a.getTime()&&e.dueDate.getTime()>=o.getTime()));t.emit("thisWeeksTasksAssembled",i)}(n,o)}))}();const r=document.querySelector("main");let i;const c=function(e){i=e},d=function(e){const n=e.target;t.emit("addTaskBtnClicked",n)},s=function(){r.textContent="";const e=document.createElement("div"),t=i.title.replace(/\s/g,"-");e.classList.add(`${t}-container`),e.classList.add("project-container");const n=document.createElement("h2");n.textContent=i.title,e.appendChild(n);const o=document.createElement("div");o.classList.add("tasks-container"),e.appendChild(o);for(const e in i.tasks){const t=i.tasks[e],n=t.title.replace(/\s/g,"-"),a=document.createElement("div");a.classList.add("single-task-container");const r=document.createElement("div");r.classList.add("check-label-container");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.classList.add("task-checkbox"),c.id=`${n}-checkbox`;const d=document.createElement("label");if(d.classList.add("task-label"),d.setAttribute("for",`${n}-checkbox`),d.textContent=t.title,r.appendChild(c),r.appendChild(d),a.appendChild(r),t.description){const e=document.createElement("div");e.classList.add("description-container");const n=document.createElement("button");n.classList.add("description-btn"),n.textContent="Show Description",n.addEventListener("click",(()=>{alert(o.textContent)})),e.appendChild(n);const o=document.createElement("p");o.classList.add("task-description"),o.textContent=t.description,a.appendChild(e)}const s=document.createElement("div");s.classList.add("due-date-container");const l=document.createElement("p");if(l.classList.add("task-due-date"),l.textContent=t.dueDate.toDateString(),s.appendChild(l),"Today"===i.title||"This week"===i.title){const e=document.createElement("p");e.classList.add("project-reminder"),console.log(t),e.textContent=t.originalProject.title,s.appendChild(e)}a.appendChild(s),o.appendChild(a)}if("Today"!==i.title&&"This week"!==i.title){const t=document.createElement("i");t.classList.add("fa"),t.classList.add("fa-plus");const n=document.createElement("button");n.classList.add("add-task-btn"),n.appendChild(t);const o=document.createTextNode(" Add Task");n.appendChild(o),n.addEventListener("click",d),e.appendChild(n)}r.appendChild(e)};t.on("documentLoaded",c),t.on("documentLoaded",s),t.on("projectBtnClicked",c),t.on("projectBtnClicked",s),t.on("newTaskCreated",s),function(){const e=document.querySelector("nav"),n=function(){const e=document.createElement("div");e.classList.add("static-nav");const n=function(e){const n=document.createElement("button"),a=document.createElement("i");let r;if(a.classList.add("fa"),"inbox"===e){n.classList.add("inbox"),a.classList.add("fa-inbox"),r=document.createTextNode(" Inbox");const e=new o("Inbox");t.emit("staticProjectCreated",e),t.emit("documentLoaded",e),n.project=e}if("today"===e){n.classList.add("today"),a.classList.add("fa-calendar-o"),r=document.createTextNode(" Today");const e=new o("Today");t.emit("staticProjectCreated",e),t.on("todaysTasksAssembled",(t=>{e.tasks=t})),n.project=e}if("this week"===e){n.classList.add("this-week"),a.classList.add("fa-calendar"),r=document.createTextNode(" This week");const e=new o("This week");t.emit("staticProjectCreated",e),t.on("thisWeeksTasksAssembled",(t=>{e.tasks=t})),n.project=e}return n.appendChild(a),n.appendChild(r),n.addEventListener("click",c),n},a=n("inbox"),r=n("today"),i=n("this week");return e.appendChild(a),e.appendChild(r),e.appendChild(i),e}();e.appendChild(n);const[a,r]=function(){const e=document.createElement("div");e.classList.add("projects-nav");const t=document.createElement("h3");t.textContent="Projects";const n=document.createElement("div");n.classList.add("user-projects");const o=document.createElement("button");o.classList.add("add-project-btn");const a=document.createElement("i");a.classList.add("fa"),a.classList.add("fa-plus");const r=document.createTextNode(" Add Project");return o.appendChild(a),o.appendChild(r),o.addEventListener("click",i),e.appendChild(t),e.appendChild(n),e.appendChild(o),[e,n]}();function i(e){const n=e.target;t.emit("addProjectBtnClicked",n)}function c(n){const o=n.target;e.querySelectorAll("button").forEach((e=>{e.classList.contains("selected")&&e.classList.remove("selected")})),o.classList.add("selected");const a=o.project;t.emit("projectBtnClicked",a)}function d(e){const t=document.createElement("button");return t.project=e,t.textContent=e.title,t.addEventListener("click",c),t}e.appendChild(a),t.on("userProjectListUpdated",(function(e){r.textContent="";for(const t in e){const n=d(e[t]);r.appendChild(n)}}))}();var l=n(379),p=n.n(l),u=n(795),m=n.n(u),f=n(569),b=n.n(f),h=n(565),g=n.n(h),y=n(216),v=n.n(y),k=n(589),C=n.n(k),x=n(330),L={};L.styleTagTransform=C(),L.setAttributes=g(),L.insert=b().bind(null,"head"),L.domAPI=m(),L.insertStyleElement=v(),p()(x.Z,L),x.Z&&x.Z.locals&&x.Z.locals,t.printEvents()})()})();