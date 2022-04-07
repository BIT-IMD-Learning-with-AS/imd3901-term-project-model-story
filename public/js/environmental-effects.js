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

             const walls = document.querySelectorAll(".star-walls");
             for (let i = 0; i < walls.length; i++) {
                 walls[i].setAttribute('visible', false);
                 walls[i].setAttribute('scale', ("0,0,0"));
                 walls[i].setAttribute('position', ("0,-100,0"));
             }
         });
     }
 });
 //Plantlife grows
AFRAME.registerComponent('plant-effect', {
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
             //Plants growing
             const plants = document.querySelectorAll(".top-plants");
             for (let i = 0; i < plants.length; i++) {
                 plants[i].setAttribute('visible', true);
             }

             //change ground
             console.log(document.getElementById('area_ground'));
             document.getElementById("area_ground").removeAttribute('material');
             document.getElementById('area_ground').setAttribute('material', 'color',  'green');

             //generate 50 random trees.
             for (var i = 0; i < 100; i++){
                //randomly generate position and tree type.
                var randX=Math.floor((Math.random() * 149) -49);
                var randZ=Math.floor((Math.random() * 149) -49);
                var randT=Math.floor(Math.random() * 7) + 1;

                const tree = document.createElement("a-entity");

                if (randT == 1)
                {
                    tree.setAttribute('gltf-model','#tree01');
                }
                if (randT == 2)
                {
                    tree.setAttribute('gltf-model','#tree02');
                }
                if (randT == 3)
                {
                    tree.setAttribute('gltf-model','#tree03');
                }
                if (randT == 4)
                {
                    tree.setAttribute('gltf-model','#tree04');
                }
                if (randT == 5)
                {
                    tree.setAttribute('gltf-model','#tree05');
                }
                if (randT == 6)
                {
                    tree.setAttribute('gltf-model','#tree06');
                }
                if (randT == 7)
                {
                    tree.setAttribute('gltf-model','#tree07');
                }

                tree.setAttribute('position', {x: randX, y:0.1, z:randZ});
                tree.setAttribute('scale','7, 7, 7');

                //add to scene
                let trees = document.getElementById("trees")
                trees.appendChild(tree)

             }
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