
const validate =(form)=>{
    let errors = {};
    /// VALIDATE NAME
    if(form.name.length > 50) {
        errors.name = "El nombre de la receta debe ser menor a 50 caracteres"
    }
    if(!/^[a-zA-Z\s,]+$/.test(form.name)){
        errors.name = "El nombre no puede tener numeros, ni caractreres especiales"
    }
    if(form.name.length < 1) {
        errors.name = "Este campo no puede estar vacio"
    }
    /// VALIDATE IMAGE
    if(!/\.(jpeg|jpg|gif|png)$/i.test(form.image)){
        errors.image = "Debes ingresar la URL a una imagen"
    }
    if(form.image.length === 0){
        errors.image = "Ingrese una URL"
    }
    /// VALIDATE SUMMARY
    if(!/^.{1,500}$/.test(form.summary)){
        errors.summary = "No puedes exceder los 100 caracteres"
    }
    if(form.summary.length === 0){
        errors.summary = "Ingrese un breve resumen de la receta"
    }
    //VALIDATE HEALTH SCORE
    if(!/^(?:[1-9][0-9]?|100)$/.test(form.healthScore)){
        errors.healthScore = "El puntaje debe ser del 1 al 100"
    }
     /// VALIDATE STEPS
     if(!/^.{1,500}$/.test(form.steps)){
        errors.steps = "No puedes exceder los 100 caracteres"
    }
    if(form.steps.length === 0){
        errors.steps = "Escriba un paso a paso de la preparacion de esta receta"
    }
    // VALIDATE DIETS
    if(form.diets.length === 0){
        errors.diets = "Selecciona al menos una dieta que corresponda a esta receta"
    }

    return errors

}

export default validate;