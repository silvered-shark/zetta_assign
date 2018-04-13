var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con_user = mongoose.createConnection("mongodb://sachin:123@ds153853.mlab.com:53853/bookseller");

var userSchema = new Schema({
    name : String,
    email : String,
    mobile  : Number,
    picture : [ { pic_url :String } ],
    gender  : String
});




var users = con_user.model('user', userSchema);

module.exports = users;
