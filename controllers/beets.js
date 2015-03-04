Bitter.BeetsController = Ember.ArrayController.extend({
  actions: {
    addBeet: function() {
      beets.addObject({
                      id: this.length+1,
                      user: this.user,
                      message: this.message,
                      date: new Date,
                      comments: new Array
                      });
      this.set("user", "");
      this.set("message", "");
    }
    sortByDate: function() {
      this.set("sortProperties", ["date"]);
    }
  }
});
