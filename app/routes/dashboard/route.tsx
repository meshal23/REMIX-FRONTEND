import { Outlet } from "@remix-run/react";

function Dashboard() {
  return (
    <section>
      <div className="">Dashboard</div>
      <Outlet />
    </section>
  );
}

export default Dashboard;
