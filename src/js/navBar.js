import { events } from "./events.js";
import { markup } from "./markup.js";

const navbar = (function() {
    const navbar = document.querySelector('nav');

    const createStaticNavBtn = function(name) {
        const btnInfoLookup = {
            'inbox': {
                btnClass: 'inbox',
                iconClass: 'fa-inbox',
                text: 'Inbox',
            },
            'today': {
                btnClass: 'today',
                iconClass: 'fa-calendar-o',
                text: 'Today',
            },
            'this week': {
                btnClass: 'this-week',
                iconClass: 'fa-calendar',
                text: 'This week',
            }
        }

        const btn = markup.elementBuilder('button', `${btnInfoLookup[name].btnClass}`);

        const icon = markup.elementBuilder('i', ['fa', `${btnInfoLookup[name].iconClass}`]);

        const text = btnInfoLookup[name].text;
        const textNode = document.createTextNode(text);

        markup.appendChildren([icon, textNode], btn);
        btn.addEventListener('click', handleProjectBtnClick);
        events.emit('staticProjectBtnCreated', text);

        return btn;
    }

    const createStaticNav = function() {
        const staticNavContainer = markup.elementBuilder('div', 'static-nav');

        const inboxBtn = createStaticNavBtn('inbox');
        const todayBtn = createStaticNavBtn('today');
        const thisWeekBtn = createStaticNavBtn('this week');

        markup.appendChildren([inboxBtn, todayBtn, thisWeekBtn], staticNavContainer);

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

    const selectBtn = function(projectBtn) {
        projectBtn.classList.add('selected');
        events.emit('projectBtnClicked', projectBtn);
    }

    const handleProjectBtnClick = function(e) {
        const projectBtn = e.target;
        clearSelectedBtns();
        selectBtn(projectBtn);
    }

    const createProjectBtn = function(project) {
        const btn = document.createElement('button');
        //? Should we be attaching the project to the btn like this?
        btn.project = project;
        btn.textContent = project.title;
        btn.addEventListener('click', handleProjectBtnClick);
        return btn;
    }
    
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
        selectBtn(inboxBtn);
    }

    events.on('userProjectListUpdated', updateUserProjectBtnList);

    const staticNav = createStaticNav();
    const projectsNav = createProjectsNav();

    markup.appendChildren([staticNav, projectsNav], navbar);

    init();

})();

export { navbar };