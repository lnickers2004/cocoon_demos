(function() {
    /***
    This demo only Works on the CocoonJS environment.
    */
    if(!CocoonJS.nativeExtensionObjectAvailable) return;

    var demo = {
        isHidden: false,
        position: CocoonJS.Ad.BannerLayout.BOTTOM_CENTER,
        x : 0,
        y : 0,
        width : 0,
        height : 0,
        ctx:null,
        fullScreenAdvertisement : null,
        fullScreenAlreadyDownloaded: false,
        params: {
            banner : {
                "status" : null
            },
            fullscreen : {
                "status" : null
            }
        }
    };

    demo.createAdBanners = function(){
        CocoonJS.Ad.onBannerShown.addEventListener(function()
        {
            console.log("onBannerShown");
            demo.params.banner.status = "onBannerShown";
            demo.isBannerHidden = false;
        });

        CocoonJS.Ad.onBannerHidden.addEventListener(function()
        {
            console.log("onBannerHidden");
            demo.params.banner.status = "onBannerHidden";
            demo.isBannerHidden = true;
        });
        
        CocoonJS.Ad.onBannerReady.addEventListener(function(width,height)
        {
            console.log("onBannerReady " + width, height);

            var rect = CocoonJS.Ad.getRectangle();
            if (demo.position == CocoonJS.Ad.BannerLayout.TOP_CENTER) {
                rect.x = window.innerWidth/2 - rect.width/2;
                rect.y = 0;
            
            } else {
                rect.x = window.innerWidth/2 - rect.width/2;
                rect.y = window.innerHeight - rect.height;    
            }

            CocoonJS.Ad.setRectangle(rect);
            if (!demo.isBannerHidden)
                CocoonJS.Ad.showBanner();
        });

    }

    demo.createFullscreenAds = function(){
         // Pregame Fullscreen
         CocoonJS.Ad.onFullScreenShown.addEventListener(function()
         {
            demo.params.fullscreen.status = "onFullScreenShown";
            demo.params.fullscreen.sub_status = "";
            console.log("onFullScreenShown");
        });
        CocoonJS.Ad.onFullScreenHidden.addEventListener(function()
         {
            console.log("onFullScreenHidden");
            demo.params.fullscreen.status = "Full screen hidden,";
            demo.params.fullscreen.sub_status = "press CACHE AD to download another ad.";
        });
        CocoonJS.Ad.onFullScreenReady.addEventListener(function()
         {
            demo.fullScreenAlreadyDownloaded = true;
            demo.params.fullscreen.status = "Full screen ready,";
            demo.params.fullscreen.sub_status = "press SHOW FULL SCREEN to watch the ad.";
        });
     }

     demo.init = function(){

        var canvas= document.createElement("canvas");
        canvas.style.cssText="idtkscale:ScaleAspectFit;";  // CocoonJS extension
        canvas.width= 960;
        canvas.height= 640;

        document.body.appendChild(canvas);

        ctx= canvas.getContext("2d");
        demo.ctx = ctx;
        var image= new Image();
        image.onload=function() {
            ctx.drawImage( image,0,0 );

            var touchOrClick = function(x, y)
            {

                if(x >= 540 && x <= 885 && y >= 200 && y <= 255){
                    CocoonJS.Ad.showBanner();
                }else if (x >= 540 && x <= 885 && y >= 273 && y <= 327){
                    CocoonJS.Ad.hideBanner();
                }else if (x >= 540 && x <= 885 && y >= 350 && y <= 403){
                    // Other way of laying the banners out, using a rect to set the area the banner is going to fill.
                    var rect = CocoonJS.Ad.getRectangle();

                    if (demo.position == CocoonJS.Ad.BannerLayout.BOTTOM_CENTER) {
                        console.log("onBannerReady " + rect.width,rect.height);
                        rect.x = window.innerWidth/2 - rect.width/2;
                        rect.y = 0;

                        demo.position = CocoonJS.Ad.BannerLayout.TOP_CENTER;
                    
                    } else {
                        rect.x = window.innerWidth/2 - rect.width/2;
                        rect.y = window.innerHeight - rect.height;    

                        demo.position = CocoonJS.Ad.BannerLayout.BOTTOM_CENTER;
                    }

                    if (!demo.isBannerHidden) {
                        CocoonJS.Ad.setRectangle(rect);
                        CocoonJS.Ad.showBanner();
                    }
                }else if (x >= 540 && x <= 885 && y >= 430 && y <= 482){
                    demo.params.banner.status = "Downloading banner...";
                    CocoonJS.Ad.refreshBanner();
                }else if (x >= 77 && x <= 418 && y >= 200 && y <= 254){
                    demo.params.fullscreen.status = "Showing ad";
                    demo.params.fullscreen.sub_status = "";
                    CocoonJS.Ad.showFullScreen();
                }else if (x >= 77 && x <= 418 && y >= 272 && y <= 325){
                    console.log("Downloading fullscreen...");
                    demo.params.fullscreen.status = "Downloading full screen...";
                    demo.params.fullscreen.sub_status = "";
                    CocoonJS.Ad.refreshFullScreen();
                }else{
                    console.log("No button selected: ", x | 0 , y | 0);
                }

            }

            canvas.addEventListener(
                "touchstart",
                function( touches ) {
                    var that = touches.targetTouches[0];
                    
                        var x= that.pageX;
                        var y= that.pageY;
                        touchOrClick(x, y);

                },
                false
                );
            setInterval(function(){

                ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
                
                ctx.drawImage(image,0,0);

                ctx.fillStyle = '#888';
                ctx.font = '22px Arial';
                ctx.textBaseline = 'bottom';
                ctx.fillText('Full screen status: '+demo.params.fullscreen.status, 77, 510);
                ctx.fillText('Banner status: '+demo.params.banner.status, 540, 510);
                ctx.fillText(demo.params.fullscreen.sub_status, 77, 530);
                
            },1000 / 60);
            
        };
        image.src="resources/images/asiqueda.png";
    }
    /***
    * So here is the magic, the following method is the best way to create banners and show them on the screen:
    * - Create the banners // fullscreen ads (this will add the listeners to manage the ads)
    * - When there is an ad cached, you will be notified by the onBannerReady method, then you can show it.
    * 
    * More information about the ads extension can be found here:
    * http://wiki.ludei.com/cocoonjs:extensions:ad
    */

    // Create banner ads trought the CocoonJS Ads extension
    demo.createAdBanners();
    // Create fullscreen ads trought the CocoonJS Ads extension
    demo.createFullscreenAds();

    /*
        Download ad banners // fullscreen ads
    */
    CocoonJS.Ad.preloadBanner();
    CocoonJS.Ad.preloadFullScreen();

    /***
    * Ads are ready, show the canvas to manage them:
    */
    demo.params.banner.status = "Downloading banner...";
    demo.params.fullscreen.status = "Downloading full screen...";
    demo.params.fullscreen.sub_status = "";
    demo.init();
    
})();