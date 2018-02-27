var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Videos = sequelize.import('../models/videos');

router.post('/', function(req, res) {
	//variables
        let owner = req.body.user.id;
        let videoOne = req.body.videos.videoOne
        let videoTwo =  req.body.videos.videoTwo
        let videoThree = req.body.videos.videoThree
        let videoFour = req.body.videos.videoFour
        let videoFive = req.body.videos.videoFive

	//methods
	Videos
	//objects must match the model 
	.create({ 
           owner: owner,
           videoOne: videoOne,
           videoTwo: videoTwo,
           videoThree: videoThree,
           videoFour: videoFour,
           videoFive: videoFive
	   })

		.then(
				function createSuccess(videos) {
				//send a response as json
		   		res.json({
		   			videos: videos
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
	Videos
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
	Videos
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
	Videos
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
	let videoOne = req.body.videos.videoOne
    let videoTwo =  req.body.videos.videoTwo
    let videoThree = req.body.videos.videoThree
    let videoFour = req.body.videos.videoFour
    let videoFive = req.body.videos.videoFive
    var data = req.body.videos.id;

	
	// console.log(req);
	Videos
	.update(
		{
		videoOne: videoOne,
           videoTwo: videoTwo,
           videoThree: videoThree,
           videoFour: videoFour,
           videoFive: videoFive
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