// Filename: models/Page
define([
  'Underscore',
  'Backbone'
], function(_, Backbone){

	var PageModel = Backbone.Model.extend(
	{
		validate: function(attrs) {
			if(attrs.body.length <=0)
			{
				return "WOW, this is an exciting page! Maybe it should say something!"
			}
		}
	}

 	// You usually don't return a model instantiated
	return PageModel;
});