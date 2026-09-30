"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function UpdateUsers(){
    const URL_API = "http://localhost:8095/usersdos";
    const [users, setUsers] = useState([]);
    const [getItemId, setGetItemId] = useState(null);
    const [usersDos, setUsersDos] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        role2: ""
    })

    useEffect(() => {
        fetch(URL_API)
            .then(res => res.json())
            .then(data => setUsers(data))   
    }, [])

    const handleChange = (e) => {
            setUsersDos({
                ...usersDos,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleEdit = (user) => {
        setGetItemId(user.id);
        setUsersDos(user);
    }

    const handleUpdate = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(
            `${URL_API}/${getItemId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usersDos)
            }
        );

        if (!response.ok) {
            throw new Error("Error en la actualización");
        }

        const updatedUser = await response.json();

        const updateList = users.map(user =>
            user.id === getItemId ? updatedUser : user
        );

        setUsers(updateList);
        setGetItemId(null);

        setUsersDos({
            username: "",
            password: "",
            phone: "",
            email: "",
            role2: ""
        });

        alert("Usuario actualizado correctamente");
        
    } catch (error) {
        console.error("Error actualizando usuario:", error);
    }
};

 const handleDelete = async (id) => {
    try {
        const requestBackend = await fetch(`${URL_API}/${id}`, {
            method: "DELETE"
        })
        if(!requestBackend.ok){
            throw new Error("Error Eliminar Usuario");
        }
        const updateList = users.filter(user => user.id !== id);
        setUsers(updateList);
        alert("Usuario Eliminado Correctamente");
    }catch (error) {
        console.error("Error Eliminando Usuario", error);
    }
 }
    
    return (
        <div>
            <form onSubmit={handleUpdate}>

                <input type="text" value={usersDos.username} placeholder="Username" name="username" onChange={handleChange}></input>
                <input type="text" value={usersDos.password} placeholder="Password" name="password" onChange={handleChange}></input>
                <input type="text" value={usersDos.phone} placeholder="Phone" name="phone" onChange={handleChange}></input>
                <input type="text" value={usersDos.email} placeholder="Email" name="email" onChange={handleChange}></input>
                <input type="text" value={usersDos.role2} placeholder="Role2" name="role2" onChange={handleChange}></input>

                <button type="submit">
                    Actualizar
                </button>

            </form>

                <Link href="/testForm">Crear Usuario</Link>

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role2</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.role2}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}