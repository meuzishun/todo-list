import { appStorage } from './appStorage.js';
import { navbar } from './navBar.js';
import { forms } from './forms.js';
import { markup } from './markup.js';

const mainContent = (function () {
  const mainContent = document.querySelector('main');

  const handleAddTaskBtnClick = function (e) {
    const btn = e.target;
    forms.openForm(btn);
  };

  const toggleDescriptionDisplay = function (e) {
    const descriptionBtn = e.target;
    const centerContainer = descriptionBtn.parentElement;
    const taskHeader = centerContainer.parentElement;
    const taskContainer = taskHeader.parentElement;
    const descriptionContainer = taskContainer.querySelector(
      '.description-container'
    );
    descriptionContainer.classList.toggle('hidden');
    descriptionBtn.textContent = descriptionContainer.classList.contains(
      'hidden'
    )
      ? 'Show Description'
      : 'Hide Description';
  };

  const renderMainContent = function () {
    const project = appStorage.getSelectedProject();

    mainContent.textContent = '';

    const projectTitleAsClassName = project.title.replace(/\s/g, '-');
    const projectContainer = markup.elementBuilder('div', [
      `${projectTitleAsClassName}-container`,
      'project-container',
    ]);

    const projectHeading = markup.elementBuilder('h2', null, project.title);
    const tasksContainer = markup.elementBuilder('div', 'tasks-container');

    markup.appendChildren([projectHeading, tasksContainer], projectContainer);

    const getProjectTasks = function (project) {
      if (project.title === 'today') {
        const todaysTasks = appStorage.getTodaysTasks();
        return todaysTasks;
      }
      if (project.title === 'this week') {
        const thisWeeksTasks = appStorage.getThisWeeksTasks();
        return thisWeeksTasks;
      }
      if (project.title !== 'today' && project.title !== 'this week') {
        const tasks = project.getTasks();
        return tasks;
      }
    };

    const tasks = getProjectTasks(project);

    for (const task in tasks) {
      const currentTask = tasks[task];
      const taskTitle =
        currentTask.title.replace(/\s/g, '-') || currentTask.title;

      const taskContainer = markup.elementBuilder(
        'div',
        'single-task-container'
      );

      const taskHeader = markup.elementBuilder('div', 'task-header');
      taskContainer.appendChild(taskHeader);

      const taskHeaderLeftSide = markup.elementBuilder(
        'div',
        'task-header-left-side'
      );
      // const taskHeaderCenter = markup.elementBuilder('div', 'task-header-center');
      const taskHeaderRightSide = markup.elementBuilder(
        'div',
        'task-header-right-side'
      );
      markup.appendChildren(
        [taskHeaderLeftSide, taskHeaderRightSide],
        taskHeader
      );

      // const descriptionContainer = markup.elementBuilder('div', ['description-container', 'hidden']);
      // markup.appendChildren([taskHeader, descriptionContainer], taskContainer);

      const taskCheckbox = markup.elementBuilder('input', 'task-checkbox');
      taskCheckbox.setAttribute('type', 'checkbox');
      taskCheckbox.id = `${taskTitle}-checkbox`;

      const taskLabel = markup.elementBuilder(
        'label',
        'task-label',
        currentTask.title
      );
      taskLabel.setAttribute('for', `${taskTitle}-checkbox`);
      markup.appendChildren([taskCheckbox, taskLabel], taskHeaderLeftSide);

      const checkComplete = function () {
        return currentTask.completed;
      };

      const addStrikeThrough = function () {
        if (!taskLabel.classList.contains('checked')) {
          taskLabel.classList.add('checked');
          taskContainer.classList.add('checked');
        }
      };

      const removeStrikeThrough = function () {
        if (taskLabel.classList.contains('checked')) {
          taskLabel.classList.remove('checked');
          taskContainer.classList.remove('checked');
        }
      };

      const setTaskCompleted = function () {
        //TODO: set as completed without checking checkbox
        if (taskCheckbox.checked) currentTask.completed = true;
        if (!taskCheckbox.checked) currentTask.completed = false;
        appStorage.setLocalStorage();

        if (checkComplete()) {
          addStrikeThrough();
        }
        if (!checkComplete()) {
          removeStrikeThrough();
        }
      };

      if (checkComplete()) {
        addStrikeThrough();
        taskCheckbox.checked = true;
      }

      taskCheckbox.addEventListener('click', setTaskCompleted);
      // if (currentTask.description) {
      //     const descriptionBtn = markup.elementBuilder('button', 'description-btn', 'Show Description');
      //     descriptionBtn.addEventListener('click', toggleDescriptionDisplay);
      //     taskHeaderCenter.appendChild(descriptionBtn);

      //     const taskDescription = markup.elementBuilder('p', ['task-description', 'hidden'], currentTask.description);
      //     descriptionContainer.appendChild(taskDescription);
      // }

      if (currentTask.dueDate) {
        //TODO: More work to format dates... today, tomorrow, yesterday, etc.
        let dateStr;
        if (project.title !== 'today') {
          const today = appStorage.getToday();
          const todayDay = today.getDay();
          const dueDateDay = currentTask.dueDate.getDay();
          const dueDate_msID = currentTask.dueDate.valueOf();
          const dueDateYear = currentTask.dueDate.getFullYear();
          const today_msID = today.valueOf();
          const thisYear = today.getFullYear();
          const endOfWeek = appStorage.getEndOfWeek();
          const endOfWeek_msID = endOfWeek.valueOf();

          const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ];
          const monthsOfYear = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ];

          if (today_msID <= dueDate_msID && endOfWeek_msID > dueDate_msID) {
            if (dueDateDay === todayDay) {
              dateStr = 'Today';
            } else if (dueDateDay === (todayDay + 1) % 7) {
              dateStr = 'Tomorrow';
            } else {
              dateStr = daysOfWeek[dueDateDay];
            }
          } else {
            if (dueDateDay === todayDay - 1) {
              dateStr = 'Yesterday';
            } else {
              dateStr = `${
                monthsOfYear[currentTask.dueDate.getMonth()]
              } ${currentTask.dueDate.getDate()}`;

              if (dueDateYear !== thisYear) {
                dateStr += ` ${dueDateYear}`;
              }
            }
          }
        }

        if (project.title === 'today') {
          dateStr = ' ';
        }

        const taskDueDate = markup.elementBuilder(
          'p',
          'task-due-date',
          dateStr
        );
        taskHeaderLeftSide.appendChild(taskDueDate);
      }

      const handleEditBtn = function () {
        forms.openEditTaskForm(currentTask);
      };

      const editBtn = markup.elementBuilder('button', 'edit-btn');
      const editIcon = markup.elementBuilder('i', ['fa', 'fa-ellipsis-h']);
      editBtn.appendChild(editIcon);
      editBtn.addEventListener('click', handleEditBtn);

      markup.appendChildren([editBtn], taskHeaderRightSide);

      //? Do we need this still?
      if (project.title === 'today' || project.title === 'this week') {
        const originalProject_uuid = currentTask.project_uuid;
        const originalProject = appStorage.findProject(originalProject_uuid);
        const projectReminder = markup.elementBuilder(
          'button',
          'project-reminder',
          originalProject.title
        );
        projectReminder.dataset.uuid = currentTask.project_uuid;
        projectReminder.addEventListener('click', navbar.handleProjectBtnClick);
        taskHeaderRightSide.appendChild(projectReminder);
      }

      tasksContainer.appendChild(taskContainer);
    }

    if (project.title !== 'today' && project.title !== 'this week') {
      const icon = markup.elementBuilder('i', ['fa', 'fa-plus']);
      const addTaskBtn = markup.elementBuilder('button', 'add-task-btn');
      const addTaskBtnText = document.createTextNode('Add Task');

      markup.appendChildren([icon, addTaskBtnText], addTaskBtn);
      addTaskBtn.addEventListener('click', handleAddTaskBtnClick);
      projectContainer.appendChild(addTaskBtn);
    }

    mainContent.appendChild(projectContainer);
  };

  renderMainContent();

  return {
    renderMainContent,
  };
})();

export { mainContent };
