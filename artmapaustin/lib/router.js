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

  this.route('artspotEdit', {
    path: '/artspots/:_id/edit',
    data: function() { return Artspots.findOne(this.params._id); }
  });

  this.route('markerSubmit', {
    path: '/submit'
  });

  this.route('discoverArt', {
    path: '/discover'
  });
});

  var requireLogin = function() {
    if (!Meteor.user()) {
      if (Meteor.loggingIn())
        this.render(this.loadingTemplate);
      else
        this.render('accessDenied');

      this.stop();
      }
    }

  Router.before(requireLogin, {only: 'markerSubmit'});
