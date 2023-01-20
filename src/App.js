import './App.css';
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from './pages/Acceuil';
import ListCat from './pages/ListCat';
import CatForm from './pages/CatForm';
import ModifCat from './pages/ModifCat';
import Parametre from './pages/Parametre';
import ListDemandeRechargement from './pages/ListeDemandeRechargement';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Stat from './pages/Stat';
import Deconnect from './pages/Deconnect';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login/>}> 
      </Route>
      <Route path="/listeCategorie" element={<ListCat/>}></Route>
      <Route path="/acceuil" element={<ListCat/>}></Route>
      <Route path="/formulaireCategorie" element={<CatForm/>}></Route>
     <Route path="/modifCat/:idCat" element={<ModifCat/>} ></Route>
     <Route path="/parametrage" element={<Parametre/>}></Route>
     <Route path="/credit" element={<ListDemandeRechargement/>}></Route>
     <Route path="/stat" element={<Stat/>}></Route>
     <Route path="/deconnexion" element={<Deconnect/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
