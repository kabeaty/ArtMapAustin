L.Icon.Default.imagePath = 'packages/leaflet/images'

// Object.Template.artspotPage.created = function() {
//     myObject = new PhotoUploader( [options] )
// };

Template.artspotPage.rendered = function() {

    var mapSpot = L.map('map-spot');
    mapSpot.setView([this.data.latitude, this.data.longitude], 13);
    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    })

    OpenStreetMap_Mapnik.addTo(mapSpot);

    var mark = new L.marker([this.data.latitude, this.data.longitude]);
        mark.bindPopup(this.data.title).addTo(mapSpot);
};

// Template.artspotPage.rendered = function() {
//   !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
// };

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
})

