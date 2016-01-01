(function() {
     function SongPlayer() {
          var SongPlayer = {};

          /**
          * @desc Plain old javascript object audio file
          * @type {Object}
          */
          var currentSong = null;

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
          * @desc Plays current song in currentBuzzObject and sets song playing to true
          */
          var playSong = function() {
            currentBuzzObject.play();
            song.playing = true;
          }

          /**
          * @function play
          * @desc Either plays a new song or resumes to previous song
          * @param {Object} song
          */
          SongPlayer.play = function(song) {
             if (currentSong !== song) {
                setSong(song);
                currentBuzzObject.play();
                currentSong.playing = true;
              } else if (currentSong === song) {
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
             currentBuzzObject.pause();
             song.playing = false;
          };

          return SongPlayer;
     }

     angular
         .module('blocJamsAngular')
         .factory('SongPlayer', SongPlayer);
 })();
