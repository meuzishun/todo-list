import { events } from './modules/events.js';
import { forms } from './modules/forms.js';
import { Project } from './modules/project.js';
import { projects } from './modules/projects.js';
import { Task } from './modules/task.js';
import { tasks } from './modules/tasks.js';
import { mainContent } from './modules/mainContent.js';
import { navbar } from './modules/navBar.js';
import { markup } from './modules/markup.js';

events.printEvents();

function logData(data) {
    console.log(data);
}

// const testElement1 = markup.elementBuilder('h1', 'test-heading');
// const testElement2 = markup.elementBuilder('p', ['test-para', 'text']);
// const testContainer = markup.elementBuilder('div', 'test-container');
// markup.appendChildren([testElement1, testElement2], testContainer);
// console.log(testContainer);

// events.emit('newProjectCreated', inbox);

// events.printEvents();

