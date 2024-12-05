// import { useState } from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  // useSidebar,
} from "../../components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const {
  //   state,
  //   open,
  //   setOpen,
  //   openMobile,
  //   setOpenMobile,
  //   isMobile,
  //   toggleSidebar,
  // } = useSidebar();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
