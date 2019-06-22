(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["MenuService"];
function MyInfoController(MenuService) {
  var myInfoCtrl = this;
  myInfoCtrl.registeredData = MenuService.registeredData;
}


})();
