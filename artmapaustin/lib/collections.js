Artspots = new Meteor.Collection('artspots');

if(Meteor.isClient) {
  Meteor.subscribe('artspots');
}

Artspots.allow({
 insert: function(userId, doc) {
 // only allow posting if you are logged in
 return !! userId;
 }
});

Meteor.methods({
    artspot: function(artspotAttributes) {
        var user = Meteor.user();
        // ensure the user is logged in
        if (!user) {
            throw new Meteor.Error(401, "Please log in to add art");
        }
        // ensure the post has a title
        if (!artspotAttributes.title) {
            throw new Meteor.Error(422, 'Please provide a title');
        // check that there are no previous posts with the same link
        }
        // pick out the whitelisted keys
        var artspot = _.extend(_.pick(artspotAttributes, 'title', 'description'), {
            userId: user._id,
            submitter: user.username,
            submitted: new Date().getTime()
        });

        var artspotId = Artspots.insert(artspot);
            return artspotId;
          }
});
