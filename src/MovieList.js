import React from 'react';
import { Movie } from "./Movie";

import { AddMovie } from './AddMovie';

export function MovieList({movieList}) {

  return (
   <div>
      <AddMovie movieList={movieList}  />
<div className="movie-list">
      {movieList.map((mv,index) => (
        <Movie key={index} movie={mv} />
      ))}
    </div>
    </div>
  );
}

