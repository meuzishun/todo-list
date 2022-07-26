import { v4 as uuidv4 } from 'uuid';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAiHt6B3G6GwOxAyG_pHIx40p24sAWbMuM',
  authDomain: 'todo-list-redux-41609.firebaseapp.com',
  projectId: 'todo-list-redux-41609',
  storageBucket: 'todo-list-redux-41609.appspot.com',
  messagingSenderId: '847317144294',
  appId: '1:847317144294:web:e98cab05659748ce21e127',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const todoCollection = collection(db, 'todos');
const propStrDoc = doc(db, 'todos', 'Z2lCaH8GRm20LV9ey1QD');

class Task {
  constructor(data) {
    const { uuid = uuidv4(), completed = false } = data;
    this.uuid = uuid;
    this.title = data.title;
    this.description = data.description || null;
    this.dueDate =
      typeof data.dueDate === 'string'
        ? new Date(data.dueDate)
        : data.dueDate || null;
    this.project_uuid = data.project_uuid;
    this.completed = completed;
  }
}

class Project {
  constructor(data) {
    const { title, uuid = uuidv4(), tasks = [] } = data;
    this.uuid = uuid;
    this.title = title;
    this.tasks = tasks;
  }
  getTasks() {
    return this.tasks;
  }
  createTask(data) {
    const task = new Task(data);
    task.project_uuid = this.uuid;
    this.addTask(task);
    return task;
  }
  addTask(task) {
    this.tasks.push(task);
  }
  findTask(uuid) {
    return this.tasks.find(function (task) {
      return task.uuid === uuid;
    });
  }
  removeTask(uuid) {
    this.tasks = this.tasks.filter((task) => task.uuid !== uuid);
  }
}

// localStorage.clear();

