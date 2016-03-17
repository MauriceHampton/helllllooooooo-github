function rotateAnimation(el, speed, degrees){
	
	var elem = document.getElementById(el)
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if (navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)"
	}

	var newDegrees = degrees + speed;
	var timeoutString = 'rotateAnimation("' + el + '", ' + speed + ', ' + newDegrees +')'
	setTimeout(timeoutString, 5);
	
	}

