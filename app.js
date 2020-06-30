var i = 0;
var n = 0;
var beatOn = false;
var timeSig = document.getElementById("timeSig").value;

document.querySelector("#play").addEventListener("click", function() {
    if(beatOn === false){
        timeSig = document.getElementById("timeSig").value;
        beatOn = true;
        beat();
        console.log(beatOn);
        document.getElementById("play").innerHTML = "⏸";
        i = 2;
    } else if (beatOn === true){
        beatOn = false;
        beat();
        console.log(beatOn);
        document.getElementById("play").innerHTML = "▶";
    } else {
        null;
    }

});

document.querySelector("#pause").addEventListener("click", function() {
    beatOn = false;
    beat();
    console.log(beatOn);
})

function beat() {
    var interval = setInterval(function() {
        if (beatOn === true) {

            n = i++%timeSig;
            console.log(n);
            if (n>0) {
                var sound = new Audio("kick.mp3")
                sound.play()
            } else {
                var sound = new Audio("snare.mp3")
                sound.play()
            }
        };

        if (beatOn === false) {
            clearInterval(interval);
        }
    }, 1000/(document.querySelector("#bpm").value*1/60) )
}
