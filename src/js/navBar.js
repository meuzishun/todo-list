
import { events } from "./events.js";
import { markup } from "./markup.js";
import { appStorage } from './appStorage.js';


const navbar = (function() {
    const navbar = document.querySelector('nav');
    const staticNavContainer = markup.elementBuilder('div', 'static-nav');
    const projectsNavContainer = markup.elementBuilder('div', 'projects-nav');
    const userProjectsContainer = markup.elementBuilder('div', 'user-projects');
    markup.appendChildren([staticNavContainer, projectsNavContainer], navbar);

    const clearSelectedBtns = function() {
        const navBtns = navbar.querySelectorAll('button');
        navBtns.forEach(btn => {
            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
            }
        });
    }

    const setSelectedProjectBtn = function() {
        const selectedProject = appStorage.getSelectedProject();
        const selectedProjectTitle = selectedProject.title;
        const btns = [...navbar.querySelectorAll('button')];
        const btnToSelect = btns.find(btn => btn.innerHTML === selectedProjectTitle);
        btnToSelect.classList.add('selected');
    }

    const findProjectAndSetFromBtn = function(btn) {
        const project = appStorage.findProject(btn.textContent);
        appStorage.setSelectedProject(project);
    }

    const changeSelectedProjectBtn = function() {
        clearSelectedBtns();
        setSelectedProjectBtn();
    }
    
    const handleProjectBtnClick = function(e) {
        const projectBtn = e.target;
        findProjectAndSetFromBtn(projectBtn);
        changeSelectedProjectBtn();
    }

    const handleAddProjectBtnClick = function(e) {
        const btn = e.target;
        events.emit('addProjectBtnClicked', btn);
    }

    const createProjectBtn = function(project) {
        const className = project.title.replace(' ', '-');
        const btn = markup.elementBuilder('button', className);
        const textNode = document.createTextNode(project.title);
        btn.appendChild(textNode);
        btn.addEventListener('click', handleProjectBtnClick);
        return btn;
    }

    const renderStaticNav = function() {
        const staticProjects = appStorage.getStaticProjects();
        for (const project in staticProjects) {
            //! concerned about guaranteed order here:
            const button = createProjectBtn(staticProjects[project]);
            staticNavContainer.appendChild(button);
        }
    }

    const updateUserProjectBtnList = function() {
        userProjectsContainer.textContent = '';
        const projects = appStorage.getUserProjects();
        for (const key in projects) {
            const btn = createProjectBtn(projects[key]);
            userProjectsContainer.appendChild(btn);
        }
    }

    const renderProjectsNav = function() {
        const heading = markup.elementBuilder('h3', null, 'Projects');
        const addProjBtn = markup.elementBuilder('button', 'add-project-btn');
        const addIcon = markup.elementBuilder('i', ['fa', 'fa-plus']);
        const addProjectText = document.createTextNode('Add Project');
        addProjBtn.addEventListener('click', handleAddProjectBtnClick);

        markup.appendChildren([addIcon, addProjectText], addProjBtn);
        markup.appendChildren([heading, userProjectsContainer, addProjBtn], projectsNavContainer);
        
        updateUserProjectBtnList();
    }

    const init = function() {
        const inboxBtn = staticNavContainer.querySelector('.inbox');
        findProjectAndSetFromBtn(inboxBtn);
        changeSelectedProjectBtn();
    }

    renderStaticNav();
    renderProjectsNav();
    init();

})();

export { navbar };