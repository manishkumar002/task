import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import laptap1 from '../assets/img/m6.gif';
export default function UpdateCat() {
  const[category_name,setCategory_name] = useState('')
  const[updated_at,setUpdate_at] = useState('')
    const navigate = useNavigate()
    const params = useParams()
   

    useEffect(()=>{
        getCategoryDetails()
    },[])

    const getCategoryDetails=async()=>{
        let result = await fetch(`http://localhost:8000/show_category/${params.id}`);
        result = await result.json()
        setCategory_name(result.category_name)
        setUpdate_at(result.updated_at)
    }

    const categoryUpdate=async()=>{
       var result =await fetch(`http://localhost:8000/show_category/${params.id}`,{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({category_name,updated_at})
       })
       result = await result.json();
       navigate('/all')
    }
  return (
    <div className='container-fluid'>
      <div className='row p-5'>
        <div className='col-sm-5'>
          <img src={laptap1} className='img-thumbnail' alt='...'/>
        </div>
        <div className='col-sm-7 bg-warning'>
      <h3 style={{textAlign:"center",fontFamily:"Georiya",}}>Update User</h3>
      <label>Enter Category Name</label>
      <input type="text" className='form-control' placeholder='Enter Your Product Name' value={category_name} onChange={(e)=>{setCategory_name(e.target.value)}} /><br/>
      <label>Enter Created Date</label>
      <input type="date" readOnly className='form-control' />
      <label>Enter Updated Date</label>
      <input type="date"  className='form-control' /><br/>
      <div className='text-center'>
        <button onClick={categoryUpdate} className='form-control btn btn-danger w-50'>Update Here</button>
        </div>
    </div>
    </div>
    </div>
  )
}

