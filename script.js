let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

let formSubmit = document.getElementById("formButton");
formSubmit.addEventListener("click", submitForm);

function submitForm() {
  let restaurants = [
    ["Piato (downtown)", "pizza", "downtown", "moderate"],
    ["Quesada", "mexican", "westEnd", "low"],
    ["Basho", "sushi", "downtown", "high"],
    ["Pi", "pizza", "downtown", "moderate"],
    ["Acropolis", "pizza", "westEnd", "low"],
    ["Cojones", "mexican", "downtown", "moderate"],
    ["Sun Sushi (Torbay Road)", "sushi", "eastEnd", "moderate"],
    ["Sun Sushi (Mount Pearl)", "sushi", "westEnd", "moderate"],
    ["Sun Sushi (Downtown)", "sushi", "downtown", "moderate"],
    ["Quintanas", "mexican", "eastEnd", "moderate"],
    ["EVOO", "pizza", "downtown", "moderate"],
    ["Sushi Island (downtown)", "sushi", "downtown", "moderate"],
    ["Sushi Island (Kenmount Road)", "sushi", "westEnd", "moderate"],
    ["Piato (Elizabeth Ave)", "pizza", "eastEnd", "moderate"],
  ];
  let foodTypeInput = document.getElementById("foodType");
  let foodTypeSelection = foodTypeInput.value;
  let neighbourhoodInput = document.getElementById("neighbourhood");
  let neighbourhoodSelection = neighbourhoodInput.value;
  let priceInput = document.getElementById("price");
  let priceSelection = priceInput.value;
  let selectedOptions = [
    foodTypeSelection,
    neighbourhoodSelection,
    priceSelection,
  ];
  let options = [];
  for (let i = 0; i < restaurants.length; i++) {
    if (
      selectedOptions[0] === restaurants[i][1] &&
      selectedOptions[1] === restaurants[i][2] &&
      selectedOptions[2] === restaurants[i][3]
    ) {
      options.push(restaurants[i][0]);
    }
  }

  let restaurantMessage = `You should eat at `;
  if (options.length === 0) {
    alert("No restaurants meet your criteria");
  } else {
    for (let i = 0; i < options.length; i++) {
      if (options.length === 1) {
        restaurantMessage += `${options[i]}`;
      } else if (i === 0) {
        restaurantMessage += `${options[i]} `;
      } else {
        restaurantMessage += `or ${options[i]} `;
      }
    }
    alert(restaurantMessage);
  }
}
