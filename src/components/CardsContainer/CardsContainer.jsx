import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"




const CardsContainer = ({firstIndex, lastIndex})=>{
  

    const recipes = useSelector(state=>state.recipes)

    return(
        <div className={style.container}>
            
            {Array.isArray(recipes) && recipes.map((recipe)=>{
                return <Card
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    summary={recipe.summary}
                    healthScore={recipe.healthScore}
                    steps={recipe.steps}
                    diets={recipe.diets}
                    created={recipe.created}
                    />
            }).slice(firstIndex, lastIndex)}
            
        </div>
    )
}
export default CardsContainer;