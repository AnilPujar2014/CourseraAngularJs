var cat = angular.module('angularCat', ['ngSanitize']);

cat.controller('CatHomeCtrl', function($scope) {
	console.log('about to bind scroll fx');
	var anil ='Anil';
	$scope.ngDirective = {};
	$scope.ngDirective.ngApp = "Defines the root element of an application.";
	$scope.ngDirective.ngBind = "Binds the content of an HTML element to application data.";
	$scope.ngDirective.ngBindHtml = "<h5>Binds the innerHTML of an HTML element to application data, and also removes dangerous code from the HTML string.</h5>";
	$scope.ngDirective.ngBindTemplate = {};
	$scope.ngDirective.ngBindTemplate.firstName = "Anil";
	$scope.ngDirective.ngBindTemplate.lastName = "Pujar";
	$scope.ngDirective.ngBlurCount = 0;
	$scope.ngDirective.ngChangeCount = 0;
	$scope.ngDirective.ngChangeFunc = function () {
		$scope.ngDirective.ngChangeCount++;
	}
	$scope.ngDirective.ngChecked = true;
	$scope.ngDirective.ngClass = "";
	$scope.ngDirective.ngClickCount = 0;
	$scope.ngDirective.ngClickFunc = function () {
		$scope.ngDirective.ngClickCount++;
	}
	$scope.ngDirective.ngCopy = 0;
	$scope.ngDirective.ngCut = 0;
	$scope.ngDirective.ngdblclick = 0;
	$scope.ngDirective.ngDisabled = "";
	$scope.ngDirective.ngFocus = 0;
	$scope.ngDirective.ngHref = "http://www.w3schools.com";
	$scope.ngDirective.ngIf = 0;
	$scope.ngDirective.ngKeyDown = 0;
	$scope.ngDirective.ngKeyPress = 0;
	$scope.ngDirective.ngKeyUp = 0;
	$scope.ngDirective.ngModel = "ng-model";
	$scope.ngDirective.ngMouseDown = 0;
	$scope.ngDirective.ngMouseDown = 0;
	
	/*$scope.blurCallback = function() {
    alert('Goodbye');
    };*/
	console.log($scope.ngDirective);
});
