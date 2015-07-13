var picnum = 3;
var pagenum = 1;
var factsInterval;
var preFact = null;
var factArray;
var picArray;

$(document).ready(function(){
	$('#loadedPictures').load('Ajax/pictures.txt');
	$('#loadedText').load('Ajax/randomfacts.txt');
	
	rightSize();
	
	//  When user clicks on tab, this code will be executed
	$("#tabs li").click(function() {
		
		var prev_tab = $('.active').find("a").attr("href");
		var selected_tab = $(this).find("a").attr("href");

		if (!(selected_tab == "#" || selected_tab == prev_tab)){
			//  First remove class "active" from currently active tab
			$("#tabs li").removeClass('active');
			//  Now add class "active" to the selected/clicked tab
			$(this).addClass("active");
			//  Hide all tab content
			$(".tab_content").slideUp(500).delay(500);
			//  Show the selected tab content
			$(selected_tab).slideDown(500,function(){rightSize();});
		}
		//have to reload for it to work
		loadPictures();
		//  At the end, we add return false so that the click on the link is not executed	
		return false;
	});
	
	
	picArray = document.getElementsByClassName('picture');
	loadPictures();
	
	factArray = document.getElementsByClassName('fact');
	loadFacts();
	
	if(document.getElementById('map') != null){
	//initialize();
	}
	
});

function rightSize(){
var heightofdiv = $('#web').height() -160;
$("#right").css("height",heightofdiv);
}


function loadPictures() {

	var page = document.getElementById("topPage");
	var totalPages = Math.ceil((picArray.length)/3);
	page.innerHTML = " Page "+pagenum+" of "+totalPages+" ";
	page = document.getElementById("bottomPage");
	page.innerHTML = " Page "+pagenum+" of "+totalPages+" ";
	
    var picDiv = document.getElementById("slideshow");
	
	if(picArray[(picnum-3)] == undefined){
		var pic1 = "";
	}else{
		var pic1 = picArray[(picnum-3)].innerHTML;
	}
	
	if(picArray[(picnum-2)] == undefined){
		var pic2 = "";
	}else{
		var pic2 = picArray[(picnum-2)].innerHTML;
	}
	
	if(picArray[(picnum-1)] == undefined){
		var pic3 = "";
	}else{
		var pic3 = picArray[(picnum-1)].innerHTML;
	}
	
    picDiv.innerHTML = pic1+pic2+pic3; 
}
function nextPage(){
	if((picnum+1) < picArray.length){
		picnum += 3;
		pagenum++;
		loadPictures();
		rightSize();
		$('html,body').scrollTop(0);
	}
}
function prevPage(){
	if(picnum != 3){
		picnum -= 3;
		pagenum--;
		loadPictures();
		rightSize();
		$('html,body').scrollTop(0);
	}
}



function loadFacts() {
    var factDiv = document.getElementById("randtxt");
	var fact = Math.floor(Math.random()*(factArray.length-1));
	if(fact == preFact && preFact != null){
		if(fact == 0){fact = (factArray.length-1);}
		else {fact--;}
	}
	preFact = fact;
	if(factArray[fact] == undefined){
		var str = "Loading";
	}else{
		var str = factArray[fact].innerHTML;
	}
    factDiv.innerHTML = str; 
    progressReset($('#progressBar'));
	progressFill($("#progressBar"));
	clearInterval(factsInterval);
	factsInterval = setInterval('loadFacts()', 10200);
}
function progressFill($element) {  
    var progressBarWidth = 100 * $element.width() / 100;  
    $element.find('div').animate({ width: progressBarWidth }, 10000).html();  
 } 
function progressReset($element){
	var progressBarWidth = 0 * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 0).html(); 
}


//google.maps.event.addDomListener(window, 'load', initialize);

var map;
function initialize() {
var myLatlng = new google.maps.LatLng(49.88808,-97.14711);
  var mapOptions = {
  disableDefaultUI:true,
  disableDoubleClickZoom:true,
  draggable:false,
  panControl:false,
zoomControl:true,
mapTypeControl:false,
scaleControl:false,
streetViewControl:true,
overviewMapControl:false,
rotateControl:false,
scrollwheel:false,
maxZoom:17,
minZoom:5,
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

var weatherLayer = new google.maps.weather.WeatherLayer({
  temperatureUnits: google.maps.weather.TemperatureUnit.CELLSIUS
});
weatherLayer.setMap(map);

var cloudLayer = new google.maps.weather.CloudLayer();
cloudLayer.setMap(map);

var trafficLayer = new google.maps.TrafficLayer();
trafficLayer.setMap(map);

var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"ITTS - HQ 401 York Ave."
  });

var contentString = "ITTS - HQ 401 York Ave.";

var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}