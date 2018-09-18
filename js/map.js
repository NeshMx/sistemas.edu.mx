function myMap() {
    myCenter = new google.maps.LatLng(20.594428, -100.40517957821442);
    var mapOptions = {
        center: myCenter,
        zoom: 15, scrollwheel: true, draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}