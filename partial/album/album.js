(function() {

  function AlbumCtrl() {

    this.albumData = angular.copy(albumPicasso);

  }

  angular
      .module('blocJamsAngular')
      .controller('AlbumCtrl', AlbumCtrl);
})();
