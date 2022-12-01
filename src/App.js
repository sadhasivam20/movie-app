
import './App.css';

import React from 'react';
// import { User } from './User';
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { AddMovie } from './AddMovie';
import { useState } from "react";

    
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
  const [movieList,setMovieList] = useState([{
    name: "Vikram",
    poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
  },
  {
    name: "RRR",
    poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  },
  {
    name: "Iron man 2",
    poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  },
  {
    name: "No Country for Old Men",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  },
  {
    name: "Jai Bhim",
    poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
  },
  {
    name: "The Avengers",
    rating: 8,
    summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  },
  {
    name: "Ratatouille",
    poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  }
  ]);

  return (
    <div className='App'>
  {/* <MovieList /> */}
  {/* <AddColor/> */}
  <ul>
  <li><Link to="/">HOME</Link></li>
  <li> <Link to="/movies">MOVIES</Link></li>
  <li> <Link to="/color-game">COLOR</Link></li>
  
  <li> <Link to="/movies/add">ADD MOVIE</Link></li>
  </ul>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies"/>} />
        <Route path="/movies" element={<MovieList movieList={movieList} />}/>
        <Route path="/game" element={<Navigate replace to="/color-game"/>} />
        <Route path="/Color-game" element={<AddColor/>} />
        <Route path="/add" element={<Navigate replace to="/movies/add"/>} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="*" element={<NotFound/>} />
        {/* <Route path="about" element={<About />} /> */}   
      </Routes>
   </div>
  );
  
};
function Home(){
  return(
    <div>
      <h1>Welcome To The Movie App </h1>
    </div>
  )
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
