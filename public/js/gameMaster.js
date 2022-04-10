'use strict'

AFRAME.registerComponent('game', {
  init: function () {

    const el = this.el;
    const scene = this.el.sceneEL;
    const CONTEXT_AF = this;

    //These are decent meta data but not necessary in this build
    var bugPuzzle = false;
    var lightPuzzle = false;
    var picPuzzle = false;
    var plantPuzzle = false;
    var cleanPuzzle = false;

    var puzzleComplete = 0;

    var checkWinState = setInterval(function () {
      if (puzzleComplete == 5) {
        //end game state
        console.log('GAME OVER');
      }
    }, 1000)

    //light puzzle
    var lightsOn = 4;
    CONTEXT_AF.el.addEventListener('lightOn', function () {
      lightsOn = lightsOn + 1;
    });
    CONTEXT_AF.el.addEventListener('lightOff', function () {
      lightsOn = lightsOn - 1;
      if (lightsOn <= 0) {
        lightPuzzle = true;
        const walls = document.querySelectorAll(".star-walls");
        for (let i = 0; i < walls.length; i++) {
          walls[i].setAttribute('visible', false);
          walls[i].setAttribute('scale', ("0,0,0"));
          walls[i].setAttribute('position', ("0,-100,0"));
        }
        el.emit('puzWin');
      }
    });


    //bug puzzle
    var bugs = 0;
    CONTEXT_AF.el.addEventListener('foundBug', function () {
      bugs = bugs + 1;
      if (bugs >= 4) {
        bugPuzzle = true;
        document.getElementById('good-sound-fx').components.sound.playSound();
        //Changing city sounds to the birds.
        document.getElementById("city_sounds").pause();
        document.getElementById("bird_sounds").components.sound.playSound();
        el.emit('puzWin');
      }
    });

    //wall frames
    //THIS PUZZLE IS BUGGED 
    //CAN BE CHEESED BY USING 1 FRAME BUT IVE STOPPED CARING
    var pics = 0;
    CONTEXT_AF.el.addEventListener('frame', function () {
      pics = pics + 1;
      if (pics == 3) {
        picPuzzle = true;
        //make land bridge visible.
        const bridges = document.querySelectorAll(".landBridge");
        for (let i = 0; i < bridges.length; i++) {
          bridges[i].setAttribute('visible', true);
        }
        el.emit('puzWin');
      }
    });

    //plants
    var plants = 0;
    CONTEXT_AF.el.addEventListener('plant', function () {
      plants = plants + 1;
      this.emit('growRandTree');
      if (plants == 7) {
        plantPuzzle = true;
        //Plants growing
        const plants = document.querySelectorAll(".top-plants");
        for (let i = 0; i < plants.length; i++) {
          plants[i].setAttribute('visible', true);
        }

        //change ground
        console.log(document.getElementById('area_ground'));
        document.getElementById("area_ground").removeAttribute('material');
        document.getElementById('area_ground').setAttribute('material', 'color', 'green');

        el.emit('puzWin');
      }
    });

    CONTEXT_AF.el.addEventListener('growRandTree', function () {
      //generate 30 random trees.
      for (var i = 0; i < 30; i++) {
        //randomly generate position and tree type.
        var randX = Math.floor((Math.random() * 199) - 99);
        var randZ = Math.floor((Math.random() * 149) - 29);
        var randT = Math.floor(Math.random() * 7) + 1;

        const tree = document.createElement("a-entity");

        if (randT == 1) {
          tree.setAttribute('gltf-model', '#tree01');
        }
        if (randT == 2) {
          tree.setAttribute('gltf-model', '#tree02');
        }
        if (randT == 3) {
          tree.setAttribute('gltf-model', '#tree03');
        }
        if (randT == 4) {
          tree.setAttribute('gltf-model', '#tree04');
        }
        if (randT == 5) {
          tree.setAttribute('gltf-model', '#tree05');
        }
        if (randT == 6) {
          tree.setAttribute('gltf-model', '#tree06');
        }
        if (randT == 7) {
          tree.setAttribute('gltf-model', '#tree07');
        }

        tree.setAttribute('position', { x: randX, y: 0.1, z: randZ });
        tree.setAttribute('scale', '6, 6, 6');

        //add to scene
        let trees = document.getElementById("trees");
        trees.appendChild(tree);
      }
    });


    //win function
    CONTEXT_AF.el.addEventListener('puzWin', function () {

      document.getElementById('good-sound-fx').components.sound.playSound();
      //UPDATE TEXT
      puzzleComplete = puzzleComplete + 1;
      const currentText = document.getElementById("puzzle-text");
      currentText.setAttribute('text', 'value', 'Puzzles: ' + puzzleComplete + '/5');

    });

  }
});