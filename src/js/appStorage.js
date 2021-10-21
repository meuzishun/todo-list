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
    properties: {
        projects: {},
        getProjects: function() {
            return this.projects;
        },
        addProject: function(title) {
            const project = new Project(title);
            this.projects[project.title] = project;
        },
        removeProject: function(project) {}
    }
};

export { appStorage };