(function(module) {

  var ThermoMonitoringController = function($scope, $interval, $location, $log, thermoMonitoringService) {
    thermoMonitoringService.getTemperature($scope.user).then(onTemperature, onError);

    TESTER = document.getElementById('tester');
    Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );

    var onTemperature = function(data) {
      $scope.temperature = data;
    };

    var onError = function(response) {
      $scope.message = "Can't get temperature info";
    };
  }; 
  
  module.controller("ThermoMonitoringController", ThermoMonitoringController);
  
}(angular.module("thermoMonitoring")));