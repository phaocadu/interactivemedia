/* This is a demo on creating colors */


// Define colors in an array
var colorPalette = ["#00FF00","#FF00FF","#FFFF00","#0000FF","#FF0000","#000000"];

// Randomly select a color from color palette
// Math.floor() needed for returning an integer (a whole number) since array items are whole numbers
// Math.random() returns a random value between 0 and 1
// Multiplying Math.random * with another number will set the max value

var randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
console.log(randomColor);

$("body").css("background-color",randomColor);

var step;

var width = $(window).width();
var height = $(window).height();



for(step=0; step < 828; step++) {
	$("body").append("<div></div>");
}

$("div").each(function() {
    $(el).css("background-color", colorPalette[Math.floor(Math.random() * colorPalette.length)]);
});


$("div").click(function(){
	var randomWidth = Math.floor(Math.random() * 500);
	var randomHeight = Math.floor(Math.random() * 500);
	$(this).css("width",randomWidth).css("height",randomHeight);
});
