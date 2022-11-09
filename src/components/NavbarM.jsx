import { Button, HStack, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ContextAPI";
const NavbarM = ({ handleDrawer }) => {
  const { state, setState } = useContext(AppContext);

  return (
    <HStack
      bgColor={"#07041b"}
      px={["0", "16"]}
      color={"white"}
      justifyContent={"center"}
      // alignItems={["center", "center"]}
      w={"full"}
      zIndex={"6"}
      // h={["12vh", "12vh"]}
      h={"12vh"}
      // h={state ? "100vh" : "12vh"}
      pos={"absolute"}
      top={state ? "0" : "-100vh"}
      // transform={"translateY(100vh)"}
    >
      <Stack
        // alignSelf={"center"}
        display={state ? "flex" : "none"}
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
          onClick={handleDrawer}
        >
          <Link to="/">HOME</Link>
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
          onClick={handleDrawer}
        >
          <Link to="/coins">COINS</Link>
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
          onClick={handleDrawer}
        >
          <Link to="/exchanges">EXCHANGES</Link>
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
          onClick={handleDrawer}
        >
          <Link to="/news">NEWS</Link>
        </Button>
      </Stack>
    </HStack>
  );
};

export default NavbarM;
