import { data } from 'autoprefixer';
import axios from 'axios';


import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

axios.defaults.baseURL ="https://backend-1-1bsn.onrender.com/api/auth"
const AdminDashboard = () => {
    const [addSection,setAddSection]=useState(false);
    const [editSection,setEditSection]=useState(false)
    const [formDataEdit,setFormDataEdit]=useState({
        Title:"",
        name:"",
        email:"",
        mobile:"",
        category:"",
       discription:"",
       createAt:"",
       id:"",
    })
    const [dataList,setDataList]=useState([])
    
    
    const  getFetchData =async ()=>{
        const  data = await axios.get("/data")
        console.log(data);
        if(data.data.success){
            setDataList(data.data.data)
        }
    }
    useEffect(()=>{
        getFetchData();
    },[])
   // console.log(dataList);
const handleupdate =async()=>{
    const  data = await axios.put("/update")
    if(data.data.success){
        setDataList(data.data.data)
    }

}
    return (
        <div className='tableContainer'>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Action</th>   
                </tr>
            </thead>
           <tbody>
            {dataList.map((el,i)=>{
                return(
                    <tr key={el._id}>
                    <td>{i+1}</td>
                    <td>{el.Title}</td>
                    <td>{el.category}</td>
                    <td>{el.name} </td>
                    <td>{el.email}</td>
                    <td>{el.status}</td>
                    <td>{el.createdAt}</td>
                    <td><Button className="btn-view" variant="primary" onClick={()=>handleupdate(el._id)}>
                        View
                        </Button></td>
                    </tr>
                )
            })}
           </tbody>
        </Table>
        </div>
    );
};

export default AdminDashboard;