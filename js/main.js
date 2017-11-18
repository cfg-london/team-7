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

$(document).ready(function(){
  listener();

  $(".indicatorSearch").onKeyUp(function(){
    listener();
  });

  var increment = 0;
  $('.panel').each(function(){
    $(this).css('left',increment);
    increment+=350;
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
