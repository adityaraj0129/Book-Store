import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchbook,setSerachBook]=useState();
  const navigate=useNavigate();


  return (
    <div className='flex  ms:flex-row md:jsutify-around items-center bg-gray-900 p-2 gap-4 md:gap-0'>
      {/* Logo */}
      <div> <h1 className='w-104 flex-auto text-white font-bold text-xl '>Book Store</h1> </div>
      {/* Nav Components */}
      <div className='w-100 flex-auto ms:flex-row md:jsutify-around items-center bg-gray-900 p-2  gap-4 md:gap-0' >

        <ul className='flex flex-row'>
          <li ><Link to={'/'} className='mr-10 text-white font-bold cursor-pointer'>Home</Link></li>
          <li> <Link to={'/bookdetails'} className='mr-10 text-white font-bold cursor-pointer'>Books</Link></li>
          <li><Link to={'/favorites'} className='mr-10 text-white font-bold cursor-pointer'>Favorites</Link></li>
        </ul>
      </div>

      {/* Search Bar */}
     <div className=' flex flex-row  '>
      <li ><Link to={'/login'} className='mr-10 text-white font-bold cursor-pointer'>Login</Link></li>
          <li> <Link to={'/signup'} className='mr-10 text-white font-bold cursor-pointer'>Sign Up</Link></li>
     </div>
    </div>
  )
}

export default Navbar