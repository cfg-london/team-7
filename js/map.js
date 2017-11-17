$(window).resize(function(){

});

var basic = new Datamap({
  element: document.getElementById("mapWrapper"),
  projection: 'mercator',
  responsive: true,
  fills: {
    defaultFill: "#333333"
  }
});
