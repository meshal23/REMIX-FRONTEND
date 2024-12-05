import { Outlet } from "@remix-run/react";

import DashboardLayout from "./DashboardLayout";

function Dashboard() {
  return (
    <section className=" w-full   overflow-hidden min-h-screen">
      <DashboardLayout />
      <Outlet />
    </section>
  );
}

export default Dashboard;
