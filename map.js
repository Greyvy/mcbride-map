var initialize = function() {

    // The map styles JSON array
    // generated at: http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
    var styles = [{"stylers":[{"saturation":-100}]},{"featureType":"water","stylers":[{"color":"#fefbf1"}]},{"featureType":"landscape","stylers":[{"color":"#eae7e0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#fefbf3"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#c6c4c1"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"poi","stylers":[{"color":"#d6d6d6"}]}];

    // Create a latitude and longitude
    var myLatlng = new google.maps.LatLng(49.169467, -122.583025);

    // Create a marker at my latitude and longitude
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Union Victoria'
    });

    var mapOptions = {
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        //scrollwheel: false,
        // Centre on the created latitude and longitude
        center: myLatlng,
        // Set the map zoom level
        zoom: 13,
        // Set the map styles to the JSON array we made
        styles: styles
    };

    // If the map-canvas element exists
    if (document.getElementById("map-canvas")) {
        // Create a new google map, pass it the element it should occupy
        // and the options object we created above
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        // Set the marker we created
        marker.setMap(map);
    }

};

// When the dom is loaded run our function above
google.maps.event.addDomListener(window, 'load', initialize);
