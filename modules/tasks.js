import { events } from './events.js';

const tasks = (function() {
    const tasks = {};
    
    function storeTask(task) {
        tasks[task.title] = task;
        events.emit('taskListUpdated', tasks);
    }
    
    events.on('newTaskCreated', storeTask);
})();

export { tasks };