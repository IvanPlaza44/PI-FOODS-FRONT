import { filterRecipesDiets, filterRecipesOrigin } from "../../redux/actions"
import { useDispatch } from "react-redux";
import style from "./Filters.module.css"

const Filters =()=>{

    const dispatch = useDispatch();

    const handlerFilterDiets = (event)=>{
        dispatch(filterRecipesDiets(event.target.value))
    }

    const handlerFilterOrigin = (event)=>{
        dispatch(filterRecipesOrigin(event.target.value))
    }



    return(
        <div className={style.container}>
        
            <select className={style.boxSelect} onChange={handlerFilterDiets} name="" id="">
                    <option disabled>Filter By Diets</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="fodmap friendly">Fodmap Friendly</option>
            </select>

            <select className={style.boxSelect} onChange={handlerFilterOrigin}>
                    <option disabled>Filter By Origin</option>
                    <option value="API">API</option>
                    <option value="DB">DataBase</option>
            </select>
        </div>
    )

}
export default Filters;