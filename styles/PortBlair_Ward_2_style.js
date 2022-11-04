var size = 0;
var placement = 'point';

var style_PortBlair_Ward_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "19.5px \'Arial\', sans-serif";
    var labelFill = "#0509f1";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("wardcode") !== null) {
        labelText = String(feature.get("wardcode"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,9,241,1.0)', lineDash: [10,5,1,5], lineCap: 'butt', lineJoin: 'miter', width: 3}),fill: new ol.style.Fill({color: 'rgba(114,155,111,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
