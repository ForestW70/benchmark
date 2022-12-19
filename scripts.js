// import { Loader, google } from "@googlemaps/js-api-loader"

function initMap() {
    var options = {     
        zoom: 12,
        center: { lat: 38.9072, lng: -77.0369 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
        position: { lat: 38.8072, lng: -77.9369 },
        map: map
    });

    // new google.maps.Marker(marker);
    marker.setMap(map)
}

initMap();