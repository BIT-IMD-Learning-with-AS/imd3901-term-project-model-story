'use strict'

AFRAME.registerComponent('game', {
  init: function () {
    
    const el = this.el;
    const scene =  this.el.sceneEL;
    var day = true;
    var bugPuzzle = false;
    var lightPuzzle = false;
    var picPuzzle = false;
    var plantPuzzle = false;
    var cleanPuzzle = false;
    const CONTEXT_AF = this;



    //light puzzle
    var lightsOn = 4;
    
    CONTEXT_AF.el.addEventListener('lightOn', function () {
      lightsOn = lightsOn + 1;
    });
    CONTEXT_AF.el.addEventListener('lightOff', function () {
      lightsOn = lightsOn - 1;
      if (lightsOn <= 0) {
        el.emit('lightWin', null, true);
      }
    });
    CONTEXT_AF.el.addEventListener('lightWin', function () {
      lightPuzzle = true;
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