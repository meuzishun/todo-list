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
        events.emit('staticProjectListUpdated', staticProjects);
    }

    function storeUserProject(project) {
        userProjects[project.title] = project;
        events.emit('userProjectListUpdated', userProjects);
    }

    function formatDate(date) {
        const dateSplit = date.split('-');
        const dateNums = dateSplit.map(item => +item);
        const dateFormatted = new Date([...dateNums]).toDateString();
        return dateFormatted;
    }
    //TODO: check date for task and if it is today, store in today as well... same for this week
    function fillToday() {
        const todaysDate = new Date().toDateString();
        // console.clear();
        // console.log(todaysDate);

        for (const project in userProjects) {
            for (const task in userProjects[project].tasks) {
                const dueDate = formatDate(userProjects[project].tasks[task].dueDate);
                // console.log(dueDate);

                //TODO: put in this week... we need to find a way to get the day see if it is within 7... maybe wait to toDateString()?
                // if (dueDate === todaysDate) {
                //     console.log(staticProjects['Today']);
                //     staticProjects['Today'].addTask(userProjects[project].tasks[task]);
                // }

                if (dueDate === todaysDate) {
                    // console.log(staticProjects['Today']);
                    staticProjects['Today'].addTask(userProjects[project].tasks[task]);
                }
            }
        }
    }

    function storeTask(task) {
        currentProject.addTask(task);
        // fillToday();
    }

    
    events.on('staticProjectCreated', storeStaticProject);
    events.on('newUserProjectCreated', storeUserProject);
    events.on('projectBtnClicked', setCurrentProject);
    events.on('newTaskCreated', storeTask);
    events.on('documentLoaded', setCurrentProject);
})();

export { projects };