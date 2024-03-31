ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([123208.454833, -23363.953425, 533706.165442, 464685.171261]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1 = new ol.format.GeoJSON();
var features_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1 = format_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.readFeatures(json_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.addFeatures(features_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1);
var lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1, 
                style: style_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1,
                interactive: true,
    title: ' Greenfield runoff (precautionary) Return period 2 yrs (l/s/ha)<br />\
    <img src="styles/legend/GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1_0.png" /> 0.00 - 1.40<br />\
    <img src="styles/legend/GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1_1.png" /> 1.40 - 5.00<br />\
    <img src="styles/legend/GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1_2.png" /> 5.00 - 10.00<br />\
    <img src="styles/legend/GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1_3.png" /> 10.00 - 100.00<br />\
    <img src="styles/legend/GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1_4.png" /> 100.00 - 356.68<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1];
lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.set('fieldAliases', {'Q2 (l/s/ha)': 'Q2 (l/s/ha)', });
lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.set('fieldImages', {'Q2 (l/s/ha)': 'TextEdit', });
lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.set('fieldLabels', {'Q2 (l/s/ha)': 'inline label - visible with data', });
lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

const opacityInput = document.getElementById('opacity-input');
const opacityOutput = document.getElementById('opacity-output');
function update() {
  const opacity = parseFloat(opacityInput.value);
  lyr_GreenfieldrunoffprecautionaryReturnperiod2yrslsha_1.setOpacity(opacity);
  opacityOutput.innerText = opacity.toFixed(2);
}
opacityInput.addEventListener('input', update);
update();