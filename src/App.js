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
import Index from './pages'
import CreatePage from './pages/create-page'
import ViewPage from './pages/view-page'
import EditPage from './pages/edit-page'

function App() {
  
  return (
    <div>

      {/* <Datos></Datos> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="view/:dishId" element={<ViewPage/>} />
          <Route path="edit/:dishId" element={<EditPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
