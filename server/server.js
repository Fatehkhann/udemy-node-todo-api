require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        console.log('Not a valid ID');
    }
    else {
        Todo.findById(req.params.id).then((todo) => {
        res.send({todo});
        }, (e) => {
            res.status(400).send(e);
        });
    }
});

app.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id).then((doc) => {
        if(!ObjectID.isValid(req.params.id)) {
        console.log('Not a valid ID');
    }
        if(!doc) {
            res.status(404).send();
        }
        res.send(doc)
    }).catch( (e) => {
        res.status(400).send(e);
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(req.params.id)) {
        console.log('Not a valid ID');
    }

    if(_.isBoolean(body.completed) && body.completed)
    {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) =>{
        if(!todo) {
            res.status(400).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
})

app.listen(port, () => {
    console.log('Started on port ', port);
});

module.exports = {app};
