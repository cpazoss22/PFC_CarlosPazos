import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListaHilos.css';

function ListaHilos() {
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/threads/list/');
        if (!response.ok) {
          throw new Error('Error al obtener la lista de hilos');
        }
        const data = await response.json();
        setThreads(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="lista-hilos">
      <h1>Lista de Hilos</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="threads-container">
        {threads.map((thread) => (
          <div key={thread.id} className="thread-item">
            <Link to={`/hilo/${thread.id}`}>
              <h2>{thread.title}</h2>
              <p>{thread.content.substring(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaHilos;
