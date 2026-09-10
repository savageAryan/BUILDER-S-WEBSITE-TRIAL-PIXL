const image = document.getElementById("myimage")
const images = [
    "images/me1.jpg",
    "images/me2.png",
    "images/me3.png"
];
let current = 0;
let interval;
image.addEventListener("click",() => {current = (current+1)% images.length;image.src = images[current]});
const music = document.getElementById("music")
const musics = ["audios/song1.mp3",
    "audios/song2.mp3",
    "audios/song3.mp3",
    "audios/song4.mp3",
    
]
let currentsong = 1;
let songinterval;
function playrandomsong(){
    const randommusic = musics[Math.floor(Math.random() * musics.length)];
    music.src = randommusic;
    music.play();
}
playrandomsong();
document.addEventListener("click",() =>{
    playrandomsong();
    },{once: true});
music.addEventListener("ended",() =>{
    playrandomsong();
});
const audiobutton = document.getElementById("audiobutton")
audiobutton.addEventListener("click",() => music.pause);

