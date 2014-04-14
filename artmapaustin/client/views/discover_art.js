//Display all artspots, most recent at top
Template.discoverArt.helpers({
    artspots: function() {
        return Artspots.find({}, {sort: {submitted: -1}});
    }
});

//When user clicks on artspot, route to artspotPage
Template.discoverArt.events({
    'click #title': function (e) {
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
