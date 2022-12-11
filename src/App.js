
import './App.css';

// import { User } from './User';
import { AddColor } from './AddColor';
import { MovieList ,movieList,setMovieList} from './MovieList';
import { Routes, Route,  Navigate, useNavigate } from "react-router-dom";
import { AddMovie } from './AddMovie';
import { useState } from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicForm } from './BasicForm';
import { MovieDetails } from './MovieDetails';
import { Home } from './Home';
import { NotFound } from './NotFound';


  


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
  const navigate=useNavigate()

  const [mode,setMode]=useState("light")
const darkTheme = createTheme({
  palette: {
    mode:mode,
},
});
// });
// useEffect(()=>{
//   fetch("https://638e229daefc455fb2b60cfe.mockapi.io/movies")
// .then(data=>data.json())
// .then(movies=>setMovieList(movies));
// },[]);

// fetch("https://638e229daefc455fb2b60cfe.mockapi.io/movies")
// .then(data=>data.json())
// .then(movies=>console.log(movies));

  const [movieList,setMovieList] = useState( []);

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
          <Button  sx={{ marginLeft:"auto"}}  startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
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
        <Route path="/movies" element={<MovieList movieList={MovieList} />}/>
        <Route path="/game" element={<Navigate replace to="/color-game"/>} />
        <Route path="/Color-game" element={<AddColor/>} />
        <Route path="/add" element={<Navigate replace to="/movies/add"/>} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/basic-form" element={<BasicForm/>} />
        {/* <Route path="about" element={<About />} /> */}   
      </Routes>
   </div>
   </Paper>
   </ThemeProvider>
  );
  
};

export default App;
