
class Task {
    constructor(data) {
        this.title = data.title;
        this.description = data.description || null;
        this.dueDate = data.dueDate || null;
        this.completed = false;
    }
}

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = {};
    }
    getTasks() {
        return this.tasks;
    }
    addTask(data) {
        const task = new Task(data);
        this.tasks[task.title] = task;
    }
    findTask(title) {
        return this.tasks[title];
    }
    removeTask(title) {
        delete this.tasks[title];
    }
}

localStorage.clear();

const appStorage = {
    properties: {},
    getStaticProjects: function() {
        return this.properties.staticProjects;
    },
    getUserProjects: function() {
        return this.properties.userProjects;
    },
    addUserProject: function(title) {
        const project = new Project(title);
        this.properties.userProjects[project.title] = project;
        return project;
    },
    findProject: function(title) {
        //! there probably needs to be a better way to find projects based on the button clicked
        return this.properties.staticProjects[title] || this.properties.userProjects[title];
    },
    setSelectedProject: function(project) {
        this.properties.selectedProject = project;
    },
    getSelectedProject: function() {
        return this.properties.selectedProject;
    },
    removeUserProject: function(title) {
        delete this.properties.userProjects[title];
    },
    setLocalStorage: function() {
        const appData = JSON.stringify(this.properties);
        if (appData) {
            // console.log('setting local storage');
            localStorage.setItem('todoListSettings', appData);
        }
    },
    getProperties: function() {
        return this.properties;
    },
    setProperties: function(props) {
        this.properties = props;
        this.setLocalStorage();
    },
    getLocalStorage: function() {
        const propsStr = localStorage.getItem('todoListSettings');
        // console.table(propsStr);
        if (!propsStr) {
            // console.log('didnt get it');
            this.reset();
            return;
        }
        const propsObj = JSON.parse(propsStr);
        // console.table(propsObj);
        if (!propsObj) {
            // console.log('couldnt change it');
            this.reset();
            return;
        }
        if (propsObj) {
            this.setProperties(propsObj);
        }
    },
    reset: function() {
        this.properties = {
            staticProjects: {
                'inbox': {
                    title: 'inbox',
                    tasks: {}
                },
                'today': {
                    title: 'today',
                    tasks: {}
                },
                'this week': {
                    title: 'this week',
                    tasks: {}
                }
            },
            userProjects: {
                'test1': {
                    title: 'test1',
                    tasks: {
                        title: 'Get it done',
                        dueDate: ''
                    }
                }
            },
            selectedProject: null
        //! Do not put methods in object you intend to stringify... they will not render correctly when you parse.
        };
        this.setLocalStorage();
    }
};

appStorage.getLocalStorage();

export { appStorage };
