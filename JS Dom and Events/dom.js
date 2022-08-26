var button = document.querySelector("button");
isRed = false;

button.addEventListener("click",function(){
    if(isRed){
        document.body.style.background = "white";

    }else{
        document.body.style.background = "red";

    }
    isRed=!isRed;
});

