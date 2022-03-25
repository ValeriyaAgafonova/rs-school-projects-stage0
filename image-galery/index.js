let photoList = document.querySelector('.photo-container')
let photo = document.querySelector('.photo')

let query='sea'
let input = document.querySelector('input')
let cleanButton = document.querySelector('.clean')
let errorMessage = document.querySelector('.error')



async function getData() {
    try{
        const url = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=mJ1-2RT9fn3IU4WWD6k8pU6MLq9fwwZuPT-n6WweLaA`
        let res = await fetch(url);
        let data = await res.json();
            showData(data)
    console.log(data)
    }
   

        catch(err) {
errorMessage.classList.remove('display')
console.log(err)

while (photoList.firstChild) {
    photoList.removeChild(photoList.firstChild);
}
    }
   
}
  getData();


  function showData(data)
{
    errorMessage.classList.add('display')
    while (photoList.firstChild) {
        photoList.removeChild(photoList.firstChild);
    }
    for(let i = 0; i < 8; i++){
       
        const img = document.createElement('img');
        img.classList.add('photo')
        img.src = `${data.results[i].urls.regular}`;
        img.alt = `image`;
        
        photoList.append(img);
    }
}


input.addEventListener('keydown', function(e) {
    if (event.code == 'Enter'){
        query = this.value
        console.log(this.value)
        getData()
    }
  
    
  });

  cleanButton.addEventListener('click', function(){
    input.value = ''
    cleanButton.style.display = 'none'
          })
    
          function showClean(){
              if (input.value.length > 0){
                  cleanButton.style.display = 'block'
              }
          }
          input.addEventListener('input', showClean)