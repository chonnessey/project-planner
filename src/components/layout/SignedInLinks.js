import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Project Planner</Link>
      </div>
    </nav>
  )
}

export default SignedInLinks 