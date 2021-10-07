"use strict";

let formSubmit = document.getElementById("formButton");
formSubmit.addEventListener("click", submitForm);

function submitForm() {
  //Array containing name, cuisine, neighbourhood, price point, lat, and long for each restaurant
  let restaurants = [
    ["Piato (downtown)", "pizza", "downtown", "moderate", 47.56301, -52.71025],
    ["Quesada", "mexican", "westEnd", "low", 47.55087, -52.78008],
    ["Basho", "sushi", "downtown", "high", 47.56555, -52.70671],
    ["Pi", "pizza", "downtown", "moderate", 47.56831, -52.70391],
    ["Acropolis", "pizza", "westEnd", "low", 47.5107, -52.82034],
    ["Cojones", "mexican", "downtown", "moderate", 47.56423, -52.70691],
    [
      "Sun Sushi (Torbay Road)",
      "sushi",
      "eastEnd",
      "moderate",
      47.6019,
      -52.71267,
    ],
    [
      "Sun Sushi (Mount Pearl)",
      "sushi",
      "westEnd",
      "moderate",
      47.50289,
      -52.81132,
    ],
    [
      "Sun Sushi (Downtown)",
      "sushi",
      "downtown",
      "moderate",
      47.56809,
      -52.70388,
    ],
    ["Quintanas", "mexican", "eastEnd", "moderate", 47.57476, -52.72387],
    ["EVOO", "pizza", "downtown", "moderate", 47.5618, -52.7098],
    [
      "Sushi Island (downtown)",
      "sushi",
      "downtown",
      "moderate",
      47.56408,
      -52.70752,
    ],
    [
      "Sushi Island (Kenmount Road)",
      "sushi",
      "westEnd",
      "moderate",
      47.5492,
      -52.78407,
    ],
    [
      "Piato (Elizabeth Ave)",
      "pizza",
      "eastEnd",
      "moderate",
      47.58478,
      -52.71099,
    ],
  ];

  //Object to hold inputs from form
  let inputs = {
    foodTypeInput: document.getElementById("foodType"),
    neighbourhoodInput: document.getElementById("neighbourhood"),
    priceInput: document.getElementById("price"),
  };
  //Array that holds value of selected cuisine, neighbourhood and price inputs
  let selectedOptions = [
    inputs.foodTypeInput.value,
    inputs.neighbourhoodInput.value,
    inputs.priceInput.value,
  ];
  //Options array to hold values of restaurants that match users input criteria
  let options = [];
  //Loop through users input cuisine, neighbourhood and price to compare with cuisine, neighbourhood, and price of every restaurant in array. Restaurants that meet all users selected criteria have restaurant name pushed to options array to be output to user.
  for (let i = 0; i < restaurants.length; i++) {
    if (
      selectedOptions[0] === restaurants[i][1] &&
      selectedOptions[1] === restaurants[i][2] &&
      selectedOptions[2] === restaurants[i][3]
    ) {
      options.push(restaurants[i]);
    }
  }
  //Loop to configure output message to user with selected restaurant(s) depending on number of restaurant names in options array
  let restaurantMessage = `You should eat at `;
  if (options.length === 0) {
    alert("No restaurants meet your criteria");
  } else {
    for (let i = 0; i < options.length; i++) {
      if (options.length === 1) {
        restaurantMessage += `${options[i][0]}`;
      } else if (i === 0) {
        restaurantMessage += `${options[i][0]} `;
      } else {
        restaurantMessage += `or ${options[i][0]} `;
      }
    }
    alert(restaurantMessage);
  }
}
