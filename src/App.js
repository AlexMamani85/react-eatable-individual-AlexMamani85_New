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
import IndexPage from './pages'
import CreatePage from './pages/create-page'
import ViewPage from './pages/view-page'
import EditPage from './pages/edit-page'
import ModalPage from './pages/modal-page'
import Store from './store/store'

function App() {
  
  return (
    <Store>

      {/* <Datos></Datos> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="view/:dishId" element={<ViewPage/>} />
          <Route path="edit/:dishId" element={<EditPage/>} />
          <Route path="delete/:dishId" element={<ModalPage/>} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
