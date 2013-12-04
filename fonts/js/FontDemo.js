var canvas = document.createElement(navigator.isCocoonJS ? 'screencanvas' : 'canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

document.body.appendChild(canvas);

setInterval( function()
{
	context.fillStyle = "white";
	context.fillRect(0,0,canvas.width,canvas.height);

	context.font = "45px Thonburi";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 25);

	context.font = "45px digitalism";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 75);

	context.font = "45px Scissor Cuts";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 125);

	context.font = "45px Schwarzwald Regular";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 175);

	context.font = "45px A Damn Mess";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 225);

	context.font = "45px Abduction";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 275);

	context.font = "45px American Typewriter";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 325);

	context.font = "45px arial";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 375);

	context.font = "45px Courier New";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 425);

	context.font = "45px Marker Felt";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 475);

	context.font = "45px Paint Boy";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 525);

	context.font = "45px tahoma";
	context.textAlign = "center";
	context.fillStyle = "black";
	context.fillText("This is a custom font!", canvas.width/2, 575);
}, 16);
