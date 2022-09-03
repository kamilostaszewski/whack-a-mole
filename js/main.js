let restart = document.getElementsByClassName("restart")[0];
let kret = document.getElementsByClassName("kret")[0];
let points = document.getElementById("points");
let maxScreenWidth = window.innerWidth;
let maxScreenHeight = window.innerHeight;
let imageSize = 200;
let counter = 0;

function getRandomNumber(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

function randomTeleport(element) {
    element.style.top = getRandomNumber(0, maxScreenHeight - imageSize);
    element.style.left = getRandomNumber(0, maxScreenWidth - imageSize);
}

function updatePoints(value) {
    points.innerText = value;
}

function handleClickButton(e) {
    counter++;
    updatePoints(counter);
    randomTeleport(kret);
}
function handleClickReset(e) {
    counter = 0;
    updatePoints(counter);
}

kret.addEventListener('click', handleClickButton);
kret.addEventListener('dragstart', handleClickButton);
// kret.addEventListener('drag', event => console.log(event));
restart.addEventListener('click' , handleClickReset)

randomTeleport(kret );