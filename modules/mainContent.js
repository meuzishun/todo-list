import { events } from './events.js';

const mainContent = document.querySelector('main');

let displayedProject;

const setDisplayedProject = function(project) {
    displayedProject = project;
}

const handleAddTaskBtnClick = function(e) {
    const btn = e.target;
    events.emit('addTaskBtnClicked', btn);
}

const changeMainContent = function() {
    mainContent.textContent = '';

    const projectContainer = document.createElement('div');
    const projectTitleAsClassName = displayedProject.title.replace(/\s/g, '-');
    projectContainer.classList.add(`${projectTitleAsClassName}-container`);
    projectContainer.classList.add(`project-container`);

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = displayedProject.title;
    projectContainer.appendChild(projectHeading);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');
    projectContainer.appendChild(tasksContainer);

    for (const task in displayedProject.tasks) {
        // console.log('adding tasks...');
        const currentTask = displayedProject.tasks[task];
        const taskTitle = currentTask.title.replace(/\s/g, '-');
        const taskContainer = document.createElement('div');
        taskContainer.classList.add("single-task-container");
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.classList.add('task-checkbox');
        taskCheckbox.id = `${taskTitle}-checkbox`;
        const taskLabel = document.createElement('label');
        taskLabel.classList.add("task-label");
        taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
        taskLabel.textContent = currentTask.title;
        //TODO: insert task.dueDate
        taskContainer.appendChild(taskCheckbox);
        taskContainer.appendChild(taskLabel);
        tasksContainer.appendChild(taskContainer);
    }
    
    if (displayedProject.title !== 'Today' && displayedProject.title !== 'This week') {
        const icon = document.createElement('i');
        icon.classList.add('fa');
        icon.classList.add('fa-plus');
        
        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.appendChild(icon);
    
        const addTaskBtnText = document.createTextNode(' Add Task');
        addTaskBtn.appendChild(addTaskBtnText);
        addTaskBtn.addEventListener('click', handleAddTaskBtnClick);
        projectContainer.appendChild(addTaskBtn);
    }

    mainContent.appendChild(projectContainer);

}

events.on('documentLoaded', setDisplayedProject);
events.on('documentLoaded', changeMainContent);

events.on('projectBtnClicked', setDisplayedProject);
events.on('projectBtnClicked', changeMainContent);

events.on('newTaskCreated', changeMainContent);

export { mainContent };