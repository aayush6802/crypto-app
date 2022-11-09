import { HStack, Text, Button, Stack, useMediaQuery } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import App from "../App.js";
import "../styles/responsive.css";
import { AppContext } from "../ContextAPI.js";
import {} from "../styles/styles.js";
import { AiFillCloseCircle, AiOutlineBars } from "react-icons/ai";
import AppDrawer from "./AppDrawer.jsx";
import Navbar from "./NavbarM.jsx";
import NavbarM from "./NavbarM.jsx";
import NavbarD from "./NavbarD.jsx";
import { render } from "@testing-library/react";

const Header = () => {
  console.log(window.innerWidth);
  const { deviceWidth, setDeviceWidth } = useContext(AppContext);
  const { state, setState } = useContext(AppContext);
  const [counter, setCounter] = useState(1);
  // const { mobileView, setMobileView } = useContext(AppContext);
  const [mobileView] = useMediaQuery("(min-width: 480px)");
  const handleDrawer = (e) => {
    setState(!state);
  };

  // useEffect(() => {
  //   setDeviceWidth(window.innerWidth);
  //   const handleResize = () => {
  //     setDeviceWidth(deviceWidth);
  //     if (deviceWidth <= 480) {
  //       setMobileView(true);
  //     } else {
  //       setMobileView(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [state]);
  useEffect(() => {
    console.log(mobileView);
  });
  return (
    <>{mobileView ? <NavbarD /> : <AppDrawer handleDrawer={handleDrawer} />}</>
  );
};

export default Header;
