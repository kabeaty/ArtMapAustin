L.Icon.Default.imagePath = 'packages/leaflet/images'

var marker;

Template.markerSubmit.rendered = function() {
    var map = L.map('map');
        map.setView([30.28, -97.73], 13);
    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
})

    map.locate({setView: true})
        .on('locationfound', function(e) {
            var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5
            });
        map.addLayer(circle);
        })
        .on('locationerror', function(e) {
            map = L.map('map').setView([30.28, -97.73], 13);
        });

    OpenStreetMap_Mapnik.addTo(map);

    map.on('click', function(e) {
        if (!map.hasLayer(marker)) {
            marker = L.marker([e.latlng.lat, e.latlng.lng], {draggable: true});
            map.addLayer(marker);
            marker.bindPopup("Adding art here").openPopup();
        } else {
            $('#marker-true').text("You already added a marker. Drag to change its location.");
        }
    });
};

Template.markerSubmit.events({
    'submit form': function(e, template) {
        e.preventDefault();

    var artspot = {
        title: $(e.target).find('[name=title]').val(),
        description: $(e.target).find('[name=description]').val(),
        latitude: marker._latlng.lat,
        longitude: marker._latlng.lng
    };

    artspot._id = Artspots.insert(artspot);
    Router.go('artspotPage', artspot);
    }
});

