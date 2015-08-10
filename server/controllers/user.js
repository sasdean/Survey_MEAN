//user  - server controller
var mongoose = require('mongoose');
var User = mongoose.model("User");
var bodyParser = require('body-parser');

module.exports = {

  createUser: function(req,res){
    var new_user = new User(req.body);
    //console.log(req.body, "req.body in createUser server controller"); //name
      new_user.save(function(err,results){
          if(err){
            console.log(err);
          }
          else{
            console.log(new_user, "******** success creating user"); //ok
            res.send(results);
            //console.log(results, "results") //correct
          }
      });
  }
}