var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [19, 48], // size of the icon
    shadowSize:   [25, 32], // size of the shadow
    iconAnchor:   [11, 47], // point of the icon which will correspond to marker's location
    shadowAnchor: [2, 31],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function oEF(feature, layer)
{
    var props = feature.properties;
    layer.bindPopup('Rezerwat ' + props.nazwa + '<br>' + props.kodinspire, {permanent: true});
    layer.on('mouseover', function () {
        this.openPopup();
    });
    layer.on('mouseout', function () {
        this.closePopup();
    });

    var center = layer.getBounds().getCenter();
    var cmarker = L.marker(center, {icon: greenIcon});
    var polygonAndItsCenter = L.layerGroup([layer, cmarker]);
    polygonAndItsCenter.addTo(polygonsWithCenters);

    cmarker.on('click', function () {
        cmarker.bounce({duration: 500, height: 100});
    });
}