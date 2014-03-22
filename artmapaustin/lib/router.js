Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('maphome', {
    path: '/',
  });

  this.route('artspotPage', {
    path: '/artspots/:_id',
    data: function() { return Artspots.findOne(this.params._id); }
  });

  this.route('markerSubmit', {
    path: '/submit'
  });

  this.route('discoverArt', {
    path: '/discover'
  });

});
