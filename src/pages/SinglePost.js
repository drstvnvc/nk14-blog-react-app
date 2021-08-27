import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PostService from '../services/PostService';

function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await PostService.get(id);
      setPost(data);
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <Redirect to='/posts' />;
  }
  return (
    <div style={{ marginLeft: 5 }}>
      <h1 style={{ textAlign: 'center' }}>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}

export default SinglePost;
