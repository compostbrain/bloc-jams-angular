(function () {
        function AlbumCtrl() {
            this.albumData = angular.copy(albumPicasso); 
            this.yo = "go";
        }

    angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
