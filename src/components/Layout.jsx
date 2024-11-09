import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppNavbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
