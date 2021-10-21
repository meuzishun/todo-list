import { events } from './js/events.js';
import { mainContent } from './js/mainContent.js';
import { projects } from './js/projects.js';
import { tasks } from './js/tasks.js';
import { markup } from './js/markup.js';
import { navbar } from './js/navBar.js';
import { forms } from './js/forms.js';
import { appStorage } from './js/appStorage.js';
// import './css/style.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

// events.printEvents();

function logData(data) {
    console.log(data);
}

appStorage.properties.addProject('Inbox');
appStorage.properties.addProject('Today');
appStorage.properties.addProject('This week');
appStorage.properties.projects['Inbox'].addTask({
    title: 'Make todo list',
    dueDate: '10-21-1981',
    description: 'this is the description'
});
console.log(appStorage.properties.getProjects());

// const testElement1 = markup.elementBuilder('h1', 'test-heading');
// const testElement2 = markup.elementBuilder('p', ['test-para', 'text']);
// const testContainer = markup.elementBuilder('div', 'test-container');
// markup.appendChildren([testElement1, testElement2], testContainer);
// console.log(testContainer);

// events.emit('newProjectCreated', inbox);

// events.printEvents();

