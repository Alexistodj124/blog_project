import { useState } from "react";
import useAPI from "./useAPI";
import './Styles/posts.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [, setError] = useState('');
    const { fetchData, error } = useAPI();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleContraseniaChange = (e) => {
        setContrasenia(e.target.value);
    };

    const autenticarUsuario = async () => {
        try {
            const data = await fetchData('http://127.0.0.1:22562/authe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, contrasenia }),
            });

            localStorage.setItem("autenticado", true);
            window.location.href = './header';
            console.log('Usuario autenticado correctamente:', data);
        } catch (error) {
            localStorage.setItem("autenticado", false);
            setError(error.message);
        }
    };

    const registrarUsuario = async () => {
        try {
            const data = await fetchData('http://127.0.0.1:22562/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, contrasenia })
            });

            console.log('Usuario registrado correctamente:', data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <p>
                <input type="text" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
            </p>
            <p>
                <input type="password" placeholder="Contraseña" value={contrasenia} onChange={handleContraseniaChange} />
            </p>
            <p>
                <button onClick={autenticarUsuario}>Ingresar</button>
                <button onClick={registrarUsuario}>Registrar</button>
            </p>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default Login;
