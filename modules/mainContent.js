import { events } from './events.js';

const mainContent = document.querySelector('main');

function changeMainContent(project) {
    // clear the content already there...
    mainContent.textContent = '';

    // create the container for the project display...
    const projectContainer = document.createElement('div');
    const projectTitleAsClassName = project.title.replace(/\s/g, '-');
    projectContainer.classList.add(`${projectTitleAsClassName}-container`);
    projectContainer.classList.add(`project-container`);

    // create and name the heading for the project...
    const projectHeading = document.createElement('h2');
    projectHeading.textContent = project.title;

    // create and give class to tasks container
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    function updateTasksDisplay() {
        tasksContainer.textContent = '';
        // for each task in the project:
        for (const task in project.tasks) {
            const currentTask = project.tasks[task];
            // get the title of the task and replace spaces with hyphens
            const taskTitle = currentTask.title.replace(/\s/g, '-');
            // create a div with a class of "task-container"
            const taskContainer = document.createElement('div');
            taskContainer.classList.add("single-task-container");
            // create an input of type="checkbox" with a class="task-checkbox" and an id=`${taskTitle}-checkbox`
            const taskCheckbox = document.createElement('input');
            taskCheckbox.setAttribute('type', 'checkbox');
            taskCheckbox.classList.add('task-checkbox');
            taskCheckbox.id = `${taskTitle}-checkbox`;
            // create a label with class="task-label" for=`${taskTitle}-checkbox`
            const taskLabel = document.createElement('label');
            taskLabel.classList.add("task-label");
            taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
            // insert task.title into label
            taskLabel.textContent = currentTask.title;
            // append all the elements
            taskContainer.appendChild(taskCheckbox);
            taskContainer.appendChild(taskLabel);
            // insert the container before the addTaskBtn
            //! Sometimes addTaskBtn isn't there yet...
            tasksContainer.appendChild(taskContainer);
        }
    }

    updateTasksDisplay();
    // listen for new task creation...
    events.on('newTaskCreated', updateTasksDisplay);

    function handleAddTaskBtnClick() {
        events.emit('addTaskBtnClicked');
    }

    // create the icon for the addTaskButton...
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-plus');
    
    // create the addTaskButton...
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(icon);

    // add text to the addTaskButton...
    const addTaskBtnText = document.createTextNode(' Add Task');
    addTaskBtn.appendChild(addTaskBtnText);
    addTaskBtn.addEventListener('click', handleAddTaskBtnClick)
    
    // append everything to the HTML doc
    projectContainer.appendChild(projectHeading);
    projectContainer.appendChild(tasksContainer);
    projectContainer.appendChild(addTaskBtn);
    mainContent.appendChild(projectContainer);

}

events.on('projectBtnClicked', changeMainContent);

export { mainContent };