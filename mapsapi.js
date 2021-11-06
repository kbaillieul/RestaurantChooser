"use strict";

let requestSubmit = document.getElementById("apiSubmit");
requestSubmit.addEventListener("click", getData);
const api_url =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.560539%2C-52.71025&radius=1500&type=restaurant&key=key";
// "https://jsonplaceholder.typicode.com/posts/1";

async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  document.getElementById("apiOutput").innerHTML = data.body;
}
