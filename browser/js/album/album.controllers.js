'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, album) {

  $scope.album = album;

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, allAlbums) {

  $scope.albums = allAlbums;

});
