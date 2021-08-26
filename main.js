import { Project } from './modules/project.js';
import { Todo } from './modules/todo.js';
import { events } from './modules/events.js';

function doOnNewProject() {
    console.log('A new project was created');
}

function doOnNewTodo() {
    console.log('A new todo was created');
}

events.on('newProjectCreated', doOnNewProject);
events.on('newTodoCreated', doOnNewTodo);

const testProject = new Project('test title');
const testTodo = new Todo('test title', 'test description', 'test due date', 'other?');

events.printEvents();

