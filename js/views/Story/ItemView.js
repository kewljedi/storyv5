// Filename: views/Story/ItemView
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/StoryCollection',
  'text!/templates/Story/Item',
  'Bootstrap'
], function($,_, Backbone, StoryCollection, StoryItemTemplate){
	var StoryItemView = Backbone.View.extend({
		el: $("#content"),
		tagName: 'div',
		events: {
		  "click #delete"		: "delete",
		  "click #read"			: "read",
		  "click #cancel"		: "cancel",
		  "click #deleteConfirmed"	: "deleteConfirmed",
		  "click .close" : "hideDeleteQuestion"				
		},
		hideDeleteQuestion: function(){
			$('#myModal').modal('hide');
		},
		delete: function(){
			$('#myModal').modal('show');
		},
		deleteConfirmed: function(){
			$('#myModal').modal('hide');
			//this should really remove all the pages and paths as well
			//but since I havent gotten that far it can't.
			this.model.destroy();
			Backbone.history.navigate("stories/list",{trigger:true});
		},
		read: function(){
			Backbone.history.navigate("story/" + this.model.get("id") + "/" + this.model.get("firstpage"),{trigger:true});
		},
		cancel: function (){
			Backbone.history.navigate("stories/list",{trigger:true});
		},
		initialize: function(){
			
		},
		render: function() {
			
			if(arguments[0].Story == null)
			{
				var id = arguments[0].Id;
				this.model = StoryCollection.where({id:id})[0];
			} else {
				this.model = arguments[0].Story
			}
			
			var page = new String("story/" + this.model.get("id"));
			
			Backbone.history.navigate(page, {trigger: false});
			
	   		var data = {
			 	story:this.model,
				_: _
			};

			var compiledTemplate = _.template( StoryItemTemplate, data );
			this.$el.html( compiledTemplate );
			
			$('#myModal').modal(
				{
					show:false,
					keyboard:true,
					backdrop:true
				}
			);
			
			return this;
		}

	});

	return new StoryItemView;
});