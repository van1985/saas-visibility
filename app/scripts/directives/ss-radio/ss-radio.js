'use strict';

angular.module('sassApp')
    .directive('ssradio', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/ss-radio/ss-radio.html',
            scope: {
                items: '=',
                onChange: '=onchange',
                option: '=',
                selected: '='
            },
            controller: function($q, $scope, $attrs) {
                var loadingEvent = $attrs.id || "loading";

                $scope.toggleSelected = function(item){
                    if ($scope.selected === item) {
                        return;
                    }
                    else {
                        $scope.selected = item;
                    }
                    
                    if ($scope.onChange) {
                        $scope.$broadcast(loadingEvent + '-start');
                        var onChange = $scope.onChange(item);
                        $q.when(onChange).then(function() {
                            $scope.$broadcast(loadingEvent + '-end');
                        });
                    }
                };

                $scope.isSelected = function(item){
                    return item === $scope.selected;
                };
            }
        }
    });