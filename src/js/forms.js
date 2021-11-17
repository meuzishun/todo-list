import {appStorage} from './appStorage.js';
import {mainContent} from './mainContent.js';
import {markup} from './markup.js';
import {navbar} from './navBar.js';

const forms = (function() {
	const overlay = document.querySelector('.overlay');

	const escape = function(key) {
		if (key.keyCode === 27) {
			closeForm();
			document.removeEventListener('keydown', escape);
		}
	};

	const closeForm = function() {
		overlay.textContent = '';
		overlay.classList.add('hidden');
	};

	const openEditTaskForm = function(task) {
		const formContainer = markup.elementBuilder('div', 'form-container');
		formContainer.classList.add('new-task-form-container');

		const closeBtn = markup.elementBuilder('p', 'form-close-btn');
		const removeIcon = markup.elementBuilder('i', ['fa', 'fa-remove']);
		closeBtn.appendChild(removeIcon);
		closeBtn.addEventListener('click', closeForm);
		document.addEventListener('keydown', escape);

		const heading = document.createElement('h2');
		heading.textContent = 'Edit Task';

		const form = document.createElement('form');
		form.classList.add('edit-task-form');
		form.dataset.oldTask_uuid = task.uuid;

		const titleOrNameInput = document.createElement('input');
		titleOrNameInput.id = 'title';
		titleOrNameInput.setAttribute('type', 'text');
		titleOrNameInput.required = true;
		titleOrNameInput.value = task.title;

		const description = document.createElement('input');
		description.setAttribute('type', 'text');
		description.id = 'description';
		description.value = task.description;

		const dueDateContainer = document.createElement('div');
		dueDateContainer.classList.add('due-date-container');

		const dueDateLabel = document.createElement('label');
		dueDateLabel.setAttribute('for', 'due-date');
		dueDateLabel.textContent = 'Due Date: ';
		dueDateContainer.appendChild(dueDateLabel);

		const dateInput = document.createElement('input');
		dateInput.setAttribute('type', 'date');
		dateInput.id = 'dueDate';
		dateInput.value = `${task.dueDate.getFullYear()}-${task.dueDate.getMonth() + 1}-${task.dueDate.getDate()}`;
		dueDateContainer.appendChild(dateInput);

		const projectInput = document.createElement('select');
		projectInput.classList.add('project-selection');
		const projects = appStorage.getAllProjects();
		const filteredProjects = projects.filter(function(project) {
			return project.title !== 'today' && project.title !== 'this week';
		});

		const oldProject = appStorage.findProject(task.project_uuid);
		form.dataset.oldProject_uuid = oldProject.uuid;
		filteredProjects.forEach(function(project) {
			const option = document.createElement('option');
			option.classList.add('project-option');
			option.textContent = project.title;
			option.dataset.uuid = project.uuid;
			if (project === oldProject) {
				option.setAttribute('selected', true);
			}
			projectInput.appendChild(option);
		});

		const submitBtn = document.createElement('input');
		submitBtn.setAttribute('type', 'submit');
		submitBtn.value = 'Save changes';

		const delBtn = document.createElement('button');
		delBtn.classList.add('del-btn');
		delBtn.textContent = 'Delete Task';
		delBtn.addEventListener('click', function(e) {
			console.log(e);
			console.log(`Time to delete`);
			console.log(oldProject);
			oldProject.removeTask(task.uuid);
			console.log(oldProject);
			//! Something is adding the task back in
			closeForm();
			mainContent.renderMainContent();
		});

		form.appendChild(titleOrNameInput);
		form.appendChild(description);
		form.appendChild(dueDateContainer);
		form.appendChild(projectInput);
		form.addEventListener('submit', submitForm);
		form.appendChild(submitBtn);
		form.appendChild(delBtn);

		formContainer.appendChild(closeBtn);
		formContainer.appendChild(heading);
		formContainer.appendChild(form);

		overlay.appendChild(formContainer);
		overlay.classList.toggle('hidden');
	};

	const openForm = function(btn) {
		const formContainer = markup.elementBuilder('div', 'form-container');
		const closeBtn = markup.elementBuilder('p', 'form-close-btn');
		const removeIcon = markup.elementBuilder('i', ['fa', 'fa-remove']);

		closeBtn.appendChild(removeIcon);
		closeBtn.addEventListener('click', closeForm);
		document.addEventListener('keydown', escape);

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
			titleOrNameInput.placeholder = 'Project Name';
			submitBtn.value = 'Add Project';
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
			dueDateContainer.appendChild(dueDateLabel);

			const dateInput = document.createElement('input');
			dateInput.setAttribute('type', 'date');
			dateInput.id = 'dueDate';
			dateInput.placeholder = 'Due Date';
			dueDateContainer.appendChild(dateInput);
			form.appendChild(dueDateContainer);

			const projectInput = document.createElement('select');
			projectInput.classList.add('project-selection');
			const projects = appStorage.getAllProjects();
			const filteredProjects = projects.filter(function(project) {
				return project.title !== 'today' && project.title !== 'this week';
			});
			const selectedProject = appStorage.getSelectedProject();
			filteredProjects.forEach(function(project) {
				const option = document.createElement('option');
				option.classList.add('project-option');
				option.textContent = project.title;
				option.dataset.uuid = project.uuid;
				if (project === selectedProject) {
					option.setAttribute('selected', true);
				}
				projectInput.appendChild(option);
			});
			form.appendChild(projectInput);

			submitBtn.value = 'Add Task';
		}

		form.addEventListener('submit', submitForm);
		form.appendChild(submitBtn);
		overlay.appendChild(formContainer);
		overlay.classList.toggle('hidden');
		titleOrNameInput.focus();
	};

	const submitForm = function(e) {
		e.preventDefault();
		if (e.submitter.classList.contains('del-btn')) {
			return;
		}
		const form = e.target;
		const formClasses = [...form.classList];
		const inputs = [...form.querySelectorAll('input')];
		const data = {};
		inputs.forEach((input) => {
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
			console.log(data);
			appStorage.addUserProject(data);
			navbar.updateUserProjectBtnList();
		}

		if (formClasses.includes('new-task-form')) {
			const projectOptions = [...form.querySelectorAll('option')];
			const project_uuid = projectOptions.filter(function(option) {
				return option.selected;
			})[0].dataset.uuid;
			const project = appStorage.findProject(project_uuid);
			project.createTask(data);
			mainContent.renderMainContent();
		}

		if (formClasses.includes('edit-task-form')) {
			const oldProject = appStorage.findProject(form.dataset.oldProject_uuid);
			const oldTask = oldProject.findTask(form.dataset.oldTask_uuid);

			const projectOptions = [...form.querySelectorAll('option')];
			const newProject_uuid = projectOptions.filter(function(option) {
				return option.selected;
			})[0].dataset.uuid;
			const newProject = appStorage.findProject(newProject_uuid);
			newProject.createTask(data);
			oldProject.removeTask(form.dataset.oldTask_uuid);
			mainContent.renderMainContent();
		}

		closeForm();
	};

	return {
		openForm,
		openEditTaskForm
	};
})();

export {forms};
