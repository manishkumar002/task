import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllCate() {
    const[catData,setCatData] = useState([])  
    useEffect(()=>{
        getDetails();
    },[])

    const getDetails=async()=>{
        var result =await fetch('http://localhost:8000/show_category')
        result = await result.json()
        setCatData(result)
    }
    const deleteData=async(id)=>{
        var result =await fetch(`http://localhost:8000/show_category/${id}`,{
            method:"delete"
        })
        result = await result.json()
       alert('are you sure to delete record...?')
       getDetails()
    }
    
    
  return (
    <div>
      <table className='table table-hover'>
        <thead className='bg-dark'>
            <tr>
                <th>S.NO</th>
                <th>Category_Name</th>
                <th>Created_at</th>
                <th>Updated_at</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
                catData.map((item,index)=>
                    <tr key={item._id} >
                        <td>{index+1}</td>
                        <td>{item.category_name}</td>
                        <td>{item.created_at}</td>
                        <td>{item.updated_at}</td>
                        <td>
                            <button onClick={()=>{deleteData(item._id)}} className='btn btn-danger' >Delete</button> </td>
                           
                            <td> <Link to={"/update_cat/"+item._id}><button className='btn btn-primary'>Edit</button></Link></td>
                       
                    </tr>
                )
            }
        </tbody>
      </table>
       </div>
  )
}
