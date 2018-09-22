// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server!');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Take a shower'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Take a shower'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Tanmay'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5ba6901a82c6b428ec953a36")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});