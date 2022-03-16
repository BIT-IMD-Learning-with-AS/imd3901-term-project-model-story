'use strict'

AFRAME.registerComponent('landBridge-effect', {
    schema : {
    },
    init : function () {
        //this is basically like setup in Open Frameworks
        //called once when program starts.
        //also,, it is only called once the entire A-Frame scene is built.

        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (bridge === true) {
                //swap scene to the landbridge
            }
            else {
                //bridgeless scene
            }
        });
   
   
    }
});


AFRAME.registerComponent('bird-effect', {
    schema : {
    },
    init : function () {
        const CONTEXT_AF = this; 
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (birds === true) {
                //swap scene to include birds
            }
            else {
                //birdless scene
            }
        });
    }
});

AFRAME.registerComponent('stars-effect', {
    schema : {
    },
    init : function () {
        const CONTEXT_AF = this; 
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (birds === true) {
                //swap scene to include stars
            }
            else {
                //starless scene
            }
        });
    }
});

AFRAME.registerComponent('plantsGrow-effect', {
    schema : {
    },
    init : function () {
        const CONTEXT_AF = this; 
        
        CONTEXT_AF.el.addEventListener('click', function() {
            if (birds === true) {
                //swap scene to include more plants
            }
            else {
                //plant-less scene
            }
        });
    }
});