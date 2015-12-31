(function() {
     function CollectionCtrl(Fixtures) {
       this.albums = Fixtures.getCollection(12);
     }

     angular
         .module('blocJamsAngular')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();
