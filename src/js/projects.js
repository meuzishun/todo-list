import { events } from './events.js';

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = {};
    }

    addTask(task) {
        this.tasks[task.title] = task;
    }
}

const projects = (function() {
    const staticProjects = {};
    const userProjects = {};
    let currentProject = null;
    
    const setCurrentProject = function(projectBtn) {
        const project = findProject(projectBtn);
        currentProject = project;
        events.emit('currentProjectSet', currentProject);
    }

    const storeStaticProject = function(project) {
        staticProjects[project.title] = project;
        events.emit('staticProjectListUpdated', staticProjects);
    }

    const storeUserProject = function(project) {
        userProjects[project.title] = project;
        events.emit('userProjectListUpdated', userProjects);
    }

    const getTodaysTasks = function(now, tasks) {
        const todaysDateFormatted = now.toDateString();
        const todaysTasks = Object.values(tasks).filter(task => todaysDateFormatted === task.dueDate.toDateString());
        todaysTasks.forEach(task => staticProjects['Today'].addTask(task));
    }
    
    const getThisWeeksTasks = function(now, tasks) {
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfWeek = new Date();
        const todaysDate = today.getDate();
        const sevenDaysFromToday = todaysDate + 6;
        endOfWeek.setDate(sevenDaysFromToday);
        const thisWeeksTasks = Object.values(tasks).filter(task => task.dueDate.getTime() < endOfWeek.getTime() && task.dueDate.getTime() >= today.getTime());
        thisWeeksTasks.forEach(task => staticProjects['This week'].addTask(task));
    }

    const populateUpcoming = function(tasks) {
        const now = new Date();
        getTodaysTasks(now, tasks);
        getThisWeeksTasks(now, tasks);
    }

    const storeTaskInCurrentProject = function(task) {
        task.originalProject = currentProject.title;
        currentProject.addTask(task);
        events.emit('currentProjectTasksUpdated', currentProject);
    }

    const createNewProject = function(data) {
        const project = new Project(...data);
        storeUserProject(project);
    }

    const createStaticProject = function(text) {
        const project = new Project(text);
        storeStaticProject(project);
    }

    const findProject = function(projectBtn) {
        const title = projectBtn.innerText;
        const project = staticProjects[title] || userProjects[title];
        return project;
    }

    events.on('newProjectDataSubmitted', createNewProject);
    events.on('staticProjectBtnCreated', createStaticProject);
    events.on('newUserProjectCreated', storeUserProject);
    events.on('projectBtnClicked', setCurrentProject);
    events.on('newTaskCreated', storeTaskInCurrentProject);
    events.on('documentLoaded', setCurrentProject);
    events.on('taskListUpdated', populateUpcoming);
})();

export { projects };