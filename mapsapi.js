let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.562, lng: -52.713 },
    zoom: 12,
  });
}
