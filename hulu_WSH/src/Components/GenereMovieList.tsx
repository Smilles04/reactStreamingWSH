import React from 'react'
import GenreList from '../Constant/GenreList'
import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from './MovieList'


function GenereMovieList() {
  return (
    <div className='mt-24 p-5 px-10 md:px-20'>
        {GenreList.genere.map((item:any,index)=>index<=4&&(
            <div>
                <h2 className='text-white text-[20px] font-bold  '>{item.name}
                <span className='font-normal text-[16px] cursor-pointer text-gray-400
                float-right flex'>VIEW ALL <IoChevronForwardSharp classname='text-white ml-1'/></span></h2>
                <MovieList genreId={}/>
            </div>
        ))}
    </div>
  )
}

export default GenereMovieList