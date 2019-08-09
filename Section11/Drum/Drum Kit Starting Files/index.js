var myButtons = document.querySelectorAll(".drum");

for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", function(e) {
    var buttonInnerHTML = this.innerHTML;
    checkKey(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  checkKey(event.key);
  buttonAnimation(event.key);
});

function checkKey(character) {
  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("sounds/snare.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("sounds/kick-bass.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("sounds/crash.mp3");
      tom7.play();
      break;
    default:
      console.log(character);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// function BellBoy(name, age, isMarried, languages) {
//   this.name = name;
//   this.age = age;
//   this.isMarried = isMarried;
//   this.languages = languages;
//   this.clean = function() {
//     alert("Cleaning in process");
//   };
// }

// function eventWithCallBack(operation, callback) {
//   var keyPressed = {
//     key: "p",
//     durationOfKeyPress: 2,
//     isTrusted: true,
//     eventType: "keypress"
//   };

//   if (keyPressed.eventType === operation) {
//     callback(keyPressed);
//   }
// }

// eventWithCallBack("keypress", function(event) {
//   console.log(event.eventType);
// });
