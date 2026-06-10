import { NavLink } from "react-router-dom"

import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      
      <h1 className="text-xl font-bold">Reatapp</h1>

      <div className="flex gap-6">
        <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
        <NavLink to="/about" className="hover:text-blue-400">About</NavLink>
        <NavLink to="/project" className="hover:text-blue-400">Project</NavLink>
      </div>

    </nav>
    </>
  )
}

export default Navbar