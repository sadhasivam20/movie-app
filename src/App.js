
import './App.css';

import React, { useEffect } from 'react';
// import { User } from './User';
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { Routes, Route,  Navigate, useParams, useNavigate } from "react-router-dom";
import { AddMovie } from './AddMovie';
import { useState } from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicForm } from './BasicForm';


  


function App() {
  // const names=[
  //   {
  //         names:"Vijay",
  //         pics:"https://i.pinimg.com/736x/df/14/d2/df14d2cf785f4683fe1095d02337e86d.jpg"
  //       },
  //       {
  //         names:"Suriya",
  //         pics:"https://tse1.mm.bing.net/th?id=OIP.eK19kHyu6k0NNyH-EgvpTwHaLH&pid=Api&P=0"
  //       },
  //       {
  //      names:"Dulkar",
  //       pics:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/10/dulquer-salmaan-1508498673.jpg"
        
  //       },
  //       {
  //         names:"vikram",
  //          pics:"https://www.thenewsminute.com/sites/default/files/Vikram_1200.jpg"
           
  //          },
  // ]
  const [mode,setMode]=useState("dark")
const darkTheme = createTheme({
  palette: {
    mode:mode,
  },
});
useEffect(()=>{
  fetch("https://638e229daefc455fb2b60cfe.mockapi.io/movies")
.then(data=>data.json())
.then(movies=>setMovieList(movies));
},[]);

// fetch("https://638e229daefc455fb2b60cfe.mockapi.io/movies")
// .then(data=>data.json())
// .then(movies=>console.log(movies));

  const [movieList,setMovieList] = useState( []);
const navigate=useNavigate()
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight:"100vh", borderRadius:"0"}} elevation={4} >
    <div className='App'>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>navigate("/")}>HOME</Button>
          <Button color="inherit" onClick={()=>navigate("/movies")}>MOVIES</Button>
          <Button color="inherit" onClick={()=>navigate("/color-game")}>ADD COLOR</Button>
          <Button color="inherit" onClick={()=>navigate("/movies/add")}>ADD MOVIE</Button>
          <Button startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
           color="inherit" 
           onClick={()=>setMode(mode==="light"?"dark":"light")}>
            {mode==="light"?"DARK MODE":"LIGHT MODE"}
            </Button>
        </Toolbar>
      </AppBar>
 
  {/* <ul>
  <li><Link to="/">HOME</Link></li>
  <li> <Link to="/movies">MOVIES</Link></li>
  <li> <Link to="/color-game">COLOR</Link></li>
  
  <li> <Link to="/movies/add">ADD MOVIE</Link></li>
  </ul> */}
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies"/>} />
        <Route path="/movies" element={<MovieList movieList={movieList} />}/>
        <Route path="/game" element={<Navigate replace to="/color-game"/>} />
        <Route path="/Color-game" element={<AddColor/>} />
        <Route path="/add" element={<Navigate replace to="/movies/add"/>} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/movies/:id" element={<MovieDetails  movieList={movieList}/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/form-validation" element={<BasicForm/>} />
        {/* <Route path="about" element={<About />} /> */}   
      </Routes>
   </div>
   </Paper>
   </ThemeProvider>
  );
  
};

function MovieDetails({movieList}){
  const{id}=useParams()
  const movie=movieList[id];
  console.log(movieList,movie);
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const navigate=useNavigate();
  return(

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
      <p  style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary} </p>
      <Button onClick={()=> navigate(-1)} variant="contained" startIcon={< ArrowBackIcon/>}>
  BACK
</Button>
      </div>
      </div>
      );
      }

function Home(){
  return (
    <div className='home'>
      <h1>WELCOME TO THE MOVIE APP TO EXPLORE UR EXPERIENCE ... 🎉⭐  </h1>
    </div>
  );
}
function NotFound(){
  return(
  <div >
    <h1 className='not-found'> 404 NOT FOUND</h1>
    <img className='not' src="https://cdn.dribbble.com/users/1537480/screenshots/7199901/media/04f1bc09a3a16f5efc155fe9ea829cbc.png?compress=1&resize=400x300&vertical=top"/>
  </div>
  )
} 

export default App;
