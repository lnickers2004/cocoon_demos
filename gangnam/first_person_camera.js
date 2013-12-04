pc.script.create('first_person_camera', function (context) {
    var FirstPersonCamera = function (entity) {
        this.entity = entity;

        // Temporary to store camera heading vector (a camera looks down negative z by default)
        this.heading = pc.math.vec3.create();

        // Camera euler angle rotation around x and y axes
        this.ex = 0;
        this.ey = 90;
        
        // Camera movement speed in units/second
        this.moveSpeed = 2;

        // Disabling the context menu stops the browser displaying a menu when 
        // you right-click the page
        context.mouse.disableContextMenu();
        context.mouse.bind(pc.input.EVENT_MOUSEMOVE, this.onMouseMove.bind(this));
        context.mouse.bind(pc.input.EVENT_MOUSEDOWN, function () {
            context.mouse.enablePointerLock();
        });

        //touch events
        this.lastX = 0;
        this.lastY = 0;    
        this.goUp = false;
        this.goDown = false;
        this.goLeft = false;
        this.goRight = false;    
        window.addEventListener("touchmove", this.onTouchMove.bind(this));
        window.addEventListener("touchstart", this.onTouchStart.bind(this));
        window.addEventListener("touchend", this.onTouchEnd.bind(this));
    };

    FirstPersonCamera.prototype = {
        update: function (dt) {
            // Calculate the camera's heading in the XZ plane
            var transform = this.entity.getWorldTransform();
            pc.math.mat4.getZ(transform, this.heading);
            this.heading[0] = -this.heading[0];
            this.heading[1] = 0;
            this.heading[2] = -this.heading[2];
            pc.math.vec3.normalize(this.heading, this.heading);
            pc.math.vec3.scale(this.heading, this.moveSpeed, this.heading);

            // Strafe left/right
            if (context.keyboard.isPressed(pc.input.KEY_LEFT) ||
                context.keyboard.isPressed(pc.input.KEY_A) || this.goLeft) {
                this.entity.translate(this.heading[2] * dt, 0, -this.heading[0] * dt);
            } else if (context.keyboard.isPressed(pc.input.KEY_RIGHT) ||
                       context.keyboard.isPressed(pc.input.KEY_D) || this.goRight) {
                this.entity.translate(-this.heading[2] * dt, 0, this.heading[0] * dt);
            }

            // Move forwards/backwards
            if (context.keyboard.isPressed(pc.input.KEY_UP) ||
                context.keyboard.isPressed(pc.input.KEY_W) || this.goUp) {
                this.entity.translate(this.heading[0] * dt, 0, this.heading[2] * dt);
            } else if (context.keyboard.isPressed(pc.input.KEY_DOWN) ||
                       context.keyboard.isPressed(pc.input.KEY_S) || this.goDown) {
                this.entity.translate(-this.heading[0] * dt, 0, -this.heading[2] * dt);
            }

            // Update the camera's orientation
            this.entity.setEulerAngles(this.ex, this.ey, 0);
        },

        onMouseMove: function (event) {
            if (pc.input.Mouse.isPointerLocked()) {
                this.ex -= event.dy / 5;
                this.ex = pc.math.clamp(this.ex, -30, 30);
                this.ey -= event.dx / 5;
            }
        },

        onTouchStart: function (event) {

            this.lastX = event.targetTouches[0].pageX;
            this.lastY = event.targetTouches[0].pageY;

        },
        checkTouches: function(touches) {
            var nUp = 0;
            var nLeft = 0;
            var nRight = 0;
            var nDown = 0;


            for (var i = 0; i< touches.length; ++i)
            {
                var x = touches[i].pageX;
                var y = touches[i].pageY;

                if (x < window.innerWidth * 0.25) nLeft++;
                if (x > window.innerWidth * 0.75) nRight++;
                if (y < window.innerHeight * 0.25) nDown++;
                if (y > window.innerHeight * 0.75) nUp++;
            }  

            this.goUp = nDown > 0;
            this.goDown = nUp > 0;
            this.goLeft = nLeft > 0;
            this.goRight = nRight > 0  
        },

        onTouchMove: function (event) {

            var touches = event.touches;
            if (touches.length > 1) {

                this.checkTouches(touches);
            }
            else  
            {
                this.goUp = false;
                this.goDown = false;
                this.goLeft = false;
                this.goRight = false; 

                var dx = touches[0].pageX - this.lastX;
                var dy = touches[0].pageY - this.lastY;
                this.lastX = touches[0].pageX;
                this.lastY = touches[0].pageY;

                this.ex -= dy/ 5;
                this.ex = pc.math.clamp(this.ex, -30, 30);
                this.ey -= dx / 5;
            }

        },

        onTouchEnd: function (event) {

            var touches = event.touches;
            if (touches.length > 1) {
                this.checkTouches(touches);
            }
            else if (touches.length === 1)
            {
                this.lastX = touches[0].pageX;
                this.lastY = touches[0].pageY;
                this.goUp = false;
                this.goDown = false;
                this.goLeft = false;
                this.goRight = false; 
            }

        },

    };

   return FirstPersonCamera;
});