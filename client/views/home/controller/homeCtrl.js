app.controller('homeCtrl', ['$scope', '$rootScope', '$http','$timeout',
 function ($scope,$rootScope,$http,$timeout) {
	
       $scope.home = "Online Video Editor";


       $scope.mute_audio = function(){
       		//alert("Mute Audio");
       		$http({method: 'get', url: '/video/muteaudio'})
			.success(function(data){
				alert(data)

			})
			.error(function(data){

			})
       }

       $scope.remove_video = function(){
       		$http({method: 'get', url: '/video/removevideo'})
			.success(function(data){
				alert(data)

			})
			.error(function(data){

			})
       }

       $scope.crop_video = function(){
       		$http({method: 'get', url: '/video/cropvideo'})
			.success(function(data){
				alert(data)

			})
			.error(function(data){

			})
       }

}]);