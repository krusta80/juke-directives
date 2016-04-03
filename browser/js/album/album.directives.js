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
