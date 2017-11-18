var pairs = {
  'Afghanistan' : 'AFG',
	'Albania' : 'ALB',
	'Algeria' : 'DZA',
	'American Samoa':'ASM',
	'Andorra' :'AND' ,
	'Angola' :'AGO' ,
	'Anguilla' : 'AIA',
	'Antarctica' : 'ATA',
	'Antigua And Barbuda' : 'ATG',
	'Argentina' : 'ARG',
	'Armenia' : 'ARM',
	'Aruba' : 'ABW',
	'Australia' : 'AUS',
	'Austria' : 'AUT',
	'Azerbaijan' : 'AZE',
	'Bahamas' : 'BHS',
	'Bahrain' : 'BHR',
	'Bangladesh' : 'BGD',
	'Barbados' : 'BRB',
	'Belarus' : 'BLR',
	'Belgium' : 'BEL',
	'Belize' : 'BLZ',
	'Benin' : 'BEN',
	'Bermuda' : 'BMU',
	'Bhutan' : 'BTN',
	'Bolivia' : 'BOL',
	'Bosnia And Herzegovina' : 'BIH',
	'Botswana' : 'BWA',
	'Bouvet Island' : 'BVT',
	'Brazil' : 'BRA',
	'British Indian Ocean Territory' : 'IOT',
	'Brunei Darussalam' : 'BRN',
	'Bulgaria' : 'BGR',
	'Burkina Faso' : 'BFA',
	'Burundi' : 'BDI',
	'Cambodia' : 'KHM',
	'Cameroon' : 'CMR',
	'Canada' : 'CAN',
	'Cape Verde' : 'CPV',
	'Cayman Islands' : 'CYM',
	'Central African Republic' : 'CAF',
	'Chad' : 'TCD',
	'Chile' : 'CHL',
	'China' : 'CHN',
	'Christmas Island' : 'CXR',
	'Cocos (Keeling) Islands' : 'CCK',
	'Colombia' : 'COL',
	'Comoros' : 'COM',
	'Congo' : 'COG',
	'Congo, Democratic Republic' : 'COD',
	'Cook Islands' : 'COK',
	'Costa Rica' : 'CRI',
	'Croatia' : 'HRV',
	'Cuba' : 'CUB',
	'Cyprus' : 'CYP',
	'Czech Republic' : 'CZE',
	'Denmark' : 'DNK',
	'Djibouti' : 'DJI',
	'Dominica' : 'DMA',
	'Dominican Republic' : 'DOM',
	'Ecuador' : 'ECU',
	'Egypt' : 'EGY',
	'El Salvador' : 'SLV',
	'Equatorial Guinea' : 'GNQ',
	'Eritrea' : 'ERI',
	'Estonia' : 'EST',
	'Ethiopia' : 'ETH',
	'Falkland Islands (Malvinas)' : 'FLK',
	'Faroe Islands' : 'FRO',
	'Fiji' : 'FJI',
	'Finland' : 'FIN',
	'France' : 'FRA',
	'French Guiana' : 'GUF',
	'French Polynesia' : 'PYF',
	'French Southern Territories' : 'ATF',
	'Gabon' : 'GAB',
	'Gambia' : 'GMB',
	'Georgia' : 'GEO',
	'Germany' : 'DEU',
	'Ghana' : 'GHA',
	'Gibraltar' : 'GIB',
	'Greece' : 'GRC',
	'Greenland' : 'GRL',
	'Grenada' : 'GRD',
	'Guadeloupe' : 'GLP',
	'Guam' : 'GUM',
	'Guatemala' : 'GTM',
	'Guernsey' : 'GGY',
	'Guinea' : 'GIN',
	'Guinea-Bissau' : 'GNB',
	'Guyana' : 'GUY',
	'Haiti' : 'HTI',
	'Heard Island & Mcdonald Islands' : 'HMD',
	'Holy See (Vatican City State)' : 'VAT',
	'Honduras' : 'HND',
	'Hong Kong' : 'HKG',
	'Hungary' : 'HUN',
	'Iceland' : 'ISL',
	'India' : 'IND',
	'Indonesia' : 'IDN',
	'Iran, Islamic Republic Of' : 'IRN',
	'Iraq' : 'IRQ',
	'Ireland' : 'IRL',
	'Isle Of Man' : 'IMN',
	'Israel' : 'ISR',
	'Italy' : 'ITA',
	'Jamaica' : 'JAM',
	'Japan' : 'JPN',
	'Jersey' : 'JEY',
	'Jordan' : 'JOR',
	'Kazakhstan' : 'KAZ',
	'Kenya' : 'KEN',
	'Kiribati' : 'KIR',
	'Korea' : 'KOR',
	'Kuwait' : 'KWT',
	'Kyrgyzstan' : 'KGZ',
	'Lao People\'s Democratic Republic' : 'LAO',
	'Latvia' : 'LVA',
	'Lebanon' : 'LBN',
	'Lesotho' : 'LSO',
	'Liberia' : 'LBR',
	'Libyan Arab Jamahiriya' : 'LBY',
	'Liechtenstein' : 'LIE',
	'Lithuania' : 'LTU',
	'Luxembourg' : 'LUX',
	'Macao' : 'MAC',
	'Macedonia' : 'MKD',
	'Madagascar' : 'MDG',
	'Malawi' : 'MWI',
	'Malaysia' : 'MYS',
	'Maldives' : 'MDV',
	'Mali' : 'MLI',
	'Malta' : 'MLT',
	'Marshall Islands' : 'MHL',
	'Martinique' : 'MTQ',
	'Mauritania' : 'MRT',
	'Mauritius' : 'MUS',
	'Mayotte' : 'MYT',
	'Mexico' : 'MEX',
	'Micronesia, Federated States Of' : 'FSM',
	'Moldova' : 'MDA',
	'Monaco' : 'MCO',
	'Mongolia' : 'MNG',
	'Montenegro' : 'MNE',
	'Montserrat' : 'MSR',
	'Morocco' : 'MAR',
	'Mozambique' : 'MOZ',
	'Myanmar' : 'MMR',
	'Namibia' : 'NAM',
	'Nauru' : 'NRU',
	'Nepal' : 'NPL',
	'Netherlands' : 'NLD',
	'New Caledonia' : 'NCL',
	'New Zealand' : 'NZL',
	'Nicaragua' : 'NIC',
	'Niger' : 'NER',
	'Nigeria' : 'NGA',
	'Niue' : 'NIU',
	'Norfolk Island' : 'NFK',
	'Northern Mariana Islands' : 'MNP',
	'Norway' : 'NOR',
	'Oman' : 'OMN',
	'Pakistan' : 'PAK',
	'Palau' : 'PLW',
	'Palestinian Territory, Occupied' : 'PSE',
	'Panama' : 'PAN',
	'Papua New Guinea' : 'PNG',
	'Paraguay' : 'PRY',
	'Peru' : 'PER',
	'Philippines' : 'PHL',
	'Pitcairn' : 'PCN',
	'Poland' : 'POL',
	'Portugal' : 'PRT',
	'Puerto Rico' : 'PRI',
	'Qatar' : 'QAT',
	'Romania' : 'ROU',
	'Russian Federation' : 'RUS',
	'Reunion' : 'REU',
	'Rwanda' : 'RWA',
	'Saint Barthelemy' : 'BLM',
	'Saint Helena' : 'SHN',
	'Saint Kitts And Nevis' : 'KNA',
	'Saint Lucia' : 'LCA',
	'Saint Martin' : 'MAF',
	'Saint Pierre And Miquelon' : 'SPM',
	'Saint Vincent And Grenadines' : 'VCT',
	'Samoa' : 'WSM',
	'San Marino' : 'SMR',
	'Sao Tome And Principe' : 'STP',
	'Saudi Arabia' : 'SAU',
	'Senegal' : 'SEN',
	'Serbia' : 'SRB',
	'Seychelles' : 'SYC',
	'Sierra Leone' : 'SLE',
	'Singapore' : 'SGP',
	'Slovakia' : 'SVK',
	'Slovenia' : 'SVN',
	'Solomon Islands' : 'SLB',
	'Somalia' : 'SOM',
	'South Africa' : 'ZAF',
	'South Georgia And Sandwich Isl.' : 'SGS',
	'Spain' : 'ESP',
	'Sri Lanka' : 'LKA',
	'Sudan' : 'SDN',
	'Suriname' : 'SUR',
	'Svalbard And Jan Mayen' : 'SJM',
	'Swaziland' : 'SWZ',
	'Sweden' : 'SWE',
	'Switzerland' : 'CHE',
	'Syrian Arab Republic' : 'SYR',
	'Taiwan' : 'TWN',
	'Tajikistan' : 'TJK',
	'Tanzania' : 'TZA',
	'Thailand' : 'THI',
	'Timor-Leste' : 'TLS',
	'Togo' : 'TGO',
	'Tokelau' : 'TKL',
	'Tonga' : 'TON',
	'Trinidad And Tobago' : 'TTO',
	'Tunisia' : 'TUN',
	'Turkey' : 'TUR',
	'Turkmenistan' : 'TKM',
	'Turks And Caicos Islands' : 'TCA',
	'Tuvalu' : 'TUV',
	'Uganda' : 'UGA',
	'Ukraine' : 'UKR',
	'United Arab Emirates' : 'ARE',
	'United Kingdom' : 'GBR',
	'United States' : 'USA',
	'United States Outlying Islands' : 'UMI',
	'Uruguay' : 'URY',
	'Uzbekistan' : 'UZB',
	'Vanuatu' : 'VUT',
	'Venezuela' : 'VEN',
	'Viet Nam' : 'VNM',
	'Virgin Islands, British' : 'VGB',
	'Virgin Islands, U.S.' : 'VIR',
	'Wallis And Futuna' : 'WLF',
	'Western Sahara' : 'ESH',
	'Yemen' : 'YEM',
	'Zambia' : 'ZMB',
	'Zimbabwe' : 'ZWE',
}


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
app.controller("myCtrl", ['$scope', '$http', function ($scope, $http) {
  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  $scope.indicators = getIndicators();
  $scope.countries = [];

  $scope.next = function(){
    if(panel == 1){
      var data =  $.param({
                    tableId: indicator
                  });

      var req = {
       method: 'POST',
       url: 'php/getCountries.php',
       data: data
     }

       $http(req).then(function(data){$scope.countries = data.data; console.log(data.data); setTimeout(listener, 100)}, function(){});
    }
    if(panel == 3){
      var data =  $.param({
                    tableId: indicator,
                    ageId : ageGroups,
                    countryId : countries
                  });

      var req = {
       method: 'POST',
       url: 'php/getData.php',
       data: data
      }

       $http(req).then(function(data){info = data.data; dynamicChart(); setTimeout(listener, 100)}, function(){});
    }
 }
}]);

