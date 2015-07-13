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
					if(fact == 0){fact++;}
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
}

function countdown() {
counter--;
document.getElementById("countdownclock").innerHTML = counter;
}

/* function countdowntest() {
	now      = new Date();
	end  = Date.parse("June 11, 2010 11:30:00");
	diff = end - now;

	days  = Math.floor( diff / (1000*60*60*24) );
	hours = Math.floor( diff / (1000*60*60) );
	mins  = Math.floor( diff / (1000*60) );
	secs  = Math.floor( diff / 1000 );

	dd = days;
	hh = hours - days  * 24;
	mm = mins  - hours * 60;
	ss = secs  - mins  * 60;

    document.getElementById("countdownclock").innerHTML = ss;
}
setInterval('countdown()', 1000 );
*/