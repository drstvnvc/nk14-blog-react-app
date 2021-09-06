import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import postService from "../services/PostService";
import { login } from "../store/activeUser/actions";
import { selectActiveUser } from "../store/activeUser/selectors";
import {
  selectCounter,
  selectDoubledCounter,
} from "../store/counter/selectors";

function AppPosts() {
  const [posts, setPosts] = useState([]);
  const counter = useSelector(selectCounter);
  console.log("Counter value u app posts je", counter);
  const doubledCounter = useSelector(selectDoubledCounter);
  console.log("Doubled counter value u app posts je", doubledCounter);
  const activeUser = useSelector(selectActiveUser);
  console.log("Active user value u app posts je", activeUser);
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

  function incrementCounter() {
    console.log("incrementCounter u app posts")
    dispatch(login('asdf@asdf.com', 'asdfasdf'));
  }

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>My posts</h2>
      <h3>COUNTER: {counter}</h3>
      <h3>DOUBLED COUNTER: {doubledCounter}</h3>
      <button onClick={incrementCounter}>Increment counter</button>
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
