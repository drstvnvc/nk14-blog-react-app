import React, { useEffect, useState } from 'react';
import postService from '../services/PostService';

function AppPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAll();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>My posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ border: '3px solid orange', width: 300 }}>
          <p>
            <strong>Title:</strong> {post.title}
          </p>
          <p>
            <strong>Text:</strong> {post.text}
          </p>
        </div>
      ))}
    </div>
  );
}
export default AppPosts;
