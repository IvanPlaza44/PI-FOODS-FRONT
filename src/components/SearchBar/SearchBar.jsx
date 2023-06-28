import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/actions";
import style from "./SearchBar.module.css"
import IconoLupa from "../../Images/IconoLupa.png"

function SearchBar() {
  const [ name, setName ] = useState("");
  const dispatch = useDispatch();


  const handleChange = (event) => {
    setName(event.target.value);
};

  const onSearch = (name) => {
    if (!name) {
      alert("Por favor, ingresa un nombre de receta válido");
      return;
    }
    const deleteSpace = name.trim(); //EL METODO TRIM ME AYUDA QUE EN EL INPUT SE HAGA LA BUSQUEDA AUNQUE TENGA ESPACIOS!

    dispatch(searchRecipes(deleteSpace));
    setName("");
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input className={style.input} value={name} onChange={handleChange} type="search" placeholder=" Search Recipe..." />
        <button className={style.btn} type="submit"><img src={IconoLupa} alt="" /></button>
    </form>
  );
}

export default SearchBar;