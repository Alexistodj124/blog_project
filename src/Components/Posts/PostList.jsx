import { useState, useEffect } from 'react';
import Post from './Post';
import ModifyPost from '../Modify/ModifyPost';
import '../../Styles/posts.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:22562/posts');
        console.log(response);

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
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
        const response = await fetch(`http://localhost:22562/posts/${postId}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setPosts(posts.filter(post => post.id !== postId));
        } else {
          console.error('Failed to delete post');
        }
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
          onDelete={handleDelete} 
          onModify={() => <ModifyPost postId={post.id} />}
        />
      ))}
    </div>
  );
}

export default PostList;
