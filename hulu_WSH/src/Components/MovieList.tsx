import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function MovieList(genreTd:any) {
    const[movieList,setMovieList]=useState<any>([])
    useEffect(()=>{
        getMovieByGenreId();
    },[])


    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreTd.genreId).then((resp:any)=>{
           
            setMovieList(resp.data.results);
        })
    }
  return (
    <div>
        {movieList.map((item:any,index:any)=>index<7&&(
            <div>
               {item.original_title} 
            </div>
            
        ))}
    </div>
  )
}

export default MovieList