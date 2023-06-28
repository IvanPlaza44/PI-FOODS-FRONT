import { NavLink } from "react-router-dom"
import  style  from "./NavBar.module.css"
import  IconoCasa  from "../../Images/IconoCasa.png"
import IconoReceta from "../../Images/IconoReceta.png"
import  SearchBar  from "../SearchBar/SearchBar"



const NavBar = ()=>{
 
    return(
        <div className={style.container}>
            <NavLink className={style.link} to="/home" ><img src={IconoCasa} alt=""/>Home</NavLink>
            <div className={style.searchBar}>
                <SearchBar />
            </div>
            <NavLink className={style.link} to="/create"><img src={IconoReceta} alt=""/>Create Recipe</NavLink> 
        </div>
    )
}
export default NavBar;