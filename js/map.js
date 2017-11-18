var map = new Datamap({
  element: document.getElementById("mapWrapper"),
  projection: 'mercator',
  responsive: false,
  fills: {
    defaultFill: "rgb(85,186,178)",
    includedCountry: "rgb(112,3,112)"
  },
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false
  }
});

function addCountry(country){
  var a = country;
  var obj = {};
  obj[a] = {fillKey : "includedCountry"};
  console.log(obj);
  map.updateChoropleth(obj);
}

function sizeChange() {
  d3.select("g").attr("transform", "scale(" + $("#mapWrapper").width()/1200+ ")");
  $("svg").height(10000);
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
});
