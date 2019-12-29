const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err){
        console.log('Unable to connect to mongo db due to '+err);
        return;
    }
    var db = client.db('TodoApp');
    console.log('Connection estalished to mongo db..');

    db.collection('Users').updateMany({
        name : 'utkarsh'
    }, {

        $set :{
            age : 12
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
    
});