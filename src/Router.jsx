import { useState } from 'react'
import Register from './Register';
import Reporte from './Reporte';
import ModifyPost from './Components/Modify/ModifyPost';

function Router() {
    const [page, setPage] = useState("dashboard")
    const [loggedin, setLoggedIn] = useState(false)
    const [user, setUsername] = useState("")
    const [passw, setPassword] = useState("")
    console.log(user)
    console.log(passw)
    const registrar = async (user,passw) => {
        console.log('user:', user);
        console.log('passw:', passw);
        try {
          // Cambia la URL y/o el cuerpo de la solicitud según sea necesario para el registro
          const response = await fetch('http://127.0.0.1:22562/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            // Asegúrate de incluir todos los campos necesarios para el registro
            body: JSON.stringify({ username: user, password: passw })
          });
    
          if (!response.ok) {
            // Cambia el mensaje de error a uno apropiado para el registro
            const errorData = await response.json();
            throw new Error('No se pudo registrar al usuario: ' + errorData.message);
          }
    
          // Si la respuesta es exitosa, puedes redirigir a la página de inicio de sesión o alguna introductoria
          console.log('Usuario registrado correctamente');
          //navigate('');  // Asumiendo que `navigate` está definido en tu contexto de router
        } catch (error) {
          console.error("Error en el registro:", error);
          alert("Error en el registro. Inténtalo de nuevo.");
        }
    };


    // const ingresar = () => {
    //     async function apilogin() {
    //         try {
    //             const response = await fetch("http://127.0.0.1:22562/user", {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    
    //             if (!response.ok) {
    //                 alert("Error en el servidor. Inténtalo de nuevo.");
    //                 return;
    //             }
    
    //             const users = await response.json();
                
    //             const user = users.find(u => u.username === username && u.contrasenia === CryptoJS.MD5(password).toString());
    
    //             if (user) {
    //                 alert("Inicio de sesión exitoso.");
    //                 setUsername("");
    //                 setPassword("");
    //                 // Handle user authentication and state management as needed
    //                 // setUser(user);
    //                 // setLoggedIn(true);
    //             } else {
    //                 alert("Usuario inválido, intentalo nuevamente");
    //             }
    //         } catch (error) {
    //             console.error("Error:", error);
    //             alert("Error en el inicio de sesión. Inténtalo de nuevo.");
    //         }
    //     }
    
    //     apilogin();
    // }
    
    const salir = () => {
        setLoggedIn(false)
    }

    const navegar = (componente) => {
        setPage(componente)
    }

    if (!loggedin) {
        return <Register
            //ingresar={ingresar}
            registrar={registrar}
            setUsername={setUsername}
            setPassword={setPassword}
        />
    }

    let contenido;
    switch (page) {
        case "dashboard":
            contenido = <ModifyPost />
            break;

        case "reporte":
            contenido = <Reporte />
            break;

        default:
            break;
    }

    return (
        <div>
            <nav>
                {user.name} ({user.username}) |
                <a href="javascript:void(0);" onClick={() => navegar("dashboard")}>Dashboard</a> |
                <a href="javascript:void(0);" onClick={() => navegar("reporte")}>Reporte</a> |
                <a href="javascript:void(0);" onClick={salir}>Salir</a>
            </nav>

            {contenido}
        </div>
    )
}

export default Router