"use strict";
//Variables to hold users selected location and price point
let selectedLocation;
let locationRadius;
let completedSearch = [];
let search = [];

//Event handlers for Submit and Reset buttons
let formSubmit = document.getElementById("formButton");
formSubmit.addEventListener("click", submitForm);
let resetSubmit = document.getElementById("resetButton");
resetSubmit.addEventListener("click", resetForm);

//Reset function to reload page on click of reset button
function resetForm() {
  window.location.reload(false);
}

//Submit function to complete search of restaurants in user's selected location and price range on Submit button click
function submitForm() {
  let inputs = {
    neighbourhoodInput: document.getElementById("neighbourhood"),
    priceInput: document.getElementById("price"),
  };
  //Array that holds value of selected neighbourhood and price inputs
  let selectedOptions = [
    inputs.neighbourhoodInput.value,
    inputs.priceInput.value,
  ];
  //Array that holds latitude, longitude, and radius to define boundaries for each available location region user can select from
  let locations = [
    ["downtown", 47.5605, -52.7128, 2500],
    ["eastEnd", 47.611, -52.7237, 3000],
    ["westEnd", 47.5355, -52.7128, 2500],
    ["northEnd", 47.5551, -52.7838, 2750],
    ["mountPearl", 47.5207, -52.8077, 2500],
    ["paradise", 47.5284, -52.8714, 2500],
    ["cbs", 47.5086, -52.9936, 3500],
    ["cityCentre", 47.5869, -52.7361, 2000],
  ];
  //Loop through locations array to find location information that matches users selected input
  for (let i = 0; i < locations.length; i++) {
    if (locations[i][0] === selectedOptions[0]) {
      selectedLocation = { lat: locations[i][1], lng: locations[i][2] };
      locationRadius = locations[i][3];
      search = `${selectedOptions[0]}${selectedOptions[1]}`;
    }
  }
  //Places Nearby search initiated with PlaceService's nearbySearch() method, returns array of PlaceResult objects
  const service = new google.maps.places.PlacesService(map);

  // Perform a nearby search for criteria given by user
  service.nearbySearch(
    {
      location: selectedLocation,
      radius: locationRadius,
      type: "restaurant",
      minPriceLevel: selectedOptions[1],
      maxPriceLevel: selectedOptions[1],
    },
    //if status not okay or no results then return, else create markers
    (results, status) => {
      if (
        status !== "OK" ||
        !results ||
        completedSearch.includes(search) === true
      )
        return;
      console.log(results);
      addPlaces(results, map);
      completedSearch.push(search);
      console.log(completedSearch);
    }
  );
}

//Function to add markers to map and results list
function addPlaces(places, map) {
  //increase zoom and pan to map location of selected region from user input
  map.setZoom(12);
  map.setCenter(selectedLocation);
  const placesList = document.getElementById("places");
  //iterate through results array
  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      new google.maps.Marker({
        map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });

      const li = document.createElement("li");

      li.textContent = place.name;
      placesList.appendChild(li);
      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}
