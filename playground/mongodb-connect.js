//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to Mongo server');
    }
    console.log('Successfully connected to Monogo server');

    // db.collection('Todos').insertOne({
    //     'text': 'Aorta is not breathing yet',
    //     'completed': false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     'user': 'Fatehkhann',
    //     'pw': '12345'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to add user', err);
    //     }
    //     console.log('User added successfully', JSON.stringify(result.ops, undefined, 2));
    // })
    // db.close();
});