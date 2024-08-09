
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

axios.defaults.baseURL ="http://localhost:3000/api/auth"
const  Query = () => {
    const [addSection,setAddSection]=useState(false);
    const [formData,setFormData]=useState({
       
        name:"",
        email:"",
        mobile:"",
        query:"",
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
        const  data = await axios.post("/createquery",formData)
        console.log(data);
        if(data.data.success){
            setAddSection(false)
            alert(data.data.message)
        }
    }
  
    return (
      
         <div className='backWrapper'>
            <div className='loginWrapper border rounded shadow-sm p-4'>
                <h2 className='text-center mb-4'>Create Query </h2>
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
              <Form.Group className='mb-3' controlId='formQuery'>
                  <Form.Label>Raise Query</Form.Label>
                  <Form.Control as='textarea' placeholder='Enter Your Query' style={{height:"80px"}} name='query' required   onChange={handleOnchange}/>
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

export default Query;