app.controller("indicatorService", function($scope, $http) {
  $http({
   method: 'POST',
   url: 'php/getTableNames.php'
  }).then(function () {
    setTimeout(listener,200);
  }, function (response) {
    alert("Error: " + response);
  });
});

var indicator = null;
var increment = 0;
var panel = 1;
var countries = [];
var ageGroups = [];
var info;

$(document).ready(function(){
  listener();
  sizeChange();

  $(".indicatorSearch").keyup(function(){
    listener();
  });

  $('.panel').each(function(){
    $(this).css('left',increment);
    increment+=500;
  });

  $('.confirmInput').click(function(){
    if(panel == 1){
      if(indicator == null) return;
    }
    panel++;
    $('.panel').each(function(){
      var curPos = parseInt($(this).css('left'));
      $(this).animate({
        'left': curPos - 500
      }, 300);
    });
    if(panel == 4){
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

  $('.ageGroupWrapper').click(function(){
    var ageGroup = $(this).html();
    if(!$(this).hasClass('selectedAge')){
      ageGroups.push(ageGroup);
      $(this).addClass('selectedAge');
    }else{
      $(this).removeClass('selectedAge');
      var index = ageGroups.indexOf(ageGroup);
      if (index >= 0) {
        ageGroups.splice( index, 1 );
      }
    }
  });
});

function getIndicators(){
  var i = [];
  $.ajax({
    url: 'php/getTableNames.php',
    type: 'post',
    success : function(data){
      indicators = JSON.parse(data);
      console.log(indicators);
      
      $(indicators).each(function(){
        i.push({"i":indicators[0].Tables_in_equalmeasures});
      });
    }
  });
  console.log(i)
  return i;
}

function listener(){
  $(".indicatorValue").unbind();
  $(".indicatorValue").click(function(){
    $(".selectedIndicator").removeClass("selectedIndicator");
    if (indicator == $(this).html()){
      indicator = null;
    }else{
      indicator = $(this).html();
      $(this).addClass("selectedIndicator");
    }
  });

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
}

var dummyData = {
  "TestCountry" : [{
    "date": 1995,
    "value": 21.4
  },
  {
    "date": 2000,
    "value": 31.4
  },
  {
    "date": 2005,
    "value": 11.4
  },
  {
    "date": 2010,
    "value": 51.4
  }]
};


//TODO finish reformatting the json object to be in the same structure as the dummyData above
function reFormat(info){
  var countries = [];
  var data = {}

  for(var i = 0; i < info.length; i++){
    if(jQuery.inArray(info[i].Country, countries) == -1){
      countries.push(info[i].Country);
    }
  }

  $(countries).each(function(){
    for(var i = 0; i < info.length; i++){
      var country = info[i].Country;
      console.log(country);
      if(country == $(this)){
        data[country] = "test";
      }
    }
  });

  console.log(data);
  return info;
}

function dynamicChart(){
    var country = dummyData.TestCountry;

    console.log(info);

    var chartData = [];

    for(var i = 0; i < country.length; i++){
      chartData.push({
       "date": country[i].date,
       "value": country[i].value
       });
    }

   var data = chartData ;
   var margin = {top:10, right:10, bottom:90, left:50};
   var width = 450 - margin.left - margin.right;
   var height = 300 - margin.top - margin.bottom;
   var xScale = d3.scale.ordinal()
   .rangeRoundBands([0, width], .03)
   var yScale = d3.scale.linear()
   .range([height, 0]);
   var xAxis = d3.svg.axis()
   .scale(xScale)
   .orient("bottom");
  9
   var yAxis = d3.svg.axis()
   .scale(yScale)
   .orient("left");
   var svgContainer = d3.select("#chartID").append("svg")
   .attr("width", width+margin.left + margin.right)
   .attr("height",height+margin.top + margin.bottom)
   .append("g").attr("class", "container")
   .attr("transform", "translate("+ margin.left +","+ margin.top +")");
   xScale.domain(data.map(function(d) { return d.date; }));
   yScale.domain([0, d3.max(data, function(d) { return d.value; })]);
   // xAxis
   var xAxis_g = svgContainer.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + (height) + ")")
   .call(xAxis)
   .selectAll("text")
   .call(wrap, xScale.rangeBand());
   // yAxis
   var yAxis_g = svgContainer.append("g")
   .attr("class", "y axis")
   .call(yAxis)
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", -50).attr("dy", ".71em")
   .style("text-anchor", "end").text("Percentage");
   svgContainer.selectAll(".bar")
   .data(data)
   .enter()
   .append("rect")
   .attr("class", "bar")
   .attr("x", function(d) { return xScale(d.date); })
   .attr("width", xScale.rangeBand())
   .attr("y", function(d) { return yScale(d.value); })
   .attr("height", function(d) { return height - yScale(d.value); });
}

function wrap(text, width) {
 text.each(function() {
 var text = d3.select(this),
 words = text.text().split(/\s+/).reverse(),
 word,
 line = [],
 lineNumber = 0,
 lineHeight = 1.1, // ems
 y = text.attr("y"),
 dy = parseFloat(text.attr("dy")),
 tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
 while (word = words.pop()) {
 line.push(word);
 tspan.text(line.join(" "));
 if (tspan.node().getComputedTextLength() > width) {
 line.pop();
 tspan.text(line.join(" "));
 line = [word];
 tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight +
dy + "em").text(word);
 }
 }
 });
}
