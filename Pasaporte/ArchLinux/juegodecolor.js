var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 120)",
"rgb(255, 0, 255)",
"rgb(255, 110, 120)",
"rgb(2, 21, 255)",
"rgb(45, 3, 124)",
"rgb(78, 4, 0)",
"rgb(10, 2, 250)"
];
var black="rgb(0, 0, 0)";
var squares=document.querySelectorAll(".square");
var i;
var displayColor=document.getElementById("displayColor");
var pickedColor=colors[1];
displayColor.textContent=pickedColor;
for (var i =0; i <squares.length; i++) {

	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(e){

var clickedColor=this.style.backgroundColor;

	changeColor(clickedColor,black);
	var header=document.querySelectorAll("h1");
	header[0].style.backgroundColor=clickedColor;
verify();
	
	});
}
function changeColor(color,black){

for (var i = 0; i < squares.length; i++) {
	if(squares[i].style.backgroundColor==color)
	squares[i].style.backgroundColor=black;
}

}
function verify(){
var black="rgb(0, 0, 0)";
var w="rgb(255, 255, 255)";
if(squares[0].style.backgroundColor==black && squares[4].style.backgroundColor==black && squares[8].style.backgroundColor==black){
	squares[0].style.backgroundColor=w;
squares[4].style.backgroundColor=w;
squares[8].style.backgroundColor=w;
console.log("TRIQUI");
}

}



