pc.script.create('scene_settings', function (context) {
    var SceneSettings = function (entity) {
        this.entity = entity;
    };

    SceneSettings.prototype = {
        initialize: function () {
            context.scene.setGlobalAmbient(0.25, 0.25, 0.25);
        }
    };

   return SceneSettings;
});