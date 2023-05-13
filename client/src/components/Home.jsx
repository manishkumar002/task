import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Home() {
  const[data,setData] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    getDetails()
  },[])
  const getDetails=()=>{
    fetch('http://localhost:8000/data').then((res)=>{
      res.json().then((resp)=>{
         setData(resp)
            })
           })
  }
  const deleteData =async(id)=>{
   //console.log(id)
   var result =await fetch(`http://localhost:8000/uploads/${id}`,{
    method:"delete"
  })
  result = await result.json()
  alert('Are You Sure to delete data...?')
  getDetails()
  }
  const all=()=>{
    navigate('/all')
  }

  const addRecord=()=>{
    navigate('/create')
  }
 
  return (
    <div> 
      <h1 style={{textAlign:"center"}}>Show Details</h1>
      <button className='btn btn-outline-success add' onClick={addRecord} >Add New Details</button><button className='btn btn-success all' onClick={all} >All-Category</button><hr/>
      <table className='table table-hover text-center'>
        <thead className='bg-dark text-light'>
          <tr>
            <th>S.NO</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>
            <tr key={item._id}>
              <td>{index+1}</td>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td><img width="80px" className='img-thumbnail' src={`./uploads/${item.product_image}`}/></td>
              <td><button className='btn btn-danger' onClick={()=>deleteData(item._id)} >Delete</button></td>
             <td> <Link to={"/update/"+item._id}><button className='btn btn-success'>Edit</button></Link>
              </td>
   </tr>
  
            )
          }
        </tbody>
      </table>
    </div>
    
  )
  
}
