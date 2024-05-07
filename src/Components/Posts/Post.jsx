
import PropTypes from 'prop-types';
import '../../Styles/posts.css';

function Post({ post, onDelete }) {
  return (
    <div className="posts">
      <h2>{post.title}</h2>
      <p><strong>ID:</strong> {post.id}</p>
      <p><strong>Content:</strong> {post.content}</p>
      <p><strong>Marca:</strong> {post.marca}</p>
      <p><strong>Modelo:</strong> {post.modelo}</p>
      <p><strong>Anio:</strong> {post.anio}</p>
      <p><strong>Código de error:</strong> {post.codigo_error}</p>
      <p><strong>Descripción del error:</strong> {post.desc_error}</p>
      <p><strong>Created at:</strong> {post.created_at}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    anio: PropTypes.number.isRequired,
    codigo_error: PropTypes.string.isRequired,
    desc_error: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
