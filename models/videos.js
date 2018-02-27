// user model created using sequelize talks to the table user

module.exports = function(sequelize, DataTypes){
    return sequelize.define('videos', {
        owner: DataTypes.INTEGER,
        videoOne: DataTypes.STRING,
        videoTwo: DataTypes.STRING,
        videoThree: DataTypes.STRING,
        videoFour: DataTypes.STRING,
        videoFive: DataTypes.STRING
    }, {

    });
};