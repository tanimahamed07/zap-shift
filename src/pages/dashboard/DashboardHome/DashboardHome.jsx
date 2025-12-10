import React from "react";
import useRole from "../../../hooks/useRole";
import AdminDashboardHome from "./AdminDashboardHome";
import RiderDashboard from "./RiderDashboard";
import UserDashboardHome from "./UserDashboardHome";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  console.log(role);

  if (roleLoading) {
    return <span>Loading...</span>;
  }

  if (role === "admin") {
    return <AdminDashboardHome />;
  } else if (role === "rider") {
    return <RiderDashboard />;
  } else {
    return <UserDashboardHome />;
  }
};

export default DashboardHome;
