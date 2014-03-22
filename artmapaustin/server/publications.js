Meteor.publish('artspots', function() {
  return Artspots.find();
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
