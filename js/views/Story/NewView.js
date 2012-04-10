// Filename: views/Story/NewView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  // Pull in the Collection module from above
  'collections/StoryCollection',
  'text!/templates/Story/New'
], function($,_, Backbone, StoryCollection, StoryNewTemplate){
	var StoryNewView = Backbone.View.extend({
		el: $("#content"),
		tagName: 'ul',

		events: {
		  "click #saveStory"	: "save",
		  "click #cancelStory"	: "cancel"			
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
			var page = new String("story/" + story.get("id") + "/new");
			
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

			var compiledTemplate = _.template( StoryNewTemplate, data );
			this.$el.html( compiledTemplate );
			
			return this;
		}

	});

	return new StoryNewView;
});