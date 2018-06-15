const express = require('express');
var router = express.Router();

var { Register } = require('../models/register');

// => localhost:8080/registers/
router.get('/', (req,res) => {
	Register.find((err, docs) => {
		if (!err) {res.send(docs);}
		else { console.log('Error in Retriving Register :' + JSON.stringify(err, undefined, 2));}
	});
});

module.exports = router;
