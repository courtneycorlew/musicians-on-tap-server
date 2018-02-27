// user model created using sequelize talks to the table user

module.exports = function(sequelize, DataTypes){
    return sequelize.define('artist', {
        owner: DataTypes.INTEGER,
        about: DataTypes.STRING,
        location: DataTypes.STRING,
        instruments: DataTypes.STRING
    }, {

    });
};