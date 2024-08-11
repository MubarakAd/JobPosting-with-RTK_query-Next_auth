'use client'
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm, SubmitHandler } from 'react-hook-form';
import { doSocialLogin } from "@/app/actions";
import { useRouter } from 'next/navigation';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};  
const handleSocialLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault(); // Prevent the default button behavior

  const formData = new FormData();
  formData.set('action', 'google'); // Set the action for social login

  await doSocialLogin(formData);
};                                                                                     

const SignUp = () => {
  const form= useForm<FormValues>();
  const { register, watch, handleSubmit, formState } =form;
  const router = useRouter();
  const {errors}=formState
  let onsubmit = async (data:FormValues) => {
    // console.log("data",data)
    const response = await fetch(`https://akil-backend.onrender.com/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: 'user',
      }),
    });
    const res = await response.json();

    if (res.success) {
        localStorage.setItem('email', data.email);
        router.push('/verify')
    } else {
      alert("Something went wrong!")
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Sign Up Today</h1>
        <button type="button" 
                onClick={handleSocialLogin} 
               
                value="google" className='w-full flex items-center justify-center p-2 border border-gray-300 rounded-md bg-gray-50 mb-4 text-gray-700 hover:bg-gray-100'>
          <span className='mr-2 text-xl'><FcGoogle /></span>
          Sign Up with Google
        </button>

        <form  className='space-y-4' onSubmit={handleSubmit(onsubmit)}>
        

        <div className='flex items-center my-4'>
          <hr className='flex-grow border-t border-gray-300'/>
          <span className='mx-4 text-gray-600'>Or Sign Up with Email</span>
          <hr className='flex-grow border-t border-gray-300'/>
        </div>
          <div>
            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Full Name</label>
            <input 
            {...register("name",{
              required:{
                value:true,
                message:"FullName is a required"

              
            }})}
              type="text" 
              id="name" 
              placeholder='Enter your full name' 
              className='w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500' 
            />
            {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email Address</label>
            <input 
               {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Email is invalid",
                },
                validate: {
                  checkNotAdmin: (fieldValue:string) => 
                    fieldValue !== "admin@gmail.com" || "This is only for admin,Enter Correct Email",
                  // endsWith: (fieldValue) =>
                  //   fieldValue.endsWith("@gmail.com") || "Enter valid Email format",
                  
                }
              })}
              type="email" 
              id="email" 
              placeholder='Enter email address' 
              className='w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500' 
            />
            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
              {...register('password', { required:{
                value:true,
                message:'Password is required'
              },
            validate:{
              checkingLength:(fieldValue)=>
                    fieldValue.length>=8|| "Password length Shouldn't be less 8"
            }  })}
              type="password" 
              id="password" 
              placeholder='Enter Password' 
              className='w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500' 
            />
            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700'>Confirm Password</label>
            <input 
              {...register('confirmPassword', { 
                required:  {
                  value:true,
                  message:'Confirm Password is required'
                } ,
                validate: value => value === watch('password') || 'Passwords do not match'
              })}
              type="password" 
              id="confirmPassword" 
              placeholder='Confirm Password' 
              className='w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500' 
            />
            {errors.confirmPassword && <p className='text-red-500 text-xs'>{errors.confirmPassword.message}</p>}
          </div>

          <button 
            type="submit" 
            className='w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'
          >
            Continue
          </button>

          <p className='mt-4 text-center text-sm text-gray-600'>
            Already have an account? <a href="/home" className='text-blue-500 hover:underline'>Login</a>
          </p>
          <p className='text-center text-sm text-gray-600'>
            By clicking 'Continue', you acknowledge that you have read and accepted our <a href="#" className='text-blue-500 hover:underline'>Terms of Service</a> and <a href="#" className='text-blue-500 hover:underline'>Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
