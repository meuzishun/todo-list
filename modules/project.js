
import { events } from './events.js';

class Project {
    constructor(title) {
        this.title = title;
        this.todos = {};

        events.emit('newProjectCreated', this);
    }
}

export { Project };