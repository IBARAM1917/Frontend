import {
  faCheckCircle,
  faCirclePlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import Create from "../Components/Create";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AdminDashboard from "../Components/AdminDashboard";
import Reviews from "../Components/Reviews";
import Query from "../Components/Query";
import Frequentlyaked from "../Components/Frequentlyasked";

const { Header, Content, Sider } = Layout;
const items = [
  {
    key: "1",
    icon: <FontAwesomeIcon icon={faHouse} />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FontAwesomeIcon icon={faCirclePlus} />,
    label: "Create Request",
  },
  {
    key: "3",
    icon: <FontAwesomeIcon icon={faCheckCircle} />,
    label: "Check Reviews",
  },
  {
    key:"4",
    icon:<FontAwesomeIcon icon={faCirclePlus} />,
    label:"Create Query",
  },
  {
    key:"5",
    icon:<FontAwesomeIcon icon={faCheckCircle} />,
    label:"Check FAQ",
  },
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [logoutClicked, setLagoutClicked] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(items[0]);
  const navigate = useNavigate();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleLogout = () => {
    setLagoutClicked(true);

    toast
      .promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        }),
        {
          loading: "Logging out...",
          success: "Logout Successfully",
          error: "Logout Failed",
        }
      )
      .then(() => {
        navigate("/");
      });
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  let componentToRender;

  if (selectedMenuItem.label === "Dashboard") {
    componentToRender = <AdminDashboard />;
  } else if (selectedMenuItem.label === "Create Request") {
    componentToRender = <Create />;
  }else if(selectedMenuItem.label === "Check Reviews") {
    componentToRender = <Reviews />
  }else if(selectedMenuItem.label === "Create Query"){
    componentToRender = <Query />
  }else if(selectedMenuItem.label === "Check FAQ"){
    componentToRender = <Frequentlyaked />
  }
  else {
    componentToRender = <div>No component selected</div>;
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider 
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
       style={{ backgroundColor: "white" }}
       >
        <div style={{ height: "25%" }}>
          <img
            src="https://t3.ftcdn.net/jpg/05/12/70/90/360_F_512709095_o0bDOmbAUKf9ltb8Pw9eYdrkriemZ822.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ height: "90%" }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleMenuItemClick(item)}
            >
              <Link to={item.Link} style={{textDecoration: "none" }}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="side-layout">
        <Header 
        className="site-layout-background"
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          padding:"0 16px",
        }}
        >
          <div style={{Color:"#fff",fontSie:"17px"}}>
            {selectedMenuItem.label}
          </div>
         
        </Header>
        <Content style={{margin:"0 16px",overflowY:"auto"}}>
          <div style={{margin:"16px 0"}}>
            <Breadcrumb>
            <Breadcrumb.Item>{`Maintain ${selectedMenuItem.label}`}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div 
          className="site-layout-background"
          style={{
            padding:24,
            minHeight:360,
            background:"#fff",
            borderRadius:"5px",
            overflowY:"auto",
            maxHeight:"calc(100vh-130px)",
          }}
          >
            {componentToRender}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
