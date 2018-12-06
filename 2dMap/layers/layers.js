var wms_layers = [];

        var lyr_OldAmsterdamOmgevingCheese_0 = new ol.layer.Tile({
            'title': 'OldAmsterdamOmgevingCheese_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://maps.georeferencer.com/georeferences/744426867056/2017-12-06T08:51:27.118470Z/map/{z}/{x}/{y}.png?key=aoZiKyJGmpqrBULwLBNe'
            })
        });var format_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1 = new ol.format.GeoJSON();
var features_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1 = format_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.readFeatures(json_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.addFeatures(features_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1);var lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1, 
                style: style_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1,
                title: '<img src="styles/legend/VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.png" /> VerdwenenGebouwenGeo VerdwenenGebouwenGeo'
            });var format_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2 = new ol.format.GeoJSON();
var features_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2 = format_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.readFeatures(json_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.addFeatures(features_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2);var lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2, 
                style: style_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2,
                title: '<img src="styles/legend/VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.png" /> VerdwenenGebouwenGeo VerdwenenGebouwenGeo'
            });

lyr_OldAmsterdamOmgevingCheese_0.setVisible(true);lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.setVisible(true);lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.setVisible(true);
var layersList = [lyr_OldAmsterdamOmgevingCheese_0,lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1,lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2];
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'startmin': 'startmin', 'startmax': 'startmax', 'endmin': 'endmin', 'endmax': 'endmax', });
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'startmin': 'startmin', 'startmax': 'startmax', 'endmin': 'endmin', 'endmax': 'endmax', });
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'startmin': 'TextEdit', 'startmax': 'TextEdit', 'endmin': 'TextEdit', 'endmax': 'TextEdit', });
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.set('fieldImages', {'id': '', 'name': '', 'startmin': '', 'startmax': '', 'endmin': '', 'endmax': '', });
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'startmin': 'no label', 'startmax': 'no label', 'endmin': 'no label', 'endmax': 'no label', });
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'startmin': 'no label', 'startmax': 'no label', 'endmin': 'no label', 'endmax': 'no label', });
lyr_VerdwenenGebouwenGeoVerdwenenGebouwenGeo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});