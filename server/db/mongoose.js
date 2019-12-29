const mongoose = require('mongoose');
const url ='mongodb://localhost:27017/TodoApp';
mongoose.connect(url);

// modeule.exports = {
//     mongoose : mongoose
// }


module.exports = {mongoose}// ES6 syntax