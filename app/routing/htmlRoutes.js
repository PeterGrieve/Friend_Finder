
var path = require("path");

module.exports = function(app) {

    var homePath = path.join(__dirname, "../public/home.html");
    var surveyPath = path.join(__dirname, "../public/survey.html");

    console.log(surveyPath);


	app.get("/home", function(req, res) {
		res.sendFile(homePath);
	});

	app.get("/survey", function(req, res) {
		res.sendFile(surveyPath);
	});

    
	app.get("*", function(req, res) {
		res.sendFile(homePath);
	});

}