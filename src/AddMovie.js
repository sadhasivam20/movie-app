import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState(" ");

  const [poster, setPoster] = useState(" ");

  const [rating, setRating] = useState(" ");

  const [summary, setSummary] = useState(" ");

  const [trailer, setTrailer] = useState(" ");
  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer:trailer,
    };
    setMovieList([...movieList, newMovie]);
  };
  return (
    <div className='add-movie'>

      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />

      <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />

      <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />

      <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />

      <TextField id="outlined-basic" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
      
      <Button variant="contained" onClick={addMovie}>ADD MOVIE</Button>
    </div>
  );
}
