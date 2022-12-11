// import React from 'react';
// import {useFormik} from "formik";
// import * as  yup from 'yup';
// const movieValidationSchema=yup.object({
//   email:yup.string().min(7).required(),
//   password:yup.string().min(4).required(),
// })
// export function BasicForm() {
//   const { handleBlur,handleChange,handleSubmit,values,errors,touched } =useFormik({
//     initialValues:{
//       email:" ",
//       password:" ",
//         },
//         validationSchema:movieValidationSchema,
//         onSubmit:(values)=>{
//           console.log("form values:",values);
//         }
// });
//  return (
//    <form  className='form-add'   onSubmit={handleSubmit}>
//     <input value={values.email}type="email"  name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur}/>{touched.email&& formik.errors.email?formik.errors.email:null}
//     <input value={values.password}type="text" name="password" placeholder="password" onChange={handleChange}
//     onBlur={handleBlur}/>{touched.password && errors.password ?errors.password:null}

// <h2>errors</h2>
//   <pre>{JSON.stringify(formik.errors)}</pre>
//   <h2>touched</h2>
//   <pre>{JSON.stringify(formik.touched)}</pre>
//     <button type="submit">submit</button>
//    </form>
//   );
// }
