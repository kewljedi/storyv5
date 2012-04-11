// Filename: collections/PagesCollection
define([
  'Underscore',
  'Backbone',
  // Pull in the Model module from above
  'models/Page'
], function(_, Backbone, PageModel){

	var PageCollection = Backbone.Collection.extend({
	  localStorage: new Store("pages"),
	  model: PageModel,
	  initialize: function (){
		this.fetch();
	  }
	})

	return new PageCollection;
});

