import { useState } from 'react';
import useAPI from '../../useAPI';
import '../../Styles/posts.css';

function ModifyPost() {
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [codigoError, setCodigoError] = useState('');
    const [descError, setDescError] = useState('');
    const { updateData, error } = useAPI();

    const handleUpdatePost = async () => {
        try {
            const data = await updateData(`http://localhost:22562/posts/${postId}?title=${title}&content=${content}&marca=${marca}&modelo=${modelo}&anio=${anio}&codigo_error=${codigoError}&desc_error=${descError}&postid=${postId}`, {
                method: 'PUT',
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
                    desc_error: descError,
                    postid: postId
                })
            });

            console.log('Updated post:', data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error updating post:', error.message);
            // Handle error, e.g., show an error message
        }
    };

    const handleRegresarClick = () => {
        window.location.href = './header';
    };    
    if (localStorage.getItem("autenticado") === 'true'){
        return (
            <div>
                <button onClick={handleRegresarClick}>Regresar</button>
                <div>
                    <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} placeholder="Post ID" />
                    <br /><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    <br /><input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
                    <br /><input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" />
                    <br /><input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" />
                    <br /><input type="text" value={anio} onChange={(e) => setAnio(e.target.value)} placeholder="Año" />
                    <br /><input type="text" value={codigoError} onChange={(e) => setCodigoError(e.target.value)} placeholder="Código de Error" />
                    <br /><input type="text" value={descError} onChange={(e) => setDescError(e.target.value)} placeholder="Descripción de Error" />
                    <br /><button onClick={handleUpdatePost}>Update Post</button>
                </div>
                {error && <p>Error: {error}</p>}
            </div>
        );
    }else{
        window.location.href = './login';
    }
    
}

export default ModifyPost;
