// Filename: collections/PathCollection
define([
  'Underscore',
  'Backbone',
  // Pull in the Model module from above
  'models/Path'
], function(_, Backbone, PathModel){

	var PathCollection = Backbone.Collection.extend({
	  localStorage: new Store("paths"),
	  model: PathModel,
	  initialize: function (){
		this.fetch();
	  }
	})

	return new PathCollection;
});