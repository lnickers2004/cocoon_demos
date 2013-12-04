/**
 * See LICENSE file.
 *
 * Multi touch demo | Play with up to 11 touch points on iOS 4.3, 4 on playbook, 5 on iOS 5.xx and at least 2 on android.
 */
        CAAT.TOUCH_BEHAVIOR= CAAT.TOUCH_AS_MULTITOUCH;

        function __start() {

            var img= document.createElement('img');
            img.onload= function(ev) {

                var director= new CAAT.Director().initialize(window.innerWidth, window.innerHeight, document.getElementById("experiment-canvas"));

                var scene= director.createScene();

                var cc= new CAAT.ActorContainer().setBounds( 0,0,window.innerWidth, window.innerHeight).setId(99).setGestureEnabled(false);
                var W= img.width;
                var H= img.height;

                scene.addChild( cc );

                // Common functions to handle touch start, move and end using CAAT actors.
                var touchStart = function(ids, xs, ys)
                {
                    for( var i=0; i< ids.length; i++ ) {
                        var id= ids[i];
                        var actor= new CAAT.Actor().
                                setBackgroundImage( img ).
                                enableEvents(false).
                                setGestureEnabled(false).
                                setId( id ).
                                setLocation( xs[i]-W/2, ys[i]-H/2);

                        cc.addChild( actor );
                    }
                };

                var touchMove = function(ids, xs, ys)
                {
                    for (var i = 0; i < ids.length; i++)
                    {
                        var actor= cc.findActorById(ids[i]);
                        actor.setLocation(xs[i]-W/2, ys[i]-H/2);
                    }
                };

                var touchEnd = function(ids)
                {
                    for( var i=0; i< ids.length; i++ ) {
                        var actor= cc.findActorById(ids[i]);
                        actor.destroy();
                    }
                };

                // Support for the browser mouse events
                var touchIds = [];
                director.canvas.addEventListener("mousedown", function(e)
                {
                    touchIds = [1];
                    var x = e.clientX - director.canvas.offsetLeft;
                    var y = e.clientY - director.canvas.offsetTop; 
                    touchStart(touchIds, [x], [y]);
                });
                director.canvas.addEventListener("mousemove", function(e)
                {
                    var x = e.clientX - director.canvas.offsetLeft;
                    var y = e.clientY - director.canvas.offsetTop; 
                    touchMove(touchIds, [x], [y]);
                });
                var mouseUpAndMouseOut = function(e)
                {
                    touchEnd(touchIds);
                    touchIds = [];
                };
                director.canvas.addEventListener("mouseup", mouseUpAndMouseOut);
                director.canvas.addEventListener("mouseout", mouseUpAndMouseOut);

                // Support for CAAT multitouch events
                cc.touchStart= function( e ) {
                    var ids = [];
                    var xs = [];
                    var ys = [];
                    for( var i=0; i< e.changedTouches.length; i++ ) {
                        var touch= e.changedTouches[i];
                        ids.push(touch.identifier);
                        xs.push(touch.pageX);
                        ys.push(touch.pageY);
                    }
                    touchStart(ids, xs, ys);
                };

                cc.touchMove= function( e ) {
                    var ids = [];
                    var xs = [];
                    var ys = [];
                    for( var i=0; i< e.changedTouches.length; i++ ) {
                        ids.push(e.changedTouches[i].identifier);
                        xs.push(e.changedTouches[i].pageX);
                        ys.push(e.changedTouches[i].pageY);
                    }
                    touchMove(ids, xs, ys);
                };

                cc.touchEnd= function( e ) {
                    var ids = [];
                    for( var i=0; i< e.changedTouches.length; i++ ) {
                        ids.push(e.changedTouches[i].identifier);
                    }
                    touchEnd(ids);
                };

                director.canvas.addEventListener("click", function(e)
                {
                    var x = e.clientX - director.canvas.offsetLeft;
                    var y = e.clientY - director.canvas.offsetTop; 
                    console.log("click (x: " + x + " y: " + y + ")");
                });
                director.canvas.addEventListener("dblclick", function(e)
                {
                    var x = e.clientX - director.canvas.offsetLeft;
                    var y = e.clientY - director.canvas.offsetTop; 
                    console.log("dblclick (x: " + x + " y: " + y + ")");
                    
                });

                CAAT.loop(60);
            };

            img.src= "resources/images/logo_big.png";
        }

        /**
         * Startup it all up when the document is ready.
         * Change for your favorite frameworks initialization code.
         */
        window.addEventListener('load', __start, false);
