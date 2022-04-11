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
    const textEl = document.querySelector('#welcome-text');
    const buttonEl = document.querySelector('#user-gesture-button');

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
      el.emit('checkWin');

    });

    CONTEXT_AF.el.addEventListener('checkWin', function() {
      console.log('CHECKING WIN...');
      if (puzzleComplete >= 3)
      {
        //start credits
        console.log('GAME OVER');
        textEl.classList.remove('fade-out');
        textEl.innerHTML = "We can bring life back to this earth.";
        document.querySelector('#user-gesture-overlay').style.display = "block";
        document.querySelector('#user-gesture-overlay').classList.remove('fade-out');
        document.querySelector('#user-gesture-overlay').classList.add('fade-in');
        buttonEl.style.display="none";
        textEl.style.display = "none";
        buttonEl.removeAttribute('onclick');

        //messy code, but the transitions work.
              setTimeout(function(){
                textEl.style.display = "block";
                textEl.classList.add('fade-in');
              }, 2000);
              setTimeout(function(){
                textEl.classList.add('fade-out');
            }, 6000);
            setTimeout(function(){
              textEl.classList.remove('fade-out');
              textEl.innerHTML = "Thank you for participating in our experience.";
            }, 8000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 9000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 12000);
            setTimeout(function(){
              textEl.classList.remove('fade-out');
              textEl.innerHTML = "Missing Piece was brought to you by: <br> ";
            }, 14000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 15000);

            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 18000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Erin Waldram <br><br> Project Manager <br> Coder";
            }, 20000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 21000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 24000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Gavin Isaac <br><br> Code Lead <br> Puzzle Ideation";
            }, 26000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 27000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 30000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Chris Hearty <br><br> Coder <br> 3D Modeller";
            }, 32000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 33000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 36000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Chloe Versace <br> <br> 3D Modeller";
            }, 38000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 39000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 42000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Zoe Prevost <br> <br> 3D Modeller";
            }, 44000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 45000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 48000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "In Association With: <br> <br>Anthony Scavarelli <br> Stephanie Babij <br> Kseniya Tsoy <br> Luc Lalande";
            }, 50000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 51000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 54000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Free Music By: <br><br> Harris Heller - StreamBeats <br> <br> Diamond Album <br> Track 02 - Serenity";
            }, 56000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 57000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 60000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Free 3D Assets By: <br><br> Kenny Game Assets <br> https://kenney.nl <br>";
            }, 62000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 63000);
            setTimeout(function(){
              textEl.classList.add('fade-out');
          }, 66000);
            setTimeout(function(){
            textEl.classList.remove('fade-out');
            textEl.innerHTML = "Goodbye.<br>";
            }, 68000);
            setTimeout(function(){
              textEl.classList.add('fade-in');
            }, 69000);

            setTimeout(function(){
              //Reloads/Exits experience
              location.reload();
            }, 72000);
        }
      else {
        puzzleComplete ++;
        const currentText = document.getElementById("puzzle-text");
        currentText.setAttribute('text', 'value', 'Puzzles: ' + puzzleComplete + '/4');
      }
    });

  }
});

AFRAME.registerComponent('start-experience', {
  init: function () {
    //we can't play sound on some browsers until we have some user interaction
    //this means we should only start playing ambient music after this button is clicked
    console.log('scene loaded');
    document.querySelector('#user-gesture-button').style.display='block';
  }
});
//function called from user-gesture click.
//THIS IS THE INTRODUCTION
var round = 0; //Switch to 0
function startExperience() {
  const textEl = document.querySelector('#welcome-text');
  const buttonEl = document.querySelector('#user-gesture-button');
  //messy code, but the transitions work.
  if (round == 0)
  {
    textEl.classList.add('fade-out');
    buttonEl.classList.add('fade-out');
    setTimeout(function(){
     textEl.classList.remove('fade-out');
     buttonEl.classList.remove('fade-out');
     textEl.innerHTML = "An Experience By the Model & Story Team";
    }, 2000);
    setTimeout(function(){
      textEl.classList.add('fade-in');
      buttonEl.classList.add('fade-in');
    }, 3000);
    round = 1;
    return;
  }
  if (round == 1)
  {
    textEl.classList.add('fade-out');
    buttonEl.classList.add('fade-out');
    setTimeout(function(){
     textEl.classList.remove('fade-out');
     buttonEl.classList.remove('fade-out');
     textEl.innerHTML = "Inspired by the teachings of The Land Back Movement...";
    }, 2000);
    setTimeout(function(){
      textEl.classList.add('fade-in');
      buttonEl.classList.add('fade-in');
    }, 3000);
    round = 2;
    return;
  }
  //final opening round
  if (round == 2)
  {
    textEl.classList.add('fade-out');
    buttonEl.classList.add('fade-out');
    setTimeout(function(){
       buttonEl.style.display = "none";
       textEl.classList.remove('fade-out');
       textEl.innerHTML = "We seek to take care of the land, and to strengthen biodiversity in urban centres.";
    }, 2000);
    setTimeout(function(){
      textEl.classList.add('fade-in');
    }, 3000);
    setTimeout(function(){
        var textNew = document.querySelector('#welcome-text-2');
        textNew.innerHTML = "Every one of us is a piece of the puzzle that makes up the mural of life.";
        textNew.classList.add('fade-in');         
    }, 5000);
    setTimeout(function(){
        var textNew = document.querySelector('#welcome-text-3');
        textNew.innerHTML = "We can work to restore nature's once abundant ecosystems with small, everyday tasks.";
        textNew.classList.add('fade-in');
      }, 9000);
      setTimeout(function(){
        var textNew = document.querySelector('#welcome-text-4');
        textNew.innerHTML = "Let's see where our work will get this city in 10, 20 years, shall we?";
        textNew.classList.add('fade-in');
      }, 13000);
      setTimeout(function(){
        buttonEl.classList.remove('fade-out');
        buttonEl.innerHTML = "How To Play";
        buttonEl.style.display = "block";
      }, 17000);
      setTimeout(function(){
        buttonEl.classList.add('fade-in');
      }, 18000);
    round = 3;
    return;
  }
  if (round == 3)
  {
    textEl.classList.add('fade-out');
    buttonEl.classList.add('fade-out');
    document.querySelector('#welcome-text-2').classList.add('fade-out');
    document.querySelector('#welcome-text-3').classList.add('fade-out');
    document.querySelector('#welcome-text-4').classList.add('fade-out');
    setTimeout(function(){
     textEl.classList.remove('fade-out');
     buttonEl.classList.remove('fade-out');
     document.querySelector('#welcome-text-2').innerHTML = "";
     document.querySelector('#welcome-text-3').innerHTML = "";
     document.querySelector('#welcome-text-4').innerHTML = "";
     buttonEl.innerHTML = "Enter Experience";
     textEl.innerHTML = "MOVE: Click on Yellow Teleport Pads <br> LOOK: Click and Drag Mouse <br> INTERACT: Pick Up and Move Objects to Solve All 4 Puzzles <br> TIME: Click the Clock to Toggle Between Day/Night";
    }, 2000);
    setTimeout(function(){
      textEl.classList.add('fade-in');
      buttonEl.classList.add('fade-in');
    }, 3000);
    round = 4;
    return;
  }
  if (round == 4)
  {
   //start all ambient music
    document.querySelector('#city_sounds').components.sound.playSound();
    document.querySelector('#scene_music').components.sound.playSound();

   document.querySelector('#user-gesture-overlay').classList.add('fade-out');
   setTimeout(function(){
     document.querySelector('#user-gesture-overlay').style.display = 'none';
      }, 2000);
  }
}