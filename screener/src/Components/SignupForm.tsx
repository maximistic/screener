'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

type SignupFormProps = {
  onSignInClick: () => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSignInClick }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-100">
      {/* Left side (Welcome message) */}
      <div className="w-full md:w-1/2 bg-blue-600 p-8 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold mb-4">Hey There!</h1>
        <h1 className="text-3xl font-bold mb-4">Welcome to </h1>
        <div className="mb-4">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Cxtalyst</h2>
        <p className="text-center mb-8">One Place, All Investments!</p>
        <button onClick={onSignInClick} className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          SIGN IN
        </button>
      </div>

      {/* Right side (Sign up form) */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Become One of us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                placeholder="Enter your name"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label>
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                placeholder="Enter your password"
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                By Signing Up, I Agree with the Terms & Conditions
              </label>
            </div>

            <div className="flex flex-col space-y-4">
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">Sign Up</button>
              <button 
                type="button" 
                className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition duration-300 flex items-center justify-center"
              >
                <Image src="/api/placeholder/20/20" alt="Google" width={20} height={20} className="mr-2" />
                Sign up with Google
              </button>
              <button onClick={onSignInClick} className="w-full bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition duration-300 text-center">
                Already have an account? Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
