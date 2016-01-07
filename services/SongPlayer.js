(function() {
     function SongPlayer($rootScope, Fixtures) {
          var SongPlayer = {};

          /**
          * @desc Active album object to access songs
          * @type {Object}
          */
           SongPlayer.currentAlbum = Fixtures.getAlbum();

          /**
          * @function getSongIndex
          * @desc Grabs the index of a song
          * @param {Object} song
          */
          var getSongIndex = function getSongIndex(song) {
             return SongPlayer.currentAlbum.songs.indexOf(song);
          };

          /**
          * @desc Active song object from list of songs
          * @type {Object}
          */
          SongPlayer.currentSong = null;

          /**
          * @desc Current playback time (in seconds) of currently playing song
          * @type {Number}
          */
          SongPlayer.currentTime = null;

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
          var setSong = function setSong(song) {
            if (currentBuzzObject) {
                stopSong();
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                   SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });

            SongPlayer.currentSong = song;
          };

          /**
          * @function playSong
          * @desc Plays current song in currentBuzzObject and sets song playing to true
          */
          var playSong = function playSong() {
            currentBuzzObject.play();
            SongPlayer.currentSong.playing = true;
          }

          /**
          * @function stopSong
          * @desc Stops current song in currentBuzzObject and sets song playing to null
          * @param {Object} song
          */
          var stopSong = function stopSong() {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
          };

          /**
          * @function play
          * @desc Either plays a new song or resumes to previous song
          * @param {Object} song
          */
          SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) {
                setSong(song);
                currentBuzzObject.play();
                SongPlayer.currentSong.playing = true;
              } else if (SongPlayer.currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
                     playSong();
                 }
              }
          };

          /**
          * @function pause
          * @desc Pauses any songs currently playing
          * @param {Object} song
          */
          SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             SongPlayer.currentSong.playing = false;
          };

          /**
          * @function previous
          * @desc Plays previous song or stops if index is less than zero.
          * @param {Object} song
          */
          SongPlayer.previous = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;

             if (currentSongIndex < 0) {
                 stopSong();
             } else {
                 var song = SongPlayer.currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
          };

          /**
          * @function next
          * @desc Plays next song or stops if index is greater than album's length.
          * @param {Object} song
          */
          SongPlayer.next = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex++;

             if (currentSongIndex > SongPlayer.currentAlbum.songs.length) {
                 stopSong();
             } else {
                 var song = SongPlayer.currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
             }
          };

          /**
          * @function setCurrentTime
          * @desc Set current time (in seconds) of currently playing song
          * @param {Number} time
          */
          SongPlayer.setCurrentTime = function(time) {
              if (currentBuzzObject) {
                  currentBuzzObject.setTime(time);
              }
          };

          return SongPlayer;
     }

     angular
         .module('blocJamsAngular')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();
