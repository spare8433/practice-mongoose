const customModule = require('./module/index')

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config({path:'variables.env'})

const app = express();
const app2 = express();

const TestModel = require('./models/TestModel')
const DebatePost = require('./models/debatePost')
// mongoose

mongoose.connect(process.env.MDB_URL, {useNewUrlParser: true}, (err)=>{
  if(err){
    console.log(err);    
  }else{
    console.log("success");
  }
});

// mongodb MongoClient

// const client = new MongoClient(process.env.MDB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("success");
//   // perform actions on the collection object
//   client.close();
// });


// https 로 변경할 예정
// const https = require("https");
const vhost = require("vhost");

const httpDomain = "test17song.co.kr";

app.use(cors())
app.use(express.json());

app2.get('/', function(req,res){
  // console.log("req.ip => " + req.ip);
  // console.log("req.hostname => " + req.hostname);
  res.header("Access-Control-Allow-Origin","http://localhost:3000");
  // res.send("호스트 : "+req.hostname + "ip : " + req.ip);
  res.send("테스트");
});

app2.get('/test', function(req,res){  
  res.header("Access-Control-Allow-Origin","http://localhost:3000");
  const testModel = new TestModel();
  testModel.name = "update"
  // testModel.save()
  console.log(testModel)
  res.send(testModel);
});

//debate-post
app2.post('/debate-post', function(req,res){  
  res.header("Access-Control-Allow-Origin","http://localhost:3000");

  var test = new DebatePost(customModule.createDebatePost(req.body))
  test.save(customModule.createDebatePost(req.body))
  //res.send(customModule.createDebatePost(req.body))  
});


app2.get('/debate-post', function(req,res){   
  res.header("Access-Control-Allow-Origin","http://localhost:3000");

  DebatePost.find().then(debatePost=>{
    res.json(debatePost);
  }).catch(err=>{
    console.log(err)    
  });

});

app2.patch('/debate-post/:id', function(req,res){  
  res.header("Access-Control-Allow-Origin","http://localhost:3000");

  DebatePost.updateOne({ id: req.params.id }, { content: req.body.content })
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.error(err);    
  })
});

app2.delete('/debate-post/:id', function(req,res){  
  res.header("Access-Control-Allow-Origin","http://localhost:3000");

  DebatePost.deleteOne(req.params.id)
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.error(err);    
  })
});

// const httpServer = http.createServer(app);

app.use(vhost(httpDomain,app2))


app.listen(80,function(){
  console.log('listen on 80')
});

