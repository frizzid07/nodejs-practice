// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server!');

    // db.collection('Todos').insertOne({
    //     text: 'Random todo entry',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to Insert todo!');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Tanmay Bhagwat',
    //     age: 19,
    //     location: 'Thane, Maharashtra, India'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to Insert todo!');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});