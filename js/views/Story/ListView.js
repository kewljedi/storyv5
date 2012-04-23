// Filename: views/projects/list
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/StoryCollection',
  'text!/templates/Story/ListView',
  'views/Story/NewView'
], function($,_, Backbone, StoryCollection, StoryListTemplate,StoryNewView){

	var StoryListView = Backbone.View.extend({
		el: $("#content"),
		events: {
		  "click dt"                : "open",
		  "click #newStory"			: "gotonew"
		},
		open: function(){
			var page = new String("story/" + arguments[0].currentTarget.attributes['data-id'].value);
			Backbone.history.navigate(page, {trigger:true} );
		},
		gotonew:function(){
			StoryNewView.render();
		},
		initialize: function(){
			this.collection = StoryCollection;
		},
		render: function() {
			Backbone.history.navigate("stories/list",{trigger:false});
			
		   	var data = {
				stories: this.collection.models,
			    _: _ 
			};
			
			var compiledTemplate = _.template( StoryListTemplate, data );
			this.$el.html( compiledTemplate );
			
			return this;
		}
	
	});

	return new StoryListView;
});