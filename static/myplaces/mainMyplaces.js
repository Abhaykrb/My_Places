let mymap = L.map('map', {
    center: [28.394, 84.1240],  //map is zoomed directly to given  cordinate [28.394, 84.1240]
    zoom: 7                     //this is cool hai guys
  });
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', //osm tile layer and copyright are generated
    maxZoom: 18,
    id: 'mapbox.streets',

  }).addTo(mymap);

  var markers = L.markerClusterGroup()
    
  function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.name)
  }

  var visitedPlaces = new L.GeoJSON.AJAX("{% url 'visited' %}", {
    onEachFeature: onEachFeature,
  }
  );

  visitedPlaces.on('data:loaded', function () {
    // Add the cluster data after the geojson layer has loaded.
    markers.addLayer(visitedPlaces);
    mymap.addLayer(markers);
  })