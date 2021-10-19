const appStorage = {
    props: {
        selectedProject: 'inbox',

    },
    setSelectedProj: function(project) {
        this.props.selectedProject = project;
    },
    getSelectionProj: function() {
        return this.props.selectedProject;
    },
};

export { appStorage };