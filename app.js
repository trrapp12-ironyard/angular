"use strict"

// create module
// pass in the name and an empty array
var app = angular.module("ourApp", []);

// create controller
// pass in the name and the function
app.controller("FirstCtrl," First);

// contoller method
function First($scope) {
  console.log("main controller to groundcontrol");

  let now = new Date();
  $scope.now = now.toTimeString();
  console.log('$scope.now is:', $scope.now);

  $scope.updateTime = function() {
    let now = new Date();
    $scope.now = now.toTimeString();
  }
}

app.controller("BuildingCtrl", ['$scope', function Binding ($scope) {

}]);
