(function () {
    /**
     * Startup it all up when the document is ready.
     * Change for your favorite frameworks initialization code.
     */
    window.addEventListener(
        'load',
        function () {
            new CAAT.ImagePreloader().loadImages(
                [
                    {id:'fondo', url:'resources/images/fondo.png'},
                    {id:'fish',  url:'resources/images/anim1.png'},
                    {id:'fish2', url:'resources/images/anim2.png'},
                    {id:'fish3', url:'resources/images/anim3.png'},
                    {id:'fish4', url:'resources/images/anim4.png'}
                ],
                function( counter, images ) {
                    if ( counter===images.length ) {
                        sprites(images);
                    }
                }
            );
        },
        false);

    function sprites(images) {

        var director= new CAAT.Director().initialize( window.innerWidth, window.innerHeight ).setClear(false);
        director.setImagesCache(images);

        var scene = director.createScene();

        var imageIndex = 0;
        var conpoundimagefish = [];
        conpoundimagefish.push(
            new CAAT.SpriteImage().initialize(
                director.getImage('fish'), 1, 3));
        conpoundimagefish.push(
            new CAAT.SpriteImage().initialize(
                director.getImage('fish2'), 1, 3));
        conpoundimagefish.push(
            new CAAT.SpriteImage().initialize(
                director.getImage('fish3'), 1, 3));
        conpoundimagefish.push(
            new CAAT.SpriteImage().initialize(
                director.getImage('fish4'), 1, 3));

        function addFish(x, y) {

            var scale = Math.random()*2 + .5;

            var fish = new CAAT.Actor().
                setBackgroundImage(
                conpoundimagefish[(imageIndex++) % conpoundimagefish.length].getRef(),
                true).
                setLocation(x, y).
                setScale(scale, scale).
                setAnimationImageIndex([0, 1, 2, 1]).
                setChangeFPS(300).
                enableEvents(false);

            scene.addChild(fish);

            var pbfish = new CAAT.PathBehavior().
                setAutoRotate(true, CAAT.PathBehavior.autorotate.LEFT_TO_RIGHT).
                setPath(
                new CAAT.Path().setLinear(x, y, x, y)).
                setInterpolator(
                new CAAT.Interpolator().createExponentialInOutInterpolator(2, false)).
                setFrameTime(scene.time, 10).
                addListener({
                    behaviorExpired:function (behaviour, time) {
                        var endCoord = behaviour.path.endCurvePosition();
                        behaviour.setPath(
                            new CAAT.Path().setCubic(
                                endCoord.x,
                                endCoord.y,
                                Math.random() * director.width,
                                Math.random() * director.height,
                                Math.random() * director.width,
                                Math.random() * director.height,
                                Math.random() * director.width,
                                Math.random() * director.height));
                        behaviour.setFrameTime(scene.time, 3000 + Math.random() * 3000);
                    }
                });

            fish.addBehavior(pbfish);
        }

        var gr = new CAAT.ActorContainer().
            setBackgroundImage( director.getImage("fondo"), false ).
            setSize( director.width, director.height ).
            setImageTransformation( CAAT.SpriteImage.prototype.TR_FIXED_TO_SIZE).
            enableEvents(false);

        scene.addChild(gr);

        gr.enableEvents(true);
        gr.mouseUp = function (ev) {
            addFish(ev.point.x, ev.point.y);
        };

        addFish(100, 100);

        CAAT.loop(60);
    }


})();