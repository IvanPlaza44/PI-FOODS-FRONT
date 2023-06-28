import style from "./Card.module.css"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteRecipe } from "../../redux/actions"




const Card = (props)=>{
    const { id } = props
    const dispatch = useDispatch()

    const handleDelete =()=>{
        dispatch(deleteRecipe(id));
        window.location.reload();
    }

    return(
        <div className={style.divContainer}>
            {props.created === true && <button onClick={()=>{handleDelete(id)}} className={style.btn}>x</button>}
            <p>{props.name} </p>
            <img src={props.image} alt='Recipe'/> 
            <p>Diets: {props.diets.join(", ")}</p>
            <NavLink className={style.linkDetail} to={`/detail/${props.id}`}>
                <p>Detail of Recipe!</p>
            </NavLink>
        </div>
    )

}
export default Card;
//<p>Diets: {props.diets.join(", ")}</p>

