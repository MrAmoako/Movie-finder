const button = document.getElementById('searchBtn')
const input = document.getElementById('input')
const error = document.getElementById('error')
const placeholder = document.getElementById('results')

async function getMovie(query) {
   try {
      error.textContent = '';
      const res = await fetch(`https://www.omdbapi.com/?apikey=fc24732d&s=${query}`);
      if(!res.ok) {
         throw new Error('Movie Not Found')
      }
      const movies = await res.json();
      return movies; 
   } catch(err){
     error.textContent = err.message;
   }
}

function displayMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    placeholder.innerHTML = '';
    const img = document.createElement('img');
    const title = document.createElement('li');
    const year = document.createElement('li')
    img.src = movies.search.poster;
    title.innerText = movies.search.Title;
    year.innerText = movies.search.Year;
   
  }
}