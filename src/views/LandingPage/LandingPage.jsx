import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css"

const LandingPage = ()=>{
    return(
        <div className={style.fondo}>
            <h1 className={style.texto}>Welcome to my Foods Recipes  Project!</h1>
            <div className={style.linkContainer}>
                <NavLink className={style.link} to="/home">🥑 GO TO HOME 🥑</NavLink> 
            </div>
        </div>
    )

}
export default LandingPage