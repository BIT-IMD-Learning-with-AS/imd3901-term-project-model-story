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
  var round = 0;
  function startExperience() {

    textEl = document.querySelector('#welcome-text');
    buttonEl = document.querySelector('#user-gesture-button');

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
          textNew = document.querySelector('#welcome-text-2');
          textNew.innerHTML = "Every one of us is a piece of the puzzle that makes up the mural of life.";
          textNew.classList.add('fade-in');         
      }, 5000);

      setTimeout(function(){
          textNew = document.querySelector('#welcome-text-3');
          textNew.innerHTML = "We can work to restore nature's once abundant ecosystems with small, everyday tasks.";
          textNew.classList.add('fade-in');
        }, 9000);

        setTimeout(function(){
          textNew = document.querySelector('#welcome-text-4');
          textNew.innerHTML = "Let's see where our work will get this city in 10, 20 years, shall we?";
          textNew.classList.add('fade-in');
        }, 13000);

        setTimeout(function(){
          buttonEl.classList.remove('fade-out');
          buttonEl.innerHTML = "Enter Experience";
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
     //start all ambient music
      const ambientSounds = document.querySelectorAll('.ambient-music');
      ambientSounds.forEach(function(soundEntity) {
        soundEntity.components.sound.playSound();
      });
     document.querySelector('#user-gesture-overlay').classList.add('fade-out');
     setTimeout(function(){
       document.querySelector('#user-gesture-overlay').style.display = 'none';
        }, 2000);
    }
}

AFRAME.registerComponent('end-experience', {
    init: function () {
        document.querySelector('#user-gesture-overlay').style.display='block';
        console.log("Experience Ending");
    }
  });

  var round = 0;
  function endExperience() {
    console.log(round);

    textEl = document.querySelector('#welcome-text');
    buttonEl = document.querySelector('#user-gesture-button');

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
