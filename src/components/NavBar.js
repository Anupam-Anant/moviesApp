import React from 'react'

function NavBar() {
  return (
    <nav className='p-4 bg-black mb-2 '>
      <h2 className="font-medium leading-tight text-3xl  text-white inline-block mr-4">IMDB</h2>
      <span className="font-medium text-blue-500 text-xl hover:text-blue-400 cursor-pointer" href="#">Login</span>
    </nav>
  )
}

export default NavBar