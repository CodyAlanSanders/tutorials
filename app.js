function()   {
	var app = angular.module ('tutorialLinks', []);
	
	app.controller('TutorialController', ['$http', function($http) {
		var tutorial = this;
		tutorial.links = [];
		
		$http.get('/tutorials.json').success(function(data){
			


})();