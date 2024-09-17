const soundMap = {
    "w": "tom-1.mp3",
    "a": "tom-2.mp3",
    "s": "tom-3.mp3",
    "d": "tom-4.mp3",
    "j": "crash.mp3",
    "k": "kick-bass.mp3",
    "l": "snare.mp3"
};

function playSound(letter){
    if(letter in soundMap){
        var audio = new Audio(`sounds/${soundMap[letter]}`);
        if(audio) audio.play();
    }
}

function btnAnimate(letter){
    var btn = document.querySelector(`.${letter}`);
    if (btn){
        btn.classList.add("pressed");
        setTimeout(function (){
            btn.classList.remove("pressed");
        }, 100)
    }
}

document.querySelectorAll("button.drum").forEach(
    function (b) {

        b.addEventListener("click", function () {
            var letter = this.innerHTML;
            playSound(letter);
            btnAnimate(letter);
        })
    });

document.addEventListener("keydown", function(event){
    playSound(event.key);
    btnAnimate(event.key);
    
})