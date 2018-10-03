// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server!');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ba68cafe1bd760f74077bb2")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ba68f34e96f781404c575cf")
    }, {
        $set: {
            name: 'Tanmay',
            location: 'Vishnu Nagar, Thane, Maharashtra, India'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});