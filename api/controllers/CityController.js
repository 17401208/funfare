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
		        Cities.create(req.body.City).exec( function(err, model) {
		            return res.send("Successfully Created!");
		        });
		    } else {
		        return res.view('city/create');
		    }
		},
};
