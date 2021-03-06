(function() {
     function seekBar($document) {

       var calculatePercent = function calculatePercent(seekBar, event) {
         var offsetX = event.pageX - seekBar.offset().left;
         var seekBarWidth = seekBar.width();
         var offsetXPercent = offsetX / seekBarWidth;
         offsetXPercent = Math.max(0, offsetXPercent);
         offsetXPercent = Math.min(1, offsetXPercent);
         return offsetXPercent;
       };

       return {
         templateUrl: 'directives/seek-bar/seek-bar.html',
         replace: true,
         restrict: 'E',
         scope: {
           onChange: '&'
         },
         link: function(scope, element, attributes) {
           scope.value = 0;
           scope.max = 100;

           var seekBar = $(element);

           attributes.$observe('value', function(newValue) {
               scope.value = newValue;
           });

           attributes.$observe('max', function(newValue) {
               scope.max = newValue;
           });

           var percentString = function percentString() {
               var value = scope.value;
               var max = scope.max;
               var percent = value / max * 100;
               return percent + "%";
           };

           scope.fillStyle = function fillStyle() {
               return {width: percentString()};
           };

           scope.onClickSeekBar = function onClickSeekBar(event) {
             var percent = calculatePercent(seekBar, event);
             scope.value = percent * scope.max;
             notifyOnChange(scope.value);
           };

           scope.trackThumb = function trackThumb() {
               $document.bind('mousemove.thumb', function(event) {
                   var percent = calculatePercent(seekBar, event);
                   scope.$apply(function() {
                       scope.value = percent * scope.max;
                       notifyOnChange(scope.value);
                   });
               });

               $document.bind('mouseup.thumb', function() {
                   $document.unbind('mousemove.thumb');
                   $document.unbind('mouseup.thumb');
               });
           };

           var notifyOnChange = function(newValue) {
               if (typeof scope.onChange === 'function') {
                   scope.onChange({value: newValue});
               }
           };

           scope.thumbStyle = function thumbStyle() {
               return {left: percentString()};
           };
         }
       };

     }

     angular
         .module('blocJamsAngular')
         .directive('seekBar', ['$document', seekBar]);
 })();
