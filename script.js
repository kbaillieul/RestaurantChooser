"use strict";

let selectedLocation = { lat: 47.5605, lng: -52.7128 };
let locationRadius = 1000;
let formSubmit = document.getElementById("formButton");
formSubmit.addEventListener("click", submitForm);

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
  console.log(selectedOptions);

  let locations = [
    ["downtown", 47.5605, -52.7128, 2500],
    ["eastEnd", 47.611, -52.7237, 3000],
    ["westEnd", 47.5355, -52.7128, 2500],
  ];
  for (let i = 0; i < locations.length; i++) {
    if (locations[i][0] === selectedOptions[0]) {
      selectedLocation = { lat: locations[i][1], lng: locations[i][2] };
      locationRadius = locations[i][3];
    }
  }
  console.log(selectedLocation, locationRadius);

  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };

  // Perform a nearby search.
  service.nearbySearch(
    { location: selectedLocation, radius: locationRadius, type: "restaurant" },
    (results, status, pagination) => {
      if (status !== "OK" || !results) return;

      addPlaces(results, map);
      moreButton.disabled = !pagination || !pagination.hasNextPage;
      if (pagination && pagination.hasNextPage) {
        getNextPage = () => {
          // Note: nextPage will call the same handler function as the initial call
          pagination.nextPage();
        };
      }
    }
  );
}

function addPlaces(places, map) {
  const placesList = document.getElementById("places");

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
