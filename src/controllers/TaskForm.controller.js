(function () {

    function TaskFormController(scope, DataStorage) {

        this.taskPriorities = [
            'Low',
            'Medium',
            'High',
            'Ergent'
        ];

        this.addTask = function (task) {
            if (scope.taskAppState.taskList.indexOf(task) == -1) {
                scope.taskAppState.taskList.push({
                    title: task.title,
                    priority: task.priority,
                    description: task.description,
                    completed: false
                });
                if (DataStorage.save("tasks",scope.taskAppState.taskList))
                    scope.$emit('TaskAppEvent', 'LogEvent:userAction', 'New Task Added!');
            } else {
                scope.$emit('TaskAppEvent', 'LogEvent:userAction', 'Task has been updated');
            }
            scope.taskAppState.activeTask = {};
        };

    }

    angular.module('TaskManager')
        .controller('TaskFormController', ['$scope','DataStorage', TaskFormController])

}());