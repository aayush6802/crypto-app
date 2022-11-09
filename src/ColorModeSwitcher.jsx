import React, { useContext } from "react";
import { useColorMode, useColorModeValue, IconButton, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AppContext } from "./ContextAPI";

const ColorModeSwitcher = (props) => {
  // const { theming, setTheming } = useContext(AppContext);
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  console.log(props);
  return (
    <IconButton
      variant="unstyled"
      color="dark"
      pos={"absolute"}
      top={["17px",'35px']}
      right={["60px",'30px']}
      size={"70px"}
      // bg={'yellow'}
      p={'15px'}
      onClick={() => {
        toggleColorMode();
        // setTheming(!theming);
      }}
      icon={<SwitchIcon color="gray"/>}
      zIndex={"overlay"}
    />
  );
};

export default ColorModeSwitcher;
