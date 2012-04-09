// Filename: views/projects/list
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/StoryCollection',
  'text!/templates/Story/ListView'
], function($,_, Backbone, StoryCollection, StoryListTemplate){

	var StoryListView = Backbone.View.extend({
		el: $("#content"),
		tagName: 'dl',
		
		events: {
		  "click dt"                : "open",
		  "click #newStory"			: "gotonew"
		},
	
		open: function(){
			var page = new String("story/" + arguments[0].currentTarget.attributes['data-id'].value);
			
			Backbone.history.navigate(page, {trigger:true} );
		},
		gotonew:function(){
			Backbone.history.navigate("stories/new",{trigger:true});
		},
		initialize: function(){
			this.collection = StoryCollection;
			this.collection.fetch();
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