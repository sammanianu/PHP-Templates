var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();
var appRoutes = require('./client/routes/api')(router);
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
app.use('/api', appRoutes);

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



app.listen(3000, function(){
	console.log('server is running on port 3000...');
});