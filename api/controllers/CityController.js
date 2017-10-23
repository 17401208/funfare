/**
 * CityController
 *
 * @description :: Server-side logic for managing Cities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
			// Create function
		create: function(req, res) {
		    if (req.method == "POST") {
		        City.create(req.body.City).exec( function(err, model) {
		            return res.send("Successfully Created!");
		        });
		    } else {
		        return res.view('city/create');
		    }
		},


		// json function
		json: function(req, res) {
		    City.find().exec( function(err, ccity) {
		        return res.json(ccity);
		    });
		},


		// index function
		index: function(req, res) {
		    City.find().exec( function(err, ccity) {
		        return res.view('city/index', {'ccity': ccity});
		    });
		},


};
