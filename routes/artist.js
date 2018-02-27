var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Artist = sequelize.import('../models/artist');

router.post('/', function(req, res) {
	//variables
        let owner = req.body.user.id;
        let about = req.body.artist.about;
        let instruments = req.body.artist.instruments;
		let location = req.body.artist.location;

	//methods
	Artist
	//objects must match the model 
	.create({ 
           owner: owner,
           about: about,
           instruments: instruments,
		   location: location,
	   })

		.then(
				function createSuccess(artist) {
				//send a response as json
		   		res.json({
		   			artist: artist
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});

router.get('/' , function(req, res) {
	//user variable
	// var owner = req.body.user;
	Artist
	//findAll by owner method
	.findAll()
	.then(
		//success
		function findAllSuccess(data) {
			// console.log(data);
			res.json(data);
		},
		//failure
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});

router.get('/:owner', function(req, res) {
	var data = req.params.owner;
	// console.log(data); here for testing purposes
	Artist
	.findOne({
		where: {owner: data}
	}).then(
		function getSuccess(updateData) {
			res.json(updateData);
		},
		function getError(err) {
			res.send(500, err.message);
		}
	);
});

router.delete('/:owner', function(req, res) {
	var data = req.params.owner;
	// console.log(data); here for testing purposes
	Artist
	.destroy({
		where: {owner: data}
	}).then(
		function getSuccess(updateData) {
			res.json(updateData);
		},
		function getError(err) {
			res.send(500, err.message);
		}
	);
});


router.put('/', function(req, res) {
	let about = req.body.artist.about;
	let instruments = req.body.artist.instruments;
	let location = req.body.artist.location;
	var data = req.body.artist.id;
	
	// console.log(req);
	Artist
	.update(
		{
			about: about,
			instruments: instruments,
			location: location
		},
		{where: {id: data}}
	).then(
		function updateSuccess(updatedLog) {
			res.json(updatedLog);
		},
		function updateError(err) {
			res.send(500, err.message);
		}
	)
});


module.exports = router;