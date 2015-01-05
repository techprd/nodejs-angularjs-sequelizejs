"use strict";

module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        text : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        done : {
            type : DataTypes.BOOLEAN,
        }
    });

    return Todo;
};