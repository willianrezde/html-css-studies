const backgroundMusic = new Audio("../sfx/background.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.01;

backgroundMusic.play();


const links = document.querySelectorAll("a");

const hoverSound = new Audio("../sfx/select.wav");
const clickSound = new Audio("../sfx/submit.wav");

hoverSound.volume = 0.05;
clickSound.volume = 0.2;


links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    link.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });

});