var PageItemView = Backbone.View.extend({
	
	tagName: 'div',
	
	render: function() {
		
		
		var data = {
		 	page:this.model,
			exits:null,
			_: _
		};

		var compiledTemplate = _.template( StoryItemTemplate, data );
		this.$el.html( compiledTemplate );
		return this;
	}
	
});
