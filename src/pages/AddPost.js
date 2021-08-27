import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostService from '../services/PostService';

function AddPost() {
  const [newPost, setNewPost] = useState({ title: '', text: '' });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await PostService.add(newPost);

    if (!data) {
      alert('The new post is not created');
      return;
    }

    history.push('/posts');
  };

  const handleReset = () => {
    setNewPost({ title: '', text: '' });
  };

  return (
    <div>
      <h2>Add new</h2>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          value={newPost.title}
          placeholder='Title'
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
        <input
          value={newPost.text}
          placeholder='Text'
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
        <button>Add</button>
        <button type='button' onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddPost;
