var Sequelize = require('sequelize');
var sequelize = new Sequelize('musicians-on-tap', 'postgres', 'Coff33=3n3rgy!', {
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