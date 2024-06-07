import React from 'react';
import axios from 'axios';

const Mensaje = ({ mensaje, usuarioActual, onDelete }) => {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/messages/${mensaje.id}/delete/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            onDelete(mensaje.id);
        } catch (error) {
            console.error('Error al eliminar el mensaje:', error);
        }
    };

    return (
        <div>
            <p>{mensaje.content}</p>
            {mensaje.author && (
                <p>
                    Publicado por: {mensaje.author.username} el {new Date(mensaje.created_at).toLocaleString()}
                </p>
            )}
            {mensaje.author && usuarioActual && mensaje.author.id === usuarioActual.id && (
                <button onClick={handleDelete}>Eliminar mensaje</button>
            )}
        </div>
    );
};

export default Mensaje;
