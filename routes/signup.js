var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', function(req,res) {
    // when we post to api user, it wil want a user object in the body
    let username = req.body.user.username;
    let name = req.body.user.name
    let pass = req.body.user.password; //TODO: hash this password - HASH = not human readble

    // Match the model we create above
    // Sequelize - take the user model and go out to the db and create this:
    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10),
        name: name
    }).then (
        // Sequelize is going to return the object it created from db
        function createSuccess(user) {
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            // Successful get this:
            res.json({
                user: user,
                message: 'create',
                sessionToken : token
            });
        },
        function createError(err){
            res.send(500, err.message);
        }
    );
});


router.get('/' , function(req, res) {
	//user variable
	// var owner = req.body.user;
	User
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


router.get('/:id', function(req, res) {
	var data = req.params.id;
	// console.log(data); here for testing purposes
	User
	.findOne({
		where: {id: data}
	}).then(
		function getSuccess(updateData) {
			res.json(updateData);
		},
		function getError(err) {
			res.send(500, err.message);
		}
	);
});
router.delete('/:id', function(req, res) {
	var data = req.params.id;
	// console.log(data); here for testing purposes
	User
	.destroy({
		where: {id: data}
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
    let username = req.body.user.username;
    let name = req.body.user.name
	let data = req.body.user.id
	// console.log(req);
	User
	.update(
		{
			name: name,
            username: username,

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