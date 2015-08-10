//client controller
survey_app.controller("SurveyController", function($scope, SurveyFactory){

	function getAllUsers(){
		SurveyFactory.show(function(users){
			$scope.users = users;
		})
	}

	SurveyFactory.show(function(data){
			//console.log("show data: ", data); //good obj here
		$scope.users = data;
	})

	$scope.showOne=function(data){
			//console.log("show one data: ", data); //good data-just id
			SurveyFactory.showOneSurvey(data, function(data){
				//console.log(data,"data showOne in client controller callback"); //good here
				$scope.survey = data;
				console.log($scope.survey, "scope after data"); //good here too
			})
	};

	$scope.create = function(new_survey){
		new_survey.id = $scope.user; //new line - puts user obj into survey id
			//console.log(new_survey, "new_survey into the client controller"); //ok
		SurveyFactory.create(new_survey, function(survey){
			console.log(survey, "callback client controller" ); //
		getAllUsers();
		});
	};
	$scope.destroySurvey = function(id){
		//console.log(id, "Controller - destroy by id step 1"); //good
		SurveyFactory.destroySurvey(id, function(){
			getAllUsers(function(users){
				//console.log("Back to controller, getAllUsers");
				$scope.users = users;
			});
		});
	};
	$scope.createUser = function(new_user){
			//console.log(new_user, "new_user into the client controller"); //ok
		SurveyFactory.createUser(new_user, function(user){
			//console.log(user, "user callback client controller" ); //
			$scope.user = user;
			//console.log($scope.user, 'scope.user');
			getAllUsers();
		
		});	
	};
});