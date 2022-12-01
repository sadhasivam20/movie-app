import React from 'react';
import { Counter } from './Counter';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



export function Movie({ movie }) {
  const [show, setShow] = useState(true);

  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  return ( 
  <Card className="movie-container">
    <img src={movie.poster} className="movie-poster" />
    <div className="movie-specs">
      <h2 className="movie-name">{movie.name} 
      
      <IconButton  color="primary" onClick={() => setShow(!show)} aria-label="delete">
   {show? <ExpandLessIcon/> : <ExpandMoreIcon/>}
</IconButton></h2>
      <p style={styles} className="movie-rating">⭐{movie.rating}</p>
    </div>
   
    {show ? <p className="movie-summary">{movie.summary} </p> : null}
  
    <Counter />
  </Card>
  );
}
;
