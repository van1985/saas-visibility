'use strict';

/**
 * @ngdoc function
 * @name sassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sassApp
 */
angular.module('sassApp')
  .controller('MainCtrl', function ($scope, $q) {
    var params = {
    	checkboxItems: [
	    	{
	    		name: 'Installation A',
	    		price: 29.99,
	    		selected: true,
	    		type: 'INSTALLATION',
	    		visible: true,
	    	},
	    	{
	    		name: 'Installation B',
	    		price: 29.99,
	    		type: 'INSTALLATION',
	    		visible: false,
	    	},
	    	{
	    		name: 'Delivery',
	    		price: 14.99,
	    		type: 'DELIVERY',
	    		visible: true,
	    	},
	    	{
	    		name: 'Gas Hook Up',
	    		price: 9.99,
	    		type: 'GH',
	    		visible: true,
	    	}
	    ],
	    option: '<span class="option-name" ng-bind-html="item.name"></span><span class="option-price">${{item.price}}</span>'
    };

    $scope.showAll = function() {
    	angular.forEach($scope.checkboxItems, function(item){
    		item.visible = true;
    	});
    };

    $scope.onlyDelivery = function() {
    	angular.forEach($scope.checkboxItems, function(item){
    		item.visible = (item.type === 'DELIVERY') ? true : false;
    	});
    };

    $scope.ghAndInstallation = function() {
    	angular.forEach($scope.checkboxItems, function(item){
    		item.visible = (item.type === 'INSTALLATION' || item.type === 'GH' ) ? true : false;
    	});
    };

    $scope.checkboxItems = params.checkboxItems;
    $scope.option = params.option;

    $scope.onToggle = function(item){
    	var def = $q.defer();

    	console.log(item);
    	def.resolve();

    	return def.promise;
    };

  });
