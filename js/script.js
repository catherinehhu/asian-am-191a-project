// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let zip1 = L.markerClusterGroup();
let zip2 = L.markerClusterGroup();
let zip3 = L.markerClusterGroup();
let zip4 = L.markerClusterGroup();
let zip5 = L.markerClusterGroup();
let zip6 = L.markerClusterGroup();
let zip7 = L.markerClusterGroup();
let zip8 = L.markerClusterGroup();
let zip9 = L.markerClusterGroup();


let layers = {
    "90232": zip1,
    "90034": zip2, 
    "90230": zip3,
    "90056": zip4,
    "90043": zip5,
    "90016": zip6,
    "90019": zip7, 
    "90302": zip8,
    "90062": zip9
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTR7i2UXl1U2jJIdL_L8F7W6240YGv7P1shmvWHM8hEaHMS1Zll0H9zRcg9UKcGRUik8wqO19qhDIJ/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

//map
var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

Stadia_AlidadeSmooth.addTo(map);

function addMarker(data){
    if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90232"){
        circleOptions.fillColor = "red"
        zip1.addLayer(L.circleMarker([data.lat,data.lng],circleOptions))
        }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90034") {
        circleOptions.fillColor = "red"
        zip2.addLayer(L.circleMarker([data.lat,data.lng],circleOptions))
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90230") {
        circleOptions.fillColor = "red"
        zip3.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90056") {
        circleOptions.fillColor = "red"
        zip4.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90043") {
        circleOptions.fillColor = "red"
        zip5.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90016") {
        circleOptions.fillColor = "red"
        zip6.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90019") {
        circleOptions.fillColor = "red"
        zip7.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90302") {
        circleOptions.fillColor = "red"
        zip8.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    else if(data['Please provide the zip code of your primary residence. / Por favor ingrese el còdigo postal de su residencia principal.'] == "90062") {
        circleOptions.fillColor = "red"
        zip9.addLayer(L.circleMarker([data.lat,data.lng],circleOptions)) 
    }
    // console.log("a")
    return data
}

// function createButtons(lat,lng,title){
//     const newButton = document.createElement("button"); // adds a new button
//     newButton.id = "button"+title; // gives the button a unique id
//     newButton.innerHTML = title; // gives the button a title
//     newButton.setAttribute("lat",lat); // sets the latitude 
//     newButton.setAttribute("lng",lng); // sets the longitude 
//     newButton.addEventListener('click', function(){
//         map.flyTo([lat,lng]); //this is the flyTo from Leaflet
//     })
//     const spaceForButtons = document.getElementById('placeForButtons')
//     spaceForButtons.appendChild(newButton);//this adds the button to our page.
// }

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    zip1.addTo(map) // add our layers after markers have been made
    zip2.addTo(map) // add our layers after markers have been made  
    zip3.addTo(map) // add our layers after markers have been made
    zip4.addTo(map) // add our layers after markers have been made
    zip5.addTo(map) // add our layers after markers have been made
    zip6.addTo(map) // add our layers after markers have been made
    zip7.addTo(map) // add our layers after markers have been made
    zip8.addTo(map) // add our layers after markers have been made
    zip9.addTo(map) // add our layers after markers have been made

    let allLayers = L.featureGroup([zip1,zip2,zip3,zip4,zip5,zip6,zip7,zip8,zip9]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
