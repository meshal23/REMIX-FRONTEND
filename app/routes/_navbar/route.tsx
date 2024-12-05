import { Outlet } from "@remix-run/react";
import SidebarLayout from "./layout";

// here goes the navbar
const route = () => {
  return (
    <div className="min-h-screen">
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    </div>
  );
};

export default route;
