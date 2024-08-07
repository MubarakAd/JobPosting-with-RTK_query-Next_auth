'use client'
import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import Page2button from '../components/button/page2button';
import { JobPost } from '@/type';
import { useGetJobPostByIdQuery } from "../service/jobPost";

const FetchPage =  ({ id }: { id: string }) => {
  // Fetch data using the ID
  const { data, error, isLoading } = useGetJobPostByIdQuery(id);
  console.log(data, 'is define')


  return (
   
    <div className='flex justify-center mt-3 ml-7 mr-2'>
      <div className='w-3/4 mr-4 p-4  rounded-2xl'>
        <div className='my-5'>
          <h2 className='mt-10 mb-2 font-san font-bold text-lg'>Description</h2>
          <p className='text-black w-5/6 font-serif text-sm'>{data?.data?.description || 'No description available'}</p>
        </div>

        <div>
          <h2 className='mt-10 mb-5 font-san font-bold text-lg'>Responsibilities</h2>
          {(data?.data?.responsibilities || '').split('\n').map((ele, ind) => (
            <div key={ind} className='flex my-1.5'>
              <CiCircleCheck className='text-green-600 pt-0.5 text-xl' />
              <p className='ml-3 text-sm'>{ele}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className='mt-10 mb-3 font-san font-bold text-lg'>Ideal Candidate We Want</h2>
          <ul className='list list-disc ml-5'>
            <li className='my-1.5'>
              <p className='text-sm'>Young (18-25 Years old) Female Social Media Manager</p>
            </li>
            <li className='my-1.5'>
              <p className='w-4/5 text-sm'>{data?.data?.idealCandidate || 'No ideal candidate information available'}</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='mt-10 mb-5 font-san font-bold text-lg'>When & Where</h2>
          <div className='flex mb-10'>
          <img src="/asset/location.png" width={32} height={32} className='mr-1.5' alt="" />
            <p className='text-sm'>{data?.data?.whenAndWhere}</p>
          </div>
        </div>

        
      </div>
      <div className='w-1/4 mr-10 justify-start'>
         <h2 className='font-san font-bold text-xl my-1.5'>About</h2>
         <div className='flex'>
            <div>
                <div className='flex mb-4 mt-3'>
                    <div className="mr-3">
               <img src="/asset/circleplus.png" alt=""  width={32} height={32}/>
                    </div>
                
                    <div>
                    <p className='text-gray-300 text-sm'>Posted On</p>
                    <p className='text-sm'>{data?.data?. datePosted}</p>
                    </div>
                
           
            </div>
            <div className='flex mb-4 mt-3'>
                <div className='mr-3'>
                <img src="/asset/deadlin.png" width={32} height={32} alt="" /> 
                </div>
           
                <div>
                <p className='text-gray-300 text-sm'>Deadline</p>
                <p className='text-sm'>{data?.data?.deadline}</p>
                </div>
            
            
            </div>
            <div className='flex mb-4 mt-3 '>
                <div className='mr-3  '>
                <img src="/asset/location.png" width={32} height={32}  alt="" />
                </div>
          
                <div>
                <p className='text-gray-300 text-sm'>Location</p>
                <p className='text-sm'>{data?.data?.location}</p>
                </div>
            
            
            </div>
            <div className='flex mb-4 mt-3'>
                <div className='mr-3'>
                <img src="/asset/startday.png" width={32} height={32} alt="" />
                </div>
            
                <div>
                <p className='text-gray-300 text-sm'>Start Date</p>
                <p className='text-sm'>{data?.data?.startDate}</p>
                </div>
            
            
            </div>
            <div className='flex mb-4 mt-3'>
                <div className='mr-3'>
                <img src="/asset/endDay.png" width={32} height={32} alt="" />
                </div>
            
                <div>
                <p className='text-gray-300 text-sm'>End Date</p>
                <p className='text-sm'>{data?.data?.endDate}</p>
                </div>
            
            
            </div>
            </div>
         
         </div>
         <div className='mt-3 mr-2 space-x-4  border-t-2 border-b-2 border-gray-100 py-2'>
          <h2 className='font-san font-bold text-lg'>Categories</h2>
          <Page2button />
        </div>

        <div className='mt-5'>
          <h2 className='font-san font-bold text-lg'>Required Skills</h2>
          <div className='grid grid-cols-2 gap-4'>
            {(data?.data?.requiredSkills || []).map((item, ind) => (
              <div key={ind} className='flex'>
                <p className='bg-gray-50 border rounded text-sm text-blue-300 p-1.5'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        
         </div>
    </div>
  );
};

export default FetchPage;
