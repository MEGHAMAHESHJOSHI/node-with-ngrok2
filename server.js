//hintjs esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/",function(request,respond){
//     respond.send("<h1>HELLO</h1>");
// });
// app.get("/name",function(request,respond){
//     respond.send("MEGHA MAHESH JOSHI");
// });
// app.get("/team",function(request,respond){ 
//     respond.send("teammate1  teammate2  teammate3");
// });
// app.get("/team",function(request,respond){
//     respond.send("teammate1  teammate2  teammate3");
// });app.get("/hobbies",function(request,respond){
//     respond.send("FOOTBALL AND DANCE");
// });
app.listen(3000,function(){
    console.log("the task will run on the port 3000 ");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" ,function(req,res){
var age= Number(req.body.age);
var name= req.body.name;

res.send("HEY " + name + ".YOU ARE " + age + " YEARS OLD");
});


