import React from 'react'
import { Video } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
 <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
<div className='flex items-center gap-2'>
<div className='h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold'>      
  <Video color="currentColor" size={24} strokeWidth={2} />
</div>
  <h1 className='text-2xl font-bold text-slate-800 font-brand'>
    MeetFlow
</h1>
</div>
<ul className='hidden md:flex items-center gap-8'>
<li className="cursor-pointer hover:text-blue-400 transition">
    Features
</li>  <li className='cursor-pointer hover:text-blue-400 transition'>How its works</li>
  <li className='cursor-pointer hover:text-blue-400 transition'>Pricing</li>
  <li className='cursor-pointer hover:text-blue-400 transition'>contact</li>
</ul>
<div className="flex items-center gap-4">
  <Link
    to="/login"
    className="px-5 py-2 font-medium text-slate-700 hover:text-blue-600 transition"
  >
    Login
  </Link>

  <Link
  to='/register' className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
    Get Started
  </Link>
</div>
 </nav>
    </header>

  )
}

export default Navbar
