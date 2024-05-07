import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [contrasenia, setcontrasenia] = useState('');
    const [, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlecontraseniaChange = (e) => {
        setcontrasenia(e.target.value);
    };

    const autenticarUsuario = async () => {
        try {
            const response = await fetch('http://127.0.0.1:22562/authe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, contrasenia }),
            });

            if (!response.ok) {
              localStorage.setItem("autenticado",false)

                throw new Error('Credenciales incorrectas');
            } else {
              localStorage.setItem("autenticado",true)
              window.location.href = './header';
              // Aquí puedes manejar la redirección o realizar otras acciones si la autenticación es exitosa
              console.log('Usuario autenticado correctamente');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const registrarUsuario = async () => {
        try {
            const response = await fetch('http://127.0.0.1:22562/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, contrasenia })
            });

            if (!response.ok) {
                throw new Error('Credenciales incorrectas');
            } else {
                // Aquí puedes manejar la redirección o realizar otras acciones si el registro es exitoso
                console.log('Usuario registrado correctamente');
            }
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
                <input type="password" placeholder="Contraseña" value={contrasenia} onChange={handlecontraseniaChange} />
            </p>
            <p>
                <button onClick={autenticarUsuario}>Ingresar</button>
                <button onClick={registrarUsuario}>Registrar</button>
            </p>
        </div>
    );
};

export default Login;
