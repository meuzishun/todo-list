import { events } from './events.js';
import { Project } from './project.js';
import { Task } from './task.js';

const forms = (function() {
    const overlay = document.querySelector('.overlay');
    
    function closeForm() {
        overlay.textContent = '';
        overlay.classList.add('hidden');
    }
    
    function openForm(btn) {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');

        const closeBtn = document.createElement('p');
        closeBtn.classList.add('form-close-btn');

        const removeIcon = document.createElement('i');
        removeIcon.classList.add('fa');
        removeIcon.classList.add('fa-remove');
        closeBtn.appendChild(removeIcon);
        closeBtn.addEventListener('click', closeForm);
        closeBtn.appendChild(removeIcon);
        formContainer.appendChild(closeBtn);

        const heading = document.createElement('h2');
        formContainer.appendChild(heading);

        const form = document.createElement('form');
        
        const titleOrNameInput = document.createElement('input');
        titleOrNameInput.setAttribute('type', 'text');
        titleOrNameInput.required = true;
        form.appendChild(titleOrNameInput);
        formContainer.appendChild(form);
        
        const submitBtn = document.createElement('input');
        submitBtn.setAttribute('type', 'submit');
        
        const btnClasses = [...btn.classList];

        if (btnClasses.includes('add-project-btn')) {
            formContainer.classList.add('new-project-form-container');
            heading.textContent = 'Add New Project';
            form.classList.add('new-project-form');
            titleOrNameInput.placeholder = "Project Name";
            submitBtn.value = "Add Project";
        }
        
        if (btnClasses.includes('add-task-btn')) {
            formContainer.classList.add('new-task-form-container');
            heading.textContent = 'Add New Task';
            form.classList.add('new-task-form');
            titleOrNameInput.placeholder = 'Title';

            const description = document.createElement('input');
            description.setAttribute('type', 'text');
            description.placeholder = 'Description';
            form.appendChild(description);

            const dueDateContainer = document.createElement('div');
            dueDateContainer.classList.add('due-date-container');

            const dueDateLabel = document.createElement('label');
            dueDateLabel.setAttribute('for', 'due-date');
            dueDateLabel.textContent = 'Due Date: ';

            const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.id = 'due-date';
            dateInput.placeholder = 'Due Date';

            dueDateContainer.appendChild(dueDateLabel);
            dueDateContainer.appendChild(dateInput);
            form.appendChild(dueDateContainer);
            submitBtn.value = 'Add Task';
        }

        form.addEventListener('submit', submitForm);
        form.appendChild(submitBtn);
        overlay.appendChild(formContainer);
        overlay.classList.toggle('hidden');
    }
    
    events.on('addProjectBtnClicked', openForm);
    events.on('addTaskBtnClicked', openForm);
    
    function submitForm(e) {
        e.preventDefault();
        const form = e.target;
        const formClasses = [...form.classList];
        const inputs = [...form.querySelectorAll('input')];
        inputs.pop();
        const values = inputs.map(input => input.value);

        if (formClasses.includes('new-project-form')) {
            const project = new Project(...values);
            events.emit('newUserProjectCreated', project);
        }
        
        if (formClasses.includes('new-task-form')) {
            const task = new Task(...values);
            const realDate = task.dueDate.split('-').map(num => +num);
            realDate[1]--;
            task.dueDate = new Date(...realDate);
            events.emit('newTaskCreated', task);
        } 

        closeForm();
    }
})();

export { forms };