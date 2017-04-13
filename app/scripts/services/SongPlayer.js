(function () {
    function SongPlayer(Fixtures) {
        /**
         * @desc SongPlayer object
         */
        var SongPlayer = {};
        /**
         *@desc currentAlbum to allow access to songs index
         *@type {Object} currentAlbum
         */
        var currentAlbum = Fixtures.getAlbum();
        /**
         *@desc current song tracker
         *@type {Object}
         */

        /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null;
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function (song) {
            if (currentBuzzObject) {
                stopSong(song);
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            SongPlayer.currentSong = song;
        };
        /**
         * @function playSong
         * @desc Plays song and sets playing property of song to true
         * @param {Object} song
         */
        var playSong = function (song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        /**
         * @function stopSong
         * @desc stops song and sets playing property of song to null
         * @param {Object} song
         */
        var stopSong = function (song) {

            currentBuzzObject.stop();
            song.playing = null;
        };

        var getSongIndex = function (song) {
            return currentAlbum.songs.indexOf(song);
        };

        SongPlayer.currentSong = null;
        /**
         *@method play
         *@desc checks if song is current song and plays or pauses depending on conditions
         *@param {Object} song
         */

        SongPlayer.play = function (song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                console.log (song.playing);
                playSong(song);
                console.log (song.playing);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                    console.log (song.playing);
                }
            }
        };

        /**
         *@method pause
         *@desc pauses song
         *@param {Object} song
         */
        SongPlayer.pause = function (song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = null;
        };

        /**
         *@method previous
         *@desc moves to previous song
         */
        SongPlayer.previous = function () {

            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            if (currentSongIndex < 0) {
                stopSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        SongPlayer.next = function () {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            if (currentSongIndex > currentAlbum.songs.length) {

                stopSong(song);

            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
