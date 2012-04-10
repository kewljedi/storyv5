// Filename: collections/PagesCollection
define([
  'Underscore',
  'Backbone',
  // Pull in the Model module from above
  'models/Page'
], function(_, Backbone, PageModel){

	var PageCollection = Backbone.Collection.extend({
	  model: PageModel
	})

	return new PageCollection;
});

