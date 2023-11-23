import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { CiUser } from 'react-icons/ci';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e) {
    setEmail(e.target.value)
  }
  async function onSubmit(e){
    e.preventDefault()
    try {
      
      const auth= getAuth()
      await sendPasswordResetEmail(auth,email)
      toast.success("Email was sent")
    } catch (error) {
      toast.error("Could not send reset password")
    }

  }
  return <section>
    <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
    <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
          alt="key"
          className="w-full rounded-2xl"
        />
      </div>
      <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
        <form onSubmit={onSubmit}>
          <div className='relative'>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            < CiUser className='absolute right-3 top-4 text-xl bg-red' />
          </div>
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg flex-1'>
            <p className='mb-6'>Don't have a account? <Link to="/sign-up" className=' text-emerald-500 hover:text-emerald-800 cursor-pointer transition duration-200 ease-in-out ml-1'>Register</Link> </p>
            <p>
              <Link to="/sign-in" className='text-blue-300 hover:text-blue-700 transition duration-200  ease-in-out ml-1'>Sign in instead</Link>
            </p>
          </div>
          <button  className='w-full bg-emerald-700 text-emerald-500  px-7 py-3 text-sum font-medium uppercase rounded shadow-md hover:bg-white transition duration-150 ease-in-out hover:shadow-lg active:bg-emerald-800' type="submit">Send Reset Password</button>
          <div className='flex items-center mx-4 before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300' ><p className='text-center font-semibold mx-4'>OU</p></div>
          <OAuth />
        </form>
      </div>
    </div>
  </section>





}