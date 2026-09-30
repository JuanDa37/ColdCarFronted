"use client";

import Link from "next/link";
import {useState} from "react";

export default function registerUser(){

    const URL_API = "http://localhost:8095/usersdos/";

    const [forms, setForms] = useState({
        username : "",
        password : "",
        role2: "",
        phone: "",
        email: ""
    })

    //Maneja los cambios en los inputs
    const handleChange = (e) => {
        setForms({
            ...forms,
            [e.target.name]: e.target.value
        });
    };

    //Enviar datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(forms)
            })

            const data = await response.json();
            console.log("Usuario creado", data);

            //Limpiar el formulario

            setForms({
                username: "",
                password: "",
                role2: "",
                phone: "",
                email: ""
            })
            
        } catch (error){

            console.error("Error al crear el usuario", error);

        }

    }

    return (
        <div>

            <h2>Crear usuario</h2>

            <form
            
                onSubmit={handleSubmit}
            
            >
                <input 

                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={forms.username}
                    onChange={handleChange}>
                
                </input>

                <input 

                    type="text"
                    name="role2"
                    placeholder="Role2"
                    value={forms.role2}
                    onChange={handleChange}>
                
                </input>

                <input
                
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={forms.password}
                    onChange={handleChange}

                >

                </input>

                <input 

                    type="text"
                    name="email"
                    placeholder="email"
                    value={forms.email}
                    onChange={handleChange}>
                
                </input>

                <input 

                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={forms.phone}
                    onChange={handleChange}>
                
                </input>
                
                

                <button type="submit">

                    Crear

                </button>
                
            </form>

                        <Link href="/UpdateForm">Volver</Link>


        </div>
    );
}