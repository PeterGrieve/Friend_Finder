
var friends = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends)
	});

	app.post("/api/friends", function (req, res) {

        var data = req.body;
		var userScores = data.scores;

				var match;
                var potentialFriends = [];
                var similarities = 0;
                var matchIndex;
                var max;

                for(var i=0; i<friends.length; i++){

                    for( var j=0; j<friends[i].scores.length; j++)
                    {
                        if(userScores[j] == friends[i].scores[j]){

                            similarities++;

                        }

                    }

                    
                    potentialFriends[i].push(similarities);

                    similarities = 0;

                }

                for (var i = 0; i < potentialFriends.length; i++) {

                    if (potentialFriends[i] > max) {

                        matchIndex = i;
                        max = potentialFriends[i];

                    }
                }

                match = friends[matchIndex];

		res.json(match);
	});

}