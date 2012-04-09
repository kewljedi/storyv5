// Filename: models/Story
define([
  'Underscore',
  'Backbone'
], function(_, Backbone){

	var StoryModel = Backbone.Model.extend({
	 	validate: function(attrs) {
		   	if(attrs.name.length <= 0)
		   	{
				return "Stories must have titles. What is War and Peace was called ?";
		   	}
		   	if(attrs.description.length <= 0)
		   	{
				return "Stories must have descriptions. People will want to know what your story is about!";
			}
		}
	});

	// You usually don't return a model instantiated
	return StoryModel;
});