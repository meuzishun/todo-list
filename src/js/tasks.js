
import { events } from './events.js';

class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }
}

const tasks = (function() {
    const tasks = {};

    const createNewTask = function(data) {
        const task = new Task(...data);
        const realDate = task.dueDate.split('-').map(num => +num);
        realDate[1]--;
        task.dueDate = new Date(...realDate);
        events.emit('newTaskCreated', task);
        storeTask(task);
    }
    
    const storeTask = function(task) {
        tasks[task.title] = task;
        events.emit('taskListUpdated', tasks);
    }

    events.on('newTaskDataSubmitted', createNewTask);

})();

export { tasks };