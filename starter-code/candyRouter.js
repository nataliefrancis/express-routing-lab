var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];

//What would need to go into candies
//in order to pass our first test?

//INDEX
router.get('/', function(req,res) {
	res.json(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

// Fill out the rest of the routes here

//SHOW just one
router.get('/:id', function(req,res) {
	index = req.params.id;
	res.json(candies[index-1]);
});

// CREATE and add another INDEX
router.post('/', function(req,res) {
	res.json(req.body); //I think this is redundent, but I am not sure
	candies.push(req.body); // This is the index part
});

//UPDATE
router.put('/:id', function(req, res) {
	index = req.params.id;
	oneCandy = candies[index-1];
	oneCandy.name = req.body.name;
	oneCandy.color= req.body.color;
	res.json(oneCandy);
});

//DELETE
router.delete('/:id', function(req, res) {
	index = req.params.id;
	candies.splice((index-1), 1);
	res.json(candies);
});

module.exports = router;