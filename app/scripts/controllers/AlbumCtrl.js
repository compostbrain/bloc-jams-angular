(function () {
        function AlbumCtrl(Fixtures) {
            this.albumData = Fixtures.getAlbum(); 
            this.yo = "go";
        }

    angular
    .module('blocJams')
    .controller('AlbumCtrl',['Fixtures', AlbumCtrl]);
})();
