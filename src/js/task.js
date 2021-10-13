
import { events } from './events.js';

class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
        // this.originalProject = originalProject;
    }
}

export { Task };