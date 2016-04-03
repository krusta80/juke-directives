'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    template: '<album-list albums="albums"></album-list>',
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    templateUrl: '/js/album/templates/album.html',
    controller: 'AlbumCtrl',
    resolve: {
      theAlbum: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });
});
