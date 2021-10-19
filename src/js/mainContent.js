
import { events } from './events.js';
import { markup } from './markup.js';

const mainContent = document.querySelector('main');

const handleAddTaskBtnClick = function(e) {
    const btn = e.target;
    events.emit('addTaskBtnClicked', btn);
}

const toggleDescriptionDisplay = function(e) {
    const descriptionBtn = e.target;
    const centerContainer = descriptionBtn.parentElement;
    const taskHeader = centerContainer.parentElement;
    const taskContainer = taskHeader.parentElement;
    const descriptionContainer = taskContainer.querySelector('.description-container');
    descriptionContainer.classList.toggle('hidden');
    descriptionBtn.textContent = descriptionContainer.classList.contains('hidden') ? 'Show Description' : 'Hide Description';
}

const renderMainContent = function(project) {
    mainContent.textContent = '';

    const projectTitleAsClassName = project.title.replace(/\s/g, '-');
    const projectContainer = markup.elementBuilder('div', [`${projectTitleAsClassName}-container`, 'project-container']);

    const projectHeading = markup.elementBuilder('h2', null, project.title);
    const tasksContainer = markup.elementBuilder('div', 'tasks-container');

    markup.appendChildren([projectHeading, tasksContainer], projectContainer);

    for (const task in project.tasks) {
        const currentTask = project.tasks[task];
        const taskTitle = currentTask.title.replace(/\s/g, '-');

        const taskContainer = markup.elementBuilder('div', 'single-task-container');

        const taskHeader = markup.elementBuilder('div', 'task-header');
        taskContainer.appendChild(taskHeader);

        const taskHeaderLeftSide = markup.elementBuilder('div', 'task-header-left-side');
        const taskHeaderCenter = markup.elementBuilder('div', 'task-header-center');
        const taskHeaderRightSide = markup.elementBuilder('div', 'task-header-right-side');
        markup.appendChildren([taskHeaderLeftSide, taskHeaderCenter, taskHeaderRightSide], taskHeader);

        const descriptionContainer = markup.elementBuilder('div', ['description-container', 'hidden']);
        markup.appendChildren([taskHeader, descriptionContainer], taskContainer);

        const taskCheckbox = markup.elementBuilder('input', 'task-checkbox');
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.id = `${taskTitle}-checkbox`;

        const taskLabel = markup.elementBuilder('label', 'task-label', currentTask.title);
        taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
        markup.appendChildren([taskCheckbox, taskLabel], taskHeaderLeftSide);

        if (project.title === 'Today' || project.title === 'This week') {
            const projectReminder = document.createElement('p', 'project-reminder', currentTask.originalProject);
            taskHeaderLeftSide.appendChild(projectReminder);
        }

        if (currentTask.description) {
            const descriptionBtn = markup.elementBuilder('button', 'description-btn', 'Show Description');
            descriptionBtn.addEventListener('click', toggleDescriptionDisplay);
            taskHeaderCenter.appendChild(descriptionBtn);
            
            const taskDescription = markup.elementBuilder('p', ['task-description', 'hidden'], currentTask.description);
            descriptionContainer.appendChild(taskDescription);
        }

        if (currentTask.dueDate) {
            const taskDueDate = markup.elementBuilder('p', 'task-due-date', currentTask.dueDate.toDateString());
            // const taskDueDate = markup.elementBuilder('p', 'task-due-date', currentTask.dueDate);
            taskHeaderRightSide.appendChild(taskDueDate);
        }
        
        
        const editBtn = markup.elementBuilder('button', ['fa', 'fa-ellipsis-h']);
        
        markup.appendChildren([editBtn], taskHeaderRightSide);

        tasksContainer.appendChild(taskContainer);
    }
    
    if (project.title !== 'Today' && project.title !== 'This week') {
        const icon = markup.elementBuilder('i', ['fa', 'fa-plus']);
        const addTaskBtn = markup.elementBuilder('button', 'add-task-btn');
        const addTaskBtnText = document.createTextNode('Add Task');

        markup.appendChildren([icon, addTaskBtnText], addTaskBtn);
        addTaskBtn.addEventListener('click', handleAddTaskBtnClick);
        projectContainer.appendChild(addTaskBtn);
    }

    mainContent.appendChild(projectContainer);

}

events.on('currentProjectSet', renderMainContent);
events.on('currentProjectTasksUpdated', renderMainContent);

export { mainContent };