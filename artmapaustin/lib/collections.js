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
