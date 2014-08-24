(function () {

    function DataStorage($window,$log) {
        this.save = function(key,data) {
            $window.localStorage.setItem(key, JSON.stringify(data));
            $log.info("Data storage with key: '" + key + "' saved successfully!");
            return true;
        };

        this.load = function(key) {
            var results = {};
            if ($window.localStorage.getItem(key).length > 0 || $window.localStorage.getItem(key) !== null) {
                results = JSON.parse($window.localStorage.getItem(key));
            }
            else {
                $log.error("Data storage key: '" + key + "' is not exists!, nothing to load...")
            }
            return results;
        };

        this.delete = function(key) {
            if ($window.localStorage.getItem(key).length > 0 || $window.localStorage.getItem(key) !== null) {
                $window.localStorage.removeItem(key);
                $log.info("Data storage key: '" + key + "' deleted successfully!")
            }
            else {
                $log.error("Data storage key: '" + key + "' is not exists!, nothing to delete...")
            }
        }
    }

    angular.module('DataStorage', [])
        .service('DataStorage',['$window','$log', DataStorage]);

}());