import { useState } from "react";
import validate from "./validate";
import style from "./Form.module.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { postRecipe } from "../../redux/actions";

const Form =()=>{

  const dispatch = useDispatch()

    const [ form, setForm ] = useState({
        name: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diets:[]
    });

    const [ errors, setErrors ] = useState({});

    const handleChange =(event)=>{
        const { name, value } = event.target
        setForm ({
           ...form,
           [name]: value
        })
        setErrors(validate({
          ...form,
          [name]: value
        }))      
    }

    const handleChangeDiets = (event)=>{
        const selectedDiet = parseInt(event.target.value);
        if(!form.diets.includes(selectedDiet)){
          setForm({
              ...form,
              diets: [...form.diets, selectedDiet]
          })
          setErrors(validate({
             ...form,
             diets: selectedDiet
           }))  
        }}


    const handleRemoveDiet = (diet) => {
        setForm({
          ...form,
          diets: form.diets.filter((selectedDiet) => selectedDiet !== diet)
        });
      };
      const dietOptions = {
        1: "Vegetarian",
        2: "Gluten Free",
        3: "Dairy Free",
        4: "Lacto Ovo Vegetarian",
        5: "Vegan",
        6: "Paleolithic",
        7: "Primal",
        8: "Whole 30",
        9: "Pescatarian",
        10: "Ketogenic",
        11: "Fodmap Friendly"
      };



      
      const handlerSubmit =(event)=>{
        event.preventDefault();
        dispatch(postRecipe(form, errors))
        
        setForm({
          name: "",
          image: "",
          summary: "",
          healthScore: "",
          steps: "",
          diets:[]
        })

      }

 
    
    return(
      <div className={style.container}>
        <form onSubmit={handlerSubmit} className={style.boxForm}>
          <br />
            <div className={style.boxInput}>
                <label>Name </label>
                <input type="text" onChange={handleChange} value={form.name} name="name" className={style.input} placeholder=""/> 
                {form.name && errors.name && <p style={{color: "orangered"}}>{errors.name}</p>}
            </div>
            <br />

            <div className={style.boxInput}>
                <label >Image </label>
                <input type="text" onChange={handleChange} value={form.image} name="image"/>
                {form.image && errors.image && <p style={{color: "orangered"}}>{errors.image}</p>}
            </div>
            <br />

            <div className={style.boxInput}>
                <label >Summary </label>
                <textarea type="text" onChange={handleChange} value={form.summary} name="summary" className={style.inputSummary}/>
                {form.summary && errors.summary && <p style={{color: "orangered"}}>{errors.summary}</p>}
            </div>
            <br />

            <div className={style.boxInput}>
                <label >Health Score </label>
                <input type="number" onChange={handleChange} value={form.healthScore} name="healthScore"/>
                {form.healthScore && errors.healthScore && <p style={{color: "orangered"}}>{errors.healthScore}</p>}
            </div>
            <br />

            <div className={style.boxInput}>
                <label >Steps by steps </label>
                <textarea type="text" onChange={handleChange} value={form.steps} name="steps"/>
                {form.steps && errors.steps && <p style={{color: "orangered"}}>{errors.steps}</p>}
            </div>
            <br />


            <div className={style.boxInput}>
                <label>Diets </label>
                <select name="diets"   onChange={handleChangeDiets} value={form.diets}>
                    <option value="" disabled >Select Recipes</option>
                    <option value="1">Vegetarian</option>
                    <option value="2">Gluten Free</option>
                    <option value="3">Dairy Free</option>
                    <option value="4">Lacto Ovo Vegetarian</option>
                    <option value="5">Vegan</option>
                    <option value="6">Paleolithic</option>
                    <option value="7">Primal</option>
                    <option value="8">Whole 30</option>
                    <option value="9">Pescatarian</option>
                    <option value="10">Ketogenic</option>
                    <option value="11">Fodmap Friendly</option>
                </select>
                    {form.diets.length === 0 && errors.diets && <p style={{color: "orangered"}}>{errors.diets}</p>}
            </div>

            <div>
        
        <ul className={style.diets}>
          {form.diets.map((diet) => (
            <li key={diet}>
              {dietOptions[ diet ] }
              <button onClick={() => handleRemoveDiet(diet)}>x</button>
            </li>
          ))}
        </ul>

      </div>
      <div className={style.btnContainer}>
        <button type="submit" className={style.btn}>🍕 Create Recipe</button>
        <Link to="/home">
          <button type="submit" className={style.btn}>🏠 Go to Home</button>
        </Link>
        
      </div>
        </form>
    </div>
    )
}
export default Form;