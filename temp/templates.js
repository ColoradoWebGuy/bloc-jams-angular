angular.module('blocJamsAngular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/pages/index.html',
    "<!DOCTYPE html><html ng-app=blocJams><head lang=en><meta charset=UTF-8><title>Bloc Jams Angular</title><meta name=viewport content=\"width=device-width,initial-scale=1\"><link rel=stylesheet href=\"http://fonts.googleapis.com/css?family=Open+Sans:400,800,600,700,300\"><link rel=stylesheet href=http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css><link rel=stylesheet href=/styles/normalize.css><link rel=stylesheet href=/styles/main.css><link rel=stylesheet href=/styles/landing.css><link rel=stylesheet href=/styles/collection.css><link rel=stylesheet href=/styles/album.css><link rel=stylesheet href=/styles/player_bar.css></head><body><nav class=navbar><a ui-sref=\"/\" class=logo><img src=assets/images/bloc_jams_logo.png alt=\"bloc jams logo\"></a><div class=links-container><a ui-sref=collection class=navbar-link>collection</a></div></nav><ui-view></ui-view><script src=https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js></script><script src=/scripts/app.js></script></body></html>"
  );


  $templateCache.put('app/templates/player_bar.html',
    "<section class=player-bar><div class=container><div class=\"control-group main-controls\"><a class=previous><span class=ion-skip-backward></span></a> <a class=play-pause><span class=ion-play></span></a> <a class=next><span class=ion-skip-forward></span></a></div><div class=\"control-group currently-playing\"><h2 class=song-name></h2><h2 class=artist-song-mobile></h2><h3 class=artist-name></h3><div class=seek-control><div class=seek-bar><div class=fill></div><div class=thumb></div></div><div class=current-time></div><div class=total-time></div></div></div><div class=\"control-group volume\"><span class=\"icon ion-volume-high\"></span><div class=seek-bar><div class=fill></div><div class=thumb></div></div></div></div></section>"
  );


  $templateCache.put('partial/album/album.html',
    "<main class=\"album-view container narrow\"><section class=clearfix><div class=\"column half\"><img src=app/assets/images/album_covers/01.png class=album-cover-art></div><div class=\"album-view-details column half\"><h2 class=album-view-title>The Colors</h2><h3 class=album-view-artist>Pablo Picasso</h3><h5 class=album-view-release-info>1909 Spanish Records</h5></div></section><table class=album-view-song-list><tr class=album-view-song-item ng-mouseover=\"hovered = true\" ng-mouseleave=\"hovered = false\"><td class=song-item-number><span ng-show=\"!playing && !hovered\">1</span> <a class=album-song-button ng-show=\"!playing && hovered\"><span class=ion-play></span></a> <a class=album-song-button ng-show=playing><span class=ion-pause></span></a></td><td class=song-item-title>Blue</td><td class=song-item-duration>3:31</td></tr></table></main><ng-include src=\"'/templates/player_bar.html'\"></ng-include>"
  );


  $templateCache.put('partial/collection/collection.html',
    "<section class=\"album-covers container clearfix\"><div class=\"collection-album-container column fourth\"><img src=\"app/assets/images/album_covers/01.png\"><div class=\"collection-album-info caption\"><p><a class=album-name ui-sref=album>The Colors</a><br><a ui-sref=album>Pablo Picasso</a><br>X songs<br></p></div></div></section>"
  );


  $templateCache.put('partial/landing/landing.html',
    "<section class=hero-content><h1 class=hero-title>Turn the music up!</h1></section><section class=\"selling-points container clearfix\"><div class=\"point column third\"><span class=ion-music-note></span><h5 class=point-title>Choose your music</h5><p class=point-description>The world is full of music; why should you have to listen to music that someone else chose?</p></div><div class=\"point column third\"><span class=ion-radio-waves></span><h5 class=point-title>Unlimited, streaming, ad-free</h5><p class=point-description>No arbitrary limits. No distractions.</p></div><div class=\"point column third\"><span class=ion-iphone></span><h5 class=point-title>Mobile enabled</h5><p class=point-description>Listen to your music on the go. This streaming service is available on all mobile platforms.</p></div></section>"
  );

}]);
