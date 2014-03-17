Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
      return Meteor.subscribe('artspots');
    }
});

Router.map(function() {
  this.route('maphome', {path: '/'});

  this.route('artspotPage', {
    path: '/artspots/:_id',
    data: function() { return Artspots.findOne(this.params._id); }
  });

  this.route('markerSubmit', {
    path: '/submit'
  });

});
