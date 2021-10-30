
import { appStorage } from './appStorage.js';
import { events } from './events.js';
import { markup } from './markup.js';

const forms = (function() {
    const overlay = document.querySelector('.overlay');
    
    const closeForm = function() {
        overlay.textContent = '';
        overlay.classList.add('hidden');
    }
    
    const openForm = function(btn) {
        const formContainer = markup.elementBuilder('div', 'form-container');
        const closeBtn = markup.elementBuilder('p', 'form-close-btn');
        const removeIcon = markup.elementBuilder('i', ['fa', 'fa-remove']);

        closeBtn.appendChild(removeIcon);
        closeBtn.addEventListener('click', closeForm);

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
        titleOrNameInput.focus();
    }
    
    events.on('addProjectBtnClicked', openForm);
    events.on('addTaskBtnClicked', openForm);
    
    const submitForm = function(e) {
        e.preventDefault();
        const form = e.target;
        const formClasses = [...form.classList];
        const inputs = [...form.querySelectorAll('input')];
        inputs.pop();
        const data = inputs.map(input => input.value);

        if (formClasses.includes('new-project-form')) {
            appStorage.addUserProject(data[0]); //! obvious issue here
            console.log(appStorage.properties);
            // events.emit('newProjectDataSubmitted', data);
        }
        
        if (formClasses.includes('new-task-form')) {
            events.emit('newTaskDataSubmitted', data);
        } 

        closeForm();
    }
})();

export { forms };