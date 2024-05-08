import { useState, useEffect } from 'react';
import Post from './Post';
import ModifyPost from '../Modify/ModifyPost';
import useAPI from '../../useAPI';
import '../../Styles/posts.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchData, deleteData, error } = useAPI();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await fetchData('http://localhost:22562/posts');
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    const confirmation = window.confirm('Are you sure you want to delete this post?');
    if (confirmation) {
      try {
        await deleteData(`http://localhost:22562/posts/${postId}`, {
          method: 'DELETE'
        });
        setPosts(posts.filter(post => post.id !== postId));
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (posts.length === 0) return <div>No posts available</div>;

  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onDelete={() => handleDelete(post.id)} 
          onModify={() => <ModifyPost postId={post.id} />}
        />
      ))}
    </div>
  );
}

export default PostList;
