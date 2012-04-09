// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/Story/ListView',
  'views/Story/NewView',
   'views/Story/ItemView'
], function($, _, Backbone, StoryListView,StoryNewView,StoryItemView){
	
  var AppRouter = Backbone.Router.extend({
    routes: {
	  '' 						: 'showStories',
      'stories/list'			: 'showStories',
      'stories/new' 			: 'newStory',
      'story/:storyId'			: 'showStory',
      'story/:storyId/:pageId' 	: 'readPage',
	  'story/:storyId/new'		: 'newPage',
      '*actions'				: 'defaultAction'
    },
    showStories: function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      StoryListView.render();
    },
    newStory: function(){
	  StoryNewView.render();
	},
	newPage: function(storyId){
		PageNewView.render({storyId:storyId});
	},
	showStory: function(storyId){
		StoryItemView.render({ Id:storyId});
	},
	readPage: function(storyId, pageId){
		console.log("Story: " + storyId + " Page: " + pageId);
	},
    defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});
