if (Meteor.isServer && Artspots.find().count() === 0) {
  Artspots.insert({
    title: "The Frank Erwin Center",
    description: "This is more information about the Frank Erwin Center",
    longitude: -97.73182,
    latitude: 30.27658
  });

  Artspots.insert({
    title: "LBJ Library",
    description: "The LBJ Library has great photographs and documents from LBJ's presidency.",
    longitude: -97.72920,
    latitude: 30.28575
});

  Artspots.insert({
    title: "TX State Capitol",
    description: "The Capitol is beautiful, with a large lawn. The tours of the capitol are great.",
    longitude: -97.73996,
    latitude: 30.27415
  });
}
