'use strict'

AFRAME.registerComponent('time-effect', {
    schema : {
    },
    init : function () {
        //this is basically like setup in Open Frameworks
        //called once when program starts.
        //also,, it is only called once the entire A-Frame scene is built.

        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        CONTEXT_AF.bg = document.querySelector('#back-environment');
        CONTEXT_AF.isDay = true;
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (CONTEXT_AF.isDay=== true) {
                //stop spinning
                CONTEXT_AF.bg.setAttribute('environment', 'preset:starry;');
                CONTEXT_AF.isDay = false;
            }
            else {
                //start spinning
                CONTEXT_AF.bg.setAttribute('environment', 'preset:default;');
                CONTEXT_AF.isDay = true;
            }
        });
   
   
    }
});
