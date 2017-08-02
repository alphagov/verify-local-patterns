// {{latitude}} and {{longitude}} set in routes.js

var mymap = L.map('map').setView([{{latitude}}, {{longitude}}], 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 20,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoic2FuamF5cG95emVyIiwiYSI6ImNqNHNiaDVvNDMxcGcyd3NlNWE5MXZqZDIifQ.jLkU7XzY3H4lTFIfrryVGg'
}).addTo(mymap);
var marker = L.marker([{{latitude}}, {{longitude}}]).addTo(mymap);

var boundaries = {{council.string}}BoundaryData;

for (var i = 0; i < boundaries.length; i++) {
	var polygon = L.polygon(L.GeoJSON.coordsToLatLngs(boundaries[i])).addTo(mymap);
}
