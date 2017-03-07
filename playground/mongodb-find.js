const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to Mongo server');
    }
    console.log('Successfully connected to Monogo server');

    // db.collection('Todos').find({
    //     _id: new ObjectId('58b85c3246a06a0728367d2e')
    // }).toArray().then((docs) => {
    //     console.log('Todos: ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to complete operation: ' + err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Total Todos: ');
    //     console.log(count);
    // }, (err) => {
    //     console.log('Unable to complete operation: ' + err);
    // })

    db.collection('Users').find({
        city: 'Lahore'
    }).toArray().then((docs) =>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the requested record');
    })

    //db.close();
});