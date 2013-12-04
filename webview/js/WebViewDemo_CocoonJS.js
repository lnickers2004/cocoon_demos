var canvas = document.createElement(navigator.isCocoonJS ? "screencanvas" : "canvas");

canvas.width  = window.innerWidth ;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

var imgStock = [];

function initStockImages()
{
    for (var i = 0; i <= 19; ++i)
    {
        var img = new Image();
        img.src = "resources/images/digit" + i + ".png";
        imgStock.push(img);
    }
}


var friendImages =  [] ;
var spriteTypes = 0;
var spriteNumber = 100;
var backgroundColor = "black";
var speed = 0.0015;
var direction = 1;


function createImages()
{
    friendImages = [];
    for (var i = 0; i < spriteNumber; ++i)
    {
        var random =  Math.floor((Math.random()*19));
        if (spriteTypes == 1) random = random % 10;
        if (spriteTypes == 2) random = 10 + random % 10;
        friendImages.push(imgStock[random]);
    }
}

initStockImages();
createImages();


var frame = 0 ;
setInterval( 
    function()
    {
        frame+= direction;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width , canvas.height);
        for( var i = 0 ; i < friendImages.length ; ++i)
        {
            var fx = canvas.width  / 2 + 0.5*(i/2+1) * canvas.width  * 0.05 * Math.sin( frame * speed * i/2 + Math.PI * (i%2) ) ;
            var fy = canvas.height / 2 + 0.5*(i/2+1) * canvas.height * 0.05 * Math.cos( frame * speed * i/2 + Math.PI * (i%2) ) ;
        
            ctx.drawImage(friendImages[i],fx,fy);
        }
        
    }, 
    1000/60 
);

canvas.addEventListener("touchstart", function()
{
    CocoonJS.App.forwardAsync("CocoonJS.App.show(0, 0, " + window.innerWidth/2 + "," + window.innerHeight + ");");
    // Disable the touch events in the CocoonJS side so this event is not called when there is touches over the webview.
    CocoonJS.App.disableTouchInCocoonJS();
});

canvas.addEventListener("mousedown", function(clickEvent) 
{ 
    CocoonJS.App.forwardAsync("CocoonJS.App.show(0, 0, " + window.innerWidth/2 + "," + window.innerHeight + ");");
}, false);

CocoonJS.App.onLoadInTheWebViewSucceed.addEventListener(function() 
{
    CocoonJS.App.forwardAsync("CocoonJS.App.show(0, 0, " + window.innerWidth/2 + "," + window.innerHeight + ");");
});

CocoonJS.App.loadInTheWebView("WV.html");


function captureScreen()
{
    try
    {

        /* Screen Capture can be Sync or Async. Sync mode allows to capture the screen even in the middle of a frame rendering.
        * Async mode captures a final frame as soon as possible.
        */

        //In this demo we use the External Storage to make easier extracting the saved images. In a production app its recommended to use TEMPORARY_STORAGE
        CocoonJS.App.captureScreenAsync("capture.png", "EXTERNAL_STORAGE", CocoonJS.App.CaptureType.EVERYTHING,
            function(url)
            {
                 console.log("Screen captured: " + url);
            });


    }
    catch(ex)
    {
        console.error("Error capturing screen: " + ex);
    }

}






