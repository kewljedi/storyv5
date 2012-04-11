// Filename: views/Page/ItemView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/PageCollection',
  'text!/templates/Page/Item',
  'Bootstrap'
], function($,_, Backbone, PageCollection, PageItemTemplate){

	var PageItemView = Backbone.View.extend({
		tagName: 'div',
		el: $("#content"),
		render: function() {
			
			var storyId = arguments[0].storyId;//not really used now
			var pageId = arguments[0].pageId;
			this.model = PageCollection.where({id:pageId})[0];

			var data = {
			 	page:this.model,
				exits:null,
				_: _
			};

			var compiledTemplate = _.template( PageItemTemplate, data );
			this.$el.html( compiledTemplate );
			return this;
		}
	
	});

	return new PageItemView;
});