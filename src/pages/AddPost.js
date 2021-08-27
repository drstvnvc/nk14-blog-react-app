import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import postService from '../services/PostService';

function AddPost() {
  const [newPost, setNewPost] = useState({ title: '', text: '' });
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = null;

    if (id) {
      data = await postService.edit(id, newPost);
    } else {
      data = await postService.add(newPost);
    }

    if (!data) {
      alert('The new post is not created');
      return;
    }

    history.push('/posts');
  };

  const handleReset = () => {
    setNewPost({ title: '', text: '' });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const { id: _, createdAt, ...restData } = await postService.get(id);

      setNewPost(restData);
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div>
      <h2>{id ? 'Edit' : 'Add new'} </h2>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          required
          minLength={2}
          value={newPost.title}
          placeholder='Title'
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
        <input
          required
          maxLength={300}
          value={newPost.text}
          placeholder='Text'
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
        <button>{id ? 'Edit' : 'Add'}</button>
        <button type='button' onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddPost;
