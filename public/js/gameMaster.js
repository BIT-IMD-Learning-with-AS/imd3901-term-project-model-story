'use strict'

AFRAME.registerComponent('game', {
  init: function () {

    var round = 0;
    
    const el = this.el;
    const scene =  this.el.sceneEL;
    var day = true;
    var bugPuzzle = false;
    var lightPuzzle = false;
    var picPuzzle = false;
    var plantPuzzle = false;
    var cleanPuzzle = false;
    const CONTEXT_AF = this;

    var puzzleComplete = 0;

    var checkWinState = setInterval(function(){
      if (puzzleComplete == 5)
      {
        //end game state
        console.log('GAME OVER');
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
          textEl.innerHTML = "We can bring life back to this earth.";
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
          textEl.innerHTML = "Thank you for participating in our experience.";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 2;
          return;
        }
        if (round == 2)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Missing Piece was brought to you by: <br> ";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 3;
          return;
        }
        if (round == 3)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Erin Waldram <br><br> Project Manager <br> Coder";
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
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Gavin Isaac <br><br> Code Lead <br> Puzzle Ideation";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 5;
          return;
        }
        if (round == 5)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Chris Hearty <br><br> Coder <br> 3D Modeller";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 6;
          return;
        }
        if (round == 6)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Chloe Versace <br> <br> 3D Modeller";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 7;
          return;
        }
        if (round == 7)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Zoe Prevost <br> <br> 3D Modeller";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 8;
          return;
        }
        if (round == 8)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "In Association With: <br> <br>Anthony Scavarelli <br> Stephanie Babij <br> Kseniya Tsoy <br> Luc Lalande";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 9;
          return;
        }
        if (round == 9)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Free Music By: <br><br> Harris Heller - StreamBeats <br> <br> Diamond Album <br> Track 02 - Serenity";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 10;
          return;
        }
        if (round == 10)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Free 3D Assets By: <br><br> Kenny Game Assets <br> https://kenney.nl <br>";
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 11;
          return;
        }
        if (round == 11)
        {
          textEl.classList.add('fade-out');
          buttonEl.classList.add('fade-out');
          setTimeout(function(){
          textEl.classList.remove('fade-out');
          buttonEl.classList.remove('fade-out');
          textEl.innerHTML = "Goodbye.<br>";
          buttonEl.innerHTML="Restart Experience"
          }, 2000);
          setTimeout(function(){
            textEl.classList.add('fade-in');
            buttonEl.classList.add('fade-in');
          }, 3000);
          round = 12;
          return;
        }
        if (round == 12)
        {
            //Reloads/Exits experience
            location.reload();
        }
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
        el.emit('lightWin', null, true);
      }
    });
    CONTEXT_AF.el.addEventListener('lightWin', function () {
      lightPuzzle = true;
      document.getElementById('good-sound-fx').components.sound.playSound();

      //UPDATE TEXT
      puzzleComplete = 5;
      const currentText = document.getElementById("puzzle-text");
      currentText.setAttribute('text', 'value', 'Puzzles: ' + puzzleComplete + '/5');

      const walls = document.querySelectorAll(".star-walls");
      for (let i = 0; i < walls.length; i++) {
        walls[i].setAttribute('visible', false);
        walls[i].setAttribute('scale', ("0,0,0"));
        walls[i].setAttribute('position', ("0,-100,0"));
      }
    });

  }
});