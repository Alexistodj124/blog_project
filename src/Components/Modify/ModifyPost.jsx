import { useState } from 'react';

function ModifyPost() {
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [anio, setAnio] = useState('');
    const [codigoError, setCodigoError] = useState('');
    const [descError, setDescError] = useState('');

    const handleUpdatePost = async () => {
        try {
            const response = await fetch(`http://localhost:22562/posts/${postId}?title=${title}&content=${content}&marca=${marca}&modelo=${modelo}&anio=${anio}&codigo_error=${codigoError}&desc_error=${descError}&postid=${postId}`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error('Error updating post');
            }
            const updatedPost = await response.json();
            console.log('Updated post:', updatedPost);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error updating post:', error.message);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div>
            <button onClick={handleRegresarClick}>Regresar</button>
            <div>
                <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} placeholder="Post ID" />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" />
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" />
                <input type="text" value={anio} onChange={(e) => setAnio(e.target.value)} placeholder="Año" />
                <input type="text" value={codigoError} onChange={(e) => setCodigoError(e.target.value)} placeholder="Código de Error" />
                <input type="text" value={descError} onChange={(e) => setDescError(e.target.value)} placeholder="Descripción de Error" />
                <button onClick={handleUpdatePost}>Update Post</button>
            </div>
        </div>
    );
}
export default ModifyPost;
