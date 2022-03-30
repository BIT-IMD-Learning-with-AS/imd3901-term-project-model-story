'use strict'

AFRAME.registerComponent('environment-effect', {
    schema : {
    },
    init : function () {
        //This objectives array is where we store completed puzzles. 
        let objectives = [0,0,0,0,0];
        let sound = document.getElementById("sound-fx");

        //0: if the land bridge puzzle is complete
        if (objectives[0] === 1)
        {
            //swap whatever landbridge model for another gltf.
            //THIS IS HYPOTHETICAL AS THE BRIDGE MODELS ARENT SET UP YET
            //document.getElementById('landBridge').setAttribute('gltf-model',"#landBridge_model")
        }

        //1: if the watering can puzzle is complete
        if (objectives[1] === 1)
        {
            sound.setAttribute('sound', {src:'#good1_sfx'});
            //basically just add a metric butt-ton of PLANTS
            //either have them pre-placed and load them, or just spawn them similar to A2.
            //entirely dependant on the outdoorsy layout, so I can't have it written out yet, but general idea is as follows:
            
            //const folliage = document.createElement("a-entity");
            //folliage.setAttribute('class', 'folliage');
            //folliage.setAttribute('position', {x: 0, y:0.2, z:0});
            //folliage.setAttribute('gltf-model', '#folliage_model');

            //REPEAT THE ABOVE CODE AS MUCH AS NEEDED FOR OUR GREENS
        }

        //2: sewage puzzle
        if (objectives[2] === 1)
        {
            sound.setAttribute('sound', {src:'#good1_sfx'});
            //change the colour of the object, or load in a second model
        }

        //3: stars
        if (objectives[3] === 1)
        {
            sound.setAttribute('sound', {src:'#good1_sfx'});
            //change the background.
            //might have to rebuild the environment at this point.
        }

        //4: Crickets puzzle
        if (objectives[4] === 1)
        {
            sound.setAttribute('sound', {src:'#good1_sfx'});
            //Easiest effects to change because it's just swapping sound effects.
            document.getElementsByClassName('ambient-music').setAttribute('sound', {src:'#bird_amb'});
        }

        //Check all
        if (objectives === [1,1,1,1,1])
        {
            sound.setAttribute('sound', {src:'#good1_sfx'});
            //Trigger Win Screen
            //Take code from intro screen and just rework it

        }
    }
});
