(function () {

    function TaskManagerAppController(scope,DataStorage) {
        var self = this;
        var dataStorageTasks;
        scope.taskAppState = {
            taskList : [],
            activeTask: {},
            hideCompleted: false,
            showActionBar: true

        };

        // try to load from dataStorage
        dataStorageTasks = DataStorage.load("tasks");
        if (dataStorageTasks.length > 0) {
            scope.taskAppState.taskList = dataStorageTasks;
        }

        scope.$on('TaskAppEvent', function (event, type, data) {
            scope.$broadcast(type, data);
        });

        this.toggleActionBar = function() {
            scope.taskAppState.showActionBar = !scope.taskAppState.showActionBar;
        }
    }

    angular.module('TaskManager')
        .controller('TaskManagerAppController', ['$scope','DataStorage', TaskManagerAppController])

}());
