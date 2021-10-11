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

    // Create the container for the project
    const projectContainer = document.createElement('div');
    const projectTitleAsClassName = displayedProject.title.replace(/\s/g, '-');
    projectContainer.classList.add(`${projectTitleAsClassName}-container`);
    projectContainer.classList.add(`project-container`);

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

        // Create a container for the checkbox, label, and optional project reminder
        const checkLabelContainer = document.createElement('div');
        checkLabelContainer.classList.add('check-label-container');

        // Create the task checkbox
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.classList.add('task-checkbox');
        taskCheckbox.id = `${taskTitle}-checkbox`;
        checkLabelContainer.appendChild(taskCheckbox);

        // Create the task label
        const taskLabel = document.createElement('label');
        taskLabel.classList.add("task-label");
        taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
        taskLabel.textContent = currentTask.title;
        checkLabelContainer.appendChild(taskLabel);

        // Create the project reminder if necessary
        if (displayedProject.title === 'Today' || displayedProject.title === 'This week') {
            const projectReminder = document.createElement('p');
            projectReminder.classList.add('project-reminder');
            projectReminder.textContent = `(${currentTask.originalProject.title})`;
            checkLabelContainer.appendChild(projectReminder);
        }

        taskContainer.appendChild(checkLabelContainer);

        // Check for a task description
        if (currentTask.description) {
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('description-container');

            const descriptionBtn = document.createElement('button');
            descriptionBtn.classList.add('description-btn');
            descriptionBtn.textContent = 'Show Description';
            descriptionBtn.addEventListener('click', () => {
                alert(taskDescription.textContent);
            });
            descriptionContainer.appendChild(descriptionBtn);
            
            const taskDescription = document.createElement('p');
            taskDescription.classList.add('task-description');
            taskDescription.textContent = currentTask.description;
            taskContainer.appendChild(descriptionContainer);
        }
        
        const dueDateContainer = document.createElement('div');
        dueDateContainer.classList.add('due-date-container');

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.textContent = currentTask.dueDate.toDateString();
        dueDateContainer.appendChild(taskDueDate);
        taskContainer.appendChild(dueDateContainer);
        
        
        

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