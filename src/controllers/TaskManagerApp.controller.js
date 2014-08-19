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
