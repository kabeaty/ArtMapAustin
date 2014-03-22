L.Icon.Default.imagePath = 'packages/leaflet/images'

Template.maphome.rendered = function() {
    var mapHome = L.map('map-home');
    mapHome.setView([30.28, -97.73], 13);

    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
})

    OpenStreetMap_Mapnik.addTo(mapHome);

    var addToMap = function() {
        var spots = Artspots.find().fetch();
        var each, marked;
        for (var i = 0; i < spots.length; i++) {
            each = spots[i];
            marked = new L.marker([each.latitude, each.longitude]);
            marked.bindPopup(each.title).addTo(mapHome);
        }
    }

    addToMap();

};




