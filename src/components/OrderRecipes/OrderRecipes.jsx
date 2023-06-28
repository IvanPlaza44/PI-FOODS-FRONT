import { useDispatch } from "react-redux"
import { orderRecipesHealtScore, orderRecipesName } from "../../redux/actions";
import style from "./OrderRecipes.module.css"


const OrderRecipes = ()=>{
    const dispatch = useDispatch();
    
    const handlerOrderName = (event)=>{
        dispatch(orderRecipesName(event.target.value))
    }

    const handlerOrderHealthScore = (event)=>{
        dispatch(orderRecipesHealtScore(event.target.value))
    }
    return(
        <div className={style.container}>
             <select className={style.boxSelect} onChange={handlerOrderName} name="" id="">
                    <option disabled>Order By Name</option>
                    <option value="A">A-Z</option>
                    <option value="D">Z-A</option>
                </select>

                <select className={style.boxSelect} onChange={handlerOrderHealthScore} name="" id="">
                    <option disabled>Order By Health Score</option>
                    <option value="Menor">1 - 100</option>
                    <option value="Mayor">100 - 1</option>
                </select>
        </div>
    )

}
export default OrderRecipes;