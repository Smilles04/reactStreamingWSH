import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import GenreMovieList from '../Components/GenereMovieList'
import MovieCard from '../Components/MovieCard'

function Home() {
  return (
    <div>
        <Header/>

        <Hero/>

        <GenreMovieList/>

        <MovieCard/>


    </div>
  )
}

export default Home