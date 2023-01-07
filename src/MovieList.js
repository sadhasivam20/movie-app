import React from 'react';
import { Movie } from "./Movie";
import  { useEffect } from 'react';
// import { AddMovie } from './AddMovie';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {API} from "./global.js"
export function MovieList() {
  const [movieList,setMovieList] = useState( []);
   const getMovies=()=>{

      fetch(`${API}/movies`)
    .then(data=>data.json())
    .then(mvs=>setMovieList(mvs));
  };
   
useEffect(()=>getMovies(),[]);

const deleteMovie=(id)=>{
  fetch(`${API}/movies/${id}`,{
    method:"DELETE",
  }).then((data)=>getMovies());
};

  return (
   <div movieList={movieList}>
      {/* <AddMovie movieList={movieList}  /> */}
<div className="movie-list">
      {movieList.map((mv) => (
        <div key={mv._id} >
        <Movie movie={mv} id={mv._id}  
     
        deleteButton= {
        <IconButton 
        sx={{ marginLeft:"auto"}} 
        onClick={()=> deleteMovie(mv.id)}aria-label="delete" size="large"
        color='error' >
        <DeleteIcon/>
      </IconButton >}
        />
        </div>
      ))}
    </div>
    </div>
  );
}

