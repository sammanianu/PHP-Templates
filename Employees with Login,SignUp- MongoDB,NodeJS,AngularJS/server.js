var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var User = require('./client/models/User');
mongoose.connect('mongodb://localhost/librarySystem');
var  Employee = mongoose.model('Employee' , mongoose.Schema({
	name:String,
	dept:String,
	area:String,
	status:String,
	contact:String,
	salary:String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/librarySystem' , function(req,res){
	Employee.find(function(err, librarySystem){
		if (err)
			res.send(err);
		res.json(librarySystem);
	});
});

app.get('/api/librarySystem/:id' , function(req,res){
	
	Employee.findOne({_id:req.params.id}, function(err, employee){
		if (err)
			res.send(err);
		res.json(employee);
	});
});

app.post('/api/librarySystem' , function(req,res){
	Employee.create(req.body, function(err, librarySystem){
		if (err)
			res.send(err);
		res.json(librarySystem);
	});
});

app.delete('/api/librarySystem/:id' , function(req,res){
	
	Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
		if (err)
			res.send(err);
		res.json(employee);
	});
}); 
 
 app.put('/api/librarySystem/:id' , function(req,res){
	var query = {
		name:req.body.name,
		dept:req.body.dept,
		area:req.body.area,
		status:req.body.status,
		contact:req.body.contact,
		salary:req.body.salary
	};
	Employee.findOneAndUpdate({_id:req.params.id}, query,  function(err, employee){
		if (err)
			res.send(err);
		res.json(employee);
	});
}); 


//testing
app.post('/users', function(req, res){
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	if(req.body.username==null || req.body.username == '' || req.body.password==null || req.body.password == '' || req.body.email==null || req.body.email == ''){
		res.send('Ensure username, email and password were provided');
	}else{
		user.save(function(err){
		if (err){
			res.send("Username or Email already exists!");
		}else{
			res.send('user created!');
		}
	});
	}
	
});

app.listen(3000, function(){
	console.log('server is running on port 3000...');
});