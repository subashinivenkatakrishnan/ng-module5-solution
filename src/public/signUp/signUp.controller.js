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
    console.log(signUpCtrl.user.firstname);
    console.log(signUpCtrl.user.lastname);
      console.log(signUpCtrl.user.email);
        console.log(signUpCtrl.user.phone);
        console.log(signUpCtrl.user.menuNumber);
        let serviceRequest =  MenuService.getShortName(signUpCtrl.user.menuNumber);
        serviceRequest.then(function (response) {
          console.log(response);
          signUpCtrl.completed = true;
          MenuService.registeredData = response.data;
        }, function (error) {
          signUpCtrl.serverError = true;
        });

  };
}


})();
