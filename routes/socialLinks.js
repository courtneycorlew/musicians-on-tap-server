var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Social = sequelize.import('../models/socialLinks');

router.post('/', function(req, res) {
	//variables
        let owner = req.body.user.id;
        let facebook = req.body.social.facebook;
        let twitter = req.body.social.twitter;
        let instagram = req.body.social.instagram;
        let youtube = req.body.social.youtube;
        let soundcloud = req.body.social.soundcloud;
        let website = req.body.social.website;
        let extraLinkOne = req.body.social.extraLinkOne;
        let extraLinkTwo = req.body.social.extraLinkTwo;
        let extraLinkThree = req.body.social.extraLinkThree;

	//methods
	Social
	//objects must match the model 
	.create({ 
           owner: owner,
           facebook: facebook,
           twitter: twitter,
           instagram: instagram,
           youtube: youtube,
           soundcloud: soundcloud,
           website: website,
           extraLinkOne: extraLinkOne,
           extraLinkTwo: extraLinkTwo,
           extraLinkThree: extraLinkThree
	   })

		.then(
				function createSuccess(social) {
				//send a response as json
		   		res.json({
		   			social:social
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});

router.get('/:owner', function(req, res) {
	var data = req.params.owner;
	// console.log(data); here for testing purposes
	Social
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
	Social
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

// 
router.put('/', function(req, res) {
		let facebook = req.body.social.facebook;
        let twitter = req.body.social.twitter;
        let instagram = req.body.social.instagram;
        let youtube = req.body.social.youtube;
        let soundcloud = req.body.social.soundcloud;
        let website = req.body.social.website;
        let extraLinkOne = req.body.social.extraLinkOne;
        let extraLinkTwo = req.body.social.extraLinkTwo;
        let extraLinkThree = req.body.social.extraLinkThree;
		var data = req.body.social.id;
	
	// console.log(req);
	Social
	.update(
		{
		facebook: facebook,
           twitter: twitter,
           instagram: instagram,
           youtube: youtube,
           soundcloud: soundcloud,
           website: website,
           extraLinkOne: extraLinkOne,
           extraLinkTwo: extraLinkTwo,
           extraLinkThree: extraLinkThree
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