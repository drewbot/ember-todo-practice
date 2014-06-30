console.log('application.js')

// window.Todos = Ember.Application.create();

// Todos.Store = DS.Store.extend();

// Todos.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'todos-emberjs'
// });

// Instantiate an Ember Application
var Todos = Ember.Application.create();
// Had to search for this: Todos.Store needed to be defined in order to run the above
// Has to do with ember-data
Todos.Store = DS.Store.extend();

//Adapters are responsible for communicating with a source of data for your application. 
// Typically this will be a web service API, but in this case we are using an adapter 
// designed to load fixture data:
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();