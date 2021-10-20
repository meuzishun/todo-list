class Task {
    constructor(data) {
        this.title = data.title;
        this.description = data.description || null;
        this.dueDate = data.dueDate || null;
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

    removeTask() {}
}

const appStorage = {
    // props: {
    //     selectedProject: 'inbox',

    // },
    // setSelectedProj: function(project) {
    //     this.props.selectedProject = project;
    // },
    // getSelectionProj: function() {
    //     return this.props.selectedProject;
    // },

    // properties: {
    //     projects: {},
    //     tasks: {},

    // }

    properties: {

        projects: {
            'inbox': {
                title: 'inbox',
                tasks: {},
                getTasks: function() {},
                addTask: function() {},
                removeTask: function() {},
            },
            'today': {},
            'this week': {},
            'my project 1': {},
            'my project 2': {},
        },
        getProjects: function() {
            return properties.projects;
        },
        addProject: function(title) {
            const project = new Project(title);
            properties[project.title] = project;
        },
        removeProject: function(project) {}
    }
};

// export { appStorage };