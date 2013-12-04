// MOPUB
var banner1Params = {
    "bannerAdUnit-iPad": "agltb3B1Yi1pbmNyDQsSBFNpdGUYk8vlEww",
    "bannerAdUnit-iPhone": "agltb3B1Yi1pbmNyDQsSBFNpdGUY5dDoEww",
    "refresh": 20
};
var fullscreen1Params = {
    "fullscreenAdUnit-iPad": "agltb3B1Yi1pbmNyDQsSBFNpdGUYjf30Eww",
    "fullscreenAdUnit-iPhone": "agltb3B1Yi1pbmNyDQsSBFNpdGUYjf30Eww",
    "refresh": 20
};

var x = 0;
var y = 0;
var fullscreen1, banner1;
(function() {

    function start() {
        // Banner
        var banner1 = CocoonJS.Ad.createBanner(banner1Params);
        banner1.onBannerShown.addEventListener(function() {
            console.log("banner1 onBannerShown");
        });
        banner1.onBannerHidden.addEventListener(function() {
            console.log("banner1 onBannerHidden");
        });
        banner1.onBannerReady.addEventListener(function(width, height)
        {
            console.log("banner1 onBannerReady (" + width + ", " + height + ")");

            // You need to layout the banner after receiving a onBannerReady event as that's the point
            // where we know the banner dimensions.
            console.log("window.innerWidth: " + window.innerWidth + ", window.innerHeight: " + window.innerHeight);
            x = window.innerWidth/2 - width/2;
            if (y == 0)
                y = window.innerHeight - height;
            else
                y = 0;

            var rect = new CocoonJS.Ad.Rectangle(x, y, width, height);
            banner1.setRectangle(rect);
            banner1.showBanner();
        });
        banner1.refreshBanner();

        // Pregame Fullscreen
        var fullscreen1 = CocoonJS.Ad.createFullscreen(fullscreen1Params);
        fullscreen1.onFullScreenShown.addEventListener(function()
        {
            console.log("fullscreen1 onFullScreenShown");
        });
        fullscreen1.onFullScreenHidden.addEventListener(function()
        {
            console.log("fullscreen1 onFullScreenHidden");
        });
        fullscreen1.onFullScreenReady.addEventListener(function()
        {
            console.log("fullscreen1 onFullScreenReady");
        });
        fullscreen1.refreshFullScreen();
        drawCanvas();

    }
    
    function drawCanvas(){

        var canvas= document.createElement("canvas");
        canvas.style.cssText="idtkscale:ScaleAspectFit;";  // CocoonJS extension
        canvas.width= 960;
        canvas.height= 640;

        document.body.appendChild(canvas);

        ctx= canvas.getContext("2d");

        var image= new Image();
        image.onload=function() {
            ctx.drawImage( image,0,0 );

            var touchOrClick = function(x, y)
            {
                if ( x>=473 && x<=473+342 ) {
                    if ( y>=171 && y<=171+55 ) 
                    {
                        banner1.showBanner();
                    } 
                    else if ( y>=244 && y<=244+55 ) 
                    {
                        banner1.hideBanner();
                    } 
                    else if ( y>=321 && y<=321+55 ) 
                    {
                        fullscreen1.showFullScreen();
                    } 
                    else if ( y>=397 && y<=397+55 ) 
                    {
                        // Other way of laying the banners out, using a rect to set the area the banner is going to fill.
                        var rect = banner1.getRectangle();
                        rect.x = window.innerWidth/2 - rect.width/2;
                        if (rect.y == 0)
                            rect.y = window.innerHeight - rect.height;
                        else
                            rect.y = 0;
                        banner1.setRectangle(rect);
                        banner1.showBanner();
                    }
                    else
                    {
                        banner1.refreshBanner();
                    }
                }
            }

            canvas.addEventListener
            (
                "click", 
                function(e)
                {
                    var x = e.clientX - canvas.offsetLeft;
                    var y = e.clientY - canvas.offsetTop;

                    touchOrClick(x, y);
                }
            );

            canvas.addEventListener(
                "touchstart",
                function( touches ) {
                    var touch = touches.targetTouches[0];

                    var x= touch.pageX;
                    var y= touch.pageY;

                    touchOrClick(x, y);

                },
                false
            );

            setInterval( 
                function()
                {
                    ctx.drawImage( image,0,0 );
                }, 
                1000/60 
            );
        };
        image.src="resources/images/asiqueda-old.png";
    }
    window.addEventListener("load",start,false);

})();