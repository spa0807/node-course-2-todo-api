const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
const {User} = require('./models/user.js');
const {Todo} = require('./models/todo.js');
 
const app = express();
//middlewares are just functions the take req,res as parameters--some are custom while some are from library
app.use(bodyParser.json());

//route for resource (todo) creation

app.post('/todos', (req, res) => {

   let newTodo = new Todo({

    text : req.body.text
   });

   newTodo.save().then((doc) => {

    res.send(doc);
   }, (err) => {
    
    res.status(400).send(err);
   });

});


app.listen(3000, () => {

    console.log('Started on port 3000...make the request');
});



// var newUser = new User({
//     name : 'sparsh upadhyay',
//     email : 'abc@gmail.com'
// });

//newUser.save().then((doc) => {console.log(doc)}, (err) => {console.log(err)});
// var newTodo = new Todo({

//     text : 'sleep tight',
//     completed : false,
//     completedAt : "123"
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//         console.log(err);
// });