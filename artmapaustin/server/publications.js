Meteor.publish('artspots', function() {
  return Artspots.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});

if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllArtspots: function() {

        return Artspots.remove({});

      }

    });

  });

}
