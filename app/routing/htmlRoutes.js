
var path = require("path");

module.exports = function(app) {

    var homePath = path.join(window.location.pathname, "../public/home.html");
    var surveyPath = path.join(window.location.pathname, "../public/survey.html");

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