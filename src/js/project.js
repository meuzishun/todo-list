
import { events } from './events.js';

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = {};
    }

    addTask(task) {
        this.tasks[task.title] = task;
    }
}

export { Project };