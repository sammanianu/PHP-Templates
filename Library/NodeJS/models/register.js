const mongoose = require('mongoose');
 
var Register = mongoose.model('Register',{
	name: {type: String},
	email: {type: String},
	password: {type: String}
});

module.exports = { Register };