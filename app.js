var express 			  = require("express");
var app 				  = express();
var bodyParser			  = require("body-parser");
var methodOverride		  = require("method-override");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname +"/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// app.get('*', function(req, res){
//   res.render('404');
// });

app.get("/register", function(req, res){
	res.render("privy/register");
});


app.get("/login", function(req, res){
	res.render("privy/login");
});


app.get("/otp", function(req, res){
	res.render("privy/otp");
});


app.get("/profile", function(req, res){
	res.render("privy/profileUser");
});


app.listen(3000, function(){
	console.log('Server listening on port 3000');
});
	
	