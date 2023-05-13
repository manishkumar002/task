import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import laptap from '../assets/img/m3.gif';

export default function Register() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[mobile,setMobile] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    const register=async()=>{
        console.log({name,email,mobile,password})
        let result = await fetch('http://localhost:8000/register',{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({name,email,mobile,password})
        })
        localStorage.setItem('user',JSON.stringify({name,email,mobile,password}))
        result = await result.json()
        setName('')
        setEmail('')
        setMobile('')
        setPassword('')
        navigate('/')
        console.log(result)
    }
  return (
    <div className='row p-5'>
     <div className='col-sm-5'>
          <img src={laptap} className='img-thumbnail' alt='...'/>
        </div>
        <div className='col-sm-7 bg-light border-danger border-2 border rounded p-5'>
      <h2 style={{textAlign:"center",fontFamily:"georiya"}}>Register</h2>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  className='form-control' placeholder='Enter Your name' /><br/>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className='form-control' placeholder='Enter Your Email' /><br/>
      <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}  className='form-control' placeholder='Enter Your Mobile' /><br/>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='form-control' placeholder='Enter Your password' /><br/>
      <div className='text-center'>
        <button onClick={register} className='form-control btn btn-danger w-25'>Register Now</button>
        </div>
    </div>
    </div>
    
  )
}
