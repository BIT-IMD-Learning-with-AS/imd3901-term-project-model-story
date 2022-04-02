'use strict'

AFRAME.registerComponent('bug', {
    schema : {
    },
    init : function () {
        var found = false;
        const CONTEXT_AF = this;
        CONTEXT_AF.el.object3D.visible = false;

        CONTEXT_AF.el.addEventListener('click', function() {
            if (found === false) {
                found = true;
                context.el.emit('foundBug', '', true);

            }
        });

        CONTEXT_AF.el.addEventListener('day', function(){
            CONTEXT_AF.el.object3D.visible = false;
            console.log('Hear you');
        })

        CONTEXT_AF.el.addEventListener('night', function(){
            CONTEXT_AF.el.object3D.visible = true;
        })
   
    }
});
