Meteor.publish('artspots', function() {
  return Artspots.find();
});
