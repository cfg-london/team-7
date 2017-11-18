var map = new Datamap({
  element: document.getElementById("mapWrapper"),
  projection: 'mercator',
  responsive: false,
  fills: {
    defaultFill: "rgb(85,186,178)",
    includedCountry: "rgb(112,3,112)",
    def: "rgb(85,186,178)"
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

function removeCountry(country){
  var a = country;
  var obj = {};
  obj[a] = {fillKey : "def"};
  console.log(obj);
  map.updateChoropleth(obj);
}

function sizeChange() {
  d3.select("g").attr("transform", "scale(" + $("#mapWrapper").width()/1200+ ")");
  $("svg").height(10000);
}

d3.select(window).on("resize", sizeChange);

var app = angular.module("app", []);
app.controller("myCtrl", function($scope) {
  $scope.mockIndicators = [
    {name: "testname"},
    {name: "a name"},
    {name: "some name"},
    {name: "test"},
    {name: "testname"}
  ];
  $scope.mockCountries = [
    {name: "Kenya"},
    {name: "Indonesia"},
    {name: "India"},
    {name: "Senagol"},
    {name: "Columbia"}
  ];
});

var pairs = {
  Kenya:"KEN",
  Indonesia:"IDN"
}

$(document).ready(function(){
  listener();
  sizeChange();

  $(".indicatorSearch").keyup(function(){
    listener();
  });

  var increment = 0;
  $('.panel').each(function(){
    $(this).css('left',increment);
    increment+=500;
  });

  var panel = 1;

  $('.confirmInput').click(function(){
    panel++;
    $('.panel').each(function(){
      var curPos = parseInt($(this).css('left'));
      $(this).animate({
        'left': curPos - 500
      }, 300);
    });
    if(panel == 3){
      $(this).fadeOut();
    }
    $('.goBack').fadeIn();
  });

  $('.goBack').click(function(){
    panel--;
    $('.panel').each(function(){
      var curPos = parseInt($(this).css('left'));
      $(this).animate({
        'left': curPos + 500
      }, 300);
    });
    if(panel == 1){
      $(this).fadeOut();
    }
    $('.confirmInput').fadeIn();
  });

  var countries = []
  $('.countryWrapper').click(function(){
    var country = $(this).html();
    if(!$(this).hasClass('selectedCountry')){
      countries.push(country);
      $(this).addClass('selectedCountry');
      addCountry(pairs[country]);
    }else{
      $(this).removeClass('selectedCountry');
      var index = countries.indexOf(country);
      if (index >= 0) {
        countries.splice( index, 1 );
      }
      removeCountry(pairs[country]);
    }
  });

});

function listener(){
  var indicator;
  $(".indicatorValue").click(function(){
    indicator = $(this).html();
    $(".selectedIndicator").removeClass("selectedIndicator");
    $(this).addClass("selectedIndicator");
  });
}
