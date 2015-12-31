(function() {
    function LandingCtrl() {
      this.heroTitle = "Turn the Music Up!";
    }

    angular
        .module('blocJamsAngular')
        .controller('LandingCtrl', LandingCtrl);
})();
