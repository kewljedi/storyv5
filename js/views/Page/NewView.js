// Filename: views/Page/NewView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/StoryCollection',
  'collections/PageCollection',
  'text!/templates/Page/New'
], function($,_, Backbone,StoryCollection, PageCollection, PageNewTemplate){
	var PageNewView = Backbone.View.extend({
		el: $("#content"),
		tagName: 'ul',

		events: {
		  "click #savePage"		: "save",
		  "click #cancelPage"	: "cancel"			
		},

		save: function(){
		    page = new PageCollection.model;		
			
			page.set({
				name:jQuery("#txtTitle").val(),
				body:jQuery("#areBody").val() 
			});
			
			PageCollection.create(page);
			
			if(this.story.firstpage == null)
			{
				this.story.set("firstpage",page.id);
				this.story.save();
			} else {
				//this is all about a path, not just a page.
				//so we need to get the path and set its exit page id.
			}
			
			var targetpage = new String("story/" + story.get("id") + "/" + page.id);
			
			Backbone.history.navigate(targetpage ,{trigger:true});
			
		},
		cancel: function (){
			Backbone.history.navigate("stories/list",{trigger:true});
		},
		initialize: function(){
			
		},
		render: function() {
			
			var id = arguments[0].storyId;
			var story = StoryCollection.where({id:id})[0];
			
			this.story = story;
			
			Backbone.history.navigate("story/" + story.id + "/new", {trigger: false});
			
	   		var data = {
				story:story,
				_: _
			};

			var compiledTemplate = _.template( PageNewTemplate, data );
			this.$el.html( compiledTemplate );
			
			return this;
		}

	});

	return new PageNewView;
});