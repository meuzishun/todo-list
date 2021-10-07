import { events } from './events.js';
// import { projects } from './projects.js';

const mainContent = document.querySelector('main');

let displayedProject;

const setDisplayedProject = function(project) {
    displayedProject = project;
}
// const addTasks = function(tasks) {
//     taskContainer.
// }

const handleAddTaskBtnClick = function(e) {
    const btn = e.target;
    events.emit('addTaskBtnClicked', btn);
}

// skeleton content is created for main ()

// const updateTasksDisplay = function(project) {
//     tasksContainer.textContent = '';
    
//     // const addTasks = function(tasks) {
//     //     console.log(tasks);
//     //     project.tasks = tasks;
//     //     // updateTasksDisplay();
//     // }
    
//     // events.on('todaysTasksAssembled', addTasks);
//     // events.on('thisWeeksTasksAssembled', addTasks);

//     // if (project.title === 'Today') {
//     //     events.emit('todayBtnClicked');
//     //     //! Not getting tasks on first click
//     // }
    
//     // if (project.title === 'This week') {
//     //     events.emit('thisWeekBtnClicked');
//     //     //! Not getting all tasks
//     // }

//     // for each task in the project:
//     for (const task in project.tasks) {
//         console.log('adding tasks...');
//         const currentTask = project.tasks[task];
//         // get the title of the task and replace spaces with hyphens
//         const taskTitle = currentTask.title.replace(/\s/g, '-');
//         // create a div with a class of "task-container"
//         const taskContainer = document.createElement('div');
//         taskContainer.classList.add("single-task-container");
//         // create an input of type="checkbox" with a class="task-checkbox" and an id=`${taskTitle}-checkbox`
//         const taskCheckbox = document.createElement('input');
//         taskCheckbox.setAttribute('type', 'checkbox');
//         taskCheckbox.classList.add('task-checkbox');
//         taskCheckbox.id = `${taskTitle}-checkbox`;
//         // create a label with class="task-label" for=`${taskTitle}-checkbox`
//         const taskLabel = document.createElement('label');
//         taskLabel.classList.add("task-label");
//         taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
//         // insert task.title into label
//         taskLabel.textContent = currentTask.title;
//         //TODO: insert task.dueDate
//         // append all the elements
//         taskContainer.appendChild(taskCheckbox);
//         taskContainer.appendChild(taskLabel);
//         // insert the container before the addTaskBtn
//         tasksContainer.appendChild(taskContainer);
//     }
// }

const changeMainContent = function() {
    // clear the content already there...
    mainContent.textContent = '';

    // create the container for the project display...
    const projectContainer = document.createElement('div');
    const projectTitleAsClassName = displayedProject.title.replace(/\s/g, '-');
    projectContainer.classList.add(`${projectTitleAsClassName}-container`);
    projectContainer.classList.add(`project-container`);

    // create and name the heading for the project...
    const projectHeading = document.createElement('h2');
    projectHeading.textContent = displayedProject.title;
    projectContainer.appendChild(projectHeading);

    // create and give class to tasks container
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');
    projectContainer.appendChild(tasksContainer);

    for (const task in displayedProject.tasks) {
        console.log('adding tasks...');
        const currentTask = displayedProject.tasks[task];
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
        //TODO: insert task.dueDate
        // append all the elements
        taskContainer.appendChild(taskCheckbox);
        taskContainer.appendChild(taskLabel);
        // insert the container before the addTaskBtn
        tasksContainer.appendChild(taskContainer);
    }
    
    if (displayedProject.title !== 'Today' && displayedProject.title !== 'This week') {
        // create and append addTaskBtn
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
        addTaskBtn.addEventListener('click', handleAddTaskBtnClick);
        projectContainer.appendChild(addTaskBtn);
    }
    

    // append everything to the HTML doc
    mainContent.appendChild(projectContainer);

}

// updateTasksDisplay(project);
    // listen for new task creation...
    // events.on('newTaskCreated', updateTasksDisplay);
    // events.on('taskListUpdated')

    // projectContainer.appendChild(projectHeading);
    // projectContainer.appendChild(tasksContainer);

    // if (project.title !== 'Today' && project.title !== 'This week') {
    //     function handleAddTaskBtnClick(e) {
    //         const btn = e.target;
    //         events.emit('addTaskBtnClicked', btn);
    //     }
    
    //     // create the icon for the addTaskButton...
    //     const icon = document.createElement('i');
    //     icon.classList.add('fa');
    //     icon.classList.add('fa-plus');
        
    //     // create the addTaskButton...
    //     const addTaskBtn = document.createElement('button');
    //     addTaskBtn.classList.add('add-task-btn');
    //     addTaskBtn.appendChild(icon);
    
    //     // add text to the addTaskButton...
    //     const addTaskBtnText = document.createTextNode(' Add Task');
    //     addTaskBtn.appendChild(addTaskBtnText);
    //     addTaskBtn.addEventListener('click', handleAddTaskBtnClick);
    //     projectContainer.appendChild(addTaskBtn);
    // }

events.on('documentLoaded', setDisplayedProject);
events.on('documentLoaded', changeMainContent);

events.on('projectBtnClicked', setDisplayedProject);
events.on('projectBtnClicked', changeMainContent);
events.on('newTaskCreated', changeMainContent);



export { mainContent };