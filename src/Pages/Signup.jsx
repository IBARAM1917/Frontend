import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";


const Signup = () => {
  const [formData, setFromData] = useState({});
  const[loading,setLoading]=useState(false);
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate =useNavigate();

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.id]: e.target.value.trim() });
   // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
        return  setErrorMessage("Please fill out the fields");
    }
    try{
        setLoading(true);
        setErrorMessage(null)
    const response =await fetch('http://localhost:3000/api/auth/register-user',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    const data =await response.json();
    if(data.success === false){
        return setErrorMessage(data.message)
    }
    if(response.ok){
        navigate('/');
    }
    }catch(error){
      setErrorMessage(error.message)
      setLoading(false)
    }
  };
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start px-4 ">
          <img
            src="https://img.freepik.com/free-vector/jewellery-store-with-seller-customer_33099-1719.jpg"
            className="img-thumbnail "
            alt="Contact Us Illustration"
          />
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your User Name"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter your Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="redToYellow" type="submit" disabled={loading}>
            {loading ?(
                <>
                  <Spinner color="warning" aria-label="Warning spinner example" size="sm" />
                  <span className="pl-3">Loading....</span>
                  </>
            ):(
                'Sign Up'
            )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-6">
            <span>Already Have An Account ?</span>
            <Link to="/" className="text-orange-700">
              SignIn
            </Link>
            {errorMessage && (
                  <Alert color="warning" withBorderAccent className="mt-5">
                  <span>
                    <span className="font-medium me-2">OOPS!</span>{errorMessage}
                  </span>
                </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
