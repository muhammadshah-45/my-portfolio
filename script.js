var audio = new Audio("mshah3.mp3");
    
      function playAudio() {
        audio.play();
      }
    
      document.getElementById("speak").addEventListener("click",playAudio);
      