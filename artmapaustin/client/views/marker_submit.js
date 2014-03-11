Template.markerSubmit.created = function() {
Meteor.Loader.loadCss('//cdn.leafletjs.com/leaflet-0.7.2/leaflet.css');
Meteor.Loader.loadJs('//cdn.leafletjs.com/leaflet-0.7.2/leaflet.js', Template.maphome.rendered);
};

Template.markerSubmit.rendered = function() {
var map = L.map('map').locate({setView: true, watch: true});

var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
})

OpenStreetMap_Mapnik.addTo(map);

};
