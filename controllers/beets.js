Bitter.BeetsController = Ember.ArrayController.extend({
  actions: {
    addBeet: function() {
      beets.addObject({id: this.length+1, user: this.user, message: this.message});
    }
  }
});
