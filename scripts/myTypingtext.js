var myString = "
i am a 21 yr old girl living and working
and learning in chicago, IL ++ online.
i'm interested in recollecting and fetishizing
lost memories as a means of finding community,
reclamation, memorial, and closure.
these interests manifest thru
#cute #gurlie #tactile #fuzzy #kitsch
explorations between identity, technology, and fiber work.";

var myArray = myString.split("");
var myTimer;
function frameLooper(){

	if(myArray.length > 0){
		document.getElementById("myTypingText").innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer);
	}

	loopTimer = setTimeout('frameLooper()', 70);
}

frameLooper();