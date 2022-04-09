'use strict'

//Land Bridge
AFRAME.registerComponent('bridge-effect', {
    init : function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener('click', function() {
            document.getElementById('good-sound-fx').components.sound.playSound();
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
            document.getElementById('good-sound-fx').components.sound.playSound();
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
            document.getElementById('good-sound-fx').components.sound.playSound();

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

            document.getElementById('good-sound-fx').components.sound.playSound();
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
                var randX=Math.floor((Math.random() * 199) -99);
                var randZ=Math.floor((Math.random() * 149) -29);
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
                tree.setAttribute('scale','6, 6, 6');

                //add to scene
                let trees = document.getElementById("trees")
                trees.appendChild(tree)

                //plant growth
                //JANKY I KNOW, SORRY
                //plant01
                document.getElementById('plant01-01').setAttribute('visible', false);
                document.getElementById('plant01-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant01-02').setAttribute('visible', false);
                    document.getElementById('plant01-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant01-03').setAttribute('visible', false);
                    document.getElementById('plant01-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant01-04').setAttribute('visible', false);
                    document.getElementById('plant01-05').setAttribute('visible', true);
                },1000);

                //plant02
                document.getElementById('plant02-01').setAttribute('visible', false);
                document.getElementById('plant02-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant02-02').setAttribute('visible', false);
                    document.getElementById('plant02-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant02-03').setAttribute('visible', false);
                    document.getElementById('plant02-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant02-04').setAttribute('visible', false);
                    document.getElementById('plant02-05').setAttribute('visible', true);
                },1000);

                //plant03
                document.getElementById('plant03-01').setAttribute('visible', false);
                document.getElementById('plant03-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant03-02').setAttribute('visible', false);
                    document.getElementById('plant03-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant03-03').setAttribute('visible', false);
                    document.getElementById('plant03-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant03-04').setAttribute('visible', false);
                    document.getElementById('plant03-05').setAttribute('visible', true);
                },1000);

                //plant04
                document.getElementById('plant04-01').setAttribute('visible', false);
                document.getElementById('plant04-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant04-02').setAttribute('visible', false);
                    document.getElementById('plant04-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant04-03').setAttribute('visible', false);
                    document.getElementById('plant04-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant04-04').setAttribute('visible', false);
                    document.getElementById('plant04-05').setAttribute('visible', true);
                },1000);

                //plant 05
                document.getElementById('plant05-01').setAttribute('visible', false);
                document.getElementById('plant05-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant05-02').setAttribute('visible', false);
                    document.getElementById('plant05-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant05-03').setAttribute('visible', false);
                    document.getElementById('plant05-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant05-04').setAttribute('visible', false);
                    document.getElementById('plant05-05').setAttribute('visible', true);
                },1000);

                //plant 06
                document.getElementById('plant06-01').setAttribute('visible', false);
                document.getElementById('plant06-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant06-02').setAttribute('visible', false);
                    document.getElementById('plant06-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant06-03').setAttribute('visible', false);
                    document.getElementById('plant06-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant06-04').setAttribute('visible', false);
                    document.getElementById('plant06-05').setAttribute('visible', true);
                },1000);

                //plant 07
                document.getElementById('plant07-01').setAttribute('visible', false);
                document.getElementById('plant07-02').setAttribute('visible', true);
                setTimeout(function(){
                    document.getElementById('plant07-02').setAttribute('visible', false);
                    document.getElementById('plant07-03').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant07-03').setAttribute('visible', false);
                    document.getElementById('plant07-04').setAttribute('visible', true);
                },1000);
                setTimeout(function(){
                    document.getElementById('plant07-04').setAttribute('visible', false);
                    document.getElementById('plant07-05').setAttribute('visible', true);
                },1000);
             }
         });
     }
 });

 //River Changes
AFRAME.registerComponent('river-effect', {
     init : function () {
         const CONTEXT_AF = this;
         CONTEXT_AF.el.addEventListener('click', function() {
            document.getElementById('good-sound-fx').components.sound.playSound();
             //Change visibility once river model is available.
             const lights = document.querySelectorAll(".riverlight");
             for (let i = 0; i < lights.length; i++) {
                 lights[i].setAttribute('visible', true);
                 console.log("river changed.");
             }

         });
     }
 });