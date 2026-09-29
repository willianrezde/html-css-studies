const button = document.querySelector("#enter");
const link = document.querySelector("#enter a");

const hoverSound = new Audio("../sfx/select.wav");
const clickSound = new Audio("../sfx/submit.wav");

hoverSound.volume = 0.05;
clickSound.volume = 0.2;

button.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
});

link.addEventListener("click", (event) => {
    event.preventDefault();

    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() => {
        window.location.href = link.href;
    }, 300);
});