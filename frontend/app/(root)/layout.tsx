import Navbar from "@/components/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
