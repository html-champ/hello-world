function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var Rheinkai = new google.maps.LatLng(49.969291, 7.898985);
    var mapOptions = {
        center: Rheinkai,
        zoom: 20
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);


    var marker_Rheinkai = new google.maps.Marker({
        position: Rheinkai,
        label: {
            color: 'grey',
            fontWeight: 'bold',
            text: 'Rheinkai',
        },
        title: "Rheinkai 21, 55411 Bingen am Rhein"
    });


    marker_Rheinkai.setMap(map)

}