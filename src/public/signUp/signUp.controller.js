(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ["MenuService"];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  signUpCtrl.submit = function () {
        signUpCtrl.completed = false;
        signUpCtrl.serverError = false;
        let serviceRequest =  MenuService.getShortName(signUpCtrl.user.menuNumber);
        serviceRequest.then(function (response) {
          signUpCtrl.completed = true;
          MenuService.registeredData = {};
          MenuService.registeredData.menuData = response.data;
          MenuService.registeredData.firstname = signUpCtrl.user.firstname;
          MenuService.registeredData.lastname = signUpCtrl.user.lastname;
          MenuService.registeredData.email = signUpCtrl.user.email;
          MenuService.registeredData.phone = signUpCtrl.user.phone;
        }, function (error) {
          signUpCtrl.serverError = true;
        });
  };
}


})();
