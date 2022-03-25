let playlist = ['Moby - porcelain', 'Modjo - Lady', 'Queen - Killer queen']
let background = ['#60b1b3', '#e89b6b', '#5c4d43']
let list = ['moby', 'modjo', 'queen']


let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let next = document.querySelector('.after')
let before = document.querySelector('.before')
let text = document.querySelector('.description')
let image = document.querySelector('.image-container')
let body = document.querySelector('body')
let rangeContainer = document.querySelector('.range-container')
let range = document.querySelector('.range')
let audio = document.querySelector('audio')
// let songTime = document.querySelector('.song-time')
let totalTime = document.querySelector('.total-time')
let curTime = document.querySelector('.current-time')
let num = 0;
let x = 0;



function playMusic(){
    audio.play()
playButton.classList.add('display')
pauseButton.classList.remove('display')
image.style.backgroundImage = `url(./img/${list[num]}.jpeg)`
body.style.backgroundImage = `url(./img/${list[num]}.jpeg)`
rangeContainer.style.backgroundColor = `${background[num]}`
text.textContent = `${playlist[num]}`
image.classList.add('round')
}

playButton.addEventListener('click', playMusic)

function stopMusic(){
    playButton.classList.remove('display')
    pauseButton.classList.add('display')
    image.classList.remove('round') 
    audio.pause()
    
}

pauseButton.addEventListener('click', stopMusic)

function nextSong(){
        num = num + 1
        if (num == 3){
          num = 0
        }
          x = 0;
          audio.src = `./audio/${list[num]}.mp3`
          audio.currentTime = x;
          
   
        playMusic()
      
      }

function prevSong(){
        num = num - 1
        if (num == -1){
          num = 2
        }
        x = 0;
        audio.src = `./audio/${list[num]}.mp3`
        audio.currentTime = x;
       
        playMusic()
        
}

next.addEventListener('click', nextSong)
before.addEventListener('click', prevSong)

audio.addEventListener('ended', nextSong)

// function updateTime(){
  
//   console.log('update')
//   const duration = audio.duration
//     const currentTime = audio.currentTime
//     const percent = (currentTime / duration) * 100
   
//     range.style.width = `${percent}%`
    
//     let totalSec = Math.floor(duration % 60)
//     let totalMin = Math.floor(duration / 60)
//     let currentMin = Math.floor(currentTime / 60)
//     let currentSec = Math.floor(currentTime % 60)
//     if(totalMin < 10){
//       totalMin = `0${totalMin}`
//     }
//     if(currentMin < 10){
//       currentMin = `0${currentMin}`
//     }
//     if(totalSec < 10){
//         totalSec = `0${totalSec}`
//       }
//     if (currentSec < 10){
//       currentSec = `0${currentSec}`
//     }
//     songTime.textContent = `${currentMin}:${currentSec} / ${totalMin}:${totalSec}`
//     x = audio.currentTime
    
//     }
    audio.addEventListener('loadeddata', function(){

      const duration = audio.duration
        let totalSec = Math.floor(duration % 60)
        let totalMin = Math.floor(duration / 60)

        if(totalMin < 10){
          totalMin = `0${totalMin}`
        }
        if(totalSec < 10){
          totalSec = `0${totalSec}`
        }
        totalTime.textContent = `${totalMin}:${totalSec}`
    })

    audio.addEventListener('timeupdate', function(){

  const duration = audio.duration
    const currentTime = audio.currentTime
    const percent = (currentTime / duration) * 100
    range.style.width = `${percent}%`
    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    if(currentMin < 10){
      currentMin = `0${currentMin}`
    }
    if (currentSec < 10){
      currentSec = `0${currentSec}`
    }
   
   curTime.textContent = `${currentMin}:${currentSec}`
    x = audio.currentTime
    })


    function rollPlay(e){
    
        const width = this.clientWidth
        const clickX = e.offsetX
        const dur = audio.duration
        audio.currentTime = (clickX / width) * dur
        x = audio.currentTime
        }


       rangeContainer.addEventListener('click', rollPlay)

 