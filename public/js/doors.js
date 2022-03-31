'use strict'

AFRAME.registerComponent('door-swing', {
    schema : {
        //list properties
    },
    init : function(){
        //called when program starts
        //only called once AFRAME is built

        const CONTEXT_AF = this; // 'this' is this component

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log(this);
        });
    }
})