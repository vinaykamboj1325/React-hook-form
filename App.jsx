import { useState } from "react";
import "./App.css";

import { useForm, } from "react-hook-form";

function App() {
  const [values , setValues]=useState({FirstName:"",LastName:"",Age:"",mobile:"",acceptTerms:false, gender:""});

  const { register, handleSubmit, reset, formState: { errors , isSubmitting} } = useForm({defaultValues: values,});
  

  const Submitdata = async (data) => {
    setValues(data)
    console.log(values)
  };

  return (
    <>
      <form onSubmit={handleSubmit(Submitdata)}>

        <div>
          <label htmlFor="">FirstName</label>
          <input
            type="text"
            {...register("FirstName", {
              required: true,
              minLength: { value: 3, message: "enter the min 3 char" },
              maxLength: { value: 6, message: "enter the max 6 char" },
            })}
          />
          {errors.FirstName && <p>{errors.FirstName.message}</p>}
        </div>
        <br />

        <div>
          <label htmlFor="">LastName</label>
          <input
            type="text"
            {...register("LastName", {
              required: true,
              minLength: { value: 3, message: "enter the min 3 char" },
              maxLength: { value: 6, message: "enter the max 6 char" },
            })}
          />
          {errors.LastName && <p>{errors.LastName.message}</p>}
        </div>

        <div>
          <br />
          <label htmlFor="">Age</label>
          <input
            type="text"
            {...register("Age", {
              required: true,
              min: 18,
              max: 24,
            })}
          />
          {errors.Age && <p>{errors.Age.message}</p>}
        </div>
        <br />

        <div>
          <br />
          <label htmlFor="">Mobile</label>
          <input
            type="number"
            {...register("mobile", {
              required: true,
              minLength:{value:10, message:"enter the 10 int"},
            })}
          />
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>
        <br />

        <div>
        <label>
          <input
            type="checkbox"
            {...register('acceptTerms', 
              { required: 'You must accept the terms'

               })}
          />
          Accept Terms
        </label>
        {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}
      </div>
      <br />

      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            value="male"
            {...register('gender', { required: 'Please select a gender' })}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            {...register('gender')}
          />
          Female
        </label>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "wait" : "submit"}></input>
        <button type="reset" onClick={()=>reset()}>Reset</button>
      </form>
    </>
  );
}

export default App;
