(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = [];
function SignUpController() {
  var signUpCtrl = this;
  signUpCtrl.submit = function () {
    signUpCtrl.completed = true;
    console.log(signUpCtrl.user.firstname);
    console.log(signUpCtrl.user.lastname);
      console.log(signUpCtrl.user.email);
        console.log(signUpCtrl.user.phone);
        console.log(signUpCtrl.user.menuNumber);
  };
}


})();
