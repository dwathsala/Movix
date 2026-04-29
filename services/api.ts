export const TBDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
}

export const fetchMovies = async ({query} : {query: string}) => {
  const endpoint = query
    ? `${TBDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TBDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TBDB_CONFIG.headers,
  });

  if (!response.ok) {
    //@ts-ignore
    throw new Error('Failed to fetch movies', response.statusText);
  }

  const data = await response.json();

  return data.results;
}


export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  try {
    const response = await fetch(`${TBDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TBDB_CONFIG.API_KEY}`, {
      method : 'GET',
      headers : TBDB_CONFIG.headers
    });

    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();

    return data;

  
  } catch (error) {
    console.log(error);
    throw error;

  }
}

/*
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzM3YmI0OWEyMzY4YTU2NmYzMTI4OWI1MzE4NzRjNiIsIm5iZiI6MTc3NzAyNzE2Ny4zNzYsInN1YiI6IjY5ZWI0ODVmZmU0NjYyMjk2NWRjNzVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0MhJ7e58HQ9l-cUifYSLulQvfWtc1kjMs5foBXKOj4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


*/