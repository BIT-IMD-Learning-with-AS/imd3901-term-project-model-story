'use strict'
//Land Bridge
AFRAME.registerComponent('landBridge-effect', {
    init : function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener('click', function() {
            //Effectively just changing one asset for another.
            //this is a test, as I dont have the proper assets yet.
            console.log("Landbridge changed.");
            //document.getElementById("fridge").removeAttribute('gltf-model');
            //document.getElementById("fridge").setAttribute('gltf-model', '#kSE_model')
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
             //console.log("Music changed.");
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
    schema : {
        
     },
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
    schema : {
        
     },
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
            console.log("river changed.");
             //Either changing the material, or once again changing one asset for another.

         });
     }
 });