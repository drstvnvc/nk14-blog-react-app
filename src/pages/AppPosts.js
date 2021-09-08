import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import postService from "../services/PostService";
import { selectActiveUser } from "../store/activeUser/selectors";
import { login } from "../store/activeUser/slice";

function AppPosts() {
  const [posts, setPosts] = useState([]);
  const activeUser = useSelector(selectActiveUser);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleDelete = async (id) => {
    const data = await postService.delete(id);

    if (data.count) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAll();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  function handleLogin() {
    dispatch(login({ email: "asdf@asdf.com", password: "asdfasdf" }));
  }

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>My posts</h2>
      <button onClick={handleLogin}>Login</button>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "3px solid orange",
            width: 300,
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>
            <strong>Title:</strong> {post.title}
          </p>
          <p>
            <strong>Text:</strong> {post.text}
          </p>
          <Link to={`/posts/${post.id}`}>View post</Link>
          <button onClick={() => history.push(`/edit/${post.id}`)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default AppPosts;
