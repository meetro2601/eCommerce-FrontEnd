import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container pt-10 pb-10 text-center'>
        <h2>404</h2>
        <h3>Sorry! Page Not Found</h3>
        <Link to='/' className='font-size-md'>Back Home</Link>
    </div>
  )
}

export default Error