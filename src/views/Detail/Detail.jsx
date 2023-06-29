import axios from "axios";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import style from "./Detail.module.css"


const Detail =()=>{
    const { id } = useParams()
    const [ recipe, setRecipe ] = useState({})



    useEffect(()=>{
        axios.get(`http://localhost:3001/recipes/${id}`)
            .then(({data})=>{
                if(data.name){
                    setRecipe(data)
                }else{
                    window.alert("No hay Receta")
                }
            });
        return setRecipe({})
    }, [id])


      


    return(
        <>
        <h1 className={style.title}>Details</h1>
            <div>
                {
                    recipe?(
                        <div className={style.container}>
                            <div className={style.description}>
                            <h1>ID: {recipe.id}</h1>
                            <h1>Name: {recipe.name}</h1>
                            <h1>Summary: {recipe.summary}</h1>
                            <h1>Health Score: {recipe.healthScore}</h1>
                            <h1>Steps by steps: {recipe.steps}</h1>
                            <h1>Diets: {recipe.diets}</h1>
                            </div>
                            <img className={style.imageDetail} src={recipe.image} alt={recipe.name}/>
                        </div>
                            

                    )
                    :("")
                }
            </div>
        </>
    )
}
export default Detail;