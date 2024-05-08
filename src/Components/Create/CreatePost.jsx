import { useState } from 'react';
import useAPI from '../../useAPI';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [codigoError, setCodigoError] = useState('');
    const [descError, setDescError] = useState('');
    const { fetchData, error } = useAPI();

    const handleCreatePost = async () => {
        try {
            const data = await fetchData('http://localhost:22562/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content,
                    marca,
                    modelo,
                    anio,
                    codigo_error: codigoError,
                    desc_error: descError
                })
            });

            console.log('New post:', data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error creating post:', error.message);
            // Handle error, e.g., show an error message
        }
    };

    const handleRegresarClick = () => {
        window.location.href = './header';
    };

    return (
        <div>
            <button onClick={handleRegresarClick}>Regresar</button>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" />
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" />
                <input type="text" value={anio} onChange={(e) => setAnio(e.target.value)} placeholder="Año" />
                <input type="text" value={codigoError} onChange={(e) => setCodigoError(e.target.value)} placeholder="Código de Error" />
                <input type="text" value={descError} onChange={(e) => setDescError(e.target.value)} placeholder="Descripción de Error" />
                <button onClick={handleCreatePost}>Create Post</button>
            </div>
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default CreatePost;
