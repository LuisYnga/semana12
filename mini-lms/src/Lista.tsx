import { Link } from 'react-router-dom';
import { estudiantes, estado } from './store';
// Vista Lista: muestra la tabla con .map() (Semana 11).
function Lista() {
    return (
        <div>
            <h1>Lista de estudiantes</h1>
            <Link className="boton" to="/agregar">Agregar estudiante</Link>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Créditos</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map((e, i) => (
                        <tr key={i}>
                            <td>{e.nombre}</td>
                            <td>{e.creditos}</td>
                            <td>
                                <span className={`badge ${estado(e.creditos) === 'Matriculado' ? 'ok' : 'pend'}`}>
                                    {estado(e.creditos)}
                                </span>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Lista;