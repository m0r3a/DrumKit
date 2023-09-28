function tom1 () {
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    document.getElementById("w").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("w").classList.remove("pressed");
    }, 100);
}

function tom2 () {
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    document.getElementById("a").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("a").classList.remove("pressed");
    }, 100);
}

function tom3 () {
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    document.getElementById("s").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("s").classList.remove("pressed");
    }, 100);
}

function tom4 () {
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    document.getElementById("d").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("d").classList.remove("pressed");
    }, 100);
}

function snare () {
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    document.getElementById("j").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("j").classList.remove("pressed");
    }, 100);
}

function crash () {
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    document.getElementById("k").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("k").classList.remove("pressed");
    }, 100);
}

function kick () {
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    document.getElementById("l").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("l").classList.remove("pressed");
    }, 100);
}

function makeSoundAndAnimation(key) {
    switch (key) {
        case "w":
          tom1();
        break;

        case "a":
          tom2();
        break;
          
        case "s":
          tom3();
        break;

        case "d":
          tom4();
        break;

        case "j":
          snare();
        break;

        case "k":
          crash();
        break;

        case "l":
          kick();
        break;
        default:
          return;
      }
}

document.getElementById("w").onclick = tom1;
document.getElementById("a").onclick = tom2;
document.getElementById("s").onclick = tom3;
document.getElementById("d").onclick = tom4;
document.getElementById("j").onclick = snare;
document.getElementById("k").onclick = crash;
document.getElementById("l").onclick = kick;



document.addEventListener("keypress", function(event) {

    makeSoundAndAnimation(event.key);

  });


