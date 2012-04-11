// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/Story/ListView',
  'views/Story/NewView',
  'views/Story/ItemView',
  'views/Page/NewView',
  'views/Page/ItemView'
], function($, _, Backbone, StoryListView,StoryNewView,StoryItemView,PageNewView,PageItemView){
	
  var AppRouter = Backbone.Router.extend({
    routes: {
	  '' 						: 'showStories',
      'stories/list'			: 'showStories',
      'stories/new' 			: 'newStory',
      'story/:storyId'			: 'showStory',
	  'story/:storyId/new'		: 'newPage',      
      'story/:storyId/:pageId' 	: 'readPage',
      '*actions'				: 'defaultAction'
    },
    showStories: function(){
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
		PageItemView.render({storyId:storyId,pageId:pageId});
		//console.log('adfadsfas');
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
