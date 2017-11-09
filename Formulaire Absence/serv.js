var express = require('express')
var app = express()

app.get("/", function(req, res) {
	res.sendFile('./index.html')
});

var port = 1337
app.listen(port, function() {
	console.log("Express Node.js server runnng on port 1337.")
})