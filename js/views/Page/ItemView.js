// Filename: views/Page/ItemView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/PageCollection',
  'text!/templates/Page/Item',
  'collections/PathCollection',
  'views/Page/NewView',
  'collections/StoryCollection',
  'Bootstrap'
], function($,_, Backbone, PageCollection, PageItemTemplate, PathCollection,PageNewView,StoryCollection){

	var PageItemView = Backbone.View.extend({
		tagName: 'div',
		el: $("#content"),
		events: {
		  "click #newPath"		: "newPath",
		  "click .path"			: "path"
		},
		path: function() {
			var pageId = arguments[0].currentTarget.attributes['data-id'].value;
			var page = "/story/" + this.story.get("id") + "/" + pageId;
			Backbone.history.navigate(page,{trigger:true});
		},
		newPath: function() {
			//we make sure that we aren't adding these to the history
			//that way the back button will always miss creating new things
			var newpageView = PageNewView.render({story:this.story,input:this.model});
		},
		fillObjs: function(arguments){
			var found = true;
			
			if(arguments[0].story != null)
			{
				this.story = arguments[0].story;
			} else if(arguments[0].storyId)
			{
				var storyId = arguments[0].storyId;
				this.story = StoryCollection.where({id:storyId})[0];
			} else{
				found = false;
			}

			if(arguments[0].page != null)
			{
				this.model = arguments[0].page;
			} else if(arguments[0].pageId != null) {
				this.pageId = arguments[0].pageId;
				this.model = PageCollection.where({id:this.pageId})[0];	
			} else{
				found = false;
			}
			
			this.exits = PathCollection.where({input:this.model.get("id")});
			
			return found;
		},
		render: function() {
			
			var found = this.fillObjs(arguments);
			
			if(found)
			{
				var data = {
				 	page:this.model,
					exits:this.exits,
					_: _
				};

				var compiledTemplate = _.template( PageItemTemplate, data );
				this.$el.html( compiledTemplate );
			} else {
				this.$el.html("<div class=\"alert alert-error\">Not Found!</div>")
			}
			
			return this;
		}
	
	});

	return new PageItemView;
});