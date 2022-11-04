var size = 0;
var placement = 'point';

var style_PortBlair_Ulb_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "32.5px \'Arial\', sans-serif";
    var labelFill = "#f10433";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("ulbname") !== null) {
        labelText = String(feature.get("ulbname"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,4,51,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}),fill: new ol.style.Fill({color: 'rgba(164,113,88,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
