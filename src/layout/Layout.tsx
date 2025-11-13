import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
