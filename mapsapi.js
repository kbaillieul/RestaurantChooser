let map;

function initMap() {
  // const piatoDT = { lat: 47.56301, lng: -52.71025 };
  // const quesada = { lat: 47.55087, lng: -52.78008 };
  // const basho = { lat: 47.56555, lng: -52.70671 };
  // const piDT = { lat: 47.56831, lng: -52.70391 };
  // const acropolis = { lat: 47.5107, lng: -52.82034 };
  // const cojones = { lat: 47.56423, lng: -52.70691 };
  // const sunSushiTorbay = { lat: 47.6019, lng: -52.71267 };
  // const sunSushiMP = { lat: 47.50289, lng: -52.81132 };
  // const sunSushiDT = { lat: 47.56809, lng: -52.70388 };
  // const quintanas = { lat: 47.57476, lng: -52.72387 };
  // const evoo = { lat: 47.5618, lng: -52.7098 };
  // const sushiIslandDT = { lat: 47.56408, lng: -52.70752 };
  // const sushiIslandKenmount = { lat: 47.5492, lng: -52.78407 };
  // const piatoEliz = { lat: 47.58478, lng: -52.71099 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.562, lng: -52.713 },
    zoom: 12,
  });
  // new google.maps.Marker({
  //   position: piatoDT,
  //   map,
  //   title: "Piato (downtown)",
  // });
  // new google.maps.Marker({
  //   position: quesada,
  //   map,
  //   title: "Quesada",
  // });
  // new google.maps.Marker({
  //   position: basho,
  //   map,
  //   title: "Basho",
  // });
  // new google.maps.Marker({
  //   position: piDT,
  //   map,
  //   title: "Pi",
  // });
  // new google.maps.Marker({
  //   position: acropolis,
  //   map,
  //   title: "Acropolis",
  // });
  // new google.maps.Marker({
  //   position: cojones,
  //   map,
  //   title: "Cojones",
  // });
  // new google.maps.Marker({
  //   position: sunSushiTorbay,
  //   map,
  //   title: "Sun Sushi (Torbay Rd)",
  // });
  // new google.maps.Marker({
  //   position: sunSushiMP,
  //   map,
  //   title: "Sun Sushi (Mount Pearl)",
  // });
  // new google.maps.Marker({
  //   position: sunSushiDT,
  //   map,
  //   title: "Sun Sushi (downtown)",
  // });
  // new google.maps.Marker({
  //   position: quintanas,
  //   map,
  //   title: "Quintanas",
  // });
  // new google.maps.Marker({
  //   position: evoo,
  //   map,
  //   title: "EVOO",
  // });
  // new google.maps.Marker({
  //   position: sushiIslandDT,
  //   map,
  //   title: "Sushi Island (downtown)",
  // });
  // new google.maps.Marker({
  //   position: sushiIslandKenmount,
  //   map,
  //   title: "Sushi Island (Kenmount Rd)",
  // });
  // new google.maps.Marker({
  //   position: piatoEliz,
  //   map,
  //   title: "Piato (Elizabeth Ave)",
  // });
}
