'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

type Inputs = {
  email: string;
  password: string;
  mobile: string;
};

type SigninFormProps = {
  onSignUpClick: () => void;
};

const SigninForm: React.FC<SigninFormProps> = ({ onSignUpClick }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [signInMethod, setSignInMethod] = useState<'email' | 'mobile'>('email');

  const onSubmit = (data: Inputs) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-100">
      {/* Left side (Welcome message) */}
      <div className="w-full md:w-1/2 bg-blue-600 p-8 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
        <div className="mb-4">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4">XCreate</h2>
        <p className="text-center mb-8">One Place, All Investments!</p>
        <button onClick={onSignUpClick} className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          SIGN UP
        </button>
      </div>

      {/* Right side (Sign in form) */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign In to Your Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <button
                  type="button"
                  onClick={() => setSignInMethod('email')}
                  className={`w-1/2 py-2 text-center ${signInMethod === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-md`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setSignInMethod('mobile')}
                  className={`w-1/2 py-2 text-center ${signInMethod === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-r-md`}
                >
                  Mobile
                </button>
              </div>
              {signInMethod === 'email' ? (
                <>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </>
              ) : (
                <>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    {...register("mobile", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })}
                    type="tel"
                    id="mobile"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
                </>
              )}
            </div>

            {signInMethod === 'email' && (
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  {...register("password", { required: "Password is required" })}
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
                  placeholder="Enter your password"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
            )}

<div className="flex flex-col space-y-4">
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                {signInMethod === 'email' ? 'Sign In' : 'Send OTP'}
              </button>
              <button 
                type="button" 
                className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition duration-300 flex items-center justify-center"
              >
                <Image src="/api/placeholder/20/20" alt="Google" width={20} height={20} className="mr-2" />
                Sign in with Google
              </button>
              <button onClick={onSignUpClick} className="w-full bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition duration-300 text-center">
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;