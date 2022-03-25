let birdButtons = document.querySelectorAll('.bird-button')
let body = document.querySelector('body')
let audio = document.querySelector('.audio')
let svgIcons = document.querySelectorAll('svg')
let birdNames = document.querySelectorAll('.bird-name')
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
num = 0;
let array = ['solovey', 'drozd', 'zarynka', 'javoronok', 'slavka']
let isPlay = false

birdButtons.forEach(button => {
    button.addEventListener('click', function(){
        body.style.backgroundImage = `url("./assets/img/${button.attributes.value.nodeValue}.jpg")`
        num = array.indexOf(button.attributes.value.nodeValue)
playSong()
    })
});

play.addEventListener('click', playSong)
pause.addEventListener('click', pauseSong)

function playSong(){
    play.classList.add('display')
    pause.classList.remove('display')
    audio.src = `./assets/audio/${array[num]}.mp3`;
    svgIcons.forEach(svg => {
       if (svg.classList.contains('active')){
        svg.classList.remove('active');
       } 
    })
birdNames.forEach(name =>{
    if(name.classList.contains('active')){
        name.classList.remove('active')
    }
})
    svgIcons[num].classList.add('active');
    birdNames[num].classList.add('active');
    audio.play()
isPlay = true;
}
function pauseSong(){
    play.classList.remove('display')
    pause.classList.add('display')
    audio.pause()
}