import { events } from "./events.js";
import { Project } from "./project.js";

const navbar = (function() {
    const navbar = document.querySelector('nav');

    const createStaticNavBtn = function(name) {
        const iconClassLookup = {
            'inbox': 'fa-inbox',
            'today': 'fa-calendar-o',
            'this week': 'fa-calendar'
        }

        const textListLookup = {
            'inbox': 'Inbox',
            'today': 'Today',
            'this week': 'This week'
        }

        const btn = document.createElement('button');
        btn.classList.add(`${name === 'this week' ? 'this-week' : 'none'}`);

        const icon = document.createElement('i');
        icon.classList.add('fa');
        icon.classList.add(`${iconClassLookup[name]}`);

        const text = document.createTextNode(` ${textListLookup[name]}`);

        const proj = new Project(`${textListLookup[name]}`);
        events.emit('staticProjectCreated', proj);

        btn.project = proj;

        

        
        
        if (name === 'inbox') {
            // btn.classList.add('inbox');
            // icon.classList.add('fa-inbox');
            // text = document.createTextNode(' Inbox');
            // const inbox = new Project('Inbox');
            // events.emit('staticProjectCreated', inbox);
            events.emit('documentLoaded', proj);
            // btn.project = inbox;
        }
        
        if (name === 'today') {
            // btn.classList.add('today');
            // icon.classList.add('fa-calendar-o');
            // text = document.createTextNode(' Today');
            // const today = new Project('Today');
            // events.emit('staticProjectCreated', today);
            events.on('todaysTasksAssembled', (tasks) => {
                proj.tasks = tasks;
            });
            // btn.project = today;
        }
        
        if (name === 'this week') {
            // btn.classList.add('this-week');
            // icon.classList.add('fa-calendar');
            // text = document.createTextNode(' This week');
            // const thisWeek = new Project('This week');
            // events.emit('staticProjectCreated', thisWeek);
            events.on('thisWeeksTasksAssembled', (tasks) => {
                proj.tasks = tasks;
            });
            // btn.project = thisWeek;
        }

        btn.appendChild(icon);
        btn.appendChild(text);
        btn.addEventListener('click', handleProjectBtnClick);
        return btn;
    }

    const createStaticNav = function() {
        const staticNavContainer = document.createElement('div');
        staticNavContainer.classList.add('static-nav');

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

    const handleProjectBtnClick = function(e) {
        const projectBtn = e.target;
        clearSelectedBtns();
        projectBtn.classList.add('selected');
        //? Should we be attaching the project to the btn like this?
        const project = projectBtn.project;
        events.emit('projectBtnClicked', project);
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
        userProjects.textContent = '';
        for (const key in projects) {
            const btn = createProjectBtn(projects[key]);
            userProjects.appendChild(btn);
        }
    }

    const staticNav = createStaticNav();
    navbar.appendChild(staticNav);

    const [ projectsNav, userProjects ] = createProjectsNav();
    navbar.appendChild(projectsNav);

    events.on('userProjectListUpdated', updateUserProjectBtnList);
    
})();

export { navbar };