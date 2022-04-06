'use strict'

//Land Bridge
AFRAME.registerComponent('bridge-effect', {
    init : function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener('click', function() {
            //make land bridge visible.
            const bridges = document.querySelectorAll(".landBridge");
            for (let i = 0; i < bridges.length; i++) {
                bridges[i].setAttribute('visible', true);
            } 
        });
    }
});

//Bird sounds
//CHANGE OFFICIALLY WORKS, JUST NEED IT TO BE APPLIED POST-PUZZLE.
AFRAME.registerComponent('birds-effect', {
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
             //Changing city sounds to the birds.
             document.getElementById("city_sounds").pause();
             document.getElementById("bird_sounds").components.sound.playSound();
         });
     }
 });

 //Stars Return
AFRAME.registerComponent('stars-effect', {
    schema : {
        
     },
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
             //Either spawn lights or...?
             console.log("stars changed.");

         });
     }
 });
 //Plantlife grows
AFRAME.registerComponent('plant-effect', {
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
             //Plants growing
             console.log("plants changed.");

         });
     }
 });

 //River Changes
AFRAME.registerComponent('river-effect', {
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
            console.log("river changed.");
             //Either changing the material, or once again changing one asset for another.

         });
     }
 });