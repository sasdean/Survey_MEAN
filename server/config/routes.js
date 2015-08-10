//server/config/routes.js

var survey = require("../controllers/survey.js");  //<--server controllers
var user = require("../controllers/user.js");  //<--server controllers
var bodyParser = require("body-parser");

module.exports = function(app){				//calling server controller modules
	
	app.get("/surveys", function(req,res){
		console.log(req.body, "req in show, routes"); //empty object
		survey.show(req,res); //back to factory
	});
	app.post("/surveys/find", function(req,res){
		//console.log(req.body, "req.body showOne in routes"); //good id only
		survey.showOne(req.body, res);
		//console.log(req.body, "info in showOne route"); //
	});
	/*app.post("/surveys", function(req,res){
		//console.log(req.body,"in routes to create"); //
		survey.create(req,res);
	});*/
	app.put('/surveys', function (req,res){
		//console.log(req.body, "req.body routes"); //user object inside survey obj
		survey.addquestion(req,res);
	});
	app.post('/surveys/destroy', function(req, res){
		//console.log(req.body, "got to routes to destroy"); //made it here w/ data
		survey.destroySurvey(req.body, res); 
		//console.log(req.body,"routes (req.body) callback");//good here
	});
	app.post("/user/createUser", function(req,res){
		//console.log(req,"**********in routes to create user"); //
		user.createUser(req,res); //
		//console.log(res, "response"); //ok
	});
}