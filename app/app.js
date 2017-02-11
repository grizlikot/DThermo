(function(module) {
  module.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "app/thermoMonitoring.html",  
        controller: "ThermoMonitoringController"
      })
      .otherwise({redirectTo: "/main"})
  }); 
 
}(angular.module("thermoMonitoring", ["ngRoute"])));