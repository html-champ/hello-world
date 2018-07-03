function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var myLatlng = new google.maps.LatLng(49.9667396, 7.904596);
    var Lieblingsurlaubsziel_Marc = new google.maps.LatLng(38.889820, -77.005927);
    var Lieblingsurlaubsziel_Steffen = new google.maps.LatLng(6.834971, 81.838338);
    var mapOptions = {
        center: myLatlng,
        zoom: 2
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker_heimat = new google.maps.Marker({
        position: myLatlng,
        title: "Heimat Bingen"

    });

    var marker_Urlaub_Marc = new google.maps.Marker({
        position: Lieblingsurlaubsziel_Marc,
        title: "Lieblingsurlaubziel Marc"
    });

    var marker_Urlaub_Steffen = new google.maps.Marker({
        position: Lieblingsurlaubsziel_Steffen,
        title: "Lieblingsurlaubziel Steffen"
    });

    marker_heimat.setMap(map)
    marker_Urlaub_Marc.setMap(map)
    marker_Urlaub_Steffen.setMap(map)
}