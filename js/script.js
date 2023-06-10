// declare variables
let mapOptions = {'center': [34.065,-118.444],'zoom':12}

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
let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16, 
});

Esri_WorldGrayCanvas.addTo(map);

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
        createStory(data.lat, data.lng, data)
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


function createStory(lat,lng,data){
    const item = document.createElement("list"); 
    item.id = "button"; 
    const itemspace = document.getElementById("stories");
    itemspace.appendChild(item); 
    let text1 = data["Please describe why you think this is the case."];
    let text2 = "Is there anything else you'd like to share? " + data["Is there anything else you would like to share about your experiences with oil drilling in Los Angeles?"];  
        item.innerHTML = `<p>${text1}</p>`; 
        item.innerHTML += "\n"; 
        item.innerHTML += `<li>${text2}</li>`; 
}

loadData(dataUrl)

function openTab(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
