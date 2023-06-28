import { GET_RECIPES, SEARCH_RECIPES, ORDER_RECIPES_NAME, FILTER_RECIPES_DIETS, FILTER_RECIPES_ORIGIN, ORDER_RECIPES_HEALTSCORE, POST_RECIPE, DELETE_RECIPE } from "./actionsTypes";
import axios from "axios"




///-----------------
export const getRecipes = ()=>{
    return async function(dispatch){
       const recipeData = await axios.get("http://localhost:3001/recipes/")
       const recipes = recipeData.data

      dispatch({type: GET_RECIPES, payload: recipes})
    }
}
///-------------------
export const searchRecipes = (name)=>{
  return async function(dispatch){
    if (name.trim() === "") {
      alert("Por favor, ingresa un nombre de receta válido");
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:3001/recipes/?name=${name}`);
      if(data.length === 0) throw Error("no hay recetas con ese nombre")
      dispatch({ type: SEARCH_RECIPES, payload: data });
    } catch (error) {
      alert(error);
    }
  };
  }
  ///------------

  export const filterRecipesDiets =(diets)=>{
    return {type: FILTER_RECIPES_DIETS, payload: diets}
  }
  ///----------------
   ///------------

   export const filterRecipesOrigin =(created)=>{
    return {type: FILTER_RECIPES_ORIGIN, payload: created}
  }
  ///----------------
  export const orderRecipesName = (order)=>{
    return {type: ORDER_RECIPES_NAME, payload: order}/// PUEDE SER A: ASCENDENTE O D: DESCENDENTE
  }

  ///-------------

  export const orderRecipesHealtScore = (healthScore)=>{
    return {type: ORDER_RECIPES_HEALTSCORE, payload: healthScore}
  }

  //--------
 

export const postRecipe = (form, errors)=>{
  return async function(dispatch){
    const { name, image, summary, healthScore, steps, diets } = errors;

    if (!form.name || !form.image || !form.summary || !form.healthScore || !form.steps || !form.diets) {
      alert("No pueden haber campos vacios");
      return;
    }
    
    if (name || image || summary || healthScore || steps || diets) {
      alert("Hay datos incorrectos");
      return;
    }

    try {
      const postResponse = await axios.post("http://localhost:3001/recipes", form)
      alert("La Receta fue creada con exito")
      dispatch({ type: POST_RECIPE, payload: postResponse });
    } catch (error) {
      alert(error);
    }
  };

}

///------------

export const deleteRecipe = (id)=>{
  return async function(dispatch){
    try {
      const borrado = await axios.delete(`http://localhost:3001/recipes/${id}`)
      dispatch({type: DELETE_RECIPE, payload: borrado})
      
    } catch (error) {
      alert(error);
    }
  }

  

}



