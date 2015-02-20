var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if('development' == app.get('env')){
    
 //app.use(express.errorHandler());
 mongoose.connect('mongodb://localhost:27017/salDB',function(err){
 if(err){ console.log("DB not connected");}
     else{console.log("DB connected!!");}
 });
}

/*//load all files in models directory
fs.readdirSync(__dirname + '/models').forEach(function(filename){
   
if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});*/

var salSchema = new mongoose.Schema({
    
    name: String
    
});





app.get('/salCol',function(req,res){
  
  mods.find({}, function(err, docs){
    
      if(err) res.json(err);
      else res.json(docs);
  
  })
});

app.post('/save', function(req, res){

        /*new mods({
        
            name: req.body.name
        
        }).save(function(err,doc){
        
          if(err) res.json(err);
            else res.send("successfully inserted");
        })*/
    var mods = mongoose.model('salcols', salSchema);
    module.exports = mods;
    var modelTest = new mods({

        name:req.body.name

    });
    modelTest.save(function(err){
    if(err){ console.log("error in insert");}
    else {res.send('Inserted successfully'); }
  
    });
   
});

app.get('/',function(req,res){
  res.sendfile('/public/view/index.html',{root:__dirname});  
});

app.post('/insertEmp',function(req,res){
    console.log({root:__dirname});
    res.sendfile('/public/view/test.html',{root:__dirname});
    console.log('success',req.empName);
});
// MongoDB connection
/*var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
    MongoClient.connect('mongodb://localhost:27017/empDB', function (err, db) {
    if (err) {
        throw err;
    } else{
    var collection = db.collection('emp_sal');
    collection.insert({empName:"ali"}, function(err, docs) {    
    db.close();
       
    });   
      console.log("connection success");
  }
   // db.close();
});*/



//server 
var server = app.listen(3000,function(){
  
   // var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at %s', port)
  
});

module.exports = app;

