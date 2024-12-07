import { Outlet } from "@remix-run/react";

const AuthLayout = () => {
  return (
    <section>
      <div>AuthLayout</div>
      <Outlet />
    </section>
  );
};

export default AuthLayout;
