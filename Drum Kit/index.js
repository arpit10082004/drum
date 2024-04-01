
var noofdrmbtn= document.querySelectorAll(".drum").length;
for ( var i=0; i<noofdrmbtn;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",
 function ()
 {
     var innerhtml = this.innerHTML;
    
      makeSound(innerhtml);  
      animation(innerhtml);
            
} 
 )
} 

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
     
});
function animation (currentkey){
    var actbtn =document.querySelector("."+currentkey);
    actbtn.classList.add("pressed");
    setTimeout( function(){
        actbtn.classList.remove("pressed")
    },100);

}
                function makeSound(key){
                    switch (key) {
        
                        case "w":
                            var audio = new Audio('sounds/crash.mp3');
                            audio.play();
                            
                            break;
                        
                        
                            case "a":
                                var audio = new Audio('sounds/kick-bass.mp3');
                                audio.play();
                                
                                break;
                                
                                case "s":
                                    var audio = new Audio('sounds/snare.mp3');
                                    audio.play();
                                    
                                    break;
                                
                                    case "d":
                                        var audio = new Audio('sounds/tom-1.mp3');
                                        audio.play();
                                        
                                        break;
                                
                                        case "j":
                                            var audio = new Audio('sounds/tom-2.mp3');
                                            audio.play();
                                            
                                            break;
                                
                                            case "k":
                                                var audio = new Audio('sounds/tom-3.mp3');
                                                audio.play();
                                                
                                                break;
                                
                                                case "l":
                                                    var audio = new Audio('sounds/tom-4.mp3');
                                                    audio.play();
                                                    
                                                    break;
                                
                        case "w":
                            var audio = new Audio('sounds/crash.mp3');
                            audio.play();
                            
                            break;
                                                                                                                    
                        default:
                            break;
                    }
                }