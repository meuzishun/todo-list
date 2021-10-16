import { events } from "./events.js";

const state = (function() {
    let displayedProject = null;

    const setDisplayedProject = function(project) {
        displayedProject = project;
    }

    events.on('projectBtnClicked', setDisplayedProject);

    return {
        displayedProject,
        setDisplayedProject
    }
})();

export { state };