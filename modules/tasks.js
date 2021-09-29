import { events } from './events.js';

const tasks = (function() {
    const tasks = {};
    
    function storeTask(task) {
        tasks[task.title] = task;
        events.emit('taskListUpdated', tasks);
    }

    function formatDate(date) {
        const dateSplit = date.split('-');
        const dateNums = dateSplit.map(item => +item);
        const dateFormatted = new Date([...dateNums]).toDateString();
        return dateFormatted;
    }

    function getTodaysTasks() {
        const todaysDate = new Date();
        const todaysDateAsString = todaysDate.toDateString();
        const tasksAsArray = Object.values(tasks);
        const todaysTasks = tasksAsArray.filter(task => formatDate(task.dueDate) === todaysDateAsString);
        events.emit('todaysTasksAssembled', todaysTasks);
    }
    
    function getThisWeeksTasks() {
        const todaysDate = new Date();
        const todaysDateAsString = todaysDate.toDateString();
        const todaysYear = todaysDate.getFullYear();
        const todaysMonth = todaysDate.getMonth();
        const todaysDay = todaysDate.getDate();
        const aWeekAway = new Date(todaysYear, todaysMonth, (todaysDay + 7));
        const aWeekAwayAsString = aWeekAway.toDateString();
        const tasksAsArray = Object.values(tasks);
        const thisWeeksTasks = tasksAsArray.filter(task => formatDate(task.dueDate) >= todaysDateAsString && formatDate(task.dueDate) <= aWeekAwayAsString);
        events.emit('thisWeeksTasksAssembled', thisWeeksTasks);
    }
    
    events.on('newTaskCreated', storeTask);
    events.on('todayBtnClicked', getTodaysTasks);
    events.on('thisWeekBtnClicked', getThisWeeksTasks);
})();

export { tasks };