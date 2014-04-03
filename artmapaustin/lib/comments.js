Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var artspot = Artspots.findOne(commentAttributes.artspotId);

    if (!user)
      throw new Meteor.Error(401, "Log in to comment");

    if (!commentAttributes.body)
      throw new Meteor.Error(422, "Write something");

    comment = _.extend(_.pick(commentAttributes, 'artspotId', 'body'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    Artspots.update(comment.artspotId, {$inc: {commentsCount: 1}});

    return Comments.insert(comment);
  }
});
