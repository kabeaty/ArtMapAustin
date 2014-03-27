Template.discoverArt.helpers({
    artspots: function() {
        return Artspots.find({}, {sort: {submitted: -1}});
    }
});

Template.discoverArt.events({
    'click': function (e) {
        e.preventDefault();

        var artspot = {
          title: this.title,
          description: this.description,
          longitude: this.longitude,
          latitude: this.latitude
        }

        artspot._id = this._id;

        Router.go('artspotPage', artspot);

    }
})
