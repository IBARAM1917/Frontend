
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { UserContex } from '../Context/Useercontext';

axios.defaults.baseURL ="https://backend-1-1bsn.onrender.com/api/auth"
const Create = () => {
    const{addSection,setAddSection} = useContext(UserContex);
    const [Section,setSection]=useState(false);
    const [formData,setFormData]=useState({
        Title:"",
        name:"",
        email:"",
        mobile:"",
        category:"",
       discription:"",
    })
    
    const handleOnchange =(e)=>{
        const {value,name}= e.target
        setFormData((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    }
    const  handleSubmit = async(e) =>{
        e.preventDefault();
        const  data = await axios.post("/create",formData)
        console.log(data);
        if(data.data.success){
            setSection(false)
            alert(data.data.message)
        }
    }
  
    return (
      
         <div className='backWrapper'>
            <div className='loginWrapper border rounded shadow-sm p-4'>
                <h2 className='text-center mb-4'>Create Service Request</h2>
                <Button onClick={()=>setAddSection(true)}>Add</Button>
                {
                 addSection &&(
                
              <Form  onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Name' name='name' required  onChange={handleOnchange}/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' name='email' required  onChange={handleOnchange}/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formMobile'>
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type='text' placeholder='Mobile' name='mobile' required  onChange={handleOnchange}/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formCategory'>
                  <Form.Label>Category</Form.Label>
                 <Form.Select defaultValue={"default"} name='category' required  onChange={handleOnchange}>
                 <option value="default" disabled >
                  Select Category
                 </option>
                 <option value="Maintenance">Maintenance</option>
                 <option value="Housekeeping">Housekeeping</option>
                 <option value="Enquiry">Enquiry</option>
                 </Form.Select> 
              </Form.Group>
              <Form.Group className='mb-3' controlId='formTitle'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control type='text' placeholder='Title' name='Title' required  onChange={handleOnchange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formDescription'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as='textarea' placeholder='Description' style={{height:"80px"}} name='discription' required   onChange={handleOnchange}/>
              </Form.Group>

              <Button value="primary" type='submit' className='w-100'>
                  Submit
              </Button>
            
          </Form>

                  
                )}
               
            </div>
          
        </div>
        
       
    );
};

export default Create;