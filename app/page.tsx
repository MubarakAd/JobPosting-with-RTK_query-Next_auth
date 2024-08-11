'use client'
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Cards from './components/cards/cards';
import Navbar from './components/Header/navbar';
import Signin from './home/page';
import { store } from './store';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('accessToken');
    if (!user) {
      router.push('/home');
    }
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Cards />
    </Provider>
  );
};

export default Page;