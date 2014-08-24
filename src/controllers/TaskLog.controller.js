(function () {

    function TaskLogController($scope,LogManager) {

        this.eventsLog = [];

        this.logTaskEvent = function (event, type) {
            this.eventsLog.push({
                timeStamp: new Date(),
                logMsg: type
            });
            LogManager.saveLogs(this.eventsLog);
        }.bind(this);

        this.clearLog = function () {
            this.eventsLog = [];
            LogManager.clearLogs();
        }.bind(this);

        $scope.$on('LogEvent:userAction', this.logTaskEvent);
        $scope.$on('LogEvent:clearLog', this.clearLog);
    }

    angular.module('TaskManager')
        .controller('TaskLogController', ['$scope','LogManager', TaskLogController]);

}());
