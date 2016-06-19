
$(document).ready(function(){/* google maps -----------------------------------------------------*/

function initialize() {



    var locations = [
        ['Dan\'s pool' , 32.070278, 34.794167, 4],
        ['Ela\'s pool', 32.091859, 34.793126, 3],
        ['Dror\'s pool', 32.070011, 34.800012, 2],
        ['Eldad\'s pool', 32.045018, 34.760854, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 13,
        center: new google.maps.LatLng(32.070533, 34.794167),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });




    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));


    }
};
    google.maps.event.addDomListener(window, 'load', initialize);
/* end google maps -----------------------------------------------------*/
});