//server controller
var mongoose = require('mongoose');
var Surveys = mongoose.model("Surveys");
var bodyParser = require('body-parser');
var User = mongoose.model("User");

module.exports = {

	show: function(req,res) {
		User.find({}, function(err, results) {
    		if(err) {
      		console.log(err);
    		} else {
    			console.log(results)
      		res.json(results);
    		}
  		})
	},
    showOne: function(req,res){
        //console.log("server controller -", req.id);
    Surveys.findOne({_id: req.id}, function(err,results){
        //console.log(req, "req in showOne server controller");
      if(err) {
          console.log("error");
        } else {

          res.send(results);
        }
    })
  },
    addquestion: function(req,res){
    //console.log(req.body, 'req.body'); //same w/ user obj as survey id
    //console.log(req.body.id, 'req.body.id'); //survey id = whole user
    var question = new Surveys({
       question: req.body.question,
       opt_1: req.body.opt_1,
       opt_2: req.body.opt_2,
       opt_3: req.body.opt_3,
       opt_4: req.body.opt_4,
       _user: req.body.id._id
    });
        //console.log(question, 'question'); //is an obj
   
    var newQuestions = [question];
        //console.log(newQuestions, 'newQuestions'); //ok
    var  user = req.body.id; //right! user obj
        //console.log(user, 'user'); //ok

    var newUser = user.questions.push(newQuestions);

        console.log(newUser, 'newUser'); //not right
        
    User.findOne().update({_id: user._id}, newUser)

    question.save(function(err){
       if(err)
       {
           console.log("error");
       }
       else
       {
           res.send({status: "success"});
       }
   })
},
  destroySurvey: function(req,res) {
      //console.log(req, "req in destroy in server controller"); //here and ok
      Surveys.remove({_id: req.id}, function(error) {
        //console.log(req.id, "req.id after remove line"); //I am here debugging working, not refreshing
        })
    }
}