(function() {

  function AlbumCtrl(Fixtures) {
      this.albumData = Fixtures.getAlbum();
  }

  angular
      .module('blocJamsAngular')
      .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);

})();
