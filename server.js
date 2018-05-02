var express = require("express");
var bodyParser = require("body-parser");

var port =process.env.PORT || 8080;

var app=express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:false}));

//var exphbs=require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

var routes = require("./controllers/college_controller.js");

app.use("/",routes);

app.listen(port,function(){
    console.log("app listening to port "+port);
});