Template.discoverArt.helpers({
    artspots: function() {
        return Artspots.find();
    }
});

Template.discoverArt.events({
    'click': function (e) {
        e.preventDefault();

        var artspot = {
          title: this.title,
          description: this.description,
          id: this._id,
          longitude: this.longitude,
          latitude: this.latitude
        }

        artspot._id = this._id;

        Router.go('artspotPage', artspot);

    }
})
