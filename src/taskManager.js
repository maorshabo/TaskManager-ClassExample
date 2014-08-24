(function () {
    angular.module('TaskManager', ['DataStorage'])
        .config([LogManagerProvider, function() {
            LogManagerProvider.setPrintToConsole(false);
        }]);
}());
