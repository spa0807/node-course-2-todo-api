//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

if(err){
    console.log('Unable to connect to mongo db due to '+err);
    return;
}
var db = client.db('TodoApp');
console.log('Connection estalished to mongo db..');

// db.collection('Todos').insertOne({
//         text : 'Something to do.',
//         completed : false
// }, (err, result) => {
//     if(err){
//         console.log(`unable to insert data due to ${err}`);
//         return;
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });

//Insert new doc into users (name, age, location)

let users = db.collection('Users');

users.insertOne({ name : 'utkarsh', age : 69, location : 'pune'}, (err, result) => {

    if(err){
        console.log(`unale to insert into users collection due to ${err}`);
        return;
    }
    console.log(typeof result.ops[0]._id);
    console.log(JSON.stringify(result.ops[0]._id, undefined, 3));
    console.log(result.ops[0]._id.getTimestamp());



});

client.close();


});

