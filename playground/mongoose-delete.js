const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('4878578m4cc4ny8t74c3').then((doc) => {
    console.log(doc);
})
 