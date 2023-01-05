import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState,useEffect } from "react";
import {API} from "./global.js"
export function MovieDetails() {
  const { id } = useParams();
  const [movie,setMovie] = useState( []);

  useEffect(()=>{
    fetch(`${API}/movies/${id}`,{
      method:"GET"
    })
  .then(data=>data.json())
  .then((mv)=>setMovie(mv));
  },[]);
 
  // const movie = movieList[id];
  // console.log(movieList, movie);
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (

    <div>
      <iframe
        width="100%"
        height="800"
        src={movie.trailer}
        title="Avatar: The Way of Water | New Tamil Trailer | December 16 in Cinemas | Advance Bookings Open Now"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name} </h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary} </p>
        <Button onClick={() => navigate(-1)} variant="contained" startIcon={<ArrowBackIcon />}>
          BACK
        </Button>
      </div>
    </div>
  );
}
