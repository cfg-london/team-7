var pairs = {
  'Afghanistan' : 'AFG',
	'Albania' : 'ALB',
	'Algeria' : 'DZA',
	'ASM' : 'American Samoa',
	'AND' : 'Andorra',
	'AGO' : 'Angola',
	'AIA' : 'Anguilla',
	'ATA' : 'Antarctica',
	'ATG' : 'Antigua And Barbuda',
	'ARG' : 'Argentina',
	'ARM' : 'Armenia',
	'ABW' : 'Aruba',
	'AUS' : 'Australia',
	'AUT' : 'Austria',
	'AZE' : 'Azerbaijan',
	'BHS' : 'Bahamas',
	'BHR' : 'Bahrain',
	'BGD' : 'Bangladesh',
	'BRB' : 'Barbados',
	'BLR' : 'Belarus',
	'BEL' : 'Belgium',
	'BLZ' : 'Belize',
	'BEN' : 'Benin',
	'BMU' : 'Bermuda',
	'BTN' : 'Bhutan',
	'BOL' : 'Bolivia',
	'BIH' : 'Bosnia And Herzegovina',
	'BWA' : 'Botswana',
	'BVT' : 'Bouvet Island',
	'BRA' : 'Brazil',
	'IOT' : 'British Indian Ocean Territory',
	'BRN' : 'Brunei Darussalam',
	'BGR' : 'Bulgaria',
	'BFA' : 'Burkina Faso',
	'BDI' : 'Burundi',
	'KHM' : 'Cambodia',
	'CMR' : 'Cameroon',
	'CAN' : 'Canada',
	'CPV' : 'Cape Verde',
	'CYM' : 'Cayman Islands',
	'CAF' : 'Central African Republic',
	'TCD' : 'Chad',
	'CHL' : 'Chile',
	'CHN' : 'China',
	'CXR' : 'Christmas Island',
	'CCK' : 'Cocos (Keeling) Islands',
	'COL' : 'Colombia',
	'COM' : 'Comoros',
	'COG' : 'Congo',
	'COD' : 'Congo, Democratic Republic',
	'COK' : 'Cook Islands',
	'CRI' : 'Costa Rica',
	'HRV' : 'Croatia',
	'CUB' : 'Cuba',
	'CYP' : 'Cyprus',
	'CZE' : 'Czech Republic',
	'DNK' : 'Denmark',
	'DJI' : 'Djibouti',
	'DMA' : 'Dominica',
	'DOM' : 'Dominican Republic',
	'ECU' : 'Ecuador',
	'EGY' : 'Egypt',
	'SLV' : 'El Salvador',
	'GNQ' : 'Equatorial Guinea',
	'ERI' : 'Eritrea',
	'EST' : 'Estonia',
	'ETH' : 'Ethiopia',
	'FLK' : 'Falkland Islands (Malvinas)',
	'FRO' : 'Faroe Islands',
	'FJI' : 'Fiji',
	'FIN' : 'Finland',
	'FRA' : 'France',
	'GUF' : 'French Guiana',
	'PYF' : 'French Polynesia',
	'ATF' : 'French Southern Territories',
	'GAB' : 'Gabon',
	'GMB' : 'Gambia',
	'GEO' : 'Georgia',
	'DEU' : 'Germany',
	'GHA' : 'Ghana',
	'GIB' : 'Gibraltar',
	'GRC' : 'Greece',
	'GRL' : 'Greenland',
	'GRD' : 'Grenada',
	'GLP' : 'Guadeloupe',
	'GUM' : 'Guam',
	'GTM' : 'Guatemala',
	'GGY' : 'Guernsey',
	'GIN' : 'Guinea',
	'GNB' : 'Guinea-Bissau',
	'GUY' : 'Guyana',
	'HTI' : 'Haiti',
	'HMD' : 'Heard Island & Mcdonald Islands',
	'VAT' : 'Holy See (Vatican City State)',
	'HND' : 'Honduras',
	'HKG' : 'Hong Kong',
	'HUN' : 'Hungary',
	'ISL' : 'Iceland',
	'IND' : 'India',
	'Indonesia' : 'IDN',
	'IRN' : 'Iran, Islamic Republic Of',
	'IRQ' : 'Iraq',
	'IRL' : 'Ireland',
	'IMN' : 'Isle Of Man',
	'ISR' : 'Israel',
	'ITA' : 'Italy',
	'JAM' : 'Jamaica',
	'JPN' : 'Japan',
	'JEY' : 'Jersey',
	'JOR' : 'Jordan',
	'KAZ' : 'Kazakhstan',
	'Kenya' : 'KEN',
	'KIR' : 'Kiribati',
	'KOR' : 'Korea',
	'KWT' : 'Kuwait',
	'KGZ' : 'Kyrgyzstan',
	'LAO' : 'Lao People\'s Democratic Republic',
	'LVA' : 'Latvia',
	'LBN' : 'Lebanon',
	'LSO' : 'Lesotho',
	'LBR' : 'Liberia',
	'LBY' : 'Libyan Arab Jamahiriya',
	'LIE' : 'Liechtenstein',
	'LTU' : 'Lithuania',
	'LUX' : 'Luxembourg',
	'MAC' : 'Macao',
	'MKD' : 'Macedonia',
	'MDG' : 'Madagascar',
	'MWI' : 'Malawi',
	'MYS' : 'Malaysia',
	'MDV' : 'Maldives',
	'MLI' : 'Mali',
	'MLT' : 'Malta',
	'MHL' : 'Marshall Islands',
	'MTQ' : 'Martinique',
	'MRT' : 'Mauritania',
	'MUS' : 'Mauritius',
	'MYT' : 'Mayotte',
	'MEX' : 'Mexico',
	'FSM' : 'Micronesia, Federated States Of',
	'MDA' : 'Moldova',
	'MCO' : 'Monaco',
	'MNG' : 'Mongolia',
	'MNE' : 'Montenegro',
	'MSR' : 'Montserrat',
	'MAR' : 'Morocco',
	'MOZ' : 'Mozambique',
	'MMR' : 'Myanmar',
	'NAM' : 'Namibia',
	'NRU' : 'Nauru',
	'NPL' : 'Nepal',
	'NLD' : 'Netherlands',
	'NCL' : 'New Caledonia',
	'NZL' : 'New Zealand',
	'NIC' : 'Nicaragua',
	'NER' : 'Niger',
	'NGA' : 'Nigeria',
	'NIU' : 'Niue',
	'NFK' : 'Norfolk Island',
	'MNP' : 'Northern Mariana Islands',
	'NOR' : 'Norway',
	'OMN' : 'Oman',
	'PAK' : 'Pakistan',
	'PLW' : 'Palau',
	'PSE' : 'Palestinian Territory, Occupied',
	'PAN' : 'Panama',
	'PNG' : 'Papua New Guinea',
	'PRY' : 'Paraguay',
	'PER' : 'Peru',
	'PHL' : 'Philippines',
	'PCN' : 'Pitcairn',
	'POL' : 'Poland',
	'PRT' : 'Portugal',
	'PRI' : 'Puerto Rico',
	'QAT' : 'Qatar',
	'ROU' : 'Romania',
	'RUS' : 'Russian Federation',
	'REU' : 'Reunion',
	'RWA' : 'Rwanda',
	'BLM' : 'Saint Barthelemy',
	'SHN' : 'Saint Helena',
	'KNA' : 'Saint Kitts And Nevis',
	'LCA' : 'Saint Lucia',
	'MAF' : 'Saint Martin',
	'SPM' : 'Saint Pierre And Miquelon',
	'VCT' : 'Saint Vincent And Grenadines',
	'WSM' : 'Samoa',
	'SMR' : 'San Marino',
	'STP' : 'Sao Tome And Principe',
	'SAU' : 'Saudi Arabia',
	'SEN' : 'Senegal',
	'SRB' : 'Serbia',
	'SYC' : 'Seychelles',
	'SLE' : 'Sierra Leone',
	'SGP' : 'Singapore',
	'SVK' : 'Slovakia',
	'SVN' : 'Slovenia',
	'SLB' : 'Solomon Islands',
	'SOM' : 'Somalia',
	'ZAF' : 'South Africa',
	'SGS' : 'South Georgia And Sandwich Isl.',
	'ESP' : 'Spain',
	'LKA' : 'Sri Lanka',
	'SDN' : 'Sudan',
	'SUR' : 'Suriname',
	'SJM' : 'Svalbard And Jan Mayen',
	'SWZ' : 'Swaziland',
	'SWE' : 'Sweden',
	'CHE' : 'Switzerland',
	'SYR' : 'Syrian Arab Republic',
	'TWN' : 'Taiwan',
	'TJK' : 'Tajikistan',
	'TZA' : 'Tanzania',
	'THI' : 'Thailand',
	'TLS' : 'Timor-Leste',
	'TGO' : 'Togo',
	'TKL' : 'Tokelau',
	'TON' : 'Tonga',
	'TTO' : 'Trinidad And Tobago',
	'TUN' : 'Tunisia',
	'TUR' : 'Turkey',
	'TKM' : 'Turkmenistan',
	'TCA' : 'Turks And Caicos Islands',
	'TUV' : 'Tuvalu',
	'UGA' : 'Uganda',
	'UKR' : 'Ukraine',
	'ARE' : 'United Arab Emirates',
	'GBR' : 'United Kingdom',
	'USA' : 'United States',
	'UMI' : 'United States Outlying Islands',
	'URY' : 'Uruguay',
	'UZB' : 'Uzbekistan',
	'VUT' : 'Vanuatu',
	'VEN' : 'Venezuela',
	'VNM' : 'Viet Nam',
	'VGB' : 'Virgin Islands, British',
	'VIR' : 'Virgin Islands, U.S.',
	'WLF' : 'Wallis And Futuna',
	'ESH' : 'Western Sahara',
	'YEM' : 'Yemen',
	'ZMB' : 'Zambia',
	'ZWE' : 'Zimbabwe',
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
    var data = $.param({
                tableId: indicator
            });

    var req = {
     method: 'POST',
     url: 'php/getCountries.php',
     data: data
   }

    $http(req).then(function(data){$scope.countries = data.data; console.log(data.data); setTimeout(listeners, 100)}, function(){});
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
    if(panel = 1){
      if(indicator == null) return;
    }
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
      $(indicators).each(function(){
        i.push({"i":indicators[0].Tables_in_equalmeasures});
      });
    }
  });
  console.log(i)
  return i;
}

function listener(){
  $(".indicatorValue").click(function(){
    $(".selectedIndicator").removeClass("selectedIndicator");
    if (indicator == $(this).html()){
      indicator = null;
    }else{
      indicator = $(this).html();
      $(this).addClass("selectedIndicator");
    }
  });
}
