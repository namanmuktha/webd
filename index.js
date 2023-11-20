let numberofbuttions=document.querySelectorAll(".drum").length;

for(let i=0;i<numberofbuttions;i++){
    document.querySelectorAll(".drum")[i].addEventListener("mouseover",function(){
        //this.style.color="white";
        var buttonInnerHtml=this.innerHTML;
        buttonAnimation(buttonInnerHtml);
        switch (buttonInnerHtml) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                     audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                       audio.play();
                       break;    
            case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                          audio.play();
                          break;  
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                           audio.play();
                break;
            case "j":
                var audio=new Audio("sounds/crash.mp3");
                          audio.play();       
                          break;
            case "k":
                var audio=new Audio("sounds/kick-bass.mp3");
                                 audio.play();
                      break;
            case "l":
                var audio=new Audio("sounds/snare.mp3");
                      audio.play();
                      break;                                                   
            default:
                break;
        }
        
    });
}
document.addEventListener("keypress",function(){
 makeSound(event.key)
});
function makeSound(key){
    buttonAnimation(key);
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
                 audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
                   audio.play();
                   break;    
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
                      audio.play();
                      break;  
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
                       audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
                      audio.play();       
                      break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
                             audio.play();
                  break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
                  audio.play();
                  break;                                                   
        default:
            break;
    }
}

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
        
       // activeButton.classList.remove("pressed");
}
//var audio=new Audio("sounds/tom-1.mp3");
  //audio.play();