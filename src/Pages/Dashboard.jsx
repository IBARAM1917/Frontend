import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import DashboardSidebar from "../Components/DashboardSidebar";
import Frequentlyaked from "../Components/Frequentlyasked";
import Dashboarddesigns from "../Components/Dashboarddesigns";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabUrl = urlParams.get("tab"); //tab = profile
    if (tabUrl) {
      setTab(tabUrl); //profile
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="md:w-58">
        <DashboardSidebar />
      </div>
      {tab === "designs" && <Dashboarddesigns />}
      {tab === "faq" && <Frequentlyaked />}
    </div>
  );
};

export default Dashboard;
