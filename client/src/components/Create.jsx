import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Create() {
  const[product_name,setProduct_name] = useState('');
  const[product_price,setProduct_price] = useState('');
  const[product_image,setProduct_image] = useState();
    const navigate = useNavigate()

    const create=async()=>{
      let formData = new FormData();
      formData.append('product_name',product_name)
      formData.append('product_price',product_price)
      formData.append('product_image',product_image)
       var result =await fetch('http://localhost:8000/uploads',{
        method:"post",
        body:formData
       })
       result = await result.json()
       navigate('/')
    }
  return (
    <div className='container-fluid'>
      <div className='row p-5'>
        <div className='col-sm-5'>
          <img src='./uploads/1683917698922.jpg' className='img-thumbnail' alt='...'/>
        </div>
    <div className=' col-sm-7 bg-light border-danger border-2 border rounded p-5'>
      <h3 className='text-danger fw-bold' style={{textAlign:"center",fontFamily:"Georiya"}}>Product User</h3>
      <input type="text" className='form-control' placeholder='Enter Your Product Name' value={product_name} onChange={(e)=>{setProduct_name(e.target.value)}} /><br/>
      <input type="number" className='form-control' placeholder='Enter Your Product Price' value={product_price} onChange={(e)=>{setProduct_price(e.target.value)}} /><br/>
      <input type="file" className='form-control' placeholder='Enter Your number' onChange={(e)=>{setProduct_image(e.target.files[0])}} /><br/>
        <div className='text-center'>
        <button onClick={create} className='form-control btn btn-danger w-50'>Created Now</button>
        </div>
    </div>
    </div>
    </div>
  )
}
