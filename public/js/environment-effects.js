'use strict'

AFRAME.registerComponent('environment-effect', {
    schema : {
    },
    init : function () {
        //This objectives array is where we store completed puzzles. 
        let objectives = [0,0,0,0,0];

        //0: if the land bridge puzzle is complete
        if (objectives[0] === 1)
        {
            //swap whatever landbridge model for another gltf.
        }

        //1: if the watering can puzzle is complete
        if (objectives[1] === 1)
        {
            //basically just add a metric butt-ton of PLANTS
            //either have them pre-placed and load them, or just spawn them similar to A2.
        }

        //2: sewage puzzle
        if (objectives[2] === 1)
        {
            //change the colour of the object, or load in a second model
        }

        //3: stars
        if (objectives[3] === 1)
        {
            //change the background.
            //might have to rebuild the environment at this point.
        }

        //4: Crickets puzzle
        if (objectives[4] === 1)
        {
            //Easiest effects to change because it's just swapping sound effects.
            document.getElementsByClassName('ambient-music').setAttribute('sound', {src:'#bird_amb'});
        }

        //Check all
        if (objectives === [1,1,1,1,1])
        {
            //Trigger Win Screen
            //Take code from intro screen and just rework it

        }

       // const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        
        //CONTEXT_AF.el.addEventListener('click', function() {
          //  if (bridge === true) {
                //swap scene to the landbridge
            //}
            //else {
                //bridgeless scene
            //}
        //});
   
   
    }
});
