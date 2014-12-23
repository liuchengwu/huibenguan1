var Movie = require('./../models/Movie.js');


exports.movieAdd = function(req, res) {
Movie.save({name:"liutoday",publish:new Date()},function(err){
	if(err)
	res.send('this causes of '+err);
});
res.send('its ok to insert a record in the mongodb');

};

exports.doMovieAdd = function(req, res) {
    console.log(req.body.content);
    var json = req.body.content;
    // //var json = JSON.parse(req.body.content);

    if(json._id){//update

    } else {//insert
        Movie.save(json, function(err){
            if(err) {
                res.send({'success':false,'err':err});
            } else {
                res.send({'success':true});
            }
        }); 
    }
};


exports.movieJSON = function(req, res) {
    Movie.findByName(req.params.name,function(err, obj){
        res.send(obj);
    });
}


