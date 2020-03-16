var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("img"));
app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// default route
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/mercury", function(req,res){
    res.render("mercury");
});

app.get("/venus", function(req,res){
    res.render("venus");
});

app.get("/earth", function(req,res){
    res.render("earth");
});

app.get("/mars", function(req,res){
    res.render("mars");
});

app.get("/jupiter", function(req,res){
    res.render("jupiter");
});

// error route
app.get("*", function(req, res) {
    res.render("error");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running...");
});