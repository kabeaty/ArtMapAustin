if (Meteor.isServer && Artspots.find().count() === 0) {
  var now = new Date().getTime();

  var katId = Meteor.users.insert({
    profile: { name: 'Kat Be' }
  });
  var kat = Meteor.users.findOne(katId);
  var adamId = Meteor.users.insert({
    profile: { name: 'Adam Sh' }
  });
  var adam = Meteor.users.findOne(adamId);

  var erwinId = Artspots.insert({
    title: "The Frank Erwin Center",
    description: "This is more information about the Frank Erwin Center",
    longitude: -97.73182,
    latitude: 30.27658
  });

  var lbjId = Artspots.insert({
    title: "LBJ Library",
    description: "The LBJ Library has great photographs and documents from LBJ's presidency.",
    longitude: -97.72920,
    latitude: 30.28575
});

  var capitolId = Artspots.insert({
    title: "TX State Capitol",
    description: "The Capitol is beautiful, with a large lawn. The tours of the capitol are great.",
    longitude: -97.73996,
    latitude: 30.27415
  });

  Comments.insert({
    postId: capitolId,
    userId: kat._id,
    author: kat.profile.name,
    submitted: now - 7 * 3600 * 1000,
    body: "I do love the capitol's lawn and how grassy it is. So nice to soak up some sunshine there."
  });

  Comments.insert({
    postId: capitolId,
    userId: adam._id,
    author: adam.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: "I agree!!!"
  });
}








