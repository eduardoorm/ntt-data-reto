import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div className="App">
      <h1>Lista de Usuarios - Reto Bootcamp 2 NTT DATA</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img src={user.fotografia} alt="User" />
            <h3>{user.nombre}</h3>
            <p>Género: {user.genero}</p>
            <p>Ubicación: {user.ubicacion}</p>
            <p>Correo: {user.correo}</p>
            <p>Fecha de nacimiento: {new Date(user.fechaNacimiento).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
