
import { events } from './events.js';

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        events.emit('newTodoCreated', this);
    }
}

export { Todo };