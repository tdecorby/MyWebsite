var counter;
var picnum = 3;
var pagenum = 1;
var factsInterval;
var coundownInterval;
var preFact = null;
var factArray;
var picArray;

window.onload = function() {
    var url1="http://shootystealy.com/Ajax/randomfacts.txt";
    var request1 = new XMLHttpRequest();
    request1.open("GET", url1);

    request1.onload = function(){
		if (request1.status == 200) {
			factArray = request1.responseText.split("\n");
			loadFacts();
		}
	};
	request1.send(null);
	
	var url2="http://shootystealy.com/Ajax/pictures.txt";
    var request2 = new XMLHttpRequest();
    request2.open("GET", url2);

    request2.onload = function() {
		if (request2.status == 200) {
			picArray = request2.responseText.split("\n");
			loadPictures();
		
		}
	};
    request2.send(null);

	
	
}

function loadFacts() {
    var factDiv = document.getElementById("randtxt");
	var fact = Math.floor(Math.random()*(factArray.length-1));
	if(fact == preFact && preFact != null){
		if(fact == 0){fact = (factArray.length-1);}
		else {fact--;}
	}
	preFact = fact;
    var str = factArray[fact];
    factDiv.innerHTML = str; 
        
	counter = 10;
	clearInterval(coundownInterval);
	coundownInterval = setInterval('countdown()', 1000);
	clearInterval(factsInterval);
	factsInterval = setInterval('loadFacts()', 10250);
}

function countdown() {
counter--;
document.getElementById("countdownclock").innerHTML = counter;
}

function loadPictures() {
	var page = document.getElementById("topPage");
	var totalPages = Math.ceil((picArray.length)/3);
	page.innerHTML = " Page "+pagenum+" of "+totalPages+" ";
	page = document.getElementById("bottomPage");
	page.innerHTML = " Page "+pagenum+" of "+totalPages+" ";
	
    var picDiv = document.getElementById("pictures");
	var pic1 = picArray[(picnum-3)];
	var pic2 = picArray[(picnum-2)];
	if(picArray[(picnum-2)] == undefined){pic2 = "";}
	var pic3 = picArray[(picnum-1)];
	if(picArray[(picnum-1)] == undefined){pic3 = "";}
    picDiv.innerHTML = pic1+pic2+pic3; 
}

function nextPage(){
	if((picnum+1) < picArray.length){
		picnum += 3;
		pagenum++;
		loadPictures();
	}
}
function prevPage(){
	if(picnum != 3){
		picnum -= 3;
		pagenum--;
		loadPictures();
	}
}
