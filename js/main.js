// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jQuery: 'libs/jquery/jquery',
    Underscore: 'libs/underscore/underscore',
    Backbone: 'libs/backbone/backbone',
	Bootstrap: 'libs/bootstrap/bootstrap',
	templates: './templates/'
  }

});

require([

  // Load our app module and pass it to our definition function
  	'jQuery',
   	'Underscore',
	'Backbone',
	'app'
  ], function($,_,Backbone,App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});