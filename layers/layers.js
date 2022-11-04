ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32646").setExtent([459094.757807, 1280833.168317, 482533.221193, 1292538.883018]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PortBlair_Ward_2 = new ol.format.GeoJSON();
var features_PortBlair_Ward_2 = format_PortBlair_Ward_2.readFeatures(json_PortBlair_Ward_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32646'});
var jsonSource_PortBlair_Ward_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortBlair_Ward_2.addFeatures(features_PortBlair_Ward_2);
var lyr_PortBlair_Ward_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortBlair_Ward_2, 
                style: style_PortBlair_Ward_2,
                interactive: true,
                title: '<img src="styles/legend/PortBlair_Ward_2.png" /> PortBlair_Ward'
            });
var format_PortBlair_Ulb_3 = new ol.format.GeoJSON();
var features_PortBlair_Ulb_3 = format_PortBlair_Ulb_3.readFeatures(json_PortBlair_Ulb_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32646'});
var jsonSource_PortBlair_Ulb_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortBlair_Ulb_3.addFeatures(features_PortBlair_Ulb_3);
var lyr_PortBlair_Ulb_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortBlair_Ulb_3, 
                style: style_PortBlair_Ulb_3,
                interactive: false,
                title: '<img src="styles/legend/PortBlair_Ulb_3.png" /> PortBlair_Ulb'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_PortBlair_Ward_2.setVisible(true);lyr_PortBlair_Ulb_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_PortBlair_Ward_2,lyr_PortBlair_Ulb_3];
lyr_PortBlair_Ward_2.set('fieldAliases', {'statename': 'statename', 'statecode': 'statecode', 'districtna': 'districtna', 'districtco': 'districtco', 'ulbname': 'ulbname', 'ulbcode': 'ulbcode', 'wardname': 'wardname', 'wardcode': 'wardcode', 'remarks': 'remarks', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_PortBlair_Ulb_3.set('fieldAliases', {'statename': 'statename', 'statecode': 'statecode', 'districtna': 'districtna', 'districtco': 'districtco', 'ulbname': 'ulbname', 'ulbcode': 'ulbcode', 'remarks': 'remarks', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_PortBlair_Ward_2.set('fieldImages', {'statename': 'TextEdit', 'statecode': 'Hidden', 'districtna': 'TextEdit', 'districtco': 'Hidden', 'ulbname': 'TextEdit', 'ulbcode': 'Hidden', 'wardname': 'Hidden', 'wardcode': 'TextEdit', 'remarks': 'Hidden', 'st_area_sh': 'Hidden', 'st_length_': 'Hidden', });
lyr_PortBlair_Ulb_3.set('fieldImages', {'statename': 'TextEdit', 'statecode': 'TextEdit', 'districtna': 'TextEdit', 'districtco': 'TextEdit', 'ulbname': 'TextEdit', 'ulbcode': 'TextEdit', 'remarks': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_PortBlair_Ward_2.set('fieldLabels', {'statename': 'inline label', 'districtna': 'inline label', 'ulbname': 'inline label', 'wardcode': 'inline label', });
lyr_PortBlair_Ulb_3.set('fieldLabels', {'statename': 'no label', 'statecode': 'no label', 'districtna': 'no label', 'districtco': 'no label', 'ulbname': 'no label', 'ulbcode': 'no label', 'remarks': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', });
lyr_PortBlair_Ulb_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});