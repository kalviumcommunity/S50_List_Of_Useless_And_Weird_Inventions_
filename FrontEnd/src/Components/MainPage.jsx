import React, { useState, useEffect } from "react";
import logo from "./logo.jpeg";
import DisplayPosts from "./DisplayPosts";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function MainPage() {
const [users, setUsers] = useState([]);
const Nickname = Cookies.get('Nickname');
const Email = Cookies.get('Email');
const userName = Cookies.get("username");
const Password = Cookies.get("Password");

  return (
    <div className="body flex flex-col h-screen bg-gray-200">
      <nav className="shadow-lg w-full flex justify-between items-center bg-black px-6 z-10">
        <img src={logo} alt="" />

        <div className="flex">
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
            <div className=" flex-col flex mt-10 items-center justify-between ">
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
            <div className="bg-gray-400 ml-7 mt-[120%] h-20 w-72 items-center justify-center text-center p-2  rounded-md">
              <div className="flex">
                <img
                  className="w-16"
                  src="https://play-lh.googleusercontent.com/15OKLti0ofnjK4XK1bgRXgsoblPvMi3hCA5z2o9WAcjssFNt2dXxemp2Om9vB3A_jYAe"
                  alt=""
                />
                <div className=" ml-3">
                {users && (
                  <>
                    <p className="text-gray-600 mb-0">{Nickname}</p>
                    <p className="text-gray-600 mb-0">{Email}</p>
                  </>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default MainPage;
