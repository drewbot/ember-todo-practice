console.log('application.js')

window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://tiny-pizza-server.herokuapp.com/collections'
});
