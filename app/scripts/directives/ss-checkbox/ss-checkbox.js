'use strict';

angular.module('sassApp')
    .directive('sscheckbox', function(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'scripts/directives/ss-checkbox/ss-checkbox.html',
            scope: {
                items: '=',
                onToggle: '=ontoggle',
                option: '='
            },
            controller: function($q, $scope, $attrs) {
                $scope.toggleSelected = function(item){
                    item.selected = !item.selected;

                    var loadingEvent = $attrs.id || "loading";
                    
                    if ($scope.onToggle) {
                        $scope.$broadcast(loadingEvent + '-start');
                        var onToggle = $scope.onToggle(item);
                        $q.when(onToggle).then(function() {
                            $scope.$broadcast(loadingEvent + '-end');
                        });
                    }
                };
                $scope.isSelected = function(item){
                    return item.selected;
                };
            }
        }
    })
    .directive('sscheckboxoption', function($compile){
        return{
            restrict: 'E',
            replace: true,
            scope: {
                item: '=',
                template: '='
            },
            template: '<span class="option-element" ng-bind-html="item.name"></span>',//default option template
            link: function(scope, tEl, tAttrs){
                if (scope.template){
                    var el = $compile(scope.template)(scope);
                    tEl.replaceWith(el);
                }
            }
        }
    });