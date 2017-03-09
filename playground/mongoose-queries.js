const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58c18b7000cebf2bacb413bb';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos :", todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo :', todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo :', todo);
// });

User.findById(id).then((user) => {
    if(!user) {
        console.log('User does not exist!');
    }
    console.log('User :', JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(e));