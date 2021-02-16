var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
// to make the gradient properties visible on loading page.
function startingprop(){
	css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 247, 0));";
}

function randomValues()	{
	return Math.random().toString(16).substring(2, 8);
}

function setBackground()	{
	var newColor1 = "#" + randomValues();
	var newColor2 = "#" + randomValues();
	var randomGradient = "linear-gradient(to right, " + newColor1 + ", " + newColor2 + ")";
	body.style.background = randomGradient;
	css.textContent = body.style.background + ";";
	color1.value = newColor1;
	color2.value = newColor2;
}
startingprop(); 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setBackground);