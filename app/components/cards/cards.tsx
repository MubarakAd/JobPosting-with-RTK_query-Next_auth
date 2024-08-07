import React from "react";
import { JobPost } from "@/type";
import { JobPostById } from "@/type";
import { JobPosting } from "@/type";
import Image from "next/image";
import Button from "../button/button";
import { useGetJobPostByIdQuery,useGetJobPostQuery } from "@/app/service/jobPost";
import Link from "next/link";
const Cards = () => {
  const { data, error, isLoading } = useGetJobPostQuery();
  return (
    <div className='justify-center mb-3 mt-5 mx-20'>
      {data?.data.map((jobPost: JobPost) => (
        <Link  key={jobPost.id} href={`/description/${jobPost.id}`} >
          <div className='bg-gray-100 w-5/6 ml-10 flex justify-center border border-gray-300 py-3 rounded-2xl mb-6 cursor-pointertransition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out hover:bg-white'>
            <div className='mr-7 pt-3'>
              <img src="./asset/A2Sv.png"  alt="" width={50} height={50} />
            </div>
            <div className='w-5/6 pt-3'>
              <h2 className='font-san font-bold text-lg my-1.5'>{jobPost.title}</h2>
              <p className='text-gray-500 my-1.5'>{jobPost.location.join(", ")}</p>
              <p className='font-serif text-md'>{jobPost.description}</p>
              <Button />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Cards