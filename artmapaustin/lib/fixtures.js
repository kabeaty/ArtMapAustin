if (Artspots.find().count() === 0) {
  Artspots.insert({
    longitude: -97.73182,
    latitude: 30.27658,
    description: "The Frank Erwin Center"
  });

  Artspots.insert({
    longitude: -97.72920,
    latitude: 30.28575,
    description: "LBJ Library",
});

  Artspots.insert({
    longitude: -97.73996,
    latitude: 30.27415,
    description: "TX State Capitol",
  });
}
