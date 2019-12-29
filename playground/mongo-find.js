const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

if(err){
    console.log('Unable to connect to mongo db due to '+err);
    return;
}
var db = client.db('TodoApp');
console.log('Connection estalished to mongo db..');


var todos = db.collection('Todos');

// var todo = todos.find().toArray().then((docs)=>{
//     console.log(JSON.stringify(docs, undefined, 3));
// },(err)=>{
//     console.log(err)}
//     );;
// //console.log(todo);

var todo = todos.find({_id : new ObjectId('5e07952c9a794f260cfe0033')}).count().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 3));
},(err)=>{
    console.log(err)}
    );;
//console.log(todo);
client.close();
 });

