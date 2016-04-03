'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    template: '<album-list albums="albums"></album-list>',
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    template: '<one-album albumId="album._id"></one-album>',
    controller: 'AlbumCtrl',
    resolve: {
      album: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });
});
