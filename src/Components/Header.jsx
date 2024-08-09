import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useAccordionButton } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOutSuccess } from "../Redux/Slice/userSlice";

 


const Header = () => {

  const path = useLocation().pathname;
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const { currentuser } = useSelector((state) => state.user);
 
  const handleSignout =()=>{
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
    navigate("/")
  }
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-blue-700  rounded-lg text-white">
          IBA
        </span>
        Service
      </Link>
      
      
      <div className="flex gap-2 md:order-2">
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentuser.rest.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentuser.rest.username}</span>
            </Dropdown.Header>
            <DropdownDivider />
            <Dropdown.Item  onClick={handleSignout} >Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signup">
            <Button
              className="rounded-xl"
          
              outline
            >
              SignUp
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
     
    </Navbar>
  );
};

export default Header;
