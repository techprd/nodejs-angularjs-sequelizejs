/*
 * GET home page.
 */

var models = require("../models");

exports.index = function(req, res) {
    res.render('index', {
        title : 'Express'
    });
};

exports.gettodos = function(req, res) {
    models.Todo.findAll().then(function(todos){
        res.json(todos);
    });
};

exports.savetodos = function(req, res) {
    models.Todo.create({
        text: req.body.text,
        done: req.body.done                         
    }).then(function(todos){
        res.json(todos.dataValues);
    }).catch(function(error){
        console.log("ops: " + error);
        res.status(500).json({ error: 'error' });
    });
};