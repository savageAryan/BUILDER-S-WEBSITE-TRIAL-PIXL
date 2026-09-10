const image = document.getElementById("myimage")
const images = ["images/me1",
    "images/me1.jpg",
    "images/me2.png",
    "images/me3.png"
];
let current = 0;
let interval;
image.addEventListener("click",() => {current = (current+1)% images.length;image.src = images[current]});
const music = document.getElementById("music")
document.addEventListener("click",() => {music.play();},{once: true});