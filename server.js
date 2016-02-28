var express = require("express");
var app = express();

var mongojs = require("mongojs");
var db = mongojs('arjunw7:13bcb0062@ds019048.mlab.com:19048/heroku_s6qv8mb8', ['petetions']);

var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/petetions', function (req,res) {
	console.log("get request received")

	db.petetions.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/petetions', function (req, res) {
	console.log(req.body);
	db.petetions.insert(req.body, function (err, doc){
		res.json(doc);
	});
});

app.delete('/petetions/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.petetions.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

var port = Number(process.env.PORT || 3000);
app.listen(port);
console.log("Server Running");