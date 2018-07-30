function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var Hindenburganlage = new google.maps.LatLng(49.970141, 7.898567);
    var Rheinkai = new google.maps.LatLng(49.969291, 7.898985);
    var Berlinstraße = new google.maps.LatLng(49.952889, 7.925850);
    var Museumstraße = new google.maps.LatLng(49.969459, 7.891432);
    var mitteDerVierPunkte = new google.maps.LatLng(49.962348, 7.910201);
    var mapOptions = {
        center: mitteDerVierPunkte,
        zoom: 13
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker_Hindenburganlage = new google.maps.Marker({
        position: Hindenburganlage,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'Hindenburganlage',
        },
        title: "Hindenburganlage 2, 55411 Bingen am Rhein"
    });

    var marker_Rheinkai = new google.maps.Marker({
        position: Rheinkai,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'Rheinkai',
        },
        title: "Rheinkai 21, 55411 Bingen am Rhein"
    });

    var marker_Berlinstraße = new google.maps.Marker({
        position: Berlinstraße,
        label: {
            color: 'grey',
            fontWeight: 'bold',
            text: 'Berlinstraße',
        },
        title: "Berlinstraße 109, 55411 Bingen am Rhein"
    });

    var marker_Museumstraße = new google.maps.Marker({
        position: Museumstraße,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'Museumstraße',
        },
        title: "Museumstraße 3, 55411 Bingen am Rhein"
    });

    marker_Hindenburganlage.setMap(map)
    marker_Rheinkai.setMap(map)
    marker_Berlinstraße.setMap(map)
    marker_Museumstraße.setMap(map)
}