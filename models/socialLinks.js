// user model created using sequelize talks to the table user

module.exports = function(sequelize, DataTypes){
    return sequelize.define('social', {
        owner: DataTypes.INTEGER,
        facebook: DataTypes.STRING,
        twitter: DataTypes.STRING,
        instagram: DataTypes.STRING,
        youtube: DataTypes.STRING,
        soundcloud: DataTypes.STRING,
        website: DataTypes.STRING,
        extraLinkOne: DataTypes.STRING,
        extraLinkTwo: DataTypes.STRING,
        extraLinkThree: DataTypes.STRING,               
    }, {

    });
};