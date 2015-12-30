// angular.module('blocJamsAngular').controller('LandingCtrl',function($scope){
//
//   function LandingCtrl() {
//     this.heroTitle = "Turn the Music Up!";
//   }
//
//    angular
//        .module('blocJamsAngular')
//        .controller('LandingCtrl', LandingCtrl);
//
// });

(function() {
    function LandingCtrl() {
      this.heroTitle = "Turn the Music Up!";
    }

    angular
        .module('blocJamsAngular')
        .controller('LandingCtrl', LandingCtrl);
})();
