import { events } from "./events.js";
import { Project } from "./project.js";
// import { projects } from "./projects.js";

const navbar = (function() {
    const navbar = document.querySelector('nav');

    // const projectsNav = navbar.querySelector('.projects-nav');
    // const userProjects = projectsNav.querySelector('.user-projects');
    // const addProjectBtn = projectsNav.querySelector('.add-project-btn');

    const createStaticNav = function() {
        const staticNavContainer = document.createElement('div');
        staticNavContainer.classList.add('static-nav');

        const createStaticNavBtn = function(name) {
            const btn = document.createElement('button');
            const icon = document.createElement('i');
            icon.classList.add('fa');
            let text;
            
            if (name === 'inbox') {
                btn.classList.add('inbox');
                icon.classList.add('fa-inbox');
                text = document.createTextNode(' Inbox');
                const inbox = new Project('Inbox');
                events.emit('staticProjectCreated', inbox);
                events.emit('documentLoaded', inbox);
                btn.project = inbox;
            }
            
            if (name === 'today') {
                btn.classList.add('today');
                icon.classList.add('fa-calendar-o');
                text = document.createTextNode(' Today');
                const today = new Project('Today');
                events.emit('staticProjectCreated', today);
                btn.project = today;
            }
            
            if (name === 'this week') {
                btn.classList.add('this-week');
                icon.classList.add('fa-calendar');
                text = document.createTextNode(' This week');
                const thisWeek = new Project('This week');
                events.emit('staticProjectCreated', thisWeek);
                btn.project = thisWeek;
            }

            btn.appendChild(icon);
            btn.appendChild(text);
            btn.addEventListener('click', handleProjectBtnClick);
            return btn;
        }

        const inboxBtn = createStaticNavBtn('inbox');
        const todayBtn = createStaticNavBtn('today');
        const thisWeekBtn = createStaticNavBtn('this week');

        staticNavContainer.appendChild(inboxBtn);
        staticNavContainer.appendChild(todayBtn);
        staticNavContainer.appendChild(thisWeekBtn);

        return staticNavContainer;
    }

    const createProjectsNav = function() {
        const projectsNavContainer = document.createElement('div');
        projectsNavContainer.classList.add('projects-nav');

        const heading = document.createElement('h3');
        heading.textContent = 'Projects';

        const userProjects = document.createElement('div');
        userProjects.classList.add('user-projects');

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-project-btn');

        const addIcon = document.createElement('i');
        addIcon.classList.add('fa');
        addIcon.classList.add('fa-plus');

        const addProjectText = document.createTextNode(' Add Project');

        addProjectBtn.appendChild(addIcon);
        addProjectBtn.appendChild(addProjectText);
        addProjectBtn.addEventListener('click', handleAddProjectBtnClick);

        projectsNavContainer.appendChild(heading);
        projectsNavContainer.appendChild(userProjects);
        projectsNavContainer.appendChild(addProjectBtn);

        return [ projectsNavContainer, userProjects ];
    }

    const staticNav = createStaticNav();
    navbar.appendChild(staticNav);

    const [ projectsNav, userProjects ] = createProjectsNav();
    navbar.appendChild(projectsNav);

    function handleAddProjectBtnClick(e) {
        const btn = e.target;
        events.emit('addProjectBtnClicked', btn);
    }
    
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
    

})();

export { navbar };