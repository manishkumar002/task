import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import laptap1 from '../assets/img/m6.gif';

export default function Create() {
  const [category_name, setCategory_name] = useState('')
  const [created_at, setCreated_at] = useState('')
  const [updated_at, setUpdated_at] = useState('')
  const navigate = useNavigate()

  const create = async () => {
    var result = await fetch('http://localhost:8000/add_category', {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ created_at, updated_at, category_name })
    })
    result = await result.json()
    navigate('/all')
  }
  return (
    <div className='row p-5'>
      <div className='col-sm-5'>
          <img src={laptap1} className='img-thumbnail' alt='...'/>
      </div>
      <div className='col-sm-7 rounded bg-warning p-5'>

        <h3 style={{ textAlign: "center", fontFamily: "Georiya", }}>Create<span className='text-danger fw-bolder'> User</span></h3>
        <label>Category Name</label>
        <input type="text" className='form-control' placeholder='Enter Your Category Name' value={category_name} onChange={(e) => { setCategory_name(e.target.value) }} /><br />
        <label>Created Date</label>
        <input type="date" className='form-control' placeholder='Enter Your Created Date' value={created_at} onChange={(e) => { setCreated_at(e.target.value) }} /><br />
        <label>Updated Date</label>
        <input type="date" className='form-control' placeholder='Enter Your Email Updated Date' value={updated_at} onChange={(e) => { setUpdated_at(e.target.value) }} /><br />
        <button onClick={create} className='form-control w-25 btn btn-danger'>Create Now</button>
      </div>

    </div>
  )
}

