import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DummyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
        <div className="ml-10 mt-10 mb-10">
      {posts.map((post) => (
        <div key={post.id}>
          <p className='font-bold mt-12'>{post.Title}</p>
          <p>{post.Inventor}</p>
          <p>{post.InventedYear}</p>
          <p>{post.Users}</p>
          <p>{post.QuirkinessLevel}</p>
          <p>{post.Username}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default DummyPosts;
