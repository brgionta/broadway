var wms_layers = [];

var format_STREETVIEW_SIDEWALK_WEIGHTED_0 = new ol.format.GeoJSON();
var features_STREETVIEW_SIDEWALK_WEIGHTED_0 = format_STREETVIEW_SIDEWALK_WEIGHTED_0.readFeatures(json_STREETVIEW_SIDEWALK_WEIGHTED_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREETVIEW_SIDEWALK_WEIGHTED_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREETVIEW_SIDEWALK_WEIGHTED_0.addFeatures(features_STREETVIEW_SIDEWALK_WEIGHTED_0);
var lyr_STREETVIEW_SIDEWALK_WEIGHTED_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STREETVIEW_SIDEWALK_WEIGHTED_0, 
                style: style_STREETVIEW_SIDEWALK_WEIGHTED_0,
                interactive: true,
    title: 'STREETVIEW_SIDEWALK_WEIGHTED<br />\
    <img src="styles/legend/STREETVIEW_SIDEWALK_WEIGHTED_0_0.png" /> 0 - 0.83 <br />\
    <img src="styles/legend/STREETVIEW_SIDEWALK_WEIGHTED_0_1.png" /> 0.83 - 2.33 <br />\
    <img src="styles/legend/STREETVIEW_SIDEWALK_WEIGHTED_0_2.png" /> 2.33 - 3 <br />\
    <img src="styles/legend/STREETVIEW_SIDEWALK_WEIGHTED_0_3.png" /> 3 - 3.67 <br />\
    <img src="styles/legend/STREETVIEW_SIDEWALK_WEIGHTED_0_4.png" /> 3.67 - 5.5 <br />\
    <img src="styles/legend/STREETVIEW_SIDEWALK_WEIGHTED_0_5.png" /> 5.5 - 8 <br />'
        });

lyr_STREETVIEW_SIDEWALK_WEIGHTED_0.setVisible(true);
var layersList = [lyr_STREETVIEW_SIDEWALK_WEIGHTED_0];
lyr_STREETVIEW_SIDEWALK_WEIGHTED_0.set('fieldAliases', {'GEOID': 'GEOID', 'UNIQUE_': 'UNIQUE_', 'ACRES': 'ACRES', 'CANOPY_ACR': 'CANOPY_ACR', 'CANOPY_PER': 'CANOPY_PER', 'IMPERVIOUS': 'IMPERVIOUS', 'IMPERVIO_1': 'IMPERVIO_1', 'PERVIOUS_A': 'PERVIOUS_A', 'PERVIOUS_P': 'PERVIOUS_P', 'BARE_SOIL_': 'BARE_SOIL_', 'BARE_SOIL1': 'BARE_SOIL1', 'WATER_ACRE': 'WATER_ACRE', 'WATER_PERC': 'WATER_PERC', 'PREFERRABL': 'PREFERRABL', 'PREFERRA_1': 'PREFERRA_1', 'MAXIMUM_UT': 'MAXIMUM_UT', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'NUMPOINTS': 'NUMPOINTS', });
lyr_STREETVIEW_SIDEWALK_WEIGHTED_0.set('fieldImages', {'GEOID': 'TextEdit', 'UNIQUE_': 'TextEdit', 'ACRES': 'TextEdit', 'CANOPY_ACR': 'TextEdit', 'CANOPY_PER': 'TextEdit', 'IMPERVIOUS': 'TextEdit', 'IMPERVIO_1': 'TextEdit', 'PERVIOUS_A': 'TextEdit', 'PERVIOUS_P': 'TextEdit', 'BARE_SOIL_': 'TextEdit', 'BARE_SOIL1': 'TextEdit', 'WATER_ACRE': 'TextEdit', 'WATER_PERC': 'TextEdit', 'PREFERRABL': 'TextEdit', 'PREFERRA_1': 'TextEdit', 'MAXIMUM_UT': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_STREETVIEW_SIDEWALK_WEIGHTED_0.set('fieldLabels', {'GEOID': 'no label', 'UNIQUE_': 'no label', 'ACRES': 'no label', 'CANOPY_ACR': 'no label', 'CANOPY_PER': 'no label', 'IMPERVIOUS': 'no label', 'IMPERVIO_1': 'no label', 'PERVIOUS_A': 'no label', 'PERVIOUS_P': 'no label', 'BARE_SOIL_': 'no label', 'BARE_SOIL1': 'no label', 'WATER_ACRE': 'no label', 'WATER_PERC': 'no label', 'PREFERRABL': 'no label', 'PREFERRA_1': 'no label', 'MAXIMUM_UT': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'NUMPOINTS': 'inline label', });
lyr_STREETVIEW_SIDEWALK_WEIGHTED_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});