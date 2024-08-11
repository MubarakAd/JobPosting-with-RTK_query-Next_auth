// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { JobPost, JobPostById, JobPosting } from '@/type'

// Define a service using a base URL and expected endpoints
export const JobPostApi = createApi({
  reducerPath: 'jobPost',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com/' }),
  endpoints: (builder) => ({
    getJobPost: builder.query<JobPosting, void>({
      query: () => `/opportunities/search`,
    }),
    getJobPostById: builder.query<JobPostById, string>({
      query: (id) => `/opportunities/${id}`,
  }),
    
})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobPostQuery, useGetJobPostByIdQuery } = JobPostApi