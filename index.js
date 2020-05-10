var no_buttons=document.querySelectorAll("button").length;
var all_buttons=document.querySelectorAll("button");

for(var i=0;i<no_buttons;i++)
{
   all_buttons[i].addEventListener("click",checkclick);
}

document.addEventListener("keydown",checkkey);

function checkclick()
{
  var clickbox=this.innerHTML;
  chkchar(clickbox);
  buttonanimate(clickbox);
}
function checkkey()
{
   var clickbox=event.key;
   chkchar(clickbox);
   buttonanimate(clickbox);
}
function buttonanimate(character)
{
  var activebutton=document.querySelector("."+character);
  if(activebutton !== null)
  {
  activebutton.classList.add("red");
  activebutton.classList.add("pressed");

  setTimeout(function (){
    activebutton.classList.remove("pressed");
    activebutton.classList.remove("red");
  },100);
  }
}
function chkchar(character)
{
  var audio;
  switch (character)
   {
    case "w":
         audio=new Audio('sounds/crash.mp3');
         audio.play();
    break;
    case "a":
           audio=new Audio('sounds/kick-bass.mp3');
           audio.play();
    break;
    case "s":
           audio=new Audio('sounds/snare.mp3');
           audio.play();
    break;
    case "d":
           audio=new Audio('sounds/tom-1.mp3');
           audio.play();
    break;
    case "j":
           audio=new Audio('sounds/tom-2.mp3');
           audio.play();
    break;
    case "k":
           audio=new Audio('sounds/tom-3.mp3');
           audio.play();
    break;
    case "l":
           audio=new Audio('sounds/tom-4.mp3');
           audio.play();
    break;
    default:
  }
}
