import './App.css';
import Datos from "./components/datos";
import {
  BrowserRouter, // Para declarar las rutas => padre de todas las rutas
  Routes, // Se ocupan para listar las rutas independientes.
  Route, // para declarar una ruta.
  Link, // Para navegar entre las rutas; Reemplaza al anchor
  useParams, // Para capturar los id's
  Outlet
} from "react-router-dom";
import EditPage from './pages/edit-page'


function App() {
  
  return (
    <div>

      {/* <Datos></Datos> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Datos />} /> 
          <Route path="/edit" element={<EditPage />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
