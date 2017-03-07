const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to Mongo server');
    }
    console.log('Successfully connected to Monogo server');


    db.collection('Users').findOneAndDelete({
        _id: ObjectId("58bf07a21950b75cb8bc777b")
    }).then((result) =>{
        console.log(result);
    });

    //db.close();
});