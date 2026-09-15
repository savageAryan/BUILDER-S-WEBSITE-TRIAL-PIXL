const image = document.getElementById("myimage")
const images = [
    "images/me1.jpg",
    "images/me2.jfif",
    "images/me3.jpg"
];
let current = 0;
let interval;
image.addEventListener("click",() => {current = (current+1)% images.length;image.src = images[current]});
const music = document.getElementById("music")
const musics = ["audios/song1.mp3",
    "audios/song2.mp3",
    "audios/song3.mp3",
    "audios/song4.mp3",
    "audios/song5.mp3",
    "audios/song6.mp3"
    
]
let currentsong = 1;
let songinterval;
function playrandomsong(){
    const randommusic = musics[Math.floor(Math.random() * musics.length)];
    music.src = randommusic;
    music.play();
}
playrandomsong();
music.addEventListener("ended",() =>{
    playrandomsong();
});
const audiobutton = document.getElementById("audiobutton")
const audiobuttonicon = document.querySelector("#audiobutton button img")
audiobutton.addEventListener("click",() => {
    if (music.paused) {
        music.play();
        audiobuttonicon.src = "assets/play.png"
    
    } else {
        music.pause();
        audiobuttonicon.src = "assets/mute.png"
    }
});
const randombutton = document.querySelector("#random")
randombutton.addEventListener("click",() => {
        playrandomsong();
    
})

