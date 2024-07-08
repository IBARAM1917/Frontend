import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { useAccordionButton } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../Redux/Slice/themeSlice";
import { signOutSuccess } from "../Redux/Slice/userSlice";
 


const Header = () => {
  const path = useLocation().pathname;
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const { currentuser } = useSelector((state) => state.user);
  const {theme} =useSelector((state)=>state.theme);
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
        <span className="px-2 py-2 bg-gradient-to-r from-red-300  via-red-300 to-yellow-500 rounded-lg text-white">
          IBA
        </span>
        SHOP
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Serch Products...."
          gradientDuoTone="redToYellow"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button
        className="w-15 h-10 lg:hidden text-dark"
        gradientDuoTone="redToYellow"
        outline
        pill
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-15 h-10 hidden sm:inline text-dark"
          gradientDuoTone="redToYellow"
          outline
          pill
          onClick={()=>dispatch(toggleTheme())}
        >
         {theme === "light"?(
         <FaMoon />
         ):(
          <FaSun />
         ) }
        </Button>
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentuser.rest.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentuser.rest.username}</span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"} >
            <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item  onClick={handleSignout} >Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signup">
            <Button
              className="rounded-xl"
              gradientDuoTone="redToYellow"
              outline
            >
              SignUp
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/productlist"} as={"div"}>
          <Link to="/productlist">Products</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/review"} as={"div"}>
          <Link to="/review">Review</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
