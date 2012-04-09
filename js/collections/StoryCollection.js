// Filename: collections/StoryCollection
define([
  'Underscore',
  'Backbone',
  // Pull in the Model module from above
  'models/Story'
], function(_, Backbone, StoryModel){

	var StoryCollection = Backbone.Collection.extend({
	  localStorage: new Store("stories"),
	  model: StoryModel
	})

	return new StoryCollection;
});