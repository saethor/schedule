(function(){

    var myApp = angular.module('myApp',[]);

    myApp.controller('ScheduleController', ['$http', function($http) {
        var self = this;
        self.channel = 'ruv';

        self.changeChannel = function( channel ) {
            self.channel = channel;
            self.getSchedule();
        };

        self.getSchedule = function() {
            $http.get('//apis.is/tv/' + self.channel).success(function(data){
                self.schedule = data.results;
                console.log(data);
            }); 
        }
        self.getSchedule();

        
    }]);

})();
