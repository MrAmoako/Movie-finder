const button = document.getElementById('searchBtn')
const input = document.getElementById('input')
const error = document.getElementById('error')
const placeholder = document.getElementById('results')

async function getMovie(query) {
   try {
      error.textContent = '';
      const res = await fetch(`https://www.omdbapi.com/?apikey=fc24732d&s=${query}`);
   
      const movies = await res.json();
      if (movies.Response === "False") {
       throw new Error(movies.Error);
      }
      return movies; 
   } catch(err){
     error.textContent = err.message;
   }
}

function displayMovies(movies) {
     placeholder.innerHTML = '';
  for (let i = 0; i < movies.Search.length; i++) {

   const movie = movies.Search[i];
  
    const list = document.createElement('li')
    const img = document.createElement('img');
    const title = document.createElement('p');
    const year = document.createElement('p')
    img.src = movie.Poster;
    title.innerText = movie.Title;
    year.innerText = movie.Year;
    list.appendChild(img);
    list.appendChild(title);
    list.appendChild(year);
    placeholder.appendChild(list);
  }
}

button.addEventListener('click', async() => {
   const query = input.value.toLowerCase();
   if(!query) {
      error.innerText = 'Enter A Movie';
      return;
   }
  const movies = await getMovie(query);
  if(movies) {
   displayMovies(movies)
  }
})
