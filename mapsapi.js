let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.562, lng: -52.713 },
    zoom: 12,
  });
}

// var axios = require("axios");

// var config = {
//   method: "get",
//   url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=key",
//   headers: {},
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const api_url =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.560539%2C-52.71025&radius=1500&type=restaurant&key=key";

async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}

getData();
