// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/liu123');
exports.mongoose = mongoose;
