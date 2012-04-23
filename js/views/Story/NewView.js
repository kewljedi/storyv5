// Filename: views/Story/NewView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/StoryCollection',
  'text!/templates/Story/New',
  'views/Page/NewView'
], function($,_, Backbone, StoryCollection, StoryNewTemplate,PageNewView){
	var StoryNewView = Backbone.View.extend({
		el: $("#content"),
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
			
			PageNewView.render({storyId:story.get("id")});
		},
		cancel: function (){
			Backbone.history.navigate("stories/list",{trigger:true});
		},
		initialize: function(){
			
		},
		render: function() {

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