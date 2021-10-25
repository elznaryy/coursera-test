(function (){
'use strict';
angular.module('myfirstapp',[])
.controller('myfirstcontroller',function($scope){
$scope.name="hey fucker";
$scope.sayhello = function () {
  return "hello ahmed ibrahim qlpy";

};
.controller('first-test',function()$scope){
  $scope.name1="";
  $scope.finalresult="0",
  $scope.display= function(){
    var total =;
    functionname($scope.name);
    $scope.finalresult=total;
  };




};
function functionname(string){
  var num=0;
  for(var i=0;i<string.lenght;i++){
    num+=string.charCodeAt(i);
  }
}

});


})();//iife
