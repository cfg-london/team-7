/*var map = new Datamap({
  element: document.getElementById("mapWrapper"),
  projection: 'mercator',
  responsive: true,
  fills: {
    defaultFill: "rgb(85,186,178)",
    includedCountry: "rgb(112,3,112)"
  },
  data : {}
});

function addCountry(country){
  var a = country;
  var obj = {};
  obj[a] = {fillKey : "includedCountry"};
  console.log(obj);
  map.updateChoropleth(obj);
}

function sizeChange() {
    d3.select("g").attr("transform", "scale(" + $("#mapWrapper").width()/1680 + ")");
    $("svg").height($("#container").height());
}

d3.select(window).on("resize", sizeChange);

$(document).ready(function(){
  sizeChange();
  addCountry("KEN");
  addCountry("IDN");
  addCountry("IND");
  addCountry("ESA");
  addCountry("SEN");
  addCountry("COL");
  addCountry("AUS");
});*/

var myGeoJSONPath = 'json/world.json';
var myCustomStyle = {
    stroke: false,
    fill: true,
    fillColor: '#fff',
    fillOpacity: 1
}
$.getJSON(myGeoJSONPath,function(data){
    var map = L.map('map').setView([39.74739, -105], 4);

    L.geoJson(data, {
        clickable: false,
        style: myCustomStyle
    }).addTo(map);
});
