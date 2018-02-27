// user model created using sequelize talks to the table user
module.exports = 
function(sequelize, DataTypes){ 
    return sequelize.define('user', {
        username: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                }
            },
        name: DataTypes.STRING,
        passwordhash: {
                type: DataTypes.STRING
            }
    });
};



// username: 
// name: 
// passwordhash: