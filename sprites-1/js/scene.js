/**
 * See LICENSE file.
 *
 * Sprites demo 1 | Some UFO with trailing smoke.
 */
var HN= {};

(function() {

    var smokeImage;
    var smokeCache= [];

    function createSmoke() {
        return new CAAT.Actor().
            setBackgroundImage(smokeImage).
            setDiscardable(true).
            enableEvents(false).
            addBehavior(
                new CAAT.ScaleBehavior().
                    setValues(.5, 1.5, .5, 1.5).
                    setId(10)).
            addBehavior(
                new CAAT.AlphaBehavior().
                    setValues(1,0).
                    setId(11) ).
            addListener( {
                actorLifeCycleEvent : function(actor, sEventType, time) {
                    if ( sEventType==="expired" ) {
                        smokeCache.push( actor );
                    }
                }
            });
    }

    function getSmoke() {
        if ( smokeCache.length===0 ) {
            for( var i=0; i<50; i++ ) {
                smokeCache.push( createSmoke() );
            }
            console.log("cache");
        }

        return smokeCache.pop();
    }

    HN.Ovni= function(director, ovnitrail, id ) {

        HN.Ovni.superclass.constructor.call(this);

        var i=Math.random()<.5 ? 1 : 2;

        this.setBackgroundImage( director.getImage("ovni"+i) );
        this.enableEvents(false);
        this.setId(id);

        setupBehavior(director, ovnitrail, this);

        return this;
    };

    function setupBehavior(director, ovnitrail, actor) {

        var TT=1000;
        if ( director.glEnabled ) {
            TT=6000;
        }


        var path= new CAAT.Path().setQuadric(
            Math.random() * director.width,
            Math.random() * director.height,
            Math.random() * director.width,
            Math.random() * director.height,
            Math.random() * director.width,
            Math.random() * director.height);

        var pb= new CAAT.PathBehavior().
            setValues( path ).
            setDelayTime( 0, 3000 + Math.random() * 3000 ).
            addListener( {
                prevTime : -1,
                smokeTime: TT,
                nextSmokeTime: 100,

                behaviorExpired : function(behaviour, time) {
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
                    behaviour.setDelayTime(0, 3000 + Math.random() * 3000);
                },

                behaviorApplied : function(behavior, time, normalizedTime, actor, value) {
                    if (-1 == this.prevTime || time - this.prevTime >= this.nextSmokeTime) {

                        var img = smokeImage;
                        var offset0 = Math.random() * 10 * (Math.random() < .5 ? 1 : -1);
                        var offset1 = Math.random() * 10 * (Math.random() < .5 ? 1 : -1);
                        var humo = getSmoke();
                        humo.setLocation(
                                offset0 + actor.x + actor.width / 2 - img.width / 2,
                                offset1 + actor.y + actor.height / 2 - img.height/ 2).
                            setFrameTime(time, this.smokeTime);

                        humo.getBehavior(10).setDelayTime(0, this.smokeTime);
                        humo.getBehavior(11).setDelayTime(0, this.smokeTime);

                        ovnitrail.addChild(humo);

                        this.prevTime = time;
                    }
                }

            });

        actor.addBehavior( pb );
    }

    extend( HN.Ovni, CAAT.Actor );

    function start() {
        new CAAT.ImagePreloader().loadImages(
            [
                {id:'smoke',    url: 'resources/images/humo.png'},
                {id:'ovni1',    url: 'resources/images/ovni.png'},
                {id:'ovni2',    url: 'resources/images/ovni2.png'},
                {id:'fondo',    url: 'resources/images/fondo.png'},
                {id:"+",        url: 'resources/images/+.png'},
                {id:"-",        url: 'resources/images/-.png'},
                {id:"marco",    url: "resources/images/marco.png"}
            ],
            function( counter, images ) {
                if ( counter===images.length ) {
                    endLoading(images);
                }
            }
        );
    }

    function endLoading(images)   {

        var dw= window.innerWidth;
        var dh= window.innerHeight;

        var director= new CAAT.Director().initialize( dw, dh ).setClear(false);
        director.setImagesCache( images );
        var scene= director.createScene();

        smokeImage= director.getImage('smoke')

        scene.addChild( new CAAT.Actor().
            setBounds(0,0,dw,dh).
            setBackgroundImage( director.getImage("fondo"), false).
            setImageTransformation( CAAT.SpriteImage.prototype.TR_FIXED_TO_SIZE ) );

        var ovnitrail= new CAAT.ActorContainer().setBounds(0,0,dw,dh);
        scene.addChild(ovnitrail);

        var ovnies= new CAAT.ActorContainer().setSize( dw, dh );
        scene.addChild( ovnies );

        for (var i = 0; i < 5; i++) {
            ovnies.addChild( new HN.Ovni( director, ovnitrail, 'ovni'+i ) );
        }

        var controls= new CAAT.ActorContainer().
            setBackgroundImage( director.getImage("marco") );
        controls.setLocation( (scene.width-controls.width)/2, scene.height-controls.height-20 );

        var mas= new CAAT.Actor().setBackgroundImage( director.getImage("+") );
        mas.setLocation( (controls.width/2-mas.width-10), (controls.height-mas.height)/2 + 15 );
        mas.mouseUp= function(e) {
            ovnies.addChild( new HN.Ovni( director, ovnitrail, 'ovni'+i ) );
        };

        var menos= new CAAT.Actor().setBackgroundImage( director.getImage("-") );
        menos.setLocation( (controls.width/2+6), (controls.height-mas.height)/2 + 15 );
        menos.mouseUp= function(e) {
            ovnies.removeFirstChild();
        };

        controls.addChild( mas );
        controls.addChild( menos );

        scene.addChild( controls );
        CAAT.loop(60);
    }

    window.addEventListener( "load", start, false );
})();