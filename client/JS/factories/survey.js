//client factory
survey_app.factory("SurveyFactory", function($http){
	var factory = {};
	var surveys = [];
	var users = [];
	
	factory.show = function(callback){
		$http.get("/surveys").success(function(output){ //to routes
			//console.log(output, "show output in factory"); //good
			users = output;
			callback(users);
		});
	};
	factory.showOneSurvey = function(info, callback){
		//console.log(info,"info in factory"); //id good
		info={id:info}; //console.log(info, "info again"); //id object
		$http.post("/surveys/find", info).success(function(output){ 
			//console.log(output, "showOne output in factory"); //ok works right here.
			callback(output);
		});
	};
  	factory.create = function(info, callback){
  			console.log(info, 'info in factory');
		$http.put('/surveys', info).success(function(rtnd_data){
				console.log(rtnd_data, 'create survey rtn data'); //
			callback(rtnd_data);
		}); 
	};
	factory.destroySurvey = function(info, callback){ 
		//console.log(info, "destroySurvey data in factory"); //good made it here
		info={id:info};
		$http.post("/surveys/destroy", info).success(function(){ //
			console.log(info, "Destroy Successful");
			callback();
		});
	}
	factory.createUser = function(info, callback){
		console.log("info: ", info); //
		$http.post('/user/createUser', info).success(function(rtnd_data){ //
			//console.log(rtnd_data, "rtrnd data"); //should be response - is name
			callback(rtnd_data);
		}); 
	};
	return factory;
});