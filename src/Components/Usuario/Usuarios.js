import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Usuarios.css';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users/');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al cargar los usuarios:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.username.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="usuarios-container">
            <h2>Usuarios</h2>
            <input
                type="text"
                placeholder="Buscar usuarios"
                value={busqueda}
                onChange={handleBusquedaChange}
            />
            <div className="usuarios-list">
                {usuariosFiltrados.map((usuario) => (
                    <div key={usuario.id} className="usuario-item">
                        <Link to={`/usuario/${usuario.id}`}>
                            {usuario.username}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Usuarios;
