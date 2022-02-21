// var numberOfButtons = document.querySelectorAll(".btn-primary").length;
//
//
//
//
//
// for (var i=0; i<numberOfButtons; i++){
//   document.querySelectorAll(".btn-primary")[i].addEventListener("click", function(){
//     var audio = new Audio ('music\Muni Long - Hrs and Hrs.mp3');
//     audio.play();
//     alert("Tap to play");
//   });
// };
const music = new Audio('music/muni.mp3')

music.volume = 0.2;


for (var i = 0; i < document.querySelectorAll('.btn-primary').length; i++) {
  document.querySelectorAll('.btn-primary')[i].addEventListener('click', ()=>{
    musicToggle();
  });
}
function musicToggle() {
  if (music.paused == true) {
    music.play();
  } else {
    music.pause();
  }
}
