import { events } from './events.js';

const projects = (function() {
    const staticProjects = {};
    const userProjects = {};
    let currentProject = null;
    
    function setCurrentProject(project) {
        currentProject = project;
    }

    function storeStaticProject(project) {
        staticProjects[project.title] = project;
    }

    function storeUserProject(project) {
        userProjects[project.title] = project;
        events.emit('userProjectListUpdated', userProjects);
    }

    function storeTask(task) {
        currentProject.addTask(task);
    }
    
    events.on('staticProjectCreated', storeStaticProject);
    events.on('newUserProjectCreated', storeUserProject);
    events.on('projectBtnClicked', setCurrentProject);
    events.on('newTaskCreated', storeTask);
})();

export { projects };