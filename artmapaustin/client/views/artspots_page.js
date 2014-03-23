L.Icon.Default.imagePath = 'packages/leaflet/images'

Template.artspotPage.rendered = function() {

    var mapSpot = L.map('map-spot').setView([this.data.latitude, this.data.longitude], 13);
    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    })

    OpenStreetMap_Mapnik.addTo(mapSpot);

    var mark = new L.marker([this.data.latitude, this.data.longitude]);
        mark.bindPopup(this.data.title).addTo(mapSpot);

    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

};
