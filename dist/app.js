(function () {
    angular.module('TaskManager', [])
}());

(function () {

    function TaskActionBarController(scope) {

        this.toggleCompletedTask = function () {
            scope.taskAppState.hideCompleted = !scope.taskAppState.hideCompleted;
        };


        this.clearLog = function () {
            scope.$emit('TaskAppEvent','LogEvent:clearLog');
        };


    }


    angular.module('TaskManager')
        .controller('TaskActionBarController',['$scope', TaskActionBarController])

}());
(function () {

    function TaskFormController(scope) {

        this.addTask = function (task) {
            if (scope.taskAppState.taskList.indexOf(task) == -1) {
                scope.taskAppState.taskList.push({
                    title: task.title,
                    description: task.description,
                    completed: false
                });
                scope.$emit('TaskAppEvent', 'LogEvent:userAction', 'New Task Added!');
            } else {
                scope.$emit('TaskAppEvent', 'LogEvent:userAction', 'Task has been updated');
            }
            scope.taskAppState.activeTask = {};
        };

    }

    angular.module('TaskManager')
        .controller('TaskFormController', ['$scope', TaskFormController])

}());
(function () {

    function TaskLogController($scope) {

        this.eventsLog = [];

        this.logTaskEvent = function (event, type) {
            this.eventsLog.push({
                timeStamp: new Date(),
                logMsg: type
            });
        }.bind(this);

        this.clearLog = function () {
            this.eventsLog = [];
        }.bind(this);

        $scope.$on('LogEvent:userAction', this.logTaskEvent);
        $scope.$on('LogEvent:clearLog', this.clearLog);
    }

    angular.module('TaskManager')
        .controller('TaskLogController', TaskLogController);

}());

(function () {

    function TaskManagerAppController(scope) {
        scope.taskAppState = {
            taskList : [],
            activeTask: {},
            hideCompleted: false
        };

        scope.$on('TaskAppEvent', function (event, type, data) {
            scope.$broadcast(type, data);
        })

    }

    angular.module('TaskManager')
        .controller('TaskManagerAppController', ['$scope', TaskManagerAppController])

}());

(function () {

    function TaskTableController(scope) {

        this.removeTask = function (task) {
            scope.taskAppState.taskList.splice(scope.taskAppState.taskList.indexOf(task), 1);
            scope.$emit('TaskAppEvent','LogEvent:userAction','Task been removed')
        };

        this.editTask = function (task) {
            scope.taskAppState.activeTask = scope.taskAppState.
                taskList[scope.taskAppState.taskList.indexOf(task)];
        };

    }

    angular.module('TaskManager')
        .controller('TaskTableController', ['$scope',TaskTableController]);

}());