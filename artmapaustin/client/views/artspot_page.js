// L.Icon.Default.imagePath = '/images'
// L.Icon.Default.imagePath = 'packages/leaflet/images'

Template.artspotPage.rendered = function() {

    var this_artspot, all_artspots, artspotId;

    var url = this.lastNode.baseURI;

    var findSpot = function() {
      artspot_id = url.replace('http://localhost:3000/artspots/', '');
      all_artspots = Artspots.find().fetch();

      for (var i = 0; i < all_artspots.length; i++) {
        if (all_artspots[i]._id == artspot_id) {
          this_artspot = all_artspots[i];
        }
      }
    }

    findSpot();

    //Gives functionality to Twitter button
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

    //Initialize map and set view with tiles
    var mapSpot = L.map('map-spot');
    mapSpot.setView([this_artspot.latitude, this_artspot.longitude], 13);
    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    })

    OpenStreetMap_Mapnik.addTo(mapSpot);

    //Grab marker icon
    var myIcon = L.icon({
      iconUrl: 'packages/leaflet/images/marker-icon.png',
      iconRetinaUrl: 'packages/leaflet/images/marker-icon-2x.png',
      shadowUrl: 'packages/leaflet/images/marker-shadow.png'
    });

    //Add marker to map
    var mark = L.marker([this_artspot.latitude, this_artspot.longitude], {icon: myIcon});
    mark.bindPopup(this_artspot.title).addTo(mapSpot);
};

//Grab artspot info and take user to editArtspot page
Template.artspotPage.events({
  'click #artspot-edit': function(e, template) {
      e.preventDefault();

      var artspot = {
        _id: this._id,
        title: this.title,
        description: this.description,
        latitude: this.latitude,
        longitude: this.longitude
      }

      Router.go('artspotEdit', artspot);
  }
});

  //Grab artspot info and take user to artspotGallery page
  Template.artspotPage.events({
  'click #artspot-gallery': function(e, template) {
      e.preventDefault();

      var artspot = {
        _id: this._id,
        title: this.title,
        description: this.description,
        latitude: this.latitude,
        longitude: this.longitude
      }

      Router.go('artspotGallery', artspot);
  }
});


//Add comment when user clicks comment button
Template.artspotPage.events({
  'click #comment-button': function(e, template) {
    e.preventDefault;

    var textBody = $('#comment-input').find('[name=textBody]');
    console.log(textBody.val());
    var comment = {
      body: textBody.val(),
      artspotId: template.data._id
    };

    Meteor.call('comment', comment, function(error, commentId) {
      if (error) {
        throwError(error.reason);
      } else {
        body.val('');
      }
    });
  }
});

//Find all comments for this artspot to render on page
Template.artspotPage.helpers({
  comments: function() {
    return Comments.find({artspotId: this._id}, {sort: {submitted: -1}});
  }
});