const appStorage = {
  properties: {},
  setToday: function () {
    const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
    this.properties.todaysDate = todaysDate;
  },
  getToday: function () {
    return this.properties.todaysDate;
  },
  setEndOfWeek: function () {
    const endOfWeek = new Date();
    endOfWeek.setHours(0, 0, 0, 0);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    this.properties.endOfWeek = endOfWeek;
  },
  getEndOfWeek: function () {
    return this.properties.endOfWeek;
  },
  getStaticProjects: function () {
    return this.properties.staticProjects;
  },
  getUserProjects: function () {
    return this.properties.userProjects;
  },
  addStaticProject: function (title) {
    const project = new Project(title);
    this.properties.staticProjects[project.title] = project;
    this.setLocalStorage();
    return project;
  },
  addUserProject: function (data) {
    const project = new Project(data);
    this.properties.userProjects[project.title] = project;
    this.setLocalStorage();
    return project;
  },
  findProject: function (uuid) {
    const projects = this.getAllProjects();
    return projects.find(function (project) {
      return project.uuid === uuid;
    });
  },
  setSelectedProject: function (project) {
    this.properties.selectedProject = project;
    this.setLocalStorage();
  },
  getSelectedProject: function () {
    return this.properties.selectedProject;
  },
  removeUserProject: function (title) {
    delete this.properties.userProjects[title];
    this.setLocalStorage();
  },
  getAllProjects: function () {
    const projects = [];
    const staticProjects = this.getStaticProjects();
    const userProjects = this.getUserProjects();
    for (const project in staticProjects) {
      projects.push(staticProjects[project]);
    }
    for (const project in userProjects) {
      projects.push(userProjects[project]);
    }
    return projects;
  },
  getAllTasks: function () {
    const projects = this.getAllProjects();
    const allTasks = [];
    projects.forEach(function (project) {
      const tasks = project.getTasks();
      for (const task in tasks) {
        allTasks.push(tasks[task]);
      }
    });
    return allTasks;
  },
  getTodaysTasks: function () {
    const today = this.getToday();
    const allTasks = this.getAllTasks();
    const todaysTasks = allTasks.filter(function (task) {
      return task.dueDate.valueOf() === today.valueOf();
    });
    return todaysTasks;
  },
  getThisWeeksTasks: function () {
    const today = this.getToday();
    const endOfWeek = this.getEndOfWeek();
    const allTasks = this.getAllTasks();
    const thisWeeksTasks = allTasks.filter(function (task) {
      const taskDueDate = task.dueDate.valueOf();
      const todayDate = today.valueOf();
      const endOfWeekDate = endOfWeek.valueOf();
      return taskDueDate >= todayDate && taskDueDate <= endOfWeekDate;
    });
    return thisWeeksTasks;
  },
  clearCompletedOldTasks: function () {
    const tasks = this.getAllTasks();
    const today = this.getToday();
    tasks.forEach(function (task) {
      if (task.dueDate < today && task.completed) {
        console.log(`task ${task.title} is completed`);
        const project = appStorage.findProject(task.project_uuid);
        console.log(project);
        console.log(`Deleting task ${task.uuid}`);
        project.removeTask(task.uuid);
      }
    });
  },
  setRemoteStorage: function () {
    const propsStr = localStorage.getItem('todoListSettings');
    updateDoc(propStrDoc, { propsStr });
  },
  setLocalStorage: function () {
    const appData = JSON.stringify(this.properties);
    if (appData) {
      localStorage.setItem('todoListSettings', appData);
      this.setRemoteStorage();
    }
  },
  getProperties: function () {
    return this.properties;
  },
  setProperties: function (props) {
    console.log('Found in storage... parsing');
    for (const project in props.staticProjects) {
      const data = props.staticProjects[project];
      delete props.staticProjects[project];
      props.staticProjects[project] = new Project(data);
      if (props.staticProjects[project].title === 'inbox') {
        props.selectedProject = props.staticProjects[project];
      }
      for (const task in props.staticProjects[project].tasks) {
        const data = props.staticProjects[project].tasks[task];
        props.staticProjects[project].tasks[task] = new Task(data);
      }
    }
    for (const project in props.userProjects) {
      const data = props.userProjects[project];
      delete props.userProjects[project];
      props.userProjects[project] = new Project(data);
      for (const task in props.userProjects[project].tasks) {
        const data = props.userProjects[project].tasks[task];
        props.userProjects[project].tasks[task] = new Task(data);
      }
    }

    this.properties = props;
    this.setLocalStorage();
  },
  getRemoteStorage: function () {
    //* getDocs takes a collection and returns a promise...
    getDocs(todoCollection).then((snapshot) => {
      //*...from which individual docs can be extracted
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });
      const propsStr = data[0].propsStr;
      localStorage.setItem('todoListSettings', propsStr);
      this.getLocalStorage();
    });
  },
  getLocalStorage: function () {
    const propsStr = localStorage.getItem('todoListSettings');
    if (!propsStr) {
      this.reset();
      return;
    }
    const propsObj = JSON.parse(propsStr);
    if (!propsObj) {
      this.reset();
      return;
    }
    if (propsObj) {
      this.setProperties(propsObj);
      this.setToday();
      this.setEndOfWeek();
      this.clearCompletedOldTasks();
      this.setLocalStorage();
    }
  },
  reset: function () {
    console.log('Could not find storage... resetting');
    this.properties = {
      staticProjects: {},
      userProjects: {},
      selectedProject: null,
      //! Do not put methods in object you intend to stringify... they will not render correctly when you parse.
    };
    const inbox = this.addStaticProject({ title: 'inbox' });
    const today = this.addStaticProject({ title: 'today' });
    const thisWeek = this.addStaticProject({ title: 'this week' });
    // console.log(this.properties);
    // inbox.createTask(
    // 	new Task({
    // 		title       : 'Test task 1',
    // 		description : 'this is the description',
    // 		dueDate     : (() => {
    // 			const date = new Date('2021', '10', '16');
    // 			date.setHours(0, 0, 0, 0);
    // 			return date;
    // 		})()
    // 	})
    // );
    // const done = inbox.createTask(
    // 	new Task({
    // 		title       : 'Test task 2',
    // 		description : 'this is the description',
    // 		dueDate     : (() => {
    // 			const date = new Date('2021', '10', '15');
    // 			date.setHours(0, 0, 0, 0);
    // 			return date;
    // 		})()
    // 	})
    // );
    // done.completed = true;
    // const doneAndOld = inbox.createTask(
    // 	new Task({
    // 		title       : 'Test task 3',
    // 		description : 'this is the description',
    // 		dueDate     : (() => {
    // 			const date = new Date('2021', '10', '12');
    // 			date.setHours(0, 0, 0, 0);
    // 			return date;
    // 		})()
    // 	})
    // );
    // doneAndOld.completed = false;
    this.setSelectedProject(inbox);
    this.setToday();
    this.setEndOfWeek();
    this.clearCompletedOldTasks();
    this.setLocalStorage();
  },
};

appStorage.getRemoteStorage();
appStorage.getLocalStorage();

export { appStorage };
