var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', ['$scope','$http', 
	function($scope,$http){
		console.log("Hello World from controller");
		
		var refresh = function(){
			$http.get('/petetions').success(function(response){
			$scope.petetions = response.slice(0, 4);
			$scope.petetion = ""; 
			});
		};
		var refreshAgain = function(){
			$http.get('/petetions').success(function(response){
			$scope.petetions = response.slice(0, $scope.petetions.length + 2);
			$scope.petetion = ""; 
			});
		};
		
		refresh();

		$scope.addPetetion = function(){
			$http.post('/petetions', $scope.petetion).success(function(response){
				console.log(response);
				refresh();
			});

		};
		
		jQuery(
		  function($)
		  {
		    $('.right').bind('scroll', function()
		                              {
		                                if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
		                                {
		                                  refreshAgain();
		                                }
		                              })
		  }
		);
		$scope.remove = function(id) {
			console.log(id);
			$http.delete('/petetions/' + id).success(function(response){
				refresh();
			});
		};
	}]);
