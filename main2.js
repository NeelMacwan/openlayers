window.onload = init;
function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [0,0],
            zoom: 7,
            maxZoom: 15,
            minZoom: 1,
            rotation: 0.1

        }), 
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })
   map.on('click', function(e){
       console.log(e.coordinate);
    })
 
var drawSource =  new ol.source.Vector()
var drawLayer = new ol.layer.Vector({
    source:drawSource
})

var draw = new ol.interaction.Draw({
    source:drawSource,
    //minpoints:3,
    type:'Polygon'
})

//Deleting Previous Feature
map.addInteraction(draw)
map.addLayer(drawLayer)

}