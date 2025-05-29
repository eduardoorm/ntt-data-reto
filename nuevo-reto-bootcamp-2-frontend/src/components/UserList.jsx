import React, { useEffect, useState } from "react";
import "./UserList.css"; // Opcional, si usas estilos personalizados
import { getUsers } from "./services/userService";

/*ESTE COMPONENTE DEBE TERMINAR DE IMPLEMENTARSE PARA QUE SEA REUTILIZADO EN UN FUTURO */
const UserList = () => {
  const [users, setUsers] = useState([]);
    useEffect(() => {
    getUsers().then(setUsers).catch(console.error);
  }, []);


  return (
    <div className="user-list">
      <h2>Lista de usuarios</h2>
      <div className="user-grid">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img src={user.picture?.medium} alt="foto" />
            <h3>{`${user.name?.first} ${user.name?.last}`}</h3>
            <p><strong>Género:</strong> {user.gender}</p>
            <p><strong>Ubicación:</strong> {`${user.location?.city}, ${user.location?.country}`}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Fecha de nacimiento:</strong> {new Date(user.dob?.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
