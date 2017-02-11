//***** This is a service in Angular 

(function(module){
  
  var thermoMonitoringService = function($http){
    
    var getTemperature = function(){
     return $http.get("string")
           .then(function(response){
             return response.data;
           });
    };

    return {
      getTemperature: getTemperature
    };
  };
  
  module.factory("thermoMonitoringService", thermoMonitoringService);
  
  
}(angular.module("thermoMonitoring")));