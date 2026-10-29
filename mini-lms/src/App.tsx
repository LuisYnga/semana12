import { Routes, Route, Link, Navigate } from 'react-router-dom';
import miImagen from './assets/image.png'; // 👈 Importamos el archivo como una variable
import miImagenCopy from './assets/image copy.png'; // 👈 Respeta el espacio en blanco
import Lista from './Lista';
import Agregar from './Agregar';
import Modificar from './Modificar';
import './App.css';
// Componente raíz: barra de navegación + área de rutas.
function App() {
  return (
    <div>
      <nav className="navbar">
        <span className="marca">Mini-LMS</span>
        <div>
          <Link className="nav-btn" to="/">Lista</Link>
          <Link className="nav-btn" to="/agregar">Agregar</Link>
          <Link className="nav-btn" to="/modificar">Modificar</Link>
        </div>
      </nav>
      <div className="contenedor">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Lista />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/modificar" element={<Modificar />} />
        </Routes>
        <img src="" alt="" /><img src={miImagen} alt="Descripción de la imagen" className="imagen-app" />
        <img src={miImagenCopy} alt="Segunda descripción" className="imagen-app" />

      </div>
    </div>
  );
}
export default App;