var myString = "rooney.sarah2@gmail.com";

var myArray = myString.split("");

console.log(myArray);

function frameLooper(){
	if(myArray.length > 0){
		document.getElementById("myTypingText").innerHTML += myArray.shift();
		setTimeout(frameLooper, 70);
	} 
}

frameLooper();