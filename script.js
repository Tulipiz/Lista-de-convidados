const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const teaBaby = "26 dec 2023"
/* Função do  Countdown(contagem regressiva)*/
function countdown() {
  const teaBabyDate = new Date(teaBaby)
  const currentDate = new Date()

  const totalSeconds = (teaBabyDate - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(mins)
  secondsEl.innerHTML = formatTime(seconds)

  if (totalSeconds <= 0) {
    daysEl.innerHTML = 0
    hoursEl.innerHTML = 0
    minsEl.innerHTML = 0
    secondsEl.innerHTML = 0
  }
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time
}
countdown()

setInterval(countdown, 1000)

//pegando localização
var latitude = 0
var longitude = 0
navigator.geolocation.getCurrentPosition(
  function (position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    // Faça algo com as coordenadas, como exibi-las na página
    console.log("Latitude: " + latitude)
    console.log("Longitude: " + longitude)
    initMap()
  },
  function (error) {
    // Em caso de erro
    console.error("Erro ao obter a localização: " + error.message)
  }
)

//modal


//Pegue o modal
var modal = document.getElementById("my-modal");
//Obtém o botão que abre o modal
var btn = document.getElementById("open-modal");
// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];


//Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}
  
// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() {
  modal.style.display = "none";
}
//Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}


// Initialize and add the map
let map

// async function initMap() {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: latitude, lng: longitude },
//     zoom: 8,
//   });
// }

// initMap();

// Initialize and add the map

async function initMap() {
  // The location of Uluru
  const position = { lat: latitude, lng: longitude }
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps")
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker")

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  })

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  })
}

initMap()
