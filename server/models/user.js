
const {mongoose} = require('../db/mongoose.js');
var User = mongoose.model('User', {

    name : {
        type : String,
        required : true,
        trim :true,
        minlength : 1   
     },
    email : {
        type : String,
        required : true,
        trim :true,
        minlength : 1   
    }

});

module.exports = {User};