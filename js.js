angular.module('myApp'['ui.router']) 

.config(['$stateProvider', '$urlRouteProvider', function($stateProvider ,urlRouterProvider)
{
	$urlRouterProvider.otherwise('/');
	
$stateProvider

.state('/',{
	url :'/home',
	templateUrl : 'home.html'
	
})

.state('about',{
	url :'/about',
	templateUrl : 'content/about.html'
	
})
.state('contact',{
	url :'/contact',
	templateUrl : 'content/contact.html'
	
})


}]);

.controller('myCtrl', function($scope){
	
	$scope.name='my controller'; 
});
