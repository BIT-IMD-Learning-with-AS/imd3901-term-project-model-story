'use strict'

AFRAME.registerComponent('tele-button', {
    schema: {
    },
    init: function () {
        //this is basically like setup in Open Frameworks
        //called once when program starts.
        //also,, it is only called once the entire A-Frame scene is built.

        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const player = document.getElementById('camera')
        const pos = CONTEXT_AF.el.getAttribute("position")
        //CONTEXT_AF.bg = document.querySelector('#back-environment');

        CONTEXT_AF.el.addEventListener('click', function () {

            camera.setAttribute('position', pos);
            camera.object3D.position.y += 6;
        });


    }
});
