Bitter.BeetsRoute = Ember.Route.extend({
  controllerName: 'beets',
  renderTemplate: function() {
    this.render('beets');
  },
  model: function() {
    return beets;
  }
});
