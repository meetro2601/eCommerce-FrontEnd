import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileMenu from "../Header/MobileMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <MobileMenu></MobileMenu>
      <main className="main">
          <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
