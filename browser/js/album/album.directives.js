'use strict';

juke.directive('albumList', function (AlbumFactory) {
	return {
		templateUrl: '/js/album/templates/albums.html',
		scope: {
			albums: '='
		},
		link: function(scope) {
			if(!scope.albums) {
				AlbumFactory.fetchAll()
				.then(function(albums) {
					scope.albums = albums;
				})
			}
      	}
	};
});

juke.directive('oneAlbum', function (AlbumFactory, PlayerFactory) {
	return {
		templateUrl: '/js/album/templates/album.html',
		link: function(scope) {
			  scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.album.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };

			  scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			  };

			  scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			  };
      	}
	};
});
