var pianoWhiteButtons = document.querySelectorAll(".big");
var pianoBlackButtons = document.querySelectorAll(".small");

pianoWhiteButtons.forEach(function(btn) {
    btn.onclick = function() {
        makeSound(this.classList[1]);
    }
})
pianoBlackButtons.forEach(function(btn) {
    btn.onclick = function() {
        makeSound(this.classList[1]);
    }

})



document.addEventListener("keypress", function(event) {
    buttonAnimation(event.key)
    makeSound(event.key)
});

function makeSound(btn) {
    switch (btn) {

        case 'a':
            var note_a = new Audio("music/A.mp3");
            note_a.play();
            break;

        case 's':
            var note_b = new Audio("music/B.mp3");
            note_b.play();
            break;

        case 'd':
            var note_c = new Audio("music/C.mp3");
            note_c.play();
            break;

        case 'f':
            var note_d = new Audio("music/D.mp3");
            note_d.play();
            break;

        case 'j':
            var note_e = new Audio("music/E.mp3");
            note_e.play();
            break;

        case 'k':
            var note_f = new Audio("music/F.mp3");
            note_f.play();
            break;

        case 'l':
            var note_g = new Audio("music/G.mp3");
            note_g.play();
            break;
        case 'w':
            var note_ab = new Audio("music/Ab.mp3");
            note_ab.play();
            break;
        case 'e':
            var note_bb = new Audio("music/Bb.mp3");
            note_bb.play();
            break;
        case 'r':
            var note_db = new Audio("music/Db.mp3");
            note_db.play();
            break;
        case 'u':
            var note_eb = new Audio("music/Eb.mp3");
            note_eb.play();
            break;
        case 'i':
            var note_gb = new Audio("music/Gb.mp3");
            note_gb.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed")

    setTimeout(function() { activeButton.classList.remove("pressed"); }, 100)
}