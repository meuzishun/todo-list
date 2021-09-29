import { events } from "./events.js";
import { Project } from "./project.js";
// import { projects } from "./projects.js";

const navbar = (function() {
    const navbar = document.querySelector('nav');
    const staticNav = navbar.querySelector('.static-nav');
    const staticBtns = staticNav.querySelectorAll('button');
    const inboxBtn = staticBtns[0];
    const todayBtn = staticBtns[1];
    const thisWeekBtn = staticBtns[2];
    const projectsNav = navbar.querySelector('.projects-nav');
    const userProjects = projectsNav.querySelector('.user-projects');
    const addProjectBtn = projectsNav.querySelector('.add-project-btn');

    // TODO: store these in staticProjects
    const inbox = new Project('Inbox');
    events.emit('staticProjectCreated', inbox);
    
    // const inboxBtn = createProjectBtn(inbox);
    // const inboxIcon = document.createElement('i');
    // inboxIcon.classList.add('fa');
    // inboxIcon.classList.add('fa-inbox');
    // inboxBtn.appendChild(inboxIcon);
    // staticNav.appendChild(inboxBtn);
    // TODO: ok, this really doesn't feel right...
    //? Should we be attaching the project to the btn like this?
    inboxBtn.project = inbox;

    const today = new Project('Today');
    events.emit('staticProjectCreated', today);
    //? Should we be attaching the project to the btn like this?
    todayBtn.project = today;

    const thisWeek = new Project('This week');
    events.emit('staticProjectCreated', thisWeek);
    //? Should we be attaching the project to the btn like this?
    thisWeekBtn.project = thisWeek;


    staticBtns.forEach(btn => {
        btn.addEventListener('click', handleProjectBtnClick);
    });

    function handleAddProjectBtnClick(e) {
        const btn = e.target;
        console.log(btn);
        events.emit('addProjectBtnClicked', btn);
    }
    
    addProjectBtn.addEventListener('click', handleAddProjectBtnClick);

    function clearSelectedBtns() {
        const navBtns = navbar.querySelectorAll('button');
        navBtns.forEach(btn => {
            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
            }
        });
    }

    function handleProjectBtnClick(e) {
        const projectBtn = e.target;
        clearSelectedBtns();
        projectBtn.classList.add('selected');
        
        //? Should we be attaching the project to the btn like this?
        const project = projectBtn.project;
        events.emit('projectBtnClicked', project);
    }


    function createProjectBtn(project) {
        const btn = document.createElement('button');
        //? Should we be attaching the project to the btn like this?
        btn.project = project;
        btn.textContent = project.title;
        btn.addEventListener('click', handleProjectBtnClick);
        return btn;
    }
    
    function updateUserProjectBtnList(projects) {
        userProjects.textContent = '';
        for (const key in projects) {
            const btn = createProjectBtn(projects[key]);
            userProjects.appendChild(btn);
        }
    }

    events.on('userProjectListUpdated', updateUserProjectBtnList);
    events.emit('documentLoaded', inbox);

})();

export { navbar };