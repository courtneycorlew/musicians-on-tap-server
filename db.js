var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 
    'postgres://postgres:Coff33=3n3rgy!@localhost:5432/musicians-on-tap', {
	dialect: 'postgres'
});


sequelize.authenticate().then(
    function() {
        console.log('connected to musicians on tap postgres db');
    },
    function(err) {
        console.log(err);
    }
);
var User = sequelize.import('./models/user')
module.exports= sequelize;