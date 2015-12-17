(function() {
     function config($stateProvider, $locationProvider) {

       // this configures the application's paths
       $locationProvider // ( part of Angular's core )
         .html5Mode({
             // the hashbang URLs are now disabled
             enabled: true,
             // this is unrelated to the hashbang, but
             //    it is a way to avoid a common $location error
             requireBase: false
         });

        // will determine a number of properties for a state
        //  (its name, URL route, controller, and template)
        $stateProvider // ( a component of UI-Router )
          .state('landing', {
              url: '/',
              templateUrl: '/templates/landing.html'
          }) // chaining calls
          .state('album', {
              url: '/album',
              templateUrl: '/templates/album.html'
          });
     }

     angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();
