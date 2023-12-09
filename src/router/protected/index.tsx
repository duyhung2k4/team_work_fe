import React from "react";
import { Outlet } from "react-router";

const Protected: React.FC = () => {
  return (
    <Outlet/>
  )
}

export default Protected;