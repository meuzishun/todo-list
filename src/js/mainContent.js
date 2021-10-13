import { events } from './events.js';
import { markup } from './markup.js';

const mainContent = document.querySelector('main');

let displayedProject;

const setDisplayedProject = function(project) {
    displayedProject = project;
}

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

const changeMainContent = function() {
    mainContent.textContent = '';

    // Create the container for the project
    // const projectContainer = document.createElement('div');
    const projectTitleAsClassName = displayedProject.title.replace(/\s/g, '-');
    // projectContainer.classList.add(`${projectTitleAsClassName}-container`);
    // projectContainer.classList.add(`project-container`);
    const projectContainer = markup.elementBuilder('div', [`${projectTitleAsClassName}-container`, 'project-container']);

    // Give the project a heading
    const projectHeading = document.createElement('h2');
    projectHeading.textContent = displayedProject.title;
    projectContainer.appendChild(projectHeading);

    // Create a container for the tasks
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');
    projectContainer.appendChild(tasksContainer);

    // Loop through and find all the tasks in the project
    for (const task in displayedProject.tasks) {
        const currentTask = displayedProject.tasks[task];
        const taskTitle = currentTask.title.replace(/\s/g, '-');

        // Create a task container
        const taskContainer = document.createElement('div');
        taskContainer.classList.add("single-task-container");

        // Create a task header
        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');
        taskContainer.appendChild(taskHeader);

        // Create a task left-side
        const taskHeaderLeftSide = document.createElement('div');
        taskHeaderLeftSide.classList.add('task-header-left-side');
        taskHeader.appendChild(taskHeaderLeftSide);
        
        // Create a task center
        const taskHeaderCenter = document.createElement('div');
        taskHeaderCenter.classList.add('task-header-center');
        taskHeader.appendChild(taskHeaderCenter);
        
        // Create a task right-side
        const taskHeaderRightSide = document.createElement('div');
        taskHeaderRightSide.classList.add('task-header-right-side');
        taskHeader.appendChild(taskHeaderRightSide);

        // Create task content
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('description-container');
        descriptionContainer.classList.add('hidden');
        taskContainer.appendChild(descriptionContainer);

        // Create a container for the checkbox, label, and optional project reminder
        // const checkLabelContainer = document.createElement('div');
        // checkLabelContainer.classList.add('check-label-container');

        // Create the task checkbox
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.classList.add('task-checkbox');
        taskCheckbox.id = `${taskTitle}-checkbox`;
        taskHeaderLeftSide.appendChild(taskCheckbox);

        // Create the task label
        const taskLabel = document.createElement('label');
        taskLabel.classList.add("task-label");
        taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
        taskLabel.textContent = currentTask.title;
        taskHeaderLeftSide.appendChild(taskLabel);

        // Create the project reminder if necessary
        if (displayedProject.title === 'Today' || displayedProject.title === 'This week') {
            const projectReminder = document.createElement('p');
            projectReminder.classList.add('project-reminder');
            projectReminder.textContent = `(${currentTask.originalProject})`;
            taskHeaderLeftSide.appendChild(projectReminder);
        }

        // taskContainer.appendChild(checkLabelContainer);

        // Check for a task description
        if (currentTask.description) {
            // Create description container
            // const descriptionContainer = document.createElement('div');
            // descriptionContainer.classList.add('description-container');

            const descriptionBtn = document.createElement('button');
            descriptionBtn.classList.add('description-btn');
            descriptionBtn.textContent = 'Show Description';
            descriptionBtn.addEventListener('click', toggleDescriptionDisplay);
            taskHeaderCenter.appendChild(descriptionBtn);
            
            const taskDescription = document.createElement('p');
            taskDescription.classList.add('task-description');
            taskDescription.classList.add('hidden');
            taskDescription.textContent = currentTask.description;
            descriptionContainer.appendChild(taskDescription);

            // taskContainer.appendChild(descriptionContainer);
        }
        
        // const dueDateContainer = document.createElement('div');
        // dueDateContainer.classList.add('due-date-container');

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.textContent = currentTask.dueDate.toDateString();
        taskHeaderRightSide.appendChild(taskDueDate);
        
        //TODO: create btn container
        const editBtn = document.createElement('button');
        editBtn.classList.add('fa');
        editBtn.classList.add('fa-ellipsis-h');
        taskHeaderRightSide.appendChild(editBtn);
        //TODO: create edit btn
        //TODO: create settings btn

        

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