import React from "react";

import ManagerCard from "../components/uaCard";
import AuthService from "../utils/auth";

import DashboardContent from "../components/Dashboard/DashboardContent";

const Dashboard = () => {
  return <>{AuthService.loggedIn() ? <DashboardContent /> : <ManagerCard />}</>;
};
export default Dashboard;
