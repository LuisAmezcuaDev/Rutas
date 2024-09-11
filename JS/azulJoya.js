'use strict'

function initializeMap() {
    // la siguiente variable funciona para poner las coordenadas para el mapa
    var map = L.map('azulJoya').setView([19.514371245174623, -101.6088231407623], 15);

     //funciona para poder poner un marcador definiendole las coordenadas
     var marker = L.marker([19.51385829974329, -101.60926299424466]).addTo(map);
    // Agregar una capa base de mapas (puedes usar diferentes proveedores de mapas)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);


     /**
     * Trazar una ruta:
     * Debemos de comezar realizando una variable que funcionara para poder guardar
     * los puntos necesarios para poder trazar la ruta
     */

 var puntos = [
    L.latLng(19.51613, -101.60856),
    L.latLng(19.51646, -101.60848),
    L.latLng(19.51648, -101.60832),
    L.latLng(19.51617, -101.6072),
    L.latLng(19.51747, -101.6067),
    L.latLng(19.51834, -101.60628),
    L.latLng(19.5185, -101.60629),
    L.latLng(19.51872, -101.60641),
    L.latLng(19.51906, -101.60683),
    L.latLng(19.51985, -101.60731),
    L.latLng(19.52017, -101.60741),
    L.latLng(19.52042, -101.60746),
    L.latLng(19.52199, -101.60735),
    L.latLng(19.52324, -101.60717),
    L.latLng(19.52371, -101.60716),
    L.latLng(19.52544, -101.60732),
    L.latLng(19.52617, -101.60743),
    L.latLng(19.52915, -101.6096), //glorieta
    L.latLng(19.52957, -101.60982),
    L.latLng(19.52975, -101.6098),
    L.latLng(19.52992, -101.60999),
    L.latLng(19.53001, -101.61016),
    L.latLng(19.53041, -101.61053),
    L.latLng(19.53209, -101.61177),
    L.latLng(19.53401, -101.61193),
    L.latLng(19.53568, -101.61182),
    L.latLng(19.53617, -101.61186),
    L.latLng(19.53688, -101.61194),
    L.latLng(19.53749, -101.61182),
    L.latLng(19.53783, -101.61181),
    L.latLng(19.53958, -101.61205),
    L.latLng(19.53984, -101.61201),
    L.latLng(19.53952, -101.61235)
];

var camino = L.polyline(puntos, {
    color: '#5CEAE4',
    weight: 9
}).addTo(map);


function icons(ruta, lat, lng, info){
        var customIcon = L.icon({
          iconUrl: ruta,
          iconSize: [30, 30],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });
      
        var marker = L.marker([lat, lng], { icon: customIcon }).addTo(map).bindPopup(info);
}

icons('../IMG/ICONOS/banco.png', 19.53018, -101.61133, 'BBVA Glorieta');
icons('../IMG/ICONOS/cine.png', 19.51661, -101.6084, 'Cine Teatro Emperador');
icons('../IMG/ICONOS/banco.png', 19.51539, -101.60871, 'BBVA Bancomenr Centro');
icons('../IMG/ICONOS/hotel.png', 19.51817, -101.6073, 'Hostal las Rosas');
icons('../IMG/ICONOS/gasolinera.png', 19.517563477153455, -101.60650308721449, 'Pemex');
icons('../IMG/ICONOS/maps.png', 19.51854, -101.60646, 'Funerales alvarez');
icons('../IMG/ICONOS/maps.png', 19.52138822470479, -101.60740769637293, 'Unidad Basica de Rehabilitacion DIF');
icons('../IMG/ICONOS/bus.svg', 19.51613, -101.60854, 'Parada oficial');
icons('../IMG/ICONOS/bus.svg', 19.53121, -101.61089, 'Parada oficial Coppel');
icons('../IMG/ICONOS/centro-comercial.png', 19.53161, -101.61088, 'Coppel');



// teatro 19.51676533448652, -101.60860462560059  19.51661, -101.6084
// hstal las rosas 19.51817, -101.6073
// pemex 19.517563477153455, -101.60650308721449
// funerales alvarez 19.51854, -101.60646
// Unidad Basica de Rehabilitacion DIF 19.52138822470479, -101.60740769637293
// 19.51613, -101.60854
// Coppel 19.53161, -101.61088
}


document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
  });
