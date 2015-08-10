//survey model
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SurveySchema = mongoose.Schema({
	question: String,
	opt_1: String,
	opt_2: String,
	opt_3: String,
	opt_4: String,
	date_entered: { type: Date, default: Date.now },
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Surveys', SurveySchema);

var UserSchema = mongoose.Schema({
	name: String,
	questions: [{type: Schema.Types.ObjectId, ref: 'Surveys'}]
});

mongoose.model('User', UserSchema);