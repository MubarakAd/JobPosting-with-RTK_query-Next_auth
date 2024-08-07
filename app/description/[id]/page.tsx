'use client'
import React from 'react'
import { Provider } from 'react-redux'
import FetchPage from '../../components/Fetchpage'
import { store } from '@/app/store'
import { JobPost } from '@/type'
interface idParamsType{
  params:{
    id:string;
  }
}
const page = ({params}:idParamsType) => {
  return (
    <Provider store={store}>
      <FetchPage id={params.id}/>
    </Provider>
  )
}

export default page