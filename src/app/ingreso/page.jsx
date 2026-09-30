import "./ingreso.css"

export default function login(){
    return <div>
        <form className="bg-white max-w-[300px]">
            <h1>Login</h1>

            <label for="usuario">Usuario</label>
            <input id="usuario"></input>

            <label for="contraseña">Contraseña</label>
            <input id="contraseña"></input>

            <input></input>
        </form>
    </div>
}