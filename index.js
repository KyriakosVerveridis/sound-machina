let loop1 = null;
let loop2 = null;
let loop3 = null;
let loop4 = null;
let loop5 = null;
let loop6 = null;
let loop7 = null;
let loop8 = null;
let loop9 = null;

let numberOfButtons =document.querySelectorAll(".drum-pad").length;

for(let i=0;i<numberOfButtons; i++){
  document.querySelectorAll(".drum-pad")[i].addEventListener("click", function () {
    
    let buttonInnerHTML = this.innerHTML;

    // this.classList.add("pressed");
    
    // setTimeout(() => {
    //   this.classList.remove("pressed");
    // }, 2000);

  switch (buttonInnerHTML) {
    case "ufo":
      if (loop1 && !loop1.paused) {
        loop1.pause();
        loop1.currentTime = 0;
        this.classList.remove("active");
      } else {
        loop1 = new Audio("sounds/ufo-network.mp3");
        loop1.loop = true;
        loop1.play();
        this.classList.add("active");
      }
      break;


    case "lead":
      if (loop2 && !loop2.paused) {
          loop2.pause();
          loop2.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop2 = new Audio("sounds/lead-fx.mp3");
          loop2.loop = true;
          loop2.play();
          this.classList.add("active");
        }
      break;
    
    case "lazer":
      if (loop3 && !loop3.paused) {
          loop3.pause();
          loop3.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop3 = new Audio("sounds/sequencer-lazer.mp3");
          loop3.loop = true;
          loop3.play();
          this.classList.add("active");
        }
      break;

    case "fx-hit":
      if (loop4 && !loop4.paused) {
          loop4.pause();
          loop4.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop4 = new Audio("sounds/fx-hit.mp3");
          loop4.loop = true;
          loop4.play();
          this.classList.add("active");
        }
      break;
     
    case "atmos":
      if (loop5 && !loop5.paused) {
          loop5.pause();
          loop5.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop5 = new Audio("sounds/atmos.mp3");
          loop5.loop = true;
          loop5.play();
          this.classList.add("active");
        }
      break;

    case "shaker":
      if (loop6 && !loop6.paused) {
          loop6.pause();
          loop6.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop6 = new Audio("sounds/shaker.mp3");
          loop6.loop = true;
          loop6.play();
          this.classList.add("active");
        }
      break;

    case "sweep":
      if (loop7 && !loop7.paused) {
          loop7.pause();
          loop7.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop7 = new Audio("sounds/sweep.mp3");
          loop7.loop = true;
          loop7.play();
          this.classList.add("active");
        }
      break;
      
    case "vocal":
      if (loop8 && !loop8.paused) {
          loop8.pause();
          loop8.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop8 = new Audio("sounds/vocal.mp3");
          loop8.loop = true;
          loop8.play();
          this.classList.add("active");
        }
      break;  

    case "senhiser":
      if (loop9 && !loop9.paused) {
          loop9.pause();
          loop9.currentTime = 0;
           this.classList.remove("active");
        } else {
          loop9 = new Audio("sounds/senhiser.mp3");
          loop9.loop = true;
          loop9.play();
          this.classList.add("active");
        }
      break;  

    
    default:
     console.log(buttonInnerHTML);
  }
});
}


