import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import AddComment from '../components/AddComment';
import useFormattedDate from '../hooks/useFormattedDate';
import PostService from '../services/PostService';

function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const formattedDate = useFormattedDate(
    post ? post.createdAt : '',
    'yyyy-MM-dd'
  );

  const handleAddNewComment = (comment) => {
    setPost({ ...post, comments: [...post.comments, comment] });
  };

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
      <p>Datum: {formattedDate}</p>
      <p>Datum: {post.createdAt}</p>
      <AddComment
        postId={post.id}
        addNewCommentCallback={handleAddNewComment}
      />
      {post.comments && post.comments.length ? (
        <ul>
          {post.comments.map((comment) => (
            <li>{comment.text}</li>
          ))}
        </ul>
      ) : (
        <p>No comments</p>
      )}
    </div>
  );
}

export default SinglePost;
