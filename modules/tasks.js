import { events } from './events.js';

const tasks = (function() {
    const tasks = {};
    
    function storeTask(task) {
        tasks[task.title] = task;
        events.emit('taskListUpdated', tasks);
    }

    function getTodaysTasks(now, tasksAsArray) {
        const todaysDateFormatted = now.toDateString();
        const todaysTasks = tasksAsArray.filter(task => todaysDateFormatted === task.dueDate.toDateString());
        events.emit('todaysTasksAssembled', todaysTasks);
    }
    
    function getThisWeeksTasks(now, tasksAsArray) {
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfWeek = new Date();
        const todaysDate = today.getDate();
        const sevenDaysFromToday = todaysDate + 6;
        endOfWeek.setDate(sevenDaysFromToday);
        const thisWeeksTasks = tasksAsArray.filter(task => task.dueDate.getTime() < endOfWeek.getTime() && task.dueDate.getTime() >= today.getTime());
        events.emit('thisWeeksTasksAssembled', thisWeeksTasks);
    }

    function populateUpcoming() {
        const now = new Date();
        const tasksAsArray = Object.values(tasks);
        getTodaysTasks(now, tasksAsArray);
        getThisWeeksTasks(now, tasksAsArray);
    }
    
    events.on('newTaskCreated', storeTask);
    events.on('taskListUpdated', populateUpcoming);
})();

export { tasks };