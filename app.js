angular.module('blocJamsAngular', ['ui.bootstrap','ui.utils','ui.router']);
// angular.module('blocJamsAngular', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('blocJamsAngular').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: 'partial/landing/landing.html'
    })
    .state('album', {
        url: '/album',
        controller: 'AlbumCtrl as album',
        templateUrl: 'partial/album/album.html'
    })
    .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: 'partial/collection/collection.html'
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('blocJamsAngular').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
