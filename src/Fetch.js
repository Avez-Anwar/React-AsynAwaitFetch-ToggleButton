import React, { useState } from 'react';
import axios from 'axios';

function Fetch() {
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState();

  const handleClick = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response.data);
    setPost(response.data);
    setToggle(!toggle);
  };

  const newPost = post.map(posts => {
    return (
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          <tr>
            <td>{posts.id}</td>
            <td>{posts.title}</td>
            <td>{posts.body}</td>
          </tr>
        </table>
      </div>
    );
  });

  return (
    <div>
      <button onClick={handleClick}>fetch posts</button>
      {toggle ? newPost : null}
    </div>
  );
}

export default Fetch;
