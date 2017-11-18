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
    if(!$(this).hasClass('selectedCountry')){
      countries.push($(this).html());
      $(this).addClass('selectedCountry');
    }else{
      $(this).removeClass('selectedCountry');
      var index = countries.indexOf($(this).html());
      if (index >= 0) {
        countries.splice( index, 1 );
      }
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
