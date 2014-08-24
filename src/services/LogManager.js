(function () {
    'use strict';
    function LogManager() {
        var self = this;
        this.printToConsole = true;

        this.setPrintToConsole = function(value) {
            self.printToConsole = value;
        };

        this.$get = function ($log,DataStorage) {
            var logManager = {};
            logManager.saveLogs = function(logs) {
                DataStorage.save("logs",logs);
                if (self.printToConsole) {
                    $log.debug("Logs saved");
                }
            };
            logManager.clearLogs = function() {
                DataStorage.delete("logs");
                if (self.printToConsole) {
                    $log.debug("Logs cleared");
                }
            };
            return logManager;
        };
    }

    angular.module('TaskManager')
        .provider('LogManager',LogManager);

}());