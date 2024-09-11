'use strict'

function initializeMap() {
    // la siguiente variable funciona para poner las coordenadas para el mapa
    var map = L.map('map').setView([19.514371245174623, -101.6088231407623], 15);

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
    L.latLng(19.515700268049606, -101.60873377308805),
    L.latLng(19.516485175986364, -101.60856722280982),
    L.latLng(19.516171213268997, -101.60718723479003),
    L.latLng(19.51848106757215, -101.60623551891432),
    L.latLng(19.519108983424065, -101.60687792713043),
    L.latLng(19.519176259977808, -101.606973098718),
    L.latLng(19.520723393613657, -101.60745788278815),
    L.latLng(19.523756951915818, -101.60724948493218),
    L.latLng(19.526117190253817, -101.60740881972657),
    L.latLng(19.527035521032424, -101.60795034176307),
    L.latLng(19.529514660167294, -101.6097831045188),
    L.latLng(19.52976986500997, -101.6098192089668),
    L.latLng(19.530093123898524, -101.61025246234284),
    L.latLng(19.531998636831858, -101.61171469248707),
    L.latLng(19.535708701327557, -101.61185838212411),
    L.latLng(19.536829035769852, -101.6119470964528),
    L.latLng(19.53748116719168, -101.6117874106374),
    L.latLng(19.53926812901527, -101.61196348152718),
    L.latLng(19.542482610519887, -101.61435149407733),
    L.latLng(19.54229620823622, -101.61482620568806),
    L.latLng(19.5424867527953, -101.61519103035263),
    L.latLng(19.542072525205228, -101.61579760629452),
    L.latLng(19.541997964126264, -101.61672944760645),
    L.latLng(19.542403907362015, -101.61662395613659),
    L.latLng(19.54298, -101.61658),
    L.latLng(19.54302, -101.61681)
];

var camino = L.polyline(puntos, {
    color: 'blue',
    weight: 9
}).addTo(map);


}

document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
  });
