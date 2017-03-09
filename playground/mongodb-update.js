const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to Mongo server');
    }
    console.log('Successfully connected to Monogo server');

    db.collection('Todos').findOneAndUpdate({
        _id: ObjectId("58beff441950b75cb8bc75c3")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOrignal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    //db.close();
});