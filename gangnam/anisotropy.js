pc.script.create('anisotropy', function (context) {
    var Anisotropy = function (entity) {
        this.entity = entity;
    };

    Anisotropy.prototype = {
        initialize: function () {
            var model = this.entity.model.model;
            var textures = model.textures;
            for (var i = 0; i < textures.length; i++) {
                var texture = textures[i];
                texture.maxAnisotropy = pc.gfx.Device.getCurrent().maxSupportedMaxAnisotropy;
            }
        },
        
        update: function (dt) {
        }
    };

   return Anisotropy;
});