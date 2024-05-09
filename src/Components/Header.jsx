
import PostList from './Posts/PostList';
import '../Styles/posts.css';

function Header() {
  const handleModifyPostClick = () => {
    window.location.href = './modify-post';
  };
  const handleCreatePostClick = () => {
    window.location.href = './create-post';
  };
  const logoutClick = () => {
    localStorage.setItem("autenticado", false);
    window.location.href = './login';
  };
  return (
    <div>
      <div className="header">
        <h1>OBD II CAR SCANNER ERRORS BLOG</h1>
        <div className="button-container">
          <button onClick={handleCreatePostClick}>Create Post</button>
          <button onClick={handleModifyPostClick}>Modify Post</button>
          <button onClick={logoutClick}>Logout</button>
        </div>
      </div>
    </div>
    
    
  );
}

export default Header;