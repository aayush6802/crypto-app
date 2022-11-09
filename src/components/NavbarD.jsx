import { Button, HStack, Image, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink, NavNavLink } from "react-router-dom";
import { AppContext } from "../ContextAPI";
import logo from "../assets/coin-bash-logo2.png";
const NavbarD = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <HStack
      bgColor={"#07041b"}
      px={["0", "16"]}
      color={"white"}
      justifyContent={"space-between"}
      // alignItems={["center", "center"]}
      w={"full"}
      zIndex={"6"}
      // h={["12vh", "12vh"]}
      h={"12vh"}
    >
      <HStack>
        <NavLink to="/">
          <Image src={logo} w={"160px"} />
        </NavLink>
      </HStack>
      <Stack
        // alignSelf={"center"}
        gap={["20px", "20px"]}
        direction={["column", "row"]}
        w={"fit-content"}
        className="navLinks"

      // background={"red"}
      >
        <Button
          fontSize={["8px", "15px"]}
          background={"transparent"}
          borderRadius={"0px"}
          css={{
            "&:hover": {
              background: "transparent",
              borderBottom: "2px solid #f7542f",
            },
            "&:active": {
              borderBottom: "2px solid #f7542f",
            },
          }}
        >
          <NavLink to="/" _activeLink={{ color: "orange" }}>
            HOME
          </NavLink>
        </Button>
        <Button
          fontSize={["8px", "15px"]}
          background={"transparent"}
          borderRadius={"0px"}
          css={{
            "&:hover": {
              background: "transparent",
              borderBottom: "2px solid #f7542f",
            },
            "&:active": {
              borderBottom: "2px solid #f7542f",
            },
          }}
        >
          <NavLink to="/coins">COINS</NavLink>
        </Button>
        <Button
          fontSize={["8px", "15px"]}
          background={"transparent"}
          borderRadius={"0px"}
          css={{
            "&:hover": {
              background: "transparent",
              borderBottom: "2px solid #f7542f",
            },
            "&:active": {
              borderBottom: "2px solid #f7542f",
            },
          }}
        >
          <NavLink to="/exchanges">EXCHANGES</NavLink>
        </Button>
        <Button
          fontSize={["8px", "15px"]}
          background={"transparent"}
          borderRadius={"0px"}
          css={{
            "&:hover": {
              background: "transparent",
              borderBottom: "2px solid #f7542f",
            },
            "&:active": {
              borderBottom: "2px solid #f7542f",
            },
          }}
        >
          <NavLink to="/news">NEWS</NavLink>
        </Button>
      </Stack>
    </HStack>
  );
};

export default NavbarD;
