"use client"
import React from 'react';

const Button = () => {
  return (
    <div className='mt-3 mb-2'>
        <button className='btn rounded-full text-xs text-green-300 border border-green-300 px-3 py-2 mx-2 hover:border-green-400 hover:border-2'>In Person</button>
      <button className='btn rounded-full text-xs text-orange-300 border border-orange-300 px-3 py-2 mx-2 hover:border-orange-400 hover:border-2'>Education</button>
      <button className='btn rounded-full text-xs text-violet-300 border border-violet-300 px-6 py-2 mx-2 hover:border-violet-400 hover:border-2'>IT</button>
    </div>
  );
}

export default Button;
