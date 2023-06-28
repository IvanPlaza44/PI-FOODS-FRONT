
import { Form, Detail, Home, LandingPage } from "./views"
import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import './App.css'; 




function App() {
  const location = useLocation(); // ES UN HOOK QUE GUARDA LA RUTA EN UNA PROP PATHNAME
  return (
    <div>
      {location.pathname === "/" ? <LandingPage/> : <NavBar/>}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
