

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filters from "../../components/Filters/Filters";
import OrderRecipes from "../../components/OrderRecipes/OrderRecipes";
import { Pagination } from "../../components/Pagination/Pagination";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecipes } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    console.log("Despacha la action y muestra recetas");
    dispatch(getRecipes());
  }, [dispatch]);

  

  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const totalRecipes = recipes.length;

  const lastIndex = currentPage * recipesPerPage;
  const firstIndex = lastIndex - recipesPerPage;


  return (
    <>
      <div className={style.container}>
        <OrderRecipes />
        <Filters />
      </div>
      <Pagination
        recipes={recipes}
        recipesPerPage={recipesPerPage}
        currentPage={currentPage}
        totalRecipes={totalRecipes}
        setCurrentPage={setCurrentPage}
      />
      <CardsContainer recipes={recipes} lastIndex={lastIndex} firstIndex={firstIndex}/>
    </>
  );
};

export default Home;
