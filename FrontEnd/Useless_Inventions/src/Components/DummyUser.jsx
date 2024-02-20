import React from 'react';
import Userdata from '../data.json';
import Postdata from '../Postdata.json'

function DummyUser() {
  return (
    <>
      <div className='ml-10 mt-10 mb-10'>
        {Userdata && Userdata.map(item => (
          <div key={item.User_ID}>
            <h2>{item.User_ID}</h2>
            <h2>{item.Username}</h2>
            <h2>{item.Email}</h2>
            <h2>{item.Password}</h2>
            <h2>{item.Registration_Date}</h2>
          </div>
        ))}
      </div>
      <div className='ml-10 mt-10 mb-10'>
        {Postdata && Postdata.map((post) => (
          <div key={post.InventionIDNumber}>
            <h2>{post.InventionIDNumber}</h2>
            <h2>{post.Title}</h2>
            <h2>{post.Inventor}</h2>
            <h2>{post.InventedYear}</h2>
            <h2>{post.Users}</h2>
            <h2>{post.QuirkinessLevel}</h2>
            <h2>{post.Username}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default DummyUser;
