import axios from "axios";

const movieBaseURL='https://api.themoviedb.org/3/movie';
const api_key= '0248c5cce04acce18a0fe24a61da1f88'

const getPopularMovies=axios.get(movieBaseURL+"/popular?api_key="+api_key)

export default{
    getPopularMovies
}