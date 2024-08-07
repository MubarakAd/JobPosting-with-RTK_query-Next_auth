'use client';
import React from 'react'
import { store } from './store';
import { Provider } from 'react-redux';
import Cards from './components/cards/cards';
import Navbar from './components/Header/navbar';
const page = () => {
  return (
  <Provider store={store}>
    <Navbar/>
    <Cards/>
   </Provider>
  )
}

export default page