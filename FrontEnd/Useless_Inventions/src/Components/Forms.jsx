import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

function App() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true)
      const response = await axios.post("http://localhost:3000/users", { data });
      console.log(response.data);
      
      setSubmitting(true);
      Cookies.set('username', data.Username)
      Cookies.set('Nickname', data.Nickname)
      Cookies.set('Email', data.Email)
  
      navigate("/main", { formData: data });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black shadow-2xl ">
      <div className="item-center justify-center w-full">
        <div className="text-center text-4xl font-bold text-white">CREATE ACCOUNT</div>
        <form
          onSubmit={handleSubmit(onSubmit)}className="max-w-md mx-auto my-4 p-4 border rounded-lg shadow-lg bg-white">
          {submitting && !Object.keys(errors).length && (
            <h2 className="text-blue-600 text-2xl font-bold mb-5">
              Registered Successfully...
            </h2>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Name
            </label>
            <input
              {...register("Username", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum length is 30 characters",
                },
              })}
              id="Username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Name"
            />
            {errors.Username && (
              <span className="text-red-600 text-sm">
                {errors.Username.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Nick Name
            </label>
            <input
              {...register("Nickname", {
                required: "Nick Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum length is 30 characters",
                },
              })}
              id="Nickname"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Nick Name"
            />
            {errors.Nickname && (
              <span className="text-red-600 text-sm">
                {errors.Nickname.message}
              </span>
            )}
          </div>

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

          <div className="flex text-sm">
            <input
              type="checkbox"
              id="agree"
              {...register("agree", {
                required: " You must accept all the terms and conditions",
              })}
            />
            <label className="ml-3 cursor-pointer">
              I agree all statements in{" "}
              <span className="underline">Terms of service</span>
            </label>
          </div>
          {errors.agree && (
            <span className="text-red-600 text-sm">{errors.agree.message}</span>
          )}

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="w-full text-white px-4 py-2 rounded cursor-pointer"
              style={{
                background: "linear-gradient(rgb(83, 81, 81), #3498db, #2ecc71)",
                border: "none",
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            {" "}
            Already have an account ?{" "}
            <span className="underline font-bold cursor-pointer">
              Login here
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
