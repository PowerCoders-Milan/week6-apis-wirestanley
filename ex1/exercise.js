var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.0703397, lng: 7.686864},
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: {lat: 45.070339, lng: 7.686864},
    map: map
  });
}