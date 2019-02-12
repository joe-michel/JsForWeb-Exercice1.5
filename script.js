
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let i = 0;
let images = document.querySelectorAll(".cadre img");

function boucler(){

	if(i == images.length-1){
		images[i].style.display = "none";
		i = 0;
		images[i].style.display = "none";
	}

	else{
	images[i].style.display = "none";
	i++;
	images[i].style.display = "block";
	}

	
}

setInterval(boucler, 1000);