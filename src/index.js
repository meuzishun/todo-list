import { events } from './js/events.js';
import { forms } from './js/forms.js';
import { Project } from './js/project.js';
import { projects } from './js/projects.js';
import { Task } from './js/task.js';
import { tasks } from './js/tasks.js';
import { mainContent } from './js/mainContent.js';
import { navbar } from './js/navBar.js';
import { markup } from './js/markup.js';
// import './css/style.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

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

