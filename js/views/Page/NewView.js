// Filename: views/Page/NewView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/StoryCollection',
  'collections/PageCollection',
  'text!/templates/Page/New',
   'collections/PathCollection'
], function($,_, Backbone,StoryCollection, PageCollection, PageNewTemplate,PathCollection){
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
			
			if(this.story.get("firstpage") == null)
			{
				this.story.set("firstpage",page.get("id"));
				this.story.save();
			} else {
				//this is all about a path, not just a page.
				//so we need to get the path and set its exit page id.
				path = new PathCollection.model;
				path.set("output", page.get("id"));
				path.set("body", $("#txtPath").val());
				if(this.input != null)
				{
					path.set("input", this.input.get("id"));
				}
				
				PathCollection.create(path);
				
			}
			
			var targetpage = new String("story/" + this.story.get("id") + "/" + page.id);
			
			Backbone.history.navigate(targetpage ,{trigger:true});
			
		},
		cancel: function (){
			Backbone.history.navigate("stories/list",{trigger:true});
		},
		initialize: function(){
			
		},
		fillObjs: function (arguments){
			var found = true;
			
			if(arguments[0].story != null)
			{
				this.story = arguments[0].story;
			} 
			else if (arguments[0].storyId != null) 
			{
				var id = arguments[0].storyId;
				this.story = StoryCollection.where({id:id})[0];
			} else {
				found = false;
			}
		
			if(arguments[0].input != null)
			{
				this.input = arguments[0].input;
			}
					
			return found;
		},
		render: function() {
				
			var found = this.fillObjs(arguments);
		
			if(found)
			{
				Backbone.history.navigate("story/" + this.story.id + "/new", {trigger: false});
			
		   		var data = {
					story:this.story,
					input:this.input,
					_: _
				};

				var compiledTemplate = _.template( PageNewTemplate, data );
				this.$el.html( compiledTemplate );
			} else {
				this.$el.html("<div class=\"alert alert-error\">Not Found.</div>");
			}
			
			return this;
		}

	});

	return new PageNewView;
});