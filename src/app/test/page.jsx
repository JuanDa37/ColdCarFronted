"use client";

import { useState, useEffect } from "react";

export default function UpdateForm() {
  const URL_API = "http://localhost:8095/usersdos";

  const [users, setUsers] = useState([]);
  const [getItemId, setGetItemId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    role2: "",
  });

  // 🔹 1. FUNCIÓN PARA TRAER USUARIOS (REUTILIZABLE)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL_API);

      if (!res.ok) throw new Error("Error cargando usuarios");

      const data = await res.json();
      setUsers(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 2. CARGAR AL INICIO
  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 3. EDITAR (LLENA EL FORMULARIO)
  const handleEdit = (user) => {
    setGetItemId(user.id);
    setForm(user);
  };

  // 🔹 4. CAMBIOS EN INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 5. CREAR / ACTUALIZAR
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = getItemId ? "PUT" : "POST";
      const URL = getItemId ? `${URL_API}/${getItemId}` : URL_API;

      const res = await fetch(URL, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      await fetchUsers(); // 🔥 recarga desde backend (más profesional)

      // limpiar form
      setForm({
        username: "",
        password: "",
        phone: "",
        email: "",
        role2: "",
      });

      setGetItemId(null);

    } catch (error) {
      console.error("Error guardando:", error);
    }
  };

  // 🔹 6. ELIMINAR
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${URL_API}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error eliminando usuario");
      }

      await fetchUsers(); // 🔥 sincroniza con backend

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <h2>{getItemId ? "Editar Usuario" : "Crear Usuario"}</h2>

      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
        <input name="password" value={form.password} onChange={handleChange} placeholder="Password" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input name="role2" value={form.role2} onChange={handleChange} placeholder="Role" />

        <button type="submit">
          {getItemId ? "Actualizar" : "Crear"}
        </button>
      </form>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role2}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Editar</button>
                  <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}