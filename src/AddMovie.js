import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {useFormik} from "formik";
import * as  yup from 'yup';

const movieValidationSchema=yup.object({
      name:yup.string().required(),
      poster:yup.string().required().min(4),
      rating:yup.number().required().min(0).max(10),
      summary:yup.string().required().min(20),
      trailer:yup.string().required().min(4),
})
export function AddMovie({ movieList, setMovieList }) {
  // const [name, setName] = useState(" ");

  // const [poster, setPoster] = useState(" ");

  // const [rating, setRating] = useState(" ");

  // const [summary, setSummary] = useState(" ");

  // const [trailer, setTrailer] = useState(" ");
  

  const { handleBlur,handleChange,handleSubmit,values,errors,touched } =useFormik({
    initialValues:{
      name:" ",
      poster:" ",
      rating: " ",
      summary: " ",
      trailer:" ",
        },
        validationSchema:movieValidationSchema,
        onSubmit:(newMovie)=>{
          console.log("form values:", newMovie);
          addMovie(newMovie);
        }
});
  const navigate = useNavigate();



  const addMovie = (newMovie) => {
    // const newMovie = {
    //   // name: name,
    //   // poster: poster,
    //   // rating: rating,
    //   // summary: summary,
    //   // trailer:trailer,
    // };
    // setMovieList([...movieList, newMovie]);
  
    fetch("https://638e229daefc455fb2b60cfe.mockapi.io/movies",{
      method:"POST",
      body:JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    }).then(()=> navigate('/movies'));
  };
  return (
    <form className='add-movie'onSubmit={handleSubmit}>

      <TextField id="outlined-basic" 
      label="Name" 
      variant="outlined" 
      name="name" 
      value={values.name}   
      onChange={handleChange} 
      onBlur={handleBlur}  /> {touched.name && errors.name?errors.name :null}

      <TextField id="outlined-basic" 
      label="Poster"
       variant="outlined"  
       name="poster"
        value={values.poster} 
         onChange={handleChange}
          onBlur={handleBlur} />{touched.poster && errors.poster?errors.poster :null}

      <TextField id="outlined-basic" 
      label="Rating" 
      variant="outlined"
       name="rating"  
       value={values.rating}  
       onChange={handleChange} 
       onBlur={handleBlur} />{touched.rating && errors.rating?errors.rating:null}

      <TextField id="outlined-basic" 
      label="Summary"
       variant="outlined" 
       name="summary" 
       value={values.summary}   
       onChange={handleChange} 
       onBlur={handleBlur} />{touched.summary && errors.summary?errors.summary:null}

      <TextField id="outlined-basic"
       label="Trailer" 
       variant="outlined"
        name="trailer"
         value={values.trailer}
         onChange={handleChange} 
         onBlur={handleBlur} />{touched.trailer && errors.trailer?errors.trailer :null}
      
      <Button variant="contained" type='submit'>ADD MOVIE</Button>
    </form>
  );
}
