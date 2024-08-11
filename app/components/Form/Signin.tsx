'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
type FormValues = {
    email: string;
    password: string;
  }; 

const SignIn = () => {
    const form= useForm<FormValues>();
    const { register, watch, handleSubmit, formState } =form;
    const router = useRouter()
    const {errors}=formState
    let onsubmit = async (data:FormValues) => {
      // console.log("data",data)
      const response = await fetch(`https://akil-backend.onrender.com/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const res = await response.json();
  
      if (res.success) {
        console.log(res)
          router.push('/')
      } else {
        alert("Something went wrong!")
      }
    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Welcome Back</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'    >Email Address</label>
            <input 
            {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Email is invalid",
                },
                validate: {
                  checkNotAdmin: (fieldValue:string) => 
                    fieldValue !== "admin@gmail.com" || "This is only for admin,Enter Correct Email",
                  // endsWith: (fieldValue:string) =>
                  //   fieldValue.endsWith("@gmail.com") || "Enter valid Email format",
                  
                }
              })}
              type="email" 
              id="email" 
              placeholder='Enter email address' 
              className='w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
            {errors.email && <p className='text-red-500 text-xs'>{errors.email?.message}</p>}
          </div>
          <div className='mb-4'>
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
          <button 
            type="submit" 
            className='w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600'
          >
            Login
          </button>
          <p className='mt-4 text-center text-sm text-gray-600'>
            Don’t have an account? <a href="/SignUp" className='text-blue-500 hover:underline'>Sign Up</a>
          </p>
          
        </form>
      </div>
    </div>
  )
  }

  export default SignIn