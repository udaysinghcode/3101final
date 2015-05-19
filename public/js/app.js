var app = angular.module('Homework', []);

app.controller('MainController', function($scope, HomeworkFactory) {
  $scope.homeworks = HomeworkFactory;
  $scope.selected = function (homework) {
    homework.select = !homework.select
  };

});