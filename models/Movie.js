var mongodb = require('./mongodb');
    
var Schema = mongodb.mongoose.Schema;

var MovieSchema = new Schema({
    name           : String,
    publish       : Date
  	
});

var Movie = mongodb.mongoose.model("Movie", MovieSchema);

var MovieDAO = function(){};

MovieDAO.prototype.save = function(obj, callback) {
  var instance = new Movie(obj);
  instance.save(function(err){
    callback(err);
  });
};

MovieDAO.prototype.findByIdAndUpdate = function(obj,callback){
  var _id=obj._id;
  delete obj._id;
  Movie.findOneAndUpdate(_id, obj, function(err,obj){
    callback(err, obj);
  });
}


MovieDAO.prototype.findByName = function(name, callback) {
  Movie.findOne({name:name}, function(err, obj){
    callback(err, obj);
  });
};

module.exports = new MovieDAO();