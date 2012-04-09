// Filename: views/Page/NewView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  // Pull in the Collection module from above
  'collections/StoryCollection',
  'text!/templates/Page/New'
], function($,_, Backbone, StoryCollection, PageNewTemplate){
	var PageNewView = Backbone.View.extend({
		el: $("#content"),
		tagName: 'ul',

		events: {
		  "click #save"			: "save",
		  "click #cancel"		: "cancel"			
		},

		save: function(){
			story = new StoryCollection.model;
			
			story.set(
				{
					name:jQuery("#txtTitle").val(),
					description:jQuery("#areDescription").val()
				}
			);
			
			StoryCollection.create(story);
			var page = new String("story/" + story.get("id"));
			
			Backbone.history.navigate(page ,{trigger:true});
		},
		cancel: function (){
			Backbone.history.navigate("stories/list",{trigger:true});
		},
		initialize: function(){
			
		},
		render: function() {
			
			Backbone.history.navigate("stories/new", {trigger: false});
	   		var data = {
				_: _
			};

			var compiledTemplate = _.template( PageNewTemplate, data );
			this.$el.html( compiledTemplate );
			
			return this;
		}

	});

	return new PageNewView;
});