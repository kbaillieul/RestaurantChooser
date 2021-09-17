let formSubmit = document.getElementById("formButton");
formSubmit.addEventListener("click", submitForm);

function submitForm() {
  let restaurants = [
    ["Piato", "pizza", "downtown", "moderate"],
    ["Quesada", "mexican", "westEnd", "low"],
    ["Basho", "sushi", "downtown", "high"],
    ["Pi", "pizza", "downtown", "moderate"],
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
  for (let i = 0; i < 4; i++) {
    if (
      selectedOptions[0] === restaurants[i][1] &&
      selectedOptions[1] === restaurants[i][2] &&
      selectedOptions[2] === restaurants[i][3]
    ) {
      options += restaurants[i][0];
    }
  }
  alert(options);
}
