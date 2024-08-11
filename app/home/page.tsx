import React from 'react'
import SignIn from '../components/Form/Signin'
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const Signin = async () => {
  // const user=localStorage.getItem('accessToken')
  const session = await auth();
  if (!session?.user) redirect("/home");
  return (
    <div>
        <SignIn/>
    </div>
  )
}

export default Signin