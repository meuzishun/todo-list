import { events } from './events.js';
import { Project } from './project.js';
import { Task } from './task.js';

const forms = (function() {
    const overlay = document.querySelector('.overlay');
    const newProjectForm = overlay.querySelector('.new-project-form-container');
    const newTaskForm = overlay.querySelector('.new-task-form-container');
    const formCloseBtns = [...overlay.querySelectorAll('.form-close-btn')];
    
    function closeForm(e) {
        const btn = e.currentTarget;
        const form = btn.parentElement;
        const overlay = form.parentElement;
        form.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    
    formCloseBtns.forEach(btn => btn.addEventListener('click', closeForm));
    
    function openAddProjectForm() {
        // Bring up form to enter new project info
        overlay.classList.toggle('hidden');
        newProjectForm.classList.toggle('hidden');
    }
    
    events.on('addProjectBtnClicked', openAddProjectForm);

    function openAddTaskForm() {
        // Bring up form to enter new project info
        overlay.classList.toggle('hidden');
        newTaskForm.classList.toggle('hidden');
    }

    events.on('addTaskBtnClicked', openAddTaskForm);
    
    function submitNewProjectForm(e) {
        e.preventDefault();
        const form = e.target;
        const inputs = [...form.querySelectorAll('input')];
        inputs.pop();
        const values = inputs.map(input => input.value);
        const project = new Project(...values);
        events.emit('newUserProjectCreated', project);
        inputs.forEach(input => input.value = '');
        form.parentElement.classList.add('hidden');
        form.parentElement.parentElement.classList.add('hidden');
    }
    
    newProjectForm.addEventListener('submit', submitNewProjectForm);
    
    function submitNewTaskForm(e) {
        e.preventDefault();
        const form = e.target;
        const inputs = [...form.querySelectorAll('input')];
        inputs.pop();
        const values = inputs.map(input => input.value);
        const task = new Task(...values);
        events.emit('newTaskCreated', task);
        inputs.forEach(input => input.value = '');
        form.parentElement.classList.add('hidden');
        form.parentElement.parentElement.classList.add('hidden');
    }
    
    newTaskForm.addEventListener('submit', submitNewTaskForm);
})();

export { forms };