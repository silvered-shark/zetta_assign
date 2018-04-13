var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con_user = mongoose.createConnection("mongodb://sachin:123@ds055812.mlab.com:55812/zettabyte"); //connection with mlab


var userSchema = new Schema({
    name : String,
    email : String,
    mobile  : Number,
    gender  : String,
    pictures : [{url:String}],
    
});


var users = con_user.model('user', userSchema);


//to find details of single user
router.get('/users/:id',function(req,res) {
	    //console.log(req.params.id);
      users.findOne({_id: req.params.id},function(err,user){
      
      	if(err){
      		res.send("User does not exist");
      	}
      	res.json(user);
      });
});

//to get details of all users 
router.get('/users',function(req,res) {
	    //console.log(req.params.id);
      users.find(function(err,user){
      
         //res.send(req.param.id);

      	if(err){
      		res.send("User does not exist");
      	}
      	res.json(user);
      });
});



//to create a single user in a database
router.post('/users',function(req,res) {
	
   
	var payload = {
		    "name": req.body.name,
   "email": req.body.email,
    "mobile": req.body.mobile,
    "gender": req.body.gender,
    "pictures": [{"url":req.body.pictures[0].url}],  
    
	};
	
    console.log(payload);
        
      users.create(payload,function(err,user){
      	 //res.send(req.param.id);
      	if(err){
      		res.send(err);
      	}
      	res.sendStatus(201);
      });
  
});

//to delete a user
router.delete('/users/:id',function(req,res) {
	
      users.remove({_id: req.params.id},function(err,user){
      	
         //res.send(req.param.id);
      	if(err){
      		res.send(err);
      	}
      	res.sendStatus(200);
      	res.json(user);
      });
});

//to update a user
router.put('/users/:id',function(req,res) {
	
		var payload = {
			 "name": req.body.name,
   "email": req.body.email,
    "mobile": req.body.mobile,
    "gender": req.body.gender
        };

      if(payload.name==" " || payload.email==" " || payload.mobile==" " || payload.gender==" "){
      	res.status(400);
      	res.json({
      		"error":"Incorrect Data"
      	});
      }

      else{
	      users.update({_id: req.params.id},payload,function(err,user){
	      	
	         //res.send(req.param.id);
	      	if(err){
	      		res.send(err);
	      	}
	      	res.sendStatus(200);
	      	res.json(user);
	      });
      }
});

//to get all pictures of a single user
router.get('/users/pictures/:id',function(req,res){
 users.findOne({_id: req.params.id},function(err,user){
      
      	if(err){
      		res.send("User does not exist");
      	}
      	user.pictures.forEach(function(entry) {
             console.log(entry);  //output on the console each user's url
            });
      });
});

//to push new picture or update the old picture in the user's pictures
router.put('/users/pictures/:id',function(req,res){
  
        var payload = {
           "url":req.body.url
        };
      
        users.update({_id: req.params.id},{"$push":{"pictures":payload}},function(err,user){
       
      	if(err){
      		res.send("User does not exist");
      	}
      	res.json(user);
      });

});

//to delete a picture from user's pictures
router.delete('/users/pictures/:id/:pic_id',function(req,res) {
	 
	 users.update({_id: req.params.id},{ $pull :{"pictures":{_id:req.params.pic_id}}},function(err,user){
       
      	if(err){
      		res.send("User does not exist");
      	}
      	res.json(user);
      });
      
});

module.exports = router;

