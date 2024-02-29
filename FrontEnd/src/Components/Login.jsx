import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
  const [data, setData] = useState();
  const [sub, setSub] = useState(false);
  const [userData, setUserData] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("Error while fetching the data of Users", err);
      });
  }, []);

  const onSubmit = async (data) => {
    setData(data);

    const user = userData.find(
      (user) => user.Email === data.Email && user.Password === data.Password
    );

    if (user) {
      Cookies.set("userData", JSON.stringify(user));
      Cookies.set('username', user.Username)
      Cookies.set('Nickname', user.Nickname)
      Cookies.set('Email', user.Email)
      setSub(true);
      navigate("/main");
    } else {
      alert("Invalid Email or Password");
    }
    setSubmitting(true);
     
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black shadow-2xl ">
      <div className="item-center justify-center border px-10 py-5">
        <div className="text-center text-4xl font-bold text-white">LOGIN</div>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Invalid Email",
                },
              })}
              id="Email"
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email"
            />
            {errors.Email && (
              <span className="text-red-600 text-sm">
                {errors.Email.message}
              </span>
            )}
          </div>

        <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Minimum length is 4 characters",
                },
                pattern: {
                  value: /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
                  message:
                    "Password must contain at least one special character",
                },
              })}
              id="Password"
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Password"
            />
            {errors.Password && (
              <span className="text-red-600 text-sm">
                {errors.Password.message}
              </span>
            )}
          </div>

        <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="w-full text-white px-4 py-2 rounded cursor-pointer"
              style={{
                background: "linear-gradient(rgb(83, 81, 81), #3498db, #2ecc71)",
                border: "none",
              }}
            >
              Login
            </button>
          </div>
       </form>
      </div>
    </div>
  );
}

export default Login;
