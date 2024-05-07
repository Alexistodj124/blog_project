import  { useState } from "react";


const Login = () => {
    const [user, setUsername] = useState('');
    const [passw, setPassword] = useState('');
    const [, setError] = useState('');

    const registrar = async () => {
        try {
          const response = await fetch('http://127.0.0.1:3000/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, passw })
          });
    
          if (!response.ok) {
            throw new Error('Credenciales incorrectas');
          }else{
            //navigate('/posts/dashboard');
          }
    
          // Si la respuesta es exitosa, puedes redirigir a la página principal o realizar otras acciones
          console.log('Usuario autenticado correctamente');
        } catch (error) {
          setError(error.message);
        }
      };
    return (
        <div>
            <h1>Login</h1>
            <p>
                <input type="text" placeholder="Usuario" value={user} onChange={(e) => setUsername(e.target.value)} />
            </p>
            <p>
                <input type="password" placeholder="Contraseña" value={passw} onChange={(e) => setPassword(e.target.value)} />
            </p>
            <p>
                <button onClick={registrar}>Ingresar</button>
            </p>
        </div>
    )
}

export default Login