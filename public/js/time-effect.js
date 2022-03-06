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
                isDay = false;
            }
            else {
                //set Day
                bg.setAttribute('environment', 'preset:forest;');
                isDay = true;
            }
        });
   
   
    }
});
