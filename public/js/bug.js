'use strict'

AFRAME.registerComponent('bug', {
    schema : {
    },
    init : function () {
        var found = false;
        var day = true;
        const CONTEXT_AF = this;
        const gm = document.getElementById('game');
        const clock = document.getElementById('clock');
        CONTEXT_AF.el.object3D.visible = false;

        CONTEXT_AF.el.addEventListener('click', function() {

            if (found == false) {
                found = true;
                gm.emit('foundBug');
                CONTEXT_AF.el.object3D.visible = false;
            }
        });

        clock.addEventListener('click', function(){
            if (day){
                if (!found){
                    CONTEXT_AF.el.object3D.visible = true;
                }
                day = false;
            }
            else{
                CONTEXT_AF.el.object3D.visible = false;
                day = true;
            }
        })

    }
});
