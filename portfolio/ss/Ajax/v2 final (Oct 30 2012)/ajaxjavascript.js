var counter;
var myvar;
var prefact = null;
window.onload = function() {
    var url="http://shootystealy.com/Ajax/randomfacts.txt";
    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function() {
        if (request.status == 200) {
                var test = document.getElementById("randtxt");
                var array = request.responseText.split("\n");
				var fact = Math.floor(Math.random()*(array.length-1));
				if(fact == prefact && prefact != null){
					if(fact == 0){fact = (array.length-1);}
					else {fact--;}
				}
				prefact = fact;
                var str = array[fact];
                test.innerHTML = str; 
        }
		counter = 10;
		clearInterval(myvar);
		myvar = setInterval('countdown()', 1000);
		setTimeout(arguments.callee, 10250);
    };
    request.send(null);
	loadPictures();
}

function countdown() {
counter--;
document.getElementById("countdownclock").innerHTML = counter;
}

//var pic = 0;
function loadPictures(){
    var url="http://shootystealy.com/Ajax/pictures.txt";
    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function() {
        if (request.status == 200) {
                var test = document.getElementById("pictures");
                var array = request.responseText.split("\n");
				var str = "";
				for(var i = 0; i < array.length; i++){
                str += array[i];
				}
                test.innerHTML = str; 
        }
    };
    request.send(null);
}