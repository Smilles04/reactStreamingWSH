import axios from "axios";

const movieBaseURL='https://api.themoviedb.org/3/movie';
const movieByGenreBaseURL='https://api.themoviedb.org/3/movie/550?api_key=0248c5cce04acce18a0fe24a61da1f88';

const api_key= '0248c5cce04acce18a0fe24a61da1f88'

const getPopularMovies=axios.get(movieBaseURL+"/popular?api_key="+api_key)
const getMovieByGenreId=(id:number)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getPopularMovies,
    getMovieByGenreId
}