import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSub(true);
  };
  const [sub, setSub] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-400 to-yellow-700">
      <div className="max-w-md w-full ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Create an Account</h2>
          {sub && !Object.keys(errors).length && <h2 className="text-green-500 mb-4 text-center">Registration Successful!</h2>}
          <div className="mb-4">
            <input
              {...register('firstName', {
                required: 'First Name is required',
                minLength: { value: 5, message: 'Minimum length is 5 characters' },
                maxLength: { value: 20, message: 'Maximum length is 20 characters' },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First Name"
            />
            {errors.firstName && <span className="text-red-500 text-xs italic">{errors.firstName.message}</span>}
          </div>
          <div className="mb-4">
            <input
              {...register('lastName', {
                required: 'Last Name is required',
                minLength: { value: 5, message: 'Minimum length is 5 characters' },
                maxLength: { value: 20, message: 'Maximum length is 20 characters' },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
            />
            {errors.lastName && <span className="text-red-500 text-xs italic">{errors.lastName.message}</span>}
          </div>
          <div className="mb-4">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, message: 'Invalid email' },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
          </div>
          <div className="mb-6">
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 4, message: 'Minimum length is 4 characters' },
                maxLength: { value: 20, message: 'Maximum length is 20 characters' },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              type="password"
            />
            {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 text-xs">
          &copy;2024 Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
