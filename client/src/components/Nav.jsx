import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  useEffect(()=>{
    if(auth){
      navigate('/')
    }
  },[])
  const logout=()=>{
    localStorage.clear()
  }
  return (
   <div className='nav'>
   <ul>
  
    <li><Link to='/' className='a'>Home</Link></li>
    <li><Link to='/create' className='a'>Product Create</Link></li>
    <li><Link to='/category' className='a'>Category Create</Link></li>
    <li><Link to='/register'className='a'>Register</Link></li>
    <>
    {auth?<li><Link to='/logout' onClick={logout} className='a'>Logout</Link></li>:
   <li><Link to='/login'className='a'>Login</Link></li>
    }
    </>
   </ul>
   </div>
  )
}
