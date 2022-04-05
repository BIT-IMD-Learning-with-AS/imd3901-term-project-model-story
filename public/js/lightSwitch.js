'use strict'

AFRAME.registerComponent('ls1', {
    schema: {
    },
    init: function () {

        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const l= document.getElementById('l1');
        let on = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            if (on){
                l.setAttribute('light', "intensity: 0.0;");
                on = false;
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
            }
        });


    }
});
