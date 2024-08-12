import { Spin } from 'antd';
import { data } from 'autoprefixer';
import axios from 'axios';
import { Table } from 'flowbite-react';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

axios.defaults.baseURL ="https://backend-1-1bsn.onrender.com/api/auth"
const Read = () => {
    const [data,setData]=useState({});
    const [dataList,setDataList]=useState(true)
   const params = useParams();
   const {id} =params;
   const [formData,setFormData]=useState({
    Title:"",
    name:"",
    email:"",
    mobile:"",
    category:"",
   discription:"",
})
  
    const  getFetchData =async ()=>{
        try{
            setDataList(true);
            const  data = await axios.get(`/data/${id}`);
              
            if(data.data.success === 200){
                setData(data.data.data)
            
            }
        }
        catch(error){
            toast.error(error.response.data.message);

        }finally{
            setDataList(false);
        }
   
    }
    useEffect(()=>{
if (id) getFetchData();
    },[id])
   
    const  handleSubmit = async(e) =>{
        e.preventDefault();
        const  data = await axios.get("/data",formData)
        console.log(data);
        if(data.data.success){
            setAddSection(false)
            alert(data.data.message)
        }
    }
       
    


    return (
       <>
       {dataList ?(
        <div style={{textAlign:"center",marginTop:"50px"}}>
        <Spin size='large' tip="Loading..." />
        </div>
       ):(
        <div className='details-wrapper'>
            <Table striped borderded hover style={{tableLayout:"fixed",width:"100%"}} >
                <theed>
                    <tr>
                        <th style={{width:"30%"}}>Item</th>
                        <th style={{width:"70%"}}>Value</th>
                    </tr>
                </theed>
                <tbody> 
                {Object.keys(data).map((e,i)=>{
                    return(
                        <tr key={i}>
                            <td>{e.toUpperCase()}</td>
                            <td>{data[e] !== null ? data[e] :"-"}</td>
                        </tr>
                    );;
                })}
             </tbody>
            </Table>

        </div>
       )}
       </>
    );
};

export default Read;