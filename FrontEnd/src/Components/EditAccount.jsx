import React, { useState, useEffect } from "react";
import logo from "./logo.jpeg";
import DisplayPosts from "./DisplayPosts";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage() {
const [users, setUsers] = useState([]);
const navigate = useNavigate();
const userName = Cookies.get("username");
const Nickname = Cookies.get("Nickname");
const Email = Cookies.get("Email");

const [editMode, setEditMode] = useState(false);
const [updatedUserName, setUpdatedUserName] = useState(userName);
const [updatedNickname, setUpdatedNickname] = useState(Nickname);
const [updatedEmail, setUpdatedEmail] = useState(Email);

const handleEdit = () => {
  setEditMode(true);
};

const handleSubmit = () => {
  console.log("Updated Username:", updatedUserName);
  console.log("Updated Nickname:", updatedNickname);
  console.log("Updated Email:", updatedEmail);
  Cookies.set("username", updatedUserName);
  Cookies.set("Nickname", updatedNickname);
  Cookies.set("Email", updatedEmail);
  navigate('/main');
};

const logout=()=>{
  Cookies.remove("username");
  Cookies.remove("Nickname");
  Cookies.remove("Email");
  navigate('/main')
}

axios.put("http://localhost:3000/users", {
  username: updatedUserName,
  nickname: updatedNickname,
  email: updatedEmail,
})

.then(response => {
  console.log("User information updated successfully:", response.data);
  setEditMode(false);
  window.location.href = "/DisplayPosts";
})
.catch(error => {
  console.error("Error updating user information:", error);
});

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
              <Link to='/main'>
              <button className="text-black font-semibold mt-5 bg-gray-100 w-56 py-2 text-xl hover:italic rounded-md">
                Home
              </button>
              </Link>
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
      <div className="h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] grid justify-center items-center from-gray-700 via-gray-900 to-black">
      <div className="border rounded-lg justify-center ml-80 items-center text-center h-3/5 w-[640px]">
        <div className="text-white mt-10 text-2xl">EDIT PROFILE</div>
        {!editMode && (
          <button className="text-gray-400 underline absolute m-0 mt-[0%] ml-[17%]" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
        )}
        <div className="flex flex-col items-center mt-5">
          <input
            type="text"
            className="w-96 mt-6 h-10 pl-5"
            value={updatedUserName}
            onChange={(e) => setUpdatedUserName(e.target.value)}
            disabled={!editMode}
          />
          <input
            type="text"
            className="w-96 mt-6 h-10 pl-5"
            value={updatedNickname}
            onChange={(e) => setUpdatedNickname(e.target.value)}
            disabled={!editMode}
          />
          <input 
            type="text"
            className="w-96 mt-6 h-10 pl-5"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            disabled={!editMode}
          />
        </div>
        {editMode && (
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-5 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        { editMode &&(
        <button className="text-black rounded-full font-semibold bg-gray-100 px-10 ml-10 mt-10 py-2 text-2xl"
        onClick={logout}
        >LOG OUT</button>
        
        )
        }
      </div>
    </div>
    </div>
  );
}

export default MainPage;
