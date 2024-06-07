import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UsuarioPerfil.css';

const UsuarioPerfil = () => {
    const { UsuarioId } = useParams();
    const [usuario, setUsuario] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users/${UsuarioId}/`);
                setUsuario(response.data);
            } catch (error) {
                console.error('Error al cargar el perfil del usuario:', error);
            }
        };

        const checkFollowing = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/users/is-following/', 
                    { followed_id: UsuarioId }, 
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                );
                setIsFollowing(response.data.is_following);
            } catch (error) {
                console.error('Error al verificar seguimiento:', error);
            }
        };

        fetchUsuario();
        checkFollowing();
    }, [UsuarioId]);

    const handleFollow = async () => {
        try {
            await axios.post('http://localhost:8000/api/users/follow/', 
                { followed_id: UsuarioId }, 
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setIsFollowing(true);
            setUsuario((prevUsuario) => ({
                ...prevUsuario,
                followers_count: prevUsuario.followers_count + 1,
            }));
        } catch (error) {
            console.error('Error al seguir al usuario:', error);
        }
    };

    const handleUnfollow = async () => {
        try {
            await axios.post('http://localhost:8000/api/users/unfollow/', 
                { followed_id: UsuarioId }, 
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setIsFollowing(false);
            setUsuario((prevUsuario) => ({
                ...prevUsuario,
                followers_count: prevUsuario.followers_count - 1,
            }));
        } catch (error) {
            console.error('Error al dejar de seguir al usuario:', error);
        }
    };

    if (!usuario) {
        return <div>Cargando perfil...</div>;
    }

    return (
        <div className="perfil-container">
            <h2>Perfil de {usuario.username}</h2>
            <p>Email: {usuario.email}</p>
            <p>Mensajes publicados: {usuario.messages_count}</p>
            <p>Seguidores: {usuario.followers_count}</p>
            <p>Siguiendo: {usuario.following_count}</p>
            {isFollowing ? (
                <button onClick={handleUnfollow}>Dejar de seguir</button>
            ) : (
                <button onClick={handleFollow}>Seguir</button>
            )}
        </div>
    );
};

export default UsuarioPerfil;
