let mainList = document.querySelector('.main')
let search = document.querySelector('.search-input')
let cleanButton = document.querySelector('.clean')
let footer = document.querySelector('.footer')

let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43d1727e41027f4ee590a33effd5ba17`
//url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=43d1727e41027f4ee590a33effd5ba17`
async function getData() {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        showData(data)
        console.log(data.results[0].poster_path)
    }
   catch(err)
{
    console.log('не нашлось совпадений, попробуй еще')
footer.style.marginTop = '0'
}  }
  getData();

  function  showData(data){  
      if(data.results.length <= 9)
      {
          for(let i = 0; i < data.results.length; i++){
              appendImages(data, i)
          }
      }
      else{
          for(let i = 0; i < 9; i++){
              appendImages(data, i)
          }
      }
   
     
    }

    function appendImages(data, i){
        footer.style.marginTop = '50px'
        //изображение
        const img = document.createElement('img');
        img.classList.add('image')
        if (data.results[i].poster_path == null){
            img.src = `./assets/no-img.jpg`
        }
        else{
            img.src = `https://image.tmdb.org/t/p/w1280${data.results[i].poster_path}`;
        }
        img.alt = `image`;
        const movieImage = document.createElement('div')
        movieImage.classList.add('movie-image')
        movieImage.append(img);
        const movieCard = document.createElement('div')
        movieCard.classList.add('movie-card')
        movieCard.append(movieImage)
        mainList.append(movieCard)
        //рейтинг
        const span = document.createElement('span')
        span.innerHTML = data.results[i].vote_average
        if(span.innerHTML >= 8){
            span.style.color = 'green';
        }
        else if(span.innerHTML < 8 && span.innerHTML >=6){
            span.style.color = 'orange';
        }
        else{
            span.style.color = 'red';
        }
        const rating = document.createElement('div')
        rating.classList.add('rating')
        rating.append(span)
        
        const movieDescription = document.createElement('div')
        movieDescription.classList.add('movie-description')
        movieDescription.append(rating)
        movieCard.append(movieDescription)

    //название
        const h2 = document.createElement('h2')
        h2.innerHTML = data.results[i].original_title
        movieDescription.append(h2)
        //описание
        const h3 = document.createElement('h3')
        h3.innerHTML = `Overview`
        const description = document.createElement('div')
        description.classList.add('description')
        description.append(h3)
        movieCard.append(description)
        const p = document.createElement('p')
        if (data.results[i].overview == ""){
            p.innerHTML = 'No description' 
        }
        else{
            p.innerHTML = data.results[i].overview
        }
        description.append(p)
    }


//при нажатии клавиши enter поиск
    search.addEventListener('keydown', function(e) {
        if (event.code == 'Enter'){
            query = this.value
            console.log(this.value)
            url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`
            while (mainList.firstChild) {
                mainList.removeChild(mainList.firstChild);
            }
           getData()
        }
      
        
      });

      //при нажатии на крестик очищение поля

      cleanButton.addEventListener('click', function(){
search.value = ''
cleanButton.style.display = 'none'
      })

      function showClean(){
          if (search.value.length > 0){
              cleanButton.style.display = 'block'
          }
          else{
            cleanButton.style.display = 'none'
          }
      }
      search.addEventListener('input', showClean)
