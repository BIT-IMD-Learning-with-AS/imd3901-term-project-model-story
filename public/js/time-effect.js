'use strict'

AFRAME.registerComponent('time-effect', {
    schema : {
    },
    init : function () {
        //this is basically like setup in Open Frameworks
        //called once when program starts.
        //also,, it is only called once the entire A-Frame scene is built.

        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const bg = document.getElementById('bg')
        //CONTEXT_AF.bg = document.querySelector('#back-environment');
        var isDay = true;
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (isDay === true) {
                //set Night
                bg.setAttribute('environment', 'preset:starry;');
                const walls = document.querySelectorAll(".star-walls");
                for (let i = 0; i < walls.length; i++) {
                    walls[i].setAttribute('visible', true);
                } 
                isDay = false;
                CONTEXT_AF.el.emit('night')
            }
            else {
                //set Day
                bg.setAttribute('environment', 'preset:default;');
                const walls = document.querySelectorAll(".star-walls");
                for (let i = 0; i < walls.length; i++) {
                    walls[i].setAttribute('visible', false);
                } 
                isDay = true;
                CONTEXT_AF.el.emit('day')
            }
        });
   
   
    }
});
