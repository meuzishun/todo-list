
import { events } from "./events.js";
import { markup } from "./markup.js";
import { appStorage } from './appStorage.js';


const navbar = (function() {
    const navbar = document.querySelector('nav');

    const createProjectBtn = function(project) {
        // const btnInfoLookup = {
        //     'inbox': {
        //         btnClass: 'inbox',
        //         iconClass: 'fa-inbox',
        //         text: 'Inbox',
        //     },
        //     'today': {
        //         btnClass: 'today',
        //         iconClass: 'fa-calendar-o',
        //         text: 'Today',
        //     },
        //     'this week': {
        //         btnClass: 'this-week',
        //         iconClass: 'fa-calendar',
        //         text: 'This week',
        //     }
        // }
        // console.log(project);
        const btn = markup.elementBuilder('button', `${project.title.replace(' ', '-')}`);

        // const icon = markup.elementBuilder('i', ['fa', `${btnInfoLookup[name].iconClass}`]);

        // const text = project.title;
        const textNode = document.createTextNode(project.title);

        markup.appendChildren([textNode], btn);
        btn.addEventListener('click', handleProjectBtnClick);
        // events.emit('staticProjectBtnCreated', text);

        return btn;
    }

    const renderStaticNav = function() {
        const staticNavContainer = markup.elementBuilder('div', 'static-nav');

        const staticProjects = appStorage.getStaticProjects();
        //! concerned about guaranteed order here:
        for (const project in staticProjects) {
            // console.log(staticProjects[project]);
            const button = createProjectBtn(staticProjects[project]);
            staticNavContainer.appendChild(button);
        }

        return staticNavContainer;
    }

    const createProjectsNav = function() {
        const projectsNavContainer = markup.elementBuilder('div', 'projects-nav');

        const heading = markup.elementBuilder('h3', null, 'Projects');
        const userProjects = markup.elementBuilder('div', 'user-projects');
        const addProjBtn = markup.elementBuilder('button', 'add-project-btn');
        const addIcon = markup.elementBuilder('i', ['fa', 'fa-plus']);
        const addProjectText = document.createTextNode('Add Project');

        markup.appendChildren([addIcon, addProjectText], addProjBtn);
        addProjBtn.addEventListener('click', handleAddProjectBtnClick);
        markup.appendChildren([heading, userProjects, addProjBtn], projectsNavContainer);
        
        return projectsNavContainer;
    }

    const handleAddProjectBtnClick = function(e) {
        const btn = e.target;
        events.emit('addProjectBtnClicked', btn);
    }
    
    const clearSelectedBtns = function() {
        const navBtns = navbar.querySelectorAll('button');
        navBtns.forEach(btn => {
            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
            }
        });
    }

    // const selectBtn = function(projectBtn) {
        // events.emit('projectBtnClicked', projectBtn);
    // }

    const changeSelectedProject = function(btn) {
        clearSelectedBtns();
        btn.classList.add('selected');

        const project = appStorage.findProject(btn.textContent);
        appStorage.setSelectedProject(project);
    }
    
    const handleProjectBtnClick = function(e) {
        const projectBtn = e.target;
        changeSelectedProject(projectBtn);
    }

    // const createProjectBtn = function(project) {
    //     const btn = document.createElement('button');
    //     //? Should we be attaching the project to the btn like this?
    //     btn.project = project;
    //     btn.textContent = project.title;
    //     btn.addEventListener('click', handleProjectBtnClick);
    //     return btn;
    // }
    
    const updateUserProjectBtnList = function(projects) {
        const userProjects = projectsNav.querySelector('.user-projects');
        userProjects.textContent = '';
        for (const key in projects) {
            const btn = createProjectBtn(projects[key]);
            userProjects.appendChild(btn);
        }
    }

    const init = function() {
        const inboxBtn = staticNav.querySelector('.inbox');
        // selectBtn(inboxBtn);
        changeSelectedProject(inboxBtn);
    }

    events.on('userProjectListUpdated', updateUserProjectBtnList);

    const staticNav = renderStaticNav();
    const projectsNav = createProjectsNav();

    markup.appendChildren([staticNav, projectsNav], navbar);

    init();

})();

export { navbar };