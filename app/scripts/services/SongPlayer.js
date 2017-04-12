(function() {
    function SongPlayer() {
        /**
        * @desc SongPlayer object
        */
        var SongPlayer = {};
        /**
        *@desc current song tracker
        *@type {Object}
        */
        let currentSong = null,
            /**
             * @desc Buzz object audio file
             * @type {Object}
             */
            currentBuzzObject = null;
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
        };
        /**
         * @function playSong
         * @desc Plays song and sets playing property of song to true
         */
        const playSong = function() {
            currentBuzzObject.play();
            song.playing = true;
        };
        /**
        *@method play
        *@desc checks if song is current song and plays or pauses depending on conditions
        *@param {Object} song
        */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);

                playSong();
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong();
                }
            }
        };

        /**
        *@method pause
        *@desc pauses song
        *@param {Object} song
        */
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing - false;
        };
        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
