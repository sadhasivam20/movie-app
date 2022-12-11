import React from 'react';
import { Counter } from './Counter';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { navigate, useNavigate } from "react-router-dom";




export function Movie({ movie, id,   deleteButton }) {
  const [show, setShow] = useState(true);

  const navigate=useNavigate();

  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  return ( 
  <Card className="movie-container">
    <img src={movie.poster} className="movie-poster" />
    <CardContent>
    <div className="movie-specs">
      <h2 className="movie-name">{movie.name} 
      
      <IconButton  color="primary" onClick={() => setShow(!show)} aria-label="delete">
   {show? <ExpandLessIcon/> : <ExpandMoreIcon/>}
</IconButton>
<IconButton  color="primary" onClick={() =>navigate(`/movies/${id}`)} aria-label="Toogle-summary">
{/* onClick={() =>navigate("/movies/"+id)} --> two methods we can use use any one; */}
    <InfoIcon/>
</IconButton></h2>
      <p style={styles} className="movie-rating">⭐{movie.rating}</p>
    </div>
   
    {show ? <p className="movie-summary">{movie.summary} </p> : null}
  </CardContent>
  <CardActions>
    <Counter />{  deleteButton}
  </CardActions>
  </Card>
  );
};
