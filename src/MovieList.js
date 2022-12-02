import React from 'react';
import { Movie } from "./Movie";

import { AddMovie } from './AddMovie';

export function MovieList({movieList}) {

  return (
   <div movieList={movieList}>
      {/* <AddMovie movieList={movieList}  /> */}
<div className="movie-list">
      {movieList.map((mv,index) => (
        <div key={index} >
        <Movie movie={mv} id={index}  />
        </div>
      ))}
    </div>
    </div>
  );
}

