function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var myLatlng = new google.maps.LatLng(49.9667396, 7.904596);
    var lieblingsurlaubszielMarc = new google.maps.LatLng(38.889820, -77.005927);
    var lieblingsurlaubszielSteffen = new google.maps.LatLng(6.834971, 81.838338);
    var mitteDerDreiPunkte = new google.maps.LatLng(32.248995, 3.879841);
    var mapOptions = {
        center: mitteDerDreiPunkte,
        zoom: 3
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker_heimat = new google.maps.Marker({
        position: myLatlng,
        title: "Heimat Bingen"

    });

    var marker_Urlaub_Marc = new google.maps.Marker({
        position: lieblingsurlaubszielMarc,
        title: "Lieblingsurlaubziel Marc"
    });

    var marker_Urlaub_Steffen = new google.maps.Marker({
        position: lieblingsurlaubszielSteffen,
        title: "Lieblingsurlaubziel Steffen"
    });

    marker_heimat.setMap(map)
    marker_Urlaub_Marc.setMap(map)
    marker_Urlaub_Steffen.setMap(map)
}