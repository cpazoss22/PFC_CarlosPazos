import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Mensaje from './Mensaje';

const Hilo = () => {
    const { threadId } = useParams();
    const [hilo, setHilo] = useState(null);
    const [mensajes, setMensajes] = useState([]);
    const [nuevoMensaje, setNuevoMensaje] = useState('');
    const [usuarioActual, setUsuarioActual] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchHilo = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/threads/${threadId}/`);
                setHilo(response.data);
                setMensajes(response.data.messages);
            } catch (error) {
                console.error('Error al cargar el hilo:', error);
            }
        };

        const fetchUsuarioActual = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users/current/', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsuarioActual(response.data);
            } catch (error) {
                console.error('Error al cargar el usuario actual:', error);
            }
        };

        fetchHilo();
        fetchUsuarioActual();
    }, [threadId]);

    const handleNuevoMensaje = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/messages/', {
                content: nuevoMensaje,
                thread: threadId,
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            setMensajes([...mensajes, response.data]);
            setNuevoMensaje('');
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setError('Error al enviar el mensaje. Inténtalo de nuevo.');
        }
    };

    const handleDeleteThread = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/threads/${threadId}/delete/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
        } catch (error) {
            console.error('Error al eliminar el hilo:', error);
        }
    };

    if (!hilo) {
        return <div>Cargando hilo...</div>;
    }

    return (
        <div>
            <h2>{hilo.title}</h2>
            <p>{hilo.content}</p>
            {hilo.author && <p>Publicado por: {hilo.author.username} el {new Date(hilo.created_at).toLocaleString()}</p>}
            {hilo.author && usuarioActual && hilo.author.id === usuarioActual.id && (
                <button onClick={handleDeleteThread}>Eliminar hilo</button>
            )}

            <h3>Mensajes</h3>
            {mensajes.map((mensaje) => (
                <Mensaje
                    key={mensaje.id}
                    mensaje={mensaje}
                    usuarioActual={usuarioActual}
                    onDelete={(id) => setMensajes(mensajes.filter(m => m.id !== id))}
                />
            ))}

            <h3>Agregar un nuevo mensaje</h3>
            <form onSubmit={handleNuevoMensaje}>
                <textarea
                    value={nuevoMensaje}
                    onChange={(e) => setNuevoMensaje(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Hilo;
