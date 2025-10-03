import { Outlet } from "react-router-dom";
import Header from "../components/header.js";

function PrivateLayout() {
  return (
    <>
      <Header /> 
      <Outlet /> 
    </>
  );
}

export default PrivateLayout;
