import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.jpeg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function DisplayPosts() {
  const [posts, setPosts] = useState([]);
  const Nickname = Cookies.get("Nickname") || ""; 
  const Email = Cookies.get("Email") || "";


  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="body flex flex-col h-screen bg-gray-200 ">
      <nav className="shadow-lg w-full flex justify-between items-center bg-black px-6 z-10">
        <img src={logo} alt="" />

        <div className="flex ">
          <button className="mr-5 text-white bg-gray-500 px-3 py-1 rounded-md">
            Contact Us
          </button>
          <button className="mr-5 text-white bg-gray-500 px-3 py-1 rounded-md">
            Login
          </button>
          <Link to="/forms">
            <button className="mr-5 text-white bg-gray-500 px-3 py-1 rounded-md">
              SignUp
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex flex-1 overflow-y-scroll">
        <div className="bg-black w-80 h-full shadow-lg fixed">
          <div className="text-white">
            <div className=" flex-col  flex mt-10 items-center justify-between ">
              <button className="text-black font-semibold mt-5 bg-gray-100 w-56 py-2 text-xl hover:italic rounded-md">
                Home
              </button>
              <button className="text-black font-semibold mt-5 bg-gray-100 w-56 py-2 text-xl hover:italic rounded-md">
                Users
              </button>
              <button className="text-black font-semibold mt-5 bg-gray-100 w-56 py-2 text-xl hover:italic rounded-md">
                Add Posts
              </button>
            </div>
            <Link to="/Account">
            <div className="bg-gray-400 ml-7 mt-[120%] h-20 w-72 items-center justify-center text-center p-2  rounded-md">

              <div className="flex">
                <img
                  className="w-16"
                  src="https://play-lh.googleusercontent.com/15OKLti0ofnjK4XK1bgRXgsoblPvMi3hCA5z2o9WAcjssFNt2dXxemp2Om9vB3A_jYAe"
                  alt=""
                />
                  <div className=" ml-3">
                    <>
                      <div className="flex item-center">
                        <p className="text-gray-900 ">{Nickname}</p>
                        <button
                          className="text-gray-600 absolute underline ml-[50%]"
                          onClick={() => setEditing(true)}
                        >
                          <FontAwesomeIcon icon={faEdit} /> 
                        </button>
                      </div>
                      <p className="text-gray-700 mb-0">{Email}</p>
                    </>
                  </div>
              </div>
            </div>
            </Link> 

          </div>
        </div>

        <div className="ml-80 p-6 flex-1">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-7 mb-7 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{post.Title}</h2>
                <p className="text-gray-600 mb-1">Inventor: {post.Inventor}</p>
                {/* <p className="text-gray-600 mb-1">Users: {post.Users}</p> */}
                <p className="text-gray-600 mb-1">
                  Quirkiness Level: {post.QuirkinessLevel}
                </p>
                {/* <p className="text-gray-600 mb-1">Username: {post.Username}</p> */}
              </div>
              <img
                src={post.ImageURL}
                alt="Invention"
                className=" w-64 h-36 object-cover rounded-md shadow-md"
              />
              <div className="flex flex-col py-2 ">
                <button className="py-2 bg-orange-500 text-white px-8 rounded-full">
                  UPDATE
                </button>
                <button className="py-2 bg-gray-950 text-white px-8 mt-7 rounded-full">
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayPosts;
