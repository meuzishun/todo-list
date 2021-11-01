
import { events } from './events.js';
import { appStorage } from './appStorage.js';
import { mainContent } from './mainContent.js';
import { markup } from './markup.js';
import { navbar } from './navBar.js';

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
        titleOrNameInput.id = 'title';
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
            description.id = 'description';
            description.placeholder = 'Description';
            form.appendChild(description);

            const dueDateContainer = document.createElement('div');
            dueDateContainer.classList.add('due-date-container');

            const dueDateLabel = document.createElement('label');
            dueDateLabel.setAttribute('for', 'due-date');
            dueDateLabel.textContent = 'Due Date: ';

            const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.id = 'dueDate';
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
    
    // events.on('addProjectBtnClicked', openForm);
    // events.on('addTaskBtnClicked', openForm);
    
    const submitForm = function(e) {
        e.preventDefault();
        const form = e.target;
        const formClasses = [...form.classList];
        const inputs = [...form.querySelectorAll('input')];
        const data = {};
        inputs.forEach(input => {
            if (input.type !== 'submit') {
                if (input.id === 'dueDate') {
                    const inputDate = input.value.split('-');
                    inputDate[1] = `${inputDate[1] - 1}`;
                    data.dueDate = new Date(...inputDate);
                } else {
                    data[input.id] = input.value;
                }
            }
        });

        if (formClasses.includes('new-project-form')) {
            appStorage.addUserProject(data.title);
            navbar.updateUserProjectBtnList(); //? Should we use events module here?
        }
        
        if (formClasses.includes('new-task-form')) {
            const project = appStorage.getSelectedProject();
            project.addTask(data);
            mainContent.renderMainContent();
        } 

        closeForm();
    }

    return {
        openForm
    }
})();

export { forms };