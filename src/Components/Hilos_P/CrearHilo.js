import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CrearHilo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const mandarEnvio = async (event) => {
    event.preventDefault();

    const data = {
      title: title,
      content: content,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/threads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error al crear el hilo');
      }

      alert('Hilo creado con éxito');
      navigate('/ListaHilos'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="crear-hilo">
        <h1>Crea tu primer Hilo</h1>
      <form onSubmit={mandarEnvio}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Contenido:
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Crear Hilo</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h3>Si no quieres crear un hilo, haz click <a href='/ListaHilos'>aquí</a></h3>
      </form>
     
    </div>
    
  );
}

export default CrearHilo;
