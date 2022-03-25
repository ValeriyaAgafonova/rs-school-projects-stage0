let playerBox = document.querySelector('.player-box')
let playButton = document.querySelector('.play-button')
let video = document.querySelector('video')
let playSvg = document.querySelector('.small-play-svg')
let pauseSvg = document.querySelector('.pause-svg')
let volumeSvg = document.querySelector('.volume-svg')
let muteSvg = document.querySelector('.mute-svg')
let volRange = document.querySelector('.volume-range')
let durationRange = document.querySelector('.duration-range')


playButton.addEventListener('click', function play(){
    playButton.classList.add('display')
    playerBox.style.bottom = '0px';
   video.play()
   playSvg.classList.toggle('display')
   pauseSvg.classList.toggle('display')
})




playSvg.addEventListener('click', function toggle(){
        video.play()
     
        playSvg.classList.toggle('display')
        pauseSvg.classList.toggle('display')
        playButton.classList.add('display')
    
})

pauseSvg.addEventListener('click', function toggle(){

        video.pause()
        playSvg.classList.toggle('display')
        pauseSvg.classList.toggle('display')
        playButton.classList.remove('display')
})







function toggleVolume(){
    muteSvg.classList.toggle('display')
    volumeSvg.classList.toggle('display')
    if (volumeSvg.classList.contains('display')){
        volRange.value = "0"
        video.volume = "0"
        volRange.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 0%, #c4c4c4 0%, #c4c4c4 100%)`
    }
    else{
        volRange.value = "4"
        video.volume = "0.4"
        volRange.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 40%, #c4c4c4 40%, #c4c4c4 100%)`
    }
   
}

volumeSvg.addEventListener('click', toggleVolume)
muteSvg.addEventListener('click', toggleVolume)


function changeVolume(){
   video.volume = volRange.value * 0.1
    if (video.volume == 0){
        muteSvg.classList.toggle('display')
    volumeSvg.classList.toggle('display')
    }
    else{
        muteSvg.classList.add('display')
        volumeSvg.classList.remove('display')
      
    }
    changeVol()
}

volRange.addEventListener('click', changeVolume)


function rollPlay(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const dur = video.duration
    
    video.currentTime = (clickX / width) * dur
    }
    durationRange.addEventListener('click', rollPlay)


function updateRange(e){
    const {duration, currentTime} = e.srcElement
    const percent = (currentTime / duration)* 100
   
    durationRange.value = `${percent}`
    durationRange.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${percent}%, #c4c4c4 ${percent}%, #c4c4c4 100%)`
    
}
video.addEventListener('timeupdate', updateRange)

video.addEventListener('ended', function(){
    playSvg.classList.toggle('display')
    pauseSvg.classList.toggle('display')
    playButton.classList.remove('display')
})

function changeDur(){
    const value = this.value;
    this.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
    console.log(value)
}
function changeVol(){
    const value = +this.value * 10;
    volRange.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
    
}
durationRange.addEventListener('input', changeDur)
volRange.addEventListener('input', changeVol)



