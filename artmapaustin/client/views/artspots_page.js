L.Icon.Default.imagePath = 'packages/leaflet/images'

Template.artspotPage.rendered = function() {

    // var currentArtspotId = artspot._id;
    // console.log(currentArtspotId);
    // var spots = Artspots.find().fetch();
    // var currentArtspot;
    // for (i in spots) {
    //   if (spots._id === currentArtspotId) {
    //     currentArtspot = i;
    //   }
    // }

    var mapSpot = L.map('map-spot');
    mapSpot.setView([currentArtspot.latlng.lat, currentArtspot.latlng.lng]);
    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    })

    OpenStreetMap_Mapnik.addTo(mapSpot);
};
