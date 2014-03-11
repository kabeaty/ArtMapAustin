Template.markerSubmit.created = function() {
Meteor.Loader.loadCss('//cdn.leafletjs.com/leaflet-0.7.2/leaflet.css');
Meteor.Loader.loadJs('//cdn.leafletjs.com/leaflet-0.7.2/leaflet.js', Template.maphome.rendered);
};

Template.markerSubmit.rendered = function() {
var map = L.map('map');
map.setView([30.28, -97.73], 13);
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
})

map.locate({setView: true, watch: true})
  .on('locationfound', function(e) {
    var marker = L.marker([e.latitude, e.longitude]).bindPopup("You are here");
    var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    });
  map.addLayer(marker);
  map.addLayer(circle);
})
.on('locationerror', function(e) {
  console.log('Error');
  map = L.map('map').setView([30.28, -97.73], 13);
});

OpenStreetMap_Mapnik.addTo(map);

};
